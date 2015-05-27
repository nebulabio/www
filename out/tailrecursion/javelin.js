// Compiled by ClojureScript 0.0-2814 {}
goog.provide('tailrecursion.javelin');
goog.require('cljs.core');
goog.require('tailrecursion.priority_map');




tailrecursion.javelin._STAR_tx_STAR_ = null;
tailrecursion.javelin.last_rank = cljs.core.atom.call(null,(0));
/**
* Like tree-seq but traversal is breadth-first instead of depth-first.
*/
tailrecursion.javelin.bf_seq = (function bf_seq(branch_QMARK_,children,root){
var walk = (function walk(queue){
var temp__4126__auto__ = cljs.core.peek.call(null,queue);
if(cljs.core.truth_(temp__4126__auto__)){
var node = temp__4126__auto__;
return (new cljs.core.LazySeq(null,((function (node,temp__4126__auto__){
return (function (){
return cljs.core.cons.call(null,node,walk.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,queue),(cljs.core.truth_(branch_QMARK_.call(null,node))?children.call(null,node):null))));
});})(node,temp__4126__auto__))
,null,null));
} else {
return null;
}
});
return walk.call(null,cljs.core.conj.call(null,cljs.core.PersistentQueue.EMPTY,root));
});
tailrecursion.javelin.propagate_STAR_ = (function propagate_STAR_(pri_map){
while(true){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.peek.call(null,pri_map));
if(cljs.core.truth_(temp__4126__auto__)){
var next = temp__4126__auto__;
var popq = cljs.core.pop.call(null,pri_map);
var old = next.prev;
var new$ = (function (){var temp__4124__auto__ = next.thunk;
if(cljs.core.truth_(temp__4124__auto__)){
var f = temp__4124__auto__;
return f.call(null);
} else {
return next.state;
}
})();
var diff_QMARK_ = cljs.core.not_EQ_.call(null,new$,old);
if(diff_QMARK_){
next.prev = new$;

cljs.core._notify_watches.call(null,next,old,new$);
} else {
}

var G__12404 = ((!(diff_QMARK_))?popq:cljs.core.reduce.call(null,((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4126__auto__){
return (function (p1__12402_SHARP_,p2__12403_SHARP_){
return cljs.core.assoc.call(null,p1__12402_SHARP_,p2__12403_SHARP_,p2__12403_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4126__auto__))
,popq,next.sinks));
pri_map = G__12404;
continue;
} else {
return null;
}
break;
}
});
tailrecursion.javelin.deref_STAR_ = (function deref_STAR_(x){
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,x))){
return cljs.core.deref.call(null,x);
} else {
return x;
}
});
tailrecursion.javelin.next_rank = (function next_rank(){
return cljs.core.swap_BANG_.call(null,tailrecursion.javelin.last_rank,cljs.core.inc);
});
tailrecursion.javelin.cell__GT_pm = (function cell__GT_pm(c){
return tailrecursion.priority_map.priority_map.call(null,c,c.rank);
});
tailrecursion.javelin.add_sync_BANG_ = (function add_sync_BANG_(c){
return cljs.core.swap_BANG_.call(null,tailrecursion.javelin._STAR_tx_STAR_,cljs.core.assoc,c,c.rank);
});
tailrecursion.javelin.safe_nth = (function safe_nth(c,i){
try{return cljs.core.nth.call(null,c,i);
}catch (e12406){if((e12406 instanceof Error)){
var _ = e12406;
return null;
} else {
throw e12406;

}
}});
tailrecursion.javelin.propagate_BANG_ = (function propagate_BANG_(c){
if(cljs.core.truth_(tailrecursion.javelin._STAR_tx_STAR_)){
var G__12409 = c;
tailrecursion.javelin.add_sync_BANG_.call(null,G__12409);

return G__12409;
} else {
var G__12410 = c;
tailrecursion.javelin.propagate_STAR_.call(null,tailrecursion.javelin.cell__GT_pm.call(null,G__12410));

return G__12410;
}
});
/**
* @param {...*} var_args
*/
tailrecursion.javelin.destroy_cell_BANG_ = (function() { 
var destroy_cell_BANG___delegate = function (this$,p__12411){
var vec__12417 = p__12411;
var keep_watches_QMARK_ = cljs.core.nth.call(null,vec__12417,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__12418 = cljs.core.seq.call(null,srcs);
var chunk__12419 = null;
var count__12420 = (0);
var i__12421 = (0);
while(true){
if((i__12421 < count__12420)){
var src = cljs.core._nth.call(null,chunk__12419,i__12421);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,src))){
src.sinks = cljs.core.disj.call(null,src.sinks,this$);
} else {
}

var G__12422 = seq__12418;
var G__12423 = chunk__12419;
var G__12424 = count__12420;
var G__12425 = (i__12421 + (1));
seq__12418 = G__12422;
chunk__12419 = G__12423;
count__12420 = G__12424;
i__12421 = G__12425;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12418);
if(temp__4126__auto__){
var seq__12418__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12418__$1)){
var c__4551__auto__ = cljs.core.chunk_first.call(null,seq__12418__$1);
var G__12426 = cljs.core.chunk_rest.call(null,seq__12418__$1);
var G__12427 = c__4551__auto__;
var G__12428 = cljs.core.count.call(null,c__4551__auto__);
var G__12429 = (0);
seq__12418 = G__12426;
chunk__12419 = G__12427;
count__12420 = G__12428;
i__12421 = G__12429;
continue;
} else {
var src = cljs.core.first.call(null,seq__12418__$1);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,src))){
src.sinks = cljs.core.disj.call(null,src.sinks,this$);
} else {
}

var G__12430 = cljs.core.next.call(null,seq__12418__$1);
var G__12431 = null;
var G__12432 = (0);
var G__12433 = (0);
seq__12418 = G__12430;
chunk__12419 = G__12431;
count__12420 = G__12432;
i__12421 = G__12433;
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
var p__12411 = null;
if (arguments.length > 1) {
var G__12434__i = 0, G__12434__a = new Array(arguments.length -  1);
while (G__12434__i < G__12434__a.length) {G__12434__a[G__12434__i] = arguments[G__12434__i + 1]; ++G__12434__i;}
  p__12411 = new cljs.core.IndexedSeq(G__12434__a,0);
} 
return destroy_cell_BANG___delegate.call(this,this$,p__12411);};
destroy_cell_BANG_.cljs$lang$maxFixedArity = 1;
destroy_cell_BANG_.cljs$lang$applyTo = (function (arglist__12435){
var this$ = cljs.core.first(arglist__12435);
var p__12411 = cljs.core.rest(arglist__12435);
return destroy_cell_BANG___delegate(this$,p__12411);
});
destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = destroy_cell_BANG___delegate;
return destroy_cell_BANG_;
})()
;
/**
* @param {...*} var_args
*/
tailrecursion.javelin.set_formula_BANG_ = (function() { 
var set_formula_BANG___delegate = function (this$,p__12438){
var vec__12452 = p__12438;
var f = cljs.core.nth.call(null,vec__12452,(0),null);
var sources = cljs.core.nth.call(null,vec__12452,(1),null);
tailrecursion.javelin.destroy_cell_BANG_.call(null,this$,true);

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.call(null,cljs.core.vec.call(null,sources),f);

var seq__12453_12465 = cljs.core.seq.call(null,this$.sources);
var chunk__12454_12466 = null;
var count__12455_12467 = (0);
var i__12456_12468 = (0);
while(true){
if((i__12456_12468 < count__12455_12467)){
var source_12469 = cljs.core._nth.call(null,chunk__12454_12466,i__12456_12468);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,source_12469))){
source_12469.sinks = cljs.core.conj.call(null,source_12469.sinks,this$);

if((source_12469.rank > this$.rank)){
var seq__12457_12470 = cljs.core.seq.call(null,tailrecursion.javelin.bf_seq.call(null,cljs.core.identity,((function (seq__12453_12465,chunk__12454_12466,count__12455_12467,i__12456_12468,source_12469,vec__12452,f,sources){
return (function (p1__12436_SHARP_){
return p1__12436_SHARP_.sinks;
});})(seq__12453_12465,chunk__12454_12466,count__12455_12467,i__12456_12468,source_12469,vec__12452,f,sources))
,source_12469));
var chunk__12458_12471 = null;
var count__12459_12472 = (0);
var i__12460_12473 = (0);
while(true){
if((i__12460_12473 < count__12459_12472)){
var dep_12474 = cljs.core._nth.call(null,chunk__12458_12471,i__12460_12473);
dep_12474.rank = tailrecursion.javelin.next_rank.call(null);

var G__12475 = seq__12457_12470;
var G__12476 = chunk__12458_12471;
var G__12477 = count__12459_12472;
var G__12478 = (i__12460_12473 + (1));
seq__12457_12470 = G__12475;
chunk__12458_12471 = G__12476;
count__12459_12472 = G__12477;
i__12460_12473 = G__12478;
continue;
} else {
var temp__4126__auto___12479 = cljs.core.seq.call(null,seq__12457_12470);
if(temp__4126__auto___12479){
var seq__12457_12480__$1 = temp__4126__auto___12479;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12457_12480__$1)){
var c__4551__auto___12481 = cljs.core.chunk_first.call(null,seq__12457_12480__$1);
var G__12482 = cljs.core.chunk_rest.call(null,seq__12457_12480__$1);
var G__12483 = c__4551__auto___12481;
var G__12484 = cljs.core.count.call(null,c__4551__auto___12481);
var G__12485 = (0);
seq__12457_12470 = G__12482;
chunk__12458_12471 = G__12483;
count__12459_12472 = G__12484;
i__12460_12473 = G__12485;
continue;
} else {
var dep_12486 = cljs.core.first.call(null,seq__12457_12480__$1);
dep_12486.rank = tailrecursion.javelin.next_rank.call(null);

var G__12487 = cljs.core.next.call(null,seq__12457_12480__$1);
var G__12488 = null;
var G__12489 = (0);
var G__12490 = (0);
seq__12457_12470 = G__12487;
chunk__12458_12471 = G__12488;
count__12459_12472 = G__12489;
i__12460_12473 = G__12490;
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

var G__12491 = seq__12453_12465;
var G__12492 = chunk__12454_12466;
var G__12493 = count__12455_12467;
var G__12494 = (i__12456_12468 + (1));
seq__12453_12465 = G__12491;
chunk__12454_12466 = G__12492;
count__12455_12467 = G__12493;
i__12456_12468 = G__12494;
continue;
} else {
var temp__4126__auto___12495 = cljs.core.seq.call(null,seq__12453_12465);
if(temp__4126__auto___12495){
var seq__12453_12496__$1 = temp__4126__auto___12495;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12453_12496__$1)){
var c__4551__auto___12497 = cljs.core.chunk_first.call(null,seq__12453_12496__$1);
var G__12498 = cljs.core.chunk_rest.call(null,seq__12453_12496__$1);
var G__12499 = c__4551__auto___12497;
var G__12500 = cljs.core.count.call(null,c__4551__auto___12497);
var G__12501 = (0);
seq__12453_12465 = G__12498;
chunk__12454_12466 = G__12499;
count__12455_12467 = G__12500;
i__12456_12468 = G__12501;
continue;
} else {
var source_12502 = cljs.core.first.call(null,seq__12453_12496__$1);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,source_12502))){
source_12502.sinks = cljs.core.conj.call(null,source_12502.sinks,this$);

if((source_12502.rank > this$.rank)){
var seq__12461_12503 = cljs.core.seq.call(null,tailrecursion.javelin.bf_seq.call(null,cljs.core.identity,((function (seq__12453_12465,chunk__12454_12466,count__12455_12467,i__12456_12468,source_12502,seq__12453_12496__$1,temp__4126__auto___12495,vec__12452,f,sources){
return (function (p1__12436_SHARP_){
return p1__12436_SHARP_.sinks;
});})(seq__12453_12465,chunk__12454_12466,count__12455_12467,i__12456_12468,source_12502,seq__12453_12496__$1,temp__4126__auto___12495,vec__12452,f,sources))
,source_12502));
var chunk__12462_12504 = null;
var count__12463_12505 = (0);
var i__12464_12506 = (0);
while(true){
if((i__12464_12506 < count__12463_12505)){
var dep_12507 = cljs.core._nth.call(null,chunk__12462_12504,i__12464_12506);
dep_12507.rank = tailrecursion.javelin.next_rank.call(null);

var G__12508 = seq__12461_12503;
var G__12509 = chunk__12462_12504;
var G__12510 = count__12463_12505;
var G__12511 = (i__12464_12506 + (1));
seq__12461_12503 = G__12508;
chunk__12462_12504 = G__12509;
count__12463_12505 = G__12510;
i__12464_12506 = G__12511;
continue;
} else {
var temp__4126__auto___12512__$1 = cljs.core.seq.call(null,seq__12461_12503);
if(temp__4126__auto___12512__$1){
var seq__12461_12513__$1 = temp__4126__auto___12512__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12461_12513__$1)){
var c__4551__auto___12514 = cljs.core.chunk_first.call(null,seq__12461_12513__$1);
var G__12515 = cljs.core.chunk_rest.call(null,seq__12461_12513__$1);
var G__12516 = c__4551__auto___12514;
var G__12517 = cljs.core.count.call(null,c__4551__auto___12514);
var G__12518 = (0);
seq__12461_12503 = G__12515;
chunk__12462_12504 = G__12516;
count__12463_12505 = G__12517;
i__12464_12506 = G__12518;
continue;
} else {
var dep_12519 = cljs.core.first.call(null,seq__12461_12513__$1);
dep_12519.rank = tailrecursion.javelin.next_rank.call(null);

var G__12520 = cljs.core.next.call(null,seq__12461_12513__$1);
var G__12521 = null;
var G__12522 = (0);
var G__12523 = (0);
seq__12461_12503 = G__12520;
chunk__12462_12504 = G__12521;
count__12463_12505 = G__12522;
i__12464_12506 = G__12523;
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

var G__12524 = cljs.core.next.call(null,seq__12453_12496__$1);
var G__12525 = null;
var G__12526 = (0);
var G__12527 = (0);
seq__12453_12465 = G__12524;
chunk__12454_12466 = G__12525;
count__12455_12467 = G__12526;
i__12456_12468 = G__12527;
continue;
}
} else {
}
}
break;
}

var compute_12528 = ((function (vec__12452,f,sources){
return (function (p1__12437_SHARP_){
return cljs.core.apply.call(null,tailrecursion.javelin.deref_STAR_.call(null,cljs.core.peek.call(null,p1__12437_SHARP_)),cljs.core.map.call(null,tailrecursion.javelin.deref_STAR_,cljs.core.pop.call(null,p1__12437_SHARP_)));
});})(vec__12452,f,sources))
;
this$.thunk = ((function (compute_12528,vec__12452,f,sources){
return (function (){
return this$.state = compute_12528.call(null,this$.sources);
});})(compute_12528,vec__12452,f,sources))
;
} else {
}

return tailrecursion.javelin.propagate_BANG_.call(null,this$);
};
var set_formula_BANG_ = function (this$,var_args){
var p__12438 = null;
if (arguments.length > 1) {
var G__12529__i = 0, G__12529__a = new Array(arguments.length -  1);
while (G__12529__i < G__12529__a.length) {G__12529__a[G__12529__i] = arguments[G__12529__i + 1]; ++G__12529__i;}
  p__12438 = new cljs.core.IndexedSeq(G__12529__a,0);
} 
return set_formula_BANG___delegate.call(this,this$,p__12438);};
set_formula_BANG_.cljs$lang$maxFixedArity = 1;
set_formula_BANG_.cljs$lang$applyTo = (function (arglist__12530){
var this$ = cljs.core.first(arglist__12530);
var p__12438 = cljs.core.rest(arglist__12530);
return set_formula_BANG___delegate(this$,p__12438);
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
var seq__12531 = cljs.core.seq.call(null,self__.watches);
var chunk__12532 = null;
var count__12533 = (0);
var i__12534 = (0);
while(true){
if((i__12534 < count__12533)){
var vec__12535 = cljs.core._nth.call(null,chunk__12532,i__12534);
var key = cljs.core.nth.call(null,vec__12535,(0),null);
var f = cljs.core.nth.call(null,vec__12535,(1),null);
f.call(null,key,this$__$1,o,n);

var G__12537 = seq__12531;
var G__12538 = chunk__12532;
var G__12539 = count__12533;
var G__12540 = (i__12534 + (1));
seq__12531 = G__12537;
chunk__12532 = G__12538;
count__12533 = G__12539;
i__12534 = G__12540;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12531);
if(temp__4126__auto__){
var seq__12531__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12531__$1)){
var c__4551__auto__ = cljs.core.chunk_first.call(null,seq__12531__$1);
var G__12541 = cljs.core.chunk_rest.call(null,seq__12531__$1);
var G__12542 = c__4551__auto__;
var G__12543 = cljs.core.count.call(null,c__4551__auto__);
var G__12544 = (0);
seq__12531 = G__12541;
chunk__12532 = G__12542;
count__12533 = G__12543;
i__12534 = G__12544;
continue;
} else {
var vec__12536 = cljs.core.first.call(null,seq__12531__$1);
var key = cljs.core.nth.call(null,vec__12536,(0),null);
var f = cljs.core.nth.call(null,vec__12536,(1),null);
f.call(null,key,this$__$1,o,n);

var G__12545 = cljs.core.next.call(null,seq__12531__$1);
var G__12546 = null;
var G__12547 = (0);
var G__12548 = (0);
seq__12531 = G__12545;
chunk__12532 = G__12546;
count__12533 = G__12547;
i__12534 = G__12548;
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
return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,k,f);
});

tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,k);
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state,a));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state,a,b));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,cljs.core.apply.call(null,f,this$__$1.state,a,b,xs));
});

tailrecursion.javelin.Cell.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(tailrecursion.javelin.lens_QMARK_.call(null,this$__$1))){
this$__$1.update.call(null,x);
} else {
if(cljs.core.truth_(tailrecursion.javelin.input_QMARK_.call(null,this$__$1))){
this$__$1.state = x;

tailrecursion.javelin.propagate_BANG_.call(null,this$__$1);
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
return cljs.core.write_all.call(null,w,"#<Cell: ",cljs.core.pr_str.call(null,self__.state),">");
});

tailrecursion.javelin.Cell.cljs$lang$type = true;

tailrecursion.javelin.Cell.cljs$lang$ctorStr = "tailrecursion.javelin/Cell";

tailrecursion.javelin.Cell.cljs$lang$ctorPrWriter = (function (this__4351__auto__,writer__4352__auto__,opt__4353__auto__){
return cljs.core._write.call(null,writer__4352__auto__,"tailrecursion.javelin/Cell");
});

tailrecursion.javelin.__GT_Cell = (function __GT_Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update){
return (new tailrecursion.javelin.Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update));
});

tailrecursion.javelin.cell_QMARK_ = (function cell_QMARK_(c){
if(cljs.core._EQ_.call(null,cljs.core.type.call(null,c),tailrecursion.javelin.Cell)){
return c;
} else {
return null;
}
});
tailrecursion.javelin.formula_QMARK_ = (function formula_QMARK_(c){
if(cljs.core.truth_((function (){var and__3752__auto__ = tailrecursion.javelin.cell_QMARK_.call(null,c);
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
if(cljs.core.truth_((function (){var and__3752__auto__ = tailrecursion.javelin.cell_QMARK_.call(null,c);
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
if(cljs.core.truth_((function (){var and__3752__auto__ = tailrecursion.javelin.cell_QMARK_.call(null,c);
if(cljs.core.truth_(and__3752__auto__)){
return cljs.core.not.call(null,tailrecursion.javelin.formula_QMARK_.call(null,c));
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

return tailrecursion.javelin.set_formula_BANG_.call(null,c);
});
tailrecursion.javelin.formula = (function formula(f){
return (function() { 
var G__12549__delegate = function (sources){
return tailrecursion.javelin.set_formula_BANG_.call(null,tailrecursion.javelin.cell.call(null,new cljs.core.Keyword("tailrecursion.javelin","none","tailrecursion.javelin/none",273761139)),f,sources);
};
var G__12549 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__12550__i = 0, G__12550__a = new Array(arguments.length -  0);
while (G__12550__i < G__12550__a.length) {G__12550__a[G__12550__i] = arguments[G__12550__i + 0]; ++G__12550__i;}
  sources = new cljs.core.IndexedSeq(G__12550__a,0);
} 
return G__12549__delegate.call(this,sources);};
G__12549.cljs$lang$maxFixedArity = 0;
G__12549.cljs$lang$applyTo = (function (arglist__12551){
var sources = cljs.core.seq(arglist__12551);
return G__12549__delegate(sources);
});
G__12549.cljs$core$IFn$_invoke$arity$variadic = G__12549__delegate;
return G__12549;
})()
;
});
tailrecursion.javelin.lens = (function lens(c,f){
var c__$1 = tailrecursion.javelin.formula.call(null,cljs.core.identity).call(null,c);
c__$1.update = f;

return c__$1;
});
tailrecursion.javelin.cell = (function cell(x){
return tailrecursion.javelin.set_formula_BANG_.call(null,(new tailrecursion.javelin.Cell(cljs.core.PersistentArrayMap.EMPTY,x,tailrecursion.javelin.next_rank.call(null),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});
tailrecursion.javelin.lift = tailrecursion.javelin.formula;
tailrecursion.javelin.dosync_STAR_ = (function dosync_STAR_(thunk){
var bind = (function (p1__12552_SHARP_){
var _STAR_tx_STAR_12555 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = cljs.core.atom.call(null,tailrecursion.priority_map.priority_map.call(null));

try{return p1__12552_SHARP_.call(null);
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_12555;
}});
var prop = ((function (bind){
return (function (){
var tx = cljs.core.deref.call(null,tailrecursion.javelin._STAR_tx_STAR_);
var _STAR_tx_STAR_12556 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = null;

try{return tailrecursion.javelin.propagate_STAR_.call(null,tx);
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_12556;
}});})(bind))
;
if(cljs.core.truth_(tailrecursion.javelin._STAR_tx_STAR_)){
return thunk.call(null);
} else {
return bind.call(null,((function (bind,prop){
return (function (){
thunk.call(null);

return prop.call(null);
});})(bind,prop))
);
}
});
/**
* @param {...*} var_args
*/
tailrecursion.javelin.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (cells){
var olds = cljs.core.atom.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,cells),new cljs.core.Keyword("tailrecursion.javelin","none","tailrecursion.javelin/none",273761139)));
var tag_neq = ((function (olds){
return (function (p1__12557_SHARP_,p2__12558_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.call(null,p1__12557_SHARP_,p2__12558_SHARP_),p2__12558_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__12560_SHARP_,p2__12559_SHARP_){
return cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.second,cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,tag_neq,p1__12560_SHARP_,p2__12559_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__12562__delegate = function (rest__12561_SHARP_){
var news = diff.call(null,cljs.core.deref.call(null,olds),rest__12561_SHARP_);
cljs.core.reset_BANG_.call(null,olds,rest__12561_SHARP_);

return news;
};
var G__12562 = function (var_args){
var rest__12561_SHARP_ = null;
if (arguments.length > 0) {
var G__12563__i = 0, G__12563__a = new Array(arguments.length -  0);
while (G__12563__i < G__12563__a.length) {G__12563__a[G__12563__i] = arguments[G__12563__i + 0]; ++G__12563__i;}
  rest__12561_SHARP_ = new cljs.core.IndexedSeq(G__12563__a,0);
} 
return G__12562__delegate.call(this,rest__12561_SHARP_);};
G__12562.cljs$lang$maxFixedArity = 0;
G__12562.cljs$lang$applyTo = (function (arglist__12564){
var rest__12561_SHARP_ = cljs.core.seq(arglist__12564);
return G__12562__delegate(rest__12561_SHARP_);
});
G__12562.cljs$core$IFn$_invoke$arity$variadic = G__12562__delegate;
return G__12562;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.call(null,tailrecursion.javelin.formula.call(null,proc),cells);
};
var alts_BANG_ = function (var_args){
var cells = null;
if (arguments.length > 0) {
var G__12565__i = 0, G__12565__a = new Array(arguments.length -  0);
while (G__12565__i < G__12565__a.length) {G__12565__a[G__12565__i] = arguments[G__12565__i + 0]; ++G__12565__i;}
  cells = new cljs.core.IndexedSeq(G__12565__a,0);
} 
return alts_BANG___delegate.call(this,cells);};
alts_BANG_.cljs$lang$maxFixedArity = 0;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12566){
var cells = cljs.core.seq(arglist__12566);
return alts_BANG___delegate(cells);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
tailrecursion.javelin.cell_map = (function cell_map(f,c){
var cseq = tailrecursion.javelin.formula.call(null,cljs.core.seq).call(null,c);
return cljs.core.map.call(null,((function (cseq){
return (function (p1__12567_SHARP_){
return tailrecursion.javelin.formula.call(null,cljs.core.comp.call(null,f,tailrecursion.javelin.safe_nth)).call(null,cseq,p1__12567_SHARP_);
});})(cseq))
,cljs.core.range.call(null,(0),cljs.core.count.call(null,cljs.core.deref.call(null,cseq))));
});
tailrecursion.javelin.cell_doseq_STAR_ = (function cell_doseq_STAR_(items_seq,f){
var pool_size = tailrecursion.javelin.cell.call(null,(0));
var cur_count = tailrecursion.javelin.formula.call(null,cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__12568_SHARP_){
return tailrecursion.javelin.formula.call(null,tailrecursion.javelin.safe_nth).call(null,items_seq,p1__12568_SHARP_);
});})(pool_size,cur_count))
;
return tailrecursion.javelin.formula.call(null,((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__12573_12577 = cljs.core.seq.call(null,cljs.core.range.call(null,pool_size__$1,cur_count__$1));
var chunk__12574_12578 = null;
var count__12575_12579 = (0);
var i__12576_12580 = (0);
while(true){
if((i__12576_12580 < count__12575_12579)){
var i_12581 = cljs.core._nth.call(null,chunk__12574_12578,i__12576_12580);
f__$1.call(null,ith_item__$1.call(null,i_12581));

var G__12582 = seq__12573_12577;
var G__12583 = chunk__12574_12578;
var G__12584 = count__12575_12579;
var G__12585 = (i__12576_12580 + (1));
seq__12573_12577 = G__12582;
chunk__12574_12578 = G__12583;
count__12575_12579 = G__12584;
i__12576_12580 = G__12585;
continue;
} else {
var temp__4126__auto___12586 = cljs.core.seq.call(null,seq__12573_12577);
if(temp__4126__auto___12586){
var seq__12573_12587__$1 = temp__4126__auto___12586;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12573_12587__$1)){
var c__4551__auto___12588 = cljs.core.chunk_first.call(null,seq__12573_12587__$1);
var G__12589 = cljs.core.chunk_rest.call(null,seq__12573_12587__$1);
var G__12590 = c__4551__auto___12588;
var G__12591 = cljs.core.count.call(null,c__4551__auto___12588);
var G__12592 = (0);
seq__12573_12577 = G__12589;
chunk__12574_12578 = G__12590;
count__12575_12579 = G__12591;
i__12576_12580 = G__12592;
continue;
} else {
var i_12593 = cljs.core.first.call(null,seq__12573_12587__$1);
f__$1.call(null,ith_item__$1.call(null,i_12593));

var G__12594 = cljs.core.next.call(null,seq__12573_12587__$1);
var G__12595 = null;
var G__12596 = (0);
var G__12597 = (0);
seq__12573_12577 = G__12594;
chunk__12574_12578 = G__12595;
count__12575_12579 = G__12596;
i__12576_12580 = G__12597;
continue;
}
} else {
}
}
break;
}

return reset_pool_size_BANG_.call(null,cur_count__$1);
} else {
return null;
}
});})(pool_size,cur_count,ith_item))
).call(null,pool_size,cur_count,f,ith_item,cljs.core.partial.call(null,cljs.core.reset_BANG_,pool_size));
});
