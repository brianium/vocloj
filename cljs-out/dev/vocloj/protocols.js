// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('vocloj.protocols');
goog.require('cljs.core');
goog.require('cljs.core.constants');

/**
 * @interface
 */
vocloj.protocols.Initializable = function(){};

var vocloj$protocols$Initializable$_init$dyn_14561 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (vocloj.protocols._init[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (vocloj.protocols._init["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Initializable.-init",_);
}
}
});
/**
 * Initialize a type. Useful for setting up event streams and necessary resources
 */
vocloj.protocols._init = (function vocloj$protocols$_init(_){
if((((!((_ == null)))) && ((!((_.vocloj$protocols$Initializable$_init$arity$1 == null)))))){
return _.vocloj$protocols$Initializable$_init$arity$1(_);
} else {
return vocloj$protocols$Initializable$_init$dyn_14561(_);
}
});


/**
 * @interface
 */
vocloj.protocols.Lifecycle = function(){};

var vocloj$protocols$Lifecycle$_start$dyn_14562 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (vocloj.protocols._start[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (vocloj.protocols._start["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Lifecycle.-start",_);
}
}
});
/**
 * Start a component
 */
vocloj.protocols._start = (function vocloj$protocols$_start(_){
if((((!((_ == null)))) && ((!((_.vocloj$protocols$Lifecycle$_start$arity$1 == null)))))){
return _.vocloj$protocols$Lifecycle$_start$arity$1(_);
} else {
return vocloj$protocols$Lifecycle$_start$dyn_14562(_);
}
});

var vocloj$protocols$Lifecycle$_stop$dyn_14563 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (vocloj.protocols._stop[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (vocloj.protocols._stop["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Lifecycle.-stop",_);
}
}
});
/**
 * Stop a component
 */
vocloj.protocols._stop = (function vocloj$protocols$_stop(_){
if((((!((_ == null)))) && ((!((_.vocloj$protocols$Lifecycle$_stop$arity$1 == null)))))){
return _.vocloj$protocols$Lifecycle$_stop$arity$1(_);
} else {
return vocloj$protocols$Lifecycle$_stop$dyn_14563(_);
}
});


/**
 * @interface
 */
vocloj.protocols.Suspendable = function(){};

var vocloj$protocols$Suspendable$_pause$dyn_14564 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (vocloj.protocols._pause[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (vocloj.protocols._pause["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Suspendable.-pause",_);
}
}
});
/**
 * Pause a component
 */
vocloj.protocols._pause = (function vocloj$protocols$_pause(_){
if((((!((_ == null)))) && ((!((_.vocloj$protocols$Suspendable$_pause$arity$1 == null)))))){
return _.vocloj$protocols$Suspendable$_pause$arity$1(_);
} else {
return vocloj$protocols$Suspendable$_pause$dyn_14564(_);
}
});

var vocloj$protocols$Suspendable$_resume$dyn_14565 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (vocloj.protocols._resume[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (vocloj.protocols._resume["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Suspendable.-resume",_);
}
}
});
/**
 * Resume a component
 */
vocloj.protocols._resume = (function vocloj$protocols$_resume(_){
if((((!((_ == null)))) && ((!((_.vocloj$protocols$Suspendable$_resume$arity$1 == null)))))){
return _.vocloj$protocols$Suspendable$_resume$arity$1(_);
} else {
return vocloj$protocols$Suspendable$_resume$dyn_14565(_);
}
});


/**
 * @interface
 */
vocloj.protocols.SynthesizesSpeech = function(){};

var vocloj$protocols$SynthesizesSpeech$_cancel$dyn_14566 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (vocloj.protocols._cancel[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (vocloj.protocols._cancel["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("SynthesizesSpeech.-cancel",_);
}
}
});
/**
 * Cancel all speech, including any enqueued for further utterance
 */
vocloj.protocols._cancel = (function vocloj$protocols$_cancel(_){
if((((!((_ == null)))) && ((!((_.vocloj$protocols$SynthesizesSpeech$_cancel$arity$1 == null)))))){
return _.vocloj$protocols$SynthesizesSpeech$_cancel$arity$1(_);
} else {
return vocloj$protocols$SynthesizesSpeech$_cancel$dyn_14566(_);
}
});

var vocloj$protocols$SynthesizesSpeech$_speak$dyn_14567 = (function (_,voice_id,utterance){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (vocloj.protocols._speak[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(_,voice_id,utterance) : m__4429__auto__.call(null,_,voice_id,utterance));
} else {
var m__4426__auto__ = (vocloj.protocols._speak["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(_,voice_id,utterance) : m__4426__auto__.call(null,_,voice_id,utterance));
} else {
throw cljs.core.missing_protocol("SynthesizesSpeech.-speak",_);
}
}
});
/**
 * Speak an utterance using the given voice id
 */
vocloj.protocols._speak = (function vocloj$protocols$_speak(_,voice_id,utterance){
if((((!((_ == null)))) && ((!((_.vocloj$protocols$SynthesizesSpeech$_speak$arity$3 == null)))))){
return _.vocloj$protocols$SynthesizesSpeech$_speak$arity$3(_,voice_id,utterance);
} else {
return vocloj$protocols$SynthesizesSpeech$_speak$dyn_14567(_,voice_id,utterance);
}
});


/**
 * @interface
 */
vocloj.protocols.StateMachine = function(){};

var vocloj$protocols$StateMachine$_add_effect$dyn_14568 = (function (_,key,fn_3){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (vocloj.protocols._add_effect[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(_,key,fn_3) : m__4429__auto__.call(null,_,key,fn_3));
} else {
var m__4426__auto__ = (vocloj.protocols._add_effect["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(_,key,fn_3) : m__4426__auto__.call(null,_,key,fn_3));
} else {
throw cljs.core.missing_protocol("StateMachine.-add-effect",_);
}
}
});
/**
 * Add a side effect that is invoked when a change to state happens. Is called with the state machine, previous, and next state
 */
vocloj.protocols._add_effect = (function vocloj$protocols$_add_effect(_,key,fn_3){
if((((!((_ == null)))) && ((!((_.vocloj$protocols$StateMachine$_add_effect$arity$3 == null)))))){
return _.vocloj$protocols$StateMachine$_add_effect$arity$3(_,key,fn_3);
} else {
return vocloj$protocols$StateMachine$_add_effect$dyn_14568(_,key,fn_3);
}
});

var vocloj$protocols$StateMachine$_transition$dyn_14569 = (function (_,event,payload){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (vocloj.protocols._transition[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(_,event,payload) : m__4429__auto__.call(null,_,event,payload));
} else {
var m__4426__auto__ = (vocloj.protocols._transition["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(_,event,payload) : m__4426__auto__.call(null,_,event,payload));
} else {
throw cljs.core.missing_protocol("StateMachine.-transition",_);
}
}
});
/**
 * Transition the state machine to a new state
 */
vocloj.protocols._transition = (function vocloj$protocols$_transition(_,event,payload){
if((((!((_ == null)))) && ((!((_.vocloj$protocols$StateMachine$_transition$arity$3 == null)))))){
return _.vocloj$protocols$StateMachine$_transition$arity$3(_,event,payload);
} else {
return vocloj$protocols$StateMachine$_transition$dyn_14569(_,event,payload);
}
});

var vocloj$protocols$StateMachine$_current_state$dyn_14570 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (vocloj.protocols._current_state[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (vocloj.protocols._current_state["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("StateMachine.-current-state",_);
}
}
});
/**
 * Return the current state of the state machine
 */
vocloj.protocols._current_state = (function vocloj$protocols$_current_state(_){
if((((!((_ == null)))) && ((!((_.vocloj$protocols$StateMachine$_current_state$arity$1 == null)))))){
return _.vocloj$protocols$StateMachine$_current_state$arity$1(_);
} else {
return vocloj$protocols$StateMachine$_current_state$dyn_14570(_);
}
});


/**
 * @interface
 */
vocloj.protocols.ReceivesSpeech = function(){};

var vocloj$protocols$ReceivesSpeech$_get_speech_channel$dyn_14571 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (vocloj.protocols._get_speech_channel[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (vocloj.protocols._get_speech_channel["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ReceivesSpeech.-get-speech-channel",_);
}
}
});
/**
 * Returns a channel that receives speech data
 */
vocloj.protocols._get_speech_channel = (function vocloj$protocols$_get_speech_channel(_){
if((((!((_ == null)))) && ((!((_.vocloj$protocols$ReceivesSpeech$_get_speech_channel$arity$1 == null)))))){
return _.vocloj$protocols$ReceivesSpeech$_get_speech_channel$arity$1(_);
} else {
return vocloj$protocols$ReceivesSpeech$_get_speech_channel$dyn_14571(_);
}
});

var vocloj$protocols$ReceivesSpeech$_listen$dyn_14572 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (vocloj.protocols._listen[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (vocloj.protocols._listen["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ReceivesSpeech.-listen",_);
}
}
});
/**
 * Start listening for speech
 */
vocloj.protocols._listen = (function vocloj$protocols$_listen(_){
if((((!((_ == null)))) && ((!((_.vocloj$protocols$ReceivesSpeech$_listen$arity$1 == null)))))){
return _.vocloj$protocols$ReceivesSpeech$_listen$arity$1(_);
} else {
return vocloj$protocols$ReceivesSpeech$_listen$dyn_14572(_);
}
});

var vocloj$protocols$ReceivesSpeech$_get_stop_channel$dyn_14573 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (vocloj.protocols._get_stop_channel[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (vocloj.protocols._get_stop_channel["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ReceivesSpeech.-get-stop-channel",_);
}
}
});
/**
 * Return a channel that receives stop signals
 */
vocloj.protocols._get_stop_channel = (function vocloj$protocols$_get_stop_channel(_){
if((((!((_ == null)))) && ((!((_.vocloj$protocols$ReceivesSpeech$_get_stop_channel$arity$1 == null)))))){
return _.vocloj$protocols$ReceivesSpeech$_get_stop_channel$arity$1(_);
} else {
return vocloj$protocols$ReceivesSpeech$_get_stop_channel$dyn_14573(_);
}
});

