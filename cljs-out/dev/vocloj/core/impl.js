// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('vocloj.core.impl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
goog.require('vocloj.protocols');
vocloj.core.impl.add_effect = (function vocloj$core$impl$add_effect(var_args){
var G__19430 = arguments.length;
switch (G__19430) {
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
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from,cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(old))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to,cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(new$))))){
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
var G__19434 = arguments.length;
switch (G__19434) {
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
vocloj.protocols._transition(sm,event,(function (){var G__19436 = ((cljs.core.fn_QMARK_(payload))?(payload.cljs$core$IFn$_invoke$arity$1 ? payload.cljs$core$IFn$_invoke$arity$1(sm) : payload.call(null,sm)):payload);
var fexpr__19435 = (function (p1__19432_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__19432_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$last_DASH_event,event], null)], 0));
});
return fexpr__19435(G__19436);
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
 * A shortcut for calling init then start on the given speech recognizer.
 * 
 * When called with one argument, the recognizer is initialized then started
 * and the underlying result channel is returned.
 * 
 * When called with two arguments, speech results will be passed to the given function
 * as they are made available.
 */
vocloj.core.impl.listen = (function vocloj$core$impl$listen(var_args){
var G__19439 = arguments.length;
switch (G__19439) {
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

(vocloj.core.impl.listen.cljs$core$IFn$_invoke$arity$1 = (function (recognizer){
return cljs.core.cst$kw$speech_DASH_ch.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(vocloj.core.impl.current_state(vocloj.core.impl.start(vocloj.core.impl.init(recognizer)))));
}));

(vocloj.core.impl.listen.cljs$core$IFn$_invoke$arity$2 = (function (recognizer,handler){
var ch = vocloj.core.impl.listen.cljs$core$IFn$_invoke$arity$1(recognizer);
var stop_ch = cljs.core.cst$kw$stop_DASH_ch.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(vocloj.core.impl.current_state(recognizer)));
var c__15502__auto___19477 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15503__auto__ = (function (){var switch__15375__auto__ = (function (state_19461){
var state_val_19462 = (state_19461[(1)]);
if((state_val_19462 === (1))){
var state_19461__$1 = state_19461;
var statearr_19463_19478 = state_19461__$1;
(statearr_19463_19478[(2)] = null);

(statearr_19463_19478[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19462 === (2))){
var inst_19444 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19445 = [ch,stop_ch];
var inst_19446 = (new cljs.core.PersistentVector(null,2,(5),inst_19444,inst_19445,null));
var state_19461__$1 = state_19461;
return cljs.core.async.ioc_alts_BANG_(state_19461__$1,(4),inst_19446);
} else {
if((state_val_19462 === (3))){
var inst_19459 = (state_19461[(2)]);
var state_19461__$1 = state_19461;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19461__$1,inst_19459);
} else {
if((state_val_19462 === (4))){
var inst_19448 = (state_19461[(2)]);
var inst_19449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19448,(0),null);
var inst_19450 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19448,(1),null);
var inst_19451 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19450,ch);
var state_19461__$1 = (function (){var statearr_19464 = state_19461;
(statearr_19464[(7)] = inst_19449);

return statearr_19464;
})();
if(inst_19451){
var statearr_19465_19479 = state_19461__$1;
(statearr_19465_19479[(1)] = (5));

} else {
var statearr_19466_19480 = state_19461__$1;
(statearr_19466_19480[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19462 === (5))){
var inst_19449 = (state_19461[(7)]);
var inst_19453 = (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(inst_19449) : handler.call(null,inst_19449));
var state_19461__$1 = (function (){var statearr_19467 = state_19461;
(statearr_19467[(8)] = inst_19453);

return statearr_19467;
})();
var statearr_19468_19481 = state_19461__$1;
(statearr_19468_19481[(2)] = null);

(statearr_19468_19481[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19462 === (6))){
var state_19461__$1 = state_19461;
var statearr_19469_19482 = state_19461__$1;
(statearr_19469_19482[(2)] = null);

(statearr_19469_19482[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19462 === (7))){
var inst_19457 = (state_19461[(2)]);
var state_19461__$1 = state_19461;
var statearr_19470_19483 = state_19461__$1;
(statearr_19470_19483[(2)] = inst_19457);

(statearr_19470_19483[(1)] = (3));


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
var vocloj$core$impl$state_machine__15376__auto__ = null;
var vocloj$core$impl$state_machine__15376__auto____0 = (function (){
var statearr_19471 = [null,null,null,null,null,null,null,null,null];
(statearr_19471[(0)] = vocloj$core$impl$state_machine__15376__auto__);

(statearr_19471[(1)] = (1));

return statearr_19471;
});
var vocloj$core$impl$state_machine__15376__auto____1 = (function (state_19461){
while(true){
var ret_value__15377__auto__ = (function (){try{while(true){
var result__15378__auto__ = switch__15375__auto__(state_19461);
if(cljs.core.keyword_identical_QMARK_(result__15378__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15378__auto__;
}
break;
}
}catch (e19472){var ex__15379__auto__ = e19472;
var statearr_19473_19484 = state_19461;
(statearr_19473_19484[(2)] = ex__15379__auto__);


if(cljs.core.seq((state_19461[(4)]))){
var statearr_19474_19485 = state_19461;
(statearr_19474_19485[(1)] = cljs.core.first((state_19461[(4)])));

} else {
throw ex__15379__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15377__auto__,cljs.core.cst$kw$recur)){
var G__19486 = state_19461;
state_19461 = G__19486;
continue;
} else {
return ret_value__15377__auto__;
}
break;
}
});
vocloj$core$impl$state_machine__15376__auto__ = function(state_19461){
switch(arguments.length){
case 0:
return vocloj$core$impl$state_machine__15376__auto____0.call(this);
case 1:
return vocloj$core$impl$state_machine__15376__auto____1.call(this,state_19461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vocloj$core$impl$state_machine__15376__auto__.cljs$core$IFn$_invoke$arity$0 = vocloj$core$impl$state_machine__15376__auto____0;
vocloj$core$impl$state_machine__15376__auto__.cljs$core$IFn$_invoke$arity$1 = vocloj$core$impl$state_machine__15376__auto____1;
return vocloj$core$impl$state_machine__15376__auto__;
})()
})();
var state__15504__auto__ = (function (){var statearr_19475 = (f__15503__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15503__auto__.cljs$core$IFn$_invoke$arity$0() : f__15503__auto__.call(null));
(statearr_19475[(6)] = c__15502__auto___19477);

return statearr_19475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15504__auto__);
}));


return recognizer;
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
 * Use the given speech synthesizer to speach the given utterance using a voice
 * identified by voice-id
 */
vocloj.core.impl.speak = (function vocloj$core$impl$speak(synth,voice_id,utterance){
vocloj.protocols._speak(synth,voice_id,utterance);

return synth;
});
