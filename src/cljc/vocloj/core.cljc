(ns vocloj.core
  "vocloj aims to support uttering and understanding speech within the Clojure
   ecosystem"
  (:require [vocloj.core.impl :as impl]))

(defn add-effect
  ([sm key fn-3]
   (impl/add-effect sm key fn-3)
   sm)
  ([sm key from to fn-3]
   (impl/add-effect sm key from to fn-3)))

(defn transition
  ([sm event payload]
   (impl/transition sm event payload)
   sm)
  ([sm event]
   (impl/transition sm event)))

(defn current-state
  [sm]
  (impl/current-state sm))

(defn init
  [initializable]
  (impl/init initializable))

(defn start
  [recognizer]
  (impl/start recognizer))

(defn stop
  [recognizer]
  (impl/stop recognizer))

(defn listen
  ([recognizer]
   (impl/listen recognizer))
  ([recognizer handler]
   (impl/listen recognizer handler)))

(defn cancel
  [synth]
  (impl/cancel synth))

(defn pause
  [synth]
  (impl/pause synth))

(defn resume
  [synth]
  (impl/resume synth))

(defn speak
  [synth voice-id utterance]
  (impl/speak synth voice-id utterance))
