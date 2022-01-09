(ns vocloj.state
  "Contains default states for vocloj state machines"
  (:require [vocloj.state.impl :refer [->AtomStateMachine]]))

(def states {:dormant   {:init :ready}
             :ready     {:start :listening}
             :listening {:stop  :dormant}})

(def default {:state :dormant
              :data  nil})

(defn create-atom-state-machine
  "Create a vocloj state machine backed by atoms.
   
   This function can be called with three arguments to specify the function
   used for creating the atom. This is useful for atom like types such as reagent's
   ratoms:
   
   ```clojure
   (create-atom-state-machine states default reagent.core/atom)
   ```
   
   The states and default values are exported from this namespace for just such uses
   as well."
  ([]
   (create-atom-state-machine states))
  ([states]
   (create-atom-state-machine states default))
  ([states initial-state]
   (create-atom-state-machine states initial-state atom))
  ([states initial-state atom-fn]
   (->AtomStateMachine states (atom-fn initial-state))))
