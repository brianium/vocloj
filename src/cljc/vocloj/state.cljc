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
   
   The states map should be a hash map indicated supported states and their
   allowed transitions. A transition key is a named event and the transition
   value is the expected state after said event occurs:
   
   ```clojure
   {:speaking {:pause :paused}
    :paused   {:resume :speaking}}
   ```
   
   The above state map indicates that only when the state machine is in a speaking state,
   can a pause event be used via core.transition to move the machine to a paused state. Similarly,
   only a paused machine can be resumed to a speaking state via a resume event.
   
   The initial-state must be a map that will be used as the initial value of the underlying
   atom map's :data value.
   
   If an atom-fn is given, it will be called with the initial state provided
   to this function. This may be useful for something like using reagent's \"ratoms\" instead of
   Clojure's own atoms."
  ([states initial-state]
   (create-atom-state-machine states initial-state atom))
  ([states initial-state atom-fn]
   (->AtomStateMachine states (atom-fn initial-state))))

(defn create-recognizer-state-machine
  "This is merely a suggestion for recognizer state machines.
   
   The atom-fn functions per create-atom-state-machine.

   The underlying state machine supports the following states:
   
   ```clojure
   {:dormant   {:init :ready}
    :ready     {:start :listening}
    :listening {:stop :dormant}} 
   ```
   
   The initial state reflects a dormant recognizer with nil data in state. A dormant
   recognizer will do nothing until it is initialized then started."
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
  "This is merely a suggestion for synthesizer state machines.
   
   The atom-fn functions per create-atom-state-machine.
   
   The underlying state machine supports the following states:
   
   ```clojure
   {:dormant     {:init  :ready}
    :ready       {:change-voices :ready
                  :speak         :speaking}
    :speaking    {:pause :paused
                  :end   :ready}
    :paused      {:resume :speaking}}
   ```
   
   The initial state reflects a dormant synthesizer with nil data in state. A dormant
   synthesizer will do nothing until it is initialized."
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

(defn create-microphone-stream-state-machine
  ([atom-fn]
   (create-atom-state-machine
    {:dormant   {:error :error
                 :init  :ready}
     :error     {:error :error
                 :init  :ready}
     :stopped   {:error :error
                 :init  :ready}
     :ready     {:start :recording}
     :recording {:end   :dormant
                 :error :error
                 :mute  :muted
                 :pause :paused
                 :stop  :stopped}
     :muted     {:end    :dormant
                 :stop   :stopped
                 :unmute :recording}
     :paused    {:end    :dormant
                 :mute   :muted
                 :resume :record
                 :stop   :stopped}}
    {:state :dormant :data nil}
    atom-fn))
  ([]
   (create-microphone-stream-state-machine atom)))
