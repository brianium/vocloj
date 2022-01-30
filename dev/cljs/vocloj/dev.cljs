(ns ^:figwheel-hooks vocloj.dev
  (:require [integrant.core :as ig]
            [reagent.core :as r]
            [reagent.dom :as rdom]
            [vocloj.core :as volcloj.core]
            [vocloj.dev.microphone :as mic :refer [microphone]]
            [vocloj.dev.recognizer :as recog :refer [recognizer]]
            [vocloj.dev.synthesizer :as synth :refer [synthesizer]]
            [vocloj.web :as web]))

;;; Demo application

(defn nav
  [screen-id *state]
  (let [items [{:text "Synthesis" :screen :synth}
               {:text "Recognition" :screen :recognition}
               {:text "Microphone" :screen :microphone}]]
    [:nav.app_nav
     [:ul
      (for [{:keys [text screen]} items]
        ^{:key screen} [:li {:class    ["nav-item" (when (= screen screen-id) "nav-item--active")]
                             :on-click #(swap! *state assoc :nav/screen screen)}
                        text])]]))

(defn application
  [*state synth recognition recog-handler stream]
  (let [screen (:nav/screen @*state)]
    [:div.application
     [nav screen *state]
     (case screen
       :synth       [synthesizer *state synth]
       :recognition [recognizer *state recognition recog-handler]
       :microphone  [microphone *state stream])]))

;;; Dev System

(def config
  {::state          {:nav/screen       :synth
                     :mic/chunks       []
                     :mic/recordings   []
                     :synth/voice-id   nil
                     :synth/text       ""
                     :synth/pitch      1.0
                     :synth/rate       1.0
                     :synth/volume     1.0
                     :recog/transcript nil}
   ::synthesizer    {:state (ig/ref ::state)}
   ::recognizer     {:options {:continuous? true}}
   ::recog-handler  {:state  (ig/ref ::state)}
   ::microphone     {:state (ig/ref ::state)}
   ::ui             {:recog-handler (ig/ref ::recog-handler)
                     :state         (ig/ref ::state)
                     :synth         (ig/ref ::synthesizer)
                     :recognizer    (ig/ref ::recognizer)
                     :stream        (ig/ref ::microphone)}})

;;; A side-effect is used to update state with a new recording when the microphone has stopped.
;;; This ensures that all available chunks have been received

(defmethod ig/init-key ::microphone [_ {:keys [state]}]
  (-> (vocloj.web/create-microphone-stream r/atom)
      (vocloj.core/add-effect ::record :recording :stopped #(mic/create-recording state))))

(defmethod ig/halt-key! ::microphone [_ stream]
  (vocloj.core/stop stream))

(defmethod ig/init-key ::recog-handler [_ {:keys [state]}]
  (fn [message]
    (recog/handler message state)))

(defmethod ig/init-key ::recognizer [_ {:keys [options]}]
  (vocloj.web/create-recognizer options r/atom))

(defmethod ig/init-key ::state [_ initial]
  (r/atom initial))

(defmethod ig/resume-key ::state [_ _ _ prev]
  prev)

(defmethod ig/init-key ::synthesizer [_ {:keys [state]}]
  (-> (web/create-synthesizer r/atom)
      (vocloj.core/add-effect ::voices (synth/make-default-voice-handler state))))

(defmethod ig/halt-key! ::synthesizer [_ synth]
  (web/remove-listeners synth))

(defmethod ig/init-key ::ui [_ {:keys [state synth recognizer stream recog-handler]}]
  (rdom/render
   [application state synth recognizer recog-handler stream]
   (.getElementById js/document "application")))

(defonce system (ig/init config))

;;; Development

(defn restart []
  (ig/suspend! system)
  (ig/resume config system))

(defn ^:after-load after-reload []
  (restart))
