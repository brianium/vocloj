// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('vocloj.state.impl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('vocloj.protocols');

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
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
vocloj.state.impl.AtomStateMachine = (function (states,_STAR_state,__meta,__extmap,__hash){
this.states = states;
this._STAR_state = _STAR_state;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(vocloj.state.impl.AtomStateMachine.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(vocloj.state.impl.AtomStateMachine.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k20354,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__20358 = k20354;
var G__20358__$1 = (((G__20358 instanceof cljs.core.Keyword))?G__20358.fqn:null);
switch (G__20358__$1) {
case "states":
return self__.states;

break;
case "*state":
return self__._STAR_state;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20354,else__4383__auto__);

}
}));

(vocloj.state.impl.AtomStateMachine.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__20359){
var vec__20360 = p__20359;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20360,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20360,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(vocloj.state.impl.AtomStateMachine.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#vocloj.state.impl.AtomStateMachine{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$states,self__.states],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$_STAR_state,self__._STAR_state],null))], null),self__.__extmap));
}));

(vocloj.state.impl.AtomStateMachine.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20353){
var self__ = this;
var G__20353__$1 = this;
return (new cljs.core.RecordIter((0),G__20353__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$states,cljs.core.cst$kw$_STAR_state], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(vocloj.state.impl.AtomStateMachine.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(vocloj.state.impl.AtomStateMachine.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new vocloj.state.impl.AtomStateMachine(self__.states,self__._STAR_state,self__.__meta,self__.__extmap,self__.__hash));
}));

(vocloj.state.impl.AtomStateMachine.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(vocloj.state.impl.AtomStateMachine.prototype.vocloj$protocols$StateMachine$ = cljs.core.PROTOCOL_SENTINEL);

(vocloj.state.impl.AtomStateMachine.prototype.vocloj$protocols$StateMachine$_transition$arity$3 = (function (_,event,payload){
var self__ = this;
var ___$1 = this;
var current = cljs.core.deref(self__._STAR_state);
var next = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(self__.states,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(current),event], null));
if((!((next == null)))){
return cljs.core.reset_BANG_(self__._STAR_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$state,next,cljs.core.cst$kw$data,payload], null));
} else {
return null;
}
}));

(vocloj.state.impl.AtomStateMachine.prototype.vocloj$protocols$StateMachine$_add_effect$arity$3 = (function (this$,key,fn_3){
var self__ = this;
var this$__$1 = this;
return cljs.core.add_watch(self__._STAR_state,key,(function (_,___$1,old,new$){
return (fn_3.cljs$core$IFn$_invoke$arity$3 ? fn_3.cljs$core$IFn$_invoke$arity$3(this$__$1,old,new$) : fn_3.call(null,this$__$1,old,new$));
}));
}));

(vocloj.state.impl.AtomStateMachine.prototype.vocloj$protocols$StateMachine$_current_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__._STAR_state);
}));

(vocloj.state.impl.AtomStateMachine.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__20363 = (function (coll__4377__auto__){
return (1893980029 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__20363(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(vocloj.state.impl.AtomStateMachine.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20355,other20356){
var self__ = this;
var this20355__$1 = this;
return (((!((other20356 == null)))) && ((this20355__$1.constructor === other20356.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20355__$1.states,other20356.states)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20355__$1._STAR_state,other20356._STAR_state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20355__$1.__extmap,other20356.__extmap)));
}));

(vocloj.state.impl.AtomStateMachine.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$_STAR_state,null,cljs.core.cst$kw$states,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new vocloj.state.impl.AtomStateMachine(self__.states,self__._STAR_state,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(vocloj.state.impl.AtomStateMachine.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__20353){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__20364 = cljs.core.keyword_identical_QMARK_;
var expr__20365 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__20367 = cljs.core.cst$kw$states;
var G__20368 = expr__20365;
return (pred__20364.cljs$core$IFn$_invoke$arity$2 ? pred__20364.cljs$core$IFn$_invoke$arity$2(G__20367,G__20368) : pred__20364.call(null,G__20367,G__20368));
})())){
return (new vocloj.state.impl.AtomStateMachine(G__20353,self__._STAR_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20369 = cljs.core.cst$kw$_STAR_state;
var G__20370 = expr__20365;
return (pred__20364.cljs$core$IFn$_invoke$arity$2 ? pred__20364.cljs$core$IFn$_invoke$arity$2(G__20369,G__20370) : pred__20364.call(null,G__20369,G__20370));
})())){
return (new vocloj.state.impl.AtomStateMachine(self__.states,G__20353,self__.__meta,self__.__extmap,null));
} else {
return (new vocloj.state.impl.AtomStateMachine(self__.states,self__._STAR_state,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__20353),null));
}
}
}));

(vocloj.state.impl.AtomStateMachine.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$states,self__.states,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$_STAR_state,self__._STAR_state,null))], null),self__.__extmap));
}));

(vocloj.state.impl.AtomStateMachine.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__20353){
var self__ = this;
var this__4379__auto____$1 = this;
return (new vocloj.state.impl.AtomStateMachine(self__.states,self__._STAR_state,G__20353,self__.__extmap,self__.__hash));
}));

(vocloj.state.impl.AtomStateMachine.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(vocloj.state.impl.AtomStateMachine.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$states,cljs.core.cst$sym$_STAR_state], null);
}));

(vocloj.state.impl.AtomStateMachine.cljs$lang$type = true);

(vocloj.state.impl.AtomStateMachine.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"vocloj.state.impl/AtomStateMachine",null,(1),null));
}));

(vocloj.state.impl.AtomStateMachine.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"vocloj.state.impl/AtomStateMachine");
}));

/**
 * Positional factory function for vocloj.state.impl/AtomStateMachine.
 */
vocloj.state.impl.__GT_AtomStateMachine = (function vocloj$state$impl$__GT_AtomStateMachine(states,_STAR_state){
return (new vocloj.state.impl.AtomStateMachine(states,_STAR_state,null,null,null));
});

/**
 * Factory function for vocloj.state.impl/AtomStateMachine, taking a map of keywords to field values.
 */
vocloj.state.impl.map__GT_AtomStateMachine = (function vocloj$state$impl$map__GT_AtomStateMachine(G__20357){
var extmap__4419__auto__ = (function (){var G__20371 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20357,cljs.core.cst$kw$states,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$_STAR_state], 0));
if(cljs.core.record_QMARK_(G__20357)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20371);
} else {
return G__20371;
}
})();
return (new vocloj.state.impl.AtomStateMachine(cljs.core.cst$kw$states.cljs$core$IFn$_invoke$arity$1(G__20357),cljs.core.cst$kw$_STAR_state.cljs$core$IFn$_invoke$arity$1(G__20357),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

