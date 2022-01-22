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
var _STAR_always_update_STAR__orig_val__19435 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__19436 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__19436);

try{var G__19437 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__19438 = container;
var G__19439 = (function (){
var _STAR_always_update_STAR__orig_val__19440 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__19441 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__19441);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__19440);
}});
return reagent.dom.global$module$react_dom.render(G__19437,G__19438,G__19439);
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__19435);
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
var G__19443 = arguments.length;
switch (G__19443) {
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

var vec__19444 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,cljs.core.cst$kw$callback.cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19444,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19444,(1),null);
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

var seq__19448_19464 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__19449_19465 = null;
var count__19450_19466 = (0);
var i__19451_19467 = (0);
while(true){
if((i__19451_19467 < count__19450_19466)){
var vec__19458_19468 = chunk__19449_19465.cljs$core$IIndexed$_nth$arity$2(null,i__19451_19467);
var container_19469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19458_19468,(0),null);
var comp_19470 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19458_19468,(1),null);
reagent.dom.re_render_component(comp_19470,container_19469);


var G__19471 = seq__19448_19464;
var G__19472 = chunk__19449_19465;
var G__19473 = count__19450_19466;
var G__19474 = (i__19451_19467 + (1));
seq__19448_19464 = G__19471;
chunk__19449_19465 = G__19472;
count__19450_19466 = G__19473;
i__19451_19467 = G__19474;
continue;
} else {
var temp__5753__auto___19475 = cljs.core.seq(seq__19448_19464);
if(temp__5753__auto___19475){
var seq__19448_19476__$1 = temp__5753__auto___19475;
if(cljs.core.chunked_seq_QMARK_(seq__19448_19476__$1)){
var c__4556__auto___19477 = cljs.core.chunk_first(seq__19448_19476__$1);
var G__19478 = cljs.core.chunk_rest(seq__19448_19476__$1);
var G__19479 = c__4556__auto___19477;
var G__19480 = cljs.core.count(c__4556__auto___19477);
var G__19481 = (0);
seq__19448_19464 = G__19478;
chunk__19449_19465 = G__19479;
count__19450_19466 = G__19480;
i__19451_19467 = G__19481;
continue;
} else {
var vec__19461_19482 = cljs.core.first(seq__19448_19476__$1);
var container_19483 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19461_19482,(0),null);
var comp_19484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19461_19482,(1),null);
reagent.dom.re_render_component(comp_19484,container_19483);


var G__19485 = cljs.core.next(seq__19448_19476__$1);
var G__19486 = null;
var G__19487 = (0);
var G__19488 = (0);
seq__19448_19464 = G__19485;
chunk__19449_19465 = G__19486;
count__19450_19466 = G__19487;
i__19451_19467 = G__19488;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});
