// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('vocloj.web');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('vocloj.web.impl');
/**
 * Create a speech recognizer backed by native browser apis.
 * 
 * When called with no arguments, the returned recognizer will be
 * configured to listen for single utterances, i.e used to detect an utterance
 * and then shut down:
 * 
 * ```clojure
 * (create-recognizer)
 * ```
 * 
 * Optional arguments can be used to configure the recognizer when create-recognizer
 * is called with one argument:
 * 
 * ```clojure
 * (create-recognizer {:continuous? true})
 * ```
 * 
 * Supported options are
 *   :continuous? boolean? - continuous recognizers continuously listen for speech until explicitly stopped
 * 
 * When called with two arguments, an atom-fn can be given in addition to options. This may be useful
 * for using an alternative atom function like reagent's "ratoms".
 * 
 * ```clojure
 * (create-recognizer {:continuous? true} r/atom)
 * ```
 */
vocloj.web.create_recognizer = (function vocloj$web$create_recognizer(var_args){
var G__19401 = arguments.length;
switch (G__19401) {
case 0:
return vocloj.web.create_recognizer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return vocloj.web.create_recognizer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return vocloj.web.create_recognizer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(vocloj.web.create_recognizer.cljs$core$IFn$_invoke$arity$0 = (function (){
return vocloj.web.impl.create_recognizer.cljs$core$IFn$_invoke$arity$0();
}));

(vocloj.web.create_recognizer.cljs$core$IFn$_invoke$arity$1 = (function (options){
return vocloj.web.impl.create_recognizer.cljs$core$IFn$_invoke$arity$1(options);
}));

(vocloj.web.create_recognizer.cljs$core$IFn$_invoke$arity$2 = (function (options,atom_fn){
return vocloj.web.impl.create_recognizer.cljs$core$IFn$_invoke$arity$2(options,atom_fn);
}));

(vocloj.web.create_recognizer.cljs$lang$maxFixedArity = 2);

/**
 * Create a speech synthesizer backed by native browser apis.
 * 
 * When called with no arguments, a default synthesizer will be returned.
 * 
 * ```clojure
 * (create-synthesizer)
 * ```
 * 
 * When called with two arguments, an atom-fn can be given. This may be useful
 * for using an alternative atom function like reagent's "ratoms".
 * 
 * ```clojure
 * (create-synthesizer r/atom)
 * ```
 * 
 * When calling [[vocloj.core/speak]] on a web backed synthesizer, the utterance map must
 * minimally contain a :text key.
 * 
 * ```clojure
 * (speak synthesizer "Alex" {:text "Hello from the browser!"})
 * ```
 * 
 * The following keys from the [SpeechSynthesisUtterance](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance) API are also supported:
 * 
 *   :lang - string?
 *   :pitch - float?
 *   :rate  - float?
 *   :volume - float?
 */
vocloj.web.create_synthesizer = (function vocloj$web$create_synthesizer(var_args){
var G__19404 = arguments.length;
switch (G__19404) {
case 0:
return vocloj.web.create_synthesizer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return vocloj.web.create_synthesizer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(vocloj.web.create_synthesizer.cljs$core$IFn$_invoke$arity$0 = (function (){
return vocloj.web.impl.create_synthesizer.cljs$core$IFn$_invoke$arity$0();
}));

(vocloj.web.create_synthesizer.cljs$core$IFn$_invoke$arity$1 = (function (atom_fn){
return vocloj.web.impl.create_synthesizer.cljs$core$IFn$_invoke$arity$1(atom_fn);
}));

(vocloj.web.create_synthesizer.cljs$lang$maxFixedArity = 1);

/**
 * Remove global listeners from the single speechSynthesis object
 * present on the browser window. This is only relevant to the web synthesizer.
 * 
 * This can be used in a reloaded environment to prevent hings like multiple on-voiceschanged
 * event listeners from being registered
 */
vocloj.web.remove_listeners = (function vocloj$web$remove_listeners(synth){
return vocloj.web.impl.remove_listeners(synth);
});
