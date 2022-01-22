// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('vocloj.web.impl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('vocloj.core');
goog.require('vocloj.protocols');
goog.require('vocloj.state');
/**
 * Utility for getting data from a state machine
 */
vocloj.web.impl.current_data = (function vocloj$web$impl$current_data(sm){
return cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(vocloj.core.current_state(sm));
});
/**
 * Utility for acheiving roughly the same behavior as the JavaScript 'in' operator
 */
vocloj.web.impl.in$ = (function vocloj$web$impl$in(property,obj){
return (!((cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__20540_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property,p1__20540_SHARP_);
}),cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(cljs.core.js_keys(obj)))) == null)));
});
/**
 * Return a browser native recognition object
 */
vocloj.web.impl.create_recognition_STAR_ = (function vocloj$web$impl$create_recognition_STAR_(){
if((typeof SpeechRecognition !== 'undefined')){
return (new SpeechRecognition());
} else {
return (new webkitSpeechRecognition());
}
});
/**
 * Create a browser native SpeechRecognition object and configure
 * it
 */
vocloj.web.impl.create_recognition = (function vocloj$web$impl$create_recognition(p__20541){
var map__20542 = p__20541;
var map__20542__$1 = (((((!((map__20542 == null))))?(((((map__20542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20542):map__20542);
var continuous_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20542__$1,cljs.core.cst$kw$continuous_QMARK_);
var recognition = vocloj.web.impl.create_recognition_STAR_();
if(cljs.core.truth_(continuous_QMARK_)){
(recognition.continuous = true);
} else {
}

return recognition;
});
/**
 * Maps a speech recognition events to hash-maps
 */
vocloj.web.impl.__GT_result = (function vocloj$web$impl$__GT_result(e){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20544_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transcript,cljs.core.cst$kw$confidence],[clojure.string.trim(p1__20544_SHARP_.transcript),p1__20544_SHARP_.confidence]);
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(e.results)], 0)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {vocloj.protocols.StateMachine}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {vocloj.protocols.Initializes}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {vocloj.protocols.RecognizesSpeech}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
vocloj.web.impl.WebSpeechRecognizer = (function (state_machine,options,__meta,__extmap,__hash){
this.state_machine = state_machine;
this.options = options;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(vocloj.web.impl.WebSpeechRecognizer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(vocloj.web.impl.WebSpeechRecognizer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k20547,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__20551 = k20547;
var G__20551__$1 = (((G__20551 instanceof cljs.core.Keyword))?G__20551.fqn:null);
switch (G__20551__$1) {
case "state-machine":
return self__.state_machine;

break;
case "options":
return self__.options;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20547,else__4383__auto__);

}
}));

(vocloj.web.impl.WebSpeechRecognizer.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__20552){
var vec__20553 = p__20552;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20553,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20553,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(vocloj.web.impl.WebSpeechRecognizer.prototype.vocloj$protocols$Initializes$ = cljs.core.PROTOCOL_SENTINEL);

(vocloj.web.impl.WebSpeechRecognizer.prototype.vocloj$protocols$Initializes$_init$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var recognition = vocloj.web.impl.create_recognition(self__.options);
var speech_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var on_result = (function (p1__20545_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(speech_ch,vocloj.web.impl.__GT_result(p1__20545_SHARP_));
});
return vocloj.core.transition.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.cst$kw$init,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$recognition,recognition,cljs.core.cst$kw$speech_DASH_ch,speech_ch,cljs.core.cst$kw$listener_SLASH_result,on_result], null));
}));

(vocloj.web.impl.WebSpeechRecognizer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#vocloj.web.impl.WebSpeechRecognizer{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$state_DASH_machine,self__.state_machine],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$options,self__.options],null))], null),self__.__extmap));
}));

(vocloj.web.impl.WebSpeechRecognizer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20546){
var self__ = this;
var G__20546__$1 = this;
return (new cljs.core.RecordIter((0),G__20546__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_machine,cljs.core.cst$kw$options], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(vocloj.web.impl.WebSpeechRecognizer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(vocloj.web.impl.WebSpeechRecognizer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new vocloj.web.impl.WebSpeechRecognizer(self__.state_machine,self__.options,self__.__meta,self__.__extmap,self__.__hash));
}));

(vocloj.web.impl.WebSpeechRecognizer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(vocloj.web.impl.WebSpeechRecognizer.prototype.vocloj$protocols$StateMachine$ = cljs.core.PROTOCOL_SENTINEL);

(vocloj.web.impl.WebSpeechRecognizer.prototype.vocloj$protocols$StateMachine$_transition$arity$3 = (function (_,event,payload){
var self__ = this;
var ___$1 = this;
return vocloj.core.transition.cljs$core$IFn$_invoke$arity$3(self__.state_machine,event,payload);
}));

(vocloj.web.impl.WebSpeechRecognizer.prototype.vocloj$protocols$StateMachine$_add_effect$arity$3 = (function (_,key,fn_2){
var self__ = this;
var ___$1 = this;
return vocloj.core.add_effect.cljs$core$IFn$_invoke$arity$3(self__.state_machine,key,fn_2);
}));

(vocloj.web.impl.WebSpeechRecognizer.prototype.vocloj$protocols$StateMachine$_current_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return vocloj.core.current_state(self__.state_machine);
}));

(vocloj.web.impl.WebSpeechRecognizer.prototype.vocloj$protocols$RecognizesSpeech$ = cljs.core.PROTOCOL_SENTINEL);

(vocloj.web.impl.WebSpeechRecognizer.prototype.vocloj$protocols$RecognizesSpeech$_start$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var stop_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
return vocloj.core.transition.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.cst$kw$start,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(vocloj.web.impl.current_data(this$__$1),cljs.core.cst$kw$stop_DASH_ch,stop_ch));
}));

(vocloj.web.impl.WebSpeechRecognizer.prototype.vocloj$protocols$RecognizesSpeech$_stop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return vocloj.core.transition.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.cst$kw$stop);
}));

(vocloj.web.impl.WebSpeechRecognizer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__20556 = (function (coll__4377__auto__){
return (-827906860 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__20556(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(vocloj.web.impl.WebSpeechRecognizer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20548,other20549){
var self__ = this;
var this20548__$1 = this;
return (((!((other20549 == null)))) && ((this20548__$1.constructor === other20549.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20548__$1.state_machine,other20549.state_machine)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20548__$1.options,other20549.options)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20548__$1.__extmap,other20549.__extmap)));
}));

(vocloj.web.impl.WebSpeechRecognizer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$state_DASH_machine,null,cljs.core.cst$kw$options,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new vocloj.web.impl.WebSpeechRecognizer(self__.state_machine,self__.options,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(vocloj.web.impl.WebSpeechRecognizer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__20546){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__20557 = cljs.core.keyword_identical_QMARK_;
var expr__20558 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__20560 = cljs.core.cst$kw$state_DASH_machine;
var G__20561 = expr__20558;
return (pred__20557.cljs$core$IFn$_invoke$arity$2 ? pred__20557.cljs$core$IFn$_invoke$arity$2(G__20560,G__20561) : pred__20557.call(null,G__20560,G__20561));
})())){
return (new vocloj.web.impl.WebSpeechRecognizer(G__20546,self__.options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20562 = cljs.core.cst$kw$options;
var G__20563 = expr__20558;
return (pred__20557.cljs$core$IFn$_invoke$arity$2 ? pred__20557.cljs$core$IFn$_invoke$arity$2(G__20562,G__20563) : pred__20557.call(null,G__20562,G__20563));
})())){
return (new vocloj.web.impl.WebSpeechRecognizer(self__.state_machine,G__20546,self__.__meta,self__.__extmap,null));
} else {
return (new vocloj.web.impl.WebSpeechRecognizer(self__.state_machine,self__.options,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__20546),null));
}
}
}));

(vocloj.web.impl.WebSpeechRecognizer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$state_DASH_machine,self__.state_machine,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$options,self__.options,null))], null),self__.__extmap));
}));

(vocloj.web.impl.WebSpeechRecognizer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__20546){
var self__ = this;
var this__4379__auto____$1 = this;
return (new vocloj.web.impl.WebSpeechRecognizer(self__.state_machine,self__.options,G__20546,self__.__extmap,self__.__hash));
}));

(vocloj.web.impl.WebSpeechRecognizer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(vocloj.web.impl.WebSpeechRecognizer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$state_DASH_machine,cljs.core.cst$sym$options], null);
}));

(vocloj.web.impl.WebSpeechRecognizer.cljs$lang$type = true);

(vocloj.web.impl.WebSpeechRecognizer.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"vocloj.web.impl/WebSpeechRecognizer",null,(1),null));
}));

(vocloj.web.impl.WebSpeechRecognizer.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"vocloj.web.impl/WebSpeechRecognizer");
}));

/**
 * Positional factory function for vocloj.web.impl/WebSpeechRecognizer.
 */
vocloj.web.impl.__GT_WebSpeechRecognizer = (function vocloj$web$impl$__GT_WebSpeechRecognizer(state_machine,options){
return (new vocloj.web.impl.WebSpeechRecognizer(state_machine,options,null,null,null));
});

/**
 * Factory function for vocloj.web.impl/WebSpeechRecognizer, taking a map of keywords to field values.
 */
vocloj.web.impl.map__GT_WebSpeechRecognizer = (function vocloj$web$impl$map__GT_WebSpeechRecognizer(G__20550){
var extmap__4419__auto__ = (function (){var G__20564 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20550,cljs.core.cst$kw$state_DASH_machine,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$options], 0));
if(cljs.core.record_QMARK_(G__20550)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20564);
} else {
return G__20564;
}
})();
return (new vocloj.web.impl.WebSpeechRecognizer(cljs.core.cst$kw$state_DASH_machine.cljs$core$IFn$_invoke$arity$1(G__20550),cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(G__20550),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

/**
 * When the speech recognizer switches to a ready state, add necessary
 * event listeners to the speech recognition object
 */
vocloj.web.impl.on_ready = (function vocloj$web$impl$on_ready(_,___$1,p__20566){
var map__20567 = p__20566;
var map__20567__$1 = (((((!((map__20567 == null))))?(((((map__20567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20567):map__20567);
var map__20568 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20567__$1,cljs.core.cst$kw$data);
var map__20568__$1 = (((((!((map__20568 == null))))?(((((map__20568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20568):map__20568);
var recognition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20568__$1,cljs.core.cst$kw$recognition);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20568__$1,cljs.core.cst$kw$listener_SLASH_result);
return recognition.addEventListener("result",result);
});
/**
 * When the speech recognizer switches to a listening state, start
 * the recognition object
 */
vocloj.web.impl.on_listening = (function vocloj$web$impl$on_listening(_,___$1,p__20571){
var map__20572 = p__20571;
var map__20572__$1 = (((((!((map__20572 == null))))?(((((map__20572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20572):map__20572);
var map__20573 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20572__$1,cljs.core.cst$kw$data);
var map__20573__$1 = (((((!((map__20573 == null))))?(((((map__20573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20573):map__20573);
var recognition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20573__$1,cljs.core.cst$kw$recognition);
return recognition.start();
});
/**
 * When the speech recognizer switches to a stopped state, abort recognition
 * and remove event listeners
 */
vocloj.web.impl.on_stop = (function vocloj$web$impl$on_stop(_,p__20576,___$1){
var map__20577 = p__20576;
var map__20577__$1 = (((((!((map__20577 == null))))?(((((map__20577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20577):map__20577);
var map__20578 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20577__$1,cljs.core.cst$kw$data);
var map__20578__$1 = (((((!((map__20578 == null))))?(((((map__20578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20578.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20578):map__20578);
var recognition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20578__$1,cljs.core.cst$kw$recognition);
var stop_ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20578__$1,cljs.core.cst$kw$stop_DASH_ch);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20578__$1,cljs.core.cst$kw$listener_SLASH_result);
recognition.abort();

recognition.removeEventListener("result",result);

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(stop_ch,cljs.core.cst$kw$stop);
});
vocloj.web.impl.create_recognizer = (function vocloj$web$impl$create_recognizer(var_args){
var G__20582 = arguments.length;
switch (G__20582) {
case 0:
return vocloj.web.impl.create_recognizer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return vocloj.web.impl.create_recognizer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return vocloj.web.impl.create_recognizer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(vocloj.web.impl.create_recognizer.cljs$core$IFn$_invoke$arity$0 = (function (){
return vocloj.web.impl.create_recognizer.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));

(vocloj.web.impl.create_recognizer.cljs$core$IFn$_invoke$arity$1 = (function (options){
return vocloj.web.impl.create_recognizer.cljs$core$IFn$_invoke$arity$2(options,cljs.core.atom);
}));

(vocloj.web.impl.create_recognizer.cljs$core$IFn$_invoke$arity$2 = (function (options,atom_fn){
return vocloj.core.add_effect.cljs$core$IFn$_invoke$arity$5(vocloj.core.add_effect.cljs$core$IFn$_invoke$arity$5(vocloj.core.add_effect.cljs$core$IFn$_invoke$arity$5(vocloj.web.impl.__GT_WebSpeechRecognizer(vocloj.state.create_recognizer_state_machine.cljs$core$IFn$_invoke$arity$1(atom_fn),options),cljs.core.cst$kw$init,cljs.core.cst$kw$dormant,cljs.core.cst$kw$ready,vocloj.web.impl.on_ready),cljs.core.cst$kw$start,cljs.core.cst$kw$ready,cljs.core.cst$kw$listening,vocloj.web.impl.on_listening),cljs.core.cst$kw$stop,cljs.core.cst$kw$listening,cljs.core.cst$kw$dormant,vocloj.web.impl.on_stop);
}));

(vocloj.web.impl.create_recognizer.cljs$lang$maxFixedArity = 2);

vocloj.web.impl.get_voices = (function vocloj$web$impl$get_voices(){
var voices = speechSynthesis.getVoices();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (voice_map,voice){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(voice_map,voice.voiceURI,voice);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(voices));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {vocloj.protocols.StateMachine}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {vocloj.protocols.Initializes}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {vocloj.protocols.SynthesizesSpeech}
*/
vocloj.web.impl.WebSpeechSynthesizer = (function (state_machine,__meta,__extmap,__hash){
this.state_machine = state_machine;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(vocloj.web.impl.WebSpeechSynthesizer.prototype.vocloj$protocols$SynthesizesSpeech$ = cljs.core.PROTOCOL_SENTINEL);

(vocloj.web.impl.WebSpeechSynthesizer.prototype.vocloj$protocols$SynthesizesSpeech$_cancel$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return speechSynthesis.cancel();
}));

(vocloj.web.impl.WebSpeechSynthesizer.prototype.vocloj$protocols$SynthesizesSpeech$_pause$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return vocloj.core.transition.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.cst$kw$pause,vocloj.web.impl.current_data);
}));

(vocloj.web.impl.WebSpeechSynthesizer.prototype.vocloj$protocols$SynthesizesSpeech$_resume$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return vocloj.core.transition.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.cst$kw$resume,vocloj.web.impl.current_data);
}));

(vocloj.web.impl.WebSpeechSynthesizer.prototype.vocloj$protocols$SynthesizesSpeech$_speak$arity$3 = (function (this$,voice_id,p__20589){
var self__ = this;
var map__20590 = p__20589;
var map__20590__$1 = (((((!((map__20590 == null))))?(((((map__20590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20590.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20590):map__20590);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20590__$1,cljs.core.cst$kw$text);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20590__$1,cljs.core.cst$kw$lang);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20590__$1,cljs.core.cst$kw$pitch);
var rate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20590__$1,cljs.core.cst$kw$rate);
var volume = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20590__$1,cljs.core.cst$kw$volume);
var this$__$1 = this;
var utterance = (new SpeechSynthesisUtterance(text));
var voice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$voices.cljs$core$IFn$_invoke$arity$1(vocloj.web.impl.current_data(this$__$1)),voice_id);
(utterance.voice = voice);

if((!((lang == null)))){
(utterance.lang = lang);
} else {
}

if((!((pitch == null)))){
(utterance.pitch = pitch);
} else {
}

if((!((rate == null)))){
(utterance.rate = rate);
} else {
}

if((!((volume == null)))){
(utterance.volume = volume);
} else {
}

return vocloj.core.transition.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.cst$kw$speak,cljs.core.update.cljs$core$IFn$_invoke$arity$4(vocloj.web.impl.current_data(this$__$1),cljs.core.cst$kw$utterances,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY)),utterance));
}));

(vocloj.web.impl.WebSpeechSynthesizer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(vocloj.web.impl.WebSpeechSynthesizer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k20585,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__20592 = k20585;
var G__20592__$1 = (((G__20592 instanceof cljs.core.Keyword))?G__20592.fqn:null);
switch (G__20592__$1) {
case "state-machine":
return self__.state_machine;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20585,else__4383__auto__);

}
}));

(vocloj.web.impl.WebSpeechSynthesizer.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__20593){
var vec__20594 = p__20593;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20594,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20594,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(vocloj.web.impl.WebSpeechSynthesizer.prototype.vocloj$protocols$Initializes$ = cljs.core.PROTOCOL_SENTINEL);

(vocloj.web.impl.WebSpeechSynthesizer.prototype.vocloj$protocols$Initializes$_init$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var controller = (new AbortController());
var signal = controller.signal;
var on_voices_changed = (function (){
return vocloj.core.transition.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.cst$kw$change_DASH_voices,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(vocloj.web.impl.current_data(this$__$1),cljs.core.cst$kw$voices,vocloj.web.impl.get_voices()));
});
vocloj.core.transition.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.cst$kw$init,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$voices,vocloj.web.impl.get_voices(),cljs.core.cst$kw$voice_DASH_change_DASH_controller,controller], null));

if(vocloj.web.impl.in$("onvoiceschanged",speechSynthesis)){
return speechSynthesis.addEventListener("voiceschanged",on_voices_changed,({"signal": signal}));
} else {
return null;
}
}));

(vocloj.web.impl.WebSpeechSynthesizer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#vocloj.web.impl.WebSpeechSynthesizer{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$state_DASH_machine,self__.state_machine],null))], null),self__.__extmap));
}));

(vocloj.web.impl.WebSpeechSynthesizer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20584){
var self__ = this;
var G__20584__$1 = this;
return (new cljs.core.RecordIter((0),G__20584__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_machine], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(vocloj.web.impl.WebSpeechSynthesizer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(vocloj.web.impl.WebSpeechSynthesizer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new vocloj.web.impl.WebSpeechSynthesizer(self__.state_machine,self__.__meta,self__.__extmap,self__.__hash));
}));

(vocloj.web.impl.WebSpeechSynthesizer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(vocloj.web.impl.WebSpeechSynthesizer.prototype.vocloj$protocols$StateMachine$ = cljs.core.PROTOCOL_SENTINEL);

(vocloj.web.impl.WebSpeechSynthesizer.prototype.vocloj$protocols$StateMachine$_transition$arity$3 = (function (_,event,payload){
var self__ = this;
var ___$1 = this;
return vocloj.core.transition.cljs$core$IFn$_invoke$arity$3(self__.state_machine,event,payload);
}));

(vocloj.web.impl.WebSpeechSynthesizer.prototype.vocloj$protocols$StateMachine$_add_effect$arity$3 = (function (_,key,fn_2){
var self__ = this;
var ___$1 = this;
return vocloj.core.add_effect.cljs$core$IFn$_invoke$arity$3(self__.state_machine,key,fn_2);
}));

(vocloj.web.impl.WebSpeechSynthesizer.prototype.vocloj$protocols$StateMachine$_current_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return vocloj.core.current_state(self__.state_machine);
}));

(vocloj.web.impl.WebSpeechSynthesizer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__20597 = (function (coll__4377__auto__){
return (939495073 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__20597(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(vocloj.web.impl.WebSpeechSynthesizer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20586,other20587){
var self__ = this;
var this20586__$1 = this;
return (((!((other20587 == null)))) && ((this20586__$1.constructor === other20587.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20586__$1.state_machine,other20587.state_machine)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20586__$1.__extmap,other20587.__extmap)));
}));

(vocloj.web.impl.WebSpeechSynthesizer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$state_DASH_machine,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new vocloj.web.impl.WebSpeechSynthesizer(self__.state_machine,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(vocloj.web.impl.WebSpeechSynthesizer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__20584){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__20598 = cljs.core.keyword_identical_QMARK_;
var expr__20599 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__20601 = cljs.core.cst$kw$state_DASH_machine;
var G__20602 = expr__20599;
return (pred__20598.cljs$core$IFn$_invoke$arity$2 ? pred__20598.cljs$core$IFn$_invoke$arity$2(G__20601,G__20602) : pred__20598.call(null,G__20601,G__20602));
})())){
return (new vocloj.web.impl.WebSpeechSynthesizer(G__20584,self__.__meta,self__.__extmap,null));
} else {
return (new vocloj.web.impl.WebSpeechSynthesizer(self__.state_machine,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__20584),null));
}
}));

(vocloj.web.impl.WebSpeechSynthesizer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$state_DASH_machine,self__.state_machine,null))], null),self__.__extmap));
}));

(vocloj.web.impl.WebSpeechSynthesizer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__20584){
var self__ = this;
var this__4379__auto____$1 = this;
return (new vocloj.web.impl.WebSpeechSynthesizer(self__.state_machine,G__20584,self__.__extmap,self__.__hash));
}));

(vocloj.web.impl.WebSpeechSynthesizer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(vocloj.web.impl.WebSpeechSynthesizer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$state_DASH_machine], null);
}));

(vocloj.web.impl.WebSpeechSynthesizer.cljs$lang$type = true);

(vocloj.web.impl.WebSpeechSynthesizer.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"vocloj.web.impl/WebSpeechSynthesizer",null,(1),null));
}));

(vocloj.web.impl.WebSpeechSynthesizer.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"vocloj.web.impl/WebSpeechSynthesizer");
}));

/**
 * Positional factory function for vocloj.web.impl/WebSpeechSynthesizer.
 */
vocloj.web.impl.__GT_WebSpeechSynthesizer = (function vocloj$web$impl$__GT_WebSpeechSynthesizer(state_machine){
return (new vocloj.web.impl.WebSpeechSynthesizer(state_machine,null,null,null));
});

/**
 * Factory function for vocloj.web.impl/WebSpeechSynthesizer, taking a map of keywords to field values.
 */
vocloj.web.impl.map__GT_WebSpeechSynthesizer = (function vocloj$web$impl$map__GT_WebSpeechSynthesizer(G__20588){
var extmap__4419__auto__ = (function (){var G__20603 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20588,cljs.core.cst$kw$state_DASH_machine);
if(cljs.core.record_QMARK_(G__20588)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20603);
} else {
return G__20603;
}
})();
return (new vocloj.web.impl.WebSpeechSynthesizer(cljs.core.cst$kw$state_DASH_machine.cljs$core$IFn$_invoke$arity$1(G__20588),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

vocloj.web.impl.on_pause = (function vocloj$web$impl$on_pause(){
return speechSynthesis.pause();
});
vocloj.web.impl.on_resume = (function vocloj$web$impl$on_resume(){
return speechSynthesis.resume();
});
/**
 * Actually responsible for initiating speech. Utterances are stored
 * in a stateful queue solely to prevent garbage collection in browsers like Safari.
 * The utterance 'end' event is used to transition the synthesizer back to a ready state. If the
 * utterance is garbage collected before the end event is fired, the synthesizer will never
 * return to a ready state
 */
vocloj.web.impl.on_speak = (function vocloj$web$impl$on_speak(synth,_,p__20605){
var map__20606 = p__20605;
var map__20606__$1 = (((((!((map__20606 == null))))?(((((map__20606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20606):map__20606);
var map__20607 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20606__$1,cljs.core.cst$kw$data);
var map__20607__$1 = (((((!((map__20607 == null))))?(((((map__20607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20607):map__20607);
var utterances = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20607__$1,cljs.core.cst$kw$utterances);
var utterance = cljs.core.peek(utterances);
utterance.addEventListener("end",(function (){
return vocloj.core.transition.cljs$core$IFn$_invoke$arity$3(synth,cljs.core.cst$kw$end,cljs.core.update.cljs$core$IFn$_invoke$arity$3(vocloj.web.impl.current_data(synth),cljs.core.cst$kw$utterances,cljs.core.pop));
}));

return speechSynthesis.speak(utterance);
});
vocloj.web.impl.create_synthesizer = (function vocloj$web$impl$create_synthesizer(var_args){
var G__20611 = arguments.length;
switch (G__20611) {
case 0:
return vocloj.web.impl.create_synthesizer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return vocloj.web.impl.create_synthesizer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(vocloj.web.impl.create_synthesizer.cljs$core$IFn$_invoke$arity$0 = (function (){
return vocloj.web.impl.create_synthesizer.cljs$core$IFn$_invoke$arity$1(cljs.core.atom);
}));

(vocloj.web.impl.create_synthesizer.cljs$core$IFn$_invoke$arity$1 = (function (atom_fn){
return vocloj.core.init(vocloj.core.add_effect.cljs$core$IFn$_invoke$arity$5(vocloj.core.add_effect.cljs$core$IFn$_invoke$arity$5(vocloj.core.add_effect.cljs$core$IFn$_invoke$arity$5(vocloj.web.impl.__GT_WebSpeechSynthesizer(vocloj.state.create_synthesis_state_machine.cljs$core$IFn$_invoke$arity$1(atom_fn)),cljs.core.cst$kw$speak,cljs.core.cst$kw$ready,cljs.core.cst$kw$speaking,vocloj.web.impl.on_speak),cljs.core.cst$kw$pause,cljs.core.cst$kw$speaking,cljs.core.cst$kw$paused,vocloj.web.impl.on_pause),cljs.core.cst$kw$resume,cljs.core.cst$kw$paused,cljs.core.cst$kw$speaking,vocloj.web.impl.on_resume));
}));

(vocloj.web.impl.create_synthesizer.cljs$lang$maxFixedArity = 1);

/**
 * This is relevant only to web synthesizers. There is a single
 * speechSynthesis object available to bind to for voice change events. Multiple
 * bindings are fairly benign, but this provides a means to cleanly unbind voicechange
 * events from the global object
 */
vocloj.web.impl.remove_listeners = (function vocloj$web$impl$remove_listeners(web_synth){
var data = vocloj.web.impl.current_data(web_synth);
var controller = cljs.core.cst$kw$voice_DASH_change_DASH_controller.cljs$core$IFn$_invoke$arity$1(data);
return controller.abort();
});
