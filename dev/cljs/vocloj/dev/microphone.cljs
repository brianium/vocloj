(ns vocloj.dev.microphone
  (:require [cljs.pprint :as pprint]
            [vocloj.core :as vocloj]
            [vocloj.dev.components :as co]))

(defn make-data-handler
  "Create a handler that appends audio chunks to state"
  [*state]
  (fn [chunk]
    (swap! *state #(update % :mic/chunks conj chunk))))

(defn create-recording
  "Create a recording from the chunks in state. Reset chunks when finished."
  [*state]
  (let [chunks (:mic/chunks @*state)
        blob   (js/Blob. (into-array chunks) #js {:type "audio/wav"})] ;; audio/wav seems to be pretty well supported
    (swap! *state #(update % :mic/recordings conj (.createObjectURL js/URL blob)))
    (swap! *state #(assoc % :mic/chunks []))))

(defn microphone [*state stream]
  (let [state      (:state (vocloj/current-state stream))
        on-data    (make-data-handler *state)
        recordings (:mic/recordings @*state)]
    [:div.recognition-container.container
     [:form.app__column.app__column--flex-start
      {:on-submit #(do
                     (.preventDefault %)
                     (case state
                       :recording (vocloj/stop stream)
                       :dormant   (vocloj/listen stream on-data)
                       :error     (vocloj/listen stream on-data)
                       :stopped   (vocloj/listen stream on-data)
                       (println (str "Submitted with state " state))))}
      [co/button {:type "submit"}
       (case state
         :dormant    "record"
         :error      "record"
         :stopped    "record"
         :ready      "waiting"
         :paused     "resume"
         "stop")]
      (when-some [clips (seq recordings)]
        [:ul.recordings
         (for [clip clips]
           ^{:key clip} [:li.recordings__recording [:audio {:src clip :controls true}]])])]
     [:div.app__column.fsm_state
      [:pre
       [:code (with-out-str (pprint/pprint (vocloj/current-state stream)))]]]]))
