(ns vocloj.protocols
  "Contains vocloj protocols. Speech recognizers and speech synthesizers
   may adhere to the vocloj.core api by implementing their respective
   protcols as well as the Initializable and StateMachine protocols.")

(defprotocol Initializable
  (-init  [_] "Initialize a type. Useful for setting up event streams and necessary resources"))

(defprotocol Lifecycle
  (-start [_] "Start a component")
  (-stop  [_] "Stop a component"))

(defprotocol Suspendable
  (-pause [_] "Pause a component")
  (-resume [_] "Resume a component"))

(defprotocol SynthesizesSpeech
  (-cancel [_] "Cancel all speech, including any enqueued for further utterance")
  (-speak [_ voice-id utterance] "Speak an utterance using the given voice id"))

(defprotocol StateMachine
  (-add-effect [_ key fn-3] "Add a side effect that is invoked when a change to state happens. Is called with the state machine, previous, and next state")
  (-transition [_ event payload] "Transition the state machine to a new state")
  (-current-state [_] "Return the current state of the state machine"))

(defprotocol ReceivesSpeech
  (-get-speech-channel [_] "Returns a channel that receives speech data")
  (-listen [_] "Start listening for speech")
  (-get-stop-channel [_] "Return a channel that receives stop signals"))
