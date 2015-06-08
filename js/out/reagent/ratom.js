// Compiled by ClojureScript 0.0-2816 {}
goog.provide('reagent.ratom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
if(typeof reagent.ratom.debug !== 'undefined'){
} else {
reagent.ratom.debug = false;
}
if(typeof reagent.ratom._running !== 'undefined'){
} else {
reagent.ratom._running = (function (){var G__11328 = (0);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11328) : cljs.core.atom.call(null,G__11328));
})();
}
reagent.ratom.running = (function running(){
var G__11330 = reagent.ratom._running;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11330) : cljs.core.deref.call(null,G__11330));
});
reagent.ratom.capture_derefed = (function capture_derefed(f,obj){
obj.cljsCaptured = null;

var _STAR_ratom_context_STAR_11332 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = obj;

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_11332;
}});
reagent.ratom.captured = (function captured(obj){
var c = obj.cljsCaptured;
obj.cljsCaptured = null;

return c;
});
reagent.ratom.notify_deref_watcher_BANG_ = (function notify_deref_watcher_BANG_(derefable){
var obj = reagent.ratom._STAR_ratom_context_STAR_;
if((obj == null)){
return null;
} else {
var captured = obj.cljsCaptured;
return obj.cljsCaptured = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((captured == null))?cljs.core.PersistentHashSet.EMPTY:captured),derefable);
}
});

reagent.ratom.IReactiveAtom = (function (){var obj11334 = {};
return obj11334;
})();


/**
* @constructor
*/
reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RAtom.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write(writer,"#<Atom: ");

cljs.core.pr_writer(self__.state,writer,opts);

return cljs.core._write(writer,">");
});

reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__11335 = this$__$1;
return goog.getUid(G__11335);
});

reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.validator == null)){
} else {
if(cljs.core.truth_((function (){var G__11336 = new_value;
return (self__.validator.cljs$core$IFn$_invoke$arity$1 ? self__.validator.cljs$core$IFn$_invoke$arity$1(G__11336) : self__.validator.call(null,G__11336));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null))], 0)))].join('')));
}
}

var old_value = self__.state;
self__.state = new_value;

if((self__.watches == null)){
} else {
cljs.core._notify_watches(a__$1,old_value,new_value);
}

return new_value;
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__11337 = self__.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__11337) : f.call(null,G__11337));
})());
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__11338 = self__.state;
var G__11339 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__11338,G__11339) : f.call(null,G__11338,G__11339));
})());
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__11340 = self__.state;
var G__11341 = x;
var G__11342 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__11340,G__11341,G__11342) : f.call(null,G__11340,G__11341,G__11342));
})());
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,x,y,more));
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv(((function (this$__$1){
return (function (_,key,f){
var G__11343_11347 = key;
var G__11344_11348 = this$__$1;
var G__11345_11349 = oldval;
var G__11346_11350 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__11343_11347,G__11344_11348,G__11345_11349,G__11346_11350) : f.call(null,G__11343_11347,G__11344_11348,G__11345_11349,G__11346_11350));

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key,f);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key);
});

reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
reagent.ratom.notify_deref_watcher_BANG_(this$__$1);

return self__.state;
});

reagent.ratom.RAtom.cljs$lang$type = true;

reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom";

reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__4352__auto__,writer__4353__auto__,opt__4354__auto__){
return cljs.core._write(writer__4353__auto__,"reagent.ratom/RAtom");
});

reagent.ratom.__GT_RAtom = (function __GT_RAtom(state,meta,validator,watches){
return (new reagent.ratom.RAtom(state,meta,validator,watches));
});

/**
* Like clojure.core/atom, except that it keeps track of derefs.
* @param {...*} var_args
*/
reagent.ratom.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new reagent.ratom.RAtom(x,null,null,null));
});
var atom__2 = (function() { 
var G__11354__delegate = function (x,p__11351){
var map__11353 = p__11351;
var map__11353__$1 = ((cljs.core.seq_QMARK_(map__11353))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11353):map__11353);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11353__$1,cljs.core.constant$keyword$3);
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11353__$1,cljs.core.constant$keyword$8);
return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__11354 = function (x,var_args){
var p__11351 = null;
if (arguments.length > 1) {
var G__11355__i = 0, G__11355__a = new Array(arguments.length -  1);
while (G__11355__i < G__11355__a.length) {G__11355__a[G__11355__i] = arguments[G__11355__i + 1]; ++G__11355__i;}
  p__11351 = new cljs.core.IndexedSeq(G__11355__a,0);
} 
return G__11354__delegate.call(this,x,p__11351);};
G__11354.cljs$lang$maxFixedArity = 1;
G__11354.cljs$lang$applyTo = (function (arglist__11356){
var x = cljs.core.first(arglist__11356);
var p__11351 = cljs.core.rest(arglist__11356);
return G__11354__delegate(x,p__11351);
});
G__11354.cljs$core$IFn$_invoke$arity$variadic = G__11354__delegate;
return G__11354;
})()
;
atom = function(x,var_args){
var p__11351 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
var G__11357 = null;
if (arguments.length > 1) {
var G__11358__i = 0, G__11358__a = new Array(arguments.length -  1);
while (G__11358__i < G__11358__a.length) {G__11358__a[G__11358__i] = arguments[G__11358__i + 1]; ++G__11358__i;}
G__11357 = new cljs.core.IndexedSeq(G__11358__a,0);
}
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, G__11357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$core$IFn$_invoke$arity$1 = atom__1;
atom.cljs$core$IFn$_invoke$arity$variadic = atom__2.cljs$core$IFn$_invoke$arity$variadic;
return atom;
})()
;

/**
* @constructor
*/
reagent.ratom.RCursor = (function (ratom,path,reaction){
this.ratom = ratom;
this.path = path;
this.reaction = reaction;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RCursor.prototype._reaction = (function (){
var self__ = this;
var this$ = this;
if((self__.reaction == null)){
return self__.reaction = (((function (){var G__11365 = self__.ratom;
if(G__11365){
var bit__4446__auto__ = (G__11365.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4446__auto__) || (G__11365.cljs$core$IDeref$)){
return true;
} else {
if((!G__11365.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__11365);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__11365);
}
})())?(function (){var G__11366 = ((function (this$){
return (function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__11369 = self__.ratom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11369) : cljs.core.deref.call(null,G__11369));
})(),self__.path);
});})(this$))
;
var G__11367 = cljs.core.constant$keyword$19;
var G__11368 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.path,cljs.core.PersistentVector.EMPTY))?((function (G__11366,G__11367,this$){
return (function (p1__11360_SHARP_,p2__11359_SHARP_){
var G__11370 = self__.ratom;
var G__11371 = p2__11359_SHARP_;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11370,G__11371) : cljs.core.reset_BANG_.call(null,G__11370,G__11371));
});})(G__11366,G__11367,this$))
:((function (G__11366,G__11367,this$){
return (function (p1__11362_SHARP_,p2__11361_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.ratom,cljs.core.assoc_in,self__.path,p2__11361_SHARP_);
});})(G__11366,G__11367,this$))
);
return (reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__11366,G__11367,G__11368) : reagent.ratom.make_reaction.call(null,G__11366,G__11367,G__11368));
})():(function (){var G__11372 = ((function (this$){
return (function (){
var G__11375 = self__.path;
return (self__.ratom.cljs$core$IFn$_invoke$arity$1 ? self__.ratom.cljs$core$IFn$_invoke$arity$1(G__11375) : self__.ratom.call(null,G__11375));
});})(this$))
;
var G__11373 = cljs.core.constant$keyword$19;
var G__11374 = ((function (G__11372,G__11373,this$){
return (function (p1__11364_SHARP_,p2__11363_SHARP_){
var G__11376 = self__.path;
var G__11377 = p2__11363_SHARP_;
return (self__.ratom.cljs$core$IFn$_invoke$arity$2 ? self__.ratom.cljs$core$IFn$_invoke$arity$2(G__11376,G__11377) : self__.ratom.call(null,G__11376,G__11377));
});})(G__11372,G__11373,this$))
;
return (reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__11372,G__11373,G__11374) : reagent.ratom.make_reaction.call(null,G__11372,G__11373,G__11374));
})());
} else {
return self__.reaction;
}
});

reagent.ratom.RCursor.prototype._peek = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR_11378 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref(this$._reaction());
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_11378;
}});

reagent.ratom.RCursor.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write(writer,[cljs.core.str("#<Cursor: "),cljs.core.str(self__.path),cljs.core.str(" ")].join(''));

cljs.core.pr_writer(a__$1._peek(),writer,opts);

return cljs.core._write(writer,">");
});

reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.ratom,self__.path], null));
});

reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return ((other instanceof reagent.ratom.RCursor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.path,other.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.ratom,other.ratom));
});

reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,new_value){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_(this$__$1._reaction(),new_value);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$2(a__$1._reaction(),f);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$3(a__$1._reaction(),f,x);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$4(a__$1._reaction(),f,x,y);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$5(a__$1._reaction(),f,x,y,more);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core._notify_watches(this$__$1._reaction(),oldval,newval);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return cljs.core._add_watch(this$__$1._reaction(),key,f);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return cljs.core._remove_watch(this$__$1._reaction(),key);
});

reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._deref(this$__$1._reaction());
});

reagent.ratom.RCursor.cljs$lang$type = true;

reagent.ratom.RCursor.cljs$lang$ctorStr = "reagent.ratom/RCursor";

reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__4352__auto__,writer__4353__auto__,opt__4354__auto__){
return cljs.core._write(writer__4353__auto__,"reagent.ratom/RCursor");
});

reagent.ratom.__GT_RCursor = (function __GT_RCursor(ratom,path,reaction){
return (new reagent.ratom.RCursor(ratom,path,reaction));
});

reagent.ratom.cursor = (function cursor(src,path){
if((function (){var G__11383 = path;
if(G__11383){
var bit__4446__auto__ = (G__11383.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4446__auto__) || (G__11383.cljs$core$IDeref$)){
return true;
} else {
if((!G__11383.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__11383);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__11383);
}
})()){
if(typeof console !== 'undefined'){
console.warn([cljs.core.str("Warning: "),cljs.core.str("Calling cursor with an atom as the second arg is "),cljs.core.str("deprecated, in (cursor "),cljs.core.str(src),cljs.core.str(" "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path], 0))),cljs.core.str(")")].join(''));
} else {
}

if((function (){var G__11384 = path;
if(G__11384){
var bit__4446__auto__ = null;
if(cljs.core.truth_((function (){var or__3765__auto__ = bit__4446__auto__;
if(cljs.core.truth_(or__3765__auto__)){
return or__3765__auto__;
} else {
return G__11384.reagent$ratom$IReactiveAtom$;
}
})())){
return true;
} else {
if((!G__11384.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(reagent.ratom.IReactiveAtom,G__11384);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(reagent.ratom.IReactiveAtom,G__11384);
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("src must be a reactive atom, not "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path], 0)))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IReactiveAtom","IReactiveAtom",-991158427,null),new cljs.core.Symbol(null,"path","path",1452340359,null))], 0)))].join('')));
}

return (new reagent.ratom.RCursor(path,src,null));
} else {
if((function (){var or__3765__auto__ = (function (){var G__11386 = src;
if(G__11386){
var bit__4446__auto__ = null;
if(cljs.core.truth_((function (){var or__3765__auto__ = bit__4446__auto__;
if(cljs.core.truth_(or__3765__auto__)){
return or__3765__auto__;
} else {
return G__11386.reagent$ratom$IReactiveAtom$;
}
})())){
return true;
} else {
if((!G__11386.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(reagent.ratom.IReactiveAtom,G__11386);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(reagent.ratom.IReactiveAtom,G__11386);
}
})();
if(or__3765__auto__){
return or__3765__auto__;
} else {
return (cljs.core.ifn_QMARK_(src)) && (!(cljs.core.vector_QMARK_(src)));
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("src must be a reactive atom or a function, not "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IReactiveAtom","IReactiveAtom",-991158427,null),new cljs.core.Symbol(null,"src","src",-10544524,null)),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"src","src",-10544524,null)),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"src","src",-10544524,null)))))], 0)))].join('')));
}

return (new reagent.ratom.RCursor(src,path,null));
}
});

reagent.ratom.IDisposable = (function (){var obj11388 = {};
return obj11388;
})();

reagent.ratom.dispose_BANG_ = (function dispose_BANG_(this$){
if((function (){var and__3753__auto__ = this$;
if(and__3753__auto__){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1;
} else {
return and__3753__auto__;
}
})()){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
var x__4409__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3765__auto__ = (reagent.ratom.dispose_BANG_[(function (){var G__11392 = x__4409__auto__;
return goog.typeOf(G__11392);
})()]);
if(or__3765__auto__){
return or__3765__auto__;
} else {
var or__3765__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);
if(or__3765__auto____$1){
return or__3765__auto____$1;
} else {
throw cljs.core.missing_protocol("IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IRunnable = (function (){var obj11394 = {};
return obj11394;
})();

reagent.ratom.run = (function run(this$){
if((function (){var and__3753__auto__ = this$;
if(and__3753__auto__){
return this$.reagent$ratom$IRunnable$run$arity$1;
} else {
return and__3753__auto__;
}
})()){
return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else {
var x__4409__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3765__auto__ = (reagent.ratom.run[(function (){var G__11398 = x__4409__auto__;
return goog.typeOf(G__11398);
})()]);
if(or__3765__auto__){
return or__3765__auto__;
} else {
var or__3765__auto____$1 = (reagent.ratom.run["_"]);
if(or__3765__auto____$1){
return or__3765__auto____$1;
} else {
throw cljs.core.missing_protocol("IRunnable.run",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IComputedImpl = (function (){var obj11400 = {};
return obj11400;
})();

reagent.ratom._update_watching = (function _update_watching(this$,derefed){
if((function (){var and__3753__auto__ = this$;
if(and__3753__auto__){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2;
} else {
return and__3753__auto__;
}
})()){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else {
var x__4409__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3765__auto__ = (reagent.ratom._update_watching[(function (){var G__11404 = x__4409__auto__;
return goog.typeOf(G__11404);
})()]);
if(or__3765__auto__){
return or__3765__auto__;
} else {
var or__3765__auto____$1 = (reagent.ratom._update_watching["_"]);
if(or__3765__auto____$1){
return or__3765__auto____$1;
} else {
throw cljs.core.missing_protocol("IComputedImpl.-update-watching",this$);
}
}
})().call(null,this$,derefed);
}
});

reagent.ratom._handle_change = (function _handle_change(k,sender,oldval,newval){
if((function (){var and__3753__auto__ = k;
if(and__3753__auto__){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4;
} else {
return and__3753__auto__;
}
})()){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else {
var x__4409__auto__ = (((k == null))?null:k);
return (function (){var or__3765__auto__ = (reagent.ratom._handle_change[(function (){var G__11408 = x__4409__auto__;
return goog.typeOf(G__11408);
})()]);
if(or__3765__auto__){
return or__3765__auto__;
} else {
var or__3765__auto____$1 = (reagent.ratom._handle_change["_"]);
if(or__3765__auto____$1){
return or__3765__auto____$1;
} else {
throw cljs.core.missing_protocol("IComputedImpl.-handle-change",k);
}
}
})().call(null,k,sender,oldval,newval);
}
});

reagent.ratom._peek_at = (function _peek_at(this$){
if((function (){var and__3753__auto__ = this$;
if(and__3753__auto__){
return this$.reagent$ratom$IComputedImpl$_peek_at$arity$1;
} else {
return and__3753__auto__;
}
})()){
return this$.reagent$ratom$IComputedImpl$_peek_at$arity$1(this$);
} else {
var x__4409__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3765__auto__ = (reagent.ratom._peek_at[(function (){var G__11412 = x__4409__auto__;
return goog.typeOf(G__11412);
})()]);
if(or__3765__auto__){
return or__3765__auto__;
} else {
var or__3765__auto____$1 = (reagent.ratom._peek_at["_"]);
if(or__3765__auto____$1){
return or__3765__auto____$1;
} else {
throw cljs.core.missing_protocol("IComputedImpl.-peek-at",this$);
}
}
})().call(null,this$);
}
});


/**
* @constructor
*/
reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.active_QMARK_ = active_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.on_set = on_set;
this.on_dispose = on_dispose;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_handle_change$arity$4 = (function (this$,sender,oldval,newval){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__3753__auto__ = self__.active_QMARK_;
if(cljs.core.truth_(and__3753__auto__)){
return (cljs.core.not(self__.dirty_QMARK_)) && (!((oldval === newval)));
} else {
return and__3753__auto__;
}
})())){
self__.dirty_QMARK_ = true;

return (function (){var or__3765__auto__ = self__.auto_run;
if(cljs.core.truth_(or__3765__auto__)){
return or__3765__auto__;
} else {
return reagent.ratom.run;
}
})().call(null,this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_update_watching$arity$2 = (function (this$,derefed){
var self__ = this;
var this$__$1 = this;
var seq__11413_11439 = cljs.core.seq(derefed);
var chunk__11414_11440 = null;
var count__11415_11441 = (0);
var i__11416_11442 = (0);
while(true){
if((i__11416_11442 < count__11415_11441)){
var w_11443 = chunk__11414_11440.cljs$core$IIndexed$_nth$arity$2(null,i__11416_11442);
if(cljs.core.contains_QMARK_(self__.watching,w_11443)){
} else {
cljs.core.add_watch(w_11443,this$__$1,reagent.ratom._handle_change);
}

var G__11444 = seq__11413_11439;
var G__11445 = chunk__11414_11440;
var G__11446 = count__11415_11441;
var G__11447 = (i__11416_11442 + (1));
seq__11413_11439 = G__11444;
chunk__11414_11440 = G__11445;
count__11415_11441 = G__11446;
i__11416_11442 = G__11447;
continue;
} else {
var temp__4423__auto___11448 = cljs.core.seq(seq__11413_11439);
if(temp__4423__auto___11448){
var seq__11413_11449__$1 = temp__4423__auto___11448;
if(cljs.core.chunked_seq_QMARK_(seq__11413_11449__$1)){
var c__4552__auto___11450 = cljs.core.chunk_first(seq__11413_11449__$1);
var G__11451 = cljs.core.chunk_rest(seq__11413_11449__$1);
var G__11452 = c__4552__auto___11450;
var G__11453 = cljs.core.count(c__4552__auto___11450);
var G__11454 = (0);
seq__11413_11439 = G__11451;
chunk__11414_11440 = G__11452;
count__11415_11441 = G__11453;
i__11416_11442 = G__11454;
continue;
} else {
var w_11455 = cljs.core.first(seq__11413_11449__$1);
if(cljs.core.contains_QMARK_(self__.watching,w_11455)){
} else {
cljs.core.add_watch(w_11455,this$__$1,reagent.ratom._handle_change);
}

var G__11456 = cljs.core.next(seq__11413_11449__$1);
var G__11457 = null;
var G__11458 = (0);
var G__11459 = (0);
seq__11413_11439 = G__11456;
chunk__11414_11440 = G__11457;
count__11415_11441 = G__11458;
i__11416_11442 = G__11459;
continue;
}
} else {
}
}
break;
}

var seq__11417_11460 = cljs.core.seq(self__.watching);
var chunk__11418_11461 = null;
var count__11419_11462 = (0);
var i__11420_11463 = (0);
while(true){
if((i__11420_11463 < count__11419_11462)){
var w_11464 = chunk__11418_11461.cljs$core$IIndexed$_nth$arity$2(null,i__11420_11463);
if(cljs.core.contains_QMARK_(derefed,w_11464)){
} else {
cljs.core.remove_watch(w_11464,this$__$1);
}

var G__11465 = seq__11417_11460;
var G__11466 = chunk__11418_11461;
var G__11467 = count__11419_11462;
var G__11468 = (i__11420_11463 + (1));
seq__11417_11460 = G__11465;
chunk__11418_11461 = G__11466;
count__11419_11462 = G__11467;
i__11420_11463 = G__11468;
continue;
} else {
var temp__4423__auto___11469 = cljs.core.seq(seq__11417_11460);
if(temp__4423__auto___11469){
var seq__11417_11470__$1 = temp__4423__auto___11469;
if(cljs.core.chunked_seq_QMARK_(seq__11417_11470__$1)){
var c__4552__auto___11471 = cljs.core.chunk_first(seq__11417_11470__$1);
var G__11472 = cljs.core.chunk_rest(seq__11417_11470__$1);
var G__11473 = c__4552__auto___11471;
var G__11474 = cljs.core.count(c__4552__auto___11471);
var G__11475 = (0);
seq__11417_11460 = G__11472;
chunk__11418_11461 = G__11473;
count__11419_11462 = G__11474;
i__11420_11463 = G__11475;
continue;
} else {
var w_11476 = cljs.core.first(seq__11417_11470__$1);
if(cljs.core.contains_QMARK_(derefed,w_11476)){
} else {
cljs.core.remove_watch(w_11476,this$__$1);
}

var G__11477 = cljs.core.next(seq__11417_11470__$1);
var G__11478 = null;
var G__11479 = (0);
var G__11480 = (0);
seq__11417_11460 = G__11477;
chunk__11418_11461 = G__11478;
count__11419_11462 = G__11479;
i__11420_11463 = G__11480;
continue;
}
} else {
}
}
break;
}

return self__.watching = derefed;
});

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_peek_at$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.not(self__.dirty_QMARK_)){
return self__.state;
} else {
var _STAR_ratom_context_STAR_11421 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref(this$__$1);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_11421;
}}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write(writer,[cljs.core.str("#<Reaction "),cljs.core.str(cljs.core.hash(this$__$1)),cljs.core.str(": ")].join(''));

cljs.core.pr_writer(self__.state,writer,opts);

return cljs.core._write(writer,">");
});

reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__11422 = this$__$1;
return goog.getUid(G__11422);
});

reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__11423_11481 = cljs.core.seq(self__.watching);
var chunk__11424_11482 = null;
var count__11425_11483 = (0);
var i__11426_11484 = (0);
while(true){
if((i__11426_11484 < count__11425_11483)){
var w_11485 = chunk__11424_11482.cljs$core$IIndexed$_nth$arity$2(null,i__11426_11484);
cljs.core.remove_watch(w_11485,this$__$1);

var G__11486 = seq__11423_11481;
var G__11487 = chunk__11424_11482;
var G__11488 = count__11425_11483;
var G__11489 = (i__11426_11484 + (1));
seq__11423_11481 = G__11486;
chunk__11424_11482 = G__11487;
count__11425_11483 = G__11488;
i__11426_11484 = G__11489;
continue;
} else {
var temp__4423__auto___11490 = cljs.core.seq(seq__11423_11481);
if(temp__4423__auto___11490){
var seq__11423_11491__$1 = temp__4423__auto___11490;
if(cljs.core.chunked_seq_QMARK_(seq__11423_11491__$1)){
var c__4552__auto___11492 = cljs.core.chunk_first(seq__11423_11491__$1);
var G__11493 = cljs.core.chunk_rest(seq__11423_11491__$1);
var G__11494 = c__4552__auto___11492;
var G__11495 = cljs.core.count(c__4552__auto___11492);
var G__11496 = (0);
seq__11423_11481 = G__11493;
chunk__11424_11482 = G__11494;
count__11425_11483 = G__11495;
i__11426_11484 = G__11496;
continue;
} else {
var w_11497 = cljs.core.first(seq__11423_11491__$1);
cljs.core.remove_watch(w_11497,this$__$1);

var G__11498 = cljs.core.next(seq__11423_11491__$1);
var G__11499 = null;
var G__11500 = (0);
var G__11501 = (0);
seq__11423_11481 = G__11498;
chunk__11424_11482 = G__11499;
count__11425_11483 = G__11500;
i__11426_11484 = G__11501;
continue;
}
} else {
}
}
break;
}

self__.watching = null;

self__.state = null;

self__.dirty_QMARK_ = true;

if(cljs.core.truth_(self__.active_QMARK_)){
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.ratom._running,cljs.core.dec);
} else {
}

self__.active_QMARK_ = false;
} else {
}

if(cljs.core.truth_(self__.on_dispose)){
return (self__.on_dispose.cljs$core$IFn$_invoke$arity$0 ? self__.on_dispose.cljs$core$IFn$_invoke$arity$0() : self__.on_dispose.call(null));
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,newval){
var self__ = this;
var a__$1 = this;
var oldval = self__.state;
self__.state = newval;

if(cljs.core.truth_(self__.on_set)){
self__.dirty_QMARK_ = true;

var G__11427_11502 = oldval;
var G__11428_11503 = newval;
(self__.on_set.cljs$core$IFn$_invoke$arity$2 ? self__.on_set.cljs$core$IFn$_invoke$arity$2(G__11427_11502,G__11428_11503) : self__.on_set.call(null,G__11427_11502,G__11428_11503));
} else {
}

cljs.core._notify_watches(a__$1,oldval,newval);

return newval;
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__11429 = reagent.ratom._peek_at(a__$1);
return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__11429) : f__$1.call(null,G__11429));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__11430 = reagent.ratom._peek_at(a__$1);
var G__11431 = x;
return (f__$1.cljs$core$IFn$_invoke$arity$2 ? f__$1.cljs$core$IFn$_invoke$arity$2(G__11430,G__11431) : f__$1.call(null,G__11430,G__11431));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__11432 = reagent.ratom._peek_at(a__$1);
var G__11433 = x;
var G__11434 = y;
return (f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(G__11432,G__11433,G__11434) : f__$1.call(null,G__11432,G__11433,G__11434));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f__$1,reagent.ratom._peek_at(a__$1),x,y,more));
});

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
var res = reagent.ratom.capture_derefed(self__.f,this$__$1);
var derefed = reagent.ratom.captured(this$__$1);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(derefed,self__.watching)){
reagent.ratom._update_watching(this$__$1,derefed);
} else {
}

if(cljs.core.truth_(self__.active_QMARK_)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.ratom._running,cljs.core.inc);
} else {
}

self__.active_QMARK_ = true;
}

self__.dirty_QMARK_ = false;

self__.state = res;

cljs.core._notify_watches(this$__$1,oldstate,self__.state);

return res;
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv(((function (this$__$1){
return (function (_,key,f__$1){
var G__11435_11504 = key;
var G__11436_11505 = this$__$1;
var G__11437_11506 = oldval;
var G__11438_11507 = newval;
(f__$1.cljs$core$IFn$_invoke$arity$4 ? f__$1.cljs$core$IFn$_invoke$arity$4(G__11435_11504,G__11436_11505,G__11437_11506,G__11438_11507) : f__$1.call(null,G__11435_11504,G__11436_11505,G__11437_11506,G__11438_11507));

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,wf){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,k,wf);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
self__.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,k);

if((cljs.core.empty_QMARK_(self__.watches)) && (cljs.core.not(self__.auto_run))){
return reagent.ratom.dispose_BANG_(this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var or__3765__auto__ = self__.auto_run;
if(cljs.core.truth_(or__3765__auto__)){
return or__3765__auto__;
} else {
return cljs.core.some_QMARK_(reagent.ratom._STAR_ratom_context_STAR_);
}
})())){
reagent.ratom.notify_deref_watcher_BANG_(this$__$1);

if(cljs.core.truth_(self__.dirty_QMARK_)){
return reagent.ratom.run(this$__$1);
} else {
return self__.state;
}
} else {
if(cljs.core.truth_(self__.dirty_QMARK_)){
var oldstate_11508 = self__.state;
self__.state = (function (){return (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));
})();

if((oldstate_11508 === self__.state)){
} else {
cljs.core._notify_watches(this$__$1,oldstate_11508,self__.state);
}
} else {
}

return self__.state;
}
});

reagent.ratom.Reaction.cljs$lang$type = true;

reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction";

reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__4352__auto__,writer__4353__auto__,opt__4354__auto__){
return cljs.core._write(writer__4353__auto__,"reagent.ratom/Reaction");
});

reagent.ratom.__GT_Reaction = (function __GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});

/**
* @param {...*} var_args
*/
reagent.ratom.make_reaction = (function() { 
var make_reaction__delegate = function (f,p__11509){
var map__11511 = p__11509;
var map__11511__$1 = ((cljs.core.seq_QMARK_(map__11511))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11511):map__11511);
var auto_run = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11511__$1,cljs.core.constant$keyword$20);
var on_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11511__$1,cljs.core.constant$keyword$19);
var on_dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11511__$1,cljs.core.constant$keyword$21);
var derefed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11511__$1,cljs.core.constant$keyword$22);
var runner = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(auto_run,true))?reagent.ratom.run:auto_run);
var active = !((derefed == null));
var dirty = !(active);
var reaction = (new reagent.ratom.Reaction(f,null,dirty,active,null,null,runner,on_set,on_dispose));
if((derefed == null)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.ratom._running,cljs.core.inc);
} else {
}

reaction.reagent$ratom$IComputedImpl$_update_watching$arity$2(null,derefed);
}

return reaction;
};
var make_reaction = function (f,var_args){
var p__11509 = null;
if (arguments.length > 1) {
var G__11512__i = 0, G__11512__a = new Array(arguments.length -  1);
while (G__11512__i < G__11512__a.length) {G__11512__a[G__11512__i] = arguments[G__11512__i + 1]; ++G__11512__i;}
  p__11509 = new cljs.core.IndexedSeq(G__11512__a,0);
} 
return make_reaction__delegate.call(this,f,p__11509);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__11513){
var f = cljs.core.first(arglist__11513);
var p__11509 = cljs.core.rest(arglist__11513);
return make_reaction__delegate(f,p__11509);
});
make_reaction.cljs$core$IFn$_invoke$arity$variadic = make_reaction__delegate;
return make_reaction;
})()
;

/**
* @constructor
*/
reagent.ratom.Wrapper = (function (state,callback,changed,watches){
this.state = state;
this.callback = callback;
this.changed = changed;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 114690;
this.cljs$lang$protocol_mask$partition0$ = 2149613568;
})
reagent.ratom.Wrapper.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__3753__auto__ = self__.changed;
if(cljs.core.truth_(and__3753__auto__)){
return cljs.core.some_QMARK_(reagent.ratom._STAR_ratom_context_STAR_);
} else {
return and__3753__auto__;
}
})())){
if(typeof console !== 'undefined'){
console.warn([cljs.core.str("Warning: "),cljs.core.str("derefing stale wrap: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([this$__$1], 0)))].join(''));
} else {
}
} else {
}


return self__.state;
});

reagent.ratom.Wrapper.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
var oldval = self__.state;
self__.changed = true;

self__.state = newval;

if((self__.watches == null)){
} else {
cljs.core._notify_watches(this$__$1,oldval,newval);
}

var G__11514_11525 = newval;
(self__.callback.cljs$core$IFn$_invoke$arity$1 ? self__.callback.cljs$core$IFn$_invoke$arity$1(G__11514_11525) : self__.callback.call(null,G__11514_11525));

return newval;
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__11515 = self__.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__11515) : f.call(null,G__11515));
})());
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__11516 = self__.state;
var G__11517 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__11516,G__11517) : f.call(null,G__11516,G__11517));
})());
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__11518 = self__.state;
var G__11519 = x;
var G__11520 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__11518,G__11519,G__11520) : f.call(null,G__11518,G__11519,G__11520));
})());
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,x,y,more));
});

reagent.ratom.Wrapper.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return ((other instanceof reagent.ratom.Wrapper)) && (cljs.core.not(self__.changed)) && (cljs.core.not(other.changed)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.state,other.state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.callback,other.callback));
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv(((function (this$__$1){
return (function (_,key,f){
var G__11521_11526 = key;
var G__11522_11527 = this$__$1;
var G__11523_11528 = oldval;
var G__11524_11529 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__11521_11526,G__11522_11527,G__11523_11528,G__11524_11529) : f.call(null,G__11521_11526,G__11522_11527,G__11523_11528,G__11524_11529));

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key,f);
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key);
});

reagent.ratom.Wrapper.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
cljs.core._write(writer,"#<wrap: ");

cljs.core.pr_writer(self__.state,writer,opts);

return cljs.core._write(writer,">");
});

reagent.ratom.Wrapper.cljs$lang$type = true;

reagent.ratom.Wrapper.cljs$lang$ctorStr = "reagent.ratom/Wrapper";

reagent.ratom.Wrapper.cljs$lang$ctorPrWriter = (function (this__4352__auto__,writer__4353__auto__,opt__4354__auto__){
return cljs.core._write(writer__4353__auto__,"reagent.ratom/Wrapper");
});

reagent.ratom.__GT_Wrapper = (function __GT_Wrapper(state,callback,changed,watches){
return (new reagent.ratom.Wrapper(state,callback,changed,watches));
});

reagent.ratom.make_wrapper = (function make_wrapper(value,callback_fn,args){
return (new reagent.ratom.Wrapper(value,(new reagent.impl.util.partial_ifn(callback_fn,args,null)),false,null));
});
