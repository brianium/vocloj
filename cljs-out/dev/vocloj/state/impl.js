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

(vocloj.state.impl.AtomStateMachine.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k19216,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__19220 = k19216;
var G__19220__$1 = (((G__19220 instanceof cljs.core.Keyword))?G__19220.fqn:null);
switch (G__19220__$1) {
case "states":
return self__.states;

break;
case "*state":
return self__._STAR_state;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19216,else__4383__auto__);

}
}));

(vocloj.state.impl.AtomStateMachine.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__19221){
var vec__19222 = p__19221;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19222,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19222,(1),null);
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

(vocloj.state.impl.AtomStateMachine.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19215){
var self__ = this;
var G__19215__$1 = this;
return (new cljs.core.RecordIter((0),G__19215__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$states,cljs.core.cst$kw$_STAR_state], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4238__auto____$1 = (function (){var fexpr__19225 = (function (coll__4377__auto__){
return (1893980029 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__19225(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(vocloj.state.impl.AtomStateMachine.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19217,other19218){
var self__ = this;
var this19217__$1 = this;
return (((!((other19218 == null)))) && ((this19217__$1.constructor === other19218.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19217__$1.states,other19218.states)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19217__$1._STAR_state,other19218._STAR_state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19217__$1.__extmap,other19218.__extmap)));
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

(vocloj.state.impl.AtomStateMachine.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__19215){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__19226 = cljs.core.keyword_identical_QMARK_;
var expr__19227 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__19229 = cljs.core.cst$kw$states;
var G__19230 = expr__19227;
return (pred__19226.cljs$core$IFn$_invoke$arity$2 ? pred__19226.cljs$core$IFn$_invoke$arity$2(G__19229,G__19230) : pred__19226.call(null,G__19229,G__19230));
})())){
return (new vocloj.state.impl.AtomStateMachine(G__19215,self__._STAR_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19231 = cljs.core.cst$kw$_STAR_state;
var G__19232 = expr__19227;
return (pred__19226.cljs$core$IFn$_invoke$arity$2 ? pred__19226.cljs$core$IFn$_invoke$arity$2(G__19231,G__19232) : pred__19226.call(null,G__19231,G__19232));
})())){
return (new vocloj.state.impl.AtomStateMachine(self__.states,G__19215,self__.__meta,self__.__extmap,null));
} else {
return (new vocloj.state.impl.AtomStateMachine(self__.states,self__._STAR_state,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__19215),null));
}
}
}));

(vocloj.state.impl.AtomStateMachine.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$states,self__.states,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$_STAR_state,self__._STAR_state,null))], null),self__.__extmap));
}));

(vocloj.state.impl.AtomStateMachine.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__19215){
var self__ = this;
var this__4379__auto____$1 = this;
return (new vocloj.state.impl.AtomStateMachine(self__.states,self__._STAR_state,G__19215,self__.__extmap,self__.__hash));
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
vocloj.state.impl.map__GT_AtomStateMachine = (function vocloj$state$impl$map__GT_AtomStateMachine(G__19219){
var extmap__4419__auto__ = (function (){var G__19233 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19219,cljs.core.cst$kw$states,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$_STAR_state], 0));
if(cljs.core.record_QMARK_(G__19219)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19233);
} else {
return G__19233;
}
})();
return (new vocloj.state.impl.AtomStateMachine(cljs.core.cst$kw$states.cljs$core$IFn$_invoke$arity$1(G__19219),cljs.core.cst$kw$_STAR_state.cljs$core$IFn$_invoke$arity$1(G__19219),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

