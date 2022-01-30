(ns ^:no-doc vocloj.web.impl
  (:require [clojure.string :as string]
            [cljs.core.async :as async]
            [vocloj.core :as core]
            [vocloj.protocols :refer [StateMachine Lifecycle Suspendable Initializable SynthesizesSpeech ReceivesSpeech]]
            [vocloj.state :as state]))

(defn current-data
  "Utility for getting data from a state machine"
  [sm]
  (-> sm core/current-state :data))

(defn in
  "Utility for acheiving roughly the same behavior as the JavaScript 'in' operator"
  [property obj]
  (->> (js-keys obj)
       (array-seq)
       (filter #(= property %))
       (seq)
       (some?)))

(defn get-speech-channel*
  [speech-receiver]
  (-> (core/current-state speech-receiver)
      (:data)
      (:speech-ch)))

(defn get-stop-channel*
  [speech-receiver]
  (-> (core/current-state speech-receiver)
      (:data)
      (:stop-ch)))

(defn listen*
  [speech-receiver]
  (core/start
   (core/init speech-receiver)))

;;; Implementation of a speech recognizer backed by native web apis

(defn create-recognition*
  "Return a browser native recognition object"
  []
  (if (exists? js/SpeechRecognition)
    (js/SpeechRecognition.)
    (js/webkitSpeechRecognition.)))

(defn create-recognition
  "Create a browser native SpeechRecognition object and configure
   it"
  [{:keys [continuous?]}]
  (let [recognition (create-recognition*)]
    (when continuous?
      (set! (.-continuous recognition) true))
    recognition))

(defn ->result
  "Maps a speech recognition events to hash-maps"
  [e]
  (->> (.-results e)
       (array-seq)
       (mapcat array-seq)
       (map #(hash-map :transcript (string/trim (.-transcript %)) :confidence (.-confidence %)))))

(defrecord WebSpeechRecognizer [state-machine options]
  StateMachine
  (-transition
    [_ event payload]
    (core/transition state-machine event payload))

  (-add-effect
    [_ key fn-2]
    (core/add-effect state-machine key fn-2))

  (-current-state
    [_]
    (core/current-state state-machine))

  Initializable
  (-init
    [this]
    (let [recognition    (create-recognition options)
          speech-ch      (async/chan 1)
          on-result      #(async/put! speech-ch (->result %))]
      (core/transition this :init {:recognition          recognition
                                   :speech-ch            speech-ch
                                   :listener/result      on-result})))

  Lifecycle
  (-start
    [this]
    (let [stop-ch (async/chan)]
      (core/transition this :start (-> this
                                       current-data
                                       (assoc :stop-ch stop-ch)))))

  (-stop
    [this]
    (core/transition this :stop))

  ReceivesSpeech
  (-get-speech-channel
    [this]
    (get-speech-channel* this))

  (-get-stop-channel
    [this]
    (get-stop-channel* this))

  (-listen
    [this]
    (listen* this)))

(defn on-recognition-ready
  "When the speech recognizer switches to a ready state, add necessary
   event listeners to the speech recognition object"
  [_ _ {{:keys [recognition] :listener/keys [result]} :data}]
  (.addEventListener recognition "result" result))

(defn on-recognition-listening
  "When the speech recognizer switches to a listening state, start
   the recognition object"
  [_ _ {{:keys [recognition]} :data}]
  (.start recognition))

(defn on-recognition-stop
  "When the speech recognizer switches to a stopped state, abort recognition
   and remove event listeners"
  [_ {{:keys [recognition stop-ch] :listener/keys [result]} :data} _]
  (.abort recognition)
  (.removeEventListener recognition "result" result)
  (async/put! stop-ch :stop))

(defn create-recognizer
  ([]
   (create-recognizer {}))
  ([options]
   (create-recognizer options atom))
  ([options atom-fn]
   (-> (state/create-recognizer-state-machine atom-fn)
       (->WebSpeechRecognizer options)
       (core/add-effect :init :dormant :ready on-recognition-ready)
       (core/add-effect :start :ready :listening on-recognition-listening)
       (core/add-effect :stop :listening :dormant on-recognition-stop))))

;;; Implementation of a speech synthesis backed by native web apis

(defn get-voices []
  (let [voices (.getVoices js/speechSynthesis)]
    (->> voices
         (array-seq)
         (reduce (fn [voice-map voice]
                   (assoc voice-map (.-voiceURI voice) voice)) {}))))

(defrecord WebSpeechSynthesizer [state-machine]
  StateMachine
  (-transition
    [_ event payload]
    (core/transition state-machine event payload))

  (-add-effect
    [_ key fn-2]
    (core/add-effect state-machine key fn-2))

  (-current-state
    [_]
    (core/current-state state-machine))

  Initializable
  (-init
    [this]
    (let [controller        (js/AbortController.)
          signal            (.-signal controller)
          on-voices-changed #(core/transition this :change-voices (-> this
                                                                      current-data
                                                                      (assoc :voices (get-voices))))]
      (core/transition this :init {:voices                  (get-voices)
                                   :voice-change-controller controller})
      (when (in "onvoiceschanged" js/speechSynthesis)
        (.addEventListener js/speechSynthesis "voiceschanged" on-voices-changed #js {:signal signal}))))

  Suspendable
  (-pause
    [this]
    (core/transition this :pause current-data))

  (-resume
    [this]
    (core/transition this :resume current-data))

  SynthesizesSpeech
  (-cancel [_] (.cancel js/speechSynthesis))

  (-speak
    [this voice-id {:keys [text lang pitch rate volume]}]
    (let [utterance (js/SpeechSynthesisUtterance. text)
          voice     (-> this current-data :voices (get voice-id))]
      (set! (.-voice utterance) voice)
      (when (some? lang)
        (set! (.-lang utterance) lang))
      (when (some? pitch)
        (set! (.-pitch utterance) pitch))
      (when (some? rate)
        (set! (.-rate utterance) rate))
      (when (some? volume)
        (set! (.-volume utterance) volume))
      (core/transition this :speak (-> this
                                       (current-data)
                                       (update :utterances (fnil conj #queue []) utterance))))))

(defn on-pause []
  (.pause js/speechSynthesis))

(defn on-resume []
  (.resume js/speechSynthesis))

(defn on-speak
  "Actually responsible for initiating speech. Utterances are stored
   in a stateful queue solely to prevent garbage collection in browsers like Safari.
   The utterance 'end' event is used to transition the synthesizer back to a ready state. If the
   utterance is garbage collected before the end event is fired, the synthesizer will never
   return to a ready state"
  [synth _ {{:keys [utterances]} :data}]
  (let [utterance (peek utterances)]
    (.addEventListener utterance "end" #(core/transition synth :end (-> synth
                                                                        (current-data)
                                                                        (update :utterances pop))))
    (.speak js/speechSynthesis utterance)))

(defn create-synthesizer
  ([]
   (create-synthesizer atom))
  ([atom-fn]
   (-> (state/create-synthesis-state-machine atom-fn)
       (->WebSpeechSynthesizer)
       (core/add-effect :speak :ready :speaking on-speak)
       (core/add-effect :pause :speaking :paused on-pause)
       (core/add-effect :resume :paused :speaking on-resume)
       (core/init))))

(defn remove-listeners
  "This is relevant only to web synthesizers. There is a single
   speechSynthesis object available to bind to for voice change events. Multiple
   bindings are fairly benign, but this provides a means to cleanly unbind voicechange
   events from the global object"
  [web-synth]
  (let [data       (current-data web-synth)
        controller (:voice-change-controller data)]
    (.abort controller)))

;;; Implementation of a stream of microphone data via navigator.mediaDevices.getUserMedia

(defn create-speech-channels
  "A microphone may send audio events after it has been \"stopped\". This function
  creates the typical speech channel, but creates a mult so the stream implementation is
  able to block for data events before signaling the stop channel"
  [sz]
  (let [speech-write (async/chan sz)
        speech-read  (async/chan sz)
        speech-ping  (async/chan sz)
        mult         (async/mult speech-write)]
    (async/tap mult speech-read)
    (async/tap mult speech-ping)
    [speech-write speech-read speech-ping]))

(defrecord WebMicrophoneStream [state-machine]
  StateMachine
  (-transition
    [_ event payload]
    (core/transition state-machine event payload))

  (-add-effect
    [_ key fn-2]
    (core/add-effect state-machine key fn-2))

  (-current-state
    [_]
    (core/current-state state-machine))

  Initializable
  (-init
    [this]
    (let [[write read ping]   (create-speech-channels 1)
          error-ch            (async/chan 1)
          stop-ch             (async/chan)
          ready-ch            (async/chan)
          media-devices       (.. js/navigator -mediaDevices)

          on-dataavailable    #(async/put! write (.-data %))

          on-end              #(core/transition this :end current-data)

          on-mute             #(core/transition this :mute current-data)

          on-unmute           #(core/transition this :unmute current-data)

          on-error            #(core/transition this :error {:error %})

          on-pause            #(core/transition this :pause current-data)

          on-resume           #(core/transition this :resume current-data)

          promise             (.getUserMedia media-devices #js {:audio true})]
      (core/transition this :init {:error-ch               error-ch
                                   :speech-ch              read
                                   :speech-ping            ping
                                   :stop-ch                stop-ch
                                   :ready-ch               ready-ch
                                   :listener/dataavailable on-dataavailable
                                   :listener/end           on-end
                                   :listener/error         on-error
                                   :listener/pause         on-pause
                                   :listener/resume        on-resume
                                   :listener/mute          on-mute
                                   :listener/unmute        on-unmute})
      (-> promise
          (.then #(async/put! ready-ch %))
          (.catch #(core/transition this :error {:error %})))))

  Lifecycle
  (-start
    [this]
    (let [{:keys [ready-ch]} (current-data this)]
      (async/go
        (let [stream (async/<! ready-ch)]
          (core/transition this :start (-> this
                                           current-data
                                           (merge {:media/recorder     (js/MediaRecorder. stream)
                                                   :media/audio-tracks (array-seq (.getAudioTracks stream))
                                                   :media/stream       stream})))))))

  (-stop
    [this]
    (let [{:media/keys [recorder]
           :keys       [speech-ping]} (current-data this)
          timeout      (async/timeout 1000)]
      (.stop recorder) ; Stop the recorder here - as opposed to a side effect - because data events come AFTER the recorder is stopped.
      (async/go []
                (async/alts! [speech-ping timeout]) ; Wait for any last bits of audio data to become available before stopping
                (core/transition this :stop current-data))))

  ReceivesSpeech
  (-get-speech-channel
    [this]
    (get-speech-channel* this))

  (-get-stop-channel
    [this]
    (get-stop-channel* this))

  (-listen
    [this]
    (listen* this)))

(defn on-microphone-recording
  [_ _ {{:listener/keys [dataavailable error end mute unmute pause resume]
         :media/keys    [recorder audio-tracks]} :data}]
  (.addEventListener recorder "dataavailable" dataavailable)
  (.addEventListener recorder "error" error)
  (.addEventListener recorder "pause" pause)
  (.addEventListener recorder "resume" resume)
  (doseq [track audio-tracks]
    (.addEventListener track "end" end)
    (.addEventListener track "mute" mute)
    (.addEventListener track "unmute" unmute))
  (.start recorder))

(defn on-microphone-stop
  [_ _ {{:media/keys [audio-tracks] :keys [stop-ch]} :data}]
  (doseq [track audio-tracks]
    (.stop track))
  (async/put! stop-ch :stop))

(defn on-microphone-muted
  [_ _ {{:media/keys [audio-tracks]} :data}]
  (doseq [track audio-tracks]
    (set! (.-enabled track) false)))

(defn on-microphone-unmute
  [_ _ {{:media/keys [audio-tracks]} :data}]
  (doseq [track audio-tracks]
    (set! (.-enabled track) true)))

(defn on-microphone-pause
  [_ _ {{:media/keys [recorder]} :data}]
  (.pause recorder))

(defn on-microphone-resume
  [_ _ {{:media/keys [recorder]} :data}]
  (.resume recorder))

(defn create-microphone-stream
  ([]
   (create-microphone-stream atom))
  ([atom-fn]
   (-> (state/create-microphone-stream-state-machine atom-fn)
       (->WebMicrophoneStream)
       (core/add-effect :start :ready :recording on-microphone-recording)
       (core/add-effect :stop #{:recording :paused :muted} :stopped on-microphone-stop)
       (core/add-effect :mute #{:recording :paused} :muted on-microphone-muted)
       (core/add-effect :unmute :muted :recording on-microphone-unmute)
       (core/add-effect :pause :recording :paused on-microphone-pause)
       (core/add-effect :resume :paused :recording on-microphone-resume))))
