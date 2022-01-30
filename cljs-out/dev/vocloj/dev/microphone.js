// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('vocloj.dev.microphone');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.pprint');
goog.require('vocloj.core');
goog.require('vocloj.dev.components');
/**
 * Create a handler that appends audio chunks to state
 */
vocloj.dev.microphone.make_data_handler = (function vocloj$dev$microphone$make_data_handler(_STAR_state){
return (function (chunk){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_state,(function (p1__19254_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__19254_SHARP_,cljs.core.cst$kw$mic_SLASH_chunks,cljs.core.conj,chunk);
}));
});
});
/**
 * Create a recording from the chunks in state. Reset chunks when finished.
 */
vocloj.dev.microphone.create_recording = (function vocloj$dev$microphone$create_recording(_STAR_state){
var chunks = cljs.core.cst$kw$mic_SLASH_chunks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_STAR_state));
var blob = (new Blob(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(chunks),({"type": "audio/wav"})));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_state,(function (p1__19255_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__19255_SHARP_,cljs.core.cst$kw$mic_SLASH_recordings,cljs.core.conj,URL.createObjectURL(blob));
}));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_state,(function (p1__19256_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__19256_SHARP_,cljs.core.cst$kw$mic_SLASH_chunks,cljs.core.PersistentVector.EMPTY);
}));
});
vocloj.dev.microphone.microphone = (function vocloj$dev$microphone$microphone(_STAR_state,stream){
var state = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(vocloj.core.current_state(stream));
var on_data = vocloj.dev.microphone.make_data_handler(_STAR_state);
var recordings = cljs.core.cst$kw$mic_SLASH_recordings.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_STAR_state));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$recognition_DASH_container$container,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form$app__column$app__column_DASH__DASH_flex_DASH_start,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_submit,(function (p1__19257_SHARP_){
p1__19257_SHARP_.preventDefault();

var G__19258 = state;
var G__19258__$1 = (((G__19258 instanceof cljs.core.Keyword))?G__19258.fqn:null);
switch (G__19258__$1) {
case "recording":
return vocloj.core.stop(stream);

break;
case "dormant":
return vocloj.core.listen.cljs$core$IFn$_invoke$arity$2(stream,on_data);

break;
case "error":
return vocloj.core.listen.cljs$core$IFn$_invoke$arity$2(stream,on_data);

break;
case "stopped":
return vocloj.core.listen.cljs$core$IFn$_invoke$arity$2(stream,on_data);

break;
default:
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Submitted with state ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(state)].join('')], 0));

}
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vocloj.dev.components.button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"submit"], null),(function (){var G__19259 = state;
var G__19259__$1 = (((G__19259 instanceof cljs.core.Keyword))?G__19259.fqn:null);
switch (G__19259__$1) {
case "dormant":
return "record";

break;
case "error":
return "record";

break;
case "stopped":
return "record";

break;
case "ready":
return "waiting";

break;
case "paused":
return "resume";

break;
default:
return "stop";

}
})()], null),(function (){var temp__5757__auto__ = cljs.core.seq(recordings);
if((temp__5757__auto__ == null)){
return null;
} else {
var clips = temp__5757__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$recordings,(function (){var iter__4529__auto__ = (function vocloj$dev$microphone$microphone_$_iter__19260(s__19261){
return (new cljs.core.LazySeq(null,(function (){
var s__19261__$1 = s__19261;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__19261__$1);
if(temp__5753__auto__){
var s__19261__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19261__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__19261__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__19263 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__19262 = (0);
while(true){
if((i__19262 < size__4528__auto__)){
var clip = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__19262);
cljs.core.chunk_append(b__19263,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$recordings__recording,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$audio,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,clip,cljs.core.cst$kw$controls,true], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,clip], null)));

var G__19270 = (i__19262 + (1));
i__19262 = G__19270;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19263),vocloj$dev$microphone$microphone_$_iter__19260(cljs.core.chunk_rest(s__19261__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19263),null);
}
} else {
var clip = cljs.core.first(s__19261__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$recordings__recording,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$audio,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,clip,cljs.core.cst$kw$controls,true], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,clip], null)),vocloj$dev$microphone$microphone_$_iter__19260(cljs.core.rest(s__19261__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(clips);
})()], null);
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$app__column$fsm_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pre,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19264_19271 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19265_19272 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19266_19273 = true;
var _STAR_print_fn_STAR__temp_val__19267_19274 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19266_19273);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19267_19274);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(vocloj.core.current_state(stream));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19265_19272);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19264_19271);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})()], null)], null)], null)], null);
});
