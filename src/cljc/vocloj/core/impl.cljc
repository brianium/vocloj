(ns ^:no-doc vocloj.core.impl
  (:require #?(:clj  [clojure.core.async :as async]
               :cljs [cljs.core.async :as async])
            [vocloj.protocols :as p]))

(defn from?
  [prev state]
  (cond
    (set? prev) (prev state)
    (keyword? prev) (= prev state)
    :else nil))

(defn add-effect
  ([sm key fn-3]
   (p/-add-effect sm key fn-3)
   sm)
  ([sm key from to fn-3]
   (add-effect sm key (fn [sm old new]
                        (when (and (from? from (:state old)) (= to (:state new)))
                          (fn-3 sm old new))))))

(defn transition
  "Transition the given state machine to a new state. The implementation of the state machine
   should guarantee that only valid transitions are performed."
  ([sm event payload]
   (->> (if (fn? payload)
          (payload sm)
          payload)
        (#(merge % {:last-event event}))
        (p/-transition sm event))
   sm)
  ([sm event]
   (transition sm event nil)))

(defn current-state
  "Return the current state of the given state machine"
  [sm]
  (p/-current-state sm))

(defn get-speech-channel
  [speech-receiver]
  (p/-get-speech-channel speech-receiver))

(defn get-stop-channel
  [speech-receiver]
  (p/-get-stop-channel speech-receiver))

(defn init
  "Initialize the given speech recognizer"
  [initializable]
  (p/-init initializable)
  initializable)

(defn start
  "Start the given speech recognizer"
  [recognizer]
  (p/-start recognizer)
  recognizer)

(defn stop
  "Stop the given speech recognizer"
  [recognizer]
  (p/-stop recognizer)
  recognizer)

(defn listen
  "Causes the given speech receiver to start listening for speech input.
   
   When called with one argument, the receiver is initialized then started
   and the underlying result channel is returned.
   
   When called with two arguments, speech results will be passed to the given function
   as they are made available."
  ([speech-receiver]
   (-> speech-receiver
       (p/-listen)
       (get-speech-channel)))
  ([speech-receiver handler]
   (let [ch      (listen speech-receiver)
         stop-ch (get-stop-channel speech-receiver)]
     (async/go-loop []
       (let [[v p] (async/alts! [ch stop-ch])]
         (when (= p ch)
           (handler v)
           (recur))))
     speech-receiver)))

(defn cancel
  "Cancel the given speech synthesizer"
  [synth]
  (p/-cancel synth)
  synth)

(defn pause
  "Pause the given speech synthesizer"
  [synth]
  (p/-pause synth)
  synth)

(defn resume
  "Resume the given speech synthesizer"
  [synth]
  (p/-resume synth)
  synth)

(defn speak
  "Use the given speech synthesizer to speech the given utterance using a voice
   identified by voice-id"
  [synth voice-id utterance]
  (p/-speak synth voice-id utterance)
  synth)
