// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('vocloj.core.impl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
goog.require('vocloj.protocols');
vocloj.core.impl.add_effect = (function vocloj$core$impl$add_effect(var_args){
var G__18641 = arguments.length;
switch (G__18641) {
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
var G__18645 = arguments.length;
switch (G__18645) {
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
vocloj.protocols._transition(sm,event,(function (){var G__18647 = ((cljs.core.fn_QMARK_(payload))?(payload.cljs$core$IFn$_invoke$arity$1 ? payload.cljs$core$IFn$_invoke$arity$1(sm) : payload.call(null,sm)):payload);
var fexpr__18646 = (function (p1__18643_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__18643_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$last_DASH_event,event], null)], 0));
});
return fexpr__18646(G__18647);
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
var G__18650 = arguments.length;
switch (G__18650) {
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
var c__16647__auto___18688 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16648__auto__ = (function (){var switch__16572__auto__ = (function (state_18672){
var state_val_18673 = (state_18672[(1)]);
if((state_val_18673 === (1))){
var state_18672__$1 = state_18672;
var statearr_18674_18689 = state_18672__$1;
(statearr_18674_18689[(2)] = null);

(statearr_18674_18689[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18673 === (2))){
var inst_18655 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18656 = [ch,stop_ch];
var inst_18657 = (new cljs.core.PersistentVector(null,2,(5),inst_18655,inst_18656,null));
var state_18672__$1 = state_18672;
return cljs.core.async.ioc_alts_BANG_(state_18672__$1,(4),inst_18657);
} else {
if((state_val_18673 === (3))){
var inst_18670 = (state_18672[(2)]);
var state_18672__$1 = state_18672;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18672__$1,inst_18670);
} else {
if((state_val_18673 === (4))){
var inst_18659 = (state_18672[(2)]);
var inst_18660 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18659,(0),null);
var inst_18661 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18659,(1),null);
var inst_18662 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18661,ch);
var state_18672__$1 = (function (){var statearr_18675 = state_18672;
(statearr_18675[(7)] = inst_18660);

return statearr_18675;
})();
if(inst_18662){
var statearr_18676_18690 = state_18672__$1;
(statearr_18676_18690[(1)] = (5));

} else {
var statearr_18677_18691 = state_18672__$1;
(statearr_18677_18691[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18673 === (5))){
var inst_18660 = (state_18672[(7)]);
var inst_18664 = (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(inst_18660) : handler.call(null,inst_18660));
var state_18672__$1 = (function (){var statearr_18678 = state_18672;
(statearr_18678[(8)] = inst_18664);

return statearr_18678;
})();
var statearr_18679_18692 = state_18672__$1;
(statearr_18679_18692[(2)] = null);

(statearr_18679_18692[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18673 === (6))){
var state_18672__$1 = state_18672;
var statearr_18680_18693 = state_18672__$1;
(statearr_18680_18693[(2)] = null);

(statearr_18680_18693[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18673 === (7))){
var inst_18668 = (state_18672[(2)]);
var state_18672__$1 = state_18672;
var statearr_18681_18694 = state_18672__$1;
(statearr_18681_18694[(2)] = inst_18668);

(statearr_18681_18694[(1)] = (3));


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
var vocloj$core$impl$state_machine__16573__auto__ = null;
var vocloj$core$impl$state_machine__16573__auto____0 = (function (){
var statearr_18682 = [null,null,null,null,null,null,null,null,null];
(statearr_18682[(0)] = vocloj$core$impl$state_machine__16573__auto__);

(statearr_18682[(1)] = (1));

return statearr_18682;
});
var vocloj$core$impl$state_machine__16573__auto____1 = (function (state_18672){
while(true){
var ret_value__16574__auto__ = (function (){try{while(true){
var result__16575__auto__ = switch__16572__auto__(state_18672);
if(cljs.core.keyword_identical_QMARK_(result__16575__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16575__auto__;
}
break;
}
}catch (e18683){var ex__16576__auto__ = e18683;
var statearr_18684_18695 = state_18672;
(statearr_18684_18695[(2)] = ex__16576__auto__);


if(cljs.core.seq((state_18672[(4)]))){
var statearr_18685_18696 = state_18672;
(statearr_18685_18696[(1)] = cljs.core.first((state_18672[(4)])));

} else {
throw ex__16576__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16574__auto__,cljs.core.cst$kw$recur)){
var G__18697 = state_18672;
state_18672 = G__18697;
continue;
} else {
return ret_value__16574__auto__;
}
break;
}
});
vocloj$core$impl$state_machine__16573__auto__ = function(state_18672){
switch(arguments.length){
case 0:
return vocloj$core$impl$state_machine__16573__auto____0.call(this);
case 1:
return vocloj$core$impl$state_machine__16573__auto____1.call(this,state_18672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vocloj$core$impl$state_machine__16573__auto__.cljs$core$IFn$_invoke$arity$0 = vocloj$core$impl$state_machine__16573__auto____0;
vocloj$core$impl$state_machine__16573__auto__.cljs$core$IFn$_invoke$arity$1 = vocloj$core$impl$state_machine__16573__auto____1;
return vocloj$core$impl$state_machine__16573__auto__;
})()
})();
var state__16649__auto__ = (function (){var statearr_18686 = (f__16648__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16648__auto__.cljs$core$IFn$_invoke$arity$0() : f__16648__auto__.call(null));
(statearr_18686[(6)] = c__16647__auto___18688);

return statearr_18686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16649__auto__);
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
