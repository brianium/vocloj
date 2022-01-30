(ns vocloj.dev.recognizer
  (:require [cljs.pprint :as pprint]
            [vocloj.core :as vocloj]
            [vocloj.dev.components :as co]))

(defn reel-item
  [{:keys [transcript]}]
  [:li.reel__item
   {:ref (fn [el]
           (when el
             (.scrollIntoView el #js {:behavior "smooth" :block "start"})))}
   transcript])

(defn reel [transcript]
  [:ul.reel
   (for [item transcript]
     ^{:key item} [reel-item item])])

(defn recognizer [*state recog handler]
  (let [{:recog/keys [transcript]} @*state
        state (vocloj/current-state recog)]
    [:div.recognition-container.container
     [:form.app__column.app__column--flex-start
      {:on-submit #(do
                     (.preventDefault %)
                     (if (= :listening (:state state))
                       (vocloj/stop recog)
                       (vocloj/listen recog handler)))}
      [co/button {:type "submit"}
       (if (= :listening (:state state))
         "stop"
         "listen")]
      (when (seq transcript)
        [reel transcript])]
     [:div.app__column.fsm_state
      [:pre
       [:code (with-out-str (pprint/pprint (vocloj/current-state recog)))]]]]))

(defn handler
  "Updates state with transcript data"
  [result *state]
  (swap! *state assoc :recog/transcript result))
