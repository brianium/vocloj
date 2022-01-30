(ns vocloj.core
  "vocloj provides a Clojure(Script) api for doing things with speech - i.e text to speech,
   and speech to text."
  (:require [vocloj.core.impl :as impl]))

(defn add-effect
  "Register a function to be called in response to a state change.
   
   The given key should be unique for the given state machine.

   The effect fn must be an fn of 3 args: the state machine, the old state, and the new state.
   
   When add-effect is invoked with three arguments, the effect fn will be called
   when any state change occurs:
   
   ```clojure
   (add-effect my-synthesizer ::fun (fn [synth old-state new-state]
                                      (do-something-fun synth old-state new-state)))
   ```
   
   When add-effect is called with five arguments, the effect fn will be called when
   an explicit state transition occurs:
   
   ```clojure
   (add-effect my-synthesizer ::resumed :paused :speaking on-resume)
   ```

   The previous state value can also be a set of previous states:

   ```clojure
   (add-effect my-microphone ::init #{:dormant :stopped} :ready on-ready)
   ```
   
   The add-effect function is useful for monitoring state changes or dispatching
   other effects in response to state changes."
  ([sm key fn-3]
   (impl/add-effect sm key fn-3)
   sm)
  ([sm key from to fn-3]
   (impl/add-effect sm key from to fn-3)))

(defn transition
  "Transition a state machine using the given event and an optional payload.
   
   transition is mostly used within vocloj implementations, but may be useful
   in other circumstances. I don't know. I can't predict the future one bit.
   
   The payload can be a hash map or a function that returns a hash map. If a function, the
   payload must be a function of 1 arg: the state machine itself.
   
   The payload hash map will replace the state machine's internal state entirely. A function
   payload may be useful for merging state instead of replacing it entirely.
   
   ```clojure
   ;;; Set state to the given data
   (core/transition this :init {:recognition          recognition
                                :speech-ch            speech-ch
                                :listener/result      on-result})
   
   ;;; Maintain current state
   (core/transition this :pause current-data)

   ;;; Set the current state to nil by omitting the payload altogether
   (core/transition this :stop)
   ```"
  ([sm event payload]
   (impl/transition sm event payload)
   sm)
  ([sm event]
   (impl/transition sm event)))

(defn current-state
  "Returns the in-transaction-value of the state machine's underlying
   ref.
   
   This can be useful if the given implementation stores state that may be useful
   to a user. For instance the speech synthesizer implementation in vocloj.web provides
   access to support voices:
   
   ```clojure
   (-> synth current-state :data :voices)
   ```"
  [sm]
  (impl/current-state sm))

(defn init
  "Initializes something worthy of initialization.
   
   Speech synthesizers and speech recognizers implement the Initializable protocol
   in order to setup necessary resources or kick off requests for necessary data.

   This function is useful when explicit lifecycle management is desired - for something
   like a reloaded workflow.
   
   Functions like listen may call this before returning a channel.

   Returns the value given."
  [initializable]
  (impl/init initializable))

(defn start
  "Actually begin listening for speech on the given recognizer.
   
   Returns the value given."
  [recognizer]
  (impl/start recognizer))

(defn stop
  "Makes the given recognizer stop listening for speech.
   
   Returns the value given."
  [recognizer]
  (impl/stop recognizer))

(defn listen
  "Probably the preferred means for using a speech recognizer.
  
   This function serves as a shortcut for initializing then starting the
   given recognizer.
   
   When called with one argument, listen returns a core.async channel that will receive
   transcript results.
   
   The following snippet shows the implementation of listen's two argument
   alternative. Different stop logic can be used that calls (stop recognizer) explicitly.

   ```clojure
   (let [ch      (listen recognizer)
         stop-ch (-> recognizer current-state :data :stop-ch)]
     (async/go-loop []
       (let [[v p] (async/alts! [ch stop-ch])]
         (when (= p ch)
           (handler v)
           (recur))))
     recognizer)
   ```
   
   When called with two arguments, the second argument must be an fn
   of one argument: the result of detecting speech.
   
   ```clojure
   (listen recognizer (fn [result] (do-something-with-result result)))
   ```
   
   The results put on the channel will always be lists of hash-maps containing
   minimally :transcript and :confidence keys:
   
   ```clojure
   ({:transcript \"Hello from my microphone!\" :confidence 0.999}) 
   ```"
  ([recognizer]
   (impl/listen recognizer))
  ([recognizer handler]
   (impl/listen recognizer handler)))

(defn cancel
  "Cancel speech synthesis occurring on the given synthesizer. This
   may mean different things to different implementations, but generally
   this means removing all enqueued utterances and stopping all speech.
   
   Returns the given value."
  [synth]
  (impl/cancel synth))

(defn pause
  "Pauses speech currently being uttered. Can be resumed with the resume function.
   
   Returns the value given."
  [synth]
  (impl/pause synth))

(defn resume
  "Resume a paused synthesizer.
   
   Returns the value given."
  [synth]
  (impl/resume synth))

(defn speak
  "Enqueue an utterance for speech with the given
   synthesizer.
   
   The voice-id is a unique identifier specific to the synthesizer
   implementation. For example, synthesizer implementation in vocloj.web might use
   a URI of the form \"Alex\".
   
   The utterance is a hash map, but it's structure may vary depending on the implementation.
   All synthesizers should minimally support a :text key with a string value indicating the speech
   to utter.
   
   ```clojure
   (speak synthesizer \"Alex\" {:text \"Hello from the speakers!\"})
   ```"
  [synth voice-id utterance]
  (impl/speak synth voice-id utterance))
