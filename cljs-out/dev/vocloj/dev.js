// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('vocloj.dev');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('integrant.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('vocloj.dev.recognizer');
goog.require('vocloj.dev.synthesizer');
goog.require('vocloj.web');
vocloj.dev.nav = (function vocloj$dev$nav(screen,_STAR_state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nav$app_nav,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["nav-item",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(screen,cljs.core.cst$kw$synth))?"nav-item--active":null)], null),cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_STAR_state,cljs.core.assoc,cljs.core.cst$kw$nav_SLASH_screen,cljs.core.cst$kw$synth);
})], null),"Synthesis"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["nav-item",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(screen,cljs.core.cst$kw$recognition))?"nav-item--active":null)], null),cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_STAR_state,cljs.core.assoc,cljs.core.cst$kw$nav_SLASH_screen,cljs.core.cst$kw$recognition);
})], null),"Recognition"], null)], null)], null);
});
vocloj.dev.application = (function vocloj$dev$application(_STAR_state,synth,recognition,recog_handler){
var screen = cljs.core.cst$kw$nav_SLASH_screen.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_STAR_state));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$application,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vocloj.dev.nav,screen,_STAR_state], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(screen,cljs.core.cst$kw$synth))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vocloj.dev.synthesizer.synthesizer,_STAR_state,synth], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [vocloj.dev.recognizer.recognizer,_STAR_state,recognition,recog_handler], null))], null);
});
vocloj.dev.config = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$vocloj$dev_SLASH_state,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$nav_SLASH_screen,cljs.core.cst$kw$synth,cljs.core.cst$kw$synth_SLASH_voice_DASH_id,"Alex",cljs.core.cst$kw$synth_SLASH_text,"",cljs.core.cst$kw$synth_SLASH_pitch,1.0,cljs.core.cst$kw$synth_SLASH_rate,1.0,cljs.core.cst$kw$synth_SLASH_volume,1.0,cljs.core.cst$kw$recog_SLASH_transcript,null], null),cljs.core.cst$kw$vocloj$dev_SLASH_synthesizer,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$vocloj$dev_SLASH_recognizer,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$continuous_QMARK_,true], null)], null),cljs.core.cst$kw$vocloj$dev_SLASH_recog_DASH_handler,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$state,integrant.core.ref(cljs.core.cst$kw$vocloj$dev_SLASH_state)], null),cljs.core.cst$kw$vocloj$dev_SLASH_ui,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$recog_DASH_handler,integrant.core.ref(cljs.core.cst$kw$vocloj$dev_SLASH_recog_DASH_handler),cljs.core.cst$kw$state,integrant.core.ref(cljs.core.cst$kw$vocloj$dev_SLASH_state),cljs.core.cst$kw$synth,integrant.core.ref(cljs.core.cst$kw$vocloj$dev_SLASH_synthesizer),cljs.core.cst$kw$recognizer,integrant.core.ref(cljs.core.cst$kw$vocloj$dev_SLASH_recognizer)], null)], null);
integrant.core.init_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$vocloj$dev_SLASH_recog_DASH_handler,(function (_,p__20966){
var map__20967 = p__20966;
var map__20967__$1 = (((((!((map__20967 == null))))?(((((map__20967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20967):map__20967);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20967__$1,cljs.core.cst$kw$state);
return (function (message){
return vocloj.dev.recognizer.handler(message,state);
});
}));
integrant.core.init_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$vocloj$dev_SLASH_recognizer,(function (_,p__20969){
var map__20970 = p__20969;
var map__20970__$1 = (((((!((map__20970 == null))))?(((((map__20970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20970):map__20970);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20970__$1,cljs.core.cst$kw$options);
return vocloj.web.create_recognizer.cljs$core$IFn$_invoke$arity$2(options,reagent.core.atom);
}));
integrant.core.init_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$vocloj$dev_SLASH_state,(function (_,initial){
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(initial);
}));
integrant.core.resume_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$vocloj$dev_SLASH_state,(function (_,___$1,___$2,prev){
return prev;
}));
integrant.core.init_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$vocloj$dev_SLASH_synthesizer,(function (_,___$1){
return vocloj.web.create_synthesizer.cljs$core$IFn$_invoke$arity$1(reagent.core.atom);
}));
integrant.core.halt_key_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$vocloj$dev_SLASH_synthesizer,(function (_,synth){
return vocloj.web.remove_listeners(synth);
}));
integrant.core.init_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$vocloj$dev_SLASH_ui,(function (_,p__20972){
var map__20973 = p__20972;
var map__20973__$1 = (((((!((map__20973 == null))))?(((((map__20973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20973):map__20973);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20973__$1,cljs.core.cst$kw$state);
var synth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20973__$1,cljs.core.cst$kw$synth);
var recognizer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20973__$1,cljs.core.cst$kw$recognizer);
var recog_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20973__$1,cljs.core.cst$kw$recog_DASH_handler);
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [vocloj.dev.application,state,synth,recognizer,recog_handler], null),document.getElementById("application"));
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
