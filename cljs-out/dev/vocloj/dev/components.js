// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('vocloj.dev.components');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.string');
goog.require('goog.string.format');
vocloj.dev.components.button = (function vocloj$dev$components$button(props,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$button,(cljs.core.truth_((function (){var G__15130 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(props);
var fexpr__15129 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["submit",null,"button",null], null), null);
return (fexpr__15129.cljs$core$IFn$_invoke$arity$1 ? fexpr__15129.cljs$core$IFn$_invoke$arity$1(G__15130) : fexpr__15129.call(null,G__15130));
})())?props:cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"button"], null)], 0))),text], null);
});
vocloj.dev.components.text_input = (function vocloj$dev$components$text_input(props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$text_DASH_input,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"text"], null)], 0))], null);
});
vocloj.dev.components.range_input = (function vocloj$dev$components$range_input(props,label){
var id = ["range-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join('');
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$range_DASH_input,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,id], null),label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$range_DASH_input__input,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"range",cljs.core.cst$kw$id,id], null)], 0))], null),(function (){var G__15131 = "%.2f";
var G__15132 = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(props);
return goog.string.format(G__15131,G__15132);
})()], null);
});
