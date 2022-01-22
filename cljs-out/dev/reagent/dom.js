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
var _STAR_always_update_STAR__orig_val__20706 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__20707 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__20707);

try{var G__20708 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__20709 = container;
var G__20710 = (function (){
var _STAR_always_update_STAR__orig_val__20711 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__20712 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__20712);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__20711);
}});
return reagent.dom.global$module$react_dom.render(G__20708,G__20709,G__20710);
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__20706);
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
var G__20714 = arguments.length;
switch (G__20714) {
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

var vec__20715 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,cljs.core.cst$kw$callback.cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20715,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20715,(1),null);
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

var seq__20719_20735 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__20720_20736 = null;
var count__20721_20737 = (0);
var i__20722_20738 = (0);
while(true){
if((i__20722_20738 < count__20721_20737)){
var vec__20729_20739 = chunk__20720_20736.cljs$core$IIndexed$_nth$arity$2(null,i__20722_20738);
var container_20740 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20729_20739,(0),null);
var comp_20741 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20729_20739,(1),null);
reagent.dom.re_render_component(comp_20741,container_20740);


var G__20742 = seq__20719_20735;
var G__20743 = chunk__20720_20736;
var G__20744 = count__20721_20737;
var G__20745 = (i__20722_20738 + (1));
seq__20719_20735 = G__20742;
chunk__20720_20736 = G__20743;
count__20721_20737 = G__20744;
i__20722_20738 = G__20745;
continue;
} else {
var temp__5753__auto___20746 = cljs.core.seq(seq__20719_20735);
if(temp__5753__auto___20746){
var seq__20719_20747__$1 = temp__5753__auto___20746;
if(cljs.core.chunked_seq_QMARK_(seq__20719_20747__$1)){
var c__4556__auto___20748 = cljs.core.chunk_first(seq__20719_20747__$1);
var G__20749 = cljs.core.chunk_rest(seq__20719_20747__$1);
var G__20750 = c__4556__auto___20748;
var G__20751 = cljs.core.count(c__4556__auto___20748);
var G__20752 = (0);
seq__20719_20735 = G__20749;
chunk__20720_20736 = G__20750;
count__20721_20737 = G__20751;
i__20722_20738 = G__20752;
continue;
} else {
var vec__20732_20753 = cljs.core.first(seq__20719_20747__$1);
var container_20754 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20732_20753,(0),null);
var comp_20755 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20732_20753,(1),null);
reagent.dom.re_render_component(comp_20755,container_20754);


var G__20756 = cljs.core.next(seq__20719_20747__$1);
var G__20757 = null;
var G__20758 = (0);
var G__20759 = (0);
seq__20719_20735 = G__20756;
chunk__20720_20736 = G__20757;
count__20721_20737 = G__20758;
i__20722_20738 = G__20759;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});
