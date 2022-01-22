// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('vocloj.protocols');
goog.require('cljs.core');
goog.require('cljs.core.constants');

/**
 * @interface
 */
vocloj.protocols.Initializes = function(){};

var vocloj$protocols$Initializes$_init$dyn_10373 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (vocloj.protocols._init[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (vocloj.protocols._init["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Initializes.-init",_);
}
}
});
/**
 * Initialize a type. Useful for setting up event streams and necessary resources
 */
vocloj.protocols._init = (function vocloj$protocols$_init(_){
if((((!((_ == null)))) && ((!((_.vocloj$protocols$Initializes$_init$arity$1 == null)))))){
return _.vocloj$protocols$Initializes$_init$arity$1(_);
} else {
return vocloj$protocols$Initializes$_init$dyn_10373(_);
}
});


/**
 * @interface
 */
vocloj.protocols.RecognizesSpeech = function(){};

var vocloj$protocols$RecognizesSpeech$_start$dyn_10374 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (vocloj.protocols._start[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (vocloj.protocols._start["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("RecognizesSpeech.-start",_);
}
}
});
/**
 * Start speech recognition. Returns a channel that receives results
 */
vocloj.protocols._start = (function vocloj$protocols$_start(_){
if((((!((_ == null)))) && ((!((_.vocloj$protocols$RecognizesSpeech$_start$arity$1 == null)))))){
return _.vocloj$protocols$RecognizesSpeech$_start$arity$1(_);
} else {
return vocloj$protocols$RecognizesSpeech$_start$dyn_10374(_);
}
});

var vocloj$protocols$RecognizesSpeech$_stop$dyn_10375 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (vocloj.protocols._stop[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (vocloj.protocols._stop["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("RecognizesSpeech.-stop",_);
}
}
});
/**
 * Stop attempting to recognize speech
 */
vocloj.protocols._stop = (function vocloj$protocols$_stop(_){
if((((!((_ == null)))) && ((!((_.vocloj$protocols$RecognizesSpeech$_stop$arity$1 == null)))))){
return _.vocloj$protocols$RecognizesSpeech$_stop$arity$1(_);
} else {
return vocloj$protocols$RecognizesSpeech$_stop$dyn_10375(_);
}
});


/**
 * @interface
 */
vocloj.protocols.SynthesizesSpeech = function(){};

var vocloj$protocols$SynthesizesSpeech$_cancel$dyn_10376 = (function (_){
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
return vocloj$protocols$SynthesizesSpeech$_cancel$dyn_10376(_);
}
});

var vocloj$protocols$SynthesizesSpeech$_pause$dyn_10377 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (vocloj.protocols._pause[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (vocloj.protocols._pause["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("SynthesizesSpeech.-pause",_);
}
}
});
/**
 * Pause the currently spoken utterance
 */
vocloj.protocols._pause = (function vocloj$protocols$_pause(_){
if((((!((_ == null)))) && ((!((_.vocloj$protocols$SynthesizesSpeech$_pause$arity$1 == null)))))){
return _.vocloj$protocols$SynthesizesSpeech$_pause$arity$1(_);
} else {
return vocloj$protocols$SynthesizesSpeech$_pause$dyn_10377(_);
}
});

var vocloj$protocols$SynthesizesSpeech$_resume$dyn_10378 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (vocloj.protocols._resume[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (vocloj.protocols._resume["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("SynthesizesSpeech.-resume",_);
}
}
});
/**
 * Resume a paused utterance
 */
vocloj.protocols._resume = (function vocloj$protocols$_resume(_){
if((((!((_ == null)))) && ((!((_.vocloj$protocols$SynthesizesSpeech$_resume$arity$1 == null)))))){
return _.vocloj$protocols$SynthesizesSpeech$_resume$arity$1(_);
} else {
return vocloj$protocols$SynthesizesSpeech$_resume$dyn_10378(_);
}
});

var vocloj$protocols$SynthesizesSpeech$_speak$dyn_10379 = (function (_,voice_id,utterance){
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
return vocloj$protocols$SynthesizesSpeech$_speak$dyn_10379(_,voice_id,utterance);
}
});


/**
 * @interface
 */
vocloj.protocols.StateMachine = function(){};

var vocloj$protocols$StateMachine$_add_effect$dyn_10380 = (function (_,key,fn_3){
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
return vocloj$protocols$StateMachine$_add_effect$dyn_10380(_,key,fn_3);
}
});

var vocloj$protocols$StateMachine$_transition$dyn_10381 = (function (_,event,payload){
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
return vocloj$protocols$StateMachine$_transition$dyn_10381(_,event,payload);
}
});

var vocloj$protocols$StateMachine$_current_state$dyn_10382 = (function (_){
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
return vocloj$protocols$StateMachine$_current_state$dyn_10382(_);
}
});

