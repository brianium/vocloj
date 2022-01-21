(ns vocloj.dev.recognizer
  (:require [vocloj.core :as vocloj]
            [vocloj.web :as web]
            [integrant.core :as ig]))

(defn log-state
  [_ old new]
  (println "Previous:")
  (println old)
  (println)
  (println "New:")
  (println new)
  (println))

;;; System

(def config
  {::recognizer  {:continuous? true}
   ::buttons     {:selector/start "#start-recognition"
                  :selector/stop  "#stop-recognition"}
   ::application {:buttons    (ig/ref ::buttons)
                  :recognizer (ig/ref ::recognizer)}})

(defmethod ig/init-key ::recognizer [_ options]
  (-> (web/create-recognizer options)
      (vocloj/add-effect :log log-state)))

(defmethod ig/init-key ::buttons [_ {:selector/keys [start stop]}]
  {:start (.querySelector js/document start)
   :stop  (.querySelector js/document stop)})

(defn report
  [results]
  (println results))

(defmethod ig/init-key ::application [_ {:keys [recognizer buttons]}]
  (let [on-start #(vocloj/listen recognizer report)
        on-stop  #(vocloj/stop recognizer)]
    (.addEventListener (:start buttons) "click" on-start)
    (.addEventListener (:stop buttons) "click" on-stop)
    {:start [on-start "click" (:start buttons)]
     :stop  [on-stop  "click" (:stop buttons)]}))

(defmethod ig/halt-key! ::application [_ {:keys [start stop]}]
  (let [[on-start start-event start-button] start
        [on-stop stop-event stop-button]    stop]
    (.removeEventListener start-button start-event on-start)
    (.removeEventListener stop-button stop-event on-stop)))

(defn start []
  [(ig/init config) config])
