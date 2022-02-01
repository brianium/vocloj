(ns vocloj.web.impl.microphone
  "Implementation details for microphone access. Contains implementations of \"recorders\"
   responsible for doing something with audio data. Implementations may use browser MediaRecorder or
   AudioWorkletProcessor APIs"
  (:require [cljs.core.async :as async]
            [vocloj.core :as core]
            [vocloj.protocols :refer [Initializable Lifecycle Suspendable]]))

(defrecord MediaRecorder [recorder data]
  Initializable
  (-init
    [_]
    (let [{:listener/keys [dataavailable error pause resume]} data]
      (.addEventListener recorder "dataavailable" dataavailable)
      (.addEventListener recorder "error" error)
      (.addEventListener recorder "pause" pause)
      (.addEventListener recorder "resume" resume)))

  Lifecycle
  (-start
    [_]
    (.start recorder))

  (-stop
    [_]
    (.stop recorder))

  Suspendable
  (-pause
    [_]
    (.pause recorder))

  (-resume
    [_]
    (.resume recorder)))

(defn create-media-recorder
  "Create recorder backed by the native MediaRecorder API. This interface is a simple
   one useful for gathering intermittent chunks of microphone data as js Blob arrays. It
   is reliable, but not suited to streaming data in realtime from a microphone"
  [stream receiver ready-ch]
  (let [recorder (js/MediaRecorder. stream)
        data     (-> receiver core/current-state :data)]
    (->> data
         (->MediaRecorder recorder)
         (async/put! ready-ch))))

(defrecord WorkletRecorder [source worklet-node context data]
  Initializable
  (-init [_] nil)

  Lifecycle
  (-start
    [_]
    (let [{:listener/keys [dataavailable]} data
          port (.-port worklet-node)]
      (set! (.-onmessage port) #(dataavailable %))
      (.connect source worklet-node)
      (.connect worklet-node (.-destination context))))

  (-stop
    [_]
    (let [port (.-port worklet-node)]
      (set! (.-onmessage port) nil)
      (.disconnect source worklet-node)
      (.disconnect worklet-node (.-destination context))))

  Suspendable
  (-pause [_] nil)

  (-resume [_] nil))

(defn create-worklet-recorder
  "Create a recorder backed by an audio node. This interface uses an AudioWorkletProcessor to
   feed audio data in realtime to a MicrophoneStream. Each data payload is an array of Float32 samples"
  [stream receiver ready-ch options]
  (let [{:keys [context processor]} options
        data                        (-> receiver core/current-state :data)
        promise                     (-> context .-audioWorklet (.addModule processor))
        source                      (.createMediaStreamSource context stream)]
    (-> promise
        (.then #(let [worklet-node (js/AudioWorkletNode. context "stream-processor")
                      recorder     (->WorkletRecorder source worklet-node context data)]
                  (async/put! ready-ch recorder)))
        (.catch #(core/transition receiver :error {:error %})))))

(defn create-context
  "Create an AudioContext for use with a processor node"
  []
  (if (exists? js/AudioContext)
    (js/AudioContext.)
    (js/webkitAudioContext.)))

(defn create-recorder
  "Create an appropriate recorder interface based on the options
   given. Returns a channel that can be waited upon for the recorder implementation"
  [stream receiver options]
  (let [ready-ch (async/chan)]
    (if (:processor options)
      (create-worklet-recorder stream receiver ready-ch options)
      (create-media-recorder stream receiver ready-ch))
    ready-ch))
