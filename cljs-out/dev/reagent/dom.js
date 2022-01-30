// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.input');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__19576 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__19577 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__19577);

try{var G__19578 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__19579 = container;
var G__19580 = (function (){
var _STAR_always_update_STAR__orig_val__19581 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__19582 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__19582);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__19581);
}});
return reagent.dom.global$module$react_dom.render(G__19578,G__19579,G__19580);
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__19576);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__19584 = arguments.length;
switch (G__19584) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__19585 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,cljs.core.cst$kw$callback.cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19585,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19585,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__19589_19605 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__19590_19606 = null;
var count__19591_19607 = (0);
var i__19592_19608 = (0);
while(true){
if((i__19592_19608 < count__19591_19607)){
var vec__19599_19609 = chunk__19590_19606.cljs$core$IIndexed$_nth$arity$2(null,i__19592_19608);
var container_19610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19599_19609,(0),null);
var comp_19611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19599_19609,(1),null);
reagent.dom.re_render_component(comp_19611,container_19610);


var G__19612 = seq__19589_19605;
var G__19613 = chunk__19590_19606;
var G__19614 = count__19591_19607;
var G__19615 = (i__19592_19608 + (1));
seq__19589_19605 = G__19612;
chunk__19590_19606 = G__19613;
count__19591_19607 = G__19614;
i__19592_19608 = G__19615;
continue;
} else {
var temp__5753__auto___19616 = cljs.core.seq(seq__19589_19605);
if(temp__5753__auto___19616){
var seq__19589_19617__$1 = temp__5753__auto___19616;
if(cljs.core.chunked_seq_QMARK_(seq__19589_19617__$1)){
var c__4556__auto___19618 = cljs.core.chunk_first(seq__19589_19617__$1);
var G__19619 = cljs.core.chunk_rest(seq__19589_19617__$1);
var G__19620 = c__4556__auto___19618;
var G__19621 = cljs.core.count(c__4556__auto___19618);
var G__19622 = (0);
seq__19589_19605 = G__19619;
chunk__19590_19606 = G__19620;
count__19591_19607 = G__19621;
i__19592_19608 = G__19622;
continue;
} else {
var vec__19602_19623 = cljs.core.first(seq__19589_19617__$1);
var container_19624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19602_19623,(0),null);
var comp_19625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19602_19623,(1),null);
reagent.dom.re_render_component(comp_19625,container_19624);


var G__19626 = cljs.core.next(seq__19589_19617__$1);
var G__19627 = null;
var G__19628 = (0);
var G__19629 = (0);
seq__19589_19605 = G__19626;
chunk__19590_19606 = G__19627;
count__19591_19607 = G__19628;
i__19592_19608 = G__19629;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});
