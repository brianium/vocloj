(ns vocloj.web
  "Provides speech recognition and synthesis via native web browser
   APIs"
  (:require [vocloj.web.impl :as impl]))

(defn create-recognizer
  "Create a speech recognizer backed by native browser apis.
   
   When called with no arguments, the returned recognizer will be
   configured to listen for single utterances, i.e used to detect an utterance
   and then shut down:

   ```clojure
   (create-recognizer)
   ```
   
   Optional arguments can be used to configure the recognizer when create-recognizer
   is called with one argument:
   
   ```clojure
   (create-recognizer {:continuous? true})
   ```
   
   Supported options are
     :continuous? boolean? - continuous recognizers continuously listen for speech until explicitly stopped
   
   When called with two arguments, an atom-fn can be given in addition to options. This may be useful
   for using an alternative atom function like reagent's \"ratoms\".
   
   ```clojure
   (create-recognizer {:continuous? true} r/atom)
   ```
   
   The speech results put on channel will always be lists of hash-maps containing
   minimally :transcript and :confidence keys:
   
   ```clojure
   ({:transcript \"Hello from my microphone!\" :confidence 0.999}) 
   ```"
  ([]
   (impl/create-recognizer))
  ([options]
   (impl/create-recognizer options))
  ([options atom-fn]
   (impl/create-recognizer options atom-fn)))

(defn create-synthesizer
  "Create a speech synthesizer backed by native browser apis.
   
   When called with no arguments, a default synthesizer will be returned.

   ```clojure
   (create-synthesizer)
   ```
   
   When called with one argument, an atom-fn can be given. This may be useful
   for using an alternative atom function like reagent's \"ratoms\".
   
   ```clojure
   (create-synthesizer r/atom)
   ```
   
   When calling [[vocloj.core/speak]] on a web backed synthesizer, the utterance map must
   minimally contain a :text key.
   
   ```clojure
   (speak synthesizer \"Alex\" {:text \"Hello from the browser!\"})
   ```
   
   The following keys from the [SpeechSynthesisUtterance](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance) API are also supported:
   
     :lang - string?
     :pitch - float?
     :rate  - float?
     :volume - float?"
  ([]
   (impl/create-synthesizer))
  ([atom-fn]
   (impl/create-synthesizer atom-fn)))

(defn remove-listeners
  "Remove global listeners from the single speechSynthesis object
   present on the browser window. This is only relevant to the web synthesizer.
   
   This can be used in a reloaded environment to prevent hings like multiple on-voiceschanged
   event listeners from being registered"
  [synth]
  (impl/remove-listeners synth))

(defn create-microphone-stream
  "Create a microphone stream backed by native browser apis.
   
   When called with no arguments, a default microphone stream will be returned. Default
   microphone streams receive data intermittently via the [MediaStream Recording API](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API).

   The speech results put on channel will individually be a js array, or chunk, of browser native Blob objects.

   ```clojure
   (create-microphone-stream)
   ```

   When called with one argument, an options map can be given. The following keys are supported:

     :processor - string?
   
   The :processor key must be a URI to an [AudioWorkletProcessor](https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletProcessor) implementation.

   If a :processor key is given, the MediaStream Recording API will not be used, and audio results will be received
   as Float32 sample arrays as they become available.

   An example implementation can be found [here](https://gist.github.com/brianium/068e821ad526244bf044b4b3a42ea259).

   When called with two arguments, an atom-fn can be given in addition to an options map. This may be useful
   for using an alternative atom function like reagent's \"ratoms\".
   
   ```clojure
   (create-microphone-stream options r/atom)
   ```"
  ([]
   (impl/create-microphone-stream))
  ([options]
   (impl/create-microphone-stream options))
  ([options atom-fn]
   (impl/create-microphone-stream options atom-fn)))
