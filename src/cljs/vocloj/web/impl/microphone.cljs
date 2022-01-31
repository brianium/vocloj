(ns vocloj.web.impl.microphone
  "Implementation details for microphone access"
  (:require [vocloj.protocols :refer [Initializable Lifecycle Suspendable]]))

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
  "Create a media recorder component from microphone data in state"
  [stream data]
  (let [recorder (js/MediaRecorder. stream)]
    (->MediaRecorder recorder data)))
