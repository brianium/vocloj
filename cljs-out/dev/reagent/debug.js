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
var G__14929__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__14929 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14930__i = 0, G__14930__a = new Array(arguments.length -  0);
while (G__14930__i < G__14930__a.length) {G__14930__a[G__14930__i] = arguments[G__14930__i + 0]; ++G__14930__i;}
  args = new cljs.core.IndexedSeq(G__14930__a,0,null);
} 
return G__14929__delegate.call(this,args);};
G__14929.cljs$lang$maxFixedArity = 0;
G__14929.cljs$lang$applyTo = (function (arglist__14931){
var args = cljs.core.seq(arglist__14931);
return G__14929__delegate(args);
});
G__14929.cljs$core$IFn$_invoke$arity$variadic = G__14929__delegate;
return G__14929;
})()
);

(o.error = (function() { 
var G__14932__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__14932 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14933__i = 0, G__14933__a = new Array(arguments.length -  0);
while (G__14933__i < G__14933__a.length) {G__14933__a[G__14933__i] = arguments[G__14933__i + 0]; ++G__14933__i;}
  args = new cljs.core.IndexedSeq(G__14933__a,0,null);
} 
return G__14932__delegate.call(this,args);};
G__14932.cljs$lang$maxFixedArity = 0;
G__14932.cljs$lang$applyTo = (function (arglist__14934){
var args = cljs.core.seq(arglist__14934);
return G__14932__delegate(args);
});
G__14932.cljs$core$IFn$_invoke$arity$variadic = G__14932__delegate;
return G__14932;
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
