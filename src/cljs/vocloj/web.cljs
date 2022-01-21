(ns vocloj.web
  "Provides speech recognition and synthesis via native web browser
   APIs"
  (:require [vocloj.web.impl :as impl]))

(defn create-recognizer
  "Create a speech recognizer backed by native browser apis"
  ([]
   (impl/create-recognizer))
  ([options]
   (impl/create-recognizer options))
  ([options atom-fn]
   (impl/create-recognizer options atom-fn)))

(defn create-synthesizer
  "Create a speech synthesizer backed by native browser apis"
  ([]
   (impl/create-synthesizer))
  ([atom-fn]
   (impl/create-synthesizer atom-fn)))

(defn remove-listeners
  "Remove global listeners from the single speechSynthesis object
   present on the browser window"
  [synth]
  (impl/remove-listeners synth))
