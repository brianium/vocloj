// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('vocloj.dev');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('integrant.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('vocloj.core');
goog.require('vocloj.dev.microphone');
goog.require('vocloj.dev.recognizer');
goog.require('vocloj.dev.synthesizer');
goog.require('vocloj.web');
vocloj.dev.nav = (function vocloj$dev$nav(screen_id,_STAR_state){
var items = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$text,"Synthesis",cljs.core.cst$kw$screen,cljs.core.cst$kw$synth], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$text,"Recognition",cljs.core.cst$kw$screen,cljs.core.cst$kw$recognition], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$text,"Microphone",cljs.core.cst$kw$screen,cljs.core.cst$kw$microphone], null)], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nav$app_nav,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__4529__auto__ = (function vocloj$dev$nav_$_iter__21187(s__21188){
return (new cljs.core.LazySeq(null,(function (){
var s__21188__$1 = s__21188;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__21188__$1);
if(temp__5753__auto__){
var s__21188__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21188__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__21188__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__21190 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__21189 = (0);
while(true){
if((i__21189 < size__4528__auto__)){
var map__21191 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__21189);
var map__21191__$1 = (((((!((map__21191 == null))))?(((((map__21191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21191):map__21191);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21191__$1,cljs.core.cst$kw$text);
var screen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21191__$1,cljs.core.cst$kw$screen);
cljs.core.chunk_append(b__21190,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["nav-item",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(screen,screen_id))?"nav-item--active":null)], null),cljs.core.cst$kw$on_DASH_click,((function (i__21189,map__21191,map__21191__$1,text,screen,c__4527__auto__,size__4528__auto__,b__21190,s__21188__$2,temp__5753__auto__,items){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_STAR_state,cljs.core.assoc,cljs.core.cst$kw$nav_SLASH_screen,screen);
});})(i__21189,map__21191,map__21191__$1,text,screen,c__4527__auto__,size__4528__auto__,b__21190,s__21188__$2,temp__5753__auto__,items))
], null),text], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,screen], null)));

var G__21195 = (i__21189 + (1));
i__21189 = G__21195;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21190),vocloj$dev$nav_$_iter__21187(cljs.core.chunk_rest(s__21188__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21190),null);
}
} else {
var map__21193 = cljs.core.first(s__21188__$2);
var map__21193__$1 = (((((!((map__21193 == null))))?(((((map__21193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21193):map__21193);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21193__$1,cljs.core.cst$kw$text);
var screen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21193__$1,cljs.core.cst$kw$screen);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["nav-item",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(screen,screen_id))?"nav-item--active":null)], null),cljs.core.cst$kw$on_DASH_click,((function (map__21193,map__21193__$1,text,screen,s__21188__$2,temp__5753__auto__,items){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_STAR_state,cljs.core.assoc,cljs.core.cst$kw$nav_SLASH_screen,screen);
});})(map__21193,map__21193__$1,text,screen,s__21188__$2,temp__5753__auto__,items))
], null),text], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,screen], null)),vocloj$dev$nav_$_iter__21187(cljs.core.rest(s__21188__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(items);
})()], null)], null);
});
vocloj.dev.application = (function vocloj$dev$application(_STAR_state,synth,recognition,recog_handler,stream){
var screen = cljs.core.cst$kw$nav_SLASH_screen.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_STAR_state));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$application,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vocloj.dev.nav,screen,_STAR_state], null),(function (){var G__21196 = screen;
var G__21196__$1 = (((G__21196 instanceof cljs.core.Keyword))?G__21196.fqn:null);
switch (G__21196__$1) {
case "synth":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vocloj.dev.synthesizer.synthesizer,_STAR_state,synth], null);

break;
case "recognition":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [vocloj.dev.recognizer.recognizer,_STAR_state,recognition,recog_handler], null);

break;
case "microphone":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vocloj.dev.microphone.microphone,_STAR_state,stream], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21196__$1)].join('')));

}
})()], null);
});
vocloj.dev.config = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$vocloj$dev_SLASH_state,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$nav_SLASH_screen,cljs.core.cst$kw$synth_SLASH_rate,cljs.core.cst$kw$recog_SLASH_transcript,cljs.core.cst$kw$mic_SLASH_chunks,cljs.core.cst$kw$synth_SLASH_voice_DASH_id,cljs.core.cst$kw$mic_SLASH_recordings,cljs.core.cst$kw$synth_SLASH_volume,cljs.core.cst$kw$synth_SLASH_text,cljs.core.cst$kw$synth_SLASH_pitch],[cljs.core.cst$kw$synth,1.0,null,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,1.0,"",1.0]),cljs.core.cst$kw$vocloj$dev_SLASH_synthesizer,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$state,integrant.core.ref(cljs.core.cst$kw$vocloj$dev_SLASH_state)], null),cljs.core.cst$kw$vocloj$dev_SLASH_recognizer,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$continuous_QMARK_,true], null)], null),cljs.core.cst$kw$vocloj$dev_SLASH_recog_DASH_handler,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$state,integrant.core.ref(cljs.core.cst$kw$vocloj$dev_SLASH_state)], null),cljs.core.cst$kw$vocloj$dev_SLASH_microphone,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$state,integrant.core.ref(cljs.core.cst$kw$vocloj$dev_SLASH_state)], null),cljs.core.cst$kw$vocloj$dev_SLASH_ui,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$recog_DASH_handler,integrant.core.ref(cljs.core.cst$kw$vocloj$dev_SLASH_recog_DASH_handler),cljs.core.cst$kw$state,integrant.core.ref(cljs.core.cst$kw$vocloj$dev_SLASH_state),cljs.core.cst$kw$synth,integrant.core.ref(cljs.core.cst$kw$vocloj$dev_SLASH_synthesizer),cljs.core.cst$kw$recognizer,integrant.core.ref(cljs.core.cst$kw$vocloj$dev_SLASH_recognizer),cljs.core.cst$kw$stream,integrant.core.ref(cljs.core.cst$kw$vocloj$dev_SLASH_microphone)], null)], null);
integrant.core.init_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$vocloj$dev_SLASH_microphone,(function (_,p__21198){
var map__21199 = p__21198;
var map__21199__$1 = (((((!((map__21199 == null))))?(((((map__21199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21199):map__21199);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21199__$1,cljs.core.cst$kw$state);
return vocloj.core.add_effect.cljs$core$IFn$_invoke$arity$5(vocloj.web.create_microphone_stream.cljs$core$IFn$_invoke$arity$1(reagent.core.atom),cljs.core.cst$kw$vocloj$dev_SLASH_record,cljs.core.cst$kw$recording,cljs.core.cst$kw$stopped,(function (){
return vocloj.dev.microphone.create_recording(state);
}));
}));
integrant.core.halt_key_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$vocloj$dev_SLASH_microphone,(function (_,stream){
return vocloj.core.stop(stream);
}));
integrant.core.init_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$vocloj$dev_SLASH_recog_DASH_handler,(function (_,p__21201){
var map__21202 = p__21201;
var map__21202__$1 = (((((!((map__21202 == null))))?(((((map__21202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21202):map__21202);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21202__$1,cljs.core.cst$kw$state);
return (function (message){
return vocloj.dev.recognizer.handler(message,state);
});
}));
integrant.core.init_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$vocloj$dev_SLASH_recognizer,(function (_,p__21204){
var map__21205 = p__21204;
var map__21205__$1 = (((((!((map__21205 == null))))?(((((map__21205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21205.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21205):map__21205);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21205__$1,cljs.core.cst$kw$options);
return vocloj.web.create_recognizer.cljs$core$IFn$_invoke$arity$2(options,reagent.core.atom);
}));
integrant.core.init_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$vocloj$dev_SLASH_state,(function (_,initial){
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(initial);
}));
integrant.core.resume_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$vocloj$dev_SLASH_state,(function (_,___$1,___$2,prev){
return prev;
}));
integrant.core.init_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$vocloj$dev_SLASH_synthesizer,(function (_,p__21207){
var map__21208 = p__21207;
var map__21208__$1 = (((((!((map__21208 == null))))?(((((map__21208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21208):map__21208);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21208__$1,cljs.core.cst$kw$state);
return vocloj.core.add_effect.cljs$core$IFn$_invoke$arity$3(vocloj.web.create_synthesizer.cljs$core$IFn$_invoke$arity$1(reagent.core.atom),cljs.core.cst$kw$vocloj$dev_SLASH_voices,vocloj.dev.synthesizer.make_default_voice_handler(state));
}));
integrant.core.halt_key_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$vocloj$dev_SLASH_synthesizer,(function (_,synth){
return vocloj.web.remove_listeners(synth);
}));
integrant.core.init_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$vocloj$dev_SLASH_ui,(function (_,p__21210){
var map__21211 = p__21210;
var map__21211__$1 = (((((!((map__21211 == null))))?(((((map__21211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21211):map__21211);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21211__$1,cljs.core.cst$kw$state);
var synth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21211__$1,cljs.core.cst$kw$synth);
var recognizer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21211__$1,cljs.core.cst$kw$recognizer);
var stream = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21211__$1,cljs.core.cst$kw$stream);
var recog_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21211__$1,cljs.core.cst$kw$recog_DASH_handler);
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [vocloj.dev.application,state,synth,recognizer,recog_handler,stream], null),document.getElementById("application"));
}));
if((typeof vocloj !== 'undefined') && (typeof vocloj.dev !== 'undefined') && (typeof vocloj.dev.system !== 'undefined')){
} else {
vocloj.dev.system = integrant.core.init.cljs$core$IFn$_invoke$arity$1(vocloj.dev.config);
}
vocloj.dev.restart = (function vocloj$dev$restart(){
integrant.core.suspend_BANG_.cljs$core$IFn$_invoke$arity$1(vocloj.dev.system);

return integrant.core.resume.cljs$core$IFn$_invoke$arity$2(vocloj.dev.config,vocloj.dev.system);
});
vocloj.dev.after_reload = (function vocloj$dev$after_reload(){
return vocloj.dev.restart();
});
