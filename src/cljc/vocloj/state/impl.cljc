(ns ^:no-doc vocloj.state.impl
  "A default implementation of vocloj state machines backed
   by atoms."
  (:require [vocloj.core :refer [StateMachine]]))

(defrecord AtomStateMachine [states *state]
  StateMachine
  (-transition [_ event payload]
    (let [current @*state
          next    (get-in states [(:state current) event])]
      (when (some? next)
        (reset! *state {:state next
                        :data  payload}))))

  (-add-effect [this key fn-3]
    (add-watch *state key (fn [_ _ old new]
                            (fn-3 this old new))))

  (-current-state [_]
    @*state))
