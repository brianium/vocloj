(ns vocloj.web.impl
  (:require [clojure.string :as string]
            [cljs.core.async :as async]
            [vocloj.core :as core :refer [StateMachine RecognizesSpeech]]
            [vocloj.state :as state]))

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
  (-transition [_ event payload]
    (core/transition state-machine event payload))

  (-add-effect [_ key fn-2]
    (core/add-effect state-machine key fn-2))

  (-current-state [_]
    (core/current-state state-machine))

  RecognizesSpeech
  (-init [this]
    (let [recognition    (create-recognition options)
          speech-ch      (async/chan 1)
          on-result      #(async/put! speech-ch [:result (->result %)])
          on-speechstart #(async/put! speech-ch [:speechstart true])]
      (core/transition this :init {:recognition          recognition
                                   :speech-ch            speech-ch
                                   :listener/result      on-result
                                   :listener/speechstart on-speechstart})))
  (-start [this]
    (let [stop-ch   (async/chan)
          data      (-> this core/current-state :data)]
      (core/transition this :start (merge data {:stop-ch stop-ch}))))

  (-stop [this]
    (core/transition this :stop nil)))

;;; Factory function and default side effects for the WebSpeechRecognizer

(defn on-ready
  "When the speech recognizer switches to a ready state, add necessary
   event listeners to the speech recognition object"
  [_ {{:keys [recognition] :listener/keys [result speechstart]} :data}]
  (.addEventListener recognition "result" result)
  (.addEventListener recognition "speechstart" speechstart))

(defn on-listening
  "When the speech recognizer switches to a listening state, start
   the recognition object"
  [_ {{:keys [recognition]} :data}]
  (.start recognition))

(defn on-stop
  "When the speech recognizer switches to a stopped state, abort recognition
   and remove event listeners"
  [{{:keys [recognition stop-ch] :listener/keys [result speechstart]} :data} _]
  (.abort recognition)
  (.removeEventListener recognition "result" result)
  (.removeEventListener recognition "speechstart" speechstart)
  (async/put! stop-ch :stop))

(defn create-recognizer
  ([]
   (create-recognizer {}))
  ([options]
   (create-recognizer (state/create-atom-state-machine) options))
  ([state-machine options]
   (-> (->WebSpeechRecognizer state-machine options)
       (core/add-effect :init :dormant :ready on-ready)
       (core/add-effect :start :ready :listening on-listening)
       (core/add-effect :stop :listening :dormant on-stop))))
