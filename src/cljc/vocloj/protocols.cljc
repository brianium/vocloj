(ns vocloj.protocols
  "Contains vocloj protocols. Speech recognizers and speech synthesizers
   may adhere to the vocloj.core api by implementing their respective
   protcols as well as the Initializes and StateMachine protocols.")

(defprotocol Initializes
  (-init  [_] "Initialize a type. Useful for setting up event streams and necessary resources"))

(defprotocol RecognizesSpeech
  (-start [_] "Start speech recognition. Returns a channel that receives results")
  (-stop  [_] "Stop attempting to recognize speech"))

(defprotocol SynthesizesSpeech
  (-cancel [_] "Cancel all speech, including any enqueued for further utterance")
  (-pause [_] "Pause the currently spoken utterance")
  (-resume [_] "Resume a paused utterance")
  (-speak [_ voice-id utterance] "Speak an utterance using the given voice id"))

(defprotocol StateMachine
  (-add-effect [_ key fn-3] "Add a side effect that is invoked when a change to state happens. Is called with the state machine, previous, and next state")
  (-transition [_ event payload] "Transition the state machine to a new state")
  (-current-state [_] "Return the current state of the state machine"))



