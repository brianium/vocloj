// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__24320){
var map__24321 = p__24320;
var map__24321__$1 = (((((!((map__24321 == null))))?(((((map__24321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24321):map__24321);
var m = map__24321__$1;
var n = cljs.core.get.call(null,map__24321__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__24321__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24323_24355 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24324_24356 = null;
var count__24325_24357 = (0);
var i__24326_24358 = (0);
while(true){
if((i__24326_24358 < count__24325_24357)){
var f_24359 = cljs.core._nth.call(null,chunk__24324_24356,i__24326_24358);
cljs.core.println.call(null,"  ",f_24359);


var G__24360 = seq__24323_24355;
var G__24361 = chunk__24324_24356;
var G__24362 = count__24325_24357;
var G__24363 = (i__24326_24358 + (1));
seq__24323_24355 = G__24360;
chunk__24324_24356 = G__24361;
count__24325_24357 = G__24362;
i__24326_24358 = G__24363;
continue;
} else {
var temp__5753__auto___24364 = cljs.core.seq.call(null,seq__24323_24355);
if(temp__5753__auto___24364){
var seq__24323_24365__$1 = temp__5753__auto___24364;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24323_24365__$1)){
var c__4556__auto___24366 = cljs.core.chunk_first.call(null,seq__24323_24365__$1);
var G__24367 = cljs.core.chunk_rest.call(null,seq__24323_24365__$1);
var G__24368 = c__4556__auto___24366;
var G__24369 = cljs.core.count.call(null,c__4556__auto___24366);
var G__24370 = (0);
seq__24323_24355 = G__24367;
chunk__24324_24356 = G__24368;
count__24325_24357 = G__24369;
i__24326_24358 = G__24370;
continue;
} else {
var f_24371 = cljs.core.first.call(null,seq__24323_24365__$1);
cljs.core.println.call(null,"  ",f_24371);


var G__24372 = cljs.core.next.call(null,seq__24323_24365__$1);
var G__24373 = null;
var G__24374 = (0);
var G__24375 = (0);
seq__24323_24355 = G__24372;
chunk__24324_24356 = G__24373;
count__24325_24357 = G__24374;
i__24326_24358 = G__24375;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24376 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_24376);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_24376)))?cljs.core.second.call(null,arglists_24376):arglists_24376));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24327_24377 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24328_24378 = null;
var count__24329_24379 = (0);
var i__24330_24380 = (0);
while(true){
if((i__24330_24380 < count__24329_24379)){
var vec__24341_24381 = cljs.core._nth.call(null,chunk__24328_24378,i__24330_24380);
var name_24382 = cljs.core.nth.call(null,vec__24341_24381,(0),null);
var map__24344_24383 = cljs.core.nth.call(null,vec__24341_24381,(1),null);
var map__24344_24384__$1 = (((((!((map__24344_24383 == null))))?(((((map__24344_24383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24344_24383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24344_24383):map__24344_24383);
var doc_24385 = cljs.core.get.call(null,map__24344_24384__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_24386 = cljs.core.get.call(null,map__24344_24384__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_24382);

cljs.core.println.call(null," ",arglists_24386);

if(cljs.core.truth_(doc_24385)){
cljs.core.println.call(null," ",doc_24385);
} else {
}


var G__24387 = seq__24327_24377;
var G__24388 = chunk__24328_24378;
var G__24389 = count__24329_24379;
var G__24390 = (i__24330_24380 + (1));
seq__24327_24377 = G__24387;
chunk__24328_24378 = G__24388;
count__24329_24379 = G__24389;
i__24330_24380 = G__24390;
continue;
} else {
var temp__5753__auto___24391 = cljs.core.seq.call(null,seq__24327_24377);
if(temp__5753__auto___24391){
var seq__24327_24392__$1 = temp__5753__auto___24391;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24327_24392__$1)){
var c__4556__auto___24393 = cljs.core.chunk_first.call(null,seq__24327_24392__$1);
var G__24394 = cljs.core.chunk_rest.call(null,seq__24327_24392__$1);
var G__24395 = c__4556__auto___24393;
var G__24396 = cljs.core.count.call(null,c__4556__auto___24393);
var G__24397 = (0);
seq__24327_24377 = G__24394;
chunk__24328_24378 = G__24395;
count__24329_24379 = G__24396;
i__24330_24380 = G__24397;
continue;
} else {
var vec__24346_24398 = cljs.core.first.call(null,seq__24327_24392__$1);
var name_24399 = cljs.core.nth.call(null,vec__24346_24398,(0),null);
var map__24349_24400 = cljs.core.nth.call(null,vec__24346_24398,(1),null);
var map__24349_24401__$1 = (((((!((map__24349_24400 == null))))?(((((map__24349_24400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24349_24400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24349_24400):map__24349_24400);
var doc_24402 = cljs.core.get.call(null,map__24349_24401__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_24403 = cljs.core.get.call(null,map__24349_24401__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_24399);

cljs.core.println.call(null," ",arglists_24403);

if(cljs.core.truth_(doc_24402)){
cljs.core.println.call(null," ",doc_24402);
} else {
}


var G__24404 = cljs.core.next.call(null,seq__24327_24392__$1);
var G__24405 = null;
var G__24406 = (0);
var G__24407 = (0);
seq__24327_24377 = G__24404;
chunk__24328_24378 = G__24405;
count__24329_24379 = G__24406;
i__24330_24380 = G__24407;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.call(null,"Spec");

var seq__24351 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__24352 = null;
var count__24353 = (0);
var i__24354 = (0);
while(true){
if((i__24354 < count__24353)){
var role = cljs.core._nth.call(null,chunk__24352,i__24354);
var temp__5753__auto___24408__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5753__auto___24408__$1)){
var spec_24409 = temp__5753__auto___24408__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_24409));
} else {
}


var G__24410 = seq__24351;
var G__24411 = chunk__24352;
var G__24412 = count__24353;
var G__24413 = (i__24354 + (1));
seq__24351 = G__24410;
chunk__24352 = G__24411;
count__24353 = G__24412;
i__24354 = G__24413;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq.call(null,seq__24351);
if(temp__5753__auto____$1){
var seq__24351__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24351__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__24351__$1);
var G__24414 = cljs.core.chunk_rest.call(null,seq__24351__$1);
var G__24415 = c__4556__auto__;
var G__24416 = cljs.core.count.call(null,c__4556__auto__);
var G__24417 = (0);
seq__24351 = G__24414;
chunk__24352 = G__24415;
count__24353 = G__24416;
i__24354 = G__24417;
continue;
} else {
var role = cljs.core.first.call(null,seq__24351__$1);
var temp__5753__auto___24418__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5753__auto___24418__$2)){
var spec_24419 = temp__5753__auto___24418__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_24419));
} else {
}


var G__24420 = cljs.core.next.call(null,seq__24351__$1);
var G__24421 = null;
var G__24422 = (0);
var G__24423 = (0);
seq__24351 = G__24420;
chunk__24352 = G__24421;
count__24353 = G__24422;
i__24354 = G__24423;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__24424 = cljs.core.conj.call(null,via,t);
var G__24425 = cljs.core.ex_cause.call(null,t);
via = G__24424;
t = G__24425;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__24428 = datafied_throwable;
var map__24428__$1 = (((((!((map__24428 == null))))?(((((map__24428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24428):map__24428);
var via = cljs.core.get.call(null,map__24428__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__24428__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__24428__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__24429 = cljs.core.last.call(null,via);
var map__24429__$1 = (((((!((map__24429 == null))))?(((((map__24429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24429):map__24429);
var type = cljs.core.get.call(null,map__24429__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__24429__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__24429__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__24430 = data;
var map__24430__$1 = (((((!((map__24430 == null))))?(((((map__24430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24430):map__24430);
var problems = cljs.core.get.call(null,map__24430__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__24430__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__24430__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__24431 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__24431__$1 = (((((!((map__24431 == null))))?(((((map__24431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24431.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24431):map__24431);
var top_data = map__24431__$1;
var source = cljs.core.get.call(null,map__24431__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__24436 = phase;
var G__24436__$1 = (((G__24436 instanceof cljs.core.Keyword))?G__24436.fqn:null);
switch (G__24436__$1) {
case "read-source":
var map__24437 = data;
var map__24437__$1 = (((((!((map__24437 == null))))?(((((map__24437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24437):map__24437);
var line = cljs.core.get.call(null,map__24437__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__24437__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__24439 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__24439__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__24439,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__24439);
var G__24439__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__24439__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__24439__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__24439__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__24439__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__24440 = top_data;
var G__24440__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__24440,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__24440);
var G__24440__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__24440__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__24440__$1);
var G__24440__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__24440__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__24440__$2);
var G__24440__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__24440__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__24440__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__24440__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__24440__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__24441 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__24441,(0),null);
var method = cljs.core.nth.call(null,vec__24441,(1),null);
var file = cljs.core.nth.call(null,vec__24441,(2),null);
var line = cljs.core.nth.call(null,vec__24441,(3),null);
var G__24444 = top_data;
var G__24444__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__24444,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__24444);
var G__24444__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__24444__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__24444__$1);
var G__24444__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__24444__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__24444__$2);
var G__24444__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__24444__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__24444__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__24444__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__24444__$4;
}

break;
case "execution":
var vec__24445 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__24445,(0),null);
var method = cljs.core.nth.call(null,vec__24445,(1),null);
var file = cljs.core.nth.call(null,vec__24445,(2),null);
var line = cljs.core.nth.call(null,vec__24445,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__24427_SHARP_){
var or__4126__auto__ = (p1__24427_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__24427_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__24448 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__24448__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__24448,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__24448);
var G__24448__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__24448__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__24448__$1);
var G__24448__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__24448__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__24448__$2);
var G__24448__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__24448__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__24448__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__24448__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__24448__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24436__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__24452){
var map__24453 = p__24452;
var map__24453__$1 = (((((!((map__24453 == null))))?(((((map__24453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24453):map__24453);
var triage_data = map__24453__$1;
var phase = cljs.core.get.call(null,map__24453__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__24453__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__24453__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__24453__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__24453__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__24453__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__24453__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__24453__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__24455 = phase;
var G__24455__$1 = (((G__24455 instanceof cljs.core.Keyword))?G__24455.fqn:null);
switch (G__24455__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__24456_24465 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__24457_24466 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__24458_24467 = true;
var _STAR_print_fn_STAR__temp_val__24459_24468 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__24458_24467);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__24459_24468);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__24450_SHARP_){
return cljs.core.dissoc.call(null,p1__24450_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__24457_24466);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__24456_24465);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__24460_24469 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__24461_24470 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__24462_24471 = true;
var _STAR_print_fn_STAR__temp_val__24463_24472 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__24462_24471);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__24463_24472);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__24451_SHARP_){
return cljs.core.dissoc.call(null,p1__24451_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__24461_24470);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__24460_24469);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24455__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
