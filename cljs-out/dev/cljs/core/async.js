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
var G__16546 = arguments.length;
switch (G__16546) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16547 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16547 = (function (f,blockable,meta16548){
this.f = f;
this.blockable = blockable;
this.meta16548 = meta16548;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16547.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16549,meta16548__$1){
var self__ = this;
var _16549__$1 = this;
return (new cljs.core.async.t_cljs$core$async16547(self__.f,self__.blockable,meta16548__$1));
}));

(cljs.core.async.t_cljs$core$async16547.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16549){
var self__ = this;
var _16549__$1 = this;
return self__.meta16548;
}));

(cljs.core.async.t_cljs$core$async16547.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16547.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16547.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async16547.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async16547.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta16548], null);
}));

(cljs.core.async.t_cljs$core$async16547.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16547.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16547");

(cljs.core.async.t_cljs$core$async16547.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async16547");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16547.
 */
cljs.core.async.__GT_t_cljs$core$async16547 = (function cljs$core$async$__GT_t_cljs$core$async16547(f__$1,blockable__$1,meta16548){
return (new cljs.core.async.t_cljs$core$async16547(f__$1,blockable__$1,meta16548));
});

}

return (new cljs.core.async.t_cljs$core$async16547(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__16553 = arguments.length;
switch (G__16553) {
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
var G__16556 = arguments.length;
switch (G__16556) {
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
var G__16559 = arguments.length;
switch (G__16559) {
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
var val_16561 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16561) : fn1.call(null,val_16561));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16561) : fn1.call(null,val_16561));
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
var G__16563 = arguments.length;
switch (G__16563) {
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
var n__4613__auto___16565 = n;
var x_16566 = (0);
while(true){
if((x_16566 < n__4613__auto___16565)){
(a[x_16566] = x_16566);

var G__16567 = (x_16566 + (1));
x_16566 = G__16567;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16568 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16568 = (function (flag,meta16569){
this.flag = flag;
this.meta16569 = meta16569;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16568.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16570,meta16569__$1){
var self__ = this;
var _16570__$1 = this;
return (new cljs.core.async.t_cljs$core$async16568(self__.flag,meta16569__$1));
}));

(cljs.core.async.t_cljs$core$async16568.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16570){
var self__ = this;
var _16570__$1 = this;
return self__.meta16569;
}));

(cljs.core.async.t_cljs$core$async16568.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16568.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async16568.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16568.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async16568.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta16569], null);
}));

(cljs.core.async.t_cljs$core$async16568.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16568.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16568");

(cljs.core.async.t_cljs$core$async16568.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async16568");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16568.
 */
cljs.core.async.__GT_t_cljs$core$async16568 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async16568(flag__$1,meta16569){
return (new cljs.core.async.t_cljs$core$async16568(flag__$1,meta16569));
});

}

return (new cljs.core.async.t_cljs$core$async16568(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16571 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16571 = (function (flag,cb,meta16572){
this.flag = flag;
this.cb = cb;
this.meta16572 = meta16572;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16573,meta16572__$1){
var self__ = this;
var _16573__$1 = this;
return (new cljs.core.async.t_cljs$core$async16571(self__.flag,self__.cb,meta16572__$1));
}));

(cljs.core.async.t_cljs$core$async16571.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16573){
var self__ = this;
var _16573__$1 = this;
return self__.meta16572;
}));

(cljs.core.async.t_cljs$core$async16571.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16571.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async16571.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16571.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async16571.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta16572], null);
}));

(cljs.core.async.t_cljs$core$async16571.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16571.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16571");

(cljs.core.async.t_cljs$core$async16571.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async16571");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16571.
 */
cljs.core.async.__GT_t_cljs$core$async16571 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async16571(flag__$1,cb__$1,meta16572){
return (new cljs.core.async.t_cljs$core$async16571(flag__$1,cb__$1,meta16572));
});

}

return (new cljs.core.async.t_cljs$core$async16571(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__16574_SHARP_){
var G__16576 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16574_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16576) : fret.call(null,G__16576));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16575_SHARP_){
var G__16577 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16575_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16577) : fret.call(null,G__16577));
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
var G__16578 = (i + (1));
i = G__16578;
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
var len__4736__auto___16584 = arguments.length;
var i__4737__auto___16585 = (0);
while(true){
if((i__4737__auto___16585 < len__4736__auto___16584)){
args__4742__auto__.push((arguments[i__4737__auto___16585]));

var G__16586 = (i__4737__auto___16585 + (1));
i__4737__auto___16585 = G__16586;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__16581){
var map__16582 = p__16581;
var map__16582__$1 = (((((!((map__16582 == null))))?(((((map__16582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16582):map__16582);
var opts = map__16582__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq16579){
var G__16580 = cljs.core.first(seq16579);
var seq16579__$1 = cljs.core.next(seq16579);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16580,seq16579__$1);
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
var G__16588 = arguments.length;
switch (G__16588) {
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
var c__16486__auto___16635 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16487__auto__ = (function (){var switch__16411__auto__ = (function (state_16612){
var state_val_16613 = (state_16612[(1)]);
if((state_val_16613 === (7))){
var inst_16608 = (state_16612[(2)]);
var state_16612__$1 = state_16612;
var statearr_16614_16636 = state_16612__$1;
(statearr_16614_16636[(2)] = inst_16608);

(statearr_16614_16636[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16613 === (1))){
var state_16612__$1 = state_16612;
var statearr_16615_16637 = state_16612__$1;
(statearr_16615_16637[(2)] = null);

(statearr_16615_16637[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16613 === (4))){
var inst_16591 = (state_16612[(7)]);
var inst_16591__$1 = (state_16612[(2)]);
var inst_16592 = (inst_16591__$1 == null);
var state_16612__$1 = (function (){var statearr_16616 = state_16612;
(statearr_16616[(7)] = inst_16591__$1);

return statearr_16616;
})();
if(cljs.core.truth_(inst_16592)){
var statearr_16617_16638 = state_16612__$1;
(statearr_16617_16638[(1)] = (5));

} else {
var statearr_16618_16639 = state_16612__$1;
(statearr_16618_16639[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16613 === (13))){
var state_16612__$1 = state_16612;
var statearr_16619_16640 = state_16612__$1;
(statearr_16619_16640[(2)] = null);

(statearr_16619_16640[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16613 === (6))){
var inst_16591 = (state_16612[(7)]);
var state_16612__$1 = state_16612;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16612__$1,(11),to,inst_16591);
} else {
if((state_val_16613 === (3))){
var inst_16610 = (state_16612[(2)]);
var state_16612__$1 = state_16612;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16612__$1,inst_16610);
} else {
if((state_val_16613 === (12))){
var state_16612__$1 = state_16612;
var statearr_16620_16641 = state_16612__$1;
(statearr_16620_16641[(2)] = null);

(statearr_16620_16641[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16613 === (2))){
var state_16612__$1 = state_16612;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16612__$1,(4),from);
} else {
if((state_val_16613 === (11))){
var inst_16601 = (state_16612[(2)]);
var state_16612__$1 = state_16612;
if(cljs.core.truth_(inst_16601)){
var statearr_16621_16642 = state_16612__$1;
(statearr_16621_16642[(1)] = (12));

} else {
var statearr_16622_16643 = state_16612__$1;
(statearr_16622_16643[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16613 === (9))){
var state_16612__$1 = state_16612;
var statearr_16623_16644 = state_16612__$1;
(statearr_16623_16644[(2)] = null);

(statearr_16623_16644[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16613 === (5))){
var state_16612__$1 = state_16612;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16624_16645 = state_16612__$1;
(statearr_16624_16645[(1)] = (8));

} else {
var statearr_16625_16646 = state_16612__$1;
(statearr_16625_16646[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16613 === (14))){
var inst_16606 = (state_16612[(2)]);
var state_16612__$1 = state_16612;
var statearr_16626_16647 = state_16612__$1;
(statearr_16626_16647[(2)] = inst_16606);

(statearr_16626_16647[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16613 === (10))){
var inst_16598 = (state_16612[(2)]);
var state_16612__$1 = state_16612;
var statearr_16627_16648 = state_16612__$1;
(statearr_16627_16648[(2)] = inst_16598);

(statearr_16627_16648[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16613 === (8))){
var inst_16595 = cljs.core.async.close_BANG_(to);
var state_16612__$1 = state_16612;
var statearr_16628_16649 = state_16612__$1;
(statearr_16628_16649[(2)] = inst_16595);

(statearr_16628_16649[(1)] = (10));


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
var cljs$core$async$state_machine__16412__auto__ = null;
var cljs$core$async$state_machine__16412__auto____0 = (function (){
var statearr_16629 = [null,null,null,null,null,null,null,null];
(statearr_16629[(0)] = cljs$core$async$state_machine__16412__auto__);

(statearr_16629[(1)] = (1));

return statearr_16629;
});
var cljs$core$async$state_machine__16412__auto____1 = (function (state_16612){
while(true){
var ret_value__16413__auto__ = (function (){try{while(true){
var result__16414__auto__ = switch__16411__auto__(state_16612);
if(cljs.core.keyword_identical_QMARK_(result__16414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16414__auto__;
}
break;
}
}catch (e16630){var ex__16415__auto__ = e16630;
var statearr_16631_16650 = state_16612;
(statearr_16631_16650[(2)] = ex__16415__auto__);


if(cljs.core.seq((state_16612[(4)]))){
var statearr_16632_16651 = state_16612;
(statearr_16632_16651[(1)] = cljs.core.first((state_16612[(4)])));

} else {
throw ex__16415__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16413__auto__,cljs.core.cst$kw$recur)){
var G__16652 = state_16612;
state_16612 = G__16652;
continue;
} else {
return ret_value__16413__auto__;
}
break;
}
});
cljs$core$async$state_machine__16412__auto__ = function(state_16612){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16412__auto____1.call(this,state_16612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16412__auto____0;
cljs$core$async$state_machine__16412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16412__auto____1;
return cljs$core$async$state_machine__16412__auto__;
})()
})();
var state__16488__auto__ = (function (){var statearr_16633 = (f__16487__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16487__auto__.cljs$core$IFn$_invoke$arity$0() : f__16487__auto__.call(null));
(statearr_16633[(6)] = c__16486__auto___16635);

return statearr_16633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16488__auto__);
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
var process = (function (p__16653){
var vec__16654 = p__16653;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16654,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16654,(1),null);
var job = vec__16654;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__16486__auto___16830 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16487__auto__ = (function (){var switch__16411__auto__ = (function (state_16661){
var state_val_16662 = (state_16661[(1)]);
if((state_val_16662 === (1))){
var state_16661__$1 = state_16661;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16661__$1,(2),res,v);
} else {
if((state_val_16662 === (2))){
var inst_16658 = (state_16661[(2)]);
var inst_16659 = cljs.core.async.close_BANG_(res);
var state_16661__$1 = (function (){var statearr_16663 = state_16661;
(statearr_16663[(7)] = inst_16658);

return statearr_16663;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16661__$1,inst_16659);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16412__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16412__auto____0 = (function (){
var statearr_16664 = [null,null,null,null,null,null,null,null];
(statearr_16664[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16412__auto__);

(statearr_16664[(1)] = (1));

return statearr_16664;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16412__auto____1 = (function (state_16661){
while(true){
var ret_value__16413__auto__ = (function (){try{while(true){
var result__16414__auto__ = switch__16411__auto__(state_16661);
if(cljs.core.keyword_identical_QMARK_(result__16414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16414__auto__;
}
break;
}
}catch (e16665){var ex__16415__auto__ = e16665;
var statearr_16666_16831 = state_16661;
(statearr_16666_16831[(2)] = ex__16415__auto__);


if(cljs.core.seq((state_16661[(4)]))){
var statearr_16667_16832 = state_16661;
(statearr_16667_16832[(1)] = cljs.core.first((state_16661[(4)])));

} else {
throw ex__16415__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16413__auto__,cljs.core.cst$kw$recur)){
var G__16833 = state_16661;
state_16661 = G__16833;
continue;
} else {
return ret_value__16413__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16412__auto__ = function(state_16661){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16412__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16412__auto____1.call(this,state_16661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16412__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16412__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16412__auto__;
})()
})();
var state__16488__auto__ = (function (){var statearr_16668 = (f__16487__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16487__auto__.cljs$core$IFn$_invoke$arity$0() : f__16487__auto__.call(null));
(statearr_16668[(6)] = c__16486__auto___16830);

return statearr_16668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16488__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__16669){
var vec__16670 = p__16669;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16670,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16670,(1),null);
var job = vec__16670;
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
var n__4613__auto___16834 = n;
var __16835 = (0);
while(true){
if((__16835 < n__4613__auto___16834)){
var G__16673_16836 = type;
var G__16673_16837__$1 = (((G__16673_16836 instanceof cljs.core.Keyword))?G__16673_16836.fqn:null);
switch (G__16673_16837__$1) {
case "compute":
var c__16486__auto___16839 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16835,c__16486__auto___16839,G__16673_16836,G__16673_16837__$1,n__4613__auto___16834,jobs,results,process,async){
return (function (){
var f__16487__auto__ = (function (){var switch__16411__auto__ = ((function (__16835,c__16486__auto___16839,G__16673_16836,G__16673_16837__$1,n__4613__auto___16834,jobs,results,process,async){
return (function (state_16686){
var state_val_16687 = (state_16686[(1)]);
if((state_val_16687 === (1))){
var state_16686__$1 = state_16686;
var statearr_16688_16840 = state_16686__$1;
(statearr_16688_16840[(2)] = null);

(statearr_16688_16840[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16687 === (2))){
var state_16686__$1 = state_16686;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16686__$1,(4),jobs);
} else {
if((state_val_16687 === (3))){
var inst_16684 = (state_16686[(2)]);
var state_16686__$1 = state_16686;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16686__$1,inst_16684);
} else {
if((state_val_16687 === (4))){
var inst_16676 = (state_16686[(2)]);
var inst_16677 = process(inst_16676);
var state_16686__$1 = state_16686;
if(cljs.core.truth_(inst_16677)){
var statearr_16689_16841 = state_16686__$1;
(statearr_16689_16841[(1)] = (5));

} else {
var statearr_16690_16842 = state_16686__$1;
(statearr_16690_16842[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16687 === (5))){
var state_16686__$1 = state_16686;
var statearr_16691_16843 = state_16686__$1;
(statearr_16691_16843[(2)] = null);

(statearr_16691_16843[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16687 === (6))){
var state_16686__$1 = state_16686;
var statearr_16692_16844 = state_16686__$1;
(statearr_16692_16844[(2)] = null);

(statearr_16692_16844[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16687 === (7))){
var inst_16682 = (state_16686[(2)]);
var state_16686__$1 = state_16686;
var statearr_16693_16845 = state_16686__$1;
(statearr_16693_16845[(2)] = inst_16682);

(statearr_16693_16845[(1)] = (3));


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
});})(__16835,c__16486__auto___16839,G__16673_16836,G__16673_16837__$1,n__4613__auto___16834,jobs,results,process,async))
;
return ((function (__16835,switch__16411__auto__,c__16486__auto___16839,G__16673_16836,G__16673_16837__$1,n__4613__auto___16834,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16412__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16412__auto____0 = (function (){
var statearr_16694 = [null,null,null,null,null,null,null];
(statearr_16694[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16412__auto__);

(statearr_16694[(1)] = (1));

return statearr_16694;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16412__auto____1 = (function (state_16686){
while(true){
var ret_value__16413__auto__ = (function (){try{while(true){
var result__16414__auto__ = switch__16411__auto__(state_16686);
if(cljs.core.keyword_identical_QMARK_(result__16414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16414__auto__;
}
break;
}
}catch (e16695){var ex__16415__auto__ = e16695;
var statearr_16696_16846 = state_16686;
(statearr_16696_16846[(2)] = ex__16415__auto__);


if(cljs.core.seq((state_16686[(4)]))){
var statearr_16697_16847 = state_16686;
(statearr_16697_16847[(1)] = cljs.core.first((state_16686[(4)])));

} else {
throw ex__16415__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16413__auto__,cljs.core.cst$kw$recur)){
var G__16848 = state_16686;
state_16686 = G__16848;
continue;
} else {
return ret_value__16413__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16412__auto__ = function(state_16686){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16412__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16412__auto____1.call(this,state_16686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16412__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16412__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16412__auto__;
})()
;})(__16835,switch__16411__auto__,c__16486__auto___16839,G__16673_16836,G__16673_16837__$1,n__4613__auto___16834,jobs,results,process,async))
})();
var state__16488__auto__ = (function (){var statearr_16698 = (f__16487__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16487__auto__.cljs$core$IFn$_invoke$arity$0() : f__16487__auto__.call(null));
(statearr_16698[(6)] = c__16486__auto___16839);

return statearr_16698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16488__auto__);
});})(__16835,c__16486__auto___16839,G__16673_16836,G__16673_16837__$1,n__4613__auto___16834,jobs,results,process,async))
);


break;
case "async":
var c__16486__auto___16849 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16835,c__16486__auto___16849,G__16673_16836,G__16673_16837__$1,n__4613__auto___16834,jobs,results,process,async){
return (function (){
var f__16487__auto__ = (function (){var switch__16411__auto__ = ((function (__16835,c__16486__auto___16849,G__16673_16836,G__16673_16837__$1,n__4613__auto___16834,jobs,results,process,async){
return (function (state_16711){
var state_val_16712 = (state_16711[(1)]);
if((state_val_16712 === (1))){
var state_16711__$1 = state_16711;
var statearr_16713_16850 = state_16711__$1;
(statearr_16713_16850[(2)] = null);

(statearr_16713_16850[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16712 === (2))){
var state_16711__$1 = state_16711;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16711__$1,(4),jobs);
} else {
if((state_val_16712 === (3))){
var inst_16709 = (state_16711[(2)]);
var state_16711__$1 = state_16711;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16711__$1,inst_16709);
} else {
if((state_val_16712 === (4))){
var inst_16701 = (state_16711[(2)]);
var inst_16702 = async(inst_16701);
var state_16711__$1 = state_16711;
if(cljs.core.truth_(inst_16702)){
var statearr_16714_16851 = state_16711__$1;
(statearr_16714_16851[(1)] = (5));

} else {
var statearr_16715_16852 = state_16711__$1;
(statearr_16715_16852[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16712 === (5))){
var state_16711__$1 = state_16711;
var statearr_16716_16853 = state_16711__$1;
(statearr_16716_16853[(2)] = null);

(statearr_16716_16853[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16712 === (6))){
var state_16711__$1 = state_16711;
var statearr_16717_16854 = state_16711__$1;
(statearr_16717_16854[(2)] = null);

(statearr_16717_16854[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16712 === (7))){
var inst_16707 = (state_16711[(2)]);
var state_16711__$1 = state_16711;
var statearr_16718_16855 = state_16711__$1;
(statearr_16718_16855[(2)] = inst_16707);

(statearr_16718_16855[(1)] = (3));


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
});})(__16835,c__16486__auto___16849,G__16673_16836,G__16673_16837__$1,n__4613__auto___16834,jobs,results,process,async))
;
return ((function (__16835,switch__16411__auto__,c__16486__auto___16849,G__16673_16836,G__16673_16837__$1,n__4613__auto___16834,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16412__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16412__auto____0 = (function (){
var statearr_16719 = [null,null,null,null,null,null,null];
(statearr_16719[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16412__auto__);

(statearr_16719[(1)] = (1));

return statearr_16719;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16412__auto____1 = (function (state_16711){
while(true){
var ret_value__16413__auto__ = (function (){try{while(true){
var result__16414__auto__ = switch__16411__auto__(state_16711);
if(cljs.core.keyword_identical_QMARK_(result__16414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16414__auto__;
}
break;
}
}catch (e16720){var ex__16415__auto__ = e16720;
var statearr_16721_16856 = state_16711;
(statearr_16721_16856[(2)] = ex__16415__auto__);


if(cljs.core.seq((state_16711[(4)]))){
var statearr_16722_16857 = state_16711;
(statearr_16722_16857[(1)] = cljs.core.first((state_16711[(4)])));

} else {
throw ex__16415__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16413__auto__,cljs.core.cst$kw$recur)){
var G__16858 = state_16711;
state_16711 = G__16858;
continue;
} else {
return ret_value__16413__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16412__auto__ = function(state_16711){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16412__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16412__auto____1.call(this,state_16711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16412__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16412__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16412__auto__;
})()
;})(__16835,switch__16411__auto__,c__16486__auto___16849,G__16673_16836,G__16673_16837__$1,n__4613__auto___16834,jobs,results,process,async))
})();
var state__16488__auto__ = (function (){var statearr_16723 = (f__16487__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16487__auto__.cljs$core$IFn$_invoke$arity$0() : f__16487__auto__.call(null));
(statearr_16723[(6)] = c__16486__auto___16849);

return statearr_16723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16488__auto__);
});})(__16835,c__16486__auto___16849,G__16673_16836,G__16673_16837__$1,n__4613__auto___16834,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16673_16837__$1)].join('')));

}

var G__16859 = (__16835 + (1));
__16835 = G__16859;
continue;
} else {
}
break;
}

var c__16486__auto___16860 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16487__auto__ = (function (){var switch__16411__auto__ = (function (state_16745){
var state_val_16746 = (state_16745[(1)]);
if((state_val_16746 === (7))){
var inst_16741 = (state_16745[(2)]);
var state_16745__$1 = state_16745;
var statearr_16747_16861 = state_16745__$1;
(statearr_16747_16861[(2)] = inst_16741);

(statearr_16747_16861[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16746 === (1))){
var state_16745__$1 = state_16745;
var statearr_16748_16862 = state_16745__$1;
(statearr_16748_16862[(2)] = null);

(statearr_16748_16862[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16746 === (4))){
var inst_16726 = (state_16745[(7)]);
var inst_16726__$1 = (state_16745[(2)]);
var inst_16727 = (inst_16726__$1 == null);
var state_16745__$1 = (function (){var statearr_16749 = state_16745;
(statearr_16749[(7)] = inst_16726__$1);

return statearr_16749;
})();
if(cljs.core.truth_(inst_16727)){
var statearr_16750_16863 = state_16745__$1;
(statearr_16750_16863[(1)] = (5));

} else {
var statearr_16751_16864 = state_16745__$1;
(statearr_16751_16864[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16746 === (6))){
var inst_16726 = (state_16745[(7)]);
var inst_16731 = (state_16745[(8)]);
var inst_16731__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_16732 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16733 = [inst_16726,inst_16731__$1];
var inst_16734 = (new cljs.core.PersistentVector(null,2,(5),inst_16732,inst_16733,null));
var state_16745__$1 = (function (){var statearr_16752 = state_16745;
(statearr_16752[(8)] = inst_16731__$1);

return statearr_16752;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16745__$1,(8),jobs,inst_16734);
} else {
if((state_val_16746 === (3))){
var inst_16743 = (state_16745[(2)]);
var state_16745__$1 = state_16745;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16745__$1,inst_16743);
} else {
if((state_val_16746 === (2))){
var state_16745__$1 = state_16745;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16745__$1,(4),from);
} else {
if((state_val_16746 === (9))){
var inst_16738 = (state_16745[(2)]);
var state_16745__$1 = (function (){var statearr_16753 = state_16745;
(statearr_16753[(9)] = inst_16738);

return statearr_16753;
})();
var statearr_16754_16865 = state_16745__$1;
(statearr_16754_16865[(2)] = null);

(statearr_16754_16865[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16746 === (5))){
var inst_16729 = cljs.core.async.close_BANG_(jobs);
var state_16745__$1 = state_16745;
var statearr_16755_16866 = state_16745__$1;
(statearr_16755_16866[(2)] = inst_16729);

(statearr_16755_16866[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16746 === (8))){
var inst_16731 = (state_16745[(8)]);
var inst_16736 = (state_16745[(2)]);
var state_16745__$1 = (function (){var statearr_16756 = state_16745;
(statearr_16756[(10)] = inst_16736);

return statearr_16756;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16745__$1,(9),results,inst_16731);
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
var cljs$core$async$pipeline_STAR__$_state_machine__16412__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16412__auto____0 = (function (){
var statearr_16757 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16757[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16412__auto__);

(statearr_16757[(1)] = (1));

return statearr_16757;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16412__auto____1 = (function (state_16745){
while(true){
var ret_value__16413__auto__ = (function (){try{while(true){
var result__16414__auto__ = switch__16411__auto__(state_16745);
if(cljs.core.keyword_identical_QMARK_(result__16414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16414__auto__;
}
break;
}
}catch (e16758){var ex__16415__auto__ = e16758;
var statearr_16759_16867 = state_16745;
(statearr_16759_16867[(2)] = ex__16415__auto__);


if(cljs.core.seq((state_16745[(4)]))){
var statearr_16760_16868 = state_16745;
(statearr_16760_16868[(1)] = cljs.core.first((state_16745[(4)])));

} else {
throw ex__16415__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16413__auto__,cljs.core.cst$kw$recur)){
var G__16869 = state_16745;
state_16745 = G__16869;
continue;
} else {
return ret_value__16413__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16412__auto__ = function(state_16745){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16412__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16412__auto____1.call(this,state_16745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16412__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16412__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16412__auto__;
})()
})();
var state__16488__auto__ = (function (){var statearr_16761 = (f__16487__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16487__auto__.cljs$core$IFn$_invoke$arity$0() : f__16487__auto__.call(null));
(statearr_16761[(6)] = c__16486__auto___16860);

return statearr_16761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16488__auto__);
}));


var c__16486__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16487__auto__ = (function (){var switch__16411__auto__ = (function (state_16799){
var state_val_16800 = (state_16799[(1)]);
if((state_val_16800 === (7))){
var inst_16795 = (state_16799[(2)]);
var state_16799__$1 = state_16799;
var statearr_16801_16870 = state_16799__$1;
(statearr_16801_16870[(2)] = inst_16795);

(statearr_16801_16870[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16800 === (20))){
var state_16799__$1 = state_16799;
var statearr_16802_16871 = state_16799__$1;
(statearr_16802_16871[(2)] = null);

(statearr_16802_16871[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16800 === (1))){
var state_16799__$1 = state_16799;
var statearr_16803_16872 = state_16799__$1;
(statearr_16803_16872[(2)] = null);

(statearr_16803_16872[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16800 === (4))){
var inst_16764 = (state_16799[(7)]);
var inst_16764__$1 = (state_16799[(2)]);
var inst_16765 = (inst_16764__$1 == null);
var state_16799__$1 = (function (){var statearr_16804 = state_16799;
(statearr_16804[(7)] = inst_16764__$1);

return statearr_16804;
})();
if(cljs.core.truth_(inst_16765)){
var statearr_16805_16873 = state_16799__$1;
(statearr_16805_16873[(1)] = (5));

} else {
var statearr_16806_16874 = state_16799__$1;
(statearr_16806_16874[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16800 === (15))){
var inst_16777 = (state_16799[(8)]);
var state_16799__$1 = state_16799;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16799__$1,(18),to,inst_16777);
} else {
if((state_val_16800 === (21))){
var inst_16790 = (state_16799[(2)]);
var state_16799__$1 = state_16799;
var statearr_16807_16875 = state_16799__$1;
(statearr_16807_16875[(2)] = inst_16790);

(statearr_16807_16875[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16800 === (13))){
var inst_16792 = (state_16799[(2)]);
var state_16799__$1 = (function (){var statearr_16808 = state_16799;
(statearr_16808[(9)] = inst_16792);

return statearr_16808;
})();
var statearr_16809_16876 = state_16799__$1;
(statearr_16809_16876[(2)] = null);

(statearr_16809_16876[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16800 === (6))){
var inst_16764 = (state_16799[(7)]);
var state_16799__$1 = state_16799;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16799__$1,(11),inst_16764);
} else {
if((state_val_16800 === (17))){
var inst_16785 = (state_16799[(2)]);
var state_16799__$1 = state_16799;
if(cljs.core.truth_(inst_16785)){
var statearr_16810_16877 = state_16799__$1;
(statearr_16810_16877[(1)] = (19));

} else {
var statearr_16811_16878 = state_16799__$1;
(statearr_16811_16878[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16800 === (3))){
var inst_16797 = (state_16799[(2)]);
var state_16799__$1 = state_16799;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16799__$1,inst_16797);
} else {
if((state_val_16800 === (12))){
var inst_16774 = (state_16799[(10)]);
var state_16799__$1 = state_16799;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16799__$1,(14),inst_16774);
} else {
if((state_val_16800 === (2))){
var state_16799__$1 = state_16799;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16799__$1,(4),results);
} else {
if((state_val_16800 === (19))){
var state_16799__$1 = state_16799;
var statearr_16812_16879 = state_16799__$1;
(statearr_16812_16879[(2)] = null);

(statearr_16812_16879[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16800 === (11))){
var inst_16774 = (state_16799[(2)]);
var state_16799__$1 = (function (){var statearr_16813 = state_16799;
(statearr_16813[(10)] = inst_16774);

return statearr_16813;
})();
var statearr_16814_16880 = state_16799__$1;
(statearr_16814_16880[(2)] = null);

(statearr_16814_16880[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16800 === (9))){
var state_16799__$1 = state_16799;
var statearr_16815_16881 = state_16799__$1;
(statearr_16815_16881[(2)] = null);

(statearr_16815_16881[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16800 === (5))){
var state_16799__$1 = state_16799;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16816_16882 = state_16799__$1;
(statearr_16816_16882[(1)] = (8));

} else {
var statearr_16817_16883 = state_16799__$1;
(statearr_16817_16883[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16800 === (14))){
var inst_16777 = (state_16799[(8)]);
var inst_16777__$1 = (state_16799[(2)]);
var inst_16778 = (inst_16777__$1 == null);
var inst_16779 = cljs.core.not(inst_16778);
var state_16799__$1 = (function (){var statearr_16818 = state_16799;
(statearr_16818[(8)] = inst_16777__$1);

return statearr_16818;
})();
if(inst_16779){
var statearr_16819_16884 = state_16799__$1;
(statearr_16819_16884[(1)] = (15));

} else {
var statearr_16820_16885 = state_16799__$1;
(statearr_16820_16885[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16800 === (16))){
var state_16799__$1 = state_16799;
var statearr_16821_16886 = state_16799__$1;
(statearr_16821_16886[(2)] = false);

(statearr_16821_16886[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16800 === (10))){
var inst_16771 = (state_16799[(2)]);
var state_16799__$1 = state_16799;
var statearr_16822_16887 = state_16799__$1;
(statearr_16822_16887[(2)] = inst_16771);

(statearr_16822_16887[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16800 === (18))){
var inst_16782 = (state_16799[(2)]);
var state_16799__$1 = state_16799;
var statearr_16823_16888 = state_16799__$1;
(statearr_16823_16888[(2)] = inst_16782);

(statearr_16823_16888[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16800 === (8))){
var inst_16768 = cljs.core.async.close_BANG_(to);
var state_16799__$1 = state_16799;
var statearr_16824_16889 = state_16799__$1;
(statearr_16824_16889[(2)] = inst_16768);

(statearr_16824_16889[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__16412__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16412__auto____0 = (function (){
var statearr_16825 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16825[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16412__auto__);

(statearr_16825[(1)] = (1));

return statearr_16825;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16412__auto____1 = (function (state_16799){
while(true){
var ret_value__16413__auto__ = (function (){try{while(true){
var result__16414__auto__ = switch__16411__auto__(state_16799);
if(cljs.core.keyword_identical_QMARK_(result__16414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16414__auto__;
}
break;
}
}catch (e16826){var ex__16415__auto__ = e16826;
var statearr_16827_16890 = state_16799;
(statearr_16827_16890[(2)] = ex__16415__auto__);


if(cljs.core.seq((state_16799[(4)]))){
var statearr_16828_16891 = state_16799;
(statearr_16828_16891[(1)] = cljs.core.first((state_16799[(4)])));

} else {
throw ex__16415__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16413__auto__,cljs.core.cst$kw$recur)){
var G__16892 = state_16799;
state_16799 = G__16892;
continue;
} else {
return ret_value__16413__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16412__auto__ = function(state_16799){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16412__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16412__auto____1.call(this,state_16799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16412__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16412__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16412__auto__;
})()
})();
var state__16488__auto__ = (function (){var statearr_16829 = (f__16487__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16487__auto__.cljs$core$IFn$_invoke$arity$0() : f__16487__auto__.call(null));
(statearr_16829[(6)] = c__16486__auto__);

return statearr_16829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16488__auto__);
}));

return c__16486__auto__;
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
var G__16894 = arguments.length;
switch (G__16894) {
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
var G__16897 = arguments.length;
switch (G__16897) {
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
var G__16900 = arguments.length;
switch (G__16900) {
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
var c__16486__auto___16950 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16487__auto__ = (function (){var switch__16411__auto__ = (function (state_16926){
var state_val_16927 = (state_16926[(1)]);
if((state_val_16927 === (7))){
var inst_16922 = (state_16926[(2)]);
var state_16926__$1 = state_16926;
var statearr_16928_16951 = state_16926__$1;
(statearr_16928_16951[(2)] = inst_16922);

(statearr_16928_16951[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16927 === (1))){
var state_16926__$1 = state_16926;
var statearr_16929_16952 = state_16926__$1;
(statearr_16929_16952[(2)] = null);

(statearr_16929_16952[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16927 === (4))){
var inst_16903 = (state_16926[(7)]);
var inst_16903__$1 = (state_16926[(2)]);
var inst_16904 = (inst_16903__$1 == null);
var state_16926__$1 = (function (){var statearr_16930 = state_16926;
(statearr_16930[(7)] = inst_16903__$1);

return statearr_16930;
})();
if(cljs.core.truth_(inst_16904)){
var statearr_16931_16953 = state_16926__$1;
(statearr_16931_16953[(1)] = (5));

} else {
var statearr_16932_16954 = state_16926__$1;
(statearr_16932_16954[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16927 === (13))){
var state_16926__$1 = state_16926;
var statearr_16933_16955 = state_16926__$1;
(statearr_16933_16955[(2)] = null);

(statearr_16933_16955[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16927 === (6))){
var inst_16903 = (state_16926[(7)]);
var inst_16909 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16903) : p.call(null,inst_16903));
var state_16926__$1 = state_16926;
if(cljs.core.truth_(inst_16909)){
var statearr_16934_16956 = state_16926__$1;
(statearr_16934_16956[(1)] = (9));

} else {
var statearr_16935_16957 = state_16926__$1;
(statearr_16935_16957[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16927 === (3))){
var inst_16924 = (state_16926[(2)]);
var state_16926__$1 = state_16926;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16926__$1,inst_16924);
} else {
if((state_val_16927 === (12))){
var state_16926__$1 = state_16926;
var statearr_16936_16958 = state_16926__$1;
(statearr_16936_16958[(2)] = null);

(statearr_16936_16958[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16927 === (2))){
var state_16926__$1 = state_16926;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16926__$1,(4),ch);
} else {
if((state_val_16927 === (11))){
var inst_16903 = (state_16926[(7)]);
var inst_16913 = (state_16926[(2)]);
var state_16926__$1 = state_16926;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16926__$1,(8),inst_16913,inst_16903);
} else {
if((state_val_16927 === (9))){
var state_16926__$1 = state_16926;
var statearr_16937_16959 = state_16926__$1;
(statearr_16937_16959[(2)] = tc);

(statearr_16937_16959[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16927 === (5))){
var inst_16906 = cljs.core.async.close_BANG_(tc);
var inst_16907 = cljs.core.async.close_BANG_(fc);
var state_16926__$1 = (function (){var statearr_16938 = state_16926;
(statearr_16938[(8)] = inst_16906);

return statearr_16938;
})();
var statearr_16939_16960 = state_16926__$1;
(statearr_16939_16960[(2)] = inst_16907);

(statearr_16939_16960[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16927 === (14))){
var inst_16920 = (state_16926[(2)]);
var state_16926__$1 = state_16926;
var statearr_16940_16961 = state_16926__$1;
(statearr_16940_16961[(2)] = inst_16920);

(statearr_16940_16961[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16927 === (10))){
var state_16926__$1 = state_16926;
var statearr_16941_16962 = state_16926__$1;
(statearr_16941_16962[(2)] = fc);

(statearr_16941_16962[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16927 === (8))){
var inst_16915 = (state_16926[(2)]);
var state_16926__$1 = state_16926;
if(cljs.core.truth_(inst_16915)){
var statearr_16942_16963 = state_16926__$1;
(statearr_16942_16963[(1)] = (12));

} else {
var statearr_16943_16964 = state_16926__$1;
(statearr_16943_16964[(1)] = (13));

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
var cljs$core$async$state_machine__16412__auto__ = null;
var cljs$core$async$state_machine__16412__auto____0 = (function (){
var statearr_16944 = [null,null,null,null,null,null,null,null,null];
(statearr_16944[(0)] = cljs$core$async$state_machine__16412__auto__);

(statearr_16944[(1)] = (1));

return statearr_16944;
});
var cljs$core$async$state_machine__16412__auto____1 = (function (state_16926){
while(true){
var ret_value__16413__auto__ = (function (){try{while(true){
var result__16414__auto__ = switch__16411__auto__(state_16926);
if(cljs.core.keyword_identical_QMARK_(result__16414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16414__auto__;
}
break;
}
}catch (e16945){var ex__16415__auto__ = e16945;
var statearr_16946_16965 = state_16926;
(statearr_16946_16965[(2)] = ex__16415__auto__);


if(cljs.core.seq((state_16926[(4)]))){
var statearr_16947_16966 = state_16926;
(statearr_16947_16966[(1)] = cljs.core.first((state_16926[(4)])));

} else {
throw ex__16415__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16413__auto__,cljs.core.cst$kw$recur)){
var G__16967 = state_16926;
state_16926 = G__16967;
continue;
} else {
return ret_value__16413__auto__;
}
break;
}
});
cljs$core$async$state_machine__16412__auto__ = function(state_16926){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16412__auto____1.call(this,state_16926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16412__auto____0;
cljs$core$async$state_machine__16412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16412__auto____1;
return cljs$core$async$state_machine__16412__auto__;
})()
})();
var state__16488__auto__ = (function (){var statearr_16948 = (f__16487__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16487__auto__.cljs$core$IFn$_invoke$arity$0() : f__16487__auto__.call(null));
(statearr_16948[(6)] = c__16486__auto___16950);

return statearr_16948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16488__auto__);
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
var c__16486__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16487__auto__ = (function (){var switch__16411__auto__ = (function (state_16989){
var state_val_16990 = (state_16989[(1)]);
if((state_val_16990 === (7))){
var inst_16985 = (state_16989[(2)]);
var state_16989__$1 = state_16989;
var statearr_16991_17010 = state_16989__$1;
(statearr_16991_17010[(2)] = inst_16985);

(statearr_16991_17010[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16990 === (1))){
var inst_16968 = init;
var inst_16969 = inst_16968;
var state_16989__$1 = (function (){var statearr_16992 = state_16989;
(statearr_16992[(7)] = inst_16969);

return statearr_16992;
})();
var statearr_16993_17011 = state_16989__$1;
(statearr_16993_17011[(2)] = null);

(statearr_16993_17011[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16990 === (4))){
var inst_16972 = (state_16989[(8)]);
var inst_16972__$1 = (state_16989[(2)]);
var inst_16973 = (inst_16972__$1 == null);
var state_16989__$1 = (function (){var statearr_16994 = state_16989;
(statearr_16994[(8)] = inst_16972__$1);

return statearr_16994;
})();
if(cljs.core.truth_(inst_16973)){
var statearr_16995_17012 = state_16989__$1;
(statearr_16995_17012[(1)] = (5));

} else {
var statearr_16996_17013 = state_16989__$1;
(statearr_16996_17013[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16990 === (6))){
var inst_16976 = (state_16989[(9)]);
var inst_16969 = (state_16989[(7)]);
var inst_16972 = (state_16989[(8)]);
var inst_16976__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16969,inst_16972) : f.call(null,inst_16969,inst_16972));
var inst_16977 = cljs.core.reduced_QMARK_(inst_16976__$1);
var state_16989__$1 = (function (){var statearr_16997 = state_16989;
(statearr_16997[(9)] = inst_16976__$1);

return statearr_16997;
})();
if(inst_16977){
var statearr_16998_17014 = state_16989__$1;
(statearr_16998_17014[(1)] = (8));

} else {
var statearr_16999_17015 = state_16989__$1;
(statearr_16999_17015[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16990 === (3))){
var inst_16987 = (state_16989[(2)]);
var state_16989__$1 = state_16989;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16989__$1,inst_16987);
} else {
if((state_val_16990 === (2))){
var state_16989__$1 = state_16989;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16989__$1,(4),ch);
} else {
if((state_val_16990 === (9))){
var inst_16976 = (state_16989[(9)]);
var inst_16969 = inst_16976;
var state_16989__$1 = (function (){var statearr_17000 = state_16989;
(statearr_17000[(7)] = inst_16969);

return statearr_17000;
})();
var statearr_17001_17016 = state_16989__$1;
(statearr_17001_17016[(2)] = null);

(statearr_17001_17016[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16990 === (5))){
var inst_16969 = (state_16989[(7)]);
var state_16989__$1 = state_16989;
var statearr_17002_17017 = state_16989__$1;
(statearr_17002_17017[(2)] = inst_16969);

(statearr_17002_17017[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16990 === (10))){
var inst_16983 = (state_16989[(2)]);
var state_16989__$1 = state_16989;
var statearr_17003_17018 = state_16989__$1;
(statearr_17003_17018[(2)] = inst_16983);

(statearr_17003_17018[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16990 === (8))){
var inst_16976 = (state_16989[(9)]);
var inst_16979 = cljs.core.deref(inst_16976);
var state_16989__$1 = state_16989;
var statearr_17004_17019 = state_16989__$1;
(statearr_17004_17019[(2)] = inst_16979);

(statearr_17004_17019[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__16412__auto__ = null;
var cljs$core$async$reduce_$_state_machine__16412__auto____0 = (function (){
var statearr_17005 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17005[(0)] = cljs$core$async$reduce_$_state_machine__16412__auto__);

(statearr_17005[(1)] = (1));

return statearr_17005;
});
var cljs$core$async$reduce_$_state_machine__16412__auto____1 = (function (state_16989){
while(true){
var ret_value__16413__auto__ = (function (){try{while(true){
var result__16414__auto__ = switch__16411__auto__(state_16989);
if(cljs.core.keyword_identical_QMARK_(result__16414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16414__auto__;
}
break;
}
}catch (e17006){var ex__16415__auto__ = e17006;
var statearr_17007_17020 = state_16989;
(statearr_17007_17020[(2)] = ex__16415__auto__);


if(cljs.core.seq((state_16989[(4)]))){
var statearr_17008_17021 = state_16989;
(statearr_17008_17021[(1)] = cljs.core.first((state_16989[(4)])));

} else {
throw ex__16415__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16413__auto__,cljs.core.cst$kw$recur)){
var G__17022 = state_16989;
state_16989 = G__17022;
continue;
} else {
return ret_value__16413__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__16412__auto__ = function(state_16989){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__16412__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__16412__auto____1.call(this,state_16989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__16412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__16412__auto____0;
cljs$core$async$reduce_$_state_machine__16412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__16412__auto____1;
return cljs$core$async$reduce_$_state_machine__16412__auto__;
})()
})();
var state__16488__auto__ = (function (){var statearr_17009 = (f__16487__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16487__auto__.cljs$core$IFn$_invoke$arity$0() : f__16487__auto__.call(null));
(statearr_17009[(6)] = c__16486__auto__);

return statearr_17009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16488__auto__);
}));

return c__16486__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__16486__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16487__auto__ = (function (){var switch__16411__auto__ = (function (state_17028){
var state_val_17029 = (state_17028[(1)]);
if((state_val_17029 === (1))){
var inst_17023 = cljs.core.async.reduce(f__$1,init,ch);
var state_17028__$1 = state_17028;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17028__$1,(2),inst_17023);
} else {
if((state_val_17029 === (2))){
var inst_17025 = (state_17028[(2)]);
var inst_17026 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_17025) : f__$1.call(null,inst_17025));
var state_17028__$1 = state_17028;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17028__$1,inst_17026);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__16412__auto__ = null;
var cljs$core$async$transduce_$_state_machine__16412__auto____0 = (function (){
var statearr_17030 = [null,null,null,null,null,null,null];
(statearr_17030[(0)] = cljs$core$async$transduce_$_state_machine__16412__auto__);

(statearr_17030[(1)] = (1));

return statearr_17030;
});
var cljs$core$async$transduce_$_state_machine__16412__auto____1 = (function (state_17028){
while(true){
var ret_value__16413__auto__ = (function (){try{while(true){
var result__16414__auto__ = switch__16411__auto__(state_17028);
if(cljs.core.keyword_identical_QMARK_(result__16414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16414__auto__;
}
break;
}
}catch (e17031){var ex__16415__auto__ = e17031;
var statearr_17032_17035 = state_17028;
(statearr_17032_17035[(2)] = ex__16415__auto__);


if(cljs.core.seq((state_17028[(4)]))){
var statearr_17033_17036 = state_17028;
(statearr_17033_17036[(1)] = cljs.core.first((state_17028[(4)])));

} else {
throw ex__16415__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16413__auto__,cljs.core.cst$kw$recur)){
var G__17037 = state_17028;
state_17028 = G__17037;
continue;
} else {
return ret_value__16413__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__16412__auto__ = function(state_17028){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__16412__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__16412__auto____1.call(this,state_17028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__16412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__16412__auto____0;
cljs$core$async$transduce_$_state_machine__16412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__16412__auto____1;
return cljs$core$async$transduce_$_state_machine__16412__auto__;
})()
})();
var state__16488__auto__ = (function (){var statearr_17034 = (f__16487__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16487__auto__.cljs$core$IFn$_invoke$arity$0() : f__16487__auto__.call(null));
(statearr_17034[(6)] = c__16486__auto__);

return statearr_17034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16488__auto__);
}));

return c__16486__auto__;
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
var G__17039 = arguments.length;
switch (G__17039) {
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
var c__16486__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16487__auto__ = (function (){var switch__16411__auto__ = (function (state_17064){
var state_val_17065 = (state_17064[(1)]);
if((state_val_17065 === (7))){
var inst_17046 = (state_17064[(2)]);
var state_17064__$1 = state_17064;
var statearr_17066_17088 = state_17064__$1;
(statearr_17066_17088[(2)] = inst_17046);

(statearr_17066_17088[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17065 === (1))){
var inst_17040 = cljs.core.seq(coll);
var inst_17041 = inst_17040;
var state_17064__$1 = (function (){var statearr_17067 = state_17064;
(statearr_17067[(7)] = inst_17041);

return statearr_17067;
})();
var statearr_17068_17089 = state_17064__$1;
(statearr_17068_17089[(2)] = null);

(statearr_17068_17089[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17065 === (4))){
var inst_17041 = (state_17064[(7)]);
var inst_17044 = cljs.core.first(inst_17041);
var state_17064__$1 = state_17064;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17064__$1,(7),ch,inst_17044);
} else {
if((state_val_17065 === (13))){
var inst_17058 = (state_17064[(2)]);
var state_17064__$1 = state_17064;
var statearr_17069_17090 = state_17064__$1;
(statearr_17069_17090[(2)] = inst_17058);

(statearr_17069_17090[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17065 === (6))){
var inst_17049 = (state_17064[(2)]);
var state_17064__$1 = state_17064;
if(cljs.core.truth_(inst_17049)){
var statearr_17070_17091 = state_17064__$1;
(statearr_17070_17091[(1)] = (8));

} else {
var statearr_17071_17092 = state_17064__$1;
(statearr_17071_17092[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17065 === (3))){
var inst_17062 = (state_17064[(2)]);
var state_17064__$1 = state_17064;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17064__$1,inst_17062);
} else {
if((state_val_17065 === (12))){
var state_17064__$1 = state_17064;
var statearr_17072_17093 = state_17064__$1;
(statearr_17072_17093[(2)] = null);

(statearr_17072_17093[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17065 === (2))){
var inst_17041 = (state_17064[(7)]);
var state_17064__$1 = state_17064;
if(cljs.core.truth_(inst_17041)){
var statearr_17073_17094 = state_17064__$1;
(statearr_17073_17094[(1)] = (4));

} else {
var statearr_17074_17095 = state_17064__$1;
(statearr_17074_17095[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17065 === (11))){
var inst_17055 = cljs.core.async.close_BANG_(ch);
var state_17064__$1 = state_17064;
var statearr_17075_17096 = state_17064__$1;
(statearr_17075_17096[(2)] = inst_17055);

(statearr_17075_17096[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17065 === (9))){
var state_17064__$1 = state_17064;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17076_17097 = state_17064__$1;
(statearr_17076_17097[(1)] = (11));

} else {
var statearr_17077_17098 = state_17064__$1;
(statearr_17077_17098[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17065 === (5))){
var inst_17041 = (state_17064[(7)]);
var state_17064__$1 = state_17064;
var statearr_17078_17099 = state_17064__$1;
(statearr_17078_17099[(2)] = inst_17041);

(statearr_17078_17099[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17065 === (10))){
var inst_17060 = (state_17064[(2)]);
var state_17064__$1 = state_17064;
var statearr_17079_17100 = state_17064__$1;
(statearr_17079_17100[(2)] = inst_17060);

(statearr_17079_17100[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17065 === (8))){
var inst_17041 = (state_17064[(7)]);
var inst_17051 = cljs.core.next(inst_17041);
var inst_17041__$1 = inst_17051;
var state_17064__$1 = (function (){var statearr_17080 = state_17064;
(statearr_17080[(7)] = inst_17041__$1);

return statearr_17080;
})();
var statearr_17081_17101 = state_17064__$1;
(statearr_17081_17101[(2)] = null);

(statearr_17081_17101[(1)] = (2));


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
var cljs$core$async$state_machine__16412__auto__ = null;
var cljs$core$async$state_machine__16412__auto____0 = (function (){
var statearr_17082 = [null,null,null,null,null,null,null,null];
(statearr_17082[(0)] = cljs$core$async$state_machine__16412__auto__);

(statearr_17082[(1)] = (1));

return statearr_17082;
});
var cljs$core$async$state_machine__16412__auto____1 = (function (state_17064){
while(true){
var ret_value__16413__auto__ = (function (){try{while(true){
var result__16414__auto__ = switch__16411__auto__(state_17064);
if(cljs.core.keyword_identical_QMARK_(result__16414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16414__auto__;
}
break;
}
}catch (e17083){var ex__16415__auto__ = e17083;
var statearr_17084_17102 = state_17064;
(statearr_17084_17102[(2)] = ex__16415__auto__);


if(cljs.core.seq((state_17064[(4)]))){
var statearr_17085_17103 = state_17064;
(statearr_17085_17103[(1)] = cljs.core.first((state_17064[(4)])));

} else {
throw ex__16415__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16413__auto__,cljs.core.cst$kw$recur)){
var G__17104 = state_17064;
state_17064 = G__17104;
continue;
} else {
return ret_value__16413__auto__;
}
break;
}
});
cljs$core$async$state_machine__16412__auto__ = function(state_17064){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16412__auto____1.call(this,state_17064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16412__auto____0;
cljs$core$async$state_machine__16412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16412__auto____1;
return cljs$core$async$state_machine__16412__auto__;
})()
})();
var state__16488__auto__ = (function (){var statearr_17086 = (f__16487__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16487__auto__.cljs$core$IFn$_invoke$arity$0() : f__16487__auto__.call(null));
(statearr_17086[(6)] = c__16486__auto__);

return statearr_17086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16488__auto__);
}));

return c__16486__auto__;
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
var G__17106 = arguments.length;
switch (G__17106) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_17108 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_17108(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_17109 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_17109(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_17110 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_17110(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_17111 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_17111(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17112 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17112 = (function (ch,cs,meta17113){
this.ch = ch;
this.cs = cs;
this.meta17113 = meta17113;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17112.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17114,meta17113__$1){
var self__ = this;
var _17114__$1 = this;
return (new cljs.core.async.t_cljs$core$async17112(self__.ch,self__.cs,meta17113__$1));
}));

(cljs.core.async.t_cljs$core$async17112.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17114){
var self__ = this;
var _17114__$1 = this;
return self__.meta17113;
}));

(cljs.core.async.t_cljs$core$async17112.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17112.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async17112.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17112.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async17112.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async17112.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async17112.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta17113], null);
}));

(cljs.core.async.t_cljs$core$async17112.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17112.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17112");

(cljs.core.async.t_cljs$core$async17112.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async17112");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17112.
 */
cljs.core.async.__GT_t_cljs$core$async17112 = (function cljs$core$async$mult_$___GT_t_cljs$core$async17112(ch__$1,cs__$1,meta17113){
return (new cljs.core.async.t_cljs$core$async17112(ch__$1,cs__$1,meta17113));
});

}

return (new cljs.core.async.t_cljs$core$async17112(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__16486__auto___17331 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16487__auto__ = (function (){var switch__16411__auto__ = (function (state_17247){
var state_val_17248 = (state_17247[(1)]);
if((state_val_17248 === (7))){
var inst_17243 = (state_17247[(2)]);
var state_17247__$1 = state_17247;
var statearr_17249_17332 = state_17247__$1;
(statearr_17249_17332[(2)] = inst_17243);

(statearr_17249_17332[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17248 === (20))){
var inst_17148 = (state_17247[(7)]);
var inst_17160 = cljs.core.first(inst_17148);
var inst_17161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17160,(0),null);
var inst_17162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17160,(1),null);
var state_17247__$1 = (function (){var statearr_17250 = state_17247;
(statearr_17250[(8)] = inst_17161);

return statearr_17250;
})();
if(cljs.core.truth_(inst_17162)){
var statearr_17251_17333 = state_17247__$1;
(statearr_17251_17333[(1)] = (22));

} else {
var statearr_17252_17334 = state_17247__$1;
(statearr_17252_17334[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17248 === (27))){
var inst_17197 = (state_17247[(9)]);
var inst_17117 = (state_17247[(10)]);
var inst_17192 = (state_17247[(11)]);
var inst_17190 = (state_17247[(12)]);
var inst_17197__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17190,inst_17192);
var inst_17198 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17197__$1,inst_17117,done);
var state_17247__$1 = (function (){var statearr_17253 = state_17247;
(statearr_17253[(9)] = inst_17197__$1);

return statearr_17253;
})();
if(cljs.core.truth_(inst_17198)){
var statearr_17254_17335 = state_17247__$1;
(statearr_17254_17335[(1)] = (30));

} else {
var statearr_17255_17336 = state_17247__$1;
(statearr_17255_17336[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17248 === (1))){
var state_17247__$1 = state_17247;
var statearr_17256_17337 = state_17247__$1;
(statearr_17256_17337[(2)] = null);

(statearr_17256_17337[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17248 === (24))){
var inst_17148 = (state_17247[(7)]);
var inst_17167 = (state_17247[(2)]);
var inst_17168 = cljs.core.next(inst_17148);
var inst_17126 = inst_17168;
var inst_17127 = null;
var inst_17128 = (0);
var inst_17129 = (0);
var state_17247__$1 = (function (){var statearr_17257 = state_17247;
(statearr_17257[(13)] = inst_17126);

(statearr_17257[(14)] = inst_17129);

(statearr_17257[(15)] = inst_17128);

(statearr_17257[(16)] = inst_17127);

(statearr_17257[(17)] = inst_17167);

return statearr_17257;
})();
var statearr_17258_17338 = state_17247__$1;
(statearr_17258_17338[(2)] = null);

(statearr_17258_17338[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17248 === (39))){
var state_17247__$1 = state_17247;
var statearr_17262_17339 = state_17247__$1;
(statearr_17262_17339[(2)] = null);

(statearr_17262_17339[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17248 === (4))){
var inst_17117 = (state_17247[(10)]);
var inst_17117__$1 = (state_17247[(2)]);
var inst_17118 = (inst_17117__$1 == null);
var state_17247__$1 = (function (){var statearr_17263 = state_17247;
(statearr_17263[(10)] = inst_17117__$1);

return statearr_17263;
})();
if(cljs.core.truth_(inst_17118)){
var statearr_17264_17340 = state_17247__$1;
(statearr_17264_17340[(1)] = (5));

} else {
var statearr_17265_17341 = state_17247__$1;
(statearr_17265_17341[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17248 === (15))){
var inst_17126 = (state_17247[(13)]);
var inst_17129 = (state_17247[(14)]);
var inst_17128 = (state_17247[(15)]);
var inst_17127 = (state_17247[(16)]);
var inst_17144 = (state_17247[(2)]);
var inst_17145 = (inst_17129 + (1));
var tmp17259 = inst_17126;
var tmp17260 = inst_17128;
var tmp17261 = inst_17127;
var inst_17126__$1 = tmp17259;
var inst_17127__$1 = tmp17261;
var inst_17128__$1 = tmp17260;
var inst_17129__$1 = inst_17145;
var state_17247__$1 = (function (){var statearr_17266 = state_17247;
(statearr_17266[(13)] = inst_17126__$1);

(statearr_17266[(14)] = inst_17129__$1);

(statearr_17266[(18)] = inst_17144);

(statearr_17266[(15)] = inst_17128__$1);

(statearr_17266[(16)] = inst_17127__$1);

return statearr_17266;
})();
var statearr_17267_17342 = state_17247__$1;
(statearr_17267_17342[(2)] = null);

(statearr_17267_17342[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17248 === (21))){
var inst_17171 = (state_17247[(2)]);
var state_17247__$1 = state_17247;
var statearr_17271_17343 = state_17247__$1;
(statearr_17271_17343[(2)] = inst_17171);

(statearr_17271_17343[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17248 === (31))){
var inst_17197 = (state_17247[(9)]);
var inst_17201 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17197);
var state_17247__$1 = state_17247;
var statearr_17272_17344 = state_17247__$1;
(statearr_17272_17344[(2)] = inst_17201);

(statearr_17272_17344[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17248 === (32))){
var inst_17191 = (state_17247[(19)]);
var inst_17192 = (state_17247[(11)]);
var inst_17190 = (state_17247[(12)]);
var inst_17189 = (state_17247[(20)]);
var inst_17203 = (state_17247[(2)]);
var inst_17204 = (inst_17192 + (1));
var tmp17268 = inst_17191;
var tmp17269 = inst_17190;
var tmp17270 = inst_17189;
var inst_17189__$1 = tmp17270;
var inst_17190__$1 = tmp17269;
var inst_17191__$1 = tmp17268;
var inst_17192__$1 = inst_17204;
var state_17247__$1 = (function (){var statearr_17273 = state_17247;
(statearr_17273[(21)] = inst_17203);

(statearr_17273[(19)] = inst_17191__$1);

(statearr_17273[(11)] = inst_17192__$1);

(statearr_17273[(12)] = inst_17190__$1);

(statearr_17273[(20)] = inst_17189__$1);

return statearr_17273;
})();
var statearr_17274_17345 = state_17247__$1;
(statearr_17274_17345[(2)] = null);

(statearr_17274_17345[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17248 === (40))){
var inst_17216 = (state_17247[(22)]);
var inst_17220 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17216);
var state_17247__$1 = state_17247;
var statearr_17275_17346 = state_17247__$1;
(statearr_17275_17346[(2)] = inst_17220);

(statearr_17275_17346[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17248 === (33))){
var inst_17207 = (state_17247[(23)]);
var inst_17209 = cljs.core.chunked_seq_QMARK_(inst_17207);
var state_17247__$1 = state_17247;
if(inst_17209){
var statearr_17276_17347 = state_17247__$1;
(statearr_17276_17347[(1)] = (36));

} else {
var statearr_17277_17348 = state_17247__$1;
(statearr_17277_17348[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17248 === (13))){
var inst_17138 = (state_17247[(24)]);
var inst_17141 = cljs.core.async.close_BANG_(inst_17138);
var state_17247__$1 = state_17247;
var statearr_17278_17349 = state_17247__$1;
(statearr_17278_17349[(2)] = inst_17141);

(statearr_17278_17349[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17248 === (22))){
var inst_17161 = (state_17247[(8)]);
var inst_17164 = cljs.core.async.close_BANG_(inst_17161);
var state_17247__$1 = state_17247;
var statearr_17279_17350 = state_17247__$1;
(statearr_17279_17350[(2)] = inst_17164);

(statearr_17279_17350[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17248 === (36))){
var inst_17207 = (state_17247[(23)]);
var inst_17211 = cljs.core.chunk_first(inst_17207);
var inst_17212 = cljs.core.chunk_rest(inst_17207);
var inst_17213 = cljs.core.count(inst_17211);
var inst_17189 = inst_17212;
var inst_17190 = inst_17211;
var inst_17191 = inst_17213;
var inst_17192 = (0);
var state_17247__$1 = (function (){var statearr_17280 = state_17247;
(statearr_17280[(19)] = inst_17191);

(statearr_17280[(11)] = inst_17192);

(statearr_17280[(12)] = inst_17190);

(statearr_17280[(20)] = inst_17189);

return statearr_17280;
})();
var statearr_17281_17351 = state_17247__$1;
(statearr_17281_17351[(2)] = null);

(statearr_17281_17351[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17248 === (41))){
var inst_17207 = (state_17247[(23)]);
var inst_17222 = (state_17247[(2)]);
var inst_17223 = cljs.core.next(inst_17207);
var inst_17189 = inst_17223;
var inst_17190 = null;
var inst_17191 = (0);
var inst_17192 = (0);
var state_17247__$1 = (function (){var statearr_17282 = state_17247;
(statearr_17282[(25)] = inst_17222);

(statearr_17282[(19)] = inst_17191);

(statearr_17282[(11)] = inst_17192);

(statearr_17282[(12)] = inst_17190);

(statearr_17282[(20)] = inst_17189);

return statearr_17282;
})();
var statearr_17283_17352 = state_17247__$1;
(statearr_17283_17352[(2)] = null);

(statearr_17283_17352[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17248 === (43))){
var state_17247__$1 = state_17247;
var statearr_17284_17353 = state_17247__$1;
(statearr_17284_17353[(2)] = null);

(statearr_17284_17353[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17248 === (29))){
var inst_17231 = (state_17247[(2)]);
var state_17247__$1 = state_17247;
var statearr_17285_17354 = state_17247__$1;
(statearr_17285_17354[(2)] = inst_17231);

(statearr_17285_17354[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17248 === (44))){
var inst_17240 = (state_17247[(2)]);
var state_17247__$1 = (function (){var statearr_17286 = state_17247;
(statearr_17286[(26)] = inst_17240);

return statearr_17286;
})();
var statearr_17287_17355 = state_17247__$1;
(statearr_17287_17355[(2)] = null);

(statearr_17287_17355[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17248 === (6))){
var inst_17181 = (state_17247[(27)]);
var inst_17180 = cljs.core.deref(cs);
var inst_17181__$1 = cljs.core.keys(inst_17180);
var inst_17182 = cljs.core.count(inst_17181__$1);
var inst_17183 = cljs.core.reset_BANG_(dctr,inst_17182);
var inst_17188 = cljs.core.seq(inst_17181__$1);
var inst_17189 = inst_17188;
var inst_17190 = null;
var inst_17191 = (0);
var inst_17192 = (0);
var state_17247__$1 = (function (){var statearr_17288 = state_17247;
(statearr_17288[(28)] = inst_17183);

(statearr_17288[(19)] = inst_17191);

(statearr_17288[(11)] = inst_17192);

(statearr_17288[(27)] = inst_17181__$1);

(statearr_17288[(12)] = inst_17190);

(statearr_17288[(20)] = inst_17189);

return statearr_17288;
})();
var statearr_17289_17356 = state_17247__$1;
(statearr_17289_17356[(2)] = null);

(statearr_17289_17356[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17248 === (28))){
var inst_17207 = (state_17247[(23)]);
var inst_17189 = (state_17247[(20)]);
var inst_17207__$1 = cljs.core.seq(inst_17189);
var state_17247__$1 = (function (){var statearr_17290 = state_17247;
(statearr_17290[(23)] = inst_17207__$1);

return statearr_17290;
})();
if(inst_17207__$1){
var statearr_17291_17357 = state_17247__$1;
(statearr_17291_17357[(1)] = (33));

} else {
var statearr_17292_17358 = state_17247__$1;
(statearr_17292_17358[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17248 === (25))){
var inst_17191 = (state_17247[(19)]);
var inst_17192 = (state_17247[(11)]);
var inst_17194 = (inst_17192 < inst_17191);
var inst_17195 = inst_17194;
var state_17247__$1 = state_17247;
if(cljs.core.truth_(inst_17195)){
var statearr_17293_17359 = state_17247__$1;
(statearr_17293_17359[(1)] = (27));

} else {
var statearr_17294_17360 = state_17247__$1;
(statearr_17294_17360[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17248 === (34))){
var state_17247__$1 = state_17247;
var statearr_17295_17361 = state_17247__$1;
(statearr_17295_17361[(2)] = null);

(statearr_17295_17361[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17248 === (17))){
var state_17247__$1 = state_17247;
var statearr_17296_17362 = state_17247__$1;
(statearr_17296_17362[(2)] = null);

(statearr_17296_17362[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17248 === (3))){
var inst_17245 = (state_17247[(2)]);
var state_17247__$1 = state_17247;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17247__$1,inst_17245);
} else {
if((state_val_17248 === (12))){
var inst_17176 = (state_17247[(2)]);
var state_17247__$1 = state_17247;
var statearr_17297_17363 = state_17247__$1;
(statearr_17297_17363[(2)] = inst_17176);

(statearr_17297_17363[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17248 === (2))){
var state_17247__$1 = state_17247;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17247__$1,(4),ch);
} else {
if((state_val_17248 === (23))){
var state_17247__$1 = state_17247;
var statearr_17298_17364 = state_17247__$1;
(statearr_17298_17364[(2)] = null);

(statearr_17298_17364[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17248 === (35))){
var inst_17229 = (state_17247[(2)]);
var state_17247__$1 = state_17247;
var statearr_17299_17365 = state_17247__$1;
(statearr_17299_17365[(2)] = inst_17229);

(statearr_17299_17365[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17248 === (19))){
var inst_17148 = (state_17247[(7)]);
var inst_17152 = cljs.core.chunk_first(inst_17148);
var inst_17153 = cljs.core.chunk_rest(inst_17148);
var inst_17154 = cljs.core.count(inst_17152);
var inst_17126 = inst_17153;
var inst_17127 = inst_17152;
var inst_17128 = inst_17154;
var inst_17129 = (0);
var state_17247__$1 = (function (){var statearr_17300 = state_17247;
(statearr_17300[(13)] = inst_17126);

(statearr_17300[(14)] = inst_17129);

(statearr_17300[(15)] = inst_17128);

(statearr_17300[(16)] = inst_17127);

return statearr_17300;
})();
var statearr_17301_17366 = state_17247__$1;
(statearr_17301_17366[(2)] = null);

(statearr_17301_17366[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17248 === (11))){
var inst_17126 = (state_17247[(13)]);
var inst_17148 = (state_17247[(7)]);
var inst_17148__$1 = cljs.core.seq(inst_17126);
var state_17247__$1 = (function (){var statearr_17302 = state_17247;
(statearr_17302[(7)] = inst_17148__$1);

return statearr_17302;
})();
if(inst_17148__$1){
var statearr_17303_17367 = state_17247__$1;
(statearr_17303_17367[(1)] = (16));

} else {
var statearr_17304_17368 = state_17247__$1;
(statearr_17304_17368[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17248 === (9))){
var inst_17178 = (state_17247[(2)]);
var state_17247__$1 = state_17247;
var statearr_17305_17369 = state_17247__$1;
(statearr_17305_17369[(2)] = inst_17178);

(statearr_17305_17369[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17248 === (5))){
var inst_17124 = cljs.core.deref(cs);
var inst_17125 = cljs.core.seq(inst_17124);
var inst_17126 = inst_17125;
var inst_17127 = null;
var inst_17128 = (0);
var inst_17129 = (0);
var state_17247__$1 = (function (){var statearr_17306 = state_17247;
(statearr_17306[(13)] = inst_17126);

(statearr_17306[(14)] = inst_17129);

(statearr_17306[(15)] = inst_17128);

(statearr_17306[(16)] = inst_17127);

return statearr_17306;
})();
var statearr_17307_17370 = state_17247__$1;
(statearr_17307_17370[(2)] = null);

(statearr_17307_17370[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17248 === (14))){
var state_17247__$1 = state_17247;
var statearr_17308_17371 = state_17247__$1;
(statearr_17308_17371[(2)] = null);

(statearr_17308_17371[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17248 === (45))){
var inst_17237 = (state_17247[(2)]);
var state_17247__$1 = state_17247;
var statearr_17309_17372 = state_17247__$1;
(statearr_17309_17372[(2)] = inst_17237);

(statearr_17309_17372[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17248 === (26))){
var inst_17181 = (state_17247[(27)]);
var inst_17233 = (state_17247[(2)]);
var inst_17234 = cljs.core.seq(inst_17181);
var state_17247__$1 = (function (){var statearr_17310 = state_17247;
(statearr_17310[(29)] = inst_17233);

return statearr_17310;
})();
if(inst_17234){
var statearr_17311_17373 = state_17247__$1;
(statearr_17311_17373[(1)] = (42));

} else {
var statearr_17312_17374 = state_17247__$1;
(statearr_17312_17374[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17248 === (16))){
var inst_17148 = (state_17247[(7)]);
var inst_17150 = cljs.core.chunked_seq_QMARK_(inst_17148);
var state_17247__$1 = state_17247;
if(inst_17150){
var statearr_17313_17375 = state_17247__$1;
(statearr_17313_17375[(1)] = (19));

} else {
var statearr_17314_17376 = state_17247__$1;
(statearr_17314_17376[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17248 === (38))){
var inst_17226 = (state_17247[(2)]);
var state_17247__$1 = state_17247;
var statearr_17315_17377 = state_17247__$1;
(statearr_17315_17377[(2)] = inst_17226);

(statearr_17315_17377[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17248 === (30))){
var state_17247__$1 = state_17247;
var statearr_17316_17378 = state_17247__$1;
(statearr_17316_17378[(2)] = null);

(statearr_17316_17378[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17248 === (10))){
var inst_17129 = (state_17247[(14)]);
var inst_17127 = (state_17247[(16)]);
var inst_17137 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17127,inst_17129);
var inst_17138 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17137,(0),null);
var inst_17139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17137,(1),null);
var state_17247__$1 = (function (){var statearr_17317 = state_17247;
(statearr_17317[(24)] = inst_17138);

return statearr_17317;
})();
if(cljs.core.truth_(inst_17139)){
var statearr_17318_17379 = state_17247__$1;
(statearr_17318_17379[(1)] = (13));

} else {
var statearr_17319_17380 = state_17247__$1;
(statearr_17319_17380[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17248 === (18))){
var inst_17174 = (state_17247[(2)]);
var state_17247__$1 = state_17247;
var statearr_17320_17381 = state_17247__$1;
(statearr_17320_17381[(2)] = inst_17174);

(statearr_17320_17381[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17248 === (42))){
var state_17247__$1 = state_17247;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17247__$1,(45),dchan);
} else {
if((state_val_17248 === (37))){
var inst_17117 = (state_17247[(10)]);
var inst_17207 = (state_17247[(23)]);
var inst_17216 = (state_17247[(22)]);
var inst_17216__$1 = cljs.core.first(inst_17207);
var inst_17217 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17216__$1,inst_17117,done);
var state_17247__$1 = (function (){var statearr_17321 = state_17247;
(statearr_17321[(22)] = inst_17216__$1);

return statearr_17321;
})();
if(cljs.core.truth_(inst_17217)){
var statearr_17322_17382 = state_17247__$1;
(statearr_17322_17382[(1)] = (39));

} else {
var statearr_17323_17383 = state_17247__$1;
(statearr_17323_17383[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17248 === (8))){
var inst_17129 = (state_17247[(14)]);
var inst_17128 = (state_17247[(15)]);
var inst_17131 = (inst_17129 < inst_17128);
var inst_17132 = inst_17131;
var state_17247__$1 = state_17247;
if(cljs.core.truth_(inst_17132)){
var statearr_17324_17384 = state_17247__$1;
(statearr_17324_17384[(1)] = (10));

} else {
var statearr_17325_17385 = state_17247__$1;
(statearr_17325_17385[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__16412__auto__ = null;
var cljs$core$async$mult_$_state_machine__16412__auto____0 = (function (){
var statearr_17326 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17326[(0)] = cljs$core$async$mult_$_state_machine__16412__auto__);

(statearr_17326[(1)] = (1));

return statearr_17326;
});
var cljs$core$async$mult_$_state_machine__16412__auto____1 = (function (state_17247){
while(true){
var ret_value__16413__auto__ = (function (){try{while(true){
var result__16414__auto__ = switch__16411__auto__(state_17247);
if(cljs.core.keyword_identical_QMARK_(result__16414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16414__auto__;
}
break;
}
}catch (e17327){var ex__16415__auto__ = e17327;
var statearr_17328_17386 = state_17247;
(statearr_17328_17386[(2)] = ex__16415__auto__);


if(cljs.core.seq((state_17247[(4)]))){
var statearr_17329_17387 = state_17247;
(statearr_17329_17387[(1)] = cljs.core.first((state_17247[(4)])));

} else {
throw ex__16415__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16413__auto__,cljs.core.cst$kw$recur)){
var G__17388 = state_17247;
state_17247 = G__17388;
continue;
} else {
return ret_value__16413__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__16412__auto__ = function(state_17247){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__16412__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__16412__auto____1.call(this,state_17247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__16412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__16412__auto____0;
cljs$core$async$mult_$_state_machine__16412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__16412__auto____1;
return cljs$core$async$mult_$_state_machine__16412__auto__;
})()
})();
var state__16488__auto__ = (function (){var statearr_17330 = (f__16487__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16487__auto__.cljs$core$IFn$_invoke$arity$0() : f__16487__auto__.call(null));
(statearr_17330[(6)] = c__16486__auto___17331);

return statearr_17330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16488__auto__);
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
var G__17390 = arguments.length;
switch (G__17390) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_17392 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_17392(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_17393 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_17393(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_17394 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_17394(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_17395 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_17395(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_17396 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_17396(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17407 = arguments.length;
var i__4737__auto___17408 = (0);
while(true){
if((i__4737__auto___17408 < len__4736__auto___17407)){
args__4742__auto__.push((arguments[i__4737__auto___17408]));

var G__17409 = (i__4737__auto___17408 + (1));
i__4737__auto___17408 = G__17409;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17401){
var map__17402 = p__17401;
var map__17402__$1 = (((((!((map__17402 == null))))?(((((map__17402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17402):map__17402);
var opts = map__17402__$1;
var statearr_17404_17410 = state;
(statearr_17404_17410[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_17405_17411 = state;
(statearr_17405_17411[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_17406_17412 = state;
(statearr_17406_17412[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17397){
var G__17398 = cljs.core.first(seq17397);
var seq17397__$1 = cljs.core.next(seq17397);
var G__17399 = cljs.core.first(seq17397__$1);
var seq17397__$2 = cljs.core.next(seq17397__$1);
var G__17400 = cljs.core.first(seq17397__$2);
var seq17397__$3 = cljs.core.next(seq17397__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17398,G__17399,G__17400,seq17397__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17413 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17413 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17414){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta17414 = meta17414;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17413.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17415,meta17414__$1){
var self__ = this;
var _17415__$1 = this;
return (new cljs.core.async.t_cljs$core$async17413(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17414__$1));
}));

(cljs.core.async.t_cljs$core$async17413.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17415){
var self__ = this;
var _17415__$1 = this;
return self__.meta17414;
}));

(cljs.core.async.t_cljs$core$async17413.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17413.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async17413.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17413.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17413.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17413.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17413.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17413.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17413.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta17414], null);
}));

(cljs.core.async.t_cljs$core$async17413.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17413.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17413");

(cljs.core.async.t_cljs$core$async17413.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async17413");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17413.
 */
cljs.core.async.__GT_t_cljs$core$async17413 = (function cljs$core$async$mix_$___GT_t_cljs$core$async17413(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17414){
return (new cljs.core.async.t_cljs$core$async17413(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17414));
});

}

return (new cljs.core.async.t_cljs$core$async17413(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16486__auto___17578 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16487__auto__ = (function (){var switch__16411__auto__ = (function (state_17517){
var state_val_17518 = (state_17517[(1)]);
if((state_val_17518 === (7))){
var inst_17432 = (state_17517[(2)]);
var state_17517__$1 = state_17517;
var statearr_17519_17579 = state_17517__$1;
(statearr_17519_17579[(2)] = inst_17432);

(statearr_17519_17579[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17518 === (20))){
var inst_17444 = (state_17517[(7)]);
var state_17517__$1 = state_17517;
var statearr_17520_17580 = state_17517__$1;
(statearr_17520_17580[(2)] = inst_17444);

(statearr_17520_17580[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17518 === (27))){
var state_17517__$1 = state_17517;
var statearr_17521_17581 = state_17517__$1;
(statearr_17521_17581[(2)] = null);

(statearr_17521_17581[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17518 === (1))){
var inst_17419 = (state_17517[(8)]);
var inst_17419__$1 = calc_state();
var inst_17421 = (inst_17419__$1 == null);
var inst_17422 = cljs.core.not(inst_17421);
var state_17517__$1 = (function (){var statearr_17522 = state_17517;
(statearr_17522[(8)] = inst_17419__$1);

return statearr_17522;
})();
if(inst_17422){
var statearr_17523_17582 = state_17517__$1;
(statearr_17523_17582[(1)] = (2));

} else {
var statearr_17524_17583 = state_17517__$1;
(statearr_17524_17583[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17518 === (24))){
var inst_17491 = (state_17517[(9)]);
var inst_17477 = (state_17517[(10)]);
var inst_17468 = (state_17517[(11)]);
var inst_17491__$1 = (inst_17468.cljs$core$IFn$_invoke$arity$1 ? inst_17468.cljs$core$IFn$_invoke$arity$1(inst_17477) : inst_17468.call(null,inst_17477));
var state_17517__$1 = (function (){var statearr_17525 = state_17517;
(statearr_17525[(9)] = inst_17491__$1);

return statearr_17525;
})();
if(cljs.core.truth_(inst_17491__$1)){
var statearr_17526_17584 = state_17517__$1;
(statearr_17526_17584[(1)] = (29));

} else {
var statearr_17527_17585 = state_17517__$1;
(statearr_17527_17585[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17518 === (4))){
var inst_17435 = (state_17517[(2)]);
var state_17517__$1 = state_17517;
if(cljs.core.truth_(inst_17435)){
var statearr_17528_17586 = state_17517__$1;
(statearr_17528_17586[(1)] = (8));

} else {
var statearr_17529_17587 = state_17517__$1;
(statearr_17529_17587[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17518 === (15))){
var inst_17462 = (state_17517[(2)]);
var state_17517__$1 = state_17517;
if(cljs.core.truth_(inst_17462)){
var statearr_17530_17588 = state_17517__$1;
(statearr_17530_17588[(1)] = (19));

} else {
var statearr_17531_17589 = state_17517__$1;
(statearr_17531_17589[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17518 === (21))){
var inst_17467 = (state_17517[(12)]);
var inst_17467__$1 = (state_17517[(2)]);
var inst_17468 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17467__$1,cljs.core.cst$kw$solos);
var inst_17469 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17467__$1,cljs.core.cst$kw$mutes);
var inst_17470 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17467__$1,cljs.core.cst$kw$reads);
var state_17517__$1 = (function (){var statearr_17532 = state_17517;
(statearr_17532[(13)] = inst_17469);

(statearr_17532[(11)] = inst_17468);

(statearr_17532[(12)] = inst_17467__$1);

return statearr_17532;
})();
return cljs.core.async.ioc_alts_BANG_(state_17517__$1,(22),inst_17470);
} else {
if((state_val_17518 === (31))){
var inst_17499 = (state_17517[(2)]);
var state_17517__$1 = state_17517;
if(cljs.core.truth_(inst_17499)){
var statearr_17533_17590 = state_17517__$1;
(statearr_17533_17590[(1)] = (32));

} else {
var statearr_17534_17591 = state_17517__$1;
(statearr_17534_17591[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17518 === (32))){
var inst_17476 = (state_17517[(14)]);
var state_17517__$1 = state_17517;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17517__$1,(35),out,inst_17476);
} else {
if((state_val_17518 === (33))){
var inst_17467 = (state_17517[(12)]);
var inst_17444 = inst_17467;
var state_17517__$1 = (function (){var statearr_17535 = state_17517;
(statearr_17535[(7)] = inst_17444);

return statearr_17535;
})();
var statearr_17536_17592 = state_17517__$1;
(statearr_17536_17592[(2)] = null);

(statearr_17536_17592[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17518 === (13))){
var inst_17444 = (state_17517[(7)]);
var inst_17451 = inst_17444.cljs$lang$protocol_mask$partition0$;
var inst_17452 = (inst_17451 & (64));
var inst_17453 = inst_17444.cljs$core$ISeq$;
var inst_17454 = (cljs.core.PROTOCOL_SENTINEL === inst_17453);
var inst_17455 = ((inst_17452) || (inst_17454));
var state_17517__$1 = state_17517;
if(cljs.core.truth_(inst_17455)){
var statearr_17537_17593 = state_17517__$1;
(statearr_17537_17593[(1)] = (16));

} else {
var statearr_17538_17594 = state_17517__$1;
(statearr_17538_17594[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17518 === (22))){
var inst_17477 = (state_17517[(10)]);
var inst_17476 = (state_17517[(14)]);
var inst_17475 = (state_17517[(2)]);
var inst_17476__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17475,(0),null);
var inst_17477__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17475,(1),null);
var inst_17478 = (inst_17476__$1 == null);
var inst_17479 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17477__$1,change);
var inst_17480 = ((inst_17478) || (inst_17479));
var state_17517__$1 = (function (){var statearr_17539 = state_17517;
(statearr_17539[(10)] = inst_17477__$1);

(statearr_17539[(14)] = inst_17476__$1);

return statearr_17539;
})();
if(cljs.core.truth_(inst_17480)){
var statearr_17540_17595 = state_17517__$1;
(statearr_17540_17595[(1)] = (23));

} else {
var statearr_17541_17596 = state_17517__$1;
(statearr_17541_17596[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17518 === (36))){
var inst_17467 = (state_17517[(12)]);
var inst_17444 = inst_17467;
var state_17517__$1 = (function (){var statearr_17542 = state_17517;
(statearr_17542[(7)] = inst_17444);

return statearr_17542;
})();
var statearr_17543_17597 = state_17517__$1;
(statearr_17543_17597[(2)] = null);

(statearr_17543_17597[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17518 === (29))){
var inst_17491 = (state_17517[(9)]);
var state_17517__$1 = state_17517;
var statearr_17544_17598 = state_17517__$1;
(statearr_17544_17598[(2)] = inst_17491);

(statearr_17544_17598[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17518 === (6))){
var state_17517__$1 = state_17517;
var statearr_17545_17599 = state_17517__$1;
(statearr_17545_17599[(2)] = false);

(statearr_17545_17599[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17518 === (28))){
var inst_17487 = (state_17517[(2)]);
var inst_17488 = calc_state();
var inst_17444 = inst_17488;
var state_17517__$1 = (function (){var statearr_17546 = state_17517;
(statearr_17546[(15)] = inst_17487);

(statearr_17546[(7)] = inst_17444);

return statearr_17546;
})();
var statearr_17547_17600 = state_17517__$1;
(statearr_17547_17600[(2)] = null);

(statearr_17547_17600[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17518 === (25))){
var inst_17513 = (state_17517[(2)]);
var state_17517__$1 = state_17517;
var statearr_17548_17601 = state_17517__$1;
(statearr_17548_17601[(2)] = inst_17513);

(statearr_17548_17601[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17518 === (34))){
var inst_17511 = (state_17517[(2)]);
var state_17517__$1 = state_17517;
var statearr_17549_17602 = state_17517__$1;
(statearr_17549_17602[(2)] = inst_17511);

(statearr_17549_17602[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17518 === (17))){
var state_17517__$1 = state_17517;
var statearr_17550_17603 = state_17517__$1;
(statearr_17550_17603[(2)] = false);

(statearr_17550_17603[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17518 === (3))){
var state_17517__$1 = state_17517;
var statearr_17551_17604 = state_17517__$1;
(statearr_17551_17604[(2)] = false);

(statearr_17551_17604[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17518 === (12))){
var inst_17515 = (state_17517[(2)]);
var state_17517__$1 = state_17517;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17517__$1,inst_17515);
} else {
if((state_val_17518 === (2))){
var inst_17419 = (state_17517[(8)]);
var inst_17424 = inst_17419.cljs$lang$protocol_mask$partition0$;
var inst_17425 = (inst_17424 & (64));
var inst_17426 = inst_17419.cljs$core$ISeq$;
var inst_17427 = (cljs.core.PROTOCOL_SENTINEL === inst_17426);
var inst_17428 = ((inst_17425) || (inst_17427));
var state_17517__$1 = state_17517;
if(cljs.core.truth_(inst_17428)){
var statearr_17552_17605 = state_17517__$1;
(statearr_17552_17605[(1)] = (5));

} else {
var statearr_17553_17606 = state_17517__$1;
(statearr_17553_17606[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17518 === (23))){
var inst_17476 = (state_17517[(14)]);
var inst_17482 = (inst_17476 == null);
var state_17517__$1 = state_17517;
if(cljs.core.truth_(inst_17482)){
var statearr_17554_17607 = state_17517__$1;
(statearr_17554_17607[(1)] = (26));

} else {
var statearr_17555_17608 = state_17517__$1;
(statearr_17555_17608[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17518 === (35))){
var inst_17502 = (state_17517[(2)]);
var state_17517__$1 = state_17517;
if(cljs.core.truth_(inst_17502)){
var statearr_17556_17609 = state_17517__$1;
(statearr_17556_17609[(1)] = (36));

} else {
var statearr_17557_17610 = state_17517__$1;
(statearr_17557_17610[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17518 === (19))){
var inst_17444 = (state_17517[(7)]);
var inst_17464 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17444);
var state_17517__$1 = state_17517;
var statearr_17558_17611 = state_17517__$1;
(statearr_17558_17611[(2)] = inst_17464);

(statearr_17558_17611[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17518 === (11))){
var inst_17444 = (state_17517[(7)]);
var inst_17448 = (inst_17444 == null);
var inst_17449 = cljs.core.not(inst_17448);
var state_17517__$1 = state_17517;
if(inst_17449){
var statearr_17559_17612 = state_17517__$1;
(statearr_17559_17612[(1)] = (13));

} else {
var statearr_17560_17613 = state_17517__$1;
(statearr_17560_17613[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17518 === (9))){
var inst_17419 = (state_17517[(8)]);
var state_17517__$1 = state_17517;
var statearr_17561_17614 = state_17517__$1;
(statearr_17561_17614[(2)] = inst_17419);

(statearr_17561_17614[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17518 === (5))){
var state_17517__$1 = state_17517;
var statearr_17562_17615 = state_17517__$1;
(statearr_17562_17615[(2)] = true);

(statearr_17562_17615[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17518 === (14))){
var state_17517__$1 = state_17517;
var statearr_17563_17616 = state_17517__$1;
(statearr_17563_17616[(2)] = false);

(statearr_17563_17616[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17518 === (26))){
var inst_17477 = (state_17517[(10)]);
var inst_17484 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_17477);
var state_17517__$1 = state_17517;
var statearr_17564_17617 = state_17517__$1;
(statearr_17564_17617[(2)] = inst_17484);

(statearr_17564_17617[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17518 === (16))){
var state_17517__$1 = state_17517;
var statearr_17565_17618 = state_17517__$1;
(statearr_17565_17618[(2)] = true);

(statearr_17565_17618[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17518 === (38))){
var inst_17507 = (state_17517[(2)]);
var state_17517__$1 = state_17517;
var statearr_17566_17619 = state_17517__$1;
(statearr_17566_17619[(2)] = inst_17507);

(statearr_17566_17619[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17518 === (30))){
var inst_17469 = (state_17517[(13)]);
var inst_17477 = (state_17517[(10)]);
var inst_17468 = (state_17517[(11)]);
var inst_17494 = cljs.core.empty_QMARK_(inst_17468);
var inst_17495 = (inst_17469.cljs$core$IFn$_invoke$arity$1 ? inst_17469.cljs$core$IFn$_invoke$arity$1(inst_17477) : inst_17469.call(null,inst_17477));
var inst_17496 = cljs.core.not(inst_17495);
var inst_17497 = ((inst_17494) && (inst_17496));
var state_17517__$1 = state_17517;
var statearr_17567_17620 = state_17517__$1;
(statearr_17567_17620[(2)] = inst_17497);

(statearr_17567_17620[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17518 === (10))){
var inst_17419 = (state_17517[(8)]);
var inst_17440 = (state_17517[(2)]);
var inst_17441 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17440,cljs.core.cst$kw$solos);
var inst_17442 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17440,cljs.core.cst$kw$mutes);
var inst_17443 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17440,cljs.core.cst$kw$reads);
var inst_17444 = inst_17419;
var state_17517__$1 = (function (){var statearr_17568 = state_17517;
(statearr_17568[(16)] = inst_17443);

(statearr_17568[(7)] = inst_17444);

(statearr_17568[(17)] = inst_17441);

(statearr_17568[(18)] = inst_17442);

return statearr_17568;
})();
var statearr_17569_17621 = state_17517__$1;
(statearr_17569_17621[(2)] = null);

(statearr_17569_17621[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17518 === (18))){
var inst_17459 = (state_17517[(2)]);
var state_17517__$1 = state_17517;
var statearr_17570_17622 = state_17517__$1;
(statearr_17570_17622[(2)] = inst_17459);

(statearr_17570_17622[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17518 === (37))){
var state_17517__$1 = state_17517;
var statearr_17571_17623 = state_17517__$1;
(statearr_17571_17623[(2)] = null);

(statearr_17571_17623[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17518 === (8))){
var inst_17419 = (state_17517[(8)]);
var inst_17437 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17419);
var state_17517__$1 = state_17517;
var statearr_17572_17624 = state_17517__$1;
(statearr_17572_17624[(2)] = inst_17437);

(statearr_17572_17624[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__16412__auto__ = null;
var cljs$core$async$mix_$_state_machine__16412__auto____0 = (function (){
var statearr_17573 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17573[(0)] = cljs$core$async$mix_$_state_machine__16412__auto__);

(statearr_17573[(1)] = (1));

return statearr_17573;
});
var cljs$core$async$mix_$_state_machine__16412__auto____1 = (function (state_17517){
while(true){
var ret_value__16413__auto__ = (function (){try{while(true){
var result__16414__auto__ = switch__16411__auto__(state_17517);
if(cljs.core.keyword_identical_QMARK_(result__16414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16414__auto__;
}
break;
}
}catch (e17574){var ex__16415__auto__ = e17574;
var statearr_17575_17625 = state_17517;
(statearr_17575_17625[(2)] = ex__16415__auto__);


if(cljs.core.seq((state_17517[(4)]))){
var statearr_17576_17626 = state_17517;
(statearr_17576_17626[(1)] = cljs.core.first((state_17517[(4)])));

} else {
throw ex__16415__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16413__auto__,cljs.core.cst$kw$recur)){
var G__17627 = state_17517;
state_17517 = G__17627;
continue;
} else {
return ret_value__16413__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__16412__auto__ = function(state_17517){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__16412__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__16412__auto____1.call(this,state_17517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__16412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__16412__auto____0;
cljs$core$async$mix_$_state_machine__16412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__16412__auto____1;
return cljs$core$async$mix_$_state_machine__16412__auto__;
})()
})();
var state__16488__auto__ = (function (){var statearr_17577 = (f__16487__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16487__auto__.cljs$core$IFn$_invoke$arity$0() : f__16487__auto__.call(null));
(statearr_17577[(6)] = c__16486__auto___17578);

return statearr_17577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16488__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_17630 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_17630(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_17631 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_17631(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_17632 = (function() {
var G__17633 = null;
var G__17633__1 = (function (p){
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
var G__17633__2 = (function (p,v){
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
G__17633 = function(p,v){
switch(arguments.length){
case 1:
return G__17633__1.call(this,p);
case 2:
return G__17633__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17633.cljs$core$IFn$_invoke$arity$1 = G__17633__1;
G__17633.cljs$core$IFn$_invoke$arity$2 = G__17633__2;
return G__17633;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__17629 = arguments.length;
switch (G__17629) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17632.cljs$core$IFn$_invoke$arity$1(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17632.cljs$core$IFn$_invoke$arity$2(p,v);
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
var G__17637 = arguments.length;
switch (G__17637) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__17635_SHARP_){
if(cljs.core.truth_((p1__17635_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17635_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__17635_SHARP_.call(null,topic)))){
return p1__17635_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17635_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17638 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17638 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17639){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17639 = meta17639;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17638.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17640,meta17639__$1){
var self__ = this;
var _17640__$1 = this;
return (new cljs.core.async.t_cljs$core$async17638(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17639__$1));
}));

(cljs.core.async.t_cljs$core$async17638.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17640){
var self__ = this;
var _17640__$1 = this;
return self__.meta17639;
}));

(cljs.core.async.t_cljs$core$async17638.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17638.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async17638.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17638.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async17638.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async17638.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async17638.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async17638.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta17639], null);
}));

(cljs.core.async.t_cljs$core$async17638.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17638.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17638");

(cljs.core.async.t_cljs$core$async17638.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async17638");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17638.
 */
cljs.core.async.__GT_t_cljs$core$async17638 = (function cljs$core$async$__GT_t_cljs$core$async17638(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17639){
return (new cljs.core.async.t_cljs$core$async17638(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17639));
});

}

return (new cljs.core.async.t_cljs$core$async17638(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16486__auto___17759 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16487__auto__ = (function (){var switch__16411__auto__ = (function (state_17712){
var state_val_17713 = (state_17712[(1)]);
if((state_val_17713 === (7))){
var inst_17708 = (state_17712[(2)]);
var state_17712__$1 = state_17712;
var statearr_17714_17760 = state_17712__$1;
(statearr_17714_17760[(2)] = inst_17708);

(statearr_17714_17760[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17713 === (20))){
var state_17712__$1 = state_17712;
var statearr_17715_17761 = state_17712__$1;
(statearr_17715_17761[(2)] = null);

(statearr_17715_17761[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17713 === (1))){
var state_17712__$1 = state_17712;
var statearr_17716_17762 = state_17712__$1;
(statearr_17716_17762[(2)] = null);

(statearr_17716_17762[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17713 === (24))){
var inst_17691 = (state_17712[(7)]);
var inst_17700 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17691);
var state_17712__$1 = state_17712;
var statearr_17717_17763 = state_17712__$1;
(statearr_17717_17763[(2)] = inst_17700);

(statearr_17717_17763[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17713 === (4))){
var inst_17643 = (state_17712[(8)]);
var inst_17643__$1 = (state_17712[(2)]);
var inst_17644 = (inst_17643__$1 == null);
var state_17712__$1 = (function (){var statearr_17718 = state_17712;
(statearr_17718[(8)] = inst_17643__$1);

return statearr_17718;
})();
if(cljs.core.truth_(inst_17644)){
var statearr_17719_17764 = state_17712__$1;
(statearr_17719_17764[(1)] = (5));

} else {
var statearr_17720_17765 = state_17712__$1;
(statearr_17720_17765[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17713 === (15))){
var inst_17685 = (state_17712[(2)]);
var state_17712__$1 = state_17712;
var statearr_17721_17766 = state_17712__$1;
(statearr_17721_17766[(2)] = inst_17685);

(statearr_17721_17766[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17713 === (21))){
var inst_17705 = (state_17712[(2)]);
var state_17712__$1 = (function (){var statearr_17722 = state_17712;
(statearr_17722[(9)] = inst_17705);

return statearr_17722;
})();
var statearr_17723_17767 = state_17712__$1;
(statearr_17723_17767[(2)] = null);

(statearr_17723_17767[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17713 === (13))){
var inst_17667 = (state_17712[(10)]);
var inst_17669 = cljs.core.chunked_seq_QMARK_(inst_17667);
var state_17712__$1 = state_17712;
if(inst_17669){
var statearr_17724_17768 = state_17712__$1;
(statearr_17724_17768[(1)] = (16));

} else {
var statearr_17725_17769 = state_17712__$1;
(statearr_17725_17769[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17713 === (22))){
var inst_17697 = (state_17712[(2)]);
var state_17712__$1 = state_17712;
if(cljs.core.truth_(inst_17697)){
var statearr_17726_17770 = state_17712__$1;
(statearr_17726_17770[(1)] = (23));

} else {
var statearr_17727_17771 = state_17712__$1;
(statearr_17727_17771[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17713 === (6))){
var inst_17643 = (state_17712[(8)]);
var inst_17693 = (state_17712[(11)]);
var inst_17691 = (state_17712[(7)]);
var inst_17691__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_17643) : topic_fn.call(null,inst_17643));
var inst_17692 = cljs.core.deref(mults);
var inst_17693__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17692,inst_17691__$1);
var state_17712__$1 = (function (){var statearr_17728 = state_17712;
(statearr_17728[(11)] = inst_17693__$1);

(statearr_17728[(7)] = inst_17691__$1);

return statearr_17728;
})();
if(cljs.core.truth_(inst_17693__$1)){
var statearr_17729_17772 = state_17712__$1;
(statearr_17729_17772[(1)] = (19));

} else {
var statearr_17730_17773 = state_17712__$1;
(statearr_17730_17773[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17713 === (25))){
var inst_17702 = (state_17712[(2)]);
var state_17712__$1 = state_17712;
var statearr_17731_17774 = state_17712__$1;
(statearr_17731_17774[(2)] = inst_17702);

(statearr_17731_17774[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17713 === (17))){
var inst_17667 = (state_17712[(10)]);
var inst_17676 = cljs.core.first(inst_17667);
var inst_17677 = cljs.core.async.muxch_STAR_(inst_17676);
var inst_17678 = cljs.core.async.close_BANG_(inst_17677);
var inst_17679 = cljs.core.next(inst_17667);
var inst_17653 = inst_17679;
var inst_17654 = null;
var inst_17655 = (0);
var inst_17656 = (0);
var state_17712__$1 = (function (){var statearr_17732 = state_17712;
(statearr_17732[(12)] = inst_17653);

(statearr_17732[(13)] = inst_17678);

(statearr_17732[(14)] = inst_17656);

(statearr_17732[(15)] = inst_17654);

(statearr_17732[(16)] = inst_17655);

return statearr_17732;
})();
var statearr_17733_17775 = state_17712__$1;
(statearr_17733_17775[(2)] = null);

(statearr_17733_17775[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17713 === (3))){
var inst_17710 = (state_17712[(2)]);
var state_17712__$1 = state_17712;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17712__$1,inst_17710);
} else {
if((state_val_17713 === (12))){
var inst_17687 = (state_17712[(2)]);
var state_17712__$1 = state_17712;
var statearr_17734_17776 = state_17712__$1;
(statearr_17734_17776[(2)] = inst_17687);

(statearr_17734_17776[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17713 === (2))){
var state_17712__$1 = state_17712;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17712__$1,(4),ch);
} else {
if((state_val_17713 === (23))){
var state_17712__$1 = state_17712;
var statearr_17735_17777 = state_17712__$1;
(statearr_17735_17777[(2)] = null);

(statearr_17735_17777[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17713 === (19))){
var inst_17643 = (state_17712[(8)]);
var inst_17693 = (state_17712[(11)]);
var inst_17695 = cljs.core.async.muxch_STAR_(inst_17693);
var state_17712__$1 = state_17712;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17712__$1,(22),inst_17695,inst_17643);
} else {
if((state_val_17713 === (11))){
var inst_17653 = (state_17712[(12)]);
var inst_17667 = (state_17712[(10)]);
var inst_17667__$1 = cljs.core.seq(inst_17653);
var state_17712__$1 = (function (){var statearr_17736 = state_17712;
(statearr_17736[(10)] = inst_17667__$1);

return statearr_17736;
})();
if(inst_17667__$1){
var statearr_17737_17778 = state_17712__$1;
(statearr_17737_17778[(1)] = (13));

} else {
var statearr_17738_17779 = state_17712__$1;
(statearr_17738_17779[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17713 === (9))){
var inst_17689 = (state_17712[(2)]);
var state_17712__$1 = state_17712;
var statearr_17739_17780 = state_17712__$1;
(statearr_17739_17780[(2)] = inst_17689);

(statearr_17739_17780[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17713 === (5))){
var inst_17650 = cljs.core.deref(mults);
var inst_17651 = cljs.core.vals(inst_17650);
var inst_17652 = cljs.core.seq(inst_17651);
var inst_17653 = inst_17652;
var inst_17654 = null;
var inst_17655 = (0);
var inst_17656 = (0);
var state_17712__$1 = (function (){var statearr_17740 = state_17712;
(statearr_17740[(12)] = inst_17653);

(statearr_17740[(14)] = inst_17656);

(statearr_17740[(15)] = inst_17654);

(statearr_17740[(16)] = inst_17655);

return statearr_17740;
})();
var statearr_17741_17781 = state_17712__$1;
(statearr_17741_17781[(2)] = null);

(statearr_17741_17781[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17713 === (14))){
var state_17712__$1 = state_17712;
var statearr_17745_17782 = state_17712__$1;
(statearr_17745_17782[(2)] = null);

(statearr_17745_17782[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17713 === (16))){
var inst_17667 = (state_17712[(10)]);
var inst_17671 = cljs.core.chunk_first(inst_17667);
var inst_17672 = cljs.core.chunk_rest(inst_17667);
var inst_17673 = cljs.core.count(inst_17671);
var inst_17653 = inst_17672;
var inst_17654 = inst_17671;
var inst_17655 = inst_17673;
var inst_17656 = (0);
var state_17712__$1 = (function (){var statearr_17746 = state_17712;
(statearr_17746[(12)] = inst_17653);

(statearr_17746[(14)] = inst_17656);

(statearr_17746[(15)] = inst_17654);

(statearr_17746[(16)] = inst_17655);

return statearr_17746;
})();
var statearr_17747_17783 = state_17712__$1;
(statearr_17747_17783[(2)] = null);

(statearr_17747_17783[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17713 === (10))){
var inst_17653 = (state_17712[(12)]);
var inst_17656 = (state_17712[(14)]);
var inst_17654 = (state_17712[(15)]);
var inst_17655 = (state_17712[(16)]);
var inst_17661 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17654,inst_17656);
var inst_17662 = cljs.core.async.muxch_STAR_(inst_17661);
var inst_17663 = cljs.core.async.close_BANG_(inst_17662);
var inst_17664 = (inst_17656 + (1));
var tmp17742 = inst_17653;
var tmp17743 = inst_17654;
var tmp17744 = inst_17655;
var inst_17653__$1 = tmp17742;
var inst_17654__$1 = tmp17743;
var inst_17655__$1 = tmp17744;
var inst_17656__$1 = inst_17664;
var state_17712__$1 = (function (){var statearr_17748 = state_17712;
(statearr_17748[(12)] = inst_17653__$1);

(statearr_17748[(14)] = inst_17656__$1);

(statearr_17748[(15)] = inst_17654__$1);

(statearr_17748[(16)] = inst_17655__$1);

(statearr_17748[(17)] = inst_17663);

return statearr_17748;
})();
var statearr_17749_17784 = state_17712__$1;
(statearr_17749_17784[(2)] = null);

(statearr_17749_17784[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17713 === (18))){
var inst_17682 = (state_17712[(2)]);
var state_17712__$1 = state_17712;
var statearr_17750_17785 = state_17712__$1;
(statearr_17750_17785[(2)] = inst_17682);

(statearr_17750_17785[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17713 === (8))){
var inst_17656 = (state_17712[(14)]);
var inst_17655 = (state_17712[(16)]);
var inst_17658 = (inst_17656 < inst_17655);
var inst_17659 = inst_17658;
var state_17712__$1 = state_17712;
if(cljs.core.truth_(inst_17659)){
var statearr_17751_17786 = state_17712__$1;
(statearr_17751_17786[(1)] = (10));

} else {
var statearr_17752_17787 = state_17712__$1;
(statearr_17752_17787[(1)] = (11));

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
var cljs$core$async$state_machine__16412__auto__ = null;
var cljs$core$async$state_machine__16412__auto____0 = (function (){
var statearr_17753 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17753[(0)] = cljs$core$async$state_machine__16412__auto__);

(statearr_17753[(1)] = (1));

return statearr_17753;
});
var cljs$core$async$state_machine__16412__auto____1 = (function (state_17712){
while(true){
var ret_value__16413__auto__ = (function (){try{while(true){
var result__16414__auto__ = switch__16411__auto__(state_17712);
if(cljs.core.keyword_identical_QMARK_(result__16414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16414__auto__;
}
break;
}
}catch (e17754){var ex__16415__auto__ = e17754;
var statearr_17755_17788 = state_17712;
(statearr_17755_17788[(2)] = ex__16415__auto__);


if(cljs.core.seq((state_17712[(4)]))){
var statearr_17756_17789 = state_17712;
(statearr_17756_17789[(1)] = cljs.core.first((state_17712[(4)])));

} else {
throw ex__16415__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16413__auto__,cljs.core.cst$kw$recur)){
var G__17790 = state_17712;
state_17712 = G__17790;
continue;
} else {
return ret_value__16413__auto__;
}
break;
}
});
cljs$core$async$state_machine__16412__auto__ = function(state_17712){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16412__auto____1.call(this,state_17712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16412__auto____0;
cljs$core$async$state_machine__16412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16412__auto____1;
return cljs$core$async$state_machine__16412__auto__;
})()
})();
var state__16488__auto__ = (function (){var statearr_17757 = (f__16487__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16487__auto__.cljs$core$IFn$_invoke$arity$0() : f__16487__auto__.call(null));
(statearr_17757[(6)] = c__16486__auto___17759);

return statearr_17757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16488__auto__);
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
var G__17792 = arguments.length;
switch (G__17792) {
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
var G__17795 = arguments.length;
switch (G__17795) {
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
var G__17798 = arguments.length;
switch (G__17798) {
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
var c__16486__auto___17876 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16487__auto__ = (function (){var switch__16411__auto__ = (function (state_17841){
var state_val_17842 = (state_17841[(1)]);
if((state_val_17842 === (7))){
var state_17841__$1 = state_17841;
var statearr_17843_17877 = state_17841__$1;
(statearr_17843_17877[(2)] = null);

(statearr_17843_17877[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17842 === (1))){
var state_17841__$1 = state_17841;
var statearr_17844_17878 = state_17841__$1;
(statearr_17844_17878[(2)] = null);

(statearr_17844_17878[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17842 === (4))){
var inst_17802 = (state_17841[(7)]);
var inst_17801 = (state_17841[(8)]);
var inst_17804 = (inst_17802 < inst_17801);
var state_17841__$1 = state_17841;
if(cljs.core.truth_(inst_17804)){
var statearr_17845_17879 = state_17841__$1;
(statearr_17845_17879[(1)] = (6));

} else {
var statearr_17846_17880 = state_17841__$1;
(statearr_17846_17880[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17842 === (15))){
var inst_17827 = (state_17841[(9)]);
var inst_17832 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17827);
var state_17841__$1 = state_17841;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17841__$1,(17),out,inst_17832);
} else {
if((state_val_17842 === (13))){
var inst_17827 = (state_17841[(9)]);
var inst_17827__$1 = (state_17841[(2)]);
var inst_17828 = cljs.core.some(cljs.core.nil_QMARK_,inst_17827__$1);
var state_17841__$1 = (function (){var statearr_17847 = state_17841;
(statearr_17847[(9)] = inst_17827__$1);

return statearr_17847;
})();
if(cljs.core.truth_(inst_17828)){
var statearr_17848_17881 = state_17841__$1;
(statearr_17848_17881[(1)] = (14));

} else {
var statearr_17849_17882 = state_17841__$1;
(statearr_17849_17882[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17842 === (6))){
var state_17841__$1 = state_17841;
var statearr_17850_17883 = state_17841__$1;
(statearr_17850_17883[(2)] = null);

(statearr_17850_17883[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17842 === (17))){
var inst_17834 = (state_17841[(2)]);
var state_17841__$1 = (function (){var statearr_17852 = state_17841;
(statearr_17852[(10)] = inst_17834);

return statearr_17852;
})();
var statearr_17853_17884 = state_17841__$1;
(statearr_17853_17884[(2)] = null);

(statearr_17853_17884[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17842 === (3))){
var inst_17839 = (state_17841[(2)]);
var state_17841__$1 = state_17841;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17841__$1,inst_17839);
} else {
if((state_val_17842 === (12))){
var _ = (function (){var statearr_17854 = state_17841;
(statearr_17854[(4)] = cljs.core.rest((state_17841[(4)])));

return statearr_17854;
})();
var state_17841__$1 = state_17841;
var ex17851 = (state_17841__$1[(2)]);
var statearr_17855_17885 = state_17841__$1;
(statearr_17855_17885[(5)] = ex17851);


if((ex17851 instanceof Object)){
var statearr_17856_17886 = state_17841__$1;
(statearr_17856_17886[(1)] = (11));

(statearr_17856_17886[(5)] = null);

} else {
throw ex17851;

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17842 === (2))){
var inst_17800 = cljs.core.reset_BANG_(dctr,cnt);
var inst_17801 = cnt;
var inst_17802 = (0);
var state_17841__$1 = (function (){var statearr_17857 = state_17841;
(statearr_17857[(11)] = inst_17800);

(statearr_17857[(7)] = inst_17802);

(statearr_17857[(8)] = inst_17801);

return statearr_17857;
})();
var statearr_17858_17887 = state_17841__$1;
(statearr_17858_17887[(2)] = null);

(statearr_17858_17887[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17842 === (11))){
var inst_17806 = (state_17841[(2)]);
var inst_17807 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17841__$1 = (function (){var statearr_17859 = state_17841;
(statearr_17859[(12)] = inst_17806);

return statearr_17859;
})();
var statearr_17860_17888 = state_17841__$1;
(statearr_17860_17888[(2)] = inst_17807);

(statearr_17860_17888[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17842 === (9))){
var inst_17802 = (state_17841[(7)]);
var _ = (function (){var statearr_17861 = state_17841;
(statearr_17861[(4)] = cljs.core.cons((12),(state_17841[(4)])));

return statearr_17861;
})();
var inst_17813 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17802) : chs__$1.call(null,inst_17802));
var inst_17814 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17802) : done.call(null,inst_17802));
var inst_17815 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17813,inst_17814);
var ___$1 = (function (){var statearr_17862 = state_17841;
(statearr_17862[(4)] = cljs.core.rest((state_17841[(4)])));

return statearr_17862;
})();
var state_17841__$1 = state_17841;
var statearr_17863_17889 = state_17841__$1;
(statearr_17863_17889[(2)] = inst_17815);

(statearr_17863_17889[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17842 === (5))){
var inst_17825 = (state_17841[(2)]);
var state_17841__$1 = (function (){var statearr_17864 = state_17841;
(statearr_17864[(13)] = inst_17825);

return statearr_17864;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17841__$1,(13),dchan);
} else {
if((state_val_17842 === (14))){
var inst_17830 = cljs.core.async.close_BANG_(out);
var state_17841__$1 = state_17841;
var statearr_17865_17890 = state_17841__$1;
(statearr_17865_17890[(2)] = inst_17830);

(statearr_17865_17890[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17842 === (16))){
var inst_17837 = (state_17841[(2)]);
var state_17841__$1 = state_17841;
var statearr_17866_17891 = state_17841__$1;
(statearr_17866_17891[(2)] = inst_17837);

(statearr_17866_17891[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17842 === (10))){
var inst_17802 = (state_17841[(7)]);
var inst_17818 = (state_17841[(2)]);
var inst_17819 = (inst_17802 + (1));
var inst_17802__$1 = inst_17819;
var state_17841__$1 = (function (){var statearr_17867 = state_17841;
(statearr_17867[(7)] = inst_17802__$1);

(statearr_17867[(14)] = inst_17818);

return statearr_17867;
})();
var statearr_17868_17892 = state_17841__$1;
(statearr_17868_17892[(2)] = null);

(statearr_17868_17892[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17842 === (8))){
var inst_17823 = (state_17841[(2)]);
var state_17841__$1 = state_17841;
var statearr_17869_17893 = state_17841__$1;
(statearr_17869_17893[(2)] = inst_17823);

(statearr_17869_17893[(1)] = (5));


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
var cljs$core$async$state_machine__16412__auto__ = null;
var cljs$core$async$state_machine__16412__auto____0 = (function (){
var statearr_17870 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17870[(0)] = cljs$core$async$state_machine__16412__auto__);

(statearr_17870[(1)] = (1));

return statearr_17870;
});
var cljs$core$async$state_machine__16412__auto____1 = (function (state_17841){
while(true){
var ret_value__16413__auto__ = (function (){try{while(true){
var result__16414__auto__ = switch__16411__auto__(state_17841);
if(cljs.core.keyword_identical_QMARK_(result__16414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16414__auto__;
}
break;
}
}catch (e17871){var ex__16415__auto__ = e17871;
var statearr_17872_17894 = state_17841;
(statearr_17872_17894[(2)] = ex__16415__auto__);


if(cljs.core.seq((state_17841[(4)]))){
var statearr_17873_17895 = state_17841;
(statearr_17873_17895[(1)] = cljs.core.first((state_17841[(4)])));

} else {
throw ex__16415__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16413__auto__,cljs.core.cst$kw$recur)){
var G__17896 = state_17841;
state_17841 = G__17896;
continue;
} else {
return ret_value__16413__auto__;
}
break;
}
});
cljs$core$async$state_machine__16412__auto__ = function(state_17841){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16412__auto____1.call(this,state_17841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16412__auto____0;
cljs$core$async$state_machine__16412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16412__auto____1;
return cljs$core$async$state_machine__16412__auto__;
})()
})();
var state__16488__auto__ = (function (){var statearr_17874 = (f__16487__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16487__auto__.cljs$core$IFn$_invoke$arity$0() : f__16487__auto__.call(null));
(statearr_17874[(6)] = c__16486__auto___17876);

return statearr_17874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16488__auto__);
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
var G__17899 = arguments.length;
switch (G__17899) {
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
var c__16486__auto___17954 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16487__auto__ = (function (){var switch__16411__auto__ = (function (state_17931){
var state_val_17932 = (state_17931[(1)]);
if((state_val_17932 === (7))){
var inst_17911 = (state_17931[(7)]);
var inst_17910 = (state_17931[(8)]);
var inst_17910__$1 = (state_17931[(2)]);
var inst_17911__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17910__$1,(0),null);
var inst_17912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17910__$1,(1),null);
var inst_17913 = (inst_17911__$1 == null);
var state_17931__$1 = (function (){var statearr_17933 = state_17931;
(statearr_17933[(7)] = inst_17911__$1);

(statearr_17933[(9)] = inst_17912);

(statearr_17933[(8)] = inst_17910__$1);

return statearr_17933;
})();
if(cljs.core.truth_(inst_17913)){
var statearr_17934_17955 = state_17931__$1;
(statearr_17934_17955[(1)] = (8));

} else {
var statearr_17935_17956 = state_17931__$1;
(statearr_17935_17956[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17932 === (1))){
var inst_17900 = cljs.core.vec(chs);
var inst_17901 = inst_17900;
var state_17931__$1 = (function (){var statearr_17936 = state_17931;
(statearr_17936[(10)] = inst_17901);

return statearr_17936;
})();
var statearr_17937_17957 = state_17931__$1;
(statearr_17937_17957[(2)] = null);

(statearr_17937_17957[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17932 === (4))){
var inst_17901 = (state_17931[(10)]);
var state_17931__$1 = state_17931;
return cljs.core.async.ioc_alts_BANG_(state_17931__$1,(7),inst_17901);
} else {
if((state_val_17932 === (6))){
var inst_17927 = (state_17931[(2)]);
var state_17931__$1 = state_17931;
var statearr_17938_17958 = state_17931__$1;
(statearr_17938_17958[(2)] = inst_17927);

(statearr_17938_17958[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17932 === (3))){
var inst_17929 = (state_17931[(2)]);
var state_17931__$1 = state_17931;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17931__$1,inst_17929);
} else {
if((state_val_17932 === (2))){
var inst_17901 = (state_17931[(10)]);
var inst_17903 = cljs.core.count(inst_17901);
var inst_17904 = (inst_17903 > (0));
var state_17931__$1 = state_17931;
if(cljs.core.truth_(inst_17904)){
var statearr_17940_17959 = state_17931__$1;
(statearr_17940_17959[(1)] = (4));

} else {
var statearr_17941_17960 = state_17931__$1;
(statearr_17941_17960[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17932 === (11))){
var inst_17901 = (state_17931[(10)]);
var inst_17920 = (state_17931[(2)]);
var tmp17939 = inst_17901;
var inst_17901__$1 = tmp17939;
var state_17931__$1 = (function (){var statearr_17942 = state_17931;
(statearr_17942[(11)] = inst_17920);

(statearr_17942[(10)] = inst_17901__$1);

return statearr_17942;
})();
var statearr_17943_17961 = state_17931__$1;
(statearr_17943_17961[(2)] = null);

(statearr_17943_17961[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17932 === (9))){
var inst_17911 = (state_17931[(7)]);
var state_17931__$1 = state_17931;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17931__$1,(11),out,inst_17911);
} else {
if((state_val_17932 === (5))){
var inst_17925 = cljs.core.async.close_BANG_(out);
var state_17931__$1 = state_17931;
var statearr_17944_17962 = state_17931__$1;
(statearr_17944_17962[(2)] = inst_17925);

(statearr_17944_17962[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17932 === (10))){
var inst_17923 = (state_17931[(2)]);
var state_17931__$1 = state_17931;
var statearr_17945_17963 = state_17931__$1;
(statearr_17945_17963[(2)] = inst_17923);

(statearr_17945_17963[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17932 === (8))){
var inst_17911 = (state_17931[(7)]);
var inst_17912 = (state_17931[(9)]);
var inst_17910 = (state_17931[(8)]);
var inst_17901 = (state_17931[(10)]);
var inst_17915 = (function (){var cs = inst_17901;
var vec__17906 = inst_17910;
var v = inst_17911;
var c = inst_17912;
return (function (p1__17897_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17897_SHARP_);
});
})();
var inst_17916 = cljs.core.filterv(inst_17915,inst_17901);
var inst_17901__$1 = inst_17916;
var state_17931__$1 = (function (){var statearr_17946 = state_17931;
(statearr_17946[(10)] = inst_17901__$1);

return statearr_17946;
})();
var statearr_17947_17964 = state_17931__$1;
(statearr_17947_17964[(2)] = null);

(statearr_17947_17964[(1)] = (2));


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
var cljs$core$async$state_machine__16412__auto__ = null;
var cljs$core$async$state_machine__16412__auto____0 = (function (){
var statearr_17948 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17948[(0)] = cljs$core$async$state_machine__16412__auto__);

(statearr_17948[(1)] = (1));

return statearr_17948;
});
var cljs$core$async$state_machine__16412__auto____1 = (function (state_17931){
while(true){
var ret_value__16413__auto__ = (function (){try{while(true){
var result__16414__auto__ = switch__16411__auto__(state_17931);
if(cljs.core.keyword_identical_QMARK_(result__16414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16414__auto__;
}
break;
}
}catch (e17949){var ex__16415__auto__ = e17949;
var statearr_17950_17965 = state_17931;
(statearr_17950_17965[(2)] = ex__16415__auto__);


if(cljs.core.seq((state_17931[(4)]))){
var statearr_17951_17966 = state_17931;
(statearr_17951_17966[(1)] = cljs.core.first((state_17931[(4)])));

} else {
throw ex__16415__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16413__auto__,cljs.core.cst$kw$recur)){
var G__17967 = state_17931;
state_17931 = G__17967;
continue;
} else {
return ret_value__16413__auto__;
}
break;
}
});
cljs$core$async$state_machine__16412__auto__ = function(state_17931){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16412__auto____1.call(this,state_17931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16412__auto____0;
cljs$core$async$state_machine__16412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16412__auto____1;
return cljs$core$async$state_machine__16412__auto__;
})()
})();
var state__16488__auto__ = (function (){var statearr_17952 = (f__16487__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16487__auto__.cljs$core$IFn$_invoke$arity$0() : f__16487__auto__.call(null));
(statearr_17952[(6)] = c__16486__auto___17954);

return statearr_17952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16488__auto__);
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
var G__17969 = arguments.length;
switch (G__17969) {
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
var c__16486__auto___18015 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16487__auto__ = (function (){var switch__16411__auto__ = (function (state_17993){
var state_val_17994 = (state_17993[(1)]);
if((state_val_17994 === (7))){
var inst_17975 = (state_17993[(7)]);
var inst_17975__$1 = (state_17993[(2)]);
var inst_17976 = (inst_17975__$1 == null);
var inst_17977 = cljs.core.not(inst_17976);
var state_17993__$1 = (function (){var statearr_17995 = state_17993;
(statearr_17995[(7)] = inst_17975__$1);

return statearr_17995;
})();
if(inst_17977){
var statearr_17996_18016 = state_17993__$1;
(statearr_17996_18016[(1)] = (8));

} else {
var statearr_17997_18017 = state_17993__$1;
(statearr_17997_18017[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17994 === (1))){
var inst_17970 = (0);
var state_17993__$1 = (function (){var statearr_17998 = state_17993;
(statearr_17998[(8)] = inst_17970);

return statearr_17998;
})();
var statearr_17999_18018 = state_17993__$1;
(statearr_17999_18018[(2)] = null);

(statearr_17999_18018[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17994 === (4))){
var state_17993__$1 = state_17993;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17993__$1,(7),ch);
} else {
if((state_val_17994 === (6))){
var inst_17988 = (state_17993[(2)]);
var state_17993__$1 = state_17993;
var statearr_18000_18019 = state_17993__$1;
(statearr_18000_18019[(2)] = inst_17988);

(statearr_18000_18019[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17994 === (3))){
var inst_17990 = (state_17993[(2)]);
var inst_17991 = cljs.core.async.close_BANG_(out);
var state_17993__$1 = (function (){var statearr_18001 = state_17993;
(statearr_18001[(9)] = inst_17990);

return statearr_18001;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17993__$1,inst_17991);
} else {
if((state_val_17994 === (2))){
var inst_17970 = (state_17993[(8)]);
var inst_17972 = (inst_17970 < n);
var state_17993__$1 = state_17993;
if(cljs.core.truth_(inst_17972)){
var statearr_18002_18020 = state_17993__$1;
(statearr_18002_18020[(1)] = (4));

} else {
var statearr_18003_18021 = state_17993__$1;
(statearr_18003_18021[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17994 === (11))){
var inst_17970 = (state_17993[(8)]);
var inst_17980 = (state_17993[(2)]);
var inst_17981 = (inst_17970 + (1));
var inst_17970__$1 = inst_17981;
var state_17993__$1 = (function (){var statearr_18004 = state_17993;
(statearr_18004[(10)] = inst_17980);

(statearr_18004[(8)] = inst_17970__$1);

return statearr_18004;
})();
var statearr_18005_18022 = state_17993__$1;
(statearr_18005_18022[(2)] = null);

(statearr_18005_18022[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17994 === (9))){
var state_17993__$1 = state_17993;
var statearr_18006_18023 = state_17993__$1;
(statearr_18006_18023[(2)] = null);

(statearr_18006_18023[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17994 === (5))){
var state_17993__$1 = state_17993;
var statearr_18007_18024 = state_17993__$1;
(statearr_18007_18024[(2)] = null);

(statearr_18007_18024[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17994 === (10))){
var inst_17985 = (state_17993[(2)]);
var state_17993__$1 = state_17993;
var statearr_18008_18025 = state_17993__$1;
(statearr_18008_18025[(2)] = inst_17985);

(statearr_18008_18025[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17994 === (8))){
var inst_17975 = (state_17993[(7)]);
var state_17993__$1 = state_17993;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17993__$1,(11),out,inst_17975);
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
var cljs$core$async$state_machine__16412__auto__ = null;
var cljs$core$async$state_machine__16412__auto____0 = (function (){
var statearr_18009 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18009[(0)] = cljs$core$async$state_machine__16412__auto__);

(statearr_18009[(1)] = (1));

return statearr_18009;
});
var cljs$core$async$state_machine__16412__auto____1 = (function (state_17993){
while(true){
var ret_value__16413__auto__ = (function (){try{while(true){
var result__16414__auto__ = switch__16411__auto__(state_17993);
if(cljs.core.keyword_identical_QMARK_(result__16414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16414__auto__;
}
break;
}
}catch (e18010){var ex__16415__auto__ = e18010;
var statearr_18011_18026 = state_17993;
(statearr_18011_18026[(2)] = ex__16415__auto__);


if(cljs.core.seq((state_17993[(4)]))){
var statearr_18012_18027 = state_17993;
(statearr_18012_18027[(1)] = cljs.core.first((state_17993[(4)])));

} else {
throw ex__16415__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16413__auto__,cljs.core.cst$kw$recur)){
var G__18028 = state_17993;
state_17993 = G__18028;
continue;
} else {
return ret_value__16413__auto__;
}
break;
}
});
cljs$core$async$state_machine__16412__auto__ = function(state_17993){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16412__auto____1.call(this,state_17993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16412__auto____0;
cljs$core$async$state_machine__16412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16412__auto____1;
return cljs$core$async$state_machine__16412__auto__;
})()
})();
var state__16488__auto__ = (function (){var statearr_18013 = (f__16487__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16487__auto__.cljs$core$IFn$_invoke$arity$0() : f__16487__auto__.call(null));
(statearr_18013[(6)] = c__16486__auto___18015);

return statearr_18013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16488__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18030 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18030 = (function (f,ch,meta18031){
this.f = f;
this.ch = ch;
this.meta18031 = meta18031;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18032,meta18031__$1){
var self__ = this;
var _18032__$1 = this;
return (new cljs.core.async.t_cljs$core$async18030(self__.f,self__.ch,meta18031__$1));
}));

(cljs.core.async.t_cljs$core$async18030.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18032){
var self__ = this;
var _18032__$1 = this;
return self__.meta18031;
}));

(cljs.core.async.t_cljs$core$async18030.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18030.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18030.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18030.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18030.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18033 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18033 = (function (f,ch,meta18031,_,fn1,meta18034){
this.f = f;
this.ch = ch;
this.meta18031 = meta18031;
this._ = _;
this.fn1 = fn1;
this.meta18034 = meta18034;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18035,meta18034__$1){
var self__ = this;
var _18035__$1 = this;
return (new cljs.core.async.t_cljs$core$async18033(self__.f,self__.ch,self__.meta18031,self__._,self__.fn1,meta18034__$1));
}));

(cljs.core.async.t_cljs$core$async18033.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18035){
var self__ = this;
var _18035__$1 = this;
return self__.meta18034;
}));

(cljs.core.async.t_cljs$core$async18033.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18033.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async18033.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18033.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__18029_SHARP_){
var G__18036 = (((p1__18029_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__18029_SHARP_) : self__.f.call(null,p1__18029_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__18036) : f1.call(null,G__18036));
});
}));

(cljs.core.async.t_cljs$core$async18033.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18031,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async18030], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta18034], null);
}));

(cljs.core.async.t_cljs$core$async18033.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18033.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18033");

(cljs.core.async.t_cljs$core$async18033.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async18033");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18033.
 */
cljs.core.async.__GT_t_cljs$core$async18033 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18033(f__$1,ch__$1,meta18031__$1,___$2,fn1__$1,meta18034){
return (new cljs.core.async.t_cljs$core$async18033(f__$1,ch__$1,meta18031__$1,___$2,fn1__$1,meta18034));
});

}

return (new cljs.core.async.t_cljs$core$async18033(self__.f,self__.ch,self__.meta18031,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__18037 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__18037) : self__.f.call(null,G__18037));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async18030.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18030.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async18030.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18031], null);
}));

(cljs.core.async.t_cljs$core$async18030.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18030.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18030");

(cljs.core.async.t_cljs$core$async18030.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async18030");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18030.
 */
cljs.core.async.__GT_t_cljs$core$async18030 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18030(f__$1,ch__$1,meta18031){
return (new cljs.core.async.t_cljs$core$async18030(f__$1,ch__$1,meta18031));
});

}

return (new cljs.core.async.t_cljs$core$async18030(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18038 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18038 = (function (f,ch,meta18039){
this.f = f;
this.ch = ch;
this.meta18039 = meta18039;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18040,meta18039__$1){
var self__ = this;
var _18040__$1 = this;
return (new cljs.core.async.t_cljs$core$async18038(self__.f,self__.ch,meta18039__$1));
}));

(cljs.core.async.t_cljs$core$async18038.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18040){
var self__ = this;
var _18040__$1 = this;
return self__.meta18039;
}));

(cljs.core.async.t_cljs$core$async18038.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18038.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18038.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18038.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18038.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18038.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async18038.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18039], null);
}));

(cljs.core.async.t_cljs$core$async18038.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18038.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18038");

(cljs.core.async.t_cljs$core$async18038.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async18038");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18038.
 */
cljs.core.async.__GT_t_cljs$core$async18038 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async18038(f__$1,ch__$1,meta18039){
return (new cljs.core.async.t_cljs$core$async18038(f__$1,ch__$1,meta18039));
});

}

return (new cljs.core.async.t_cljs$core$async18038(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18041 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18041 = (function (p,ch,meta18042){
this.p = p;
this.ch = ch;
this.meta18042 = meta18042;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18041.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18043,meta18042__$1){
var self__ = this;
var _18043__$1 = this;
return (new cljs.core.async.t_cljs$core$async18041(self__.p,self__.ch,meta18042__$1));
}));

(cljs.core.async.t_cljs$core$async18041.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18043){
var self__ = this;
var _18043__$1 = this;
return self__.meta18042;
}));

(cljs.core.async.t_cljs$core$async18041.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18041.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18041.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18041.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18041.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18041.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18041.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async18041.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18042], null);
}));

(cljs.core.async.t_cljs$core$async18041.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18041.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18041");

(cljs.core.async.t_cljs$core$async18041.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async18041");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18041.
 */
cljs.core.async.__GT_t_cljs$core$async18041 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async18041(p__$1,ch__$1,meta18042){
return (new cljs.core.async.t_cljs$core$async18041(p__$1,ch__$1,meta18042));
});

}

return (new cljs.core.async.t_cljs$core$async18041(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__18045 = arguments.length;
switch (G__18045) {
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
var c__16486__auto___18086 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16487__auto__ = (function (){var switch__16411__auto__ = (function (state_18066){
var state_val_18067 = (state_18066[(1)]);
if((state_val_18067 === (7))){
var inst_18062 = (state_18066[(2)]);
var state_18066__$1 = state_18066;
var statearr_18068_18087 = state_18066__$1;
(statearr_18068_18087[(2)] = inst_18062);

(statearr_18068_18087[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18067 === (1))){
var state_18066__$1 = state_18066;
var statearr_18069_18088 = state_18066__$1;
(statearr_18069_18088[(2)] = null);

(statearr_18069_18088[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18067 === (4))){
var inst_18048 = (state_18066[(7)]);
var inst_18048__$1 = (state_18066[(2)]);
var inst_18049 = (inst_18048__$1 == null);
var state_18066__$1 = (function (){var statearr_18070 = state_18066;
(statearr_18070[(7)] = inst_18048__$1);

return statearr_18070;
})();
if(cljs.core.truth_(inst_18049)){
var statearr_18071_18089 = state_18066__$1;
(statearr_18071_18089[(1)] = (5));

} else {
var statearr_18072_18090 = state_18066__$1;
(statearr_18072_18090[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18067 === (6))){
var inst_18048 = (state_18066[(7)]);
var inst_18053 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18048) : p.call(null,inst_18048));
var state_18066__$1 = state_18066;
if(cljs.core.truth_(inst_18053)){
var statearr_18073_18091 = state_18066__$1;
(statearr_18073_18091[(1)] = (8));

} else {
var statearr_18074_18092 = state_18066__$1;
(statearr_18074_18092[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18067 === (3))){
var inst_18064 = (state_18066[(2)]);
var state_18066__$1 = state_18066;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18066__$1,inst_18064);
} else {
if((state_val_18067 === (2))){
var state_18066__$1 = state_18066;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18066__$1,(4),ch);
} else {
if((state_val_18067 === (11))){
var inst_18056 = (state_18066[(2)]);
var state_18066__$1 = state_18066;
var statearr_18075_18093 = state_18066__$1;
(statearr_18075_18093[(2)] = inst_18056);

(statearr_18075_18093[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18067 === (9))){
var state_18066__$1 = state_18066;
var statearr_18076_18094 = state_18066__$1;
(statearr_18076_18094[(2)] = null);

(statearr_18076_18094[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18067 === (5))){
var inst_18051 = cljs.core.async.close_BANG_(out);
var state_18066__$1 = state_18066;
var statearr_18077_18095 = state_18066__$1;
(statearr_18077_18095[(2)] = inst_18051);

(statearr_18077_18095[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18067 === (10))){
var inst_18059 = (state_18066[(2)]);
var state_18066__$1 = (function (){var statearr_18078 = state_18066;
(statearr_18078[(8)] = inst_18059);

return statearr_18078;
})();
var statearr_18079_18096 = state_18066__$1;
(statearr_18079_18096[(2)] = null);

(statearr_18079_18096[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18067 === (8))){
var inst_18048 = (state_18066[(7)]);
var state_18066__$1 = state_18066;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18066__$1,(11),out,inst_18048);
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
var cljs$core$async$state_machine__16412__auto__ = null;
var cljs$core$async$state_machine__16412__auto____0 = (function (){
var statearr_18080 = [null,null,null,null,null,null,null,null,null];
(statearr_18080[(0)] = cljs$core$async$state_machine__16412__auto__);

(statearr_18080[(1)] = (1));

return statearr_18080;
});
var cljs$core$async$state_machine__16412__auto____1 = (function (state_18066){
while(true){
var ret_value__16413__auto__ = (function (){try{while(true){
var result__16414__auto__ = switch__16411__auto__(state_18066);
if(cljs.core.keyword_identical_QMARK_(result__16414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16414__auto__;
}
break;
}
}catch (e18081){var ex__16415__auto__ = e18081;
var statearr_18082_18097 = state_18066;
(statearr_18082_18097[(2)] = ex__16415__auto__);


if(cljs.core.seq((state_18066[(4)]))){
var statearr_18083_18098 = state_18066;
(statearr_18083_18098[(1)] = cljs.core.first((state_18066[(4)])));

} else {
throw ex__16415__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16413__auto__,cljs.core.cst$kw$recur)){
var G__18099 = state_18066;
state_18066 = G__18099;
continue;
} else {
return ret_value__16413__auto__;
}
break;
}
});
cljs$core$async$state_machine__16412__auto__ = function(state_18066){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16412__auto____1.call(this,state_18066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16412__auto____0;
cljs$core$async$state_machine__16412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16412__auto____1;
return cljs$core$async$state_machine__16412__auto__;
})()
})();
var state__16488__auto__ = (function (){var statearr_18084 = (f__16487__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16487__auto__.cljs$core$IFn$_invoke$arity$0() : f__16487__auto__.call(null));
(statearr_18084[(6)] = c__16486__auto___18086);

return statearr_18084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16488__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__18101 = arguments.length;
switch (G__18101) {
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
var c__16486__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16487__auto__ = (function (){var switch__16411__auto__ = (function (state_18164){
var state_val_18165 = (state_18164[(1)]);
if((state_val_18165 === (7))){
var inst_18160 = (state_18164[(2)]);
var state_18164__$1 = state_18164;
var statearr_18166_18205 = state_18164__$1;
(statearr_18166_18205[(2)] = inst_18160);

(statearr_18166_18205[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18165 === (20))){
var inst_18130 = (state_18164[(7)]);
var inst_18141 = (state_18164[(2)]);
var inst_18142 = cljs.core.next(inst_18130);
var inst_18116 = inst_18142;
var inst_18117 = null;
var inst_18118 = (0);
var inst_18119 = (0);
var state_18164__$1 = (function (){var statearr_18167 = state_18164;
(statearr_18167[(8)] = inst_18116);

(statearr_18167[(9)] = inst_18141);

(statearr_18167[(10)] = inst_18118);

(statearr_18167[(11)] = inst_18119);

(statearr_18167[(12)] = inst_18117);

return statearr_18167;
})();
var statearr_18168_18206 = state_18164__$1;
(statearr_18168_18206[(2)] = null);

(statearr_18168_18206[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18165 === (1))){
var state_18164__$1 = state_18164;
var statearr_18169_18207 = state_18164__$1;
(statearr_18169_18207[(2)] = null);

(statearr_18169_18207[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18165 === (4))){
var inst_18105 = (state_18164[(13)]);
var inst_18105__$1 = (state_18164[(2)]);
var inst_18106 = (inst_18105__$1 == null);
var state_18164__$1 = (function (){var statearr_18170 = state_18164;
(statearr_18170[(13)] = inst_18105__$1);

return statearr_18170;
})();
if(cljs.core.truth_(inst_18106)){
var statearr_18171_18208 = state_18164__$1;
(statearr_18171_18208[(1)] = (5));

} else {
var statearr_18172_18209 = state_18164__$1;
(statearr_18172_18209[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18165 === (15))){
var state_18164__$1 = state_18164;
var statearr_18176_18210 = state_18164__$1;
(statearr_18176_18210[(2)] = null);

(statearr_18176_18210[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18165 === (21))){
var state_18164__$1 = state_18164;
var statearr_18177_18211 = state_18164__$1;
(statearr_18177_18211[(2)] = null);

(statearr_18177_18211[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18165 === (13))){
var inst_18116 = (state_18164[(8)]);
var inst_18118 = (state_18164[(10)]);
var inst_18119 = (state_18164[(11)]);
var inst_18117 = (state_18164[(12)]);
var inst_18126 = (state_18164[(2)]);
var inst_18127 = (inst_18119 + (1));
var tmp18173 = inst_18116;
var tmp18174 = inst_18118;
var tmp18175 = inst_18117;
var inst_18116__$1 = tmp18173;
var inst_18117__$1 = tmp18175;
var inst_18118__$1 = tmp18174;
var inst_18119__$1 = inst_18127;
var state_18164__$1 = (function (){var statearr_18178 = state_18164;
(statearr_18178[(8)] = inst_18116__$1);

(statearr_18178[(10)] = inst_18118__$1);

(statearr_18178[(11)] = inst_18119__$1);

(statearr_18178[(14)] = inst_18126);

(statearr_18178[(12)] = inst_18117__$1);

return statearr_18178;
})();
var statearr_18179_18212 = state_18164__$1;
(statearr_18179_18212[(2)] = null);

(statearr_18179_18212[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18165 === (22))){
var state_18164__$1 = state_18164;
var statearr_18180_18213 = state_18164__$1;
(statearr_18180_18213[(2)] = null);

(statearr_18180_18213[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18165 === (6))){
var inst_18105 = (state_18164[(13)]);
var inst_18114 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18105) : f.call(null,inst_18105));
var inst_18115 = cljs.core.seq(inst_18114);
var inst_18116 = inst_18115;
var inst_18117 = null;
var inst_18118 = (0);
var inst_18119 = (0);
var state_18164__$1 = (function (){var statearr_18181 = state_18164;
(statearr_18181[(8)] = inst_18116);

(statearr_18181[(10)] = inst_18118);

(statearr_18181[(11)] = inst_18119);

(statearr_18181[(12)] = inst_18117);

return statearr_18181;
})();
var statearr_18182_18214 = state_18164__$1;
(statearr_18182_18214[(2)] = null);

(statearr_18182_18214[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18165 === (17))){
var inst_18130 = (state_18164[(7)]);
var inst_18134 = cljs.core.chunk_first(inst_18130);
var inst_18135 = cljs.core.chunk_rest(inst_18130);
var inst_18136 = cljs.core.count(inst_18134);
var inst_18116 = inst_18135;
var inst_18117 = inst_18134;
var inst_18118 = inst_18136;
var inst_18119 = (0);
var state_18164__$1 = (function (){var statearr_18183 = state_18164;
(statearr_18183[(8)] = inst_18116);

(statearr_18183[(10)] = inst_18118);

(statearr_18183[(11)] = inst_18119);

(statearr_18183[(12)] = inst_18117);

return statearr_18183;
})();
var statearr_18184_18215 = state_18164__$1;
(statearr_18184_18215[(2)] = null);

(statearr_18184_18215[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18165 === (3))){
var inst_18162 = (state_18164[(2)]);
var state_18164__$1 = state_18164;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18164__$1,inst_18162);
} else {
if((state_val_18165 === (12))){
var inst_18150 = (state_18164[(2)]);
var state_18164__$1 = state_18164;
var statearr_18185_18216 = state_18164__$1;
(statearr_18185_18216[(2)] = inst_18150);

(statearr_18185_18216[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18165 === (2))){
var state_18164__$1 = state_18164;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18164__$1,(4),in$);
} else {
if((state_val_18165 === (23))){
var inst_18158 = (state_18164[(2)]);
var state_18164__$1 = state_18164;
var statearr_18186_18217 = state_18164__$1;
(statearr_18186_18217[(2)] = inst_18158);

(statearr_18186_18217[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18165 === (19))){
var inst_18145 = (state_18164[(2)]);
var state_18164__$1 = state_18164;
var statearr_18187_18218 = state_18164__$1;
(statearr_18187_18218[(2)] = inst_18145);

(statearr_18187_18218[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18165 === (11))){
var inst_18116 = (state_18164[(8)]);
var inst_18130 = (state_18164[(7)]);
var inst_18130__$1 = cljs.core.seq(inst_18116);
var state_18164__$1 = (function (){var statearr_18188 = state_18164;
(statearr_18188[(7)] = inst_18130__$1);

return statearr_18188;
})();
if(inst_18130__$1){
var statearr_18189_18219 = state_18164__$1;
(statearr_18189_18219[(1)] = (14));

} else {
var statearr_18190_18220 = state_18164__$1;
(statearr_18190_18220[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18165 === (9))){
var inst_18152 = (state_18164[(2)]);
var inst_18153 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_18164__$1 = (function (){var statearr_18191 = state_18164;
(statearr_18191[(15)] = inst_18152);

return statearr_18191;
})();
if(cljs.core.truth_(inst_18153)){
var statearr_18192_18221 = state_18164__$1;
(statearr_18192_18221[(1)] = (21));

} else {
var statearr_18193_18222 = state_18164__$1;
(statearr_18193_18222[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18165 === (5))){
var inst_18108 = cljs.core.async.close_BANG_(out);
var state_18164__$1 = state_18164;
var statearr_18194_18223 = state_18164__$1;
(statearr_18194_18223[(2)] = inst_18108);

(statearr_18194_18223[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18165 === (14))){
var inst_18130 = (state_18164[(7)]);
var inst_18132 = cljs.core.chunked_seq_QMARK_(inst_18130);
var state_18164__$1 = state_18164;
if(inst_18132){
var statearr_18195_18224 = state_18164__$1;
(statearr_18195_18224[(1)] = (17));

} else {
var statearr_18196_18225 = state_18164__$1;
(statearr_18196_18225[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18165 === (16))){
var inst_18148 = (state_18164[(2)]);
var state_18164__$1 = state_18164;
var statearr_18197_18226 = state_18164__$1;
(statearr_18197_18226[(2)] = inst_18148);

(statearr_18197_18226[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18165 === (10))){
var inst_18119 = (state_18164[(11)]);
var inst_18117 = (state_18164[(12)]);
var inst_18124 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18117,inst_18119);
var state_18164__$1 = state_18164;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18164__$1,(13),out,inst_18124);
} else {
if((state_val_18165 === (18))){
var inst_18130 = (state_18164[(7)]);
var inst_18139 = cljs.core.first(inst_18130);
var state_18164__$1 = state_18164;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18164__$1,(20),out,inst_18139);
} else {
if((state_val_18165 === (8))){
var inst_18118 = (state_18164[(10)]);
var inst_18119 = (state_18164[(11)]);
var inst_18121 = (inst_18119 < inst_18118);
var inst_18122 = inst_18121;
var state_18164__$1 = state_18164;
if(cljs.core.truth_(inst_18122)){
var statearr_18198_18227 = state_18164__$1;
(statearr_18198_18227[(1)] = (10));

} else {
var statearr_18199_18228 = state_18164__$1;
(statearr_18199_18228[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__16412__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__16412__auto____0 = (function (){
var statearr_18200 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18200[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__16412__auto__);

(statearr_18200[(1)] = (1));

return statearr_18200;
});
var cljs$core$async$mapcat_STAR__$_state_machine__16412__auto____1 = (function (state_18164){
while(true){
var ret_value__16413__auto__ = (function (){try{while(true){
var result__16414__auto__ = switch__16411__auto__(state_18164);
if(cljs.core.keyword_identical_QMARK_(result__16414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16414__auto__;
}
break;
}
}catch (e18201){var ex__16415__auto__ = e18201;
var statearr_18202_18229 = state_18164;
(statearr_18202_18229[(2)] = ex__16415__auto__);


if(cljs.core.seq((state_18164[(4)]))){
var statearr_18203_18230 = state_18164;
(statearr_18203_18230[(1)] = cljs.core.first((state_18164[(4)])));

} else {
throw ex__16415__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16413__auto__,cljs.core.cst$kw$recur)){
var G__18231 = state_18164;
state_18164 = G__18231;
continue;
} else {
return ret_value__16413__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__16412__auto__ = function(state_18164){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__16412__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__16412__auto____1.call(this,state_18164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__16412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__16412__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__16412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__16412__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__16412__auto__;
})()
})();
var state__16488__auto__ = (function (){var statearr_18204 = (f__16487__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16487__auto__.cljs$core$IFn$_invoke$arity$0() : f__16487__auto__.call(null));
(statearr_18204[(6)] = c__16486__auto__);

return statearr_18204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16488__auto__);
}));

return c__16486__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__18233 = arguments.length;
switch (G__18233) {
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
var G__18236 = arguments.length;
switch (G__18236) {
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
var G__18239 = arguments.length;
switch (G__18239) {
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
var c__16486__auto___18287 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16487__auto__ = (function (){var switch__16411__auto__ = (function (state_18263){
var state_val_18264 = (state_18263[(1)]);
if((state_val_18264 === (7))){
var inst_18258 = (state_18263[(2)]);
var state_18263__$1 = state_18263;
var statearr_18265_18288 = state_18263__$1;
(statearr_18265_18288[(2)] = inst_18258);

(statearr_18265_18288[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18264 === (1))){
var inst_18240 = null;
var state_18263__$1 = (function (){var statearr_18266 = state_18263;
(statearr_18266[(7)] = inst_18240);

return statearr_18266;
})();
var statearr_18267_18289 = state_18263__$1;
(statearr_18267_18289[(2)] = null);

(statearr_18267_18289[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18264 === (4))){
var inst_18243 = (state_18263[(8)]);
var inst_18243__$1 = (state_18263[(2)]);
var inst_18244 = (inst_18243__$1 == null);
var inst_18245 = cljs.core.not(inst_18244);
var state_18263__$1 = (function (){var statearr_18268 = state_18263;
(statearr_18268[(8)] = inst_18243__$1);

return statearr_18268;
})();
if(inst_18245){
var statearr_18269_18290 = state_18263__$1;
(statearr_18269_18290[(1)] = (5));

} else {
var statearr_18270_18291 = state_18263__$1;
(statearr_18270_18291[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18264 === (6))){
var state_18263__$1 = state_18263;
var statearr_18271_18292 = state_18263__$1;
(statearr_18271_18292[(2)] = null);

(statearr_18271_18292[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18264 === (3))){
var inst_18260 = (state_18263[(2)]);
var inst_18261 = cljs.core.async.close_BANG_(out);
var state_18263__$1 = (function (){var statearr_18272 = state_18263;
(statearr_18272[(9)] = inst_18260);

return statearr_18272;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18263__$1,inst_18261);
} else {
if((state_val_18264 === (2))){
var state_18263__$1 = state_18263;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18263__$1,(4),ch);
} else {
if((state_val_18264 === (11))){
var inst_18243 = (state_18263[(8)]);
var inst_18252 = (state_18263[(2)]);
var inst_18240 = inst_18243;
var state_18263__$1 = (function (){var statearr_18273 = state_18263;
(statearr_18273[(10)] = inst_18252);

(statearr_18273[(7)] = inst_18240);

return statearr_18273;
})();
var statearr_18274_18293 = state_18263__$1;
(statearr_18274_18293[(2)] = null);

(statearr_18274_18293[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18264 === (9))){
var inst_18243 = (state_18263[(8)]);
var state_18263__$1 = state_18263;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18263__$1,(11),out,inst_18243);
} else {
if((state_val_18264 === (5))){
var inst_18240 = (state_18263[(7)]);
var inst_18243 = (state_18263[(8)]);
var inst_18247 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18243,inst_18240);
var state_18263__$1 = state_18263;
if(inst_18247){
var statearr_18276_18294 = state_18263__$1;
(statearr_18276_18294[(1)] = (8));

} else {
var statearr_18277_18295 = state_18263__$1;
(statearr_18277_18295[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18264 === (10))){
var inst_18255 = (state_18263[(2)]);
var state_18263__$1 = state_18263;
var statearr_18278_18296 = state_18263__$1;
(statearr_18278_18296[(2)] = inst_18255);

(statearr_18278_18296[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18264 === (8))){
var inst_18240 = (state_18263[(7)]);
var tmp18275 = inst_18240;
var inst_18240__$1 = tmp18275;
var state_18263__$1 = (function (){var statearr_18279 = state_18263;
(statearr_18279[(7)] = inst_18240__$1);

return statearr_18279;
})();
var statearr_18280_18297 = state_18263__$1;
(statearr_18280_18297[(2)] = null);

(statearr_18280_18297[(1)] = (2));


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
var cljs$core$async$state_machine__16412__auto__ = null;
var cljs$core$async$state_machine__16412__auto____0 = (function (){
var statearr_18281 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18281[(0)] = cljs$core$async$state_machine__16412__auto__);

(statearr_18281[(1)] = (1));

return statearr_18281;
});
var cljs$core$async$state_machine__16412__auto____1 = (function (state_18263){
while(true){
var ret_value__16413__auto__ = (function (){try{while(true){
var result__16414__auto__ = switch__16411__auto__(state_18263);
if(cljs.core.keyword_identical_QMARK_(result__16414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16414__auto__;
}
break;
}
}catch (e18282){var ex__16415__auto__ = e18282;
var statearr_18283_18298 = state_18263;
(statearr_18283_18298[(2)] = ex__16415__auto__);


if(cljs.core.seq((state_18263[(4)]))){
var statearr_18284_18299 = state_18263;
(statearr_18284_18299[(1)] = cljs.core.first((state_18263[(4)])));

} else {
throw ex__16415__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16413__auto__,cljs.core.cst$kw$recur)){
var G__18300 = state_18263;
state_18263 = G__18300;
continue;
} else {
return ret_value__16413__auto__;
}
break;
}
});
cljs$core$async$state_machine__16412__auto__ = function(state_18263){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16412__auto____1.call(this,state_18263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16412__auto____0;
cljs$core$async$state_machine__16412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16412__auto____1;
return cljs$core$async$state_machine__16412__auto__;
})()
})();
var state__16488__auto__ = (function (){var statearr_18285 = (f__16487__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16487__auto__.cljs$core$IFn$_invoke$arity$0() : f__16487__auto__.call(null));
(statearr_18285[(6)] = c__16486__auto___18287);

return statearr_18285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16488__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__18302 = arguments.length;
switch (G__18302) {
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
var c__16486__auto___18369 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16487__auto__ = (function (){var switch__16411__auto__ = (function (state_18340){
var state_val_18341 = (state_18340[(1)]);
if((state_val_18341 === (7))){
var inst_18336 = (state_18340[(2)]);
var state_18340__$1 = state_18340;
var statearr_18342_18370 = state_18340__$1;
(statearr_18342_18370[(2)] = inst_18336);

(statearr_18342_18370[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18341 === (1))){
var inst_18303 = (new Array(n));
var inst_18304 = inst_18303;
var inst_18305 = (0);
var state_18340__$1 = (function (){var statearr_18343 = state_18340;
(statearr_18343[(7)] = inst_18304);

(statearr_18343[(8)] = inst_18305);

return statearr_18343;
})();
var statearr_18344_18371 = state_18340__$1;
(statearr_18344_18371[(2)] = null);

(statearr_18344_18371[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18341 === (4))){
var inst_18308 = (state_18340[(9)]);
var inst_18308__$1 = (state_18340[(2)]);
var inst_18309 = (inst_18308__$1 == null);
var inst_18310 = cljs.core.not(inst_18309);
var state_18340__$1 = (function (){var statearr_18345 = state_18340;
(statearr_18345[(9)] = inst_18308__$1);

return statearr_18345;
})();
if(inst_18310){
var statearr_18346_18372 = state_18340__$1;
(statearr_18346_18372[(1)] = (5));

} else {
var statearr_18347_18373 = state_18340__$1;
(statearr_18347_18373[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18341 === (15))){
var inst_18330 = (state_18340[(2)]);
var state_18340__$1 = state_18340;
var statearr_18348_18374 = state_18340__$1;
(statearr_18348_18374[(2)] = inst_18330);

(statearr_18348_18374[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18341 === (13))){
var state_18340__$1 = state_18340;
var statearr_18349_18375 = state_18340__$1;
(statearr_18349_18375[(2)] = null);

(statearr_18349_18375[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18341 === (6))){
var inst_18305 = (state_18340[(8)]);
var inst_18326 = (inst_18305 > (0));
var state_18340__$1 = state_18340;
if(cljs.core.truth_(inst_18326)){
var statearr_18350_18376 = state_18340__$1;
(statearr_18350_18376[(1)] = (12));

} else {
var statearr_18351_18377 = state_18340__$1;
(statearr_18351_18377[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18341 === (3))){
var inst_18338 = (state_18340[(2)]);
var state_18340__$1 = state_18340;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18340__$1,inst_18338);
} else {
if((state_val_18341 === (12))){
var inst_18304 = (state_18340[(7)]);
var inst_18328 = cljs.core.vec(inst_18304);
var state_18340__$1 = state_18340;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18340__$1,(15),out,inst_18328);
} else {
if((state_val_18341 === (2))){
var state_18340__$1 = state_18340;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18340__$1,(4),ch);
} else {
if((state_val_18341 === (11))){
var inst_18320 = (state_18340[(2)]);
var inst_18321 = (new Array(n));
var inst_18304 = inst_18321;
var inst_18305 = (0);
var state_18340__$1 = (function (){var statearr_18352 = state_18340;
(statearr_18352[(7)] = inst_18304);

(statearr_18352[(8)] = inst_18305);

(statearr_18352[(10)] = inst_18320);

return statearr_18352;
})();
var statearr_18353_18378 = state_18340__$1;
(statearr_18353_18378[(2)] = null);

(statearr_18353_18378[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18341 === (9))){
var inst_18304 = (state_18340[(7)]);
var inst_18318 = cljs.core.vec(inst_18304);
var state_18340__$1 = state_18340;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18340__$1,(11),out,inst_18318);
} else {
if((state_val_18341 === (5))){
var inst_18304 = (state_18340[(7)]);
var inst_18305 = (state_18340[(8)]);
var inst_18308 = (state_18340[(9)]);
var inst_18313 = (state_18340[(11)]);
var inst_18312 = (inst_18304[inst_18305] = inst_18308);
var inst_18313__$1 = (inst_18305 + (1));
var inst_18314 = (inst_18313__$1 < n);
var state_18340__$1 = (function (){var statearr_18354 = state_18340;
(statearr_18354[(12)] = inst_18312);

(statearr_18354[(11)] = inst_18313__$1);

return statearr_18354;
})();
if(cljs.core.truth_(inst_18314)){
var statearr_18355_18379 = state_18340__$1;
(statearr_18355_18379[(1)] = (8));

} else {
var statearr_18356_18380 = state_18340__$1;
(statearr_18356_18380[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18341 === (14))){
var inst_18333 = (state_18340[(2)]);
var inst_18334 = cljs.core.async.close_BANG_(out);
var state_18340__$1 = (function (){var statearr_18358 = state_18340;
(statearr_18358[(13)] = inst_18333);

return statearr_18358;
})();
var statearr_18359_18381 = state_18340__$1;
(statearr_18359_18381[(2)] = inst_18334);

(statearr_18359_18381[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18341 === (10))){
var inst_18324 = (state_18340[(2)]);
var state_18340__$1 = state_18340;
var statearr_18360_18382 = state_18340__$1;
(statearr_18360_18382[(2)] = inst_18324);

(statearr_18360_18382[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18341 === (8))){
var inst_18304 = (state_18340[(7)]);
var inst_18313 = (state_18340[(11)]);
var tmp18357 = inst_18304;
var inst_18304__$1 = tmp18357;
var inst_18305 = inst_18313;
var state_18340__$1 = (function (){var statearr_18361 = state_18340;
(statearr_18361[(7)] = inst_18304__$1);

(statearr_18361[(8)] = inst_18305);

return statearr_18361;
})();
var statearr_18362_18383 = state_18340__$1;
(statearr_18362_18383[(2)] = null);

(statearr_18362_18383[(1)] = (2));


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
var cljs$core$async$state_machine__16412__auto__ = null;
var cljs$core$async$state_machine__16412__auto____0 = (function (){
var statearr_18363 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18363[(0)] = cljs$core$async$state_machine__16412__auto__);

(statearr_18363[(1)] = (1));

return statearr_18363;
});
var cljs$core$async$state_machine__16412__auto____1 = (function (state_18340){
while(true){
var ret_value__16413__auto__ = (function (){try{while(true){
var result__16414__auto__ = switch__16411__auto__(state_18340);
if(cljs.core.keyword_identical_QMARK_(result__16414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16414__auto__;
}
break;
}
}catch (e18364){var ex__16415__auto__ = e18364;
var statearr_18365_18384 = state_18340;
(statearr_18365_18384[(2)] = ex__16415__auto__);


if(cljs.core.seq((state_18340[(4)]))){
var statearr_18366_18385 = state_18340;
(statearr_18366_18385[(1)] = cljs.core.first((state_18340[(4)])));

} else {
throw ex__16415__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16413__auto__,cljs.core.cst$kw$recur)){
var G__18386 = state_18340;
state_18340 = G__18386;
continue;
} else {
return ret_value__16413__auto__;
}
break;
}
});
cljs$core$async$state_machine__16412__auto__ = function(state_18340){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16412__auto____1.call(this,state_18340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16412__auto____0;
cljs$core$async$state_machine__16412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16412__auto____1;
return cljs$core$async$state_machine__16412__auto__;
})()
})();
var state__16488__auto__ = (function (){var statearr_18367 = (f__16487__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16487__auto__.cljs$core$IFn$_invoke$arity$0() : f__16487__auto__.call(null));
(statearr_18367[(6)] = c__16486__auto___18369);

return statearr_18367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16488__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__18388 = arguments.length;
switch (G__18388) {
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
var c__16486__auto___18459 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16487__auto__ = (function (){var switch__16411__auto__ = (function (state_18430){
var state_val_18431 = (state_18430[(1)]);
if((state_val_18431 === (7))){
var inst_18426 = (state_18430[(2)]);
var state_18430__$1 = state_18430;
var statearr_18432_18460 = state_18430__$1;
(statearr_18432_18460[(2)] = inst_18426);

(statearr_18432_18460[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18431 === (1))){
var inst_18389 = [];
var inst_18390 = inst_18389;
var inst_18391 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_18430__$1 = (function (){var statearr_18433 = state_18430;
(statearr_18433[(7)] = inst_18391);

(statearr_18433[(8)] = inst_18390);

return statearr_18433;
})();
var statearr_18434_18461 = state_18430__$1;
(statearr_18434_18461[(2)] = null);

(statearr_18434_18461[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18431 === (4))){
var inst_18394 = (state_18430[(9)]);
var inst_18394__$1 = (state_18430[(2)]);
var inst_18395 = (inst_18394__$1 == null);
var inst_18396 = cljs.core.not(inst_18395);
var state_18430__$1 = (function (){var statearr_18435 = state_18430;
(statearr_18435[(9)] = inst_18394__$1);

return statearr_18435;
})();
if(inst_18396){
var statearr_18436_18462 = state_18430__$1;
(statearr_18436_18462[(1)] = (5));

} else {
var statearr_18437_18463 = state_18430__$1;
(statearr_18437_18463[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18431 === (15))){
var inst_18420 = (state_18430[(2)]);
var state_18430__$1 = state_18430;
var statearr_18438_18464 = state_18430__$1;
(statearr_18438_18464[(2)] = inst_18420);

(statearr_18438_18464[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18431 === (13))){
var state_18430__$1 = state_18430;
var statearr_18439_18465 = state_18430__$1;
(statearr_18439_18465[(2)] = null);

(statearr_18439_18465[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18431 === (6))){
var inst_18390 = (state_18430[(8)]);
var inst_18415 = inst_18390.length;
var inst_18416 = (inst_18415 > (0));
var state_18430__$1 = state_18430;
if(cljs.core.truth_(inst_18416)){
var statearr_18440_18466 = state_18430__$1;
(statearr_18440_18466[(1)] = (12));

} else {
var statearr_18441_18467 = state_18430__$1;
(statearr_18441_18467[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18431 === (3))){
var inst_18428 = (state_18430[(2)]);
var state_18430__$1 = state_18430;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18430__$1,inst_18428);
} else {
if((state_val_18431 === (12))){
var inst_18390 = (state_18430[(8)]);
var inst_18418 = cljs.core.vec(inst_18390);
var state_18430__$1 = state_18430;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18430__$1,(15),out,inst_18418);
} else {
if((state_val_18431 === (2))){
var state_18430__$1 = state_18430;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18430__$1,(4),ch);
} else {
if((state_val_18431 === (11))){
var inst_18398 = (state_18430[(10)]);
var inst_18394 = (state_18430[(9)]);
var inst_18408 = (state_18430[(2)]);
var inst_18409 = [];
var inst_18410 = inst_18409.push(inst_18394);
var inst_18390 = inst_18409;
var inst_18391 = inst_18398;
var state_18430__$1 = (function (){var statearr_18442 = state_18430;
(statearr_18442[(11)] = inst_18408);

(statearr_18442[(7)] = inst_18391);

(statearr_18442[(12)] = inst_18410);

(statearr_18442[(8)] = inst_18390);

return statearr_18442;
})();
var statearr_18443_18468 = state_18430__$1;
(statearr_18443_18468[(2)] = null);

(statearr_18443_18468[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18431 === (9))){
var inst_18390 = (state_18430[(8)]);
var inst_18406 = cljs.core.vec(inst_18390);
var state_18430__$1 = state_18430;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18430__$1,(11),out,inst_18406);
} else {
if((state_val_18431 === (5))){
var inst_18398 = (state_18430[(10)]);
var inst_18391 = (state_18430[(7)]);
var inst_18394 = (state_18430[(9)]);
var inst_18398__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18394) : f.call(null,inst_18394));
var inst_18399 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18398__$1,inst_18391);
var inst_18400 = cljs.core.keyword_identical_QMARK_(inst_18391,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_18401 = ((inst_18399) || (inst_18400));
var state_18430__$1 = (function (){var statearr_18444 = state_18430;
(statearr_18444[(10)] = inst_18398__$1);

return statearr_18444;
})();
if(cljs.core.truth_(inst_18401)){
var statearr_18445_18469 = state_18430__$1;
(statearr_18445_18469[(1)] = (8));

} else {
var statearr_18446_18470 = state_18430__$1;
(statearr_18446_18470[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18431 === (14))){
var inst_18423 = (state_18430[(2)]);
var inst_18424 = cljs.core.async.close_BANG_(out);
var state_18430__$1 = (function (){var statearr_18448 = state_18430;
(statearr_18448[(13)] = inst_18423);

return statearr_18448;
})();
var statearr_18449_18471 = state_18430__$1;
(statearr_18449_18471[(2)] = inst_18424);

(statearr_18449_18471[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18431 === (10))){
var inst_18413 = (state_18430[(2)]);
var state_18430__$1 = state_18430;
var statearr_18450_18472 = state_18430__$1;
(statearr_18450_18472[(2)] = inst_18413);

(statearr_18450_18472[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18431 === (8))){
var inst_18398 = (state_18430[(10)]);
var inst_18390 = (state_18430[(8)]);
var inst_18394 = (state_18430[(9)]);
var inst_18403 = inst_18390.push(inst_18394);
var tmp18447 = inst_18390;
var inst_18390__$1 = tmp18447;
var inst_18391 = inst_18398;
var state_18430__$1 = (function (){var statearr_18451 = state_18430;
(statearr_18451[(7)] = inst_18391);

(statearr_18451[(14)] = inst_18403);

(statearr_18451[(8)] = inst_18390__$1);

return statearr_18451;
})();
var statearr_18452_18473 = state_18430__$1;
(statearr_18452_18473[(2)] = null);

(statearr_18452_18473[(1)] = (2));


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
var cljs$core$async$state_machine__16412__auto__ = null;
var cljs$core$async$state_machine__16412__auto____0 = (function (){
var statearr_18453 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18453[(0)] = cljs$core$async$state_machine__16412__auto__);

(statearr_18453[(1)] = (1));

return statearr_18453;
});
var cljs$core$async$state_machine__16412__auto____1 = (function (state_18430){
while(true){
var ret_value__16413__auto__ = (function (){try{while(true){
var result__16414__auto__ = switch__16411__auto__(state_18430);
if(cljs.core.keyword_identical_QMARK_(result__16414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16414__auto__;
}
break;
}
}catch (e18454){var ex__16415__auto__ = e18454;
var statearr_18455_18474 = state_18430;
(statearr_18455_18474[(2)] = ex__16415__auto__);


if(cljs.core.seq((state_18430[(4)]))){
var statearr_18456_18475 = state_18430;
(statearr_18456_18475[(1)] = cljs.core.first((state_18430[(4)])));

} else {
throw ex__16415__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16413__auto__,cljs.core.cst$kw$recur)){
var G__18476 = state_18430;
state_18430 = G__18476;
continue;
} else {
return ret_value__16413__auto__;
}
break;
}
});
cljs$core$async$state_machine__16412__auto__ = function(state_18430){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16412__auto____1.call(this,state_18430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16412__auto____0;
cljs$core$async$state_machine__16412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16412__auto____1;
return cljs$core$async$state_machine__16412__auto__;
})()
})();
var state__16488__auto__ = (function (){var statearr_18457 = (f__16487__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16487__auto__.cljs$core$IFn$_invoke$arity$0() : f__16487__auto__.call(null));
(statearr_18457[(6)] = c__16486__auto___18459);

return statearr_18457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16488__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);

