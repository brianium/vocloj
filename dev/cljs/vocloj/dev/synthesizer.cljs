(ns vocloj.dev.synthesizer
  (:require [cljs.pprint :as pprint]
            [clojure.string :as string]
            [vocloj.dev.components :as co]
            [vocloj.core :as vocloj]))

(defn compare-voices
  [v1 v2]
  (compare (.-name v1) (.-name v2)))

(defn voice-option [voice]
  [:option {:value (.-voiceURI voice)}
   (str (.-name voice) " - " (.-lang voice))])

(defn voices [props voices]
  (let [voices (->> voices vals (sort compare-voices))]
    [:select.voices props
     (for [voice voices]
       ^{:key (.-voiceURI voice)} [voice-option voice])]))

(defn make-default-voice-handler
  "Ensure the synthesizer has a default voice set"
  [*state]
  (fn [_ _ new-state]
    (when-let [voices (get-in new-state [:data :voices])]
      (when-not (some? (:synth/voice-id @*state))
        (let [get-key (fnil key (key (first voices)))
              default (->> voices
                           (filter #(= "en-US" (-> % val .-lang)))
                           (first)
                           (get-key))]
          (swap! *state #(assoc % :synth/voice-id default)))))))

(defn synthesizer [*state synth]
  (let [{:synth/keys [voice-id text pitch rate volume]} @*state
        state (vocloj/current-state synth)]
    [:div.container
     [:form.app__column
      {:on-submit #(do
                     (.preventDefault %)
                     (case (:state state)
                       :ready    (vocloj/speak synth voice-id {:text   text
                                                               :pitch  pitch
                                                               :rate   rate
                                                               :volume volume})
                       :paused   (vocloj/resume synth)
                       :speaking (vocloj/pause synth)
                       (constantly nil)))}
      [co/text-input {:auto-focus  true
                      :on-change   #(swap! *state assoc :synth/text (.. % -target -value))
                      :placeholder "Greetings friend!"
                      :value       text}]
      [co/button {:disabled (string/blank? text)
                  :type     "submit"}
       (case (:state state)
         :speaking "pause"
         :paused   "resume"
         "speak")]
      [voices {:on-change #(swap! *state assoc :synth/voice-id (.. % -target -value))
               :value     (or voice-id "")}
       (-> state :data :voices)]
      [co/range-input {:disabled  (not= :ready (:state state))
                       :on-change #(swap! *state assoc :synth/pitch (.. % -target -value))
                       :value     pitch
                       :min       0
                       :max       2
                       :step      0.1}
       "Pitch"]
      [co/range-input {:disabled  (not= :ready (:state state))
                       :on-change #(swap! *state assoc :synth/rate (.. % -target -value))
                       :value     rate
                       :min       0.1
                       :max       2
                       :step      0.1}
       "Rate"]
      [co/range-input {:disabled  (not= :ready (:state state))
                       :on-change #(swap! *state assoc :synth/volume (.. % -target -value))
                       :value     volume
                       :min       0
                       :max       1
                       :step      0.1}
       "Volume"]]
     [:div.app__column.fsm_state
      [:pre
       [:code (with-out-str (pprint/pprint (vocloj/current-state synth)))]]]]))
