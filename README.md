# vocloj

You talk to the computer. The computer talks to you. Brought to you by
sweet sweet parens.

[![cljdoc badge](https://cljdoc.org/badge/com.github.brianium/vocloj)](https://cljdoc.org/d/com.github.brianium/vocloj/CURRENT) [![Clojars Project](https://img.shields.io/clojars/v/com.github.brianium/vocloj.svg)](https://clojars.org/com.github.brianium/vocloj)

## Table of contents

- [Using vocloj](#using-vocloj)
    - [Web](#vocloj.web)
- [Demo](https://brianium.github.io/vocloj/)
  - [src](https://github.com/brianium/vocloj/blob/main/dev/cljs/vocloj/dev.cljs)
- [API Docs](https://cljdoc.org/d/com.github.brianium/vocloj/CURRENT)
- [State machines](#state-machines)
    - [add-effect](#add-effect)
    - [current-state](#current-state)
- [Recognition](#recognition)
- [Synthesis](#synthesis)
- [Microphone Streams](#microphone-streams)

## Using vocloj

Clojure(Script) is great. Speech synthesis and recognition are fun and probably useful. The aim of vocloj is to make working with speech synthesis and recognition across different platforms simple. For now only native browser APIs are supported.

```clojure
(require '[vocloj.core :as vocloj.core]
         '[vocloj.web :as vocloj.web])

;;; Recognition

(def recognizer (vocloj.web/create-recognizer {:continuous? true}))

(vocloj.core/listen recognizer #(println %))

;; Omitting a handler will return a core.async channel

(let [ch (vocloj.core/listen recognizer)]
  (go-loop []
    (println (<! ch))))

;;; Synthesis

(def synthesizer (vocloj.web/create-synthesizer))

(def voice-id "Alex")

(vocloj.core/speak synthesizer voice-id {:text "Hello World!"})
```

### vocloj.web

Currently the only supported implementation. Synthesis is backed by the [SpeechSynthesis](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis) API, and recognition is backed by the [SpeechRecognition](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition) API.

The caveat to using vocloj's web interface is that most browsers require user interaction to initialize synthesis and recognition.

See the demo app for an example.

#### Browser support

At the time of this writing, Chrome has the best support for speech recognition by far.

It does work in Safari, but it has gotten so bad as to be nearly unusable (though technically supported).

See [browser compatability table](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition#browser_compatibility)

## State machines

Speech synthesizers and speech recognizers implement a simple state machine protocol. It is useful
to track state in order to know when speech is occurring or when a recognizer is listening. It is also
useful for updating and tracking voices that are available for utterances. The `vocloj.core` interface
supports several methods for accessing and manipulating that internal state. These are largely used
for implementation, but may be useful for adding effects for things such as logging.

### add-effect

`add-effect` is used internally to affect change in response to state transitions. It can be useful
to monitor internal changes or log transitions.

```clojure
(require '[vocloj.web :as web]
         '[vocloj.core :as core])

(def synthesizer (-> (web/create-synthesizer)
                     (core/add-effect ::logger (fn [synth old-state new-state]
                                                 (println new-state)))
                     (core/add-effect ::resumed :paused :speaking #(println "speaking again"))))
```

### current-state

Returns the current state of a state machine as a hash map. For instance, the web based implementation of speech synthesis stores available voices in state:

```clojure
(require '[vocloj.web :as web]
         '[vocloj.core :as core])

(def synthesizer (web/create-synthesizer))

;; Get available voices 
(def voices (-> synthesizer core/current-state :voices))
```

## Recognition

Recognizers are started and stopped. The easiest way to leverage a recognizer is to create one and use
`vocloj.core/listen` to obtain a channel or use a callback.

```clojure
(require '[vocloj.core :as vocloj.core]
         '[vocloj.web :as vocloj.web])

(def recognizer (vocloj.web/create-recognizer {:continuous? true}))

(vocloj.core/listen recognizer #(println %))

;; Omitting a handler will return a core.async channel

(let [ch (vocloj.core/listen recognizer)]
  (go-loop []
    (println (<! ch))))

(vocloj.core/stop recognizer) ;; stop listening
```

See API docs for all functions and options.

## Synthesis

```clojure
(require '[vocloj.core :as vocloj.core]
         '[vocloj.web :as vocloj.web])

(def synthesizer (vocloj.web/create-synthesizer))

(def voice-id "Alex")

(vocloj.core/speak synthesizer voice-id {:text "Hello World!"})
```

See API docs for all functions and options.

## Microphone Streams

Microphone streams are started and stopped. The easiest way to leverage a stream is to create one and use
`vocloj.core/listen` to obtain a channel or use a callback.

```clojure
(require '[vocloj.core :as vocloj.core]
         '[vocloj.web :as vocloj.web])

(def stream (vocloj.web/create-microphone-stream))

(vocloj.core/listen stream #(println %))

;; Omitting a handler will return a core.async channel

(let [ch (vocloj.core/listen stream)]
  (go-loop []
    (println (<! ch))))

(vocloj.core/stop stream) ;; stop listening
```

The microphone stream is named for the [MediaStream](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream) API. However, the current implementation provides chunks of js Blobs on channel via the [MediaRecorder](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder) API. 

Future iterations will be targeting true streaming via [AudioWorklets](https://developer.mozilla.org/en-US/docs/Web/API/AudioWorklet).
