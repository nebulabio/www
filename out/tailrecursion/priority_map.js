// Compiled by ClojureScript 0.0-2814 {}
goog.provide('tailrecursion.priority_map');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core');

/**
* @constructor
*/
tailrecursion.priority_map.PersistentPriorityMap = (function (priority__GT_set_of_items,item__GT_priority,meta,__hash){
this.priority__GT_set_of_items = priority__GT_set_of_items;
this.item__GT_priority = item__GT_priority;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2565220111;
})
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.call(null,self__.item__GT_priority,item);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,item,not_found){
var self__ = this;
var coll__$1 = this;
return cljs.core.get.call(null,self__.item__GT_priority,item,not_found);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
var pr_pair = ((function (coll__$1){
return (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});})(coll__$1))
;
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair,"#tailrecursion.priority-map {",", ","}",opts,coll__$1);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.count.call(null,self__.item__GT_priority);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.item__GT_priority) === (0))){
return null;
} else {
var f = cljs.core.first.call(null,self__.priority__GT_set_of_items);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,cljs.core.val.call(null,f)),cljs.core.key.call(null,f)], null);
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.item__GT_priority) === (0))){
throw (new Error("Can't pop empty priority map"));
} else {
var f = cljs.core.first.call(null,self__.priority__GT_set_of_items);
var item_set = cljs.core.val.call(null,f);
var item = cljs.core.first.call(null,item_set);
var priority = cljs.core.key.call(null,f);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.call(null,self__.priority__GT_set_of_items,priority),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,priority,cljs.core.disj.call(null,item_set,item)),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,null));
}
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq.call(null,(function (){var iter__4520__auto__ = ((function (coll__$1){
return (function iter__12601(s__12602){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
var s__12602__$1 = s__12602;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12602__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var vec__12608 = cljs.core.first.call(null,xs__4624__auto__);
var priority = cljs.core.nth.call(null,vec__12608,(0),null);
var item_set = cljs.core.nth.call(null,vec__12608,(1),null);
var iterys__4516__auto__ = ((function (s__12602__$1,vec__12608,priority,item_set,xs__4624__auto__,temp__4126__auto__,coll__$1){
return (function iter__12603(s__12604){
return (new cljs.core.LazySeq(null,((function (s__12602__$1,vec__12608,priority,item_set,xs__4624__auto__,temp__4126__auto__,coll__$1){
return (function (){
var s__12604__$1 = s__12604;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__12604__$1);
if(temp__4126__auto____$1){
var s__12604__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12604__$2)){
var c__4518__auto__ = cljs.core.chunk_first.call(null,s__12604__$2);
var size__4519__auto__ = cljs.core.count.call(null,c__4518__auto__);
var b__12606 = cljs.core.chunk_buffer.call(null,size__4519__auto__);
if((function (){var i__12605 = (0);
while(true){
if((i__12605 < size__4519__auto__)){
var item = cljs.core._nth.call(null,c__4518__auto__,i__12605);
cljs.core.chunk_append.call(null,b__12606,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__12625 = (i__12605 + (1));
i__12605 = G__12625;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12606),iter__12603.call(null,cljs.core.chunk_rest.call(null,s__12604__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12606),null);
}
} else {
var item = cljs.core.first.call(null,s__12604__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),iter__12603.call(null,cljs.core.rest.call(null,s__12604__$2)));
}
} else {
return null;
}
break;
}
});})(s__12602__$1,vec__12608,priority,item_set,xs__4624__auto__,temp__4126__auto__,coll__$1))
,null,null));
});})(s__12602__$1,vec__12608,priority,item_set,xs__4624__auto__,temp__4126__auto__,coll__$1))
;
var fs__4517__auto__ = cljs.core.seq.call(null,iterys__4516__auto__.call(null,item_set));
if(fs__4517__auto__){
return cljs.core.concat.call(null,fs__4517__auto__,iter__12601.call(null,cljs.core.rest.call(null,s__12602__$1)));
} else {
var G__12626 = cljs.core.rest.call(null,s__12602__$1);
s__12602__$1 = G__12626;
continue;
}
} else {
return null;
}
break;
}
});})(coll__$1))
,null,null));
});})(coll__$1))
;
return iter__4520__auto__.call(null,cljs.core.rseq.call(null,self__.priority__GT_set_of_items));
})());
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__4185__auto__ = self__.__hash;
if(!((h__4185__auto__ == null))){
return h__4185__auto__;
} else {
var h__4185__auto____$1 = cljs.core.hash_imap.call(null,this$__$1);
self__.__hash = h__4185__auto____$1;

return h__4185__auto____$1;
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return cljs.core._equiv.call(null,self__.item__GT_priority,other);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.with_meta.call(null,tailrecursion.priority_map.PersistentPriorityMap.EMPTY,self__.meta);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
var priority = self__.item__GT_priority.call(null,item,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",-436727517));
if(cljs.core._EQ_.call(null,priority,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",-436727517))){
return this$__$1;
} else {
var item_set = self__.priority__GT_set_of_items.call(null,priority);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.call(null,self__.priority__GT_set_of_items,priority),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,priority,cljs.core.disj.call(null,item_set,item)),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,null));
}
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,item,priority){
var self__ = this;
var this$__$1 = this;
var temp__4124__auto__ = cljs.core.get.call(null,self__.item__GT_priority,item,null);
if(cljs.core.truth_(temp__4124__auto__)){
var current_priority = temp__4124__auto__;
if(cljs.core._EQ_.call(null,current_priority,priority)){
return this$__$1;
} else {
var item_set = cljs.core.get.call(null,self__.priority__GT_set_of_items,current_priority);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,cljs.core.dissoc.call(null,self__.priority__GT_set_of_items,current_priority),priority,cljs.core.conj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,priority,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.call(null,self__.item__GT_priority,item,priority),self__.meta,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,current_priority,cljs.core.disj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,current_priority),item),priority,cljs.core.conj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,priority,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.call(null,self__.item__GT_priority,item,priority),self__.meta,null));
}
}
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,priority,cljs.core.conj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,priority,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.call(null,self__.item__GT_priority,item,priority),self__.meta,null));
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
return cljs.core.contains_QMARK_.call(null,self__.item__GT_priority,item);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.seq.call(null,(function (){var iter__4520__auto__ = ((function (this$__$1){
return (function iter__12609(s__12610){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__12610__$1 = s__12610;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12610__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var vec__12616 = cljs.core.first.call(null,xs__4624__auto__);
var priority = cljs.core.nth.call(null,vec__12616,(0),null);
var item_set = cljs.core.nth.call(null,vec__12616,(1),null);
var iterys__4516__auto__ = ((function (s__12610__$1,vec__12616,priority,item_set,xs__4624__auto__,temp__4126__auto__,this$__$1){
return (function iter__12611(s__12612){
return (new cljs.core.LazySeq(null,((function (s__12610__$1,vec__12616,priority,item_set,xs__4624__auto__,temp__4126__auto__,this$__$1){
return (function (){
var s__12612__$1 = s__12612;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__12612__$1);
if(temp__4126__auto____$1){
var s__12612__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12612__$2)){
var c__4518__auto__ = cljs.core.chunk_first.call(null,s__12612__$2);
var size__4519__auto__ = cljs.core.count.call(null,c__4518__auto__);
var b__12614 = cljs.core.chunk_buffer.call(null,size__4519__auto__);
if((function (){var i__12613 = (0);
while(true){
if((i__12613 < size__4519__auto__)){
var item = cljs.core._nth.call(null,c__4518__auto__,i__12613);
cljs.core.chunk_append.call(null,b__12614,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__12627 = (i__12613 + (1));
i__12613 = G__12627;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12614),iter__12611.call(null,cljs.core.chunk_rest.call(null,s__12612__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12614),null);
}
} else {
var item = cljs.core.first.call(null,s__12612__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),iter__12611.call(null,cljs.core.rest.call(null,s__12612__$2)));
}
} else {
return null;
}
break;
}
});})(s__12610__$1,vec__12616,priority,item_set,xs__4624__auto__,temp__4126__auto__,this$__$1))
,null,null));
});})(s__12610__$1,vec__12616,priority,item_set,xs__4624__auto__,temp__4126__auto__,this$__$1))
;
var fs__4517__auto__ = cljs.core.seq.call(null,iterys__4516__auto__.call(null,item_set));
if(fs__4517__auto__){
return cljs.core.concat.call(null,fs__4517__auto__,iter__12609.call(null,cljs.core.rest.call(null,s__12610__$1)));
} else {
var G__12628 = cljs.core.rest.call(null,s__12610__$1);
s__12610__$1 = G__12628;
continue;
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__4520__auto__.call(null,self__.priority__GT_set_of_items);
})());
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){
var self__ = this;
var this$__$1 = this;
return (new tailrecursion.priority_map.PersistentPriorityMap(self__.priority__GT_set_of_items,self__.item__GT_priority,meta__$1,self__.__hash));
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry)){
return cljs.core._assoc.call(null,this$__$1,cljs.core._nth.call(null,entry,(0)),cljs.core._nth.call(null,entry,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this$__$1,entry);
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.call = (function() {
var G__12629 = null;
var G__12629__2 = (function (self__,item){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,item);
});
var G__12629__3 = (function (self__,item,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,item,not_found);
});
G__12629 = function(self__,item,not_found){
switch(arguments.length){
case 2:
return G__12629__2.call(this,self__,item);
case 3:
return G__12629__3.call(this,self__,item,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12629.cljs$core$IFn$_invoke$arity$2 = G__12629__2;
G__12629.cljs$core$IFn$_invoke$arity$3 = G__12629__3;
return G__12629;
})()
;

tailrecursion.priority_map.PersistentPriorityMap.prototype.apply = (function (self__,args12600){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args12600)));
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (item){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,item);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (item,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,item,not_found);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (this$,ascending_QMARK_){
var self__ = this;
var this$__$1 = this;
return (cljs.core.truth_(ascending_QMARK_)?cljs.core.seq:cljs.core.rseq).call(null,this$__$1);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (this$,k,ascending_QMARK_){
var self__ = this;
var this$__$1 = this;
var sets = (cljs.core.truth_(ascending_QMARK_)?cljs.core.subseq.call(null,self__.priority__GT_set_of_items,cljs.core._GT__EQ_,k):cljs.core.rsubseq.call(null,self__.priority__GT_set_of_items,cljs.core._LT__EQ_,k));
return cljs.core.seq.call(null,(function (){var iter__4520__auto__ = ((function (sets,this$__$1){
return (function iter__12617(s__12618){
return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){
var s__12618__$1 = s__12618;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12618__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var vec__12624 = cljs.core.first.call(null,xs__4624__auto__);
var priority = cljs.core.nth.call(null,vec__12624,(0),null);
var item_set = cljs.core.nth.call(null,vec__12624,(1),null);
var iterys__4516__auto__ = ((function (s__12618__$1,vec__12624,priority,item_set,xs__4624__auto__,temp__4126__auto__,sets,this$__$1){
return (function iter__12619(s__12620){
return (new cljs.core.LazySeq(null,((function (s__12618__$1,vec__12624,priority,item_set,xs__4624__auto__,temp__4126__auto__,sets,this$__$1){
return (function (){
var s__12620__$1 = s__12620;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__12620__$1);
if(temp__4126__auto____$1){
var s__12620__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12620__$2)){
var c__4518__auto__ = cljs.core.chunk_first.call(null,s__12620__$2);
var size__4519__auto__ = cljs.core.count.call(null,c__4518__auto__);
var b__12622 = cljs.core.chunk_buffer.call(null,size__4519__auto__);
if((function (){var i__12621 = (0);
while(true){
if((i__12621 < size__4519__auto__)){
var item = cljs.core._nth.call(null,c__4518__auto__,i__12621);
cljs.core.chunk_append.call(null,b__12622,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__12630 = (i__12621 + (1));
i__12621 = G__12630;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12622),iter__12619.call(null,cljs.core.chunk_rest.call(null,s__12620__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12622),null);
}
} else {
var item = cljs.core.first.call(null,s__12620__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),iter__12619.call(null,cljs.core.rest.call(null,s__12620__$2)));
}
} else {
return null;
}
break;
}
});})(s__12618__$1,vec__12624,priority,item_set,xs__4624__auto__,temp__4126__auto__,sets,this$__$1))
,null,null));
});})(s__12618__$1,vec__12624,priority,item_set,xs__4624__auto__,temp__4126__auto__,sets,this$__$1))
;
var fs__4517__auto__ = cljs.core.seq.call(null,iterys__4516__auto__.call(null,item_set));
if(fs__4517__auto__){
return cljs.core.concat.call(null,fs__4517__auto__,iter__12617.call(null,cljs.core.rest.call(null,s__12618__$1)));
} else {
var G__12631 = cljs.core.rest.call(null,s__12618__$1);
s__12618__$1 = G__12631;
continue;
}
} else {
return null;
}
break;
}
});})(sets,this$__$1))
,null,null));
});})(sets,this$__$1))
;
return iter__4520__auto__.call(null,sets);
})());
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
return cljs.core.val.call(null,entry);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.compare;
});

tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$type = true;

tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorStr = "tailrecursion.priority-map/PersistentPriorityMap";

tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorPrWriter = (function (this__4351__auto__,writer__4352__auto__,opt__4353__auto__){
return cljs.core._write.call(null,writer__4352__auto__,"tailrecursion.priority-map/PersistentPriorityMap");
});

tailrecursion.priority_map.__GT_PersistentPriorityMap = (function __GT_PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,__hash){
return (new tailrecursion.priority_map.PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,__hash));
});

tailrecursion.priority_map.PersistentPriorityMap.EMPTY = (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map.call(null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null));
tailrecursion.priority_map.pm_empty_by = (function pm_empty_by(comparator){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map_by.call(null,comparator),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null));
});
tailrecursion.priority_map.read_priority_map = (function read_priority_map(elems){
if(cljs.core.map_QMARK_.call(null,elems)){
return cljs.core.into.call(null,tailrecursion.priority_map.PersistentPriorityMap.EMPTY,elems);
} else {
return cljs.reader.reader_error.call(null,null,"Priority map literal expects a map for its elements.");
}
});
cljs.reader.register_tag_parser_BANG_.call(null,"tailrecursion.priority-map",tailrecursion.priority_map.read_priority_map);
/**
* keyval => key val
* Returns a new priority map with supplied mappings.
* @param {...*} var_args
*/
tailrecursion.priority_map.priority_map = (function() { 
var priority_map__delegate = function (keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.PersistentPriorityMap.EMPTY;
while(true){
if(in$){
var G__12632 = cljs.core.nnext.call(null,in$);
var G__12633 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__12632;
out = G__12633;
continue;
} else {
return out;
}
break;
}
};
var priority_map = function (var_args){
var keyvals = null;
if (arguments.length > 0) {
var G__12634__i = 0, G__12634__a = new Array(arguments.length -  0);
while (G__12634__i < G__12634__a.length) {G__12634__a[G__12634__i] = arguments[G__12634__i + 0]; ++G__12634__i;}
  keyvals = new cljs.core.IndexedSeq(G__12634__a,0);
} 
return priority_map__delegate.call(this,keyvals);};
priority_map.cljs$lang$maxFixedArity = 0;
priority_map.cljs$lang$applyTo = (function (arglist__12635){
var keyvals = cljs.core.seq(arglist__12635);
return priority_map__delegate(keyvals);
});
priority_map.cljs$core$IFn$_invoke$arity$variadic = priority_map__delegate;
return priority_map;
})()
;
/**
* keyval => key val
* Returns a new priority map with supplied
* mappings, using the supplied comparator.
* @param {...*} var_args
*/
tailrecursion.priority_map.priority_map_by = (function() { 
var priority_map_by__delegate = function (comparator,keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.pm_empty_by.call(null,comparator);
while(true){
if(in$){
var G__12636 = cljs.core.nnext.call(null,in$);
var G__12637 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__12636;
out = G__12637;
continue;
} else {
return out;
}
break;
}
};
var priority_map_by = function (comparator,var_args){
var keyvals = null;
if (arguments.length > 1) {
var G__12638__i = 0, G__12638__a = new Array(arguments.length -  1);
while (G__12638__i < G__12638__a.length) {G__12638__a[G__12638__i] = arguments[G__12638__i + 1]; ++G__12638__i;}
  keyvals = new cljs.core.IndexedSeq(G__12638__a,0);
} 
return priority_map_by__delegate.call(this,comparator,keyvals);};
priority_map_by.cljs$lang$maxFixedArity = 1;
priority_map_by.cljs$lang$applyTo = (function (arglist__12639){
var comparator = cljs.core.first(arglist__12639);
var keyvals = cljs.core.rest(arglist__12639);
return priority_map_by__delegate(comparator,keyvals);
});
priority_map_by.cljs$core$IFn$_invoke$arity$variadic = priority_map_by__delegate;
return priority_map_by;
})()
;
