// Compiled by ClojureScript 0.0-2814 {:elide-asserts true, :static-fns true}
goog.provide('tailrecursion.javelin');
goog.require('cljs.core');
goog.require('tailrecursion.priority_map');




tailrecursion.javelin._STAR_tx_STAR_ = null;
tailrecursion.javelin.last_rank = (function (){var G__17260 = (0);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17260) : cljs.core.atom.call(null,G__17260));
})();
/**
* Like tree-seq but traversal is breadth-first instead of depth-first.
*/
tailrecursion.javelin.bf_seq = (function bf_seq(branch_QMARK_,children,root){
var walk = (function walk(queue){
var temp__4126__auto__ = cljs.core.peek(queue);
if(cljs.core.truth_(temp__4126__auto__)){
var node = temp__4126__auto__;
return (new cljs.core.LazySeq(null,((function (node,temp__4126__auto__){
return (function (){
return cljs.core.cons(node,walk(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(queue),(cljs.core.truth_((function (){var G__17279 = node;
return (branch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? branch_QMARK_.cljs$core$IFn$_invoke$arity$1(G__17279) : branch_QMARK_.call(null,G__17279));
})())?(function (){var G__17280 = node;
return (children.cljs$core$IFn$_invoke$arity$1 ? children.cljs$core$IFn$_invoke$arity$1(G__17280) : children.call(null,G__17280));
})():null))));
});})(node,temp__4126__auto__))
,null,null));
} else {
return null;
}
});
return walk(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,root));
});
tailrecursion.javelin.propagate_STAR_ = (function propagate_STAR_(pri_map){
while(true){
var temp__4126__auto__ = cljs.core.first(cljs.core.peek(pri_map));
if(cljs.core.truth_(temp__4126__auto__)){
var next = temp__4126__auto__;
var popq = cljs.core.pop(pri_map);
var old = next.prev;
var new$ = (function (){var temp__4124__auto__ = next.thunk;
if(cljs.core.truth_(temp__4124__auto__)){
var f = temp__4124__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return next.state;
}
})();
var diff_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new$,old);
if(diff_QMARK_){
next.prev = new$;

cljs.core._notify_watches(next,old,new$);
} else {
}

var G__17283 = ((!(diff_QMARK_))?popq:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4126__auto__){
return (function (p1__17281_SHARP_,p2__17282_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17281_SHARP_,p2__17282_SHARP_,p2__17282_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4126__auto__))
,popq,next.sinks));
pri_map = G__17283;
continue;
} else {
return null;
}
break;
}
});
tailrecursion.javelin.deref_STAR_ = (function deref_STAR_(x){
if(cljs.core.truth_((function (){var G__17286 = x;
return (tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(G__17286) : tailrecursion.javelin.cell_QMARK_.call(null,G__17286));
})())){
var G__17287 = x;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17287) : cljs.core.deref.call(null,G__17287));
} else {
return x;
}
});
tailrecursion.javelin.next_rank = (function next_rank(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.last_rank,cljs.core.inc);
});
tailrecursion.javelin.cell__GT_pm = (function cell__GT_pm(c){
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([c,c.rank], 0));
});
tailrecursion.javelin.add_sync_BANG_ = (function add_sync_BANG_(c){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tailrecursion.javelin._STAR_tx_STAR_,cljs.core.assoc,c,c.rank);
});
tailrecursion.javelin.safe_nth = (function safe_nth(c,i){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(c,i);
}catch (e17289){if((e17289 instanceof Error)){
var _ = e17289;
return null;
} else {
throw e17289;

}
}});
tailrecursion.javelin.propagate_BANG_ = (function propagate_BANG_(c){
if(cljs.core.truth_(tailrecursion.javelin._STAR_tx_STAR_)){
var G__17292 = c;
tailrecursion.javelin.add_sync_BANG_(G__17292);

return G__17292;
} else {
var G__17293 = c;
tailrecursion.javelin.propagate_STAR_(tailrecursion.javelin.cell__GT_pm(G__17293));

return G__17293;
}
});
/**
* @param {...*} var_args
*/
tailrecursion.javelin.destroy_cell_BANG_ = (function() { 
var destroy_cell_BANG___delegate = function (this$,p__17294){
var vec__17302 = p__17294;
var keep_watches_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17302,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__17303 = cljs.core.seq(srcs);
var chunk__17304 = null;
var count__17305 = (0);
var i__17306 = (0);
while(true){
if((i__17306 < count__17305)){
var src = chunk__17304.cljs$core$IIndexed$_nth$arity$2(null,i__17306);
if(cljs.core.truth_((function (){var G__17307 = src;
return (tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(G__17307) : tailrecursion.javelin.cell_QMARK_.call(null,G__17307));
})())){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__17309 = seq__17303;
var G__17310 = chunk__17304;
var G__17311 = count__17305;
var G__17312 = (i__17306 + (1));
seq__17303 = G__17309;
chunk__17304 = G__17310;
count__17305 = G__17311;
i__17306 = G__17312;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__17303);
if(temp__4126__auto__){
var seq__17303__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17303__$1)){
var c__4551__auto__ = cljs.core.chunk_first(seq__17303__$1);
var G__17313 = cljs.core.chunk_rest(seq__17303__$1);
var G__17314 = c__4551__auto__;
var G__17315 = cljs.core.count(c__4551__auto__);
var G__17316 = (0);
seq__17303 = G__17313;
chunk__17304 = G__17314;
count__17305 = G__17315;
i__17306 = G__17316;
continue;
} else {
var src = cljs.core.first(seq__17303__$1);
if(cljs.core.truth_((function (){var G__17308 = src;
return (tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(G__17308) : tailrecursion.javelin.cell_QMARK_.call(null,G__17308));
})())){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__17317 = cljs.core.next(seq__17303__$1);
var G__17318 = null;
var G__17319 = (0);
var G__17320 = (0);
seq__17303 = G__17317;
chunk__17304 = G__17318;
count__17305 = G__17319;
i__17306 = G__17320;
continue;
}
} else {
return null;
}
}
break;
}
};
var destroy_cell_BANG_ = function (this$,var_args){
var p__17294 = null;
if (arguments.length > 1) {
var G__17321__i = 0, G__17321__a = new Array(arguments.length -  1);
while (G__17321__i < G__17321__a.length) {G__17321__a[G__17321__i] = arguments[G__17321__i + 1]; ++G__17321__i;}
  p__17294 = new cljs.core.IndexedSeq(G__17321__a,0);
} 
return destroy_cell_BANG___delegate.call(this,this$,p__17294);};
destroy_cell_BANG_.cljs$lang$maxFixedArity = 1;
destroy_cell_BANG_.cljs$lang$applyTo = (function (arglist__17322){
var this$ = cljs.core.first(arglist__17322);
var p__17294 = cljs.core.rest(arglist__17322);
return destroy_cell_BANG___delegate(this$,p__17294);
});
destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = destroy_cell_BANG___delegate;
return destroy_cell_BANG_;
})()
;
/**
* @param {...*} var_args
*/
tailrecursion.javelin.set_formula_BANG_ = (function() { 
var set_formula_BANG___delegate = function (this$,p__17325){
var vec__17341 = p__17325;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17341,(0),null);
var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17341,(1),null);
tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.array_seq([true], 0));

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f);

var seq__17342_17356 = cljs.core.seq(this$.sources);
var chunk__17343_17357 = null;
var count__17344_17358 = (0);
var i__17345_17359 = (0);
while(true){
if((i__17345_17359 < count__17344_17358)){
var source_17360 = chunk__17343_17357.cljs$core$IIndexed$_nth$arity$2(null,i__17345_17359);
if(cljs.core.truth_((function (){var G__17346 = source_17360;
return (tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(G__17346) : tailrecursion.javelin.cell_QMARK_.call(null,G__17346));
})())){
source_17360.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_17360.sinks,this$);

if((source_17360.rank > this$.rank)){
var seq__17347_17361 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__17342_17356,chunk__17343_17357,count__17344_17358,i__17345_17359,source_17360,vec__17341,f,sources){
return (function (p1__17323_SHARP_){
return p1__17323_SHARP_.sinks;
});})(seq__17342_17356,chunk__17343_17357,count__17344_17358,i__17345_17359,source_17360,vec__17341,f,sources))
,source_17360));
var chunk__17348_17362 = null;
var count__17349_17363 = (0);
var i__17350_17364 = (0);
while(true){
if((i__17350_17364 < count__17349_17363)){
var dep_17365 = chunk__17348_17362.cljs$core$IIndexed$_nth$arity$2(null,i__17350_17364);
dep_17365.rank = tailrecursion.javelin.next_rank();

var G__17366 = seq__17347_17361;
var G__17367 = chunk__17348_17362;
var G__17368 = count__17349_17363;
var G__17369 = (i__17350_17364 + (1));
seq__17347_17361 = G__17366;
chunk__17348_17362 = G__17367;
count__17349_17363 = G__17368;
i__17350_17364 = G__17369;
continue;
} else {
var temp__4126__auto___17370 = cljs.core.seq(seq__17347_17361);
if(temp__4126__auto___17370){
var seq__17347_17371__$1 = temp__4126__auto___17370;
if(cljs.core.chunked_seq_QMARK_(seq__17347_17371__$1)){
var c__4551__auto___17372 = cljs.core.chunk_first(seq__17347_17371__$1);
var G__17373 = cljs.core.chunk_rest(seq__17347_17371__$1);
var G__17374 = c__4551__auto___17372;
var G__17375 = cljs.core.count(c__4551__auto___17372);
var G__17376 = (0);
seq__17347_17361 = G__17373;
chunk__17348_17362 = G__17374;
count__17349_17363 = G__17375;
i__17350_17364 = G__17376;
continue;
} else {
var dep_17377 = cljs.core.first(seq__17347_17371__$1);
dep_17377.rank = tailrecursion.javelin.next_rank();

var G__17378 = cljs.core.next(seq__17347_17371__$1);
var G__17379 = null;
var G__17380 = (0);
var G__17381 = (0);
seq__17347_17361 = G__17378;
chunk__17348_17362 = G__17379;
count__17349_17363 = G__17380;
i__17350_17364 = G__17381;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

var G__17382 = seq__17342_17356;
var G__17383 = chunk__17343_17357;
var G__17384 = count__17344_17358;
var G__17385 = (i__17345_17359 + (1));
seq__17342_17356 = G__17382;
chunk__17343_17357 = G__17383;
count__17344_17358 = G__17384;
i__17345_17359 = G__17385;
continue;
} else {
var temp__4126__auto___17386 = cljs.core.seq(seq__17342_17356);
if(temp__4126__auto___17386){
var seq__17342_17387__$1 = temp__4126__auto___17386;
if(cljs.core.chunked_seq_QMARK_(seq__17342_17387__$1)){
var c__4551__auto___17388 = cljs.core.chunk_first(seq__17342_17387__$1);
var G__17389 = cljs.core.chunk_rest(seq__17342_17387__$1);
var G__17390 = c__4551__auto___17388;
var G__17391 = cljs.core.count(c__4551__auto___17388);
var G__17392 = (0);
seq__17342_17356 = G__17389;
chunk__17343_17357 = G__17390;
count__17344_17358 = G__17391;
i__17345_17359 = G__17392;
continue;
} else {
var source_17393 = cljs.core.first(seq__17342_17387__$1);
if(cljs.core.truth_((function (){var G__17351 = source_17393;
return (tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(G__17351) : tailrecursion.javelin.cell_QMARK_.call(null,G__17351));
})())){
source_17393.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_17393.sinks,this$);

if((source_17393.rank > this$.rank)){
var seq__17352_17394 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__17342_17356,chunk__17343_17357,count__17344_17358,i__17345_17359,source_17393,seq__17342_17387__$1,temp__4126__auto___17386,vec__17341,f,sources){
return (function (p1__17323_SHARP_){
return p1__17323_SHARP_.sinks;
});})(seq__17342_17356,chunk__17343_17357,count__17344_17358,i__17345_17359,source_17393,seq__17342_17387__$1,temp__4126__auto___17386,vec__17341,f,sources))
,source_17393));
var chunk__17353_17395 = null;
var count__17354_17396 = (0);
var i__17355_17397 = (0);
while(true){
if((i__17355_17397 < count__17354_17396)){
var dep_17398 = chunk__17353_17395.cljs$core$IIndexed$_nth$arity$2(null,i__17355_17397);
dep_17398.rank = tailrecursion.javelin.next_rank();

var G__17399 = seq__17352_17394;
var G__17400 = chunk__17353_17395;
var G__17401 = count__17354_17396;
var G__17402 = (i__17355_17397 + (1));
seq__17352_17394 = G__17399;
chunk__17353_17395 = G__17400;
count__17354_17396 = G__17401;
i__17355_17397 = G__17402;
continue;
} else {
var temp__4126__auto___17403__$1 = cljs.core.seq(seq__17352_17394);
if(temp__4126__auto___17403__$1){
var seq__17352_17404__$1 = temp__4126__auto___17403__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17352_17404__$1)){
var c__4551__auto___17405 = cljs.core.chunk_first(seq__17352_17404__$1);
var G__17406 = cljs.core.chunk_rest(seq__17352_17404__$1);
var G__17407 = c__4551__auto___17405;
var G__17408 = cljs.core.count(c__4551__auto___17405);
var G__17409 = (0);
seq__17352_17394 = G__17406;
chunk__17353_17395 = G__17407;
count__17354_17396 = G__17408;
i__17355_17397 = G__17409;
continue;
} else {
var dep_17410 = cljs.core.first(seq__17352_17404__$1);
dep_17410.rank = tailrecursion.javelin.next_rank();

var G__17411 = cljs.core.next(seq__17352_17404__$1);
var G__17412 = null;
var G__17413 = (0);
var G__17414 = (0);
seq__17352_17394 = G__17411;
chunk__17353_17395 = G__17412;
count__17354_17396 = G__17413;
i__17355_17397 = G__17414;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

var G__17415 = cljs.core.next(seq__17342_17387__$1);
var G__17416 = null;
var G__17417 = (0);
var G__17418 = (0);
seq__17342_17356 = G__17415;
chunk__17343_17357 = G__17416;
count__17344_17358 = G__17417;
i__17345_17359 = G__17418;
continue;
}
} else {
}
}
break;
}

var compute_17419 = ((function (vec__17341,f,sources){
return (function (p1__17324_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_(cljs.core.peek(p1__17324_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_,cljs.core.pop(p1__17324_SHARP_)));
});})(vec__17341,f,sources))
;
this$.thunk = ((function (compute_17419,vec__17341,f,sources){
return (function (){
return this$.state = compute_17419(this$.sources);
});})(compute_17419,vec__17341,f,sources))
;
} else {
}

return tailrecursion.javelin.propagate_BANG_(this$);
};
var set_formula_BANG_ = function (this$,var_args){
var p__17325 = null;
if (arguments.length > 1) {
var G__17420__i = 0, G__17420__a = new Array(arguments.length -  1);
while (G__17420__i < G__17420__a.length) {G__17420__a[G__17420__i] = arguments[G__17420__i + 1]; ++G__17420__i;}
  p__17325 = new cljs.core.IndexedSeq(G__17420__a,0);
} 
return set_formula_BANG___delegate.call(this,this$,p__17325);};
set_formula_BANG_.cljs$lang$maxFixedArity = 1;
set_formula_BANG_.cljs$lang$applyTo = (function (arglist__17421){
var this$ = cljs.core.first(arglist__17421);
var p__17325 = cljs.core.rest(arglist__17421);
return set_formula_BANG___delegate(this$,p__17325);
});
set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_formula_BANG___delegate;
return set_formula_BANG_;
})()
;

/**
* @constructor
*/
tailrecursion.javelin.Cell = (function (meta,state,rank,prev,sources,sinks,thunk,watches,update){
this.meta = meta;
this.state = state;
this.rank = rank;
this.prev = prev;
this.sources = sources;
this.sinks = sinks;
this.thunk = thunk;
this.watches = watches;
this.update = update;
this.cljs$lang$protocol_mask$partition1$ = 98306;
this.cljs$lang$protocol_mask$partition0$ = 2147647488;
})
tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__17422 = cljs.core.seq(self__.watches);
var chunk__17423 = null;
var count__17424 = (0);
var i__17425 = (0);
while(true){
if((i__17425 < count__17424)){
var vec__17426 = chunk__17423.cljs$core$IIndexed$_nth$arity$2(null,i__17425);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17426,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17426,(1),null);
var G__17427_17452 = key;
var G__17428_17453 = this$__$1;
var G__17429_17454 = o;
var G__17430_17455 = n;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__17427_17452,G__17428_17453,G__17429_17454,G__17430_17455) : f.call(null,G__17427_17452,G__17428_17453,G__17429_17454,G__17430_17455));

var G__17456 = seq__17422;
var G__17457 = chunk__17423;
var G__17458 = count__17424;
var G__17459 = (i__17425 + (1));
seq__17422 = G__17456;
chunk__17423 = G__17457;
count__17424 = G__17458;
i__17425 = G__17459;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__17422);
if(temp__4126__auto__){
var seq__17422__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17422__$1)){
var c__4551__auto__ = cljs.core.chunk_first(seq__17422__$1);
var G__17460 = cljs.core.chunk_rest(seq__17422__$1);
var G__17461 = c__4551__auto__;
var G__17462 = cljs.core.count(c__4551__auto__);
var G__17463 = (0);
seq__17422 = G__17460;
chunk__17423 = G__17461;
count__17424 = G__17462;
i__17425 = G__17463;
continue;
} else {
var vec__17431 = cljs.core.first(seq__17422__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17431,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17431,(1),null);
var G__17432_17464 = key;
var G__17433_17465 = this$__$1;
var G__17434_17466 = o;
var G__17435_17467 = n;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__17432_17464,G__17433_17465,G__17434_17466,G__17435_17467) : f.call(null,G__17432_17464,G__17433_17465,G__17434_17466,G__17435_17467));

var G__17468 = cljs.core.next(seq__17422__$1);
var G__17469 = null;
var G__17470 = (0);
var G__17471 = (0);
seq__17422 = G__17468;
chunk__17423 = G__17469;
count__17424 = G__17470;
i__17425 = G__17471;
continue;
}
} else {
return null;
}
}
break;
}
});

tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,f){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,k,f);
});

tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,k);
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
var G__17436 = this$__$1;
var G__17437 = (function (){var G__17438 = this$__$1.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17438) : f.call(null,G__17438));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17436,G__17437) : cljs.core.reset_BANG_.call(null,G__17436,G__17437));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
var G__17439 = this$__$1;
var G__17440 = (function (){var G__17441 = this$__$1.state;
var G__17442 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17441,G__17442) : f.call(null,G__17441,G__17442));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17439,G__17440) : cljs.core.reset_BANG_.call(null,G__17439,G__17440));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
var G__17443 = this$__$1;
var G__17444 = (function (){var G__17445 = this$__$1.state;
var G__17446 = a;
var G__17447 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__17445,G__17446,G__17447) : f.call(null,G__17445,G__17446,G__17447));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17443,G__17444) : cljs.core.reset_BANG_.call(null,G__17443,G__17444));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
var G__17448 = this$__$1;
var G__17449 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.state,a,b,xs);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17448,G__17449) : cljs.core.reset_BANG_.call(null,G__17448,G__17449));
});

tailrecursion.javelin.Cell.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var G__17450 = this$__$1;
return (tailrecursion.javelin.lens_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.lens_QMARK_.cljs$core$IFn$_invoke$arity$1(G__17450) : tailrecursion.javelin.lens_QMARK_.call(null,G__17450));
})())){
this$__$1.update.call(null,x);
} else {
if(cljs.core.truth_((function (){var G__17451 = this$__$1;
return (tailrecursion.javelin.input_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.input_QMARK_.cljs$core$IFn$_invoke$arity$1(G__17451) : tailrecursion.javelin.input_QMARK_.call(null,G__17451));
})())){
this$__$1.state = x;

tailrecursion.javelin.propagate_BANG_(this$__$1);
} else {
throw (new Error("can't swap! or reset! formula cell"));

}
}

return this$__$1.state;
});

tailrecursion.javelin.Cell.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.state;
});

tailrecursion.javelin.Cell.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
});

tailrecursion.javelin.Cell.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,w,_){
var self__ = this;
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(w,cljs.core.array_seq(["#<Cell: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.state], 0)),">"], 0));
});

tailrecursion.javelin.Cell.cljs$lang$type = true;

tailrecursion.javelin.Cell.cljs$lang$ctorStr = "tailrecursion.javelin/Cell";

tailrecursion.javelin.Cell.cljs$lang$ctorPrWriter = (function (this__4351__auto__,writer__4352__auto__,opt__4353__auto__){
return cljs.core._write(writer__4352__auto__,"tailrecursion.javelin/Cell");
});

tailrecursion.javelin.__GT_Cell = (function __GT_Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update){
return (new tailrecursion.javelin.Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update));
});

tailrecursion.javelin.cell_QMARK_ = (function cell_QMARK_(c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(c),tailrecursion.javelin.Cell)){
return c;
} else {
return null;
}
});
tailrecursion.javelin.formula_QMARK_ = (function formula_QMARK_(c){
if(cljs.core.truth_((function (){var and__3752__auto__ = tailrecursion.javelin.cell_QMARK_(c);
if(cljs.core.truth_(and__3752__auto__)){
return c.thunk;
} else {
return and__3752__auto__;
}
})())){
return c;
} else {
return null;
}
});
tailrecursion.javelin.lens_QMARK_ = (function lens_QMARK_(c){
if(cljs.core.truth_((function (){var and__3752__auto__ = tailrecursion.javelin.cell_QMARK_(c);
if(cljs.core.truth_(and__3752__auto__)){
return c.update;
} else {
return and__3752__auto__;
}
})())){
return c;
} else {
return null;
}
});
tailrecursion.javelin.input_QMARK_ = (function input_QMARK_(c){
if(cljs.core.truth_((function (){var and__3752__auto__ = tailrecursion.javelin.cell_QMARK_(c);
if(cljs.core.truth_(and__3752__auto__)){
return cljs.core.not(tailrecursion.javelin.formula_QMARK_(c));
} else {
return and__3752__auto__;
}
})())){
return c;
} else {
return null;
}
});
tailrecursion.javelin.set_cell_BANG_ = (function set_cell_BANG_(c,x){
c.state = x;

return tailrecursion.javelin.set_formula_BANG_(c);
});
tailrecursion.javelin.formula = (function formula(f){
return (function() { 
var G__17474__delegate = function (sources){
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((function (){var G__17473 = cljs.core.constant$keyword$24;
return (tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1(G__17473) : tailrecursion.javelin.cell.call(null,G__17473));
})(),cljs.core.array_seq([f,sources], 0));
};
var G__17474 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__17475__i = 0, G__17475__a = new Array(arguments.length -  0);
while (G__17475__i < G__17475__a.length) {G__17475__a[G__17475__i] = arguments[G__17475__i + 0]; ++G__17475__i;}
  sources = new cljs.core.IndexedSeq(G__17475__a,0);
} 
return G__17474__delegate.call(this,sources);};
G__17474.cljs$lang$maxFixedArity = 0;
G__17474.cljs$lang$applyTo = (function (arglist__17476){
var sources = cljs.core.seq(arglist__17476);
return G__17474__delegate(sources);
});
G__17474.cljs$core$IFn$_invoke$arity$variadic = G__17474__delegate;
return G__17474;
})()
;
});
tailrecursion.javelin.lens = (function lens(c,f){
var c__$1 = tailrecursion.javelin.formula(cljs.core.identity).call(null,c);
c__$1.update = f;

return c__$1;
});
tailrecursion.javelin.cell = (function cell(x){
return tailrecursion.javelin.set_formula_BANG_((new tailrecursion.javelin.Cell(cljs.core.PersistentArrayMap.EMPTY,x,tailrecursion.javelin.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});
tailrecursion.javelin.lift = tailrecursion.javelin.formula;
tailrecursion.javelin.dosync_STAR_ = (function dosync_STAR_(thunk){
var bind = (function (p1__17477_SHARP_){
var _STAR_tx_STAR_17482 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = (function (){var G__17483 = tailrecursion.priority_map.priority_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17483) : cljs.core.atom.call(null,G__17483));
})();

try{return (p1__17477_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__17477_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__17477_SHARP_.call(null));
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_17482;
}});
var prop = ((function (bind){
return (function (){
var tx = (function (){var G__17484 = tailrecursion.javelin._STAR_tx_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17484) : cljs.core.deref.call(null,G__17484));
})();
var _STAR_tx_STAR_17485 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = null;

try{return tailrecursion.javelin.propagate_STAR_(tx);
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_17485;
}});})(bind))
;
if(cljs.core.truth_(tailrecursion.javelin._STAR_tx_STAR_)){
return (thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null));
} else {
return bind(((function (bind,prop){
return (function (){
(thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null));

return prop();
});})(bind,prop))
);
}
});
/**
* @param {...*} var_args
*/
tailrecursion.javelin.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (cells){
var olds = (function (){var G__17495 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cells),cljs.core.constant$keyword$24);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17495) : cljs.core.atom.call(null,G__17495));
})();
var tag_neq = ((function (olds){
return (function (p1__17486_SHARP_,p2__17487_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__17486_SHARP_,p2__17487_SHARP_),p2__17487_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__17489_SHARP_,p2__17488_SHARP_){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__17489_SHARP_,p2__17488_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__17499__delegate = function (rest__17490_SHARP_){
var news = diff((function (){var G__17496 = olds;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17496) : cljs.core.deref.call(null,G__17496));
})(),rest__17490_SHARP_);
var G__17497_17500 = olds;
var G__17498_17501 = rest__17490_SHARP_;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17497_17500,G__17498_17501) : cljs.core.reset_BANG_.call(null,G__17497_17500,G__17498_17501));

return news;
};
var G__17499 = function (var_args){
var rest__17490_SHARP_ = null;
if (arguments.length > 0) {
var G__17502__i = 0, G__17502__a = new Array(arguments.length -  0);
while (G__17502__i < G__17502__a.length) {G__17502__a[G__17502__i] = arguments[G__17502__i + 0]; ++G__17502__i;}
  rest__17490_SHARP_ = new cljs.core.IndexedSeq(G__17502__a,0);
} 
return G__17499__delegate.call(this,rest__17490_SHARP_);};
G__17499.cljs$lang$maxFixedArity = 0;
G__17499.cljs$lang$applyTo = (function (arglist__17503){
var rest__17490_SHARP_ = cljs.core.seq(arglist__17503);
return G__17499__delegate(rest__17490_SHARP_);
});
G__17499.cljs$core$IFn$_invoke$arity$variadic = G__17499__delegate;
return G__17499;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.formula(proc),cells);
};
var alts_BANG_ = function (var_args){
var cells = null;
if (arguments.length > 0) {
var G__17504__i = 0, G__17504__a = new Array(arguments.length -  0);
while (G__17504__i < G__17504__a.length) {G__17504__a[G__17504__i] = arguments[G__17504__i + 0]; ++G__17504__i;}
  cells = new cljs.core.IndexedSeq(G__17504__a,0);
} 
return alts_BANG___delegate.call(this,cells);};
alts_BANG_.cljs$lang$maxFixedArity = 0;
alts_BANG_.cljs$lang$applyTo = (function (arglist__17505){
var cells = cljs.core.seq(arglist__17505);
return alts_BANG___delegate(cells);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
tailrecursion.javelin.cell_map = (function cell_map(f,c){
var cseq = tailrecursion.javelin.formula(cljs.core.seq).call(null,c);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__17506_SHARP_){
return tailrecursion.javelin.formula(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,tailrecursion.javelin.safe_nth)).call(null,cseq,p1__17506_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count((function (){var G__17508 = cseq;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17508) : cljs.core.deref.call(null,G__17508));
})())));
});
tailrecursion.javelin.cell_doseq_STAR_ = (function cell_doseq_STAR_(items_seq,f){
var pool_size = tailrecursion.javelin.cell((0));
var cur_count = tailrecursion.javelin.formula(cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__17509_SHARP_){
return tailrecursion.javelin.formula(tailrecursion.javelin.safe_nth).call(null,items_seq,p1__17509_SHARP_);
});})(pool_size,cur_count))
;
return tailrecursion.javelin.formula(((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__17519_17528 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));
var chunk__17520_17529 = null;
var count__17521_17530 = (0);
var i__17522_17531 = (0);
while(true){
if((i__17522_17531 < count__17521_17530)){
var i_17532 = chunk__17520_17529.cljs$core$IIndexed$_nth$arity$2(null,i__17522_17531);
var G__17523_17533 = (function (){var G__17524 = i_17532;
return (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(G__17524) : ith_item__$1.call(null,G__17524));
})();
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__17523_17533) : f__$1.call(null,G__17523_17533));

var G__17534 = seq__17519_17528;
var G__17535 = chunk__17520_17529;
var G__17536 = count__17521_17530;
var G__17537 = (i__17522_17531 + (1));
seq__17519_17528 = G__17534;
chunk__17520_17529 = G__17535;
count__17521_17530 = G__17536;
i__17522_17531 = G__17537;
continue;
} else {
var temp__4126__auto___17538 = cljs.core.seq(seq__17519_17528);
if(temp__4126__auto___17538){
var seq__17519_17539__$1 = temp__4126__auto___17538;
if(cljs.core.chunked_seq_QMARK_(seq__17519_17539__$1)){
var c__4551__auto___17540 = cljs.core.chunk_first(seq__17519_17539__$1);
var G__17541 = cljs.core.chunk_rest(seq__17519_17539__$1);
var G__17542 = c__4551__auto___17540;
var G__17543 = cljs.core.count(c__4551__auto___17540);
var G__17544 = (0);
seq__17519_17528 = G__17541;
chunk__17520_17529 = G__17542;
count__17521_17530 = G__17543;
i__17522_17531 = G__17544;
continue;
} else {
var i_17545 = cljs.core.first(seq__17519_17539__$1);
var G__17525_17546 = (function (){var G__17526 = i_17545;
return (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(G__17526) : ith_item__$1.call(null,G__17526));
})();
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__17525_17546) : f__$1.call(null,G__17525_17546));

var G__17547 = cljs.core.next(seq__17519_17539__$1);
var G__17548 = null;
var G__17549 = (0);
var G__17550 = (0);
seq__17519_17528 = G__17547;
chunk__17520_17529 = G__17548;
count__17521_17530 = G__17549;
i__17522_17531 = G__17550;
continue;
}
} else {
}
}
break;
}

var G__17527 = cur_count__$1;
return (reset_pool_size_BANG_.cljs$core$IFn$_invoke$arity$1 ? reset_pool_size_BANG_.cljs$core$IFn$_invoke$arity$1(G__17527) : reset_pool_size_BANG_.call(null,G__17527));
} else {
return null;
}
});})(pool_size,cur_count,ith_item))
).call(null,pool_size,cur_count,f,ith_item,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,pool_size));
});
