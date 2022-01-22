(ns vocloj.dev.components
  (:require [goog.string :as gstring]
            [goog.string.format]))

(defn button [props text]
  [:button.button
   (if (#{"button" "submit"} (:type props))
     props
     (merge props {:type "button"})) text])

(defn text-input [props]
  [:input.text-input (merge props {:type "text"})])

(defn range-input [props label]
  (let [id (str "range-" (random-uuid))]
    [:label.range-input {:for id}
     label
     [:input.range-input__input (merge props {:type "range" :id id})]
     (gstring/format "%.2f" (:value props))]))
