// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('cljs.pprint');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
cljs.pprint.print = (function cljs$pprint$print(var_args){
var args__4742__auto__ = [];
var len__4736__auto___13479 = arguments.length;
var i__4737__auto___13480 = (0);
while(true){
if((i__4737__auto___13480 < len__4736__auto___13479)){
args__4742__auto__.push((arguments[i__4737__auto___13480]));

var G__13481 = (i__4737__auto___13480 + (1));
i__4737__auto___13480 = G__13481;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,more));
}));

(cljs.pprint.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.pprint.print.cljs$lang$applyTo = (function (seq13478){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13478));
}));

cljs.pprint.println = (function cljs$pprint$println(var_args){
var args__4742__auto__ = [];
var len__4736__auto___13483 = arguments.length;
var i__4737__auto___13484 = (0);
while(true){
if((i__4737__auto___13484 < len__4736__auto___13483)){
args__4742__auto__.push((arguments[i__4737__auto___13484]));

var G__13485 = (i__4737__auto___13484 + (1));
i__4737__auto___13484 = G__13485;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.print,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
}));

(cljs.pprint.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.pprint.println.cljs$lang$applyTo = (function (seq13482){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13482));
}));

cljs.pprint.print_char = (function cljs$pprint$print_char(c){
return cljs.core._write(cljs.core._STAR_out_STAR_,(function (){var pred__13486 = cljs.core._EQ_;
var expr__13487 = c;
if(cljs.core.truth_((function (){var G__13489 = "\b";
var G__13490 = expr__13487;
return (pred__13486.cljs$core$IFn$_invoke$arity$2 ? pred__13486.cljs$core$IFn$_invoke$arity$2(G__13489,G__13490) : pred__13486.call(null,G__13489,G__13490));
})())){
return "\\backspace";
} else {
if(cljs.core.truth_((function (){var G__13491 = " ";
var G__13492 = expr__13487;
return (pred__13486.cljs$core$IFn$_invoke$arity$2 ? pred__13486.cljs$core$IFn$_invoke$arity$2(G__13491,G__13492) : pred__13486.call(null,G__13491,G__13492));
})())){
return "\\space";
} else {
if(cljs.core.truth_((function (){var G__13493 = "\t";
var G__13494 = expr__13487;
return (pred__13486.cljs$core$IFn$_invoke$arity$2 ? pred__13486.cljs$core$IFn$_invoke$arity$2(G__13493,G__13494) : pred__13486.call(null,G__13493,G__13494));
})())){
return "\\tab";
} else {
if(cljs.core.truth_((function (){var G__13495 = "\n";
var G__13496 = expr__13487;
return (pred__13486.cljs$core$IFn$_invoke$arity$2 ? pred__13486.cljs$core$IFn$_invoke$arity$2(G__13495,G__13496) : pred__13486.call(null,G__13495,G__13496));
})())){
return "\\newline";
} else {
if(cljs.core.truth_((function (){var G__13497 = "\f";
var G__13498 = expr__13487;
return (pred__13486.cljs$core$IFn$_invoke$arity$2 ? pred__13486.cljs$core$IFn$_invoke$arity$2(G__13497,G__13498) : pred__13486.call(null,G__13497,G__13498));
})())){
return "\\formfeed";
} else {
if(cljs.core.truth_((function (){var G__13499 = "\r";
var G__13500 = expr__13487;
return (pred__13486.cljs$core$IFn$_invoke$arity$2 ? pred__13486.cljs$core$IFn$_invoke$arity$2(G__13499,G__13500) : pred__13486.call(null,G__13499,G__13500));
})())){
return "\\return";
} else {
if(cljs.core.truth_((function (){var G__13501 = "\"";
var G__13502 = expr__13487;
return (pred__13486.cljs$core$IFn$_invoke$arity$2 ? pred__13486.cljs$core$IFn$_invoke$arity$2(G__13501,G__13502) : pred__13486.call(null,G__13501,G__13502));
})())){
return "\\\"";
} else {
if(cljs.core.truth_((function (){var G__13503 = "\\";
var G__13504 = expr__13487;
return (pred__13486.cljs$core$IFn$_invoke$arity$2 ? pred__13486.cljs$core$IFn$_invoke$arity$2(G__13503,G__13504) : pred__13486.call(null,G__13503,G__13504));
})())){
return "\\\\";
} else {
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
}
}
}
}
}
}
}
}
})());
});
cljs.pprint.pr = (function cljs$pprint$pr(var_args){
var args__4742__auto__ = [];
var len__4736__auto___13506 = arguments.length;
var i__4737__auto___13507 = (0);
while(true){
if((i__4737__auto___13507 < len__4736__auto___13506)){
args__4742__auto__.push((arguments[i__4737__auto___13507]));

var G__13508 = (i__4737__auto___13507 + (1));
i__4737__auto___13507 = G__13508;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,more));
}));

(cljs.pprint.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.pprint.pr.cljs$lang$applyTo = (function (seq13505){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13505));
}));

cljs.pprint.prn = (function cljs$pprint$prn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___13510 = arguments.length;
var i__4737__auto___13511 = (0);
while(true){
if((i__4737__auto___13511 < len__4736__auto___13510)){
args__4742__auto__.push((arguments[i__4737__auto___13511]));

var G__13512 = (i__4737__auto___13511 + (1));
i__4737__auto___13511 = G__13512;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.pr,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
}));

(cljs.pprint.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.pprint.prn.cljs$lang$applyTo = (function (seq13509){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13509));
}));

/**
 * Returns true if n is an float.
 */
cljs.pprint.float_QMARK_ = (function cljs$pprint$float_QMARK_(n){
return ((typeof n === 'number') && ((!(isNaN(n)))) && ((!((n === Infinity)))) && ((!((parseFloat(n) === parseInt(n,(10)))))));
});
/**
 * Convert char to int
 */
cljs.pprint.char_code = (function cljs$pprint$char_code(c){
if(typeof c === 'number'){
return c;
} else {
if(((typeof c === 'string') && ((c.length === (1))))){
return c.charCodeAt((0));
} else {
throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.pprint.map_passing_context = (function cljs$pprint$map_passing_context(func,initial_context,lis){
var context = initial_context;
var lis__$1 = lis;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(lis__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var this$ = cljs.core.first(lis__$1);
var remainder = cljs.core.next(lis__$1);
var vec__13516 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13516,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13516,(1),null);
var G__13519 = new_context;
var G__13520 = remainder;
var G__13521 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__13519;
lis__$1 = G__13520;
acc = G__13521;
continue;
}
break;
}
});
cljs.pprint.consume = (function cljs$pprint$consume(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__13525 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13525,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13525,(1),null);
if(cljs.core.not(result)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,new_context], null);
} else {
var G__13528 = new_context;
var G__13529 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__13528;
acc = G__13529;
continue;
}
break;
}
});
cljs.pprint.consume_while = (function cljs$pprint$consume_while(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__13533 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13533,(0),null);
var continue$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13533,(1),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13533,(2),null);
if(cljs.core.not(continue$)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var G__13536 = new_context;
var G__13537 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__13536;
acc = G__13537;
continue;
}
break;
}
});
cljs.pprint.unzip_map = (function cljs$pprint$unzip_map(m){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function cljs$pprint$unzip_map_$_iter__13538(s__13539){
return (new cljs.core.LazySeq(null,(function (){
var s__13539__$1 = s__13539;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__13539__$1);
if(temp__5753__auto__){
var s__13539__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13539__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__13539__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__13541 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__13540 = (0);
while(true){
if((i__13540 < size__4528__auto__)){
var vec__13542 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__13540);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13542,(0),null);
var vec__13545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13542,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13545,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13545,(1),null);
cljs.core.chunk_append(b__13541,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null));

var G__13570 = (i__13540 + (1));
i__13540 = G__13570;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13541),cljs$pprint$unzip_map_$_iter__13538(cljs.core.chunk_rest(s__13539__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13541),null);
}
} else {
var vec__13548 = cljs.core.first(s__13539__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13548,(0),null);
var vec__13551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13548,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13551,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13551,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null),cljs$pprint$unzip_map_$_iter__13538(cljs.core.rest(s__13539__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(m);
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function cljs$pprint$unzip_map_$_iter__13554(s__13555){
return (new cljs.core.LazySeq(null,(function (){
var s__13555__$1 = s__13555;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__13555__$1);
if(temp__5753__auto__){
var s__13555__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13555__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__13555__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__13557 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__13556 = (0);
while(true){
if((i__13556 < size__4528__auto__)){
var vec__13558 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__13556);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13558,(0),null);
var vec__13561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13558,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13561,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13561,(1),null);
cljs.core.chunk_append(b__13557,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null));

var G__13571 = (i__13556 + (1));
i__13556 = G__13571;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13557),cljs$pprint$unzip_map_$_iter__13554(cljs.core.chunk_rest(s__13555__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13557),null);
}
} else {
var vec__13564 = cljs.core.first(s__13555__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13564,(0),null);
var vec__13567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13564,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13567,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13567,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null),cljs$pprint$unzip_map_$_iter__13554(cljs.core.rest(s__13555__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(m);
})())], null);
});
cljs.pprint.tuple_map = (function cljs$pprint$tuple_map(m,v1){

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function cljs$pprint$tuple_map_$_iter__13572(s__13573){
return (new cljs.core.LazySeq(null,(function (){
var s__13573__$1 = s__13573;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__13573__$1);
if(temp__5753__auto__){
var s__13573__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13573__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__13573__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__13575 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__13574 = (0);
while(true){
if((i__13574 < size__4528__auto__)){
var vec__13576 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__13574);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13576,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13576,(1),null);
cljs.core.chunk_append(b__13575,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null));

var G__13582 = (i__13574 + (1));
i__13574 = G__13582;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13575),cljs$pprint$tuple_map_$_iter__13572(cljs.core.chunk_rest(s__13573__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13575),null);
}
} else {
var vec__13579 = cljs.core.first(s__13573__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13579,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13579,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null),cljs$pprint$tuple_map_$_iter__13572(cljs.core.rest(s__13573__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(m);
})());
});
cljs.pprint.rtrim = (function cljs$pprint$rtrim(s,c){

var len = cljs.core.count(s);
if((((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1))),c)))){
var n = (len - (1));
while(true){
if((n < (0))){
return "";
} else {
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c)))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(n + (1)));
} else {
var G__13583 = (n - (1));
n = G__13583;
continue;

}
}
break;
}
} else {
return s;
}
});
cljs.pprint.ltrim = (function cljs$pprint$ltrim(s,c){

var len = cljs.core.count(s);
if((((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(0)),c)))){
var n = (0);
while(true){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,len)) || ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c)))))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,n);
} else {
var G__13584 = (n + (1));
n = G__13584;
continue;
}
break;
}
} else {
return s;
}
});
cljs.pprint.prefix_count = (function cljs$pprint$prefix_count(aseq,val){

var test = ((cljs.core.coll_QMARK_(val))?cljs.core.set(val):cljs.core.PersistentHashSet.createAsIfByAssoc([val]));
var pos = (0);
while(true){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos,cljs.core.count(aseq))) || (cljs.core.not((function (){var G__13586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(aseq,pos);
return (test.cljs$core$IFn$_invoke$arity$1 ? test.cljs$core$IFn$_invoke$arity$1(G__13586) : test.call(null,G__13586));
})())))){
return pos;
} else {
var G__13587 = (pos + (1));
pos = G__13587;
continue;
}
break;
}
});

/**
 * @interface
 */
cljs.pprint.IPrettyFlush = function(){};

var cljs$pprint$IPrettyFlush$_ppflush$dyn_13588 = (function (pp){
var x__4428__auto__ = (((pp == null))?null:pp);
var m__4429__auto__ = (cljs.pprint._ppflush[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(pp) : m__4429__auto__.call(null,pp));
} else {
var m__4426__auto__ = (cljs.pprint._ppflush["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(pp) : m__4426__auto__.call(null,pp));
} else {
throw cljs.core.missing_protocol("IPrettyFlush.-ppflush",pp);
}
}
});
cljs.pprint._ppflush = (function cljs$pprint$_ppflush(pp){
if((((!((pp == null)))) && ((!((pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1 == null)))))){
return pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1(pp);
} else {
return cljs$pprint$IPrettyFlush$_ppflush$dyn_13588(pp);
}
});

cljs.pprint._STAR_default_page_width_STAR_ = (72);
cljs.pprint.get_field = (function cljs$pprint$get_field(this$,sym){
var G__13589 = cljs.core.deref(cljs.core.deref(this$));
return (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(G__13589) : sym.call(null,G__13589));
});
cljs.pprint.set_field = (function cljs$pprint$set_field(this$,sym,new_val){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,sym,new_val);
});
cljs.pprint.get_column = (function cljs$pprint$get_column(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$cur);
});
cljs.pprint.get_line = (function cljs$pprint$get_line(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$line);
});
cljs.pprint.get_max_column = (function cljs$pprint$get_max_column(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$max);
});
cljs.pprint.set_max_column = (function cljs$pprint$set_max_column(this$,new_max){
cljs.pprint.set_field(this$,cljs.core.cst$kw$max,new_max);

return null;
});
cljs.pprint.get_writer = (function cljs$pprint$get_writer(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$base);
});
cljs.pprint.c_write_char = (function cljs$pprint$c_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
cljs.pprint.set_field(this$,cljs.core.cst$kw$cur,(0));

cljs.pprint.set_field(this$,cljs.core.cst$kw$line,(cljs.pprint.get_field(this$,cljs.core.cst$kw$line) + (1)));
} else {
cljs.pprint.set_field(this$,cljs.core.cst$kw$cur,(cljs.pprint.get_field(this$,cljs.core.cst$kw$cur) + (1)));
}

return cljs.core._write(cljs.pprint.get_field(this$,cljs.core.cst$kw$base),c);
});
cljs.pprint.column_writer = (function cljs$pprint$column_writer(var_args){
var G__13592 = arguments.length;
switch (G__13592) {
case 1:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1 = (function (writer){
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,cljs.pprint._STAR_default_page_width_STAR_);
}));

(cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2 = (function (writer,max_columns){
var fields = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$max,max_columns,cljs.core.cst$kw$cur,(0),cljs.core.cst$kw$line,(0),cljs.core.cst$kw$base,writer], null));
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint13593 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint13593 = (function (writer,max_columns,fields,meta13594){
this.writer = writer;
this.max_columns = max_columns;
this.fields = fields;
this.meta13594 = meta13594;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint13593.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13595,meta13594__$1){
var self__ = this;
var _13595__$1 = this;
return (new cljs.pprint.t_cljs$pprint13593(self__.writer,self__.max_columns,self__.fields,meta13594__$1));
}));

(cljs.pprint.t_cljs$pprint13593.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13595){
var self__ = this;
var _13595__$1 = this;
return self__.meta13594;
}));

(cljs.pprint.t_cljs$pprint13593.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
}));

(cljs.pprint.t_cljs$pprint13593.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
}));

(cljs.pprint.t_cljs$pprint13593.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__13596 = cljs.core._EQ_;
var expr__13597 = cljs.core.type(x);
if(cljs.core.truth_((pred__13596.cljs$core$IFn$_invoke$arity$2 ? pred__13596.cljs$core$IFn$_invoke$arity$2(String,expr__13597) : pred__13596.call(null,String,expr__13597)))){
var s = x;
var nl = s.lastIndexOf("\n");
if((nl < (0))){
cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$cur,(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$cur) + cljs.core.count(s)));
} else {
cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$cur,((cljs.core.count(s) - nl) - (1)));

cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$line,(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$line) + cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__13590_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__13590_SHARP_,"\n");
}),s))));
}

return cljs.core._write(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$base),s);
} else {
if(cljs.core.truth_((pred__13596.cljs$core$IFn$_invoke$arity$2 ? pred__13596.cljs$core$IFn$_invoke$arity$2(Number,expr__13597) : pred__13596.call(null,Number,expr__13597)))){
return cljs.pprint.c_write_char(this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__13597)].join('')));
}
}
}));

(cljs.pprint.t_cljs$pprint13593.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$max_DASH_columns,cljs.core.cst$sym$fields,cljs.core.cst$sym$meta13594], null);
}));

(cljs.pprint.t_cljs$pprint13593.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint13593.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint13593");

(cljs.pprint.t_cljs$pprint13593.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.pprint/t_cljs$pprint13593");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint13593.
 */
cljs.pprint.__GT_t_cljs$pprint13593 = (function cljs$pprint$__GT_t_cljs$pprint13593(writer__$1,max_columns__$1,fields__$1,meta13594){
return (new cljs.pprint.t_cljs$pprint13593(writer__$1,max_columns__$1,fields__$1,meta13594));
});

}

return (new cljs.pprint.t_cljs$pprint13593(writer,max_columns,fields,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.pprint.column_writer.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
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
cljs.pprint.logical_block = (function (parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,__meta,__extmap,__hash){
this.parent = parent;
this.section = section;
this.start_col = start_col;
this.indent = indent;
this.done_nl = done_nl;
this.intra_block_nl = intra_block_nl;
this.prefix = prefix;
this.per_line_prefix = per_line_prefix;
this.suffix = suffix;
this.logical_block_callback = logical_block_callback;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k13601,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__13605 = k13601;
var G__13605__$1 = (((G__13605 instanceof cljs.core.Keyword))?G__13605.fqn:null);
switch (G__13605__$1) {
case "parent":
return self__.parent;

break;
case "section":
return self__.section;

break;
case "start-col":
return self__.start_col;

break;
case "indent":
return self__.indent;

break;
case "done-nl":
return self__.done_nl;

break;
case "intra-block-nl":
return self__.intra_block_nl;

break;
case "prefix":
return self__.prefix;

break;
case "per-line-prefix":
return self__.per_line_prefix;

break;
case "suffix":
return self__.suffix;

break;
case "logical-block-callback":
return self__.logical_block_callback;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13601,else__4383__auto__);

}
}));

(cljs.pprint.logical_block.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__13606){
var vec__13607 = p__13606;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13607,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13607,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(cljs.pprint.logical_block.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#cljs.pprint.logical-block{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parent,self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$section,self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_col,self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$indent,self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$done_DASH_nl,self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$intra_DASH_block_DASH_nl,self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$prefix,self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$per_DASH_line_DASH_prefix,self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$suffix,self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block_DASH_callback,self__.logical_block_callback],null))], null),self__.__extmap));
}));

(cljs.pprint.logical_block.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13600){
var self__ = this;
var G__13600__$1 = this;
return (new cljs.core.RecordIter((0),G__13600__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parent,cljs.core.cst$kw$section,cljs.core.cst$kw$start_DASH_col,cljs.core.cst$kw$indent,cljs.core.cst$kw$done_DASH_nl,cljs.core.cst$kw$intra_DASH_block_DASH_nl,cljs.core.cst$kw$prefix,cljs.core.cst$kw$per_DASH_line_DASH_prefix,cljs.core.cst$kw$suffix,cljs.core.cst$kw$logical_DASH_block_DASH_callback], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.pprint.logical_block.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.logical_block.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.logical_block.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (10 + cljs.core.count(self__.__extmap));
}));

(cljs.pprint.logical_block.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__13610 = (function (coll__4377__auto__){
return (1977012399 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__13610(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(cljs.pprint.logical_block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this13602,other13603){
var self__ = this;
var this13602__$1 = this;
return (((!((other13603 == null)))) && ((this13602__$1.constructor === other13603.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13602__$1.parent,other13603.parent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13602__$1.section,other13603.section)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13602__$1.start_col,other13603.start_col)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13602__$1.indent,other13603.indent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13602__$1.done_nl,other13603.done_nl)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13602__$1.intra_block_nl,other13603.intra_block_nl)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13602__$1.prefix,other13603.prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13602__$1.per_line_prefix,other13603.per_line_prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13602__$1.suffix,other13603.suffix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13602__$1.logical_block_callback,other13603.logical_block_callback)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13602__$1.__extmap,other13603.__extmap)));
}));

(cljs.pprint.logical_block.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [cljs.core.cst$kw$suffix,null,cljs.core.cst$kw$indent,null,cljs.core.cst$kw$parent,null,cljs.core.cst$kw$section,null,cljs.core.cst$kw$done_DASH_nl,null,cljs.core.cst$kw$start_DASH_col,null,cljs.core.cst$kw$prefix,null,cljs.core.cst$kw$per_DASH_line_DASH_prefix,null,cljs.core.cst$kw$logical_DASH_block_DASH_callback,null,cljs.core.cst$kw$intra_DASH_block_DASH_nl,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(cljs.pprint.logical_block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__13600){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__13611 = cljs.core.keyword_identical_QMARK_;
var expr__13612 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__13614 = cljs.core.cst$kw$parent;
var G__13615 = expr__13612;
return (pred__13611.cljs$core$IFn$_invoke$arity$2 ? pred__13611.cljs$core$IFn$_invoke$arity$2(G__13614,G__13615) : pred__13611.call(null,G__13614,G__13615));
})())){
return (new cljs.pprint.logical_block(G__13600,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13616 = cljs.core.cst$kw$section;
var G__13617 = expr__13612;
return (pred__13611.cljs$core$IFn$_invoke$arity$2 ? pred__13611.cljs$core$IFn$_invoke$arity$2(G__13616,G__13617) : pred__13611.call(null,G__13616,G__13617));
})())){
return (new cljs.pprint.logical_block(self__.parent,G__13600,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13618 = cljs.core.cst$kw$start_DASH_col;
var G__13619 = expr__13612;
return (pred__13611.cljs$core$IFn$_invoke$arity$2 ? pred__13611.cljs$core$IFn$_invoke$arity$2(G__13618,G__13619) : pred__13611.call(null,G__13618,G__13619));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,G__13600,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13620 = cljs.core.cst$kw$indent;
var G__13621 = expr__13612;
return (pred__13611.cljs$core$IFn$_invoke$arity$2 ? pred__13611.cljs$core$IFn$_invoke$arity$2(G__13620,G__13621) : pred__13611.call(null,G__13620,G__13621));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,G__13600,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13622 = cljs.core.cst$kw$done_DASH_nl;
var G__13623 = expr__13612;
return (pred__13611.cljs$core$IFn$_invoke$arity$2 ? pred__13611.cljs$core$IFn$_invoke$arity$2(G__13622,G__13623) : pred__13611.call(null,G__13622,G__13623));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,G__13600,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13624 = cljs.core.cst$kw$intra_DASH_block_DASH_nl;
var G__13625 = expr__13612;
return (pred__13611.cljs$core$IFn$_invoke$arity$2 ? pred__13611.cljs$core$IFn$_invoke$arity$2(G__13624,G__13625) : pred__13611.call(null,G__13624,G__13625));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,G__13600,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13626 = cljs.core.cst$kw$prefix;
var G__13627 = expr__13612;
return (pred__13611.cljs$core$IFn$_invoke$arity$2 ? pred__13611.cljs$core$IFn$_invoke$arity$2(G__13626,G__13627) : pred__13611.call(null,G__13626,G__13627));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,G__13600,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13628 = cljs.core.cst$kw$per_DASH_line_DASH_prefix;
var G__13629 = expr__13612;
return (pred__13611.cljs$core$IFn$_invoke$arity$2 ? pred__13611.cljs$core$IFn$_invoke$arity$2(G__13628,G__13629) : pred__13611.call(null,G__13628,G__13629));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,G__13600,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13630 = cljs.core.cst$kw$suffix;
var G__13631 = expr__13612;
return (pred__13611.cljs$core$IFn$_invoke$arity$2 ? pred__13611.cljs$core$IFn$_invoke$arity$2(G__13630,G__13631) : pred__13611.call(null,G__13630,G__13631));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,G__13600,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13632 = cljs.core.cst$kw$logical_DASH_block_DASH_callback;
var G__13633 = expr__13612;
return (pred__13611.cljs$core$IFn$_invoke$arity$2 ? pred__13611.cljs$core$IFn$_invoke$arity$2(G__13632,G__13633) : pred__13611.call(null,G__13632,G__13633));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,G__13600,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__13600),null));
}
}
}
}
}
}
}
}
}
}
}));

(cljs.pprint.logical_block.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$parent,self__.parent,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$section,self__.section,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$start_DASH_col,self__.start_col,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$indent,self__.indent,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$done_DASH_nl,self__.done_nl,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$intra_DASH_block_DASH_nl,self__.intra_block_nl,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$prefix,self__.prefix,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$per_DASH_line_DASH_prefix,self__.per_line_prefix,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$suffix,self__.suffix,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$logical_DASH_block_DASH_callback,self__.logical_block_callback,null))], null),self__.__extmap));
}));

(cljs.pprint.logical_block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__13600){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,G__13600,self__.__extmap,self__.__hash));
}));

(cljs.pprint.logical_block.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(cljs.pprint.logical_block.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$parent,cljs.core.cst$sym$section,cljs.core.cst$sym$start_DASH_col,cljs.core.cst$sym$indent,cljs.core.cst$sym$done_DASH_nl,cljs.core.cst$sym$intra_DASH_block_DASH_nl,cljs.core.cst$sym$prefix,cljs.core.cst$sym$per_DASH_line_DASH_prefix,cljs.core.cst$sym$suffix,cljs.core.cst$sym$logical_DASH_block_DASH_callback], null);
}));

(cljs.pprint.logical_block.cljs$lang$type = true);

(cljs.pprint.logical_block.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"cljs.pprint/logical-block",null,(1),null));
}));

(cljs.pprint.logical_block.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"cljs.pprint/logical-block");
}));

/**
 * Positional factory function for cljs.pprint/logical-block.
 */
cljs.pprint.__GT_logical_block = (function cljs$pprint$__GT_logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback){
return (new cljs.pprint.logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,null,null,null));
});

/**
 * Factory function for cljs.pprint/logical-block, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_logical_block = (function cljs$pprint$map__GT_logical_block(G__13604){
var extmap__4419__auto__ = (function (){var G__13634 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13604,cljs.core.cst$kw$parent,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$section,cljs.core.cst$kw$start_DASH_col,cljs.core.cst$kw$indent,cljs.core.cst$kw$done_DASH_nl,cljs.core.cst$kw$intra_DASH_block_DASH_nl,cljs.core.cst$kw$prefix,cljs.core.cst$kw$per_DASH_line_DASH_prefix,cljs.core.cst$kw$suffix,cljs.core.cst$kw$logical_DASH_block_DASH_callback], 0));
if(cljs.core.record_QMARK_(G__13604)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__13634);
} else {
return G__13634;
}
})();
return (new cljs.pprint.logical_block(cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(G__13604),cljs.core.cst$kw$section.cljs$core$IFn$_invoke$arity$1(G__13604),cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(G__13604),cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(G__13604),cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(G__13604),cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(G__13604),cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(G__13604),cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(G__13604),cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(G__13604),cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(G__13604),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

cljs.pprint.ancestor_QMARK_ = (function cljs$pprint$ancestor_QMARK_(parent,child){
var child__$1 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(child);
while(true){
if((child__$1 == null)){
return false;
} else {
if((parent === child__$1)){
return true;
} else {
var G__13636 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(child__$1);
child__$1 = G__13636;
continue;

}
}
break;
}
});
cljs.pprint.buffer_length = (function cljs$pprint$buffer_length(l){
var l__$1 = cljs.core.seq(l);
if(l__$1){
return (cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(cljs.core.last(l__$1)) - cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(cljs.core.first(l__$1)));
} else {
return (0);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
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
cljs.pprint.buffer_blob = (function (type_tag,data,trailing_white_space,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.data = data;
this.trailing_white_space = trailing_white_space;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k13638,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__13642 = k13638;
var G__13642__$1 = (((G__13642 instanceof cljs.core.Keyword))?G__13642.fqn:null);
switch (G__13642__$1) {
case "type-tag":
return self__.type_tag;

break;
case "data":
return self__.data;

break;
case "trailing-white-space":
return self__.trailing_white_space;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13638,else__4383__auto__);

}
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__13643){
var vec__13644 = p__13643;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13644,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13644,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#cljs.pprint.buffer-blob{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$data,self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$trailing_DASH_white_DASH_space,self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13637){
var self__ = this;
var G__13637__$1 = this;
return (new cljs.core.RecordIter((0),G__13637__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$data,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__13647 = (function (coll__4377__auto__){
return (1809113693 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__13647(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this13639,other13640){
var self__ = this;
var this13639__$1 = this;
return (((!((other13640 == null)))) && ((this13639__$1.constructor === other13640.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13639__$1.type_tag,other13640.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13639__$1.data,other13640.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13639__$1.trailing_white_space,other13640.trailing_white_space)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13639__$1.start_pos,other13640.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13639__$1.end_pos,other13640.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13639__$1.__extmap,other13640.__extmap)));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null,cljs.core.cst$kw$data,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__13637){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__13648 = cljs.core.keyword_identical_QMARK_;
var expr__13649 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__13651 = cljs.core.cst$kw$type_DASH_tag;
var G__13652 = expr__13649;
return (pred__13648.cljs$core$IFn$_invoke$arity$2 ? pred__13648.cljs$core$IFn$_invoke$arity$2(G__13651,G__13652) : pred__13648.call(null,G__13651,G__13652));
})())){
return (new cljs.pprint.buffer_blob(G__13637,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13653 = cljs.core.cst$kw$data;
var G__13654 = expr__13649;
return (pred__13648.cljs$core$IFn$_invoke$arity$2 ? pred__13648.cljs$core$IFn$_invoke$arity$2(G__13653,G__13654) : pred__13648.call(null,G__13653,G__13654));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,G__13637,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13655 = cljs.core.cst$kw$trailing_DASH_white_DASH_space;
var G__13656 = expr__13649;
return (pred__13648.cljs$core$IFn$_invoke$arity$2 ? pred__13648.cljs$core$IFn$_invoke$arity$2(G__13655,G__13656) : pred__13648.call(null,G__13655,G__13656));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,G__13637,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13657 = cljs.core.cst$kw$start_DASH_pos;
var G__13658 = expr__13649;
return (pred__13648.cljs$core$IFn$_invoke$arity$2 ? pred__13648.cljs$core$IFn$_invoke$arity$2(G__13657,G__13658) : pred__13648.call(null,G__13657,G__13658));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,G__13637,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13659 = cljs.core.cst$kw$end_DASH_pos;
var G__13660 = expr__13649;
return (pred__13648.cljs$core$IFn$_invoke$arity$2 ? pred__13648.cljs$core$IFn$_invoke$arity$2(G__13659,G__13660) : pred__13648.call(null,G__13659,G__13660));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,G__13637,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__13637),null));
}
}
}
}
}
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$type_DASH_tag,self__.type_tag,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$data,self__.data,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$trailing_DASH_white_DASH_space,self__.trailing_white_space,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$start_DASH_pos,self__.start_pos,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$end_DASH_pos,self__.end_pos,null))], null),self__.__extmap));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__13637){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,G__13637,self__.__extmap,self__.__hash));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(cljs.pprint.buffer_blob.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$data,cljs.core.cst$sym$trailing_DASH_white_DASH_space,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
}));

(cljs.pprint.buffer_blob.cljs$lang$type = true);

(cljs.pprint.buffer_blob.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"cljs.pprint/buffer-blob",null,(1),null));
}));

(cljs.pprint.buffer_blob.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"cljs.pprint/buffer-blob");
}));

/**
 * Positional factory function for cljs.pprint/buffer-blob.
 */
cljs.pprint.__GT_buffer_blob = (function cljs$pprint$__GT_buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/buffer-blob, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_buffer_blob = (function cljs$pprint$map__GT_buffer_blob(G__13641){
var extmap__4419__auto__ = (function (){var G__13661 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13641,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0));
if(cljs.core.record_QMARK_(G__13641)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__13661);
} else {
return G__13661;
}
})();
return (new cljs.pprint.buffer_blob(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__13641),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(G__13641),cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(G__13641),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__13641),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__13641),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


cljs.pprint.make_buffer_blob = (function cljs$pprint$make_buffer_blob(data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(cljs.core.cst$kw$buffer_DASH_blob,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.buffer_blob_QMARK_ = (function cljs$pprint$buffer_blob_QMARK_(x__13409__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__13409__auto__),cljs.core.cst$kw$buffer_DASH_blob);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
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
cljs.pprint.nl_t = (function (type_tag,type,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.type = type;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k13664,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__13668 = k13664;
var G__13668__$1 = (((G__13668 instanceof cljs.core.Keyword))?G__13668.fqn:null);
switch (G__13668__$1) {
case "type-tag":
return self__.type_tag;

break;
case "type":
return self__.type;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13664,else__4383__auto__);

}
}));

(cljs.pprint.nl_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__13669){
var vec__13670 = p__13669;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13670,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13670,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(cljs.pprint.nl_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#cljs.pprint.nl-t{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type,self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
}));

(cljs.pprint.nl_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13663){
var self__ = this;
var G__13663__$1 = this;
return (new cljs.core.RecordIter((0),G__13663__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$type,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.pprint.nl_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.nl_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.nl_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(cljs.pprint.nl_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__13673 = (function (coll__4377__auto__){
return (-1640656800 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__13673(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(cljs.pprint.nl_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this13665,other13666){
var self__ = this;
var this13665__$1 = this;
return (((!((other13666 == null)))) && ((this13665__$1.constructor === other13666.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13665__$1.type_tag,other13666.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13665__$1.type,other13666.type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13665__$1.logical_block,other13666.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13665__$1.start_pos,other13666.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13665__$1.end_pos,other13666.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13665__$1.__extmap,other13666.__extmap)));
}));

(cljs.pprint.nl_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$type,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(cljs.pprint.nl_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__13663){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__13674 = cljs.core.keyword_identical_QMARK_;
var expr__13675 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__13677 = cljs.core.cst$kw$type_DASH_tag;
var G__13678 = expr__13675;
return (pred__13674.cljs$core$IFn$_invoke$arity$2 ? pred__13674.cljs$core$IFn$_invoke$arity$2(G__13677,G__13678) : pred__13674.call(null,G__13677,G__13678));
})())){
return (new cljs.pprint.nl_t(G__13663,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13679 = cljs.core.cst$kw$type;
var G__13680 = expr__13675;
return (pred__13674.cljs$core$IFn$_invoke$arity$2 ? pred__13674.cljs$core$IFn$_invoke$arity$2(G__13679,G__13680) : pred__13674.call(null,G__13679,G__13680));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,G__13663,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13681 = cljs.core.cst$kw$logical_DASH_block;
var G__13682 = expr__13675;
return (pred__13674.cljs$core$IFn$_invoke$arity$2 ? pred__13674.cljs$core$IFn$_invoke$arity$2(G__13681,G__13682) : pred__13674.call(null,G__13681,G__13682));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,G__13663,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13683 = cljs.core.cst$kw$start_DASH_pos;
var G__13684 = expr__13675;
return (pred__13674.cljs$core$IFn$_invoke$arity$2 ? pred__13674.cljs$core$IFn$_invoke$arity$2(G__13683,G__13684) : pred__13674.call(null,G__13683,G__13684));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,G__13663,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13685 = cljs.core.cst$kw$end_DASH_pos;
var G__13686 = expr__13675;
return (pred__13674.cljs$core$IFn$_invoke$arity$2 ? pred__13674.cljs$core$IFn$_invoke$arity$2(G__13685,G__13686) : pred__13674.call(null,G__13685,G__13686));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,G__13663,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__13663),null));
}
}
}
}
}
}));

(cljs.pprint.nl_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$type_DASH_tag,self__.type_tag,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$type,self__.type,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$logical_DASH_block,self__.logical_block,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$start_DASH_pos,self__.start_pos,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$end_DASH_pos,self__.end_pos,null))], null),self__.__extmap));
}));

(cljs.pprint.nl_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__13663){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,G__13663,self__.__extmap,self__.__hash));
}));

(cljs.pprint.nl_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(cljs.pprint.nl_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$type,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
}));

(cljs.pprint.nl_t.cljs$lang$type = true);

(cljs.pprint.nl_t.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"cljs.pprint/nl-t",null,(1),null));
}));

(cljs.pprint.nl_t.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"cljs.pprint/nl-t");
}));

/**
 * Positional factory function for cljs.pprint/nl-t.
 */
cljs.pprint.__GT_nl_t = (function cljs$pprint$__GT_nl_t(type_tag,type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(type_tag,type,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/nl-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_nl_t = (function cljs$pprint$map__GT_nl_t(G__13667){
var extmap__4419__auto__ = (function (){var G__13687 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13667,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$type,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0));
if(cljs.core.record_QMARK_(G__13667)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__13687);
} else {
return G__13687;
}
})();
return (new cljs.pprint.nl_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__13667),cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(G__13667),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__13667),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__13667),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__13667),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


cljs.pprint.make_nl_t = (function cljs$pprint$make_nl_t(type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(cljs.core.cst$kw$nl_DASH_t,type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.nl_t_QMARK_ = (function cljs$pprint$nl_t_QMARK_(x__13409__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__13409__auto__),cljs.core.cst$kw$nl_DASH_t);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
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
cljs.pprint.start_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k13690,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__13694 = k13690;
var G__13694__$1 = (((G__13694 instanceof cljs.core.Keyword))?G__13694.fqn:null);
switch (G__13694__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13690,else__4383__auto__);

}
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__13695){
var vec__13696 = p__13695;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13696,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13696,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#cljs.pprint.start-block-t{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13689){
var self__ = this;
var G__13689__$1 = this;
return (new cljs.core.RecordIter((0),G__13689__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.start_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__13699 = (function (coll__4377__auto__){
return (-414877272 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__13699(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this13691,other13692){
var self__ = this;
var this13691__$1 = this;
return (((!((other13692 == null)))) && ((this13691__$1.constructor === other13692.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13691__$1.type_tag,other13692.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13691__$1.logical_block,other13692.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13691__$1.start_pos,other13692.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13691__$1.end_pos,other13692.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13691__$1.__extmap,other13692.__extmap)));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__13689){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__13700 = cljs.core.keyword_identical_QMARK_;
var expr__13701 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__13703 = cljs.core.cst$kw$type_DASH_tag;
var G__13704 = expr__13701;
return (pred__13700.cljs$core$IFn$_invoke$arity$2 ? pred__13700.cljs$core$IFn$_invoke$arity$2(G__13703,G__13704) : pred__13700.call(null,G__13703,G__13704));
})())){
return (new cljs.pprint.start_block_t(G__13689,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13705 = cljs.core.cst$kw$logical_DASH_block;
var G__13706 = expr__13701;
return (pred__13700.cljs$core$IFn$_invoke$arity$2 ? pred__13700.cljs$core$IFn$_invoke$arity$2(G__13705,G__13706) : pred__13700.call(null,G__13705,G__13706));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,G__13689,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13707 = cljs.core.cst$kw$start_DASH_pos;
var G__13708 = expr__13701;
return (pred__13700.cljs$core$IFn$_invoke$arity$2 ? pred__13700.cljs$core$IFn$_invoke$arity$2(G__13707,G__13708) : pred__13700.call(null,G__13707,G__13708));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,G__13689,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13709 = cljs.core.cst$kw$end_DASH_pos;
var G__13710 = expr__13701;
return (pred__13700.cljs$core$IFn$_invoke$arity$2 ? pred__13700.cljs$core$IFn$_invoke$arity$2(G__13709,G__13710) : pred__13700.call(null,G__13709,G__13710));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__13689,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__13689),null));
}
}
}
}
}));

(cljs.pprint.start_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$type_DASH_tag,self__.type_tag,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$logical_DASH_block,self__.logical_block,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$start_DASH_pos,self__.start_pos,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$end_DASH_pos,self__.end_pos,null))], null),self__.__extmap));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__13689){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__13689,self__.__extmap,self__.__hash));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(cljs.pprint.start_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
}));

(cljs.pprint.start_block_t.cljs$lang$type = true);

(cljs.pprint.start_block_t.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"cljs.pprint/start-block-t",null,(1),null));
}));

(cljs.pprint.start_block_t.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"cljs.pprint/start-block-t");
}));

/**
 * Positional factory function for cljs.pprint/start-block-t.
 */
cljs.pprint.__GT_start_block_t = (function cljs$pprint$__GT_start_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/start-block-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_start_block_t = (function cljs$pprint$map__GT_start_block_t(G__13693){
var extmap__4419__auto__ = (function (){var G__13711 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13693,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0));
if(cljs.core.record_QMARK_(G__13693)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__13711);
} else {
return G__13711;
}
})();
return (new cljs.pprint.start_block_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__13693),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__13693),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__13693),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__13693),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


cljs.pprint.make_start_block_t = (function cljs$pprint$make_start_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(cljs.core.cst$kw$start_DASH_block_DASH_t,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.start_block_t_QMARK_ = (function cljs$pprint$start_block_t_QMARK_(x__13409__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__13409__auto__),cljs.core.cst$kw$start_DASH_block_DASH_t);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
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
cljs.pprint.end_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k13714,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__13718 = k13714;
var G__13718__$1 = (((G__13718 instanceof cljs.core.Keyword))?G__13718.fqn:null);
switch (G__13718__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13714,else__4383__auto__);

}
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__13719){
var vec__13720 = p__13719;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13720,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13720,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#cljs.pprint.end-block-t{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13713){
var self__ = this;
var G__13713__$1 = this;
return (new cljs.core.RecordIter((0),G__13713__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.end_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__13723 = (function (coll__4377__auto__){
return (1365867980 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__13723(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this13715,other13716){
var self__ = this;
var this13715__$1 = this;
return (((!((other13716 == null)))) && ((this13715__$1.constructor === other13716.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13715__$1.type_tag,other13716.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13715__$1.logical_block,other13716.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13715__$1.start_pos,other13716.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13715__$1.end_pos,other13716.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13715__$1.__extmap,other13716.__extmap)));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__13713){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__13724 = cljs.core.keyword_identical_QMARK_;
var expr__13725 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__13727 = cljs.core.cst$kw$type_DASH_tag;
var G__13728 = expr__13725;
return (pred__13724.cljs$core$IFn$_invoke$arity$2 ? pred__13724.cljs$core$IFn$_invoke$arity$2(G__13727,G__13728) : pred__13724.call(null,G__13727,G__13728));
})())){
return (new cljs.pprint.end_block_t(G__13713,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13729 = cljs.core.cst$kw$logical_DASH_block;
var G__13730 = expr__13725;
return (pred__13724.cljs$core$IFn$_invoke$arity$2 ? pred__13724.cljs$core$IFn$_invoke$arity$2(G__13729,G__13730) : pred__13724.call(null,G__13729,G__13730));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,G__13713,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13731 = cljs.core.cst$kw$start_DASH_pos;
var G__13732 = expr__13725;
return (pred__13724.cljs$core$IFn$_invoke$arity$2 ? pred__13724.cljs$core$IFn$_invoke$arity$2(G__13731,G__13732) : pred__13724.call(null,G__13731,G__13732));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,G__13713,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13733 = cljs.core.cst$kw$end_DASH_pos;
var G__13734 = expr__13725;
return (pred__13724.cljs$core$IFn$_invoke$arity$2 ? pred__13724.cljs$core$IFn$_invoke$arity$2(G__13733,G__13734) : pred__13724.call(null,G__13733,G__13734));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__13713,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__13713),null));
}
}
}
}
}));

(cljs.pprint.end_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$type_DASH_tag,self__.type_tag,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$logical_DASH_block,self__.logical_block,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$start_DASH_pos,self__.start_pos,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$end_DASH_pos,self__.end_pos,null))], null),self__.__extmap));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__13713){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__13713,self__.__extmap,self__.__hash));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(cljs.pprint.end_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
}));

(cljs.pprint.end_block_t.cljs$lang$type = true);

(cljs.pprint.end_block_t.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"cljs.pprint/end-block-t",null,(1),null));
}));

(cljs.pprint.end_block_t.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"cljs.pprint/end-block-t");
}));

/**
 * Positional factory function for cljs.pprint/end-block-t.
 */
cljs.pprint.__GT_end_block_t = (function cljs$pprint$__GT_end_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/end-block-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_end_block_t = (function cljs$pprint$map__GT_end_block_t(G__13717){
var extmap__4419__auto__ = (function (){var G__13735 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13717,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0));
if(cljs.core.record_QMARK_(G__13717)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__13735);
} else {
return G__13735;
}
})();
return (new cljs.pprint.end_block_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__13717),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__13717),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__13717),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__13717),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


cljs.pprint.make_end_block_t = (function cljs$pprint$make_end_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(cljs.core.cst$kw$end_DASH_block_DASH_t,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.end_block_t_QMARK_ = (function cljs$pprint$end_block_t_QMARK_(x__13409__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__13409__auto__),cljs.core.cst$kw$end_DASH_block_DASH_t);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
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
cljs.pprint.indent_t = (function (type_tag,logical_block,relative_to,offset,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.relative_to = relative_to;
this.offset = offset;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k13738,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__13742 = k13738;
var G__13742__$1 = (((G__13742 instanceof cljs.core.Keyword))?G__13742.fqn:null);
switch (G__13742__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "relative-to":
return self__.relative_to;

break;
case "offset":
return self__.offset;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13738,else__4383__auto__);

}
}));

(cljs.pprint.indent_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__13743){
var vec__13744 = p__13743;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13744,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13744,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(cljs.pprint.indent_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#cljs.pprint.indent-t{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$relative_DASH_to,self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
}));

(cljs.pprint.indent_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13737){
var self__ = this;
var G__13737__$1 = this;
return (new cljs.core.RecordIter((0),G__13737__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$relative_DASH_to,cljs.core.cst$kw$offset,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.pprint.indent_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.indent_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.indent_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
}));

(cljs.pprint.indent_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__13747 = (function (coll__4377__auto__){
return (-1602780238 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__13747(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(cljs.pprint.indent_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this13739,other13740){
var self__ = this;
var this13739__$1 = this;
return (((!((other13740 == null)))) && ((this13739__$1.constructor === other13740.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13739__$1.type_tag,other13740.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13739__$1.logical_block,other13740.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13739__$1.relative_to,other13740.relative_to)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13739__$1.offset,other13740.offset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13739__$1.start_pos,other13740.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13739__$1.end_pos,other13740.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13739__$1.__extmap,other13740.__extmap)));
}));

(cljs.pprint.indent_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$offset,null,cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$relative_DASH_to,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(cljs.pprint.indent_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__13737){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__13748 = cljs.core.keyword_identical_QMARK_;
var expr__13749 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__13751 = cljs.core.cst$kw$type_DASH_tag;
var G__13752 = expr__13749;
return (pred__13748.cljs$core$IFn$_invoke$arity$2 ? pred__13748.cljs$core$IFn$_invoke$arity$2(G__13751,G__13752) : pred__13748.call(null,G__13751,G__13752));
})())){
return (new cljs.pprint.indent_t(G__13737,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13753 = cljs.core.cst$kw$logical_DASH_block;
var G__13754 = expr__13749;
return (pred__13748.cljs$core$IFn$_invoke$arity$2 ? pred__13748.cljs$core$IFn$_invoke$arity$2(G__13753,G__13754) : pred__13748.call(null,G__13753,G__13754));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,G__13737,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13755 = cljs.core.cst$kw$relative_DASH_to;
var G__13756 = expr__13749;
return (pred__13748.cljs$core$IFn$_invoke$arity$2 ? pred__13748.cljs$core$IFn$_invoke$arity$2(G__13755,G__13756) : pred__13748.call(null,G__13755,G__13756));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,G__13737,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13757 = cljs.core.cst$kw$offset;
var G__13758 = expr__13749;
return (pred__13748.cljs$core$IFn$_invoke$arity$2 ? pred__13748.cljs$core$IFn$_invoke$arity$2(G__13757,G__13758) : pred__13748.call(null,G__13757,G__13758));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,G__13737,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13759 = cljs.core.cst$kw$start_DASH_pos;
var G__13760 = expr__13749;
return (pred__13748.cljs$core$IFn$_invoke$arity$2 ? pred__13748.cljs$core$IFn$_invoke$arity$2(G__13759,G__13760) : pred__13748.call(null,G__13759,G__13760));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,G__13737,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13761 = cljs.core.cst$kw$end_DASH_pos;
var G__13762 = expr__13749;
return (pred__13748.cljs$core$IFn$_invoke$arity$2 ? pred__13748.cljs$core$IFn$_invoke$arity$2(G__13761,G__13762) : pred__13748.call(null,G__13761,G__13762));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,G__13737,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__13737),null));
}
}
}
}
}
}
}));

(cljs.pprint.indent_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$type_DASH_tag,self__.type_tag,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$logical_DASH_block,self__.logical_block,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$relative_DASH_to,self__.relative_to,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$offset,self__.offset,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$start_DASH_pos,self__.start_pos,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$end_DASH_pos,self__.end_pos,null))], null),self__.__extmap));
}));

(cljs.pprint.indent_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__13737){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,G__13737,self__.__extmap,self__.__hash));
}));

(cljs.pprint.indent_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(cljs.pprint.indent_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$relative_DASH_to,cljs.core.cst$sym$offset,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
}));

(cljs.pprint.indent_t.cljs$lang$type = true);

(cljs.pprint.indent_t.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"cljs.pprint/indent-t",null,(1),null));
}));

(cljs.pprint.indent_t.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"cljs.pprint/indent-t");
}));

/**
 * Positional factory function for cljs.pprint/indent-t.
 */
cljs.pprint.__GT_indent_t = (function cljs$pprint$__GT_indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/indent-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_indent_t = (function cljs$pprint$map__GT_indent_t(G__13741){
var extmap__4419__auto__ = (function (){var G__13763 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13741,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$relative_DASH_to,cljs.core.cst$kw$offset,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0));
if(cljs.core.record_QMARK_(G__13741)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__13763);
} else {
return G__13763;
}
})();
return (new cljs.pprint.indent_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__13741),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__13741),cljs.core.cst$kw$relative_DASH_to.cljs$core$IFn$_invoke$arity$1(G__13741),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(G__13741),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__13741),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__13741),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


cljs.pprint.make_indent_t = (function cljs$pprint$make_indent_t(logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(cljs.core.cst$kw$indent_DASH_t,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.indent_t_QMARK_ = (function cljs$pprint$indent_t_QMARK_(x__13409__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__13409__auto__),cljs.core.cst$kw$indent_DASH_t);
});
cljs.pprint.pp_newline = (function cljs$pprint$pp_newline(){
return "\n";
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.write_token !== 'undefined')){
} else {
cljs.pprint.write_token = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__13767 = cljs.core.get_global_hierarchy;
return (fexpr__13767.cljs$core$IFn$_invoke$arity$0 ? fexpr__13767.cljs$core$IFn$_invoke$arity$0() : fexpr__13767.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","write-token"),(function (p1__13766_SHARP_,p2__13765_SHARP_){
return cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(p2__13765_SHARP_);
}),cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$start_DASH_block_DASH_t,(function (this$,token){
var temp__5753__auto___13769 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5753__auto___13769)){
var cb_13770 = temp__5753__auto___13769;
var G__13768_13771 = cljs.core.cst$kw$start;
(cb_13770.cljs$core$IFn$_invoke$arity$1 ? cb_13770.cljs$core$IFn$_invoke$arity$1(G__13768_13771) : cb_13770.call(null,G__13768_13771));
} else {
}

var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token);
var temp__5753__auto___13772 = cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(temp__5753__auto___13772)){
var prefix_13773 = temp__5753__auto___13772;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix_13773);
} else {
}

var col = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
cljs.core.reset_BANG_(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),col);
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$end_DASH_block_DASH_t,(function (this$,token){
var temp__5753__auto___13775 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5753__auto___13775)){
var cb_13776 = temp__5753__auto___13775;
var G__13774_13777 = cljs.core.cst$kw$end;
(cb_13776.cljs$core$IFn$_invoke$arity$1 ? cb_13776.cljs$core$IFn$_invoke$arity$1(G__13774_13777) : cb_13776.call(null,G__13774_13777));
} else {
}

var temp__5753__auto__ = cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token));
if(cljs.core.truth_(temp__5753__auto__)){
var suffix = temp__5753__auto__;
return cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),suffix);
} else {
return null;
}
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$indent_DASH_t,(function (this$,token){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token);
return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),(cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(token) + (function (){var pred__13778 = cljs.core._EQ_;
var expr__13779 = cljs.core.cst$kw$relative_DASH_to.cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_((function (){var G__13781 = cljs.core.cst$kw$block;
var G__13782 = expr__13779;
return (pred__13778.cljs$core$IFn$_invoke$arity$2 ? pred__13778.cljs$core$IFn$_invoke$arity$2(G__13781,G__13782) : pred__13778.call(null,G__13781,G__13782));
})())){
return cljs.core.deref(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_((function (){var G__13783 = cljs.core.cst$kw$current;
var G__13784 = expr__13779;
return (pred__13778.cljs$core$IFn$_invoke$arity$2 ? pred__13778.cljs$core$IFn$_invoke$arity$2(G__13783,G__13784) : pred__13778.call(null,G__13783,G__13784));
})())){
return cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__13779)].join('')));
}
}
})()));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$buffer_DASH_blob,(function (this$,token){
return cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(token));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$nl_DASH_t,(function (this$,token){
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$mandatory);
if(or__4126__auto__){
return or__4126__auto__;
} else {
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$fill)))){
return cljs.core.deref(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token)));
} else {
return false;
}
}
})())){
(cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.emit_nl.call(null,this$,token));
} else {
var temp__5751__auto___13785 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5751__auto___13785)){
var tws_13786 = temp__5751__auto___13785;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_13786);
} else {
}
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
}));
cljs.pprint.write_tokens = (function cljs$pprint$write_tokens(this$,tokens,force_trailing_whitespace){
var seq__13787 = cljs.core.seq(tokens);
var chunk__13788 = null;
var count__13789 = (0);
var i__13790 = (0);
while(true){
if((i__13790 < count__13789)){
var token = chunk__13788.cljs$core$IIndexed$_nth$arity$2(null,i__13790);
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$nl_DASH_t)))){
var temp__5751__auto___13791 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5751__auto___13791)){
var tws_13792 = temp__5751__auto___13791;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_13792);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token.call(null,this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(token));

var tws_13793 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_((function (){var and__4115__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__4115__auto__)){
return tws_13793;
} else {
return and__4115__auto__;
}
})())){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_13793);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
}


var G__13794 = seq__13787;
var G__13795 = chunk__13788;
var G__13796 = count__13789;
var G__13797 = (i__13790 + (1));
seq__13787 = G__13794;
chunk__13788 = G__13795;
count__13789 = G__13796;
i__13790 = G__13797;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__13787);
if(temp__5753__auto__){
var seq__13787__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13787__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__13787__$1);
var G__13798 = cljs.core.chunk_rest(seq__13787__$1);
var G__13799 = c__4556__auto__;
var G__13800 = cljs.core.count(c__4556__auto__);
var G__13801 = (0);
seq__13787 = G__13798;
chunk__13788 = G__13799;
count__13789 = G__13800;
i__13790 = G__13801;
continue;
} else {
var token = cljs.core.first(seq__13787__$1);
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$nl_DASH_t)))){
var temp__5751__auto___13802 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5751__auto___13802)){
var tws_13803 = temp__5751__auto___13802;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_13803);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token.call(null,this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(token));

var tws_13804 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_((function (){var and__4115__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__4115__auto__)){
return tws_13804;
} else {
return and__4115__auto__;
}
})())){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_13804);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
}


var G__13805 = cljs.core.next(seq__13787__$1);
var G__13806 = null;
var G__13807 = (0);
var G__13808 = (0);
seq__13787 = G__13805;
chunk__13788 = G__13806;
count__13789 = G__13807;
i__13790 = G__13808;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.pprint.tokens_fit_QMARK_ = (function cljs$pprint$tokens_fit_QMARK_(this$,tokens){
var maxcol = cljs.pprint.get_max_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
return (((maxcol == null)) || (((cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))) + cljs.pprint.buffer_length(tokens)) < maxcol)));
});
cljs.pprint.linear_nl_QMARK_ = (function cljs$pprint$linear_nl_QMARK_(this$,lb,section){
var or__4126__auto__ = cljs.core.deref(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (!(cljs.pprint.tokens_fit_QMARK_(this$,section)));
}
});
cljs.pprint.miser_nl_QMARK_ = (function cljs$pprint$miser_nl_QMARK_(this$,lb,section){
var miser_width = cljs.pprint.get_miser_width(this$);
var maxcol = cljs.pprint.get_max_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
var and__4115__auto__ = miser_width;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = maxcol;
if(cljs.core.truth_(and__4115__auto____$1)){
if((cljs.core.deref(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb)) >= (maxcol - miser_width))){
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
} else {
return false;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.emit_nl_QMARK_ !== 'undefined')){
} else {
cljs.pprint.emit_nl_QMARK_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__13809 = cljs.core.get_global_hierarchy;
return (fexpr__13809.cljs$core$IFn$_invoke$arity$0 ? fexpr__13809.cljs$core$IFn$_invoke$arity$0() : fexpr__13809.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","emit-nl?"),(function (t,_,___$1,___$2){
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(t);
}),cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$linear,(function (newl,this$,section,_){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$miser,(function (newl,this$,section,_){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fill,(function (newl,this$,section,subsection){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
var or__4126__auto__ = cljs.core.deref(cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (!(cljs.pprint.tokens_fit_QMARK_(this$,subsection)));
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}
}
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$mandatory,(function (_,___$1,___$2,___$3){
return true;
}));
cljs.pprint.get_section = (function cljs$pprint$get_section(buffer){
var nl = cljs.core.first(buffer);
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__13810_SHARP_){
return (!(((cljs.pprint.nl_t_QMARK_(p1__13810_SHARP_)) && (cljs.pprint.ancestor_QMARK_(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(p1__13810_SHARP_),lb)))));
}),cljs.core.next(buffer)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((cljs.core.count(section) + (1)),buffer))], null);
});
cljs.pprint.get_sub_section = (function cljs$pprint$get_sub_section(buffer){
var nl = cljs.core.first(buffer);
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__13811_SHARP_){
var nl_lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(p1__13811_SHARP_);
return (!(((cljs.pprint.nl_t_QMARK_(p1__13811_SHARP_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nl_lb,lb)) || (cljs.pprint.ancestor_QMARK_(nl_lb,lb)))))));
}),cljs.core.next(buffer)));
return section;
});
cljs.pprint.update_nl_state = (function cljs$pprint$update_nl_state(lb){
cljs.core.reset_BANG_(cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb),true);

cljs.core.reset_BANG_(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb),true);

var lb__$1 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb);
while(true){
if(cljs.core.truth_(lb__$1)){
cljs.core.reset_BANG_(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb__$1),true);

cljs.core.reset_BANG_(cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb__$1),true);

var G__13812 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb__$1);
lb__$1 = G__13812;
continue;
} else {
return null;
}
break;
}
});
cljs.pprint.emit_nl = (function cljs$pprint$emit_nl(this$,nl){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);

var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var prefix = cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var istr_13813 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.deref(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb)) - cljs.core.count(prefix))," "));
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),istr_13813);

return cljs.pprint.update_nl_state(lb);
});
cljs.pprint.split_at_newline = (function cljs$pprint$split_at_newline(tokens){
var pre = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__13814_SHARP_){
return (!(cljs.pprint.nl_t_QMARK_(p1__13814_SHARP_)));
}),tokens));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pre),tokens))], null);
});
cljs.pprint.write_token_string = (function cljs$pprint$write_token_string(this$,tokens){
var vec__13815 = cljs.pprint.split_at_newline(tokens);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13815,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13815,(1),null);
if(cljs.core.truth_(a)){
cljs.pprint.write_tokens(this$,a,false);
} else {
}

if(cljs.core.truth_(b)){
var vec__13818 = cljs.pprint.get_section(b);
var section = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13818,(0),null);
var remainder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13818,(1),null);
var newl = cljs.core.first(b);
var do_nl = (function (){var G__13821 = newl;
var G__13822 = this$;
var G__13823 = section;
var G__13824 = cljs.pprint.get_sub_section(b);
return (cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4 ? cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4(G__13821,G__13822,G__13823,G__13824) : cljs.pprint.emit_nl_QMARK_.call(null,G__13821,G__13822,G__13823,G__13824));
})();
var result = (cljs.core.truth_(do_nl)?(function (){
cljs.pprint.emit_nl(this$,newl);

return cljs.core.next(b);
})()
:b);
var long_section = (!(cljs.pprint.tokens_fit_QMARK_(this$,result)));
var result__$1 = ((long_section)?(function (){var rem2 = (cljs.pprint.write_token_string.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token_string.cljs$core$IFn$_invoke$arity$2(this$,section) : cljs.pprint.write_token_string.call(null,this$,section));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rem2,section)){
cljs.pprint.write_tokens(this$,section,false);

return remainder;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rem2,remainder));
}
})():result);
return result__$1;
} else {
return null;
}
});
cljs.pprint.write_line = (function cljs$pprint$write_line(this$){
var buffer = cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
while(true){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,buffer));

if((!(cljs.pprint.tokens_fit_QMARK_(this$,buffer)))){
var new_buffer = cljs.pprint.write_token_string(this$,buffer);
if((!((buffer === new_buffer)))){
var G__13825 = new_buffer;
buffer = G__13825;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
});
cljs.pprint.add_to_buffer = (function cljs$pprint$add_to_buffer(this$,token){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),token));

if((!(cljs.pprint.tokens_fit_QMARK_(this$,cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))))))){
return cljs.pprint.write_line(this$);
} else {
return null;
}
});
cljs.pprint.write_buffered_output = (function cljs$pprint$write_buffered_output(this$){
cljs.pprint.write_line(this$);

var temp__5751__auto__ = cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5751__auto__)){
var buf = temp__5751__auto__;
cljs.pprint.write_tokens(this$,buf,true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
cljs.pprint.write_white_space = (function cljs$pprint$write_white_space(this$){
var temp__5753__auto__ = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5753__auto__)){
var tws = temp__5753__auto__;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
return null;
}
});
cljs.pprint.write_initial_lines = (function cljs$pprint$write_initial_lines(this$,s){
var lines = clojure.string.split.cljs$core$IFn$_invoke$arity$3(s,"\n",(-1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(lines),(1))){
return s;
} else {
var prefix = cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))));
var l = cljs.core.first(lines);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$buffering,cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))))){
var oldpos_13830 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos_13831 = (oldpos_13830 + cljs.core.count(l));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos_13831);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(l,null,oldpos_13830,newpos_13831));

cljs.pprint.write_buffered_output(this$);
} else {
cljs.pprint.write_white_space(this$);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l);
}

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),"\n");

var seq__13826_13832 = cljs.core.seq(cljs.core.next(cljs.core.butlast(lines)));
var chunk__13827_13833 = null;
var count__13828_13834 = (0);
var i__13829_13835 = (0);
while(true){
if((i__13829_13835 < count__13828_13834)){
var l_13836__$1 = chunk__13827_13833.cljs$core$IIndexed$_nth$arity$2(null,i__13829_13835);
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l_13836__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}


var G__13837 = seq__13826_13832;
var G__13838 = chunk__13827_13833;
var G__13839 = count__13828_13834;
var G__13840 = (i__13829_13835 + (1));
seq__13826_13832 = G__13837;
chunk__13827_13833 = G__13838;
count__13828_13834 = G__13839;
i__13829_13835 = G__13840;
continue;
} else {
var temp__5753__auto___13841 = cljs.core.seq(seq__13826_13832);
if(temp__5753__auto___13841){
var seq__13826_13842__$1 = temp__5753__auto___13841;
if(cljs.core.chunked_seq_QMARK_(seq__13826_13842__$1)){
var c__4556__auto___13843 = cljs.core.chunk_first(seq__13826_13842__$1);
var G__13844 = cljs.core.chunk_rest(seq__13826_13842__$1);
var G__13845 = c__4556__auto___13843;
var G__13846 = cljs.core.count(c__4556__auto___13843);
var G__13847 = (0);
seq__13826_13832 = G__13844;
chunk__13827_13833 = G__13845;
count__13828_13834 = G__13846;
i__13829_13835 = G__13847;
continue;
} else {
var l_13848__$1 = cljs.core.first(seq__13826_13842__$1);
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l_13848__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}


var G__13849 = cljs.core.next(seq__13826_13842__$1);
var G__13850 = null;
var G__13851 = (0);
var G__13852 = (0);
seq__13826_13832 = G__13849;
chunk__13827_13833 = G__13850;
count__13828_13834 = G__13851;
i__13829_13835 = G__13852;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffering,cljs.core.cst$kw$writing);

return cljs.core.last(lines);
}
});
cljs.pprint.p_write_char = (function cljs$pprint$p_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

return cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),c);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
return cljs.pprint.write_initial_lines(this$,"\n");
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos = (oldpos + (1));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(cljs.core.char$(c),null,oldpos,newpos));
}
}
});
cljs.pprint.pretty_writer = (function cljs$pprint$pretty_writer(writer,max_columns,miser_width){
var lb = (new cljs.pprint.logical_block(null,null,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),null,null,null,null,null,null,null));
var fields = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$logical_DASH_blocks,cljs.core.cst$kw$miser_DASH_width,cljs.core.cst$kw$buffer_DASH_block,cljs.core.cst$kw$pretty_DASH_writer,cljs.core.cst$kw$sections,cljs.core.cst$kw$mode,cljs.core.cst$kw$pos,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$base,cljs.core.cst$kw$buffer_DASH_level,cljs.core.cst$kw$buffer],[lb,miser_width,lb,true,null,cljs.core.cst$kw$writing,(0),null,cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,max_columns),(1),cljs.core.PersistentVector.EMPTY]));
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint13853 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.pprint.IPrettyFlush}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint13853 = (function (writer,max_columns,miser_width,lb,fields,meta13854){
this.writer = writer;
this.max_columns = max_columns;
this.miser_width = miser_width;
this.lb = lb;
this.fields = fields;
this.meta13854 = meta13854;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint13853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13855,meta13854__$1){
var self__ = this;
var _13855__$1 = this;
return (new cljs.pprint.t_cljs$pprint13853(self__.writer,self__.max_columns,self__.miser_width,self__.lb,self__.fields,meta13854__$1));
}));

(cljs.pprint.t_cljs$pprint13853.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13855){
var self__ = this;
var _13855__$1 = this;
return self__.meta13854;
}));

(cljs.pprint.t_cljs$pprint13853.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
}));

(cljs.pprint.t_cljs$pprint13853.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__13856 = cljs.core._EQ_;
var expr__13857 = cljs.core.type(x);
if(cljs.core.truth_((pred__13856.cljs$core$IFn$_invoke$arity$2 ? pred__13856.cljs$core$IFn$_invoke$arity$2(String,expr__13857) : pred__13856.call(null,String,expr__13857)))){
var s0 = cljs.pprint.write_initial_lines(this$__$1,x);
var s = clojure.string.replace_first(s0,/\s+$/,"");
var white_space = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s0,((s).length));
var mode = cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),s);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,white_space);
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1)));
var newpos = (oldpos + cljs.core.count(s0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer(this$__$1,cljs.pprint.make_buffer_blob(s,white_space,oldpos,newpos));
}
} else {
if(cljs.core.truth_((pred__13856.cljs$core$IFn$_invoke$arity$2 ? pred__13856.cljs$core$IFn$_invoke$arity$2(Number,expr__13857) : pred__13856.call(null,Number,expr__13857)))){
return cljs.pprint.p_write_char(this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__13857)].join('')));
}
}
}));

(cljs.pprint.t_cljs$pprint13853.prototype.cljs$core$IWriter$_flush$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
this$__$1.cljs$pprint$IPrettyFlush$_ppflush$arity$1(null);

return cljs.core._flush(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))));
}));

(cljs.pprint.t_cljs$pprint13853.prototype.cljs$pprint$IPrettyFlush$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.pprint.t_cljs$pprint13853.prototype.cljs$pprint$IPrettyFlush$_ppflush$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),cljs.core.cst$kw$buffering)){
cljs.pprint.write_tokens(this$__$1,cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.PersistentVector.EMPTY);
} else {
return cljs.pprint.write_white_space(this$__$1);
}
}));

(cljs.pprint.t_cljs$pprint13853.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$max_DASH_columns,cljs.core.cst$sym$miser_DASH_width,cljs.core.cst$sym$lb,cljs.core.cst$sym$fields,cljs.core.cst$sym$meta13854], null);
}));

(cljs.pprint.t_cljs$pprint13853.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint13853.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint13853");

(cljs.pprint.t_cljs$pprint13853.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.pprint/t_cljs$pprint13853");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint13853.
 */
cljs.pprint.__GT_t_cljs$pprint13853 = (function cljs$pprint$pretty_writer_$___GT_t_cljs$pprint13853(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta13854){
return (new cljs.pprint.t_cljs$pprint13853(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta13854));
});

}

return (new cljs.pprint.t_cljs$pprint13853(writer,max_columns,miser_width,lb,fields,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.start_block = (function cljs$pprint$start_block(this$,prefix,per_line_prefix,suffix){
var lb = (new cljs.pprint.logical_block(cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),null,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),prefix,per_line_prefix,suffix,null,null,null,null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$logical_DASH_blocks,lb);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

var temp__5753__auto___13860 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5753__auto___13860)){
var cb_13861 = temp__5753__auto___13860;
var G__13859_13862 = cljs.core.cst$kw$start;
(cb_13861.cljs$core$IFn$_invoke$arity$1 ? cb_13861.cljs$core$IFn$_invoke$arity$1(G__13859_13862) : cb_13861.call(null,G__13859_13862));
} else {
}

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var col = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
cljs.core.reset_BANG_(lb.start_col,col);

return cljs.core.reset_BANG_(lb.indent,col);
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos = (oldpos + (cljs.core.truth_(prefix)?cljs.core.count(prefix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_start_block_t(lb,oldpos,newpos));
}
});
cljs.pprint.end_block = (function cljs$pprint$end_block(this$){
var lb = cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var suffix = cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

if(cljs.core.truth_(suffix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),suffix);
} else {
}

var temp__5753__auto___13864 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5753__auto___13864)){
var cb_13865 = temp__5753__auto___13864;
var G__13863_13866 = cljs.core.cst$kw$end;
(cb_13865.cljs$core$IFn$_invoke$arity$1 ? cb_13865.cljs$core$IFn$_invoke$arity$1(G__13863_13866) : cb_13865.call(null,G__13863_13866));
} else {
}
} else {
var oldpos_13867 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos_13868 = (oldpos_13867 + (cljs.core.truth_(suffix)?cljs.core.count(suffix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos_13868);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_end_block_t(lb,oldpos_13867,newpos_13868));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$logical_DASH_blocks,cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb));
});
cljs.pprint.nl = (function cljs$pprint$nl(this$,type){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$mode,cljs.core.cst$kw$buffering);

var pos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_nl_t(type,cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),pos,pos));
});
cljs.pprint.indent = (function cljs$pprint$indent(this$,relative_to,offset){
var lb = cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),(offset + (function (){var pred__13869 = cljs.core._EQ_;
var expr__13870 = relative_to;
if(cljs.core.truth_((function (){var G__13872 = cljs.core.cst$kw$block;
var G__13873 = expr__13870;
return (pred__13869.cljs$core$IFn$_invoke$arity$2 ? pred__13869.cljs$core$IFn$_invoke$arity$2(G__13872,G__13873) : pred__13869.call(null,G__13872,G__13873));
})())){
return cljs.core.deref(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_((function (){var G__13874 = cljs.core.cst$kw$current;
var G__13875 = expr__13870;
return (pred__13869.cljs$core$IFn$_invoke$arity$2 ? pred__13869.cljs$core$IFn$_invoke$arity$2(G__13874,G__13875) : pred__13869.call(null,G__13874,G__13875));
})())){
return cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__13870)].join('')));
}
}
})()));
} else {
var pos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_indent_t(lb,relative_to,offset,pos,pos));
}
});
cljs.pprint.get_miser_width = (function cljs$pprint$get_miser_width(this$){
return cljs.core.cst$kw$miser_DASH_width.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
});
/**
 * Bind to true if you want write to use pretty printing
 */
cljs.pprint._STAR_print_pretty_STAR_ = true;
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint._STAR_print_pprint_dispatch_STAR_ !== 'undefined')){
} else {
/**
 * The pretty print dispatch function. Use with-pprint-dispatch or
 * set-pprint-dispatch to modify.
 */
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = null;
}
/**
 * Pretty printing will try to avoid anything going beyond this column.
 * Set it to nil to have pprint let the line be arbitrarily long. This will ignore all
 * non-mandatory newlines.
 */
cljs.pprint._STAR_print_right_margin_STAR_ = (72);
/**
 * The column at which to enter miser style. Depending on the dispatch table,
 * miser style add newlines in more places to try to keep lines short allowing for further
 * levels of nesting.
 */
cljs.pprint._STAR_print_miser_width_STAR_ = (40);
/**
 * Maximum number of lines to print in a pretty print instance (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_lines_STAR_ = null;
/**
 * Mark circular structures (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_circle_STAR_ = null;
/**
 * Mark repeated structures rather than repeat them (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_shared_STAR_ = null;
/**
 * Don't print namespaces with symbols. This is particularly useful when
 * pretty printing the results of macro expansions
 */
cljs.pprint._STAR_print_suppress_namespaces_STAR_ = null;
/**
 * Print a radix specifier in front of integers and rationals. If *print-base* is 2, 8,
 * or 16, then the radix specifier used is #b, #o, or #x, respectively. Otherwise the
 * radix specifier is in the form #XXr where XX is the decimal value of *print-base* 
 */
cljs.pprint._STAR_print_radix_STAR_ = null;
/**
 * The base to use for printing integers and rationals.
 */
cljs.pprint._STAR_print_base_STAR_ = (10);
cljs.pprint._STAR_current_level_STAR_ = (0);
cljs.pprint._STAR_current_length_STAR_ = null;
cljs.pprint.table_ize = (function cljs$pprint$table_ize(t,m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__13876_SHARP_){
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,cljs.core.key(p1__13876_SHARP_));
if(cljs.core.truth_(temp__5753__auto__)){
var v = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.val(p1__13876_SHARP_)], null);
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0)));
});
/**
 * Return true iff x is a PrettyWriter
 */
cljs.pprint.pretty_writer_QMARK_ = (function cljs$pprint$pretty_writer_QMARK_(x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x))){
return cljs.core.cst$kw$pretty_DASH_writer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(x)));
} else {
return false;
}
});
/**
 * Wrap base-writer in a PrettyWriter with the specified right-margin and miser-width
 */
cljs.pprint.make_pretty_writer = (function cljs$pprint$make_pretty_writer(base_writer,right_margin,miser_width){
return cljs.pprint.pretty_writer(base_writer,right_margin,miser_width);
});
/**
 * Write an object to *out* subject to the current bindings of the printer control
 * variables. Use the kw-args argument to override individual variables for this call (and
 * any recursive calls).
 * 
 * *out* must be a PrettyWriter if pretty printing is enabled. This is the responsibility
 * of the caller.
 * 
 * This method is primarily intended for use by pretty print dispatch functions that
 * already know that the pretty printer will have set up their environment appropriately.
 * Normal library clients should use the standard "write" interface. 
 */
cljs.pprint.write_out = (function cljs$pprint$write_out(object){
var length_reached = (function (){var and__4115__auto__ = cljs.pprint._STAR_current_length_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = cljs.core._STAR_print_length_STAR_;
if(cljs.core.truth_(and__4115__auto____$1)){
return (cljs.pprint._STAR_current_length_STAR_ >= cljs.core._STAR_print_length_STAR_);
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})();
if(cljs.core.not(cljs.pprint._STAR_print_pretty_STAR_)){
(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint.pr.call(null,object));
} else {
if(cljs.core.truth_(length_reached)){
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
} else {
if(cljs.core.truth_(cljs.pprint._STAR_current_length_STAR_)){
(cljs.pprint._STAR_current_length_STAR_ = (cljs.pprint._STAR_current_length_STAR_ + (1)));
} else {
}

(cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint._STAR_print_pprint_dispatch_STAR_.call(null,object));
}
}

return length_reached;
});
/**
 * Write an object subject to the current bindings of the printer control variables.
 * Use the kw-args argument to override individual variables for this call (and any
 * recursive calls). Returns the string result if :stream is nil or nil otherwise.
 * 
 * The following keyword arguments can be passed with values:
 *   Keyword              Meaning                              Default value
 *   :stream              Writer for output or nil             true (indicates *out*)
 *   :base                Base to use for writing rationals    Current value of *print-base*
 *   :circle*             If true, mark circular structures    Current value of *print-circle*
 *   :length              Maximum elements to show in sublists Current value of *print-length*
 *   :level               Maximum depth                        Current value of *print-level*
 *   :lines*              Maximum lines of output              Current value of *print-lines*
 *   :miser-width         Width to enter miser mode            Current value of *print-miser-width*
 *   :dispatch            The pretty print dispatch function   Current value of *print-pprint-dispatch*
 *   :pretty              If true, do pretty printing          Current value of *print-pretty*
 *   :radix               If true, prepend a radix specifier   Current value of *print-radix*
 *   :readably*           If true, print readably              Current value of *print-readably*
 *   :right-margin        The column for the right margin      Current value of *print-right-margin*
 *   :suppress-namespaces If true, no namespaces in symbols    Current value of *print-suppress-namespaces*
 * 
 *   * = not yet supported
 */
cljs.pprint.write = (function cljs$pprint$write(var_args){
var args__4742__auto__ = [];
var len__4736__auto___13910 = arguments.length;
var i__4737__auto___13911 = (0);
while(true){
if((i__4737__auto___13911 < len__4736__auto___13910)){
args__4742__auto__.push((arguments[i__4737__auto___13911]));

var G__13912 = (i__4737__auto___13911 + (1));
i__4737__auto___13911 = G__13912;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic = (function (object,kw_args){
var options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stream,true], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,kw_args)], 0));
var _STAR_print_base_STAR__orig_val__13882 = cljs.pprint._STAR_print_base_STAR_;
var _STAR_print_circle_STAR__orig_val__13883 = cljs.pprint._STAR_print_circle_STAR_;
var _STAR_print_length_STAR__orig_val__13884 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__13885 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_lines_STAR__orig_val__13886 = cljs.pprint._STAR_print_lines_STAR_;
var _STAR_print_miser_width_STAR__orig_val__13887 = cljs.pprint._STAR_print_miser_width_STAR_;
var _STAR_print_pprint_dispatch_STAR__orig_val__13888 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pretty_STAR__orig_val__13889 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_radix_STAR__orig_val__13890 = cljs.pprint._STAR_print_radix_STAR_;
var _STAR_print_readably_STAR__orig_val__13891 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_right_margin_STAR__orig_val__13892 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_suppress_namespaces_STAR__orig_val__13893 = cljs.pprint._STAR_print_suppress_namespaces_STAR_;
var _STAR_print_base_STAR__temp_val__13894 = cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_base_STAR_);
var _STAR_print_circle_STAR__temp_val__13895 = cljs.core.cst$kw$circle.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_circle_STAR_);
var _STAR_print_length_STAR__temp_val__13896 = cljs.core.cst$kw$length.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_length_STAR_);
var _STAR_print_level_STAR__temp_val__13897 = cljs.core.cst$kw$level.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_level_STAR_);
var _STAR_print_lines_STAR__temp_val__13898 = cljs.core.cst$kw$lines.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_lines_STAR_);
var _STAR_print_miser_width_STAR__temp_val__13899 = cljs.core.cst$kw$miser_DASH_width.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_miser_width_STAR_);
var _STAR_print_pprint_dispatch_STAR__temp_val__13900 = cljs.core.cst$kw$dispatch.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pprint_dispatch_STAR_);
var _STAR_print_pretty_STAR__temp_val__13901 = cljs.core.cst$kw$pretty.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pretty_STAR_);
var _STAR_print_radix_STAR__temp_val__13902 = cljs.core.cst$kw$radix.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_radix_STAR_);
var _STAR_print_readably_STAR__temp_val__13903 = cljs.core.cst$kw$readably.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_readably_STAR_);
var _STAR_print_right_margin_STAR__temp_val__13904 = cljs.core.cst$kw$right_DASH_margin.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_right_margin_STAR_);
var _STAR_print_suppress_namespaces_STAR__temp_val__13905 = cljs.core.cst$kw$suppress_DASH_namespaces.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_suppress_namespaces_STAR_);
(cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR__temp_val__13894);

(cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR__temp_val__13895);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__13896);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__13897);

(cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR__temp_val__13898);

(cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR__temp_val__13899);

(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__temp_val__13900);

(cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__temp_val__13901);

(cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR__temp_val__13902);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__13903);

(cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR__temp_val__13904);

(cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR__temp_val__13905);

try{try{var sb = (new goog.string.StringBuffer());
var optval = ((cljs.core.contains_QMARK_(options,cljs.core.cst$kw$stream))?cljs.core.cst$kw$stream.cljs$core$IFn$_invoke$arity$1(options):true);
var base_writer = ((((optval === true) || ((optval == null))))?(new cljs.core.StringBufferWriter(sb)):optval);
if(cljs.core.truth_(cljs.pprint._STAR_print_pretty_STAR_)){
var base_writer__13392__auto___13913 = base_writer;
var new_writer__13393__auto___13914 = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__13392__auto___13913));
var _STAR_out_STAR__orig_val__13906_13915 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__13907_13916 = ((new_writer__13393__auto___13914)?cljs.pprint.make_pretty_writer(base_writer__13392__auto___13913,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__13392__auto___13913);
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__13907_13916);

try{cljs.pprint.write_out(object);

cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__13906_13915);
}} else {
var _STAR_out_STAR__orig_val__13908_13917 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__13909_13918 = base_writer;
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__13909_13918);

try{(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint.pr.call(null,object));
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__13908_13917);
}}

if(optval === true){
cljs.core.string_print(cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
} else {
}

if((optval == null)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
return null;
}
}finally {}}finally {(cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR__orig_val__13893);

(cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR__orig_val__13892);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__13891);

(cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR__orig_val__13890);

(cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__orig_val__13889);

(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__orig_val__13888);

(cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR__orig_val__13887);

(cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR__orig_val__13886);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__13885);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__13884);

(cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR__orig_val__13883);

(cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR__orig_val__13882);
}}));

(cljs.pprint.write.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.pprint.write.cljs$lang$applyTo = (function (seq13880){
var G__13881 = cljs.core.first(seq13880);
var seq13880__$1 = cljs.core.next(seq13880);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13881,seq13880__$1);
}));

cljs.pprint.pprint = (function cljs$pprint$pprint(var_args){
var G__13920 = arguments.length;
switch (G__13920) {
case 1:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1 = (function (object){
var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR__orig_val__13921 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__13922 = (new cljs.core.StringBufferWriter(sb));
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__13922);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2(object,cljs.core._STAR_out_STAR_);

return cljs.core.string_print(cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__13921);
}}));

(cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2 = (function (object,writer){
var base_writer__13392__auto__ = writer;
var new_writer__13393__auto__ = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__13392__auto__));
var _STAR_out_STAR__orig_val__13923 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__13924 = ((new_writer__13393__auto__)?cljs.pprint.make_pretty_writer(base_writer__13392__auto__,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__13392__auto__);
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__13924);

try{var _STAR_print_pretty_STAR__orig_val__13925_13928 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_pretty_STAR__temp_val__13926_13929 = true;
(cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__temp_val__13926_13929);

try{cljs.pprint.write_out(object);
}finally {(cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__orig_val__13925_13928);
}
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(cljs.core._STAR_out_STAR_))))){
cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
} else {
}

return cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__13923);
}}));

(cljs.pprint.pprint.cljs$lang$maxFixedArity = 2);

cljs.pprint.set_pprint_dispatch = (function cljs$pprint$set_pprint_dispatch(function$){
(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = function$);

return null;
});
cljs.pprint.check_enumerated_arg = (function cljs$pprint$check_enumerated_arg(arg,choices){
if(cljs.core.not((choices.cljs$core$IFn$_invoke$arity$1 ? choices.cljs$core$IFn$_invoke$arity$1(arg) : choices.call(null,arg)))){
throw (new Error(["Bad argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg),". It must be one of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(choices)].join('')));
} else {
return null;
}
});
cljs.pprint.level_exceeded = (function cljs$pprint$level_exceeded(){
var and__4115__auto__ = cljs.core._STAR_print_level_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
return (cljs.pprint._STAR_current_level_STAR_ >= cljs.core._STAR_print_level_STAR_);
} else {
return and__4115__auto__;
}
});
/**
 * Print a conditional newline to a pretty printing stream. kind specifies if the
 *   newline is :linear, :miser, :fill, or :mandatory.
 * 
 *   This function is intended for use when writing custom dispatch functions.
 * 
 *   Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_newline = (function cljs$pprint$pprint_newline(kind){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mandatory,null,cljs.core.cst$kw$miser,null,cljs.core.cst$kw$fill,null,cljs.core.cst$kw$linear,null], null), null));

return cljs.pprint.nl(cljs.core._STAR_out_STAR_,kind);
});
/**
 * Create an indent at this point in the pretty printing stream. This defines how
 * following lines are indented. relative-to can be either :block or :current depending
 * whether the indent should be computed relative to the start of the logical block or
 * the current column position. n is an offset.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_indent = (function cljs$pprint$pprint_indent(relative_to,n){
cljs.pprint.check_enumerated_arg(relative_to,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$block,null,cljs.core.cst$kw$current,null], null), null));

return cljs.pprint.indent(cljs.core._STAR_out_STAR_,relative_to,n);
});
/**
 * Tab at this point in the pretty printing stream. kind specifies whether the tab
 * is :line, :section, :line-relative, or :section-relative.
 * 
 * Colnum and colinc specify the target column and the increment to move the target
 * forward if the output is already past the original target.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 * 
 * THIS FUNCTION IS NOT YET IMPLEMENTED.
 */
cljs.pprint.pprint_tab = (function cljs$pprint$pprint_tab(kind,colnum,colinc){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$section,null,cljs.core.cst$kw$line,null,cljs.core.cst$kw$line_DASH_relative,null,cljs.core.cst$kw$section_DASH_relative,null], null), null));

throw (new Error("pprint-tab is not yet implemented"));
});
/**
 * An implementation of a Common Lisp compatible format function. cl-format formats its
 * arguments to an output stream or string based on the format control string given. It
 * supports sophisticated formatting of structured data.
 * 
 * Writer satisfies IWriter, true to output via *print-fn* or nil to output
 * to a string, format-in is the format control string and the remaining arguments
 * are the data to be formatted.
 * 
 * The format control string is a string to be output with embedded 'format directives'
 * describing how to format the various arguments passed in.
 * 
 * If writer is nil, cl-format returns the formatted result string. Otherwise, cl-format
 * returns nil.
 * 
 * For example:
 *  (let [results [46 38 22]]
 *      (cl-format true "There ~[are~;is~:;are~]~:* ~d result~:p: ~{~d~^, ~}~%"
 *                 (count results) results))
 * 
 * Prints via *print-fn*:
 *  There are 3 results: 46, 38, 22
 * 
 * Detailed documentation on format control strings is available in the "Common Lisp the
 * Language, 2nd edition", Chapter 22 (available online at:
 * http://www.cs.cmu.edu/afs/cs.cmu.edu/project/ai-repository/ai/html/cltl/clm/node200.html#SECTION002633000000000000000)
 * and in the Common Lisp HyperSpec at
 * http://www.lispworks.com/documentation/HyperSpec/Body/22_c.htm
 */
cljs.pprint.cl_format = (function cljs$pprint$cl_format(var_args){
var args__4742__auto__ = [];
var len__4736__auto___13933 = arguments.length;
var i__4737__auto___13934 = (0);
while(true){
if((i__4737__auto___13934 < len__4736__auto___13933)){
args__4742__auto__.push((arguments[i__4737__auto___13934]));

var G__13935 = (i__4737__auto___13934 + (1));
i__4737__auto___13934 = G__13935;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic = (function (writer,format_in,args){
var compiled_format = ((typeof format_in === 'string')?cljs.pprint.compile_format(format_in):format_in);
var navigator = cljs.pprint.init_navigator(args);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3(writer,compiled_format,navigator);
}));

(cljs.pprint.cl_format.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.pprint.cl_format.cljs$lang$applyTo = (function (seq13930){
var G__13931 = cljs.core.first(seq13930);
var seq13930__$1 = cljs.core.next(seq13930);
var G__13932 = cljs.core.first(seq13930__$1);
var seq13930__$2 = cljs.core.next(seq13930__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13931,G__13932,seq13930__$2);
}));

cljs.pprint._STAR_format_str_STAR_ = null;
cljs.pprint.format_error = (function cljs$pprint$format_error(message,offset){
var full_message = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_format_str_STAR_),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(offset," "))),"^","\n"].join('');
throw Error(full_message);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
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
cljs.pprint.arg_navigator = (function (seq,rest,pos,__meta,__extmap,__hash){
this.seq = seq;
this.rest = rest;
this.pos = pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k13937,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__13941 = k13937;
var G__13941__$1 = (((G__13941 instanceof cljs.core.Keyword))?G__13941.fqn:null);
switch (G__13941__$1) {
case "seq":
return self__.seq;

break;
case "rest":
return self__.rest;

break;
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13937,else__4383__auto__);

}
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__13942){
var vec__13943 = p__13942;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13943,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13943,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#cljs.pprint.arg-navigator{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$seq,self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rest,self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pos,self__.pos],null))], null),self__.__extmap));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13936){
var self__ = this;
var G__13936__$1 = this;
return (new cljs.core.RecordIter((0),G__13936__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$seq,cljs.core.cst$kw$rest,cljs.core.cst$kw$pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__13946 = (function (coll__4377__auto__){
return (-402038447 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__13946(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this13938,other13939){
var self__ = this;
var this13938__$1 = this;
return (((!((other13939 == null)))) && ((this13938__$1.constructor === other13939.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13938__$1.seq,other13939.seq)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13938__$1.rest,other13939.rest)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13938__$1.pos,other13939.pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13938__$1.__extmap,other13939.__extmap)));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$pos,null,cljs.core.cst$kw$seq,null,cljs.core.cst$kw$rest,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__13936){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__13947 = cljs.core.keyword_identical_QMARK_;
var expr__13948 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__13950 = cljs.core.cst$kw$seq;
var G__13951 = expr__13948;
return (pred__13947.cljs$core$IFn$_invoke$arity$2 ? pred__13947.cljs$core$IFn$_invoke$arity$2(G__13950,G__13951) : pred__13947.call(null,G__13950,G__13951));
})())){
return (new cljs.pprint.arg_navigator(G__13936,self__.rest,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13952 = cljs.core.cst$kw$rest;
var G__13953 = expr__13948;
return (pred__13947.cljs$core$IFn$_invoke$arity$2 ? pred__13947.cljs$core$IFn$_invoke$arity$2(G__13952,G__13953) : pred__13947.call(null,G__13952,G__13953));
})())){
return (new cljs.pprint.arg_navigator(self__.seq,G__13936,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13954 = cljs.core.cst$kw$pos;
var G__13955 = expr__13948;
return (pred__13947.cljs$core$IFn$_invoke$arity$2 ? pred__13947.cljs$core$IFn$_invoke$arity$2(G__13954,G__13955) : pred__13947.call(null,G__13954,G__13955));
})())){
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,G__13936,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__13936),null));
}
}
}
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$seq,self__.seq,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$rest,self__.rest,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$pos,self__.pos,null))], null),self__.__extmap));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__13936){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,G__13936,self__.__extmap,self__.__hash));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(cljs.pprint.arg_navigator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$seq,cljs.core.cst$sym$rest,cljs.core.cst$sym$pos], null);
}));

(cljs.pprint.arg_navigator.cljs$lang$type = true);

(cljs.pprint.arg_navigator.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"cljs.pprint/arg-navigator",null,(1),null));
}));

(cljs.pprint.arg_navigator.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"cljs.pprint/arg-navigator");
}));

/**
 * Positional factory function for cljs.pprint/arg-navigator.
 */
cljs.pprint.__GT_arg_navigator = (function cljs$pprint$__GT_arg_navigator(seq,rest,pos){
return (new cljs.pprint.arg_navigator(seq,rest,pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/arg-navigator, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_arg_navigator = (function cljs$pprint$map__GT_arg_navigator(G__13940){
var extmap__4419__auto__ = (function (){var G__13956 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13940,cljs.core.cst$kw$seq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$rest,cljs.core.cst$kw$pos], 0));
if(cljs.core.record_QMARK_(G__13940)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__13956);
} else {
return G__13956;
}
})();
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(G__13940),cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(G__13940),cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(G__13940),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

/**
 * Create a new arg-navigator from the sequence with the position set to 0
 */
cljs.pprint.init_navigator = (function cljs$pprint$init_navigator(s){
var s__$1 = cljs.core.seq(s);
return (new cljs.pprint.arg_navigator(s__$1,s__$1,(0),null,null,null));
});
cljs.pprint.next_arg = (function cljs$pprint$next_arg(navigator){
var rst = cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
throw Error("Not enough arguments for format definition");
}
});
cljs.pprint.next_arg_or_nil = (function cljs$pprint$next_arg_or_nil(navigator){
var rst = cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,navigator], null);
}
});
cljs.pprint.get_format_arg = (function cljs$pprint$get_format_arg(navigator){
var vec__13958 = cljs.pprint.next_arg(navigator);
var raw_format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13958,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13958,(1),null);
var compiled_format = ((typeof raw_format === 'string')?cljs.pprint.compile_format(raw_format):raw_format);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [compiled_format,navigator__$1], null);
});
cljs.pprint.absolute_reposition = (function cljs$pprint$absolute_reposition(navigator,position){
if((position >= cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator))){
var G__13961 = navigator;
var G__13962 = (cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) - position);
return (cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2(G__13961,G__13962) : cljs.pprint.relative_reposition.call(null,G__13961,G__13962));
} else {
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator)),position,null,null,null));
}
});
cljs.pprint.relative_reposition = (function cljs$pprint$relative_reposition(navigator,position){
var newpos = (cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + position);
if((position < (0))){
return cljs.pprint.absolute_reposition(navigator,newpos);
} else {
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)),newpos,null,null,null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
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
cljs.pprint.compiled_directive = (function (func,def,params,offset,__meta,__extmap,__hash){
this.func = func;
this.def = def;
this.params = params;
this.offset = offset;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k13964,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__13968 = k13964;
var G__13968__$1 = (((G__13968 instanceof cljs.core.Keyword))?G__13968.fqn:null);
switch (G__13968__$1) {
case "func":
return self__.func;

break;
case "def":
return self__.def;

break;
case "params":
return self__.params;

break;
case "offset":
return self__.offset;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13964,else__4383__auto__);

}
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__13969){
var vec__13970 = p__13969;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13970,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13970,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#cljs.pprint.compiled-directive{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$func,self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$def,self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null))], null),self__.__extmap));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13963){
var self__ = this;
var G__13963__$1 = this;
return (new cljs.core.RecordIter((0),G__13963__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$func,cljs.core.cst$kw$def,cljs.core.cst$kw$params,cljs.core.cst$kw$offset], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__13973 = (function (coll__4377__auto__){
return (-829256337 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__13973(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this13965,other13966){
var self__ = this;
var this13965__$1 = this;
return (((!((other13966 == null)))) && ((this13965__$1.constructor === other13966.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13965__$1.func,other13966.func)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13965__$1.def,other13966.def)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13965__$1.params,other13966.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13965__$1.offset,other13966.offset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13965__$1.__extmap,other13966.__extmap)));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$offset,null,cljs.core.cst$kw$func,null,cljs.core.cst$kw$params,null,cljs.core.cst$kw$def,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__13963){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__13974 = cljs.core.keyword_identical_QMARK_;
var expr__13975 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__13977 = cljs.core.cst$kw$func;
var G__13978 = expr__13975;
return (pred__13974.cljs$core$IFn$_invoke$arity$2 ? pred__13974.cljs$core$IFn$_invoke$arity$2(G__13977,G__13978) : pred__13974.call(null,G__13977,G__13978));
})())){
return (new cljs.pprint.compiled_directive(G__13963,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13979 = cljs.core.cst$kw$def;
var G__13980 = expr__13975;
return (pred__13974.cljs$core$IFn$_invoke$arity$2 ? pred__13974.cljs$core$IFn$_invoke$arity$2(G__13979,G__13980) : pred__13974.call(null,G__13979,G__13980));
})())){
return (new cljs.pprint.compiled_directive(self__.func,G__13963,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13981 = cljs.core.cst$kw$params;
var G__13982 = expr__13975;
return (pred__13974.cljs$core$IFn$_invoke$arity$2 ? pred__13974.cljs$core$IFn$_invoke$arity$2(G__13981,G__13982) : pred__13974.call(null,G__13981,G__13982));
})())){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,G__13963,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13983 = cljs.core.cst$kw$offset;
var G__13984 = expr__13975;
return (pred__13974.cljs$core$IFn$_invoke$arity$2 ? pred__13974.cljs$core$IFn$_invoke$arity$2(G__13983,G__13984) : pred__13974.call(null,G__13983,G__13984));
})())){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,G__13963,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__13963),null));
}
}
}
}
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$func,self__.func,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$def,self__.def,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$params,self__.params,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$offset,self__.offset,null))], null),self__.__extmap));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__13963){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,G__13963,self__.__extmap,self__.__hash));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(cljs.pprint.compiled_directive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$func,cljs.core.cst$sym$def,cljs.core.cst$sym$params,cljs.core.cst$sym$offset], null);
}));

(cljs.pprint.compiled_directive.cljs$lang$type = true);

(cljs.pprint.compiled_directive.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"cljs.pprint/compiled-directive",null,(1),null));
}));

(cljs.pprint.compiled_directive.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"cljs.pprint/compiled-directive");
}));

/**
 * Positional factory function for cljs.pprint/compiled-directive.
 */
cljs.pprint.__GT_compiled_directive = (function cljs$pprint$__GT_compiled_directive(func,def,params,offset){
return (new cljs.pprint.compiled_directive(func,def,params,offset,null,null,null));
});

/**
 * Factory function for cljs.pprint/compiled-directive, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_compiled_directive = (function cljs$pprint$map__GT_compiled_directive(G__13967){
var extmap__4419__auto__ = (function (){var G__13985 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13967,cljs.core.cst$kw$func,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$def,cljs.core.cst$kw$params,cljs.core.cst$kw$offset], 0));
if(cljs.core.record_QMARK_(G__13967)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__13985);
} else {
return G__13985;
}
})();
return (new cljs.pprint.compiled_directive(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(G__13967),cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(G__13967),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__13967),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(G__13967),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

cljs.pprint.realize_parameter = (function cljs$pprint$realize_parameter(p__13987,navigator){
var vec__13988 = p__13987;
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13988,(0),null);
var vec__13991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13988,(1),null);
var raw_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13991,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13991,(1),null);
var vec__13994 = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),param))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,cljs.core.cst$kw$parameter_DASH_from_DASH_args))?cljs.pprint.next_arg(navigator):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,cljs.core.cst$kw$remaining_DASH_arg_DASH_count))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)),navigator], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null)
)));
var real_param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13994,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13994,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [real_param,offset], null)], null),new_navigator], null);
});
cljs.pprint.realize_parameter_list = (function cljs$pprint$realize_parameter_list(parameter_map,navigator){
var vec__13997 = cljs.pprint.map_passing_context(cljs.pprint.realize_parameter,navigator,parameter_map);
var pairs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13997,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13997,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,pairs),new_navigator], null);
});
cljs.pprint.special_radix_markers = new cljs.core.PersistentArrayMap(null, 3, [(2),"#b",(8),"#o",(16),"#x"], null);
cljs.pprint.format_simple_number = (function cljs$pprint$format_simple_number(n){
if(cljs.core.integer_QMARK_(n)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.pprint._STAR_print_base_STAR_,(10))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),(cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?".":null)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?(function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_radix_markers,cljs.pprint._STAR_print_base_STAR_);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_print_base_STAR_),"r"].join('');
}
})():null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.opt_base_str(cljs.pprint._STAR_print_base_STAR_,n))].join('');
}
} else {
return null;

}
});
cljs.pprint.format_ascii = (function cljs$pprint$format_ascii(print_func,params,arg_navigator,offsets){
var vec__14000 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14000,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14000,(1),null);
var base_output = (function (){var or__4126__auto__ = cljs.pprint.format_simple_number(arg);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (print_func.cljs$core$IFn$_invoke$arity$1 ? print_func.cljs$core$IFn$_invoke$arity$1(arg) : print_func.call(null,arg));
}
})();
var base_width = base_output.length;
var min_width = (base_width + cljs.core.cst$kw$minpad.cljs$core$IFn$_invoke$arity$1(params));
var width = (((min_width >= cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params)))?min_width:(min_width + ((cljs.core.quot(((cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params) - min_width) - (1)),cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params)) + (1)) * cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params))));
var chars = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((width - base_width),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output)].join('')], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars)].join('')], 0));
}

return arg_navigator__$1;
});
/**
 * returns true if a number is actually an integer (that is, has no fractional part)
 */
cljs.pprint.integral_QMARK_ = (function cljs$pprint$integral_QMARK_(x){
if(cljs.core.integer_QMARK_(x)){
return true;
} else {
if(cljs.pprint.float_QMARK_(x)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,Math.floor(x));
} else {
return false;

}
}
});
/**
 * Return the list of remainders (essentially the 'digits') of val in the given base
 */
cljs.pprint.remainders = (function cljs$pprint$remainders(base,val){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (p1__14003_SHARP_){
if((p1__14003_SHARP_ > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rem(p1__14003_SHARP_,base),cljs.core.quot(p1__14003_SHARP_,base)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
}
}),val)));
});
/**
 * Return val as a string in the given base
 */
cljs.pprint.base_str = (function cljs$pprint$base_str(base,val){
if((val === (0))){
return "0";
} else {
var xlated_val = val
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14004_SHARP_){
if((p1__14004_SHARP_ < (10))){
return cljs.core.char$((cljs.pprint.char_code("0") + p1__14004_SHARP_));
} else {
return cljs.core.char$((cljs.pprint.char_code("a") + (p1__14004_SHARP_ - (10))));
}
}),cljs.pprint.remainders(base,val)));
}
});
cljs.pprint.javascript_base_formats = new cljs.core.PersistentArrayMap(null, 3, [(8),"%o",(10),"%d",(16),"%x"], null);
/**
 * Return val as a string in the given base. No cljs format, so no improved performance.
 */
cljs.pprint.opt_base_str = (function cljs$pprint$opt_base_str(base,val){
return cljs.pprint.base_str(base,val);
});
cljs.pprint.group_by_STAR_ = (function cljs$pprint$group_by_STAR_(unit,lis){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.reverse(cljs.core.take.cljs$core$IFn$_invoke$arity$2(unit,x))),cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(unit,x))], null);
}),cljs.core.reverse(lis))));
});
cljs.pprint.format_integer = (function cljs$pprint$format_integer(base,params,arg_navigator,offsets){
var vec__14006 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14006,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14006,(1),null);
if(cljs.pprint.integral_QMARK_(arg)){
var neg_14009 = (arg < (0));
var pos_arg_14010 = ((neg_14009)?(- arg):arg);
var raw_str_14011 = cljs.pprint.opt_base_str(base,pos_arg_14010);
var group_str_14012 = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(function (){var groups = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14005_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__14005_SHARP_);
}),cljs.pprint.group_by_STAR_(cljs.core.cst$kw$commainterval.cljs$core$IFn$_invoke$arity$1(params),raw_str_14011));
var commas = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(groups),cljs.core.cst$kw$commachar.cljs$core$IFn$_invoke$arity$1(params));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.next(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(commas,groups)));
})():raw_str_14011);
var signed_str_14013 = ((neg_14009)?["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_14012)].join(''):(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_14012)].join(''):group_str_14012
));
var padded_str_14014 = (((signed_str_14013.length < cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params) - signed_str_14013.length),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(signed_str_14013)].join(''):signed_str_14013);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([padded_str_14014], 0));
} else {
cljs.pprint.format_ascii(cljs.core.print_str,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$colinc,(1),cljs.core.cst$kw$minpad,(0),cljs.core.cst$kw$padchar,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$at,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),null);
}

return arg_navigator__$1;
});
cljs.pprint.english_cardinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"], null);
cljs.pprint.english_ordinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zeroth","first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth","fifteenth","sixteenth","seventeenth","eighteenth","nineteenth"], null);
cljs.pprint.english_cardinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"], null);
cljs.pprint.english_ordinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twentieth","thirtieth","fortieth","fiftieth","sixtieth","seventieth","eightieth","ninetieth"], null);
cljs.pprint.english_scale_numbers = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion","nonillion","decillion","undecillion","duodecillion","tredecillion","quattuordecillion","quindecillion","sexdecillion","septendecillion","octodecillion","novemdecillion","vigintillion"], null);
/**
 * Convert a number less than 1000 to a cardinal english string
 */
cljs.pprint.format_simple_cardinal = (function cljs$pprint$format_simple_cardinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [(((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null),(((((hundreds > (0))) && ((tens > (0)))))?" ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),(((((ten_digit > (0))) && ((unit_digit > (0)))))?"-":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,unit_digit):null))].join('');
})()):null))].join('');
});
/**
 * Take a sequence of parts, add scale numbers (e.g., million) and combine into a string
 *   offset is a factor of 10^3 to multiply by
 */
cljs.pprint.add_english_scales = (function cljs$pprint$add_english_scales(parts,offset){
var cnt = cljs.core.count(parts);
var acc = cljs.core.PersistentVector.EMPTY;
var pos = (cnt - (1));
var this$ = cljs.core.first(parts);
var remainder = cljs.core.next(parts);
while(true){
if((remainder == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",acc))),(((((!(cljs.core.empty_QMARK_(this$)))) && ((!(cljs.core.empty_QMARK_(acc))))))?", ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$),(((((!(cljs.core.empty_QMARK_(this$)))) && (((pos + offset) > (0)))))?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join(''):null)].join('');
} else {
var G__14015 = ((cljs.core.empty_QMARK_(this$))?acc:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join('')));
var G__14016 = (pos - (1));
var G__14017 = cljs.core.first(remainder);
var G__14018 = cljs.core.next(remainder);
acc = G__14015;
pos = G__14016;
this$ = G__14017;
remainder = G__14018;
continue;
}
break;
}
});
cljs.pprint.format_cardinal_english = (function cljs$pprint$format_cardinal_english(params,navigator,offsets){
var vec__14019 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14019,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14019,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zero"], 0));
} else {
var abs_arg_14022 = (((arg < (0)))?(- arg):arg);
var parts_14023 = cljs.pprint.remainders((1000),abs_arg_14022);
if((cljs.core.count(parts_14023) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_14024 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,parts_14023);
var full_str_14025 = cljs.pprint.add_english_scales(parts_strs_14024,(0));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[(((arg < (0)))?"minus ":null),full_str_14025].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));
}
}

return navigator__$1;
});
/**
 * Convert a number less than 1000 to a ordinal english string
 *   Note this should only be used for the last one in the sequence
 */
cljs.pprint.format_simple_ordinal = (function cljs$pprint$format_simple_ordinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [(((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null),(((((hundreds > (0))) && ((tens > (0)))))?" ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
if((((ten_digit > (0))) && ((!((unit_digit > (0))))))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_tens,ten_digit);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),(((((ten_digit > (0))) && ((unit_digit > (0)))))?"-":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,unit_digit):null))].join('');
}
})()):(((hundreds > (0)))?"th":null)))].join('');
});
cljs.pprint.format_ordinal_english = (function cljs$pprint$format_ordinal_english(params,navigator,offsets){
var vec__14026 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14026,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14026,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zeroth"], 0));
} else {
var abs_arg_14029 = (((arg < (0)))?(- arg):arg);
var parts_14030 = cljs.pprint.remainders((1000),abs_arg_14029);
if((cljs.core.count(parts_14030) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_14031 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(parts_14030));
var head_str_14032 = cljs.pprint.add_english_scales(parts_strs_14031,(1));
var tail_str_14033 = cljs.pprint.format_simple_ordinal(cljs.core.last(parts_14030));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[(((arg < (0)))?"minus ":null),(((((!(cljs.core.empty_QMARK_(head_str_14032)))) && ((!(cljs.core.empty_QMARK_(tail_str_14033))))))?[head_str_14032,", ",tail_str_14033].join(''):(((!(cljs.core.empty_QMARK_(head_str_14032))))?[head_str_14032,"th"].join(''):tail_str_14033
))].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));

var low_two_digits_14034 = cljs.core.rem(arg,(100));
var not_teens_14035 = ((((11) < low_two_digits_14034)) || (((19) > low_two_digits_14034)));
var low_digit_14036 = cljs.core.rem(low_two_digits_14034,(10));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((((low_digit_14036 === (1))) && (not_teens_14035)))?"st":(((((low_digit_14036 === (2))) && (not_teens_14035)))?"nd":(((((low_digit_14036 === (3))) && (not_teens_14035)))?"rd":"th"
)))], 0));
}
}

return navigator__$1;
});
cljs.pprint.old_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IIII","V","VI","VII","VIII","VIIII"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XXXX","L","LX","LXX","LXXX","LXXXX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CCCC","D","DC","DCC","DCCC","DCCCC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
cljs.pprint.new_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IV","V","VI","VII","VIII","IX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
/**
 * Format a roman numeral using the specified look-up table
 */
cljs.pprint.format_roman = (function cljs$pprint$format_roman(table,params,navigator,offsets){
var vec__14037 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14037,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14037,(1),null);
if(((typeof arg === 'number') && ((arg > (0))) && ((arg < (4000))))){
var digits_14040 = cljs.pprint.remainders((10),arg);
var acc_14041 = cljs.core.PersistentVector.EMPTY;
var pos_14042 = (cljs.core.count(digits_14040) - (1));
var digits_14043__$1 = digits_14040;
while(true){
if(cljs.core.empty_QMARK_(digits_14043__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,acc_14041)], 0));
} else {
var digit_14044 = cljs.core.first(digits_14043__$1);
var G__14045 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),digit_14044))?acc_14041:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc_14041,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(table,pos_14042),(digit_14044 - (1)))));
var G__14046 = (pos_14042 - (1));
var G__14047 = cljs.core.next(digits_14043__$1);
acc_14041 = G__14045;
pos_14042 = G__14046;
digits_14043__$1 = G__14047;
continue;
}
break;
}
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));
}

return navigator__$1;
});
cljs.pprint.format_old_roman = (function cljs$pprint$format_old_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.old_roman_table,params,navigator,offsets);
});
cljs.pprint.format_new_roman = (function cljs$pprint$format_new_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.new_roman_table,params,navigator,offsets);
});
cljs.pprint.special_chars = new cljs.core.PersistentArrayMap(null, 5, [(8),"Backspace",(9),"Tab",(10),"Newline",(13),"Return",(32),"Space"], null);
cljs.pprint.pretty_character = (function cljs$pprint$pretty_character(params,navigator,offsets){
var vec__14048 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14048,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14048,(1),null);
var as_int = cljs.pprint.char_code(c);
var base_char = (as_int & (127));
var meta = (as_int & (128));
var special = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_chars,base_char);
if((meta > (0))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Meta-"], 0));
} else {
}

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(special)?special:(((base_char < (32)))?["Control-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$((base_char + (64))))].join(''):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(base_char,(127)))?"Control-?":cljs.core.char$(base_char)
)))], 0));

return navigator__$1;
});
cljs.pprint.readable_character = (function cljs$pprint$readable_character(params,navigator,offsets){
var vec__14051 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14051,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14051,(1),null);
var pred__14054_14061 = cljs.core._EQ_;
var expr__14055_14062 = cljs.core.cst$kw$char_DASH_format.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_((function (){var G__14057 = "o";
var G__14058 = expr__14055_14062;
return (pred__14054_14061.cljs$core$IFn$_invoke$arity$2 ? pred__14054_14061.cljs$core$IFn$_invoke$arity$2(G__14057,G__14058) : pred__14054_14061.call(null,G__14057,G__14058));
})())){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\o~3, '0o",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((function (){var G__14059 = "u";
var G__14060 = expr__14055_14062;
return (pred__14054_14061.cljs$core$IFn$_invoke$arity$2 ? pred__14054_14061.cljs$core$IFn$_invoke$arity$2(G__14059,G__14060) : pred__14054_14061.call(null,G__14059,G__14060));
})())){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\u~4, '0x",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((pred__14054_14061.cljs$core$IFn$_invoke$arity$2 ? pred__14054_14061.cljs$core$IFn$_invoke$arity$2(null,expr__14055_14062) : pred__14054_14061.call(null,null,expr__14055_14062)))){
cljs.pprint.print_char(c);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__14055_14062)].join('')));
}
}
}

return navigator__$1;
});
cljs.pprint.plain_character = (function cljs$pprint$plain_character(params,navigator,offsets){
var vec__14063 = cljs.pprint.next_arg(navigator);
var char$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14063,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14063,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([char$], 0));

return navigator__$1;
});
cljs.pprint.abort_QMARK_ = (function cljs$pprint$abort_QMARK_(context){
var token = cljs.core.first(context);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,token)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,token)));
});
cljs.pprint.execute_sub_format = (function cljs$pprint$execute_sub_format(format,args,base_args){
return cljs.core.second(cljs.pprint.map_passing_context((function (element,context){
if(cljs.pprint.abort_QMARK_(context)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__14066 = cljs.pprint.realize_parameter_list(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14066,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14066,(1),null);
var vec__14069 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14069,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14069,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,cljs.core.cst$kw$base_DASH_args,base_args);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format));
});
/**
 * Produce string parts for the mantissa (normalize 1-9) and exponent
 */
cljs.pprint.float_parts_base = (function cljs$pprint$float_parts_base(f){
var s = clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(f));
var exploc = s.indexOf("e");
var dotloc = s.indexOf(".");
if((exploc < (0))){
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,cljs.core.str.cljs$core$IFn$_invoke$arity$1((((s).length) - (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),dotloc),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(dotloc + (1)))].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1((dotloc - (1)))], null);
}
} else {
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),exploc),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1)),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(2),exploc)].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
}
}
});
/**
 * Take care of leading and trailing zeros in decomposed floats
 */
cljs.pprint.float_parts = (function cljs$pprint$float_parts(f){
var vec__14072 = cljs.pprint.float_parts_base(f);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14072,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14072,(1),null);
var m1 = cljs.pprint.rtrim(m,"0");
var m2 = cljs.pprint.ltrim(m1,"0");
var delta = (cljs.core.count(m1) - cljs.core.count(m2));
var e__$1 = (((((cljs.core.count(e) > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(e,(0)),"+"))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(e,(1)):e);
if(cljs.core.empty_QMARK_(m2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m2,(parseInt(e__$1,(10)) - delta)], null);
}
});
/**
 * Assumption: The input string consists of one or more decimal digits,
 *   and no other characters. Return a string containing one or more
 *   decimal digits containing a decimal number one larger than the input
 *   string. The output string will always be the same length as the input
 *   string, or one character longer.
 */
cljs.pprint.inc_s = (function cljs$pprint$inc_s(s){
var len_1 = (cljs.core.count(s) - (1));
var i = (len_1 | (0));
while(true){
if((i < (0))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"1",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 + (1)),"0"));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("9",s.charAt(i))){
var G__14075 = (i - (1));
i = G__14075;
continue;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),i),cljs.core.char$((cljs.pprint.char_code(s.charAt(i)) + (1))),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 - i),"0"));

}
}
break;
}
});
cljs.pprint.round_str = (function cljs$pprint$round_str(m,e,d,w){
if(cljs.core.truth_((function (){var or__4126__auto__ = d;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return w;
}
})())){
var len = cljs.core.count(m);
var w__$1 = (cljs.core.truth_(w)?(function (){var x__4214__auto__ = (2);
var y__4215__auto__ = w;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})():(0));
var round_pos = (cljs.core.truth_(d)?((e + d) + (1)):(((e >= (0)))?(function (){var x__4214__auto__ = (e + (1));
var y__4215__auto__ = (w__$1 - (1));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})():(w__$1 + e)
));
var vec__14076 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(round_pos,(0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(e + (1)),(1),(len + (1))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,round_pos,len], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14076,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14076,(1),null);
var round_pos__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14076,(2),null);
var len__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14076,(3),null);
if(cljs.core.truth_(round_pos__$1)){
if((round_pos__$1 < (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0),false], null);
} else {
if((len__$1 > round_pos__$1)){
var round_char = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m1,round_pos__$1);
var result = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m1,(0),round_pos__$1);
if((cljs.pprint.char_code(round_char) >= cljs.pprint.char_code("5"))){
var round_up_result = cljs.pprint.inc_s(result);
var expanded = (cljs.core.count(round_up_result) > ((result).length));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((expanded)?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(round_up_result,(0),(cljs.core.count(round_up_result) - (1))):round_up_result),e1,expanded], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,e1,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
});
cljs.pprint.expand_fixed = (function cljs$pprint$expand_fixed(m,e,d){
var vec__14079 = (((e < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((- e) - (1)),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(-1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14079,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14079,(1),null);
var len = cljs.core.count(m1);
var target_len = (cljs.core.truth_(d)?((e1 + d) + (1)):(e1 + (1)));
if((len < target_len)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(m1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((target_len - len),"0")))].join('');
} else {
return m1;
}
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_decimal = (function cljs$pprint$insert_decimal(m,e){
if((e < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
var loc = (e + (1));
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),loc),".",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,loc)].join('');
}
});
cljs.pprint.get_fixed = (function cljs$pprint$get_fixed(m,e,d){
return cljs.pprint.insert_decimal(cljs.pprint.expand_fixed(m,e,d),e);
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_scaled_decimal = (function cljs$pprint$insert_scaled_decimal(m,k){
if((k < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),k),".",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,k)].join('');
}
});
cljs.pprint.convert_ratio = (function cljs$pprint$convert_ratio(x){
return x;
});
cljs.pprint.fixed_float = (function cljs$pprint$fixed_float(params,navigator,offsets){
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var vec__14082 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14082,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14082,(1),null);
var vec__14085 = (((arg < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",(- arg)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+",arg], null));
var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14085,(0),null);
var abs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14085,(1),null);
var abs__$1 = cljs.pprint.convert_ratio(abs);
var vec__14088 = cljs.pprint.float_parts(abs__$1);
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14088,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14088,(1),null);
var scaled_exp = (exp + cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(params));
var add_sign = (function (){var or__4126__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (arg < (0));
}
})();
var append_zero = ((cljs.core.not(d)) && (((cljs.core.count(mantissa) - (1)) <= scaled_exp)));
var vec__14091 = cljs.pprint.round_str(mantissa,scaled_exp,d,(cljs.core.truth_(w)?(w - (cljs.core.truth_(add_sign)?(1):(0))):null));
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14091,(0),null);
var scaled_exp__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14091,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14091,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp__$1 + (1)):scaled_exp__$1),d);
var fixed_repr__$1 = (cljs.core.truth_((function (){var and__4115__auto__ = w;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = d;
if(cljs.core.truth_(and__4115__auto____$1)){
return (((d >= (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((0)),"0")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((1)),".")) && ((((fixed_repr).length) > (w - (cljs.core.truth_(add_sign)?(1):(0))))));
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(fixed_repr,(1)):fixed_repr);
var prepend_zero = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(fixed_repr__$1),".");
if(cljs.core.truth_(w)){
var len_14094 = ((fixed_repr__$1).length);
var signed_len_14095 = (cljs.core.truth_(add_sign)?(len_14094 + (1)):len_14094);
var prepend_zero_14096__$1 = ((prepend_zero) && ((!((signed_len_14095 >= w)))));
var append_zero_14097__$1 = ((append_zero) && ((!((signed_len_14095 >= w)))));
var full_len_14098 = ((((prepend_zero_14096__$1) || (append_zero_14097__$1)))?(signed_len_14095 + (1)):signed_len_14095);
if(cljs.core.truth_((((full_len_14098 > w))?cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params):false))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len_14098),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),((prepend_zero_14096__$1)?"0":null),fixed_repr__$1,((append_zero_14097__$1)?"0":null)].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),((prepend_zero)?"0":null),fixed_repr__$1,((append_zero)?"0":null)].join('')], 0));
}

return navigator__$1;
});
cljs.pprint.exponential_float = (function cljs$pprint$exponential_float(params,navigator,offset){
var vec__14099 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14099,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14099,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var G__14105_14115 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var vec__14106_14116 = G__14105_14115;
var mantissa_14117 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14106_14116,(0),null);
var exp_14118 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14106_14116,(1),null);
var G__14105_14119__$1 = G__14105_14115;
while(true){
var vec__14109_14120 = G__14105_14119__$1;
var mantissa_14121__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14109_14120,(0),null);
var exp_14122__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14109_14120,(1),null);
var w_14123 = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d_14124 = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var e_14125 = cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(params);
var k_14126 = cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(params);
var expchar_14127 = (function (){var or__4126__auto__ = cljs.core.cst$kw$exponentchar.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "E";
}
})();
var add_sign_14128 = (function (){var or__4126__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (arg__$1 < (0));
}
})();
var prepend_zero_14129 = (k_14126 <= (0));
var scaled_exp_14130 = (exp_14122__$1 - (k_14126 - (1)));
var scaled_exp_str_14131 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.abs(scaled_exp_14130));
var scaled_exp_str_14132__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(expchar_14127),(((scaled_exp_14130 < (0)))?"-":"+"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(e_14125)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((e_14125 - ((scaled_exp_str_14131).length)),"0")):null)),scaled_exp_str_14131].join('');
var exp_width_14133 = ((scaled_exp_str_14132__$1).length);
var base_mantissa_width_14134 = cljs.core.count(mantissa_14121__$1);
var scaled_mantissa_14135 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((- k_14126),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mantissa_14121__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(d_14124)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((d_14124 - (base_mantissa_width_14134 - (1))) - (((k_14126 < (0)))?(- k_14126):(0))),"0")):null))].join('');
var w_mantissa_14136 = (cljs.core.truth_(w_14123)?(w_14123 - exp_width_14133):null);
var vec__14112_14137 = cljs.pprint.round_str(scaled_mantissa_14135,(0),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_14126,(0)))?(d_14124 - (1)):(((k_14126 > (0)))?d_14124:(((k_14126 < (0)))?(d_14124 - (1)):null))),(cljs.core.truth_(w_mantissa_14136)?(w_mantissa_14136 - (cljs.core.truth_(add_sign_14128)?(1):(0))):null));
var rounded_mantissa_14138 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14112_14137,(0),null);
var __14139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14112_14137,(1),null);
var incr_exp_14140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14112_14137,(2),null);
var full_mantissa_14141 = cljs.pprint.insert_scaled_decimal(rounded_mantissa_14138,k_14126);
var append_zero_14142 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_14126,cljs.core.count(rounded_mantissa_14138))) && ((d_14124 == null)));
if(cljs.core.not(incr_exp_14140)){
if(cljs.core.truth_(w_14123)){
var len_14143 = (((full_mantissa_14141).length) + exp_width_14133);
var signed_len_14144 = (cljs.core.truth_(add_sign_14128)?(len_14143 + (1)):len_14143);
var prepend_zero_14145__$1 = ((prepend_zero_14129) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(signed_len_14144,w_14123)))));
var full_len_14146 = ((prepend_zero_14145__$1)?(signed_len_14144 + (1)):signed_len_14144);
var append_zero_14147__$1 = ((append_zero_14142) && ((full_len_14146 < w_14123)));
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var or__4126__auto__ = (full_len_14146 > w_14123);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var and__4115__auto__ = e_14125;
if(cljs.core.truth_(and__4115__auto__)){
return ((exp_width_14133 - (2)) > e_14125);
} else {
return and__4115__auto__;
}
}
})();
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4115__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w_14123,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((w_14123 - full_len_14146) - ((append_zero_14147__$1)?(1):(0))),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),(cljs.core.truth_(add_sign_14128)?(((arg__$1 < (0)))?"-":"+"):null),((prepend_zero_14145__$1)?"0":null),full_mantissa_14141,((append_zero_14147__$1)?"0":null),scaled_exp_str_14132__$1].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[(cljs.core.truth_(add_sign_14128)?(((arg__$1 < (0)))?"-":"+"):null),((prepend_zero_14129)?"0":null),full_mantissa_14141,((append_zero_14142)?"0":null),scaled_exp_str_14132__$1].join('')], 0));
}
} else {
var G__14148 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rounded_mantissa_14138,(exp_14122__$1 + (1))], null);
G__14105_14119__$1 = G__14148;
continue;
}
break;
}

return navigator__$1;
});
cljs.pprint.general_float = (function cljs$pprint$general_float(params,navigator,offsets){
var vec__14149 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14149,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14149,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var vec__14152 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14152,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14152,(1),null);
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var e = cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(params);
var n = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg__$1,0.0))?(0):(exp + (1)));
var ee = (cljs.core.truth_(e)?(e + (2)):(4));
var ww = (cljs.core.truth_(w)?(w - ee):null);
var d__$1 = (cljs.core.truth_(d)?d:(function (){var x__4214__auto__ = cljs.core.count(mantissa);
var y__4215__auto__ = (function (){var x__4217__auto__ = n;
var y__4218__auto__ = (7);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})());
var dd = (d__$1 - n);
if(((((0) <= dd)) && ((dd <= d__$1)))){
var navigator__$1 = cljs.pprint.fixed_float(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$w,ww,cljs.core.cst$kw$d,dd,cljs.core.cst$kw$k,(0),cljs.core.cst$kw$overflowchar,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$padchar,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$at,cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params)], null),navigator,offsets);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(ee," "))], 0));

return navigator__$1;
} else {
return cljs.pprint.exponential_float(params,navigator,offsets);
}
});
cljs.pprint.dollar_float = (function cljs$pprint$dollar_float(params,navigator,offsets){
var vec__14155 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14155,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14155,(1),null);
var vec__14158 = cljs.pprint.float_parts(Math.abs(arg));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14158,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14158,(1),null);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params);
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var add_sign = (function (){var or__4126__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (arg < (0));
}
})();
var vec__14161 = cljs.pprint.round_str(mantissa,exp,d,null);
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14161,(0),null);
var scaled_exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14161,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14161,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp + (1)):scaled_exp),d);
var full_repr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - fixed_repr.indexOf(".")),"0"))),fixed_repr].join('');
var full_len = (((full_repr).length) + (cljs.core.truth_(add_sign)?(1):(0)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__4115__auto__)){
return add_sign;
} else {
return and__4115__auto__;
}
})())?(((arg < (0)))?"-":"+"):null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),(cljs.core.truth_(((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params)))?add_sign:false))?(((arg < (0)))?"-":"+"):null),full_repr].join('')], 0));

return navigator__$1;
});
cljs.pprint.choice_conditional = (function cljs$pprint$choice_conditional(params,arg_navigator,offsets){
var arg = cljs.core.cst$kw$selector.cljs$core$IFn$_invoke$arity$1(params);
var vec__14164 = (cljs.core.truth_(arg)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg,arg_navigator], null):cljs.pprint.next_arg(arg_navigator));
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14164,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14164,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = (((((arg__$1 < (0))) || ((arg__$1 >= cljs.core.count(clauses)))))?cljs.core.first(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(params)):cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,arg__$1));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.boolean_conditional = (function cljs$pprint$boolean_conditional(params,arg_navigator,offsets){
var vec__14167 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14167,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14167,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.second(clauses):cljs.core.first(clauses));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.check_arg_conditional = (function cljs$pprint$check_arg_conditional(params,arg_navigator,offsets){
var vec__14170 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14170,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14170,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.first(clauses):null);
if(cljs.core.truth_(arg)){
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,arg_navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return arg_navigator;
}
} else {
return navigator;
}
});
cljs.pprint.iterate_sublist = (function cljs$pprint$iterate_sublist(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__14173 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14173,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14173,(1),null);
var vec__14176 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14176,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14176,(1),null);
var args = cljs.pprint.init_navigator(arg_list);
var count = (0);
var args__$1 = args;
var last_pos = ((-1) | (0));
while(true){
if(((cljs.core.not(max_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(args__$1),last_pos)) && ((count > (1))))){
throw Error("%{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__4126__auto__ = ((cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(args__$1))) && (((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var and__4115__auto__ = max_count;
if(cljs.core.truth_(and__4115__auto__)){
return (count >= max_count);
} else {
return and__4115__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,args__$1,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__14179 = (count + (1));
var G__14180 = iter_result;
var G__14181 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(args__$1);
count = G__14179;
args__$1 = G__14180;
last_pos = G__14181;
continue;
}
}
break;
}
});
cljs.pprint.iterate_list_of_sublists = (function cljs$pprint$iterate_list_of_sublists(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__14182 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14182,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14182,(1),null);
var vec__14185 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14185,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14185,(1),null);
var count = (0);
var arg_list__$1 = arg_list;
while(true){
if(cljs.core.truth_((function (){var or__4126__auto__ = ((cljs.core.empty_QMARK_(arg_list__$1)) && (((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var and__4115__auto__ = max_count;
if(cljs.core.truth_(and__4115__auto__)){
return (count >= max_count);
} else {
return and__4115__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(cljs.core.first(arg_list__$1)),cljs.pprint.init_navigator(cljs.core.next(arg_list__$1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__14188 = (count + (1));
var G__14189 = cljs.core.next(arg_list__$1);
count = G__14188;
arg_list__$1 = G__14189;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_list = (function cljs$pprint$iterate_main_list(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__14190 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14190,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14190,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
var last_pos = ((-1) | (0));
while(true){
if(((cljs.core.not(max_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator__$2),last_pos)) && ((count > (1))))){
throw Error("%@{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__4126__auto__ = ((cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator__$2))) && (((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var and__4115__auto__ = max_count;
if(cljs.core.truth_(and__4115__auto__)){
return (count >= max_count);
} else {
return and__4115__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,navigator__$2,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return cljs.core.second(iter_result);
} else {
var G__14193 = (count + (1));
var G__14194 = iter_result;
var G__14195 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator__$2);
count = G__14193;
navigator__$2 = G__14194;
last_pos = G__14195;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_sublists = (function cljs$pprint$iterate_main_sublists(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__14196 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14196,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14196,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
while(true){
if(cljs.core.truth_((function (){var or__4126__auto__ = ((cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator__$2))) && (((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var and__4115__auto__ = max_count;
if(cljs.core.truth_(and__4115__auto__)){
return (count >= max_count);
} else {
return and__4115__auto__;
}
}
})())){
return navigator__$2;
} else {
var vec__14202 = cljs.pprint.next_arg_or_nil(navigator__$2);
var sublist = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14202,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14202,(1),null);
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(sublist),navigator__$3);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$3;
} else {
var G__14205 = (count + (1));
var G__14206 = navigator__$3;
count = G__14205;
navigator__$2 = G__14206;
continue;
}
}
break;
}
});
cljs.pprint.logical_block_or_justify = (function cljs$pprint$logical_block_or_justify(params,navigator,offsets){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))){
return cljs.pprint.format_logical_block(params,navigator,offsets);
} else {
return cljs.pprint.justify_clauses(params,navigator,offsets);
}
});
cljs.pprint.render_clauses = (function cljs$pprint$render_clauses(clauses,navigator,base_navigator){
var clauses__$1 = clauses;
var acc = cljs.core.PersistentVector.EMPTY;
var navigator__$1 = navigator;
while(true){
if(cljs.core.empty_QMARK_(clauses__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,navigator__$1], null);
} else {
var clause = cljs.core.first(clauses__$1);
var vec__14212 = (function (){var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR__orig_val__14215 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__14216 = (new cljs.core.StringBufferWriter(sb));
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__14216);

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.execute_sub_format(clause,navigator__$1,base_navigator),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)], null);
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__14215);
}})();
var iter_result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14212,(0),null);
var result_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14212,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,cljs.core.second(iter_result)], null);
} else {
var G__14217 = cljs.core.next(clauses__$1);
var G__14218 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result_str);
var G__14219 = iter_result;
clauses__$1 = G__14217;
acc = G__14218;
navigator__$1 = G__14219;
continue;
}
}
break;
}
});
cljs.pprint.justify_clauses = (function cljs$pprint$justify_clauses(params,navigator,offsets){
var vec__14220 = (function (){var temp__5753__auto__ = cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5753__auto__)){
var else$ = temp__5753__auto__;
return cljs.pprint.render_clauses(else$,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return null;
}
})();
var vec__14223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14220,(0),null);
var eol_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14223,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14220,(1),null);
var navigator__$1 = (function (){var or__4126__auto__ = new_navigator;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return navigator;
}
})();
var vec__14226 = (function (){var temp__5753__auto__ = cljs.core.cst$kw$else_DASH_params.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5753__auto__)){
var p = temp__5753__auto__;
return cljs.pprint.realize_parameter_list(p,navigator__$1);
} else {
return null;
}
})();
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14226,(0),null);
var new_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14226,(1),null);
var navigator__$2 = (function (){var or__4126__auto__ = new_navigator__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return navigator__$1;
}
})();
var min_remaining = (function (){var or__4126__auto__ = cljs.core.first(cljs.core.cst$kw$min_DASH_remaining.cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var max_columns = (function (){var or__4126__auto__ = cljs.core.first(cljs.core.cst$kw$max_DASH_columns.cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.pprint.get_max_column(cljs.core._STAR_out_STAR_);
}
})();
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var vec__14229 = cljs.pprint.render_clauses(clauses,navigator__$2,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
var strs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14229,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14229,(1),null);
var slots = (function (){var x__4214__auto__ = (1);
var y__4215__auto__ = (((cljs.core.count(strs) - (1)) + (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(1):(0))) + (cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?(1):(0)));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
var chars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,strs));
var mincol = cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params);
var minpad = cljs.core.cst$kw$minpad.cljs$core$IFn$_invoke$arity$1(params);
var colinc = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var minout = (chars + (slots * minpad));
var result_columns = (((minout <= mincol))?mincol:(mincol + (colinc * ((1) + cljs.core.quot(((minout - mincol) - (1)),colinc)))));
var total_pad = (result_columns - chars);
var pad = (function (){var x__4214__auto__ = minpad;
var y__4215__auto__ = cljs.core.quot(total_pad,slots);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
var extra_pad = (total_pad - (pad * slots));
var pad_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(pad,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_((function (){var and__4115__auto__ = eol_str;
if(cljs.core.truth_(and__4115__auto__)){
return (((cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))) + min_remaining) + result_columns) > max_columns);
} else {
return and__4115__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([eol_str], 0));
} else {
}

var slots_14232__$1 = slots;
var extra_pad_14233__$1 = extra_pad;
var strs_14234__$1 = strs;
var pad_only_14235 = (function (){var or__4126__auto__ = cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(strs_14234__$1),(1))) && (cljs.core.not(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))));
}
})();
while(true){
if(cljs.core.seq(strs_14234__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not(pad_only_14235))?cljs.core.first(strs_14234__$1):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var or__4126__auto__ = pad_only_14235;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core.next(strs_14234__$1);
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
return cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
}
}
})())?pad_str:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((extra_pad_14233__$1 > (0)))?cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params):null))].join('')], 0));

var G__14236 = (slots_14232__$1 - (1));
var G__14237 = (extra_pad_14233__$1 - (1));
var G__14238 = (cljs.core.truth_(pad_only_14235)?strs_14234__$1:cljs.core.next(strs_14234__$1));
var G__14239 = false;
slots_14232__$1 = G__14236;
extra_pad_14233__$1 = G__14237;
strs_14234__$1 = G__14238;
pad_only_14235 = G__14239;
continue;
} else {
}
break;
}

return navigator__$3;
});
/**
 * Returns a proxy that wraps writer, converting all characters to lower case
 */
cljs.pprint.downcase_writer = (function cljs$pprint$downcase_writer(writer){
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint14240 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint14240 = (function (writer,meta14241){
this.writer = writer;
this.meta14241 = meta14241;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint14240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14242,meta14241__$1){
var self__ = this;
var _14242__$1 = this;
return (new cljs.pprint.t_cljs$pprint14240(self__.writer,meta14241__$1));
}));

(cljs.pprint.t_cljs$pprint14240.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14242){
var self__ = this;
var _14242__$1 = this;
return self__.meta14241;
}));

(cljs.pprint.t_cljs$pprint14240.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
}));

(cljs.pprint.t_cljs$pprint14240.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__14243 = cljs.core._EQ_;
var expr__14244 = cljs.core.type(x);
if(cljs.core.truth_((pred__14243.cljs$core$IFn$_invoke$arity$2 ? pred__14243.cljs$core$IFn$_invoke$arity$2(String,expr__14244) : pred__14243.call(null,String,expr__14244)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
} else {
if(cljs.core.truth_((pred__14243.cljs$core$IFn$_invoke$arity$2 ? pred__14243.cljs$core$IFn$_invoke$arity$2(Number,expr__14244) : pred__14243.call(null,Number,expr__14244)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(cljs.core.char$(c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__14244)].join('')));
}
}
}));

(cljs.pprint.t_cljs$pprint14240.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$meta14241], null);
}));

(cljs.pprint.t_cljs$pprint14240.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint14240.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint14240");

(cljs.pprint.t_cljs$pprint14240.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.pprint/t_cljs$pprint14240");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint14240.
 */
cljs.pprint.__GT_t_cljs$pprint14240 = (function cljs$pprint$downcase_writer_$___GT_t_cljs$pprint14240(writer__$1,meta14241){
return (new cljs.pprint.t_cljs$pprint14240(writer__$1,meta14241));
});

}

return (new cljs.pprint.t_cljs$pprint14240(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, converting all characters to upper case
 */
cljs.pprint.upcase_writer = (function cljs$pprint$upcase_writer(writer){
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint14246 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint14246 = (function (writer,meta14247){
this.writer = writer;
this.meta14247 = meta14247;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint14246.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14248,meta14247__$1){
var self__ = this;
var _14248__$1 = this;
return (new cljs.pprint.t_cljs$pprint14246(self__.writer,meta14247__$1));
}));

(cljs.pprint.t_cljs$pprint14246.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14248){
var self__ = this;
var _14248__$1 = this;
return self__.meta14247;
}));

(cljs.pprint.t_cljs$pprint14246.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
}));

(cljs.pprint.t_cljs$pprint14246.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__14249 = cljs.core._EQ_;
var expr__14250 = cljs.core.type(x);
if(cljs.core.truth_((pred__14249.cljs$core$IFn$_invoke$arity$2 ? pred__14249.cljs$core$IFn$_invoke$arity$2(String,expr__14250) : pred__14249.call(null,String,expr__14250)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(s));
} else {
if(cljs.core.truth_((pred__14249.cljs$core$IFn$_invoke$arity$2 ? pred__14249.cljs$core$IFn$_invoke$arity$2(Number,expr__14250) : pred__14249.call(null,Number,expr__14250)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(cljs.core.char$(c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__14250)].join('')));
}
}
}));

(cljs.pprint.t_cljs$pprint14246.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$meta14247], null);
}));

(cljs.pprint.t_cljs$pprint14246.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint14246.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint14246");

(cljs.pprint.t_cljs$pprint14246.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.pprint/t_cljs$pprint14246");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint14246.
 */
cljs.pprint.__GT_t_cljs$pprint14246 = (function cljs$pprint$upcase_writer_$___GT_t_cljs$pprint14246(writer__$1,meta14247){
return (new cljs.pprint.t_cljs$pprint14246(writer__$1,meta14247));
});

}

return (new cljs.pprint.t_cljs$pprint14246(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Capitalizes the words in a string. If first? is false, don't capitalize the
 *                                    first character of the string even if it's a letter.
 */
cljs.pprint.capitalize_string = (function cljs$pprint$capitalize_string(s,first_QMARK_){
var f = cljs.core.first(s);
var s__$1 = (cljs.core.truth_((function (){var and__4115__auto__ = first_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = f;
if(cljs.core.truth_(and__4115__auto____$1)){
return goog.string.isUnicodeChar(f);
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())?[clojure.string.upper_case(f),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1))].join(''):s);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.first(cljs.pprint.consume((function (s__$2){
if(cljs.core.empty_QMARK_(s__$2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
} else {
var m = RegExp("\\W\\w","g").exec(s__$2);
var offset = (function (){var and__4115__auto__ = m;
if(cljs.core.truth_(and__4115__auto__)){
return (m.index + (1));
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(offset)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s__$2,(0),offset),clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s__$2,offset))].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$2,(offset + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$2,null], null);
}
}
}),s__$1)));
});
/**
 * Returns a proxy that wraps writer, capitalizing all words
 */
cljs.pprint.capitalize_word_writer = (function cljs$pprint$capitalize_word_writer(writer){
var last_was_whitespace_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint14252 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint14252 = (function (writer,last_was_whitespace_QMARK_,meta14253){
this.writer = writer;
this.last_was_whitespace_QMARK_ = last_was_whitespace_QMARK_;
this.meta14253 = meta14253;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint14252.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14254,meta14253__$1){
var self__ = this;
var _14254__$1 = this;
return (new cljs.pprint.t_cljs$pprint14252(self__.writer,self__.last_was_whitespace_QMARK_,meta14253__$1));
}));

(cljs.pprint.t_cljs$pprint14252.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14254){
var self__ = this;
var _14254__$1 = this;
return self__.meta14253;
}));

(cljs.pprint.t_cljs$pprint14252.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
}));

(cljs.pprint.t_cljs$pprint14252.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__14255 = cljs.core._EQ_;
var expr__14256 = cljs.core.type(x);
if(cljs.core.truth_((pred__14255.cljs$core$IFn$_invoke$arity$2 ? pred__14255.cljs$core$IFn$_invoke$arity$2(String,expr__14256) : pred__14255.call(null,String,expr__14256)))){
var s = x;
cljs.core._write(self__.writer,cljs.pprint.capitalize_string(s.toLowerCase(),cljs.core.deref(self__.last_was_whitespace_QMARK_)));

if((s.length > (0))){
return cljs.core.reset_BANG_(self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1)))));
} else {
return null;
}
} else {
if(cljs.core.truth_((pred__14255.cljs$core$IFn$_invoke$arity$2 ? pred__14255.cljs$core$IFn$_invoke$arity$2(Number,expr__14256) : pred__14255.call(null,Number,expr__14256)))){
var c = cljs.core.char$(x);
var mod_c = (cljs.core.truth_(cljs.core.deref(self__.last_was_whitespace_QMARK_))?clojure.string.upper_case(c):c);
cljs.core._write(self__.writer,mod_c);

return cljs.core.reset_BANG_(self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(c));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__14256)].join('')));
}
}
}));

(cljs.pprint.t_cljs$pprint14252.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$last_DASH_was_DASH_whitespace_QMARK_,cljs.core.cst$sym$meta14253], null);
}));

(cljs.pprint.t_cljs$pprint14252.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint14252.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint14252");

(cljs.pprint.t_cljs$pprint14252.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.pprint/t_cljs$pprint14252");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint14252.
 */
cljs.pprint.__GT_t_cljs$pprint14252 = (function cljs$pprint$capitalize_word_writer_$___GT_t_cljs$pprint14252(writer__$1,last_was_whitespace_QMARK___$1,meta14253){
return (new cljs.pprint.t_cljs$pprint14252(writer__$1,last_was_whitespace_QMARK___$1,meta14253));
});

}

return (new cljs.pprint.t_cljs$pprint14252(writer,last_was_whitespace_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, capitalizing the first word
 */
cljs.pprint.init_cap_writer = (function cljs$pprint$init_cap_writer(writer){
var capped = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint14258 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint14258 = (function (writer,capped,meta14259){
this.writer = writer;
this.capped = capped;
this.meta14259 = meta14259;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint14258.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14260,meta14259__$1){
var self__ = this;
var _14260__$1 = this;
return (new cljs.pprint.t_cljs$pprint14258(self__.writer,self__.capped,meta14259__$1));
}));

(cljs.pprint.t_cljs$pprint14258.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14260){
var self__ = this;
var _14260__$1 = this;
return self__.meta14259;
}));

(cljs.pprint.t_cljs$pprint14258.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
}));

(cljs.pprint.t_cljs$pprint14258.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__14261 = cljs.core._EQ_;
var expr__14262 = cljs.core.type(x);
if(cljs.core.truth_((pred__14261.cljs$core$IFn$_invoke$arity$2 ? pred__14261.cljs$core$IFn$_invoke$arity$2(String,expr__14262) : pred__14261.call(null,String,expr__14262)))){
var s = clojure.string.lower_case(x);
if(cljs.core.not(cljs.core.deref(self__.capped))){
var m = RegExp("\\S","g").exec(s);
var offset = (function (){var and__4115__auto__ = m;
if(cljs.core.truth_(and__4115__auto__)){
return m.index;
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(offset)){
cljs.core._write(self__.writer,[cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),offset),clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,offset)),clojure.string.lower_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(offset + (1))))].join(''));

return cljs.core.reset_BANG_(self__.capped,true);
} else {
return cljs.core._write(self__.writer,s);
}
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
}
} else {
if(cljs.core.truth_((pred__14261.cljs$core$IFn$_invoke$arity$2 ? pred__14261.cljs$core$IFn$_invoke$arity$2(Number,expr__14262) : pred__14261.call(null,Number,expr__14262)))){
var c = cljs.core.char$(x);
if(((cljs.core.not(cljs.core.deref(self__.capped))) && (goog.string.isUnicodeChar(c)))){
cljs.core.reset_BANG_(self__.capped,true);

return cljs.core._write(self__.writer,clojure.string.upper_case(c));
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(c));
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__14262)].join('')));
}
}
}));

(cljs.pprint.t_cljs$pprint14258.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$capped,cljs.core.cst$sym$meta14259], null);
}));

(cljs.pprint.t_cljs$pprint14258.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint14258.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint14258");

(cljs.pprint.t_cljs$pprint14258.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.pprint/t_cljs$pprint14258");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint14258.
 */
cljs.pprint.__GT_t_cljs$pprint14258 = (function cljs$pprint$init_cap_writer_$___GT_t_cljs$pprint14258(writer__$1,capped__$1,meta14259){
return (new cljs.pprint.t_cljs$pprint14258(writer__$1,capped__$1,meta14259));
});

}

return (new cljs.pprint.t_cljs$pprint14258(writer,capped,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.modify_case = (function cljs$pprint$modify_case(make_writer,params,navigator,offsets){
var clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var _STAR_out_STAR__orig_val__14264 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__14265 = (make_writer.cljs$core$IFn$_invoke$arity$1 ? make_writer.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_out_STAR_) : make_writer.call(null,cljs.core._STAR_out_STAR_));
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__14265);

try{return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__14264);
}});
/**
 * Returns the IWriter passed in wrapped in a pretty writer proxy, unless it's
 * already a pretty writer. Generally, it is unnecessary to call this function, since pprint,
 * write, and cl-format all call it if they need to. However if you want the state to be
 * preserved across calls, you will want to wrap them with this.
 * 
 * For example, when you want to generate column-aware output with multiple calls to cl-format,
 * do it like in this example:
 * 
 *  (defn print-table [aseq column-width]
 *    (binding [*out* (get-pretty-writer *out*)]
 *      (doseq [row aseq]
 *        (doseq [col row]
 *          (cl-format true "~4D~7,vT" col column-width))
 *        (prn))))
 * 
 * Now when you run:
 * 
 *  user> (print-table (map #(vector % (* % %) (* % % %)) (range 1 11)) 8)
 * 
 * It prints a table of squares and cubes for the numbers from 1 to 10:
 * 
 *     1      1       1
 *     2      4       8
 *     3      9      27
 *     4     16      64
 *     5     25     125
 *     6     36     216
 *     7     49     343
 *     8     64     512
 *     9     81     729
 *    10    100    1000
 */
cljs.pprint.get_pretty_writer = (function cljs$pprint$get_pretty_writer(writer){
if(cljs.core.truth_(cljs.pprint.pretty_writer_QMARK_(writer))){
return writer;
} else {
return cljs.pprint.pretty_writer(writer,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_);
}
});
/**
 * Make a newline if *out* is not already at the beginning of the line. If *out* is
 * not a pretty writer (which keeps track of columns), this function always outputs a newline.
 */
cljs.pprint.fresh_line = (function cljs$pprint$fresh_line(){
if((((!((cljs.core._STAR_out_STAR_ == null))))?(((((cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === cljs.core._STAR_out_STAR_.cljs$core$IDeref$))))?true:(((!cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_))){
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))))))){
return cljs.pprint.prn();
} else {
return null;
}
} else {
return cljs.pprint.prn();
}
});
cljs.pprint.absolute_tabulation = (function cljs$pprint$absolute_tabulation(params,navigator,offsets){
var colnum_14267 = cljs.core.cst$kw$colnum.cljs$core$IFn$_invoke$arity$1(params);
var colinc_14268 = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var current_14269 = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_))));
var space_count_14270 = (((current_14269 < colnum_14267))?(colnum_14267 - current_14269):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(colinc_14268,(0)))?(0):(colinc_14268 - cljs.core.rem((current_14269 - colnum_14267),colinc_14268))
));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_14270," "))], 0));

return navigator;
});
cljs.pprint.relative_tabulation = (function cljs$pprint$relative_tabulation(params,navigator,offsets){
var colrel_14271 = cljs.core.cst$kw$colnum.cljs$core$IFn$_invoke$arity$1(params);
var colinc_14272 = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var start_col_14273 = (colrel_14271 + cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))));
var offset_14274 = (((colinc_14272 > (0)))?cljs.core.rem(start_col_14273,colinc_14272):(0));
var space_count_14275 = (colrel_14271 + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),offset_14274))?(0):(colinc_14272 - offset_14274)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_14275," "))], 0));

return navigator;
});
cljs.pprint.format_logical_block = (function cljs$pprint$format_logical_block(params,navigator,offsets){
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause_count = cljs.core.count(clauses);
var prefix = (((clause_count > (1)))?cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.first(clauses)))):(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?"(":null));
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(((clause_count > (1)))?(1):(0)));
var suffix = (((clause_count > (2)))?cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(2))))):(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?")":null));
var vec__14276 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14276,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14276,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__14279_14283 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__14280_14284 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__14281_14285 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__14282_14286 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__14281_14285);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__14282_14286);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,suffix);

cljs.pprint.execute_sub_format(body,cljs.pprint.init_navigator(arg),cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__14280_14284);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__14279_14283);
}}


return navigator__$1;
});
cljs.pprint.set_indent = (function cljs$pprint$set_indent(params,navigator,offsets){
var relative_to = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$current:cljs.core.cst$kw$block);
cljs.pprint.pprint_indent(relative_to,cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params));

return navigator;
});
cljs.pprint.conditional_newline = (function cljs$pprint$conditional_newline(params,navigator,offsets){
var kind = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$mandatory:cljs.core.cst$kw$fill):(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$miser:cljs.core.cst$kw$linear));
cljs.pprint.pprint_newline(kind);

return navigator;
});
cljs.pprint.directive_table = cljs.core.PersistentHashMap.fromArrays(["A","S","D","B","O","X","R","P","C","F","E","G","$","%","&","|","~","\n","T","*","?","(",")","[",";","]","{","}","<",">","^","W","_","I"],[new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"A",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__14287_SHARP_,p2__14288_SHARP_,p3__14289_SHARP_){
return cljs.pprint.format_ascii(cljs.core.print_str,p1__14287_SHARP_,p2__14288_SHARP_,p3__14289_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"S",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__14290_SHARP_,p2__14291_SHARP_,p3__14292_SHARP_){
return cljs.pprint.format_ascii(cljs.core.pr_str,p1__14290_SHARP_,p2__14291_SHARP_,p3__14292_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"D",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__14293_SHARP_,p2__14294_SHARP_,p3__14295_SHARP_){
return cljs.pprint.format_integer((10),p1__14293_SHARP_,p2__14294_SHARP_,p3__14295_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"B",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__14296_SHARP_,p2__14297_SHARP_,p3__14298_SHARP_){
return cljs.pprint.format_integer((2),p1__14296_SHARP_,p2__14297_SHARP_,p3__14298_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"O",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__14299_SHARP_,p2__14300_SHARP_,p3__14301_SHARP_){
return cljs.pprint.format_integer((8),p1__14299_SHARP_,p2__14300_SHARP_,p3__14301_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"X",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__14302_SHARP_,p2__14303_SHARP_,p3__14304_SHARP_){
return cljs.pprint.format_integer((16),p1__14302_SHARP_,p2__14303_SHARP_,p3__14304_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"R",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(5),[cljs.core.cst$kw$base,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.first(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(params)))){
return (function (p1__14305_SHARP_,p2__14306_SHARP_,p3__14307_SHARP_){
return cljs.pprint.format_integer(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(p1__14305_SHARP_),p1__14305_SHARP_,p2__14306_SHARP_,p3__14307_SHARP_);
});
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4115__auto__;
}
})())){
return (function (p1__14308_SHARP_,p2__14309_SHARP_,p3__14310_SHARP_){
return cljs.pprint.format_old_roman(p1__14308_SHARP_,p2__14309_SHARP_,p3__14310_SHARP_);
});
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__14311_SHARP_,p2__14312_SHARP_,p3__14313_SHARP_){
return cljs.pprint.format_new_roman(p1__14311_SHARP_,p2__14312_SHARP_,p3__14313_SHARP_);
});
} else {
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__14314_SHARP_,p2__14315_SHARP_,p3__14316_SHARP_){
return cljs.pprint.format_ordinal_english(p1__14314_SHARP_,p2__14315_SHARP_,p3__14316_SHARP_);
});
} else {
return (function (p1__14317_SHARP_,p2__14318_SHARP_,p3__14319_SHARP_){
return cljs.pprint.format_cardinal_english(p1__14317_SHARP_,p2__14318_SHARP_,p3__14319_SHARP_);
});

}
}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"P",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var navigator__$1 = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.pprint.relative_reposition(navigator,(-1)):navigator);
var strs = (cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y","ies"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","s"], null));
var vec__14329 = cljs.pprint.next_arg(navigator__$1);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14329,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14329,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg,(1)))?cljs.core.first(strs):cljs.core.second(strs))], 0));

return navigator__$2;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"C",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$char_DASH_format,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.pretty_character;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.readable_character;
} else {
return cljs.pprint.plain_character;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"F",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(5),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.fixed_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"E",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(7),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$exponentchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.exponential_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"G",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(7),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$exponentchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.general_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"$",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),Number], null),cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.dollar_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"%",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__4613__auto___14347 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
var i_14348 = (0);
while(true){
if((i_14348 < n__4613__auto___14347)){
cljs.pprint.prn();

var G__14349 = (i_14348 + (1));
i_14348 = G__14349;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"&",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var cnt_14350 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
if((cnt_14350 > (0))){
cljs.pprint.fresh_line();
} else {
}

var n__4613__auto___14351 = (cnt_14350 - (1));
var i_14352 = (0);
while(true){
if((i_14352 < n__4613__auto___14351)){
cljs.pprint.prn();

var G__14353 = (i_14352 + (1));
i_14352 = G__14353;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"|",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__4613__auto___14354 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
var i_14355 = (0);
while(true){
if((i_14355 < n__4613__auto___14354)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\f"], 0));

var G__14356 = (i_14355 + (1));
i_14355 = G__14356;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"~",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params__$1);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,"~"))], 0));

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"\n",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))){
cljs.pprint.prn();
} else {
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"T",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(2),[cljs.core.cst$kw$colnum,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$at,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__14320_SHARP_,p2__14321_SHARP_,p3__14322_SHARP_){
return cljs.pprint.relative_tabulation(p1__14320_SHARP_,p2__14321_SHARP_,p3__14322_SHARP_);
});
} else {
return (function (p1__14323_SHARP_,p2__14324_SHARP_,p3__14325_SHARP_){
return cljs.pprint.absolute_tabulation(p1__14323_SHARP_,p2__14324_SHARP_,p3__14325_SHARP_);
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"*",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params__$1);
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))){
return cljs.pprint.absolute_reposition(navigator,n);
} else {
return cljs.pprint.relative_reposition(navigator,(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?(- n):n));
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"?",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (params__$1,navigator,offsets){
var vec__14332 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14332,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14332,(1),null);
return cljs.pprint.execute_sub_format(subformat,navigator__$1,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1));
});
} else {
return (function (params__$1,navigator,offsets){
var vec__14335 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14335,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14335,(1),null);
var vec__14338 = cljs.pprint.next_arg(navigator__$1);
var subargs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14338,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14338,(1),null);
var sub_navigator = cljs.pprint.init_navigator(subargs);
cljs.pprint.execute_sub_format(subformat,sub_navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1));

return navigator__$2;
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"(",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,")",cljs.core.cst$kw$allows_DASH_separator,null,cljs.core.cst$kw$else,null], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
var mod_case_writer = (cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4115__auto__;
}
})())?cljs.pprint.upcase_writer:(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.capitalize_word_writer:(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.init_cap_writer:cljs.pprint.downcase_writer
)));
return (function (p1__14326_SHARP_,p2__14327_SHARP_,p3__14328_SHARP_){
return cljs.pprint.modify_case(mod_case_writer,p1__14326_SHARP_,p2__14327_SHARP_,p3__14328_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,")",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"[",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$selector,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,"]",cljs.core.cst$kw$allows_DASH_separator,true,cljs.core.cst$kw$else,cljs.core.cst$kw$last], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.boolean_conditional;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.check_arg_conditional;
} else {
return cljs.pprint.choice_conditional;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,";",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(2),[cljs.core.cst$kw$min_DASH_remaining,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$max_DASH_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$separator,true], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"]",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"{",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$max_DASH_iterations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$right,"}",cljs.core.cst$kw$allows_DASH_separator,false], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4115__auto__;
}
})())){
return cljs.pprint.iterate_main_sublists;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_list_of_sublists;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_main_list;
} else {
return cljs.pprint.iterate_sublist;

}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"}",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"<",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,">",cljs.core.cst$kw$allows_DASH_separator,true,cljs.core.cst$kw$else,cljs.core.cst$kw$first], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.logical_block_or_justify;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,">",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"^",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(3),[cljs.core.cst$kw$arg1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$arg2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$arg3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var arg1 = cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(params__$1);
var arg2 = cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(params__$1);
var arg3 = cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(params__$1);
var exit = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.cst$kw$colon_DASH_up_DASH_arrow:cljs.core.cst$kw$up_DASH_arrow);
if(cljs.core.truth_((function (){var and__4115__auto__ = arg1;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = arg2;
if(cljs.core.truth_(and__4115__auto____$1)){
return arg3;
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())){
if((((arg1 <= arg2)) && ((arg2 <= arg3)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = arg1;
if(cljs.core.truth_(and__4115__auto__)){
return arg2;
} else {
return and__4115__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,arg2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_(arg1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if((cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1))):cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}

}
}
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"W",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
}
})())){
var bindings = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level,null,cljs.core.cst$kw$length,null], null):cljs.core.PersistentVector.EMPTY),(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pretty,true], null):cljs.core.PersistentVector.EMPTY));
return (function (params__$1,navigator,offsets){
var vec__14341 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14341,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14341,(1),null);
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.pprint.write,arg,bindings))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$up_DASH_arrow,navigator__$1], null);
} else {
return navigator__$1;
}
});
} else {
return (function (params__$1,navigator,offsets){
var vec__14344 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14344,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14344,(1),null);
if(cljs.core.truth_(cljs.pprint.write_out(arg))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$up_DASH_arrow,navigator__$1], null);
} else {
return navigator__$1;
}
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"_",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.conditional_newline;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"I",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.set_indent;
})], null)]);
cljs.pprint.param_pattern = /^([vV]|#|('.)|([+-]?\d+)|(?=,))/;
cljs.pprint.special_params = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$remaining_DASH_arg_DASH_count,null,cljs.core.cst$kw$parameter_DASH_from_DASH_args,null], null), null);
cljs.pprint.extract_param = (function cljs$pprint$extract_param(p__14357){
var vec__14358 = p__14357;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14358,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14358,(1),null);
var saw_comma = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14358,(2),null);
var m = (new RegExp(cljs.pprint.param_pattern.source,"g"));
var param = m.exec(s);
if(cljs.core.truth_(param)){
var token_str = cljs.core.first(param);
var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,m.lastIndex);
var new_offset = (offset + m.lastIndex);
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(",",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(remainder,(0)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder,new_offset,false], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,(1)),(new_offset + (1)),true], null)], null);
}
} else {
if(cljs.core.truth_(saw_comma)){
return cljs.pprint.format_error("Badly formed parameters in format directive",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset], null)], null);
}
}
});
cljs.pprint.extract_params = (function cljs$pprint$extract_params(s,offset){
return cljs.pprint.consume(cljs.pprint.extract_param,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,false], null));
});
/**
 * Translate the string representation of a param to the internalized
 *                                    representation
 */
cljs.pprint.translate_param = (function cljs$pprint$translate_param(p__14361){
var vec__14362 = p__14361;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14362,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14362,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(0)))?null:((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["V",null,"v",null], null), null),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0))))))?cljs.core.cst$kw$parameter_DASH_from_DASH_args:((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0))))))?cljs.core.cst$kw$remaining_DASH_arg_DASH_count:((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0))))))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(1)):parseInt(p,(10))
)))),offset], null);
});
cljs.pprint.flag_defs = new cljs.core.PersistentArrayMap(null, 2, [":",cljs.core.cst$kw$colon,"@",cljs.core.cst$kw$at], null);
cljs.pprint.extract_flags = (function cljs$pprint$extract_flags(s,offset){
return cljs.pprint.consume((function (p__14365){
var vec__14366 = p__14365;
var s__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14366,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14366,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14366,(2),null);
if(cljs.core.empty_QMARK_(s__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
} else {
var flag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.flag_defs,cljs.core.first(s__$1));
if(cljs.core.truth_(flag)){
if(cljs.core.contains_QMARK_(flags,flag)){
return cljs.pprint.format_error(["Flag \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(s__$1)),"\" appears more than once in a directive"].join(''),offset__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$1,(1)),(offset__$1 + (1)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(flags,flag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,offset__$1], null))], null)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.pprint.check_flags = (function cljs$pprint$check_flags(def,flags){
var allowed = cljs.core.cst$kw$flags.cljs$core$IFn$_invoke$arity$1(def);
if(cljs.core.truth_(((cljs.core.not(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(allowed)))?cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags):false))){
cljs.pprint.format_error(["\"@\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_(((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(allowed)))?cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags):false))){
cljs.pprint.format_error(["\":\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_(((cljs.core.not(cljs.core.cst$kw$both.cljs$core$IFn$_invoke$arity$1(allowed)))?(function (){var and__4115__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__4115__auto__;
}
})():false))){
return cljs.pprint.format_error(["Cannot combine \"@\" and \":\" flags for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),(function (){var x__4217__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags),(1));
var y__4218__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags),(1));
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})());
} else {
return null;
}
});
/**
 * Takes a directive definition and the list of actual parameters and
 * a map of flags and returns a map of the parameters and flags with defaults
 * filled in. We check to make sure that there are the right types and number
 * of parameters as well.
 */
cljs.pprint.map_params = (function cljs$pprint$map_params(def,params,flags,offset){
cljs.pprint.check_flags(def,flags);

if((cljs.core.count(params) > cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)))){
cljs.pprint.format_error(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"Too many parameters for directive \"~C\": ~D~:* ~[were~;was~:;were~] specified but only ~D~:* ~[are~;is~:;are~] allowed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def),cljs.core.count(params),cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def))], 0)),cljs.core.second(cljs.core.first(params)));
} else {
}

cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__14369_SHARP_,p2__14370_SHARP_){
var val = cljs.core.first(p1__14369_SHARP_);
if((!((((val == null)) || (cljs.core.contains_QMARK_(cljs.pprint.special_params,val)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(cljs.core.second(p2__14370_SHARP_)),cljs.core.type(val))))))){
return cljs.pprint.format_error(["Parameter ",cljs.core.name(cljs.core.first(p2__14370_SHARP_))," has bad type in directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(val))].join(''),cljs.core.second(p1__14369_SHARP_));
} else {
return null;
}
}),params,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)));

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse((function (){var iter__4529__auto__ = (function cljs$pprint$map_params_$_iter__14374(s__14375){
return (new cljs.core.LazySeq(null,(function (){
var s__14375__$1 = s__14375;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__14375__$1);
if(temp__5753__auto__){
var s__14375__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14375__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__14375__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__14377 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__14376 = (0);
while(true){
if((i__14376 < size__4528__auto__)){
var vec__14378 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__14376);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14378,(0),null);
var vec__14381 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14378,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14381,(0),null);
cljs.core.chunk_append(b__14377,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null));

var G__14390 = (i__14376 + (1));
i__14376 = G__14390;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14377),cljs$pprint$map_params_$_iter__14374(cljs.core.chunk_rest(s__14375__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14377),null);
}
} else {
var vec__14384 = cljs.core.first(s__14375__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14384,(0),null);
var vec__14387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14384,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14387,(0),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null),cljs$pprint$map_params_$_iter__14374(cljs.core.rest(s__14375__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def));
})())),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__14371_SHARP_,p2__14372_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,p1__14371_SHARP_,p2__14372_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__14373_SHARP_){
return cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__14373_SHARP_,(1)));
}),cljs.core.zipmap(cljs.core.keys(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)),params))),flags], 0));
});
cljs.pprint.compile_directive = (function cljs$pprint$compile_directive(s,offset){
var vec__14391 = cljs.pprint.extract_params(s,offset);
var raw_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14391,(0),null);
var vec__14394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14391,(1),null);
var rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14394,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14394,(1),null);
var vec__14397 = cljs.pprint.extract_flags(rest,offset__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14397,(0),null);
var vec__14400 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14397,(1),null);
var rest__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14400,(0),null);
var offset__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14400,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14400,(2),null);
var directive = cljs.core.first(rest__$1);
var def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.directive_table,clojure.string.upper_case(directive));
var params = (cljs.core.truth_(def)?cljs.pprint.map_params(def,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.translate_param,raw_params),flags,offset__$2):null);
if(cljs.core.not(directive)){
cljs.pprint.format_error("Format string ended in the middle of a directive",offset__$2);
} else {
}

if(cljs.core.not(def)){
cljs.pprint.format_error(["Directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(directive),"\" is undefined"].join(''),offset__$2);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive((function (){var fexpr__14403 = cljs.core.cst$kw$generator_DASH_fn.cljs$core$IFn$_invoke$arity$1(def);
return (fexpr__14403.cljs$core$IFn$_invoke$arity$2 ? fexpr__14403.cljs$core$IFn$_invoke$arity$2(params,offset__$2) : fexpr__14403.call(null,params,offset__$2));
})(),def,params,offset__$2,null,null,null)),(function (){var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(rest__$1,(1));
var offset__$3 = (offset__$2 + (1));
var trim_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def))) && (cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))));
var trim_count = ((trim_QMARK_)?cljs.pprint.prefix_count(remainder,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","\t"], null)):(0));
var remainder__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,trim_count);
var offset__$4 = (offset__$3 + trim_count);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder__$1,offset__$4], null);
})()], null);
});
cljs.pprint.compile_raw_string = (function cljs$pprint$compile_raw_string(s,offset){
return (new cljs.pprint.compiled_directive((function (_,a,___$1){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0));

return a;
}),null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$string,s], null),offset,null,null,null));
});
cljs.pprint.right_bracket = (function cljs$pprint$right_bracket(this$){
return cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.separator_QMARK_ = (function cljs$pprint$separator_QMARK_(this$){
return cljs.core.cst$kw$separator.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.else_separator_QMARK_ = (function cljs$pprint$else_separator_QMARK_(this$){
var and__4115__auto__ = cljs.core.cst$kw$separator.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$));
} else {
return and__4115__auto__;
}
});
cljs.pprint.process_bracket = (function cljs$pprint$process_bracket(this$,remainder){
var vec__14404 = cljs.pprint.collect_clauses(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$),remainder);
var subex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14404,(0),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14404,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),cljs.pprint.tuple_map(subex,cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$))], 0)),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$),null,null,null)),remainder__$1], null);
});
cljs.pprint.process_clause = (function cljs$pprint$process_clause(bracket_info,offset,remainder){
return cljs.pprint.consume((function (remainder__$1){
if(cljs.core.empty_QMARK_(remainder__$1)){
return cljs.pprint.format_error("No closing bracket found.",offset);
} else {
var this$ = cljs.core.first(remainder__$1);
var remainder__$2 = cljs.core.next(remainder__$1);
if(cljs.core.truth_(cljs.pprint.right_bracket(this$))){
return cljs.pprint.process_bracket(this$,remainder__$2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(bracket_info),cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$right_DASH_bracket,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),null,remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.else_separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$else,null,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$separator,null,null,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$2], null);

}
}
}
}
}
}),remainder);
});
cljs.pprint.collect_clauses = (function cljs$pprint$collect_clauses(bracket_info,offset,remainder){
return cljs.core.second(cljs.pprint.consume((function (p__14407){
var vec__14408 = p__14407;
var clause_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14408,(0),null);
var saw_else = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14408,(1),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14408,(2),null);
var vec__14411 = cljs.pprint.process_clause(bracket_info,offset,remainder__$1);
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14411,(0),null);
var vec__14414 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14411,(1),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14414,(0),null);
var right_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14414,(1),null);
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14414,(2),null);
var remainder__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14414,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$right_DASH_bracket)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(saw_else)?cljs.core.cst$kw$else:cljs.core.cst$kw$clauses),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),cljs.core.cst$kw$right_DASH_params,right_params])], 0)),remainder__$2], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$else)){
if(cljs.core.truth_(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(clause_map))){
return cljs.pprint.format_error("Two else clauses (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("An else clause (\"~:;\") is in a bracket type that doesn't support it.",offset);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$first,cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))) && (cljs.core.seq(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(clause_map))))){
return cljs.pprint.format_error("The else clause (\"~:;\") is only allowed in the first position for this directive.",offset);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$first,cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$else,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),cljs.core.cst$kw$else_DASH_params,else_params], null)], 0)),false,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),true,remainder__$2], null)], null);
}

}
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$separator)){
if(cljs.core.truth_(saw_else)){
return cljs.pprint.format_error("A plain clause (with \"~;\") follows an else clause (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(cljs.core.cst$kw$allows_DASH_separator.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("A separator (\"~;\") is in a bracket type that doesn't support it.",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),false,remainder__$2], null)], null);

}
}
} else {
return null;
}
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,cljs.core.PersistentVector.EMPTY], null),false,remainder], null)));
});
/**
 * Take a linearly compiled format and process the bracket directives to give it
 * the appropriate tree structure
 */
cljs.pprint.process_nesting = (function cljs$pprint$process_nesting(format){
return cljs.core.first(cljs.pprint.consume((function (remainder){
var this$ = cljs.core.first(remainder);
var remainder__$1 = cljs.core.next(remainder);
var bracket = cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(bracket))){
return cljs.pprint.process_bracket(this$,remainder__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$1], null);
}
}),format));
});
/**
 * Compiles format-str into a compiled format which can be used as an argument
 * to cl-format just like a plain format string. Use this function for improved
 * performance when you're using the same format string repeatedly
 */
cljs.pprint.compile_format = (function cljs$pprint$compile_format(format_str){
var _STAR_format_str_STAR__orig_val__14417 = cljs.pprint._STAR_format_str_STAR_;
var _STAR_format_str_STAR__temp_val__14418 = format_str;
(cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR__temp_val__14418);

try{return cljs.pprint.process_nesting(cljs.core.first(cljs.pprint.consume((function (p__14419){
var vec__14420 = p__14419;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14420,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14420,(1),null);
if(cljs.core.empty_QMARK_(s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,s], null);
} else {
var tilde = s.indexOf("~");
if((tilde < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(s,offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(offset + s.length)], null)], null);
} else {
if((tilde === (0))){
return cljs.pprint.compile_directive(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)),(offset + (1)));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),tilde),offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,tilde),(tilde + offset)], null)], null);

}
}
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format_str,(0)], null))));
}finally {(cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR__orig_val__14417);
}});
/**
 * determine whether a given compiled format has any directives that depend on the
 * column number or pretty printing
 */
cljs.pprint.needs_pretty = (function cljs$pprint$needs_pretty(format){
var format__$1 = format;
while(true){
if(cljs.core.empty_QMARK_(format__$1)){
return false;
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.cst$kw$pretty.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$flags.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1))));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core.some(cljs.pprint.needs_pretty,cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return cljs.core.some(cljs.pprint.needs_pretty,cljs.core.first(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
}
}
})())){
return true;
} else {
var G__14423 = cljs.core.next(format__$1);
format__$1 = G__14423;
continue;
}
}
break;
}
});
/**
 * Executes the format with the arguments.
 */
cljs.pprint.execute_format = (function cljs$pprint$execute_format(var_args){
var G__14425 = arguments.length;
switch (G__14425) {
case 3:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 = (function (stream,format,args){
var sb = (new goog.string.StringBuffer());
var real_stream = ((((cljs.core.not(stream)) || (stream === true)))?(new cljs.core.StringBufferWriter(sb)):stream);
var wrapped_stream = ((((cljs.pprint.needs_pretty(format)) && (cljs.core.not(cljs.pprint.pretty_writer_QMARK_(real_stream)))))?cljs.pprint.get_pretty_writer(real_stream):real_stream);
var _STAR_out_STAR__orig_val__14426 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__14427 = wrapped_stream;
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__14427);

try{try{cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(format,args);
}finally {if((!((real_stream === wrapped_stream)))){
cljs.core._flush(wrapped_stream);
} else {
}
}
if(cljs.core.not(stream)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
if(stream === true){
return cljs.core.string_print(cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
} else {
return null;

}
}
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__14426);
}}));

(cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2 = (function (format,args){
cljs.pprint.map_passing_context((function (element,context){
if(cljs.pprint.abort_QMARK_(context)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__14428 = cljs.pprint.realize_parameter_list(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14428,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14428,(1),null);
var vec__14431 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14431,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14431,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,cljs.core.cst$kw$base_DASH_args,args__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format);

return null;
}));

(cljs.pprint.execute_format.cljs$lang$maxFixedArity = 3);

cljs.pprint.cached_compile = cljs.core.memoize(cljs.pprint.compile_format);
/**
 * Installs a function as a new method of multimethod associated with dispatch-value. 
 */
cljs.pprint.use_method = (function cljs$pprint$use_method(multifn,dispatch_val,func){
return cljs.core._add_method(multifn,dispatch_val,func);
});
cljs.pprint.reader_macros = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$sym$quote,"'",cljs.core.cst$sym$var,"#'",cljs.core.cst$sym$clojure$core_SLASH_deref,"@",cljs.core.cst$sym$clojure$core_SLASH_unquote,"~",cljs.core.cst$sym$cljs$core_SLASH_deref,"@",cljs.core.cst$sym$cljs$core_SLASH_unquote,"~"], null);
cljs.pprint.pprint_reader_macro = (function cljs$pprint$pprint_reader_macro(alis){
var macro_char = (function (){var G__14435 = cljs.core.first(alis);
return (cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1(G__14435) : cljs.pprint.reader_macros.call(null,G__14435));
})();
if(cljs.core.truth_((function (){var and__4115__auto__ = macro_char;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(alis));
} else {
return and__4115__auto__;
}
})())){
cljs.core._write(cljs.core._STAR_out_STAR_,macro_char);

cljs.pprint.write_out(cljs.core.second(alis));

return true;
} else {
return null;
}
});
cljs.pprint.pprint_simple_list = (function cljs$pprint$pprint_simple_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__14436_14441 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__14437_14442 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__14438_14443 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__14439_14444 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__14438_14443);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__14439_14444);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var length_count14440_14445 = (0);
var alis_14446__$1 = cljs.core.seq(alis);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count14440_14445 < cljs.core._STAR_print_length_STAR_)))){
if(alis_14446__$1){
cljs.pprint.write_out(cljs.core.first(alis_14446__$1));

if(cljs.core.next(alis_14446__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__14447 = (length_count14440_14445 + (1));
var G__14448 = cljs.core.next(alis_14446__$1);
length_count14440_14445 = G__14447;
alis_14446__$1 = G__14448;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__14437_14442);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__14436_14441);
}}

return null;
});
cljs.pprint.pprint_list = (function cljs$pprint$pprint_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
return cljs.pprint.pprint_simple_list(alis);
} else {
return null;
}
});
cljs.pprint.pprint_vector = (function cljs$pprint$pprint_vector(avec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__14449_14454 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__14450_14455 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__14451_14456 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__14452_14457 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__14451_14456);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__14452_14457);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count14453_14458 = (0);
var aseq_14459 = cljs.core.seq(avec);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count14453_14458 < cljs.core._STAR_print_length_STAR_)))){
if(aseq_14459){
cljs.pprint.write_out(cljs.core.first(aseq_14459));

if(cljs.core.next(aseq_14459)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__14460 = (length_count14453_14458 + (1));
var G__14461 = cljs.core.next(aseq_14459);
length_count14453_14458 = G__14460;
aseq_14459 = G__14461;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__14450_14455);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__14449_14454);
}}

return null;
});
cljs.pprint.pprint_array = (function (){var format_in__13457__auto__ = "~<[~;~@{~w~^, ~:_~}~;]~:>";
var cf__13458__auto__ = ((typeof format_in__13457__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__13457__auto__) : cljs.pprint.cached_compile.call(null,format_in__13457__auto__)):format_in__13457__auto__);
return (function() { 
var G__14462__delegate = function (args__13459__auto__){
var navigator__13460__auto__ = cljs.pprint.init_navigator(args__13459__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__13458__auto__,navigator__13460__auto__);
};
var G__14462 = function (var_args){
var args__13459__auto__ = null;
if (arguments.length > 0) {
var G__14463__i = 0, G__14463__a = new Array(arguments.length -  0);
while (G__14463__i < G__14463__a.length) {G__14463__a[G__14463__i] = arguments[G__14463__i + 0]; ++G__14463__i;}
  args__13459__auto__ = new cljs.core.IndexedSeq(G__14463__a,0,null);
} 
return G__14462__delegate.call(this,args__13459__auto__);};
G__14462.cljs$lang$maxFixedArity = 0;
G__14462.cljs$lang$applyTo = (function (arglist__14464){
var args__13459__auto__ = cljs.core.seq(arglist__14464);
return G__14462__delegate(args__13459__auto__);
});
G__14462.cljs$core$IFn$_invoke$arity$variadic = G__14462__delegate;
return G__14462;
})()
;
})();
cljs.pprint.pprint_map = (function cljs$pprint$pprint_map(amap){
var vec__14465 = (((!(cljs.core.record_QMARK_(amap))))?(function (){var fexpr__14468 = new cljs.core.Var(function(){return cljs.core.lift_ns;},cljs.core.cst$sym$cljs$core_SLASH_lift_DASH_ns,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$core,cljs.core.cst$sym$lift_DASH_ns,"cljs/core.cljs",15,1,10307,10307,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$m], null)),"Returns [lifted-ns lifted-map] or nil if m can't be lifted.",(cljs.core.truth_(cljs.core.lift_ns)?cljs.core.lift_ns.cljs$lang$test:null)]));
return (fexpr__14468.cljs$core$IFn$_invoke$arity$1 ? fexpr__14468.cljs$core$IFn$_invoke$arity$1(amap) : fexpr__14468.call(null,amap));
})():null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14465,(0),null);
var lift_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14465,(1),null);
var amap__$1 = (function (){var or__4126__auto__ = lift_map;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return amap;
}
})();
var prefix = (cljs.core.truth_(ns)?["#:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"{"].join(''):"{");
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__14469_14478 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__14470_14479 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__14471_14480 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__14472_14481 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__14471_14480);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__14472_14481);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,"}");

var length_count14473_14482 = (0);
var aseq_14483 = cljs.core.seq(amap__$1);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count14473_14482 < cljs.core._STAR_print_length_STAR_)))){
if(aseq_14483){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__14474_14484 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__14475_14485 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__14476_14486 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__14477_14487 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__14476_14486);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__14477_14487);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);

cljs.pprint.write_out(cljs.core.ffirst(aseq_14483));

cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

(cljs.pprint._STAR_current_length_STAR_ = (0));

cljs.pprint.write_out(cljs.core.fnext(cljs.core.first(aseq_14483)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__14475_14485);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__14474_14484);
}}


if(cljs.core.next(aseq_14483)){
cljs.core._write(cljs.core._STAR_out_STAR_,", ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__14488 = (length_count14473_14482 + (1));
var G__14489 = cljs.core.next(aseq_14483);
length_count14473_14482 = G__14488;
aseq_14483 = G__14489;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__14470_14479);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__14469_14478);
}}

return null;
});
cljs.pprint.pprint_simple_default = (function cljs$pprint$pprint_simple_default(obj){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0)));
});
cljs.pprint.pprint_set = (function (){var format_in__13457__auto__ = "~<#{~;~@{~w~^ ~:_~}~;}~:>";
var cf__13458__auto__ = ((typeof format_in__13457__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__13457__auto__) : cljs.pprint.cached_compile.call(null,format_in__13457__auto__)):format_in__13457__auto__);
return (function() { 
var G__14490__delegate = function (args__13459__auto__){
var navigator__13460__auto__ = cljs.pprint.init_navigator(args__13459__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__13458__auto__,navigator__13460__auto__);
};
var G__14490 = function (var_args){
var args__13459__auto__ = null;
if (arguments.length > 0) {
var G__14491__i = 0, G__14491__a = new Array(arguments.length -  0);
while (G__14491__i < G__14491__a.length) {G__14491__a[G__14491__i] = arguments[G__14491__i + 0]; ++G__14491__i;}
  args__13459__auto__ = new cljs.core.IndexedSeq(G__14491__a,0,null);
} 
return G__14490__delegate.call(this,args__13459__auto__);};
G__14490.cljs$lang$maxFixedArity = 0;
G__14490.cljs$lang$applyTo = (function (arglist__14492){
var args__13459__auto__ = cljs.core.seq(arglist__14492);
return G__14490__delegate(args__13459__auto__);
});
G__14490.cljs$core$IFn$_invoke$arity$variadic = G__14490__delegate;
return G__14490;
})()
;
})();
cljs.pprint.type_map = new cljs.core.PersistentArrayMap(null, 2, ["core$future_call","Future","core$promise","Promise"], null);
/**
 * Map ugly type names to something simpler
 */
cljs.pprint.map_ref_type = (function cljs$pprint$map_ref_type(name){
var or__4126__auto__ = (function (){var temp__5753__auto__ = cljs.core.re_find(/^[^$]+\$[^$]+/,name);
if(cljs.core.truth_(temp__5753__auto__)){
var match = temp__5753__auto__;
return (cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1(match) : cljs.pprint.type_map.call(null,match));
} else {
return null;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return name;
}
});
cljs.pprint.pprint_ideref = (function cljs$pprint$pprint_ideref(o){
var prefix = ["#<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.map_ref_type(cljs.core.type(o).name)),"@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.getUid(o)),": "].join('');
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__14493_14500 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__14494_14501 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__14495_14502 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__14496_14503 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__14495_14502);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__14496_14503);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,">");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(- (((prefix).length) - (2))));

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

cljs.pprint.write_out((((((((!((o == null))))?(((((o.cljs$lang$protocol_mask$partition1$ & (1))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IPending$))))?true:(((!o.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o)))?(!(cljs.core._realized_QMARK_(o))):false))?cljs.core.cst$kw$not_DASH_delivered:cljs.core.deref(o)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__14494_14501);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__14493_14500);
}}

return null;
});
cljs.pprint.pprint_pqueue = (function (){var format_in__13457__auto__ = "~<<-(~;~@{~w~^ ~_~}~;)-<~:>";
var cf__13458__auto__ = ((typeof format_in__13457__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__13457__auto__) : cljs.pprint.cached_compile.call(null,format_in__13457__auto__)):format_in__13457__auto__);
return (function() { 
var G__14504__delegate = function (args__13459__auto__){
var navigator__13460__auto__ = cljs.pprint.init_navigator(args__13459__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__13458__auto__,navigator__13460__auto__);
};
var G__14504 = function (var_args){
var args__13459__auto__ = null;
if (arguments.length > 0) {
var G__14505__i = 0, G__14505__a = new Array(arguments.length -  0);
while (G__14505__i < G__14505__a.length) {G__14505__a[G__14505__i] = arguments[G__14505__i + 0]; ++G__14505__i;}
  args__13459__auto__ = new cljs.core.IndexedSeq(G__14505__a,0,null);
} 
return G__14504__delegate.call(this,args__13459__auto__);};
G__14504.cljs$lang$maxFixedArity = 0;
G__14504.cljs$lang$applyTo = (function (arglist__14506){
var args__13459__auto__ = cljs.core.seq(arglist__14506);
return G__14504__delegate(args__13459__auto__);
});
G__14504.cljs$core$IFn$_invoke$arity$variadic = G__14504__delegate;
return G__14504;
})()
;
})();
cljs.pprint.type_dispatcher = (function cljs$pprint$type_dispatcher(obj){
if((obj instanceof cljs.core.PersistentQueue)){
return cljs.core.cst$kw$queue;
} else {
if((((!((obj == null))))?(((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IDeref$))))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj))){
return cljs.core.cst$kw$deref;
} else {
if((obj instanceof cljs.core.Symbol)){
return cljs.core.cst$kw$symbol;
} else {
if(cljs.core.seq_QMARK_(obj)){
return cljs.core.cst$kw$list;
} else {
if(cljs.core.map_QMARK_(obj)){
return cljs.core.cst$kw$map;
} else {
if(cljs.core.vector_QMARK_(obj)){
return cljs.core.cst$kw$vector;
} else {
if(cljs.core.set_QMARK_(obj)){
return cljs.core.cst$kw$set;
} else {
if((obj == null)){
return null;
} else {
return cljs.core.cst$kw$default;

}
}
}
}
}
}
}
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.simple_dispatch !== 'undefined')){
} else {
/**
 * The pretty print dispatch function for simple data structure format.
 */
cljs.pprint.simple_dispatch = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__14508 = cljs.core.get_global_hierarchy;
return (fexpr__14508.cljs$core$IFn$_invoke$arity$0 ? fexpr__14508.cljs$core$IFn$_invoke$arity$0() : fexpr__14508.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","simple-dispatch"),cljs.pprint.type_dispatcher,cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$list,cljs.pprint.pprint_list);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$vector,cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$map,cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$set,cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,null,(function (){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)));
}));
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$default,cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
/**
 * Figure out which kind of brackets to use
 */
cljs.pprint.brackets = (function cljs$pprint$brackets(form){
if(cljs.core.vector_QMARK_(form)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null);
}
});
/**
 * Pretty print a single reference (import, use, etc.) from a namespace decl
 */
cljs.pprint.pprint_ns_reference = (function cljs$pprint$pprint_ns_reference(reference){
if(cljs.core.sequential_QMARK_(reference)){
var vec__14509 = cljs.pprint.brackets(reference);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14509,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14509,(1),null);
var vec__14512 = reference;
var seq__14513 = cljs.core.seq(vec__14512);
var first__14514 = cljs.core.first(seq__14513);
var seq__14513__$1 = cljs.core.next(seq__14513);
var keyw = first__14514;
var args = seq__14513__$1;
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__14515_14535 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__14516_14536 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__14517_14537 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__14518_14538 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__14517_14537);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__14518_14538);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start,null,end);

var fexpr__14519_14539 = (function (){var format_in__13457__auto__ = "~w~:i";
var cf__13458__auto__ = ((typeof format_in__13457__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__13457__auto__) : cljs.pprint.cached_compile.call(null,format_in__13457__auto__)):format_in__13457__auto__);
return (function() { 
var G__14540__delegate = function (args__13459__auto__){
var navigator__13460__auto__ = cljs.pprint.init_navigator(args__13459__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__13458__auto__,navigator__13460__auto__);
};
var G__14540 = function (var_args){
var args__13459__auto__ = null;
if (arguments.length > 0) {
var G__14541__i = 0, G__14541__a = new Array(arguments.length -  0);
while (G__14541__i < G__14541__a.length) {G__14541__a[G__14541__i] = arguments[G__14541__i + 0]; ++G__14541__i;}
  args__13459__auto__ = new cljs.core.IndexedSeq(G__14541__a,0,null);
} 
return G__14540__delegate.call(this,args__13459__auto__);};
G__14540.cljs$lang$maxFixedArity = 0;
G__14540.cljs$lang$applyTo = (function (arglist__14542){
var args__13459__auto__ = cljs.core.seq(arglist__14542);
return G__14540__delegate(args__13459__auto__);
});
G__14540.cljs$core$IFn$_invoke$arity$variadic = G__14540__delegate;
return G__14540;
})()
;
})();
(fexpr__14519_14539.cljs$core$IFn$_invoke$arity$1 ? fexpr__14519_14539.cljs$core$IFn$_invoke$arity$1(keyw) : fexpr__14519_14539.call(null,keyw));

var args_14543__$1 = args;
while(true){
if(cljs.core.seq(args_14543__$1)){
var fexpr__14520_14544 = (function (){var format_in__13457__auto__ = " ";
var cf__13458__auto__ = ((typeof format_in__13457__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__13457__auto__) : cljs.pprint.cached_compile.call(null,format_in__13457__auto__)):format_in__13457__auto__);
return ((function (args_14543__$1,format_in__13457__auto__,cf__13458__auto__,_STAR_current_level_STAR__orig_val__14515_14535,_STAR_current_length_STAR__orig_val__14516_14536,_STAR_current_level_STAR__temp_val__14517_14537,_STAR_current_length_STAR__temp_val__14518_14538,vec__14509,start,end,vec__14512,seq__14513,first__14514,seq__14513__$1,keyw,args){
return (function() { 
var G__14545__delegate = function (args__13459__auto__){
var navigator__13460__auto__ = cljs.pprint.init_navigator(args__13459__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__13458__auto__,navigator__13460__auto__);
};
var G__14545 = function (var_args){
var args__13459__auto__ = null;
if (arguments.length > 0) {
var G__14546__i = 0, G__14546__a = new Array(arguments.length -  0);
while (G__14546__i < G__14546__a.length) {G__14546__a[G__14546__i] = arguments[G__14546__i + 0]; ++G__14546__i;}
  args__13459__auto__ = new cljs.core.IndexedSeq(G__14546__a,0,null);
} 
return G__14545__delegate.call(this,args__13459__auto__);};
G__14545.cljs$lang$maxFixedArity = 0;
G__14545.cljs$lang$applyTo = (function (arglist__14547){
var args__13459__auto__ = cljs.core.seq(arglist__14547);
return G__14545__delegate(args__13459__auto__);
});
G__14545.cljs$core$IFn$_invoke$arity$variadic = G__14545__delegate;
return G__14545;
})()
;
;})(args_14543__$1,format_in__13457__auto__,cf__13458__auto__,_STAR_current_level_STAR__orig_val__14515_14535,_STAR_current_length_STAR__orig_val__14516_14536,_STAR_current_level_STAR__temp_val__14517_14537,_STAR_current_length_STAR__temp_val__14518_14538,vec__14509,start,end,vec__14512,seq__14513,first__14514,seq__14513__$1,keyw,args))
})();
(fexpr__14520_14544.cljs$core$IFn$_invoke$arity$0 ? fexpr__14520_14544.cljs$core$IFn$_invoke$arity$0() : fexpr__14520_14544.call(null));

var arg_14548 = cljs.core.first(args_14543__$1);
if(cljs.core.sequential_QMARK_(arg_14548)){
var vec__14521_14549 = cljs.pprint.brackets(arg_14548);
var start_14550__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14521_14549,(0),null);
var end_14551__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14521_14549,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__14524_14552 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__14525_14553 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__14526_14554 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__14527_14555 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__14526_14554);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__14527_14555);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start_14550__$1,null,end_14551__$1);

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(arg_14548),(3))) && ((cljs.core.second(arg_14548) instanceof cljs.core.Keyword)))){
var vec__14528_14556 = arg_14548;
var ns_14557 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14528_14556,(0),null);
var kw_14558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14528_14556,(1),null);
var lis_14559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14528_14556,(2),null);
var fexpr__14531_14560 = (function (){var format_in__13457__auto__ = "~w ~w ";
var cf__13458__auto__ = ((typeof format_in__13457__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__13457__auto__) : cljs.pprint.cached_compile.call(null,format_in__13457__auto__)):format_in__13457__auto__);
return ((function (args_14543__$1,format_in__13457__auto__,cf__13458__auto__,vec__14528_14556,ns_14557,kw_14558,lis_14559,_STAR_current_level_STAR__orig_val__14524_14552,_STAR_current_length_STAR__orig_val__14525_14553,_STAR_current_level_STAR__temp_val__14526_14554,_STAR_current_length_STAR__temp_val__14527_14555,vec__14521_14549,start_14550__$1,end_14551__$1,arg_14548,_STAR_current_level_STAR__orig_val__14515_14535,_STAR_current_length_STAR__orig_val__14516_14536,_STAR_current_level_STAR__temp_val__14517_14537,_STAR_current_length_STAR__temp_val__14518_14538,vec__14509,start,end,vec__14512,seq__14513,first__14514,seq__14513__$1,keyw,args){
return (function() { 
var G__14561__delegate = function (args__13459__auto__){
var navigator__13460__auto__ = cljs.pprint.init_navigator(args__13459__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__13458__auto__,navigator__13460__auto__);
};
var G__14561 = function (var_args){
var args__13459__auto__ = null;
if (arguments.length > 0) {
var G__14562__i = 0, G__14562__a = new Array(arguments.length -  0);
while (G__14562__i < G__14562__a.length) {G__14562__a[G__14562__i] = arguments[G__14562__i + 0]; ++G__14562__i;}
  args__13459__auto__ = new cljs.core.IndexedSeq(G__14562__a,0,null);
} 
return G__14561__delegate.call(this,args__13459__auto__);};
G__14561.cljs$lang$maxFixedArity = 0;
G__14561.cljs$lang$applyTo = (function (arglist__14563){
var args__13459__auto__ = cljs.core.seq(arglist__14563);
return G__14561__delegate(args__13459__auto__);
});
G__14561.cljs$core$IFn$_invoke$arity$variadic = G__14561__delegate;
return G__14561;
})()
;
;})(args_14543__$1,format_in__13457__auto__,cf__13458__auto__,vec__14528_14556,ns_14557,kw_14558,lis_14559,_STAR_current_level_STAR__orig_val__14524_14552,_STAR_current_length_STAR__orig_val__14525_14553,_STAR_current_level_STAR__temp_val__14526_14554,_STAR_current_length_STAR__temp_val__14527_14555,vec__14521_14549,start_14550__$1,end_14551__$1,arg_14548,_STAR_current_level_STAR__orig_val__14515_14535,_STAR_current_length_STAR__orig_val__14516_14536,_STAR_current_level_STAR__temp_val__14517_14537,_STAR_current_length_STAR__temp_val__14518_14538,vec__14509,start,end,vec__14512,seq__14513,first__14514,seq__14513__$1,keyw,args))
})();
(fexpr__14531_14560.cljs$core$IFn$_invoke$arity$2 ? fexpr__14531_14560.cljs$core$IFn$_invoke$arity$2(ns_14557,kw_14558) : fexpr__14531_14560.call(null,ns_14557,kw_14558));

if(cljs.core.sequential_QMARK_(lis_14559)){
var fexpr__14532_14564 = (function (){var format_in__13457__auto__ = ((cljs.core.vector_QMARK_(lis_14559))?"~<[~;~@{~w~^ ~:_~}~;]~:>":"~<(~;~@{~w~^ ~:_~}~;)~:>");
var cf__13458__auto__ = ((typeof format_in__13457__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__13457__auto__) : cljs.pprint.cached_compile.call(null,format_in__13457__auto__)):format_in__13457__auto__);
return ((function (args_14543__$1,format_in__13457__auto__,cf__13458__auto__,vec__14528_14556,ns_14557,kw_14558,lis_14559,_STAR_current_level_STAR__orig_val__14524_14552,_STAR_current_length_STAR__orig_val__14525_14553,_STAR_current_level_STAR__temp_val__14526_14554,_STAR_current_length_STAR__temp_val__14527_14555,vec__14521_14549,start_14550__$1,end_14551__$1,arg_14548,_STAR_current_level_STAR__orig_val__14515_14535,_STAR_current_length_STAR__orig_val__14516_14536,_STAR_current_level_STAR__temp_val__14517_14537,_STAR_current_length_STAR__temp_val__14518_14538,vec__14509,start,end,vec__14512,seq__14513,first__14514,seq__14513__$1,keyw,args){
return (function() { 
var G__14565__delegate = function (args__13459__auto__){
var navigator__13460__auto__ = cljs.pprint.init_navigator(args__13459__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__13458__auto__,navigator__13460__auto__);
};
var G__14565 = function (var_args){
var args__13459__auto__ = null;
if (arguments.length > 0) {
var G__14566__i = 0, G__14566__a = new Array(arguments.length -  0);
while (G__14566__i < G__14566__a.length) {G__14566__a[G__14566__i] = arguments[G__14566__i + 0]; ++G__14566__i;}
  args__13459__auto__ = new cljs.core.IndexedSeq(G__14566__a,0,null);
} 
return G__14565__delegate.call(this,args__13459__auto__);};
G__14565.cljs$lang$maxFixedArity = 0;
G__14565.cljs$lang$applyTo = (function (arglist__14567){
var args__13459__auto__ = cljs.core.seq(arglist__14567);
return G__14565__delegate(args__13459__auto__);
});
G__14565.cljs$core$IFn$_invoke$arity$variadic = G__14565__delegate;
return G__14565;
})()
;
;})(args_14543__$1,format_in__13457__auto__,cf__13458__auto__,vec__14528_14556,ns_14557,kw_14558,lis_14559,_STAR_current_level_STAR__orig_val__14524_14552,_STAR_current_length_STAR__orig_val__14525_14553,_STAR_current_level_STAR__temp_val__14526_14554,_STAR_current_length_STAR__temp_val__14527_14555,vec__14521_14549,start_14550__$1,end_14551__$1,arg_14548,_STAR_current_level_STAR__orig_val__14515_14535,_STAR_current_length_STAR__orig_val__14516_14536,_STAR_current_level_STAR__temp_val__14517_14537,_STAR_current_length_STAR__temp_val__14518_14538,vec__14509,start,end,vec__14512,seq__14513,first__14514,seq__14513__$1,keyw,args))
})();
(fexpr__14532_14564.cljs$core$IFn$_invoke$arity$1 ? fexpr__14532_14564.cljs$core$IFn$_invoke$arity$1(lis_14559) : fexpr__14532_14564.call(null,lis_14559));
} else {
cljs.pprint.write_out(lis_14559);
}
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__13457__auto__ = "~w ~:i~@{~w~^ ~:_~}";
var cf__13458__auto__ = ((typeof format_in__13457__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__13457__auto__) : cljs.pprint.cached_compile.call(null,format_in__13457__auto__)):format_in__13457__auto__);
return ((function (args_14543__$1,format_in__13457__auto__,cf__13458__auto__,_STAR_current_level_STAR__orig_val__14524_14552,_STAR_current_length_STAR__orig_val__14525_14553,_STAR_current_level_STAR__temp_val__14526_14554,_STAR_current_length_STAR__temp_val__14527_14555,vec__14521_14549,start_14550__$1,end_14551__$1,arg_14548,_STAR_current_level_STAR__orig_val__14515_14535,_STAR_current_length_STAR__orig_val__14516_14536,_STAR_current_level_STAR__temp_val__14517_14537,_STAR_current_length_STAR__temp_val__14518_14538,vec__14509,start,end,vec__14512,seq__14513,first__14514,seq__14513__$1,keyw,args){
return (function() { 
var G__14568__delegate = function (args__13459__auto__){
var navigator__13460__auto__ = cljs.pprint.init_navigator(args__13459__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__13458__auto__,navigator__13460__auto__);
};
var G__14568 = function (var_args){
var args__13459__auto__ = null;
if (arguments.length > 0) {
var G__14569__i = 0, G__14569__a = new Array(arguments.length -  0);
while (G__14569__i < G__14569__a.length) {G__14569__a[G__14569__i] = arguments[G__14569__i + 0]; ++G__14569__i;}
  args__13459__auto__ = new cljs.core.IndexedSeq(G__14569__a,0,null);
} 
return G__14568__delegate.call(this,args__13459__auto__);};
G__14568.cljs$lang$maxFixedArity = 0;
G__14568.cljs$lang$applyTo = (function (arglist__14570){
var args__13459__auto__ = cljs.core.seq(arglist__14570);
return G__14568__delegate(args__13459__auto__);
});
G__14568.cljs$core$IFn$_invoke$arity$variadic = G__14568__delegate;
return G__14568;
})()
;
;})(args_14543__$1,format_in__13457__auto__,cf__13458__auto__,_STAR_current_level_STAR__orig_val__14524_14552,_STAR_current_length_STAR__orig_val__14525_14553,_STAR_current_level_STAR__temp_val__14526_14554,_STAR_current_length_STAR__temp_val__14527_14555,vec__14521_14549,start_14550__$1,end_14551__$1,arg_14548,_STAR_current_level_STAR__orig_val__14515_14535,_STAR_current_length_STAR__orig_val__14516_14536,_STAR_current_level_STAR__temp_val__14517_14537,_STAR_current_length_STAR__temp_val__14518_14538,vec__14509,start,end,vec__14512,seq__14513,first__14514,seq__14513__$1,keyw,args))
})(),arg_14548);
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__14525_14553);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__14524_14552);
}}


if(cljs.core.next(args_14543__$1)){
var fexpr__14533_14571 = (function (){var format_in__13457__auto__ = "~_";
var cf__13458__auto__ = ((typeof format_in__13457__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__13457__auto__) : cljs.pprint.cached_compile.call(null,format_in__13457__auto__)):format_in__13457__auto__);
return ((function (args_14543__$1,format_in__13457__auto__,cf__13458__auto__,vec__14521_14549,start_14550__$1,end_14551__$1,arg_14548,_STAR_current_level_STAR__orig_val__14515_14535,_STAR_current_length_STAR__orig_val__14516_14536,_STAR_current_level_STAR__temp_val__14517_14537,_STAR_current_length_STAR__temp_val__14518_14538,vec__14509,start,end,vec__14512,seq__14513,first__14514,seq__14513__$1,keyw,args){
return (function() { 
var G__14572__delegate = function (args__13459__auto__){
var navigator__13460__auto__ = cljs.pprint.init_navigator(args__13459__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__13458__auto__,navigator__13460__auto__);
};
var G__14572 = function (var_args){
var args__13459__auto__ = null;
if (arguments.length > 0) {
var G__14573__i = 0, G__14573__a = new Array(arguments.length -  0);
while (G__14573__i < G__14573__a.length) {G__14573__a[G__14573__i] = arguments[G__14573__i + 0]; ++G__14573__i;}
  args__13459__auto__ = new cljs.core.IndexedSeq(G__14573__a,0,null);
} 
return G__14572__delegate.call(this,args__13459__auto__);};
G__14572.cljs$lang$maxFixedArity = 0;
G__14572.cljs$lang$applyTo = (function (arglist__14574){
var args__13459__auto__ = cljs.core.seq(arglist__14574);
return G__14572__delegate(args__13459__auto__);
});
G__14572.cljs$core$IFn$_invoke$arity$variadic = G__14572__delegate;
return G__14572;
})()
;
;})(args_14543__$1,format_in__13457__auto__,cf__13458__auto__,vec__14521_14549,start_14550__$1,end_14551__$1,arg_14548,_STAR_current_level_STAR__orig_val__14515_14535,_STAR_current_length_STAR__orig_val__14516_14536,_STAR_current_level_STAR__temp_val__14517_14537,_STAR_current_length_STAR__temp_val__14518_14538,vec__14509,start,end,vec__14512,seq__14513,first__14514,seq__14513__$1,keyw,args))
})();
(fexpr__14533_14571.cljs$core$IFn$_invoke$arity$0 ? fexpr__14533_14571.cljs$core$IFn$_invoke$arity$0() : fexpr__14533_14571.call(null));
} else {
}
} else {
cljs.pprint.write_out(arg_14548);

if(cljs.core.next(args_14543__$1)){
var fexpr__14534_14575 = (function (){var format_in__13457__auto__ = "~:_";
var cf__13458__auto__ = ((typeof format_in__13457__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__13457__auto__) : cljs.pprint.cached_compile.call(null,format_in__13457__auto__)):format_in__13457__auto__);
return ((function (args_14543__$1,format_in__13457__auto__,cf__13458__auto__,arg_14548,_STAR_current_level_STAR__orig_val__14515_14535,_STAR_current_length_STAR__orig_val__14516_14536,_STAR_current_level_STAR__temp_val__14517_14537,_STAR_current_length_STAR__temp_val__14518_14538,vec__14509,start,end,vec__14512,seq__14513,first__14514,seq__14513__$1,keyw,args){
return (function() { 
var G__14576__delegate = function (args__13459__auto__){
var navigator__13460__auto__ = cljs.pprint.init_navigator(args__13459__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__13458__auto__,navigator__13460__auto__);
};
var G__14576 = function (var_args){
var args__13459__auto__ = null;
if (arguments.length > 0) {
var G__14577__i = 0, G__14577__a = new Array(arguments.length -  0);
while (G__14577__i < G__14577__a.length) {G__14577__a[G__14577__i] = arguments[G__14577__i + 0]; ++G__14577__i;}
  args__13459__auto__ = new cljs.core.IndexedSeq(G__14577__a,0,null);
} 
return G__14576__delegate.call(this,args__13459__auto__);};
G__14576.cljs$lang$maxFixedArity = 0;
G__14576.cljs$lang$applyTo = (function (arglist__14578){
var args__13459__auto__ = cljs.core.seq(arglist__14578);
return G__14576__delegate(args__13459__auto__);
});
G__14576.cljs$core$IFn$_invoke$arity$variadic = G__14576__delegate;
return G__14576;
})()
;
;})(args_14543__$1,format_in__13457__auto__,cf__13458__auto__,arg_14548,_STAR_current_level_STAR__orig_val__14515_14535,_STAR_current_length_STAR__orig_val__14516_14536,_STAR_current_level_STAR__temp_val__14517_14537,_STAR_current_length_STAR__temp_val__14518_14538,vec__14509,start,end,vec__14512,seq__14513,first__14514,seq__14513__$1,keyw,args))
})();
(fexpr__14534_14575.cljs$core$IFn$_invoke$arity$0 ? fexpr__14534_14575.cljs$core$IFn$_invoke$arity$0() : fexpr__14534_14575.call(null));
} else {
}
}

var G__14579 = cljs.core.next(args_14543__$1);
args_14543__$1 = G__14579;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__14516_14536);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__14515_14535);
}}

return null;
} else {
return cljs.pprint.write_out(reference);
}
});
/**
 * The pretty print dispatch chunk for the ns macro
 */
cljs.pprint.pprint_ns = (function cljs$pprint$pprint_ns(alis){
if(cljs.core.next(alis)){
var vec__14580 = alis;
var seq__14581 = cljs.core.seq(vec__14580);
var first__14582 = cljs.core.first(seq__14581);
var seq__14581__$1 = cljs.core.next(seq__14581);
var ns_sym = first__14582;
var first__14582__$1 = cljs.core.first(seq__14581__$1);
var seq__14581__$2 = cljs.core.next(seq__14581__$1);
var ns_name = first__14582__$1;
var stuff = seq__14581__$2;
var vec__14583 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14583,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14583,(1),null);
var vec__14586 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14586,(0),null);
var references = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14586,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__14589_14598 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__14590_14599 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__14591_14600 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__14592_14601 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__14591_14600);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__14592_14601);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var fexpr__14593_14602 = (function (){var format_in__13457__auto__ = "~w ~1I~@_~w";
var cf__13458__auto__ = ((typeof format_in__13457__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__13457__auto__) : cljs.pprint.cached_compile.call(null,format_in__13457__auto__)):format_in__13457__auto__);
return (function() { 
var G__14603__delegate = function (args__13459__auto__){
var navigator__13460__auto__ = cljs.pprint.init_navigator(args__13459__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__13458__auto__,navigator__13460__auto__);
};
var G__14603 = function (var_args){
var args__13459__auto__ = null;
if (arguments.length > 0) {
var G__14604__i = 0, G__14604__a = new Array(arguments.length -  0);
while (G__14604__i < G__14604__a.length) {G__14604__a[G__14604__i] = arguments[G__14604__i + 0]; ++G__14604__i;}
  args__13459__auto__ = new cljs.core.IndexedSeq(G__14604__a,0,null);
} 
return G__14603__delegate.call(this,args__13459__auto__);};
G__14603.cljs$lang$maxFixedArity = 0;
G__14603.cljs$lang$applyTo = (function (arglist__14605){
var args__13459__auto__ = cljs.core.seq(arglist__14605);
return G__14603__delegate(args__13459__auto__);
});
G__14603.cljs$core$IFn$_invoke$arity$variadic = G__14603__delegate;
return G__14603;
})()
;
})();
(fexpr__14593_14602.cljs$core$IFn$_invoke$arity$2 ? fexpr__14593_14602.cljs$core$IFn$_invoke$arity$2(ns_sym,ns_name) : fexpr__14593_14602.call(null,ns_sym,ns_name));

if(cljs.core.truth_((function (){var or__4126__auto__ = doc_str;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = attr_map;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return cljs.core.seq(references);
}
}
})())){
var fexpr__14594_14606 = (function (){var format_in__13457__auto__ = "~@:_";
var cf__13458__auto__ = ((typeof format_in__13457__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__13457__auto__) : cljs.pprint.cached_compile.call(null,format_in__13457__auto__)):format_in__13457__auto__);
return (function() { 
var G__14607__delegate = function (args__13459__auto__){
var navigator__13460__auto__ = cljs.pprint.init_navigator(args__13459__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__13458__auto__,navigator__13460__auto__);
};
var G__14607 = function (var_args){
var args__13459__auto__ = null;
if (arguments.length > 0) {
var G__14608__i = 0, G__14608__a = new Array(arguments.length -  0);
while (G__14608__i < G__14608__a.length) {G__14608__a[G__14608__i] = arguments[G__14608__i + 0]; ++G__14608__i;}
  args__13459__auto__ = new cljs.core.IndexedSeq(G__14608__a,0,null);
} 
return G__14607__delegate.call(this,args__13459__auto__);};
G__14607.cljs$lang$maxFixedArity = 0;
G__14607.cljs$lang$applyTo = (function (arglist__14609){
var args__13459__auto__ = cljs.core.seq(arglist__14609);
return G__14607__delegate(args__13459__auto__);
});
G__14607.cljs$core$IFn$_invoke$arity$variadic = G__14607__delegate;
return G__14607;
})()
;
})();
(fexpr__14594_14606.cljs$core$IFn$_invoke$arity$0 ? fexpr__14594_14606.cljs$core$IFn$_invoke$arity$0() : fexpr__14594_14606.call(null));
} else {
}

if(cljs.core.truth_(doc_str)){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\"~a\"~:[~;~:@_~]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([doc_str,(function (){var or__4126__auto__ = attr_map;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.seq(references);
}
})()], 0));
} else {
}

if(cljs.core.truth_(attr_map)){
var G__14596_14610 = attr_map;
var G__14597_14611 = cljs.core.seq(references);
var fexpr__14595_14612 = (function (){var format_in__13457__auto__ = "~w~:[~;~:@_~]";
var cf__13458__auto__ = ((typeof format_in__13457__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__13457__auto__) : cljs.pprint.cached_compile.call(null,format_in__13457__auto__)):format_in__13457__auto__);
return (function() { 
var G__14613__delegate = function (args__13459__auto__){
var navigator__13460__auto__ = cljs.pprint.init_navigator(args__13459__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__13458__auto__,navigator__13460__auto__);
};
var G__14613 = function (var_args){
var args__13459__auto__ = null;
if (arguments.length > 0) {
var G__14614__i = 0, G__14614__a = new Array(arguments.length -  0);
while (G__14614__i < G__14614__a.length) {G__14614__a[G__14614__i] = arguments[G__14614__i + 0]; ++G__14614__i;}
  args__13459__auto__ = new cljs.core.IndexedSeq(G__14614__a,0,null);
} 
return G__14613__delegate.call(this,args__13459__auto__);};
G__14613.cljs$lang$maxFixedArity = 0;
G__14613.cljs$lang$applyTo = (function (arglist__14615){
var args__13459__auto__ = cljs.core.seq(arglist__14615);
return G__14613__delegate(args__13459__auto__);
});
G__14613.cljs$core$IFn$_invoke$arity$variadic = G__14613__delegate;
return G__14613;
})()
;
})();
(fexpr__14595_14612.cljs$core$IFn$_invoke$arity$2 ? fexpr__14595_14612.cljs$core$IFn$_invoke$arity$2(G__14596_14610,G__14597_14611) : fexpr__14595_14612.call(null,G__14596_14610,G__14597_14611));
} else {
}

var references_14616__$1 = references;
while(true){
cljs.pprint.pprint_ns_reference(cljs.core.first(references_14616__$1));

var temp__5753__auto___14617 = cljs.core.next(references_14616__$1);
if(temp__5753__auto___14617){
var references_14618__$2 = temp__5753__auto___14617;
cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__14619 = references_14618__$2;
references_14616__$1 = G__14619;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__14590_14599);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__14589_14598);
}}

return null;
} else {
return cljs.pprint.write_out(alis);
}
});
cljs.pprint.pprint_hold_first = (function (){var format_in__13457__auto__ = "~:<~w~^ ~@_~w~^ ~_~@{~w~^ ~_~}~:>";
var cf__13458__auto__ = ((typeof format_in__13457__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__13457__auto__) : cljs.pprint.cached_compile.call(null,format_in__13457__auto__)):format_in__13457__auto__);
return (function() { 
var G__14620__delegate = function (args__13459__auto__){
var navigator__13460__auto__ = cljs.pprint.init_navigator(args__13459__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__13458__auto__,navigator__13460__auto__);
};
var G__14620 = function (var_args){
var args__13459__auto__ = null;
if (arguments.length > 0) {
var G__14621__i = 0, G__14621__a = new Array(arguments.length -  0);
while (G__14621__i < G__14621__a.length) {G__14621__a[G__14621__i] = arguments[G__14621__i + 0]; ++G__14621__i;}
  args__13459__auto__ = new cljs.core.IndexedSeq(G__14621__a,0,null);
} 
return G__14620__delegate.call(this,args__13459__auto__);};
G__14620.cljs$lang$maxFixedArity = 0;
G__14620.cljs$lang$applyTo = (function (arglist__14622){
var args__13459__auto__ = cljs.core.seq(arglist__14622);
return G__14620__delegate(args__13459__auto__);
});
G__14620.cljs$core$IFn$_invoke$arity$variadic = G__14620__delegate;
return G__14620;
})()
;
})();
cljs.pprint.single_defn = (function cljs$pprint$single_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
if(cljs.core.truth_(has_doc_str_QMARK_)){
var fexpr__14623_14626 = (function (){var format_in__13457__auto__ = " ~_";
var cf__13458__auto__ = ((typeof format_in__13457__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__13457__auto__) : cljs.pprint.cached_compile.call(null,format_in__13457__auto__)):format_in__13457__auto__);
return (function() { 
var G__14627__delegate = function (args__13459__auto__){
var navigator__13460__auto__ = cljs.pprint.init_navigator(args__13459__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__13458__auto__,navigator__13460__auto__);
};
var G__14627 = function (var_args){
var args__13459__auto__ = null;
if (arguments.length > 0) {
var G__14628__i = 0, G__14628__a = new Array(arguments.length -  0);
while (G__14628__i < G__14628__a.length) {G__14628__a[G__14628__i] = arguments[G__14628__i + 0]; ++G__14628__i;}
  args__13459__auto__ = new cljs.core.IndexedSeq(G__14628__a,0,null);
} 
return G__14627__delegate.call(this,args__13459__auto__);};
G__14627.cljs$lang$maxFixedArity = 0;
G__14627.cljs$lang$applyTo = (function (arglist__14629){
var args__13459__auto__ = cljs.core.seq(arglist__14629);
return G__14627__delegate(args__13459__auto__);
});
G__14627.cljs$core$IFn$_invoke$arity$variadic = G__14627__delegate;
return G__14627;
})()
;
})();
(fexpr__14623_14626.cljs$core$IFn$_invoke$arity$0 ? fexpr__14623_14626.cljs$core$IFn$_invoke$arity$0() : fexpr__14623_14626.call(null));
} else {
var fexpr__14624_14630 = (function (){var format_in__13457__auto__ = " ~@_";
var cf__13458__auto__ = ((typeof format_in__13457__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__13457__auto__) : cljs.pprint.cached_compile.call(null,format_in__13457__auto__)):format_in__13457__auto__);
return (function() { 
var G__14631__delegate = function (args__13459__auto__){
var navigator__13460__auto__ = cljs.pprint.init_navigator(args__13459__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__13458__auto__,navigator__13460__auto__);
};
var G__14631 = function (var_args){
var args__13459__auto__ = null;
if (arguments.length > 0) {
var G__14632__i = 0, G__14632__a = new Array(arguments.length -  0);
while (G__14632__i < G__14632__a.length) {G__14632__a[G__14632__i] = arguments[G__14632__i + 0]; ++G__14632__i;}
  args__13459__auto__ = new cljs.core.IndexedSeq(G__14632__a,0,null);
} 
return G__14631__delegate.call(this,args__13459__auto__);};
G__14631.cljs$lang$maxFixedArity = 0;
G__14631.cljs$lang$applyTo = (function (arglist__14633){
var args__13459__auto__ = cljs.core.seq(arglist__14633);
return G__14631__delegate(args__13459__auto__);
});
G__14631.cljs$core$IFn$_invoke$arity$variadic = G__14631__delegate;
return G__14631;
})()
;
})();
(fexpr__14624_14630.cljs$core$IFn$_invoke$arity$0 ? fexpr__14624_14630.cljs$core$IFn$_invoke$arity$0() : fexpr__14624_14630.call(null));
}

var fexpr__14625 = (function (){var format_in__13457__auto__ = "~{~w~^ ~_~}";
var cf__13458__auto__ = ((typeof format_in__13457__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__13457__auto__) : cljs.pprint.cached_compile.call(null,format_in__13457__auto__)):format_in__13457__auto__);
return (function() { 
var G__14634__delegate = function (args__13459__auto__){
var navigator__13460__auto__ = cljs.pprint.init_navigator(args__13459__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__13458__auto__,navigator__13460__auto__);
};
var G__14634 = function (var_args){
var args__13459__auto__ = null;
if (arguments.length > 0) {
var G__14635__i = 0, G__14635__a = new Array(arguments.length -  0);
while (G__14635__i < G__14635__a.length) {G__14635__a[G__14635__i] = arguments[G__14635__i + 0]; ++G__14635__i;}
  args__13459__auto__ = new cljs.core.IndexedSeq(G__14635__a,0,null);
} 
return G__14634__delegate.call(this,args__13459__auto__);};
G__14634.cljs$lang$maxFixedArity = 0;
G__14634.cljs$lang$applyTo = (function (arglist__14636){
var args__13459__auto__ = cljs.core.seq(arglist__14636);
return G__14634__delegate(args__13459__auto__);
});
G__14634.cljs$core$IFn$_invoke$arity$variadic = G__14634__delegate;
return G__14634;
})()
;
})();
return (fexpr__14625.cljs$core$IFn$_invoke$arity$1 ? fexpr__14625.cljs$core$IFn$_invoke$arity$1(alis) : fexpr__14625.call(null,alis));
} else {
return null;
}
});
cljs.pprint.multi_defn = (function cljs$pprint$multi_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
var fexpr__14637 = (function (){var format_in__13457__auto__ = " ~_~{~w~^ ~_~}";
var cf__13458__auto__ = ((typeof format_in__13457__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__13457__auto__) : cljs.pprint.cached_compile.call(null,format_in__13457__auto__)):format_in__13457__auto__);
return (function() { 
var G__14638__delegate = function (args__13459__auto__){
var navigator__13460__auto__ = cljs.pprint.init_navigator(args__13459__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__13458__auto__,navigator__13460__auto__);
};
var G__14638 = function (var_args){
var args__13459__auto__ = null;
if (arguments.length > 0) {
var G__14639__i = 0, G__14639__a = new Array(arguments.length -  0);
while (G__14639__i < G__14639__a.length) {G__14639__a[G__14639__i] = arguments[G__14639__i + 0]; ++G__14639__i;}
  args__13459__auto__ = new cljs.core.IndexedSeq(G__14639__a,0,null);
} 
return G__14638__delegate.call(this,args__13459__auto__);};
G__14638.cljs$lang$maxFixedArity = 0;
G__14638.cljs$lang$applyTo = (function (arglist__14640){
var args__13459__auto__ = cljs.core.seq(arglist__14640);
return G__14638__delegate(args__13459__auto__);
});
G__14638.cljs$core$IFn$_invoke$arity$variadic = G__14638__delegate;
return G__14638;
})()
;
})();
return (fexpr__14637.cljs$core$IFn$_invoke$arity$1 ? fexpr__14637.cljs$core$IFn$_invoke$arity$1(alis) : fexpr__14637.call(null,alis));
} else {
return null;
}
});
cljs.pprint.pprint_defn = (function cljs$pprint$pprint_defn(alis){
if(cljs.core.next(alis)){
var vec__14641 = alis;
var seq__14642 = cljs.core.seq(vec__14641);
var first__14643 = cljs.core.first(seq__14642);
var seq__14642__$1 = cljs.core.next(seq__14642);
var defn_sym = first__14643;
var first__14643__$1 = cljs.core.first(seq__14642__$1);
var seq__14642__$2 = cljs.core.next(seq__14642__$1);
var defn_name = first__14643__$1;
var stuff = seq__14642__$2;
var vec__14644 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14644,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14644,(1),null);
var vec__14647 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14647,(0),null);
var stuff__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14647,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__14650_14657 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__14651_14658 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__14652_14659 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__14653_14660 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__14652_14659);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__14653_14660);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var fexpr__14654_14661 = (function (){var format_in__13457__auto__ = "~w ~1I~@_~w";
var cf__13458__auto__ = ((typeof format_in__13457__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__13457__auto__) : cljs.pprint.cached_compile.call(null,format_in__13457__auto__)):format_in__13457__auto__);
return (function() { 
var G__14662__delegate = function (args__13459__auto__){
var navigator__13460__auto__ = cljs.pprint.init_navigator(args__13459__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__13458__auto__,navigator__13460__auto__);
};
var G__14662 = function (var_args){
var args__13459__auto__ = null;
if (arguments.length > 0) {
var G__14663__i = 0, G__14663__a = new Array(arguments.length -  0);
while (G__14663__i < G__14663__a.length) {G__14663__a[G__14663__i] = arguments[G__14663__i + 0]; ++G__14663__i;}
  args__13459__auto__ = new cljs.core.IndexedSeq(G__14663__a,0,null);
} 
return G__14662__delegate.call(this,args__13459__auto__);};
G__14662.cljs$lang$maxFixedArity = 0;
G__14662.cljs$lang$applyTo = (function (arglist__14664){
var args__13459__auto__ = cljs.core.seq(arglist__14664);
return G__14662__delegate(args__13459__auto__);
});
G__14662.cljs$core$IFn$_invoke$arity$variadic = G__14662__delegate;
return G__14662;
})()
;
})();
(fexpr__14654_14661.cljs$core$IFn$_invoke$arity$2 ? fexpr__14654_14661.cljs$core$IFn$_invoke$arity$2(defn_sym,defn_name) : fexpr__14654_14661.call(null,defn_sym,defn_name));

if(cljs.core.truth_(doc_str)){
var fexpr__14655_14665 = (function (){var format_in__13457__auto__ = " ~_~w";
var cf__13458__auto__ = ((typeof format_in__13457__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__13457__auto__) : cljs.pprint.cached_compile.call(null,format_in__13457__auto__)):format_in__13457__auto__);
return (function() { 
var G__14666__delegate = function (args__13459__auto__){
var navigator__13460__auto__ = cljs.pprint.init_navigator(args__13459__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__13458__auto__,navigator__13460__auto__);
};
var G__14666 = function (var_args){
var args__13459__auto__ = null;
if (arguments.length > 0) {
var G__14667__i = 0, G__14667__a = new Array(arguments.length -  0);
while (G__14667__i < G__14667__a.length) {G__14667__a[G__14667__i] = arguments[G__14667__i + 0]; ++G__14667__i;}
  args__13459__auto__ = new cljs.core.IndexedSeq(G__14667__a,0,null);
} 
return G__14666__delegate.call(this,args__13459__auto__);};
G__14666.cljs$lang$maxFixedArity = 0;
G__14666.cljs$lang$applyTo = (function (arglist__14668){
var args__13459__auto__ = cljs.core.seq(arglist__14668);
return G__14666__delegate(args__13459__auto__);
});
G__14666.cljs$core$IFn$_invoke$arity$variadic = G__14666__delegate;
return G__14666;
})()
;
})();
(fexpr__14655_14665.cljs$core$IFn$_invoke$arity$1 ? fexpr__14655_14665.cljs$core$IFn$_invoke$arity$1(doc_str) : fexpr__14655_14665.call(null,doc_str));
} else {
}

if(cljs.core.truth_(attr_map)){
var fexpr__14656_14669 = (function (){var format_in__13457__auto__ = " ~_~w";
var cf__13458__auto__ = ((typeof format_in__13457__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__13457__auto__) : cljs.pprint.cached_compile.call(null,format_in__13457__auto__)):format_in__13457__auto__);
return (function() { 
var G__14670__delegate = function (args__13459__auto__){
var navigator__13460__auto__ = cljs.pprint.init_navigator(args__13459__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__13458__auto__,navigator__13460__auto__);
};
var G__14670 = function (var_args){
var args__13459__auto__ = null;
if (arguments.length > 0) {
var G__14671__i = 0, G__14671__a = new Array(arguments.length -  0);
while (G__14671__i < G__14671__a.length) {G__14671__a[G__14671__i] = arguments[G__14671__i + 0]; ++G__14671__i;}
  args__13459__auto__ = new cljs.core.IndexedSeq(G__14671__a,0,null);
} 
return G__14670__delegate.call(this,args__13459__auto__);};
G__14670.cljs$lang$maxFixedArity = 0;
G__14670.cljs$lang$applyTo = (function (arglist__14672){
var args__13459__auto__ = cljs.core.seq(arglist__14672);
return G__14670__delegate(args__13459__auto__);
});
G__14670.cljs$core$IFn$_invoke$arity$variadic = G__14670__delegate;
return G__14670;
})()
;
})();
(fexpr__14656_14669.cljs$core$IFn$_invoke$arity$1 ? fexpr__14656_14669.cljs$core$IFn$_invoke$arity$1(attr_map) : fexpr__14656_14669.call(null,attr_map));
} else {
}

if(cljs.core.vector_QMARK_(cljs.core.first(stuff__$2))){
cljs.pprint.single_defn(stuff__$2,(function (){var or__4126__auto__ = doc_str;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return attr_map;
}
})());
} else {
cljs.pprint.multi_defn(stuff__$2,(function (){var or__4126__auto__ = doc_str;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return attr_map;
}
})());

}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__14651_14658);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__14650_14657);
}}

return null;
} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
});
cljs.pprint.pprint_binding_form = (function cljs$pprint$pprint_binding_form(binding_vec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__14673_14682 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__14674_14683 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__14675_14684 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__14676_14685 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__14675_14684);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__14676_14685);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count14677_14686 = (0);
var binding_14687 = binding_vec;
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count14677_14686 < cljs.core._STAR_print_length_STAR_)))){
if(cljs.core.seq(binding_14687)){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__14678_14688 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__14679_14689 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__14680_14690 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__14681_14691 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__14680_14690);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__14681_14691);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(binding_14687));

if(cljs.core.next(binding_14687)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(binding_14687));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__14679_14689);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__14678_14688);
}}


if(cljs.core.next(cljs.core.rest(binding_14687))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__14692 = (length_count14677_14686 + (1));
var G__14693 = cljs.core.next(cljs.core.rest(binding_14687));
length_count14677_14686 = G__14692;
binding_14687 = G__14693;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__14674_14683);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__14673_14682);
}}

return null;
});
cljs.pprint.pprint_let = (function cljs$pprint$pprint_let(alis){
var base_sym = cljs.core.first(alis);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__14694_14701 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__14695_14702 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__14696_14703 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__14697_14704 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__14696_14703);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__14697_14704);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

if(((cljs.core.next(alis)) && (cljs.core.vector_QMARK_(cljs.core.second(alis))))){
var fexpr__14698_14705 = (function (){var format_in__13457__auto__ = "~w ~1I~@_";
var cf__13458__auto__ = ((typeof format_in__13457__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__13457__auto__) : cljs.pprint.cached_compile.call(null,format_in__13457__auto__)):format_in__13457__auto__);
return (function() { 
var G__14706__delegate = function (args__13459__auto__){
var navigator__13460__auto__ = cljs.pprint.init_navigator(args__13459__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__13458__auto__,navigator__13460__auto__);
};
var G__14706 = function (var_args){
var args__13459__auto__ = null;
if (arguments.length > 0) {
var G__14707__i = 0, G__14707__a = new Array(arguments.length -  0);
while (G__14707__i < G__14707__a.length) {G__14707__a[G__14707__i] = arguments[G__14707__i + 0]; ++G__14707__i;}
  args__13459__auto__ = new cljs.core.IndexedSeq(G__14707__a,0,null);
} 
return G__14706__delegate.call(this,args__13459__auto__);};
G__14706.cljs$lang$maxFixedArity = 0;
G__14706.cljs$lang$applyTo = (function (arglist__14708){
var args__13459__auto__ = cljs.core.seq(arglist__14708);
return G__14706__delegate(args__13459__auto__);
});
G__14706.cljs$core$IFn$_invoke$arity$variadic = G__14706__delegate;
return G__14706;
})()
;
})();
(fexpr__14698_14705.cljs$core$IFn$_invoke$arity$1 ? fexpr__14698_14705.cljs$core$IFn$_invoke$arity$1(base_sym) : fexpr__14698_14705.call(null,base_sym));

cljs.pprint.pprint_binding_form(cljs.core.second(alis));

var G__14700_14709 = cljs.core.next(cljs.core.rest(alis));
var fexpr__14699_14710 = (function (){var format_in__13457__auto__ = " ~_~{~w~^ ~_~}";
var cf__13458__auto__ = ((typeof format_in__13457__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__13457__auto__) : cljs.pprint.cached_compile.call(null,format_in__13457__auto__)):format_in__13457__auto__);
return (function() { 
var G__14711__delegate = function (args__13459__auto__){
var navigator__13460__auto__ = cljs.pprint.init_navigator(args__13459__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__13458__auto__,navigator__13460__auto__);
};
var G__14711 = function (var_args){
var args__13459__auto__ = null;
if (arguments.length > 0) {
var G__14712__i = 0, G__14712__a = new Array(arguments.length -  0);
while (G__14712__i < G__14712__a.length) {G__14712__a[G__14712__i] = arguments[G__14712__i + 0]; ++G__14712__i;}
  args__13459__auto__ = new cljs.core.IndexedSeq(G__14712__a,0,null);
} 
return G__14711__delegate.call(this,args__13459__auto__);};
G__14711.cljs$lang$maxFixedArity = 0;
G__14711.cljs$lang$applyTo = (function (arglist__14713){
var args__13459__auto__ = cljs.core.seq(arglist__14713);
return G__14711__delegate(args__13459__auto__);
});
G__14711.cljs$core$IFn$_invoke$arity$variadic = G__14711__delegate;
return G__14711;
})()
;
})();
(fexpr__14699_14710.cljs$core$IFn$_invoke$arity$1 ? fexpr__14699_14710.cljs$core$IFn$_invoke$arity$1(G__14700_14709) : fexpr__14699_14710.call(null,G__14700_14709));
} else {
cljs.pprint.pprint_simple_code_list(alis);
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__14695_14702);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__14694_14701);
}}

return null;
});
cljs.pprint.pprint_if = (function (){var format_in__13457__auto__ = "~:<~1I~w~^ ~@_~w~@{ ~_~w~}~:>";
var cf__13458__auto__ = ((typeof format_in__13457__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__13457__auto__) : cljs.pprint.cached_compile.call(null,format_in__13457__auto__)):format_in__13457__auto__);
return (function() { 
var G__14714__delegate = function (args__13459__auto__){
var navigator__13460__auto__ = cljs.pprint.init_navigator(args__13459__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__13458__auto__,navigator__13460__auto__);
};
var G__14714 = function (var_args){
var args__13459__auto__ = null;
if (arguments.length > 0) {
var G__14715__i = 0, G__14715__a = new Array(arguments.length -  0);
while (G__14715__i < G__14715__a.length) {G__14715__a[G__14715__i] = arguments[G__14715__i + 0]; ++G__14715__i;}
  args__13459__auto__ = new cljs.core.IndexedSeq(G__14715__a,0,null);
} 
return G__14714__delegate.call(this,args__13459__auto__);};
G__14714.cljs$lang$maxFixedArity = 0;
G__14714.cljs$lang$applyTo = (function (arglist__14716){
var args__13459__auto__ = cljs.core.seq(arglist__14716);
return G__14714__delegate(args__13459__auto__);
});
G__14714.cljs$core$IFn$_invoke$arity$variadic = G__14714__delegate;
return G__14714;
})()
;
})();
cljs.pprint.pprint_cond = (function cljs$pprint$pprint_cond(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__14717_14726 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__14718_14727 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__14719_14728 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__14720_14729 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__14719_14728);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__14720_14729);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

cljs.pprint.write_out(cljs.core.first(alis));

if(cljs.core.next(alis)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var length_count14721_14730 = (0);
var alis_14731__$1 = cljs.core.next(alis);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count14721_14730 < cljs.core._STAR_print_length_STAR_)))){
if(alis_14731__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__14722_14732 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__14723_14733 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__14724_14734 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__14725_14735 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__14724_14734);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__14725_14735);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_14731__$1));

if(cljs.core.next(alis_14731__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(alis_14731__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__14723_14733);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__14722_14732);
}}


if(cljs.core.next(cljs.core.rest(alis_14731__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__14736 = (length_count14721_14730 + (1));
var G__14737 = cljs.core.next(cljs.core.rest(alis_14731__$1));
length_count14721_14730 = G__14736;
alis_14731__$1 = G__14737;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__14718_14727);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__14717_14726);
}}

return null;
});
cljs.pprint.pprint_condp = (function cljs$pprint$pprint_condp(alis){
if((cljs.core.count(alis) > (3))){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__14738_14747 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__14739_14748 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__14740_14749 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__14741_14750 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__14740_14749);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__14741_14750);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__13457__auto__ = "~w ~@_~w ~@_~w ~_";
var cf__13458__auto__ = ((typeof format_in__13457__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__13457__auto__) : cljs.pprint.cached_compile.call(null,format_in__13457__auto__)):format_in__13457__auto__);
return (function() { 
var G__14751__delegate = function (args__13459__auto__){
var navigator__13460__auto__ = cljs.pprint.init_navigator(args__13459__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__13458__auto__,navigator__13460__auto__);
};
var G__14751 = function (var_args){
var args__13459__auto__ = null;
if (arguments.length > 0) {
var G__14752__i = 0, G__14752__a = new Array(arguments.length -  0);
while (G__14752__i < G__14752__a.length) {G__14752__a[G__14752__i] = arguments[G__14752__i + 0]; ++G__14752__i;}
  args__13459__auto__ = new cljs.core.IndexedSeq(G__14752__a,0,null);
} 
return G__14751__delegate.call(this,args__13459__auto__);};
G__14751.cljs$lang$maxFixedArity = 0;
G__14751.cljs$lang$applyTo = (function (arglist__14753){
var args__13459__auto__ = cljs.core.seq(arglist__14753);
return G__14751__delegate(args__13459__auto__);
});
G__14751.cljs$core$IFn$_invoke$arity$variadic = G__14751__delegate;
return G__14751;
})()
;
})(),alis);

var length_count14742_14754 = (0);
var alis_14755__$1 = cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),alis));
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count14742_14754 < cljs.core._STAR_print_length_STAR_)))){
if(alis_14755__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__14743_14756 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__14744_14757 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__14745_14758 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__14746_14759 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__14745_14758);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__14746_14759);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_14755__$1));

if(cljs.core.next(alis_14755__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(alis_14755__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__14744_14757);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__14743_14756);
}}


if(cljs.core.next(cljs.core.rest(alis_14755__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__14760 = (length_count14742_14754 + (1));
var G__14761 = cljs.core.next(cljs.core.rest(alis_14755__$1));
length_count14742_14754 = G__14760;
alis_14755__$1 = G__14761;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__14739_14748);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__14738_14747);
}}

return null;
} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
});
cljs.pprint._STAR_symbol_map_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.pprint.pprint_anon_func = (function cljs$pprint$pprint_anon_func(alis){
var args = cljs.core.second(alis);
var nlis = cljs.core.first(cljs.core.rest(cljs.core.rest(alis)));
if(cljs.core.vector_QMARK_(args)){
var _STAR_symbol_map_STAR__orig_val__14764 = cljs.pprint._STAR_symbol_map_STAR_;
var _STAR_symbol_map_STAR__temp_val__14765 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(args)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(args),"%"]):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__14762_SHARP_,p2__14763_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__14762_SHARP_,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__14763_SHARP_)].join('')],null));
}),args,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(cljs.core.count(args) + (1))))));
(cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR__temp_val__14765);

try{var fexpr__14766 = (function (){var format_in__13457__auto__ = "~<#(~;~@{~w~^ ~_~}~;)~:>";
var cf__13458__auto__ = ((typeof format_in__13457__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__13457__auto__) : cljs.pprint.cached_compile.call(null,format_in__13457__auto__)):format_in__13457__auto__);
return (function() { 
var G__14767__delegate = function (args__13459__auto__){
var navigator__13460__auto__ = cljs.pprint.init_navigator(args__13459__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__13458__auto__,navigator__13460__auto__);
};
var G__14767 = function (var_args){
var args__13459__auto__ = null;
if (arguments.length > 0) {
var G__14768__i = 0, G__14768__a = new Array(arguments.length -  0);
while (G__14768__i < G__14768__a.length) {G__14768__a[G__14768__i] = arguments[G__14768__i + 0]; ++G__14768__i;}
  args__13459__auto__ = new cljs.core.IndexedSeq(G__14768__a,0,null);
} 
return G__14767__delegate.call(this,args__13459__auto__);};
G__14767.cljs$lang$maxFixedArity = 0;
G__14767.cljs$lang$applyTo = (function (arglist__14769){
var args__13459__auto__ = cljs.core.seq(arglist__14769);
return G__14767__delegate(args__13459__auto__);
});
G__14767.cljs$core$IFn$_invoke$arity$variadic = G__14767__delegate;
return G__14767;
})()
;
})();
return (fexpr__14766.cljs$core$IFn$_invoke$arity$1 ? fexpr__14766.cljs$core$IFn$_invoke$arity$1(nlis) : fexpr__14766.call(null,nlis));
}finally {(cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR__orig_val__14764);
}} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
});
cljs.pprint.pprint_simple_code_list = (function cljs$pprint$pprint_simple_code_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__14770_14775 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__14771_14776 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__14772_14777 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__14773_14778 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__14772_14777);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__14773_14778);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

var length_count14774_14779 = (0);
var alis_14780__$1 = cljs.core.seq(alis);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count14774_14779 < cljs.core._STAR_print_length_STAR_)))){
if(alis_14780__$1){
cljs.pprint.write_out(cljs.core.first(alis_14780__$1));

if(cljs.core.next(alis_14780__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__14781 = (length_count14774_14779 + (1));
var G__14782 = cljs.core.next(alis_14780__$1);
length_count14774_14779 = G__14781;
alis_14780__$1 = G__14782;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__14771_14776);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__14770_14775);
}}

return null;
});
cljs.pprint.two_forms = (function cljs$pprint$two_forms(amap){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4529__auto__ = (function cljs$pprint$two_forms_$_iter__14783(s__14784){
return (new cljs.core.LazySeq(null,(function (){
var s__14784__$1 = s__14784;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__14784__$1);
if(temp__5753__auto__){
var s__14784__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14784__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__14784__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__14786 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__14785 = (0);
while(true){
if((i__14785 < size__4528__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__14785);
cljs.core.chunk_append(b__14786,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null));

var G__14787 = (i__14785 + (1));
i__14785 = G__14787;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14786),cljs$pprint$two_forms_$_iter__14783(cljs.core.chunk_rest(s__14784__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14786),null);
}
} else {
var x = cljs.core.first(s__14784__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null),cljs$pprint$two_forms_$_iter__14783(cljs.core.rest(s__14784__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(amap);
})()], 0)));
});
cljs.pprint.add_core_ns = (function cljs$pprint$add_core_ns(amap){
var core = "clojure.core";
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14788_SHARP_){
var vec__14789 = p1__14788_SHARP_;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14789,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14789,(1),null);
if(cljs.core.not((function (){var or__4126__auto__ = cljs.core.namespace(s);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.special_symbol_QMARK_(s);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(core,cljs.core.name(s)),f], null);
} else {
return p1__14788_SHARP_;
}
}),amap));
});
cljs.pprint._STAR_code_table_STAR_ = cljs.pprint.two_forms(cljs.pprint.add_core_ns(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$sym$_DOT_,cljs.core.cst$sym$fn_STAR_,cljs.core.cst$sym$when_DASH_first,cljs.core.cst$sym$if,cljs.core.cst$sym$condp,cljs.core.cst$sym$$$,cljs.core.cst$sym$defmacro,cljs.core.cst$sym$defn,cljs.core.cst$sym$loop,cljs.core.cst$sym$struct,cljs.core.cst$sym$doseq,cljs.core.cst$sym$if_DASH_not,cljs.core.cst$sym$when_DASH_not,cljs.core.cst$sym$def,cljs.core.cst$sym$when,cljs.core.cst$sym$with_DASH_open,cljs.core.cst$sym$with_DASH_local_DASH_vars,cljs.core.cst$sym$defonce,cljs.core.cst$sym$when_DASH_let,cljs.core.cst$sym$ns,cljs.core.cst$sym$dotimes,cljs.core.cst$sym$cond,cljs.core.cst$sym$let,cljs.core.cst$sym$fn,cljs.core.cst$sym$defn_DASH_,cljs.core.cst$sym$locking,cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$if_DASH_let,cljs.core.cst$sym$binding,cljs.core.cst$sym$struct_DASH_map],[cljs.pprint.pprint_hold_first,cljs.pprint.pprint_anon_func,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_condp,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_if,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_if,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_ns,cljs.pprint.pprint_let,cljs.pprint.pprint_cond,cljs.pprint.pprint_let,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first])));
cljs.pprint.pprint_code_list = (function cljs$pprint$pprint_code_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
var temp__5751__auto__ = (function (){var G__14792 = cljs.core.first(alis);
return (cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1(G__14792) : cljs.pprint._STAR_code_table_STAR_.call(null,G__14792));
})();
if(cljs.core.truth_(temp__5751__auto__)){
var special_form = temp__5751__auto__;
return (special_form.cljs$core$IFn$_invoke$arity$1 ? special_form.cljs$core$IFn$_invoke$arity$1(alis) : special_form.call(null,alis));
} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
} else {
return null;
}
});
cljs.pprint.pprint_code_symbol = (function cljs$pprint$pprint_code_symbol(sym){
var temp__5751__auto__ = (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_symbol_map_STAR_) : sym.call(null,cljs.pprint._STAR_symbol_map_STAR_));
if(cljs.core.truth_(temp__5751__auto__)){
var arg_num = temp__5751__auto__;
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg_num], 0));
} else {
if(cljs.core.truth_(cljs.pprint._STAR_print_suppress_namespaces_STAR_)){
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(sym)], 0));
} else {
return (cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(sym) : cljs.pprint.pr.call(null,sym));
}
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.code_dispatch !== 'undefined')){
} else {
/**
 * The pretty print dispatch function for pretty printing Clojure code.
 */
cljs.pprint.code_dispatch = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__14793 = cljs.core.get_global_hierarchy;
return (fexpr__14793.cljs$core$IFn$_invoke$arity$0 ? fexpr__14793.cljs$core$IFn$_invoke$arity$0() : fexpr__14793.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","code-dispatch"),cljs.pprint.type_dispatcher,cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$list,cljs.pprint.pprint_code_list);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$symbol,cljs.pprint.pprint_code_symbol);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$vector,cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$map,cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$set,cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$queue,cljs.pprint.pprint_pqueue);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$deref,cljs.pprint.pprint_ideref);
cljs.pprint.use_method(cljs.pprint.code_dispatch,null,cljs.pprint.pr);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$default,cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
cljs.pprint.add_padding = (function cljs$pprint$add_padding(width,s){
var padding = (function (){var x__4214__auto__ = (0);
var y__4215__auto__ = (width - cljs.core.count(s));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(padding," ")),s);
});
/**
 * Prints a collection of maps in a textual table. Prints table headings
 * ks, and then a line of output for each row, corresponding to the keys
 * in ks. If ks are not specified, use the keys of the first item in rows.
 */
cljs.pprint.print_table = (function cljs$pprint$print_table(var_args){
var G__14798 = arguments.length;
switch (G__14798) {
case 2:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2 = (function (ks,rows){
if(cljs.core.seq(rows)){
var widths = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max,((cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)).length),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14794_SHARP_){
return ((cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__14794_SHARP_,k))).length);
}),rows));
}),ks);
var spacers = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14795_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(p1__14795_SHARP_,"-"));
}),widths);
var fmt_row = (function (leader,divider,trailer,row){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(leader),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(divider,(function (){var iter__4529__auto__ = (function cljs$pprint$iter__14809(s__14810){
return (new cljs.core.LazySeq(null,(function (){
var s__14810__$1 = s__14810;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__14810__$1);
if(temp__5753__auto__){
var s__14810__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14810__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__14810__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__14812 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__14811 = (0);
while(true){
if((i__14811 < size__4528__auto__)){
var vec__14813 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__14811);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14813,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14813,(1),null);
cljs.core.chunk_append(b__14812,cljs.pprint.add_padding(width,cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)));

var G__14824 = (i__14811 + (1));
i__14811 = G__14824;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14812),cljs$pprint$iter__14809(cljs.core.chunk_rest(s__14810__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14812),null);
}
} else {
var vec__14816 = cljs.core.first(s__14810__$2);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14816,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14816,(1),null);
return cljs.core.cons(cljs.pprint.add_padding(width,cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)),cljs$pprint$iter__14809(cljs.core.rest(s__14810__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14796_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__14796_SHARP_);
}),ks),widths));
})()))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(trailer)].join('');
});
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",cljs.core.zipmap(ks,ks))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("|-","-+-","-|",cljs.core.zipmap(ks,spacers))], 0));

var seq__14819 = cljs.core.seq(rows);
var chunk__14820 = null;
var count__14821 = (0);
var i__14822 = (0);
while(true){
if((i__14822 < count__14821)){
var row = chunk__14820.cljs$core$IIndexed$_nth$arity$2(null,i__14822);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",row)], 0));


var G__14825 = seq__14819;
var G__14826 = chunk__14820;
var G__14827 = count__14821;
var G__14828 = (i__14822 + (1));
seq__14819 = G__14825;
chunk__14820 = G__14826;
count__14821 = G__14827;
i__14822 = G__14828;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__14819);
if(temp__5753__auto__){
var seq__14819__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14819__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__14819__$1);
var G__14829 = cljs.core.chunk_rest(seq__14819__$1);
var G__14830 = c__4556__auto__;
var G__14831 = cljs.core.count(c__4556__auto__);
var G__14832 = (0);
seq__14819 = G__14829;
chunk__14820 = G__14830;
count__14821 = G__14831;
i__14822 = G__14832;
continue;
} else {
var row = cljs.core.first(seq__14819__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",row)], 0));


var G__14833 = cljs.core.next(seq__14819__$1);
var G__14834 = null;
var G__14835 = (0);
var G__14836 = (0);
seq__14819 = G__14833;
chunk__14820 = G__14834;
count__14821 = G__14835;
i__14822 = G__14836;
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
}));

(cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1 = (function (rows){
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(cljs.core.first(rows)),rows);
}));

(cljs.pprint.print_table.cljs$lang$maxFixedArity = 2);

