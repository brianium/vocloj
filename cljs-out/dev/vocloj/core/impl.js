// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('vocloj.core.impl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
goog.require('vocloj.protocols');
vocloj.core.impl.from_QMARK_ = (function vocloj$core$impl$from_QMARK_(prev,state){
if(cljs.core.set_QMARK_(prev)){
return (prev.cljs$core$IFn$_invoke$arity$1 ? prev.cljs$core$IFn$_invoke$arity$1(state) : prev.call(null,state));
} else {
if((prev instanceof cljs.core.Keyword)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prev,state);
} else {
return null;

}
}
});
vocloj.core.impl.add_effect = (function vocloj$core$impl$add_effect(var_args){
var G__18480 = arguments.length;
switch (G__18480) {
case 3:
return vocloj.core.impl.add_effect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return vocloj.core.impl.add_effect.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(vocloj.core.impl.add_effect.cljs$core$IFn$_invoke$arity$3 = (function (sm,key,fn_3){
vocloj.protocols._add_effect(sm,key,fn_3);

return sm;
}));

(vocloj.core.impl.add_effect.cljs$core$IFn$_invoke$arity$5 = (function (sm,key,from,to,fn_3){
return vocloj.core.impl.add_effect.cljs$core$IFn$_invoke$arity$3(sm,key,(function (sm__$1,old,new$){
if(cljs.core.truth_((function (){var and__4115__auto__ = vocloj.core.impl.from_QMARK_(from,cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(old));
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to,cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(new$));
} else {
return and__4115__auto__;
}
})())){
return (fn_3.cljs$core$IFn$_invoke$arity$3 ? fn_3.cljs$core$IFn$_invoke$arity$3(sm__$1,old,new$) : fn_3.call(null,sm__$1,old,new$));
} else {
return null;
}
}));
}));

(vocloj.core.impl.add_effect.cljs$lang$maxFixedArity = 5);

/**
 * Transition the given state machine to a new state. The implementation of the state machine
 * should guarantee that only valid transitions are performed.
 */
vocloj.core.impl.transition = (function vocloj$core$impl$transition(var_args){
var G__18484 = arguments.length;
switch (G__18484) {
case 3:
return vocloj.core.impl.transition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return vocloj.core.impl.transition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(vocloj.core.impl.transition.cljs$core$IFn$_invoke$arity$3 = (function (sm,event,payload){
vocloj.protocols._transition(sm,event,(function (){var G__18486 = ((cljs.core.fn_QMARK_(payload))?(payload.cljs$core$IFn$_invoke$arity$1 ? payload.cljs$core$IFn$_invoke$arity$1(sm) : payload.call(null,sm)):payload);
var fexpr__18485 = (function (p1__18482_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__18482_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$last_DASH_event,event], null)], 0));
});
return fexpr__18485(G__18486);
})());

return sm;
}));

(vocloj.core.impl.transition.cljs$core$IFn$_invoke$arity$2 = (function (sm,event){
return vocloj.core.impl.transition.cljs$core$IFn$_invoke$arity$3(sm,event,null);
}));

(vocloj.core.impl.transition.cljs$lang$maxFixedArity = 3);

/**
 * Return the current state of the given state machine
 */
vocloj.core.impl.current_state = (function vocloj$core$impl$current_state(sm){
return vocloj.protocols._current_state(sm);
});
vocloj.core.impl.get_speech_channel = (function vocloj$core$impl$get_speech_channel(speech_receiver){
return vocloj.protocols._get_speech_channel(speech_receiver);
});
vocloj.core.impl.get_stop_channel = (function vocloj$core$impl$get_stop_channel(speech_receiver){
return vocloj.protocols._get_stop_channel(speech_receiver);
});
/**
 * Initialize the given speech recognizer
 */
vocloj.core.impl.init = (function vocloj$core$impl$init(initializable){
vocloj.protocols._init(initializable);

return initializable;
});
/**
 * Start the given speech recognizer
 */
vocloj.core.impl.start = (function vocloj$core$impl$start(recognizer){
vocloj.protocols._start(recognizer);

return recognizer;
});
/**
 * Stop the given speech recognizer
 */
vocloj.core.impl.stop = (function vocloj$core$impl$stop(recognizer){
vocloj.protocols._stop(recognizer);

return recognizer;
});
/**
 * Causes the given speech receiver to start listening for speech input.
 * 
 * When called with one argument, the receiver is initialized then started
 * and the underlying result channel is returned.
 * 
 * When called with two arguments, speech results will be passed to the given function
 * as they are made available.
 */
vocloj.core.impl.listen = (function vocloj$core$impl$listen(var_args){
var G__18489 = arguments.length;
switch (G__18489) {
case 1:
return vocloj.core.impl.listen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return vocloj.core.impl.listen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(vocloj.core.impl.listen.cljs$core$IFn$_invoke$arity$1 = (function (speech_receiver){
return vocloj.core.impl.get_speech_channel(vocloj.protocols._listen(speech_receiver));
}));

(vocloj.core.impl.listen.cljs$core$IFn$_invoke$arity$2 = (function (speech_receiver,handler){
var ch = vocloj.core.impl.listen.cljs$core$IFn$_invoke$arity$1(speech_receiver);
var stop_ch = vocloj.core.impl.get_stop_channel(speech_receiver);
var c__16486__auto___18527 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16487__auto__ = (function (){var switch__16411__auto__ = (function (state_18511){
var state_val_18512 = (state_18511[(1)]);
if((state_val_18512 === (1))){
var state_18511__$1 = state_18511;
var statearr_18513_18528 = state_18511__$1;
(statearr_18513_18528[(2)] = null);

(statearr_18513_18528[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18512 === (2))){
var inst_18494 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18495 = [ch,stop_ch];
var inst_18496 = (new cljs.core.PersistentVector(null,2,(5),inst_18494,inst_18495,null));
var state_18511__$1 = state_18511;
return cljs.core.async.ioc_alts_BANG_(state_18511__$1,(4),inst_18496);
} else {
if((state_val_18512 === (3))){
var inst_18509 = (state_18511[(2)]);
var state_18511__$1 = state_18511;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18511__$1,inst_18509);
} else {
if((state_val_18512 === (4))){
var inst_18498 = (state_18511[(2)]);
var inst_18499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18498,(0),null);
var inst_18500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18498,(1),null);
var inst_18501 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18500,ch);
var state_18511__$1 = (function (){var statearr_18514 = state_18511;
(statearr_18514[(7)] = inst_18499);

return statearr_18514;
})();
if(inst_18501){
var statearr_18515_18529 = state_18511__$1;
(statearr_18515_18529[(1)] = (5));

} else {
var statearr_18516_18530 = state_18511__$1;
(statearr_18516_18530[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18512 === (5))){
var inst_18499 = (state_18511[(7)]);
var inst_18503 = (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(inst_18499) : handler.call(null,inst_18499));
var state_18511__$1 = (function (){var statearr_18517 = state_18511;
(statearr_18517[(8)] = inst_18503);

return statearr_18517;
})();
var statearr_18518_18531 = state_18511__$1;
(statearr_18518_18531[(2)] = null);

(statearr_18518_18531[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18512 === (6))){
var state_18511__$1 = state_18511;
var statearr_18519_18532 = state_18511__$1;
(statearr_18519_18532[(2)] = null);

(statearr_18519_18532[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18512 === (7))){
var inst_18507 = (state_18511[(2)]);
var state_18511__$1 = state_18511;
var statearr_18520_18533 = state_18511__$1;
(statearr_18520_18533[(2)] = inst_18507);

(statearr_18520_18533[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});
return (function() {
var vocloj$core$impl$state_machine__16412__auto__ = null;
var vocloj$core$impl$state_machine__16412__auto____0 = (function (){
var statearr_18521 = [null,null,null,null,null,null,null,null,null];
(statearr_18521[(0)] = vocloj$core$impl$state_machine__16412__auto__);

(statearr_18521[(1)] = (1));

return statearr_18521;
});
var vocloj$core$impl$state_machine__16412__auto____1 = (function (state_18511){
while(true){
var ret_value__16413__auto__ = (function (){try{while(true){
var result__16414__auto__ = switch__16411__auto__(state_18511);
if(cljs.core.keyword_identical_QMARK_(result__16414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16414__auto__;
}
break;
}
}catch (e18522){var ex__16415__auto__ = e18522;
var statearr_18523_18534 = state_18511;
(statearr_18523_18534[(2)] = ex__16415__auto__);


if(cljs.core.seq((state_18511[(4)]))){
var statearr_18524_18535 = state_18511;
(statearr_18524_18535[(1)] = cljs.core.first((state_18511[(4)])));

} else {
throw ex__16415__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16413__auto__,cljs.core.cst$kw$recur)){
var G__18536 = state_18511;
state_18511 = G__18536;
continue;
} else {
return ret_value__16413__auto__;
}
break;
}
});
vocloj$core$impl$state_machine__16412__auto__ = function(state_18511){
switch(arguments.length){
case 0:
return vocloj$core$impl$state_machine__16412__auto____0.call(this);
case 1:
return vocloj$core$impl$state_machine__16412__auto____1.call(this,state_18511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vocloj$core$impl$state_machine__16412__auto__.cljs$core$IFn$_invoke$arity$0 = vocloj$core$impl$state_machine__16412__auto____0;
vocloj$core$impl$state_machine__16412__auto__.cljs$core$IFn$_invoke$arity$1 = vocloj$core$impl$state_machine__16412__auto____1;
return vocloj$core$impl$state_machine__16412__auto__;
})()
})();
var state__16488__auto__ = (function (){var statearr_18525 = (f__16487__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16487__auto__.cljs$core$IFn$_invoke$arity$0() : f__16487__auto__.call(null));
(statearr_18525[(6)] = c__16486__auto___18527);

return statearr_18525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16488__auto__);
}));


return speech_receiver;
}));

(vocloj.core.impl.listen.cljs$lang$maxFixedArity = 2);

/**
 * Cancel the given speech synthesizer
 */
vocloj.core.impl.cancel = (function vocloj$core$impl$cancel(synth){
vocloj.protocols._cancel(synth);

return synth;
});
/**
 * Pause the given speech synthesizer
 */
vocloj.core.impl.pause = (function vocloj$core$impl$pause(synth){
vocloj.protocols._pause(synth);

return synth;
});
/**
 * Resume the given speech synthesizer
 */
vocloj.core.impl.resume = (function vocloj$core$impl$resume(synth){
vocloj.protocols._resume(synth);

return synth;
});
/**
 * Use the given speech synthesizer to speech the given utterance using a voice
 * identified by voice-id
 */
vocloj.core.impl.speak = (function vocloj$core$impl$speak(synth,voice_id,utterance){
vocloj.protocols._speak(synth,voice_id,utterance);

return synth;
});
