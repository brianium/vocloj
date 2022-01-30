// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__16710 = arguments.length;
switch (G__16710) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16711 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16711 = (function (f,blockable,meta16712){
this.f = f;
this.blockable = blockable;
this.meta16712 = meta16712;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16711.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16713,meta16712__$1){
var self__ = this;
var _16713__$1 = this;
return (new cljs.core.async.t_cljs$core$async16711(self__.f,self__.blockable,meta16712__$1));
}));

(cljs.core.async.t_cljs$core$async16711.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16713){
var self__ = this;
var _16713__$1 = this;
return self__.meta16712;
}));

(cljs.core.async.t_cljs$core$async16711.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16711.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16711.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async16711.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async16711.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta16712], null);
}));

(cljs.core.async.t_cljs$core$async16711.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16711.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16711");

(cljs.core.async.t_cljs$core$async16711.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async16711");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16711.
 */
cljs.core.async.__GT_t_cljs$core$async16711 = (function cljs$core$async$__GT_t_cljs$core$async16711(f__$1,blockable__$1,meta16712){
return (new cljs.core.async.t_cljs$core$async16711(f__$1,blockable__$1,meta16712));
});

}

return (new cljs.core.async.t_cljs$core$async16711(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__16717 = arguments.length;
switch (G__16717) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__16720 = arguments.length;
switch (G__16720) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__16723 = arguments.length;
switch (G__16723) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_16725 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16725) : fn1.call(null,val_16725));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16725) : fn1.call(null,val_16725));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__16727 = arguments.length;
switch (G__16727) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___16729 = n;
var x_16730 = (0);
while(true){
if((x_16730 < n__4613__auto___16729)){
(a[x_16730] = x_16730);

var G__16731 = (x_16730 + (1));
x_16730 = G__16731;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16732 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16732 = (function (flag,meta16733){
this.flag = flag;
this.meta16733 = meta16733;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16732.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16734,meta16733__$1){
var self__ = this;
var _16734__$1 = this;
return (new cljs.core.async.t_cljs$core$async16732(self__.flag,meta16733__$1));
}));

(cljs.core.async.t_cljs$core$async16732.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16734){
var self__ = this;
var _16734__$1 = this;
return self__.meta16733;
}));

(cljs.core.async.t_cljs$core$async16732.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16732.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async16732.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16732.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async16732.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta16733], null);
}));

(cljs.core.async.t_cljs$core$async16732.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16732.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16732");

(cljs.core.async.t_cljs$core$async16732.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async16732");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16732.
 */
cljs.core.async.__GT_t_cljs$core$async16732 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async16732(flag__$1,meta16733){
return (new cljs.core.async.t_cljs$core$async16732(flag__$1,meta16733));
});

}

return (new cljs.core.async.t_cljs$core$async16732(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16735 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16735 = (function (flag,cb,meta16736){
this.flag = flag;
this.cb = cb;
this.meta16736 = meta16736;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16735.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16737,meta16736__$1){
var self__ = this;
var _16737__$1 = this;
return (new cljs.core.async.t_cljs$core$async16735(self__.flag,self__.cb,meta16736__$1));
}));

(cljs.core.async.t_cljs$core$async16735.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16737){
var self__ = this;
var _16737__$1 = this;
return self__.meta16736;
}));

(cljs.core.async.t_cljs$core$async16735.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16735.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async16735.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16735.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async16735.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta16736], null);
}));

(cljs.core.async.t_cljs$core$async16735.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16735.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16735");

(cljs.core.async.t_cljs$core$async16735.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async16735");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16735.
 */
cljs.core.async.__GT_t_cljs$core$async16735 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async16735(flag__$1,cb__$1,meta16736){
return (new cljs.core.async.t_cljs$core$async16735(flag__$1,cb__$1,meta16736));
});

}

return (new cljs.core.async.t_cljs$core$async16735(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16738_SHARP_){
var G__16740 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16738_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16740) : fret.call(null,G__16740));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16739_SHARP_){
var G__16741 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16739_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16741) : fret.call(null,G__16741));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__16742 = (i + (1));
i = G__16742;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5753__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16748 = arguments.length;
var i__4737__auto___16749 = (0);
while(true){
if((i__4737__auto___16749 < len__4736__auto___16748)){
args__4742__auto__.push((arguments[i__4737__auto___16749]));

var G__16750 = (i__4737__auto___16749 + (1));
i__4737__auto___16749 = G__16750;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__16745){
var map__16746 = p__16745;
var map__16746__$1 = (((((!((map__16746 == null))))?(((((map__16746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16746):map__16746);
var opts = map__16746__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq16743){
var G__16744 = cljs.core.first(seq16743);
var seq16743__$1 = cljs.core.next(seq16743);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16744,seq16743__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__16752 = arguments.length;
switch (G__16752) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__16650__auto___16799 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16651__auto__ = (function (){var switch__14816__auto__ = (function (state_16776){
var state_val_16777 = (state_16776[(1)]);
if((state_val_16777 === (7))){
var inst_16772 = (state_16776[(2)]);
var state_16776__$1 = state_16776;
var statearr_16778_16800 = state_16776__$1;
(statearr_16778_16800[(2)] = inst_16772);

(statearr_16778_16800[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16777 === (1))){
var state_16776__$1 = state_16776;
var statearr_16779_16801 = state_16776__$1;
(statearr_16779_16801[(2)] = null);

(statearr_16779_16801[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16777 === (4))){
var inst_16755 = (state_16776[(7)]);
var inst_16755__$1 = (state_16776[(2)]);
var inst_16756 = (inst_16755__$1 == null);
var state_16776__$1 = (function (){var statearr_16780 = state_16776;
(statearr_16780[(7)] = inst_16755__$1);

return statearr_16780;
})();
if(cljs.core.truth_(inst_16756)){
var statearr_16781_16802 = state_16776__$1;
(statearr_16781_16802[(1)] = (5));

} else {
var statearr_16782_16803 = state_16776__$1;
(statearr_16782_16803[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16777 === (13))){
var state_16776__$1 = state_16776;
var statearr_16783_16804 = state_16776__$1;
(statearr_16783_16804[(2)] = null);

(statearr_16783_16804[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16777 === (6))){
var inst_16755 = (state_16776[(7)]);
var state_16776__$1 = state_16776;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16776__$1,(11),to,inst_16755);
} else {
if((state_val_16777 === (3))){
var inst_16774 = (state_16776[(2)]);
var state_16776__$1 = state_16776;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16776__$1,inst_16774);
} else {
if((state_val_16777 === (12))){
var state_16776__$1 = state_16776;
var statearr_16784_16805 = state_16776__$1;
(statearr_16784_16805[(2)] = null);

(statearr_16784_16805[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16777 === (2))){
var state_16776__$1 = state_16776;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16776__$1,(4),from);
} else {
if((state_val_16777 === (11))){
var inst_16765 = (state_16776[(2)]);
var state_16776__$1 = state_16776;
if(cljs.core.truth_(inst_16765)){
var statearr_16785_16806 = state_16776__$1;
(statearr_16785_16806[(1)] = (12));

} else {
var statearr_16786_16807 = state_16776__$1;
(statearr_16786_16807[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16777 === (9))){
var state_16776__$1 = state_16776;
var statearr_16787_16808 = state_16776__$1;
(statearr_16787_16808[(2)] = null);

(statearr_16787_16808[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16777 === (5))){
var state_16776__$1 = state_16776;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16788_16809 = state_16776__$1;
(statearr_16788_16809[(1)] = (8));

} else {
var statearr_16789_16810 = state_16776__$1;
(statearr_16789_16810[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16777 === (14))){
var inst_16770 = (state_16776[(2)]);
var state_16776__$1 = state_16776;
var statearr_16790_16811 = state_16776__$1;
(statearr_16790_16811[(2)] = inst_16770);

(statearr_16790_16811[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16777 === (10))){
var inst_16762 = (state_16776[(2)]);
var state_16776__$1 = state_16776;
var statearr_16791_16812 = state_16776__$1;
(statearr_16791_16812[(2)] = inst_16762);

(statearr_16791_16812[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16777 === (8))){
var inst_16759 = cljs.core.async.close_BANG_(to);
var state_16776__$1 = state_16776;
var statearr_16792_16813 = state_16776__$1;
(statearr_16792_16813[(2)] = inst_16759);

(statearr_16792_16813[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
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
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14817__auto__ = null;
var cljs$core$async$state_machine__14817__auto____0 = (function (){
var statearr_16793 = [null,null,null,null,null,null,null,null];
(statearr_16793[(0)] = cljs$core$async$state_machine__14817__auto__);

(statearr_16793[(1)] = (1));

return statearr_16793;
});
var cljs$core$async$state_machine__14817__auto____1 = (function (state_16776){
while(true){
var ret_value__14818__auto__ = (function (){try{while(true){
var result__14819__auto__ = switch__14816__auto__(state_16776);
if(cljs.core.keyword_identical_QMARK_(result__14819__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14819__auto__;
}
break;
}
}catch (e16794){var ex__14820__auto__ = e16794;
var statearr_16795_16814 = state_16776;
(statearr_16795_16814[(2)] = ex__14820__auto__);


if(cljs.core.seq((state_16776[(4)]))){
var statearr_16796_16815 = state_16776;
(statearr_16796_16815[(1)] = cljs.core.first((state_16776[(4)])));

} else {
throw ex__14820__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14818__auto__,cljs.core.cst$kw$recur)){
var G__16816 = state_16776;
state_16776 = G__16816;
continue;
} else {
return ret_value__14818__auto__;
}
break;
}
});
cljs$core$async$state_machine__14817__auto__ = function(state_16776){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14817__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14817__auto____1.call(this,state_16776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14817__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14817__auto____0;
cljs$core$async$state_machine__14817__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14817__auto____1;
return cljs$core$async$state_machine__14817__auto__;
})()
})();
var state__16652__auto__ = (function (){var statearr_16797 = (f__16651__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16651__auto__.cljs$core$IFn$_invoke$arity$0() : f__16651__auto__.call(null));
(statearr_16797[(6)] = c__16650__auto___16799);

return statearr_16797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16652__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__16817){
var vec__16818 = p__16817;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16818,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16818,(1),null);
var job = vec__16818;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__16650__auto___16994 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16651__auto__ = (function (){var switch__14816__auto__ = (function (state_16825){
var state_val_16826 = (state_16825[(1)]);
if((state_val_16826 === (1))){
var state_16825__$1 = state_16825;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16825__$1,(2),res,v);
} else {
if((state_val_16826 === (2))){
var inst_16822 = (state_16825[(2)]);
var inst_16823 = cljs.core.async.close_BANG_(res);
var state_16825__$1 = (function (){var statearr_16827 = state_16825;
(statearr_16827[(7)] = inst_16822);

return statearr_16827;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16825__$1,inst_16823);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14817__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14817__auto____0 = (function (){
var statearr_16828 = [null,null,null,null,null,null,null,null];
(statearr_16828[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14817__auto__);

(statearr_16828[(1)] = (1));

return statearr_16828;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14817__auto____1 = (function (state_16825){
while(true){
var ret_value__14818__auto__ = (function (){try{while(true){
var result__14819__auto__ = switch__14816__auto__(state_16825);
if(cljs.core.keyword_identical_QMARK_(result__14819__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14819__auto__;
}
break;
}
}catch (e16829){var ex__14820__auto__ = e16829;
var statearr_16830_16995 = state_16825;
(statearr_16830_16995[(2)] = ex__14820__auto__);


if(cljs.core.seq((state_16825[(4)]))){
var statearr_16831_16996 = state_16825;
(statearr_16831_16996[(1)] = cljs.core.first((state_16825[(4)])));

} else {
throw ex__14820__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14818__auto__,cljs.core.cst$kw$recur)){
var G__16997 = state_16825;
state_16825 = G__16997;
continue;
} else {
return ret_value__14818__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14817__auto__ = function(state_16825){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14817__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14817__auto____1.call(this,state_16825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14817__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14817__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14817__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14817__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14817__auto__;
})()
})();
var state__16652__auto__ = (function (){var statearr_16832 = (f__16651__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16651__auto__.cljs$core$IFn$_invoke$arity$0() : f__16651__auto__.call(null));
(statearr_16832[(6)] = c__16650__auto___16994);

return statearr_16832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16652__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__16833){
var vec__16834 = p__16833;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16834,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16834,(1),null);
var job = vec__16834;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___16998 = n;
var __16999 = (0);
while(true){
if((__16999 < n__4613__auto___16998)){
var G__16837_17000 = type;
var G__16837_17001__$1 = (((G__16837_17000 instanceof cljs.core.Keyword))?G__16837_17000.fqn:null);
switch (G__16837_17001__$1) {
case "compute":
var c__16650__auto___17003 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16999,c__16650__auto___17003,G__16837_17000,G__16837_17001__$1,n__4613__auto___16998,jobs,results,process,async){
return (function (){
var f__16651__auto__ = (function (){var switch__14816__auto__ = ((function (__16999,c__16650__auto___17003,G__16837_17000,G__16837_17001__$1,n__4613__auto___16998,jobs,results,process,async){
return (function (state_16850){
var state_val_16851 = (state_16850[(1)]);
if((state_val_16851 === (1))){
var state_16850__$1 = state_16850;
var statearr_16852_17004 = state_16850__$1;
(statearr_16852_17004[(2)] = null);

(statearr_16852_17004[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16851 === (2))){
var state_16850__$1 = state_16850;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16850__$1,(4),jobs);
} else {
if((state_val_16851 === (3))){
var inst_16848 = (state_16850[(2)]);
var state_16850__$1 = state_16850;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16850__$1,inst_16848);
} else {
if((state_val_16851 === (4))){
var inst_16840 = (state_16850[(2)]);
var inst_16841 = process(inst_16840);
var state_16850__$1 = state_16850;
if(cljs.core.truth_(inst_16841)){
var statearr_16853_17005 = state_16850__$1;
(statearr_16853_17005[(1)] = (5));

} else {
var statearr_16854_17006 = state_16850__$1;
(statearr_16854_17006[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16851 === (5))){
var state_16850__$1 = state_16850;
var statearr_16855_17007 = state_16850__$1;
(statearr_16855_17007[(2)] = null);

(statearr_16855_17007[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16851 === (6))){
var state_16850__$1 = state_16850;
var statearr_16856_17008 = state_16850__$1;
(statearr_16856_17008[(2)] = null);

(statearr_16856_17008[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16851 === (7))){
var inst_16846 = (state_16850[(2)]);
var state_16850__$1 = state_16850;
var statearr_16857_17009 = state_16850__$1;
(statearr_16857_17009[(2)] = inst_16846);

(statearr_16857_17009[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__16999,c__16650__auto___17003,G__16837_17000,G__16837_17001__$1,n__4613__auto___16998,jobs,results,process,async))
;
return ((function (__16999,switch__14816__auto__,c__16650__auto___17003,G__16837_17000,G__16837_17001__$1,n__4613__auto___16998,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14817__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14817__auto____0 = (function (){
var statearr_16858 = [null,null,null,null,null,null,null];
(statearr_16858[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14817__auto__);

(statearr_16858[(1)] = (1));

return statearr_16858;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14817__auto____1 = (function (state_16850){
while(true){
var ret_value__14818__auto__ = (function (){try{while(true){
var result__14819__auto__ = switch__14816__auto__(state_16850);
if(cljs.core.keyword_identical_QMARK_(result__14819__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14819__auto__;
}
break;
}
}catch (e16859){var ex__14820__auto__ = e16859;
var statearr_16860_17010 = state_16850;
(statearr_16860_17010[(2)] = ex__14820__auto__);


if(cljs.core.seq((state_16850[(4)]))){
var statearr_16861_17011 = state_16850;
(statearr_16861_17011[(1)] = cljs.core.first((state_16850[(4)])));

} else {
throw ex__14820__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14818__auto__,cljs.core.cst$kw$recur)){
var G__17012 = state_16850;
state_16850 = G__17012;
continue;
} else {
return ret_value__14818__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14817__auto__ = function(state_16850){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14817__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14817__auto____1.call(this,state_16850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14817__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14817__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14817__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14817__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14817__auto__;
})()
;})(__16999,switch__14816__auto__,c__16650__auto___17003,G__16837_17000,G__16837_17001__$1,n__4613__auto___16998,jobs,results,process,async))
})();
var state__16652__auto__ = (function (){var statearr_16862 = (f__16651__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16651__auto__.cljs$core$IFn$_invoke$arity$0() : f__16651__auto__.call(null));
(statearr_16862[(6)] = c__16650__auto___17003);

return statearr_16862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16652__auto__);
});})(__16999,c__16650__auto___17003,G__16837_17000,G__16837_17001__$1,n__4613__auto___16998,jobs,results,process,async))
);


break;
case "async":
var c__16650__auto___17013 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16999,c__16650__auto___17013,G__16837_17000,G__16837_17001__$1,n__4613__auto___16998,jobs,results,process,async){
return (function (){
var f__16651__auto__ = (function (){var switch__14816__auto__ = ((function (__16999,c__16650__auto___17013,G__16837_17000,G__16837_17001__$1,n__4613__auto___16998,jobs,results,process,async){
return (function (state_16875){
var state_val_16876 = (state_16875[(1)]);
if((state_val_16876 === (1))){
var state_16875__$1 = state_16875;
var statearr_16877_17014 = state_16875__$1;
(statearr_16877_17014[(2)] = null);

(statearr_16877_17014[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16876 === (2))){
var state_16875__$1 = state_16875;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16875__$1,(4),jobs);
} else {
if((state_val_16876 === (3))){
var inst_16873 = (state_16875[(2)]);
var state_16875__$1 = state_16875;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16875__$1,inst_16873);
} else {
if((state_val_16876 === (4))){
var inst_16865 = (state_16875[(2)]);
var inst_16866 = async(inst_16865);
var state_16875__$1 = state_16875;
if(cljs.core.truth_(inst_16866)){
var statearr_16878_17015 = state_16875__$1;
(statearr_16878_17015[(1)] = (5));

} else {
var statearr_16879_17016 = state_16875__$1;
(statearr_16879_17016[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16876 === (5))){
var state_16875__$1 = state_16875;
var statearr_16880_17017 = state_16875__$1;
(statearr_16880_17017[(2)] = null);

(statearr_16880_17017[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16876 === (6))){
var state_16875__$1 = state_16875;
var statearr_16881_17018 = state_16875__$1;
(statearr_16881_17018[(2)] = null);

(statearr_16881_17018[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16876 === (7))){
var inst_16871 = (state_16875[(2)]);
var state_16875__$1 = state_16875;
var statearr_16882_17019 = state_16875__$1;
(statearr_16882_17019[(2)] = inst_16871);

(statearr_16882_17019[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__16999,c__16650__auto___17013,G__16837_17000,G__16837_17001__$1,n__4613__auto___16998,jobs,results,process,async))
;
return ((function (__16999,switch__14816__auto__,c__16650__auto___17013,G__16837_17000,G__16837_17001__$1,n__4613__auto___16998,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14817__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14817__auto____0 = (function (){
var statearr_16883 = [null,null,null,null,null,null,null];
(statearr_16883[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14817__auto__);

(statearr_16883[(1)] = (1));

return statearr_16883;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14817__auto____1 = (function (state_16875){
while(true){
var ret_value__14818__auto__ = (function (){try{while(true){
var result__14819__auto__ = switch__14816__auto__(state_16875);
if(cljs.core.keyword_identical_QMARK_(result__14819__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14819__auto__;
}
break;
}
}catch (e16884){var ex__14820__auto__ = e16884;
var statearr_16885_17020 = state_16875;
(statearr_16885_17020[(2)] = ex__14820__auto__);


if(cljs.core.seq((state_16875[(4)]))){
var statearr_16886_17021 = state_16875;
(statearr_16886_17021[(1)] = cljs.core.first((state_16875[(4)])));

} else {
throw ex__14820__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14818__auto__,cljs.core.cst$kw$recur)){
var G__17022 = state_16875;
state_16875 = G__17022;
continue;
} else {
return ret_value__14818__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14817__auto__ = function(state_16875){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14817__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14817__auto____1.call(this,state_16875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14817__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14817__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14817__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14817__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14817__auto__;
})()
;})(__16999,switch__14816__auto__,c__16650__auto___17013,G__16837_17000,G__16837_17001__$1,n__4613__auto___16998,jobs,results,process,async))
})();
var state__16652__auto__ = (function (){var statearr_16887 = (f__16651__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16651__auto__.cljs$core$IFn$_invoke$arity$0() : f__16651__auto__.call(null));
(statearr_16887[(6)] = c__16650__auto___17013);

return statearr_16887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16652__auto__);
});})(__16999,c__16650__auto___17013,G__16837_17000,G__16837_17001__$1,n__4613__auto___16998,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16837_17001__$1)].join('')));

}

var G__17023 = (__16999 + (1));
__16999 = G__17023;
continue;
} else {
}
break;
}

var c__16650__auto___17024 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16651__auto__ = (function (){var switch__14816__auto__ = (function (state_16909){
var state_val_16910 = (state_16909[(1)]);
if((state_val_16910 === (7))){
var inst_16905 = (state_16909[(2)]);
var state_16909__$1 = state_16909;
var statearr_16911_17025 = state_16909__$1;
(statearr_16911_17025[(2)] = inst_16905);

(statearr_16911_17025[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16910 === (1))){
var state_16909__$1 = state_16909;
var statearr_16912_17026 = state_16909__$1;
(statearr_16912_17026[(2)] = null);

(statearr_16912_17026[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16910 === (4))){
var inst_16890 = (state_16909[(7)]);
var inst_16890__$1 = (state_16909[(2)]);
var inst_16891 = (inst_16890__$1 == null);
var state_16909__$1 = (function (){var statearr_16913 = state_16909;
(statearr_16913[(7)] = inst_16890__$1);

return statearr_16913;
})();
if(cljs.core.truth_(inst_16891)){
var statearr_16914_17027 = state_16909__$1;
(statearr_16914_17027[(1)] = (5));

} else {
var statearr_16915_17028 = state_16909__$1;
(statearr_16915_17028[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16910 === (6))){
var inst_16890 = (state_16909[(7)]);
var inst_16895 = (state_16909[(8)]);
var inst_16895__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_16896 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16897 = [inst_16890,inst_16895__$1];
var inst_16898 = (new cljs.core.PersistentVector(null,2,(5),inst_16896,inst_16897,null));
var state_16909__$1 = (function (){var statearr_16916 = state_16909;
(statearr_16916[(8)] = inst_16895__$1);

return statearr_16916;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16909__$1,(8),jobs,inst_16898);
} else {
if((state_val_16910 === (3))){
var inst_16907 = (state_16909[(2)]);
var state_16909__$1 = state_16909;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16909__$1,inst_16907);
} else {
if((state_val_16910 === (2))){
var state_16909__$1 = state_16909;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16909__$1,(4),from);
} else {
if((state_val_16910 === (9))){
var inst_16902 = (state_16909[(2)]);
var state_16909__$1 = (function (){var statearr_16917 = state_16909;
(statearr_16917[(9)] = inst_16902);

return statearr_16917;
})();
var statearr_16918_17029 = state_16909__$1;
(statearr_16918_17029[(2)] = null);

(statearr_16918_17029[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16910 === (5))){
var inst_16893 = cljs.core.async.close_BANG_(jobs);
var state_16909__$1 = state_16909;
var statearr_16919_17030 = state_16909__$1;
(statearr_16919_17030[(2)] = inst_16893);

(statearr_16919_17030[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16910 === (8))){
var inst_16895 = (state_16909[(8)]);
var inst_16900 = (state_16909[(2)]);
var state_16909__$1 = (function (){var statearr_16920 = state_16909;
(statearr_16920[(10)] = inst_16900);

return statearr_16920;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16909__$1,(9),results,inst_16895);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14817__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14817__auto____0 = (function (){
var statearr_16921 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16921[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14817__auto__);

(statearr_16921[(1)] = (1));

return statearr_16921;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14817__auto____1 = (function (state_16909){
while(true){
var ret_value__14818__auto__ = (function (){try{while(true){
var result__14819__auto__ = switch__14816__auto__(state_16909);
if(cljs.core.keyword_identical_QMARK_(result__14819__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14819__auto__;
}
break;
}
}catch (e16922){var ex__14820__auto__ = e16922;
var statearr_16923_17031 = state_16909;
(statearr_16923_17031[(2)] = ex__14820__auto__);


if(cljs.core.seq((state_16909[(4)]))){
var statearr_16924_17032 = state_16909;
(statearr_16924_17032[(1)] = cljs.core.first((state_16909[(4)])));

} else {
throw ex__14820__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14818__auto__,cljs.core.cst$kw$recur)){
var G__17033 = state_16909;
state_16909 = G__17033;
continue;
} else {
return ret_value__14818__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14817__auto__ = function(state_16909){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14817__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14817__auto____1.call(this,state_16909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14817__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14817__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14817__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14817__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14817__auto__;
})()
})();
var state__16652__auto__ = (function (){var statearr_16925 = (f__16651__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16651__auto__.cljs$core$IFn$_invoke$arity$0() : f__16651__auto__.call(null));
(statearr_16925[(6)] = c__16650__auto___17024);

return statearr_16925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16652__auto__);
}));


var c__16650__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16651__auto__ = (function (){var switch__14816__auto__ = (function (state_16963){
var state_val_16964 = (state_16963[(1)]);
if((state_val_16964 === (7))){
var inst_16959 = (state_16963[(2)]);
var state_16963__$1 = state_16963;
var statearr_16965_17034 = state_16963__$1;
(statearr_16965_17034[(2)] = inst_16959);

(statearr_16965_17034[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16964 === (20))){
var state_16963__$1 = state_16963;
var statearr_16966_17035 = state_16963__$1;
(statearr_16966_17035[(2)] = null);

(statearr_16966_17035[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16964 === (1))){
var state_16963__$1 = state_16963;
var statearr_16967_17036 = state_16963__$1;
(statearr_16967_17036[(2)] = null);

(statearr_16967_17036[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16964 === (4))){
var inst_16928 = (state_16963[(7)]);
var inst_16928__$1 = (state_16963[(2)]);
var inst_16929 = (inst_16928__$1 == null);
var state_16963__$1 = (function (){var statearr_16968 = state_16963;
(statearr_16968[(7)] = inst_16928__$1);

return statearr_16968;
})();
if(cljs.core.truth_(inst_16929)){
var statearr_16969_17037 = state_16963__$1;
(statearr_16969_17037[(1)] = (5));

} else {
var statearr_16970_17038 = state_16963__$1;
(statearr_16970_17038[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16964 === (15))){
var inst_16941 = (state_16963[(8)]);
var state_16963__$1 = state_16963;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16963__$1,(18),to,inst_16941);
} else {
if((state_val_16964 === (21))){
var inst_16954 = (state_16963[(2)]);
var state_16963__$1 = state_16963;
var statearr_16971_17039 = state_16963__$1;
(statearr_16971_17039[(2)] = inst_16954);

(statearr_16971_17039[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16964 === (13))){
var inst_16956 = (state_16963[(2)]);
var state_16963__$1 = (function (){var statearr_16972 = state_16963;
(statearr_16972[(9)] = inst_16956);

return statearr_16972;
})();
var statearr_16973_17040 = state_16963__$1;
(statearr_16973_17040[(2)] = null);

(statearr_16973_17040[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16964 === (6))){
var inst_16928 = (state_16963[(7)]);
var state_16963__$1 = state_16963;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16963__$1,(11),inst_16928);
} else {
if((state_val_16964 === (17))){
var inst_16949 = (state_16963[(2)]);
var state_16963__$1 = state_16963;
if(cljs.core.truth_(inst_16949)){
var statearr_16974_17041 = state_16963__$1;
(statearr_16974_17041[(1)] = (19));

} else {
var statearr_16975_17042 = state_16963__$1;
(statearr_16975_17042[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16964 === (3))){
var inst_16961 = (state_16963[(2)]);
var state_16963__$1 = state_16963;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16963__$1,inst_16961);
} else {
if((state_val_16964 === (12))){
var inst_16938 = (state_16963[(10)]);
var state_16963__$1 = state_16963;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16963__$1,(14),inst_16938);
} else {
if((state_val_16964 === (2))){
var state_16963__$1 = state_16963;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16963__$1,(4),results);
} else {
if((state_val_16964 === (19))){
var state_16963__$1 = state_16963;
var statearr_16976_17043 = state_16963__$1;
(statearr_16976_17043[(2)] = null);

(statearr_16976_17043[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16964 === (11))){
var inst_16938 = (state_16963[(2)]);
var state_16963__$1 = (function (){var statearr_16977 = state_16963;
(statearr_16977[(10)] = inst_16938);

return statearr_16977;
})();
var statearr_16978_17044 = state_16963__$1;
(statearr_16978_17044[(2)] = null);

(statearr_16978_17044[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16964 === (9))){
var state_16963__$1 = state_16963;
var statearr_16979_17045 = state_16963__$1;
(statearr_16979_17045[(2)] = null);

(statearr_16979_17045[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16964 === (5))){
var state_16963__$1 = state_16963;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16980_17046 = state_16963__$1;
(statearr_16980_17046[(1)] = (8));

} else {
var statearr_16981_17047 = state_16963__$1;
(statearr_16981_17047[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16964 === (14))){
var inst_16941 = (state_16963[(8)]);
var inst_16941__$1 = (state_16963[(2)]);
var inst_16942 = (inst_16941__$1 == null);
var inst_16943 = cljs.core.not(inst_16942);
var state_16963__$1 = (function (){var statearr_16982 = state_16963;
(statearr_16982[(8)] = inst_16941__$1);

return statearr_16982;
})();
if(inst_16943){
var statearr_16983_17048 = state_16963__$1;
(statearr_16983_17048[(1)] = (15));

} else {
var statearr_16984_17049 = state_16963__$1;
(statearr_16984_17049[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16964 === (16))){
var state_16963__$1 = state_16963;
var statearr_16985_17050 = state_16963__$1;
(statearr_16985_17050[(2)] = false);

(statearr_16985_17050[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16964 === (10))){
var inst_16935 = (state_16963[(2)]);
var state_16963__$1 = state_16963;
var statearr_16986_17051 = state_16963__$1;
(statearr_16986_17051[(2)] = inst_16935);

(statearr_16986_17051[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16964 === (18))){
var inst_16946 = (state_16963[(2)]);
var state_16963__$1 = state_16963;
var statearr_16987_17052 = state_16963__$1;
(statearr_16987_17052[(2)] = inst_16946);

(statearr_16987_17052[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16964 === (8))){
var inst_16932 = cljs.core.async.close_BANG_(to);
var state_16963__$1 = state_16963;
var statearr_16988_17053 = state_16963__$1;
(statearr_16988_17053[(2)] = inst_16932);

(statearr_16988_17053[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
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
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14817__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14817__auto____0 = (function (){
var statearr_16989 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16989[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14817__auto__);

(statearr_16989[(1)] = (1));

return statearr_16989;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14817__auto____1 = (function (state_16963){
while(true){
var ret_value__14818__auto__ = (function (){try{while(true){
var result__14819__auto__ = switch__14816__auto__(state_16963);
if(cljs.core.keyword_identical_QMARK_(result__14819__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14819__auto__;
}
break;
}
}catch (e16990){var ex__14820__auto__ = e16990;
var statearr_16991_17054 = state_16963;
(statearr_16991_17054[(2)] = ex__14820__auto__);


if(cljs.core.seq((state_16963[(4)]))){
var statearr_16992_17055 = state_16963;
(statearr_16992_17055[(1)] = cljs.core.first((state_16963[(4)])));

} else {
throw ex__14820__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14818__auto__,cljs.core.cst$kw$recur)){
var G__17056 = state_16963;
state_16963 = G__17056;
continue;
} else {
return ret_value__14818__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14817__auto__ = function(state_16963){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14817__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14817__auto____1.call(this,state_16963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14817__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14817__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14817__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14817__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14817__auto__;
})()
})();
var state__16652__auto__ = (function (){var statearr_16993 = (f__16651__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16651__auto__.cljs$core$IFn$_invoke$arity$0() : f__16651__auto__.call(null));
(statearr_16993[(6)] = c__16650__auto__);

return statearr_16993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16652__auto__);
}));

return c__16650__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__17058 = arguments.length;
switch (G__17058) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__17061 = arguments.length;
switch (G__17061) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__17064 = arguments.length;
switch (G__17064) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__16650__auto___17114 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16651__auto__ = (function (){var switch__14816__auto__ = (function (state_17090){
var state_val_17091 = (state_17090[(1)]);
if((state_val_17091 === (7))){
var inst_17086 = (state_17090[(2)]);
var state_17090__$1 = state_17090;
var statearr_17092_17115 = state_17090__$1;
(statearr_17092_17115[(2)] = inst_17086);

(statearr_17092_17115[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17091 === (1))){
var state_17090__$1 = state_17090;
var statearr_17093_17116 = state_17090__$1;
(statearr_17093_17116[(2)] = null);

(statearr_17093_17116[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17091 === (4))){
var inst_17067 = (state_17090[(7)]);
var inst_17067__$1 = (state_17090[(2)]);
var inst_17068 = (inst_17067__$1 == null);
var state_17090__$1 = (function (){var statearr_17094 = state_17090;
(statearr_17094[(7)] = inst_17067__$1);

return statearr_17094;
})();
if(cljs.core.truth_(inst_17068)){
var statearr_17095_17117 = state_17090__$1;
(statearr_17095_17117[(1)] = (5));

} else {
var statearr_17096_17118 = state_17090__$1;
(statearr_17096_17118[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17091 === (13))){
var state_17090__$1 = state_17090;
var statearr_17097_17119 = state_17090__$1;
(statearr_17097_17119[(2)] = null);

(statearr_17097_17119[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17091 === (6))){
var inst_17067 = (state_17090[(7)]);
var inst_17073 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17067) : p.call(null,inst_17067));
var state_17090__$1 = state_17090;
if(cljs.core.truth_(inst_17073)){
var statearr_17098_17120 = state_17090__$1;
(statearr_17098_17120[(1)] = (9));

} else {
var statearr_17099_17121 = state_17090__$1;
(statearr_17099_17121[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17091 === (3))){
var inst_17088 = (state_17090[(2)]);
var state_17090__$1 = state_17090;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17090__$1,inst_17088);
} else {
if((state_val_17091 === (12))){
var state_17090__$1 = state_17090;
var statearr_17100_17122 = state_17090__$1;
(statearr_17100_17122[(2)] = null);

(statearr_17100_17122[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17091 === (2))){
var state_17090__$1 = state_17090;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17090__$1,(4),ch);
} else {
if((state_val_17091 === (11))){
var inst_17067 = (state_17090[(7)]);
var inst_17077 = (state_17090[(2)]);
var state_17090__$1 = state_17090;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17090__$1,(8),inst_17077,inst_17067);
} else {
if((state_val_17091 === (9))){
var state_17090__$1 = state_17090;
var statearr_17101_17123 = state_17090__$1;
(statearr_17101_17123[(2)] = tc);

(statearr_17101_17123[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17091 === (5))){
var inst_17070 = cljs.core.async.close_BANG_(tc);
var inst_17071 = cljs.core.async.close_BANG_(fc);
var state_17090__$1 = (function (){var statearr_17102 = state_17090;
(statearr_17102[(8)] = inst_17070);

return statearr_17102;
})();
var statearr_17103_17124 = state_17090__$1;
(statearr_17103_17124[(2)] = inst_17071);

(statearr_17103_17124[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17091 === (14))){
var inst_17084 = (state_17090[(2)]);
var state_17090__$1 = state_17090;
var statearr_17104_17125 = state_17090__$1;
(statearr_17104_17125[(2)] = inst_17084);

(statearr_17104_17125[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17091 === (10))){
var state_17090__$1 = state_17090;
var statearr_17105_17126 = state_17090__$1;
(statearr_17105_17126[(2)] = fc);

(statearr_17105_17126[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17091 === (8))){
var inst_17079 = (state_17090[(2)]);
var state_17090__$1 = state_17090;
if(cljs.core.truth_(inst_17079)){
var statearr_17106_17127 = state_17090__$1;
(statearr_17106_17127[(1)] = (12));

} else {
var statearr_17107_17128 = state_17090__$1;
(statearr_17107_17128[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
return null;
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
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14817__auto__ = null;
var cljs$core$async$state_machine__14817__auto____0 = (function (){
var statearr_17108 = [null,null,null,null,null,null,null,null,null];
(statearr_17108[(0)] = cljs$core$async$state_machine__14817__auto__);

(statearr_17108[(1)] = (1));

return statearr_17108;
});
var cljs$core$async$state_machine__14817__auto____1 = (function (state_17090){
while(true){
var ret_value__14818__auto__ = (function (){try{while(true){
var result__14819__auto__ = switch__14816__auto__(state_17090);
if(cljs.core.keyword_identical_QMARK_(result__14819__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14819__auto__;
}
break;
}
}catch (e17109){var ex__14820__auto__ = e17109;
var statearr_17110_17129 = state_17090;
(statearr_17110_17129[(2)] = ex__14820__auto__);


if(cljs.core.seq((state_17090[(4)]))){
var statearr_17111_17130 = state_17090;
(statearr_17111_17130[(1)] = cljs.core.first((state_17090[(4)])));

} else {
throw ex__14820__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14818__auto__,cljs.core.cst$kw$recur)){
var G__17131 = state_17090;
state_17090 = G__17131;
continue;
} else {
return ret_value__14818__auto__;
}
break;
}
});
cljs$core$async$state_machine__14817__auto__ = function(state_17090){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14817__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14817__auto____1.call(this,state_17090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14817__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14817__auto____0;
cljs$core$async$state_machine__14817__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14817__auto____1;
return cljs$core$async$state_machine__14817__auto__;
})()
})();
var state__16652__auto__ = (function (){var statearr_17112 = (f__16651__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16651__auto__.cljs$core$IFn$_invoke$arity$0() : f__16651__auto__.call(null));
(statearr_17112[(6)] = c__16650__auto___17114);

return statearr_17112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16652__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__16650__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16651__auto__ = (function (){var switch__14816__auto__ = (function (state_17153){
var state_val_17154 = (state_17153[(1)]);
if((state_val_17154 === (7))){
var inst_17149 = (state_17153[(2)]);
var state_17153__$1 = state_17153;
var statearr_17155_17174 = state_17153__$1;
(statearr_17155_17174[(2)] = inst_17149);

(statearr_17155_17174[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17154 === (1))){
var inst_17132 = init;
var inst_17133 = inst_17132;
var state_17153__$1 = (function (){var statearr_17156 = state_17153;
(statearr_17156[(7)] = inst_17133);

return statearr_17156;
})();
var statearr_17157_17175 = state_17153__$1;
(statearr_17157_17175[(2)] = null);

(statearr_17157_17175[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17154 === (4))){
var inst_17136 = (state_17153[(8)]);
var inst_17136__$1 = (state_17153[(2)]);
var inst_17137 = (inst_17136__$1 == null);
var state_17153__$1 = (function (){var statearr_17158 = state_17153;
(statearr_17158[(8)] = inst_17136__$1);

return statearr_17158;
})();
if(cljs.core.truth_(inst_17137)){
var statearr_17159_17176 = state_17153__$1;
(statearr_17159_17176[(1)] = (5));

} else {
var statearr_17160_17177 = state_17153__$1;
(statearr_17160_17177[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17154 === (6))){
var inst_17140 = (state_17153[(9)]);
var inst_17133 = (state_17153[(7)]);
var inst_17136 = (state_17153[(8)]);
var inst_17140__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_17133,inst_17136) : f.call(null,inst_17133,inst_17136));
var inst_17141 = cljs.core.reduced_QMARK_(inst_17140__$1);
var state_17153__$1 = (function (){var statearr_17161 = state_17153;
(statearr_17161[(9)] = inst_17140__$1);

return statearr_17161;
})();
if(inst_17141){
var statearr_17162_17178 = state_17153__$1;
(statearr_17162_17178[(1)] = (8));

} else {
var statearr_17163_17179 = state_17153__$1;
(statearr_17163_17179[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17154 === (3))){
var inst_17151 = (state_17153[(2)]);
var state_17153__$1 = state_17153;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17153__$1,inst_17151);
} else {
if((state_val_17154 === (2))){
var state_17153__$1 = state_17153;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17153__$1,(4),ch);
} else {
if((state_val_17154 === (9))){
var inst_17140 = (state_17153[(9)]);
var inst_17133 = inst_17140;
var state_17153__$1 = (function (){var statearr_17164 = state_17153;
(statearr_17164[(7)] = inst_17133);

return statearr_17164;
})();
var statearr_17165_17180 = state_17153__$1;
(statearr_17165_17180[(2)] = null);

(statearr_17165_17180[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17154 === (5))){
var inst_17133 = (state_17153[(7)]);
var state_17153__$1 = state_17153;
var statearr_17166_17181 = state_17153__$1;
(statearr_17166_17181[(2)] = inst_17133);

(statearr_17166_17181[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17154 === (10))){
var inst_17147 = (state_17153[(2)]);
var state_17153__$1 = state_17153;
var statearr_17167_17182 = state_17153__$1;
(statearr_17167_17182[(2)] = inst_17147);

(statearr_17167_17182[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17154 === (8))){
var inst_17140 = (state_17153[(9)]);
var inst_17143 = cljs.core.deref(inst_17140);
var state_17153__$1 = state_17153;
var statearr_17168_17183 = state_17153__$1;
(statearr_17168_17183[(2)] = inst_17143);

(statearr_17168_17183[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__14817__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14817__auto____0 = (function (){
var statearr_17169 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17169[(0)] = cljs$core$async$reduce_$_state_machine__14817__auto__);

(statearr_17169[(1)] = (1));

return statearr_17169;
});
var cljs$core$async$reduce_$_state_machine__14817__auto____1 = (function (state_17153){
while(true){
var ret_value__14818__auto__ = (function (){try{while(true){
var result__14819__auto__ = switch__14816__auto__(state_17153);
if(cljs.core.keyword_identical_QMARK_(result__14819__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14819__auto__;
}
break;
}
}catch (e17170){var ex__14820__auto__ = e17170;
var statearr_17171_17184 = state_17153;
(statearr_17171_17184[(2)] = ex__14820__auto__);


if(cljs.core.seq((state_17153[(4)]))){
var statearr_17172_17185 = state_17153;
(statearr_17172_17185[(1)] = cljs.core.first((state_17153[(4)])));

} else {
throw ex__14820__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14818__auto__,cljs.core.cst$kw$recur)){
var G__17186 = state_17153;
state_17153 = G__17186;
continue;
} else {
return ret_value__14818__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14817__auto__ = function(state_17153){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14817__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14817__auto____1.call(this,state_17153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14817__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14817__auto____0;
cljs$core$async$reduce_$_state_machine__14817__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14817__auto____1;
return cljs$core$async$reduce_$_state_machine__14817__auto__;
})()
})();
var state__16652__auto__ = (function (){var statearr_17173 = (f__16651__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16651__auto__.cljs$core$IFn$_invoke$arity$0() : f__16651__auto__.call(null));
(statearr_17173[(6)] = c__16650__auto__);

return statearr_17173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16652__auto__);
}));

return c__16650__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__16650__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16651__auto__ = (function (){var switch__14816__auto__ = (function (state_17192){
var state_val_17193 = (state_17192[(1)]);
if((state_val_17193 === (1))){
var inst_17187 = cljs.core.async.reduce(f__$1,init,ch);
var state_17192__$1 = state_17192;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17192__$1,(2),inst_17187);
} else {
if((state_val_17193 === (2))){
var inst_17189 = (state_17192[(2)]);
var inst_17190 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_17189) : f__$1.call(null,inst_17189));
var state_17192__$1 = state_17192;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17192__$1,inst_17190);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__14817__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14817__auto____0 = (function (){
var statearr_17194 = [null,null,null,null,null,null,null];
(statearr_17194[(0)] = cljs$core$async$transduce_$_state_machine__14817__auto__);

(statearr_17194[(1)] = (1));

return statearr_17194;
});
var cljs$core$async$transduce_$_state_machine__14817__auto____1 = (function (state_17192){
while(true){
var ret_value__14818__auto__ = (function (){try{while(true){
var result__14819__auto__ = switch__14816__auto__(state_17192);
if(cljs.core.keyword_identical_QMARK_(result__14819__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14819__auto__;
}
break;
}
}catch (e17195){var ex__14820__auto__ = e17195;
var statearr_17196_17199 = state_17192;
(statearr_17196_17199[(2)] = ex__14820__auto__);


if(cljs.core.seq((state_17192[(4)]))){
var statearr_17197_17200 = state_17192;
(statearr_17197_17200[(1)] = cljs.core.first((state_17192[(4)])));

} else {
throw ex__14820__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14818__auto__,cljs.core.cst$kw$recur)){
var G__17201 = state_17192;
state_17192 = G__17201;
continue;
} else {
return ret_value__14818__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14817__auto__ = function(state_17192){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14817__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14817__auto____1.call(this,state_17192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14817__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14817__auto____0;
cljs$core$async$transduce_$_state_machine__14817__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14817__auto____1;
return cljs$core$async$transduce_$_state_machine__14817__auto__;
})()
})();
var state__16652__auto__ = (function (){var statearr_17198 = (f__16651__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16651__auto__.cljs$core$IFn$_invoke$arity$0() : f__16651__auto__.call(null));
(statearr_17198[(6)] = c__16650__auto__);

return statearr_17198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16652__auto__);
}));

return c__16650__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__17203 = arguments.length;
switch (G__17203) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__16650__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16651__auto__ = (function (){var switch__14816__auto__ = (function (state_17228){
var state_val_17229 = (state_17228[(1)]);
if((state_val_17229 === (7))){
var inst_17210 = (state_17228[(2)]);
var state_17228__$1 = state_17228;
var statearr_17230_17252 = state_17228__$1;
(statearr_17230_17252[(2)] = inst_17210);

(statearr_17230_17252[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17229 === (1))){
var inst_17204 = cljs.core.seq(coll);
var inst_17205 = inst_17204;
var state_17228__$1 = (function (){var statearr_17231 = state_17228;
(statearr_17231[(7)] = inst_17205);

return statearr_17231;
})();
var statearr_17232_17253 = state_17228__$1;
(statearr_17232_17253[(2)] = null);

(statearr_17232_17253[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17229 === (4))){
var inst_17205 = (state_17228[(7)]);
var inst_17208 = cljs.core.first(inst_17205);
var state_17228__$1 = state_17228;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17228__$1,(7),ch,inst_17208);
} else {
if((state_val_17229 === (13))){
var inst_17222 = (state_17228[(2)]);
var state_17228__$1 = state_17228;
var statearr_17233_17254 = state_17228__$1;
(statearr_17233_17254[(2)] = inst_17222);

(statearr_17233_17254[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17229 === (6))){
var inst_17213 = (state_17228[(2)]);
var state_17228__$1 = state_17228;
if(cljs.core.truth_(inst_17213)){
var statearr_17234_17255 = state_17228__$1;
(statearr_17234_17255[(1)] = (8));

} else {
var statearr_17235_17256 = state_17228__$1;
(statearr_17235_17256[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17229 === (3))){
var inst_17226 = (state_17228[(2)]);
var state_17228__$1 = state_17228;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17228__$1,inst_17226);
} else {
if((state_val_17229 === (12))){
var state_17228__$1 = state_17228;
var statearr_17236_17257 = state_17228__$1;
(statearr_17236_17257[(2)] = null);

(statearr_17236_17257[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17229 === (2))){
var inst_17205 = (state_17228[(7)]);
var state_17228__$1 = state_17228;
if(cljs.core.truth_(inst_17205)){
var statearr_17237_17258 = state_17228__$1;
(statearr_17237_17258[(1)] = (4));

} else {
var statearr_17238_17259 = state_17228__$1;
(statearr_17238_17259[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17229 === (11))){
var inst_17219 = cljs.core.async.close_BANG_(ch);
var state_17228__$1 = state_17228;
var statearr_17239_17260 = state_17228__$1;
(statearr_17239_17260[(2)] = inst_17219);

(statearr_17239_17260[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17229 === (9))){
var state_17228__$1 = state_17228;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17240_17261 = state_17228__$1;
(statearr_17240_17261[(1)] = (11));

} else {
var statearr_17241_17262 = state_17228__$1;
(statearr_17241_17262[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17229 === (5))){
var inst_17205 = (state_17228[(7)]);
var state_17228__$1 = state_17228;
var statearr_17242_17263 = state_17228__$1;
(statearr_17242_17263[(2)] = inst_17205);

(statearr_17242_17263[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17229 === (10))){
var inst_17224 = (state_17228[(2)]);
var state_17228__$1 = state_17228;
var statearr_17243_17264 = state_17228__$1;
(statearr_17243_17264[(2)] = inst_17224);

(statearr_17243_17264[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17229 === (8))){
var inst_17205 = (state_17228[(7)]);
var inst_17215 = cljs.core.next(inst_17205);
var inst_17205__$1 = inst_17215;
var state_17228__$1 = (function (){var statearr_17244 = state_17228;
(statearr_17244[(7)] = inst_17205__$1);

return statearr_17244;
})();
var statearr_17245_17265 = state_17228__$1;
(statearr_17245_17265[(2)] = null);

(statearr_17245_17265[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
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
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14817__auto__ = null;
var cljs$core$async$state_machine__14817__auto____0 = (function (){
var statearr_17246 = [null,null,null,null,null,null,null,null];
(statearr_17246[(0)] = cljs$core$async$state_machine__14817__auto__);

(statearr_17246[(1)] = (1));

return statearr_17246;
});
var cljs$core$async$state_machine__14817__auto____1 = (function (state_17228){
while(true){
var ret_value__14818__auto__ = (function (){try{while(true){
var result__14819__auto__ = switch__14816__auto__(state_17228);
if(cljs.core.keyword_identical_QMARK_(result__14819__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14819__auto__;
}
break;
}
}catch (e17247){var ex__14820__auto__ = e17247;
var statearr_17248_17266 = state_17228;
(statearr_17248_17266[(2)] = ex__14820__auto__);


if(cljs.core.seq((state_17228[(4)]))){
var statearr_17249_17267 = state_17228;
(statearr_17249_17267[(1)] = cljs.core.first((state_17228[(4)])));

} else {
throw ex__14820__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14818__auto__,cljs.core.cst$kw$recur)){
var G__17268 = state_17228;
state_17228 = G__17268;
continue;
} else {
return ret_value__14818__auto__;
}
break;
}
});
cljs$core$async$state_machine__14817__auto__ = function(state_17228){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14817__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14817__auto____1.call(this,state_17228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14817__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14817__auto____0;
cljs$core$async$state_machine__14817__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14817__auto____1;
return cljs$core$async$state_machine__14817__auto__;
})()
})();
var state__16652__auto__ = (function (){var statearr_17250 = (f__16651__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16651__auto__.cljs$core$IFn$_invoke$arity$0() : f__16651__auto__.call(null));
(statearr_17250[(6)] = c__16650__auto__);

return statearr_17250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16652__auto__);
}));

return c__16650__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__17270 = arguments.length;
switch (G__17270) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_17272 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_17272(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_17273 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_17273(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_17274 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_17274(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_17275 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_17275(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17276 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17276 = (function (ch,cs,meta17277){
this.ch = ch;
this.cs = cs;
this.meta17277 = meta17277;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17278,meta17277__$1){
var self__ = this;
var _17278__$1 = this;
return (new cljs.core.async.t_cljs$core$async17276(self__.ch,self__.cs,meta17277__$1));
}));

(cljs.core.async.t_cljs$core$async17276.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17278){
var self__ = this;
var _17278__$1 = this;
return self__.meta17277;
}));

(cljs.core.async.t_cljs$core$async17276.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17276.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async17276.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17276.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async17276.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async17276.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async17276.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta17277], null);
}));

(cljs.core.async.t_cljs$core$async17276.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17276.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17276");

(cljs.core.async.t_cljs$core$async17276.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async17276");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17276.
 */
cljs.core.async.__GT_t_cljs$core$async17276 = (function cljs$core$async$mult_$___GT_t_cljs$core$async17276(ch__$1,cs__$1,meta17277){
return (new cljs.core.async.t_cljs$core$async17276(ch__$1,cs__$1,meta17277));
});

}

return (new cljs.core.async.t_cljs$core$async17276(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__16650__auto___17495 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16651__auto__ = (function (){var switch__14816__auto__ = (function (state_17411){
var state_val_17412 = (state_17411[(1)]);
if((state_val_17412 === (7))){
var inst_17407 = (state_17411[(2)]);
var state_17411__$1 = state_17411;
var statearr_17413_17496 = state_17411__$1;
(statearr_17413_17496[(2)] = inst_17407);

(statearr_17413_17496[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17412 === (20))){
var inst_17312 = (state_17411[(7)]);
var inst_17324 = cljs.core.first(inst_17312);
var inst_17325 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17324,(0),null);
var inst_17326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17324,(1),null);
var state_17411__$1 = (function (){var statearr_17414 = state_17411;
(statearr_17414[(8)] = inst_17325);

return statearr_17414;
})();
if(cljs.core.truth_(inst_17326)){
var statearr_17415_17497 = state_17411__$1;
(statearr_17415_17497[(1)] = (22));

} else {
var statearr_17416_17498 = state_17411__$1;
(statearr_17416_17498[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17412 === (27))){
var inst_17361 = (state_17411[(9)]);
var inst_17281 = (state_17411[(10)]);
var inst_17354 = (state_17411[(11)]);
var inst_17356 = (state_17411[(12)]);
var inst_17361__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17354,inst_17356);
var inst_17362 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17361__$1,inst_17281,done);
var state_17411__$1 = (function (){var statearr_17417 = state_17411;
(statearr_17417[(9)] = inst_17361__$1);

return statearr_17417;
})();
if(cljs.core.truth_(inst_17362)){
var statearr_17418_17499 = state_17411__$1;
(statearr_17418_17499[(1)] = (30));

} else {
var statearr_17419_17500 = state_17411__$1;
(statearr_17419_17500[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17412 === (1))){
var state_17411__$1 = state_17411;
var statearr_17420_17501 = state_17411__$1;
(statearr_17420_17501[(2)] = null);

(statearr_17420_17501[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17412 === (24))){
var inst_17312 = (state_17411[(7)]);
var inst_17331 = (state_17411[(2)]);
var inst_17332 = cljs.core.next(inst_17312);
var inst_17290 = inst_17332;
var inst_17291 = null;
var inst_17292 = (0);
var inst_17293 = (0);
var state_17411__$1 = (function (){var statearr_17421 = state_17411;
(statearr_17421[(13)] = inst_17293);

(statearr_17421[(14)] = inst_17331);

(statearr_17421[(15)] = inst_17290);

(statearr_17421[(16)] = inst_17291);

(statearr_17421[(17)] = inst_17292);

return statearr_17421;
})();
var statearr_17422_17502 = state_17411__$1;
(statearr_17422_17502[(2)] = null);

(statearr_17422_17502[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17412 === (39))){
var state_17411__$1 = state_17411;
var statearr_17426_17503 = state_17411__$1;
(statearr_17426_17503[(2)] = null);

(statearr_17426_17503[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17412 === (4))){
var inst_17281 = (state_17411[(10)]);
var inst_17281__$1 = (state_17411[(2)]);
var inst_17282 = (inst_17281__$1 == null);
var state_17411__$1 = (function (){var statearr_17427 = state_17411;
(statearr_17427[(10)] = inst_17281__$1);

return statearr_17427;
})();
if(cljs.core.truth_(inst_17282)){
var statearr_17428_17504 = state_17411__$1;
(statearr_17428_17504[(1)] = (5));

} else {
var statearr_17429_17505 = state_17411__$1;
(statearr_17429_17505[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17412 === (15))){
var inst_17293 = (state_17411[(13)]);
var inst_17290 = (state_17411[(15)]);
var inst_17291 = (state_17411[(16)]);
var inst_17292 = (state_17411[(17)]);
var inst_17308 = (state_17411[(2)]);
var inst_17309 = (inst_17293 + (1));
var tmp17423 = inst_17290;
var tmp17424 = inst_17291;
var tmp17425 = inst_17292;
var inst_17290__$1 = tmp17423;
var inst_17291__$1 = tmp17424;
var inst_17292__$1 = tmp17425;
var inst_17293__$1 = inst_17309;
var state_17411__$1 = (function (){var statearr_17430 = state_17411;
(statearr_17430[(13)] = inst_17293__$1);

(statearr_17430[(18)] = inst_17308);

(statearr_17430[(15)] = inst_17290__$1);

(statearr_17430[(16)] = inst_17291__$1);

(statearr_17430[(17)] = inst_17292__$1);

return statearr_17430;
})();
var statearr_17431_17506 = state_17411__$1;
(statearr_17431_17506[(2)] = null);

(statearr_17431_17506[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17412 === (21))){
var inst_17335 = (state_17411[(2)]);
var state_17411__$1 = state_17411;
var statearr_17435_17507 = state_17411__$1;
(statearr_17435_17507[(2)] = inst_17335);

(statearr_17435_17507[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17412 === (31))){
var inst_17361 = (state_17411[(9)]);
var inst_17365 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17361);
var state_17411__$1 = state_17411;
var statearr_17436_17508 = state_17411__$1;
(statearr_17436_17508[(2)] = inst_17365);

(statearr_17436_17508[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17412 === (32))){
var inst_17353 = (state_17411[(19)]);
var inst_17355 = (state_17411[(20)]);
var inst_17354 = (state_17411[(11)]);
var inst_17356 = (state_17411[(12)]);
var inst_17367 = (state_17411[(2)]);
var inst_17368 = (inst_17356 + (1));
var tmp17432 = inst_17353;
var tmp17433 = inst_17355;
var tmp17434 = inst_17354;
var inst_17353__$1 = tmp17432;
var inst_17354__$1 = tmp17434;
var inst_17355__$1 = tmp17433;
var inst_17356__$1 = inst_17368;
var state_17411__$1 = (function (){var statearr_17437 = state_17411;
(statearr_17437[(19)] = inst_17353__$1);

(statearr_17437[(20)] = inst_17355__$1);

(statearr_17437[(21)] = inst_17367);

(statearr_17437[(11)] = inst_17354__$1);

(statearr_17437[(12)] = inst_17356__$1);

return statearr_17437;
})();
var statearr_17438_17509 = state_17411__$1;
(statearr_17438_17509[(2)] = null);

(statearr_17438_17509[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17412 === (40))){
var inst_17380 = (state_17411[(22)]);
var inst_17384 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17380);
var state_17411__$1 = state_17411;
var statearr_17439_17510 = state_17411__$1;
(statearr_17439_17510[(2)] = inst_17384);

(statearr_17439_17510[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17412 === (33))){
var inst_17371 = (state_17411[(23)]);
var inst_17373 = cljs.core.chunked_seq_QMARK_(inst_17371);
var state_17411__$1 = state_17411;
if(inst_17373){
var statearr_17440_17511 = state_17411__$1;
(statearr_17440_17511[(1)] = (36));

} else {
var statearr_17441_17512 = state_17411__$1;
(statearr_17441_17512[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17412 === (13))){
var inst_17302 = (state_17411[(24)]);
var inst_17305 = cljs.core.async.close_BANG_(inst_17302);
var state_17411__$1 = state_17411;
var statearr_17442_17513 = state_17411__$1;
(statearr_17442_17513[(2)] = inst_17305);

(statearr_17442_17513[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17412 === (22))){
var inst_17325 = (state_17411[(8)]);
var inst_17328 = cljs.core.async.close_BANG_(inst_17325);
var state_17411__$1 = state_17411;
var statearr_17443_17514 = state_17411__$1;
(statearr_17443_17514[(2)] = inst_17328);

(statearr_17443_17514[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17412 === (36))){
var inst_17371 = (state_17411[(23)]);
var inst_17375 = cljs.core.chunk_first(inst_17371);
var inst_17376 = cljs.core.chunk_rest(inst_17371);
var inst_17377 = cljs.core.count(inst_17375);
var inst_17353 = inst_17376;
var inst_17354 = inst_17375;
var inst_17355 = inst_17377;
var inst_17356 = (0);
var state_17411__$1 = (function (){var statearr_17444 = state_17411;
(statearr_17444[(19)] = inst_17353);

(statearr_17444[(20)] = inst_17355);

(statearr_17444[(11)] = inst_17354);

(statearr_17444[(12)] = inst_17356);

return statearr_17444;
})();
var statearr_17445_17515 = state_17411__$1;
(statearr_17445_17515[(2)] = null);

(statearr_17445_17515[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17412 === (41))){
var inst_17371 = (state_17411[(23)]);
var inst_17386 = (state_17411[(2)]);
var inst_17387 = cljs.core.next(inst_17371);
var inst_17353 = inst_17387;
var inst_17354 = null;
var inst_17355 = (0);
var inst_17356 = (0);
var state_17411__$1 = (function (){var statearr_17446 = state_17411;
(statearr_17446[(19)] = inst_17353);

(statearr_17446[(20)] = inst_17355);

(statearr_17446[(25)] = inst_17386);

(statearr_17446[(11)] = inst_17354);

(statearr_17446[(12)] = inst_17356);

return statearr_17446;
})();
var statearr_17447_17516 = state_17411__$1;
(statearr_17447_17516[(2)] = null);

(statearr_17447_17516[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17412 === (43))){
var state_17411__$1 = state_17411;
var statearr_17448_17517 = state_17411__$1;
(statearr_17448_17517[(2)] = null);

(statearr_17448_17517[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17412 === (29))){
var inst_17395 = (state_17411[(2)]);
var state_17411__$1 = state_17411;
var statearr_17449_17518 = state_17411__$1;
(statearr_17449_17518[(2)] = inst_17395);

(statearr_17449_17518[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17412 === (44))){
var inst_17404 = (state_17411[(2)]);
var state_17411__$1 = (function (){var statearr_17450 = state_17411;
(statearr_17450[(26)] = inst_17404);

return statearr_17450;
})();
var statearr_17451_17519 = state_17411__$1;
(statearr_17451_17519[(2)] = null);

(statearr_17451_17519[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17412 === (6))){
var inst_17345 = (state_17411[(27)]);
var inst_17344 = cljs.core.deref(cs);
var inst_17345__$1 = cljs.core.keys(inst_17344);
var inst_17346 = cljs.core.count(inst_17345__$1);
var inst_17347 = cljs.core.reset_BANG_(dctr,inst_17346);
var inst_17352 = cljs.core.seq(inst_17345__$1);
var inst_17353 = inst_17352;
var inst_17354 = null;
var inst_17355 = (0);
var inst_17356 = (0);
var state_17411__$1 = (function (){var statearr_17452 = state_17411;
(statearr_17452[(19)] = inst_17353);

(statearr_17452[(27)] = inst_17345__$1);

(statearr_17452[(20)] = inst_17355);

(statearr_17452[(11)] = inst_17354);

(statearr_17452[(28)] = inst_17347);

(statearr_17452[(12)] = inst_17356);

return statearr_17452;
})();
var statearr_17453_17520 = state_17411__$1;
(statearr_17453_17520[(2)] = null);

(statearr_17453_17520[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17412 === (28))){
var inst_17353 = (state_17411[(19)]);
var inst_17371 = (state_17411[(23)]);
var inst_17371__$1 = cljs.core.seq(inst_17353);
var state_17411__$1 = (function (){var statearr_17454 = state_17411;
(statearr_17454[(23)] = inst_17371__$1);

return statearr_17454;
})();
if(inst_17371__$1){
var statearr_17455_17521 = state_17411__$1;
(statearr_17455_17521[(1)] = (33));

} else {
var statearr_17456_17522 = state_17411__$1;
(statearr_17456_17522[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17412 === (25))){
var inst_17355 = (state_17411[(20)]);
var inst_17356 = (state_17411[(12)]);
var inst_17358 = (inst_17356 < inst_17355);
var inst_17359 = inst_17358;
var state_17411__$1 = state_17411;
if(cljs.core.truth_(inst_17359)){
var statearr_17457_17523 = state_17411__$1;
(statearr_17457_17523[(1)] = (27));

} else {
var statearr_17458_17524 = state_17411__$1;
(statearr_17458_17524[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17412 === (34))){
var state_17411__$1 = state_17411;
var statearr_17459_17525 = state_17411__$1;
(statearr_17459_17525[(2)] = null);

(statearr_17459_17525[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17412 === (17))){
var state_17411__$1 = state_17411;
var statearr_17460_17526 = state_17411__$1;
(statearr_17460_17526[(2)] = null);

(statearr_17460_17526[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17412 === (3))){
var inst_17409 = (state_17411[(2)]);
var state_17411__$1 = state_17411;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17411__$1,inst_17409);
} else {
if((state_val_17412 === (12))){
var inst_17340 = (state_17411[(2)]);
var state_17411__$1 = state_17411;
var statearr_17461_17527 = state_17411__$1;
(statearr_17461_17527[(2)] = inst_17340);

(statearr_17461_17527[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17412 === (2))){
var state_17411__$1 = state_17411;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17411__$1,(4),ch);
} else {
if((state_val_17412 === (23))){
var state_17411__$1 = state_17411;
var statearr_17462_17528 = state_17411__$1;
(statearr_17462_17528[(2)] = null);

(statearr_17462_17528[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17412 === (35))){
var inst_17393 = (state_17411[(2)]);
var state_17411__$1 = state_17411;
var statearr_17463_17529 = state_17411__$1;
(statearr_17463_17529[(2)] = inst_17393);

(statearr_17463_17529[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17412 === (19))){
var inst_17312 = (state_17411[(7)]);
var inst_17316 = cljs.core.chunk_first(inst_17312);
var inst_17317 = cljs.core.chunk_rest(inst_17312);
var inst_17318 = cljs.core.count(inst_17316);
var inst_17290 = inst_17317;
var inst_17291 = inst_17316;
var inst_17292 = inst_17318;
var inst_17293 = (0);
var state_17411__$1 = (function (){var statearr_17464 = state_17411;
(statearr_17464[(13)] = inst_17293);

(statearr_17464[(15)] = inst_17290);

(statearr_17464[(16)] = inst_17291);

(statearr_17464[(17)] = inst_17292);

return statearr_17464;
})();
var statearr_17465_17530 = state_17411__$1;
(statearr_17465_17530[(2)] = null);

(statearr_17465_17530[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17412 === (11))){
var inst_17312 = (state_17411[(7)]);
var inst_17290 = (state_17411[(15)]);
var inst_17312__$1 = cljs.core.seq(inst_17290);
var state_17411__$1 = (function (){var statearr_17466 = state_17411;
(statearr_17466[(7)] = inst_17312__$1);

return statearr_17466;
})();
if(inst_17312__$1){
var statearr_17467_17531 = state_17411__$1;
(statearr_17467_17531[(1)] = (16));

} else {
var statearr_17468_17532 = state_17411__$1;
(statearr_17468_17532[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17412 === (9))){
var inst_17342 = (state_17411[(2)]);
var state_17411__$1 = state_17411;
var statearr_17469_17533 = state_17411__$1;
(statearr_17469_17533[(2)] = inst_17342);

(statearr_17469_17533[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17412 === (5))){
var inst_17288 = cljs.core.deref(cs);
var inst_17289 = cljs.core.seq(inst_17288);
var inst_17290 = inst_17289;
var inst_17291 = null;
var inst_17292 = (0);
var inst_17293 = (0);
var state_17411__$1 = (function (){var statearr_17470 = state_17411;
(statearr_17470[(13)] = inst_17293);

(statearr_17470[(15)] = inst_17290);

(statearr_17470[(16)] = inst_17291);

(statearr_17470[(17)] = inst_17292);

return statearr_17470;
})();
var statearr_17471_17534 = state_17411__$1;
(statearr_17471_17534[(2)] = null);

(statearr_17471_17534[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17412 === (14))){
var state_17411__$1 = state_17411;
var statearr_17472_17535 = state_17411__$1;
(statearr_17472_17535[(2)] = null);

(statearr_17472_17535[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17412 === (45))){
var inst_17401 = (state_17411[(2)]);
var state_17411__$1 = state_17411;
var statearr_17473_17536 = state_17411__$1;
(statearr_17473_17536[(2)] = inst_17401);

(statearr_17473_17536[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17412 === (26))){
var inst_17345 = (state_17411[(27)]);
var inst_17397 = (state_17411[(2)]);
var inst_17398 = cljs.core.seq(inst_17345);
var state_17411__$1 = (function (){var statearr_17474 = state_17411;
(statearr_17474[(29)] = inst_17397);

return statearr_17474;
})();
if(inst_17398){
var statearr_17475_17537 = state_17411__$1;
(statearr_17475_17537[(1)] = (42));

} else {
var statearr_17476_17538 = state_17411__$1;
(statearr_17476_17538[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17412 === (16))){
var inst_17312 = (state_17411[(7)]);
var inst_17314 = cljs.core.chunked_seq_QMARK_(inst_17312);
var state_17411__$1 = state_17411;
if(inst_17314){
var statearr_17477_17539 = state_17411__$1;
(statearr_17477_17539[(1)] = (19));

} else {
var statearr_17478_17540 = state_17411__$1;
(statearr_17478_17540[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17412 === (38))){
var inst_17390 = (state_17411[(2)]);
var state_17411__$1 = state_17411;
var statearr_17479_17541 = state_17411__$1;
(statearr_17479_17541[(2)] = inst_17390);

(statearr_17479_17541[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17412 === (30))){
var state_17411__$1 = state_17411;
var statearr_17480_17542 = state_17411__$1;
(statearr_17480_17542[(2)] = null);

(statearr_17480_17542[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17412 === (10))){
var inst_17293 = (state_17411[(13)]);
var inst_17291 = (state_17411[(16)]);
var inst_17301 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17291,inst_17293);
var inst_17302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17301,(0),null);
var inst_17303 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17301,(1),null);
var state_17411__$1 = (function (){var statearr_17481 = state_17411;
(statearr_17481[(24)] = inst_17302);

return statearr_17481;
})();
if(cljs.core.truth_(inst_17303)){
var statearr_17482_17543 = state_17411__$1;
(statearr_17482_17543[(1)] = (13));

} else {
var statearr_17483_17544 = state_17411__$1;
(statearr_17483_17544[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17412 === (18))){
var inst_17338 = (state_17411[(2)]);
var state_17411__$1 = state_17411;
var statearr_17484_17545 = state_17411__$1;
(statearr_17484_17545[(2)] = inst_17338);

(statearr_17484_17545[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17412 === (42))){
var state_17411__$1 = state_17411;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17411__$1,(45),dchan);
} else {
if((state_val_17412 === (37))){
var inst_17371 = (state_17411[(23)]);
var inst_17281 = (state_17411[(10)]);
var inst_17380 = (state_17411[(22)]);
var inst_17380__$1 = cljs.core.first(inst_17371);
var inst_17381 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17380__$1,inst_17281,done);
var state_17411__$1 = (function (){var statearr_17485 = state_17411;
(statearr_17485[(22)] = inst_17380__$1);

return statearr_17485;
})();
if(cljs.core.truth_(inst_17381)){
var statearr_17486_17546 = state_17411__$1;
(statearr_17486_17546[(1)] = (39));

} else {
var statearr_17487_17547 = state_17411__$1;
(statearr_17487_17547[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17412 === (8))){
var inst_17293 = (state_17411[(13)]);
var inst_17292 = (state_17411[(17)]);
var inst_17295 = (inst_17293 < inst_17292);
var inst_17296 = inst_17295;
var state_17411__$1 = state_17411;
if(cljs.core.truth_(inst_17296)){
var statearr_17488_17548 = state_17411__$1;
(statearr_17488_17548[(1)] = (10));

} else {
var statearr_17489_17549 = state_17411__$1;
(statearr_17489_17549[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
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
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__14817__auto__ = null;
var cljs$core$async$mult_$_state_machine__14817__auto____0 = (function (){
var statearr_17490 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17490[(0)] = cljs$core$async$mult_$_state_machine__14817__auto__);

(statearr_17490[(1)] = (1));

return statearr_17490;
});
var cljs$core$async$mult_$_state_machine__14817__auto____1 = (function (state_17411){
while(true){
var ret_value__14818__auto__ = (function (){try{while(true){
var result__14819__auto__ = switch__14816__auto__(state_17411);
if(cljs.core.keyword_identical_QMARK_(result__14819__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14819__auto__;
}
break;
}
}catch (e17491){var ex__14820__auto__ = e17491;
var statearr_17492_17550 = state_17411;
(statearr_17492_17550[(2)] = ex__14820__auto__);


if(cljs.core.seq((state_17411[(4)]))){
var statearr_17493_17551 = state_17411;
(statearr_17493_17551[(1)] = cljs.core.first((state_17411[(4)])));

} else {
throw ex__14820__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14818__auto__,cljs.core.cst$kw$recur)){
var G__17552 = state_17411;
state_17411 = G__17552;
continue;
} else {
return ret_value__14818__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14817__auto__ = function(state_17411){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14817__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14817__auto____1.call(this,state_17411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14817__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14817__auto____0;
cljs$core$async$mult_$_state_machine__14817__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14817__auto____1;
return cljs$core$async$mult_$_state_machine__14817__auto__;
})()
})();
var state__16652__auto__ = (function (){var statearr_17494 = (f__16651__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16651__auto__.cljs$core$IFn$_invoke$arity$0() : f__16651__auto__.call(null));
(statearr_17494[(6)] = c__16650__auto___17495);

return statearr_17494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16652__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__17554 = arguments.length;
switch (G__17554) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_17556 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_17556(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_17557 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_17557(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_17558 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_17558(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_17559 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_17559(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_17560 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_17560(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17571 = arguments.length;
var i__4737__auto___17572 = (0);
while(true){
if((i__4737__auto___17572 < len__4736__auto___17571)){
args__4742__auto__.push((arguments[i__4737__auto___17572]));

var G__17573 = (i__4737__auto___17572 + (1));
i__4737__auto___17572 = G__17573;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17565){
var map__17566 = p__17565;
var map__17566__$1 = (((((!((map__17566 == null))))?(((((map__17566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17566):map__17566);
var opts = map__17566__$1;
var statearr_17568_17574 = state;
(statearr_17568_17574[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_17569_17575 = state;
(statearr_17569_17575[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_17570_17576 = state;
(statearr_17570_17576[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17561){
var G__17562 = cljs.core.first(seq17561);
var seq17561__$1 = cljs.core.next(seq17561);
var G__17563 = cljs.core.first(seq17561__$1);
var seq17561__$2 = cljs.core.next(seq17561__$1);
var G__17564 = cljs.core.first(seq17561__$2);
var seq17561__$3 = cljs.core.next(seq17561__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17562,G__17563,G__17564,seq17561__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17577 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17577 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17578){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta17578 = meta17578;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17577.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17579,meta17578__$1){
var self__ = this;
var _17579__$1 = this;
return (new cljs.core.async.t_cljs$core$async17577(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17578__$1));
}));

(cljs.core.async.t_cljs$core$async17577.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17579){
var self__ = this;
var _17579__$1 = this;
return self__.meta17578;
}));

(cljs.core.async.t_cljs$core$async17577.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17577.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async17577.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17577.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17577.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17577.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17577.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17577.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17577.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta17578], null);
}));

(cljs.core.async.t_cljs$core$async17577.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17577.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17577");

(cljs.core.async.t_cljs$core$async17577.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async17577");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17577.
 */
cljs.core.async.__GT_t_cljs$core$async17577 = (function cljs$core$async$mix_$___GT_t_cljs$core$async17577(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17578){
return (new cljs.core.async.t_cljs$core$async17577(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17578));
});

}

return (new cljs.core.async.t_cljs$core$async17577(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16650__auto___17742 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16651__auto__ = (function (){var switch__14816__auto__ = (function (state_17681){
var state_val_17682 = (state_17681[(1)]);
if((state_val_17682 === (7))){
var inst_17596 = (state_17681[(2)]);
var state_17681__$1 = state_17681;
var statearr_17683_17743 = state_17681__$1;
(statearr_17683_17743[(2)] = inst_17596);

(statearr_17683_17743[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17682 === (20))){
var inst_17608 = (state_17681[(7)]);
var state_17681__$1 = state_17681;
var statearr_17684_17744 = state_17681__$1;
(statearr_17684_17744[(2)] = inst_17608);

(statearr_17684_17744[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17682 === (27))){
var state_17681__$1 = state_17681;
var statearr_17685_17745 = state_17681__$1;
(statearr_17685_17745[(2)] = null);

(statearr_17685_17745[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17682 === (1))){
var inst_17583 = (state_17681[(8)]);
var inst_17583__$1 = calc_state();
var inst_17585 = (inst_17583__$1 == null);
var inst_17586 = cljs.core.not(inst_17585);
var state_17681__$1 = (function (){var statearr_17686 = state_17681;
(statearr_17686[(8)] = inst_17583__$1);

return statearr_17686;
})();
if(inst_17586){
var statearr_17687_17746 = state_17681__$1;
(statearr_17687_17746[(1)] = (2));

} else {
var statearr_17688_17747 = state_17681__$1;
(statearr_17688_17747[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17682 === (24))){
var inst_17632 = (state_17681[(9)]);
var inst_17655 = (state_17681[(10)]);
var inst_17641 = (state_17681[(11)]);
var inst_17655__$1 = (inst_17632.cljs$core$IFn$_invoke$arity$1 ? inst_17632.cljs$core$IFn$_invoke$arity$1(inst_17641) : inst_17632.call(null,inst_17641));
var state_17681__$1 = (function (){var statearr_17689 = state_17681;
(statearr_17689[(10)] = inst_17655__$1);

return statearr_17689;
})();
if(cljs.core.truth_(inst_17655__$1)){
var statearr_17690_17748 = state_17681__$1;
(statearr_17690_17748[(1)] = (29));

} else {
var statearr_17691_17749 = state_17681__$1;
(statearr_17691_17749[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17682 === (4))){
var inst_17599 = (state_17681[(2)]);
var state_17681__$1 = state_17681;
if(cljs.core.truth_(inst_17599)){
var statearr_17692_17750 = state_17681__$1;
(statearr_17692_17750[(1)] = (8));

} else {
var statearr_17693_17751 = state_17681__$1;
(statearr_17693_17751[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17682 === (15))){
var inst_17626 = (state_17681[(2)]);
var state_17681__$1 = state_17681;
if(cljs.core.truth_(inst_17626)){
var statearr_17694_17752 = state_17681__$1;
(statearr_17694_17752[(1)] = (19));

} else {
var statearr_17695_17753 = state_17681__$1;
(statearr_17695_17753[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17682 === (21))){
var inst_17631 = (state_17681[(12)]);
var inst_17631__$1 = (state_17681[(2)]);
var inst_17632 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17631__$1,cljs.core.cst$kw$solos);
var inst_17633 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17631__$1,cljs.core.cst$kw$mutes);
var inst_17634 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17631__$1,cljs.core.cst$kw$reads);
var state_17681__$1 = (function (){var statearr_17696 = state_17681;
(statearr_17696[(9)] = inst_17632);

(statearr_17696[(12)] = inst_17631__$1);

(statearr_17696[(13)] = inst_17633);

return statearr_17696;
})();
return cljs.core.async.ioc_alts_BANG_(state_17681__$1,(22),inst_17634);
} else {
if((state_val_17682 === (31))){
var inst_17663 = (state_17681[(2)]);
var state_17681__$1 = state_17681;
if(cljs.core.truth_(inst_17663)){
var statearr_17697_17754 = state_17681__$1;
(statearr_17697_17754[(1)] = (32));

} else {
var statearr_17698_17755 = state_17681__$1;
(statearr_17698_17755[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17682 === (32))){
var inst_17640 = (state_17681[(14)]);
var state_17681__$1 = state_17681;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17681__$1,(35),out,inst_17640);
} else {
if((state_val_17682 === (33))){
var inst_17631 = (state_17681[(12)]);
var inst_17608 = inst_17631;
var state_17681__$1 = (function (){var statearr_17699 = state_17681;
(statearr_17699[(7)] = inst_17608);

return statearr_17699;
})();
var statearr_17700_17756 = state_17681__$1;
(statearr_17700_17756[(2)] = null);

(statearr_17700_17756[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17682 === (13))){
var inst_17608 = (state_17681[(7)]);
var inst_17615 = inst_17608.cljs$lang$protocol_mask$partition0$;
var inst_17616 = (inst_17615 & (64));
var inst_17617 = inst_17608.cljs$core$ISeq$;
var inst_17618 = (cljs.core.PROTOCOL_SENTINEL === inst_17617);
var inst_17619 = ((inst_17616) || (inst_17618));
var state_17681__$1 = state_17681;
if(cljs.core.truth_(inst_17619)){
var statearr_17701_17757 = state_17681__$1;
(statearr_17701_17757[(1)] = (16));

} else {
var statearr_17702_17758 = state_17681__$1;
(statearr_17702_17758[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17682 === (22))){
var inst_17640 = (state_17681[(14)]);
var inst_17641 = (state_17681[(11)]);
var inst_17639 = (state_17681[(2)]);
var inst_17640__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17639,(0),null);
var inst_17641__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17639,(1),null);
var inst_17642 = (inst_17640__$1 == null);
var inst_17643 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17641__$1,change);
var inst_17644 = ((inst_17642) || (inst_17643));
var state_17681__$1 = (function (){var statearr_17703 = state_17681;
(statearr_17703[(14)] = inst_17640__$1);

(statearr_17703[(11)] = inst_17641__$1);

return statearr_17703;
})();
if(cljs.core.truth_(inst_17644)){
var statearr_17704_17759 = state_17681__$1;
(statearr_17704_17759[(1)] = (23));

} else {
var statearr_17705_17760 = state_17681__$1;
(statearr_17705_17760[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17682 === (36))){
var inst_17631 = (state_17681[(12)]);
var inst_17608 = inst_17631;
var state_17681__$1 = (function (){var statearr_17706 = state_17681;
(statearr_17706[(7)] = inst_17608);

return statearr_17706;
})();
var statearr_17707_17761 = state_17681__$1;
(statearr_17707_17761[(2)] = null);

(statearr_17707_17761[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17682 === (29))){
var inst_17655 = (state_17681[(10)]);
var state_17681__$1 = state_17681;
var statearr_17708_17762 = state_17681__$1;
(statearr_17708_17762[(2)] = inst_17655);

(statearr_17708_17762[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17682 === (6))){
var state_17681__$1 = state_17681;
var statearr_17709_17763 = state_17681__$1;
(statearr_17709_17763[(2)] = false);

(statearr_17709_17763[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17682 === (28))){
var inst_17651 = (state_17681[(2)]);
var inst_17652 = calc_state();
var inst_17608 = inst_17652;
var state_17681__$1 = (function (){var statearr_17710 = state_17681;
(statearr_17710[(15)] = inst_17651);

(statearr_17710[(7)] = inst_17608);

return statearr_17710;
})();
var statearr_17711_17764 = state_17681__$1;
(statearr_17711_17764[(2)] = null);

(statearr_17711_17764[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17682 === (25))){
var inst_17677 = (state_17681[(2)]);
var state_17681__$1 = state_17681;
var statearr_17712_17765 = state_17681__$1;
(statearr_17712_17765[(2)] = inst_17677);

(statearr_17712_17765[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17682 === (34))){
var inst_17675 = (state_17681[(2)]);
var state_17681__$1 = state_17681;
var statearr_17713_17766 = state_17681__$1;
(statearr_17713_17766[(2)] = inst_17675);

(statearr_17713_17766[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17682 === (17))){
var state_17681__$1 = state_17681;
var statearr_17714_17767 = state_17681__$1;
(statearr_17714_17767[(2)] = false);

(statearr_17714_17767[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17682 === (3))){
var state_17681__$1 = state_17681;
var statearr_17715_17768 = state_17681__$1;
(statearr_17715_17768[(2)] = false);

(statearr_17715_17768[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17682 === (12))){
var inst_17679 = (state_17681[(2)]);
var state_17681__$1 = state_17681;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17681__$1,inst_17679);
} else {
if((state_val_17682 === (2))){
var inst_17583 = (state_17681[(8)]);
var inst_17588 = inst_17583.cljs$lang$protocol_mask$partition0$;
var inst_17589 = (inst_17588 & (64));
var inst_17590 = inst_17583.cljs$core$ISeq$;
var inst_17591 = (cljs.core.PROTOCOL_SENTINEL === inst_17590);
var inst_17592 = ((inst_17589) || (inst_17591));
var state_17681__$1 = state_17681;
if(cljs.core.truth_(inst_17592)){
var statearr_17716_17769 = state_17681__$1;
(statearr_17716_17769[(1)] = (5));

} else {
var statearr_17717_17770 = state_17681__$1;
(statearr_17717_17770[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17682 === (23))){
var inst_17640 = (state_17681[(14)]);
var inst_17646 = (inst_17640 == null);
var state_17681__$1 = state_17681;
if(cljs.core.truth_(inst_17646)){
var statearr_17718_17771 = state_17681__$1;
(statearr_17718_17771[(1)] = (26));

} else {
var statearr_17719_17772 = state_17681__$1;
(statearr_17719_17772[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17682 === (35))){
var inst_17666 = (state_17681[(2)]);
var state_17681__$1 = state_17681;
if(cljs.core.truth_(inst_17666)){
var statearr_17720_17773 = state_17681__$1;
(statearr_17720_17773[(1)] = (36));

} else {
var statearr_17721_17774 = state_17681__$1;
(statearr_17721_17774[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17682 === (19))){
var inst_17608 = (state_17681[(7)]);
var inst_17628 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17608);
var state_17681__$1 = state_17681;
var statearr_17722_17775 = state_17681__$1;
(statearr_17722_17775[(2)] = inst_17628);

(statearr_17722_17775[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17682 === (11))){
var inst_17608 = (state_17681[(7)]);
var inst_17612 = (inst_17608 == null);
var inst_17613 = cljs.core.not(inst_17612);
var state_17681__$1 = state_17681;
if(inst_17613){
var statearr_17723_17776 = state_17681__$1;
(statearr_17723_17776[(1)] = (13));

} else {
var statearr_17724_17777 = state_17681__$1;
(statearr_17724_17777[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17682 === (9))){
var inst_17583 = (state_17681[(8)]);
var state_17681__$1 = state_17681;
var statearr_17725_17778 = state_17681__$1;
(statearr_17725_17778[(2)] = inst_17583);

(statearr_17725_17778[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17682 === (5))){
var state_17681__$1 = state_17681;
var statearr_17726_17779 = state_17681__$1;
(statearr_17726_17779[(2)] = true);

(statearr_17726_17779[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17682 === (14))){
var state_17681__$1 = state_17681;
var statearr_17727_17780 = state_17681__$1;
(statearr_17727_17780[(2)] = false);

(statearr_17727_17780[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17682 === (26))){
var inst_17641 = (state_17681[(11)]);
var inst_17648 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_17641);
var state_17681__$1 = state_17681;
var statearr_17728_17781 = state_17681__$1;
(statearr_17728_17781[(2)] = inst_17648);

(statearr_17728_17781[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17682 === (16))){
var state_17681__$1 = state_17681;
var statearr_17729_17782 = state_17681__$1;
(statearr_17729_17782[(2)] = true);

(statearr_17729_17782[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17682 === (38))){
var inst_17671 = (state_17681[(2)]);
var state_17681__$1 = state_17681;
var statearr_17730_17783 = state_17681__$1;
(statearr_17730_17783[(2)] = inst_17671);

(statearr_17730_17783[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17682 === (30))){
var inst_17632 = (state_17681[(9)]);
var inst_17633 = (state_17681[(13)]);
var inst_17641 = (state_17681[(11)]);
var inst_17658 = cljs.core.empty_QMARK_(inst_17632);
var inst_17659 = (inst_17633.cljs$core$IFn$_invoke$arity$1 ? inst_17633.cljs$core$IFn$_invoke$arity$1(inst_17641) : inst_17633.call(null,inst_17641));
var inst_17660 = cljs.core.not(inst_17659);
var inst_17661 = ((inst_17658) && (inst_17660));
var state_17681__$1 = state_17681;
var statearr_17731_17784 = state_17681__$1;
(statearr_17731_17784[(2)] = inst_17661);

(statearr_17731_17784[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17682 === (10))){
var inst_17583 = (state_17681[(8)]);
var inst_17604 = (state_17681[(2)]);
var inst_17605 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17604,cljs.core.cst$kw$solos);
var inst_17606 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17604,cljs.core.cst$kw$mutes);
var inst_17607 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17604,cljs.core.cst$kw$reads);
var inst_17608 = inst_17583;
var state_17681__$1 = (function (){var statearr_17732 = state_17681;
(statearr_17732[(16)] = inst_17605);

(statearr_17732[(17)] = inst_17606);

(statearr_17732[(7)] = inst_17608);

(statearr_17732[(18)] = inst_17607);

return statearr_17732;
})();
var statearr_17733_17785 = state_17681__$1;
(statearr_17733_17785[(2)] = null);

(statearr_17733_17785[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17682 === (18))){
var inst_17623 = (state_17681[(2)]);
var state_17681__$1 = state_17681;
var statearr_17734_17786 = state_17681__$1;
(statearr_17734_17786[(2)] = inst_17623);

(statearr_17734_17786[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17682 === (37))){
var state_17681__$1 = state_17681;
var statearr_17735_17787 = state_17681__$1;
(statearr_17735_17787[(2)] = null);

(statearr_17735_17787[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17682 === (8))){
var inst_17583 = (state_17681[(8)]);
var inst_17601 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17583);
var state_17681__$1 = state_17681;
var statearr_17736_17788 = state_17681__$1;
(statearr_17736_17788[(2)] = inst_17601);

(statearr_17736_17788[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
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
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__14817__auto__ = null;
var cljs$core$async$mix_$_state_machine__14817__auto____0 = (function (){
var statearr_17737 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17737[(0)] = cljs$core$async$mix_$_state_machine__14817__auto__);

(statearr_17737[(1)] = (1));

return statearr_17737;
});
var cljs$core$async$mix_$_state_machine__14817__auto____1 = (function (state_17681){
while(true){
var ret_value__14818__auto__ = (function (){try{while(true){
var result__14819__auto__ = switch__14816__auto__(state_17681);
if(cljs.core.keyword_identical_QMARK_(result__14819__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14819__auto__;
}
break;
}
}catch (e17738){var ex__14820__auto__ = e17738;
var statearr_17739_17789 = state_17681;
(statearr_17739_17789[(2)] = ex__14820__auto__);


if(cljs.core.seq((state_17681[(4)]))){
var statearr_17740_17790 = state_17681;
(statearr_17740_17790[(1)] = cljs.core.first((state_17681[(4)])));

} else {
throw ex__14820__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14818__auto__,cljs.core.cst$kw$recur)){
var G__17791 = state_17681;
state_17681 = G__17791;
continue;
} else {
return ret_value__14818__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14817__auto__ = function(state_17681){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14817__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14817__auto____1.call(this,state_17681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14817__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14817__auto____0;
cljs$core$async$mix_$_state_machine__14817__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14817__auto____1;
return cljs$core$async$mix_$_state_machine__14817__auto__;
})()
})();
var state__16652__auto__ = (function (){var statearr_17741 = (f__16651__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16651__auto__.cljs$core$IFn$_invoke$arity$0() : f__16651__auto__.call(null));
(statearr_17741[(6)] = c__16650__auto___17742);

return statearr_17741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16652__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_17794 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_17794(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_17795 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_17795(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_17796 = (function() {
var G__17797 = null;
var G__17797__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__17797__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__17797 = function(p,v){
switch(arguments.length){
case 1:
return G__17797__1.call(this,p);
case 2:
return G__17797__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17797.cljs$core$IFn$_invoke$arity$1 = G__17797__1;
G__17797.cljs$core$IFn$_invoke$arity$2 = G__17797__2;
return G__17797;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__17793 = arguments.length;
switch (G__17793) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17796.cljs$core$IFn$_invoke$arity$1(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17796.cljs$core$IFn$_invoke$arity$2(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__17801 = arguments.length;
switch (G__17801) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__17799_SHARP_){
if(cljs.core.truth_((p1__17799_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17799_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__17799_SHARP_.call(null,topic)))){
return p1__17799_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17799_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17802 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17802 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17803){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17803 = meta17803;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17804,meta17803__$1){
var self__ = this;
var _17804__$1 = this;
return (new cljs.core.async.t_cljs$core$async17802(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17803__$1));
}));

(cljs.core.async.t_cljs$core$async17802.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17804){
var self__ = this;
var _17804__$1 = this;
return self__.meta17803;
}));

(cljs.core.async.t_cljs$core$async17802.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17802.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async17802.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17802.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async17802.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async17802.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async17802.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async17802.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta17803], null);
}));

(cljs.core.async.t_cljs$core$async17802.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17802.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17802");

(cljs.core.async.t_cljs$core$async17802.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async17802");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17802.
 */
cljs.core.async.__GT_t_cljs$core$async17802 = (function cljs$core$async$__GT_t_cljs$core$async17802(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17803){
return (new cljs.core.async.t_cljs$core$async17802(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17803));
});

}

return (new cljs.core.async.t_cljs$core$async17802(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16650__auto___17923 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16651__auto__ = (function (){var switch__14816__auto__ = (function (state_17876){
var state_val_17877 = (state_17876[(1)]);
if((state_val_17877 === (7))){
var inst_17872 = (state_17876[(2)]);
var state_17876__$1 = state_17876;
var statearr_17878_17924 = state_17876__$1;
(statearr_17878_17924[(2)] = inst_17872);

(statearr_17878_17924[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17877 === (20))){
var state_17876__$1 = state_17876;
var statearr_17879_17925 = state_17876__$1;
(statearr_17879_17925[(2)] = null);

(statearr_17879_17925[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17877 === (1))){
var state_17876__$1 = state_17876;
var statearr_17880_17926 = state_17876__$1;
(statearr_17880_17926[(2)] = null);

(statearr_17880_17926[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17877 === (24))){
var inst_17855 = (state_17876[(7)]);
var inst_17864 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17855);
var state_17876__$1 = state_17876;
var statearr_17881_17927 = state_17876__$1;
(statearr_17881_17927[(2)] = inst_17864);

(statearr_17881_17927[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17877 === (4))){
var inst_17807 = (state_17876[(8)]);
var inst_17807__$1 = (state_17876[(2)]);
var inst_17808 = (inst_17807__$1 == null);
var state_17876__$1 = (function (){var statearr_17882 = state_17876;
(statearr_17882[(8)] = inst_17807__$1);

return statearr_17882;
})();
if(cljs.core.truth_(inst_17808)){
var statearr_17883_17928 = state_17876__$1;
(statearr_17883_17928[(1)] = (5));

} else {
var statearr_17884_17929 = state_17876__$1;
(statearr_17884_17929[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17877 === (15))){
var inst_17849 = (state_17876[(2)]);
var state_17876__$1 = state_17876;
var statearr_17885_17930 = state_17876__$1;
(statearr_17885_17930[(2)] = inst_17849);

(statearr_17885_17930[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17877 === (21))){
var inst_17869 = (state_17876[(2)]);
var state_17876__$1 = (function (){var statearr_17886 = state_17876;
(statearr_17886[(9)] = inst_17869);

return statearr_17886;
})();
var statearr_17887_17931 = state_17876__$1;
(statearr_17887_17931[(2)] = null);

(statearr_17887_17931[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17877 === (13))){
var inst_17831 = (state_17876[(10)]);
var inst_17833 = cljs.core.chunked_seq_QMARK_(inst_17831);
var state_17876__$1 = state_17876;
if(inst_17833){
var statearr_17888_17932 = state_17876__$1;
(statearr_17888_17932[(1)] = (16));

} else {
var statearr_17889_17933 = state_17876__$1;
(statearr_17889_17933[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17877 === (22))){
var inst_17861 = (state_17876[(2)]);
var state_17876__$1 = state_17876;
if(cljs.core.truth_(inst_17861)){
var statearr_17890_17934 = state_17876__$1;
(statearr_17890_17934[(1)] = (23));

} else {
var statearr_17891_17935 = state_17876__$1;
(statearr_17891_17935[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17877 === (6))){
var inst_17855 = (state_17876[(7)]);
var inst_17857 = (state_17876[(11)]);
var inst_17807 = (state_17876[(8)]);
var inst_17855__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_17807) : topic_fn.call(null,inst_17807));
var inst_17856 = cljs.core.deref(mults);
var inst_17857__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17856,inst_17855__$1);
var state_17876__$1 = (function (){var statearr_17892 = state_17876;
(statearr_17892[(7)] = inst_17855__$1);

(statearr_17892[(11)] = inst_17857__$1);

return statearr_17892;
})();
if(cljs.core.truth_(inst_17857__$1)){
var statearr_17893_17936 = state_17876__$1;
(statearr_17893_17936[(1)] = (19));

} else {
var statearr_17894_17937 = state_17876__$1;
(statearr_17894_17937[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17877 === (25))){
var inst_17866 = (state_17876[(2)]);
var state_17876__$1 = state_17876;
var statearr_17895_17938 = state_17876__$1;
(statearr_17895_17938[(2)] = inst_17866);

(statearr_17895_17938[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17877 === (17))){
var inst_17831 = (state_17876[(10)]);
var inst_17840 = cljs.core.first(inst_17831);
var inst_17841 = cljs.core.async.muxch_STAR_(inst_17840);
var inst_17842 = cljs.core.async.close_BANG_(inst_17841);
var inst_17843 = cljs.core.next(inst_17831);
var inst_17817 = inst_17843;
var inst_17818 = null;
var inst_17819 = (0);
var inst_17820 = (0);
var state_17876__$1 = (function (){var statearr_17896 = state_17876;
(statearr_17896[(12)] = inst_17819);

(statearr_17896[(13)] = inst_17820);

(statearr_17896[(14)] = inst_17842);

(statearr_17896[(15)] = inst_17817);

(statearr_17896[(16)] = inst_17818);

return statearr_17896;
})();
var statearr_17897_17939 = state_17876__$1;
(statearr_17897_17939[(2)] = null);

(statearr_17897_17939[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17877 === (3))){
var inst_17874 = (state_17876[(2)]);
var state_17876__$1 = state_17876;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17876__$1,inst_17874);
} else {
if((state_val_17877 === (12))){
var inst_17851 = (state_17876[(2)]);
var state_17876__$1 = state_17876;
var statearr_17898_17940 = state_17876__$1;
(statearr_17898_17940[(2)] = inst_17851);

(statearr_17898_17940[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17877 === (2))){
var state_17876__$1 = state_17876;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17876__$1,(4),ch);
} else {
if((state_val_17877 === (23))){
var state_17876__$1 = state_17876;
var statearr_17899_17941 = state_17876__$1;
(statearr_17899_17941[(2)] = null);

(statearr_17899_17941[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17877 === (19))){
var inst_17857 = (state_17876[(11)]);
var inst_17807 = (state_17876[(8)]);
var inst_17859 = cljs.core.async.muxch_STAR_(inst_17857);
var state_17876__$1 = state_17876;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17876__$1,(22),inst_17859,inst_17807);
} else {
if((state_val_17877 === (11))){
var inst_17817 = (state_17876[(15)]);
var inst_17831 = (state_17876[(10)]);
var inst_17831__$1 = cljs.core.seq(inst_17817);
var state_17876__$1 = (function (){var statearr_17900 = state_17876;
(statearr_17900[(10)] = inst_17831__$1);

return statearr_17900;
})();
if(inst_17831__$1){
var statearr_17901_17942 = state_17876__$1;
(statearr_17901_17942[(1)] = (13));

} else {
var statearr_17902_17943 = state_17876__$1;
(statearr_17902_17943[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17877 === (9))){
var inst_17853 = (state_17876[(2)]);
var state_17876__$1 = state_17876;
var statearr_17903_17944 = state_17876__$1;
(statearr_17903_17944[(2)] = inst_17853);

(statearr_17903_17944[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17877 === (5))){
var inst_17814 = cljs.core.deref(mults);
var inst_17815 = cljs.core.vals(inst_17814);
var inst_17816 = cljs.core.seq(inst_17815);
var inst_17817 = inst_17816;
var inst_17818 = null;
var inst_17819 = (0);
var inst_17820 = (0);
var state_17876__$1 = (function (){var statearr_17904 = state_17876;
(statearr_17904[(12)] = inst_17819);

(statearr_17904[(13)] = inst_17820);

(statearr_17904[(15)] = inst_17817);

(statearr_17904[(16)] = inst_17818);

return statearr_17904;
})();
var statearr_17905_17945 = state_17876__$1;
(statearr_17905_17945[(2)] = null);

(statearr_17905_17945[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17877 === (14))){
var state_17876__$1 = state_17876;
var statearr_17909_17946 = state_17876__$1;
(statearr_17909_17946[(2)] = null);

(statearr_17909_17946[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17877 === (16))){
var inst_17831 = (state_17876[(10)]);
var inst_17835 = cljs.core.chunk_first(inst_17831);
var inst_17836 = cljs.core.chunk_rest(inst_17831);
var inst_17837 = cljs.core.count(inst_17835);
var inst_17817 = inst_17836;
var inst_17818 = inst_17835;
var inst_17819 = inst_17837;
var inst_17820 = (0);
var state_17876__$1 = (function (){var statearr_17910 = state_17876;
(statearr_17910[(12)] = inst_17819);

(statearr_17910[(13)] = inst_17820);

(statearr_17910[(15)] = inst_17817);

(statearr_17910[(16)] = inst_17818);

return statearr_17910;
})();
var statearr_17911_17947 = state_17876__$1;
(statearr_17911_17947[(2)] = null);

(statearr_17911_17947[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17877 === (10))){
var inst_17819 = (state_17876[(12)]);
var inst_17820 = (state_17876[(13)]);
var inst_17817 = (state_17876[(15)]);
var inst_17818 = (state_17876[(16)]);
var inst_17825 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17818,inst_17820);
var inst_17826 = cljs.core.async.muxch_STAR_(inst_17825);
var inst_17827 = cljs.core.async.close_BANG_(inst_17826);
var inst_17828 = (inst_17820 + (1));
var tmp17906 = inst_17819;
var tmp17907 = inst_17817;
var tmp17908 = inst_17818;
var inst_17817__$1 = tmp17907;
var inst_17818__$1 = tmp17908;
var inst_17819__$1 = tmp17906;
var inst_17820__$1 = inst_17828;
var state_17876__$1 = (function (){var statearr_17912 = state_17876;
(statearr_17912[(12)] = inst_17819__$1);

(statearr_17912[(13)] = inst_17820__$1);

(statearr_17912[(15)] = inst_17817__$1);

(statearr_17912[(16)] = inst_17818__$1);

(statearr_17912[(17)] = inst_17827);

return statearr_17912;
})();
var statearr_17913_17948 = state_17876__$1;
(statearr_17913_17948[(2)] = null);

(statearr_17913_17948[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17877 === (18))){
var inst_17846 = (state_17876[(2)]);
var state_17876__$1 = state_17876;
var statearr_17914_17949 = state_17876__$1;
(statearr_17914_17949[(2)] = inst_17846);

(statearr_17914_17949[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17877 === (8))){
var inst_17819 = (state_17876[(12)]);
var inst_17820 = (state_17876[(13)]);
var inst_17822 = (inst_17820 < inst_17819);
var inst_17823 = inst_17822;
var state_17876__$1 = state_17876;
if(cljs.core.truth_(inst_17823)){
var statearr_17915_17950 = state_17876__$1;
(statearr_17915_17950[(1)] = (10));

} else {
var statearr_17916_17951 = state_17876__$1;
(statearr_17916_17951[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
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
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14817__auto__ = null;
var cljs$core$async$state_machine__14817__auto____0 = (function (){
var statearr_17917 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17917[(0)] = cljs$core$async$state_machine__14817__auto__);

(statearr_17917[(1)] = (1));

return statearr_17917;
});
var cljs$core$async$state_machine__14817__auto____1 = (function (state_17876){
while(true){
var ret_value__14818__auto__ = (function (){try{while(true){
var result__14819__auto__ = switch__14816__auto__(state_17876);
if(cljs.core.keyword_identical_QMARK_(result__14819__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14819__auto__;
}
break;
}
}catch (e17918){var ex__14820__auto__ = e17918;
var statearr_17919_17952 = state_17876;
(statearr_17919_17952[(2)] = ex__14820__auto__);


if(cljs.core.seq((state_17876[(4)]))){
var statearr_17920_17953 = state_17876;
(statearr_17920_17953[(1)] = cljs.core.first((state_17876[(4)])));

} else {
throw ex__14820__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14818__auto__,cljs.core.cst$kw$recur)){
var G__17954 = state_17876;
state_17876 = G__17954;
continue;
} else {
return ret_value__14818__auto__;
}
break;
}
});
cljs$core$async$state_machine__14817__auto__ = function(state_17876){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14817__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14817__auto____1.call(this,state_17876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14817__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14817__auto____0;
cljs$core$async$state_machine__14817__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14817__auto____1;
return cljs$core$async$state_machine__14817__auto__;
})()
})();
var state__16652__auto__ = (function (){var statearr_17921 = (f__16651__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16651__auto__.cljs$core$IFn$_invoke$arity$0() : f__16651__auto__.call(null));
(statearr_17921[(6)] = c__16650__auto___17923);

return statearr_17921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16652__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__17956 = arguments.length;
switch (G__17956) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__17959 = arguments.length;
switch (G__17959) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__17962 = arguments.length;
switch (G__17962) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__16650__auto___18040 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16651__auto__ = (function (){var switch__14816__auto__ = (function (state_18005){
var state_val_18006 = (state_18005[(1)]);
if((state_val_18006 === (7))){
var state_18005__$1 = state_18005;
var statearr_18007_18041 = state_18005__$1;
(statearr_18007_18041[(2)] = null);

(statearr_18007_18041[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18006 === (1))){
var state_18005__$1 = state_18005;
var statearr_18008_18042 = state_18005__$1;
(statearr_18008_18042[(2)] = null);

(statearr_18008_18042[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18006 === (4))){
var inst_17966 = (state_18005[(7)]);
var inst_17965 = (state_18005[(8)]);
var inst_17968 = (inst_17966 < inst_17965);
var state_18005__$1 = state_18005;
if(cljs.core.truth_(inst_17968)){
var statearr_18009_18043 = state_18005__$1;
(statearr_18009_18043[(1)] = (6));

} else {
var statearr_18010_18044 = state_18005__$1;
(statearr_18010_18044[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18006 === (15))){
var inst_17991 = (state_18005[(9)]);
var inst_17996 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17991);
var state_18005__$1 = state_18005;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18005__$1,(17),out,inst_17996);
} else {
if((state_val_18006 === (13))){
var inst_17991 = (state_18005[(9)]);
var inst_17991__$1 = (state_18005[(2)]);
var inst_17992 = cljs.core.some(cljs.core.nil_QMARK_,inst_17991__$1);
var state_18005__$1 = (function (){var statearr_18011 = state_18005;
(statearr_18011[(9)] = inst_17991__$1);

return statearr_18011;
})();
if(cljs.core.truth_(inst_17992)){
var statearr_18012_18045 = state_18005__$1;
(statearr_18012_18045[(1)] = (14));

} else {
var statearr_18013_18046 = state_18005__$1;
(statearr_18013_18046[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18006 === (6))){
var state_18005__$1 = state_18005;
var statearr_18014_18047 = state_18005__$1;
(statearr_18014_18047[(2)] = null);

(statearr_18014_18047[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18006 === (17))){
var inst_17998 = (state_18005[(2)]);
var state_18005__$1 = (function (){var statearr_18016 = state_18005;
(statearr_18016[(10)] = inst_17998);

return statearr_18016;
})();
var statearr_18017_18048 = state_18005__$1;
(statearr_18017_18048[(2)] = null);

(statearr_18017_18048[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18006 === (3))){
var inst_18003 = (state_18005[(2)]);
var state_18005__$1 = state_18005;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18005__$1,inst_18003);
} else {
if((state_val_18006 === (12))){
var _ = (function (){var statearr_18018 = state_18005;
(statearr_18018[(4)] = cljs.core.rest((state_18005[(4)])));

return statearr_18018;
})();
var state_18005__$1 = state_18005;
var ex18015 = (state_18005__$1[(2)]);
var statearr_18019_18049 = state_18005__$1;
(statearr_18019_18049[(5)] = ex18015);


if((ex18015 instanceof Object)){
var statearr_18020_18050 = state_18005__$1;
(statearr_18020_18050[(1)] = (11));

(statearr_18020_18050[(5)] = null);

} else {
throw ex18015;

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18006 === (2))){
var inst_17964 = cljs.core.reset_BANG_(dctr,cnt);
var inst_17965 = cnt;
var inst_17966 = (0);
var state_18005__$1 = (function (){var statearr_18021 = state_18005;
(statearr_18021[(7)] = inst_17966);

(statearr_18021[(8)] = inst_17965);

(statearr_18021[(11)] = inst_17964);

return statearr_18021;
})();
var statearr_18022_18051 = state_18005__$1;
(statearr_18022_18051[(2)] = null);

(statearr_18022_18051[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18006 === (11))){
var inst_17970 = (state_18005[(2)]);
var inst_17971 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_18005__$1 = (function (){var statearr_18023 = state_18005;
(statearr_18023[(12)] = inst_17970);

return statearr_18023;
})();
var statearr_18024_18052 = state_18005__$1;
(statearr_18024_18052[(2)] = inst_17971);

(statearr_18024_18052[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18006 === (9))){
var inst_17966 = (state_18005[(7)]);
var _ = (function (){var statearr_18025 = state_18005;
(statearr_18025[(4)] = cljs.core.cons((12),(state_18005[(4)])));

return statearr_18025;
})();
var inst_17977 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17966) : chs__$1.call(null,inst_17966));
var inst_17978 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17966) : done.call(null,inst_17966));
var inst_17979 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17977,inst_17978);
var ___$1 = (function (){var statearr_18026 = state_18005;
(statearr_18026[(4)] = cljs.core.rest((state_18005[(4)])));

return statearr_18026;
})();
var state_18005__$1 = state_18005;
var statearr_18027_18053 = state_18005__$1;
(statearr_18027_18053[(2)] = inst_17979);

(statearr_18027_18053[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18006 === (5))){
var inst_17989 = (state_18005[(2)]);
var state_18005__$1 = (function (){var statearr_18028 = state_18005;
(statearr_18028[(13)] = inst_17989);

return statearr_18028;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18005__$1,(13),dchan);
} else {
if((state_val_18006 === (14))){
var inst_17994 = cljs.core.async.close_BANG_(out);
var state_18005__$1 = state_18005;
var statearr_18029_18054 = state_18005__$1;
(statearr_18029_18054[(2)] = inst_17994);

(statearr_18029_18054[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18006 === (16))){
var inst_18001 = (state_18005[(2)]);
var state_18005__$1 = state_18005;
var statearr_18030_18055 = state_18005__$1;
(statearr_18030_18055[(2)] = inst_18001);

(statearr_18030_18055[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18006 === (10))){
var inst_17966 = (state_18005[(7)]);
var inst_17982 = (state_18005[(2)]);
var inst_17983 = (inst_17966 + (1));
var inst_17966__$1 = inst_17983;
var state_18005__$1 = (function (){var statearr_18031 = state_18005;
(statearr_18031[(7)] = inst_17966__$1);

(statearr_18031[(14)] = inst_17982);

return statearr_18031;
})();
var statearr_18032_18056 = state_18005__$1;
(statearr_18032_18056[(2)] = null);

(statearr_18032_18056[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18006 === (8))){
var inst_17987 = (state_18005[(2)]);
var state_18005__$1 = state_18005;
var statearr_18033_18057 = state_18005__$1;
(statearr_18033_18057[(2)] = inst_17987);

(statearr_18033_18057[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
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
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14817__auto__ = null;
var cljs$core$async$state_machine__14817__auto____0 = (function (){
var statearr_18034 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18034[(0)] = cljs$core$async$state_machine__14817__auto__);

(statearr_18034[(1)] = (1));

return statearr_18034;
});
var cljs$core$async$state_machine__14817__auto____1 = (function (state_18005){
while(true){
var ret_value__14818__auto__ = (function (){try{while(true){
var result__14819__auto__ = switch__14816__auto__(state_18005);
if(cljs.core.keyword_identical_QMARK_(result__14819__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14819__auto__;
}
break;
}
}catch (e18035){var ex__14820__auto__ = e18035;
var statearr_18036_18058 = state_18005;
(statearr_18036_18058[(2)] = ex__14820__auto__);


if(cljs.core.seq((state_18005[(4)]))){
var statearr_18037_18059 = state_18005;
(statearr_18037_18059[(1)] = cljs.core.first((state_18005[(4)])));

} else {
throw ex__14820__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14818__auto__,cljs.core.cst$kw$recur)){
var G__18060 = state_18005;
state_18005 = G__18060;
continue;
} else {
return ret_value__14818__auto__;
}
break;
}
});
cljs$core$async$state_machine__14817__auto__ = function(state_18005){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14817__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14817__auto____1.call(this,state_18005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14817__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14817__auto____0;
cljs$core$async$state_machine__14817__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14817__auto____1;
return cljs$core$async$state_machine__14817__auto__;
})()
})();
var state__16652__auto__ = (function (){var statearr_18038 = (f__16651__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16651__auto__.cljs$core$IFn$_invoke$arity$0() : f__16651__auto__.call(null));
(statearr_18038[(6)] = c__16650__auto___18040);

return statearr_18038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16652__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__18063 = arguments.length;
switch (G__18063) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16650__auto___18118 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16651__auto__ = (function (){var switch__14816__auto__ = (function (state_18095){
var state_val_18096 = (state_18095[(1)]);
if((state_val_18096 === (7))){
var inst_18074 = (state_18095[(7)]);
var inst_18075 = (state_18095[(8)]);
var inst_18074__$1 = (state_18095[(2)]);
var inst_18075__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18074__$1,(0),null);
var inst_18076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18074__$1,(1),null);
var inst_18077 = (inst_18075__$1 == null);
var state_18095__$1 = (function (){var statearr_18097 = state_18095;
(statearr_18097[(7)] = inst_18074__$1);

(statearr_18097[(9)] = inst_18076);

(statearr_18097[(8)] = inst_18075__$1);

return statearr_18097;
})();
if(cljs.core.truth_(inst_18077)){
var statearr_18098_18119 = state_18095__$1;
(statearr_18098_18119[(1)] = (8));

} else {
var statearr_18099_18120 = state_18095__$1;
(statearr_18099_18120[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18096 === (1))){
var inst_18064 = cljs.core.vec(chs);
var inst_18065 = inst_18064;
var state_18095__$1 = (function (){var statearr_18100 = state_18095;
(statearr_18100[(10)] = inst_18065);

return statearr_18100;
})();
var statearr_18101_18121 = state_18095__$1;
(statearr_18101_18121[(2)] = null);

(statearr_18101_18121[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18096 === (4))){
var inst_18065 = (state_18095[(10)]);
var state_18095__$1 = state_18095;
return cljs.core.async.ioc_alts_BANG_(state_18095__$1,(7),inst_18065);
} else {
if((state_val_18096 === (6))){
var inst_18091 = (state_18095[(2)]);
var state_18095__$1 = state_18095;
var statearr_18102_18122 = state_18095__$1;
(statearr_18102_18122[(2)] = inst_18091);

(statearr_18102_18122[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18096 === (3))){
var inst_18093 = (state_18095[(2)]);
var state_18095__$1 = state_18095;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18095__$1,inst_18093);
} else {
if((state_val_18096 === (2))){
var inst_18065 = (state_18095[(10)]);
var inst_18067 = cljs.core.count(inst_18065);
var inst_18068 = (inst_18067 > (0));
var state_18095__$1 = state_18095;
if(cljs.core.truth_(inst_18068)){
var statearr_18104_18123 = state_18095__$1;
(statearr_18104_18123[(1)] = (4));

} else {
var statearr_18105_18124 = state_18095__$1;
(statearr_18105_18124[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18096 === (11))){
var inst_18065 = (state_18095[(10)]);
var inst_18084 = (state_18095[(2)]);
var tmp18103 = inst_18065;
var inst_18065__$1 = tmp18103;
var state_18095__$1 = (function (){var statearr_18106 = state_18095;
(statearr_18106[(11)] = inst_18084);

(statearr_18106[(10)] = inst_18065__$1);

return statearr_18106;
})();
var statearr_18107_18125 = state_18095__$1;
(statearr_18107_18125[(2)] = null);

(statearr_18107_18125[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18096 === (9))){
var inst_18075 = (state_18095[(8)]);
var state_18095__$1 = state_18095;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18095__$1,(11),out,inst_18075);
} else {
if((state_val_18096 === (5))){
var inst_18089 = cljs.core.async.close_BANG_(out);
var state_18095__$1 = state_18095;
var statearr_18108_18126 = state_18095__$1;
(statearr_18108_18126[(2)] = inst_18089);

(statearr_18108_18126[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18096 === (10))){
var inst_18087 = (state_18095[(2)]);
var state_18095__$1 = state_18095;
var statearr_18109_18127 = state_18095__$1;
(statearr_18109_18127[(2)] = inst_18087);

(statearr_18109_18127[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18096 === (8))){
var inst_18074 = (state_18095[(7)]);
var inst_18076 = (state_18095[(9)]);
var inst_18065 = (state_18095[(10)]);
var inst_18075 = (state_18095[(8)]);
var inst_18079 = (function (){var cs = inst_18065;
var vec__18070 = inst_18074;
var v = inst_18075;
var c = inst_18076;
return (function (p1__18061_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__18061_SHARP_);
});
})();
var inst_18080 = cljs.core.filterv(inst_18079,inst_18065);
var inst_18065__$1 = inst_18080;
var state_18095__$1 = (function (){var statearr_18110 = state_18095;
(statearr_18110[(10)] = inst_18065__$1);

return statearr_18110;
})();
var statearr_18111_18128 = state_18095__$1;
(statearr_18111_18128[(2)] = null);

(statearr_18111_18128[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
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
}
});
return (function() {
var cljs$core$async$state_machine__14817__auto__ = null;
var cljs$core$async$state_machine__14817__auto____0 = (function (){
var statearr_18112 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18112[(0)] = cljs$core$async$state_machine__14817__auto__);

(statearr_18112[(1)] = (1));

return statearr_18112;
});
var cljs$core$async$state_machine__14817__auto____1 = (function (state_18095){
while(true){
var ret_value__14818__auto__ = (function (){try{while(true){
var result__14819__auto__ = switch__14816__auto__(state_18095);
if(cljs.core.keyword_identical_QMARK_(result__14819__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14819__auto__;
}
break;
}
}catch (e18113){var ex__14820__auto__ = e18113;
var statearr_18114_18129 = state_18095;
(statearr_18114_18129[(2)] = ex__14820__auto__);


if(cljs.core.seq((state_18095[(4)]))){
var statearr_18115_18130 = state_18095;
(statearr_18115_18130[(1)] = cljs.core.first((state_18095[(4)])));

} else {
throw ex__14820__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14818__auto__,cljs.core.cst$kw$recur)){
var G__18131 = state_18095;
state_18095 = G__18131;
continue;
} else {
return ret_value__14818__auto__;
}
break;
}
});
cljs$core$async$state_machine__14817__auto__ = function(state_18095){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14817__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14817__auto____1.call(this,state_18095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14817__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14817__auto____0;
cljs$core$async$state_machine__14817__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14817__auto____1;
return cljs$core$async$state_machine__14817__auto__;
})()
})();
var state__16652__auto__ = (function (){var statearr_18116 = (f__16651__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16651__auto__.cljs$core$IFn$_invoke$arity$0() : f__16651__auto__.call(null));
(statearr_18116[(6)] = c__16650__auto___18118);

return statearr_18116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16652__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__18133 = arguments.length;
switch (G__18133) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16650__auto___18179 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16651__auto__ = (function (){var switch__14816__auto__ = (function (state_18157){
var state_val_18158 = (state_18157[(1)]);
if((state_val_18158 === (7))){
var inst_18139 = (state_18157[(7)]);
var inst_18139__$1 = (state_18157[(2)]);
var inst_18140 = (inst_18139__$1 == null);
var inst_18141 = cljs.core.not(inst_18140);
var state_18157__$1 = (function (){var statearr_18159 = state_18157;
(statearr_18159[(7)] = inst_18139__$1);

return statearr_18159;
})();
if(inst_18141){
var statearr_18160_18180 = state_18157__$1;
(statearr_18160_18180[(1)] = (8));

} else {
var statearr_18161_18181 = state_18157__$1;
(statearr_18161_18181[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18158 === (1))){
var inst_18134 = (0);
var state_18157__$1 = (function (){var statearr_18162 = state_18157;
(statearr_18162[(8)] = inst_18134);

return statearr_18162;
})();
var statearr_18163_18182 = state_18157__$1;
(statearr_18163_18182[(2)] = null);

(statearr_18163_18182[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18158 === (4))){
var state_18157__$1 = state_18157;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18157__$1,(7),ch);
} else {
if((state_val_18158 === (6))){
var inst_18152 = (state_18157[(2)]);
var state_18157__$1 = state_18157;
var statearr_18164_18183 = state_18157__$1;
(statearr_18164_18183[(2)] = inst_18152);

(statearr_18164_18183[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18158 === (3))){
var inst_18154 = (state_18157[(2)]);
var inst_18155 = cljs.core.async.close_BANG_(out);
var state_18157__$1 = (function (){var statearr_18165 = state_18157;
(statearr_18165[(9)] = inst_18154);

return statearr_18165;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18157__$1,inst_18155);
} else {
if((state_val_18158 === (2))){
var inst_18134 = (state_18157[(8)]);
var inst_18136 = (inst_18134 < n);
var state_18157__$1 = state_18157;
if(cljs.core.truth_(inst_18136)){
var statearr_18166_18184 = state_18157__$1;
(statearr_18166_18184[(1)] = (4));

} else {
var statearr_18167_18185 = state_18157__$1;
(statearr_18167_18185[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18158 === (11))){
var inst_18134 = (state_18157[(8)]);
var inst_18144 = (state_18157[(2)]);
var inst_18145 = (inst_18134 + (1));
var inst_18134__$1 = inst_18145;
var state_18157__$1 = (function (){var statearr_18168 = state_18157;
(statearr_18168[(8)] = inst_18134__$1);

(statearr_18168[(10)] = inst_18144);

return statearr_18168;
})();
var statearr_18169_18186 = state_18157__$1;
(statearr_18169_18186[(2)] = null);

(statearr_18169_18186[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18158 === (9))){
var state_18157__$1 = state_18157;
var statearr_18170_18187 = state_18157__$1;
(statearr_18170_18187[(2)] = null);

(statearr_18170_18187[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18158 === (5))){
var state_18157__$1 = state_18157;
var statearr_18171_18188 = state_18157__$1;
(statearr_18171_18188[(2)] = null);

(statearr_18171_18188[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18158 === (10))){
var inst_18149 = (state_18157[(2)]);
var state_18157__$1 = state_18157;
var statearr_18172_18189 = state_18157__$1;
(statearr_18172_18189[(2)] = inst_18149);

(statearr_18172_18189[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18158 === (8))){
var inst_18139 = (state_18157[(7)]);
var state_18157__$1 = state_18157;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18157__$1,(11),out,inst_18139);
} else {
return null;
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
}
});
return (function() {
var cljs$core$async$state_machine__14817__auto__ = null;
var cljs$core$async$state_machine__14817__auto____0 = (function (){
var statearr_18173 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18173[(0)] = cljs$core$async$state_machine__14817__auto__);

(statearr_18173[(1)] = (1));

return statearr_18173;
});
var cljs$core$async$state_machine__14817__auto____1 = (function (state_18157){
while(true){
var ret_value__14818__auto__ = (function (){try{while(true){
var result__14819__auto__ = switch__14816__auto__(state_18157);
if(cljs.core.keyword_identical_QMARK_(result__14819__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14819__auto__;
}
break;
}
}catch (e18174){var ex__14820__auto__ = e18174;
var statearr_18175_18190 = state_18157;
(statearr_18175_18190[(2)] = ex__14820__auto__);


if(cljs.core.seq((state_18157[(4)]))){
var statearr_18176_18191 = state_18157;
(statearr_18176_18191[(1)] = cljs.core.first((state_18157[(4)])));

} else {
throw ex__14820__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14818__auto__,cljs.core.cst$kw$recur)){
var G__18192 = state_18157;
state_18157 = G__18192;
continue;
} else {
return ret_value__14818__auto__;
}
break;
}
});
cljs$core$async$state_machine__14817__auto__ = function(state_18157){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14817__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14817__auto____1.call(this,state_18157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14817__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14817__auto____0;
cljs$core$async$state_machine__14817__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14817__auto____1;
return cljs$core$async$state_machine__14817__auto__;
})()
})();
var state__16652__auto__ = (function (){var statearr_18177 = (f__16651__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16651__auto__.cljs$core$IFn$_invoke$arity$0() : f__16651__auto__.call(null));
(statearr_18177[(6)] = c__16650__auto___18179);

return statearr_18177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16652__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18194 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18194 = (function (f,ch,meta18195){
this.f = f;
this.ch = ch;
this.meta18195 = meta18195;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18194.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18196,meta18195__$1){
var self__ = this;
var _18196__$1 = this;
return (new cljs.core.async.t_cljs$core$async18194(self__.f,self__.ch,meta18195__$1));
}));

(cljs.core.async.t_cljs$core$async18194.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18196){
var self__ = this;
var _18196__$1 = this;
return self__.meta18195;
}));

(cljs.core.async.t_cljs$core$async18194.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18194.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18194.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18194.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18194.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18197 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18197 = (function (f,ch,meta18195,_,fn1,meta18198){
this.f = f;
this.ch = ch;
this.meta18195 = meta18195;
this._ = _;
this.fn1 = fn1;
this.meta18198 = meta18198;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18197.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18199,meta18198__$1){
var self__ = this;
var _18199__$1 = this;
return (new cljs.core.async.t_cljs$core$async18197(self__.f,self__.ch,self__.meta18195,self__._,self__.fn1,meta18198__$1));
}));

(cljs.core.async.t_cljs$core$async18197.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18199){
var self__ = this;
var _18199__$1 = this;
return self__.meta18198;
}));

(cljs.core.async.t_cljs$core$async18197.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18197.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async18197.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18197.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__18193_SHARP_){
var G__18200 = (((p1__18193_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__18193_SHARP_) : self__.f.call(null,p1__18193_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__18200) : f1.call(null,G__18200));
});
}));

(cljs.core.async.t_cljs$core$async18197.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18195,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async18194], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta18198], null);
}));

(cljs.core.async.t_cljs$core$async18197.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18197.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18197");

(cljs.core.async.t_cljs$core$async18197.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async18197");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18197.
 */
cljs.core.async.__GT_t_cljs$core$async18197 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18197(f__$1,ch__$1,meta18195__$1,___$2,fn1__$1,meta18198){
return (new cljs.core.async.t_cljs$core$async18197(f__$1,ch__$1,meta18195__$1,___$2,fn1__$1,meta18198));
});

}

return (new cljs.core.async.t_cljs$core$async18197(self__.f,self__.ch,self__.meta18195,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__18201 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__18201) : self__.f.call(null,G__18201));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async18194.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18194.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async18194.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18195], null);
}));

(cljs.core.async.t_cljs$core$async18194.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18194.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18194");

(cljs.core.async.t_cljs$core$async18194.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async18194");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18194.
 */
cljs.core.async.__GT_t_cljs$core$async18194 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18194(f__$1,ch__$1,meta18195){
return (new cljs.core.async.t_cljs$core$async18194(f__$1,ch__$1,meta18195));
});

}

return (new cljs.core.async.t_cljs$core$async18194(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18202 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18202 = (function (f,ch,meta18203){
this.f = f;
this.ch = ch;
this.meta18203 = meta18203;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18204,meta18203__$1){
var self__ = this;
var _18204__$1 = this;
return (new cljs.core.async.t_cljs$core$async18202(self__.f,self__.ch,meta18203__$1));
}));

(cljs.core.async.t_cljs$core$async18202.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18204){
var self__ = this;
var _18204__$1 = this;
return self__.meta18203;
}));

(cljs.core.async.t_cljs$core$async18202.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18202.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18202.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18202.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18202.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18202.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async18202.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18203], null);
}));

(cljs.core.async.t_cljs$core$async18202.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18202.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18202");

(cljs.core.async.t_cljs$core$async18202.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async18202");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18202.
 */
cljs.core.async.__GT_t_cljs$core$async18202 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async18202(f__$1,ch__$1,meta18203){
return (new cljs.core.async.t_cljs$core$async18202(f__$1,ch__$1,meta18203));
});

}

return (new cljs.core.async.t_cljs$core$async18202(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18205 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18205 = (function (p,ch,meta18206){
this.p = p;
this.ch = ch;
this.meta18206 = meta18206;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18205.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18207,meta18206__$1){
var self__ = this;
var _18207__$1 = this;
return (new cljs.core.async.t_cljs$core$async18205(self__.p,self__.ch,meta18206__$1));
}));

(cljs.core.async.t_cljs$core$async18205.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18207){
var self__ = this;
var _18207__$1 = this;
return self__.meta18206;
}));

(cljs.core.async.t_cljs$core$async18205.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18205.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18205.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18205.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18205.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18205.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18205.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async18205.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18206], null);
}));

(cljs.core.async.t_cljs$core$async18205.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18205.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18205");

(cljs.core.async.t_cljs$core$async18205.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async18205");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18205.
 */
cljs.core.async.__GT_t_cljs$core$async18205 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async18205(p__$1,ch__$1,meta18206){
return (new cljs.core.async.t_cljs$core$async18205(p__$1,ch__$1,meta18206));
});

}

return (new cljs.core.async.t_cljs$core$async18205(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__18209 = arguments.length;
switch (G__18209) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16650__auto___18250 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16651__auto__ = (function (){var switch__14816__auto__ = (function (state_18230){
var state_val_18231 = (state_18230[(1)]);
if((state_val_18231 === (7))){
var inst_18226 = (state_18230[(2)]);
var state_18230__$1 = state_18230;
var statearr_18232_18251 = state_18230__$1;
(statearr_18232_18251[(2)] = inst_18226);

(statearr_18232_18251[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18231 === (1))){
var state_18230__$1 = state_18230;
var statearr_18233_18252 = state_18230__$1;
(statearr_18233_18252[(2)] = null);

(statearr_18233_18252[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18231 === (4))){
var inst_18212 = (state_18230[(7)]);
var inst_18212__$1 = (state_18230[(2)]);
var inst_18213 = (inst_18212__$1 == null);
var state_18230__$1 = (function (){var statearr_18234 = state_18230;
(statearr_18234[(7)] = inst_18212__$1);

return statearr_18234;
})();
if(cljs.core.truth_(inst_18213)){
var statearr_18235_18253 = state_18230__$1;
(statearr_18235_18253[(1)] = (5));

} else {
var statearr_18236_18254 = state_18230__$1;
(statearr_18236_18254[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18231 === (6))){
var inst_18212 = (state_18230[(7)]);
var inst_18217 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18212) : p.call(null,inst_18212));
var state_18230__$1 = state_18230;
if(cljs.core.truth_(inst_18217)){
var statearr_18237_18255 = state_18230__$1;
(statearr_18237_18255[(1)] = (8));

} else {
var statearr_18238_18256 = state_18230__$1;
(statearr_18238_18256[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18231 === (3))){
var inst_18228 = (state_18230[(2)]);
var state_18230__$1 = state_18230;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18230__$1,inst_18228);
} else {
if((state_val_18231 === (2))){
var state_18230__$1 = state_18230;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18230__$1,(4),ch);
} else {
if((state_val_18231 === (11))){
var inst_18220 = (state_18230[(2)]);
var state_18230__$1 = state_18230;
var statearr_18239_18257 = state_18230__$1;
(statearr_18239_18257[(2)] = inst_18220);

(statearr_18239_18257[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18231 === (9))){
var state_18230__$1 = state_18230;
var statearr_18240_18258 = state_18230__$1;
(statearr_18240_18258[(2)] = null);

(statearr_18240_18258[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18231 === (5))){
var inst_18215 = cljs.core.async.close_BANG_(out);
var state_18230__$1 = state_18230;
var statearr_18241_18259 = state_18230__$1;
(statearr_18241_18259[(2)] = inst_18215);

(statearr_18241_18259[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18231 === (10))){
var inst_18223 = (state_18230[(2)]);
var state_18230__$1 = (function (){var statearr_18242 = state_18230;
(statearr_18242[(8)] = inst_18223);

return statearr_18242;
})();
var statearr_18243_18260 = state_18230__$1;
(statearr_18243_18260[(2)] = null);

(statearr_18243_18260[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18231 === (8))){
var inst_18212 = (state_18230[(7)]);
var state_18230__$1 = state_18230;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18230__$1,(11),out,inst_18212);
} else {
return null;
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
}
});
return (function() {
var cljs$core$async$state_machine__14817__auto__ = null;
var cljs$core$async$state_machine__14817__auto____0 = (function (){
var statearr_18244 = [null,null,null,null,null,null,null,null,null];
(statearr_18244[(0)] = cljs$core$async$state_machine__14817__auto__);

(statearr_18244[(1)] = (1));

return statearr_18244;
});
var cljs$core$async$state_machine__14817__auto____1 = (function (state_18230){
while(true){
var ret_value__14818__auto__ = (function (){try{while(true){
var result__14819__auto__ = switch__14816__auto__(state_18230);
if(cljs.core.keyword_identical_QMARK_(result__14819__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14819__auto__;
}
break;
}
}catch (e18245){var ex__14820__auto__ = e18245;
var statearr_18246_18261 = state_18230;
(statearr_18246_18261[(2)] = ex__14820__auto__);


if(cljs.core.seq((state_18230[(4)]))){
var statearr_18247_18262 = state_18230;
(statearr_18247_18262[(1)] = cljs.core.first((state_18230[(4)])));

} else {
throw ex__14820__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14818__auto__,cljs.core.cst$kw$recur)){
var G__18263 = state_18230;
state_18230 = G__18263;
continue;
} else {
return ret_value__14818__auto__;
}
break;
}
});
cljs$core$async$state_machine__14817__auto__ = function(state_18230){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14817__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14817__auto____1.call(this,state_18230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14817__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14817__auto____0;
cljs$core$async$state_machine__14817__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14817__auto____1;
return cljs$core$async$state_machine__14817__auto__;
})()
})();
var state__16652__auto__ = (function (){var statearr_18248 = (f__16651__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16651__auto__.cljs$core$IFn$_invoke$arity$0() : f__16651__auto__.call(null));
(statearr_18248[(6)] = c__16650__auto___18250);

return statearr_18248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16652__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__18265 = arguments.length;
switch (G__18265) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__16650__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16651__auto__ = (function (){var switch__14816__auto__ = (function (state_18328){
var state_val_18329 = (state_18328[(1)]);
if((state_val_18329 === (7))){
var inst_18324 = (state_18328[(2)]);
var state_18328__$1 = state_18328;
var statearr_18330_18369 = state_18328__$1;
(statearr_18330_18369[(2)] = inst_18324);

(statearr_18330_18369[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18329 === (20))){
var inst_18294 = (state_18328[(7)]);
var inst_18305 = (state_18328[(2)]);
var inst_18306 = cljs.core.next(inst_18294);
var inst_18280 = inst_18306;
var inst_18281 = null;
var inst_18282 = (0);
var inst_18283 = (0);
var state_18328__$1 = (function (){var statearr_18331 = state_18328;
(statearr_18331[(8)] = inst_18281);

(statearr_18331[(9)] = inst_18305);

(statearr_18331[(10)] = inst_18283);

(statearr_18331[(11)] = inst_18282);

(statearr_18331[(12)] = inst_18280);

return statearr_18331;
})();
var statearr_18332_18370 = state_18328__$1;
(statearr_18332_18370[(2)] = null);

(statearr_18332_18370[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18329 === (1))){
var state_18328__$1 = state_18328;
var statearr_18333_18371 = state_18328__$1;
(statearr_18333_18371[(2)] = null);

(statearr_18333_18371[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18329 === (4))){
var inst_18269 = (state_18328[(13)]);
var inst_18269__$1 = (state_18328[(2)]);
var inst_18270 = (inst_18269__$1 == null);
var state_18328__$1 = (function (){var statearr_18334 = state_18328;
(statearr_18334[(13)] = inst_18269__$1);

return statearr_18334;
})();
if(cljs.core.truth_(inst_18270)){
var statearr_18335_18372 = state_18328__$1;
(statearr_18335_18372[(1)] = (5));

} else {
var statearr_18336_18373 = state_18328__$1;
(statearr_18336_18373[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18329 === (15))){
var state_18328__$1 = state_18328;
var statearr_18340_18374 = state_18328__$1;
(statearr_18340_18374[(2)] = null);

(statearr_18340_18374[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18329 === (21))){
var state_18328__$1 = state_18328;
var statearr_18341_18375 = state_18328__$1;
(statearr_18341_18375[(2)] = null);

(statearr_18341_18375[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18329 === (13))){
var inst_18281 = (state_18328[(8)]);
var inst_18283 = (state_18328[(10)]);
var inst_18282 = (state_18328[(11)]);
var inst_18280 = (state_18328[(12)]);
var inst_18290 = (state_18328[(2)]);
var inst_18291 = (inst_18283 + (1));
var tmp18337 = inst_18281;
var tmp18338 = inst_18282;
var tmp18339 = inst_18280;
var inst_18280__$1 = tmp18339;
var inst_18281__$1 = tmp18337;
var inst_18282__$1 = tmp18338;
var inst_18283__$1 = inst_18291;
var state_18328__$1 = (function (){var statearr_18342 = state_18328;
(statearr_18342[(8)] = inst_18281__$1);

(statearr_18342[(10)] = inst_18283__$1);

(statearr_18342[(14)] = inst_18290);

(statearr_18342[(11)] = inst_18282__$1);

(statearr_18342[(12)] = inst_18280__$1);

return statearr_18342;
})();
var statearr_18343_18376 = state_18328__$1;
(statearr_18343_18376[(2)] = null);

(statearr_18343_18376[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18329 === (22))){
var state_18328__$1 = state_18328;
var statearr_18344_18377 = state_18328__$1;
(statearr_18344_18377[(2)] = null);

(statearr_18344_18377[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18329 === (6))){
var inst_18269 = (state_18328[(13)]);
var inst_18278 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18269) : f.call(null,inst_18269));
var inst_18279 = cljs.core.seq(inst_18278);
var inst_18280 = inst_18279;
var inst_18281 = null;
var inst_18282 = (0);
var inst_18283 = (0);
var state_18328__$1 = (function (){var statearr_18345 = state_18328;
(statearr_18345[(8)] = inst_18281);

(statearr_18345[(10)] = inst_18283);

(statearr_18345[(11)] = inst_18282);

(statearr_18345[(12)] = inst_18280);

return statearr_18345;
})();
var statearr_18346_18378 = state_18328__$1;
(statearr_18346_18378[(2)] = null);

(statearr_18346_18378[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18329 === (17))){
var inst_18294 = (state_18328[(7)]);
var inst_18298 = cljs.core.chunk_first(inst_18294);
var inst_18299 = cljs.core.chunk_rest(inst_18294);
var inst_18300 = cljs.core.count(inst_18298);
var inst_18280 = inst_18299;
var inst_18281 = inst_18298;
var inst_18282 = inst_18300;
var inst_18283 = (0);
var state_18328__$1 = (function (){var statearr_18347 = state_18328;
(statearr_18347[(8)] = inst_18281);

(statearr_18347[(10)] = inst_18283);

(statearr_18347[(11)] = inst_18282);

(statearr_18347[(12)] = inst_18280);

return statearr_18347;
})();
var statearr_18348_18379 = state_18328__$1;
(statearr_18348_18379[(2)] = null);

(statearr_18348_18379[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18329 === (3))){
var inst_18326 = (state_18328[(2)]);
var state_18328__$1 = state_18328;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18328__$1,inst_18326);
} else {
if((state_val_18329 === (12))){
var inst_18314 = (state_18328[(2)]);
var state_18328__$1 = state_18328;
var statearr_18349_18380 = state_18328__$1;
(statearr_18349_18380[(2)] = inst_18314);

(statearr_18349_18380[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18329 === (2))){
var state_18328__$1 = state_18328;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18328__$1,(4),in$);
} else {
if((state_val_18329 === (23))){
var inst_18322 = (state_18328[(2)]);
var state_18328__$1 = state_18328;
var statearr_18350_18381 = state_18328__$1;
(statearr_18350_18381[(2)] = inst_18322);

(statearr_18350_18381[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18329 === (19))){
var inst_18309 = (state_18328[(2)]);
var state_18328__$1 = state_18328;
var statearr_18351_18382 = state_18328__$1;
(statearr_18351_18382[(2)] = inst_18309);

(statearr_18351_18382[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18329 === (11))){
var inst_18294 = (state_18328[(7)]);
var inst_18280 = (state_18328[(12)]);
var inst_18294__$1 = cljs.core.seq(inst_18280);
var state_18328__$1 = (function (){var statearr_18352 = state_18328;
(statearr_18352[(7)] = inst_18294__$1);

return statearr_18352;
})();
if(inst_18294__$1){
var statearr_18353_18383 = state_18328__$1;
(statearr_18353_18383[(1)] = (14));

} else {
var statearr_18354_18384 = state_18328__$1;
(statearr_18354_18384[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18329 === (9))){
var inst_18316 = (state_18328[(2)]);
var inst_18317 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_18328__$1 = (function (){var statearr_18355 = state_18328;
(statearr_18355[(15)] = inst_18316);

return statearr_18355;
})();
if(cljs.core.truth_(inst_18317)){
var statearr_18356_18385 = state_18328__$1;
(statearr_18356_18385[(1)] = (21));

} else {
var statearr_18357_18386 = state_18328__$1;
(statearr_18357_18386[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18329 === (5))){
var inst_18272 = cljs.core.async.close_BANG_(out);
var state_18328__$1 = state_18328;
var statearr_18358_18387 = state_18328__$1;
(statearr_18358_18387[(2)] = inst_18272);

(statearr_18358_18387[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18329 === (14))){
var inst_18294 = (state_18328[(7)]);
var inst_18296 = cljs.core.chunked_seq_QMARK_(inst_18294);
var state_18328__$1 = state_18328;
if(inst_18296){
var statearr_18359_18388 = state_18328__$1;
(statearr_18359_18388[(1)] = (17));

} else {
var statearr_18360_18389 = state_18328__$1;
(statearr_18360_18389[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18329 === (16))){
var inst_18312 = (state_18328[(2)]);
var state_18328__$1 = state_18328;
var statearr_18361_18390 = state_18328__$1;
(statearr_18361_18390[(2)] = inst_18312);

(statearr_18361_18390[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18329 === (10))){
var inst_18281 = (state_18328[(8)]);
var inst_18283 = (state_18328[(10)]);
var inst_18288 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18281,inst_18283);
var state_18328__$1 = state_18328;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18328__$1,(13),out,inst_18288);
} else {
if((state_val_18329 === (18))){
var inst_18294 = (state_18328[(7)]);
var inst_18303 = cljs.core.first(inst_18294);
var state_18328__$1 = state_18328;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18328__$1,(20),out,inst_18303);
} else {
if((state_val_18329 === (8))){
var inst_18283 = (state_18328[(10)]);
var inst_18282 = (state_18328[(11)]);
var inst_18285 = (inst_18283 < inst_18282);
var inst_18286 = inst_18285;
var state_18328__$1 = state_18328;
if(cljs.core.truth_(inst_18286)){
var statearr_18362_18391 = state_18328__$1;
(statearr_18362_18391[(1)] = (10));

} else {
var statearr_18363_18392 = state_18328__$1;
(statearr_18363_18392[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
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
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14817__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14817__auto____0 = (function (){
var statearr_18364 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18364[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14817__auto__);

(statearr_18364[(1)] = (1));

return statearr_18364;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14817__auto____1 = (function (state_18328){
while(true){
var ret_value__14818__auto__ = (function (){try{while(true){
var result__14819__auto__ = switch__14816__auto__(state_18328);
if(cljs.core.keyword_identical_QMARK_(result__14819__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14819__auto__;
}
break;
}
}catch (e18365){var ex__14820__auto__ = e18365;
var statearr_18366_18393 = state_18328;
(statearr_18366_18393[(2)] = ex__14820__auto__);


if(cljs.core.seq((state_18328[(4)]))){
var statearr_18367_18394 = state_18328;
(statearr_18367_18394[(1)] = cljs.core.first((state_18328[(4)])));

} else {
throw ex__14820__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14818__auto__,cljs.core.cst$kw$recur)){
var G__18395 = state_18328;
state_18328 = G__18395;
continue;
} else {
return ret_value__14818__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14817__auto__ = function(state_18328){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14817__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14817__auto____1.call(this,state_18328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14817__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14817__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14817__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14817__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14817__auto__;
})()
})();
var state__16652__auto__ = (function (){var statearr_18368 = (f__16651__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16651__auto__.cljs$core$IFn$_invoke$arity$0() : f__16651__auto__.call(null));
(statearr_18368[(6)] = c__16650__auto__);

return statearr_18368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16652__auto__);
}));

return c__16650__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__18397 = arguments.length;
switch (G__18397) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__18400 = arguments.length;
switch (G__18400) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__18403 = arguments.length;
switch (G__18403) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16650__auto___18451 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16651__auto__ = (function (){var switch__14816__auto__ = (function (state_18427){
var state_val_18428 = (state_18427[(1)]);
if((state_val_18428 === (7))){
var inst_18422 = (state_18427[(2)]);
var state_18427__$1 = state_18427;
var statearr_18429_18452 = state_18427__$1;
(statearr_18429_18452[(2)] = inst_18422);

(statearr_18429_18452[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18428 === (1))){
var inst_18404 = null;
var state_18427__$1 = (function (){var statearr_18430 = state_18427;
(statearr_18430[(7)] = inst_18404);

return statearr_18430;
})();
var statearr_18431_18453 = state_18427__$1;
(statearr_18431_18453[(2)] = null);

(statearr_18431_18453[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18428 === (4))){
var inst_18407 = (state_18427[(8)]);
var inst_18407__$1 = (state_18427[(2)]);
var inst_18408 = (inst_18407__$1 == null);
var inst_18409 = cljs.core.not(inst_18408);
var state_18427__$1 = (function (){var statearr_18432 = state_18427;
(statearr_18432[(8)] = inst_18407__$1);

return statearr_18432;
})();
if(inst_18409){
var statearr_18433_18454 = state_18427__$1;
(statearr_18433_18454[(1)] = (5));

} else {
var statearr_18434_18455 = state_18427__$1;
(statearr_18434_18455[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18428 === (6))){
var state_18427__$1 = state_18427;
var statearr_18435_18456 = state_18427__$1;
(statearr_18435_18456[(2)] = null);

(statearr_18435_18456[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18428 === (3))){
var inst_18424 = (state_18427[(2)]);
var inst_18425 = cljs.core.async.close_BANG_(out);
var state_18427__$1 = (function (){var statearr_18436 = state_18427;
(statearr_18436[(9)] = inst_18424);

return statearr_18436;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18427__$1,inst_18425);
} else {
if((state_val_18428 === (2))){
var state_18427__$1 = state_18427;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18427__$1,(4),ch);
} else {
if((state_val_18428 === (11))){
var inst_18407 = (state_18427[(8)]);
var inst_18416 = (state_18427[(2)]);
var inst_18404 = inst_18407;
var state_18427__$1 = (function (){var statearr_18437 = state_18427;
(statearr_18437[(7)] = inst_18404);

(statearr_18437[(10)] = inst_18416);

return statearr_18437;
})();
var statearr_18438_18457 = state_18427__$1;
(statearr_18438_18457[(2)] = null);

(statearr_18438_18457[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18428 === (9))){
var inst_18407 = (state_18427[(8)]);
var state_18427__$1 = state_18427;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18427__$1,(11),out,inst_18407);
} else {
if((state_val_18428 === (5))){
var inst_18404 = (state_18427[(7)]);
var inst_18407 = (state_18427[(8)]);
var inst_18411 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18407,inst_18404);
var state_18427__$1 = state_18427;
if(inst_18411){
var statearr_18440_18458 = state_18427__$1;
(statearr_18440_18458[(1)] = (8));

} else {
var statearr_18441_18459 = state_18427__$1;
(statearr_18441_18459[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18428 === (10))){
var inst_18419 = (state_18427[(2)]);
var state_18427__$1 = state_18427;
var statearr_18442_18460 = state_18427__$1;
(statearr_18442_18460[(2)] = inst_18419);

(statearr_18442_18460[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18428 === (8))){
var inst_18404 = (state_18427[(7)]);
var tmp18439 = inst_18404;
var inst_18404__$1 = tmp18439;
var state_18427__$1 = (function (){var statearr_18443 = state_18427;
(statearr_18443[(7)] = inst_18404__$1);

return statearr_18443;
})();
var statearr_18444_18461 = state_18427__$1;
(statearr_18444_18461[(2)] = null);

(statearr_18444_18461[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
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
}
});
return (function() {
var cljs$core$async$state_machine__14817__auto__ = null;
var cljs$core$async$state_machine__14817__auto____0 = (function (){
var statearr_18445 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18445[(0)] = cljs$core$async$state_machine__14817__auto__);

(statearr_18445[(1)] = (1));

return statearr_18445;
});
var cljs$core$async$state_machine__14817__auto____1 = (function (state_18427){
while(true){
var ret_value__14818__auto__ = (function (){try{while(true){
var result__14819__auto__ = switch__14816__auto__(state_18427);
if(cljs.core.keyword_identical_QMARK_(result__14819__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14819__auto__;
}
break;
}
}catch (e18446){var ex__14820__auto__ = e18446;
var statearr_18447_18462 = state_18427;
(statearr_18447_18462[(2)] = ex__14820__auto__);


if(cljs.core.seq((state_18427[(4)]))){
var statearr_18448_18463 = state_18427;
(statearr_18448_18463[(1)] = cljs.core.first((state_18427[(4)])));

} else {
throw ex__14820__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14818__auto__,cljs.core.cst$kw$recur)){
var G__18464 = state_18427;
state_18427 = G__18464;
continue;
} else {
return ret_value__14818__auto__;
}
break;
}
});
cljs$core$async$state_machine__14817__auto__ = function(state_18427){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14817__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14817__auto____1.call(this,state_18427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14817__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14817__auto____0;
cljs$core$async$state_machine__14817__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14817__auto____1;
return cljs$core$async$state_machine__14817__auto__;
})()
})();
var state__16652__auto__ = (function (){var statearr_18449 = (f__16651__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16651__auto__.cljs$core$IFn$_invoke$arity$0() : f__16651__auto__.call(null));
(statearr_18449[(6)] = c__16650__auto___18451);

return statearr_18449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16652__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__18466 = arguments.length;
switch (G__18466) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16650__auto___18533 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16651__auto__ = (function (){var switch__14816__auto__ = (function (state_18504){
var state_val_18505 = (state_18504[(1)]);
if((state_val_18505 === (7))){
var inst_18500 = (state_18504[(2)]);
var state_18504__$1 = state_18504;
var statearr_18506_18534 = state_18504__$1;
(statearr_18506_18534[(2)] = inst_18500);

(statearr_18506_18534[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18505 === (1))){
var inst_18467 = (new Array(n));
var inst_18468 = inst_18467;
var inst_18469 = (0);
var state_18504__$1 = (function (){var statearr_18507 = state_18504;
(statearr_18507[(7)] = inst_18469);

(statearr_18507[(8)] = inst_18468);

return statearr_18507;
})();
var statearr_18508_18535 = state_18504__$1;
(statearr_18508_18535[(2)] = null);

(statearr_18508_18535[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18505 === (4))){
var inst_18472 = (state_18504[(9)]);
var inst_18472__$1 = (state_18504[(2)]);
var inst_18473 = (inst_18472__$1 == null);
var inst_18474 = cljs.core.not(inst_18473);
var state_18504__$1 = (function (){var statearr_18509 = state_18504;
(statearr_18509[(9)] = inst_18472__$1);

return statearr_18509;
})();
if(inst_18474){
var statearr_18510_18536 = state_18504__$1;
(statearr_18510_18536[(1)] = (5));

} else {
var statearr_18511_18537 = state_18504__$1;
(statearr_18511_18537[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18505 === (15))){
var inst_18494 = (state_18504[(2)]);
var state_18504__$1 = state_18504;
var statearr_18512_18538 = state_18504__$1;
(statearr_18512_18538[(2)] = inst_18494);

(statearr_18512_18538[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18505 === (13))){
var state_18504__$1 = state_18504;
var statearr_18513_18539 = state_18504__$1;
(statearr_18513_18539[(2)] = null);

(statearr_18513_18539[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18505 === (6))){
var inst_18469 = (state_18504[(7)]);
var inst_18490 = (inst_18469 > (0));
var state_18504__$1 = state_18504;
if(cljs.core.truth_(inst_18490)){
var statearr_18514_18540 = state_18504__$1;
(statearr_18514_18540[(1)] = (12));

} else {
var statearr_18515_18541 = state_18504__$1;
(statearr_18515_18541[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18505 === (3))){
var inst_18502 = (state_18504[(2)]);
var state_18504__$1 = state_18504;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18504__$1,inst_18502);
} else {
if((state_val_18505 === (12))){
var inst_18468 = (state_18504[(8)]);
var inst_18492 = cljs.core.vec(inst_18468);
var state_18504__$1 = state_18504;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18504__$1,(15),out,inst_18492);
} else {
if((state_val_18505 === (2))){
var state_18504__$1 = state_18504;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18504__$1,(4),ch);
} else {
if((state_val_18505 === (11))){
var inst_18484 = (state_18504[(2)]);
var inst_18485 = (new Array(n));
var inst_18468 = inst_18485;
var inst_18469 = (0);
var state_18504__$1 = (function (){var statearr_18516 = state_18504;
(statearr_18516[(10)] = inst_18484);

(statearr_18516[(7)] = inst_18469);

(statearr_18516[(8)] = inst_18468);

return statearr_18516;
})();
var statearr_18517_18542 = state_18504__$1;
(statearr_18517_18542[(2)] = null);

(statearr_18517_18542[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18505 === (9))){
var inst_18468 = (state_18504[(8)]);
var inst_18482 = cljs.core.vec(inst_18468);
var state_18504__$1 = state_18504;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18504__$1,(11),out,inst_18482);
} else {
if((state_val_18505 === (5))){
var inst_18477 = (state_18504[(11)]);
var inst_18469 = (state_18504[(7)]);
var inst_18472 = (state_18504[(9)]);
var inst_18468 = (state_18504[(8)]);
var inst_18476 = (inst_18468[inst_18469] = inst_18472);
var inst_18477__$1 = (inst_18469 + (1));
var inst_18478 = (inst_18477__$1 < n);
var state_18504__$1 = (function (){var statearr_18518 = state_18504;
(statearr_18518[(11)] = inst_18477__$1);

(statearr_18518[(12)] = inst_18476);

return statearr_18518;
})();
if(cljs.core.truth_(inst_18478)){
var statearr_18519_18543 = state_18504__$1;
(statearr_18519_18543[(1)] = (8));

} else {
var statearr_18520_18544 = state_18504__$1;
(statearr_18520_18544[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18505 === (14))){
var inst_18497 = (state_18504[(2)]);
var inst_18498 = cljs.core.async.close_BANG_(out);
var state_18504__$1 = (function (){var statearr_18522 = state_18504;
(statearr_18522[(13)] = inst_18497);

return statearr_18522;
})();
var statearr_18523_18545 = state_18504__$1;
(statearr_18523_18545[(2)] = inst_18498);

(statearr_18523_18545[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18505 === (10))){
var inst_18488 = (state_18504[(2)]);
var state_18504__$1 = state_18504;
var statearr_18524_18546 = state_18504__$1;
(statearr_18524_18546[(2)] = inst_18488);

(statearr_18524_18546[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18505 === (8))){
var inst_18477 = (state_18504[(11)]);
var inst_18468 = (state_18504[(8)]);
var tmp18521 = inst_18468;
var inst_18468__$1 = tmp18521;
var inst_18469 = inst_18477;
var state_18504__$1 = (function (){var statearr_18525 = state_18504;
(statearr_18525[(7)] = inst_18469);

(statearr_18525[(8)] = inst_18468__$1);

return statearr_18525;
})();
var statearr_18526_18547 = state_18504__$1;
(statearr_18526_18547[(2)] = null);

(statearr_18526_18547[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
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
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14817__auto__ = null;
var cljs$core$async$state_machine__14817__auto____0 = (function (){
var statearr_18527 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18527[(0)] = cljs$core$async$state_machine__14817__auto__);

(statearr_18527[(1)] = (1));

return statearr_18527;
});
var cljs$core$async$state_machine__14817__auto____1 = (function (state_18504){
while(true){
var ret_value__14818__auto__ = (function (){try{while(true){
var result__14819__auto__ = switch__14816__auto__(state_18504);
if(cljs.core.keyword_identical_QMARK_(result__14819__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14819__auto__;
}
break;
}
}catch (e18528){var ex__14820__auto__ = e18528;
var statearr_18529_18548 = state_18504;
(statearr_18529_18548[(2)] = ex__14820__auto__);


if(cljs.core.seq((state_18504[(4)]))){
var statearr_18530_18549 = state_18504;
(statearr_18530_18549[(1)] = cljs.core.first((state_18504[(4)])));

} else {
throw ex__14820__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14818__auto__,cljs.core.cst$kw$recur)){
var G__18550 = state_18504;
state_18504 = G__18550;
continue;
} else {
return ret_value__14818__auto__;
}
break;
}
});
cljs$core$async$state_machine__14817__auto__ = function(state_18504){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14817__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14817__auto____1.call(this,state_18504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14817__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14817__auto____0;
cljs$core$async$state_machine__14817__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14817__auto____1;
return cljs$core$async$state_machine__14817__auto__;
})()
})();
var state__16652__auto__ = (function (){var statearr_18531 = (f__16651__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16651__auto__.cljs$core$IFn$_invoke$arity$0() : f__16651__auto__.call(null));
(statearr_18531[(6)] = c__16650__auto___18533);

return statearr_18531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16652__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__18552 = arguments.length;
switch (G__18552) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16650__auto___18623 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16651__auto__ = (function (){var switch__14816__auto__ = (function (state_18594){
var state_val_18595 = (state_18594[(1)]);
if((state_val_18595 === (7))){
var inst_18590 = (state_18594[(2)]);
var state_18594__$1 = state_18594;
var statearr_18596_18624 = state_18594__$1;
(statearr_18596_18624[(2)] = inst_18590);

(statearr_18596_18624[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18595 === (1))){
var inst_18553 = [];
var inst_18554 = inst_18553;
var inst_18555 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_18594__$1 = (function (){var statearr_18597 = state_18594;
(statearr_18597[(7)] = inst_18554);

(statearr_18597[(8)] = inst_18555);

return statearr_18597;
})();
var statearr_18598_18625 = state_18594__$1;
(statearr_18598_18625[(2)] = null);

(statearr_18598_18625[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18595 === (4))){
var inst_18558 = (state_18594[(9)]);
var inst_18558__$1 = (state_18594[(2)]);
var inst_18559 = (inst_18558__$1 == null);
var inst_18560 = cljs.core.not(inst_18559);
var state_18594__$1 = (function (){var statearr_18599 = state_18594;
(statearr_18599[(9)] = inst_18558__$1);

return statearr_18599;
})();
if(inst_18560){
var statearr_18600_18626 = state_18594__$1;
(statearr_18600_18626[(1)] = (5));

} else {
var statearr_18601_18627 = state_18594__$1;
(statearr_18601_18627[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18595 === (15))){
var inst_18584 = (state_18594[(2)]);
var state_18594__$1 = state_18594;
var statearr_18602_18628 = state_18594__$1;
(statearr_18602_18628[(2)] = inst_18584);

(statearr_18602_18628[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18595 === (13))){
var state_18594__$1 = state_18594;
var statearr_18603_18629 = state_18594__$1;
(statearr_18603_18629[(2)] = null);

(statearr_18603_18629[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18595 === (6))){
var inst_18554 = (state_18594[(7)]);
var inst_18579 = inst_18554.length;
var inst_18580 = (inst_18579 > (0));
var state_18594__$1 = state_18594;
if(cljs.core.truth_(inst_18580)){
var statearr_18604_18630 = state_18594__$1;
(statearr_18604_18630[(1)] = (12));

} else {
var statearr_18605_18631 = state_18594__$1;
(statearr_18605_18631[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18595 === (3))){
var inst_18592 = (state_18594[(2)]);
var state_18594__$1 = state_18594;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18594__$1,inst_18592);
} else {
if((state_val_18595 === (12))){
var inst_18554 = (state_18594[(7)]);
var inst_18582 = cljs.core.vec(inst_18554);
var state_18594__$1 = state_18594;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18594__$1,(15),out,inst_18582);
} else {
if((state_val_18595 === (2))){
var state_18594__$1 = state_18594;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18594__$1,(4),ch);
} else {
if((state_val_18595 === (11))){
var inst_18562 = (state_18594[(10)]);
var inst_18558 = (state_18594[(9)]);
var inst_18572 = (state_18594[(2)]);
var inst_18573 = [];
var inst_18574 = inst_18573.push(inst_18558);
var inst_18554 = inst_18573;
var inst_18555 = inst_18562;
var state_18594__$1 = (function (){var statearr_18606 = state_18594;
(statearr_18606[(7)] = inst_18554);

(statearr_18606[(11)] = inst_18574);

(statearr_18606[(8)] = inst_18555);

(statearr_18606[(12)] = inst_18572);

return statearr_18606;
})();
var statearr_18607_18632 = state_18594__$1;
(statearr_18607_18632[(2)] = null);

(statearr_18607_18632[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18595 === (9))){
var inst_18554 = (state_18594[(7)]);
var inst_18570 = cljs.core.vec(inst_18554);
var state_18594__$1 = state_18594;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18594__$1,(11),out,inst_18570);
} else {
if((state_val_18595 === (5))){
var inst_18562 = (state_18594[(10)]);
var inst_18555 = (state_18594[(8)]);
var inst_18558 = (state_18594[(9)]);
var inst_18562__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18558) : f.call(null,inst_18558));
var inst_18563 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18562__$1,inst_18555);
var inst_18564 = cljs.core.keyword_identical_QMARK_(inst_18555,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_18565 = ((inst_18563) || (inst_18564));
var state_18594__$1 = (function (){var statearr_18608 = state_18594;
(statearr_18608[(10)] = inst_18562__$1);

return statearr_18608;
})();
if(cljs.core.truth_(inst_18565)){
var statearr_18609_18633 = state_18594__$1;
(statearr_18609_18633[(1)] = (8));

} else {
var statearr_18610_18634 = state_18594__$1;
(statearr_18610_18634[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18595 === (14))){
var inst_18587 = (state_18594[(2)]);
var inst_18588 = cljs.core.async.close_BANG_(out);
var state_18594__$1 = (function (){var statearr_18612 = state_18594;
(statearr_18612[(13)] = inst_18587);

return statearr_18612;
})();
var statearr_18613_18635 = state_18594__$1;
(statearr_18613_18635[(2)] = inst_18588);

(statearr_18613_18635[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18595 === (10))){
var inst_18577 = (state_18594[(2)]);
var state_18594__$1 = state_18594;
var statearr_18614_18636 = state_18594__$1;
(statearr_18614_18636[(2)] = inst_18577);

(statearr_18614_18636[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18595 === (8))){
var inst_18554 = (state_18594[(7)]);
var inst_18562 = (state_18594[(10)]);
var inst_18558 = (state_18594[(9)]);
var inst_18567 = inst_18554.push(inst_18558);
var tmp18611 = inst_18554;
var inst_18554__$1 = tmp18611;
var inst_18555 = inst_18562;
var state_18594__$1 = (function (){var statearr_18615 = state_18594;
(statearr_18615[(14)] = inst_18567);

(statearr_18615[(7)] = inst_18554__$1);

(statearr_18615[(8)] = inst_18555);

return statearr_18615;
})();
var statearr_18616_18637 = state_18594__$1;
(statearr_18616_18637[(2)] = null);

(statearr_18616_18637[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
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
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14817__auto__ = null;
var cljs$core$async$state_machine__14817__auto____0 = (function (){
var statearr_18617 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18617[(0)] = cljs$core$async$state_machine__14817__auto__);

(statearr_18617[(1)] = (1));

return statearr_18617;
});
var cljs$core$async$state_machine__14817__auto____1 = (function (state_18594){
while(true){
var ret_value__14818__auto__ = (function (){try{while(true){
var result__14819__auto__ = switch__14816__auto__(state_18594);
if(cljs.core.keyword_identical_QMARK_(result__14819__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14819__auto__;
}
break;
}
}catch (e18618){var ex__14820__auto__ = e18618;
var statearr_18619_18638 = state_18594;
(statearr_18619_18638[(2)] = ex__14820__auto__);


if(cljs.core.seq((state_18594[(4)]))){
var statearr_18620_18639 = state_18594;
(statearr_18620_18639[(1)] = cljs.core.first((state_18594[(4)])));

} else {
throw ex__14820__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14818__auto__,cljs.core.cst$kw$recur)){
var G__18640 = state_18594;
state_18594 = G__18640;
continue;
} else {
return ret_value__14818__auto__;
}
break;
}
});
cljs$core$async$state_machine__14817__auto__ = function(state_18594){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14817__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14817__auto____1.call(this,state_18594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14817__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14817__auto____0;
cljs$core$async$state_machine__14817__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14817__auto____1;
return cljs$core$async$state_machine__14817__auto__;
})()
})();
var state__16652__auto__ = (function (){var statearr_18621 = (f__16651__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16651__auto__.cljs$core$IFn$_invoke$arity$0() : f__16651__auto__.call(null));
(statearr_18621[(6)] = c__16650__auto___18623);

return statearr_18621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16652__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);

