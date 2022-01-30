// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('vocloj.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('vocloj.core.impl');
/**
 * Register a function to be called in response to a state change.
 * 
 * The given key should be unique for the given state machine.
 * 
 * The effect fn must be an fn of 3 args: the state machine, the old state, and the new state.
 * 
 * When add-effect is invoked with three arguments, the effect fn will be called
 * when any state change occurs:
 * 
 * ```clojure
 * (add-effect my-synthesizer ::fun (fn [synth old-state new-state]
 *                                    (do-something-fun synth old-state new-state)))
 * ```
 * 
 * When add-effect is called with five arguments, the effect fn will be called when
 * an explicit state transition occurs:
 * 
 * ```clojure
 * (add-effect my-synthesizer ::resumed :paused :speaking on-resume)
 * ```
 * 
 * The previous state value can also be a set of previous states:
 * 
 * ```clojure
 * (add-effect my-microphone ::init #{:dormant :stopped} :ready on-ready)
 * ```
 * 
 * The add-effect function is useful for monitoring state changes or dispatching
 * other effects in response to state changes.
 */
vocloj.core.add_effect = (function vocloj$core$add_effect(var_args){
var G__18704 = arguments.length;
switch (G__18704) {
case 3:
return vocloj.core.add_effect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return vocloj.core.add_effect.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(vocloj.core.add_effect.cljs$core$IFn$_invoke$arity$3 = (function (sm,key,fn_3){
vocloj.core.impl.add_effect.cljs$core$IFn$_invoke$arity$3(sm,key,fn_3);

return sm;
}));

(vocloj.core.add_effect.cljs$core$IFn$_invoke$arity$5 = (function (sm,key,from,to,fn_3){
return vocloj.core.impl.add_effect.cljs$core$IFn$_invoke$arity$5(sm,key,from,to,fn_3);
}));

(vocloj.core.add_effect.cljs$lang$maxFixedArity = 5);

/**
 * Transition a state machine using the given event and an optional payload.
 * 
 * transition is mostly used within vocloj implementations, but may be useful
 * in other circumstances. I don't know. I can't predict the future one bit.
 * 
 * The payload can be a hash map or a function that returns a hash map. If a function, the
 * payload must be a function of 1 arg: the state machine itself.
 * 
 * The payload hash map will replace the state machine's internal state entirely. A function
 * payload may be useful for merging state instead of replacing it entirely.
 * 
 * ```clojure
 * ;;; Set state to the given data
 * (core/transition this :init {:recognition          recognition
 *                              :speech-ch            speech-ch
 *                              :listener/result      on-result})
 * 
 * ;;; Maintain current state
 * (core/transition this :pause current-data)
 * 
 * ;;; Set the current state to nil by omitting the payload altogether
 * (core/transition this :stop)
 * ```
 */
vocloj.core.transition = (function vocloj$core$transition(var_args){
var G__18707 = arguments.length;
switch (G__18707) {
case 3:
return vocloj.core.transition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return vocloj.core.transition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(vocloj.core.transition.cljs$core$IFn$_invoke$arity$3 = (function (sm,event,payload){
vocloj.core.impl.transition.cljs$core$IFn$_invoke$arity$3(sm,event,payload);

return sm;
}));

(vocloj.core.transition.cljs$core$IFn$_invoke$arity$2 = (function (sm,event){
return vocloj.core.impl.transition.cljs$core$IFn$_invoke$arity$2(sm,event);
}));

(vocloj.core.transition.cljs$lang$maxFixedArity = 3);

/**
 * Returns the in-transaction-value of the state machine's underlying
 * ref.
 * 
 * This can be useful if the given implementation stores state that may be useful
 * to a user. For instance the speech synthesizer implementation in vocloj.web provides
 * access to support voices:
 * 
 * ```clojure
 * (-> synth current-state :data :voices)
 * ```
 */
vocloj.core.current_state = (function vocloj$core$current_state(sm){
return vocloj.core.impl.current_state(sm);
});
/**
 * Initializes something worthy of initialization.
 * 
 * Speech synthesizers and speech recognizers implement the Initializable protocol
 * in order to setup necessary resources or kick off requests for necessary data.
 * 
 * This function is useful when explicit lifecycle management is desired - for something
 * like a reloaded workflow.
 * 
 * Functions like listen may call this before returning a channel.
 * 
 * Returns the value given.
 */
vocloj.core.init = (function vocloj$core$init(initializable){
return vocloj.core.impl.init(initializable);
});
/**
 * Starts the lifecycle of a component that implements the Lifecycle protocol.
 * 
 * Returns the value given.
 */
vocloj.core.start = (function vocloj$core$start(component){
return vocloj.core.impl.start(component);
});
/**
 * Stops the lifecycle of a component that implements the Lifecycle protocol.
 * 
 * Returns the value given.
 */
vocloj.core.stop = (function vocloj$core$stop(component){
return vocloj.core.impl.stop(component);
});
/**
 * Probably the preferred means for using a speech receiver
 *   
 * This function serves as a shortcut for initializing then starting the
 * given receiver
 * 
 * When called with one argument, listen returns a core.async channel that will receive
 * speech results.
 * 
 * The following snippet shows the implementation of listen's two argument
 * alternative. Different stop logic can be used that calls (stop receiver) explicitly.
 * 
 * ```clojure
 * (let [ch      (listen speech-receiver)
 *       stop-ch (get-stop-channel speech-receiver))]
 *   (async/go-loop []
 *     (let [[v p] (async/alts! [ch stop-ch])]
 *       (when (= p ch)
 *         (handler v)
 *         (recur))))
 *   speech-receiver)
 * ```
 * 
 * When called with two arguments, the second argument must be an fn
 * of one argument: the result of detecting speech.
 * 
 * ```clojure
 * (listen recognizer (fn [result] (do-something-with-result result)))
 * ```
 * 
 * The results put on the channel will vary by implementation.
 */
vocloj.core.listen = (function vocloj$core$listen(var_args){
var G__18710 = arguments.length;
switch (G__18710) {
case 1:
return vocloj.core.listen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return vocloj.core.listen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(vocloj.core.listen.cljs$core$IFn$_invoke$arity$1 = (function (speech_receiver){
return vocloj.core.impl.listen.cljs$core$IFn$_invoke$arity$1(speech_receiver);
}));

(vocloj.core.listen.cljs$core$IFn$_invoke$arity$2 = (function (speech_receiver,handler){
return vocloj.core.impl.listen.cljs$core$IFn$_invoke$arity$2(speech_receiver,handler);
}));

(vocloj.core.listen.cljs$lang$maxFixedArity = 2);

/**
 * Cancel speech synthesis occurring on the given synthesizer. This
 * may mean different things to different implementations, but generally
 * this means removing all enqueued utterances and stopping all speech.
 * 
 * Returns the given value.
 */
vocloj.core.cancel = (function vocloj$core$cancel(synth){
return vocloj.core.impl.cancel(synth);
});
/**
 * Pauses speech currently being uttered. Can be resumed with the resume function.
 * 
 * Returns the value given.
 */
vocloj.core.pause = (function vocloj$core$pause(synth){
return vocloj.core.impl.pause(synth);
});
/**
 * Resume a paused synthesizer.
 * 
 * Returns the value given.
 */
vocloj.core.resume = (function vocloj$core$resume(synth){
return vocloj.core.impl.resume(synth);
});
/**
 * Enqueue an utterance for speech with the given
 * synthesizer.
 * 
 * The voice-id is a unique identifier specific to the synthesizer
 * implementation. For example, synthesizer implementation in vocloj.web might use
 * a URI of the form "Alex".
 * 
 * The utterance is a hash map, but it's structure may vary depending on the implementation.
 * All synthesizers should minimally support a :text key with a string value indicating the speech
 * to utter.
 * 
 * ```clojure
 * (speak synthesizer "Alex" {:text "Hello from the speakers!"})
 * ```
 */
vocloj.core.speak = (function vocloj$core$speak(synth,voice_id,utterance){
return vocloj.core.impl.speak(synth,voice_id,utterance);
});
