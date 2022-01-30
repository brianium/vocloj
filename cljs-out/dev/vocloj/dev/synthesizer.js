// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('vocloj.dev.synthesizer');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.pprint');
goog.require('clojure.string');
goog.require('vocloj.dev.components');
goog.require('vocloj.core');
vocloj.dev.synthesizer.compare_voices = (function vocloj$dev$synthesizer$compare_voices(v1,v2){
return cljs.core.compare(v1.name,v2.name);
});
vocloj.dev.synthesizer.voice_option = (function vocloj$dev$synthesizer$voice_option(voice){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,voice.voiceURI], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(voice.name)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(voice.lang)].join('')], null);
});
vocloj.dev.synthesizer.voices = (function vocloj$dev$synthesizer$voices(props,voices){
var voices__$1 = cljs.core.sort.cljs$core$IFn$_invoke$arity$2(vocloj.dev.synthesizer.compare_voices,cljs.core.vals(voices));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select$voices,props,(function (){var iter__4529__auto__ = (function vocloj$dev$synthesizer$voices_$_iter__19549(s__19550){
return (new cljs.core.LazySeq(null,(function (){
var s__19550__$1 = s__19550;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__19550__$1);
if(temp__5753__auto__){
var s__19550__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19550__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__19550__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__19552 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__19551 = (0);
while(true){
if((i__19551 < size__4528__auto__)){
var voice = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__19551);
cljs.core.chunk_append(b__19552,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vocloj.dev.synthesizer.voice_option,voice], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,voice.voiceURI], null)));

var G__19553 = (i__19551 + (1));
i__19551 = G__19553;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19552),vocloj$dev$synthesizer$voices_$_iter__19549(cljs.core.chunk_rest(s__19550__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19552),null);
}
} else {
var voice = cljs.core.first(s__19550__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vocloj.dev.synthesizer.voice_option,voice], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,voice.voiceURI], null)),vocloj$dev$synthesizer$voices_$_iter__19549(cljs.core.rest(s__19550__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(voices__$1);
})()], null);
});
vocloj.dev.synthesizer.synthesizer = (function vocloj$dev$synthesizer$synthesizer(_STAR_state,synth){
var map__19560 = cljs.core.deref(_STAR_state);
var map__19560__$1 = (((((!((map__19560 == null))))?(((((map__19560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19560):map__19560);
var voice_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19560__$1,cljs.core.cst$kw$synth_SLASH_voice_DASH_id);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19560__$1,cljs.core.cst$kw$synth_SLASH_text);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19560__$1,cljs.core.cst$kw$synth_SLASH_pitch);
var rate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19560__$1,cljs.core.cst$kw$synth_SLASH_rate);
var volume = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19560__$1,cljs.core.cst$kw$synth_SLASH_volume);
var state = vocloj.core.current_state(synth);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form$app__column,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_submit,(function (p1__19554_SHARP_){
p1__19554_SHARP_.preventDefault();

var G__19562 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(state);
var G__19562__$1 = (((G__19562 instanceof cljs.core.Keyword))?G__19562.fqn:null);
switch (G__19562__$1) {
case "ready":
return vocloj.core.speak(synth,voice_id,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$text,text,cljs.core.cst$kw$pitch,pitch,cljs.core.cst$kw$rate,rate,cljs.core.cst$kw$volume,volume], null));

break;
case "paused":
return vocloj.core.resume(synth);

break;
case "speaking":
return vocloj.core.pause(synth);

break;
default:
return cljs.core.constantly(null);

}
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vocloj.dev.components.text_input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$auto_DASH_focus,true,cljs.core.cst$kw$on_DASH_change,(function (p1__19555_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_STAR_state,cljs.core.assoc,cljs.core.cst$kw$synth_SLASH_text,p1__19555_SHARP_.target.value);
}),cljs.core.cst$kw$placeholder,"Greetings friend!",cljs.core.cst$kw$value,text], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vocloj.dev.components.button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$disabled,clojure.string.blank_QMARK_(text),cljs.core.cst$kw$type,"submit"], null),(function (){var G__19563 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(state);
var G__19563__$1 = (((G__19563 instanceof cljs.core.Keyword))?G__19563.fqn:null);
switch (G__19563__$1) {
case "speaking":
return "pause";

break;
case "paused":
return "resume";

break;
default:
return "speak";

}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vocloj.dev.synthesizer.voices,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_change,(function (p1__19556_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_STAR_state,cljs.core.assoc,cljs.core.cst$kw$synth_SLASH_voice_DASH_id,p1__19556_SHARP_.target.value);
})], null),cljs.core.cst$kw$voices.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(state))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vocloj.dev.components.range_input,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$disabled,cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ready,cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(state)),cljs.core.cst$kw$on_DASH_change,(function (p1__19557_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_STAR_state,cljs.core.assoc,cljs.core.cst$kw$synth_SLASH_pitch,p1__19557_SHARP_.target.value);
}),cljs.core.cst$kw$value,pitch,cljs.core.cst$kw$min,(0),cljs.core.cst$kw$max,(2),cljs.core.cst$kw$step,0.1], null),"Pitch"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vocloj.dev.components.range_input,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$disabled,cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ready,cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(state)),cljs.core.cst$kw$on_DASH_change,(function (p1__19558_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_STAR_state,cljs.core.assoc,cljs.core.cst$kw$synth_SLASH_rate,p1__19558_SHARP_.target.value);
}),cljs.core.cst$kw$value,rate,cljs.core.cst$kw$min,0.1,cljs.core.cst$kw$max,(2),cljs.core.cst$kw$step,0.1], null),"Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vocloj.dev.components.range_input,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$disabled,cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ready,cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(state)),cljs.core.cst$kw$on_DASH_change,(function (p1__19559_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_STAR_state,cljs.core.assoc,cljs.core.cst$kw$synth_SLASH_volume,p1__19559_SHARP_.target.value);
}),cljs.core.cst$kw$value,volume,cljs.core.cst$kw$min,(0),cljs.core.cst$kw$max,(1),cljs.core.cst$kw$step,0.1], null),"Volume"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$app__column$fsm_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pre,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19564_19570 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19565_19571 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19566_19572 = true;
var _STAR_print_fn_STAR__temp_val__19567_19573 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19566_19572);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19567_19573);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(vocloj.core.current_state(synth));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19565_19571);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19564_19570);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})()], null)], null)], null)], null);
});
