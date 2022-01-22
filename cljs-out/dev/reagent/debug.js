// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__10468__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__10468 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10469__i = 0, G__10469__a = new Array(arguments.length -  0);
while (G__10469__i < G__10469__a.length) {G__10469__a[G__10469__i] = arguments[G__10469__i + 0]; ++G__10469__i;}
  args = new cljs.core.IndexedSeq(G__10469__a,0,null);
} 
return G__10468__delegate.call(this,args);};
G__10468.cljs$lang$maxFixedArity = 0;
G__10468.cljs$lang$applyTo = (function (arglist__10470){
var args = cljs.core.seq(arglist__10470);
return G__10468__delegate(args);
});
G__10468.cljs$core$IFn$_invoke$arity$variadic = G__10468__delegate;
return G__10468;
})()
);

(o.error = (function() { 
var G__10471__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__10471 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10472__i = 0, G__10472__a = new Array(arguments.length -  0);
while (G__10472__i < G__10472__a.length) {G__10472__a[G__10472__i] = arguments[G__10472__i + 0]; ++G__10472__i;}
  args = new cljs.core.IndexedSeq(G__10472__a,0,null);
} 
return G__10471__delegate.call(this,args);};
G__10471.cljs$lang$maxFixedArity = 0;
G__10471.cljs$lang$applyTo = (function (arglist__10473){
var args = cljs.core.seq(arglist__10473);
return G__10471__delegate(args);
});
G__10471.cljs$core$IFn$_invoke$arity$variadic = G__10471__delegate;
return G__10471;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});
