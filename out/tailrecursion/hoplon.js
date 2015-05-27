// Compiled by ClojureScript 0.0-2814 {}
goog.provide('tailrecursion.hoplon');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('tailrecursion.javelin');



tailrecursion.hoplon.is_ie8 = cljs.core.not.call(null,(window["Node"]));
tailrecursion.hoplon.node_QMARK_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?(function (p1__12642_SHARP_){
return (p1__12642_SHARP_ instanceof Node);
}):(function (p1__12643_SHARP_){
try{return p1__12643_SHARP_.nodeType;
}catch (e12644){if((e12644 instanceof Error)){
var _ = e12644;
return null;
} else {
throw e12644;

}
}}));
tailrecursion.hoplon.vector_QMARK__STAR_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?cljs.core.vector_QMARK_:(function (p1__12645_SHARP_){
try{return cljs.core.vector_QMARK_.call(null,p1__12645_SHARP_);
}catch (e12646){if((e12646 instanceof Error)){
var _ = e12646;
return null;
} else {
throw e12646;

}
}}));
tailrecursion.hoplon.seq_QMARK__STAR_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?cljs.core.seq_QMARK_:(function (p1__12647_SHARP_){
try{return cljs.core.seq_QMARK_.call(null,p1__12647_SHARP_);
}catch (e12648){if((e12648 instanceof Error)){
var _ = e12648;
return null;
} else {
throw e12648;

}
}}));
cljs.core.set_print_fn_BANG_.call(null,(function (p1__12649_SHARP_){
if(cljs.core.truth_((function (){var and__3752__auto__ = console;
if(cljs.core.truth_(and__3752__auto__)){
return console.log;
} else {
return and__3752__auto__;
}
})())){
return console.log(p1__12649_SHARP_);
} else {
return null;
}
}));
tailrecursion.hoplon.safe_nth = (function() {
var safe_nth = null;
var safe_nth__2 = (function (coll,index){
return safe_nth.call(null,coll,index,null);
});
var safe_nth__3 = (function (coll,index,not_found){
try{return cljs.core.nth.call(null,coll,index,not_found);
}catch (e12651){if((e12651 instanceof Error)){
var _ = e12651;
return not_found;
} else {
throw e12651;

}
}});
safe_nth = function(coll,index,not_found){
switch(arguments.length){
case 2:
return safe_nth__2.call(this,coll,index);
case 3:
return safe_nth__3.call(this,coll,index,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
safe_nth.cljs$core$IFn$_invoke$arity$2 = safe_nth__2;
safe_nth.cljs$core$IFn$_invoke$arity$3 = safe_nth__3;
return safe_nth;
})()
;
tailrecursion.hoplon.timeout = (function() {
var timeout = null;
var timeout__1 = (function (f){
return timeout.call(null,f,(0));
});
var timeout__2 = (function (f,t){
return window.setTimeout(f,t);
});
timeout = function(f,t){
switch(arguments.length){
case 1:
return timeout__1.call(this,f);
case 2:
return timeout__2.call(this,f,t);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
timeout.cljs$core$IFn$_invoke$arity$1 = timeout__1;
timeout.cljs$core$IFn$_invoke$arity$2 = timeout__2;
return timeout;
})()
;
tailrecursion.hoplon.unsplice = (function unsplice(forms){
return cljs.core.mapcat.call(null,(function (p1__12652_SHARP_){
if(cljs.core.truth_((function (){var or__3764__auto__ = tailrecursion.hoplon.seq_QMARK__STAR_.call(null,p1__12652_SHARP_);
if(cljs.core.truth_(or__3764__auto__)){
return or__3764__auto__;
} else {
return tailrecursion.hoplon.vector_QMARK__STAR_.call(null,p1__12652_SHARP_);
}
})())){
return unsplice.call(null,p1__12652_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12652_SHARP_], null);
}
}),forms);
});
tailrecursion.hoplon.when_dom = (function when_dom(this$,f){
if(!((this$ instanceof Element))){
return f.call(null);
} else {
return tailrecursion.hoplon.timeout.call(null,(function doit(){
if(cljs.core.truth_(document.documentElement.contains(this$))){
return f.call(null);
} else {
return tailrecursion.hoplon.timeout.call(null,doit,(20));
}
}));
}
});
tailrecursion.hoplon.parse_args = (function parse_args(p__12655){
var vec__12657 = p__12655;
var head = cljs.core.nth.call(null,vec__12657,(0),null);
var tail = cljs.core.nthnext.call(null,vec__12657,(1));
var args = vec__12657;
var kw1_QMARK_ = cljs.core.comp.call(null,cljs.core.keyword_QMARK_,cljs.core.first);
var mkkw = ((function (kw1_QMARK_,vec__12657,head,tail,args){
return (function (p1__12653_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.take_while.call(null,kw1_QMARK_,cljs.core.partition.call(null,(2),p1__12653_SHARP_)));
});})(kw1_QMARK_,vec__12657,head,tail,args))
;
var drkw = ((function (kw1_QMARK_,mkkw,vec__12657,head,tail,args){
return (function (p1__12654_SHARP_){
return cljs.core.mapcat.call(null,cljs.core.identity,cljs.core.drop_while.call(null,kw1_QMARK_,cljs.core.partition.call(null,(2),(2),cljs.core.PersistentVector.EMPTY,p1__12654_SHARP_)));
});})(kw1_QMARK_,mkkw,vec__12657,head,tail,args))
;
if(cljs.core.map_QMARK_.call(null,head)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [head,tailrecursion.hoplon.unsplice.call(null,tail)], null);
} else {
if((head instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,mkkw.call(null,args)),tailrecursion.hoplon.unsplice.call(null,drkw.call(null,args))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,tailrecursion.hoplon.unsplice.call(null,args)], null);

}
}
});
tailrecursion.hoplon.add_attributes_BANG_ = (function add_attributes_BANG_(this$,attr){
var key_STAR_ = (function (p1__12659_SHARP_,p2__12658_SHARP_){
var n = (function (){var s = cljs.core.name.call(null,p2__12658_SHARP_);
var c = cljs.core.last.call(null,s);
if(!(cljs.core._EQ_.call(null,"=",c))){
return s;
} else {
return s.slice((0),(-1));
}
})();
var p = n.substr((0),(3));
return cljs.core.keyword.call(null,cljs.core.namespace.call(null,p2__12658_SHARP_),((!(cljs.core._EQ_.call(null,p1__12659_SHARP_,p)))?n:n.substr((3))));
});
var dokey = cljs.core.partial.call(null,key_STAR_,"do-");
var onkey = cljs.core.partial.call(null,key_STAR_,"on-");
var dos = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ons = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var addcls = ((function (key_STAR_,dokey,onkey,dos,ons){
return (function (p1__12660_SHARP_,p2__12661_SHARP_){
return clojure.string.join.call(null," ",cljs.core.into.call(null,cljs.core.set.call(null,clojure.string.split.call(null,p1__12660_SHARP_,/ /)),clojure.string.split.call(null,p2__12661_SHARP_,/ /)));
});})(key_STAR_,dokey,onkey,dos,ons))
;
var seq__12684_12702 = cljs.core.seq.call(null,attr);
var chunk__12685_12703 = null;
var count__12686_12704 = (0);
var i__12687_12705 = (0);
while(true){
if((i__12687_12705 < count__12686_12704)){
var vec__12688_12706 = cljs.core._nth.call(null,chunk__12685_12703,i__12687_12705);
var k_12707 = cljs.core.nth.call(null,vec__12688_12706,(0),null);
var v_12708 = cljs.core.nth.call(null,vec__12688_12706,(1),null);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,v_12708))){
cljs.core.swap_BANG_.call(null,dos,cljs.core.assoc,dokey.call(null,k_12707),v_12708);
} else {
if(cljs.core.fn_QMARK_.call(null,v_12708)){
cljs.core.swap_BANG_.call(null,ons,cljs.core.assoc,onkey.call(null,k_12707),v_12708);
} else {
tailrecursion.hoplon.do_BANG_.call(null,this$,dokey.call(null,k_12707),v_12708);

}
}

var G__12709 = seq__12684_12702;
var G__12710 = chunk__12685_12703;
var G__12711 = count__12686_12704;
var G__12712 = (i__12687_12705 + (1));
seq__12684_12702 = G__12709;
chunk__12685_12703 = G__12710;
count__12686_12704 = G__12711;
i__12687_12705 = G__12712;
continue;
} else {
var temp__4126__auto___12713 = cljs.core.seq.call(null,seq__12684_12702);
if(temp__4126__auto___12713){
var seq__12684_12714__$1 = temp__4126__auto___12713;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12684_12714__$1)){
var c__4551__auto___12715 = cljs.core.chunk_first.call(null,seq__12684_12714__$1);
var G__12716 = cljs.core.chunk_rest.call(null,seq__12684_12714__$1);
var G__12717 = c__4551__auto___12715;
var G__12718 = cljs.core.count.call(null,c__4551__auto___12715);
var G__12719 = (0);
seq__12684_12702 = G__12716;
chunk__12685_12703 = G__12717;
count__12686_12704 = G__12718;
i__12687_12705 = G__12719;
continue;
} else {
var vec__12689_12720 = cljs.core.first.call(null,seq__12684_12714__$1);
var k_12721 = cljs.core.nth.call(null,vec__12689_12720,(0),null);
var v_12722 = cljs.core.nth.call(null,vec__12689_12720,(1),null);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,v_12722))){
cljs.core.swap_BANG_.call(null,dos,cljs.core.assoc,dokey.call(null,k_12721),v_12722);
} else {
if(cljs.core.fn_QMARK_.call(null,v_12722)){
cljs.core.swap_BANG_.call(null,ons,cljs.core.assoc,onkey.call(null,k_12721),v_12722);
} else {
tailrecursion.hoplon.do_BANG_.call(null,this$,dokey.call(null,k_12721),v_12722);

}
}

var G__12723 = cljs.core.next.call(null,seq__12684_12714__$1);
var G__12724 = null;
var G__12725 = (0);
var G__12726 = (0);
seq__12684_12702 = G__12723;
chunk__12685_12703 = G__12724;
count__12686_12704 = G__12725;
i__12687_12705 = G__12726;
continue;
}
} else {
}
}
break;
}

if(cljs.core.seq.call(null,cljs.core.deref.call(null,dos))){
setTimeout(((function (key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (){
var seq__12690 = cljs.core.seq.call(null,cljs.core.deref.call(null,dos));
var chunk__12691 = null;
var count__12692 = (0);
var i__12693 = (0);
while(true){
if((i__12693 < count__12692)){
var vec__12694 = cljs.core._nth.call(null,chunk__12691,i__12693);
var k = cljs.core.nth.call(null,vec__12694,(0),null);
var v = cljs.core.nth.call(null,vec__12694,(1),null);
tailrecursion.hoplon.do_BANG_.call(null,this$,k,cljs.core.deref.call(null,v));

cljs.core.add_watch.call(null,v,cljs.core.gensym.call(null),((function (seq__12690,chunk__12691,count__12692,i__12693,vec__12694,k,v,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__12663_SHARP_,p2__12664_SHARP_,p3__12665_SHARP_,p4__12662_SHARP_){
return tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__12662_SHARP_);
});})(seq__12690,chunk__12691,count__12692,i__12693,vec__12694,k,v,key_STAR_,dokey,onkey,dos,ons,addcls))
);

var G__12727 = seq__12690;
var G__12728 = chunk__12691;
var G__12729 = count__12692;
var G__12730 = (i__12693 + (1));
seq__12690 = G__12727;
chunk__12691 = G__12728;
count__12692 = G__12729;
i__12693 = G__12730;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12690);
if(temp__4126__auto__){
var seq__12690__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12690__$1)){
var c__4551__auto__ = cljs.core.chunk_first.call(null,seq__12690__$1);
var G__12731 = cljs.core.chunk_rest.call(null,seq__12690__$1);
var G__12732 = c__4551__auto__;
var G__12733 = cljs.core.count.call(null,c__4551__auto__);
var G__12734 = (0);
seq__12690 = G__12731;
chunk__12691 = G__12732;
count__12692 = G__12733;
i__12693 = G__12734;
continue;
} else {
var vec__12695 = cljs.core.first.call(null,seq__12690__$1);
var k = cljs.core.nth.call(null,vec__12695,(0),null);
var v = cljs.core.nth.call(null,vec__12695,(1),null);
tailrecursion.hoplon.do_BANG_.call(null,this$,k,cljs.core.deref.call(null,v));

cljs.core.add_watch.call(null,v,cljs.core.gensym.call(null),((function (seq__12690,chunk__12691,count__12692,i__12693,vec__12695,k,v,seq__12690__$1,temp__4126__auto__,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__12663_SHARP_,p2__12664_SHARP_,p3__12665_SHARP_,p4__12662_SHARP_){
return tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__12662_SHARP_);
});})(seq__12690,chunk__12691,count__12692,i__12693,vec__12695,k,v,seq__12690__$1,temp__4126__auto__,key_STAR_,dokey,onkey,dos,ons,addcls))
);

var G__12735 = cljs.core.next.call(null,seq__12690__$1);
var G__12736 = null;
var G__12737 = (0);
var G__12738 = (0);
seq__12690 = G__12735;
chunk__12691 = G__12736;
count__12692 = G__12737;
i__12693 = G__12738;
continue;
}
} else {
return null;
}
}
break;
}
});})(key_STAR_,dokey,onkey,dos,ons,addcls))
,(0));
} else {
}

if(cljs.core.seq.call(null,cljs.core.deref.call(null,ons))){
setTimeout(((function (key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (){
var seq__12696 = cljs.core.seq.call(null,cljs.core.deref.call(null,ons));
var chunk__12697 = null;
var count__12698 = (0);
var i__12699 = (0);
while(true){
if((i__12699 < count__12698)){
var vec__12700 = cljs.core._nth.call(null,chunk__12697,i__12699);
var k = cljs.core.nth.call(null,vec__12700,(0),null);
var v = cljs.core.nth.call(null,vec__12700,(1),null);
tailrecursion.hoplon.on_BANG_.call(null,this$,k,v);

var G__12739 = seq__12696;
var G__12740 = chunk__12697;
var G__12741 = count__12698;
var G__12742 = (i__12699 + (1));
seq__12696 = G__12739;
chunk__12697 = G__12740;
count__12698 = G__12741;
i__12699 = G__12742;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12696);
if(temp__4126__auto__){
var seq__12696__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12696__$1)){
var c__4551__auto__ = cljs.core.chunk_first.call(null,seq__12696__$1);
var G__12743 = cljs.core.chunk_rest.call(null,seq__12696__$1);
var G__12744 = c__4551__auto__;
var G__12745 = cljs.core.count.call(null,c__4551__auto__);
var G__12746 = (0);
seq__12696 = G__12743;
chunk__12697 = G__12744;
count__12698 = G__12745;
i__12699 = G__12746;
continue;
} else {
var vec__12701 = cljs.core.first.call(null,seq__12696__$1);
var k = cljs.core.nth.call(null,vec__12701,(0),null);
var v = cljs.core.nth.call(null,vec__12701,(1),null);
tailrecursion.hoplon.on_BANG_.call(null,this$,k,v);

var G__12747 = cljs.core.next.call(null,seq__12696__$1);
var G__12748 = null;
var G__12749 = (0);
var G__12750 = (0);
seq__12696 = G__12747;
chunk__12697 = G__12748;
count__12698 = G__12749;
i__12699 = G__12750;
continue;
}
} else {
return null;
}
}
break;
}
});})(key_STAR_,dokey,onkey,dos,ons,addcls))
,(0));
} else {
}

return this$;
});
tailrecursion.hoplon.append_child = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?(function (p1__12751_SHARP_,p2__12752_SHARP_){
return p1__12751_SHARP_.appendChild(p2__12752_SHARP_);
}):(function (p1__12753_SHARP_,p2__12754_SHARP_){
try{return p1__12753_SHARP_.appendChild(p2__12754_SHARP_);
}catch (e12755){if((e12755 instanceof Error)){
var _ = e12755;
return null;
} else {
throw e12755;

}
}}));
tailrecursion.hoplon.replace_children_BANG_ = (function replace_children_BANG_(this$,new_children){
jQuery(this$).empty();

return tailrecursion.hoplon.add_children_BANG_.call(null,this$,((cljs.core.sequential_QMARK_.call(null,new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null)));
});
tailrecursion.hoplon.add_children_BANG_ = (function add_children_BANG_(this$,p__12761){
var vec__12767 = p__12761;
var child_cell = cljs.core.nth.call(null,vec__12767,(0),null);
var _ = cljs.core.nthnext.call(null,vec__12767,(1));
var kids = vec__12767;
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,child_cell))){
tailrecursion.hoplon.replace_children_BANG_.call(null,this$,cljs.core.deref.call(null,child_cell));

cljs.core.add_watch.call(null,child_cell,cljs.core.gensym.call(null),((function (vec__12767,child_cell,_,kids){
return (function (p1__12757_SHARP_,p2__12758_SHARP_,p3__12759_SHARP_,p4__12756_SHARP_){
return tailrecursion.hoplon.replace_children_BANG_.call(null,this$,p4__12756_SHARP_);
});})(vec__12767,child_cell,_,kids))
);
} else {
var node_12772 = ((function (vec__12767,child_cell,_,kids){
return (function (p1__12760_SHARP_){
if(typeof p1__12760_SHARP_ === 'string'){
return tailrecursion.hoplon.$text.call(null,p1__12760_SHARP_);
} else {
if(cljs.core.truth_(tailrecursion.hoplon.node_QMARK_.call(null,p1__12760_SHARP_))){
return p1__12760_SHARP_;
} else {
return null;
}
}
});})(vec__12767,child_cell,_,kids))
;
var seq__12768_12773 = cljs.core.seq.call(null,cljs.core.keep.call(null,node_12772,tailrecursion.hoplon.unsplice.call(null,kids)));
var chunk__12769_12774 = null;
var count__12770_12775 = (0);
var i__12771_12776 = (0);
while(true){
if((i__12771_12776 < count__12770_12775)){
var x_12777 = cljs.core._nth.call(null,chunk__12769_12774,i__12771_12776);
tailrecursion.hoplon.append_child.call(null,this$,x_12777);

var G__12778 = seq__12768_12773;
var G__12779 = chunk__12769_12774;
var G__12780 = count__12770_12775;
var G__12781 = (i__12771_12776 + (1));
seq__12768_12773 = G__12778;
chunk__12769_12774 = G__12779;
count__12770_12775 = G__12780;
i__12771_12776 = G__12781;
continue;
} else {
var temp__4126__auto___12782 = cljs.core.seq.call(null,seq__12768_12773);
if(temp__4126__auto___12782){
var seq__12768_12783__$1 = temp__4126__auto___12782;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12768_12783__$1)){
var c__4551__auto___12784 = cljs.core.chunk_first.call(null,seq__12768_12783__$1);
var G__12785 = cljs.core.chunk_rest.call(null,seq__12768_12783__$1);
var G__12786 = c__4551__auto___12784;
var G__12787 = cljs.core.count.call(null,c__4551__auto___12784);
var G__12788 = (0);
seq__12768_12773 = G__12785;
chunk__12769_12774 = G__12786;
count__12770_12775 = G__12787;
i__12771_12776 = G__12788;
continue;
} else {
var x_12789 = cljs.core.first.call(null,seq__12768_12783__$1);
tailrecursion.hoplon.append_child.call(null,this$,x_12789);

var G__12790 = cljs.core.next.call(null,seq__12768_12783__$1);
var G__12791 = null;
var G__12792 = (0);
var G__12793 = (0);
seq__12768_12773 = G__12790;
chunk__12769_12774 = G__12791;
count__12770_12775 = G__12792;
i__12771_12776 = G__12793;
continue;
}
} else {
}
}
break;
}
}

return this$;
});
tailrecursion.hoplon.on_append_BANG_ = (function on_append_BANG_(this$,f){
return this$.hoplonIFn = f;
});
Element.prototype.cljs$core$IFn$ = true;

Element.prototype.call = (function() { 
var G__12801__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__12795 = tailrecursion.hoplon.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__12795,(0),null);
var kids = cljs.core.nth.call(null,vec__12795,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__12796 = this$;
G__12796.hoplonIFn(attr,kids);

return G__12796;
} else {
var G__12797 = this$;
tailrecursion.hoplon.add_attributes_BANG_.call(null,G__12797,attr);

tailrecursion.hoplon.add_children_BANG_.call(null,G__12797,kids);

return G__12797;
}
};
var G__12801 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__12802__i = 0, G__12802__a = new Array(arguments.length -  1);
while (G__12802__i < G__12802__a.length) {G__12802__a[G__12802__i] = arguments[G__12802__i + 1]; ++G__12802__i;}
  args = new cljs.core.IndexedSeq(G__12802__a,0);
} 
return G__12801__delegate.call(this,self__,args);};
G__12801.cljs$lang$maxFixedArity = 1;
G__12801.cljs$lang$applyTo = (function (arglist__12803){
var self__ = cljs.core.first(arglist__12803);
var args = cljs.core.rest(arglist__12803);
return G__12801__delegate(self__,args);
});
G__12801.cljs$core$IFn$_invoke$arity$variadic = G__12801__delegate;
return G__12801;
})()
;

Element.prototype.apply = (function (self__,args12794){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args12794)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__12804__delegate = function (args){
var this$ = this;
var vec__12798 = tailrecursion.hoplon.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__12798,(0),null);
var kids = cljs.core.nth.call(null,vec__12798,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__12799 = this$;
G__12799.hoplonIFn(attr,kids);

return G__12799;
} else {
var G__12800 = this$;
tailrecursion.hoplon.add_attributes_BANG_.call(null,G__12800,attr);

tailrecursion.hoplon.add_children_BANG_.call(null,G__12800,kids);

return G__12800;
}
};
var G__12804 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12805__i = 0, G__12805__a = new Array(arguments.length -  0);
while (G__12805__i < G__12805__a.length) {G__12805__a[G__12805__i] = arguments[G__12805__i + 0]; ++G__12805__i;}
  args = new cljs.core.IndexedSeq(G__12805__a,0);
} 
return G__12804__delegate.call(this,args);};
G__12804.cljs$lang$maxFixedArity = 0;
G__12804.cljs$lang$applyTo = (function (arglist__12806){
var args = cljs.core.seq(arglist__12806);
return G__12804__delegate(args);
});
G__12804.cljs$core$IFn$_invoke$arity$variadic = G__12804__delegate;
return G__12804;
})()
;

Element.prototype.cljs$core$IPrintWithWriter$ = true;

Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.call(null,writer,"#<Element: ",this$__$1.tagName,">");
});
tailrecursion.hoplon.make_singleton_ctor = (function make_singleton_ctor(tag){
return (function() { 
var G__12817__delegate = function (args){
var vec__12812 = tailrecursion.hoplon.parse_args.call(null,args);
var attrs = cljs.core.nth.call(null,vec__12812,(0),null);
var kids = cljs.core.nth.call(null,vec__12812,(1),null);
var elem = (document.getElementsByTagName(tag)[(0)]);
tailrecursion.hoplon.add_attributes_BANG_.call(null,elem,attrs);

jQuery(elem).empty();

var seq__12813 = cljs.core.seq.call(null,kids);
var chunk__12814 = null;
var count__12815 = (0);
var i__12816 = (0);
while(true){
if((i__12816 < count__12815)){
var k = cljs.core._nth.call(null,chunk__12814,i__12816);
elem.appendChild(k);

var G__12818 = seq__12813;
var G__12819 = chunk__12814;
var G__12820 = count__12815;
var G__12821 = (i__12816 + (1));
seq__12813 = G__12818;
chunk__12814 = G__12819;
count__12815 = G__12820;
i__12816 = G__12821;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12813);
if(temp__4126__auto__){
var seq__12813__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12813__$1)){
var c__4551__auto__ = cljs.core.chunk_first.call(null,seq__12813__$1);
var G__12822 = cljs.core.chunk_rest.call(null,seq__12813__$1);
var G__12823 = c__4551__auto__;
var G__12824 = cljs.core.count.call(null,c__4551__auto__);
var G__12825 = (0);
seq__12813 = G__12822;
chunk__12814 = G__12823;
count__12815 = G__12824;
i__12816 = G__12825;
continue;
} else {
var k = cljs.core.first.call(null,seq__12813__$1);
elem.appendChild(k);

var G__12826 = cljs.core.next.call(null,seq__12813__$1);
var G__12827 = null;
var G__12828 = (0);
var G__12829 = (0);
seq__12813 = G__12826;
chunk__12814 = G__12827;
count__12815 = G__12828;
i__12816 = G__12829;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__12817 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12830__i = 0, G__12830__a = new Array(arguments.length -  0);
while (G__12830__i < G__12830__a.length) {G__12830__a[G__12830__i] = arguments[G__12830__i + 0]; ++G__12830__i;}
  args = new cljs.core.IndexedSeq(G__12830__a,0);
} 
return G__12817__delegate.call(this,args);};
G__12817.cljs$lang$maxFixedArity = 0;
G__12817.cljs$lang$applyTo = (function (arglist__12831){
var args = cljs.core.seq(arglist__12831);
return G__12817__delegate(args);
});
G__12817.cljs$core$IFn$_invoke$arity$variadic = G__12817__delegate;
return G__12817;
})()
;
});
tailrecursion.hoplon.make_elem_ctor = (function make_elem_ctor(tag){
return (function() { 
var G__12832__delegate = function (args){
return cljs.core.apply.call(null,document.createElement(tag),args);
};
var G__12832 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12833__i = 0, G__12833__a = new Array(arguments.length -  0);
while (G__12833__i < G__12833__a.length) {G__12833__a[G__12833__i] = arguments[G__12833__i + 0]; ++G__12833__i;}
  args = new cljs.core.IndexedSeq(G__12833__a,0);
} 
return G__12832__delegate.call(this,args);};
G__12832.cljs$lang$maxFixedArity = 0;
G__12832.cljs$lang$applyTo = (function (arglist__12834){
var args = cljs.core.seq(arglist__12834);
return G__12832__delegate(args);
});
G__12832.cljs$core$IFn$_invoke$arity$variadic = G__12832__delegate;
return G__12832;
})()
;
});
/**
* @param {...*} var_args
*/
tailrecursion.hoplon.html = (function() { 
var html__delegate = function (args){
var vec__12836 = tailrecursion.hoplon.parse_args.call(null,args);
var attrs = cljs.core.nth.call(null,vec__12836,(0),null);
var _ = cljs.core.nth.call(null,vec__12836,(1),null);
return tailrecursion.hoplon.add_attributes_BANG_.call(null,(document.getElementsByTagName("html")[(0)]),attrs);
};
var html = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12837__i = 0, G__12837__a = new Array(arguments.length -  0);
while (G__12837__i < G__12837__a.length) {G__12837__a[G__12837__i] = arguments[G__12837__i + 0]; ++G__12837__i;}
  args = new cljs.core.IndexedSeq(G__12837__a,0);
} 
return html__delegate.call(this,args);};
html.cljs$lang$maxFixedArity = 0;
html.cljs$lang$applyTo = (function (arglist__12838){
var args = cljs.core.seq(arglist__12838);
return html__delegate(args);
});
html.cljs$core$IFn$_invoke$arity$variadic = html__delegate;
return html;
})()
;
tailrecursion.hoplon.body = tailrecursion.hoplon.make_singleton_ctor.call(null,"body");
tailrecursion.hoplon.head = tailrecursion.hoplon.make_singleton_ctor.call(null,"head");
tailrecursion.hoplon.a = tailrecursion.hoplon.make_elem_ctor.call(null,"a");
tailrecursion.hoplon.abbr = tailrecursion.hoplon.make_elem_ctor.call(null,"abbr");
tailrecursion.hoplon.acronym = tailrecursion.hoplon.make_elem_ctor.call(null,"acronym");
tailrecursion.hoplon.address = tailrecursion.hoplon.make_elem_ctor.call(null,"address");
tailrecursion.hoplon.applet = tailrecursion.hoplon.make_elem_ctor.call(null,"applet");
tailrecursion.hoplon.area = tailrecursion.hoplon.make_elem_ctor.call(null,"area");
tailrecursion.hoplon.article = tailrecursion.hoplon.make_elem_ctor.call(null,"article");
tailrecursion.hoplon.aside = tailrecursion.hoplon.make_elem_ctor.call(null,"aside");
tailrecursion.hoplon.audio = tailrecursion.hoplon.make_elem_ctor.call(null,"audio");
tailrecursion.hoplon.b = tailrecursion.hoplon.make_elem_ctor.call(null,"b");
tailrecursion.hoplon.base = tailrecursion.hoplon.make_elem_ctor.call(null,"base");
tailrecursion.hoplon.basefont = tailrecursion.hoplon.make_elem_ctor.call(null,"basefont");
tailrecursion.hoplon.bdi = tailrecursion.hoplon.make_elem_ctor.call(null,"bdi");
tailrecursion.hoplon.bdo = tailrecursion.hoplon.make_elem_ctor.call(null,"bdo");
tailrecursion.hoplon.big = tailrecursion.hoplon.make_elem_ctor.call(null,"big");
tailrecursion.hoplon.blockquote = tailrecursion.hoplon.make_elem_ctor.call(null,"blockquote");
tailrecursion.hoplon.br = tailrecursion.hoplon.make_elem_ctor.call(null,"br");
tailrecursion.hoplon.button = tailrecursion.hoplon.make_elem_ctor.call(null,"button");
tailrecursion.hoplon.canvas = tailrecursion.hoplon.make_elem_ctor.call(null,"canvas");
tailrecursion.hoplon.caption = tailrecursion.hoplon.make_elem_ctor.call(null,"caption");
tailrecursion.hoplon.center = tailrecursion.hoplon.make_elem_ctor.call(null,"center");
tailrecursion.hoplon.cite = tailrecursion.hoplon.make_elem_ctor.call(null,"cite");
tailrecursion.hoplon.code = tailrecursion.hoplon.make_elem_ctor.call(null,"code");
tailrecursion.hoplon.col = tailrecursion.hoplon.make_elem_ctor.call(null,"col");
tailrecursion.hoplon.colgroup = tailrecursion.hoplon.make_elem_ctor.call(null,"colgroup");
tailrecursion.hoplon.command = tailrecursion.hoplon.make_elem_ctor.call(null,"command");
tailrecursion.hoplon.data = tailrecursion.hoplon.make_elem_ctor.call(null,"data");
tailrecursion.hoplon.datalist = tailrecursion.hoplon.make_elem_ctor.call(null,"datalist");
tailrecursion.hoplon.dd = tailrecursion.hoplon.make_elem_ctor.call(null,"dd");
tailrecursion.hoplon.del = tailrecursion.hoplon.make_elem_ctor.call(null,"del");
tailrecursion.hoplon.details = tailrecursion.hoplon.make_elem_ctor.call(null,"details");
tailrecursion.hoplon.dfn = tailrecursion.hoplon.make_elem_ctor.call(null,"dfn");
tailrecursion.hoplon.dir = tailrecursion.hoplon.make_elem_ctor.call(null,"dir");
tailrecursion.hoplon.div = tailrecursion.hoplon.make_elem_ctor.call(null,"div");
tailrecursion.hoplon.dl = tailrecursion.hoplon.make_elem_ctor.call(null,"dl");
tailrecursion.hoplon.dt = tailrecursion.hoplon.make_elem_ctor.call(null,"dt");
tailrecursion.hoplon.em = tailrecursion.hoplon.make_elem_ctor.call(null,"em");
tailrecursion.hoplon.embed = tailrecursion.hoplon.make_elem_ctor.call(null,"embed");
tailrecursion.hoplon.eventsource = tailrecursion.hoplon.make_elem_ctor.call(null,"eventsource");
tailrecursion.hoplon.fieldset = tailrecursion.hoplon.make_elem_ctor.call(null,"fieldset");
tailrecursion.hoplon.figcaption = tailrecursion.hoplon.make_elem_ctor.call(null,"figcaption");
tailrecursion.hoplon.figure = tailrecursion.hoplon.make_elem_ctor.call(null,"figure");
tailrecursion.hoplon.font = tailrecursion.hoplon.make_elem_ctor.call(null,"font");
tailrecursion.hoplon.footer = tailrecursion.hoplon.make_elem_ctor.call(null,"footer");
tailrecursion.hoplon.form = tailrecursion.hoplon.make_elem_ctor.call(null,"form");
tailrecursion.hoplon.frame = tailrecursion.hoplon.make_elem_ctor.call(null,"frame");
tailrecursion.hoplon.frameset = tailrecursion.hoplon.make_elem_ctor.call(null,"frameset");
tailrecursion.hoplon.h1 = tailrecursion.hoplon.make_elem_ctor.call(null,"h1");
tailrecursion.hoplon.h2 = tailrecursion.hoplon.make_elem_ctor.call(null,"h2");
tailrecursion.hoplon.h3 = tailrecursion.hoplon.make_elem_ctor.call(null,"h3");
tailrecursion.hoplon.h4 = tailrecursion.hoplon.make_elem_ctor.call(null,"h4");
tailrecursion.hoplon.h5 = tailrecursion.hoplon.make_elem_ctor.call(null,"h5");
tailrecursion.hoplon.h6 = tailrecursion.hoplon.make_elem_ctor.call(null,"h6");
tailrecursion.hoplon.header = tailrecursion.hoplon.make_elem_ctor.call(null,"header");
tailrecursion.hoplon.hgroup = tailrecursion.hoplon.make_elem_ctor.call(null,"hgroup");
tailrecursion.hoplon.hr = tailrecursion.hoplon.make_elem_ctor.call(null,"hr");
tailrecursion.hoplon.i = tailrecursion.hoplon.make_elem_ctor.call(null,"i");
tailrecursion.hoplon.iframe = tailrecursion.hoplon.make_elem_ctor.call(null,"iframe");
tailrecursion.hoplon.img = tailrecursion.hoplon.make_elem_ctor.call(null,"img");
tailrecursion.hoplon.input = tailrecursion.hoplon.make_elem_ctor.call(null,"input");
tailrecursion.hoplon.ins = tailrecursion.hoplon.make_elem_ctor.call(null,"ins");
tailrecursion.hoplon.isindex = tailrecursion.hoplon.make_elem_ctor.call(null,"isindex");
tailrecursion.hoplon.kbd = tailrecursion.hoplon.make_elem_ctor.call(null,"kbd");
tailrecursion.hoplon.keygen = tailrecursion.hoplon.make_elem_ctor.call(null,"keygen");
tailrecursion.hoplon.label = tailrecursion.hoplon.make_elem_ctor.call(null,"label");
tailrecursion.hoplon.legend = tailrecursion.hoplon.make_elem_ctor.call(null,"legend");
tailrecursion.hoplon.li = tailrecursion.hoplon.make_elem_ctor.call(null,"li");
tailrecursion.hoplon.link = tailrecursion.hoplon.make_elem_ctor.call(null,"link");
tailrecursion.hoplon.html_map = tailrecursion.hoplon.make_elem_ctor.call(null,"map");
tailrecursion.hoplon.main = tailrecursion.hoplon.make_elem_ctor.call(null,"main");
tailrecursion.hoplon.mark = tailrecursion.hoplon.make_elem_ctor.call(null,"mark");
tailrecursion.hoplon.menu = tailrecursion.hoplon.make_elem_ctor.call(null,"menu");
tailrecursion.hoplon.html_meta = tailrecursion.hoplon.make_elem_ctor.call(null,"meta");
tailrecursion.hoplon.meter = tailrecursion.hoplon.make_elem_ctor.call(null,"meter");
tailrecursion.hoplon.nav = tailrecursion.hoplon.make_elem_ctor.call(null,"nav");
tailrecursion.hoplon.noframes = tailrecursion.hoplon.make_elem_ctor.call(null,"noframes");
tailrecursion.hoplon.noscript = tailrecursion.hoplon.make_elem_ctor.call(null,"noscript");
tailrecursion.hoplon.object = tailrecursion.hoplon.make_elem_ctor.call(null,"object");
tailrecursion.hoplon.ol = tailrecursion.hoplon.make_elem_ctor.call(null,"ol");
tailrecursion.hoplon.optgroup = tailrecursion.hoplon.make_elem_ctor.call(null,"optgroup");
tailrecursion.hoplon.option = tailrecursion.hoplon.make_elem_ctor.call(null,"option");
tailrecursion.hoplon.output = tailrecursion.hoplon.make_elem_ctor.call(null,"output");
tailrecursion.hoplon.p = tailrecursion.hoplon.make_elem_ctor.call(null,"p");
tailrecursion.hoplon.param = tailrecursion.hoplon.make_elem_ctor.call(null,"param");
tailrecursion.hoplon.pre = tailrecursion.hoplon.make_elem_ctor.call(null,"pre");
tailrecursion.hoplon.progress = tailrecursion.hoplon.make_elem_ctor.call(null,"progress");
tailrecursion.hoplon.q = tailrecursion.hoplon.make_elem_ctor.call(null,"q");
tailrecursion.hoplon.rp = tailrecursion.hoplon.make_elem_ctor.call(null,"rp");
tailrecursion.hoplon.rt = tailrecursion.hoplon.make_elem_ctor.call(null,"rt");
tailrecursion.hoplon.ruby = tailrecursion.hoplon.make_elem_ctor.call(null,"ruby");
tailrecursion.hoplon.s = tailrecursion.hoplon.make_elem_ctor.call(null,"s");
tailrecursion.hoplon.samp = tailrecursion.hoplon.make_elem_ctor.call(null,"samp");
tailrecursion.hoplon.script = tailrecursion.hoplon.make_elem_ctor.call(null,"script");
tailrecursion.hoplon.section = tailrecursion.hoplon.make_elem_ctor.call(null,"section");
tailrecursion.hoplon.select = tailrecursion.hoplon.make_elem_ctor.call(null,"select");
tailrecursion.hoplon.small = tailrecursion.hoplon.make_elem_ctor.call(null,"small");
tailrecursion.hoplon.source = tailrecursion.hoplon.make_elem_ctor.call(null,"source");
tailrecursion.hoplon.span = tailrecursion.hoplon.make_elem_ctor.call(null,"span");
tailrecursion.hoplon.strike = tailrecursion.hoplon.make_elem_ctor.call(null,"strike");
tailrecursion.hoplon.strong = tailrecursion.hoplon.make_elem_ctor.call(null,"strong");
tailrecursion.hoplon.style = tailrecursion.hoplon.make_elem_ctor.call(null,"style");
tailrecursion.hoplon.sub = tailrecursion.hoplon.make_elem_ctor.call(null,"sub");
tailrecursion.hoplon.summary = tailrecursion.hoplon.make_elem_ctor.call(null,"summary");
tailrecursion.hoplon.sup = tailrecursion.hoplon.make_elem_ctor.call(null,"sup");
tailrecursion.hoplon.table = tailrecursion.hoplon.make_elem_ctor.call(null,"table");
tailrecursion.hoplon.tbody = tailrecursion.hoplon.make_elem_ctor.call(null,"tbody");
tailrecursion.hoplon.td = tailrecursion.hoplon.make_elem_ctor.call(null,"td");
tailrecursion.hoplon.textarea = tailrecursion.hoplon.make_elem_ctor.call(null,"textarea");
tailrecursion.hoplon.tfoot = tailrecursion.hoplon.make_elem_ctor.call(null,"tfoot");
tailrecursion.hoplon.th = tailrecursion.hoplon.make_elem_ctor.call(null,"th");
tailrecursion.hoplon.thead = tailrecursion.hoplon.make_elem_ctor.call(null,"thead");
tailrecursion.hoplon.html_time = tailrecursion.hoplon.make_elem_ctor.call(null,"time");
tailrecursion.hoplon.title = tailrecursion.hoplon.make_elem_ctor.call(null,"title");
tailrecursion.hoplon.tr = tailrecursion.hoplon.make_elem_ctor.call(null,"tr");
tailrecursion.hoplon.track = tailrecursion.hoplon.make_elem_ctor.call(null,"track");
tailrecursion.hoplon.tt = tailrecursion.hoplon.make_elem_ctor.call(null,"tt");
tailrecursion.hoplon.u = tailrecursion.hoplon.make_elem_ctor.call(null,"u");
tailrecursion.hoplon.ul = tailrecursion.hoplon.make_elem_ctor.call(null,"ul");
tailrecursion.hoplon.html_var = tailrecursion.hoplon.make_elem_ctor.call(null,"var");
tailrecursion.hoplon.video = tailrecursion.hoplon.make_elem_ctor.call(null,"video");
tailrecursion.hoplon.wbr = tailrecursion.hoplon.make_elem_ctor.call(null,"wbr");
tailrecursion.hoplon.spliced = cljs.core.vector;
tailrecursion.hoplon.$text = (function $text(p1__12839_SHARP_){
return document.createTextNode(p1__12839_SHARP_);
});
tailrecursion.hoplon.$comment = (function $comment(p1__12840_SHARP_){
return document.createComment(p1__12840_SHARP_);
});
tailrecursion.hoplon.add_initfn_BANG_ = (function add_initfn_BANG_(f){
return jQuery(f);
});
tailrecursion.hoplon.page_load = (function page_load(){
return jQuery(document).trigger("page-load");
});
tailrecursion.hoplon.on_page_load = (function on_page_load(f){
return jQuery(document).on("page-load",f);
});
tailrecursion.hoplon.add_initfn_BANG_.call(null,(function (){
return jQuery("body").on("submit",(function (p1__12841_SHARP_){
var e = jQuery(p1__12841_SHARP_.target);
if(cljs.core.truth_((function (){var or__3764__auto__ = e.attr("action");
if(cljs.core.truth_(or__3764__auto__)){
return or__3764__auto__;
} else {
return e.attr("method");
}
})())){
return null;
} else {
return p1__12841_SHARP_.preventDefault();
}
}));
}));
tailrecursion.hoplon.by_id = (function by_id(id){
return document.getElementById(cljs.core.name.call(null,id));
});
tailrecursion.hoplon.val_id = (function val_id(id){
return tailrecursion.hoplon.do_BANG_.call(null,tailrecursion.hoplon.by_id.call(null,id),new cljs.core.Keyword(null,"value","value",305978217));
});
tailrecursion.hoplon.rel = (function rel(other,event){
var os = cljs.core.js__GT_clj.call(null,jQuery(other).offset());
var ox = os.call(null,"left");
var oy = os.call(null,"top");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(event.pageX - ox),new cljs.core.Keyword(null,"y","y",-1757859776),(event.pageY - oy)], null);
});
tailrecursion.hoplon.relx = (function relx(other,event){
return new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.rel.call(null,other,event));
});
tailrecursion.hoplon.rely = (function rely(other,event){
return new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.rel.call(null,other,event));
});
tailrecursion.hoplon.rel_event = (function rel_event(rel_to,tag,handler){
return (function (event){
(event[[cljs.core.str(tag),cljs.core.str("X")].join('')] = tailrecursion.hoplon.relx.call(null,rel_to,event));

(event[[cljs.core.str(tag),cljs.core.str("Y")].join('')] = tailrecursion.hoplon.rely.call(null,rel_to,event));

return handler.call(null,event);
});
});
tailrecursion.hoplon.text_val_BANG_ = (function() {
var text_val_BANG_ = null;
var text_val_BANG___1 = (function (e){
return e.val();
});
var text_val_BANG___2 = (function (e,v){
return e.val([cljs.core.str(v)].join(''));
});
text_val_BANG_ = function(e,v){
switch(arguments.length){
case 1:
return text_val_BANG___1.call(this,e);
case 2:
return text_val_BANG___2.call(this,e,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_val_BANG_.cljs$core$IFn$_invoke$arity$1 = text_val_BANG___1;
text_val_BANG_.cljs$core$IFn$_invoke$arity$2 = text_val_BANG___2;
return text_val_BANG_;
})()
;
tailrecursion.hoplon.check_val_BANG_ = (function() {
var check_val_BANG_ = null;
var check_val_BANG___1 = (function (e){
return e.is(":checked");
});
var check_val_BANG___2 = (function (e,v){
return e.prop("checked",cljs.core.boolean$.call(null,v));
});
check_val_BANG_ = function(e,v){
switch(arguments.length){
case 1:
return check_val_BANG___1.call(this,e);
case 2:
return check_val_BANG___2.call(this,e,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_val_BANG_.cljs$core$IFn$_invoke$arity$1 = check_val_BANG___1;
check_val_BANG_.cljs$core$IFn$_invoke$arity$2 = check_val_BANG___2;
return check_val_BANG_;
})()
;
tailrecursion.hoplon.do_BANG_ = (function (){var method_table__4661__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4662__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4663__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4664__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4665__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",44030534)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tailrecursion.hoplon","do!"),((function (method_table__4661__auto__,prefer_table__4662__auto__,method_cache__4663__auto__,cached_hierarchy__4664__auto__,hierarchy__4665__auto__){
return (function (elem,key,val){
return key;
});})(method_table__4661__auto__,prefer_table__4662__auto__,method_cache__4663__auto__,cached_hierarchy__4664__auto__,hierarchy__4665__auto__))
,new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",44030534),hierarchy__4665__auto__,method_table__4661__auto__,prefer_table__4662__auto__,method_cache__4663__auto__,cached_hierarchy__4664__auto__));
})();
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",44030534),(function (elem,key,val){
return tailrecursion.hoplon.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap.fromArray([key,val], true, false));
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"value","value",305978217),(function() { 
var G__12842__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.call(null,((cljs.core._EQ_.call(null,"checkbox",e.attr("type")))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_),e,args);
};
var G__12842 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__12843__i = 0, G__12843__a = new Array(arguments.length -  2);
while (G__12843__i < G__12843__a.length) {G__12843__a[G__12843__i] = arguments[G__12843__i + 2]; ++G__12843__i;}
  args = new cljs.core.IndexedSeq(G__12843__a,0);
} 
return G__12842__delegate.call(this,elem,_,args);};
G__12842.cljs$lang$maxFixedArity = 2;
G__12842.cljs$lang$applyTo = (function (arglist__12844){
var elem = cljs.core.first(arglist__12844);
arglist__12844 = cljs.core.next(arglist__12844);
var _ = cljs.core.first(arglist__12844);
var args = cljs.core.rest(arglist__12844);
return G__12842__delegate(elem,_,args);
});
G__12842.cljs$core$IFn$_invoke$arity$variadic = G__12842__delegate;
return G__12842;
})()
);
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"attr","attr",-604132353),(function (elem,_,kvs){
var e = jQuery(elem);
var seq__12845 = cljs.core.seq.call(null,kvs);
var chunk__12846 = null;
var count__12847 = (0);
var i__12848 = (0);
while(true){
if((i__12848 < count__12847)){
var vec__12849 = cljs.core._nth.call(null,chunk__12846,i__12848);
var k = cljs.core.nth.call(null,vec__12849,(0),null);
var v = cljs.core.nth.call(null,vec__12849,(1),null);
var k_12851__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_12851__$1);
} else {
e.attr(k_12851__$1,((cljs.core._EQ_.call(null,true,v))?k_12851__$1:v));
}

var G__12852 = seq__12845;
var G__12853 = chunk__12846;
var G__12854 = count__12847;
var G__12855 = (i__12848 + (1));
seq__12845 = G__12852;
chunk__12846 = G__12853;
count__12847 = G__12854;
i__12848 = G__12855;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12845);
if(temp__4126__auto__){
var seq__12845__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12845__$1)){
var c__4551__auto__ = cljs.core.chunk_first.call(null,seq__12845__$1);
var G__12856 = cljs.core.chunk_rest.call(null,seq__12845__$1);
var G__12857 = c__4551__auto__;
var G__12858 = cljs.core.count.call(null,c__4551__auto__);
var G__12859 = (0);
seq__12845 = G__12856;
chunk__12846 = G__12857;
count__12847 = G__12858;
i__12848 = G__12859;
continue;
} else {
var vec__12850 = cljs.core.first.call(null,seq__12845__$1);
var k = cljs.core.nth.call(null,vec__12850,(0),null);
var v = cljs.core.nth.call(null,vec__12850,(1),null);
var k_12860__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_12860__$1);
} else {
e.attr(k_12860__$1,((cljs.core._EQ_.call(null,true,v))?k_12860__$1:v));
}

var G__12861 = cljs.core.next.call(null,seq__12845__$1);
var G__12862 = null;
var G__12863 = (0);
var G__12864 = (0);
seq__12845 = G__12861;
chunk__12846 = G__12862;
count__12847 = G__12863;
i__12848 = G__12864;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"class","class",-2030961996),(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var __GT_map = ((function (elem__$1){
return (function (p1__12865_SHARP_){
return cljs.core.zipmap.call(null,p1__12865_SHARP_,cljs.core.repeat.call(null,true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_.call(null,kvs))?kvs:__GT_map.call(null,((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq.call(null,kvs))));
var seq__12866 = cljs.core.seq.call(null,clmap);
var chunk__12867 = null;
var count__12868 = (0);
var i__12869 = (0);
while(true){
if((i__12869 < count__12868)){
var vec__12870 = cljs.core._nth.call(null,chunk__12867,i__12869);
var c = cljs.core.nth.call(null,vec__12870,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__12870,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__12872 = seq__12866;
var G__12873 = chunk__12867;
var G__12874 = count__12868;
var G__12875 = (i__12869 + (1));
seq__12866 = G__12872;
chunk__12867 = G__12873;
count__12868 = G__12874;
i__12869 = G__12875;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12866);
if(temp__4126__auto__){
var seq__12866__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12866__$1)){
var c__4551__auto__ = cljs.core.chunk_first.call(null,seq__12866__$1);
var G__12876 = cljs.core.chunk_rest.call(null,seq__12866__$1);
var G__12877 = c__4551__auto__;
var G__12878 = cljs.core.count.call(null,c__4551__auto__);
var G__12879 = (0);
seq__12866 = G__12876;
chunk__12867 = G__12877;
count__12868 = G__12878;
i__12869 = G__12879;
continue;
} else {
var vec__12871 = cljs.core.first.call(null,seq__12866__$1);
var c = cljs.core.nth.call(null,vec__12871,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__12871,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__12880 = cljs.core.next.call(null,seq__12866__$1);
var G__12881 = null;
var G__12882 = (0);
var G__12883 = (0);
seq__12866 = G__12880;
chunk__12867 = G__12881;
count__12868 = G__12882;
i__12869 = G__12883;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"css","css",1135045163),(function (elem,_,kvs){
var e = jQuery(elem);
var seq__12884 = cljs.core.seq.call(null,kvs);
var chunk__12885 = null;
var count__12886 = (0);
var i__12887 = (0);
while(true){
if((i__12887 < count__12886)){
var vec__12888 = cljs.core._nth.call(null,chunk__12885,i__12887);
var k = cljs.core.nth.call(null,vec__12888,(0),null);
var v = cljs.core.nth.call(null,vec__12888,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__12890 = seq__12884;
var G__12891 = chunk__12885;
var G__12892 = count__12886;
var G__12893 = (i__12887 + (1));
seq__12884 = G__12890;
chunk__12885 = G__12891;
count__12886 = G__12892;
i__12887 = G__12893;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12884);
if(temp__4126__auto__){
var seq__12884__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12884__$1)){
var c__4551__auto__ = cljs.core.chunk_first.call(null,seq__12884__$1);
var G__12894 = cljs.core.chunk_rest.call(null,seq__12884__$1);
var G__12895 = c__4551__auto__;
var G__12896 = cljs.core.count.call(null,c__4551__auto__);
var G__12897 = (0);
seq__12884 = G__12894;
chunk__12885 = G__12895;
count__12886 = G__12896;
i__12887 = G__12897;
continue;
} else {
var vec__12889 = cljs.core.first.call(null,seq__12884__$1);
var k = cljs.core.nth.call(null,vec__12889,(0),null);
var v = cljs.core.nth.call(null,vec__12889,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__12898 = cljs.core.next.call(null,seq__12884__$1);
var G__12899 = null;
var G__12900 = (0);
var G__12901 = (0);
seq__12884 = G__12898;
chunk__12885 = G__12899;
count__12886 = G__12900;
i__12887 = G__12901;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"toggle","toggle",1291842030),(function (elem,_,v){
return jQuery(elem).toggle(cljs.core.boolean$.call(null,v));
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"slide-toggle","slide-toggle",968641513),(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().slideDown("fast");
} else {
return jQuery(elem).slideUp("fast");
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"fade-toggle","fade-toggle",-1468421852),(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().fadeIn("fast");
} else {
return jQuery(elem).fadeOut("fast");
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"focus","focus",234677911),(function (elem,_,v){
return setTimeout((function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
}),(0));
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"select","select",1147833503),(function (elem,_,___$1){
return jQuery(elem).select();
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"focus-select","focus-select",1107982934),(function (elem,_,v){
if(cljs.core.truth_(v)){
tailrecursion.hoplon.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"focus","focus",234677911),v);

return tailrecursion.hoplon.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"select","select",1147833503),v);
} else {
return null;
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"text","text",-1790561697),(function (elem,_,v){
return jQuery(elem).text([cljs.core.str(v)].join(''));
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"html","html",-998796897),(function (elem,_,v){
return jQuery(elem).html(v);
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"scroll-to","scroll-to",-34957602),(function (elem,_,v){
if(cljs.core.truth_(v)){
var body = jQuery("body,html");
var elem__$1 = jQuery(elem);
return body.animate(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scrollTop","scrollTop",-1143661921),elem__$1.offset().top], null)));
} else {
return null;
}
}));
tailrecursion.hoplon.on_BANG_ = (function (){var method_table__4661__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4662__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4663__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4664__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4665__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",44030534)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tailrecursion.hoplon","on!"),((function (method_table__4661__auto__,prefer_table__4662__auto__,method_cache__4663__auto__,cached_hierarchy__4664__auto__,hierarchy__4665__auto__){
return (function (elem,event,callback){
return event;
});})(method_table__4661__auto__,prefer_table__4662__auto__,method_cache__4663__auto__,cached_hierarchy__4664__auto__,hierarchy__4665__auto__))
,new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",44030534),hierarchy__4665__auto__,method_table__4661__auto__,prefer_table__4662__auto__,method_cache__4663__auto__,cached_hierarchy__4664__auto__));
})();
jQuery.Event.prototype.cljs$core$IDeref$ = true;

jQuery.Event.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
return jQuery(this$__$1.target).val();
});
cljs.core._add_method.call(null,tailrecursion.hoplon.on_BANG_,new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",44030534),(function (elem,event,callback){
return tailrecursion.hoplon.when_dom.call(null,elem,(function (){
return jQuery(elem).on(cljs.core.name.call(null,event),callback);
}));
}));
tailrecursion.hoplon.loop_tpl_STAR_ = (function loop_tpl_STAR_(items,reverse_QMARK_,tpl){
var pool_size = tailrecursion.javelin.cell.call(null,(0));
var items_seq = tailrecursion.javelin.formula.call(null,((function (pool_size){
return (function (G__12927,G__12928){
return G__12927.call(null,G__12928);
});})(pool_size))
).call(null,cljs.core.seq,items);
var cur_count = tailrecursion.javelin.formula.call(null,((function (pool_size,items_seq){
return (function (G__12930,G__12929){
return G__12929.call(null,G__12930);
});})(pool_size,items_seq))
).call(null,items_seq,cljs.core.count);
var show_ith_QMARK_ = ((function (pool_size,items_seq,cur_count){
return (function (p1__12902_SHARP_){
return tailrecursion.javelin.formula.call(null,((function (pool_size,items_seq,cur_count){
return (function (G__12931,G__12932){
return (G__12931 < G__12932);
});})(pool_size,items_seq,cur_count))
).call(null,p1__12902_SHARP_,cur_count);
});})(pool_size,items_seq,cur_count))
;
var ith_item = ((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (p1__12903_SHARP_){
return tailrecursion.javelin.formula.call(null,((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (G__12934,G__12935,G__12933){
return G__12933.call(null,G__12934,G__12935);
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
).call(null,items_seq,p1__12903_SHARP_,tailrecursion.hoplon.safe_nth);
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
;
var d = tailrecursion.hoplon.span.call(null);
tailrecursion.hoplon.when_dom.call(null,d,((function (d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (){
var p = d.parentNode;
p.removeChild(d);

return tailrecursion.javelin.formula.call(null,((function (p,d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (G__12949,G__12947,G__12942,G__12940,G__12941,G__12946,G__12948,G__12943,G__12945,G__12944){
if(cljs.core.truth_((G__12940 < G__12941))){
var seq__12936_12950 = cljs.core.seq.call(null,G__12942.call(null,G__12940,G__12941));
var chunk__12937_12951 = null;
var count__12938_12952 = (0);
var i__12939_12953 = (0);
while(true){
if(cljs.core.truth_((i__12939_12953 < count__12938_12952))){
var i_12954 = cljs.core._nth.call(null,chunk__12937_12951,i__12939_12953);
var e_12955 = G__12943.call(null,G__12944.call(null,i_12954)).call(null,new cljs.core.Keyword(null,"do-toggle","do-toggle",-570648102),G__12945.call(null,i_12954));
if(cljs.core.not.call(null,G__12946)){
G__12947.appendChild(e_12955);
} else {
G__12947.insertBefore(e_12955,G__12947.firstChild);
}

var G__12956 = seq__12936_12950;
var G__12957 = chunk__12937_12951;
var G__12958 = count__12938_12952;
var G__12959 = (i__12939_12953 + (1));
seq__12936_12950 = G__12956;
chunk__12937_12951 = G__12957;
count__12938_12952 = G__12958;
i__12939_12953 = G__12959;
continue;
} else {
var temp__4126__auto___12960 = cljs.core.seq.call(null,seq__12936_12950);
if(temp__4126__auto___12960){
var seq__12936_12961__$1 = temp__4126__auto___12960;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12936_12961__$1)){
var c__4551__auto___12962 = cljs.core.chunk_first.call(null,seq__12936_12961__$1);
var G__12963 = cljs.core.chunk_rest.call(null,seq__12936_12961__$1);
var G__12964 = c__4551__auto___12962;
var G__12965 = cljs.core.count.call(null,c__4551__auto___12962);
var G__12966 = (0);
seq__12936_12950 = G__12963;
chunk__12937_12951 = G__12964;
count__12938_12952 = G__12965;
i__12939_12953 = G__12966;
continue;
} else {
var i_12967 = cljs.core.first.call(null,seq__12936_12961__$1);
var e_12968 = G__12943.call(null,G__12944.call(null,i_12967)).call(null,new cljs.core.Keyword(null,"do-toggle","do-toggle",-570648102),G__12945.call(null,i_12967));
if(cljs.core.not.call(null,G__12946)){
G__12947.appendChild(e_12968);
} else {
G__12947.insertBefore(e_12968,G__12947.firstChild);
}

var G__12969 = cljs.core.next.call(null,seq__12936_12961__$1);
var G__12970 = null;
var G__12971 = (0);
var G__12972 = (0);
seq__12936_12950 = G__12969;
chunk__12937_12951 = G__12970;
count__12938_12952 = G__12971;
i__12939_12953 = G__12972;
continue;
}
} else {
}
}
break;
}

return G__12948.call(null,G__12949,G__12941);
} else {
return null;
}
});})(p,d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item))
).call(null,tailrecursion.javelin.cell.call(null,pool_size),p,cljs.core.range,pool_size,cur_count,reverse_QMARK_,cljs.core.reset_BANG_,tpl,show_ith_QMARK_,ith_item);
});})(d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item))
);

return d;
});
/**
* Manage the URL hash via Javelin cells. There are three arities:
* 
* - When called with no arguments this function returns a formula cell whose
* value is the URL hash or nil.
* 
* - When called with a single string argument, the argument is taken as the
* default value, which is returned in place of nil when there is no hash.
* 
* - When a single cell argument is provided, the URL hash is kept synced to the
* value of the cell.
* 
* - When a cell and a callback function are both provided, the URL hash is kept
* synced to the value of the cell as above, and any attempt to change the hash
* other than via the setter cell causes the callback to be called. The callback
* should be a function of one argument, the requested URL hash.
*/
tailrecursion.hoplon.route_cell = (function() {
var route_cell = null;
var route_cell__0 = (function (){
var r = (function (){var ret__5547__auto__ = tailrecursion.javelin.cell.call(null,window.location.hash);
setInterval(((function (ret__5547__auto__){
return (function (){
return cljs.core.reset_BANG_.call(null,ret__5547__auto__,window.location.hash);
});})(ret__5547__auto__))
,(100));

return tailrecursion.javelin.formula.call(null,((function (ret__5547__auto__){
return (function (G__12982){
return G__12982;
});})(ret__5547__auto__))
).call(null,ret__5547__auto__);
})();
return tailrecursion.javelin.formula.call(null,((function (r){
return (function (G__12984,G__12983){
if(cljs.core.truth_(G__12983.call(null,"",G__12984))){
return G__12984;
} else {
return null;
}
});})(r))
).call(null,r,cljs.core.not_EQ_);
});
var route_cell__1 = (function (setter_or_dfl){
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,setter_or_dfl))){
var setter__5548__auto__ = setter_or_dfl;
var callback__5549__auto__ = (function (){var or__3764__auto__ = null;
if(cljs.core.truth_(or__3764__auto__)){
return or__3764__auto__;
} else {
return cljs.core.identity;
}
})();
tailrecursion.javelin.formula.call(null,((function (setter__5548__auto__,callback__5549__auto__){
return (function (G__12986,G__12985){
return G__12985.location.hash = G__12986;
});})(setter__5548__auto__,callback__5549__auto__))
).call(null,setter__5548__auto__,window);

setInterval(((function (setter__5548__auto__,callback__5549__auto__){
return (function (){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,setter__5548__auto__),window.location.hash)){
callback__5549__auto__.call(null,window.location.hash);

return window.location.hash = cljs.core.deref.call(null,setter__5548__auto__);
} else {
return null;
}
});})(setter__5548__auto__,callback__5549__auto__))
,(100));

return setter__5548__auto__;
} else {
var r = route_cell.call(null);
return tailrecursion.javelin.formula.call(null,((function (r){
return (function (G__12987,G__12988){
var or__3764__auto__ = G__12987;
if(cljs.core.truth_(or__3764__auto__)){
return or__3764__auto__;
} else {
return G__12988;
}
});})(r))
).call(null,r,setter_or_dfl);
}
});
var route_cell__2 = (function (setter,callback){
var setter__5548__auto__ = setter;
var callback__5549__auto__ = (function (){var or__3764__auto__ = callback;
if(cljs.core.truth_(or__3764__auto__)){
return or__3764__auto__;
} else {
return cljs.core.identity;
}
})();
tailrecursion.javelin.formula.call(null,((function (setter__5548__auto__,callback__5549__auto__){
return (function (G__12990,G__12989){
return G__12989.location.hash = G__12990;
});})(setter__5548__auto__,callback__5549__auto__))
).call(null,setter__5548__auto__,window);

setInterval(((function (setter__5548__auto__,callback__5549__auto__){
return (function (){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,setter__5548__auto__),window.location.hash)){
callback__5549__auto__.call(null,window.location.hash);

return window.location.hash = cljs.core.deref.call(null,setter__5548__auto__);
} else {
return null;
}
});})(setter__5548__auto__,callback__5549__auto__))
,(100));

return setter__5548__auto__;
});
route_cell = function(setter,callback){
switch(arguments.length){
case 0:
return route_cell__0.call(this);
case 1:
return route_cell__1.call(this,setter);
case 2:
return route_cell__2.call(this,setter,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
route_cell.cljs$core$IFn$_invoke$arity$0 = route_cell__0;
route_cell.cljs$core$IFn$_invoke$arity$1 = route_cell__1;
route_cell.cljs$core$IFn$_invoke$arity$2 = route_cell__2;
return route_cell;
})()
;
