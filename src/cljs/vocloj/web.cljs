(ns vocloj.web
  (:require [vocloj.web.impl :as impl]))

(defn create-recognizer
  "Create a speech recognizer backed by native browser apis"
  ([]
   (impl/create-recognizer))
  ([options]
   (impl/create-recognizer options))
  ([state-machine options]
   (impl/create-recognizer state-machine options)))
