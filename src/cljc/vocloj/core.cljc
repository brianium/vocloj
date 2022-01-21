(ns vocloj.core
  "vocloj aims to support uttering and understanding speech within the Clojure
   ecosystem"
  (:require #?(:clj  [clojure.core.async :as async]
               :cljs [cljs.core.async :as async])))

;;; State machine API

(defprotocol StateMachine
  (-add-effect [_ key fn-3] "Add a side effect that is invoked when a change to state happens. Is called with the state machine, previous, and next state")
  (-transition [_ event payload] "Transition the state machine to a new state")
  (-current-state [_] "Return the current state of the state machine"))

(defn add-effect
  "Add a side effect to the state machine.
   
   When called with three arguments, the given function is called with the state machine and old and new state
   on EVERY change to state.
   
   When called with five arguments, the given function is called with the state machine and old and new state
   only when the underlying state changes from one named state (from) to another (to)."
  ([sm key fn-3]
   (-add-effect sm key fn-3)
   sm)
  ([sm key from to fn-3]
   (add-effect sm key (fn [sm old new]
                        (when (and (= from (:state old)) (= to (:state new)))
                          (fn-3 sm old new))))))

(defn transition
  "Transition the given state machine to a new state. The implementation of the state machine
   should guarantee that only valid transitions are performed."
  ([sm event payload]
   (->> (if (fn? payload)
          (payload sm)
          payload)
        (#(merge % {:last-event event}))
        (-transition sm event))
   sm)
  ([sm event]
   (transition sm event nil)))

(defn current-state
  "Return the current state of the given state machine"
  [sm]
  (-current-state sm))

;;; Initialization API

(defprotocol Initializes
  (-init  [_] "Initialize a type. Useful for setting up event streams and necessary resources"))

(defn init
  "Initialize the given speech recognizer"
  [initializable]
  (-init initializable)
  initializable)

;;; Speech recognition API

(defprotocol RecognizesSpeech
  (-start [_] "Start speech recognition. Returns a channel that receives results")
  (-stop  [_] "Stop attempting to recognize speech"))

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

;;; Speech synthesis API

(defprotocol SynthesizesSpeech
  (-cancel [_] "Cancel all speech, including any enqueued for further utterance")
  (-pause [_] "Pause the currently spoken utterance")
  (-resume [_] "Resume a paused utterance")
  (-speak [_ voice-id utterance] "Speak an utterance using the given voice id"))

(defn cancel
  "Cancel the given speech synthesizer"
  [synth]
  (-cancel synth)
  synth)

(defn pause
  "Pause the given speech synthesizer"
  [synth]
  (-pause synth)
  synth)

(defn resume
  "Resume the given speech synthesizer"
  [synth]
  (-resume synth)
  synth)

(defn speak
  "Use the given speech synthesizer to speach the given utterance using a voice
   identified by voice-id"
  [synth voice-id utterance]
  (-speak synth voice-id utterance)
  synth)
