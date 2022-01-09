(ns vocloj.core
  "vocloj aims to support easily reading streams of speech"
  (:require #?(:clj  [clojure.core.async :as async]
               :cljs [cljs.core.async :as async])))

;;; Simple state machines

(defprotocol StateMachine
  (-add-effect [_ key fn-2] "Add a side effect that is invoked when a change to state happens. Is called with the previous and next state")
  (-transition [_ event payload] "Transition the state machine to a new state")
  (-current-state [_] "Return the current state of the state machine"))

(defn add-effect
  "Add a side effect to the state machine.
   
   When called with three arguments, the given function is called with the old and new state
   on EVERY change to state.
   
   When called with five arguments, the given function is called with old and new state
   only when the underlying state changes from one named state (from) to another (to)."
  ([sm key fn-2]
   (-add-effect sm key fn-2)
   sm)
  ([sm key from to fn-2]
   (add-effect sm key (fn [old new]
                        (when (and (= from (:state old)) (= to (:state new)))
                          (fn-2 old new))))))

(defn transition
  "Transition the given state machine to a new state. The implementation of the state machine
   should guarantee that only valid transitions are performed."
  ([sm event payload]
   (-transition sm event payload)
   sm)
  ([sm event]
   (transition sm event nil)))

(defn current-state
  "Return the current state of the given state machine"
  [sm]
  (-current-state sm))

;;; Core speech recognition API

(defprotocol RecognizesSpeech
  (-init  [_] "Initialize speech recognition. Useful for setting up event streams and necessary resources")
  (-start [_] "Start speech recognition. Returns a channel that receives results")
  (-stop  [_] "Stop attempting to recognize speech"))

(defn init
  "Initialize the given speech recognizer"
  [recognizer]
  (-init recognizer)
  recognizer)

(defn start
  "Start the given speech recognizer"
  [recognizer]
  (-start recognizer)
  recognizer)

(defn stop
  "Stop the given speech recognizer"
  [recognizer]
  (-stop recognizer)
  recognizer)

(defn listen
  "A shortcut for calling init then start on the given speech recognizer.
   
   When called with one argument, the recognizer is initialized then started
   and the underlying result channel is returned.
   
   When called with two arguments, speech results will be passed to the given function
   as they are made available."
  ([recognizer]
   (-> recognizer
       init
       start
       current-state
       :data
       :speech-ch))
  ([recognizer handler]
   (let [ch      (listen recognizer)
         stop-ch (-> recognizer current-state :data :stop-ch)]
     (async/go-loop []
       (let [[v p] (async/alts! [ch stop-ch])]
         (when (= p ch)
           (handler v)
           (recur))))
     recognizer)))
