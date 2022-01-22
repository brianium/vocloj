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
var G__17496 = arguments.length;
switch (G__17496) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17497 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17497 = (function (f,blockable,meta17498){
this.f = f;
this.blockable = blockable;
this.meta17498 = meta17498;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17497.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17499,meta17498__$1){
var self__ = this;
var _17499__$1 = this;
return (new cljs.core.async.t_cljs$core$async17497(self__.f,self__.blockable,meta17498__$1));
}));

(cljs.core.async.t_cljs$core$async17497.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17499){
var self__ = this;
var _17499__$1 = this;
return self__.meta17498;
}));

(cljs.core.async.t_cljs$core$async17497.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17497.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17497.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async17497.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async17497.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta17498], null);
}));

(cljs.core.async.t_cljs$core$async17497.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17497.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17497");

(cljs.core.async.t_cljs$core$async17497.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async17497");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17497.
 */
cljs.core.async.__GT_t_cljs$core$async17497 = (function cljs$core$async$__GT_t_cljs$core$async17497(f__$1,blockable__$1,meta17498){
return (new cljs.core.async.t_cljs$core$async17497(f__$1,blockable__$1,meta17498));
});

}

return (new cljs.core.async.t_cljs$core$async17497(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__17503 = arguments.length;
switch (G__17503) {
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
var G__17506 = arguments.length;
switch (G__17506) {
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
var G__17509 = arguments.length;
switch (G__17509) {
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
var val_17511 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17511) : fn1.call(null,val_17511));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17511) : fn1.call(null,val_17511));
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
var G__17513 = arguments.length;
switch (G__17513) {
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
var n__4613__auto___17515 = n;
var x_17516 = (0);
while(true){
if((x_17516 < n__4613__auto___17515)){
(a[x_17516] = x_17516);

var G__17517 = (x_17516 + (1));
x_17516 = G__17517;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17518 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17518 = (function (flag,meta17519){
this.flag = flag;
this.meta17519 = meta17519;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17520,meta17519__$1){
var self__ = this;
var _17520__$1 = this;
return (new cljs.core.async.t_cljs$core$async17518(self__.flag,meta17519__$1));
}));

(cljs.core.async.t_cljs$core$async17518.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17520){
var self__ = this;
var _17520__$1 = this;
return self__.meta17519;
}));

(cljs.core.async.t_cljs$core$async17518.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17518.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async17518.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17518.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async17518.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta17519], null);
}));

(cljs.core.async.t_cljs$core$async17518.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17518.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17518");

(cljs.core.async.t_cljs$core$async17518.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async17518");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17518.
 */
cljs.core.async.__GT_t_cljs$core$async17518 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17518(flag__$1,meta17519){
return (new cljs.core.async.t_cljs$core$async17518(flag__$1,meta17519));
});

}

return (new cljs.core.async.t_cljs$core$async17518(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17521 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17521 = (function (flag,cb,meta17522){
this.flag = flag;
this.cb = cb;
this.meta17522 = meta17522;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17523,meta17522__$1){
var self__ = this;
var _17523__$1 = this;
return (new cljs.core.async.t_cljs$core$async17521(self__.flag,self__.cb,meta17522__$1));
}));

(cljs.core.async.t_cljs$core$async17521.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17523){
var self__ = this;
var _17523__$1 = this;
return self__.meta17522;
}));

(cljs.core.async.t_cljs$core$async17521.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17521.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async17521.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17521.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async17521.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta17522], null);
}));

(cljs.core.async.t_cljs$core$async17521.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17521.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17521");

(cljs.core.async.t_cljs$core$async17521.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async17521");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17521.
 */
cljs.core.async.__GT_t_cljs$core$async17521 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17521(flag__$1,cb__$1,meta17522){
return (new cljs.core.async.t_cljs$core$async17521(flag__$1,cb__$1,meta17522));
});

}

return (new cljs.core.async.t_cljs$core$async17521(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__17524_SHARP_){
var G__17526 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17524_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17526) : fret.call(null,G__17526));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17525_SHARP_){
var G__17527 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17525_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17527) : fret.call(null,G__17527));
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
var G__17528 = (i + (1));
i = G__17528;
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
var len__4736__auto___17534 = arguments.length;
var i__4737__auto___17535 = (0);
while(true){
if((i__4737__auto___17535 < len__4736__auto___17534)){
args__4742__auto__.push((arguments[i__4737__auto___17535]));

var G__17536 = (i__4737__auto___17535 + (1));
i__4737__auto___17535 = G__17536;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17531){
var map__17532 = p__17531;
var map__17532__$1 = (((((!((map__17532 == null))))?(((((map__17532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17532):map__17532);
var opts = map__17532__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17529){
var G__17530 = cljs.core.first(seq17529);
var seq17529__$1 = cljs.core.next(seq17529);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17530,seq17529__$1);
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
var G__17538 = arguments.length;
switch (G__17538) {
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
var c__15502__auto___17585 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15503__auto__ = (function (){var switch__15375__auto__ = (function (state_17562){
var state_val_17563 = (state_17562[(1)]);
if((state_val_17563 === (7))){
var inst_17558 = (state_17562[(2)]);
var state_17562__$1 = state_17562;
var statearr_17564_17586 = state_17562__$1;
(statearr_17564_17586[(2)] = inst_17558);

(statearr_17564_17586[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17563 === (1))){
var state_17562__$1 = state_17562;
var statearr_17565_17587 = state_17562__$1;
(statearr_17565_17587[(2)] = null);

(statearr_17565_17587[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17563 === (4))){
var inst_17541 = (state_17562[(7)]);
var inst_17541__$1 = (state_17562[(2)]);
var inst_17542 = (inst_17541__$1 == null);
var state_17562__$1 = (function (){var statearr_17566 = state_17562;
(statearr_17566[(7)] = inst_17541__$1);

return statearr_17566;
})();
if(cljs.core.truth_(inst_17542)){
var statearr_17567_17588 = state_17562__$1;
(statearr_17567_17588[(1)] = (5));

} else {
var statearr_17568_17589 = state_17562__$1;
(statearr_17568_17589[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17563 === (13))){
var state_17562__$1 = state_17562;
var statearr_17569_17590 = state_17562__$1;
(statearr_17569_17590[(2)] = null);

(statearr_17569_17590[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17563 === (6))){
var inst_17541 = (state_17562[(7)]);
var state_17562__$1 = state_17562;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17562__$1,(11),to,inst_17541);
} else {
if((state_val_17563 === (3))){
var inst_17560 = (state_17562[(2)]);
var state_17562__$1 = state_17562;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17562__$1,inst_17560);
} else {
if((state_val_17563 === (12))){
var state_17562__$1 = state_17562;
var statearr_17570_17591 = state_17562__$1;
(statearr_17570_17591[(2)] = null);

(statearr_17570_17591[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17563 === (2))){
var state_17562__$1 = state_17562;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17562__$1,(4),from);
} else {
if((state_val_17563 === (11))){
var inst_17551 = (state_17562[(2)]);
var state_17562__$1 = state_17562;
if(cljs.core.truth_(inst_17551)){
var statearr_17571_17592 = state_17562__$1;
(statearr_17571_17592[(1)] = (12));

} else {
var statearr_17572_17593 = state_17562__$1;
(statearr_17572_17593[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17563 === (9))){
var state_17562__$1 = state_17562;
var statearr_17573_17594 = state_17562__$1;
(statearr_17573_17594[(2)] = null);

(statearr_17573_17594[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17563 === (5))){
var state_17562__$1 = state_17562;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17574_17595 = state_17562__$1;
(statearr_17574_17595[(1)] = (8));

} else {
var statearr_17575_17596 = state_17562__$1;
(statearr_17575_17596[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17563 === (14))){
var inst_17556 = (state_17562[(2)]);
var state_17562__$1 = state_17562;
var statearr_17576_17597 = state_17562__$1;
(statearr_17576_17597[(2)] = inst_17556);

(statearr_17576_17597[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17563 === (10))){
var inst_17548 = (state_17562[(2)]);
var state_17562__$1 = state_17562;
var statearr_17577_17598 = state_17562__$1;
(statearr_17577_17598[(2)] = inst_17548);

(statearr_17577_17598[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17563 === (8))){
var inst_17545 = cljs.core.async.close_BANG_(to);
var state_17562__$1 = state_17562;
var statearr_17578_17599 = state_17562__$1;
(statearr_17578_17599[(2)] = inst_17545);

(statearr_17578_17599[(1)] = (10));


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
var cljs$core$async$state_machine__15376__auto__ = null;
var cljs$core$async$state_machine__15376__auto____0 = (function (){
var statearr_17579 = [null,null,null,null,null,null,null,null];
(statearr_17579[(0)] = cljs$core$async$state_machine__15376__auto__);

(statearr_17579[(1)] = (1));

return statearr_17579;
});
var cljs$core$async$state_machine__15376__auto____1 = (function (state_17562){
while(true){
var ret_value__15377__auto__ = (function (){try{while(true){
var result__15378__auto__ = switch__15375__auto__(state_17562);
if(cljs.core.keyword_identical_QMARK_(result__15378__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15378__auto__;
}
break;
}
}catch (e17580){var ex__15379__auto__ = e17580;
var statearr_17581_17600 = state_17562;
(statearr_17581_17600[(2)] = ex__15379__auto__);


if(cljs.core.seq((state_17562[(4)]))){
var statearr_17582_17601 = state_17562;
(statearr_17582_17601[(1)] = cljs.core.first((state_17562[(4)])));

} else {
throw ex__15379__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15377__auto__,cljs.core.cst$kw$recur)){
var G__17602 = state_17562;
state_17562 = G__17602;
continue;
} else {
return ret_value__15377__auto__;
}
break;
}
});
cljs$core$async$state_machine__15376__auto__ = function(state_17562){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15376__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15376__auto____1.call(this,state_17562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15376__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15376__auto____0;
cljs$core$async$state_machine__15376__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15376__auto____1;
return cljs$core$async$state_machine__15376__auto__;
})()
})();
var state__15504__auto__ = (function (){var statearr_17583 = (f__15503__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15503__auto__.cljs$core$IFn$_invoke$arity$0() : f__15503__auto__.call(null));
(statearr_17583[(6)] = c__15502__auto___17585);

return statearr_17583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15504__auto__);
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
var process = (function (p__17603){
var vec__17604 = p__17603;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17604,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17604,(1),null);
var job = vec__17604;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15502__auto___17780 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15503__auto__ = (function (){var switch__15375__auto__ = (function (state_17611){
var state_val_17612 = (state_17611[(1)]);
if((state_val_17612 === (1))){
var state_17611__$1 = state_17611;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17611__$1,(2),res,v);
} else {
if((state_val_17612 === (2))){
var inst_17608 = (state_17611[(2)]);
var inst_17609 = cljs.core.async.close_BANG_(res);
var state_17611__$1 = (function (){var statearr_17613 = state_17611;
(statearr_17613[(7)] = inst_17608);

return statearr_17613;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17611__$1,inst_17609);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15376__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15376__auto____0 = (function (){
var statearr_17614 = [null,null,null,null,null,null,null,null];
(statearr_17614[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15376__auto__);

(statearr_17614[(1)] = (1));

return statearr_17614;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15376__auto____1 = (function (state_17611){
while(true){
var ret_value__15377__auto__ = (function (){try{while(true){
var result__15378__auto__ = switch__15375__auto__(state_17611);
if(cljs.core.keyword_identical_QMARK_(result__15378__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15378__auto__;
}
break;
}
}catch (e17615){var ex__15379__auto__ = e17615;
var statearr_17616_17781 = state_17611;
(statearr_17616_17781[(2)] = ex__15379__auto__);


if(cljs.core.seq((state_17611[(4)]))){
var statearr_17617_17782 = state_17611;
(statearr_17617_17782[(1)] = cljs.core.first((state_17611[(4)])));

} else {
throw ex__15379__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15377__auto__,cljs.core.cst$kw$recur)){
var G__17783 = state_17611;
state_17611 = G__17783;
continue;
} else {
return ret_value__15377__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15376__auto__ = function(state_17611){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15376__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15376__auto____1.call(this,state_17611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15376__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15376__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15376__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15376__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15376__auto__;
})()
})();
var state__15504__auto__ = (function (){var statearr_17618 = (f__15503__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15503__auto__.cljs$core$IFn$_invoke$arity$0() : f__15503__auto__.call(null));
(statearr_17618[(6)] = c__15502__auto___17780);

return statearr_17618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15504__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__17619){
var vec__17620 = p__17619;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17620,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17620,(1),null);
var job = vec__17620;
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
var n__4613__auto___17784 = n;
var __17785 = (0);
while(true){
if((__17785 < n__4613__auto___17784)){
var G__17623_17786 = type;
var G__17623_17787__$1 = (((G__17623_17786 instanceof cljs.core.Keyword))?G__17623_17786.fqn:null);
switch (G__17623_17787__$1) {
case "compute":
var c__15502__auto___17789 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17785,c__15502__auto___17789,G__17623_17786,G__17623_17787__$1,n__4613__auto___17784,jobs,results,process,async){
return (function (){
var f__15503__auto__ = (function (){var switch__15375__auto__ = ((function (__17785,c__15502__auto___17789,G__17623_17786,G__17623_17787__$1,n__4613__auto___17784,jobs,results,process,async){
return (function (state_17636){
var state_val_17637 = (state_17636[(1)]);
if((state_val_17637 === (1))){
var state_17636__$1 = state_17636;
var statearr_17638_17790 = state_17636__$1;
(statearr_17638_17790[(2)] = null);

(statearr_17638_17790[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17637 === (2))){
var state_17636__$1 = state_17636;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17636__$1,(4),jobs);
} else {
if((state_val_17637 === (3))){
var inst_17634 = (state_17636[(2)]);
var state_17636__$1 = state_17636;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17636__$1,inst_17634);
} else {
if((state_val_17637 === (4))){
var inst_17626 = (state_17636[(2)]);
var inst_17627 = process(inst_17626);
var state_17636__$1 = state_17636;
if(cljs.core.truth_(inst_17627)){
var statearr_17639_17791 = state_17636__$1;
(statearr_17639_17791[(1)] = (5));

} else {
var statearr_17640_17792 = state_17636__$1;
(statearr_17640_17792[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17637 === (5))){
var state_17636__$1 = state_17636;
var statearr_17641_17793 = state_17636__$1;
(statearr_17641_17793[(2)] = null);

(statearr_17641_17793[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17637 === (6))){
var state_17636__$1 = state_17636;
var statearr_17642_17794 = state_17636__$1;
(statearr_17642_17794[(2)] = null);

(statearr_17642_17794[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17637 === (7))){
var inst_17632 = (state_17636[(2)]);
var state_17636__$1 = state_17636;
var statearr_17643_17795 = state_17636__$1;
(statearr_17643_17795[(2)] = inst_17632);

(statearr_17643_17795[(1)] = (3));


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
});})(__17785,c__15502__auto___17789,G__17623_17786,G__17623_17787__$1,n__4613__auto___17784,jobs,results,process,async))
;
return ((function (__17785,switch__15375__auto__,c__15502__auto___17789,G__17623_17786,G__17623_17787__$1,n__4613__auto___17784,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15376__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15376__auto____0 = (function (){
var statearr_17644 = [null,null,null,null,null,null,null];
(statearr_17644[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15376__auto__);

(statearr_17644[(1)] = (1));

return statearr_17644;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15376__auto____1 = (function (state_17636){
while(true){
var ret_value__15377__auto__ = (function (){try{while(true){
var result__15378__auto__ = switch__15375__auto__(state_17636);
if(cljs.core.keyword_identical_QMARK_(result__15378__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15378__auto__;
}
break;
}
}catch (e17645){var ex__15379__auto__ = e17645;
var statearr_17646_17796 = state_17636;
(statearr_17646_17796[(2)] = ex__15379__auto__);


if(cljs.core.seq((state_17636[(4)]))){
var statearr_17647_17797 = state_17636;
(statearr_17647_17797[(1)] = cljs.core.first((state_17636[(4)])));

} else {
throw ex__15379__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15377__auto__,cljs.core.cst$kw$recur)){
var G__17798 = state_17636;
state_17636 = G__17798;
continue;
} else {
return ret_value__15377__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15376__auto__ = function(state_17636){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15376__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15376__auto____1.call(this,state_17636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15376__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15376__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15376__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15376__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15376__auto__;
})()
;})(__17785,switch__15375__auto__,c__15502__auto___17789,G__17623_17786,G__17623_17787__$1,n__4613__auto___17784,jobs,results,process,async))
})();
var state__15504__auto__ = (function (){var statearr_17648 = (f__15503__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15503__auto__.cljs$core$IFn$_invoke$arity$0() : f__15503__auto__.call(null));
(statearr_17648[(6)] = c__15502__auto___17789);

return statearr_17648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15504__auto__);
});})(__17785,c__15502__auto___17789,G__17623_17786,G__17623_17787__$1,n__4613__auto___17784,jobs,results,process,async))
);


break;
case "async":
var c__15502__auto___17799 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17785,c__15502__auto___17799,G__17623_17786,G__17623_17787__$1,n__4613__auto___17784,jobs,results,process,async){
return (function (){
var f__15503__auto__ = (function (){var switch__15375__auto__ = ((function (__17785,c__15502__auto___17799,G__17623_17786,G__17623_17787__$1,n__4613__auto___17784,jobs,results,process,async){
return (function (state_17661){
var state_val_17662 = (state_17661[(1)]);
if((state_val_17662 === (1))){
var state_17661__$1 = state_17661;
var statearr_17663_17800 = state_17661__$1;
(statearr_17663_17800[(2)] = null);

(statearr_17663_17800[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17662 === (2))){
var state_17661__$1 = state_17661;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17661__$1,(4),jobs);
} else {
if((state_val_17662 === (3))){
var inst_17659 = (state_17661[(2)]);
var state_17661__$1 = state_17661;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17661__$1,inst_17659);
} else {
if((state_val_17662 === (4))){
var inst_17651 = (state_17661[(2)]);
var inst_17652 = async(inst_17651);
var state_17661__$1 = state_17661;
if(cljs.core.truth_(inst_17652)){
var statearr_17664_17801 = state_17661__$1;
(statearr_17664_17801[(1)] = (5));

} else {
var statearr_17665_17802 = state_17661__$1;
(statearr_17665_17802[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17662 === (5))){
var state_17661__$1 = state_17661;
var statearr_17666_17803 = state_17661__$1;
(statearr_17666_17803[(2)] = null);

(statearr_17666_17803[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17662 === (6))){
var state_17661__$1 = state_17661;
var statearr_17667_17804 = state_17661__$1;
(statearr_17667_17804[(2)] = null);

(statearr_17667_17804[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17662 === (7))){
var inst_17657 = (state_17661[(2)]);
var state_17661__$1 = state_17661;
var statearr_17668_17805 = state_17661__$1;
(statearr_17668_17805[(2)] = inst_17657);

(statearr_17668_17805[(1)] = (3));


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
});})(__17785,c__15502__auto___17799,G__17623_17786,G__17623_17787__$1,n__4613__auto___17784,jobs,results,process,async))
;
return ((function (__17785,switch__15375__auto__,c__15502__auto___17799,G__17623_17786,G__17623_17787__$1,n__4613__auto___17784,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15376__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15376__auto____0 = (function (){
var statearr_17669 = [null,null,null,null,null,null,null];
(statearr_17669[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15376__auto__);

(statearr_17669[(1)] = (1));

return statearr_17669;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15376__auto____1 = (function (state_17661){
while(true){
var ret_value__15377__auto__ = (function (){try{while(true){
var result__15378__auto__ = switch__15375__auto__(state_17661);
if(cljs.core.keyword_identical_QMARK_(result__15378__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15378__auto__;
}
break;
}
}catch (e17670){var ex__15379__auto__ = e17670;
var statearr_17671_17806 = state_17661;
(statearr_17671_17806[(2)] = ex__15379__auto__);


if(cljs.core.seq((state_17661[(4)]))){
var statearr_17672_17807 = state_17661;
(statearr_17672_17807[(1)] = cljs.core.first((state_17661[(4)])));

} else {
throw ex__15379__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15377__auto__,cljs.core.cst$kw$recur)){
var G__17808 = state_17661;
state_17661 = G__17808;
continue;
} else {
return ret_value__15377__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15376__auto__ = function(state_17661){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15376__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15376__auto____1.call(this,state_17661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15376__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15376__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15376__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15376__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15376__auto__;
})()
;})(__17785,switch__15375__auto__,c__15502__auto___17799,G__17623_17786,G__17623_17787__$1,n__4613__auto___17784,jobs,results,process,async))
})();
var state__15504__auto__ = (function (){var statearr_17673 = (f__15503__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15503__auto__.cljs$core$IFn$_invoke$arity$0() : f__15503__auto__.call(null));
(statearr_17673[(6)] = c__15502__auto___17799);

return statearr_17673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15504__auto__);
});})(__17785,c__15502__auto___17799,G__17623_17786,G__17623_17787__$1,n__4613__auto___17784,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17623_17787__$1)].join('')));

}

var G__17809 = (__17785 + (1));
__17785 = G__17809;
continue;
} else {
}
break;
}

var c__15502__auto___17810 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15503__auto__ = (function (){var switch__15375__auto__ = (function (state_17695){
var state_val_17696 = (state_17695[(1)]);
if((state_val_17696 === (7))){
var inst_17691 = (state_17695[(2)]);
var state_17695__$1 = state_17695;
var statearr_17697_17811 = state_17695__$1;
(statearr_17697_17811[(2)] = inst_17691);

(statearr_17697_17811[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17696 === (1))){
var state_17695__$1 = state_17695;
var statearr_17698_17812 = state_17695__$1;
(statearr_17698_17812[(2)] = null);

(statearr_17698_17812[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17696 === (4))){
var inst_17676 = (state_17695[(7)]);
var inst_17676__$1 = (state_17695[(2)]);
var inst_17677 = (inst_17676__$1 == null);
var state_17695__$1 = (function (){var statearr_17699 = state_17695;
(statearr_17699[(7)] = inst_17676__$1);

return statearr_17699;
})();
if(cljs.core.truth_(inst_17677)){
var statearr_17700_17813 = state_17695__$1;
(statearr_17700_17813[(1)] = (5));

} else {
var statearr_17701_17814 = state_17695__$1;
(statearr_17701_17814[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17696 === (6))){
var inst_17681 = (state_17695[(8)]);
var inst_17676 = (state_17695[(7)]);
var inst_17681__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_17682 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17683 = [inst_17676,inst_17681__$1];
var inst_17684 = (new cljs.core.PersistentVector(null,2,(5),inst_17682,inst_17683,null));
var state_17695__$1 = (function (){var statearr_17702 = state_17695;
(statearr_17702[(8)] = inst_17681__$1);

return statearr_17702;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17695__$1,(8),jobs,inst_17684);
} else {
if((state_val_17696 === (3))){
var inst_17693 = (state_17695[(2)]);
var state_17695__$1 = state_17695;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17695__$1,inst_17693);
} else {
if((state_val_17696 === (2))){
var state_17695__$1 = state_17695;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17695__$1,(4),from);
} else {
if((state_val_17696 === (9))){
var inst_17688 = (state_17695[(2)]);
var state_17695__$1 = (function (){var statearr_17703 = state_17695;
(statearr_17703[(9)] = inst_17688);

return statearr_17703;
})();
var statearr_17704_17815 = state_17695__$1;
(statearr_17704_17815[(2)] = null);

(statearr_17704_17815[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17696 === (5))){
var inst_17679 = cljs.core.async.close_BANG_(jobs);
var state_17695__$1 = state_17695;
var statearr_17705_17816 = state_17695__$1;
(statearr_17705_17816[(2)] = inst_17679);

(statearr_17705_17816[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17696 === (8))){
var inst_17681 = (state_17695[(8)]);
var inst_17686 = (state_17695[(2)]);
var state_17695__$1 = (function (){var statearr_17706 = state_17695;
(statearr_17706[(10)] = inst_17686);

return statearr_17706;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17695__$1,(9),results,inst_17681);
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
var cljs$core$async$pipeline_STAR__$_state_machine__15376__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15376__auto____0 = (function (){
var statearr_17707 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17707[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15376__auto__);

(statearr_17707[(1)] = (1));

return statearr_17707;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15376__auto____1 = (function (state_17695){
while(true){
var ret_value__15377__auto__ = (function (){try{while(true){
var result__15378__auto__ = switch__15375__auto__(state_17695);
if(cljs.core.keyword_identical_QMARK_(result__15378__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15378__auto__;
}
break;
}
}catch (e17708){var ex__15379__auto__ = e17708;
var statearr_17709_17817 = state_17695;
(statearr_17709_17817[(2)] = ex__15379__auto__);


if(cljs.core.seq((state_17695[(4)]))){
var statearr_17710_17818 = state_17695;
(statearr_17710_17818[(1)] = cljs.core.first((state_17695[(4)])));

} else {
throw ex__15379__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15377__auto__,cljs.core.cst$kw$recur)){
var G__17819 = state_17695;
state_17695 = G__17819;
continue;
} else {
return ret_value__15377__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15376__auto__ = function(state_17695){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15376__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15376__auto____1.call(this,state_17695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15376__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15376__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15376__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15376__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15376__auto__;
})()
})();
var state__15504__auto__ = (function (){var statearr_17711 = (f__15503__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15503__auto__.cljs$core$IFn$_invoke$arity$0() : f__15503__auto__.call(null));
(statearr_17711[(6)] = c__15502__auto___17810);

return statearr_17711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15504__auto__);
}));


var c__15502__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15503__auto__ = (function (){var switch__15375__auto__ = (function (state_17749){
var state_val_17750 = (state_17749[(1)]);
if((state_val_17750 === (7))){
var inst_17745 = (state_17749[(2)]);
var state_17749__$1 = state_17749;
var statearr_17751_17820 = state_17749__$1;
(statearr_17751_17820[(2)] = inst_17745);

(statearr_17751_17820[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17750 === (20))){
var state_17749__$1 = state_17749;
var statearr_17752_17821 = state_17749__$1;
(statearr_17752_17821[(2)] = null);

(statearr_17752_17821[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17750 === (1))){
var state_17749__$1 = state_17749;
var statearr_17753_17822 = state_17749__$1;
(statearr_17753_17822[(2)] = null);

(statearr_17753_17822[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17750 === (4))){
var inst_17714 = (state_17749[(7)]);
var inst_17714__$1 = (state_17749[(2)]);
var inst_17715 = (inst_17714__$1 == null);
var state_17749__$1 = (function (){var statearr_17754 = state_17749;
(statearr_17754[(7)] = inst_17714__$1);

return statearr_17754;
})();
if(cljs.core.truth_(inst_17715)){
var statearr_17755_17823 = state_17749__$1;
(statearr_17755_17823[(1)] = (5));

} else {
var statearr_17756_17824 = state_17749__$1;
(statearr_17756_17824[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17750 === (15))){
var inst_17727 = (state_17749[(8)]);
var state_17749__$1 = state_17749;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17749__$1,(18),to,inst_17727);
} else {
if((state_val_17750 === (21))){
var inst_17740 = (state_17749[(2)]);
var state_17749__$1 = state_17749;
var statearr_17757_17825 = state_17749__$1;
(statearr_17757_17825[(2)] = inst_17740);

(statearr_17757_17825[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17750 === (13))){
var inst_17742 = (state_17749[(2)]);
var state_17749__$1 = (function (){var statearr_17758 = state_17749;
(statearr_17758[(9)] = inst_17742);

return statearr_17758;
})();
var statearr_17759_17826 = state_17749__$1;
(statearr_17759_17826[(2)] = null);

(statearr_17759_17826[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17750 === (6))){
var inst_17714 = (state_17749[(7)]);
var state_17749__$1 = state_17749;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17749__$1,(11),inst_17714);
} else {
if((state_val_17750 === (17))){
var inst_17735 = (state_17749[(2)]);
var state_17749__$1 = state_17749;
if(cljs.core.truth_(inst_17735)){
var statearr_17760_17827 = state_17749__$1;
(statearr_17760_17827[(1)] = (19));

} else {
var statearr_17761_17828 = state_17749__$1;
(statearr_17761_17828[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17750 === (3))){
var inst_17747 = (state_17749[(2)]);
var state_17749__$1 = state_17749;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17749__$1,inst_17747);
} else {
if((state_val_17750 === (12))){
var inst_17724 = (state_17749[(10)]);
var state_17749__$1 = state_17749;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17749__$1,(14),inst_17724);
} else {
if((state_val_17750 === (2))){
var state_17749__$1 = state_17749;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17749__$1,(4),results);
} else {
if((state_val_17750 === (19))){
var state_17749__$1 = state_17749;
var statearr_17762_17829 = state_17749__$1;
(statearr_17762_17829[(2)] = null);

(statearr_17762_17829[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17750 === (11))){
var inst_17724 = (state_17749[(2)]);
var state_17749__$1 = (function (){var statearr_17763 = state_17749;
(statearr_17763[(10)] = inst_17724);

return statearr_17763;
})();
var statearr_17764_17830 = state_17749__$1;
(statearr_17764_17830[(2)] = null);

(statearr_17764_17830[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17750 === (9))){
var state_17749__$1 = state_17749;
var statearr_17765_17831 = state_17749__$1;
(statearr_17765_17831[(2)] = null);

(statearr_17765_17831[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17750 === (5))){
var state_17749__$1 = state_17749;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17766_17832 = state_17749__$1;
(statearr_17766_17832[(1)] = (8));

} else {
var statearr_17767_17833 = state_17749__$1;
(statearr_17767_17833[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17750 === (14))){
var inst_17727 = (state_17749[(8)]);
var inst_17727__$1 = (state_17749[(2)]);
var inst_17728 = (inst_17727__$1 == null);
var inst_17729 = cljs.core.not(inst_17728);
var state_17749__$1 = (function (){var statearr_17768 = state_17749;
(statearr_17768[(8)] = inst_17727__$1);

return statearr_17768;
})();
if(inst_17729){
var statearr_17769_17834 = state_17749__$1;
(statearr_17769_17834[(1)] = (15));

} else {
var statearr_17770_17835 = state_17749__$1;
(statearr_17770_17835[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17750 === (16))){
var state_17749__$1 = state_17749;
var statearr_17771_17836 = state_17749__$1;
(statearr_17771_17836[(2)] = false);

(statearr_17771_17836[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17750 === (10))){
var inst_17721 = (state_17749[(2)]);
var state_17749__$1 = state_17749;
var statearr_17772_17837 = state_17749__$1;
(statearr_17772_17837[(2)] = inst_17721);

(statearr_17772_17837[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17750 === (18))){
var inst_17732 = (state_17749[(2)]);
var state_17749__$1 = state_17749;
var statearr_17773_17838 = state_17749__$1;
(statearr_17773_17838[(2)] = inst_17732);

(statearr_17773_17838[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17750 === (8))){
var inst_17718 = cljs.core.async.close_BANG_(to);
var state_17749__$1 = state_17749;
var statearr_17774_17839 = state_17749__$1;
(statearr_17774_17839[(2)] = inst_17718);

(statearr_17774_17839[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__15376__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15376__auto____0 = (function (){
var statearr_17775 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17775[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15376__auto__);

(statearr_17775[(1)] = (1));

return statearr_17775;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15376__auto____1 = (function (state_17749){
while(true){
var ret_value__15377__auto__ = (function (){try{while(true){
var result__15378__auto__ = switch__15375__auto__(state_17749);
if(cljs.core.keyword_identical_QMARK_(result__15378__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15378__auto__;
}
break;
}
}catch (e17776){var ex__15379__auto__ = e17776;
var statearr_17777_17840 = state_17749;
(statearr_17777_17840[(2)] = ex__15379__auto__);


if(cljs.core.seq((state_17749[(4)]))){
var statearr_17778_17841 = state_17749;
(statearr_17778_17841[(1)] = cljs.core.first((state_17749[(4)])));

} else {
throw ex__15379__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15377__auto__,cljs.core.cst$kw$recur)){
var G__17842 = state_17749;
state_17749 = G__17842;
continue;
} else {
return ret_value__15377__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15376__auto__ = function(state_17749){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15376__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15376__auto____1.call(this,state_17749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15376__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15376__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15376__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15376__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15376__auto__;
})()
})();
var state__15504__auto__ = (function (){var statearr_17779 = (f__15503__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15503__auto__.cljs$core$IFn$_invoke$arity$0() : f__15503__auto__.call(null));
(statearr_17779[(6)] = c__15502__auto__);

return statearr_17779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15504__auto__);
}));

return c__15502__auto__;
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
var G__17844 = arguments.length;
switch (G__17844) {
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
var G__17847 = arguments.length;
switch (G__17847) {
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
var G__17850 = arguments.length;
switch (G__17850) {
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
var c__15502__auto___17900 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15503__auto__ = (function (){var switch__15375__auto__ = (function (state_17876){
var state_val_17877 = (state_17876[(1)]);
if((state_val_17877 === (7))){
var inst_17872 = (state_17876[(2)]);
var state_17876__$1 = state_17876;
var statearr_17878_17901 = state_17876__$1;
(statearr_17878_17901[(2)] = inst_17872);

(statearr_17878_17901[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17877 === (1))){
var state_17876__$1 = state_17876;
var statearr_17879_17902 = state_17876__$1;
(statearr_17879_17902[(2)] = null);

(statearr_17879_17902[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17877 === (4))){
var inst_17853 = (state_17876[(7)]);
var inst_17853__$1 = (state_17876[(2)]);
var inst_17854 = (inst_17853__$1 == null);
var state_17876__$1 = (function (){var statearr_17880 = state_17876;
(statearr_17880[(7)] = inst_17853__$1);

return statearr_17880;
})();
if(cljs.core.truth_(inst_17854)){
var statearr_17881_17903 = state_17876__$1;
(statearr_17881_17903[(1)] = (5));

} else {
var statearr_17882_17904 = state_17876__$1;
(statearr_17882_17904[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17877 === (13))){
var state_17876__$1 = state_17876;
var statearr_17883_17905 = state_17876__$1;
(statearr_17883_17905[(2)] = null);

(statearr_17883_17905[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17877 === (6))){
var inst_17853 = (state_17876[(7)]);
var inst_17859 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17853) : p.call(null,inst_17853));
var state_17876__$1 = state_17876;
if(cljs.core.truth_(inst_17859)){
var statearr_17884_17906 = state_17876__$1;
(statearr_17884_17906[(1)] = (9));

} else {
var statearr_17885_17907 = state_17876__$1;
(statearr_17885_17907[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17877 === (3))){
var inst_17874 = (state_17876[(2)]);
var state_17876__$1 = state_17876;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17876__$1,inst_17874);
} else {
if((state_val_17877 === (12))){
var state_17876__$1 = state_17876;
var statearr_17886_17908 = state_17876__$1;
(statearr_17886_17908[(2)] = null);

(statearr_17886_17908[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17877 === (2))){
var state_17876__$1 = state_17876;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17876__$1,(4),ch);
} else {
if((state_val_17877 === (11))){
var inst_17853 = (state_17876[(7)]);
var inst_17863 = (state_17876[(2)]);
var state_17876__$1 = state_17876;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17876__$1,(8),inst_17863,inst_17853);
} else {
if((state_val_17877 === (9))){
var state_17876__$1 = state_17876;
var statearr_17887_17909 = state_17876__$1;
(statearr_17887_17909[(2)] = tc);

(statearr_17887_17909[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17877 === (5))){
var inst_17856 = cljs.core.async.close_BANG_(tc);
var inst_17857 = cljs.core.async.close_BANG_(fc);
var state_17876__$1 = (function (){var statearr_17888 = state_17876;
(statearr_17888[(8)] = inst_17856);

return statearr_17888;
})();
var statearr_17889_17910 = state_17876__$1;
(statearr_17889_17910[(2)] = inst_17857);

(statearr_17889_17910[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17877 === (14))){
var inst_17870 = (state_17876[(2)]);
var state_17876__$1 = state_17876;
var statearr_17890_17911 = state_17876__$1;
(statearr_17890_17911[(2)] = inst_17870);

(statearr_17890_17911[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17877 === (10))){
var state_17876__$1 = state_17876;
var statearr_17891_17912 = state_17876__$1;
(statearr_17891_17912[(2)] = fc);

(statearr_17891_17912[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17877 === (8))){
var inst_17865 = (state_17876[(2)]);
var state_17876__$1 = state_17876;
if(cljs.core.truth_(inst_17865)){
var statearr_17892_17913 = state_17876__$1;
(statearr_17892_17913[(1)] = (12));

} else {
var statearr_17893_17914 = state_17876__$1;
(statearr_17893_17914[(1)] = (13));

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
var cljs$core$async$state_machine__15376__auto__ = null;
var cljs$core$async$state_machine__15376__auto____0 = (function (){
var statearr_17894 = [null,null,null,null,null,null,null,null,null];
(statearr_17894[(0)] = cljs$core$async$state_machine__15376__auto__);

(statearr_17894[(1)] = (1));

return statearr_17894;
});
var cljs$core$async$state_machine__15376__auto____1 = (function (state_17876){
while(true){
var ret_value__15377__auto__ = (function (){try{while(true){
var result__15378__auto__ = switch__15375__auto__(state_17876);
if(cljs.core.keyword_identical_QMARK_(result__15378__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15378__auto__;
}
break;
}
}catch (e17895){var ex__15379__auto__ = e17895;
var statearr_17896_17915 = state_17876;
(statearr_17896_17915[(2)] = ex__15379__auto__);


if(cljs.core.seq((state_17876[(4)]))){
var statearr_17897_17916 = state_17876;
(statearr_17897_17916[(1)] = cljs.core.first((state_17876[(4)])));

} else {
throw ex__15379__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15377__auto__,cljs.core.cst$kw$recur)){
var G__17917 = state_17876;
state_17876 = G__17917;
continue;
} else {
return ret_value__15377__auto__;
}
break;
}
});
cljs$core$async$state_machine__15376__auto__ = function(state_17876){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15376__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15376__auto____1.call(this,state_17876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15376__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15376__auto____0;
cljs$core$async$state_machine__15376__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15376__auto____1;
return cljs$core$async$state_machine__15376__auto__;
})()
})();
var state__15504__auto__ = (function (){var statearr_17898 = (f__15503__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15503__auto__.cljs$core$IFn$_invoke$arity$0() : f__15503__auto__.call(null));
(statearr_17898[(6)] = c__15502__auto___17900);

return statearr_17898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15504__auto__);
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
var c__15502__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15503__auto__ = (function (){var switch__15375__auto__ = (function (state_17939){
var state_val_17940 = (state_17939[(1)]);
if((state_val_17940 === (7))){
var inst_17935 = (state_17939[(2)]);
var state_17939__$1 = state_17939;
var statearr_17941_17960 = state_17939__$1;
(statearr_17941_17960[(2)] = inst_17935);

(statearr_17941_17960[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17940 === (1))){
var inst_17918 = init;
var inst_17919 = inst_17918;
var state_17939__$1 = (function (){var statearr_17942 = state_17939;
(statearr_17942[(7)] = inst_17919);

return statearr_17942;
})();
var statearr_17943_17961 = state_17939__$1;
(statearr_17943_17961[(2)] = null);

(statearr_17943_17961[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17940 === (4))){
var inst_17922 = (state_17939[(8)]);
var inst_17922__$1 = (state_17939[(2)]);
var inst_17923 = (inst_17922__$1 == null);
var state_17939__$1 = (function (){var statearr_17944 = state_17939;
(statearr_17944[(8)] = inst_17922__$1);

return statearr_17944;
})();
if(cljs.core.truth_(inst_17923)){
var statearr_17945_17962 = state_17939__$1;
(statearr_17945_17962[(1)] = (5));

} else {
var statearr_17946_17963 = state_17939__$1;
(statearr_17946_17963[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17940 === (6))){
var inst_17919 = (state_17939[(7)]);
var inst_17926 = (state_17939[(9)]);
var inst_17922 = (state_17939[(8)]);
var inst_17926__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_17919,inst_17922) : f.call(null,inst_17919,inst_17922));
var inst_17927 = cljs.core.reduced_QMARK_(inst_17926__$1);
var state_17939__$1 = (function (){var statearr_17947 = state_17939;
(statearr_17947[(9)] = inst_17926__$1);

return statearr_17947;
})();
if(inst_17927){
var statearr_17948_17964 = state_17939__$1;
(statearr_17948_17964[(1)] = (8));

} else {
var statearr_17949_17965 = state_17939__$1;
(statearr_17949_17965[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17940 === (3))){
var inst_17937 = (state_17939[(2)]);
var state_17939__$1 = state_17939;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17939__$1,inst_17937);
} else {
if((state_val_17940 === (2))){
var state_17939__$1 = state_17939;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17939__$1,(4),ch);
} else {
if((state_val_17940 === (9))){
var inst_17926 = (state_17939[(9)]);
var inst_17919 = inst_17926;
var state_17939__$1 = (function (){var statearr_17950 = state_17939;
(statearr_17950[(7)] = inst_17919);

return statearr_17950;
})();
var statearr_17951_17966 = state_17939__$1;
(statearr_17951_17966[(2)] = null);

(statearr_17951_17966[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17940 === (5))){
var inst_17919 = (state_17939[(7)]);
var state_17939__$1 = state_17939;
var statearr_17952_17967 = state_17939__$1;
(statearr_17952_17967[(2)] = inst_17919);

(statearr_17952_17967[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17940 === (10))){
var inst_17933 = (state_17939[(2)]);
var state_17939__$1 = state_17939;
var statearr_17953_17968 = state_17939__$1;
(statearr_17953_17968[(2)] = inst_17933);

(statearr_17953_17968[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17940 === (8))){
var inst_17926 = (state_17939[(9)]);
var inst_17929 = cljs.core.deref(inst_17926);
var state_17939__$1 = state_17939;
var statearr_17954_17969 = state_17939__$1;
(statearr_17954_17969[(2)] = inst_17929);

(statearr_17954_17969[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__15376__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15376__auto____0 = (function (){
var statearr_17955 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17955[(0)] = cljs$core$async$reduce_$_state_machine__15376__auto__);

(statearr_17955[(1)] = (1));

return statearr_17955;
});
var cljs$core$async$reduce_$_state_machine__15376__auto____1 = (function (state_17939){
while(true){
var ret_value__15377__auto__ = (function (){try{while(true){
var result__15378__auto__ = switch__15375__auto__(state_17939);
if(cljs.core.keyword_identical_QMARK_(result__15378__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15378__auto__;
}
break;
}
}catch (e17956){var ex__15379__auto__ = e17956;
var statearr_17957_17970 = state_17939;
(statearr_17957_17970[(2)] = ex__15379__auto__);


if(cljs.core.seq((state_17939[(4)]))){
var statearr_17958_17971 = state_17939;
(statearr_17958_17971[(1)] = cljs.core.first((state_17939[(4)])));

} else {
throw ex__15379__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15377__auto__,cljs.core.cst$kw$recur)){
var G__17972 = state_17939;
state_17939 = G__17972;
continue;
} else {
return ret_value__15377__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15376__auto__ = function(state_17939){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15376__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15376__auto____1.call(this,state_17939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15376__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15376__auto____0;
cljs$core$async$reduce_$_state_machine__15376__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15376__auto____1;
return cljs$core$async$reduce_$_state_machine__15376__auto__;
})()
})();
var state__15504__auto__ = (function (){var statearr_17959 = (f__15503__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15503__auto__.cljs$core$IFn$_invoke$arity$0() : f__15503__auto__.call(null));
(statearr_17959[(6)] = c__15502__auto__);

return statearr_17959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15504__auto__);
}));

return c__15502__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__15502__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15503__auto__ = (function (){var switch__15375__auto__ = (function (state_17978){
var state_val_17979 = (state_17978[(1)]);
if((state_val_17979 === (1))){
var inst_17973 = cljs.core.async.reduce(f__$1,init,ch);
var state_17978__$1 = state_17978;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17978__$1,(2),inst_17973);
} else {
if((state_val_17979 === (2))){
var inst_17975 = (state_17978[(2)]);
var inst_17976 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_17975) : f__$1.call(null,inst_17975));
var state_17978__$1 = state_17978;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17978__$1,inst_17976);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__15376__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15376__auto____0 = (function (){
var statearr_17980 = [null,null,null,null,null,null,null];
(statearr_17980[(0)] = cljs$core$async$transduce_$_state_machine__15376__auto__);

(statearr_17980[(1)] = (1));

return statearr_17980;
});
var cljs$core$async$transduce_$_state_machine__15376__auto____1 = (function (state_17978){
while(true){
var ret_value__15377__auto__ = (function (){try{while(true){
var result__15378__auto__ = switch__15375__auto__(state_17978);
if(cljs.core.keyword_identical_QMARK_(result__15378__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15378__auto__;
}
break;
}
}catch (e17981){var ex__15379__auto__ = e17981;
var statearr_17982_17985 = state_17978;
(statearr_17982_17985[(2)] = ex__15379__auto__);


if(cljs.core.seq((state_17978[(4)]))){
var statearr_17983_17986 = state_17978;
(statearr_17983_17986[(1)] = cljs.core.first((state_17978[(4)])));

} else {
throw ex__15379__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15377__auto__,cljs.core.cst$kw$recur)){
var G__17987 = state_17978;
state_17978 = G__17987;
continue;
} else {
return ret_value__15377__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15376__auto__ = function(state_17978){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15376__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15376__auto____1.call(this,state_17978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__15376__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15376__auto____0;
cljs$core$async$transduce_$_state_machine__15376__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15376__auto____1;
return cljs$core$async$transduce_$_state_machine__15376__auto__;
})()
})();
var state__15504__auto__ = (function (){var statearr_17984 = (f__15503__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15503__auto__.cljs$core$IFn$_invoke$arity$0() : f__15503__auto__.call(null));
(statearr_17984[(6)] = c__15502__auto__);

return statearr_17984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15504__auto__);
}));

return c__15502__auto__;
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
var G__17989 = arguments.length;
switch (G__17989) {
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
var c__15502__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15503__auto__ = (function (){var switch__15375__auto__ = (function (state_18014){
var state_val_18015 = (state_18014[(1)]);
if((state_val_18015 === (7))){
var inst_17996 = (state_18014[(2)]);
var state_18014__$1 = state_18014;
var statearr_18016_18038 = state_18014__$1;
(statearr_18016_18038[(2)] = inst_17996);

(statearr_18016_18038[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18015 === (1))){
var inst_17990 = cljs.core.seq(coll);
var inst_17991 = inst_17990;
var state_18014__$1 = (function (){var statearr_18017 = state_18014;
(statearr_18017[(7)] = inst_17991);

return statearr_18017;
})();
var statearr_18018_18039 = state_18014__$1;
(statearr_18018_18039[(2)] = null);

(statearr_18018_18039[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18015 === (4))){
var inst_17991 = (state_18014[(7)]);
var inst_17994 = cljs.core.first(inst_17991);
var state_18014__$1 = state_18014;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18014__$1,(7),ch,inst_17994);
} else {
if((state_val_18015 === (13))){
var inst_18008 = (state_18014[(2)]);
var state_18014__$1 = state_18014;
var statearr_18019_18040 = state_18014__$1;
(statearr_18019_18040[(2)] = inst_18008);

(statearr_18019_18040[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18015 === (6))){
var inst_17999 = (state_18014[(2)]);
var state_18014__$1 = state_18014;
if(cljs.core.truth_(inst_17999)){
var statearr_18020_18041 = state_18014__$1;
(statearr_18020_18041[(1)] = (8));

} else {
var statearr_18021_18042 = state_18014__$1;
(statearr_18021_18042[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18015 === (3))){
var inst_18012 = (state_18014[(2)]);
var state_18014__$1 = state_18014;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18014__$1,inst_18012);
} else {
if((state_val_18015 === (12))){
var state_18014__$1 = state_18014;
var statearr_18022_18043 = state_18014__$1;
(statearr_18022_18043[(2)] = null);

(statearr_18022_18043[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18015 === (2))){
var inst_17991 = (state_18014[(7)]);
var state_18014__$1 = state_18014;
if(cljs.core.truth_(inst_17991)){
var statearr_18023_18044 = state_18014__$1;
(statearr_18023_18044[(1)] = (4));

} else {
var statearr_18024_18045 = state_18014__$1;
(statearr_18024_18045[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18015 === (11))){
var inst_18005 = cljs.core.async.close_BANG_(ch);
var state_18014__$1 = state_18014;
var statearr_18025_18046 = state_18014__$1;
(statearr_18025_18046[(2)] = inst_18005);

(statearr_18025_18046[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18015 === (9))){
var state_18014__$1 = state_18014;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18026_18047 = state_18014__$1;
(statearr_18026_18047[(1)] = (11));

} else {
var statearr_18027_18048 = state_18014__$1;
(statearr_18027_18048[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18015 === (5))){
var inst_17991 = (state_18014[(7)]);
var state_18014__$1 = state_18014;
var statearr_18028_18049 = state_18014__$1;
(statearr_18028_18049[(2)] = inst_17991);

(statearr_18028_18049[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18015 === (10))){
var inst_18010 = (state_18014[(2)]);
var state_18014__$1 = state_18014;
var statearr_18029_18050 = state_18014__$1;
(statearr_18029_18050[(2)] = inst_18010);

(statearr_18029_18050[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18015 === (8))){
var inst_17991 = (state_18014[(7)]);
var inst_18001 = cljs.core.next(inst_17991);
var inst_17991__$1 = inst_18001;
var state_18014__$1 = (function (){var statearr_18030 = state_18014;
(statearr_18030[(7)] = inst_17991__$1);

return statearr_18030;
})();
var statearr_18031_18051 = state_18014__$1;
(statearr_18031_18051[(2)] = null);

(statearr_18031_18051[(1)] = (2));


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
var cljs$core$async$state_machine__15376__auto__ = null;
var cljs$core$async$state_machine__15376__auto____0 = (function (){
var statearr_18032 = [null,null,null,null,null,null,null,null];
(statearr_18032[(0)] = cljs$core$async$state_machine__15376__auto__);

(statearr_18032[(1)] = (1));

return statearr_18032;
});
var cljs$core$async$state_machine__15376__auto____1 = (function (state_18014){
while(true){
var ret_value__15377__auto__ = (function (){try{while(true){
var result__15378__auto__ = switch__15375__auto__(state_18014);
if(cljs.core.keyword_identical_QMARK_(result__15378__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15378__auto__;
}
break;
}
}catch (e18033){var ex__15379__auto__ = e18033;
var statearr_18034_18052 = state_18014;
(statearr_18034_18052[(2)] = ex__15379__auto__);


if(cljs.core.seq((state_18014[(4)]))){
var statearr_18035_18053 = state_18014;
(statearr_18035_18053[(1)] = cljs.core.first((state_18014[(4)])));

} else {
throw ex__15379__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15377__auto__,cljs.core.cst$kw$recur)){
var G__18054 = state_18014;
state_18014 = G__18054;
continue;
} else {
return ret_value__15377__auto__;
}
break;
}
});
cljs$core$async$state_machine__15376__auto__ = function(state_18014){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15376__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15376__auto____1.call(this,state_18014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15376__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15376__auto____0;
cljs$core$async$state_machine__15376__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15376__auto____1;
return cljs$core$async$state_machine__15376__auto__;
})()
})();
var state__15504__auto__ = (function (){var statearr_18036 = (f__15503__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15503__auto__.cljs$core$IFn$_invoke$arity$0() : f__15503__auto__.call(null));
(statearr_18036[(6)] = c__15502__auto__);

return statearr_18036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15504__auto__);
}));

return c__15502__auto__;
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
var G__18056 = arguments.length;
switch (G__18056) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_18058 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_18058(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18059 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_18059(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18060 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_18060(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18061 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_18061(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18062 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18062 = (function (ch,cs,meta18063){
this.ch = ch;
this.cs = cs;
this.meta18063 = meta18063;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18064,meta18063__$1){
var self__ = this;
var _18064__$1 = this;
return (new cljs.core.async.t_cljs$core$async18062(self__.ch,self__.cs,meta18063__$1));
}));

(cljs.core.async.t_cljs$core$async18062.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18064){
var self__ = this;
var _18064__$1 = this;
return self__.meta18063;
}));

(cljs.core.async.t_cljs$core$async18062.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18062.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18062.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18062.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async18062.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async18062.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async18062.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta18063], null);
}));

(cljs.core.async.t_cljs$core$async18062.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18062.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18062");

(cljs.core.async.t_cljs$core$async18062.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async18062");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18062.
 */
cljs.core.async.__GT_t_cljs$core$async18062 = (function cljs$core$async$mult_$___GT_t_cljs$core$async18062(ch__$1,cs__$1,meta18063){
return (new cljs.core.async.t_cljs$core$async18062(ch__$1,cs__$1,meta18063));
});

}

return (new cljs.core.async.t_cljs$core$async18062(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__15502__auto___18281 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15503__auto__ = (function (){var switch__15375__auto__ = (function (state_18197){
var state_val_18198 = (state_18197[(1)]);
if((state_val_18198 === (7))){
var inst_18193 = (state_18197[(2)]);
var state_18197__$1 = state_18197;
var statearr_18199_18282 = state_18197__$1;
(statearr_18199_18282[(2)] = inst_18193);

(statearr_18199_18282[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18198 === (20))){
var inst_18098 = (state_18197[(7)]);
var inst_18110 = cljs.core.first(inst_18098);
var inst_18111 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18110,(0),null);
var inst_18112 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18110,(1),null);
var state_18197__$1 = (function (){var statearr_18200 = state_18197;
(statearr_18200[(8)] = inst_18111);

return statearr_18200;
})();
if(cljs.core.truth_(inst_18112)){
var statearr_18201_18283 = state_18197__$1;
(statearr_18201_18283[(1)] = (22));

} else {
var statearr_18202_18284 = state_18197__$1;
(statearr_18202_18284[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18198 === (27))){
var inst_18142 = (state_18197[(9)]);
var inst_18067 = (state_18197[(10)]);
var inst_18140 = (state_18197[(11)]);
var inst_18147 = (state_18197[(12)]);
var inst_18147__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18140,inst_18142);
var inst_18148 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18147__$1,inst_18067,done);
var state_18197__$1 = (function (){var statearr_18203 = state_18197;
(statearr_18203[(12)] = inst_18147__$1);

return statearr_18203;
})();
if(cljs.core.truth_(inst_18148)){
var statearr_18204_18285 = state_18197__$1;
(statearr_18204_18285[(1)] = (30));

} else {
var statearr_18205_18286 = state_18197__$1;
(statearr_18205_18286[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18198 === (1))){
var state_18197__$1 = state_18197;
var statearr_18206_18287 = state_18197__$1;
(statearr_18206_18287[(2)] = null);

(statearr_18206_18287[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18198 === (24))){
var inst_18098 = (state_18197[(7)]);
var inst_18117 = (state_18197[(2)]);
var inst_18118 = cljs.core.next(inst_18098);
var inst_18076 = inst_18118;
var inst_18077 = null;
var inst_18078 = (0);
var inst_18079 = (0);
var state_18197__$1 = (function (){var statearr_18207 = state_18197;
(statearr_18207[(13)] = inst_18076);

(statearr_18207[(14)] = inst_18078);

(statearr_18207[(15)] = inst_18077);

(statearr_18207[(16)] = inst_18117);

(statearr_18207[(17)] = inst_18079);

return statearr_18207;
})();
var statearr_18208_18288 = state_18197__$1;
(statearr_18208_18288[(2)] = null);

(statearr_18208_18288[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18198 === (39))){
var state_18197__$1 = state_18197;
var statearr_18212_18289 = state_18197__$1;
(statearr_18212_18289[(2)] = null);

(statearr_18212_18289[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18198 === (4))){
var inst_18067 = (state_18197[(10)]);
var inst_18067__$1 = (state_18197[(2)]);
var inst_18068 = (inst_18067__$1 == null);
var state_18197__$1 = (function (){var statearr_18213 = state_18197;
(statearr_18213[(10)] = inst_18067__$1);

return statearr_18213;
})();
if(cljs.core.truth_(inst_18068)){
var statearr_18214_18290 = state_18197__$1;
(statearr_18214_18290[(1)] = (5));

} else {
var statearr_18215_18291 = state_18197__$1;
(statearr_18215_18291[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18198 === (15))){
var inst_18076 = (state_18197[(13)]);
var inst_18078 = (state_18197[(14)]);
var inst_18077 = (state_18197[(15)]);
var inst_18079 = (state_18197[(17)]);
var inst_18094 = (state_18197[(2)]);
var inst_18095 = (inst_18079 + (1));
var tmp18209 = inst_18076;
var tmp18210 = inst_18078;
var tmp18211 = inst_18077;
var inst_18076__$1 = tmp18209;
var inst_18077__$1 = tmp18211;
var inst_18078__$1 = tmp18210;
var inst_18079__$1 = inst_18095;
var state_18197__$1 = (function (){var statearr_18216 = state_18197;
(statearr_18216[(18)] = inst_18094);

(statearr_18216[(13)] = inst_18076__$1);

(statearr_18216[(14)] = inst_18078__$1);

(statearr_18216[(15)] = inst_18077__$1);

(statearr_18216[(17)] = inst_18079__$1);

return statearr_18216;
})();
var statearr_18217_18292 = state_18197__$1;
(statearr_18217_18292[(2)] = null);

(statearr_18217_18292[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18198 === (21))){
var inst_18121 = (state_18197[(2)]);
var state_18197__$1 = state_18197;
var statearr_18221_18293 = state_18197__$1;
(statearr_18221_18293[(2)] = inst_18121);

(statearr_18221_18293[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18198 === (31))){
var inst_18147 = (state_18197[(12)]);
var inst_18151 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18147);
var state_18197__$1 = state_18197;
var statearr_18222_18294 = state_18197__$1;
(statearr_18222_18294[(2)] = inst_18151);

(statearr_18222_18294[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18198 === (32))){
var inst_18139 = (state_18197[(19)]);
var inst_18142 = (state_18197[(9)]);
var inst_18141 = (state_18197[(20)]);
var inst_18140 = (state_18197[(11)]);
var inst_18153 = (state_18197[(2)]);
var inst_18154 = (inst_18142 + (1));
var tmp18218 = inst_18139;
var tmp18219 = inst_18141;
var tmp18220 = inst_18140;
var inst_18139__$1 = tmp18218;
var inst_18140__$1 = tmp18220;
var inst_18141__$1 = tmp18219;
var inst_18142__$1 = inst_18154;
var state_18197__$1 = (function (){var statearr_18223 = state_18197;
(statearr_18223[(19)] = inst_18139__$1);

(statearr_18223[(9)] = inst_18142__$1);

(statearr_18223[(20)] = inst_18141__$1);

(statearr_18223[(11)] = inst_18140__$1);

(statearr_18223[(21)] = inst_18153);

return statearr_18223;
})();
var statearr_18224_18295 = state_18197__$1;
(statearr_18224_18295[(2)] = null);

(statearr_18224_18295[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18198 === (40))){
var inst_18166 = (state_18197[(22)]);
var inst_18170 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18166);
var state_18197__$1 = state_18197;
var statearr_18225_18296 = state_18197__$1;
(statearr_18225_18296[(2)] = inst_18170);

(statearr_18225_18296[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18198 === (33))){
var inst_18157 = (state_18197[(23)]);
var inst_18159 = cljs.core.chunked_seq_QMARK_(inst_18157);
var state_18197__$1 = state_18197;
if(inst_18159){
var statearr_18226_18297 = state_18197__$1;
(statearr_18226_18297[(1)] = (36));

} else {
var statearr_18227_18298 = state_18197__$1;
(statearr_18227_18298[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18198 === (13))){
var inst_18088 = (state_18197[(24)]);
var inst_18091 = cljs.core.async.close_BANG_(inst_18088);
var state_18197__$1 = state_18197;
var statearr_18228_18299 = state_18197__$1;
(statearr_18228_18299[(2)] = inst_18091);

(statearr_18228_18299[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18198 === (22))){
var inst_18111 = (state_18197[(8)]);
var inst_18114 = cljs.core.async.close_BANG_(inst_18111);
var state_18197__$1 = state_18197;
var statearr_18229_18300 = state_18197__$1;
(statearr_18229_18300[(2)] = inst_18114);

(statearr_18229_18300[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18198 === (36))){
var inst_18157 = (state_18197[(23)]);
var inst_18161 = cljs.core.chunk_first(inst_18157);
var inst_18162 = cljs.core.chunk_rest(inst_18157);
var inst_18163 = cljs.core.count(inst_18161);
var inst_18139 = inst_18162;
var inst_18140 = inst_18161;
var inst_18141 = inst_18163;
var inst_18142 = (0);
var state_18197__$1 = (function (){var statearr_18230 = state_18197;
(statearr_18230[(19)] = inst_18139);

(statearr_18230[(9)] = inst_18142);

(statearr_18230[(20)] = inst_18141);

(statearr_18230[(11)] = inst_18140);

return statearr_18230;
})();
var statearr_18231_18301 = state_18197__$1;
(statearr_18231_18301[(2)] = null);

(statearr_18231_18301[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18198 === (41))){
var inst_18157 = (state_18197[(23)]);
var inst_18172 = (state_18197[(2)]);
var inst_18173 = cljs.core.next(inst_18157);
var inst_18139 = inst_18173;
var inst_18140 = null;
var inst_18141 = (0);
var inst_18142 = (0);
var state_18197__$1 = (function (){var statearr_18232 = state_18197;
(statearr_18232[(19)] = inst_18139);

(statearr_18232[(9)] = inst_18142);

(statearr_18232[(20)] = inst_18141);

(statearr_18232[(11)] = inst_18140);

(statearr_18232[(25)] = inst_18172);

return statearr_18232;
})();
var statearr_18233_18302 = state_18197__$1;
(statearr_18233_18302[(2)] = null);

(statearr_18233_18302[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18198 === (43))){
var state_18197__$1 = state_18197;
var statearr_18234_18303 = state_18197__$1;
(statearr_18234_18303[(2)] = null);

(statearr_18234_18303[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18198 === (29))){
var inst_18181 = (state_18197[(2)]);
var state_18197__$1 = state_18197;
var statearr_18235_18304 = state_18197__$1;
(statearr_18235_18304[(2)] = inst_18181);

(statearr_18235_18304[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18198 === (44))){
var inst_18190 = (state_18197[(2)]);
var state_18197__$1 = (function (){var statearr_18236 = state_18197;
(statearr_18236[(26)] = inst_18190);

return statearr_18236;
})();
var statearr_18237_18305 = state_18197__$1;
(statearr_18237_18305[(2)] = null);

(statearr_18237_18305[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18198 === (6))){
var inst_18131 = (state_18197[(27)]);
var inst_18130 = cljs.core.deref(cs);
var inst_18131__$1 = cljs.core.keys(inst_18130);
var inst_18132 = cljs.core.count(inst_18131__$1);
var inst_18133 = cljs.core.reset_BANG_(dctr,inst_18132);
var inst_18138 = cljs.core.seq(inst_18131__$1);
var inst_18139 = inst_18138;
var inst_18140 = null;
var inst_18141 = (0);
var inst_18142 = (0);
var state_18197__$1 = (function (){var statearr_18238 = state_18197;
(statearr_18238[(27)] = inst_18131__$1);

(statearr_18238[(19)] = inst_18139);

(statearr_18238[(9)] = inst_18142);

(statearr_18238[(20)] = inst_18141);

(statearr_18238[(28)] = inst_18133);

(statearr_18238[(11)] = inst_18140);

return statearr_18238;
})();
var statearr_18239_18306 = state_18197__$1;
(statearr_18239_18306[(2)] = null);

(statearr_18239_18306[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18198 === (28))){
var inst_18139 = (state_18197[(19)]);
var inst_18157 = (state_18197[(23)]);
var inst_18157__$1 = cljs.core.seq(inst_18139);
var state_18197__$1 = (function (){var statearr_18240 = state_18197;
(statearr_18240[(23)] = inst_18157__$1);

return statearr_18240;
})();
if(inst_18157__$1){
var statearr_18241_18307 = state_18197__$1;
(statearr_18241_18307[(1)] = (33));

} else {
var statearr_18242_18308 = state_18197__$1;
(statearr_18242_18308[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18198 === (25))){
var inst_18142 = (state_18197[(9)]);
var inst_18141 = (state_18197[(20)]);
var inst_18144 = (inst_18142 < inst_18141);
var inst_18145 = inst_18144;
var state_18197__$1 = state_18197;
if(cljs.core.truth_(inst_18145)){
var statearr_18243_18309 = state_18197__$1;
(statearr_18243_18309[(1)] = (27));

} else {
var statearr_18244_18310 = state_18197__$1;
(statearr_18244_18310[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18198 === (34))){
var state_18197__$1 = state_18197;
var statearr_18245_18311 = state_18197__$1;
(statearr_18245_18311[(2)] = null);

(statearr_18245_18311[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18198 === (17))){
var state_18197__$1 = state_18197;
var statearr_18246_18312 = state_18197__$1;
(statearr_18246_18312[(2)] = null);

(statearr_18246_18312[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18198 === (3))){
var inst_18195 = (state_18197[(2)]);
var state_18197__$1 = state_18197;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18197__$1,inst_18195);
} else {
if((state_val_18198 === (12))){
var inst_18126 = (state_18197[(2)]);
var state_18197__$1 = state_18197;
var statearr_18247_18313 = state_18197__$1;
(statearr_18247_18313[(2)] = inst_18126);

(statearr_18247_18313[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18198 === (2))){
var state_18197__$1 = state_18197;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18197__$1,(4),ch);
} else {
if((state_val_18198 === (23))){
var state_18197__$1 = state_18197;
var statearr_18248_18314 = state_18197__$1;
(statearr_18248_18314[(2)] = null);

(statearr_18248_18314[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18198 === (35))){
var inst_18179 = (state_18197[(2)]);
var state_18197__$1 = state_18197;
var statearr_18249_18315 = state_18197__$1;
(statearr_18249_18315[(2)] = inst_18179);

(statearr_18249_18315[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18198 === (19))){
var inst_18098 = (state_18197[(7)]);
var inst_18102 = cljs.core.chunk_first(inst_18098);
var inst_18103 = cljs.core.chunk_rest(inst_18098);
var inst_18104 = cljs.core.count(inst_18102);
var inst_18076 = inst_18103;
var inst_18077 = inst_18102;
var inst_18078 = inst_18104;
var inst_18079 = (0);
var state_18197__$1 = (function (){var statearr_18250 = state_18197;
(statearr_18250[(13)] = inst_18076);

(statearr_18250[(14)] = inst_18078);

(statearr_18250[(15)] = inst_18077);

(statearr_18250[(17)] = inst_18079);

return statearr_18250;
})();
var statearr_18251_18316 = state_18197__$1;
(statearr_18251_18316[(2)] = null);

(statearr_18251_18316[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18198 === (11))){
var inst_18076 = (state_18197[(13)]);
var inst_18098 = (state_18197[(7)]);
var inst_18098__$1 = cljs.core.seq(inst_18076);
var state_18197__$1 = (function (){var statearr_18252 = state_18197;
(statearr_18252[(7)] = inst_18098__$1);

return statearr_18252;
})();
if(inst_18098__$1){
var statearr_18253_18317 = state_18197__$1;
(statearr_18253_18317[(1)] = (16));

} else {
var statearr_18254_18318 = state_18197__$1;
(statearr_18254_18318[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18198 === (9))){
var inst_18128 = (state_18197[(2)]);
var state_18197__$1 = state_18197;
var statearr_18255_18319 = state_18197__$1;
(statearr_18255_18319[(2)] = inst_18128);

(statearr_18255_18319[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18198 === (5))){
var inst_18074 = cljs.core.deref(cs);
var inst_18075 = cljs.core.seq(inst_18074);
var inst_18076 = inst_18075;
var inst_18077 = null;
var inst_18078 = (0);
var inst_18079 = (0);
var state_18197__$1 = (function (){var statearr_18256 = state_18197;
(statearr_18256[(13)] = inst_18076);

(statearr_18256[(14)] = inst_18078);

(statearr_18256[(15)] = inst_18077);

(statearr_18256[(17)] = inst_18079);

return statearr_18256;
})();
var statearr_18257_18320 = state_18197__$1;
(statearr_18257_18320[(2)] = null);

(statearr_18257_18320[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18198 === (14))){
var state_18197__$1 = state_18197;
var statearr_18258_18321 = state_18197__$1;
(statearr_18258_18321[(2)] = null);

(statearr_18258_18321[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18198 === (45))){
var inst_18187 = (state_18197[(2)]);
var state_18197__$1 = state_18197;
var statearr_18259_18322 = state_18197__$1;
(statearr_18259_18322[(2)] = inst_18187);

(statearr_18259_18322[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18198 === (26))){
var inst_18131 = (state_18197[(27)]);
var inst_18183 = (state_18197[(2)]);
var inst_18184 = cljs.core.seq(inst_18131);
var state_18197__$1 = (function (){var statearr_18260 = state_18197;
(statearr_18260[(29)] = inst_18183);

return statearr_18260;
})();
if(inst_18184){
var statearr_18261_18323 = state_18197__$1;
(statearr_18261_18323[(1)] = (42));

} else {
var statearr_18262_18324 = state_18197__$1;
(statearr_18262_18324[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18198 === (16))){
var inst_18098 = (state_18197[(7)]);
var inst_18100 = cljs.core.chunked_seq_QMARK_(inst_18098);
var state_18197__$1 = state_18197;
if(inst_18100){
var statearr_18263_18325 = state_18197__$1;
(statearr_18263_18325[(1)] = (19));

} else {
var statearr_18264_18326 = state_18197__$1;
(statearr_18264_18326[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18198 === (38))){
var inst_18176 = (state_18197[(2)]);
var state_18197__$1 = state_18197;
var statearr_18265_18327 = state_18197__$1;
(statearr_18265_18327[(2)] = inst_18176);

(statearr_18265_18327[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18198 === (30))){
var state_18197__$1 = state_18197;
var statearr_18266_18328 = state_18197__$1;
(statearr_18266_18328[(2)] = null);

(statearr_18266_18328[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18198 === (10))){
var inst_18077 = (state_18197[(15)]);
var inst_18079 = (state_18197[(17)]);
var inst_18087 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18077,inst_18079);
var inst_18088 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18087,(0),null);
var inst_18089 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18087,(1),null);
var state_18197__$1 = (function (){var statearr_18267 = state_18197;
(statearr_18267[(24)] = inst_18088);

return statearr_18267;
})();
if(cljs.core.truth_(inst_18089)){
var statearr_18268_18329 = state_18197__$1;
(statearr_18268_18329[(1)] = (13));

} else {
var statearr_18269_18330 = state_18197__$1;
(statearr_18269_18330[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18198 === (18))){
var inst_18124 = (state_18197[(2)]);
var state_18197__$1 = state_18197;
var statearr_18270_18331 = state_18197__$1;
(statearr_18270_18331[(2)] = inst_18124);

(statearr_18270_18331[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18198 === (42))){
var state_18197__$1 = state_18197;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18197__$1,(45),dchan);
} else {
if((state_val_18198 === (37))){
var inst_18067 = (state_18197[(10)]);
var inst_18157 = (state_18197[(23)]);
var inst_18166 = (state_18197[(22)]);
var inst_18166__$1 = cljs.core.first(inst_18157);
var inst_18167 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18166__$1,inst_18067,done);
var state_18197__$1 = (function (){var statearr_18271 = state_18197;
(statearr_18271[(22)] = inst_18166__$1);

return statearr_18271;
})();
if(cljs.core.truth_(inst_18167)){
var statearr_18272_18332 = state_18197__$1;
(statearr_18272_18332[(1)] = (39));

} else {
var statearr_18273_18333 = state_18197__$1;
(statearr_18273_18333[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18198 === (8))){
var inst_18078 = (state_18197[(14)]);
var inst_18079 = (state_18197[(17)]);
var inst_18081 = (inst_18079 < inst_18078);
var inst_18082 = inst_18081;
var state_18197__$1 = state_18197;
if(cljs.core.truth_(inst_18082)){
var statearr_18274_18334 = state_18197__$1;
(statearr_18274_18334[(1)] = (10));

} else {
var statearr_18275_18335 = state_18197__$1;
(statearr_18275_18335[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__15376__auto__ = null;
var cljs$core$async$mult_$_state_machine__15376__auto____0 = (function (){
var statearr_18276 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18276[(0)] = cljs$core$async$mult_$_state_machine__15376__auto__);

(statearr_18276[(1)] = (1));

return statearr_18276;
});
var cljs$core$async$mult_$_state_machine__15376__auto____1 = (function (state_18197){
while(true){
var ret_value__15377__auto__ = (function (){try{while(true){
var result__15378__auto__ = switch__15375__auto__(state_18197);
if(cljs.core.keyword_identical_QMARK_(result__15378__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15378__auto__;
}
break;
}
}catch (e18277){var ex__15379__auto__ = e18277;
var statearr_18278_18336 = state_18197;
(statearr_18278_18336[(2)] = ex__15379__auto__);


if(cljs.core.seq((state_18197[(4)]))){
var statearr_18279_18337 = state_18197;
(statearr_18279_18337[(1)] = cljs.core.first((state_18197[(4)])));

} else {
throw ex__15379__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15377__auto__,cljs.core.cst$kw$recur)){
var G__18338 = state_18197;
state_18197 = G__18338;
continue;
} else {
return ret_value__15377__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15376__auto__ = function(state_18197){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15376__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15376__auto____1.call(this,state_18197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15376__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15376__auto____0;
cljs$core$async$mult_$_state_machine__15376__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15376__auto____1;
return cljs$core$async$mult_$_state_machine__15376__auto__;
})()
})();
var state__15504__auto__ = (function (){var statearr_18280 = (f__15503__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15503__auto__.cljs$core$IFn$_invoke$arity$0() : f__15503__auto__.call(null));
(statearr_18280[(6)] = c__15502__auto___18281);

return statearr_18280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15504__auto__);
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
var G__18340 = arguments.length;
switch (G__18340) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_18342 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_18342(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18343 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_18343(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18344 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18344(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18345 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_18345(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18346 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18346(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18357 = arguments.length;
var i__4737__auto___18358 = (0);
while(true){
if((i__4737__auto___18358 < len__4736__auto___18357)){
args__4742__auto__.push((arguments[i__4737__auto___18358]));

var G__18359 = (i__4737__auto___18358 + (1));
i__4737__auto___18358 = G__18359;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18351){
var map__18352 = p__18351;
var map__18352__$1 = (((((!((map__18352 == null))))?(((((map__18352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18352):map__18352);
var opts = map__18352__$1;
var statearr_18354_18360 = state;
(statearr_18354_18360[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_18355_18361 = state;
(statearr_18355_18361[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_18356_18362 = state;
(statearr_18356_18362[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18347){
var G__18348 = cljs.core.first(seq18347);
var seq18347__$1 = cljs.core.next(seq18347);
var G__18349 = cljs.core.first(seq18347__$1);
var seq18347__$2 = cljs.core.next(seq18347__$1);
var G__18350 = cljs.core.first(seq18347__$2);
var seq18347__$3 = cljs.core.next(seq18347__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18348,G__18349,G__18350,seq18347__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18363 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18363 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18364){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta18364 = meta18364;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18365,meta18364__$1){
var self__ = this;
var _18365__$1 = this;
return (new cljs.core.async.t_cljs$core$async18363(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18364__$1));
}));

(cljs.core.async.t_cljs$core$async18363.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18365){
var self__ = this;
var _18365__$1 = this;
return self__.meta18364;
}));

(cljs.core.async.t_cljs$core$async18363.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18363.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async18363.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18363.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18363.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18363.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18363.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18363.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18363.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta18364], null);
}));

(cljs.core.async.t_cljs$core$async18363.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18363.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18363");

(cljs.core.async.t_cljs$core$async18363.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async18363");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18363.
 */
cljs.core.async.__GT_t_cljs$core$async18363 = (function cljs$core$async$mix_$___GT_t_cljs$core$async18363(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18364){
return (new cljs.core.async.t_cljs$core$async18363(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18364));
});

}

return (new cljs.core.async.t_cljs$core$async18363(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15502__auto___18528 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15503__auto__ = (function (){var switch__15375__auto__ = (function (state_18467){
var state_val_18468 = (state_18467[(1)]);
if((state_val_18468 === (7))){
var inst_18382 = (state_18467[(2)]);
var state_18467__$1 = state_18467;
var statearr_18469_18529 = state_18467__$1;
(statearr_18469_18529[(2)] = inst_18382);

(statearr_18469_18529[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18468 === (20))){
var inst_18394 = (state_18467[(7)]);
var state_18467__$1 = state_18467;
var statearr_18470_18530 = state_18467__$1;
(statearr_18470_18530[(2)] = inst_18394);

(statearr_18470_18530[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18468 === (27))){
var state_18467__$1 = state_18467;
var statearr_18471_18531 = state_18467__$1;
(statearr_18471_18531[(2)] = null);

(statearr_18471_18531[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18468 === (1))){
var inst_18369 = (state_18467[(8)]);
var inst_18369__$1 = calc_state();
var inst_18371 = (inst_18369__$1 == null);
var inst_18372 = cljs.core.not(inst_18371);
var state_18467__$1 = (function (){var statearr_18472 = state_18467;
(statearr_18472[(8)] = inst_18369__$1);

return statearr_18472;
})();
if(inst_18372){
var statearr_18473_18532 = state_18467__$1;
(statearr_18473_18532[(1)] = (2));

} else {
var statearr_18474_18533 = state_18467__$1;
(statearr_18474_18533[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18468 === (24))){
var inst_18441 = (state_18467[(9)]);
var inst_18418 = (state_18467[(10)]);
var inst_18427 = (state_18467[(11)]);
var inst_18441__$1 = (inst_18418.cljs$core$IFn$_invoke$arity$1 ? inst_18418.cljs$core$IFn$_invoke$arity$1(inst_18427) : inst_18418.call(null,inst_18427));
var state_18467__$1 = (function (){var statearr_18475 = state_18467;
(statearr_18475[(9)] = inst_18441__$1);

return statearr_18475;
})();
if(cljs.core.truth_(inst_18441__$1)){
var statearr_18476_18534 = state_18467__$1;
(statearr_18476_18534[(1)] = (29));

} else {
var statearr_18477_18535 = state_18467__$1;
(statearr_18477_18535[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18468 === (4))){
var inst_18385 = (state_18467[(2)]);
var state_18467__$1 = state_18467;
if(cljs.core.truth_(inst_18385)){
var statearr_18478_18536 = state_18467__$1;
(statearr_18478_18536[(1)] = (8));

} else {
var statearr_18479_18537 = state_18467__$1;
(statearr_18479_18537[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18468 === (15))){
var inst_18412 = (state_18467[(2)]);
var state_18467__$1 = state_18467;
if(cljs.core.truth_(inst_18412)){
var statearr_18480_18538 = state_18467__$1;
(statearr_18480_18538[(1)] = (19));

} else {
var statearr_18481_18539 = state_18467__$1;
(statearr_18481_18539[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18468 === (21))){
var inst_18417 = (state_18467[(12)]);
var inst_18417__$1 = (state_18467[(2)]);
var inst_18418 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18417__$1,cljs.core.cst$kw$solos);
var inst_18419 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18417__$1,cljs.core.cst$kw$mutes);
var inst_18420 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18417__$1,cljs.core.cst$kw$reads);
var state_18467__$1 = (function (){var statearr_18482 = state_18467;
(statearr_18482[(12)] = inst_18417__$1);

(statearr_18482[(13)] = inst_18419);

(statearr_18482[(10)] = inst_18418);

return statearr_18482;
})();
return cljs.core.async.ioc_alts_BANG_(state_18467__$1,(22),inst_18420);
} else {
if((state_val_18468 === (31))){
var inst_18449 = (state_18467[(2)]);
var state_18467__$1 = state_18467;
if(cljs.core.truth_(inst_18449)){
var statearr_18483_18540 = state_18467__$1;
(statearr_18483_18540[(1)] = (32));

} else {
var statearr_18484_18541 = state_18467__$1;
(statearr_18484_18541[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18468 === (32))){
var inst_18426 = (state_18467[(14)]);
var state_18467__$1 = state_18467;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18467__$1,(35),out,inst_18426);
} else {
if((state_val_18468 === (33))){
var inst_18417 = (state_18467[(12)]);
var inst_18394 = inst_18417;
var state_18467__$1 = (function (){var statearr_18485 = state_18467;
(statearr_18485[(7)] = inst_18394);

return statearr_18485;
})();
var statearr_18486_18542 = state_18467__$1;
(statearr_18486_18542[(2)] = null);

(statearr_18486_18542[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18468 === (13))){
var inst_18394 = (state_18467[(7)]);
var inst_18401 = inst_18394.cljs$lang$protocol_mask$partition0$;
var inst_18402 = (inst_18401 & (64));
var inst_18403 = inst_18394.cljs$core$ISeq$;
var inst_18404 = (cljs.core.PROTOCOL_SENTINEL === inst_18403);
var inst_18405 = ((inst_18402) || (inst_18404));
var state_18467__$1 = state_18467;
if(cljs.core.truth_(inst_18405)){
var statearr_18487_18543 = state_18467__$1;
(statearr_18487_18543[(1)] = (16));

} else {
var statearr_18488_18544 = state_18467__$1;
(statearr_18488_18544[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18468 === (22))){
var inst_18426 = (state_18467[(14)]);
var inst_18427 = (state_18467[(11)]);
var inst_18425 = (state_18467[(2)]);
var inst_18426__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18425,(0),null);
var inst_18427__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18425,(1),null);
var inst_18428 = (inst_18426__$1 == null);
var inst_18429 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18427__$1,change);
var inst_18430 = ((inst_18428) || (inst_18429));
var state_18467__$1 = (function (){var statearr_18489 = state_18467;
(statearr_18489[(14)] = inst_18426__$1);

(statearr_18489[(11)] = inst_18427__$1);

return statearr_18489;
})();
if(cljs.core.truth_(inst_18430)){
var statearr_18490_18545 = state_18467__$1;
(statearr_18490_18545[(1)] = (23));

} else {
var statearr_18491_18546 = state_18467__$1;
(statearr_18491_18546[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18468 === (36))){
var inst_18417 = (state_18467[(12)]);
var inst_18394 = inst_18417;
var state_18467__$1 = (function (){var statearr_18492 = state_18467;
(statearr_18492[(7)] = inst_18394);

return statearr_18492;
})();
var statearr_18493_18547 = state_18467__$1;
(statearr_18493_18547[(2)] = null);

(statearr_18493_18547[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18468 === (29))){
var inst_18441 = (state_18467[(9)]);
var state_18467__$1 = state_18467;
var statearr_18494_18548 = state_18467__$1;
(statearr_18494_18548[(2)] = inst_18441);

(statearr_18494_18548[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18468 === (6))){
var state_18467__$1 = state_18467;
var statearr_18495_18549 = state_18467__$1;
(statearr_18495_18549[(2)] = false);

(statearr_18495_18549[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18468 === (28))){
var inst_18437 = (state_18467[(2)]);
var inst_18438 = calc_state();
var inst_18394 = inst_18438;
var state_18467__$1 = (function (){var statearr_18496 = state_18467;
(statearr_18496[(15)] = inst_18437);

(statearr_18496[(7)] = inst_18394);

return statearr_18496;
})();
var statearr_18497_18550 = state_18467__$1;
(statearr_18497_18550[(2)] = null);

(statearr_18497_18550[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18468 === (25))){
var inst_18463 = (state_18467[(2)]);
var state_18467__$1 = state_18467;
var statearr_18498_18551 = state_18467__$1;
(statearr_18498_18551[(2)] = inst_18463);

(statearr_18498_18551[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18468 === (34))){
var inst_18461 = (state_18467[(2)]);
var state_18467__$1 = state_18467;
var statearr_18499_18552 = state_18467__$1;
(statearr_18499_18552[(2)] = inst_18461);

(statearr_18499_18552[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18468 === (17))){
var state_18467__$1 = state_18467;
var statearr_18500_18553 = state_18467__$1;
(statearr_18500_18553[(2)] = false);

(statearr_18500_18553[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18468 === (3))){
var state_18467__$1 = state_18467;
var statearr_18501_18554 = state_18467__$1;
(statearr_18501_18554[(2)] = false);

(statearr_18501_18554[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18468 === (12))){
var inst_18465 = (state_18467[(2)]);
var state_18467__$1 = state_18467;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18467__$1,inst_18465);
} else {
if((state_val_18468 === (2))){
var inst_18369 = (state_18467[(8)]);
var inst_18374 = inst_18369.cljs$lang$protocol_mask$partition0$;
var inst_18375 = (inst_18374 & (64));
var inst_18376 = inst_18369.cljs$core$ISeq$;
var inst_18377 = (cljs.core.PROTOCOL_SENTINEL === inst_18376);
var inst_18378 = ((inst_18375) || (inst_18377));
var state_18467__$1 = state_18467;
if(cljs.core.truth_(inst_18378)){
var statearr_18502_18555 = state_18467__$1;
(statearr_18502_18555[(1)] = (5));

} else {
var statearr_18503_18556 = state_18467__$1;
(statearr_18503_18556[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18468 === (23))){
var inst_18426 = (state_18467[(14)]);
var inst_18432 = (inst_18426 == null);
var state_18467__$1 = state_18467;
if(cljs.core.truth_(inst_18432)){
var statearr_18504_18557 = state_18467__$1;
(statearr_18504_18557[(1)] = (26));

} else {
var statearr_18505_18558 = state_18467__$1;
(statearr_18505_18558[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18468 === (35))){
var inst_18452 = (state_18467[(2)]);
var state_18467__$1 = state_18467;
if(cljs.core.truth_(inst_18452)){
var statearr_18506_18559 = state_18467__$1;
(statearr_18506_18559[(1)] = (36));

} else {
var statearr_18507_18560 = state_18467__$1;
(statearr_18507_18560[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18468 === (19))){
var inst_18394 = (state_18467[(7)]);
var inst_18414 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18394);
var state_18467__$1 = state_18467;
var statearr_18508_18561 = state_18467__$1;
(statearr_18508_18561[(2)] = inst_18414);

(statearr_18508_18561[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18468 === (11))){
var inst_18394 = (state_18467[(7)]);
var inst_18398 = (inst_18394 == null);
var inst_18399 = cljs.core.not(inst_18398);
var state_18467__$1 = state_18467;
if(inst_18399){
var statearr_18509_18562 = state_18467__$1;
(statearr_18509_18562[(1)] = (13));

} else {
var statearr_18510_18563 = state_18467__$1;
(statearr_18510_18563[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18468 === (9))){
var inst_18369 = (state_18467[(8)]);
var state_18467__$1 = state_18467;
var statearr_18511_18564 = state_18467__$1;
(statearr_18511_18564[(2)] = inst_18369);

(statearr_18511_18564[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18468 === (5))){
var state_18467__$1 = state_18467;
var statearr_18512_18565 = state_18467__$1;
(statearr_18512_18565[(2)] = true);

(statearr_18512_18565[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18468 === (14))){
var state_18467__$1 = state_18467;
var statearr_18513_18566 = state_18467__$1;
(statearr_18513_18566[(2)] = false);

(statearr_18513_18566[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18468 === (26))){
var inst_18427 = (state_18467[(11)]);
var inst_18434 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_18427);
var state_18467__$1 = state_18467;
var statearr_18514_18567 = state_18467__$1;
(statearr_18514_18567[(2)] = inst_18434);

(statearr_18514_18567[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18468 === (16))){
var state_18467__$1 = state_18467;
var statearr_18515_18568 = state_18467__$1;
(statearr_18515_18568[(2)] = true);

(statearr_18515_18568[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18468 === (38))){
var inst_18457 = (state_18467[(2)]);
var state_18467__$1 = state_18467;
var statearr_18516_18569 = state_18467__$1;
(statearr_18516_18569[(2)] = inst_18457);

(statearr_18516_18569[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18468 === (30))){
var inst_18419 = (state_18467[(13)]);
var inst_18418 = (state_18467[(10)]);
var inst_18427 = (state_18467[(11)]);
var inst_18444 = cljs.core.empty_QMARK_(inst_18418);
var inst_18445 = (inst_18419.cljs$core$IFn$_invoke$arity$1 ? inst_18419.cljs$core$IFn$_invoke$arity$1(inst_18427) : inst_18419.call(null,inst_18427));
var inst_18446 = cljs.core.not(inst_18445);
var inst_18447 = ((inst_18444) && (inst_18446));
var state_18467__$1 = state_18467;
var statearr_18517_18570 = state_18467__$1;
(statearr_18517_18570[(2)] = inst_18447);

(statearr_18517_18570[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18468 === (10))){
var inst_18369 = (state_18467[(8)]);
var inst_18390 = (state_18467[(2)]);
var inst_18391 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18390,cljs.core.cst$kw$solos);
var inst_18392 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18390,cljs.core.cst$kw$mutes);
var inst_18393 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18390,cljs.core.cst$kw$reads);
var inst_18394 = inst_18369;
var state_18467__$1 = (function (){var statearr_18518 = state_18467;
(statearr_18518[(16)] = inst_18393);

(statearr_18518[(17)] = inst_18391);

(statearr_18518[(18)] = inst_18392);

(statearr_18518[(7)] = inst_18394);

return statearr_18518;
})();
var statearr_18519_18571 = state_18467__$1;
(statearr_18519_18571[(2)] = null);

(statearr_18519_18571[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18468 === (18))){
var inst_18409 = (state_18467[(2)]);
var state_18467__$1 = state_18467;
var statearr_18520_18572 = state_18467__$1;
(statearr_18520_18572[(2)] = inst_18409);

(statearr_18520_18572[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18468 === (37))){
var state_18467__$1 = state_18467;
var statearr_18521_18573 = state_18467__$1;
(statearr_18521_18573[(2)] = null);

(statearr_18521_18573[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18468 === (8))){
var inst_18369 = (state_18467[(8)]);
var inst_18387 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18369);
var state_18467__$1 = state_18467;
var statearr_18522_18574 = state_18467__$1;
(statearr_18522_18574[(2)] = inst_18387);

(statearr_18522_18574[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__15376__auto__ = null;
var cljs$core$async$mix_$_state_machine__15376__auto____0 = (function (){
var statearr_18523 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18523[(0)] = cljs$core$async$mix_$_state_machine__15376__auto__);

(statearr_18523[(1)] = (1));

return statearr_18523;
});
var cljs$core$async$mix_$_state_machine__15376__auto____1 = (function (state_18467){
while(true){
var ret_value__15377__auto__ = (function (){try{while(true){
var result__15378__auto__ = switch__15375__auto__(state_18467);
if(cljs.core.keyword_identical_QMARK_(result__15378__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15378__auto__;
}
break;
}
}catch (e18524){var ex__15379__auto__ = e18524;
var statearr_18525_18575 = state_18467;
(statearr_18525_18575[(2)] = ex__15379__auto__);


if(cljs.core.seq((state_18467[(4)]))){
var statearr_18526_18576 = state_18467;
(statearr_18526_18576[(1)] = cljs.core.first((state_18467[(4)])));

} else {
throw ex__15379__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15377__auto__,cljs.core.cst$kw$recur)){
var G__18577 = state_18467;
state_18467 = G__18577;
continue;
} else {
return ret_value__15377__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15376__auto__ = function(state_18467){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15376__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15376__auto____1.call(this,state_18467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15376__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15376__auto____0;
cljs$core$async$mix_$_state_machine__15376__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15376__auto____1;
return cljs$core$async$mix_$_state_machine__15376__auto__;
})()
})();
var state__15504__auto__ = (function (){var statearr_18527 = (f__15503__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15503__auto__.cljs$core$IFn$_invoke$arity$0() : f__15503__auto__.call(null));
(statearr_18527[(6)] = c__15502__auto___18528);

return statearr_18527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15504__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_18580 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_18580(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18581 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_18581(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18582 = (function() {
var G__18583 = null;
var G__18583__1 = (function (p){
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
var G__18583__2 = (function (p,v){
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
G__18583 = function(p,v){
switch(arguments.length){
case 1:
return G__18583__1.call(this,p);
case 2:
return G__18583__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18583.cljs$core$IFn$_invoke$arity$1 = G__18583__1;
G__18583.cljs$core$IFn$_invoke$arity$2 = G__18583__2;
return G__18583;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__18579 = arguments.length;
switch (G__18579) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18582.cljs$core$IFn$_invoke$arity$1(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18582.cljs$core$IFn$_invoke$arity$2(p,v);
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
var G__18587 = arguments.length;
switch (G__18587) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__18585_SHARP_){
if(cljs.core.truth_((p1__18585_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18585_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__18585_SHARP_.call(null,topic)))){
return p1__18585_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18585_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18588 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18588 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18589){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18589 = meta18589;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18590,meta18589__$1){
var self__ = this;
var _18590__$1 = this;
return (new cljs.core.async.t_cljs$core$async18588(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18589__$1));
}));

(cljs.core.async.t_cljs$core$async18588.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18590){
var self__ = this;
var _18590__$1 = this;
return self__.meta18589;
}));

(cljs.core.async.t_cljs$core$async18588.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18588.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18588.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18588.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async18588.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async18588.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async18588.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async18588.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta18589], null);
}));

(cljs.core.async.t_cljs$core$async18588.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18588.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18588");

(cljs.core.async.t_cljs$core$async18588.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async18588");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18588.
 */
cljs.core.async.__GT_t_cljs$core$async18588 = (function cljs$core$async$__GT_t_cljs$core$async18588(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18589){
return (new cljs.core.async.t_cljs$core$async18588(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18589));
});

}

return (new cljs.core.async.t_cljs$core$async18588(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15502__auto___18709 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15503__auto__ = (function (){var switch__15375__auto__ = (function (state_18662){
var state_val_18663 = (state_18662[(1)]);
if((state_val_18663 === (7))){
var inst_18658 = (state_18662[(2)]);
var state_18662__$1 = state_18662;
var statearr_18664_18710 = state_18662__$1;
(statearr_18664_18710[(2)] = inst_18658);

(statearr_18664_18710[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18663 === (20))){
var state_18662__$1 = state_18662;
var statearr_18665_18711 = state_18662__$1;
(statearr_18665_18711[(2)] = null);

(statearr_18665_18711[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18663 === (1))){
var state_18662__$1 = state_18662;
var statearr_18666_18712 = state_18662__$1;
(statearr_18666_18712[(2)] = null);

(statearr_18666_18712[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18663 === (24))){
var inst_18641 = (state_18662[(7)]);
var inst_18650 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_18641);
var state_18662__$1 = state_18662;
var statearr_18667_18713 = state_18662__$1;
(statearr_18667_18713[(2)] = inst_18650);

(statearr_18667_18713[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18663 === (4))){
var inst_18593 = (state_18662[(8)]);
var inst_18593__$1 = (state_18662[(2)]);
var inst_18594 = (inst_18593__$1 == null);
var state_18662__$1 = (function (){var statearr_18668 = state_18662;
(statearr_18668[(8)] = inst_18593__$1);

return statearr_18668;
})();
if(cljs.core.truth_(inst_18594)){
var statearr_18669_18714 = state_18662__$1;
(statearr_18669_18714[(1)] = (5));

} else {
var statearr_18670_18715 = state_18662__$1;
(statearr_18670_18715[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18663 === (15))){
var inst_18635 = (state_18662[(2)]);
var state_18662__$1 = state_18662;
var statearr_18671_18716 = state_18662__$1;
(statearr_18671_18716[(2)] = inst_18635);

(statearr_18671_18716[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18663 === (21))){
var inst_18655 = (state_18662[(2)]);
var state_18662__$1 = (function (){var statearr_18672 = state_18662;
(statearr_18672[(9)] = inst_18655);

return statearr_18672;
})();
var statearr_18673_18717 = state_18662__$1;
(statearr_18673_18717[(2)] = null);

(statearr_18673_18717[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18663 === (13))){
var inst_18617 = (state_18662[(10)]);
var inst_18619 = cljs.core.chunked_seq_QMARK_(inst_18617);
var state_18662__$1 = state_18662;
if(inst_18619){
var statearr_18674_18718 = state_18662__$1;
(statearr_18674_18718[(1)] = (16));

} else {
var statearr_18675_18719 = state_18662__$1;
(statearr_18675_18719[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18663 === (22))){
var inst_18647 = (state_18662[(2)]);
var state_18662__$1 = state_18662;
if(cljs.core.truth_(inst_18647)){
var statearr_18676_18720 = state_18662__$1;
(statearr_18676_18720[(1)] = (23));

} else {
var statearr_18677_18721 = state_18662__$1;
(statearr_18677_18721[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18663 === (6))){
var inst_18593 = (state_18662[(8)]);
var inst_18641 = (state_18662[(7)]);
var inst_18643 = (state_18662[(11)]);
var inst_18641__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_18593) : topic_fn.call(null,inst_18593));
var inst_18642 = cljs.core.deref(mults);
var inst_18643__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18642,inst_18641__$1);
var state_18662__$1 = (function (){var statearr_18678 = state_18662;
(statearr_18678[(7)] = inst_18641__$1);

(statearr_18678[(11)] = inst_18643__$1);

return statearr_18678;
})();
if(cljs.core.truth_(inst_18643__$1)){
var statearr_18679_18722 = state_18662__$1;
(statearr_18679_18722[(1)] = (19));

} else {
var statearr_18680_18723 = state_18662__$1;
(statearr_18680_18723[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18663 === (25))){
var inst_18652 = (state_18662[(2)]);
var state_18662__$1 = state_18662;
var statearr_18681_18724 = state_18662__$1;
(statearr_18681_18724[(2)] = inst_18652);

(statearr_18681_18724[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18663 === (17))){
var inst_18617 = (state_18662[(10)]);
var inst_18626 = cljs.core.first(inst_18617);
var inst_18627 = cljs.core.async.muxch_STAR_(inst_18626);
var inst_18628 = cljs.core.async.close_BANG_(inst_18627);
var inst_18629 = cljs.core.next(inst_18617);
var inst_18603 = inst_18629;
var inst_18604 = null;
var inst_18605 = (0);
var inst_18606 = (0);
var state_18662__$1 = (function (){var statearr_18682 = state_18662;
(statearr_18682[(12)] = inst_18606);

(statearr_18682[(13)] = inst_18628);

(statearr_18682[(14)] = inst_18605);

(statearr_18682[(15)] = inst_18604);

(statearr_18682[(16)] = inst_18603);

return statearr_18682;
})();
var statearr_18683_18725 = state_18662__$1;
(statearr_18683_18725[(2)] = null);

(statearr_18683_18725[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18663 === (3))){
var inst_18660 = (state_18662[(2)]);
var state_18662__$1 = state_18662;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18662__$1,inst_18660);
} else {
if((state_val_18663 === (12))){
var inst_18637 = (state_18662[(2)]);
var state_18662__$1 = state_18662;
var statearr_18684_18726 = state_18662__$1;
(statearr_18684_18726[(2)] = inst_18637);

(statearr_18684_18726[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18663 === (2))){
var state_18662__$1 = state_18662;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18662__$1,(4),ch);
} else {
if((state_val_18663 === (23))){
var state_18662__$1 = state_18662;
var statearr_18685_18727 = state_18662__$1;
(statearr_18685_18727[(2)] = null);

(statearr_18685_18727[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18663 === (19))){
var inst_18593 = (state_18662[(8)]);
var inst_18643 = (state_18662[(11)]);
var inst_18645 = cljs.core.async.muxch_STAR_(inst_18643);
var state_18662__$1 = state_18662;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18662__$1,(22),inst_18645,inst_18593);
} else {
if((state_val_18663 === (11))){
var inst_18603 = (state_18662[(16)]);
var inst_18617 = (state_18662[(10)]);
var inst_18617__$1 = cljs.core.seq(inst_18603);
var state_18662__$1 = (function (){var statearr_18686 = state_18662;
(statearr_18686[(10)] = inst_18617__$1);

return statearr_18686;
})();
if(inst_18617__$1){
var statearr_18687_18728 = state_18662__$1;
(statearr_18687_18728[(1)] = (13));

} else {
var statearr_18688_18729 = state_18662__$1;
(statearr_18688_18729[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18663 === (9))){
var inst_18639 = (state_18662[(2)]);
var state_18662__$1 = state_18662;
var statearr_18689_18730 = state_18662__$1;
(statearr_18689_18730[(2)] = inst_18639);

(statearr_18689_18730[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18663 === (5))){
var inst_18600 = cljs.core.deref(mults);
var inst_18601 = cljs.core.vals(inst_18600);
var inst_18602 = cljs.core.seq(inst_18601);
var inst_18603 = inst_18602;
var inst_18604 = null;
var inst_18605 = (0);
var inst_18606 = (0);
var state_18662__$1 = (function (){var statearr_18690 = state_18662;
(statearr_18690[(12)] = inst_18606);

(statearr_18690[(14)] = inst_18605);

(statearr_18690[(15)] = inst_18604);

(statearr_18690[(16)] = inst_18603);

return statearr_18690;
})();
var statearr_18691_18731 = state_18662__$1;
(statearr_18691_18731[(2)] = null);

(statearr_18691_18731[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18663 === (14))){
var state_18662__$1 = state_18662;
var statearr_18695_18732 = state_18662__$1;
(statearr_18695_18732[(2)] = null);

(statearr_18695_18732[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18663 === (16))){
var inst_18617 = (state_18662[(10)]);
var inst_18621 = cljs.core.chunk_first(inst_18617);
var inst_18622 = cljs.core.chunk_rest(inst_18617);
var inst_18623 = cljs.core.count(inst_18621);
var inst_18603 = inst_18622;
var inst_18604 = inst_18621;
var inst_18605 = inst_18623;
var inst_18606 = (0);
var state_18662__$1 = (function (){var statearr_18696 = state_18662;
(statearr_18696[(12)] = inst_18606);

(statearr_18696[(14)] = inst_18605);

(statearr_18696[(15)] = inst_18604);

(statearr_18696[(16)] = inst_18603);

return statearr_18696;
})();
var statearr_18697_18733 = state_18662__$1;
(statearr_18697_18733[(2)] = null);

(statearr_18697_18733[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18663 === (10))){
var inst_18606 = (state_18662[(12)]);
var inst_18605 = (state_18662[(14)]);
var inst_18604 = (state_18662[(15)]);
var inst_18603 = (state_18662[(16)]);
var inst_18611 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18604,inst_18606);
var inst_18612 = cljs.core.async.muxch_STAR_(inst_18611);
var inst_18613 = cljs.core.async.close_BANG_(inst_18612);
var inst_18614 = (inst_18606 + (1));
var tmp18692 = inst_18605;
var tmp18693 = inst_18604;
var tmp18694 = inst_18603;
var inst_18603__$1 = tmp18694;
var inst_18604__$1 = tmp18693;
var inst_18605__$1 = tmp18692;
var inst_18606__$1 = inst_18614;
var state_18662__$1 = (function (){var statearr_18698 = state_18662;
(statearr_18698[(12)] = inst_18606__$1);

(statearr_18698[(14)] = inst_18605__$1);

(statearr_18698[(17)] = inst_18613);

(statearr_18698[(15)] = inst_18604__$1);

(statearr_18698[(16)] = inst_18603__$1);

return statearr_18698;
})();
var statearr_18699_18734 = state_18662__$1;
(statearr_18699_18734[(2)] = null);

(statearr_18699_18734[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18663 === (18))){
var inst_18632 = (state_18662[(2)]);
var state_18662__$1 = state_18662;
var statearr_18700_18735 = state_18662__$1;
(statearr_18700_18735[(2)] = inst_18632);

(statearr_18700_18735[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18663 === (8))){
var inst_18606 = (state_18662[(12)]);
var inst_18605 = (state_18662[(14)]);
var inst_18608 = (inst_18606 < inst_18605);
var inst_18609 = inst_18608;
var state_18662__$1 = state_18662;
if(cljs.core.truth_(inst_18609)){
var statearr_18701_18736 = state_18662__$1;
(statearr_18701_18736[(1)] = (10));

} else {
var statearr_18702_18737 = state_18662__$1;
(statearr_18702_18737[(1)] = (11));

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
var cljs$core$async$state_machine__15376__auto__ = null;
var cljs$core$async$state_machine__15376__auto____0 = (function (){
var statearr_18703 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18703[(0)] = cljs$core$async$state_machine__15376__auto__);

(statearr_18703[(1)] = (1));

return statearr_18703;
});
var cljs$core$async$state_machine__15376__auto____1 = (function (state_18662){
while(true){
var ret_value__15377__auto__ = (function (){try{while(true){
var result__15378__auto__ = switch__15375__auto__(state_18662);
if(cljs.core.keyword_identical_QMARK_(result__15378__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15378__auto__;
}
break;
}
}catch (e18704){var ex__15379__auto__ = e18704;
var statearr_18705_18738 = state_18662;
(statearr_18705_18738[(2)] = ex__15379__auto__);


if(cljs.core.seq((state_18662[(4)]))){
var statearr_18706_18739 = state_18662;
(statearr_18706_18739[(1)] = cljs.core.first((state_18662[(4)])));

} else {
throw ex__15379__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15377__auto__,cljs.core.cst$kw$recur)){
var G__18740 = state_18662;
state_18662 = G__18740;
continue;
} else {
return ret_value__15377__auto__;
}
break;
}
});
cljs$core$async$state_machine__15376__auto__ = function(state_18662){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15376__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15376__auto____1.call(this,state_18662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15376__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15376__auto____0;
cljs$core$async$state_machine__15376__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15376__auto____1;
return cljs$core$async$state_machine__15376__auto__;
})()
})();
var state__15504__auto__ = (function (){var statearr_18707 = (f__15503__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15503__auto__.cljs$core$IFn$_invoke$arity$0() : f__15503__auto__.call(null));
(statearr_18707[(6)] = c__15502__auto___18709);

return statearr_18707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15504__auto__);
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
var G__18742 = arguments.length;
switch (G__18742) {
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
var G__18745 = arguments.length;
switch (G__18745) {
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
var G__18748 = arguments.length;
switch (G__18748) {
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
var c__15502__auto___18826 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15503__auto__ = (function (){var switch__15375__auto__ = (function (state_18791){
var state_val_18792 = (state_18791[(1)]);
if((state_val_18792 === (7))){
var state_18791__$1 = state_18791;
var statearr_18793_18827 = state_18791__$1;
(statearr_18793_18827[(2)] = null);

(statearr_18793_18827[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18792 === (1))){
var state_18791__$1 = state_18791;
var statearr_18794_18828 = state_18791__$1;
(statearr_18794_18828[(2)] = null);

(statearr_18794_18828[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18792 === (4))){
var inst_18751 = (state_18791[(7)]);
var inst_18752 = (state_18791[(8)]);
var inst_18754 = (inst_18752 < inst_18751);
var state_18791__$1 = state_18791;
if(cljs.core.truth_(inst_18754)){
var statearr_18795_18829 = state_18791__$1;
(statearr_18795_18829[(1)] = (6));

} else {
var statearr_18796_18830 = state_18791__$1;
(statearr_18796_18830[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18792 === (15))){
var inst_18777 = (state_18791[(9)]);
var inst_18782 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_18777);
var state_18791__$1 = state_18791;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18791__$1,(17),out,inst_18782);
} else {
if((state_val_18792 === (13))){
var inst_18777 = (state_18791[(9)]);
var inst_18777__$1 = (state_18791[(2)]);
var inst_18778 = cljs.core.some(cljs.core.nil_QMARK_,inst_18777__$1);
var state_18791__$1 = (function (){var statearr_18797 = state_18791;
(statearr_18797[(9)] = inst_18777__$1);

return statearr_18797;
})();
if(cljs.core.truth_(inst_18778)){
var statearr_18798_18831 = state_18791__$1;
(statearr_18798_18831[(1)] = (14));

} else {
var statearr_18799_18832 = state_18791__$1;
(statearr_18799_18832[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18792 === (6))){
var state_18791__$1 = state_18791;
var statearr_18800_18833 = state_18791__$1;
(statearr_18800_18833[(2)] = null);

(statearr_18800_18833[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18792 === (17))){
var inst_18784 = (state_18791[(2)]);
var state_18791__$1 = (function (){var statearr_18802 = state_18791;
(statearr_18802[(10)] = inst_18784);

return statearr_18802;
})();
var statearr_18803_18834 = state_18791__$1;
(statearr_18803_18834[(2)] = null);

(statearr_18803_18834[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18792 === (3))){
var inst_18789 = (state_18791[(2)]);
var state_18791__$1 = state_18791;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18791__$1,inst_18789);
} else {
if((state_val_18792 === (12))){
var _ = (function (){var statearr_18804 = state_18791;
(statearr_18804[(4)] = cljs.core.rest((state_18791[(4)])));

return statearr_18804;
})();
var state_18791__$1 = state_18791;
var ex18801 = (state_18791__$1[(2)]);
var statearr_18805_18835 = state_18791__$1;
(statearr_18805_18835[(5)] = ex18801);


if((ex18801 instanceof Object)){
var statearr_18806_18836 = state_18791__$1;
(statearr_18806_18836[(1)] = (11));

(statearr_18806_18836[(5)] = null);

} else {
throw ex18801;

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18792 === (2))){
var inst_18750 = cljs.core.reset_BANG_(dctr,cnt);
var inst_18751 = cnt;
var inst_18752 = (0);
var state_18791__$1 = (function (){var statearr_18807 = state_18791;
(statearr_18807[(7)] = inst_18751);

(statearr_18807[(8)] = inst_18752);

(statearr_18807[(11)] = inst_18750);

return statearr_18807;
})();
var statearr_18808_18837 = state_18791__$1;
(statearr_18808_18837[(2)] = null);

(statearr_18808_18837[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18792 === (11))){
var inst_18756 = (state_18791[(2)]);
var inst_18757 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_18791__$1 = (function (){var statearr_18809 = state_18791;
(statearr_18809[(12)] = inst_18756);

return statearr_18809;
})();
var statearr_18810_18838 = state_18791__$1;
(statearr_18810_18838[(2)] = inst_18757);

(statearr_18810_18838[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18792 === (9))){
var inst_18752 = (state_18791[(8)]);
var _ = (function (){var statearr_18811 = state_18791;
(statearr_18811[(4)] = cljs.core.cons((12),(state_18791[(4)])));

return statearr_18811;
})();
var inst_18763 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_18752) : chs__$1.call(null,inst_18752));
var inst_18764 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_18752) : done.call(null,inst_18752));
var inst_18765 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_18763,inst_18764);
var ___$1 = (function (){var statearr_18812 = state_18791;
(statearr_18812[(4)] = cljs.core.rest((state_18791[(4)])));

return statearr_18812;
})();
var state_18791__$1 = state_18791;
var statearr_18813_18839 = state_18791__$1;
(statearr_18813_18839[(2)] = inst_18765);

(statearr_18813_18839[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18792 === (5))){
var inst_18775 = (state_18791[(2)]);
var state_18791__$1 = (function (){var statearr_18814 = state_18791;
(statearr_18814[(13)] = inst_18775);

return statearr_18814;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18791__$1,(13),dchan);
} else {
if((state_val_18792 === (14))){
var inst_18780 = cljs.core.async.close_BANG_(out);
var state_18791__$1 = state_18791;
var statearr_18815_18840 = state_18791__$1;
(statearr_18815_18840[(2)] = inst_18780);

(statearr_18815_18840[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18792 === (16))){
var inst_18787 = (state_18791[(2)]);
var state_18791__$1 = state_18791;
var statearr_18816_18841 = state_18791__$1;
(statearr_18816_18841[(2)] = inst_18787);

(statearr_18816_18841[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18792 === (10))){
var inst_18752 = (state_18791[(8)]);
var inst_18768 = (state_18791[(2)]);
var inst_18769 = (inst_18752 + (1));
var inst_18752__$1 = inst_18769;
var state_18791__$1 = (function (){var statearr_18817 = state_18791;
(statearr_18817[(14)] = inst_18768);

(statearr_18817[(8)] = inst_18752__$1);

return statearr_18817;
})();
var statearr_18818_18842 = state_18791__$1;
(statearr_18818_18842[(2)] = null);

(statearr_18818_18842[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18792 === (8))){
var inst_18773 = (state_18791[(2)]);
var state_18791__$1 = state_18791;
var statearr_18819_18843 = state_18791__$1;
(statearr_18819_18843[(2)] = inst_18773);

(statearr_18819_18843[(1)] = (5));


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
var cljs$core$async$state_machine__15376__auto__ = null;
var cljs$core$async$state_machine__15376__auto____0 = (function (){
var statearr_18820 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18820[(0)] = cljs$core$async$state_machine__15376__auto__);

(statearr_18820[(1)] = (1));

return statearr_18820;
});
var cljs$core$async$state_machine__15376__auto____1 = (function (state_18791){
while(true){
var ret_value__15377__auto__ = (function (){try{while(true){
var result__15378__auto__ = switch__15375__auto__(state_18791);
if(cljs.core.keyword_identical_QMARK_(result__15378__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15378__auto__;
}
break;
}
}catch (e18821){var ex__15379__auto__ = e18821;
var statearr_18822_18844 = state_18791;
(statearr_18822_18844[(2)] = ex__15379__auto__);


if(cljs.core.seq((state_18791[(4)]))){
var statearr_18823_18845 = state_18791;
(statearr_18823_18845[(1)] = cljs.core.first((state_18791[(4)])));

} else {
throw ex__15379__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15377__auto__,cljs.core.cst$kw$recur)){
var G__18846 = state_18791;
state_18791 = G__18846;
continue;
} else {
return ret_value__15377__auto__;
}
break;
}
});
cljs$core$async$state_machine__15376__auto__ = function(state_18791){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15376__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15376__auto____1.call(this,state_18791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15376__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15376__auto____0;
cljs$core$async$state_machine__15376__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15376__auto____1;
return cljs$core$async$state_machine__15376__auto__;
})()
})();
var state__15504__auto__ = (function (){var statearr_18824 = (f__15503__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15503__auto__.cljs$core$IFn$_invoke$arity$0() : f__15503__auto__.call(null));
(statearr_18824[(6)] = c__15502__auto___18826);

return statearr_18824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15504__auto__);
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
var G__18849 = arguments.length;
switch (G__18849) {
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
var c__15502__auto___18904 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15503__auto__ = (function (){var switch__15375__auto__ = (function (state_18881){
var state_val_18882 = (state_18881[(1)]);
if((state_val_18882 === (7))){
var inst_18860 = (state_18881[(7)]);
var inst_18861 = (state_18881[(8)]);
var inst_18860__$1 = (state_18881[(2)]);
var inst_18861__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18860__$1,(0),null);
var inst_18862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18860__$1,(1),null);
var inst_18863 = (inst_18861__$1 == null);
var state_18881__$1 = (function (){var statearr_18883 = state_18881;
(statearr_18883[(7)] = inst_18860__$1);

(statearr_18883[(8)] = inst_18861__$1);

(statearr_18883[(9)] = inst_18862);

return statearr_18883;
})();
if(cljs.core.truth_(inst_18863)){
var statearr_18884_18905 = state_18881__$1;
(statearr_18884_18905[(1)] = (8));

} else {
var statearr_18885_18906 = state_18881__$1;
(statearr_18885_18906[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18882 === (1))){
var inst_18850 = cljs.core.vec(chs);
var inst_18851 = inst_18850;
var state_18881__$1 = (function (){var statearr_18886 = state_18881;
(statearr_18886[(10)] = inst_18851);

return statearr_18886;
})();
var statearr_18887_18907 = state_18881__$1;
(statearr_18887_18907[(2)] = null);

(statearr_18887_18907[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18882 === (4))){
var inst_18851 = (state_18881[(10)]);
var state_18881__$1 = state_18881;
return cljs.core.async.ioc_alts_BANG_(state_18881__$1,(7),inst_18851);
} else {
if((state_val_18882 === (6))){
var inst_18877 = (state_18881[(2)]);
var state_18881__$1 = state_18881;
var statearr_18888_18908 = state_18881__$1;
(statearr_18888_18908[(2)] = inst_18877);

(statearr_18888_18908[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18882 === (3))){
var inst_18879 = (state_18881[(2)]);
var state_18881__$1 = state_18881;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18881__$1,inst_18879);
} else {
if((state_val_18882 === (2))){
var inst_18851 = (state_18881[(10)]);
var inst_18853 = cljs.core.count(inst_18851);
var inst_18854 = (inst_18853 > (0));
var state_18881__$1 = state_18881;
if(cljs.core.truth_(inst_18854)){
var statearr_18890_18909 = state_18881__$1;
(statearr_18890_18909[(1)] = (4));

} else {
var statearr_18891_18910 = state_18881__$1;
(statearr_18891_18910[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18882 === (11))){
var inst_18851 = (state_18881[(10)]);
var inst_18870 = (state_18881[(2)]);
var tmp18889 = inst_18851;
var inst_18851__$1 = tmp18889;
var state_18881__$1 = (function (){var statearr_18892 = state_18881;
(statearr_18892[(11)] = inst_18870);

(statearr_18892[(10)] = inst_18851__$1);

return statearr_18892;
})();
var statearr_18893_18911 = state_18881__$1;
(statearr_18893_18911[(2)] = null);

(statearr_18893_18911[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18882 === (9))){
var inst_18861 = (state_18881[(8)]);
var state_18881__$1 = state_18881;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18881__$1,(11),out,inst_18861);
} else {
if((state_val_18882 === (5))){
var inst_18875 = cljs.core.async.close_BANG_(out);
var state_18881__$1 = state_18881;
var statearr_18894_18912 = state_18881__$1;
(statearr_18894_18912[(2)] = inst_18875);

(statearr_18894_18912[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18882 === (10))){
var inst_18873 = (state_18881[(2)]);
var state_18881__$1 = state_18881;
var statearr_18895_18913 = state_18881__$1;
(statearr_18895_18913[(2)] = inst_18873);

(statearr_18895_18913[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18882 === (8))){
var inst_18851 = (state_18881[(10)]);
var inst_18860 = (state_18881[(7)]);
var inst_18861 = (state_18881[(8)]);
var inst_18862 = (state_18881[(9)]);
var inst_18865 = (function (){var cs = inst_18851;
var vec__18856 = inst_18860;
var v = inst_18861;
var c = inst_18862;
return (function (p1__18847_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__18847_SHARP_);
});
})();
var inst_18866 = cljs.core.filterv(inst_18865,inst_18851);
var inst_18851__$1 = inst_18866;
var state_18881__$1 = (function (){var statearr_18896 = state_18881;
(statearr_18896[(10)] = inst_18851__$1);

return statearr_18896;
})();
var statearr_18897_18914 = state_18881__$1;
(statearr_18897_18914[(2)] = null);

(statearr_18897_18914[(1)] = (2));


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
var cljs$core$async$state_machine__15376__auto__ = null;
var cljs$core$async$state_machine__15376__auto____0 = (function (){
var statearr_18898 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18898[(0)] = cljs$core$async$state_machine__15376__auto__);

(statearr_18898[(1)] = (1));

return statearr_18898;
});
var cljs$core$async$state_machine__15376__auto____1 = (function (state_18881){
while(true){
var ret_value__15377__auto__ = (function (){try{while(true){
var result__15378__auto__ = switch__15375__auto__(state_18881);
if(cljs.core.keyword_identical_QMARK_(result__15378__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15378__auto__;
}
break;
}
}catch (e18899){var ex__15379__auto__ = e18899;
var statearr_18900_18915 = state_18881;
(statearr_18900_18915[(2)] = ex__15379__auto__);


if(cljs.core.seq((state_18881[(4)]))){
var statearr_18901_18916 = state_18881;
(statearr_18901_18916[(1)] = cljs.core.first((state_18881[(4)])));

} else {
throw ex__15379__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15377__auto__,cljs.core.cst$kw$recur)){
var G__18917 = state_18881;
state_18881 = G__18917;
continue;
} else {
return ret_value__15377__auto__;
}
break;
}
});
cljs$core$async$state_machine__15376__auto__ = function(state_18881){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15376__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15376__auto____1.call(this,state_18881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15376__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15376__auto____0;
cljs$core$async$state_machine__15376__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15376__auto____1;
return cljs$core$async$state_machine__15376__auto__;
})()
})();
var state__15504__auto__ = (function (){var statearr_18902 = (f__15503__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15503__auto__.cljs$core$IFn$_invoke$arity$0() : f__15503__auto__.call(null));
(statearr_18902[(6)] = c__15502__auto___18904);

return statearr_18902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15504__auto__);
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
var G__18919 = arguments.length;
switch (G__18919) {
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
var c__15502__auto___18965 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15503__auto__ = (function (){var switch__15375__auto__ = (function (state_18943){
var state_val_18944 = (state_18943[(1)]);
if((state_val_18944 === (7))){
var inst_18925 = (state_18943[(7)]);
var inst_18925__$1 = (state_18943[(2)]);
var inst_18926 = (inst_18925__$1 == null);
var inst_18927 = cljs.core.not(inst_18926);
var state_18943__$1 = (function (){var statearr_18945 = state_18943;
(statearr_18945[(7)] = inst_18925__$1);

return statearr_18945;
})();
if(inst_18927){
var statearr_18946_18966 = state_18943__$1;
(statearr_18946_18966[(1)] = (8));

} else {
var statearr_18947_18967 = state_18943__$1;
(statearr_18947_18967[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18944 === (1))){
var inst_18920 = (0);
var state_18943__$1 = (function (){var statearr_18948 = state_18943;
(statearr_18948[(8)] = inst_18920);

return statearr_18948;
})();
var statearr_18949_18968 = state_18943__$1;
(statearr_18949_18968[(2)] = null);

(statearr_18949_18968[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18944 === (4))){
var state_18943__$1 = state_18943;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18943__$1,(7),ch);
} else {
if((state_val_18944 === (6))){
var inst_18938 = (state_18943[(2)]);
var state_18943__$1 = state_18943;
var statearr_18950_18969 = state_18943__$1;
(statearr_18950_18969[(2)] = inst_18938);

(statearr_18950_18969[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18944 === (3))){
var inst_18940 = (state_18943[(2)]);
var inst_18941 = cljs.core.async.close_BANG_(out);
var state_18943__$1 = (function (){var statearr_18951 = state_18943;
(statearr_18951[(9)] = inst_18940);

return statearr_18951;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18943__$1,inst_18941);
} else {
if((state_val_18944 === (2))){
var inst_18920 = (state_18943[(8)]);
var inst_18922 = (inst_18920 < n);
var state_18943__$1 = state_18943;
if(cljs.core.truth_(inst_18922)){
var statearr_18952_18970 = state_18943__$1;
(statearr_18952_18970[(1)] = (4));

} else {
var statearr_18953_18971 = state_18943__$1;
(statearr_18953_18971[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18944 === (11))){
var inst_18920 = (state_18943[(8)]);
var inst_18930 = (state_18943[(2)]);
var inst_18931 = (inst_18920 + (1));
var inst_18920__$1 = inst_18931;
var state_18943__$1 = (function (){var statearr_18954 = state_18943;
(statearr_18954[(8)] = inst_18920__$1);

(statearr_18954[(10)] = inst_18930);

return statearr_18954;
})();
var statearr_18955_18972 = state_18943__$1;
(statearr_18955_18972[(2)] = null);

(statearr_18955_18972[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18944 === (9))){
var state_18943__$1 = state_18943;
var statearr_18956_18973 = state_18943__$1;
(statearr_18956_18973[(2)] = null);

(statearr_18956_18973[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18944 === (5))){
var state_18943__$1 = state_18943;
var statearr_18957_18974 = state_18943__$1;
(statearr_18957_18974[(2)] = null);

(statearr_18957_18974[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18944 === (10))){
var inst_18935 = (state_18943[(2)]);
var state_18943__$1 = state_18943;
var statearr_18958_18975 = state_18943__$1;
(statearr_18958_18975[(2)] = inst_18935);

(statearr_18958_18975[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18944 === (8))){
var inst_18925 = (state_18943[(7)]);
var state_18943__$1 = state_18943;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18943__$1,(11),out,inst_18925);
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
var cljs$core$async$state_machine__15376__auto__ = null;
var cljs$core$async$state_machine__15376__auto____0 = (function (){
var statearr_18959 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18959[(0)] = cljs$core$async$state_machine__15376__auto__);

(statearr_18959[(1)] = (1));

return statearr_18959;
});
var cljs$core$async$state_machine__15376__auto____1 = (function (state_18943){
while(true){
var ret_value__15377__auto__ = (function (){try{while(true){
var result__15378__auto__ = switch__15375__auto__(state_18943);
if(cljs.core.keyword_identical_QMARK_(result__15378__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15378__auto__;
}
break;
}
}catch (e18960){var ex__15379__auto__ = e18960;
var statearr_18961_18976 = state_18943;
(statearr_18961_18976[(2)] = ex__15379__auto__);


if(cljs.core.seq((state_18943[(4)]))){
var statearr_18962_18977 = state_18943;
(statearr_18962_18977[(1)] = cljs.core.first((state_18943[(4)])));

} else {
throw ex__15379__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15377__auto__,cljs.core.cst$kw$recur)){
var G__18978 = state_18943;
state_18943 = G__18978;
continue;
} else {
return ret_value__15377__auto__;
}
break;
}
});
cljs$core$async$state_machine__15376__auto__ = function(state_18943){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15376__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15376__auto____1.call(this,state_18943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15376__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15376__auto____0;
cljs$core$async$state_machine__15376__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15376__auto____1;
return cljs$core$async$state_machine__15376__auto__;
})()
})();
var state__15504__auto__ = (function (){var statearr_18963 = (f__15503__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15503__auto__.cljs$core$IFn$_invoke$arity$0() : f__15503__auto__.call(null));
(statearr_18963[(6)] = c__15502__auto___18965);

return statearr_18963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15504__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18980 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18980 = (function (f,ch,meta18981){
this.f = f;
this.ch = ch;
this.meta18981 = meta18981;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18980.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18982,meta18981__$1){
var self__ = this;
var _18982__$1 = this;
return (new cljs.core.async.t_cljs$core$async18980(self__.f,self__.ch,meta18981__$1));
}));

(cljs.core.async.t_cljs$core$async18980.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18982){
var self__ = this;
var _18982__$1 = this;
return self__.meta18981;
}));

(cljs.core.async.t_cljs$core$async18980.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18980.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18980.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18980.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18980.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18983 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18983 = (function (f,ch,meta18981,_,fn1,meta18984){
this.f = f;
this.ch = ch;
this.meta18981 = meta18981;
this._ = _;
this.fn1 = fn1;
this.meta18984 = meta18984;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18983.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18985,meta18984__$1){
var self__ = this;
var _18985__$1 = this;
return (new cljs.core.async.t_cljs$core$async18983(self__.f,self__.ch,self__.meta18981,self__._,self__.fn1,meta18984__$1));
}));

(cljs.core.async.t_cljs$core$async18983.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18985){
var self__ = this;
var _18985__$1 = this;
return self__.meta18984;
}));

(cljs.core.async.t_cljs$core$async18983.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18983.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async18983.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18983.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__18979_SHARP_){
var G__18986 = (((p1__18979_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__18979_SHARP_) : self__.f.call(null,p1__18979_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__18986) : f1.call(null,G__18986));
});
}));

(cljs.core.async.t_cljs$core$async18983.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18981,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async18980], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta18984], null);
}));

(cljs.core.async.t_cljs$core$async18983.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18983.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18983");

(cljs.core.async.t_cljs$core$async18983.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async18983");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18983.
 */
cljs.core.async.__GT_t_cljs$core$async18983 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18983(f__$1,ch__$1,meta18981__$1,___$2,fn1__$1,meta18984){
return (new cljs.core.async.t_cljs$core$async18983(f__$1,ch__$1,meta18981__$1,___$2,fn1__$1,meta18984));
});

}

return (new cljs.core.async.t_cljs$core$async18983(self__.f,self__.ch,self__.meta18981,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__18987 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__18987) : self__.f.call(null,G__18987));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async18980.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18980.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async18980.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18981], null);
}));

(cljs.core.async.t_cljs$core$async18980.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18980.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18980");

(cljs.core.async.t_cljs$core$async18980.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async18980");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18980.
 */
cljs.core.async.__GT_t_cljs$core$async18980 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18980(f__$1,ch__$1,meta18981){
return (new cljs.core.async.t_cljs$core$async18980(f__$1,ch__$1,meta18981));
});

}

return (new cljs.core.async.t_cljs$core$async18980(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18988 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18988 = (function (f,ch,meta18989){
this.f = f;
this.ch = ch;
this.meta18989 = meta18989;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18988.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18990,meta18989__$1){
var self__ = this;
var _18990__$1 = this;
return (new cljs.core.async.t_cljs$core$async18988(self__.f,self__.ch,meta18989__$1));
}));

(cljs.core.async.t_cljs$core$async18988.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18990){
var self__ = this;
var _18990__$1 = this;
return self__.meta18989;
}));

(cljs.core.async.t_cljs$core$async18988.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18988.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18988.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18988.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18988.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18988.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async18988.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18989], null);
}));

(cljs.core.async.t_cljs$core$async18988.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18988.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18988");

(cljs.core.async.t_cljs$core$async18988.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async18988");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18988.
 */
cljs.core.async.__GT_t_cljs$core$async18988 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async18988(f__$1,ch__$1,meta18989){
return (new cljs.core.async.t_cljs$core$async18988(f__$1,ch__$1,meta18989));
});

}

return (new cljs.core.async.t_cljs$core$async18988(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18991 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18991 = (function (p,ch,meta18992){
this.p = p;
this.ch = ch;
this.meta18992 = meta18992;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18991.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18993,meta18992__$1){
var self__ = this;
var _18993__$1 = this;
return (new cljs.core.async.t_cljs$core$async18991(self__.p,self__.ch,meta18992__$1));
}));

(cljs.core.async.t_cljs$core$async18991.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18993){
var self__ = this;
var _18993__$1 = this;
return self__.meta18992;
}));

(cljs.core.async.t_cljs$core$async18991.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18991.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18991.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18991.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18991.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18991.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18991.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async18991.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18992], null);
}));

(cljs.core.async.t_cljs$core$async18991.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18991.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18991");

(cljs.core.async.t_cljs$core$async18991.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async18991");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18991.
 */
cljs.core.async.__GT_t_cljs$core$async18991 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async18991(p__$1,ch__$1,meta18992){
return (new cljs.core.async.t_cljs$core$async18991(p__$1,ch__$1,meta18992));
});

}

return (new cljs.core.async.t_cljs$core$async18991(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__18995 = arguments.length;
switch (G__18995) {
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
var c__15502__auto___19036 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15503__auto__ = (function (){var switch__15375__auto__ = (function (state_19016){
var state_val_19017 = (state_19016[(1)]);
if((state_val_19017 === (7))){
var inst_19012 = (state_19016[(2)]);
var state_19016__$1 = state_19016;
var statearr_19018_19037 = state_19016__$1;
(statearr_19018_19037[(2)] = inst_19012);

(statearr_19018_19037[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19017 === (1))){
var state_19016__$1 = state_19016;
var statearr_19019_19038 = state_19016__$1;
(statearr_19019_19038[(2)] = null);

(statearr_19019_19038[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19017 === (4))){
var inst_18998 = (state_19016[(7)]);
var inst_18998__$1 = (state_19016[(2)]);
var inst_18999 = (inst_18998__$1 == null);
var state_19016__$1 = (function (){var statearr_19020 = state_19016;
(statearr_19020[(7)] = inst_18998__$1);

return statearr_19020;
})();
if(cljs.core.truth_(inst_18999)){
var statearr_19021_19039 = state_19016__$1;
(statearr_19021_19039[(1)] = (5));

} else {
var statearr_19022_19040 = state_19016__$1;
(statearr_19022_19040[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19017 === (6))){
var inst_18998 = (state_19016[(7)]);
var inst_19003 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18998) : p.call(null,inst_18998));
var state_19016__$1 = state_19016;
if(cljs.core.truth_(inst_19003)){
var statearr_19023_19041 = state_19016__$1;
(statearr_19023_19041[(1)] = (8));

} else {
var statearr_19024_19042 = state_19016__$1;
(statearr_19024_19042[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19017 === (3))){
var inst_19014 = (state_19016[(2)]);
var state_19016__$1 = state_19016;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19016__$1,inst_19014);
} else {
if((state_val_19017 === (2))){
var state_19016__$1 = state_19016;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19016__$1,(4),ch);
} else {
if((state_val_19017 === (11))){
var inst_19006 = (state_19016[(2)]);
var state_19016__$1 = state_19016;
var statearr_19025_19043 = state_19016__$1;
(statearr_19025_19043[(2)] = inst_19006);

(statearr_19025_19043[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19017 === (9))){
var state_19016__$1 = state_19016;
var statearr_19026_19044 = state_19016__$1;
(statearr_19026_19044[(2)] = null);

(statearr_19026_19044[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19017 === (5))){
var inst_19001 = cljs.core.async.close_BANG_(out);
var state_19016__$1 = state_19016;
var statearr_19027_19045 = state_19016__$1;
(statearr_19027_19045[(2)] = inst_19001);

(statearr_19027_19045[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19017 === (10))){
var inst_19009 = (state_19016[(2)]);
var state_19016__$1 = (function (){var statearr_19028 = state_19016;
(statearr_19028[(8)] = inst_19009);

return statearr_19028;
})();
var statearr_19029_19046 = state_19016__$1;
(statearr_19029_19046[(2)] = null);

(statearr_19029_19046[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19017 === (8))){
var inst_18998 = (state_19016[(7)]);
var state_19016__$1 = state_19016;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19016__$1,(11),out,inst_18998);
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
var cljs$core$async$state_machine__15376__auto__ = null;
var cljs$core$async$state_machine__15376__auto____0 = (function (){
var statearr_19030 = [null,null,null,null,null,null,null,null,null];
(statearr_19030[(0)] = cljs$core$async$state_machine__15376__auto__);

(statearr_19030[(1)] = (1));

return statearr_19030;
});
var cljs$core$async$state_machine__15376__auto____1 = (function (state_19016){
while(true){
var ret_value__15377__auto__ = (function (){try{while(true){
var result__15378__auto__ = switch__15375__auto__(state_19016);
if(cljs.core.keyword_identical_QMARK_(result__15378__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15378__auto__;
}
break;
}
}catch (e19031){var ex__15379__auto__ = e19031;
var statearr_19032_19047 = state_19016;
(statearr_19032_19047[(2)] = ex__15379__auto__);


if(cljs.core.seq((state_19016[(4)]))){
var statearr_19033_19048 = state_19016;
(statearr_19033_19048[(1)] = cljs.core.first((state_19016[(4)])));

} else {
throw ex__15379__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15377__auto__,cljs.core.cst$kw$recur)){
var G__19049 = state_19016;
state_19016 = G__19049;
continue;
} else {
return ret_value__15377__auto__;
}
break;
}
});
cljs$core$async$state_machine__15376__auto__ = function(state_19016){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15376__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15376__auto____1.call(this,state_19016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15376__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15376__auto____0;
cljs$core$async$state_machine__15376__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15376__auto____1;
return cljs$core$async$state_machine__15376__auto__;
})()
})();
var state__15504__auto__ = (function (){var statearr_19034 = (f__15503__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15503__auto__.cljs$core$IFn$_invoke$arity$0() : f__15503__auto__.call(null));
(statearr_19034[(6)] = c__15502__auto___19036);

return statearr_19034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15504__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19051 = arguments.length;
switch (G__19051) {
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
var c__15502__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15503__auto__ = (function (){var switch__15375__auto__ = (function (state_19114){
var state_val_19115 = (state_19114[(1)]);
if((state_val_19115 === (7))){
var inst_19110 = (state_19114[(2)]);
var state_19114__$1 = state_19114;
var statearr_19116_19155 = state_19114__$1;
(statearr_19116_19155[(2)] = inst_19110);

(statearr_19116_19155[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19115 === (20))){
var inst_19080 = (state_19114[(7)]);
var inst_19091 = (state_19114[(2)]);
var inst_19092 = cljs.core.next(inst_19080);
var inst_19066 = inst_19092;
var inst_19067 = null;
var inst_19068 = (0);
var inst_19069 = (0);
var state_19114__$1 = (function (){var statearr_19117 = state_19114;
(statearr_19117[(8)] = inst_19091);

(statearr_19117[(9)] = inst_19069);

(statearr_19117[(10)] = inst_19066);

(statearr_19117[(11)] = inst_19067);

(statearr_19117[(12)] = inst_19068);

return statearr_19117;
})();
var statearr_19118_19156 = state_19114__$1;
(statearr_19118_19156[(2)] = null);

(statearr_19118_19156[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19115 === (1))){
var state_19114__$1 = state_19114;
var statearr_19119_19157 = state_19114__$1;
(statearr_19119_19157[(2)] = null);

(statearr_19119_19157[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19115 === (4))){
var inst_19055 = (state_19114[(13)]);
var inst_19055__$1 = (state_19114[(2)]);
var inst_19056 = (inst_19055__$1 == null);
var state_19114__$1 = (function (){var statearr_19120 = state_19114;
(statearr_19120[(13)] = inst_19055__$1);

return statearr_19120;
})();
if(cljs.core.truth_(inst_19056)){
var statearr_19121_19158 = state_19114__$1;
(statearr_19121_19158[(1)] = (5));

} else {
var statearr_19122_19159 = state_19114__$1;
(statearr_19122_19159[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19115 === (15))){
var state_19114__$1 = state_19114;
var statearr_19126_19160 = state_19114__$1;
(statearr_19126_19160[(2)] = null);

(statearr_19126_19160[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19115 === (21))){
var state_19114__$1 = state_19114;
var statearr_19127_19161 = state_19114__$1;
(statearr_19127_19161[(2)] = null);

(statearr_19127_19161[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19115 === (13))){
var inst_19069 = (state_19114[(9)]);
var inst_19066 = (state_19114[(10)]);
var inst_19067 = (state_19114[(11)]);
var inst_19068 = (state_19114[(12)]);
var inst_19076 = (state_19114[(2)]);
var inst_19077 = (inst_19069 + (1));
var tmp19123 = inst_19066;
var tmp19124 = inst_19067;
var tmp19125 = inst_19068;
var inst_19066__$1 = tmp19123;
var inst_19067__$1 = tmp19124;
var inst_19068__$1 = tmp19125;
var inst_19069__$1 = inst_19077;
var state_19114__$1 = (function (){var statearr_19128 = state_19114;
(statearr_19128[(9)] = inst_19069__$1);

(statearr_19128[(10)] = inst_19066__$1);

(statearr_19128[(11)] = inst_19067__$1);

(statearr_19128[(12)] = inst_19068__$1);

(statearr_19128[(14)] = inst_19076);

return statearr_19128;
})();
var statearr_19129_19162 = state_19114__$1;
(statearr_19129_19162[(2)] = null);

(statearr_19129_19162[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19115 === (22))){
var state_19114__$1 = state_19114;
var statearr_19130_19163 = state_19114__$1;
(statearr_19130_19163[(2)] = null);

(statearr_19130_19163[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19115 === (6))){
var inst_19055 = (state_19114[(13)]);
var inst_19064 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19055) : f.call(null,inst_19055));
var inst_19065 = cljs.core.seq(inst_19064);
var inst_19066 = inst_19065;
var inst_19067 = null;
var inst_19068 = (0);
var inst_19069 = (0);
var state_19114__$1 = (function (){var statearr_19131 = state_19114;
(statearr_19131[(9)] = inst_19069);

(statearr_19131[(10)] = inst_19066);

(statearr_19131[(11)] = inst_19067);

(statearr_19131[(12)] = inst_19068);

return statearr_19131;
})();
var statearr_19132_19164 = state_19114__$1;
(statearr_19132_19164[(2)] = null);

(statearr_19132_19164[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19115 === (17))){
var inst_19080 = (state_19114[(7)]);
var inst_19084 = cljs.core.chunk_first(inst_19080);
var inst_19085 = cljs.core.chunk_rest(inst_19080);
var inst_19086 = cljs.core.count(inst_19084);
var inst_19066 = inst_19085;
var inst_19067 = inst_19084;
var inst_19068 = inst_19086;
var inst_19069 = (0);
var state_19114__$1 = (function (){var statearr_19133 = state_19114;
(statearr_19133[(9)] = inst_19069);

(statearr_19133[(10)] = inst_19066);

(statearr_19133[(11)] = inst_19067);

(statearr_19133[(12)] = inst_19068);

return statearr_19133;
})();
var statearr_19134_19165 = state_19114__$1;
(statearr_19134_19165[(2)] = null);

(statearr_19134_19165[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19115 === (3))){
var inst_19112 = (state_19114[(2)]);
var state_19114__$1 = state_19114;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19114__$1,inst_19112);
} else {
if((state_val_19115 === (12))){
var inst_19100 = (state_19114[(2)]);
var state_19114__$1 = state_19114;
var statearr_19135_19166 = state_19114__$1;
(statearr_19135_19166[(2)] = inst_19100);

(statearr_19135_19166[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19115 === (2))){
var state_19114__$1 = state_19114;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19114__$1,(4),in$);
} else {
if((state_val_19115 === (23))){
var inst_19108 = (state_19114[(2)]);
var state_19114__$1 = state_19114;
var statearr_19136_19167 = state_19114__$1;
(statearr_19136_19167[(2)] = inst_19108);

(statearr_19136_19167[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19115 === (19))){
var inst_19095 = (state_19114[(2)]);
var state_19114__$1 = state_19114;
var statearr_19137_19168 = state_19114__$1;
(statearr_19137_19168[(2)] = inst_19095);

(statearr_19137_19168[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19115 === (11))){
var inst_19080 = (state_19114[(7)]);
var inst_19066 = (state_19114[(10)]);
var inst_19080__$1 = cljs.core.seq(inst_19066);
var state_19114__$1 = (function (){var statearr_19138 = state_19114;
(statearr_19138[(7)] = inst_19080__$1);

return statearr_19138;
})();
if(inst_19080__$1){
var statearr_19139_19169 = state_19114__$1;
(statearr_19139_19169[(1)] = (14));

} else {
var statearr_19140_19170 = state_19114__$1;
(statearr_19140_19170[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19115 === (9))){
var inst_19102 = (state_19114[(2)]);
var inst_19103 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_19114__$1 = (function (){var statearr_19141 = state_19114;
(statearr_19141[(15)] = inst_19102);

return statearr_19141;
})();
if(cljs.core.truth_(inst_19103)){
var statearr_19142_19171 = state_19114__$1;
(statearr_19142_19171[(1)] = (21));

} else {
var statearr_19143_19172 = state_19114__$1;
(statearr_19143_19172[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19115 === (5))){
var inst_19058 = cljs.core.async.close_BANG_(out);
var state_19114__$1 = state_19114;
var statearr_19144_19173 = state_19114__$1;
(statearr_19144_19173[(2)] = inst_19058);

(statearr_19144_19173[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19115 === (14))){
var inst_19080 = (state_19114[(7)]);
var inst_19082 = cljs.core.chunked_seq_QMARK_(inst_19080);
var state_19114__$1 = state_19114;
if(inst_19082){
var statearr_19145_19174 = state_19114__$1;
(statearr_19145_19174[(1)] = (17));

} else {
var statearr_19146_19175 = state_19114__$1;
(statearr_19146_19175[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19115 === (16))){
var inst_19098 = (state_19114[(2)]);
var state_19114__$1 = state_19114;
var statearr_19147_19176 = state_19114__$1;
(statearr_19147_19176[(2)] = inst_19098);

(statearr_19147_19176[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19115 === (10))){
var inst_19069 = (state_19114[(9)]);
var inst_19067 = (state_19114[(11)]);
var inst_19074 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19067,inst_19069);
var state_19114__$1 = state_19114;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19114__$1,(13),out,inst_19074);
} else {
if((state_val_19115 === (18))){
var inst_19080 = (state_19114[(7)]);
var inst_19089 = cljs.core.first(inst_19080);
var state_19114__$1 = state_19114;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19114__$1,(20),out,inst_19089);
} else {
if((state_val_19115 === (8))){
var inst_19069 = (state_19114[(9)]);
var inst_19068 = (state_19114[(12)]);
var inst_19071 = (inst_19069 < inst_19068);
var inst_19072 = inst_19071;
var state_19114__$1 = state_19114;
if(cljs.core.truth_(inst_19072)){
var statearr_19148_19177 = state_19114__$1;
(statearr_19148_19177[(1)] = (10));

} else {
var statearr_19149_19178 = state_19114__$1;
(statearr_19149_19178[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__15376__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15376__auto____0 = (function (){
var statearr_19150 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19150[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15376__auto__);

(statearr_19150[(1)] = (1));

return statearr_19150;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15376__auto____1 = (function (state_19114){
while(true){
var ret_value__15377__auto__ = (function (){try{while(true){
var result__15378__auto__ = switch__15375__auto__(state_19114);
if(cljs.core.keyword_identical_QMARK_(result__15378__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15378__auto__;
}
break;
}
}catch (e19151){var ex__15379__auto__ = e19151;
var statearr_19152_19179 = state_19114;
(statearr_19152_19179[(2)] = ex__15379__auto__);


if(cljs.core.seq((state_19114[(4)]))){
var statearr_19153_19180 = state_19114;
(statearr_19153_19180[(1)] = cljs.core.first((state_19114[(4)])));

} else {
throw ex__15379__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15377__auto__,cljs.core.cst$kw$recur)){
var G__19181 = state_19114;
state_19114 = G__19181;
continue;
} else {
return ret_value__15377__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15376__auto__ = function(state_19114){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15376__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15376__auto____1.call(this,state_19114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15376__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15376__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15376__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15376__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15376__auto__;
})()
})();
var state__15504__auto__ = (function (){var statearr_19154 = (f__15503__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15503__auto__.cljs$core$IFn$_invoke$arity$0() : f__15503__auto__.call(null));
(statearr_19154[(6)] = c__15502__auto__);

return statearr_19154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15504__auto__);
}));

return c__15502__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19183 = arguments.length;
switch (G__19183) {
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
var G__19186 = arguments.length;
switch (G__19186) {
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
var G__19189 = arguments.length;
switch (G__19189) {
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
var c__15502__auto___19237 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15503__auto__ = (function (){var switch__15375__auto__ = (function (state_19213){
var state_val_19214 = (state_19213[(1)]);
if((state_val_19214 === (7))){
var inst_19208 = (state_19213[(2)]);
var state_19213__$1 = state_19213;
var statearr_19215_19238 = state_19213__$1;
(statearr_19215_19238[(2)] = inst_19208);

(statearr_19215_19238[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19214 === (1))){
var inst_19190 = null;
var state_19213__$1 = (function (){var statearr_19216 = state_19213;
(statearr_19216[(7)] = inst_19190);

return statearr_19216;
})();
var statearr_19217_19239 = state_19213__$1;
(statearr_19217_19239[(2)] = null);

(statearr_19217_19239[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19214 === (4))){
var inst_19193 = (state_19213[(8)]);
var inst_19193__$1 = (state_19213[(2)]);
var inst_19194 = (inst_19193__$1 == null);
var inst_19195 = cljs.core.not(inst_19194);
var state_19213__$1 = (function (){var statearr_19218 = state_19213;
(statearr_19218[(8)] = inst_19193__$1);

return statearr_19218;
})();
if(inst_19195){
var statearr_19219_19240 = state_19213__$1;
(statearr_19219_19240[(1)] = (5));

} else {
var statearr_19220_19241 = state_19213__$1;
(statearr_19220_19241[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19214 === (6))){
var state_19213__$1 = state_19213;
var statearr_19221_19242 = state_19213__$1;
(statearr_19221_19242[(2)] = null);

(statearr_19221_19242[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19214 === (3))){
var inst_19210 = (state_19213[(2)]);
var inst_19211 = cljs.core.async.close_BANG_(out);
var state_19213__$1 = (function (){var statearr_19222 = state_19213;
(statearr_19222[(9)] = inst_19210);

return statearr_19222;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19213__$1,inst_19211);
} else {
if((state_val_19214 === (2))){
var state_19213__$1 = state_19213;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19213__$1,(4),ch);
} else {
if((state_val_19214 === (11))){
var inst_19193 = (state_19213[(8)]);
var inst_19202 = (state_19213[(2)]);
var inst_19190 = inst_19193;
var state_19213__$1 = (function (){var statearr_19223 = state_19213;
(statearr_19223[(7)] = inst_19190);

(statearr_19223[(10)] = inst_19202);

return statearr_19223;
})();
var statearr_19224_19243 = state_19213__$1;
(statearr_19224_19243[(2)] = null);

(statearr_19224_19243[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19214 === (9))){
var inst_19193 = (state_19213[(8)]);
var state_19213__$1 = state_19213;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19213__$1,(11),out,inst_19193);
} else {
if((state_val_19214 === (5))){
var inst_19190 = (state_19213[(7)]);
var inst_19193 = (state_19213[(8)]);
var inst_19197 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19193,inst_19190);
var state_19213__$1 = state_19213;
if(inst_19197){
var statearr_19226_19244 = state_19213__$1;
(statearr_19226_19244[(1)] = (8));

} else {
var statearr_19227_19245 = state_19213__$1;
(statearr_19227_19245[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19214 === (10))){
var inst_19205 = (state_19213[(2)]);
var state_19213__$1 = state_19213;
var statearr_19228_19246 = state_19213__$1;
(statearr_19228_19246[(2)] = inst_19205);

(statearr_19228_19246[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19214 === (8))){
var inst_19190 = (state_19213[(7)]);
var tmp19225 = inst_19190;
var inst_19190__$1 = tmp19225;
var state_19213__$1 = (function (){var statearr_19229 = state_19213;
(statearr_19229[(7)] = inst_19190__$1);

return statearr_19229;
})();
var statearr_19230_19247 = state_19213__$1;
(statearr_19230_19247[(2)] = null);

(statearr_19230_19247[(1)] = (2));


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
var cljs$core$async$state_machine__15376__auto__ = null;
var cljs$core$async$state_machine__15376__auto____0 = (function (){
var statearr_19231 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19231[(0)] = cljs$core$async$state_machine__15376__auto__);

(statearr_19231[(1)] = (1));

return statearr_19231;
});
var cljs$core$async$state_machine__15376__auto____1 = (function (state_19213){
while(true){
var ret_value__15377__auto__ = (function (){try{while(true){
var result__15378__auto__ = switch__15375__auto__(state_19213);
if(cljs.core.keyword_identical_QMARK_(result__15378__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15378__auto__;
}
break;
}
}catch (e19232){var ex__15379__auto__ = e19232;
var statearr_19233_19248 = state_19213;
(statearr_19233_19248[(2)] = ex__15379__auto__);


if(cljs.core.seq((state_19213[(4)]))){
var statearr_19234_19249 = state_19213;
(statearr_19234_19249[(1)] = cljs.core.first((state_19213[(4)])));

} else {
throw ex__15379__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15377__auto__,cljs.core.cst$kw$recur)){
var G__19250 = state_19213;
state_19213 = G__19250;
continue;
} else {
return ret_value__15377__auto__;
}
break;
}
});
cljs$core$async$state_machine__15376__auto__ = function(state_19213){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15376__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15376__auto____1.call(this,state_19213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15376__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15376__auto____0;
cljs$core$async$state_machine__15376__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15376__auto____1;
return cljs$core$async$state_machine__15376__auto__;
})()
})();
var state__15504__auto__ = (function (){var statearr_19235 = (f__15503__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15503__auto__.cljs$core$IFn$_invoke$arity$0() : f__15503__auto__.call(null));
(statearr_19235[(6)] = c__15502__auto___19237);

return statearr_19235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15504__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19252 = arguments.length;
switch (G__19252) {
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
var c__15502__auto___19319 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15503__auto__ = (function (){var switch__15375__auto__ = (function (state_19290){
var state_val_19291 = (state_19290[(1)]);
if((state_val_19291 === (7))){
var inst_19286 = (state_19290[(2)]);
var state_19290__$1 = state_19290;
var statearr_19292_19320 = state_19290__$1;
(statearr_19292_19320[(2)] = inst_19286);

(statearr_19292_19320[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19291 === (1))){
var inst_19253 = (new Array(n));
var inst_19254 = inst_19253;
var inst_19255 = (0);
var state_19290__$1 = (function (){var statearr_19293 = state_19290;
(statearr_19293[(7)] = inst_19254);

(statearr_19293[(8)] = inst_19255);

return statearr_19293;
})();
var statearr_19294_19321 = state_19290__$1;
(statearr_19294_19321[(2)] = null);

(statearr_19294_19321[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19291 === (4))){
var inst_19258 = (state_19290[(9)]);
var inst_19258__$1 = (state_19290[(2)]);
var inst_19259 = (inst_19258__$1 == null);
var inst_19260 = cljs.core.not(inst_19259);
var state_19290__$1 = (function (){var statearr_19295 = state_19290;
(statearr_19295[(9)] = inst_19258__$1);

return statearr_19295;
})();
if(inst_19260){
var statearr_19296_19322 = state_19290__$1;
(statearr_19296_19322[(1)] = (5));

} else {
var statearr_19297_19323 = state_19290__$1;
(statearr_19297_19323[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19291 === (15))){
var inst_19280 = (state_19290[(2)]);
var state_19290__$1 = state_19290;
var statearr_19298_19324 = state_19290__$1;
(statearr_19298_19324[(2)] = inst_19280);

(statearr_19298_19324[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19291 === (13))){
var state_19290__$1 = state_19290;
var statearr_19299_19325 = state_19290__$1;
(statearr_19299_19325[(2)] = null);

(statearr_19299_19325[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19291 === (6))){
var inst_19255 = (state_19290[(8)]);
var inst_19276 = (inst_19255 > (0));
var state_19290__$1 = state_19290;
if(cljs.core.truth_(inst_19276)){
var statearr_19300_19326 = state_19290__$1;
(statearr_19300_19326[(1)] = (12));

} else {
var statearr_19301_19327 = state_19290__$1;
(statearr_19301_19327[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19291 === (3))){
var inst_19288 = (state_19290[(2)]);
var state_19290__$1 = state_19290;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19290__$1,inst_19288);
} else {
if((state_val_19291 === (12))){
var inst_19254 = (state_19290[(7)]);
var inst_19278 = cljs.core.vec(inst_19254);
var state_19290__$1 = state_19290;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19290__$1,(15),out,inst_19278);
} else {
if((state_val_19291 === (2))){
var state_19290__$1 = state_19290;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19290__$1,(4),ch);
} else {
if((state_val_19291 === (11))){
var inst_19270 = (state_19290[(2)]);
var inst_19271 = (new Array(n));
var inst_19254 = inst_19271;
var inst_19255 = (0);
var state_19290__$1 = (function (){var statearr_19302 = state_19290;
(statearr_19302[(7)] = inst_19254);

(statearr_19302[(8)] = inst_19255);

(statearr_19302[(10)] = inst_19270);

return statearr_19302;
})();
var statearr_19303_19328 = state_19290__$1;
(statearr_19303_19328[(2)] = null);

(statearr_19303_19328[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19291 === (9))){
var inst_19254 = (state_19290[(7)]);
var inst_19268 = cljs.core.vec(inst_19254);
var state_19290__$1 = state_19290;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19290__$1,(11),out,inst_19268);
} else {
if((state_val_19291 === (5))){
var inst_19254 = (state_19290[(7)]);
var inst_19255 = (state_19290[(8)]);
var inst_19258 = (state_19290[(9)]);
var inst_19263 = (state_19290[(11)]);
var inst_19262 = (inst_19254[inst_19255] = inst_19258);
var inst_19263__$1 = (inst_19255 + (1));
var inst_19264 = (inst_19263__$1 < n);
var state_19290__$1 = (function (){var statearr_19304 = state_19290;
(statearr_19304[(11)] = inst_19263__$1);

(statearr_19304[(12)] = inst_19262);

return statearr_19304;
})();
if(cljs.core.truth_(inst_19264)){
var statearr_19305_19329 = state_19290__$1;
(statearr_19305_19329[(1)] = (8));

} else {
var statearr_19306_19330 = state_19290__$1;
(statearr_19306_19330[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19291 === (14))){
var inst_19283 = (state_19290[(2)]);
var inst_19284 = cljs.core.async.close_BANG_(out);
var state_19290__$1 = (function (){var statearr_19308 = state_19290;
(statearr_19308[(13)] = inst_19283);

return statearr_19308;
})();
var statearr_19309_19331 = state_19290__$1;
(statearr_19309_19331[(2)] = inst_19284);

(statearr_19309_19331[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19291 === (10))){
var inst_19274 = (state_19290[(2)]);
var state_19290__$1 = state_19290;
var statearr_19310_19332 = state_19290__$1;
(statearr_19310_19332[(2)] = inst_19274);

(statearr_19310_19332[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19291 === (8))){
var inst_19254 = (state_19290[(7)]);
var inst_19263 = (state_19290[(11)]);
var tmp19307 = inst_19254;
var inst_19254__$1 = tmp19307;
var inst_19255 = inst_19263;
var state_19290__$1 = (function (){var statearr_19311 = state_19290;
(statearr_19311[(7)] = inst_19254__$1);

(statearr_19311[(8)] = inst_19255);

return statearr_19311;
})();
var statearr_19312_19333 = state_19290__$1;
(statearr_19312_19333[(2)] = null);

(statearr_19312_19333[(1)] = (2));


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
var cljs$core$async$state_machine__15376__auto__ = null;
var cljs$core$async$state_machine__15376__auto____0 = (function (){
var statearr_19313 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19313[(0)] = cljs$core$async$state_machine__15376__auto__);

(statearr_19313[(1)] = (1));

return statearr_19313;
});
var cljs$core$async$state_machine__15376__auto____1 = (function (state_19290){
while(true){
var ret_value__15377__auto__ = (function (){try{while(true){
var result__15378__auto__ = switch__15375__auto__(state_19290);
if(cljs.core.keyword_identical_QMARK_(result__15378__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15378__auto__;
}
break;
}
}catch (e19314){var ex__15379__auto__ = e19314;
var statearr_19315_19334 = state_19290;
(statearr_19315_19334[(2)] = ex__15379__auto__);


if(cljs.core.seq((state_19290[(4)]))){
var statearr_19316_19335 = state_19290;
(statearr_19316_19335[(1)] = cljs.core.first((state_19290[(4)])));

} else {
throw ex__15379__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15377__auto__,cljs.core.cst$kw$recur)){
var G__19336 = state_19290;
state_19290 = G__19336;
continue;
} else {
return ret_value__15377__auto__;
}
break;
}
});
cljs$core$async$state_machine__15376__auto__ = function(state_19290){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15376__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15376__auto____1.call(this,state_19290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15376__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15376__auto____0;
cljs$core$async$state_machine__15376__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15376__auto____1;
return cljs$core$async$state_machine__15376__auto__;
})()
})();
var state__15504__auto__ = (function (){var statearr_19317 = (f__15503__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15503__auto__.cljs$core$IFn$_invoke$arity$0() : f__15503__auto__.call(null));
(statearr_19317[(6)] = c__15502__auto___19319);

return statearr_19317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15504__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19338 = arguments.length;
switch (G__19338) {
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
var c__15502__auto___19409 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15503__auto__ = (function (){var switch__15375__auto__ = (function (state_19380){
var state_val_19381 = (state_19380[(1)]);
if((state_val_19381 === (7))){
var inst_19376 = (state_19380[(2)]);
var state_19380__$1 = state_19380;
var statearr_19382_19410 = state_19380__$1;
(statearr_19382_19410[(2)] = inst_19376);

(statearr_19382_19410[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19381 === (1))){
var inst_19339 = [];
var inst_19340 = inst_19339;
var inst_19341 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_19380__$1 = (function (){var statearr_19383 = state_19380;
(statearr_19383[(7)] = inst_19340);

(statearr_19383[(8)] = inst_19341);

return statearr_19383;
})();
var statearr_19384_19411 = state_19380__$1;
(statearr_19384_19411[(2)] = null);

(statearr_19384_19411[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19381 === (4))){
var inst_19344 = (state_19380[(9)]);
var inst_19344__$1 = (state_19380[(2)]);
var inst_19345 = (inst_19344__$1 == null);
var inst_19346 = cljs.core.not(inst_19345);
var state_19380__$1 = (function (){var statearr_19385 = state_19380;
(statearr_19385[(9)] = inst_19344__$1);

return statearr_19385;
})();
if(inst_19346){
var statearr_19386_19412 = state_19380__$1;
(statearr_19386_19412[(1)] = (5));

} else {
var statearr_19387_19413 = state_19380__$1;
(statearr_19387_19413[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19381 === (15))){
var inst_19370 = (state_19380[(2)]);
var state_19380__$1 = state_19380;
var statearr_19388_19414 = state_19380__$1;
(statearr_19388_19414[(2)] = inst_19370);

(statearr_19388_19414[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19381 === (13))){
var state_19380__$1 = state_19380;
var statearr_19389_19415 = state_19380__$1;
(statearr_19389_19415[(2)] = null);

(statearr_19389_19415[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19381 === (6))){
var inst_19340 = (state_19380[(7)]);
var inst_19365 = inst_19340.length;
var inst_19366 = (inst_19365 > (0));
var state_19380__$1 = state_19380;
if(cljs.core.truth_(inst_19366)){
var statearr_19390_19416 = state_19380__$1;
(statearr_19390_19416[(1)] = (12));

} else {
var statearr_19391_19417 = state_19380__$1;
(statearr_19391_19417[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19381 === (3))){
var inst_19378 = (state_19380[(2)]);
var state_19380__$1 = state_19380;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19380__$1,inst_19378);
} else {
if((state_val_19381 === (12))){
var inst_19340 = (state_19380[(7)]);
var inst_19368 = cljs.core.vec(inst_19340);
var state_19380__$1 = state_19380;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19380__$1,(15),out,inst_19368);
} else {
if((state_val_19381 === (2))){
var state_19380__$1 = state_19380;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19380__$1,(4),ch);
} else {
if((state_val_19381 === (11))){
var inst_19348 = (state_19380[(10)]);
var inst_19344 = (state_19380[(9)]);
var inst_19358 = (state_19380[(2)]);
var inst_19359 = [];
var inst_19360 = inst_19359.push(inst_19344);
var inst_19340 = inst_19359;
var inst_19341 = inst_19348;
var state_19380__$1 = (function (){var statearr_19392 = state_19380;
(statearr_19392[(7)] = inst_19340);

(statearr_19392[(8)] = inst_19341);

(statearr_19392[(11)] = inst_19360);

(statearr_19392[(12)] = inst_19358);

return statearr_19392;
})();
var statearr_19393_19418 = state_19380__$1;
(statearr_19393_19418[(2)] = null);

(statearr_19393_19418[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19381 === (9))){
var inst_19340 = (state_19380[(7)]);
var inst_19356 = cljs.core.vec(inst_19340);
var state_19380__$1 = state_19380;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19380__$1,(11),out,inst_19356);
} else {
if((state_val_19381 === (5))){
var inst_19348 = (state_19380[(10)]);
var inst_19341 = (state_19380[(8)]);
var inst_19344 = (state_19380[(9)]);
var inst_19348__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19344) : f.call(null,inst_19344));
var inst_19349 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19348__$1,inst_19341);
var inst_19350 = cljs.core.keyword_identical_QMARK_(inst_19341,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_19351 = ((inst_19349) || (inst_19350));
var state_19380__$1 = (function (){var statearr_19394 = state_19380;
(statearr_19394[(10)] = inst_19348__$1);

return statearr_19394;
})();
if(cljs.core.truth_(inst_19351)){
var statearr_19395_19419 = state_19380__$1;
(statearr_19395_19419[(1)] = (8));

} else {
var statearr_19396_19420 = state_19380__$1;
(statearr_19396_19420[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19381 === (14))){
var inst_19373 = (state_19380[(2)]);
var inst_19374 = cljs.core.async.close_BANG_(out);
var state_19380__$1 = (function (){var statearr_19398 = state_19380;
(statearr_19398[(13)] = inst_19373);

return statearr_19398;
})();
var statearr_19399_19421 = state_19380__$1;
(statearr_19399_19421[(2)] = inst_19374);

(statearr_19399_19421[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19381 === (10))){
var inst_19363 = (state_19380[(2)]);
var state_19380__$1 = state_19380;
var statearr_19400_19422 = state_19380__$1;
(statearr_19400_19422[(2)] = inst_19363);

(statearr_19400_19422[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19381 === (8))){
var inst_19348 = (state_19380[(10)]);
var inst_19340 = (state_19380[(7)]);
var inst_19344 = (state_19380[(9)]);
var inst_19353 = inst_19340.push(inst_19344);
var tmp19397 = inst_19340;
var inst_19340__$1 = tmp19397;
var inst_19341 = inst_19348;
var state_19380__$1 = (function (){var statearr_19401 = state_19380;
(statearr_19401[(14)] = inst_19353);

(statearr_19401[(7)] = inst_19340__$1);

(statearr_19401[(8)] = inst_19341);

return statearr_19401;
})();
var statearr_19402_19423 = state_19380__$1;
(statearr_19402_19423[(2)] = null);

(statearr_19402_19423[(1)] = (2));


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
var cljs$core$async$state_machine__15376__auto__ = null;
var cljs$core$async$state_machine__15376__auto____0 = (function (){
var statearr_19403 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19403[(0)] = cljs$core$async$state_machine__15376__auto__);

(statearr_19403[(1)] = (1));

return statearr_19403;
});
var cljs$core$async$state_machine__15376__auto____1 = (function (state_19380){
while(true){
var ret_value__15377__auto__ = (function (){try{while(true){
var result__15378__auto__ = switch__15375__auto__(state_19380);
if(cljs.core.keyword_identical_QMARK_(result__15378__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15378__auto__;
}
break;
}
}catch (e19404){var ex__15379__auto__ = e19404;
var statearr_19405_19424 = state_19380;
(statearr_19405_19424[(2)] = ex__15379__auto__);


if(cljs.core.seq((state_19380[(4)]))){
var statearr_19406_19425 = state_19380;
(statearr_19406_19425[(1)] = cljs.core.first((state_19380[(4)])));

} else {
throw ex__15379__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15377__auto__,cljs.core.cst$kw$recur)){
var G__19426 = state_19380;
state_19380 = G__19426;
continue;
} else {
return ret_value__15377__auto__;
}
break;
}
});
cljs$core$async$state_machine__15376__auto__ = function(state_19380){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15376__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15376__auto____1.call(this,state_19380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15376__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15376__auto____0;
cljs$core$async$state_machine__15376__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15376__auto____1;
return cljs$core$async$state_machine__15376__auto__;
})()
})();
var state__15504__auto__ = (function (){var statearr_19407 = (f__15503__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15503__auto__.cljs$core$IFn$_invoke$arity$0() : f__15503__auto__.call(null));
(statearr_19407[(6)] = c__15502__auto___19409);

return statearr_19407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15504__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);

