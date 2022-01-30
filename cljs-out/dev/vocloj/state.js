// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('vocloj.state');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('vocloj.state.impl');
/**
 * Create a vocloj state machine backed by atoms.
 * 
 * This function can be called with three arguments to specify the function
 * used for creating the atom. This is useful for atom like types such as reagent's
 * ratoms:
 * 
 * ```clojure
 * (create-atom-state-machine states default reagent.core/atom)
 * ```
 * 
 * The states map should be a hash map indicated supported states and their
 * allowed transitions. A transition key is a named event and the transition
 * value is the expected state after said event occurs:
 * 
 * ```clojure
 * {:speaking {:pause :paused}
 *  :paused   {:resume :speaking}}
 * ```
 * 
 * The above state map indicates that only when the state machine is in a speaking state,
 * can a pause event be used via core.transition to move the machine to a paused state. Similarly,
 * only a paused machine can be resumed to a speaking state via a resume event.
 * 
 * The initial-state must be a map that will be used as the initial value of the underlying
 * atom map's :data value.
 * 
 * If an atom-fn is given, it will be called with the initial state provided
 * to this function. This may be useful for something like using reagent's "ratoms" instead of
 * Clojure's own atoms.
 */
vocloj.state.create_atom_state_machine = (function vocloj$state$create_atom_state_machine(var_args){
var G__19241 = arguments.length;
switch (G__19241) {
case 2:
return vocloj.state.create_atom_state_machine.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return vocloj.state.create_atom_state_machine.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(vocloj.state.create_atom_state_machine.cljs$core$IFn$_invoke$arity$2 = (function (states,initial_state){
return vocloj.state.create_atom_state_machine.cljs$core$IFn$_invoke$arity$3(states,initial_state,cljs.core.atom);
}));

(vocloj.state.create_atom_state_machine.cljs$core$IFn$_invoke$arity$3 = (function (states,initial_state,atom_fn){
return vocloj.state.impl.__GT_AtomStateMachine(states,(atom_fn.cljs$core$IFn$_invoke$arity$1 ? atom_fn.cljs$core$IFn$_invoke$arity$1(initial_state) : atom_fn.call(null,initial_state)));
}));

(vocloj.state.create_atom_state_machine.cljs$lang$maxFixedArity = 3);

/**
 * This is merely a suggestion for recognizer state machines.
 * 
 * The atom-fn functions per create-atom-state-machine.
 * 
 * The underlying state machine supports the following states:
 * 
 * ```clojure
 * {:dormant   {:init :ready}
 *  :ready     {:start :listening}
 *  :listening {:stop :dormant}} 
 * ```
 * 
 * The initial state reflects a dormant recognizer with nil data in state. A dormant
 * recognizer will do nothing until it is initialized then started.
 */
vocloj.state.create_recognizer_state_machine = (function vocloj$state$create_recognizer_state_machine(var_args){
var G__19244 = arguments.length;
switch (G__19244) {
case 1:
return vocloj.state.create_recognizer_state_machine.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return vocloj.state.create_recognizer_state_machine.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(vocloj.state.create_recognizer_state_machine.cljs$core$IFn$_invoke$arity$1 = (function (atom_fn){
return vocloj.state.create_atom_state_machine.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$dormant,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$init,cljs.core.cst$kw$ready], null),cljs.core.cst$kw$ready,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$start,cljs.core.cst$kw$listening], null),cljs.core.cst$kw$listening,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stop,cljs.core.cst$kw$dormant], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$state,cljs.core.cst$kw$dormant,cljs.core.cst$kw$data,null], null),atom_fn);
}));

(vocloj.state.create_recognizer_state_machine.cljs$core$IFn$_invoke$arity$0 = (function (){
return vocloj.state.create_recognizer_state_machine.cljs$core$IFn$_invoke$arity$1(cljs.core.atom);
}));

(vocloj.state.create_recognizer_state_machine.cljs$lang$maxFixedArity = 1);

/**
 * This is merely a suggestion for synthesizer state machines.
 * 
 * The atom-fn functions per create-atom-state-machine.
 * 
 * The underlying state machine supports the following states:
 * 
 * ```clojure
 * {:dormant     {:init  :ready}
 *  :ready       {:change-voices :ready
 *                :speak         :speaking}
 *  :speaking    {:pause :paused
 *                :end   :ready}
 *  :paused      {:resume :speaking}}
 * ```
 * 
 * The initial state reflects a dormant synthesizer with nil data in state. A dormant
 * synthesizer will do nothing until it is initialized.
 */
vocloj.state.create_synthesis_state_machine = (function vocloj$state$create_synthesis_state_machine(var_args){
var G__19247 = arguments.length;
switch (G__19247) {
case 1:
return vocloj.state.create_synthesis_state_machine.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return vocloj.state.create_synthesis_state_machine.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(vocloj.state.create_synthesis_state_machine.cljs$core$IFn$_invoke$arity$1 = (function (atom_fn){
return vocloj.state.create_atom_state_machine.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$dormant,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$init,cljs.core.cst$kw$ready], null),cljs.core.cst$kw$ready,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$change_DASH_voices,cljs.core.cst$kw$ready,cljs.core.cst$kw$speak,cljs.core.cst$kw$speaking], null),cljs.core.cst$kw$speaking,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,cljs.core.cst$kw$paused,cljs.core.cst$kw$end,cljs.core.cst$kw$ready], null),cljs.core.cst$kw$paused,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$resume,cljs.core.cst$kw$speaking], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$state,cljs.core.cst$kw$dormant,cljs.core.cst$kw$data,null], null),atom_fn);
}));

(vocloj.state.create_synthesis_state_machine.cljs$core$IFn$_invoke$arity$0 = (function (){
return vocloj.state.create_synthesis_state_machine.cljs$core$IFn$_invoke$arity$1(cljs.core.atom);
}));

(vocloj.state.create_synthesis_state_machine.cljs$lang$maxFixedArity = 1);

/**
 * This is merely a suggestion for microphone state machines.
 * 
 * The atom-fn functions per create-atom-state-machine.
 * 
 * The underlying state machine supports the following states:
 * 
 * ```clojure
 * {:dormant    {:error :error
 *               :init  :ready}
 *   :error     {:error :error
 *               :init  :ready}
 *   :stopped   {:error :error
 *               :init  :ready}
 *   :ready     {:start :recording}
 *   :recording {:end   :dormant
 *               :error :error
 *               :mute  :muted
 *               :pause :paused
 *               :stop  :stopped}
 *   :muted     {:end    :dormant
 *               :stop   :stopped
 *               :unmute :recording}
 *   :paused    {:end    :dormant
 *               :mute   :muted
 *               :resume :record
 *               :stop   :stopped}}
 * ```
 * 
 * The initial state reflects a dormant microphone with nil data in state. A dormant
 * synthesizer will do nothing until it is initialized.
 */
vocloj.state.create_microphone_stream_state_machine = (function vocloj$state$create_microphone_stream_state_machine(var_args){
var G__19250 = arguments.length;
switch (G__19250) {
case 1:
return vocloj.state.create_microphone_stream_state_machine.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return vocloj.state.create_microphone_stream_state_machine.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(vocloj.state.create_microphone_stream_state_machine.cljs$core$IFn$_invoke$arity$1 = (function (atom_fn){
return vocloj.state.create_atom_state_machine.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$dormant,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$error,cljs.core.cst$kw$init,cljs.core.cst$kw$ready], null),cljs.core.cst$kw$error,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$error,cljs.core.cst$kw$init,cljs.core.cst$kw$ready], null),cljs.core.cst$kw$stopped,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$error,cljs.core.cst$kw$init,cljs.core.cst$kw$ready], null),cljs.core.cst$kw$ready,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$start,cljs.core.cst$kw$recording], null),cljs.core.cst$kw$recording,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$end,cljs.core.cst$kw$dormant,cljs.core.cst$kw$error,cljs.core.cst$kw$error,cljs.core.cst$kw$mute,cljs.core.cst$kw$muted,cljs.core.cst$kw$pause,cljs.core.cst$kw$paused,cljs.core.cst$kw$stop,cljs.core.cst$kw$stopped], null),cljs.core.cst$kw$muted,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$end,cljs.core.cst$kw$dormant,cljs.core.cst$kw$stop,cljs.core.cst$kw$stopped,cljs.core.cst$kw$unmute,cljs.core.cst$kw$recording], null),cljs.core.cst$kw$paused,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$end,cljs.core.cst$kw$dormant,cljs.core.cst$kw$mute,cljs.core.cst$kw$muted,cljs.core.cst$kw$resume,cljs.core.cst$kw$record,cljs.core.cst$kw$stop,cljs.core.cst$kw$stopped], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$state,cljs.core.cst$kw$dormant,cljs.core.cst$kw$data,null], null),atom_fn);
}));

(vocloj.state.create_microphone_stream_state_machine.cljs$core$IFn$_invoke$arity$0 = (function (){
return vocloj.state.create_microphone_stream_state_machine.cljs$core$IFn$_invoke$arity$1(cljs.core.atom);
}));

(vocloj.state.create_microphone_stream_state_machine.cljs$lang$maxFixedArity = 1);

