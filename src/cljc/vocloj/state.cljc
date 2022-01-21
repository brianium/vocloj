(ns vocloj.state
  "Contains default states for vocloj state machines"
  (:require [vocloj.state.impl :refer [->AtomStateMachine]]))

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
  ([states initial-state]
   (create-atom-state-machine states initial-state atom))
  ([states initial-state atom-fn]
   (->AtomStateMachine states (atom-fn initial-state))))

(defn create-recognizer-state-machine
  "Create a state machine used for speech recognition"
  ([atom-fn]
   (create-atom-state-machine
    {:dormant   {:init :ready}
     :ready     {:start :listening}
     :listening {:stop :dormant}}
    {:state :dormant
     :data  nil}
    atom-fn))
  ([]
   (create-recognizer-state-machine atom)))

(defn create-synthesis-state-machine
  "Create a state machine used for speech synthesis"
  ([atom-fn]
   (create-atom-state-machine
    {:dormant     {:init  :ready}
     :ready       {:change-voices :ready
                   :speak         :speaking}
     :speaking    {:pause :paused
                   :end   :ready}
     :paused      {:resume :speaking}}
    {:state :dormant :data nil}
    atom-fn))
  ([]
   (create-synthesis-state-machine atom)))
