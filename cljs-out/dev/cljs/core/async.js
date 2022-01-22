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
var G__16707 = arguments.length;
switch (G__16707) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16708 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16708 = (function (f,blockable,meta16709){
this.f = f;
this.blockable = blockable;
this.meta16709 = meta16709;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16708.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16710,meta16709__$1){
var self__ = this;
var _16710__$1 = this;
return (new cljs.core.async.t_cljs$core$async16708(self__.f,self__.blockable,meta16709__$1));
}));

(cljs.core.async.t_cljs$core$async16708.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16710){
var self__ = this;
var _16710__$1 = this;
return self__.meta16709;
}));

(cljs.core.async.t_cljs$core$async16708.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16708.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16708.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async16708.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async16708.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta16709], null);
}));

(cljs.core.async.t_cljs$core$async16708.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16708.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16708");

(cljs.core.async.t_cljs$core$async16708.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async16708");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16708.
 */
cljs.core.async.__GT_t_cljs$core$async16708 = (function cljs$core$async$__GT_t_cljs$core$async16708(f__$1,blockable__$1,meta16709){
return (new cljs.core.async.t_cljs$core$async16708(f__$1,blockable__$1,meta16709));
});

}

return (new cljs.core.async.t_cljs$core$async16708(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__16714 = arguments.length;
switch (G__16714) {
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
var G__16717 = arguments.length;
switch (G__16717) {
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
var G__16720 = arguments.length;
switch (G__16720) {
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
var val_16722 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16722) : fn1.call(null,val_16722));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16722) : fn1.call(null,val_16722));
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
var G__16724 = arguments.length;
switch (G__16724) {
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
var n__4613__auto___16726 = n;
var x_16727 = (0);
while(true){
if((x_16727 < n__4613__auto___16726)){
(a[x_16727] = x_16727);

var G__16728 = (x_16727 + (1));
x_16727 = G__16728;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16729 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16729 = (function (flag,meta16730){
this.flag = flag;
this.meta16730 = meta16730;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16731,meta16730__$1){
var self__ = this;
var _16731__$1 = this;
return (new cljs.core.async.t_cljs$core$async16729(self__.flag,meta16730__$1));
}));

(cljs.core.async.t_cljs$core$async16729.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16731){
var self__ = this;
var _16731__$1 = this;
return self__.meta16730;
}));

(cljs.core.async.t_cljs$core$async16729.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16729.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async16729.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16729.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async16729.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta16730], null);
}));

(cljs.core.async.t_cljs$core$async16729.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16729.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16729");

(cljs.core.async.t_cljs$core$async16729.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async16729");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16729.
 */
cljs.core.async.__GT_t_cljs$core$async16729 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async16729(flag__$1,meta16730){
return (new cljs.core.async.t_cljs$core$async16729(flag__$1,meta16730));
});

}

return (new cljs.core.async.t_cljs$core$async16729(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16732 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16732 = (function (flag,cb,meta16733){
this.flag = flag;
this.cb = cb;
this.meta16733 = meta16733;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16732.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16734,meta16733__$1){
var self__ = this;
var _16734__$1 = this;
return (new cljs.core.async.t_cljs$core$async16732(self__.flag,self__.cb,meta16733__$1));
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
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async16732.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16732.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async16732.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta16733], null);
}));

(cljs.core.async.t_cljs$core$async16732.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16732.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16732");

(cljs.core.async.t_cljs$core$async16732.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async16732");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16732.
 */
cljs.core.async.__GT_t_cljs$core$async16732 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async16732(flag__$1,cb__$1,meta16733){
return (new cljs.core.async.t_cljs$core$async16732(flag__$1,cb__$1,meta16733));
});

}

return (new cljs.core.async.t_cljs$core$async16732(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__16735_SHARP_){
var G__16737 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16735_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16737) : fret.call(null,G__16737));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16736_SHARP_){
var G__16738 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16736_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16738) : fret.call(null,G__16738));
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
var G__16739 = (i + (1));
i = G__16739;
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
var len__4736__auto___16745 = arguments.length;
var i__4737__auto___16746 = (0);
while(true){
if((i__4737__auto___16746 < len__4736__auto___16745)){
args__4742__auto__.push((arguments[i__4737__auto___16746]));

var G__16747 = (i__4737__auto___16746 + (1));
i__4737__auto___16746 = G__16747;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__16742){
var map__16743 = p__16742;
var map__16743__$1 = (((((!((map__16743 == null))))?(((((map__16743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16743):map__16743);
var opts = map__16743__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq16740){
var G__16741 = cljs.core.first(seq16740);
var seq16740__$1 = cljs.core.next(seq16740);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16741,seq16740__$1);
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
var G__16749 = arguments.length;
switch (G__16749) {
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
var c__16647__auto___16796 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16648__auto__ = (function (){var switch__16572__auto__ = (function (state_16773){
var state_val_16774 = (state_16773[(1)]);
if((state_val_16774 === (7))){
var inst_16769 = (state_16773[(2)]);
var state_16773__$1 = state_16773;
var statearr_16775_16797 = state_16773__$1;
(statearr_16775_16797[(2)] = inst_16769);

(statearr_16775_16797[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16774 === (1))){
var state_16773__$1 = state_16773;
var statearr_16776_16798 = state_16773__$1;
(statearr_16776_16798[(2)] = null);

(statearr_16776_16798[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16774 === (4))){
var inst_16752 = (state_16773[(7)]);
var inst_16752__$1 = (state_16773[(2)]);
var inst_16753 = (inst_16752__$1 == null);
var state_16773__$1 = (function (){var statearr_16777 = state_16773;
(statearr_16777[(7)] = inst_16752__$1);

return statearr_16777;
})();
if(cljs.core.truth_(inst_16753)){
var statearr_16778_16799 = state_16773__$1;
(statearr_16778_16799[(1)] = (5));

} else {
var statearr_16779_16800 = state_16773__$1;
(statearr_16779_16800[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16774 === (13))){
var state_16773__$1 = state_16773;
var statearr_16780_16801 = state_16773__$1;
(statearr_16780_16801[(2)] = null);

(statearr_16780_16801[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16774 === (6))){
var inst_16752 = (state_16773[(7)]);
var state_16773__$1 = state_16773;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16773__$1,(11),to,inst_16752);
} else {
if((state_val_16774 === (3))){
var inst_16771 = (state_16773[(2)]);
var state_16773__$1 = state_16773;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16773__$1,inst_16771);
} else {
if((state_val_16774 === (12))){
var state_16773__$1 = state_16773;
var statearr_16781_16802 = state_16773__$1;
(statearr_16781_16802[(2)] = null);

(statearr_16781_16802[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16774 === (2))){
var state_16773__$1 = state_16773;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16773__$1,(4),from);
} else {
if((state_val_16774 === (11))){
var inst_16762 = (state_16773[(2)]);
var state_16773__$1 = state_16773;
if(cljs.core.truth_(inst_16762)){
var statearr_16782_16803 = state_16773__$1;
(statearr_16782_16803[(1)] = (12));

} else {
var statearr_16783_16804 = state_16773__$1;
(statearr_16783_16804[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16774 === (9))){
var state_16773__$1 = state_16773;
var statearr_16784_16805 = state_16773__$1;
(statearr_16784_16805[(2)] = null);

(statearr_16784_16805[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16774 === (5))){
var state_16773__$1 = state_16773;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16785_16806 = state_16773__$1;
(statearr_16785_16806[(1)] = (8));

} else {
var statearr_16786_16807 = state_16773__$1;
(statearr_16786_16807[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16774 === (14))){
var inst_16767 = (state_16773[(2)]);
var state_16773__$1 = state_16773;
var statearr_16787_16808 = state_16773__$1;
(statearr_16787_16808[(2)] = inst_16767);

(statearr_16787_16808[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16774 === (10))){
var inst_16759 = (state_16773[(2)]);
var state_16773__$1 = state_16773;
var statearr_16788_16809 = state_16773__$1;
(statearr_16788_16809[(2)] = inst_16759);

(statearr_16788_16809[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16774 === (8))){
var inst_16756 = cljs.core.async.close_BANG_(to);
var state_16773__$1 = state_16773;
var statearr_16789_16810 = state_16773__$1;
(statearr_16789_16810[(2)] = inst_16756);

(statearr_16789_16810[(1)] = (10));


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
var cljs$core$async$state_machine__16573__auto__ = null;
var cljs$core$async$state_machine__16573__auto____0 = (function (){
var statearr_16790 = [null,null,null,null,null,null,null,null];
(statearr_16790[(0)] = cljs$core$async$state_machine__16573__auto__);

(statearr_16790[(1)] = (1));

return statearr_16790;
});
var cljs$core$async$state_machine__16573__auto____1 = (function (state_16773){
while(true){
var ret_value__16574__auto__ = (function (){try{while(true){
var result__16575__auto__ = switch__16572__auto__(state_16773);
if(cljs.core.keyword_identical_QMARK_(result__16575__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16575__auto__;
}
break;
}
}catch (e16791){var ex__16576__auto__ = e16791;
var statearr_16792_16811 = state_16773;
(statearr_16792_16811[(2)] = ex__16576__auto__);


if(cljs.core.seq((state_16773[(4)]))){
var statearr_16793_16812 = state_16773;
(statearr_16793_16812[(1)] = cljs.core.first((state_16773[(4)])));

} else {
throw ex__16576__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16574__auto__,cljs.core.cst$kw$recur)){
var G__16813 = state_16773;
state_16773 = G__16813;
continue;
} else {
return ret_value__16574__auto__;
}
break;
}
});
cljs$core$async$state_machine__16573__auto__ = function(state_16773){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16573__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16573__auto____1.call(this,state_16773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16573__auto____0;
cljs$core$async$state_machine__16573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16573__auto____1;
return cljs$core$async$state_machine__16573__auto__;
})()
})();
var state__16649__auto__ = (function (){var statearr_16794 = (f__16648__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16648__auto__.cljs$core$IFn$_invoke$arity$0() : f__16648__auto__.call(null));
(statearr_16794[(6)] = c__16647__auto___16796);

return statearr_16794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16649__auto__);
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
var process = (function (p__16814){
var vec__16815 = p__16814;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16815,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16815,(1),null);
var job = vec__16815;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__16647__auto___16991 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16648__auto__ = (function (){var switch__16572__auto__ = (function (state_16822){
var state_val_16823 = (state_16822[(1)]);
if((state_val_16823 === (1))){
var state_16822__$1 = state_16822;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16822__$1,(2),res,v);
} else {
if((state_val_16823 === (2))){
var inst_16819 = (state_16822[(2)]);
var inst_16820 = cljs.core.async.close_BANG_(res);
var state_16822__$1 = (function (){var statearr_16824 = state_16822;
(statearr_16824[(7)] = inst_16819);

return statearr_16824;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16822__$1,inst_16820);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16573__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16573__auto____0 = (function (){
var statearr_16825 = [null,null,null,null,null,null,null,null];
(statearr_16825[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16573__auto__);

(statearr_16825[(1)] = (1));

return statearr_16825;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16573__auto____1 = (function (state_16822){
while(true){
var ret_value__16574__auto__ = (function (){try{while(true){
var result__16575__auto__ = switch__16572__auto__(state_16822);
if(cljs.core.keyword_identical_QMARK_(result__16575__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16575__auto__;
}
break;
}
}catch (e16826){var ex__16576__auto__ = e16826;
var statearr_16827_16992 = state_16822;
(statearr_16827_16992[(2)] = ex__16576__auto__);


if(cljs.core.seq((state_16822[(4)]))){
var statearr_16828_16993 = state_16822;
(statearr_16828_16993[(1)] = cljs.core.first((state_16822[(4)])));

} else {
throw ex__16576__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16574__auto__,cljs.core.cst$kw$recur)){
var G__16994 = state_16822;
state_16822 = G__16994;
continue;
} else {
return ret_value__16574__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16573__auto__ = function(state_16822){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16573__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16573__auto____1.call(this,state_16822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16573__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16573__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16573__auto__;
})()
})();
var state__16649__auto__ = (function (){var statearr_16829 = (f__16648__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16648__auto__.cljs$core$IFn$_invoke$arity$0() : f__16648__auto__.call(null));
(statearr_16829[(6)] = c__16647__auto___16991);

return statearr_16829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16649__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__16830){
var vec__16831 = p__16830;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16831,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16831,(1),null);
var job = vec__16831;
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
var n__4613__auto___16995 = n;
var __16996 = (0);
while(true){
if((__16996 < n__4613__auto___16995)){
var G__16834_16997 = type;
var G__16834_16998__$1 = (((G__16834_16997 instanceof cljs.core.Keyword))?G__16834_16997.fqn:null);
switch (G__16834_16998__$1) {
case "compute":
var c__16647__auto___17000 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16996,c__16647__auto___17000,G__16834_16997,G__16834_16998__$1,n__4613__auto___16995,jobs,results,process,async){
return (function (){
var f__16648__auto__ = (function (){var switch__16572__auto__ = ((function (__16996,c__16647__auto___17000,G__16834_16997,G__16834_16998__$1,n__4613__auto___16995,jobs,results,process,async){
return (function (state_16847){
var state_val_16848 = (state_16847[(1)]);
if((state_val_16848 === (1))){
var state_16847__$1 = state_16847;
var statearr_16849_17001 = state_16847__$1;
(statearr_16849_17001[(2)] = null);

(statearr_16849_17001[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16848 === (2))){
var state_16847__$1 = state_16847;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16847__$1,(4),jobs);
} else {
if((state_val_16848 === (3))){
var inst_16845 = (state_16847[(2)]);
var state_16847__$1 = state_16847;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16847__$1,inst_16845);
} else {
if((state_val_16848 === (4))){
var inst_16837 = (state_16847[(2)]);
var inst_16838 = process(inst_16837);
var state_16847__$1 = state_16847;
if(cljs.core.truth_(inst_16838)){
var statearr_16850_17002 = state_16847__$1;
(statearr_16850_17002[(1)] = (5));

} else {
var statearr_16851_17003 = state_16847__$1;
(statearr_16851_17003[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16848 === (5))){
var state_16847__$1 = state_16847;
var statearr_16852_17004 = state_16847__$1;
(statearr_16852_17004[(2)] = null);

(statearr_16852_17004[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16848 === (6))){
var state_16847__$1 = state_16847;
var statearr_16853_17005 = state_16847__$1;
(statearr_16853_17005[(2)] = null);

(statearr_16853_17005[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16848 === (7))){
var inst_16843 = (state_16847[(2)]);
var state_16847__$1 = state_16847;
var statearr_16854_17006 = state_16847__$1;
(statearr_16854_17006[(2)] = inst_16843);

(statearr_16854_17006[(1)] = (3));


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
});})(__16996,c__16647__auto___17000,G__16834_16997,G__16834_16998__$1,n__4613__auto___16995,jobs,results,process,async))
;
return ((function (__16996,switch__16572__auto__,c__16647__auto___17000,G__16834_16997,G__16834_16998__$1,n__4613__auto___16995,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16573__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16573__auto____0 = (function (){
var statearr_16855 = [null,null,null,null,null,null,null];
(statearr_16855[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16573__auto__);

(statearr_16855[(1)] = (1));

return statearr_16855;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16573__auto____1 = (function (state_16847){
while(true){
var ret_value__16574__auto__ = (function (){try{while(true){
var result__16575__auto__ = switch__16572__auto__(state_16847);
if(cljs.core.keyword_identical_QMARK_(result__16575__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16575__auto__;
}
break;
}
}catch (e16856){var ex__16576__auto__ = e16856;
var statearr_16857_17007 = state_16847;
(statearr_16857_17007[(2)] = ex__16576__auto__);


if(cljs.core.seq((state_16847[(4)]))){
var statearr_16858_17008 = state_16847;
(statearr_16858_17008[(1)] = cljs.core.first((state_16847[(4)])));

} else {
throw ex__16576__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16574__auto__,cljs.core.cst$kw$recur)){
var G__17009 = state_16847;
state_16847 = G__17009;
continue;
} else {
return ret_value__16574__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16573__auto__ = function(state_16847){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16573__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16573__auto____1.call(this,state_16847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16573__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16573__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16573__auto__;
})()
;})(__16996,switch__16572__auto__,c__16647__auto___17000,G__16834_16997,G__16834_16998__$1,n__4613__auto___16995,jobs,results,process,async))
})();
var state__16649__auto__ = (function (){var statearr_16859 = (f__16648__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16648__auto__.cljs$core$IFn$_invoke$arity$0() : f__16648__auto__.call(null));
(statearr_16859[(6)] = c__16647__auto___17000);

return statearr_16859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16649__auto__);
});})(__16996,c__16647__auto___17000,G__16834_16997,G__16834_16998__$1,n__4613__auto___16995,jobs,results,process,async))
);


break;
case "async":
var c__16647__auto___17010 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16996,c__16647__auto___17010,G__16834_16997,G__16834_16998__$1,n__4613__auto___16995,jobs,results,process,async){
return (function (){
var f__16648__auto__ = (function (){var switch__16572__auto__ = ((function (__16996,c__16647__auto___17010,G__16834_16997,G__16834_16998__$1,n__4613__auto___16995,jobs,results,process,async){
return (function (state_16872){
var state_val_16873 = (state_16872[(1)]);
if((state_val_16873 === (1))){
var state_16872__$1 = state_16872;
var statearr_16874_17011 = state_16872__$1;
(statearr_16874_17011[(2)] = null);

(statearr_16874_17011[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16873 === (2))){
var state_16872__$1 = state_16872;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16872__$1,(4),jobs);
} else {
if((state_val_16873 === (3))){
var inst_16870 = (state_16872[(2)]);
var state_16872__$1 = state_16872;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16872__$1,inst_16870);
} else {
if((state_val_16873 === (4))){
var inst_16862 = (state_16872[(2)]);
var inst_16863 = async(inst_16862);
var state_16872__$1 = state_16872;
if(cljs.core.truth_(inst_16863)){
var statearr_16875_17012 = state_16872__$1;
(statearr_16875_17012[(1)] = (5));

} else {
var statearr_16876_17013 = state_16872__$1;
(statearr_16876_17013[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16873 === (5))){
var state_16872__$1 = state_16872;
var statearr_16877_17014 = state_16872__$1;
(statearr_16877_17014[(2)] = null);

(statearr_16877_17014[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16873 === (6))){
var state_16872__$1 = state_16872;
var statearr_16878_17015 = state_16872__$1;
(statearr_16878_17015[(2)] = null);

(statearr_16878_17015[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16873 === (7))){
var inst_16868 = (state_16872[(2)]);
var state_16872__$1 = state_16872;
var statearr_16879_17016 = state_16872__$1;
(statearr_16879_17016[(2)] = inst_16868);

(statearr_16879_17016[(1)] = (3));


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
});})(__16996,c__16647__auto___17010,G__16834_16997,G__16834_16998__$1,n__4613__auto___16995,jobs,results,process,async))
;
return ((function (__16996,switch__16572__auto__,c__16647__auto___17010,G__16834_16997,G__16834_16998__$1,n__4613__auto___16995,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16573__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16573__auto____0 = (function (){
var statearr_16880 = [null,null,null,null,null,null,null];
(statearr_16880[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16573__auto__);

(statearr_16880[(1)] = (1));

return statearr_16880;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16573__auto____1 = (function (state_16872){
while(true){
var ret_value__16574__auto__ = (function (){try{while(true){
var result__16575__auto__ = switch__16572__auto__(state_16872);
if(cljs.core.keyword_identical_QMARK_(result__16575__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16575__auto__;
}
break;
}
}catch (e16881){var ex__16576__auto__ = e16881;
var statearr_16882_17017 = state_16872;
(statearr_16882_17017[(2)] = ex__16576__auto__);


if(cljs.core.seq((state_16872[(4)]))){
var statearr_16883_17018 = state_16872;
(statearr_16883_17018[(1)] = cljs.core.first((state_16872[(4)])));

} else {
throw ex__16576__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16574__auto__,cljs.core.cst$kw$recur)){
var G__17019 = state_16872;
state_16872 = G__17019;
continue;
} else {
return ret_value__16574__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16573__auto__ = function(state_16872){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16573__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16573__auto____1.call(this,state_16872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16573__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16573__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16573__auto__;
})()
;})(__16996,switch__16572__auto__,c__16647__auto___17010,G__16834_16997,G__16834_16998__$1,n__4613__auto___16995,jobs,results,process,async))
})();
var state__16649__auto__ = (function (){var statearr_16884 = (f__16648__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16648__auto__.cljs$core$IFn$_invoke$arity$0() : f__16648__auto__.call(null));
(statearr_16884[(6)] = c__16647__auto___17010);

return statearr_16884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16649__auto__);
});})(__16996,c__16647__auto___17010,G__16834_16997,G__16834_16998__$1,n__4613__auto___16995,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16834_16998__$1)].join('')));

}

var G__17020 = (__16996 + (1));
__16996 = G__17020;
continue;
} else {
}
break;
}

var c__16647__auto___17021 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16648__auto__ = (function (){var switch__16572__auto__ = (function (state_16906){
var state_val_16907 = (state_16906[(1)]);
if((state_val_16907 === (7))){
var inst_16902 = (state_16906[(2)]);
var state_16906__$1 = state_16906;
var statearr_16908_17022 = state_16906__$1;
(statearr_16908_17022[(2)] = inst_16902);

(statearr_16908_17022[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16907 === (1))){
var state_16906__$1 = state_16906;
var statearr_16909_17023 = state_16906__$1;
(statearr_16909_17023[(2)] = null);

(statearr_16909_17023[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16907 === (4))){
var inst_16887 = (state_16906[(7)]);
var inst_16887__$1 = (state_16906[(2)]);
var inst_16888 = (inst_16887__$1 == null);
var state_16906__$1 = (function (){var statearr_16910 = state_16906;
(statearr_16910[(7)] = inst_16887__$1);

return statearr_16910;
})();
if(cljs.core.truth_(inst_16888)){
var statearr_16911_17024 = state_16906__$1;
(statearr_16911_17024[(1)] = (5));

} else {
var statearr_16912_17025 = state_16906__$1;
(statearr_16912_17025[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16907 === (6))){
var inst_16887 = (state_16906[(7)]);
var inst_16892 = (state_16906[(8)]);
var inst_16892__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_16893 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16894 = [inst_16887,inst_16892__$1];
var inst_16895 = (new cljs.core.PersistentVector(null,2,(5),inst_16893,inst_16894,null));
var state_16906__$1 = (function (){var statearr_16913 = state_16906;
(statearr_16913[(8)] = inst_16892__$1);

return statearr_16913;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16906__$1,(8),jobs,inst_16895);
} else {
if((state_val_16907 === (3))){
var inst_16904 = (state_16906[(2)]);
var state_16906__$1 = state_16906;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16906__$1,inst_16904);
} else {
if((state_val_16907 === (2))){
var state_16906__$1 = state_16906;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16906__$1,(4),from);
} else {
if((state_val_16907 === (9))){
var inst_16899 = (state_16906[(2)]);
var state_16906__$1 = (function (){var statearr_16914 = state_16906;
(statearr_16914[(9)] = inst_16899);

return statearr_16914;
})();
var statearr_16915_17026 = state_16906__$1;
(statearr_16915_17026[(2)] = null);

(statearr_16915_17026[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16907 === (5))){
var inst_16890 = cljs.core.async.close_BANG_(jobs);
var state_16906__$1 = state_16906;
var statearr_16916_17027 = state_16906__$1;
(statearr_16916_17027[(2)] = inst_16890);

(statearr_16916_17027[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16907 === (8))){
var inst_16892 = (state_16906[(8)]);
var inst_16897 = (state_16906[(2)]);
var state_16906__$1 = (function (){var statearr_16917 = state_16906;
(statearr_16917[(10)] = inst_16897);

return statearr_16917;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16906__$1,(9),results,inst_16892);
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
var cljs$core$async$pipeline_STAR__$_state_machine__16573__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16573__auto____0 = (function (){
var statearr_16918 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16918[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16573__auto__);

(statearr_16918[(1)] = (1));

return statearr_16918;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16573__auto____1 = (function (state_16906){
while(true){
var ret_value__16574__auto__ = (function (){try{while(true){
var result__16575__auto__ = switch__16572__auto__(state_16906);
if(cljs.core.keyword_identical_QMARK_(result__16575__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16575__auto__;
}
break;
}
}catch (e16919){var ex__16576__auto__ = e16919;
var statearr_16920_17028 = state_16906;
(statearr_16920_17028[(2)] = ex__16576__auto__);


if(cljs.core.seq((state_16906[(4)]))){
var statearr_16921_17029 = state_16906;
(statearr_16921_17029[(1)] = cljs.core.first((state_16906[(4)])));

} else {
throw ex__16576__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16574__auto__,cljs.core.cst$kw$recur)){
var G__17030 = state_16906;
state_16906 = G__17030;
continue;
} else {
return ret_value__16574__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16573__auto__ = function(state_16906){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16573__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16573__auto____1.call(this,state_16906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16573__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16573__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16573__auto__;
})()
})();
var state__16649__auto__ = (function (){var statearr_16922 = (f__16648__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16648__auto__.cljs$core$IFn$_invoke$arity$0() : f__16648__auto__.call(null));
(statearr_16922[(6)] = c__16647__auto___17021);

return statearr_16922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16649__auto__);
}));


var c__16647__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16648__auto__ = (function (){var switch__16572__auto__ = (function (state_16960){
var state_val_16961 = (state_16960[(1)]);
if((state_val_16961 === (7))){
var inst_16956 = (state_16960[(2)]);
var state_16960__$1 = state_16960;
var statearr_16962_17031 = state_16960__$1;
(statearr_16962_17031[(2)] = inst_16956);

(statearr_16962_17031[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16961 === (20))){
var state_16960__$1 = state_16960;
var statearr_16963_17032 = state_16960__$1;
(statearr_16963_17032[(2)] = null);

(statearr_16963_17032[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16961 === (1))){
var state_16960__$1 = state_16960;
var statearr_16964_17033 = state_16960__$1;
(statearr_16964_17033[(2)] = null);

(statearr_16964_17033[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16961 === (4))){
var inst_16925 = (state_16960[(7)]);
var inst_16925__$1 = (state_16960[(2)]);
var inst_16926 = (inst_16925__$1 == null);
var state_16960__$1 = (function (){var statearr_16965 = state_16960;
(statearr_16965[(7)] = inst_16925__$1);

return statearr_16965;
})();
if(cljs.core.truth_(inst_16926)){
var statearr_16966_17034 = state_16960__$1;
(statearr_16966_17034[(1)] = (5));

} else {
var statearr_16967_17035 = state_16960__$1;
(statearr_16967_17035[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16961 === (15))){
var inst_16938 = (state_16960[(8)]);
var state_16960__$1 = state_16960;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16960__$1,(18),to,inst_16938);
} else {
if((state_val_16961 === (21))){
var inst_16951 = (state_16960[(2)]);
var state_16960__$1 = state_16960;
var statearr_16968_17036 = state_16960__$1;
(statearr_16968_17036[(2)] = inst_16951);

(statearr_16968_17036[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16961 === (13))){
var inst_16953 = (state_16960[(2)]);
var state_16960__$1 = (function (){var statearr_16969 = state_16960;
(statearr_16969[(9)] = inst_16953);

return statearr_16969;
})();
var statearr_16970_17037 = state_16960__$1;
(statearr_16970_17037[(2)] = null);

(statearr_16970_17037[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16961 === (6))){
var inst_16925 = (state_16960[(7)]);
var state_16960__$1 = state_16960;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16960__$1,(11),inst_16925);
} else {
if((state_val_16961 === (17))){
var inst_16946 = (state_16960[(2)]);
var state_16960__$1 = state_16960;
if(cljs.core.truth_(inst_16946)){
var statearr_16971_17038 = state_16960__$1;
(statearr_16971_17038[(1)] = (19));

} else {
var statearr_16972_17039 = state_16960__$1;
(statearr_16972_17039[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16961 === (3))){
var inst_16958 = (state_16960[(2)]);
var state_16960__$1 = state_16960;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16960__$1,inst_16958);
} else {
if((state_val_16961 === (12))){
var inst_16935 = (state_16960[(10)]);
var state_16960__$1 = state_16960;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16960__$1,(14),inst_16935);
} else {
if((state_val_16961 === (2))){
var state_16960__$1 = state_16960;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16960__$1,(4),results);
} else {
if((state_val_16961 === (19))){
var state_16960__$1 = state_16960;
var statearr_16973_17040 = state_16960__$1;
(statearr_16973_17040[(2)] = null);

(statearr_16973_17040[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16961 === (11))){
var inst_16935 = (state_16960[(2)]);
var state_16960__$1 = (function (){var statearr_16974 = state_16960;
(statearr_16974[(10)] = inst_16935);

return statearr_16974;
})();
var statearr_16975_17041 = state_16960__$1;
(statearr_16975_17041[(2)] = null);

(statearr_16975_17041[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16961 === (9))){
var state_16960__$1 = state_16960;
var statearr_16976_17042 = state_16960__$1;
(statearr_16976_17042[(2)] = null);

(statearr_16976_17042[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16961 === (5))){
var state_16960__$1 = state_16960;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16977_17043 = state_16960__$1;
(statearr_16977_17043[(1)] = (8));

} else {
var statearr_16978_17044 = state_16960__$1;
(statearr_16978_17044[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16961 === (14))){
var inst_16938 = (state_16960[(8)]);
var inst_16938__$1 = (state_16960[(2)]);
var inst_16939 = (inst_16938__$1 == null);
var inst_16940 = cljs.core.not(inst_16939);
var state_16960__$1 = (function (){var statearr_16979 = state_16960;
(statearr_16979[(8)] = inst_16938__$1);

return statearr_16979;
})();
if(inst_16940){
var statearr_16980_17045 = state_16960__$1;
(statearr_16980_17045[(1)] = (15));

} else {
var statearr_16981_17046 = state_16960__$1;
(statearr_16981_17046[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16961 === (16))){
var state_16960__$1 = state_16960;
var statearr_16982_17047 = state_16960__$1;
(statearr_16982_17047[(2)] = false);

(statearr_16982_17047[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16961 === (10))){
var inst_16932 = (state_16960[(2)]);
var state_16960__$1 = state_16960;
var statearr_16983_17048 = state_16960__$1;
(statearr_16983_17048[(2)] = inst_16932);

(statearr_16983_17048[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16961 === (18))){
var inst_16943 = (state_16960[(2)]);
var state_16960__$1 = state_16960;
var statearr_16984_17049 = state_16960__$1;
(statearr_16984_17049[(2)] = inst_16943);

(statearr_16984_17049[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16961 === (8))){
var inst_16929 = cljs.core.async.close_BANG_(to);
var state_16960__$1 = state_16960;
var statearr_16985_17050 = state_16960__$1;
(statearr_16985_17050[(2)] = inst_16929);

(statearr_16985_17050[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__16573__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16573__auto____0 = (function (){
var statearr_16986 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16986[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16573__auto__);

(statearr_16986[(1)] = (1));

return statearr_16986;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16573__auto____1 = (function (state_16960){
while(true){
var ret_value__16574__auto__ = (function (){try{while(true){
var result__16575__auto__ = switch__16572__auto__(state_16960);
if(cljs.core.keyword_identical_QMARK_(result__16575__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16575__auto__;
}
break;
}
}catch (e16987){var ex__16576__auto__ = e16987;
var statearr_16988_17051 = state_16960;
(statearr_16988_17051[(2)] = ex__16576__auto__);


if(cljs.core.seq((state_16960[(4)]))){
var statearr_16989_17052 = state_16960;
(statearr_16989_17052[(1)] = cljs.core.first((state_16960[(4)])));

} else {
throw ex__16576__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16574__auto__,cljs.core.cst$kw$recur)){
var G__17053 = state_16960;
state_16960 = G__17053;
continue;
} else {
return ret_value__16574__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16573__auto__ = function(state_16960){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16573__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16573__auto____1.call(this,state_16960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16573__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16573__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16573__auto__;
})()
})();
var state__16649__auto__ = (function (){var statearr_16990 = (f__16648__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16648__auto__.cljs$core$IFn$_invoke$arity$0() : f__16648__auto__.call(null));
(statearr_16990[(6)] = c__16647__auto__);

return statearr_16990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16649__auto__);
}));

return c__16647__auto__;
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
var G__17055 = arguments.length;
switch (G__17055) {
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
var G__17058 = arguments.length;
switch (G__17058) {
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
var G__17061 = arguments.length;
switch (G__17061) {
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
var c__16647__auto___17111 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16648__auto__ = (function (){var switch__16572__auto__ = (function (state_17087){
var state_val_17088 = (state_17087[(1)]);
if((state_val_17088 === (7))){
var inst_17083 = (state_17087[(2)]);
var state_17087__$1 = state_17087;
var statearr_17089_17112 = state_17087__$1;
(statearr_17089_17112[(2)] = inst_17083);

(statearr_17089_17112[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17088 === (1))){
var state_17087__$1 = state_17087;
var statearr_17090_17113 = state_17087__$1;
(statearr_17090_17113[(2)] = null);

(statearr_17090_17113[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17088 === (4))){
var inst_17064 = (state_17087[(7)]);
var inst_17064__$1 = (state_17087[(2)]);
var inst_17065 = (inst_17064__$1 == null);
var state_17087__$1 = (function (){var statearr_17091 = state_17087;
(statearr_17091[(7)] = inst_17064__$1);

return statearr_17091;
})();
if(cljs.core.truth_(inst_17065)){
var statearr_17092_17114 = state_17087__$1;
(statearr_17092_17114[(1)] = (5));

} else {
var statearr_17093_17115 = state_17087__$1;
(statearr_17093_17115[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17088 === (13))){
var state_17087__$1 = state_17087;
var statearr_17094_17116 = state_17087__$1;
(statearr_17094_17116[(2)] = null);

(statearr_17094_17116[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17088 === (6))){
var inst_17064 = (state_17087[(7)]);
var inst_17070 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17064) : p.call(null,inst_17064));
var state_17087__$1 = state_17087;
if(cljs.core.truth_(inst_17070)){
var statearr_17095_17117 = state_17087__$1;
(statearr_17095_17117[(1)] = (9));

} else {
var statearr_17096_17118 = state_17087__$1;
(statearr_17096_17118[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17088 === (3))){
var inst_17085 = (state_17087[(2)]);
var state_17087__$1 = state_17087;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17087__$1,inst_17085);
} else {
if((state_val_17088 === (12))){
var state_17087__$1 = state_17087;
var statearr_17097_17119 = state_17087__$1;
(statearr_17097_17119[(2)] = null);

(statearr_17097_17119[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17088 === (2))){
var state_17087__$1 = state_17087;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17087__$1,(4),ch);
} else {
if((state_val_17088 === (11))){
var inst_17064 = (state_17087[(7)]);
var inst_17074 = (state_17087[(2)]);
var state_17087__$1 = state_17087;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17087__$1,(8),inst_17074,inst_17064);
} else {
if((state_val_17088 === (9))){
var state_17087__$1 = state_17087;
var statearr_17098_17120 = state_17087__$1;
(statearr_17098_17120[(2)] = tc);

(statearr_17098_17120[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17088 === (5))){
var inst_17067 = cljs.core.async.close_BANG_(tc);
var inst_17068 = cljs.core.async.close_BANG_(fc);
var state_17087__$1 = (function (){var statearr_17099 = state_17087;
(statearr_17099[(8)] = inst_17067);

return statearr_17099;
})();
var statearr_17100_17121 = state_17087__$1;
(statearr_17100_17121[(2)] = inst_17068);

(statearr_17100_17121[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17088 === (14))){
var inst_17081 = (state_17087[(2)]);
var state_17087__$1 = state_17087;
var statearr_17101_17122 = state_17087__$1;
(statearr_17101_17122[(2)] = inst_17081);

(statearr_17101_17122[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17088 === (10))){
var state_17087__$1 = state_17087;
var statearr_17102_17123 = state_17087__$1;
(statearr_17102_17123[(2)] = fc);

(statearr_17102_17123[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17088 === (8))){
var inst_17076 = (state_17087[(2)]);
var state_17087__$1 = state_17087;
if(cljs.core.truth_(inst_17076)){
var statearr_17103_17124 = state_17087__$1;
(statearr_17103_17124[(1)] = (12));

} else {
var statearr_17104_17125 = state_17087__$1;
(statearr_17104_17125[(1)] = (13));

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
var cljs$core$async$state_machine__16573__auto__ = null;
var cljs$core$async$state_machine__16573__auto____0 = (function (){
var statearr_17105 = [null,null,null,null,null,null,null,null,null];
(statearr_17105[(0)] = cljs$core$async$state_machine__16573__auto__);

(statearr_17105[(1)] = (1));

return statearr_17105;
});
var cljs$core$async$state_machine__16573__auto____1 = (function (state_17087){
while(true){
var ret_value__16574__auto__ = (function (){try{while(true){
var result__16575__auto__ = switch__16572__auto__(state_17087);
if(cljs.core.keyword_identical_QMARK_(result__16575__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16575__auto__;
}
break;
}
}catch (e17106){var ex__16576__auto__ = e17106;
var statearr_17107_17126 = state_17087;
(statearr_17107_17126[(2)] = ex__16576__auto__);


if(cljs.core.seq((state_17087[(4)]))){
var statearr_17108_17127 = state_17087;
(statearr_17108_17127[(1)] = cljs.core.first((state_17087[(4)])));

} else {
throw ex__16576__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16574__auto__,cljs.core.cst$kw$recur)){
var G__17128 = state_17087;
state_17087 = G__17128;
continue;
} else {
return ret_value__16574__auto__;
}
break;
}
});
cljs$core$async$state_machine__16573__auto__ = function(state_17087){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16573__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16573__auto____1.call(this,state_17087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16573__auto____0;
cljs$core$async$state_machine__16573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16573__auto____1;
return cljs$core$async$state_machine__16573__auto__;
})()
})();
var state__16649__auto__ = (function (){var statearr_17109 = (f__16648__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16648__auto__.cljs$core$IFn$_invoke$arity$0() : f__16648__auto__.call(null));
(statearr_17109[(6)] = c__16647__auto___17111);

return statearr_17109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16649__auto__);
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
var c__16647__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16648__auto__ = (function (){var switch__16572__auto__ = (function (state_17150){
var state_val_17151 = (state_17150[(1)]);
if((state_val_17151 === (7))){
var inst_17146 = (state_17150[(2)]);
var state_17150__$1 = state_17150;
var statearr_17152_17171 = state_17150__$1;
(statearr_17152_17171[(2)] = inst_17146);

(statearr_17152_17171[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17151 === (1))){
var inst_17129 = init;
var inst_17130 = inst_17129;
var state_17150__$1 = (function (){var statearr_17153 = state_17150;
(statearr_17153[(7)] = inst_17130);

return statearr_17153;
})();
var statearr_17154_17172 = state_17150__$1;
(statearr_17154_17172[(2)] = null);

(statearr_17154_17172[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17151 === (4))){
var inst_17133 = (state_17150[(8)]);
var inst_17133__$1 = (state_17150[(2)]);
var inst_17134 = (inst_17133__$1 == null);
var state_17150__$1 = (function (){var statearr_17155 = state_17150;
(statearr_17155[(8)] = inst_17133__$1);

return statearr_17155;
})();
if(cljs.core.truth_(inst_17134)){
var statearr_17156_17173 = state_17150__$1;
(statearr_17156_17173[(1)] = (5));

} else {
var statearr_17157_17174 = state_17150__$1;
(statearr_17157_17174[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17151 === (6))){
var inst_17130 = (state_17150[(7)]);
var inst_17133 = (state_17150[(8)]);
var inst_17137 = (state_17150[(9)]);
var inst_17137__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_17130,inst_17133) : f.call(null,inst_17130,inst_17133));
var inst_17138 = cljs.core.reduced_QMARK_(inst_17137__$1);
var state_17150__$1 = (function (){var statearr_17158 = state_17150;
(statearr_17158[(9)] = inst_17137__$1);

return statearr_17158;
})();
if(inst_17138){
var statearr_17159_17175 = state_17150__$1;
(statearr_17159_17175[(1)] = (8));

} else {
var statearr_17160_17176 = state_17150__$1;
(statearr_17160_17176[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17151 === (3))){
var inst_17148 = (state_17150[(2)]);
var state_17150__$1 = state_17150;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17150__$1,inst_17148);
} else {
if((state_val_17151 === (2))){
var state_17150__$1 = state_17150;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17150__$1,(4),ch);
} else {
if((state_val_17151 === (9))){
var inst_17137 = (state_17150[(9)]);
var inst_17130 = inst_17137;
var state_17150__$1 = (function (){var statearr_17161 = state_17150;
(statearr_17161[(7)] = inst_17130);

return statearr_17161;
})();
var statearr_17162_17177 = state_17150__$1;
(statearr_17162_17177[(2)] = null);

(statearr_17162_17177[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17151 === (5))){
var inst_17130 = (state_17150[(7)]);
var state_17150__$1 = state_17150;
var statearr_17163_17178 = state_17150__$1;
(statearr_17163_17178[(2)] = inst_17130);

(statearr_17163_17178[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17151 === (10))){
var inst_17144 = (state_17150[(2)]);
var state_17150__$1 = state_17150;
var statearr_17164_17179 = state_17150__$1;
(statearr_17164_17179[(2)] = inst_17144);

(statearr_17164_17179[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17151 === (8))){
var inst_17137 = (state_17150[(9)]);
var inst_17140 = cljs.core.deref(inst_17137);
var state_17150__$1 = state_17150;
var statearr_17165_17180 = state_17150__$1;
(statearr_17165_17180[(2)] = inst_17140);

(statearr_17165_17180[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__16573__auto__ = null;
var cljs$core$async$reduce_$_state_machine__16573__auto____0 = (function (){
var statearr_17166 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17166[(0)] = cljs$core$async$reduce_$_state_machine__16573__auto__);

(statearr_17166[(1)] = (1));

return statearr_17166;
});
var cljs$core$async$reduce_$_state_machine__16573__auto____1 = (function (state_17150){
while(true){
var ret_value__16574__auto__ = (function (){try{while(true){
var result__16575__auto__ = switch__16572__auto__(state_17150);
if(cljs.core.keyword_identical_QMARK_(result__16575__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16575__auto__;
}
break;
}
}catch (e17167){var ex__16576__auto__ = e17167;
var statearr_17168_17181 = state_17150;
(statearr_17168_17181[(2)] = ex__16576__auto__);


if(cljs.core.seq((state_17150[(4)]))){
var statearr_17169_17182 = state_17150;
(statearr_17169_17182[(1)] = cljs.core.first((state_17150[(4)])));

} else {
throw ex__16576__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16574__auto__,cljs.core.cst$kw$recur)){
var G__17183 = state_17150;
state_17150 = G__17183;
continue;
} else {
return ret_value__16574__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__16573__auto__ = function(state_17150){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__16573__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__16573__auto____1.call(this,state_17150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__16573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__16573__auto____0;
cljs$core$async$reduce_$_state_machine__16573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__16573__auto____1;
return cljs$core$async$reduce_$_state_machine__16573__auto__;
})()
})();
var state__16649__auto__ = (function (){var statearr_17170 = (f__16648__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16648__auto__.cljs$core$IFn$_invoke$arity$0() : f__16648__auto__.call(null));
(statearr_17170[(6)] = c__16647__auto__);

return statearr_17170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16649__auto__);
}));

return c__16647__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__16647__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16648__auto__ = (function (){var switch__16572__auto__ = (function (state_17189){
var state_val_17190 = (state_17189[(1)]);
if((state_val_17190 === (1))){
var inst_17184 = cljs.core.async.reduce(f__$1,init,ch);
var state_17189__$1 = state_17189;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17189__$1,(2),inst_17184);
} else {
if((state_val_17190 === (2))){
var inst_17186 = (state_17189[(2)]);
var inst_17187 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_17186) : f__$1.call(null,inst_17186));
var state_17189__$1 = state_17189;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17189__$1,inst_17187);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__16573__auto__ = null;
var cljs$core$async$transduce_$_state_machine__16573__auto____0 = (function (){
var statearr_17191 = [null,null,null,null,null,null,null];
(statearr_17191[(0)] = cljs$core$async$transduce_$_state_machine__16573__auto__);

(statearr_17191[(1)] = (1));

return statearr_17191;
});
var cljs$core$async$transduce_$_state_machine__16573__auto____1 = (function (state_17189){
while(true){
var ret_value__16574__auto__ = (function (){try{while(true){
var result__16575__auto__ = switch__16572__auto__(state_17189);
if(cljs.core.keyword_identical_QMARK_(result__16575__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16575__auto__;
}
break;
}
}catch (e17192){var ex__16576__auto__ = e17192;
var statearr_17193_17196 = state_17189;
(statearr_17193_17196[(2)] = ex__16576__auto__);


if(cljs.core.seq((state_17189[(4)]))){
var statearr_17194_17197 = state_17189;
(statearr_17194_17197[(1)] = cljs.core.first((state_17189[(4)])));

} else {
throw ex__16576__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16574__auto__,cljs.core.cst$kw$recur)){
var G__17198 = state_17189;
state_17189 = G__17198;
continue;
} else {
return ret_value__16574__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__16573__auto__ = function(state_17189){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__16573__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__16573__auto____1.call(this,state_17189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__16573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__16573__auto____0;
cljs$core$async$transduce_$_state_machine__16573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__16573__auto____1;
return cljs$core$async$transduce_$_state_machine__16573__auto__;
})()
})();
var state__16649__auto__ = (function (){var statearr_17195 = (f__16648__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16648__auto__.cljs$core$IFn$_invoke$arity$0() : f__16648__auto__.call(null));
(statearr_17195[(6)] = c__16647__auto__);

return statearr_17195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16649__auto__);
}));

return c__16647__auto__;
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
var G__17200 = arguments.length;
switch (G__17200) {
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
var c__16647__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16648__auto__ = (function (){var switch__16572__auto__ = (function (state_17225){
var state_val_17226 = (state_17225[(1)]);
if((state_val_17226 === (7))){
var inst_17207 = (state_17225[(2)]);
var state_17225__$1 = state_17225;
var statearr_17227_17249 = state_17225__$1;
(statearr_17227_17249[(2)] = inst_17207);

(statearr_17227_17249[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17226 === (1))){
var inst_17201 = cljs.core.seq(coll);
var inst_17202 = inst_17201;
var state_17225__$1 = (function (){var statearr_17228 = state_17225;
(statearr_17228[(7)] = inst_17202);

return statearr_17228;
})();
var statearr_17229_17250 = state_17225__$1;
(statearr_17229_17250[(2)] = null);

(statearr_17229_17250[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17226 === (4))){
var inst_17202 = (state_17225[(7)]);
var inst_17205 = cljs.core.first(inst_17202);
var state_17225__$1 = state_17225;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17225__$1,(7),ch,inst_17205);
} else {
if((state_val_17226 === (13))){
var inst_17219 = (state_17225[(2)]);
var state_17225__$1 = state_17225;
var statearr_17230_17251 = state_17225__$1;
(statearr_17230_17251[(2)] = inst_17219);

(statearr_17230_17251[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17226 === (6))){
var inst_17210 = (state_17225[(2)]);
var state_17225__$1 = state_17225;
if(cljs.core.truth_(inst_17210)){
var statearr_17231_17252 = state_17225__$1;
(statearr_17231_17252[(1)] = (8));

} else {
var statearr_17232_17253 = state_17225__$1;
(statearr_17232_17253[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17226 === (3))){
var inst_17223 = (state_17225[(2)]);
var state_17225__$1 = state_17225;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17225__$1,inst_17223);
} else {
if((state_val_17226 === (12))){
var state_17225__$1 = state_17225;
var statearr_17233_17254 = state_17225__$1;
(statearr_17233_17254[(2)] = null);

(statearr_17233_17254[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17226 === (2))){
var inst_17202 = (state_17225[(7)]);
var state_17225__$1 = state_17225;
if(cljs.core.truth_(inst_17202)){
var statearr_17234_17255 = state_17225__$1;
(statearr_17234_17255[(1)] = (4));

} else {
var statearr_17235_17256 = state_17225__$1;
(statearr_17235_17256[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17226 === (11))){
var inst_17216 = cljs.core.async.close_BANG_(ch);
var state_17225__$1 = state_17225;
var statearr_17236_17257 = state_17225__$1;
(statearr_17236_17257[(2)] = inst_17216);

(statearr_17236_17257[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17226 === (9))){
var state_17225__$1 = state_17225;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17237_17258 = state_17225__$1;
(statearr_17237_17258[(1)] = (11));

} else {
var statearr_17238_17259 = state_17225__$1;
(statearr_17238_17259[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17226 === (5))){
var inst_17202 = (state_17225[(7)]);
var state_17225__$1 = state_17225;
var statearr_17239_17260 = state_17225__$1;
(statearr_17239_17260[(2)] = inst_17202);

(statearr_17239_17260[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17226 === (10))){
var inst_17221 = (state_17225[(2)]);
var state_17225__$1 = state_17225;
var statearr_17240_17261 = state_17225__$1;
(statearr_17240_17261[(2)] = inst_17221);

(statearr_17240_17261[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17226 === (8))){
var inst_17202 = (state_17225[(7)]);
var inst_17212 = cljs.core.next(inst_17202);
var inst_17202__$1 = inst_17212;
var state_17225__$1 = (function (){var statearr_17241 = state_17225;
(statearr_17241[(7)] = inst_17202__$1);

return statearr_17241;
})();
var statearr_17242_17262 = state_17225__$1;
(statearr_17242_17262[(2)] = null);

(statearr_17242_17262[(1)] = (2));


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
var cljs$core$async$state_machine__16573__auto__ = null;
var cljs$core$async$state_machine__16573__auto____0 = (function (){
var statearr_17243 = [null,null,null,null,null,null,null,null];
(statearr_17243[(0)] = cljs$core$async$state_machine__16573__auto__);

(statearr_17243[(1)] = (1));

return statearr_17243;
});
var cljs$core$async$state_machine__16573__auto____1 = (function (state_17225){
while(true){
var ret_value__16574__auto__ = (function (){try{while(true){
var result__16575__auto__ = switch__16572__auto__(state_17225);
if(cljs.core.keyword_identical_QMARK_(result__16575__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16575__auto__;
}
break;
}
}catch (e17244){var ex__16576__auto__ = e17244;
var statearr_17245_17263 = state_17225;
(statearr_17245_17263[(2)] = ex__16576__auto__);


if(cljs.core.seq((state_17225[(4)]))){
var statearr_17246_17264 = state_17225;
(statearr_17246_17264[(1)] = cljs.core.first((state_17225[(4)])));

} else {
throw ex__16576__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16574__auto__,cljs.core.cst$kw$recur)){
var G__17265 = state_17225;
state_17225 = G__17265;
continue;
} else {
return ret_value__16574__auto__;
}
break;
}
});
cljs$core$async$state_machine__16573__auto__ = function(state_17225){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16573__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16573__auto____1.call(this,state_17225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16573__auto____0;
cljs$core$async$state_machine__16573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16573__auto____1;
return cljs$core$async$state_machine__16573__auto__;
})()
})();
var state__16649__auto__ = (function (){var statearr_17247 = (f__16648__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16648__auto__.cljs$core$IFn$_invoke$arity$0() : f__16648__auto__.call(null));
(statearr_17247[(6)] = c__16647__auto__);

return statearr_17247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16649__auto__);
}));

return c__16647__auto__;
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
var G__17267 = arguments.length;
switch (G__17267) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_17269 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_17269(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_17270 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_17270(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_17271 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_17271(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_17272 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_17272(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17273 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17273 = (function (ch,cs,meta17274){
this.ch = ch;
this.cs = cs;
this.meta17274 = meta17274;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17275,meta17274__$1){
var self__ = this;
var _17275__$1 = this;
return (new cljs.core.async.t_cljs$core$async17273(self__.ch,self__.cs,meta17274__$1));
}));

(cljs.core.async.t_cljs$core$async17273.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17275){
var self__ = this;
var _17275__$1 = this;
return self__.meta17274;
}));

(cljs.core.async.t_cljs$core$async17273.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17273.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async17273.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17273.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async17273.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async17273.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async17273.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta17274], null);
}));

(cljs.core.async.t_cljs$core$async17273.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17273.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17273");

(cljs.core.async.t_cljs$core$async17273.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async17273");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17273.
 */
cljs.core.async.__GT_t_cljs$core$async17273 = (function cljs$core$async$mult_$___GT_t_cljs$core$async17273(ch__$1,cs__$1,meta17274){
return (new cljs.core.async.t_cljs$core$async17273(ch__$1,cs__$1,meta17274));
});

}

return (new cljs.core.async.t_cljs$core$async17273(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__16647__auto___17492 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16648__auto__ = (function (){var switch__16572__auto__ = (function (state_17408){
var state_val_17409 = (state_17408[(1)]);
if((state_val_17409 === (7))){
var inst_17404 = (state_17408[(2)]);
var state_17408__$1 = state_17408;
var statearr_17410_17493 = state_17408__$1;
(statearr_17410_17493[(2)] = inst_17404);

(statearr_17410_17493[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17409 === (20))){
var inst_17309 = (state_17408[(7)]);
var inst_17321 = cljs.core.first(inst_17309);
var inst_17322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17321,(0),null);
var inst_17323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17321,(1),null);
var state_17408__$1 = (function (){var statearr_17411 = state_17408;
(statearr_17411[(8)] = inst_17322);

return statearr_17411;
})();
if(cljs.core.truth_(inst_17323)){
var statearr_17412_17494 = state_17408__$1;
(statearr_17412_17494[(1)] = (22));

} else {
var statearr_17413_17495 = state_17408__$1;
(statearr_17413_17495[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17409 === (27))){
var inst_17353 = (state_17408[(9)]);
var inst_17358 = (state_17408[(10)]);
var inst_17278 = (state_17408[(11)]);
var inst_17351 = (state_17408[(12)]);
var inst_17358__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17351,inst_17353);
var inst_17359 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17358__$1,inst_17278,done);
var state_17408__$1 = (function (){var statearr_17414 = state_17408;
(statearr_17414[(10)] = inst_17358__$1);

return statearr_17414;
})();
if(cljs.core.truth_(inst_17359)){
var statearr_17415_17496 = state_17408__$1;
(statearr_17415_17496[(1)] = (30));

} else {
var statearr_17416_17497 = state_17408__$1;
(statearr_17416_17497[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17409 === (1))){
var state_17408__$1 = state_17408;
var statearr_17417_17498 = state_17408__$1;
(statearr_17417_17498[(2)] = null);

(statearr_17417_17498[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17409 === (24))){
var inst_17309 = (state_17408[(7)]);
var inst_17328 = (state_17408[(2)]);
var inst_17329 = cljs.core.next(inst_17309);
var inst_17287 = inst_17329;
var inst_17288 = null;
var inst_17289 = (0);
var inst_17290 = (0);
var state_17408__$1 = (function (){var statearr_17418 = state_17408;
(statearr_17418[(13)] = inst_17328);

(statearr_17418[(14)] = inst_17289);

(statearr_17418[(15)] = inst_17290);

(statearr_17418[(16)] = inst_17288);

(statearr_17418[(17)] = inst_17287);

return statearr_17418;
})();
var statearr_17419_17499 = state_17408__$1;
(statearr_17419_17499[(2)] = null);

(statearr_17419_17499[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17409 === (39))){
var state_17408__$1 = state_17408;
var statearr_17423_17500 = state_17408__$1;
(statearr_17423_17500[(2)] = null);

(statearr_17423_17500[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17409 === (4))){
var inst_17278 = (state_17408[(11)]);
var inst_17278__$1 = (state_17408[(2)]);
var inst_17279 = (inst_17278__$1 == null);
var state_17408__$1 = (function (){var statearr_17424 = state_17408;
(statearr_17424[(11)] = inst_17278__$1);

return statearr_17424;
})();
if(cljs.core.truth_(inst_17279)){
var statearr_17425_17501 = state_17408__$1;
(statearr_17425_17501[(1)] = (5));

} else {
var statearr_17426_17502 = state_17408__$1;
(statearr_17426_17502[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17409 === (15))){
var inst_17289 = (state_17408[(14)]);
var inst_17290 = (state_17408[(15)]);
var inst_17288 = (state_17408[(16)]);
var inst_17287 = (state_17408[(17)]);
var inst_17305 = (state_17408[(2)]);
var inst_17306 = (inst_17290 + (1));
var tmp17420 = inst_17289;
var tmp17421 = inst_17288;
var tmp17422 = inst_17287;
var inst_17287__$1 = tmp17422;
var inst_17288__$1 = tmp17421;
var inst_17289__$1 = tmp17420;
var inst_17290__$1 = inst_17306;
var state_17408__$1 = (function (){var statearr_17427 = state_17408;
(statearr_17427[(14)] = inst_17289__$1);

(statearr_17427[(18)] = inst_17305);

(statearr_17427[(15)] = inst_17290__$1);

(statearr_17427[(16)] = inst_17288__$1);

(statearr_17427[(17)] = inst_17287__$1);

return statearr_17427;
})();
var statearr_17428_17503 = state_17408__$1;
(statearr_17428_17503[(2)] = null);

(statearr_17428_17503[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17409 === (21))){
var inst_17332 = (state_17408[(2)]);
var state_17408__$1 = state_17408;
var statearr_17432_17504 = state_17408__$1;
(statearr_17432_17504[(2)] = inst_17332);

(statearr_17432_17504[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17409 === (31))){
var inst_17358 = (state_17408[(10)]);
var inst_17362 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17358);
var state_17408__$1 = state_17408;
var statearr_17433_17505 = state_17408__$1;
(statearr_17433_17505[(2)] = inst_17362);

(statearr_17433_17505[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17409 === (32))){
var inst_17353 = (state_17408[(9)]);
var inst_17352 = (state_17408[(19)]);
var inst_17350 = (state_17408[(20)]);
var inst_17351 = (state_17408[(12)]);
var inst_17364 = (state_17408[(2)]);
var inst_17365 = (inst_17353 + (1));
var tmp17429 = inst_17352;
var tmp17430 = inst_17350;
var tmp17431 = inst_17351;
var inst_17350__$1 = tmp17430;
var inst_17351__$1 = tmp17431;
var inst_17352__$1 = tmp17429;
var inst_17353__$1 = inst_17365;
var state_17408__$1 = (function (){var statearr_17434 = state_17408;
(statearr_17434[(9)] = inst_17353__$1);

(statearr_17434[(19)] = inst_17352__$1);

(statearr_17434[(21)] = inst_17364);

(statearr_17434[(20)] = inst_17350__$1);

(statearr_17434[(12)] = inst_17351__$1);

return statearr_17434;
})();
var statearr_17435_17506 = state_17408__$1;
(statearr_17435_17506[(2)] = null);

(statearr_17435_17506[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17409 === (40))){
var inst_17377 = (state_17408[(22)]);
var inst_17381 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17377);
var state_17408__$1 = state_17408;
var statearr_17436_17507 = state_17408__$1;
(statearr_17436_17507[(2)] = inst_17381);

(statearr_17436_17507[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17409 === (33))){
var inst_17368 = (state_17408[(23)]);
var inst_17370 = cljs.core.chunked_seq_QMARK_(inst_17368);
var state_17408__$1 = state_17408;
if(inst_17370){
var statearr_17437_17508 = state_17408__$1;
(statearr_17437_17508[(1)] = (36));

} else {
var statearr_17438_17509 = state_17408__$1;
(statearr_17438_17509[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17409 === (13))){
var inst_17299 = (state_17408[(24)]);
var inst_17302 = cljs.core.async.close_BANG_(inst_17299);
var state_17408__$1 = state_17408;
var statearr_17439_17510 = state_17408__$1;
(statearr_17439_17510[(2)] = inst_17302);

(statearr_17439_17510[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17409 === (22))){
var inst_17322 = (state_17408[(8)]);
var inst_17325 = cljs.core.async.close_BANG_(inst_17322);
var state_17408__$1 = state_17408;
var statearr_17440_17511 = state_17408__$1;
(statearr_17440_17511[(2)] = inst_17325);

(statearr_17440_17511[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17409 === (36))){
var inst_17368 = (state_17408[(23)]);
var inst_17372 = cljs.core.chunk_first(inst_17368);
var inst_17373 = cljs.core.chunk_rest(inst_17368);
var inst_17374 = cljs.core.count(inst_17372);
var inst_17350 = inst_17373;
var inst_17351 = inst_17372;
var inst_17352 = inst_17374;
var inst_17353 = (0);
var state_17408__$1 = (function (){var statearr_17441 = state_17408;
(statearr_17441[(9)] = inst_17353);

(statearr_17441[(19)] = inst_17352);

(statearr_17441[(20)] = inst_17350);

(statearr_17441[(12)] = inst_17351);

return statearr_17441;
})();
var statearr_17442_17512 = state_17408__$1;
(statearr_17442_17512[(2)] = null);

(statearr_17442_17512[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17409 === (41))){
var inst_17368 = (state_17408[(23)]);
var inst_17383 = (state_17408[(2)]);
var inst_17384 = cljs.core.next(inst_17368);
var inst_17350 = inst_17384;
var inst_17351 = null;
var inst_17352 = (0);
var inst_17353 = (0);
var state_17408__$1 = (function (){var statearr_17443 = state_17408;
(statearr_17443[(25)] = inst_17383);

(statearr_17443[(9)] = inst_17353);

(statearr_17443[(19)] = inst_17352);

(statearr_17443[(20)] = inst_17350);

(statearr_17443[(12)] = inst_17351);

return statearr_17443;
})();
var statearr_17444_17513 = state_17408__$1;
(statearr_17444_17513[(2)] = null);

(statearr_17444_17513[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17409 === (43))){
var state_17408__$1 = state_17408;
var statearr_17445_17514 = state_17408__$1;
(statearr_17445_17514[(2)] = null);

(statearr_17445_17514[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17409 === (29))){
var inst_17392 = (state_17408[(2)]);
var state_17408__$1 = state_17408;
var statearr_17446_17515 = state_17408__$1;
(statearr_17446_17515[(2)] = inst_17392);

(statearr_17446_17515[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17409 === (44))){
var inst_17401 = (state_17408[(2)]);
var state_17408__$1 = (function (){var statearr_17447 = state_17408;
(statearr_17447[(26)] = inst_17401);

return statearr_17447;
})();
var statearr_17448_17516 = state_17408__$1;
(statearr_17448_17516[(2)] = null);

(statearr_17448_17516[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17409 === (6))){
var inst_17342 = (state_17408[(27)]);
var inst_17341 = cljs.core.deref(cs);
var inst_17342__$1 = cljs.core.keys(inst_17341);
var inst_17343 = cljs.core.count(inst_17342__$1);
var inst_17344 = cljs.core.reset_BANG_(dctr,inst_17343);
var inst_17349 = cljs.core.seq(inst_17342__$1);
var inst_17350 = inst_17349;
var inst_17351 = null;
var inst_17352 = (0);
var inst_17353 = (0);
var state_17408__$1 = (function (){var statearr_17449 = state_17408;
(statearr_17449[(27)] = inst_17342__$1);

(statearr_17449[(9)] = inst_17353);

(statearr_17449[(19)] = inst_17352);

(statearr_17449[(28)] = inst_17344);

(statearr_17449[(20)] = inst_17350);

(statearr_17449[(12)] = inst_17351);

return statearr_17449;
})();
var statearr_17450_17517 = state_17408__$1;
(statearr_17450_17517[(2)] = null);

(statearr_17450_17517[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17409 === (28))){
var inst_17368 = (state_17408[(23)]);
var inst_17350 = (state_17408[(20)]);
var inst_17368__$1 = cljs.core.seq(inst_17350);
var state_17408__$1 = (function (){var statearr_17451 = state_17408;
(statearr_17451[(23)] = inst_17368__$1);

return statearr_17451;
})();
if(inst_17368__$1){
var statearr_17452_17518 = state_17408__$1;
(statearr_17452_17518[(1)] = (33));

} else {
var statearr_17453_17519 = state_17408__$1;
(statearr_17453_17519[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17409 === (25))){
var inst_17353 = (state_17408[(9)]);
var inst_17352 = (state_17408[(19)]);
var inst_17355 = (inst_17353 < inst_17352);
var inst_17356 = inst_17355;
var state_17408__$1 = state_17408;
if(cljs.core.truth_(inst_17356)){
var statearr_17454_17520 = state_17408__$1;
(statearr_17454_17520[(1)] = (27));

} else {
var statearr_17455_17521 = state_17408__$1;
(statearr_17455_17521[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17409 === (34))){
var state_17408__$1 = state_17408;
var statearr_17456_17522 = state_17408__$1;
(statearr_17456_17522[(2)] = null);

(statearr_17456_17522[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17409 === (17))){
var state_17408__$1 = state_17408;
var statearr_17457_17523 = state_17408__$1;
(statearr_17457_17523[(2)] = null);

(statearr_17457_17523[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17409 === (3))){
var inst_17406 = (state_17408[(2)]);
var state_17408__$1 = state_17408;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17408__$1,inst_17406);
} else {
if((state_val_17409 === (12))){
var inst_17337 = (state_17408[(2)]);
var state_17408__$1 = state_17408;
var statearr_17458_17524 = state_17408__$1;
(statearr_17458_17524[(2)] = inst_17337);

(statearr_17458_17524[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17409 === (2))){
var state_17408__$1 = state_17408;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17408__$1,(4),ch);
} else {
if((state_val_17409 === (23))){
var state_17408__$1 = state_17408;
var statearr_17459_17525 = state_17408__$1;
(statearr_17459_17525[(2)] = null);

(statearr_17459_17525[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17409 === (35))){
var inst_17390 = (state_17408[(2)]);
var state_17408__$1 = state_17408;
var statearr_17460_17526 = state_17408__$1;
(statearr_17460_17526[(2)] = inst_17390);

(statearr_17460_17526[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17409 === (19))){
var inst_17309 = (state_17408[(7)]);
var inst_17313 = cljs.core.chunk_first(inst_17309);
var inst_17314 = cljs.core.chunk_rest(inst_17309);
var inst_17315 = cljs.core.count(inst_17313);
var inst_17287 = inst_17314;
var inst_17288 = inst_17313;
var inst_17289 = inst_17315;
var inst_17290 = (0);
var state_17408__$1 = (function (){var statearr_17461 = state_17408;
(statearr_17461[(14)] = inst_17289);

(statearr_17461[(15)] = inst_17290);

(statearr_17461[(16)] = inst_17288);

(statearr_17461[(17)] = inst_17287);

return statearr_17461;
})();
var statearr_17462_17527 = state_17408__$1;
(statearr_17462_17527[(2)] = null);

(statearr_17462_17527[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17409 === (11))){
var inst_17309 = (state_17408[(7)]);
var inst_17287 = (state_17408[(17)]);
var inst_17309__$1 = cljs.core.seq(inst_17287);
var state_17408__$1 = (function (){var statearr_17463 = state_17408;
(statearr_17463[(7)] = inst_17309__$1);

return statearr_17463;
})();
if(inst_17309__$1){
var statearr_17464_17528 = state_17408__$1;
(statearr_17464_17528[(1)] = (16));

} else {
var statearr_17465_17529 = state_17408__$1;
(statearr_17465_17529[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17409 === (9))){
var inst_17339 = (state_17408[(2)]);
var state_17408__$1 = state_17408;
var statearr_17466_17530 = state_17408__$1;
(statearr_17466_17530[(2)] = inst_17339);

(statearr_17466_17530[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17409 === (5))){
var inst_17285 = cljs.core.deref(cs);
var inst_17286 = cljs.core.seq(inst_17285);
var inst_17287 = inst_17286;
var inst_17288 = null;
var inst_17289 = (0);
var inst_17290 = (0);
var state_17408__$1 = (function (){var statearr_17467 = state_17408;
(statearr_17467[(14)] = inst_17289);

(statearr_17467[(15)] = inst_17290);

(statearr_17467[(16)] = inst_17288);

(statearr_17467[(17)] = inst_17287);

return statearr_17467;
})();
var statearr_17468_17531 = state_17408__$1;
(statearr_17468_17531[(2)] = null);

(statearr_17468_17531[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17409 === (14))){
var state_17408__$1 = state_17408;
var statearr_17469_17532 = state_17408__$1;
(statearr_17469_17532[(2)] = null);

(statearr_17469_17532[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17409 === (45))){
var inst_17398 = (state_17408[(2)]);
var state_17408__$1 = state_17408;
var statearr_17470_17533 = state_17408__$1;
(statearr_17470_17533[(2)] = inst_17398);

(statearr_17470_17533[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17409 === (26))){
var inst_17342 = (state_17408[(27)]);
var inst_17394 = (state_17408[(2)]);
var inst_17395 = cljs.core.seq(inst_17342);
var state_17408__$1 = (function (){var statearr_17471 = state_17408;
(statearr_17471[(29)] = inst_17394);

return statearr_17471;
})();
if(inst_17395){
var statearr_17472_17534 = state_17408__$1;
(statearr_17472_17534[(1)] = (42));

} else {
var statearr_17473_17535 = state_17408__$1;
(statearr_17473_17535[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17409 === (16))){
var inst_17309 = (state_17408[(7)]);
var inst_17311 = cljs.core.chunked_seq_QMARK_(inst_17309);
var state_17408__$1 = state_17408;
if(inst_17311){
var statearr_17474_17536 = state_17408__$1;
(statearr_17474_17536[(1)] = (19));

} else {
var statearr_17475_17537 = state_17408__$1;
(statearr_17475_17537[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17409 === (38))){
var inst_17387 = (state_17408[(2)]);
var state_17408__$1 = state_17408;
var statearr_17476_17538 = state_17408__$1;
(statearr_17476_17538[(2)] = inst_17387);

(statearr_17476_17538[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17409 === (30))){
var state_17408__$1 = state_17408;
var statearr_17477_17539 = state_17408__$1;
(statearr_17477_17539[(2)] = null);

(statearr_17477_17539[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17409 === (10))){
var inst_17290 = (state_17408[(15)]);
var inst_17288 = (state_17408[(16)]);
var inst_17298 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17288,inst_17290);
var inst_17299 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17298,(0),null);
var inst_17300 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17298,(1),null);
var state_17408__$1 = (function (){var statearr_17478 = state_17408;
(statearr_17478[(24)] = inst_17299);

return statearr_17478;
})();
if(cljs.core.truth_(inst_17300)){
var statearr_17479_17540 = state_17408__$1;
(statearr_17479_17540[(1)] = (13));

} else {
var statearr_17480_17541 = state_17408__$1;
(statearr_17480_17541[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17409 === (18))){
var inst_17335 = (state_17408[(2)]);
var state_17408__$1 = state_17408;
var statearr_17481_17542 = state_17408__$1;
(statearr_17481_17542[(2)] = inst_17335);

(statearr_17481_17542[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17409 === (42))){
var state_17408__$1 = state_17408;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17408__$1,(45),dchan);
} else {
if((state_val_17409 === (37))){
var inst_17377 = (state_17408[(22)]);
var inst_17278 = (state_17408[(11)]);
var inst_17368 = (state_17408[(23)]);
var inst_17377__$1 = cljs.core.first(inst_17368);
var inst_17378 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17377__$1,inst_17278,done);
var state_17408__$1 = (function (){var statearr_17482 = state_17408;
(statearr_17482[(22)] = inst_17377__$1);

return statearr_17482;
})();
if(cljs.core.truth_(inst_17378)){
var statearr_17483_17543 = state_17408__$1;
(statearr_17483_17543[(1)] = (39));

} else {
var statearr_17484_17544 = state_17408__$1;
(statearr_17484_17544[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17409 === (8))){
var inst_17289 = (state_17408[(14)]);
var inst_17290 = (state_17408[(15)]);
var inst_17292 = (inst_17290 < inst_17289);
var inst_17293 = inst_17292;
var state_17408__$1 = state_17408;
if(cljs.core.truth_(inst_17293)){
var statearr_17485_17545 = state_17408__$1;
(statearr_17485_17545[(1)] = (10));

} else {
var statearr_17486_17546 = state_17408__$1;
(statearr_17486_17546[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__16573__auto__ = null;
var cljs$core$async$mult_$_state_machine__16573__auto____0 = (function (){
var statearr_17487 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17487[(0)] = cljs$core$async$mult_$_state_machine__16573__auto__);

(statearr_17487[(1)] = (1));

return statearr_17487;
});
var cljs$core$async$mult_$_state_machine__16573__auto____1 = (function (state_17408){
while(true){
var ret_value__16574__auto__ = (function (){try{while(true){
var result__16575__auto__ = switch__16572__auto__(state_17408);
if(cljs.core.keyword_identical_QMARK_(result__16575__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16575__auto__;
}
break;
}
}catch (e17488){var ex__16576__auto__ = e17488;
var statearr_17489_17547 = state_17408;
(statearr_17489_17547[(2)] = ex__16576__auto__);


if(cljs.core.seq((state_17408[(4)]))){
var statearr_17490_17548 = state_17408;
(statearr_17490_17548[(1)] = cljs.core.first((state_17408[(4)])));

} else {
throw ex__16576__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16574__auto__,cljs.core.cst$kw$recur)){
var G__17549 = state_17408;
state_17408 = G__17549;
continue;
} else {
return ret_value__16574__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__16573__auto__ = function(state_17408){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__16573__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__16573__auto____1.call(this,state_17408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__16573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__16573__auto____0;
cljs$core$async$mult_$_state_machine__16573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__16573__auto____1;
return cljs$core$async$mult_$_state_machine__16573__auto__;
})()
})();
var state__16649__auto__ = (function (){var statearr_17491 = (f__16648__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16648__auto__.cljs$core$IFn$_invoke$arity$0() : f__16648__auto__.call(null));
(statearr_17491[(6)] = c__16647__auto___17492);

return statearr_17491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16649__auto__);
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
var G__17551 = arguments.length;
switch (G__17551) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_17553 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_17553(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_17554 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_17554(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_17555 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_17555(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_17556 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_17556(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_17557 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_17557(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17568 = arguments.length;
var i__4737__auto___17569 = (0);
while(true){
if((i__4737__auto___17569 < len__4736__auto___17568)){
args__4742__auto__.push((arguments[i__4737__auto___17569]));

var G__17570 = (i__4737__auto___17569 + (1));
i__4737__auto___17569 = G__17570;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17562){
var map__17563 = p__17562;
var map__17563__$1 = (((((!((map__17563 == null))))?(((((map__17563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17563.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17563):map__17563);
var opts = map__17563__$1;
var statearr_17565_17571 = state;
(statearr_17565_17571[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_17566_17572 = state;
(statearr_17566_17572[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_17567_17573 = state;
(statearr_17567_17573[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17558){
var G__17559 = cljs.core.first(seq17558);
var seq17558__$1 = cljs.core.next(seq17558);
var G__17560 = cljs.core.first(seq17558__$1);
var seq17558__$2 = cljs.core.next(seq17558__$1);
var G__17561 = cljs.core.first(seq17558__$2);
var seq17558__$3 = cljs.core.next(seq17558__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17559,G__17560,G__17561,seq17558__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17574 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17574 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17575){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta17575 = meta17575;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17574.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17576,meta17575__$1){
var self__ = this;
var _17576__$1 = this;
return (new cljs.core.async.t_cljs$core$async17574(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17575__$1));
}));

(cljs.core.async.t_cljs$core$async17574.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17576){
var self__ = this;
var _17576__$1 = this;
return self__.meta17575;
}));

(cljs.core.async.t_cljs$core$async17574.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17574.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async17574.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17574.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17574.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17574.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17574.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17574.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17574.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta17575], null);
}));

(cljs.core.async.t_cljs$core$async17574.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17574.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17574");

(cljs.core.async.t_cljs$core$async17574.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async17574");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17574.
 */
cljs.core.async.__GT_t_cljs$core$async17574 = (function cljs$core$async$mix_$___GT_t_cljs$core$async17574(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17575){
return (new cljs.core.async.t_cljs$core$async17574(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17575));
});

}

return (new cljs.core.async.t_cljs$core$async17574(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16647__auto___17739 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16648__auto__ = (function (){var switch__16572__auto__ = (function (state_17678){
var state_val_17679 = (state_17678[(1)]);
if((state_val_17679 === (7))){
var inst_17593 = (state_17678[(2)]);
var state_17678__$1 = state_17678;
var statearr_17680_17740 = state_17678__$1;
(statearr_17680_17740[(2)] = inst_17593);

(statearr_17680_17740[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17679 === (20))){
var inst_17605 = (state_17678[(7)]);
var state_17678__$1 = state_17678;
var statearr_17681_17741 = state_17678__$1;
(statearr_17681_17741[(2)] = inst_17605);

(statearr_17681_17741[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17679 === (27))){
var state_17678__$1 = state_17678;
var statearr_17682_17742 = state_17678__$1;
(statearr_17682_17742[(2)] = null);

(statearr_17682_17742[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17679 === (1))){
var inst_17580 = (state_17678[(8)]);
var inst_17580__$1 = calc_state();
var inst_17582 = (inst_17580__$1 == null);
var inst_17583 = cljs.core.not(inst_17582);
var state_17678__$1 = (function (){var statearr_17683 = state_17678;
(statearr_17683[(8)] = inst_17580__$1);

return statearr_17683;
})();
if(inst_17583){
var statearr_17684_17743 = state_17678__$1;
(statearr_17684_17743[(1)] = (2));

} else {
var statearr_17685_17744 = state_17678__$1;
(statearr_17685_17744[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17679 === (24))){
var inst_17629 = (state_17678[(9)]);
var inst_17638 = (state_17678[(10)]);
var inst_17652 = (state_17678[(11)]);
var inst_17652__$1 = (inst_17629.cljs$core$IFn$_invoke$arity$1 ? inst_17629.cljs$core$IFn$_invoke$arity$1(inst_17638) : inst_17629.call(null,inst_17638));
var state_17678__$1 = (function (){var statearr_17686 = state_17678;
(statearr_17686[(11)] = inst_17652__$1);

return statearr_17686;
})();
if(cljs.core.truth_(inst_17652__$1)){
var statearr_17687_17745 = state_17678__$1;
(statearr_17687_17745[(1)] = (29));

} else {
var statearr_17688_17746 = state_17678__$1;
(statearr_17688_17746[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17679 === (4))){
var inst_17596 = (state_17678[(2)]);
var state_17678__$1 = state_17678;
if(cljs.core.truth_(inst_17596)){
var statearr_17689_17747 = state_17678__$1;
(statearr_17689_17747[(1)] = (8));

} else {
var statearr_17690_17748 = state_17678__$1;
(statearr_17690_17748[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17679 === (15))){
var inst_17623 = (state_17678[(2)]);
var state_17678__$1 = state_17678;
if(cljs.core.truth_(inst_17623)){
var statearr_17691_17749 = state_17678__$1;
(statearr_17691_17749[(1)] = (19));

} else {
var statearr_17692_17750 = state_17678__$1;
(statearr_17692_17750[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17679 === (21))){
var inst_17628 = (state_17678[(12)]);
var inst_17628__$1 = (state_17678[(2)]);
var inst_17629 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17628__$1,cljs.core.cst$kw$solos);
var inst_17630 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17628__$1,cljs.core.cst$kw$mutes);
var inst_17631 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17628__$1,cljs.core.cst$kw$reads);
var state_17678__$1 = (function (){var statearr_17693 = state_17678;
(statearr_17693[(9)] = inst_17629);

(statearr_17693[(13)] = inst_17630);

(statearr_17693[(12)] = inst_17628__$1);

return statearr_17693;
})();
return cljs.core.async.ioc_alts_BANG_(state_17678__$1,(22),inst_17631);
} else {
if((state_val_17679 === (31))){
var inst_17660 = (state_17678[(2)]);
var state_17678__$1 = state_17678;
if(cljs.core.truth_(inst_17660)){
var statearr_17694_17751 = state_17678__$1;
(statearr_17694_17751[(1)] = (32));

} else {
var statearr_17695_17752 = state_17678__$1;
(statearr_17695_17752[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17679 === (32))){
var inst_17637 = (state_17678[(14)]);
var state_17678__$1 = state_17678;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17678__$1,(35),out,inst_17637);
} else {
if((state_val_17679 === (33))){
var inst_17628 = (state_17678[(12)]);
var inst_17605 = inst_17628;
var state_17678__$1 = (function (){var statearr_17696 = state_17678;
(statearr_17696[(7)] = inst_17605);

return statearr_17696;
})();
var statearr_17697_17753 = state_17678__$1;
(statearr_17697_17753[(2)] = null);

(statearr_17697_17753[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17679 === (13))){
var inst_17605 = (state_17678[(7)]);
var inst_17612 = inst_17605.cljs$lang$protocol_mask$partition0$;
var inst_17613 = (inst_17612 & (64));
var inst_17614 = inst_17605.cljs$core$ISeq$;
var inst_17615 = (cljs.core.PROTOCOL_SENTINEL === inst_17614);
var inst_17616 = ((inst_17613) || (inst_17615));
var state_17678__$1 = state_17678;
if(cljs.core.truth_(inst_17616)){
var statearr_17698_17754 = state_17678__$1;
(statearr_17698_17754[(1)] = (16));

} else {
var statearr_17699_17755 = state_17678__$1;
(statearr_17699_17755[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17679 === (22))){
var inst_17637 = (state_17678[(14)]);
var inst_17638 = (state_17678[(10)]);
var inst_17636 = (state_17678[(2)]);
var inst_17637__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17636,(0),null);
var inst_17638__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17636,(1),null);
var inst_17639 = (inst_17637__$1 == null);
var inst_17640 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17638__$1,change);
var inst_17641 = ((inst_17639) || (inst_17640));
var state_17678__$1 = (function (){var statearr_17700 = state_17678;
(statearr_17700[(14)] = inst_17637__$1);

(statearr_17700[(10)] = inst_17638__$1);

return statearr_17700;
})();
if(cljs.core.truth_(inst_17641)){
var statearr_17701_17756 = state_17678__$1;
(statearr_17701_17756[(1)] = (23));

} else {
var statearr_17702_17757 = state_17678__$1;
(statearr_17702_17757[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17679 === (36))){
var inst_17628 = (state_17678[(12)]);
var inst_17605 = inst_17628;
var state_17678__$1 = (function (){var statearr_17703 = state_17678;
(statearr_17703[(7)] = inst_17605);

return statearr_17703;
})();
var statearr_17704_17758 = state_17678__$1;
(statearr_17704_17758[(2)] = null);

(statearr_17704_17758[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17679 === (29))){
var inst_17652 = (state_17678[(11)]);
var state_17678__$1 = state_17678;
var statearr_17705_17759 = state_17678__$1;
(statearr_17705_17759[(2)] = inst_17652);

(statearr_17705_17759[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17679 === (6))){
var state_17678__$1 = state_17678;
var statearr_17706_17760 = state_17678__$1;
(statearr_17706_17760[(2)] = false);

(statearr_17706_17760[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17679 === (28))){
var inst_17648 = (state_17678[(2)]);
var inst_17649 = calc_state();
var inst_17605 = inst_17649;
var state_17678__$1 = (function (){var statearr_17707 = state_17678;
(statearr_17707[(7)] = inst_17605);

(statearr_17707[(15)] = inst_17648);

return statearr_17707;
})();
var statearr_17708_17761 = state_17678__$1;
(statearr_17708_17761[(2)] = null);

(statearr_17708_17761[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17679 === (25))){
var inst_17674 = (state_17678[(2)]);
var state_17678__$1 = state_17678;
var statearr_17709_17762 = state_17678__$1;
(statearr_17709_17762[(2)] = inst_17674);

(statearr_17709_17762[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17679 === (34))){
var inst_17672 = (state_17678[(2)]);
var state_17678__$1 = state_17678;
var statearr_17710_17763 = state_17678__$1;
(statearr_17710_17763[(2)] = inst_17672);

(statearr_17710_17763[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17679 === (17))){
var state_17678__$1 = state_17678;
var statearr_17711_17764 = state_17678__$1;
(statearr_17711_17764[(2)] = false);

(statearr_17711_17764[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17679 === (3))){
var state_17678__$1 = state_17678;
var statearr_17712_17765 = state_17678__$1;
(statearr_17712_17765[(2)] = false);

(statearr_17712_17765[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17679 === (12))){
var inst_17676 = (state_17678[(2)]);
var state_17678__$1 = state_17678;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17678__$1,inst_17676);
} else {
if((state_val_17679 === (2))){
var inst_17580 = (state_17678[(8)]);
var inst_17585 = inst_17580.cljs$lang$protocol_mask$partition0$;
var inst_17586 = (inst_17585 & (64));
var inst_17587 = inst_17580.cljs$core$ISeq$;
var inst_17588 = (cljs.core.PROTOCOL_SENTINEL === inst_17587);
var inst_17589 = ((inst_17586) || (inst_17588));
var state_17678__$1 = state_17678;
if(cljs.core.truth_(inst_17589)){
var statearr_17713_17766 = state_17678__$1;
(statearr_17713_17766[(1)] = (5));

} else {
var statearr_17714_17767 = state_17678__$1;
(statearr_17714_17767[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17679 === (23))){
var inst_17637 = (state_17678[(14)]);
var inst_17643 = (inst_17637 == null);
var state_17678__$1 = state_17678;
if(cljs.core.truth_(inst_17643)){
var statearr_17715_17768 = state_17678__$1;
(statearr_17715_17768[(1)] = (26));

} else {
var statearr_17716_17769 = state_17678__$1;
(statearr_17716_17769[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17679 === (35))){
var inst_17663 = (state_17678[(2)]);
var state_17678__$1 = state_17678;
if(cljs.core.truth_(inst_17663)){
var statearr_17717_17770 = state_17678__$1;
(statearr_17717_17770[(1)] = (36));

} else {
var statearr_17718_17771 = state_17678__$1;
(statearr_17718_17771[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17679 === (19))){
var inst_17605 = (state_17678[(7)]);
var inst_17625 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17605);
var state_17678__$1 = state_17678;
var statearr_17719_17772 = state_17678__$1;
(statearr_17719_17772[(2)] = inst_17625);

(statearr_17719_17772[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17679 === (11))){
var inst_17605 = (state_17678[(7)]);
var inst_17609 = (inst_17605 == null);
var inst_17610 = cljs.core.not(inst_17609);
var state_17678__$1 = state_17678;
if(inst_17610){
var statearr_17720_17773 = state_17678__$1;
(statearr_17720_17773[(1)] = (13));

} else {
var statearr_17721_17774 = state_17678__$1;
(statearr_17721_17774[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17679 === (9))){
var inst_17580 = (state_17678[(8)]);
var state_17678__$1 = state_17678;
var statearr_17722_17775 = state_17678__$1;
(statearr_17722_17775[(2)] = inst_17580);

(statearr_17722_17775[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17679 === (5))){
var state_17678__$1 = state_17678;
var statearr_17723_17776 = state_17678__$1;
(statearr_17723_17776[(2)] = true);

(statearr_17723_17776[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17679 === (14))){
var state_17678__$1 = state_17678;
var statearr_17724_17777 = state_17678__$1;
(statearr_17724_17777[(2)] = false);

(statearr_17724_17777[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17679 === (26))){
var inst_17638 = (state_17678[(10)]);
var inst_17645 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_17638);
var state_17678__$1 = state_17678;
var statearr_17725_17778 = state_17678__$1;
(statearr_17725_17778[(2)] = inst_17645);

(statearr_17725_17778[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17679 === (16))){
var state_17678__$1 = state_17678;
var statearr_17726_17779 = state_17678__$1;
(statearr_17726_17779[(2)] = true);

(statearr_17726_17779[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17679 === (38))){
var inst_17668 = (state_17678[(2)]);
var state_17678__$1 = state_17678;
var statearr_17727_17780 = state_17678__$1;
(statearr_17727_17780[(2)] = inst_17668);

(statearr_17727_17780[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17679 === (30))){
var inst_17629 = (state_17678[(9)]);
var inst_17630 = (state_17678[(13)]);
var inst_17638 = (state_17678[(10)]);
var inst_17655 = cljs.core.empty_QMARK_(inst_17629);
var inst_17656 = (inst_17630.cljs$core$IFn$_invoke$arity$1 ? inst_17630.cljs$core$IFn$_invoke$arity$1(inst_17638) : inst_17630.call(null,inst_17638));
var inst_17657 = cljs.core.not(inst_17656);
var inst_17658 = ((inst_17655) && (inst_17657));
var state_17678__$1 = state_17678;
var statearr_17728_17781 = state_17678__$1;
(statearr_17728_17781[(2)] = inst_17658);

(statearr_17728_17781[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17679 === (10))){
var inst_17580 = (state_17678[(8)]);
var inst_17601 = (state_17678[(2)]);
var inst_17602 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17601,cljs.core.cst$kw$solos);
var inst_17603 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17601,cljs.core.cst$kw$mutes);
var inst_17604 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17601,cljs.core.cst$kw$reads);
var inst_17605 = inst_17580;
var state_17678__$1 = (function (){var statearr_17729 = state_17678;
(statearr_17729[(7)] = inst_17605);

(statearr_17729[(16)] = inst_17603);

(statearr_17729[(17)] = inst_17604);

(statearr_17729[(18)] = inst_17602);

return statearr_17729;
})();
var statearr_17730_17782 = state_17678__$1;
(statearr_17730_17782[(2)] = null);

(statearr_17730_17782[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17679 === (18))){
var inst_17620 = (state_17678[(2)]);
var state_17678__$1 = state_17678;
var statearr_17731_17783 = state_17678__$1;
(statearr_17731_17783[(2)] = inst_17620);

(statearr_17731_17783[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17679 === (37))){
var state_17678__$1 = state_17678;
var statearr_17732_17784 = state_17678__$1;
(statearr_17732_17784[(2)] = null);

(statearr_17732_17784[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17679 === (8))){
var inst_17580 = (state_17678[(8)]);
var inst_17598 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17580);
var state_17678__$1 = state_17678;
var statearr_17733_17785 = state_17678__$1;
(statearr_17733_17785[(2)] = inst_17598);

(statearr_17733_17785[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__16573__auto__ = null;
var cljs$core$async$mix_$_state_machine__16573__auto____0 = (function (){
var statearr_17734 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17734[(0)] = cljs$core$async$mix_$_state_machine__16573__auto__);

(statearr_17734[(1)] = (1));

return statearr_17734;
});
var cljs$core$async$mix_$_state_machine__16573__auto____1 = (function (state_17678){
while(true){
var ret_value__16574__auto__ = (function (){try{while(true){
var result__16575__auto__ = switch__16572__auto__(state_17678);
if(cljs.core.keyword_identical_QMARK_(result__16575__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16575__auto__;
}
break;
}
}catch (e17735){var ex__16576__auto__ = e17735;
var statearr_17736_17786 = state_17678;
(statearr_17736_17786[(2)] = ex__16576__auto__);


if(cljs.core.seq((state_17678[(4)]))){
var statearr_17737_17787 = state_17678;
(statearr_17737_17787[(1)] = cljs.core.first((state_17678[(4)])));

} else {
throw ex__16576__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16574__auto__,cljs.core.cst$kw$recur)){
var G__17788 = state_17678;
state_17678 = G__17788;
continue;
} else {
return ret_value__16574__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__16573__auto__ = function(state_17678){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__16573__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__16573__auto____1.call(this,state_17678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__16573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__16573__auto____0;
cljs$core$async$mix_$_state_machine__16573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__16573__auto____1;
return cljs$core$async$mix_$_state_machine__16573__auto__;
})()
})();
var state__16649__auto__ = (function (){var statearr_17738 = (f__16648__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16648__auto__.cljs$core$IFn$_invoke$arity$0() : f__16648__auto__.call(null));
(statearr_17738[(6)] = c__16647__auto___17739);

return statearr_17738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16649__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_17791 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_17791(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_17792 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_17792(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_17793 = (function() {
var G__17794 = null;
var G__17794__1 = (function (p){
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
var G__17794__2 = (function (p,v){
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
G__17794 = function(p,v){
switch(arguments.length){
case 1:
return G__17794__1.call(this,p);
case 2:
return G__17794__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17794.cljs$core$IFn$_invoke$arity$1 = G__17794__1;
G__17794.cljs$core$IFn$_invoke$arity$2 = G__17794__2;
return G__17794;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__17790 = arguments.length;
switch (G__17790) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17793.cljs$core$IFn$_invoke$arity$1(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17793.cljs$core$IFn$_invoke$arity$2(p,v);
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
var G__17798 = arguments.length;
switch (G__17798) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__17796_SHARP_){
if(cljs.core.truth_((p1__17796_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17796_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__17796_SHARP_.call(null,topic)))){
return p1__17796_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17796_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17799 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17799 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17800){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17800 = meta17800;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17801,meta17800__$1){
var self__ = this;
var _17801__$1 = this;
return (new cljs.core.async.t_cljs$core$async17799(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17800__$1));
}));

(cljs.core.async.t_cljs$core$async17799.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17801){
var self__ = this;
var _17801__$1 = this;
return self__.meta17800;
}));

(cljs.core.async.t_cljs$core$async17799.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17799.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async17799.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17799.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async17799.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async17799.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async17799.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async17799.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta17800], null);
}));

(cljs.core.async.t_cljs$core$async17799.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17799.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17799");

(cljs.core.async.t_cljs$core$async17799.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async17799");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17799.
 */
cljs.core.async.__GT_t_cljs$core$async17799 = (function cljs$core$async$__GT_t_cljs$core$async17799(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17800){
return (new cljs.core.async.t_cljs$core$async17799(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17800));
});

}

return (new cljs.core.async.t_cljs$core$async17799(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16647__auto___17920 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16648__auto__ = (function (){var switch__16572__auto__ = (function (state_17873){
var state_val_17874 = (state_17873[(1)]);
if((state_val_17874 === (7))){
var inst_17869 = (state_17873[(2)]);
var state_17873__$1 = state_17873;
var statearr_17875_17921 = state_17873__$1;
(statearr_17875_17921[(2)] = inst_17869);

(statearr_17875_17921[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17874 === (20))){
var state_17873__$1 = state_17873;
var statearr_17876_17922 = state_17873__$1;
(statearr_17876_17922[(2)] = null);

(statearr_17876_17922[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17874 === (1))){
var state_17873__$1 = state_17873;
var statearr_17877_17923 = state_17873__$1;
(statearr_17877_17923[(2)] = null);

(statearr_17877_17923[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17874 === (24))){
var inst_17852 = (state_17873[(7)]);
var inst_17861 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17852);
var state_17873__$1 = state_17873;
var statearr_17878_17924 = state_17873__$1;
(statearr_17878_17924[(2)] = inst_17861);

(statearr_17878_17924[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17874 === (4))){
var inst_17804 = (state_17873[(8)]);
var inst_17804__$1 = (state_17873[(2)]);
var inst_17805 = (inst_17804__$1 == null);
var state_17873__$1 = (function (){var statearr_17879 = state_17873;
(statearr_17879[(8)] = inst_17804__$1);

return statearr_17879;
})();
if(cljs.core.truth_(inst_17805)){
var statearr_17880_17925 = state_17873__$1;
(statearr_17880_17925[(1)] = (5));

} else {
var statearr_17881_17926 = state_17873__$1;
(statearr_17881_17926[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17874 === (15))){
var inst_17846 = (state_17873[(2)]);
var state_17873__$1 = state_17873;
var statearr_17882_17927 = state_17873__$1;
(statearr_17882_17927[(2)] = inst_17846);

(statearr_17882_17927[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17874 === (21))){
var inst_17866 = (state_17873[(2)]);
var state_17873__$1 = (function (){var statearr_17883 = state_17873;
(statearr_17883[(9)] = inst_17866);

return statearr_17883;
})();
var statearr_17884_17928 = state_17873__$1;
(statearr_17884_17928[(2)] = null);

(statearr_17884_17928[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17874 === (13))){
var inst_17828 = (state_17873[(10)]);
var inst_17830 = cljs.core.chunked_seq_QMARK_(inst_17828);
var state_17873__$1 = state_17873;
if(inst_17830){
var statearr_17885_17929 = state_17873__$1;
(statearr_17885_17929[(1)] = (16));

} else {
var statearr_17886_17930 = state_17873__$1;
(statearr_17886_17930[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17874 === (22))){
var inst_17858 = (state_17873[(2)]);
var state_17873__$1 = state_17873;
if(cljs.core.truth_(inst_17858)){
var statearr_17887_17931 = state_17873__$1;
(statearr_17887_17931[(1)] = (23));

} else {
var statearr_17888_17932 = state_17873__$1;
(statearr_17888_17932[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17874 === (6))){
var inst_17804 = (state_17873[(8)]);
var inst_17852 = (state_17873[(7)]);
var inst_17854 = (state_17873[(11)]);
var inst_17852__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_17804) : topic_fn.call(null,inst_17804));
var inst_17853 = cljs.core.deref(mults);
var inst_17854__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17853,inst_17852__$1);
var state_17873__$1 = (function (){var statearr_17889 = state_17873;
(statearr_17889[(7)] = inst_17852__$1);

(statearr_17889[(11)] = inst_17854__$1);

return statearr_17889;
})();
if(cljs.core.truth_(inst_17854__$1)){
var statearr_17890_17933 = state_17873__$1;
(statearr_17890_17933[(1)] = (19));

} else {
var statearr_17891_17934 = state_17873__$1;
(statearr_17891_17934[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17874 === (25))){
var inst_17863 = (state_17873[(2)]);
var state_17873__$1 = state_17873;
var statearr_17892_17935 = state_17873__$1;
(statearr_17892_17935[(2)] = inst_17863);

(statearr_17892_17935[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17874 === (17))){
var inst_17828 = (state_17873[(10)]);
var inst_17837 = cljs.core.first(inst_17828);
var inst_17838 = cljs.core.async.muxch_STAR_(inst_17837);
var inst_17839 = cljs.core.async.close_BANG_(inst_17838);
var inst_17840 = cljs.core.next(inst_17828);
var inst_17814 = inst_17840;
var inst_17815 = null;
var inst_17816 = (0);
var inst_17817 = (0);
var state_17873__$1 = (function (){var statearr_17893 = state_17873;
(statearr_17893[(12)] = inst_17817);

(statearr_17893[(13)] = inst_17814);

(statearr_17893[(14)] = inst_17815);

(statearr_17893[(15)] = inst_17816);

(statearr_17893[(16)] = inst_17839);

return statearr_17893;
})();
var statearr_17894_17936 = state_17873__$1;
(statearr_17894_17936[(2)] = null);

(statearr_17894_17936[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17874 === (3))){
var inst_17871 = (state_17873[(2)]);
var state_17873__$1 = state_17873;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17873__$1,inst_17871);
} else {
if((state_val_17874 === (12))){
var inst_17848 = (state_17873[(2)]);
var state_17873__$1 = state_17873;
var statearr_17895_17937 = state_17873__$1;
(statearr_17895_17937[(2)] = inst_17848);

(statearr_17895_17937[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17874 === (2))){
var state_17873__$1 = state_17873;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17873__$1,(4),ch);
} else {
if((state_val_17874 === (23))){
var state_17873__$1 = state_17873;
var statearr_17896_17938 = state_17873__$1;
(statearr_17896_17938[(2)] = null);

(statearr_17896_17938[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17874 === (19))){
var inst_17804 = (state_17873[(8)]);
var inst_17854 = (state_17873[(11)]);
var inst_17856 = cljs.core.async.muxch_STAR_(inst_17854);
var state_17873__$1 = state_17873;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17873__$1,(22),inst_17856,inst_17804);
} else {
if((state_val_17874 === (11))){
var inst_17828 = (state_17873[(10)]);
var inst_17814 = (state_17873[(13)]);
var inst_17828__$1 = cljs.core.seq(inst_17814);
var state_17873__$1 = (function (){var statearr_17897 = state_17873;
(statearr_17897[(10)] = inst_17828__$1);

return statearr_17897;
})();
if(inst_17828__$1){
var statearr_17898_17939 = state_17873__$1;
(statearr_17898_17939[(1)] = (13));

} else {
var statearr_17899_17940 = state_17873__$1;
(statearr_17899_17940[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17874 === (9))){
var inst_17850 = (state_17873[(2)]);
var state_17873__$1 = state_17873;
var statearr_17900_17941 = state_17873__$1;
(statearr_17900_17941[(2)] = inst_17850);

(statearr_17900_17941[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17874 === (5))){
var inst_17811 = cljs.core.deref(mults);
var inst_17812 = cljs.core.vals(inst_17811);
var inst_17813 = cljs.core.seq(inst_17812);
var inst_17814 = inst_17813;
var inst_17815 = null;
var inst_17816 = (0);
var inst_17817 = (0);
var state_17873__$1 = (function (){var statearr_17901 = state_17873;
(statearr_17901[(12)] = inst_17817);

(statearr_17901[(13)] = inst_17814);

(statearr_17901[(14)] = inst_17815);

(statearr_17901[(15)] = inst_17816);

return statearr_17901;
})();
var statearr_17902_17942 = state_17873__$1;
(statearr_17902_17942[(2)] = null);

(statearr_17902_17942[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17874 === (14))){
var state_17873__$1 = state_17873;
var statearr_17906_17943 = state_17873__$1;
(statearr_17906_17943[(2)] = null);

(statearr_17906_17943[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17874 === (16))){
var inst_17828 = (state_17873[(10)]);
var inst_17832 = cljs.core.chunk_first(inst_17828);
var inst_17833 = cljs.core.chunk_rest(inst_17828);
var inst_17834 = cljs.core.count(inst_17832);
var inst_17814 = inst_17833;
var inst_17815 = inst_17832;
var inst_17816 = inst_17834;
var inst_17817 = (0);
var state_17873__$1 = (function (){var statearr_17907 = state_17873;
(statearr_17907[(12)] = inst_17817);

(statearr_17907[(13)] = inst_17814);

(statearr_17907[(14)] = inst_17815);

(statearr_17907[(15)] = inst_17816);

return statearr_17907;
})();
var statearr_17908_17944 = state_17873__$1;
(statearr_17908_17944[(2)] = null);

(statearr_17908_17944[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17874 === (10))){
var inst_17817 = (state_17873[(12)]);
var inst_17814 = (state_17873[(13)]);
var inst_17815 = (state_17873[(14)]);
var inst_17816 = (state_17873[(15)]);
var inst_17822 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17815,inst_17817);
var inst_17823 = cljs.core.async.muxch_STAR_(inst_17822);
var inst_17824 = cljs.core.async.close_BANG_(inst_17823);
var inst_17825 = (inst_17817 + (1));
var tmp17903 = inst_17814;
var tmp17904 = inst_17815;
var tmp17905 = inst_17816;
var inst_17814__$1 = tmp17903;
var inst_17815__$1 = tmp17904;
var inst_17816__$1 = tmp17905;
var inst_17817__$1 = inst_17825;
var state_17873__$1 = (function (){var statearr_17909 = state_17873;
(statearr_17909[(17)] = inst_17824);

(statearr_17909[(12)] = inst_17817__$1);

(statearr_17909[(13)] = inst_17814__$1);

(statearr_17909[(14)] = inst_17815__$1);

(statearr_17909[(15)] = inst_17816__$1);

return statearr_17909;
})();
var statearr_17910_17945 = state_17873__$1;
(statearr_17910_17945[(2)] = null);

(statearr_17910_17945[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17874 === (18))){
var inst_17843 = (state_17873[(2)]);
var state_17873__$1 = state_17873;
var statearr_17911_17946 = state_17873__$1;
(statearr_17911_17946[(2)] = inst_17843);

(statearr_17911_17946[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17874 === (8))){
var inst_17817 = (state_17873[(12)]);
var inst_17816 = (state_17873[(15)]);
var inst_17819 = (inst_17817 < inst_17816);
var inst_17820 = inst_17819;
var state_17873__$1 = state_17873;
if(cljs.core.truth_(inst_17820)){
var statearr_17912_17947 = state_17873__$1;
(statearr_17912_17947[(1)] = (10));

} else {
var statearr_17913_17948 = state_17873__$1;
(statearr_17913_17948[(1)] = (11));

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
var cljs$core$async$state_machine__16573__auto__ = null;
var cljs$core$async$state_machine__16573__auto____0 = (function (){
var statearr_17914 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17914[(0)] = cljs$core$async$state_machine__16573__auto__);

(statearr_17914[(1)] = (1));

return statearr_17914;
});
var cljs$core$async$state_machine__16573__auto____1 = (function (state_17873){
while(true){
var ret_value__16574__auto__ = (function (){try{while(true){
var result__16575__auto__ = switch__16572__auto__(state_17873);
if(cljs.core.keyword_identical_QMARK_(result__16575__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16575__auto__;
}
break;
}
}catch (e17915){var ex__16576__auto__ = e17915;
var statearr_17916_17949 = state_17873;
(statearr_17916_17949[(2)] = ex__16576__auto__);


if(cljs.core.seq((state_17873[(4)]))){
var statearr_17917_17950 = state_17873;
(statearr_17917_17950[(1)] = cljs.core.first((state_17873[(4)])));

} else {
throw ex__16576__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16574__auto__,cljs.core.cst$kw$recur)){
var G__17951 = state_17873;
state_17873 = G__17951;
continue;
} else {
return ret_value__16574__auto__;
}
break;
}
});
cljs$core$async$state_machine__16573__auto__ = function(state_17873){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16573__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16573__auto____1.call(this,state_17873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16573__auto____0;
cljs$core$async$state_machine__16573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16573__auto____1;
return cljs$core$async$state_machine__16573__auto__;
})()
})();
var state__16649__auto__ = (function (){var statearr_17918 = (f__16648__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16648__auto__.cljs$core$IFn$_invoke$arity$0() : f__16648__auto__.call(null));
(statearr_17918[(6)] = c__16647__auto___17920);

return statearr_17918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16649__auto__);
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
var G__17953 = arguments.length;
switch (G__17953) {
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
var G__17956 = arguments.length;
switch (G__17956) {
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
var G__17959 = arguments.length;
switch (G__17959) {
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
var c__16647__auto___18037 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16648__auto__ = (function (){var switch__16572__auto__ = (function (state_18002){
var state_val_18003 = (state_18002[(1)]);
if((state_val_18003 === (7))){
var state_18002__$1 = state_18002;
var statearr_18004_18038 = state_18002__$1;
(statearr_18004_18038[(2)] = null);

(statearr_18004_18038[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18003 === (1))){
var state_18002__$1 = state_18002;
var statearr_18005_18039 = state_18002__$1;
(statearr_18005_18039[(2)] = null);

(statearr_18005_18039[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18003 === (4))){
var inst_17963 = (state_18002[(7)]);
var inst_17962 = (state_18002[(8)]);
var inst_17965 = (inst_17963 < inst_17962);
var state_18002__$1 = state_18002;
if(cljs.core.truth_(inst_17965)){
var statearr_18006_18040 = state_18002__$1;
(statearr_18006_18040[(1)] = (6));

} else {
var statearr_18007_18041 = state_18002__$1;
(statearr_18007_18041[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18003 === (15))){
var inst_17988 = (state_18002[(9)]);
var inst_17993 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17988);
var state_18002__$1 = state_18002;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18002__$1,(17),out,inst_17993);
} else {
if((state_val_18003 === (13))){
var inst_17988 = (state_18002[(9)]);
var inst_17988__$1 = (state_18002[(2)]);
var inst_17989 = cljs.core.some(cljs.core.nil_QMARK_,inst_17988__$1);
var state_18002__$1 = (function (){var statearr_18008 = state_18002;
(statearr_18008[(9)] = inst_17988__$1);

return statearr_18008;
})();
if(cljs.core.truth_(inst_17989)){
var statearr_18009_18042 = state_18002__$1;
(statearr_18009_18042[(1)] = (14));

} else {
var statearr_18010_18043 = state_18002__$1;
(statearr_18010_18043[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18003 === (6))){
var state_18002__$1 = state_18002;
var statearr_18011_18044 = state_18002__$1;
(statearr_18011_18044[(2)] = null);

(statearr_18011_18044[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18003 === (17))){
var inst_17995 = (state_18002[(2)]);
var state_18002__$1 = (function (){var statearr_18013 = state_18002;
(statearr_18013[(10)] = inst_17995);

return statearr_18013;
})();
var statearr_18014_18045 = state_18002__$1;
(statearr_18014_18045[(2)] = null);

(statearr_18014_18045[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18003 === (3))){
var inst_18000 = (state_18002[(2)]);
var state_18002__$1 = state_18002;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18002__$1,inst_18000);
} else {
if((state_val_18003 === (12))){
var _ = (function (){var statearr_18015 = state_18002;
(statearr_18015[(4)] = cljs.core.rest((state_18002[(4)])));

return statearr_18015;
})();
var state_18002__$1 = state_18002;
var ex18012 = (state_18002__$1[(2)]);
var statearr_18016_18046 = state_18002__$1;
(statearr_18016_18046[(5)] = ex18012);


if((ex18012 instanceof Object)){
var statearr_18017_18047 = state_18002__$1;
(statearr_18017_18047[(1)] = (11));

(statearr_18017_18047[(5)] = null);

} else {
throw ex18012;

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18003 === (2))){
var inst_17961 = cljs.core.reset_BANG_(dctr,cnt);
var inst_17962 = cnt;
var inst_17963 = (0);
var state_18002__$1 = (function (){var statearr_18018 = state_18002;
(statearr_18018[(7)] = inst_17963);

(statearr_18018[(11)] = inst_17961);

(statearr_18018[(8)] = inst_17962);

return statearr_18018;
})();
var statearr_18019_18048 = state_18002__$1;
(statearr_18019_18048[(2)] = null);

(statearr_18019_18048[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18003 === (11))){
var inst_17967 = (state_18002[(2)]);
var inst_17968 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_18002__$1 = (function (){var statearr_18020 = state_18002;
(statearr_18020[(12)] = inst_17967);

return statearr_18020;
})();
var statearr_18021_18049 = state_18002__$1;
(statearr_18021_18049[(2)] = inst_17968);

(statearr_18021_18049[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18003 === (9))){
var inst_17963 = (state_18002[(7)]);
var _ = (function (){var statearr_18022 = state_18002;
(statearr_18022[(4)] = cljs.core.cons((12),(state_18002[(4)])));

return statearr_18022;
})();
var inst_17974 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17963) : chs__$1.call(null,inst_17963));
var inst_17975 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17963) : done.call(null,inst_17963));
var inst_17976 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17974,inst_17975);
var ___$1 = (function (){var statearr_18023 = state_18002;
(statearr_18023[(4)] = cljs.core.rest((state_18002[(4)])));

return statearr_18023;
})();
var state_18002__$1 = state_18002;
var statearr_18024_18050 = state_18002__$1;
(statearr_18024_18050[(2)] = inst_17976);

(statearr_18024_18050[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18003 === (5))){
var inst_17986 = (state_18002[(2)]);
var state_18002__$1 = (function (){var statearr_18025 = state_18002;
(statearr_18025[(13)] = inst_17986);

return statearr_18025;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18002__$1,(13),dchan);
} else {
if((state_val_18003 === (14))){
var inst_17991 = cljs.core.async.close_BANG_(out);
var state_18002__$1 = state_18002;
var statearr_18026_18051 = state_18002__$1;
(statearr_18026_18051[(2)] = inst_17991);

(statearr_18026_18051[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18003 === (16))){
var inst_17998 = (state_18002[(2)]);
var state_18002__$1 = state_18002;
var statearr_18027_18052 = state_18002__$1;
(statearr_18027_18052[(2)] = inst_17998);

(statearr_18027_18052[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18003 === (10))){
var inst_17963 = (state_18002[(7)]);
var inst_17979 = (state_18002[(2)]);
var inst_17980 = (inst_17963 + (1));
var inst_17963__$1 = inst_17980;
var state_18002__$1 = (function (){var statearr_18028 = state_18002;
(statearr_18028[(7)] = inst_17963__$1);

(statearr_18028[(14)] = inst_17979);

return statearr_18028;
})();
var statearr_18029_18053 = state_18002__$1;
(statearr_18029_18053[(2)] = null);

(statearr_18029_18053[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18003 === (8))){
var inst_17984 = (state_18002[(2)]);
var state_18002__$1 = state_18002;
var statearr_18030_18054 = state_18002__$1;
(statearr_18030_18054[(2)] = inst_17984);

(statearr_18030_18054[(1)] = (5));


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
var cljs$core$async$state_machine__16573__auto__ = null;
var cljs$core$async$state_machine__16573__auto____0 = (function (){
var statearr_18031 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18031[(0)] = cljs$core$async$state_machine__16573__auto__);

(statearr_18031[(1)] = (1));

return statearr_18031;
});
var cljs$core$async$state_machine__16573__auto____1 = (function (state_18002){
while(true){
var ret_value__16574__auto__ = (function (){try{while(true){
var result__16575__auto__ = switch__16572__auto__(state_18002);
if(cljs.core.keyword_identical_QMARK_(result__16575__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16575__auto__;
}
break;
}
}catch (e18032){var ex__16576__auto__ = e18032;
var statearr_18033_18055 = state_18002;
(statearr_18033_18055[(2)] = ex__16576__auto__);


if(cljs.core.seq((state_18002[(4)]))){
var statearr_18034_18056 = state_18002;
(statearr_18034_18056[(1)] = cljs.core.first((state_18002[(4)])));

} else {
throw ex__16576__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16574__auto__,cljs.core.cst$kw$recur)){
var G__18057 = state_18002;
state_18002 = G__18057;
continue;
} else {
return ret_value__16574__auto__;
}
break;
}
});
cljs$core$async$state_machine__16573__auto__ = function(state_18002){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16573__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16573__auto____1.call(this,state_18002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16573__auto____0;
cljs$core$async$state_machine__16573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16573__auto____1;
return cljs$core$async$state_machine__16573__auto__;
})()
})();
var state__16649__auto__ = (function (){var statearr_18035 = (f__16648__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16648__auto__.cljs$core$IFn$_invoke$arity$0() : f__16648__auto__.call(null));
(statearr_18035[(6)] = c__16647__auto___18037);

return statearr_18035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16649__auto__);
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
var G__18060 = arguments.length;
switch (G__18060) {
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
var c__16647__auto___18115 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16648__auto__ = (function (){var switch__16572__auto__ = (function (state_18092){
var state_val_18093 = (state_18092[(1)]);
if((state_val_18093 === (7))){
var inst_18072 = (state_18092[(7)]);
var inst_18071 = (state_18092[(8)]);
var inst_18071__$1 = (state_18092[(2)]);
var inst_18072__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18071__$1,(0),null);
var inst_18073 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18071__$1,(1),null);
var inst_18074 = (inst_18072__$1 == null);
var state_18092__$1 = (function (){var statearr_18094 = state_18092;
(statearr_18094[(7)] = inst_18072__$1);

(statearr_18094[(9)] = inst_18073);

(statearr_18094[(8)] = inst_18071__$1);

return statearr_18094;
})();
if(cljs.core.truth_(inst_18074)){
var statearr_18095_18116 = state_18092__$1;
(statearr_18095_18116[(1)] = (8));

} else {
var statearr_18096_18117 = state_18092__$1;
(statearr_18096_18117[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18093 === (1))){
var inst_18061 = cljs.core.vec(chs);
var inst_18062 = inst_18061;
var state_18092__$1 = (function (){var statearr_18097 = state_18092;
(statearr_18097[(10)] = inst_18062);

return statearr_18097;
})();
var statearr_18098_18118 = state_18092__$1;
(statearr_18098_18118[(2)] = null);

(statearr_18098_18118[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18093 === (4))){
var inst_18062 = (state_18092[(10)]);
var state_18092__$1 = state_18092;
return cljs.core.async.ioc_alts_BANG_(state_18092__$1,(7),inst_18062);
} else {
if((state_val_18093 === (6))){
var inst_18088 = (state_18092[(2)]);
var state_18092__$1 = state_18092;
var statearr_18099_18119 = state_18092__$1;
(statearr_18099_18119[(2)] = inst_18088);

(statearr_18099_18119[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18093 === (3))){
var inst_18090 = (state_18092[(2)]);
var state_18092__$1 = state_18092;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18092__$1,inst_18090);
} else {
if((state_val_18093 === (2))){
var inst_18062 = (state_18092[(10)]);
var inst_18064 = cljs.core.count(inst_18062);
var inst_18065 = (inst_18064 > (0));
var state_18092__$1 = state_18092;
if(cljs.core.truth_(inst_18065)){
var statearr_18101_18120 = state_18092__$1;
(statearr_18101_18120[(1)] = (4));

} else {
var statearr_18102_18121 = state_18092__$1;
(statearr_18102_18121[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18093 === (11))){
var inst_18062 = (state_18092[(10)]);
var inst_18081 = (state_18092[(2)]);
var tmp18100 = inst_18062;
var inst_18062__$1 = tmp18100;
var state_18092__$1 = (function (){var statearr_18103 = state_18092;
(statearr_18103[(11)] = inst_18081);

(statearr_18103[(10)] = inst_18062__$1);

return statearr_18103;
})();
var statearr_18104_18122 = state_18092__$1;
(statearr_18104_18122[(2)] = null);

(statearr_18104_18122[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18093 === (9))){
var inst_18072 = (state_18092[(7)]);
var state_18092__$1 = state_18092;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18092__$1,(11),out,inst_18072);
} else {
if((state_val_18093 === (5))){
var inst_18086 = cljs.core.async.close_BANG_(out);
var state_18092__$1 = state_18092;
var statearr_18105_18123 = state_18092__$1;
(statearr_18105_18123[(2)] = inst_18086);

(statearr_18105_18123[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18093 === (10))){
var inst_18084 = (state_18092[(2)]);
var state_18092__$1 = state_18092;
var statearr_18106_18124 = state_18092__$1;
(statearr_18106_18124[(2)] = inst_18084);

(statearr_18106_18124[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18093 === (8))){
var inst_18072 = (state_18092[(7)]);
var inst_18073 = (state_18092[(9)]);
var inst_18062 = (state_18092[(10)]);
var inst_18071 = (state_18092[(8)]);
var inst_18076 = (function (){var cs = inst_18062;
var vec__18067 = inst_18071;
var v = inst_18072;
var c = inst_18073;
return (function (p1__18058_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__18058_SHARP_);
});
})();
var inst_18077 = cljs.core.filterv(inst_18076,inst_18062);
var inst_18062__$1 = inst_18077;
var state_18092__$1 = (function (){var statearr_18107 = state_18092;
(statearr_18107[(10)] = inst_18062__$1);

return statearr_18107;
})();
var statearr_18108_18125 = state_18092__$1;
(statearr_18108_18125[(2)] = null);

(statearr_18108_18125[(1)] = (2));


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
var cljs$core$async$state_machine__16573__auto__ = null;
var cljs$core$async$state_machine__16573__auto____0 = (function (){
var statearr_18109 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18109[(0)] = cljs$core$async$state_machine__16573__auto__);

(statearr_18109[(1)] = (1));

return statearr_18109;
});
var cljs$core$async$state_machine__16573__auto____1 = (function (state_18092){
while(true){
var ret_value__16574__auto__ = (function (){try{while(true){
var result__16575__auto__ = switch__16572__auto__(state_18092);
if(cljs.core.keyword_identical_QMARK_(result__16575__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16575__auto__;
}
break;
}
}catch (e18110){var ex__16576__auto__ = e18110;
var statearr_18111_18126 = state_18092;
(statearr_18111_18126[(2)] = ex__16576__auto__);


if(cljs.core.seq((state_18092[(4)]))){
var statearr_18112_18127 = state_18092;
(statearr_18112_18127[(1)] = cljs.core.first((state_18092[(4)])));

} else {
throw ex__16576__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16574__auto__,cljs.core.cst$kw$recur)){
var G__18128 = state_18092;
state_18092 = G__18128;
continue;
} else {
return ret_value__16574__auto__;
}
break;
}
});
cljs$core$async$state_machine__16573__auto__ = function(state_18092){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16573__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16573__auto____1.call(this,state_18092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16573__auto____0;
cljs$core$async$state_machine__16573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16573__auto____1;
return cljs$core$async$state_machine__16573__auto__;
})()
})();
var state__16649__auto__ = (function (){var statearr_18113 = (f__16648__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16648__auto__.cljs$core$IFn$_invoke$arity$0() : f__16648__auto__.call(null));
(statearr_18113[(6)] = c__16647__auto___18115);

return statearr_18113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16649__auto__);
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
var G__18130 = arguments.length;
switch (G__18130) {
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
var c__16647__auto___18176 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16648__auto__ = (function (){var switch__16572__auto__ = (function (state_18154){
var state_val_18155 = (state_18154[(1)]);
if((state_val_18155 === (7))){
var inst_18136 = (state_18154[(7)]);
var inst_18136__$1 = (state_18154[(2)]);
var inst_18137 = (inst_18136__$1 == null);
var inst_18138 = cljs.core.not(inst_18137);
var state_18154__$1 = (function (){var statearr_18156 = state_18154;
(statearr_18156[(7)] = inst_18136__$1);

return statearr_18156;
})();
if(inst_18138){
var statearr_18157_18177 = state_18154__$1;
(statearr_18157_18177[(1)] = (8));

} else {
var statearr_18158_18178 = state_18154__$1;
(statearr_18158_18178[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18155 === (1))){
var inst_18131 = (0);
var state_18154__$1 = (function (){var statearr_18159 = state_18154;
(statearr_18159[(8)] = inst_18131);

return statearr_18159;
})();
var statearr_18160_18179 = state_18154__$1;
(statearr_18160_18179[(2)] = null);

(statearr_18160_18179[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18155 === (4))){
var state_18154__$1 = state_18154;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18154__$1,(7),ch);
} else {
if((state_val_18155 === (6))){
var inst_18149 = (state_18154[(2)]);
var state_18154__$1 = state_18154;
var statearr_18161_18180 = state_18154__$1;
(statearr_18161_18180[(2)] = inst_18149);

(statearr_18161_18180[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18155 === (3))){
var inst_18151 = (state_18154[(2)]);
var inst_18152 = cljs.core.async.close_BANG_(out);
var state_18154__$1 = (function (){var statearr_18162 = state_18154;
(statearr_18162[(9)] = inst_18151);

return statearr_18162;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18154__$1,inst_18152);
} else {
if((state_val_18155 === (2))){
var inst_18131 = (state_18154[(8)]);
var inst_18133 = (inst_18131 < n);
var state_18154__$1 = state_18154;
if(cljs.core.truth_(inst_18133)){
var statearr_18163_18181 = state_18154__$1;
(statearr_18163_18181[(1)] = (4));

} else {
var statearr_18164_18182 = state_18154__$1;
(statearr_18164_18182[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18155 === (11))){
var inst_18131 = (state_18154[(8)]);
var inst_18141 = (state_18154[(2)]);
var inst_18142 = (inst_18131 + (1));
var inst_18131__$1 = inst_18142;
var state_18154__$1 = (function (){var statearr_18165 = state_18154;
(statearr_18165[(8)] = inst_18131__$1);

(statearr_18165[(10)] = inst_18141);

return statearr_18165;
})();
var statearr_18166_18183 = state_18154__$1;
(statearr_18166_18183[(2)] = null);

(statearr_18166_18183[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18155 === (9))){
var state_18154__$1 = state_18154;
var statearr_18167_18184 = state_18154__$1;
(statearr_18167_18184[(2)] = null);

(statearr_18167_18184[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18155 === (5))){
var state_18154__$1 = state_18154;
var statearr_18168_18185 = state_18154__$1;
(statearr_18168_18185[(2)] = null);

(statearr_18168_18185[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18155 === (10))){
var inst_18146 = (state_18154[(2)]);
var state_18154__$1 = state_18154;
var statearr_18169_18186 = state_18154__$1;
(statearr_18169_18186[(2)] = inst_18146);

(statearr_18169_18186[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18155 === (8))){
var inst_18136 = (state_18154[(7)]);
var state_18154__$1 = state_18154;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18154__$1,(11),out,inst_18136);
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
var cljs$core$async$state_machine__16573__auto__ = null;
var cljs$core$async$state_machine__16573__auto____0 = (function (){
var statearr_18170 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18170[(0)] = cljs$core$async$state_machine__16573__auto__);

(statearr_18170[(1)] = (1));

return statearr_18170;
});
var cljs$core$async$state_machine__16573__auto____1 = (function (state_18154){
while(true){
var ret_value__16574__auto__ = (function (){try{while(true){
var result__16575__auto__ = switch__16572__auto__(state_18154);
if(cljs.core.keyword_identical_QMARK_(result__16575__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16575__auto__;
}
break;
}
}catch (e18171){var ex__16576__auto__ = e18171;
var statearr_18172_18187 = state_18154;
(statearr_18172_18187[(2)] = ex__16576__auto__);


if(cljs.core.seq((state_18154[(4)]))){
var statearr_18173_18188 = state_18154;
(statearr_18173_18188[(1)] = cljs.core.first((state_18154[(4)])));

} else {
throw ex__16576__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16574__auto__,cljs.core.cst$kw$recur)){
var G__18189 = state_18154;
state_18154 = G__18189;
continue;
} else {
return ret_value__16574__auto__;
}
break;
}
});
cljs$core$async$state_machine__16573__auto__ = function(state_18154){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16573__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16573__auto____1.call(this,state_18154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16573__auto____0;
cljs$core$async$state_machine__16573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16573__auto____1;
return cljs$core$async$state_machine__16573__auto__;
})()
})();
var state__16649__auto__ = (function (){var statearr_18174 = (f__16648__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16648__auto__.cljs$core$IFn$_invoke$arity$0() : f__16648__auto__.call(null));
(statearr_18174[(6)] = c__16647__auto___18176);

return statearr_18174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16649__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18191 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18191 = (function (f,ch,meta18192){
this.f = f;
this.ch = ch;
this.meta18192 = meta18192;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18193,meta18192__$1){
var self__ = this;
var _18193__$1 = this;
return (new cljs.core.async.t_cljs$core$async18191(self__.f,self__.ch,meta18192__$1));
}));

(cljs.core.async.t_cljs$core$async18191.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18193){
var self__ = this;
var _18193__$1 = this;
return self__.meta18192;
}));

(cljs.core.async.t_cljs$core$async18191.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18191.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18191.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18191.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18191.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18194 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18194 = (function (f,ch,meta18192,_,fn1,meta18195){
this.f = f;
this.ch = ch;
this.meta18192 = meta18192;
this._ = _;
this.fn1 = fn1;
this.meta18195 = meta18195;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18194.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18196,meta18195__$1){
var self__ = this;
var _18196__$1 = this;
return (new cljs.core.async.t_cljs$core$async18194(self__.f,self__.ch,self__.meta18192,self__._,self__.fn1,meta18195__$1));
}));

(cljs.core.async.t_cljs$core$async18194.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18196){
var self__ = this;
var _18196__$1 = this;
return self__.meta18195;
}));

(cljs.core.async.t_cljs$core$async18194.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18194.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async18194.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18194.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__18190_SHARP_){
var G__18197 = (((p1__18190_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__18190_SHARP_) : self__.f.call(null,p1__18190_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__18197) : f1.call(null,G__18197));
});
}));

(cljs.core.async.t_cljs$core$async18194.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18192,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async18191], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta18195], null);
}));

(cljs.core.async.t_cljs$core$async18194.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18194.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18194");

(cljs.core.async.t_cljs$core$async18194.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async18194");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18194.
 */
cljs.core.async.__GT_t_cljs$core$async18194 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18194(f__$1,ch__$1,meta18192__$1,___$2,fn1__$1,meta18195){
return (new cljs.core.async.t_cljs$core$async18194(f__$1,ch__$1,meta18192__$1,___$2,fn1__$1,meta18195));
});

}

return (new cljs.core.async.t_cljs$core$async18194(self__.f,self__.ch,self__.meta18192,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__18198 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__18198) : self__.f.call(null,G__18198));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async18191.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18191.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async18191.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18192], null);
}));

(cljs.core.async.t_cljs$core$async18191.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18191.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18191");

(cljs.core.async.t_cljs$core$async18191.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async18191");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18191.
 */
cljs.core.async.__GT_t_cljs$core$async18191 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18191(f__$1,ch__$1,meta18192){
return (new cljs.core.async.t_cljs$core$async18191(f__$1,ch__$1,meta18192));
});

}

return (new cljs.core.async.t_cljs$core$async18191(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18199 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18199 = (function (f,ch,meta18200){
this.f = f;
this.ch = ch;
this.meta18200 = meta18200;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18201,meta18200__$1){
var self__ = this;
var _18201__$1 = this;
return (new cljs.core.async.t_cljs$core$async18199(self__.f,self__.ch,meta18200__$1));
}));

(cljs.core.async.t_cljs$core$async18199.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18201){
var self__ = this;
var _18201__$1 = this;
return self__.meta18200;
}));

(cljs.core.async.t_cljs$core$async18199.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18199.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18199.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18199.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18199.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18199.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async18199.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18200], null);
}));

(cljs.core.async.t_cljs$core$async18199.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18199.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18199");

(cljs.core.async.t_cljs$core$async18199.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async18199");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18199.
 */
cljs.core.async.__GT_t_cljs$core$async18199 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async18199(f__$1,ch__$1,meta18200){
return (new cljs.core.async.t_cljs$core$async18199(f__$1,ch__$1,meta18200));
});

}

return (new cljs.core.async.t_cljs$core$async18199(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
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
cljs.core.async.t_cljs$core$async18202 = (function (p,ch,meta18203){
this.p = p;
this.ch = ch;
this.meta18203 = meta18203;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18204,meta18203__$1){
var self__ = this;
var _18204__$1 = this;
return (new cljs.core.async.t_cljs$core$async18202(self__.p,self__.ch,meta18203__$1));
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

(cljs.core.async.t_cljs$core$async18202.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
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
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async18202.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18203], null);
}));

(cljs.core.async.t_cljs$core$async18202.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18202.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18202");

(cljs.core.async.t_cljs$core$async18202.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async18202");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18202.
 */
cljs.core.async.__GT_t_cljs$core$async18202 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async18202(p__$1,ch__$1,meta18203){
return (new cljs.core.async.t_cljs$core$async18202(p__$1,ch__$1,meta18203));
});

}

return (new cljs.core.async.t_cljs$core$async18202(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__18206 = arguments.length;
switch (G__18206) {
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
var c__16647__auto___18247 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16648__auto__ = (function (){var switch__16572__auto__ = (function (state_18227){
var state_val_18228 = (state_18227[(1)]);
if((state_val_18228 === (7))){
var inst_18223 = (state_18227[(2)]);
var state_18227__$1 = state_18227;
var statearr_18229_18248 = state_18227__$1;
(statearr_18229_18248[(2)] = inst_18223);

(statearr_18229_18248[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18228 === (1))){
var state_18227__$1 = state_18227;
var statearr_18230_18249 = state_18227__$1;
(statearr_18230_18249[(2)] = null);

(statearr_18230_18249[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18228 === (4))){
var inst_18209 = (state_18227[(7)]);
var inst_18209__$1 = (state_18227[(2)]);
var inst_18210 = (inst_18209__$1 == null);
var state_18227__$1 = (function (){var statearr_18231 = state_18227;
(statearr_18231[(7)] = inst_18209__$1);

return statearr_18231;
})();
if(cljs.core.truth_(inst_18210)){
var statearr_18232_18250 = state_18227__$1;
(statearr_18232_18250[(1)] = (5));

} else {
var statearr_18233_18251 = state_18227__$1;
(statearr_18233_18251[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18228 === (6))){
var inst_18209 = (state_18227[(7)]);
var inst_18214 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18209) : p.call(null,inst_18209));
var state_18227__$1 = state_18227;
if(cljs.core.truth_(inst_18214)){
var statearr_18234_18252 = state_18227__$1;
(statearr_18234_18252[(1)] = (8));

} else {
var statearr_18235_18253 = state_18227__$1;
(statearr_18235_18253[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18228 === (3))){
var inst_18225 = (state_18227[(2)]);
var state_18227__$1 = state_18227;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18227__$1,inst_18225);
} else {
if((state_val_18228 === (2))){
var state_18227__$1 = state_18227;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18227__$1,(4),ch);
} else {
if((state_val_18228 === (11))){
var inst_18217 = (state_18227[(2)]);
var state_18227__$1 = state_18227;
var statearr_18236_18254 = state_18227__$1;
(statearr_18236_18254[(2)] = inst_18217);

(statearr_18236_18254[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18228 === (9))){
var state_18227__$1 = state_18227;
var statearr_18237_18255 = state_18227__$1;
(statearr_18237_18255[(2)] = null);

(statearr_18237_18255[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18228 === (5))){
var inst_18212 = cljs.core.async.close_BANG_(out);
var state_18227__$1 = state_18227;
var statearr_18238_18256 = state_18227__$1;
(statearr_18238_18256[(2)] = inst_18212);

(statearr_18238_18256[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18228 === (10))){
var inst_18220 = (state_18227[(2)]);
var state_18227__$1 = (function (){var statearr_18239 = state_18227;
(statearr_18239[(8)] = inst_18220);

return statearr_18239;
})();
var statearr_18240_18257 = state_18227__$1;
(statearr_18240_18257[(2)] = null);

(statearr_18240_18257[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18228 === (8))){
var inst_18209 = (state_18227[(7)]);
var state_18227__$1 = state_18227;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18227__$1,(11),out,inst_18209);
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
var cljs$core$async$state_machine__16573__auto__ = null;
var cljs$core$async$state_machine__16573__auto____0 = (function (){
var statearr_18241 = [null,null,null,null,null,null,null,null,null];
(statearr_18241[(0)] = cljs$core$async$state_machine__16573__auto__);

(statearr_18241[(1)] = (1));

return statearr_18241;
});
var cljs$core$async$state_machine__16573__auto____1 = (function (state_18227){
while(true){
var ret_value__16574__auto__ = (function (){try{while(true){
var result__16575__auto__ = switch__16572__auto__(state_18227);
if(cljs.core.keyword_identical_QMARK_(result__16575__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16575__auto__;
}
break;
}
}catch (e18242){var ex__16576__auto__ = e18242;
var statearr_18243_18258 = state_18227;
(statearr_18243_18258[(2)] = ex__16576__auto__);


if(cljs.core.seq((state_18227[(4)]))){
var statearr_18244_18259 = state_18227;
(statearr_18244_18259[(1)] = cljs.core.first((state_18227[(4)])));

} else {
throw ex__16576__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16574__auto__,cljs.core.cst$kw$recur)){
var G__18260 = state_18227;
state_18227 = G__18260;
continue;
} else {
return ret_value__16574__auto__;
}
break;
}
});
cljs$core$async$state_machine__16573__auto__ = function(state_18227){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16573__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16573__auto____1.call(this,state_18227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16573__auto____0;
cljs$core$async$state_machine__16573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16573__auto____1;
return cljs$core$async$state_machine__16573__auto__;
})()
})();
var state__16649__auto__ = (function (){var statearr_18245 = (f__16648__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16648__auto__.cljs$core$IFn$_invoke$arity$0() : f__16648__auto__.call(null));
(statearr_18245[(6)] = c__16647__auto___18247);

return statearr_18245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16649__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__18262 = arguments.length;
switch (G__18262) {
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
var c__16647__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16648__auto__ = (function (){var switch__16572__auto__ = (function (state_18325){
var state_val_18326 = (state_18325[(1)]);
if((state_val_18326 === (7))){
var inst_18321 = (state_18325[(2)]);
var state_18325__$1 = state_18325;
var statearr_18327_18366 = state_18325__$1;
(statearr_18327_18366[(2)] = inst_18321);

(statearr_18327_18366[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (20))){
var inst_18291 = (state_18325[(7)]);
var inst_18302 = (state_18325[(2)]);
var inst_18303 = cljs.core.next(inst_18291);
var inst_18277 = inst_18303;
var inst_18278 = null;
var inst_18279 = (0);
var inst_18280 = (0);
var state_18325__$1 = (function (){var statearr_18328 = state_18325;
(statearr_18328[(8)] = inst_18278);

(statearr_18328[(9)] = inst_18279);

(statearr_18328[(10)] = inst_18277);

(statearr_18328[(11)] = inst_18280);

(statearr_18328[(12)] = inst_18302);

return statearr_18328;
})();
var statearr_18329_18367 = state_18325__$1;
(statearr_18329_18367[(2)] = null);

(statearr_18329_18367[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (1))){
var state_18325__$1 = state_18325;
var statearr_18330_18368 = state_18325__$1;
(statearr_18330_18368[(2)] = null);

(statearr_18330_18368[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (4))){
var inst_18266 = (state_18325[(13)]);
var inst_18266__$1 = (state_18325[(2)]);
var inst_18267 = (inst_18266__$1 == null);
var state_18325__$1 = (function (){var statearr_18331 = state_18325;
(statearr_18331[(13)] = inst_18266__$1);

return statearr_18331;
})();
if(cljs.core.truth_(inst_18267)){
var statearr_18332_18369 = state_18325__$1;
(statearr_18332_18369[(1)] = (5));

} else {
var statearr_18333_18370 = state_18325__$1;
(statearr_18333_18370[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (15))){
var state_18325__$1 = state_18325;
var statearr_18337_18371 = state_18325__$1;
(statearr_18337_18371[(2)] = null);

(statearr_18337_18371[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (21))){
var state_18325__$1 = state_18325;
var statearr_18338_18372 = state_18325__$1;
(statearr_18338_18372[(2)] = null);

(statearr_18338_18372[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (13))){
var inst_18278 = (state_18325[(8)]);
var inst_18279 = (state_18325[(9)]);
var inst_18277 = (state_18325[(10)]);
var inst_18280 = (state_18325[(11)]);
var inst_18287 = (state_18325[(2)]);
var inst_18288 = (inst_18280 + (1));
var tmp18334 = inst_18278;
var tmp18335 = inst_18279;
var tmp18336 = inst_18277;
var inst_18277__$1 = tmp18336;
var inst_18278__$1 = tmp18334;
var inst_18279__$1 = tmp18335;
var inst_18280__$1 = inst_18288;
var state_18325__$1 = (function (){var statearr_18339 = state_18325;
(statearr_18339[(8)] = inst_18278__$1);

(statearr_18339[(14)] = inst_18287);

(statearr_18339[(9)] = inst_18279__$1);

(statearr_18339[(10)] = inst_18277__$1);

(statearr_18339[(11)] = inst_18280__$1);

return statearr_18339;
})();
var statearr_18340_18373 = state_18325__$1;
(statearr_18340_18373[(2)] = null);

(statearr_18340_18373[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (22))){
var state_18325__$1 = state_18325;
var statearr_18341_18374 = state_18325__$1;
(statearr_18341_18374[(2)] = null);

(statearr_18341_18374[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (6))){
var inst_18266 = (state_18325[(13)]);
var inst_18275 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18266) : f.call(null,inst_18266));
var inst_18276 = cljs.core.seq(inst_18275);
var inst_18277 = inst_18276;
var inst_18278 = null;
var inst_18279 = (0);
var inst_18280 = (0);
var state_18325__$1 = (function (){var statearr_18342 = state_18325;
(statearr_18342[(8)] = inst_18278);

(statearr_18342[(9)] = inst_18279);

(statearr_18342[(10)] = inst_18277);

(statearr_18342[(11)] = inst_18280);

return statearr_18342;
})();
var statearr_18343_18375 = state_18325__$1;
(statearr_18343_18375[(2)] = null);

(statearr_18343_18375[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (17))){
var inst_18291 = (state_18325[(7)]);
var inst_18295 = cljs.core.chunk_first(inst_18291);
var inst_18296 = cljs.core.chunk_rest(inst_18291);
var inst_18297 = cljs.core.count(inst_18295);
var inst_18277 = inst_18296;
var inst_18278 = inst_18295;
var inst_18279 = inst_18297;
var inst_18280 = (0);
var state_18325__$1 = (function (){var statearr_18344 = state_18325;
(statearr_18344[(8)] = inst_18278);

(statearr_18344[(9)] = inst_18279);

(statearr_18344[(10)] = inst_18277);

(statearr_18344[(11)] = inst_18280);

return statearr_18344;
})();
var statearr_18345_18376 = state_18325__$1;
(statearr_18345_18376[(2)] = null);

(statearr_18345_18376[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (3))){
var inst_18323 = (state_18325[(2)]);
var state_18325__$1 = state_18325;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18325__$1,inst_18323);
} else {
if((state_val_18326 === (12))){
var inst_18311 = (state_18325[(2)]);
var state_18325__$1 = state_18325;
var statearr_18346_18377 = state_18325__$1;
(statearr_18346_18377[(2)] = inst_18311);

(statearr_18346_18377[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (2))){
var state_18325__$1 = state_18325;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18325__$1,(4),in$);
} else {
if((state_val_18326 === (23))){
var inst_18319 = (state_18325[(2)]);
var state_18325__$1 = state_18325;
var statearr_18347_18378 = state_18325__$1;
(statearr_18347_18378[(2)] = inst_18319);

(statearr_18347_18378[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (19))){
var inst_18306 = (state_18325[(2)]);
var state_18325__$1 = state_18325;
var statearr_18348_18379 = state_18325__$1;
(statearr_18348_18379[(2)] = inst_18306);

(statearr_18348_18379[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (11))){
var inst_18291 = (state_18325[(7)]);
var inst_18277 = (state_18325[(10)]);
var inst_18291__$1 = cljs.core.seq(inst_18277);
var state_18325__$1 = (function (){var statearr_18349 = state_18325;
(statearr_18349[(7)] = inst_18291__$1);

return statearr_18349;
})();
if(inst_18291__$1){
var statearr_18350_18380 = state_18325__$1;
(statearr_18350_18380[(1)] = (14));

} else {
var statearr_18351_18381 = state_18325__$1;
(statearr_18351_18381[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (9))){
var inst_18313 = (state_18325[(2)]);
var inst_18314 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_18325__$1 = (function (){var statearr_18352 = state_18325;
(statearr_18352[(15)] = inst_18313);

return statearr_18352;
})();
if(cljs.core.truth_(inst_18314)){
var statearr_18353_18382 = state_18325__$1;
(statearr_18353_18382[(1)] = (21));

} else {
var statearr_18354_18383 = state_18325__$1;
(statearr_18354_18383[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (5))){
var inst_18269 = cljs.core.async.close_BANG_(out);
var state_18325__$1 = state_18325;
var statearr_18355_18384 = state_18325__$1;
(statearr_18355_18384[(2)] = inst_18269);

(statearr_18355_18384[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (14))){
var inst_18291 = (state_18325[(7)]);
var inst_18293 = cljs.core.chunked_seq_QMARK_(inst_18291);
var state_18325__$1 = state_18325;
if(inst_18293){
var statearr_18356_18385 = state_18325__$1;
(statearr_18356_18385[(1)] = (17));

} else {
var statearr_18357_18386 = state_18325__$1;
(statearr_18357_18386[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (16))){
var inst_18309 = (state_18325[(2)]);
var state_18325__$1 = state_18325;
var statearr_18358_18387 = state_18325__$1;
(statearr_18358_18387[(2)] = inst_18309);

(statearr_18358_18387[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18326 === (10))){
var inst_18278 = (state_18325[(8)]);
var inst_18280 = (state_18325[(11)]);
var inst_18285 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18278,inst_18280);
var state_18325__$1 = state_18325;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18325__$1,(13),out,inst_18285);
} else {
if((state_val_18326 === (18))){
var inst_18291 = (state_18325[(7)]);
var inst_18300 = cljs.core.first(inst_18291);
var state_18325__$1 = state_18325;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18325__$1,(20),out,inst_18300);
} else {
if((state_val_18326 === (8))){
var inst_18279 = (state_18325[(9)]);
var inst_18280 = (state_18325[(11)]);
var inst_18282 = (inst_18280 < inst_18279);
var inst_18283 = inst_18282;
var state_18325__$1 = state_18325;
if(cljs.core.truth_(inst_18283)){
var statearr_18359_18388 = state_18325__$1;
(statearr_18359_18388[(1)] = (10));

} else {
var statearr_18360_18389 = state_18325__$1;
(statearr_18360_18389[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__16573__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__16573__auto____0 = (function (){
var statearr_18361 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18361[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__16573__auto__);

(statearr_18361[(1)] = (1));

return statearr_18361;
});
var cljs$core$async$mapcat_STAR__$_state_machine__16573__auto____1 = (function (state_18325){
while(true){
var ret_value__16574__auto__ = (function (){try{while(true){
var result__16575__auto__ = switch__16572__auto__(state_18325);
if(cljs.core.keyword_identical_QMARK_(result__16575__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16575__auto__;
}
break;
}
}catch (e18362){var ex__16576__auto__ = e18362;
var statearr_18363_18390 = state_18325;
(statearr_18363_18390[(2)] = ex__16576__auto__);


if(cljs.core.seq((state_18325[(4)]))){
var statearr_18364_18391 = state_18325;
(statearr_18364_18391[(1)] = cljs.core.first((state_18325[(4)])));

} else {
throw ex__16576__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16574__auto__,cljs.core.cst$kw$recur)){
var G__18392 = state_18325;
state_18325 = G__18392;
continue;
} else {
return ret_value__16574__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__16573__auto__ = function(state_18325){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__16573__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__16573__auto____1.call(this,state_18325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__16573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__16573__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__16573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__16573__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__16573__auto__;
})()
})();
var state__16649__auto__ = (function (){var statearr_18365 = (f__16648__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16648__auto__.cljs$core$IFn$_invoke$arity$0() : f__16648__auto__.call(null));
(statearr_18365[(6)] = c__16647__auto__);

return statearr_18365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16649__auto__);
}));

return c__16647__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__18394 = arguments.length;
switch (G__18394) {
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
var G__18397 = arguments.length;
switch (G__18397) {
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
var G__18400 = arguments.length;
switch (G__18400) {
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
var c__16647__auto___18448 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16648__auto__ = (function (){var switch__16572__auto__ = (function (state_18424){
var state_val_18425 = (state_18424[(1)]);
if((state_val_18425 === (7))){
var inst_18419 = (state_18424[(2)]);
var state_18424__$1 = state_18424;
var statearr_18426_18449 = state_18424__$1;
(statearr_18426_18449[(2)] = inst_18419);

(statearr_18426_18449[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18425 === (1))){
var inst_18401 = null;
var state_18424__$1 = (function (){var statearr_18427 = state_18424;
(statearr_18427[(7)] = inst_18401);

return statearr_18427;
})();
var statearr_18428_18450 = state_18424__$1;
(statearr_18428_18450[(2)] = null);

(statearr_18428_18450[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18425 === (4))){
var inst_18404 = (state_18424[(8)]);
var inst_18404__$1 = (state_18424[(2)]);
var inst_18405 = (inst_18404__$1 == null);
var inst_18406 = cljs.core.not(inst_18405);
var state_18424__$1 = (function (){var statearr_18429 = state_18424;
(statearr_18429[(8)] = inst_18404__$1);

return statearr_18429;
})();
if(inst_18406){
var statearr_18430_18451 = state_18424__$1;
(statearr_18430_18451[(1)] = (5));

} else {
var statearr_18431_18452 = state_18424__$1;
(statearr_18431_18452[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18425 === (6))){
var state_18424__$1 = state_18424;
var statearr_18432_18453 = state_18424__$1;
(statearr_18432_18453[(2)] = null);

(statearr_18432_18453[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18425 === (3))){
var inst_18421 = (state_18424[(2)]);
var inst_18422 = cljs.core.async.close_BANG_(out);
var state_18424__$1 = (function (){var statearr_18433 = state_18424;
(statearr_18433[(9)] = inst_18421);

return statearr_18433;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18424__$1,inst_18422);
} else {
if((state_val_18425 === (2))){
var state_18424__$1 = state_18424;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18424__$1,(4),ch);
} else {
if((state_val_18425 === (11))){
var inst_18404 = (state_18424[(8)]);
var inst_18413 = (state_18424[(2)]);
var inst_18401 = inst_18404;
var state_18424__$1 = (function (){var statearr_18434 = state_18424;
(statearr_18434[(7)] = inst_18401);

(statearr_18434[(10)] = inst_18413);

return statearr_18434;
})();
var statearr_18435_18454 = state_18424__$1;
(statearr_18435_18454[(2)] = null);

(statearr_18435_18454[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18425 === (9))){
var inst_18404 = (state_18424[(8)]);
var state_18424__$1 = state_18424;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18424__$1,(11),out,inst_18404);
} else {
if((state_val_18425 === (5))){
var inst_18401 = (state_18424[(7)]);
var inst_18404 = (state_18424[(8)]);
var inst_18408 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18404,inst_18401);
var state_18424__$1 = state_18424;
if(inst_18408){
var statearr_18437_18455 = state_18424__$1;
(statearr_18437_18455[(1)] = (8));

} else {
var statearr_18438_18456 = state_18424__$1;
(statearr_18438_18456[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18425 === (10))){
var inst_18416 = (state_18424[(2)]);
var state_18424__$1 = state_18424;
var statearr_18439_18457 = state_18424__$1;
(statearr_18439_18457[(2)] = inst_18416);

(statearr_18439_18457[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18425 === (8))){
var inst_18401 = (state_18424[(7)]);
var tmp18436 = inst_18401;
var inst_18401__$1 = tmp18436;
var state_18424__$1 = (function (){var statearr_18440 = state_18424;
(statearr_18440[(7)] = inst_18401__$1);

return statearr_18440;
})();
var statearr_18441_18458 = state_18424__$1;
(statearr_18441_18458[(2)] = null);

(statearr_18441_18458[(1)] = (2));


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
var cljs$core$async$state_machine__16573__auto__ = null;
var cljs$core$async$state_machine__16573__auto____0 = (function (){
var statearr_18442 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18442[(0)] = cljs$core$async$state_machine__16573__auto__);

(statearr_18442[(1)] = (1));

return statearr_18442;
});
var cljs$core$async$state_machine__16573__auto____1 = (function (state_18424){
while(true){
var ret_value__16574__auto__ = (function (){try{while(true){
var result__16575__auto__ = switch__16572__auto__(state_18424);
if(cljs.core.keyword_identical_QMARK_(result__16575__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16575__auto__;
}
break;
}
}catch (e18443){var ex__16576__auto__ = e18443;
var statearr_18444_18459 = state_18424;
(statearr_18444_18459[(2)] = ex__16576__auto__);


if(cljs.core.seq((state_18424[(4)]))){
var statearr_18445_18460 = state_18424;
(statearr_18445_18460[(1)] = cljs.core.first((state_18424[(4)])));

} else {
throw ex__16576__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16574__auto__,cljs.core.cst$kw$recur)){
var G__18461 = state_18424;
state_18424 = G__18461;
continue;
} else {
return ret_value__16574__auto__;
}
break;
}
});
cljs$core$async$state_machine__16573__auto__ = function(state_18424){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16573__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16573__auto____1.call(this,state_18424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16573__auto____0;
cljs$core$async$state_machine__16573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16573__auto____1;
return cljs$core$async$state_machine__16573__auto__;
})()
})();
var state__16649__auto__ = (function (){var statearr_18446 = (f__16648__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16648__auto__.cljs$core$IFn$_invoke$arity$0() : f__16648__auto__.call(null));
(statearr_18446[(6)] = c__16647__auto___18448);

return statearr_18446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16649__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__18463 = arguments.length;
switch (G__18463) {
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
var c__16647__auto___18530 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16648__auto__ = (function (){var switch__16572__auto__ = (function (state_18501){
var state_val_18502 = (state_18501[(1)]);
if((state_val_18502 === (7))){
var inst_18497 = (state_18501[(2)]);
var state_18501__$1 = state_18501;
var statearr_18503_18531 = state_18501__$1;
(statearr_18503_18531[(2)] = inst_18497);

(statearr_18503_18531[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18502 === (1))){
var inst_18464 = (new Array(n));
var inst_18465 = inst_18464;
var inst_18466 = (0);
var state_18501__$1 = (function (){var statearr_18504 = state_18501;
(statearr_18504[(7)] = inst_18465);

(statearr_18504[(8)] = inst_18466);

return statearr_18504;
})();
var statearr_18505_18532 = state_18501__$1;
(statearr_18505_18532[(2)] = null);

(statearr_18505_18532[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18502 === (4))){
var inst_18469 = (state_18501[(9)]);
var inst_18469__$1 = (state_18501[(2)]);
var inst_18470 = (inst_18469__$1 == null);
var inst_18471 = cljs.core.not(inst_18470);
var state_18501__$1 = (function (){var statearr_18506 = state_18501;
(statearr_18506[(9)] = inst_18469__$1);

return statearr_18506;
})();
if(inst_18471){
var statearr_18507_18533 = state_18501__$1;
(statearr_18507_18533[(1)] = (5));

} else {
var statearr_18508_18534 = state_18501__$1;
(statearr_18508_18534[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18502 === (15))){
var inst_18491 = (state_18501[(2)]);
var state_18501__$1 = state_18501;
var statearr_18509_18535 = state_18501__$1;
(statearr_18509_18535[(2)] = inst_18491);

(statearr_18509_18535[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18502 === (13))){
var state_18501__$1 = state_18501;
var statearr_18510_18536 = state_18501__$1;
(statearr_18510_18536[(2)] = null);

(statearr_18510_18536[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18502 === (6))){
var inst_18466 = (state_18501[(8)]);
var inst_18487 = (inst_18466 > (0));
var state_18501__$1 = state_18501;
if(cljs.core.truth_(inst_18487)){
var statearr_18511_18537 = state_18501__$1;
(statearr_18511_18537[(1)] = (12));

} else {
var statearr_18512_18538 = state_18501__$1;
(statearr_18512_18538[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18502 === (3))){
var inst_18499 = (state_18501[(2)]);
var state_18501__$1 = state_18501;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18501__$1,inst_18499);
} else {
if((state_val_18502 === (12))){
var inst_18465 = (state_18501[(7)]);
var inst_18489 = cljs.core.vec(inst_18465);
var state_18501__$1 = state_18501;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18501__$1,(15),out,inst_18489);
} else {
if((state_val_18502 === (2))){
var state_18501__$1 = state_18501;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18501__$1,(4),ch);
} else {
if((state_val_18502 === (11))){
var inst_18481 = (state_18501[(2)]);
var inst_18482 = (new Array(n));
var inst_18465 = inst_18482;
var inst_18466 = (0);
var state_18501__$1 = (function (){var statearr_18513 = state_18501;
(statearr_18513[(10)] = inst_18481);

(statearr_18513[(7)] = inst_18465);

(statearr_18513[(8)] = inst_18466);

return statearr_18513;
})();
var statearr_18514_18539 = state_18501__$1;
(statearr_18514_18539[(2)] = null);

(statearr_18514_18539[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18502 === (9))){
var inst_18465 = (state_18501[(7)]);
var inst_18479 = cljs.core.vec(inst_18465);
var state_18501__$1 = state_18501;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18501__$1,(11),out,inst_18479);
} else {
if((state_val_18502 === (5))){
var inst_18469 = (state_18501[(9)]);
var inst_18474 = (state_18501[(11)]);
var inst_18465 = (state_18501[(7)]);
var inst_18466 = (state_18501[(8)]);
var inst_18473 = (inst_18465[inst_18466] = inst_18469);
var inst_18474__$1 = (inst_18466 + (1));
var inst_18475 = (inst_18474__$1 < n);
var state_18501__$1 = (function (){var statearr_18515 = state_18501;
(statearr_18515[(12)] = inst_18473);

(statearr_18515[(11)] = inst_18474__$1);

return statearr_18515;
})();
if(cljs.core.truth_(inst_18475)){
var statearr_18516_18540 = state_18501__$1;
(statearr_18516_18540[(1)] = (8));

} else {
var statearr_18517_18541 = state_18501__$1;
(statearr_18517_18541[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18502 === (14))){
var inst_18494 = (state_18501[(2)]);
var inst_18495 = cljs.core.async.close_BANG_(out);
var state_18501__$1 = (function (){var statearr_18519 = state_18501;
(statearr_18519[(13)] = inst_18494);

return statearr_18519;
})();
var statearr_18520_18542 = state_18501__$1;
(statearr_18520_18542[(2)] = inst_18495);

(statearr_18520_18542[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18502 === (10))){
var inst_18485 = (state_18501[(2)]);
var state_18501__$1 = state_18501;
var statearr_18521_18543 = state_18501__$1;
(statearr_18521_18543[(2)] = inst_18485);

(statearr_18521_18543[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18502 === (8))){
var inst_18474 = (state_18501[(11)]);
var inst_18465 = (state_18501[(7)]);
var tmp18518 = inst_18465;
var inst_18465__$1 = tmp18518;
var inst_18466 = inst_18474;
var state_18501__$1 = (function (){var statearr_18522 = state_18501;
(statearr_18522[(7)] = inst_18465__$1);

(statearr_18522[(8)] = inst_18466);

return statearr_18522;
})();
var statearr_18523_18544 = state_18501__$1;
(statearr_18523_18544[(2)] = null);

(statearr_18523_18544[(1)] = (2));


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
var cljs$core$async$state_machine__16573__auto__ = null;
var cljs$core$async$state_machine__16573__auto____0 = (function (){
var statearr_18524 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18524[(0)] = cljs$core$async$state_machine__16573__auto__);

(statearr_18524[(1)] = (1));

return statearr_18524;
});
var cljs$core$async$state_machine__16573__auto____1 = (function (state_18501){
while(true){
var ret_value__16574__auto__ = (function (){try{while(true){
var result__16575__auto__ = switch__16572__auto__(state_18501);
if(cljs.core.keyword_identical_QMARK_(result__16575__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16575__auto__;
}
break;
}
}catch (e18525){var ex__16576__auto__ = e18525;
var statearr_18526_18545 = state_18501;
(statearr_18526_18545[(2)] = ex__16576__auto__);


if(cljs.core.seq((state_18501[(4)]))){
var statearr_18527_18546 = state_18501;
(statearr_18527_18546[(1)] = cljs.core.first((state_18501[(4)])));

} else {
throw ex__16576__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16574__auto__,cljs.core.cst$kw$recur)){
var G__18547 = state_18501;
state_18501 = G__18547;
continue;
} else {
return ret_value__16574__auto__;
}
break;
}
});
cljs$core$async$state_machine__16573__auto__ = function(state_18501){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16573__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16573__auto____1.call(this,state_18501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16573__auto____0;
cljs$core$async$state_machine__16573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16573__auto____1;
return cljs$core$async$state_machine__16573__auto__;
})()
})();
var state__16649__auto__ = (function (){var statearr_18528 = (f__16648__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16648__auto__.cljs$core$IFn$_invoke$arity$0() : f__16648__auto__.call(null));
(statearr_18528[(6)] = c__16647__auto___18530);

return statearr_18528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16649__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__18549 = arguments.length;
switch (G__18549) {
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
var c__16647__auto___18620 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16648__auto__ = (function (){var switch__16572__auto__ = (function (state_18591){
var state_val_18592 = (state_18591[(1)]);
if((state_val_18592 === (7))){
var inst_18587 = (state_18591[(2)]);
var state_18591__$1 = state_18591;
var statearr_18593_18621 = state_18591__$1;
(statearr_18593_18621[(2)] = inst_18587);

(statearr_18593_18621[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18592 === (1))){
var inst_18550 = [];
var inst_18551 = inst_18550;
var inst_18552 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_18591__$1 = (function (){var statearr_18594 = state_18591;
(statearr_18594[(7)] = inst_18551);

(statearr_18594[(8)] = inst_18552);

return statearr_18594;
})();
var statearr_18595_18622 = state_18591__$1;
(statearr_18595_18622[(2)] = null);

(statearr_18595_18622[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18592 === (4))){
var inst_18555 = (state_18591[(9)]);
var inst_18555__$1 = (state_18591[(2)]);
var inst_18556 = (inst_18555__$1 == null);
var inst_18557 = cljs.core.not(inst_18556);
var state_18591__$1 = (function (){var statearr_18596 = state_18591;
(statearr_18596[(9)] = inst_18555__$1);

return statearr_18596;
})();
if(inst_18557){
var statearr_18597_18623 = state_18591__$1;
(statearr_18597_18623[(1)] = (5));

} else {
var statearr_18598_18624 = state_18591__$1;
(statearr_18598_18624[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18592 === (15))){
var inst_18581 = (state_18591[(2)]);
var state_18591__$1 = state_18591;
var statearr_18599_18625 = state_18591__$1;
(statearr_18599_18625[(2)] = inst_18581);

(statearr_18599_18625[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18592 === (13))){
var state_18591__$1 = state_18591;
var statearr_18600_18626 = state_18591__$1;
(statearr_18600_18626[(2)] = null);

(statearr_18600_18626[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18592 === (6))){
var inst_18551 = (state_18591[(7)]);
var inst_18576 = inst_18551.length;
var inst_18577 = (inst_18576 > (0));
var state_18591__$1 = state_18591;
if(cljs.core.truth_(inst_18577)){
var statearr_18601_18627 = state_18591__$1;
(statearr_18601_18627[(1)] = (12));

} else {
var statearr_18602_18628 = state_18591__$1;
(statearr_18602_18628[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18592 === (3))){
var inst_18589 = (state_18591[(2)]);
var state_18591__$1 = state_18591;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18591__$1,inst_18589);
} else {
if((state_val_18592 === (12))){
var inst_18551 = (state_18591[(7)]);
var inst_18579 = cljs.core.vec(inst_18551);
var state_18591__$1 = state_18591;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18591__$1,(15),out,inst_18579);
} else {
if((state_val_18592 === (2))){
var state_18591__$1 = state_18591;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18591__$1,(4),ch);
} else {
if((state_val_18592 === (11))){
var inst_18559 = (state_18591[(10)]);
var inst_18555 = (state_18591[(9)]);
var inst_18569 = (state_18591[(2)]);
var inst_18570 = [];
var inst_18571 = inst_18570.push(inst_18555);
var inst_18551 = inst_18570;
var inst_18552 = inst_18559;
var state_18591__$1 = (function (){var statearr_18603 = state_18591;
(statearr_18603[(11)] = inst_18571);

(statearr_18603[(7)] = inst_18551);

(statearr_18603[(8)] = inst_18552);

(statearr_18603[(12)] = inst_18569);

return statearr_18603;
})();
var statearr_18604_18629 = state_18591__$1;
(statearr_18604_18629[(2)] = null);

(statearr_18604_18629[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18592 === (9))){
var inst_18551 = (state_18591[(7)]);
var inst_18567 = cljs.core.vec(inst_18551);
var state_18591__$1 = state_18591;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18591__$1,(11),out,inst_18567);
} else {
if((state_val_18592 === (5))){
var inst_18559 = (state_18591[(10)]);
var inst_18552 = (state_18591[(8)]);
var inst_18555 = (state_18591[(9)]);
var inst_18559__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18555) : f.call(null,inst_18555));
var inst_18560 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18559__$1,inst_18552);
var inst_18561 = cljs.core.keyword_identical_QMARK_(inst_18552,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_18562 = ((inst_18560) || (inst_18561));
var state_18591__$1 = (function (){var statearr_18605 = state_18591;
(statearr_18605[(10)] = inst_18559__$1);

return statearr_18605;
})();
if(cljs.core.truth_(inst_18562)){
var statearr_18606_18630 = state_18591__$1;
(statearr_18606_18630[(1)] = (8));

} else {
var statearr_18607_18631 = state_18591__$1;
(statearr_18607_18631[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18592 === (14))){
var inst_18584 = (state_18591[(2)]);
var inst_18585 = cljs.core.async.close_BANG_(out);
var state_18591__$1 = (function (){var statearr_18609 = state_18591;
(statearr_18609[(13)] = inst_18584);

return statearr_18609;
})();
var statearr_18610_18632 = state_18591__$1;
(statearr_18610_18632[(2)] = inst_18585);

(statearr_18610_18632[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18592 === (10))){
var inst_18574 = (state_18591[(2)]);
var state_18591__$1 = state_18591;
var statearr_18611_18633 = state_18591__$1;
(statearr_18611_18633[(2)] = inst_18574);

(statearr_18611_18633[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18592 === (8))){
var inst_18559 = (state_18591[(10)]);
var inst_18551 = (state_18591[(7)]);
var inst_18555 = (state_18591[(9)]);
var inst_18564 = inst_18551.push(inst_18555);
var tmp18608 = inst_18551;
var inst_18551__$1 = tmp18608;
var inst_18552 = inst_18559;
var state_18591__$1 = (function (){var statearr_18612 = state_18591;
(statearr_18612[(14)] = inst_18564);

(statearr_18612[(7)] = inst_18551__$1);

(statearr_18612[(8)] = inst_18552);

return statearr_18612;
})();
var statearr_18613_18634 = state_18591__$1;
(statearr_18613_18634[(2)] = null);

(statearr_18613_18634[(1)] = (2));


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
var cljs$core$async$state_machine__16573__auto__ = null;
var cljs$core$async$state_machine__16573__auto____0 = (function (){
var statearr_18614 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18614[(0)] = cljs$core$async$state_machine__16573__auto__);

(statearr_18614[(1)] = (1));

return statearr_18614;
});
var cljs$core$async$state_machine__16573__auto____1 = (function (state_18591){
while(true){
var ret_value__16574__auto__ = (function (){try{while(true){
var result__16575__auto__ = switch__16572__auto__(state_18591);
if(cljs.core.keyword_identical_QMARK_(result__16575__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16575__auto__;
}
break;
}
}catch (e18615){var ex__16576__auto__ = e18615;
var statearr_18616_18635 = state_18591;
(statearr_18616_18635[(2)] = ex__16576__auto__);


if(cljs.core.seq((state_18591[(4)]))){
var statearr_18617_18636 = state_18591;
(statearr_18617_18636[(1)] = cljs.core.first((state_18591[(4)])));

} else {
throw ex__16576__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16574__auto__,cljs.core.cst$kw$recur)){
var G__18637 = state_18591;
state_18591 = G__18637;
continue;
} else {
return ret_value__16574__auto__;
}
break;
}
});
cljs$core$async$state_machine__16573__auto__ = function(state_18591){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16573__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16573__auto____1.call(this,state_18591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16573__auto____0;
cljs$core$async$state_machine__16573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16573__auto____1;
return cljs$core$async$state_machine__16573__auto__;
})()
})();
var state__16649__auto__ = (function (){var statearr_18618 = (f__16648__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16648__auto__.cljs$core$IFn$_invoke$arity$0() : f__16648__auto__.call(null));
(statearr_18618[(6)] = c__16647__auto___18620);

return statearr_18618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16649__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);

