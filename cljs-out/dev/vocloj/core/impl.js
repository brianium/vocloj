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
var G__18644 = arguments.length;
switch (G__18644) {
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
var G__18648 = arguments.length;
switch (G__18648) {
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
vocloj.protocols._transition(sm,event,(function (){var G__18650 = ((cljs.core.fn_QMARK_(payload))?(payload.cljs$core$IFn$_invoke$arity$1 ? payload.cljs$core$IFn$_invoke$arity$1(sm) : payload.call(null,sm)):payload);
var fexpr__18649 = (function (p1__18646_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__18646_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$last_DASH_event,event], null)], 0));
});
return fexpr__18649(G__18650);
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
vocloj.core.impl.init = (function vocloj$core$impl$init(initializable){
vocloj.protocols._init(initializable);

return initializable;
});
vocloj.core.impl.start = (function vocloj$core$impl$start(component){
vocloj.protocols._start(component);

return component;
});
vocloj.core.impl.stop = (function vocloj$core$impl$stop(component){
vocloj.protocols._stop(component);

return component;
});
vocloj.core.impl.listen = (function vocloj$core$impl$listen(var_args){
var G__18653 = arguments.length;
switch (G__18653) {
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
var c__16650__auto___18691 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16651__auto__ = (function (){var switch__14816__auto__ = (function (state_18675){
var state_val_18676 = (state_18675[(1)]);
if((state_val_18676 === (1))){
var state_18675__$1 = state_18675;
var statearr_18677_18692 = state_18675__$1;
(statearr_18677_18692[(2)] = null);

(statearr_18677_18692[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18676 === (2))){
var inst_18658 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18659 = [ch,stop_ch];
var inst_18660 = (new cljs.core.PersistentVector(null,2,(5),inst_18658,inst_18659,null));
var state_18675__$1 = state_18675;
return cljs.core.async.ioc_alts_BANG_(state_18675__$1,(4),inst_18660);
} else {
if((state_val_18676 === (3))){
var inst_18673 = (state_18675[(2)]);
var state_18675__$1 = state_18675;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18675__$1,inst_18673);
} else {
if((state_val_18676 === (4))){
var inst_18662 = (state_18675[(2)]);
var inst_18663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18662,(0),null);
var inst_18664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18662,(1),null);
var inst_18665 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18664,ch);
var state_18675__$1 = (function (){var statearr_18678 = state_18675;
(statearr_18678[(7)] = inst_18663);

return statearr_18678;
})();
if(inst_18665){
var statearr_18679_18693 = state_18675__$1;
(statearr_18679_18693[(1)] = (5));

} else {
var statearr_18680_18694 = state_18675__$1;
(statearr_18680_18694[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18676 === (5))){
var inst_18663 = (state_18675[(7)]);
var inst_18667 = (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(inst_18663) : handler.call(null,inst_18663));
var state_18675__$1 = (function (){var statearr_18681 = state_18675;
(statearr_18681[(8)] = inst_18667);

return statearr_18681;
})();
var statearr_18682_18695 = state_18675__$1;
(statearr_18682_18695[(2)] = null);

(statearr_18682_18695[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18676 === (6))){
var state_18675__$1 = state_18675;
var statearr_18683_18696 = state_18675__$1;
(statearr_18683_18696[(2)] = null);

(statearr_18683_18696[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18676 === (7))){
var inst_18671 = (state_18675[(2)]);
var state_18675__$1 = state_18675;
var statearr_18684_18697 = state_18675__$1;
(statearr_18684_18697[(2)] = inst_18671);

(statearr_18684_18697[(1)] = (3));


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
var vocloj$core$impl$state_machine__14817__auto__ = null;
var vocloj$core$impl$state_machine__14817__auto____0 = (function (){
var statearr_18685 = [null,null,null,null,null,null,null,null,null];
(statearr_18685[(0)] = vocloj$core$impl$state_machine__14817__auto__);

(statearr_18685[(1)] = (1));

return statearr_18685;
});
var vocloj$core$impl$state_machine__14817__auto____1 = (function (state_18675){
while(true){
var ret_value__14818__auto__ = (function (){try{while(true){
var result__14819__auto__ = switch__14816__auto__(state_18675);
if(cljs.core.keyword_identical_QMARK_(result__14819__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14819__auto__;
}
break;
}
}catch (e18686){var ex__14820__auto__ = e18686;
var statearr_18687_18698 = state_18675;
(statearr_18687_18698[(2)] = ex__14820__auto__);


if(cljs.core.seq((state_18675[(4)]))){
var statearr_18688_18699 = state_18675;
(statearr_18688_18699[(1)] = cljs.core.first((state_18675[(4)])));

} else {
throw ex__14820__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14818__auto__,cljs.core.cst$kw$recur)){
var G__18700 = state_18675;
state_18675 = G__18700;
continue;
} else {
return ret_value__14818__auto__;
}
break;
}
});
vocloj$core$impl$state_machine__14817__auto__ = function(state_18675){
switch(arguments.length){
case 0:
return vocloj$core$impl$state_machine__14817__auto____0.call(this);
case 1:
return vocloj$core$impl$state_machine__14817__auto____1.call(this,state_18675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vocloj$core$impl$state_machine__14817__auto__.cljs$core$IFn$_invoke$arity$0 = vocloj$core$impl$state_machine__14817__auto____0;
vocloj$core$impl$state_machine__14817__auto__.cljs$core$IFn$_invoke$arity$1 = vocloj$core$impl$state_machine__14817__auto____1;
return vocloj$core$impl$state_machine__14817__auto__;
})()
})();
var state__16652__auto__ = (function (){var statearr_18689 = (f__16651__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16651__auto__.cljs$core$IFn$_invoke$arity$0() : f__16651__auto__.call(null));
(statearr_18689[(6)] = c__16650__auto___18691);

return statearr_18689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16652__auto__);
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
