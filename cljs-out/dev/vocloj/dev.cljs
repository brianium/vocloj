(ns ^:figwheel-hooks vocloj.dev
  (:require [integrant.core :as ig]
            [reagent.core :as r]
            [reagent.dom :as rdom]
            [vocloj.dev.recognizer :as recog :refer [recognizer]]
            [vocloj.dev.synthesizer :refer [synthesizer]]
            [vocloj.web :as web]))

;;; Demo application

(defn nav
  [screen *state]
  [:nav.app_nav
   [:ul
    [:li {:class    ["nav-item" (when (= screen :synth) "nav-item--active")]
          :on-click #(swap! *state assoc :nav/screen :synth)}
     "Synthesis"]
    [:li {:class    ["nav-item" (when (= screen :recognition) "nav-item--active")]
          :on-click #(swap! *state assoc :nav/screen :recognition)}
     "Recognition"]]])

(defn application
  [*state synth recognition recog-handler]
  (let [screen (:nav/screen @*state)]
    [:div.application
     [nav screen *state]
     (if (= screen :synth)
       [synthesizer *state synth]
       [recognizer *state recognition recog-handler])]))

;;; Dev System

(def config
  {::state          {:nav/screen       :synth
                     :synth/voice-id   "Alex"
                     :synth/text       ""
                     :synth/pitch      1.0
                     :synth/rate       1.0
                     :synth/volume     1.0
                     :recog/transcript nil}
   ::synthesizer    {}
   ::recognizer     {:options {:continuous? true}}
   ::recog-handler  {:state  (ig/ref ::state)}
   ::ui             {:recog-handler (ig/ref ::recog-handler)
                     :state         (ig/ref ::state)
                     :synth         (ig/ref ::synthesizer)
                     :recognizer    (ig/ref ::recognizer)}})



(defmethod ig/init-key ::recog-handler [_ {:keys [state]}]
  (fn [message]
    (recog/handler message state)))

(defmethod ig/init-key ::recognizer [_ {:keys [options]}]
  (vocloj.web/create-recognizer options r/atom))

(defmethod ig/init-key ::state [_ initial]
  (r/atom initial))

(defmethod ig/resume-key ::state [_ _ _ prev]
  prev)

(defmethod ig/init-key ::synthesizer [_ _]
  (web/create-synthesizer r/atom))

(defmethod ig/halt-key! ::synthesizer [_ synth]
  (web/remove-listeners synth))

(defmethod ig/init-key ::ui [_ {:keys [state synth recognizer recog-handler]}]
  (rdom/render 
   [application state synth recognizer recog-handler]
   (.getElementById js/document "application")))

(defonce system (ig/init config))

;;; Development

(defn restart []
  (ig/suspend! system)
  (ig/resume config system))

(defn ^:after-load after-reload []
  (restart))
