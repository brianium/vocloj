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
return (!((cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__19277_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property,p1__19277_SHARP_);
}),cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(cljs.core.js_keys(obj)))) == null)));
});
vocloj.web.impl.get_speech_channel_STAR_ = (function vocloj$web$impl$get_speech_channel_STAR_(speech_receiver){
return cljs.core.cst$kw$speech_DASH_ch.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(vocloj.core.current_state(speech_receiver)));
});
vocloj.web.impl.get_stop_channel_STAR_ = (function vocloj$web$impl$get_stop_channel_STAR_(speech_receiver){
return cljs.core.cst$kw$stop_DASH_ch.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(vocloj.core.current_state(speech_receiver)));
});
vocloj.web.impl.listen_STAR_ = (function vocloj$web$impl$listen_STAR_(speech_receiver){
return vocloj.core.start(vocloj.core.init(speech_receiver));
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
vocloj.web.impl.create_recognition = (function vocloj$web$impl$create_recognition(p__19278){
var map__19279 = p__19278;
var map__19279__$1 = (((((!((map__19279 == null))))?(((((map__19279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19279):map__19279);
var continuous_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19279__$1,cljs.core.cst$kw$continuous_QMARK_);
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19281_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transcript,cljs.core.cst$kw$confidence],[clojure.string.trim(p1__19281_SHARP_.transcript),p1__19281_SHARP_.confidence]);
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(e.results)], 0)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {vocloj.protocols.Initializable}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {vocloj.protocols.StateMachine}
 * @implements {vocloj.protocols.Lifecycle}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {vocloj.protocols.ReceivesSpeech}
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
(vocloj.web.impl.WebSpeechRecognizer.prototype.vocloj$protocols$ReceivesSpeech$ = cljs.core.PROTOCOL_SENTINEL);

(vocloj.web.impl.WebSpeechRecognizer.prototype.vocloj$protocols$ReceivesSpeech$_get_speech_channel$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return vocloj.web.impl.get_speech_channel_STAR_(this$__$1);
}));

(vocloj.web.impl.WebSpeechRecognizer.prototype.vocloj$protocols$ReceivesSpeech$_get_stop_channel$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return vocloj.web.impl.get_stop_channel_STAR_(this$__$1);
}));

(vocloj.web.impl.WebSpeechRecognizer.prototype.vocloj$protocols$ReceivesSpeech$_listen$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return vocloj.web.impl.listen_STAR_(this$__$1);
}));

(vocloj.web.impl.WebSpeechRecognizer.prototype.vocloj$protocols$Lifecycle$ = cljs.core.PROTOCOL_SENTINEL);

(vocloj.web.impl.WebSpeechRecognizer.prototype.vocloj$protocols$Lifecycle$_start$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var stop_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
return vocloj.core.transition.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.cst$kw$start,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(vocloj.web.impl.current_data(this$__$1),cljs.core.cst$kw$stop_DASH_ch,stop_ch));
}));

(vocloj.web.impl.WebSpeechRecognizer.prototype.vocloj$protocols$Lifecycle$_stop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return vocloj.core.transition.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.cst$kw$stop);
}));

(vocloj.web.impl.WebSpeechRecognizer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(vocloj.web.impl.WebSpeechRecognizer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k19284,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__19288 = k19284;
var G__19288__$1 = (((G__19288 instanceof cljs.core.Keyword))?G__19288.fqn:null);
switch (G__19288__$1) {
case "state-machine":
return self__.state_machine;

break;
case "options":
return self__.options;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19284,else__4383__auto__);

}
}));

(vocloj.web.impl.WebSpeechRecognizer.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__19289){
var vec__19290 = p__19289;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19290,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19290,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(vocloj.web.impl.WebSpeechRecognizer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#vocloj.web.impl.WebSpeechRecognizer{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$state_DASH_machine,self__.state_machine],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$options,self__.options],null))], null),self__.__extmap));
}));

(vocloj.web.impl.WebSpeechRecognizer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19283){
var self__ = this;
var G__19283__$1 = this;
return (new cljs.core.RecordIter((0),G__19283__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_machine,cljs.core.cst$kw$options], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(vocloj.web.impl.WebSpeechRecognizer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__19293 = (function (coll__4377__auto__){
return (-827906860 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__19293(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(vocloj.web.impl.WebSpeechRecognizer.prototype.vocloj$protocols$Initializable$ = cljs.core.PROTOCOL_SENTINEL);

(vocloj.web.impl.WebSpeechRecognizer.prototype.vocloj$protocols$Initializable$_init$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var recognition = vocloj.web.impl.create_recognition(self__.options);
var speech_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var on_result = (function (p1__19282_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(speech_ch,vocloj.web.impl.__GT_result(p1__19282_SHARP_));
});
return vocloj.core.transition.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.cst$kw$init,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$recognition,recognition,cljs.core.cst$kw$speech_DASH_ch,speech_ch,cljs.core.cst$kw$listener_SLASH_result,on_result], null));
}));

(vocloj.web.impl.WebSpeechRecognizer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19285,other19286){
var self__ = this;
var this19285__$1 = this;
return (((!((other19286 == null)))) && ((this19285__$1.constructor === other19286.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19285__$1.state_machine,other19286.state_machine)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19285__$1.options,other19286.options)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19285__$1.__extmap,other19286.__extmap)));
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

(vocloj.web.impl.WebSpeechRecognizer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__19283){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__19294 = cljs.core.keyword_identical_QMARK_;
var expr__19295 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__19297 = cljs.core.cst$kw$state_DASH_machine;
var G__19298 = expr__19295;
return (pred__19294.cljs$core$IFn$_invoke$arity$2 ? pred__19294.cljs$core$IFn$_invoke$arity$2(G__19297,G__19298) : pred__19294.call(null,G__19297,G__19298));
})())){
return (new vocloj.web.impl.WebSpeechRecognizer(G__19283,self__.options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19299 = cljs.core.cst$kw$options;
var G__19300 = expr__19295;
return (pred__19294.cljs$core$IFn$_invoke$arity$2 ? pred__19294.cljs$core$IFn$_invoke$arity$2(G__19299,G__19300) : pred__19294.call(null,G__19299,G__19300));
})())){
return (new vocloj.web.impl.WebSpeechRecognizer(self__.state_machine,G__19283,self__.__meta,self__.__extmap,null));
} else {
return (new vocloj.web.impl.WebSpeechRecognizer(self__.state_machine,self__.options,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__19283),null));
}
}
}));

(vocloj.web.impl.WebSpeechRecognizer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$state_DASH_machine,self__.state_machine,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$options,self__.options,null))], null),self__.__extmap));
}));

(vocloj.web.impl.WebSpeechRecognizer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__19283){
var self__ = this;
var this__4379__auto____$1 = this;
return (new vocloj.web.impl.WebSpeechRecognizer(self__.state_machine,self__.options,G__19283,self__.__extmap,self__.__hash));
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
vocloj.web.impl.map__GT_WebSpeechRecognizer = (function vocloj$web$impl$map__GT_WebSpeechRecognizer(G__19287){
var extmap__4419__auto__ = (function (){var G__19301 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19287,cljs.core.cst$kw$state_DASH_machine,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$options], 0));
if(cljs.core.record_QMARK_(G__19287)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19301);
} else {
return G__19301;
}
})();
return (new vocloj.web.impl.WebSpeechRecognizer(cljs.core.cst$kw$state_DASH_machine.cljs$core$IFn$_invoke$arity$1(G__19287),cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(G__19287),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

/**
 * When the speech recognizer switches to a ready state, add necessary
 * event listeners to the speech recognition object
 */
vocloj.web.impl.on_recognition_ready = (function vocloj$web$impl$on_recognition_ready(_,___$1,p__19303){
var map__19304 = p__19303;
var map__19304__$1 = (((((!((map__19304 == null))))?(((((map__19304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19304):map__19304);
var map__19305 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19304__$1,cljs.core.cst$kw$data);
var map__19305__$1 = (((((!((map__19305 == null))))?(((((map__19305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19305):map__19305);
var recognition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19305__$1,cljs.core.cst$kw$recognition);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19305__$1,cljs.core.cst$kw$listener_SLASH_result);
return recognition.addEventListener("result",result);
});
/**
 * When the speech recognizer switches to a listening state, start
 * the recognition object
 */
vocloj.web.impl.on_recognition_listening = (function vocloj$web$impl$on_recognition_listening(_,___$1,p__19308){
var map__19309 = p__19308;
var map__19309__$1 = (((((!((map__19309 == null))))?(((((map__19309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19309):map__19309);
var map__19310 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19309__$1,cljs.core.cst$kw$data);
var map__19310__$1 = (((((!((map__19310 == null))))?(((((map__19310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19310):map__19310);
var recognition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19310__$1,cljs.core.cst$kw$recognition);
return recognition.start();
});
/**
 * When the speech recognizer switches to a stopped state, abort recognition
 * and remove event listeners
 */
vocloj.web.impl.on_recognition_stop = (function vocloj$web$impl$on_recognition_stop(_,p__19313,___$1){
var map__19314 = p__19313;
var map__19314__$1 = (((((!((map__19314 == null))))?(((((map__19314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19314):map__19314);
var map__19315 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19314__$1,cljs.core.cst$kw$data);
var map__19315__$1 = (((((!((map__19315 == null))))?(((((map__19315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19315):map__19315);
var recognition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19315__$1,cljs.core.cst$kw$recognition);
var stop_ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19315__$1,cljs.core.cst$kw$stop_DASH_ch);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19315__$1,cljs.core.cst$kw$listener_SLASH_result);
recognition.abort();

recognition.removeEventListener("result",result);

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(stop_ch,cljs.core.cst$kw$stop);
});
vocloj.web.impl.create_recognizer = (function vocloj$web$impl$create_recognizer(var_args){
var G__19319 = arguments.length;
switch (G__19319) {
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
return vocloj.core.add_effect.cljs$core$IFn$_invoke$arity$5(vocloj.core.add_effect.cljs$core$IFn$_invoke$arity$5(vocloj.core.add_effect.cljs$core$IFn$_invoke$arity$5(vocloj.web.impl.__GT_WebSpeechRecognizer(vocloj.state.create_recognizer_state_machine.cljs$core$IFn$_invoke$arity$1(atom_fn),options),cljs.core.cst$kw$init,cljs.core.cst$kw$dormant,cljs.core.cst$kw$ready,vocloj.web.impl.on_recognition_ready),cljs.core.cst$kw$start,cljs.core.cst$kw$ready,cljs.core.cst$kw$listening,vocloj.web.impl.on_recognition_listening),cljs.core.cst$kw$stop,cljs.core.cst$kw$listening,cljs.core.cst$kw$dormant,vocloj.web.impl.on_recognition_stop);
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
 * @implements {vocloj.protocols.Initializable}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {vocloj.protocols.StateMachine}
 * @implements {vocloj.protocols.Suspendable}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
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

(vocloj.web.impl.WebSpeechSynthesizer.prototype.vocloj$protocols$SynthesizesSpeech$_speak$arity$3 = (function (this$,voice_id,p__19326){
var self__ = this;
var map__19327 = p__19326;
var map__19327__$1 = (((((!((map__19327 == null))))?(((((map__19327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19327):map__19327);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19327__$1,cljs.core.cst$kw$text);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19327__$1,cljs.core.cst$kw$lang);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19327__$1,cljs.core.cst$kw$pitch);
var rate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19327__$1,cljs.core.cst$kw$rate);
var volume = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19327__$1,cljs.core.cst$kw$volume);
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

(vocloj.web.impl.WebSpeechSynthesizer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k19322,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__19329 = k19322;
var G__19329__$1 = (((G__19329 instanceof cljs.core.Keyword))?G__19329.fqn:null);
switch (G__19329__$1) {
case "state-machine":
return self__.state_machine;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19322,else__4383__auto__);

}
}));

(vocloj.web.impl.WebSpeechSynthesizer.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__19330){
var vec__19331 = p__19330;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19331,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19331,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(vocloj.web.impl.WebSpeechSynthesizer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#vocloj.web.impl.WebSpeechSynthesizer{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$state_DASH_machine,self__.state_machine],null))], null),self__.__extmap));
}));

(vocloj.web.impl.WebSpeechSynthesizer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19321){
var self__ = this;
var G__19321__$1 = this;
return (new cljs.core.RecordIter((0),G__19321__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_machine], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4238__auto____$1 = (function (){var fexpr__19334 = (function (coll__4377__auto__){
return (939495073 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__19334(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(vocloj.web.impl.WebSpeechSynthesizer.prototype.vocloj$protocols$Initializable$ = cljs.core.PROTOCOL_SENTINEL);

(vocloj.web.impl.WebSpeechSynthesizer.prototype.vocloj$protocols$Initializable$_init$arity$1 = (function (this$){
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

(vocloj.web.impl.WebSpeechSynthesizer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19323,other19324){
var self__ = this;
var this19323__$1 = this;
return (((!((other19324 == null)))) && ((this19323__$1.constructor === other19324.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19323__$1.state_machine,other19324.state_machine)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19323__$1.__extmap,other19324.__extmap)));
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

(vocloj.web.impl.WebSpeechSynthesizer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__19321){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__19335 = cljs.core.keyword_identical_QMARK_;
var expr__19336 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__19338 = cljs.core.cst$kw$state_DASH_machine;
var G__19339 = expr__19336;
return (pred__19335.cljs$core$IFn$_invoke$arity$2 ? pred__19335.cljs$core$IFn$_invoke$arity$2(G__19338,G__19339) : pred__19335.call(null,G__19338,G__19339));
})())){
return (new vocloj.web.impl.WebSpeechSynthesizer(G__19321,self__.__meta,self__.__extmap,null));
} else {
return (new vocloj.web.impl.WebSpeechSynthesizer(self__.state_machine,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__19321),null));
}
}));

(vocloj.web.impl.WebSpeechSynthesizer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$state_DASH_machine,self__.state_machine,null))], null),self__.__extmap));
}));

(vocloj.web.impl.WebSpeechSynthesizer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__19321){
var self__ = this;
var this__4379__auto____$1 = this;
return (new vocloj.web.impl.WebSpeechSynthesizer(self__.state_machine,G__19321,self__.__extmap,self__.__hash));
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

(vocloj.web.impl.WebSpeechSynthesizer.prototype.vocloj$protocols$Suspendable$ = cljs.core.PROTOCOL_SENTINEL);

(vocloj.web.impl.WebSpeechSynthesizer.prototype.vocloj$protocols$Suspendable$_pause$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return vocloj.core.transition.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.cst$kw$pause,vocloj.web.impl.current_data);
}));

(vocloj.web.impl.WebSpeechSynthesizer.prototype.vocloj$protocols$Suspendable$_resume$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return vocloj.core.transition.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.cst$kw$resume,vocloj.web.impl.current_data);
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
vocloj.web.impl.map__GT_WebSpeechSynthesizer = (function vocloj$web$impl$map__GT_WebSpeechSynthesizer(G__19325){
var extmap__4419__auto__ = (function (){var G__19340 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19325,cljs.core.cst$kw$state_DASH_machine);
if(cljs.core.record_QMARK_(G__19325)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19340);
} else {
return G__19340;
}
})();
return (new vocloj.web.impl.WebSpeechSynthesizer(cljs.core.cst$kw$state_DASH_machine.cljs$core$IFn$_invoke$arity$1(G__19325),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
vocloj.web.impl.on_speak = (function vocloj$web$impl$on_speak(synth,_,p__19342){
var map__19343 = p__19342;
var map__19343__$1 = (((((!((map__19343 == null))))?(((((map__19343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19343):map__19343);
var map__19344 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19343__$1,cljs.core.cst$kw$data);
var map__19344__$1 = (((((!((map__19344 == null))))?(((((map__19344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19344):map__19344);
var utterances = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19344__$1,cljs.core.cst$kw$utterances);
var utterance = cljs.core.peek(utterances);
utterance.addEventListener("end",(function (){
return vocloj.core.transition.cljs$core$IFn$_invoke$arity$3(synth,cljs.core.cst$kw$end,cljs.core.update.cljs$core$IFn$_invoke$arity$3(vocloj.web.impl.current_data(synth),cljs.core.cst$kw$utterances,cljs.core.pop));
}));

return speechSynthesis.speak(utterance);
});
vocloj.web.impl.create_synthesizer = (function vocloj$web$impl$create_synthesizer(var_args){
var G__19348 = arguments.length;
switch (G__19348) {
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
/**
 * A microphone may send audio events after it has been "stopped". This function
 *   creates the typical speech channel, but creates a mult so the stream implementation is
 *   able to block for data events before signaling the stop channel
 */
vocloj.web.impl.create_speech_channels = (function vocloj$web$impl$create_speech_channels(sz){
var speech_write = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(sz);
var speech_read = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(sz);
var speech_ping = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(sz);
var mult = cljs.core.async.mult(speech_write);
cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2(mult,speech_read);

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2(mult,speech_ping);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [speech_write,speech_read,speech_ping], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {vocloj.protocols.Initializable}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {vocloj.protocols.StateMachine}
 * @implements {vocloj.protocols.Lifecycle}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {vocloj.protocols.ReceivesSpeech}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
vocloj.web.impl.WebMicrophoneStream = (function (state_machine,__meta,__extmap,__hash){
this.state_machine = state_machine;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(vocloj.web.impl.WebMicrophoneStream.prototype.vocloj$protocols$ReceivesSpeech$ = cljs.core.PROTOCOL_SENTINEL);

(vocloj.web.impl.WebMicrophoneStream.prototype.vocloj$protocols$ReceivesSpeech$_get_speech_channel$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return vocloj.web.impl.get_speech_channel_STAR_(this$__$1);
}));

(vocloj.web.impl.WebMicrophoneStream.prototype.vocloj$protocols$ReceivesSpeech$_get_stop_channel$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return vocloj.web.impl.get_stop_channel_STAR_(this$__$1);
}));

(vocloj.web.impl.WebMicrophoneStream.prototype.vocloj$protocols$ReceivesSpeech$_listen$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return vocloj.web.impl.listen_STAR_(this$__$1);
}));

(vocloj.web.impl.WebMicrophoneStream.prototype.vocloj$protocols$Lifecycle$ = cljs.core.PROTOCOL_SENTINEL);

(vocloj.web.impl.WebMicrophoneStream.prototype.vocloj$protocols$Lifecycle$_start$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var map__19359 = vocloj.web.impl.current_data(this$__$1);
var map__19359__$1 = (((((!((map__19359 == null))))?(((((map__19359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19359):map__19359);
var ready_ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19359__$1,cljs.core.cst$kw$ready_DASH_ch);
var c__16486__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16487__auto__ = (function (){var switch__16411__auto__ = (function (state_19373){
var state_val_19374 = (state_19373[(1)]);
if((state_val_19374 === (1))){
var state_19373__$1 = state_19373;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19373__$1,(2),ready_ch);
} else {
if((state_val_19374 === (2))){
var inst_19362 = (state_19373[(2)]);
var inst_19363 = vocloj.web.impl.current_data(this$__$1);
var inst_19364 = [cljs.core.cst$kw$media_SLASH_recorder,cljs.core.cst$kw$media_SLASH_audio_DASH_tracks,cljs.core.cst$kw$media_SLASH_stream];
var inst_19365 = (new MediaRecorder(inst_19362));
var inst_19366 = inst_19362.getAudioTracks();
var inst_19367 = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(inst_19366);
var inst_19368 = [inst_19365,inst_19367,inst_19362];
var inst_19369 = cljs.core.PersistentHashMap.fromArrays(inst_19364,inst_19368);
var inst_19370 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_19363,inst_19369], 0));
var inst_19371 = vocloj.core.transition.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.cst$kw$start,inst_19370);
var state_19373__$1 = state_19373;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19373__$1,inst_19371);
} else {
return null;
}
}
});
return (function() {
var vocloj$web$impl$state_machine__16412__auto__ = null;
var vocloj$web$impl$state_machine__16412__auto____0 = (function (){
var statearr_19375 = [null,null,null,null,null,null,null];
(statearr_19375[(0)] = vocloj$web$impl$state_machine__16412__auto__);

(statearr_19375[(1)] = (1));

return statearr_19375;
});
var vocloj$web$impl$state_machine__16412__auto____1 = (function (state_19373){
while(true){
var ret_value__16413__auto__ = (function (){try{while(true){
var result__16414__auto__ = switch__16411__auto__(state_19373);
if(cljs.core.keyword_identical_QMARK_(result__16414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16414__auto__;
}
break;
}
}catch (e19376){var ex__16415__auto__ = e19376;
var statearr_19377_19414 = state_19373;
(statearr_19377_19414[(2)] = ex__16415__auto__);


if(cljs.core.seq((state_19373[(4)]))){
var statearr_19378_19415 = state_19373;
(statearr_19378_19415[(1)] = cljs.core.first((state_19373[(4)])));

} else {
throw ex__16415__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16413__auto__,cljs.core.cst$kw$recur)){
var G__19416 = state_19373;
state_19373 = G__19416;
continue;
} else {
return ret_value__16413__auto__;
}
break;
}
});
vocloj$web$impl$state_machine__16412__auto__ = function(state_19373){
switch(arguments.length){
case 0:
return vocloj$web$impl$state_machine__16412__auto____0.call(this);
case 1:
return vocloj$web$impl$state_machine__16412__auto____1.call(this,state_19373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vocloj$web$impl$state_machine__16412__auto__.cljs$core$IFn$_invoke$arity$0 = vocloj$web$impl$state_machine__16412__auto____0;
vocloj$web$impl$state_machine__16412__auto__.cljs$core$IFn$_invoke$arity$1 = vocloj$web$impl$state_machine__16412__auto____1;
return vocloj$web$impl$state_machine__16412__auto__;
})()
})();
var state__16488__auto__ = (function (){var statearr_19379 = (f__16487__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16487__auto__.cljs$core$IFn$_invoke$arity$0() : f__16487__auto__.call(null));
(statearr_19379[(6)] = c__16486__auto__);

return statearr_19379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16488__auto__);
}));

return c__16486__auto__;
}));

(vocloj.web.impl.WebMicrophoneStream.prototype.vocloj$protocols$Lifecycle$_stop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var map__19380 = vocloj.web.impl.current_data(this$__$1);
var map__19380__$1 = (((((!((map__19380 == null))))?(((((map__19380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19380):map__19380);
var recorder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19380__$1,cljs.core.cst$kw$media_SLASH_recorder);
var speech_ping = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19380__$1,cljs.core.cst$kw$speech_DASH_ping);
var timeout = cljs.core.async.timeout((1000));
recorder.stop();

var c__16486__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16487__auto__ = (function (){var switch__16411__auto__ = (function (state_19390){
var state_val_19391 = (state_19390[(1)]);
if((state_val_19391 === (1))){
var inst_19382 = cljs.core.PersistentVector.EMPTY;
var inst_19383 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19384 = [speech_ping,timeout];
var inst_19385 = (new cljs.core.PersistentVector(null,2,(5),inst_19383,inst_19384,null));
var state_19390__$1 = (function (){var statearr_19392 = state_19390;
(statearr_19392[(7)] = inst_19382);

return statearr_19392;
})();
return cljs.core.async.ioc_alts_BANG_(state_19390__$1,(2),inst_19385);
} else {
if((state_val_19391 === (2))){
var inst_19387 = (state_19390[(2)]);
var inst_19388 = vocloj.core.transition.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.cst$kw$stop,vocloj.web.impl.current_data);
var state_19390__$1 = (function (){var statearr_19393 = state_19390;
(statearr_19393[(8)] = inst_19387);

return statearr_19393;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19390__$1,inst_19388);
} else {
return null;
}
}
});
return (function() {
var vocloj$web$impl$state_machine__16412__auto__ = null;
var vocloj$web$impl$state_machine__16412__auto____0 = (function (){
var statearr_19394 = [null,null,null,null,null,null,null,null,null];
(statearr_19394[(0)] = vocloj$web$impl$state_machine__16412__auto__);

(statearr_19394[(1)] = (1));

return statearr_19394;
});
var vocloj$web$impl$state_machine__16412__auto____1 = (function (state_19390){
while(true){
var ret_value__16413__auto__ = (function (){try{while(true){
var result__16414__auto__ = switch__16411__auto__(state_19390);
if(cljs.core.keyword_identical_QMARK_(result__16414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16414__auto__;
}
break;
}
}catch (e19395){var ex__16415__auto__ = e19395;
var statearr_19396_19417 = state_19390;
(statearr_19396_19417[(2)] = ex__16415__auto__);


if(cljs.core.seq((state_19390[(4)]))){
var statearr_19397_19418 = state_19390;
(statearr_19397_19418[(1)] = cljs.core.first((state_19390[(4)])));

} else {
throw ex__16415__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16413__auto__,cljs.core.cst$kw$recur)){
var G__19419 = state_19390;
state_19390 = G__19419;
continue;
} else {
return ret_value__16413__auto__;
}
break;
}
});
vocloj$web$impl$state_machine__16412__auto__ = function(state_19390){
switch(arguments.length){
case 0:
return vocloj$web$impl$state_machine__16412__auto____0.call(this);
case 1:
return vocloj$web$impl$state_machine__16412__auto____1.call(this,state_19390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vocloj$web$impl$state_machine__16412__auto__.cljs$core$IFn$_invoke$arity$0 = vocloj$web$impl$state_machine__16412__auto____0;
vocloj$web$impl$state_machine__16412__auto__.cljs$core$IFn$_invoke$arity$1 = vocloj$web$impl$state_machine__16412__auto____1;
return vocloj$web$impl$state_machine__16412__auto__;
})()
})();
var state__16488__auto__ = (function (){var statearr_19398 = (f__16487__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16487__auto__.cljs$core$IFn$_invoke$arity$0() : f__16487__auto__.call(null));
(statearr_19398[(6)] = c__16486__auto__);

return statearr_19398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16488__auto__);
}));

return c__16486__auto__;
}));

(vocloj.web.impl.WebMicrophoneStream.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(vocloj.web.impl.WebMicrophoneStream.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k19355,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__19399 = k19355;
var G__19399__$1 = (((G__19399 instanceof cljs.core.Keyword))?G__19399.fqn:null);
switch (G__19399__$1) {
case "state-machine":
return self__.state_machine;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19355,else__4383__auto__);

}
}));

(vocloj.web.impl.WebMicrophoneStream.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__19400){
var vec__19401 = p__19400;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19401,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19401,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(vocloj.web.impl.WebMicrophoneStream.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#vocloj.web.impl.WebMicrophoneStream{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$state_DASH_machine,self__.state_machine],null))], null),self__.__extmap));
}));

(vocloj.web.impl.WebMicrophoneStream.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19354){
var self__ = this;
var G__19354__$1 = this;
return (new cljs.core.RecordIter((0),G__19354__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_machine], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(vocloj.web.impl.WebMicrophoneStream.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(vocloj.web.impl.WebMicrophoneStream.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new vocloj.web.impl.WebMicrophoneStream(self__.state_machine,self__.__meta,self__.__extmap,self__.__hash));
}));

(vocloj.web.impl.WebMicrophoneStream.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(vocloj.web.impl.WebMicrophoneStream.prototype.vocloj$protocols$StateMachine$ = cljs.core.PROTOCOL_SENTINEL);

(vocloj.web.impl.WebMicrophoneStream.prototype.vocloj$protocols$StateMachine$_transition$arity$3 = (function (_,event,payload){
var self__ = this;
var ___$1 = this;
return vocloj.core.transition.cljs$core$IFn$_invoke$arity$3(self__.state_machine,event,payload);
}));

(vocloj.web.impl.WebMicrophoneStream.prototype.vocloj$protocols$StateMachine$_add_effect$arity$3 = (function (_,key,fn_2){
var self__ = this;
var ___$1 = this;
return vocloj.core.add_effect.cljs$core$IFn$_invoke$arity$3(self__.state_machine,key,fn_2);
}));

(vocloj.web.impl.WebMicrophoneStream.prototype.vocloj$protocols$StateMachine$_current_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return vocloj.core.current_state(self__.state_machine);
}));

(vocloj.web.impl.WebMicrophoneStream.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__19404 = (function (coll__4377__auto__){
return (22122687 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__19404(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(vocloj.web.impl.WebMicrophoneStream.prototype.vocloj$protocols$Initializable$ = cljs.core.PROTOCOL_SENTINEL);

(vocloj.web.impl.WebMicrophoneStream.prototype.vocloj$protocols$Initializable$_init$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var vec__19405 = vocloj.web.impl.create_speech_channels((1));
var write = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19405,(0),null);
var read = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19405,(1),null);
var ping = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19405,(2),null);
var error_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var stop_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var ready_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var media_devices = navigator.mediaDevices;
var on_dataavailable = (function (p1__19350_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(write,p1__19350_SHARP_.data);
});
var on_end = (function (){
return vocloj.core.transition.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.cst$kw$end,vocloj.web.impl.current_data);
});
var on_mute = (function (){
return vocloj.core.transition.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.cst$kw$mute,vocloj.web.impl.current_data);
});
var on_unmute = (function (){
return vocloj.core.transition.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.cst$kw$unmute,vocloj.web.impl.current_data);
});
var on_error = (function (p1__19351_SHARP_){
return vocloj.core.transition.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.cst$kw$error,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,p1__19351_SHARP_], null));
});
var on_pause = (function (){
return vocloj.core.transition.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.cst$kw$pause,vocloj.web.impl.current_data);
});
var on_resume = (function (){
return vocloj.core.transition.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.cst$kw$resume,vocloj.web.impl.current_data);
});
var promise = media_devices.getUserMedia(({"audio": true}));
vocloj.core.transition.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.cst$kw$init,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$listener_SLASH_mute,cljs.core.cst$kw$listener_SLASH_dataavailable,cljs.core.cst$kw$listener_SLASH_pause,cljs.core.cst$kw$error_DASH_ch,cljs.core.cst$kw$listener_SLASH_error,cljs.core.cst$kw$listener_SLASH_end,cljs.core.cst$kw$listener_SLASH_resume,cljs.core.cst$kw$stop_DASH_ch,cljs.core.cst$kw$ready_DASH_ch,cljs.core.cst$kw$speech_DASH_ch,cljs.core.cst$kw$speech_DASH_ping,cljs.core.cst$kw$listener_SLASH_unmute],[on_mute,on_dataavailable,on_pause,error_ch,on_error,on_end,on_resume,stop_ch,ready_ch,read,ping,on_unmute]));

return promise.then((function (p1__19352_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ready_ch,p1__19352_SHARP_);
})).catch((function (p1__19353_SHARP_){
return vocloj.core.transition.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.cst$kw$error,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,p1__19353_SHARP_], null));
}));
}));

(vocloj.web.impl.WebMicrophoneStream.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19356,other19357){
var self__ = this;
var this19356__$1 = this;
return (((!((other19357 == null)))) && ((this19356__$1.constructor === other19357.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19356__$1.state_machine,other19357.state_machine)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19356__$1.__extmap,other19357.__extmap)));
}));

(vocloj.web.impl.WebMicrophoneStream.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$state_DASH_machine,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new vocloj.web.impl.WebMicrophoneStream(self__.state_machine,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(vocloj.web.impl.WebMicrophoneStream.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__19354){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__19408 = cljs.core.keyword_identical_QMARK_;
var expr__19409 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__19411 = cljs.core.cst$kw$state_DASH_machine;
var G__19412 = expr__19409;
return (pred__19408.cljs$core$IFn$_invoke$arity$2 ? pred__19408.cljs$core$IFn$_invoke$arity$2(G__19411,G__19412) : pred__19408.call(null,G__19411,G__19412));
})())){
return (new vocloj.web.impl.WebMicrophoneStream(G__19354,self__.__meta,self__.__extmap,null));
} else {
return (new vocloj.web.impl.WebMicrophoneStream(self__.state_machine,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__19354),null));
}
}));

(vocloj.web.impl.WebMicrophoneStream.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$state_DASH_machine,self__.state_machine,null))], null),self__.__extmap));
}));

(vocloj.web.impl.WebMicrophoneStream.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__19354){
var self__ = this;
var this__4379__auto____$1 = this;
return (new vocloj.web.impl.WebMicrophoneStream(self__.state_machine,G__19354,self__.__extmap,self__.__hash));
}));

(vocloj.web.impl.WebMicrophoneStream.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(vocloj.web.impl.WebMicrophoneStream.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$state_DASH_machine], null);
}));

(vocloj.web.impl.WebMicrophoneStream.cljs$lang$type = true);

(vocloj.web.impl.WebMicrophoneStream.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"vocloj.web.impl/WebMicrophoneStream",null,(1),null));
}));

(vocloj.web.impl.WebMicrophoneStream.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"vocloj.web.impl/WebMicrophoneStream");
}));

/**
 * Positional factory function for vocloj.web.impl/WebMicrophoneStream.
 */
vocloj.web.impl.__GT_WebMicrophoneStream = (function vocloj$web$impl$__GT_WebMicrophoneStream(state_machine){
return (new vocloj.web.impl.WebMicrophoneStream(state_machine,null,null,null));
});

/**
 * Factory function for vocloj.web.impl/WebMicrophoneStream, taking a map of keywords to field values.
 */
vocloj.web.impl.map__GT_WebMicrophoneStream = (function vocloj$web$impl$map__GT_WebMicrophoneStream(G__19358){
var extmap__4419__auto__ = (function (){var G__19413 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19358,cljs.core.cst$kw$state_DASH_machine);
if(cljs.core.record_QMARK_(G__19358)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19413);
} else {
return G__19413;
}
})();
return (new vocloj.web.impl.WebMicrophoneStream(cljs.core.cst$kw$state_DASH_machine.cljs$core$IFn$_invoke$arity$1(G__19358),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

vocloj.web.impl.on_microphone_recording = (function vocloj$web$impl$on_microphone_recording(_,___$1,p__19421){
var map__19422 = p__19421;
var map__19422__$1 = (((((!((map__19422 == null))))?(((((map__19422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19422):map__19422);
var map__19423 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19422__$1,cljs.core.cst$kw$data);
var map__19423__$1 = (((((!((map__19423 == null))))?(((((map__19423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19423):map__19423);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19423__$1,cljs.core.cst$kw$listener_SLASH_end);
var resume = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19423__$1,cljs.core.cst$kw$listener_SLASH_resume);
var mute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19423__$1,cljs.core.cst$kw$listener_SLASH_mute);
var audio_tracks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19423__$1,cljs.core.cst$kw$media_SLASH_audio_DASH_tracks);
var dataavailable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19423__$1,cljs.core.cst$kw$listener_SLASH_dataavailable);
var unmute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19423__$1,cljs.core.cst$kw$listener_SLASH_unmute);
var recorder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19423__$1,cljs.core.cst$kw$media_SLASH_recorder);
var pause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19423__$1,cljs.core.cst$kw$listener_SLASH_pause);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19423__$1,cljs.core.cst$kw$listener_SLASH_error);
recorder.addEventListener("dataavailable",dataavailable);

recorder.addEventListener("error",error);

recorder.addEventListener("pause",pause);

recorder.addEventListener("resume",resume);

var seq__19426_19430 = cljs.core.seq(audio_tracks);
var chunk__19427_19431 = null;
var count__19428_19432 = (0);
var i__19429_19433 = (0);
while(true){
if((i__19429_19433 < count__19428_19432)){
var track_19434 = chunk__19427_19431.cljs$core$IIndexed$_nth$arity$2(null,i__19429_19433);
track_19434.addEventListener("end",end);

track_19434.addEventListener("mute",mute);

track_19434.addEventListener("unmute",unmute);


var G__19435 = seq__19426_19430;
var G__19436 = chunk__19427_19431;
var G__19437 = count__19428_19432;
var G__19438 = (i__19429_19433 + (1));
seq__19426_19430 = G__19435;
chunk__19427_19431 = G__19436;
count__19428_19432 = G__19437;
i__19429_19433 = G__19438;
continue;
} else {
var temp__5753__auto___19439 = cljs.core.seq(seq__19426_19430);
if(temp__5753__auto___19439){
var seq__19426_19440__$1 = temp__5753__auto___19439;
if(cljs.core.chunked_seq_QMARK_(seq__19426_19440__$1)){
var c__4556__auto___19441 = cljs.core.chunk_first(seq__19426_19440__$1);
var G__19442 = cljs.core.chunk_rest(seq__19426_19440__$1);
var G__19443 = c__4556__auto___19441;
var G__19444 = cljs.core.count(c__4556__auto___19441);
var G__19445 = (0);
seq__19426_19430 = G__19442;
chunk__19427_19431 = G__19443;
count__19428_19432 = G__19444;
i__19429_19433 = G__19445;
continue;
} else {
var track_19446 = cljs.core.first(seq__19426_19440__$1);
track_19446.addEventListener("end",end);

track_19446.addEventListener("mute",mute);

track_19446.addEventListener("unmute",unmute);


var G__19447 = cljs.core.next(seq__19426_19440__$1);
var G__19448 = null;
var G__19449 = (0);
var G__19450 = (0);
seq__19426_19430 = G__19447;
chunk__19427_19431 = G__19448;
count__19428_19432 = G__19449;
i__19429_19433 = G__19450;
continue;
}
} else {
}
}
break;
}

return recorder.start();
});
vocloj.web.impl.on_microphone_stop = (function vocloj$web$impl$on_microphone_stop(_,___$1,p__19451){
var map__19452 = p__19451;
var map__19452__$1 = (((((!((map__19452 == null))))?(((((map__19452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19452.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19452):map__19452);
var map__19453 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19452__$1,cljs.core.cst$kw$data);
var map__19453__$1 = (((((!((map__19453 == null))))?(((((map__19453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19453):map__19453);
var audio_tracks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19453__$1,cljs.core.cst$kw$media_SLASH_audio_DASH_tracks);
var stop_ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19453__$1,cljs.core.cst$kw$stop_DASH_ch);
var seq__19456_19460 = cljs.core.seq(audio_tracks);
var chunk__19457_19461 = null;
var count__19458_19462 = (0);
var i__19459_19463 = (0);
while(true){
if((i__19459_19463 < count__19458_19462)){
var track_19464 = chunk__19457_19461.cljs$core$IIndexed$_nth$arity$2(null,i__19459_19463);
track_19464.stop();


var G__19465 = seq__19456_19460;
var G__19466 = chunk__19457_19461;
var G__19467 = count__19458_19462;
var G__19468 = (i__19459_19463 + (1));
seq__19456_19460 = G__19465;
chunk__19457_19461 = G__19466;
count__19458_19462 = G__19467;
i__19459_19463 = G__19468;
continue;
} else {
var temp__5753__auto___19469 = cljs.core.seq(seq__19456_19460);
if(temp__5753__auto___19469){
var seq__19456_19470__$1 = temp__5753__auto___19469;
if(cljs.core.chunked_seq_QMARK_(seq__19456_19470__$1)){
var c__4556__auto___19471 = cljs.core.chunk_first(seq__19456_19470__$1);
var G__19472 = cljs.core.chunk_rest(seq__19456_19470__$1);
var G__19473 = c__4556__auto___19471;
var G__19474 = cljs.core.count(c__4556__auto___19471);
var G__19475 = (0);
seq__19456_19460 = G__19472;
chunk__19457_19461 = G__19473;
count__19458_19462 = G__19474;
i__19459_19463 = G__19475;
continue;
} else {
var track_19476 = cljs.core.first(seq__19456_19470__$1);
track_19476.stop();


var G__19477 = cljs.core.next(seq__19456_19470__$1);
var G__19478 = null;
var G__19479 = (0);
var G__19480 = (0);
seq__19456_19460 = G__19477;
chunk__19457_19461 = G__19478;
count__19458_19462 = G__19479;
i__19459_19463 = G__19480;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(stop_ch,cljs.core.cst$kw$stop);
});
vocloj.web.impl.on_microphone_muted = (function vocloj$web$impl$on_microphone_muted(_,___$1,p__19481){
var map__19482 = p__19481;
var map__19482__$1 = (((((!((map__19482 == null))))?(((((map__19482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19482):map__19482);
var map__19483 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19482__$1,cljs.core.cst$kw$data);
var map__19483__$1 = (((((!((map__19483 == null))))?(((((map__19483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19483):map__19483);
var audio_tracks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19483__$1,cljs.core.cst$kw$media_SLASH_audio_DASH_tracks);
var seq__19486 = cljs.core.seq(audio_tracks);
var chunk__19487 = null;
var count__19488 = (0);
var i__19489 = (0);
while(true){
if((i__19489 < count__19488)){
var track = chunk__19487.cljs$core$IIndexed$_nth$arity$2(null,i__19489);
(track.enabled = false);


var G__19490 = seq__19486;
var G__19491 = chunk__19487;
var G__19492 = count__19488;
var G__19493 = (i__19489 + (1));
seq__19486 = G__19490;
chunk__19487 = G__19491;
count__19488 = G__19492;
i__19489 = G__19493;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__19486);
if(temp__5753__auto__){
var seq__19486__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19486__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__19486__$1);
var G__19494 = cljs.core.chunk_rest(seq__19486__$1);
var G__19495 = c__4556__auto__;
var G__19496 = cljs.core.count(c__4556__auto__);
var G__19497 = (0);
seq__19486 = G__19494;
chunk__19487 = G__19495;
count__19488 = G__19496;
i__19489 = G__19497;
continue;
} else {
var track = cljs.core.first(seq__19486__$1);
(track.enabled = false);


var G__19498 = cljs.core.next(seq__19486__$1);
var G__19499 = null;
var G__19500 = (0);
var G__19501 = (0);
seq__19486 = G__19498;
chunk__19487 = G__19499;
count__19488 = G__19500;
i__19489 = G__19501;
continue;
}
} else {
return null;
}
}
break;
}
});
vocloj.web.impl.on_microphone_unmute = (function vocloj$web$impl$on_microphone_unmute(_,___$1,p__19502){
var map__19503 = p__19502;
var map__19503__$1 = (((((!((map__19503 == null))))?(((((map__19503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19503):map__19503);
var map__19504 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19503__$1,cljs.core.cst$kw$data);
var map__19504__$1 = (((((!((map__19504 == null))))?(((((map__19504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19504):map__19504);
var audio_tracks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19504__$1,cljs.core.cst$kw$media_SLASH_audio_DASH_tracks);
var seq__19507 = cljs.core.seq(audio_tracks);
var chunk__19508 = null;
var count__19509 = (0);
var i__19510 = (0);
while(true){
if((i__19510 < count__19509)){
var track = chunk__19508.cljs$core$IIndexed$_nth$arity$2(null,i__19510);
(track.enabled = true);


var G__19511 = seq__19507;
var G__19512 = chunk__19508;
var G__19513 = count__19509;
var G__19514 = (i__19510 + (1));
seq__19507 = G__19511;
chunk__19508 = G__19512;
count__19509 = G__19513;
i__19510 = G__19514;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__19507);
if(temp__5753__auto__){
var seq__19507__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19507__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__19507__$1);
var G__19515 = cljs.core.chunk_rest(seq__19507__$1);
var G__19516 = c__4556__auto__;
var G__19517 = cljs.core.count(c__4556__auto__);
var G__19518 = (0);
seq__19507 = G__19515;
chunk__19508 = G__19516;
count__19509 = G__19517;
i__19510 = G__19518;
continue;
} else {
var track = cljs.core.first(seq__19507__$1);
(track.enabled = true);


var G__19519 = cljs.core.next(seq__19507__$1);
var G__19520 = null;
var G__19521 = (0);
var G__19522 = (0);
seq__19507 = G__19519;
chunk__19508 = G__19520;
count__19509 = G__19521;
i__19510 = G__19522;
continue;
}
} else {
return null;
}
}
break;
}
});
vocloj.web.impl.on_microphone_pause = (function vocloj$web$impl$on_microphone_pause(_,___$1,p__19523){
var map__19524 = p__19523;
var map__19524__$1 = (((((!((map__19524 == null))))?(((((map__19524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19524):map__19524);
var map__19525 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19524__$1,cljs.core.cst$kw$data);
var map__19525__$1 = (((((!((map__19525 == null))))?(((((map__19525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19525):map__19525);
var recorder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19525__$1,cljs.core.cst$kw$media_SLASH_recorder);
return recorder.pause();
});
vocloj.web.impl.on_microphone_resume = (function vocloj$web$impl$on_microphone_resume(_,___$1,p__19528){
var map__19529 = p__19528;
var map__19529__$1 = (((((!((map__19529 == null))))?(((((map__19529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19529):map__19529);
var map__19530 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19529__$1,cljs.core.cst$kw$data);
var map__19530__$1 = (((((!((map__19530 == null))))?(((((map__19530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19530):map__19530);
var recorder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19530__$1,cljs.core.cst$kw$media_SLASH_recorder);
return recorder.resume();
});
vocloj.web.impl.create_microphone_stream = (function vocloj$web$impl$create_microphone_stream(var_args){
var G__19534 = arguments.length;
switch (G__19534) {
case 0:
return vocloj.web.impl.create_microphone_stream.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return vocloj.web.impl.create_microphone_stream.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(vocloj.web.impl.create_microphone_stream.cljs$core$IFn$_invoke$arity$0 = (function (){
return vocloj.web.impl.create_microphone_stream.cljs$core$IFn$_invoke$arity$1(cljs.core.atom);
}));

(vocloj.web.impl.create_microphone_stream.cljs$core$IFn$_invoke$arity$1 = (function (atom_fn){
return vocloj.core.add_effect.cljs$core$IFn$_invoke$arity$5(vocloj.core.add_effect.cljs$core$IFn$_invoke$arity$5(vocloj.core.add_effect.cljs$core$IFn$_invoke$arity$5(vocloj.core.add_effect.cljs$core$IFn$_invoke$arity$5(vocloj.core.add_effect.cljs$core$IFn$_invoke$arity$5(vocloj.core.add_effect.cljs$core$IFn$_invoke$arity$5(vocloj.web.impl.__GT_WebMicrophoneStream(vocloj.state.create_microphone_stream_state_machine.cljs$core$IFn$_invoke$arity$1(atom_fn)),cljs.core.cst$kw$start,cljs.core.cst$kw$ready,cljs.core.cst$kw$recording,vocloj.web.impl.on_microphone_recording),cljs.core.cst$kw$stop,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$paused,null,cljs.core.cst$kw$recording,null,cljs.core.cst$kw$muted,null], null), null),cljs.core.cst$kw$stopped,vocloj.web.impl.on_microphone_stop),cljs.core.cst$kw$mute,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$paused,null,cljs.core.cst$kw$recording,null], null), null),cljs.core.cst$kw$muted,vocloj.web.impl.on_microphone_muted),cljs.core.cst$kw$unmute,cljs.core.cst$kw$muted,cljs.core.cst$kw$recording,vocloj.web.impl.on_microphone_unmute),cljs.core.cst$kw$pause,cljs.core.cst$kw$recording,cljs.core.cst$kw$paused,vocloj.web.impl.on_microphone_pause),cljs.core.cst$kw$resume,cljs.core.cst$kw$paused,cljs.core.cst$kw$recording,vocloj.web.impl.on_microphone_resume);
}));

(vocloj.web.impl.create_microphone_stream.cljs$lang$maxFixedArity = 1);

