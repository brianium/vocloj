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
var G__18654__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__18654 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18655__i = 0, G__18655__a = new Array(arguments.length -  0);
while (G__18655__i < G__18655__a.length) {G__18655__a[G__18655__i] = arguments[G__18655__i + 0]; ++G__18655__i;}
  args = new cljs.core.IndexedSeq(G__18655__a,0,null);
} 
return G__18654__delegate.call(this,args);};
G__18654.cljs$lang$maxFixedArity = 0;
G__18654.cljs$lang$applyTo = (function (arglist__18656){
var args = cljs.core.seq(arglist__18656);
return G__18654__delegate(args);
});
G__18654.cljs$core$IFn$_invoke$arity$variadic = G__18654__delegate;
return G__18654;
})()
);

(o.error = (function() { 
var G__18657__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__18657 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18658__i = 0, G__18658__a = new Array(arguments.length -  0);
while (G__18658__i < G__18658__a.length) {G__18658__a[G__18658__i] = arguments[G__18658__i + 0]; ++G__18658__i;}
  args = new cljs.core.IndexedSeq(G__18658__a,0,null);
} 
return G__18657__delegate.call(this,args);};
G__18657.cljs$lang$maxFixedArity = 0;
G__18657.cljs$lang$applyTo = (function (arglist__18659){
var args = cljs.core.seq(arglist__18659);
return G__18657__delegate(args);
});
G__18657.cljs$core$IFn$_invoke$arity$variadic = G__18657__delegate;
return G__18657;
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
