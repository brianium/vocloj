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
return (!((cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__19354_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property,p1__19354_SHARP_);
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
vocloj.web.impl.create_recognition = (function vocloj$web$impl$create_recognition(p__19355){
var map__19356 = p__19355;
var map__19356__$1 = (((((!((map__19356 == null))))?(((((map__19356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19356):map__19356);
var continuous_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19356__$1,cljs.core.cst$kw$continuous_QMARK_);
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19358_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transcript,cljs.core.cst$kw$confidence],[clojure.string.trim(p1__19358_SHARP_.transcript),p1__19358_SHARP_.confidence]);
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

(vocloj.web.impl.WebSpeechRecognizer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k19361,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__19365 = k19361;
var G__19365__$1 = (((G__19365 instanceof cljs.core.Keyword))?G__19365.fqn:null);
switch (G__19365__$1) {
case "state-machine":
return self__.state_machine;

break;
case "options":
return self__.options;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19361,else__4383__auto__);

}
}));

(vocloj.web.impl.WebSpeechRecognizer.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__19366){
var vec__19367 = p__19366;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19367,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19367,(1),null);
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

(vocloj.web.impl.WebSpeechRecognizer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19360){
var self__ = this;
var G__19360__$1 = this;
return (new cljs.core.RecordIter((0),G__19360__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_machine,cljs.core.cst$kw$options], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4238__auto____$1 = (function (){var fexpr__19370 = (function (coll__4377__auto__){
return (-827906860 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__19370(this__4376__auto____$1);
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
var on_result = (function (p1__19359_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(speech_ch,vocloj.web.impl.__GT_result(p1__19359_SHARP_));
});
return vocloj.core.transition.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.cst$kw$init,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$recognition,recognition,cljs.core.cst$kw$speech_DASH_ch,speech_ch,cljs.core.cst$kw$listener_SLASH_result,on_result], null));
}));

(vocloj.web.impl.WebSpeechRecognizer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19362,other19363){
var self__ = this;
var this19362__$1 = this;
return (((!((other19363 == null)))) && ((this19362__$1.constructor === other19363.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19362__$1.state_machine,other19363.state_machine)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19362__$1.options,other19363.options)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19362__$1.__extmap,other19363.__extmap)));
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

(vocloj.web.impl.WebSpeechRecognizer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__19360){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__19371 = cljs.core.keyword_identical_QMARK_;
var expr__19372 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__19374 = cljs.core.cst$kw$state_DASH_machine;
var G__19375 = expr__19372;
return (pred__19371.cljs$core$IFn$_invoke$arity$2 ? pred__19371.cljs$core$IFn$_invoke$arity$2(G__19374,G__19375) : pred__19371.call(null,G__19374,G__19375));
})())){
return (new vocloj.web.impl.WebSpeechRecognizer(G__19360,self__.options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19376 = cljs.core.cst$kw$options;
var G__19377 = expr__19372;
return (pred__19371.cljs$core$IFn$_invoke$arity$2 ? pred__19371.cljs$core$IFn$_invoke$arity$2(G__19376,G__19377) : pred__19371.call(null,G__19376,G__19377));
})())){
return (new vocloj.web.impl.WebSpeechRecognizer(self__.state_machine,G__19360,self__.__meta,self__.__extmap,null));
} else {
return (new vocloj.web.impl.WebSpeechRecognizer(self__.state_machine,self__.options,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__19360),null));
}
}
}));

(vocloj.web.impl.WebSpeechRecognizer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$state_DASH_machine,self__.state_machine,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$options,self__.options,null))], null),self__.__extmap));
}));

(vocloj.web.impl.WebSpeechRecognizer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__19360){
var self__ = this;
var this__4379__auto____$1 = this;
return (new vocloj.web.impl.WebSpeechRecognizer(self__.state_machine,self__.options,G__19360,self__.__extmap,self__.__hash));
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
vocloj.web.impl.map__GT_WebSpeechRecognizer = (function vocloj$web$impl$map__GT_WebSpeechRecognizer(G__19364){
var extmap__4419__auto__ = (function (){var G__19378 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19364,cljs.core.cst$kw$state_DASH_machine,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$options], 0));
if(cljs.core.record_QMARK_(G__19364)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19378);
} else {
return G__19378;
}
})();
return (new vocloj.web.impl.WebSpeechRecognizer(cljs.core.cst$kw$state_DASH_machine.cljs$core$IFn$_invoke$arity$1(G__19364),cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(G__19364),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

/**
 * When the speech recognizer switches to a ready state, add necessary
 * event listeners to the speech recognition object
 */
vocloj.web.impl.on_recognition_ready = (function vocloj$web$impl$on_recognition_ready(_,___$1,p__19380){
var map__19381 = p__19380;
var map__19381__$1 = (((((!((map__19381 == null))))?(((((map__19381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19381):map__19381);
var map__19382 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19381__$1,cljs.core.cst$kw$data);
var map__19382__$1 = (((((!((map__19382 == null))))?(((((map__19382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19382):map__19382);
var recognition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19382__$1,cljs.core.cst$kw$recognition);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19382__$1,cljs.core.cst$kw$listener_SLASH_result);
return recognition.addEventListener("result",result);
});
/**
 * When the speech recognizer switches to a listening state, start
 * the recognition object
 */
vocloj.web.impl.on_recognition_listening = (function vocloj$web$impl$on_recognition_listening(_,___$1,p__19385){
var map__19386 = p__19385;
var map__19386__$1 = (((((!((map__19386 == null))))?(((((map__19386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19386):map__19386);
var map__19387 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19386__$1,cljs.core.cst$kw$data);
var map__19387__$1 = (((((!((map__19387 == null))))?(((((map__19387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19387):map__19387);
var recognition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19387__$1,cljs.core.cst$kw$recognition);
return recognition.start();
});
/**
 * When the speech recognizer switches to a stopped state, abort recognition
 * and remove event listeners
 */
vocloj.web.impl.on_recognition_stop = (function vocloj$web$impl$on_recognition_stop(_,p__19390,___$1){
var map__19391 = p__19390;
var map__19391__$1 = (((((!((map__19391 == null))))?(((((map__19391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19391):map__19391);
var map__19392 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19391__$1,cljs.core.cst$kw$data);
var map__19392__$1 = (((((!((map__19392 == null))))?(((((map__19392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19392):map__19392);
var recognition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19392__$1,cljs.core.cst$kw$recognition);
var stop_ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19392__$1,cljs.core.cst$kw$stop_DASH_ch);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19392__$1,cljs.core.cst$kw$listener_SLASH_result);
recognition.abort();

recognition.removeEventListener("result",result);

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(stop_ch,cljs.core.cst$kw$stop);
});
vocloj.web.impl.create_recognizer = (function vocloj$web$impl$create_recognizer(var_args){
var G__19396 = arguments.length;
switch (G__19396) {
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

(vocloj.web.impl.WebSpeechSynthesizer.prototype.vocloj$protocols$SynthesizesSpeech$_speak$arity$3 = (function (this$,voice_id,p__19403){
var self__ = this;
var map__19404 = p__19403;
var map__19404__$1 = (((((!((map__19404 == null))))?(((((map__19404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19404):map__19404);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19404__$1,cljs.core.cst$kw$text);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19404__$1,cljs.core.cst$kw$lang);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19404__$1,cljs.core.cst$kw$pitch);
var rate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19404__$1,cljs.core.cst$kw$rate);
var volume = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19404__$1,cljs.core.cst$kw$volume);
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

(vocloj.web.impl.WebSpeechSynthesizer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k19399,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__19406 = k19399;
var G__19406__$1 = (((G__19406 instanceof cljs.core.Keyword))?G__19406.fqn:null);
switch (G__19406__$1) {
case "state-machine":
return self__.state_machine;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19399,else__4383__auto__);

}
}));

(vocloj.web.impl.WebSpeechSynthesizer.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__19407){
var vec__19408 = p__19407;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19408,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19408,(1),null);
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

(vocloj.web.impl.WebSpeechSynthesizer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19398){
var self__ = this;
var G__19398__$1 = this;
return (new cljs.core.RecordIter((0),G__19398__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_machine], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4238__auto____$1 = (function (){var fexpr__19411 = (function (coll__4377__auto__){
return (939495073 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__19411(this__4376__auto____$1);
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

(vocloj.web.impl.WebSpeechSynthesizer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19400,other19401){
var self__ = this;
var this19400__$1 = this;
return (((!((other19401 == null)))) && ((this19400__$1.constructor === other19401.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19400__$1.state_machine,other19401.state_machine)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19400__$1.__extmap,other19401.__extmap)));
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

(vocloj.web.impl.WebSpeechSynthesizer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__19398){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__19412 = cljs.core.keyword_identical_QMARK_;
var expr__19413 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__19415 = cljs.core.cst$kw$state_DASH_machine;
var G__19416 = expr__19413;
return (pred__19412.cljs$core$IFn$_invoke$arity$2 ? pred__19412.cljs$core$IFn$_invoke$arity$2(G__19415,G__19416) : pred__19412.call(null,G__19415,G__19416));
})())){
return (new vocloj.web.impl.WebSpeechSynthesizer(G__19398,self__.__meta,self__.__extmap,null));
} else {
return (new vocloj.web.impl.WebSpeechSynthesizer(self__.state_machine,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__19398),null));
}
}));

(vocloj.web.impl.WebSpeechSynthesizer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$state_DASH_machine,self__.state_machine,null))], null),self__.__extmap));
}));

(vocloj.web.impl.WebSpeechSynthesizer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__19398){
var self__ = this;
var this__4379__auto____$1 = this;
return (new vocloj.web.impl.WebSpeechSynthesizer(self__.state_machine,G__19398,self__.__extmap,self__.__hash));
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
vocloj.web.impl.map__GT_WebSpeechSynthesizer = (function vocloj$web$impl$map__GT_WebSpeechSynthesizer(G__19402){
var extmap__4419__auto__ = (function (){var G__19417 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19402,cljs.core.cst$kw$state_DASH_machine);
if(cljs.core.record_QMARK_(G__19402)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19417);
} else {
return G__19417;
}
})();
return (new vocloj.web.impl.WebSpeechSynthesizer(cljs.core.cst$kw$state_DASH_machine.cljs$core$IFn$_invoke$arity$1(G__19402),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

vocloj.web.impl.on_pause = (function vocloj$web$impl$on_pause(){
return speechSynthesis.pause();
});
vocloj.web.impl.on_resume = (function vocloj$web$impl$on_resume(){
return speechSynthesis.resume();
});
vocloj.web.impl.on_speak = (function vocloj$web$impl$on_speak(synth,_,p__19419){
var map__19420 = p__19419;
var map__19420__$1 = (((((!((map__19420 == null))))?(((((map__19420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19420.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19420):map__19420);
var map__19421 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19420__$1,cljs.core.cst$kw$data);
var map__19421__$1 = (((((!((map__19421 == null))))?(((((map__19421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19421.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19421):map__19421);
var utterances = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19421__$1,cljs.core.cst$kw$utterances);
var utterance = cljs.core.peek(utterances);
utterance.addEventListener("end",(function (){
return vocloj.core.transition.cljs$core$IFn$_invoke$arity$3(synth,cljs.core.cst$kw$end,cljs.core.update.cljs$core$IFn$_invoke$arity$3(vocloj.web.impl.current_data(synth),cljs.core.cst$kw$utterances,cljs.core.pop));
}));

return speechSynthesis.speak(utterance);
});
vocloj.web.impl.create_synthesizer = (function vocloj$web$impl$create_synthesizer(var_args){
var G__19425 = arguments.length;
switch (G__19425) {
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
var map__19436 = vocloj.web.impl.current_data(this$__$1);
var map__19436__$1 = (((((!((map__19436 == null))))?(((((map__19436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19436.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19436):map__19436);
var ready_ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19436__$1,cljs.core.cst$kw$ready_DASH_ch);
var c__16650__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16651__auto__ = (function (){var switch__14816__auto__ = (function (state_19450){
var state_val_19451 = (state_19450[(1)]);
if((state_val_19451 === (1))){
var state_19450__$1 = state_19450;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19450__$1,(2),ready_ch);
} else {
if((state_val_19451 === (2))){
var inst_19439 = (state_19450[(2)]);
var inst_19440 = vocloj.web.impl.current_data(this$__$1);
var inst_19441 = [cljs.core.cst$kw$media_SLASH_recorder,cljs.core.cst$kw$media_SLASH_audio_DASH_tracks,cljs.core.cst$kw$media_SLASH_stream];
var inst_19442 = (new MediaRecorder(inst_19439));
var inst_19443 = inst_19439.getAudioTracks();
var inst_19444 = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(inst_19443);
var inst_19445 = [inst_19442,inst_19444,inst_19439];
var inst_19446 = cljs.core.PersistentHashMap.fromArrays(inst_19441,inst_19445);
var inst_19447 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_19440,inst_19446], 0));
var inst_19448 = vocloj.core.transition.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.cst$kw$start,inst_19447);
var state_19450__$1 = state_19450;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19450__$1,inst_19448);
} else {
return null;
}
}
});
return (function() {
var vocloj$web$impl$state_machine__14817__auto__ = null;
var vocloj$web$impl$state_machine__14817__auto____0 = (function (){
var statearr_19452 = [null,null,null,null,null,null,null];
(statearr_19452[(0)] = vocloj$web$impl$state_machine__14817__auto__);

(statearr_19452[(1)] = (1));

return statearr_19452;
});
var vocloj$web$impl$state_machine__14817__auto____1 = (function (state_19450){
while(true){
var ret_value__14818__auto__ = (function (){try{while(true){
var result__14819__auto__ = switch__14816__auto__(state_19450);
if(cljs.core.keyword_identical_QMARK_(result__14819__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14819__auto__;
}
break;
}
}catch (e19453){var ex__14820__auto__ = e19453;
var statearr_19454_19491 = state_19450;
(statearr_19454_19491[(2)] = ex__14820__auto__);


if(cljs.core.seq((state_19450[(4)]))){
var statearr_19455_19492 = state_19450;
(statearr_19455_19492[(1)] = cljs.core.first((state_19450[(4)])));

} else {
throw ex__14820__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14818__auto__,cljs.core.cst$kw$recur)){
var G__19493 = state_19450;
state_19450 = G__19493;
continue;
} else {
return ret_value__14818__auto__;
}
break;
}
});
vocloj$web$impl$state_machine__14817__auto__ = function(state_19450){
switch(arguments.length){
case 0:
return vocloj$web$impl$state_machine__14817__auto____0.call(this);
case 1:
return vocloj$web$impl$state_machine__14817__auto____1.call(this,state_19450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vocloj$web$impl$state_machine__14817__auto__.cljs$core$IFn$_invoke$arity$0 = vocloj$web$impl$state_machine__14817__auto____0;
vocloj$web$impl$state_machine__14817__auto__.cljs$core$IFn$_invoke$arity$1 = vocloj$web$impl$state_machine__14817__auto____1;
return vocloj$web$impl$state_machine__14817__auto__;
})()
})();
var state__16652__auto__ = (function (){var statearr_19456 = (f__16651__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16651__auto__.cljs$core$IFn$_invoke$arity$0() : f__16651__auto__.call(null));
(statearr_19456[(6)] = c__16650__auto__);

return statearr_19456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16652__auto__);
}));

return c__16650__auto__;
}));

(vocloj.web.impl.WebMicrophoneStream.prototype.vocloj$protocols$Lifecycle$_stop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var map__19457 = vocloj.web.impl.current_data(this$__$1);
var map__19457__$1 = (((((!((map__19457 == null))))?(((((map__19457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19457):map__19457);
var recorder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19457__$1,cljs.core.cst$kw$media_SLASH_recorder);
var speech_ping = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19457__$1,cljs.core.cst$kw$speech_DASH_ping);
var timeout = cljs.core.async.timeout((1000));
recorder.stop();

var c__16650__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16651__auto__ = (function (){var switch__14816__auto__ = (function (state_19467){
var state_val_19468 = (state_19467[(1)]);
if((state_val_19468 === (1))){
var inst_19459 = cljs.core.PersistentVector.EMPTY;
var inst_19460 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19461 = [speech_ping,timeout];
var inst_19462 = (new cljs.core.PersistentVector(null,2,(5),inst_19460,inst_19461,null));
var state_19467__$1 = (function (){var statearr_19469 = state_19467;
(statearr_19469[(7)] = inst_19459);

return statearr_19469;
})();
return cljs.core.async.ioc_alts_BANG_(state_19467__$1,(2),inst_19462);
} else {
if((state_val_19468 === (2))){
var inst_19464 = (state_19467[(2)]);
var inst_19465 = vocloj.core.transition.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.cst$kw$stop,vocloj.web.impl.current_data);
var state_19467__$1 = (function (){var statearr_19470 = state_19467;
(statearr_19470[(8)] = inst_19464);

return statearr_19470;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19467__$1,inst_19465);
} else {
return null;
}
}
});
return (function() {
var vocloj$web$impl$state_machine__14817__auto__ = null;
var vocloj$web$impl$state_machine__14817__auto____0 = (function (){
var statearr_19471 = [null,null,null,null,null,null,null,null,null];
(statearr_19471[(0)] = vocloj$web$impl$state_machine__14817__auto__);

(statearr_19471[(1)] = (1));

return statearr_19471;
});
var vocloj$web$impl$state_machine__14817__auto____1 = (function (state_19467){
while(true){
var ret_value__14818__auto__ = (function (){try{while(true){
var result__14819__auto__ = switch__14816__auto__(state_19467);
if(cljs.core.keyword_identical_QMARK_(result__14819__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14819__auto__;
}
break;
}
}catch (e19472){var ex__14820__auto__ = e19472;
var statearr_19473_19494 = state_19467;
(statearr_19473_19494[(2)] = ex__14820__auto__);


if(cljs.core.seq((state_19467[(4)]))){
var statearr_19474_19495 = state_19467;
(statearr_19474_19495[(1)] = cljs.core.first((state_19467[(4)])));

} else {
throw ex__14820__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14818__auto__,cljs.core.cst$kw$recur)){
var G__19496 = state_19467;
state_19467 = G__19496;
continue;
} else {
return ret_value__14818__auto__;
}
break;
}
});
vocloj$web$impl$state_machine__14817__auto__ = function(state_19467){
switch(arguments.length){
case 0:
return vocloj$web$impl$state_machine__14817__auto____0.call(this);
case 1:
return vocloj$web$impl$state_machine__14817__auto____1.call(this,state_19467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vocloj$web$impl$state_machine__14817__auto__.cljs$core$IFn$_invoke$arity$0 = vocloj$web$impl$state_machine__14817__auto____0;
vocloj$web$impl$state_machine__14817__auto__.cljs$core$IFn$_invoke$arity$1 = vocloj$web$impl$state_machine__14817__auto____1;
return vocloj$web$impl$state_machine__14817__auto__;
})()
})();
var state__16652__auto__ = (function (){var statearr_19475 = (f__16651__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16651__auto__.cljs$core$IFn$_invoke$arity$0() : f__16651__auto__.call(null));
(statearr_19475[(6)] = c__16650__auto__);

return statearr_19475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16652__auto__);
}));

return c__16650__auto__;
}));

(vocloj.web.impl.WebMicrophoneStream.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(vocloj.web.impl.WebMicrophoneStream.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k19432,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__19476 = k19432;
var G__19476__$1 = (((G__19476 instanceof cljs.core.Keyword))?G__19476.fqn:null);
switch (G__19476__$1) {
case "state-machine":
return self__.state_machine;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19432,else__4383__auto__);

}
}));

(vocloj.web.impl.WebMicrophoneStream.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__19477){
var vec__19478 = p__19477;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19478,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19478,(1),null);
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

(vocloj.web.impl.WebMicrophoneStream.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19431){
var self__ = this;
var G__19431__$1 = this;
return (new cljs.core.RecordIter((0),G__19431__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_machine], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4238__auto____$1 = (function (){var fexpr__19481 = (function (coll__4377__auto__){
return (22122687 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__19481(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(vocloj.web.impl.WebMicrophoneStream.prototype.vocloj$protocols$Initializable$ = cljs.core.PROTOCOL_SENTINEL);

(vocloj.web.impl.WebMicrophoneStream.prototype.vocloj$protocols$Initializable$_init$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var vec__19482 = vocloj.web.impl.create_speech_channels((1));
var write = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19482,(0),null);
var read = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19482,(1),null);
var ping = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19482,(2),null);
var error_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var stop_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var ready_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var media_devices = navigator.mediaDevices;
var on_dataavailable = (function (p1__19427_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(write,p1__19427_SHARP_.data);
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
var on_error = (function (p1__19428_SHARP_){
return vocloj.core.transition.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.cst$kw$error,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,p1__19428_SHARP_], null));
});
var on_pause = (function (){
return vocloj.core.transition.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.cst$kw$pause,vocloj.web.impl.current_data);
});
var on_resume = (function (){
return vocloj.core.transition.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.cst$kw$resume,vocloj.web.impl.current_data);
});
var promise = media_devices.getUserMedia(({"audio": true}));
vocloj.core.transition.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.cst$kw$init,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$listener_SLASH_mute,cljs.core.cst$kw$listener_SLASH_dataavailable,cljs.core.cst$kw$listener_SLASH_pause,cljs.core.cst$kw$error_DASH_ch,cljs.core.cst$kw$listener_SLASH_error,cljs.core.cst$kw$listener_SLASH_end,cljs.core.cst$kw$listener_SLASH_resume,cljs.core.cst$kw$stop_DASH_ch,cljs.core.cst$kw$ready_DASH_ch,cljs.core.cst$kw$speech_DASH_ch,cljs.core.cst$kw$speech_DASH_ping,cljs.core.cst$kw$listener_SLASH_unmute],[on_mute,on_dataavailable,on_pause,error_ch,on_error,on_end,on_resume,stop_ch,ready_ch,read,ping,on_unmute]));

return promise.then((function (p1__19429_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ready_ch,p1__19429_SHARP_);
})).catch((function (p1__19430_SHARP_){
return vocloj.core.transition.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.cst$kw$error,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,p1__19430_SHARP_], null));
}));
}));

(vocloj.web.impl.WebMicrophoneStream.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19433,other19434){
var self__ = this;
var this19433__$1 = this;
return (((!((other19434 == null)))) && ((this19433__$1.constructor === other19434.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19433__$1.state_machine,other19434.state_machine)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19433__$1.__extmap,other19434.__extmap)));
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

(vocloj.web.impl.WebMicrophoneStream.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__19431){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__19485 = cljs.core.keyword_identical_QMARK_;
var expr__19486 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__19488 = cljs.core.cst$kw$state_DASH_machine;
var G__19489 = expr__19486;
return (pred__19485.cljs$core$IFn$_invoke$arity$2 ? pred__19485.cljs$core$IFn$_invoke$arity$2(G__19488,G__19489) : pred__19485.call(null,G__19488,G__19489));
})())){
return (new vocloj.web.impl.WebMicrophoneStream(G__19431,self__.__meta,self__.__extmap,null));
} else {
return (new vocloj.web.impl.WebMicrophoneStream(self__.state_machine,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__19431),null));
}
}));

(vocloj.web.impl.WebMicrophoneStream.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$state_DASH_machine,self__.state_machine,null))], null),self__.__extmap));
}));

(vocloj.web.impl.WebMicrophoneStream.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__19431){
var self__ = this;
var this__4379__auto____$1 = this;
return (new vocloj.web.impl.WebMicrophoneStream(self__.state_machine,G__19431,self__.__extmap,self__.__hash));
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
vocloj.web.impl.map__GT_WebMicrophoneStream = (function vocloj$web$impl$map__GT_WebMicrophoneStream(G__19435){
var extmap__4419__auto__ = (function (){var G__19490 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19435,cljs.core.cst$kw$state_DASH_machine);
if(cljs.core.record_QMARK_(G__19435)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19490);
} else {
return G__19490;
}
})();
return (new vocloj.web.impl.WebMicrophoneStream(cljs.core.cst$kw$state_DASH_machine.cljs$core$IFn$_invoke$arity$1(G__19435),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

vocloj.web.impl.on_microphone_recording = (function vocloj$web$impl$on_microphone_recording(_,___$1,p__19498){
var map__19499 = p__19498;
var map__19499__$1 = (((((!((map__19499 == null))))?(((((map__19499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19499):map__19499);
var map__19500 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19499__$1,cljs.core.cst$kw$data);
var map__19500__$1 = (((((!((map__19500 == null))))?(((((map__19500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19500):map__19500);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19500__$1,cljs.core.cst$kw$listener_SLASH_end);
var resume = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19500__$1,cljs.core.cst$kw$listener_SLASH_resume);
var mute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19500__$1,cljs.core.cst$kw$listener_SLASH_mute);
var audio_tracks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19500__$1,cljs.core.cst$kw$media_SLASH_audio_DASH_tracks);
var dataavailable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19500__$1,cljs.core.cst$kw$listener_SLASH_dataavailable);
var unmute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19500__$1,cljs.core.cst$kw$listener_SLASH_unmute);
var recorder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19500__$1,cljs.core.cst$kw$media_SLASH_recorder);
var pause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19500__$1,cljs.core.cst$kw$listener_SLASH_pause);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19500__$1,cljs.core.cst$kw$listener_SLASH_error);
recorder.addEventListener("dataavailable",dataavailable);

recorder.addEventListener("error",error);

recorder.addEventListener("pause",pause);

recorder.addEventListener("resume",resume);

var seq__19503_19507 = cljs.core.seq(audio_tracks);
var chunk__19504_19508 = null;
var count__19505_19509 = (0);
var i__19506_19510 = (0);
while(true){
if((i__19506_19510 < count__19505_19509)){
var track_19511 = chunk__19504_19508.cljs$core$IIndexed$_nth$arity$2(null,i__19506_19510);
track_19511.addEventListener("end",end);

track_19511.addEventListener("mute",mute);

track_19511.addEventListener("unmute",unmute);


var G__19512 = seq__19503_19507;
var G__19513 = chunk__19504_19508;
var G__19514 = count__19505_19509;
var G__19515 = (i__19506_19510 + (1));
seq__19503_19507 = G__19512;
chunk__19504_19508 = G__19513;
count__19505_19509 = G__19514;
i__19506_19510 = G__19515;
continue;
} else {
var temp__5753__auto___19516 = cljs.core.seq(seq__19503_19507);
if(temp__5753__auto___19516){
var seq__19503_19517__$1 = temp__5753__auto___19516;
if(cljs.core.chunked_seq_QMARK_(seq__19503_19517__$1)){
var c__4556__auto___19518 = cljs.core.chunk_first(seq__19503_19517__$1);
var G__19519 = cljs.core.chunk_rest(seq__19503_19517__$1);
var G__19520 = c__4556__auto___19518;
var G__19521 = cljs.core.count(c__4556__auto___19518);
var G__19522 = (0);
seq__19503_19507 = G__19519;
chunk__19504_19508 = G__19520;
count__19505_19509 = G__19521;
i__19506_19510 = G__19522;
continue;
} else {
var track_19523 = cljs.core.first(seq__19503_19517__$1);
track_19523.addEventListener("end",end);

track_19523.addEventListener("mute",mute);

track_19523.addEventListener("unmute",unmute);


var G__19524 = cljs.core.next(seq__19503_19517__$1);
var G__19525 = null;
var G__19526 = (0);
var G__19527 = (0);
seq__19503_19507 = G__19524;
chunk__19504_19508 = G__19525;
count__19505_19509 = G__19526;
i__19506_19510 = G__19527;
continue;
}
} else {
}
}
break;
}

return recorder.start();
});
vocloj.web.impl.on_microphone_stop = (function vocloj$web$impl$on_microphone_stop(_,___$1,p__19528){
var map__19529 = p__19528;
var map__19529__$1 = (((((!((map__19529 == null))))?(((((map__19529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19529):map__19529);
var map__19530 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19529__$1,cljs.core.cst$kw$data);
var map__19530__$1 = (((((!((map__19530 == null))))?(((((map__19530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19530):map__19530);
var audio_tracks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19530__$1,cljs.core.cst$kw$media_SLASH_audio_DASH_tracks);
var stop_ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19530__$1,cljs.core.cst$kw$stop_DASH_ch);
var seq__19533_19537 = cljs.core.seq(audio_tracks);
var chunk__19534_19538 = null;
var count__19535_19539 = (0);
var i__19536_19540 = (0);
while(true){
if((i__19536_19540 < count__19535_19539)){
var track_19541 = chunk__19534_19538.cljs$core$IIndexed$_nth$arity$2(null,i__19536_19540);
track_19541.stop();


var G__19542 = seq__19533_19537;
var G__19543 = chunk__19534_19538;
var G__19544 = count__19535_19539;
var G__19545 = (i__19536_19540 + (1));
seq__19533_19537 = G__19542;
chunk__19534_19538 = G__19543;
count__19535_19539 = G__19544;
i__19536_19540 = G__19545;
continue;
} else {
var temp__5753__auto___19546 = cljs.core.seq(seq__19533_19537);
if(temp__5753__auto___19546){
var seq__19533_19547__$1 = temp__5753__auto___19546;
if(cljs.core.chunked_seq_QMARK_(seq__19533_19547__$1)){
var c__4556__auto___19548 = cljs.core.chunk_first(seq__19533_19547__$1);
var G__19549 = cljs.core.chunk_rest(seq__19533_19547__$1);
var G__19550 = c__4556__auto___19548;
var G__19551 = cljs.core.count(c__4556__auto___19548);
var G__19552 = (0);
seq__19533_19537 = G__19549;
chunk__19534_19538 = G__19550;
count__19535_19539 = G__19551;
i__19536_19540 = G__19552;
continue;
} else {
var track_19553 = cljs.core.first(seq__19533_19547__$1);
track_19553.stop();


var G__19554 = cljs.core.next(seq__19533_19547__$1);
var G__19555 = null;
var G__19556 = (0);
var G__19557 = (0);
seq__19533_19537 = G__19554;
chunk__19534_19538 = G__19555;
count__19535_19539 = G__19556;
i__19536_19540 = G__19557;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(stop_ch,cljs.core.cst$kw$stop);
});
vocloj.web.impl.on_microphone_muted = (function vocloj$web$impl$on_microphone_muted(_,___$1,p__19558){
var map__19559 = p__19558;
var map__19559__$1 = (((((!((map__19559 == null))))?(((((map__19559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19559):map__19559);
var map__19560 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19559__$1,cljs.core.cst$kw$data);
var map__19560__$1 = (((((!((map__19560 == null))))?(((((map__19560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19560):map__19560);
var audio_tracks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19560__$1,cljs.core.cst$kw$media_SLASH_audio_DASH_tracks);
var seq__19563 = cljs.core.seq(audio_tracks);
var chunk__19564 = null;
var count__19565 = (0);
var i__19566 = (0);
while(true){
if((i__19566 < count__19565)){
var track = chunk__19564.cljs$core$IIndexed$_nth$arity$2(null,i__19566);
(track.enabled = false);


var G__19567 = seq__19563;
var G__19568 = chunk__19564;
var G__19569 = count__19565;
var G__19570 = (i__19566 + (1));
seq__19563 = G__19567;
chunk__19564 = G__19568;
count__19565 = G__19569;
i__19566 = G__19570;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__19563);
if(temp__5753__auto__){
var seq__19563__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19563__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__19563__$1);
var G__19571 = cljs.core.chunk_rest(seq__19563__$1);
var G__19572 = c__4556__auto__;
var G__19573 = cljs.core.count(c__4556__auto__);
var G__19574 = (0);
seq__19563 = G__19571;
chunk__19564 = G__19572;
count__19565 = G__19573;
i__19566 = G__19574;
continue;
} else {
var track = cljs.core.first(seq__19563__$1);
(track.enabled = false);


var G__19575 = cljs.core.next(seq__19563__$1);
var G__19576 = null;
var G__19577 = (0);
var G__19578 = (0);
seq__19563 = G__19575;
chunk__19564 = G__19576;
count__19565 = G__19577;
i__19566 = G__19578;
continue;
}
} else {
return null;
}
}
break;
}
});
vocloj.web.impl.on_microphone_unmute = (function vocloj$web$impl$on_microphone_unmute(_,___$1,p__19579){
var map__19580 = p__19579;
var map__19580__$1 = (((((!((map__19580 == null))))?(((((map__19580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19580):map__19580);
var map__19581 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19580__$1,cljs.core.cst$kw$data);
var map__19581__$1 = (((((!((map__19581 == null))))?(((((map__19581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19581):map__19581);
var audio_tracks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19581__$1,cljs.core.cst$kw$media_SLASH_audio_DASH_tracks);
var seq__19584 = cljs.core.seq(audio_tracks);
var chunk__19585 = null;
var count__19586 = (0);
var i__19587 = (0);
while(true){
if((i__19587 < count__19586)){
var track = chunk__19585.cljs$core$IIndexed$_nth$arity$2(null,i__19587);
(track.enabled = true);


var G__19588 = seq__19584;
var G__19589 = chunk__19585;
var G__19590 = count__19586;
var G__19591 = (i__19587 + (1));
seq__19584 = G__19588;
chunk__19585 = G__19589;
count__19586 = G__19590;
i__19587 = G__19591;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__19584);
if(temp__5753__auto__){
var seq__19584__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19584__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__19584__$1);
var G__19592 = cljs.core.chunk_rest(seq__19584__$1);
var G__19593 = c__4556__auto__;
var G__19594 = cljs.core.count(c__4556__auto__);
var G__19595 = (0);
seq__19584 = G__19592;
chunk__19585 = G__19593;
count__19586 = G__19594;
i__19587 = G__19595;
continue;
} else {
var track = cljs.core.first(seq__19584__$1);
(track.enabled = true);


var G__19596 = cljs.core.next(seq__19584__$1);
var G__19597 = null;
var G__19598 = (0);
var G__19599 = (0);
seq__19584 = G__19596;
chunk__19585 = G__19597;
count__19586 = G__19598;
i__19587 = G__19599;
continue;
}
} else {
return null;
}
}
break;
}
});
vocloj.web.impl.on_microphone_pause = (function vocloj$web$impl$on_microphone_pause(_,___$1,p__19600){
var map__19601 = p__19600;
var map__19601__$1 = (((((!((map__19601 == null))))?(((((map__19601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19601):map__19601);
var map__19602 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19601__$1,cljs.core.cst$kw$data);
var map__19602__$1 = (((((!((map__19602 == null))))?(((((map__19602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19602):map__19602);
var recorder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19602__$1,cljs.core.cst$kw$media_SLASH_recorder);
return recorder.pause();
});
vocloj.web.impl.on_microphone_resume = (function vocloj$web$impl$on_microphone_resume(_,___$1,p__19605){
var map__19606 = p__19605;
var map__19606__$1 = (((((!((map__19606 == null))))?(((((map__19606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19606):map__19606);
var map__19607 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19606__$1,cljs.core.cst$kw$data);
var map__19607__$1 = (((((!((map__19607 == null))))?(((((map__19607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19607):map__19607);
var recorder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19607__$1,cljs.core.cst$kw$media_SLASH_recorder);
return recorder.resume();
});
vocloj.web.impl.create_microphone_stream = (function vocloj$web$impl$create_microphone_stream(var_args){
var G__19611 = arguments.length;
switch (G__19611) {
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

