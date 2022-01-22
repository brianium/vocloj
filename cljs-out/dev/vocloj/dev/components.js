// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('vocloj.dev.components');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.string');
goog.require('goog.string.format');
vocloj.dev.components.button = (function vocloj$dev$components$button(props,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$button,(cljs.core.truth_((function (){var G__13379 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(props);
var fexpr__13378 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["submit",null,"button",null], null), null);
return (fexpr__13378.cljs$core$IFn$_invoke$arity$1 ? fexpr__13378.cljs$core$IFn$_invoke$arity$1(G__13379) : fexpr__13378.call(null,G__13379));
})())?props:cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"button"], null)], 0))),text], null);
});
vocloj.dev.components.text_input = (function vocloj$dev$components$text_input(props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$text_DASH_input,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"text"], null)], 0))], null);
});
vocloj.dev.components.range_input = (function vocloj$dev$components$range_input(props,label){
var id = ["range-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join('');
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$range_DASH_input,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,id], null),label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$range_DASH_input__input,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"range",cljs.core.cst$kw$id,id], null)], 0))], null),(function (){var G__13380 = "%.2f";
var G__13381 = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(props);
return goog.string.format(G__13380,G__13381);
})()], null);
});
