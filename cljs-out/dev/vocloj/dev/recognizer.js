// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('vocloj.dev.recognizer');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.pprint');
goog.require('vocloj.core');
goog.require('vocloj.dev.components');
vocloj.dev.recognizer.reel_item = (function vocloj$dev$recognizer$reel_item(p__19500){
var map__19501 = p__19500;
var map__19501__$1 = (((((!((map__19501 == null))))?(((((map__19501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19501):map__19501);
var transcript = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19501__$1,cljs.core.cst$kw$transcript);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$reel__item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ref,(function (el){
if(cljs.core.truth_(el)){
return el.scrollIntoView(({"behavior": "smooth", "block": "start"}));
} else {
return null;
}
})], null),transcript], null);
});
vocloj.dev.recognizer.reel = (function vocloj$dev$recognizer$reel(transcript){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$reel,(function (){var iter__4529__auto__ = (function vocloj$dev$recognizer$reel_$_iter__19503(s__19504){
return (new cljs.core.LazySeq(null,(function (){
var s__19504__$1 = s__19504;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__19504__$1);
if(temp__5753__auto__){
var s__19504__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19504__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__19504__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__19506 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__19505 = (0);
while(true){
if((i__19505 < size__4528__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__19505);
cljs.core.chunk_append(b__19506,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vocloj.dev.recognizer.reel_item,item], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,item], null)));

var G__19507 = (i__19505 + (1));
i__19505 = G__19507;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19506),vocloj$dev$recognizer$reel_$_iter__19503(cljs.core.chunk_rest(s__19504__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19506),null);
}
} else {
var item = cljs.core.first(s__19504__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vocloj.dev.recognizer.reel_item,item], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,item], null)),vocloj$dev$recognizer$reel_$_iter__19503(cljs.core.rest(s__19504__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(transcript);
})()], null);
});
vocloj.dev.recognizer.recognizer = (function vocloj$dev$recognizer$recognizer(_STAR_state,recog,handler){
var map__19509 = cljs.core.deref(_STAR_state);
var map__19509__$1 = (((((!((map__19509 == null))))?(((((map__19509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19509):map__19509);
var transcript = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19509__$1,cljs.core.cst$kw$recog_SLASH_transcript);
var state = vocloj.core.current_state(recog);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_recognition_DASH_container$container,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form$app__column$app__column_DASH__DASH_flex_DASH_start,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_submit,(function (p1__19508_SHARP_){
p1__19508_SHARP_.preventDefault();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$listening,cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(state))){
return vocloj.core.stop(recog);
} else {
return vocloj.core.listen.cljs$core$IFn$_invoke$arity$2(recog,handler);
}
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vocloj.dev.components.button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"submit"], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$listening,cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(state)))?"stop":"listen")], null),((cljs.core.seq(transcript))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vocloj.dev.recognizer.reel,transcript], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$app__column$fsm_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pre,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19511_19515 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19512_19516 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19513_19517 = true;
var _STAR_print_fn_STAR__temp_val__19514_19518 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19513_19517);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19514_19518);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(vocloj.core.current_state(recog));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19512_19516);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19511_19515);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})()], null)], null)], null)], null);
});
/**
 * Updates state with transcript data
 */
vocloj.dev.recognizer.handler = (function vocloj$dev$recognizer$handler(result,_STAR_state){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_STAR_state,cljs.core.assoc,cljs.core.cst$kw$recog_SLASH_transcript,result);
});
