// Compiled by ClojureScript 0.0-2814 {:elide-asserts true, :static-fns true}
goog.provide('tailrecursion.hoplon');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('tailrecursion.javelin');



tailrecursion.hoplon.is_ie8 = cljs.core.not((window["Node"]));
tailrecursion.hoplon.node_QMARK_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__17887_SHARP_){
return (p1__17887_SHARP_ instanceof Node);
}):(function (p1__17888_SHARP_){
try{return p1__17888_SHARP_.nodeType;
}catch (e17889){if((e17889 instanceof Error)){
var _ = e17889;
return null;
} else {
throw e17889;

}
}}));
tailrecursion.hoplon.vector_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.vector_QMARK_:(function (p1__17890_SHARP_){
try{return cljs.core.vector_QMARK_(p1__17890_SHARP_);
}catch (e17891){if((e17891 instanceof Error)){
var _ = e17891;
return null;
} else {
throw e17891;

}
}}));
tailrecursion.hoplon.seq_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.seq_QMARK_:(function (p1__17892_SHARP_){
try{return cljs.core.seq_QMARK_(p1__17892_SHARP_);
}catch (e17893){if((e17893 instanceof Error)){
var _ = e17893;
return null;
} else {
throw e17893;

}
}}));
cljs.core.set_print_fn_BANG_((function (p1__17894_SHARP_){
if(cljs.core.truth_((function (){var and__3752__auto__ = console;
if(cljs.core.truth_(and__3752__auto__)){
return console.log;
} else {
return and__3752__auto__;
}
})())){
return console.log(p1__17894_SHARP_);
} else {
return null;
}
}));
tailrecursion.hoplon.safe_nth = (function() {
var safe_nth = null;
var safe_nth__2 = (function (coll,index){
return safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});
var safe_nth__3 = (function (coll,index,not_found){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e17899){if((e17899 instanceof Error)){
var _ = e17899;
return not_found;
} else {
throw e17899;

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
return timeout.cljs$core$IFn$_invoke$arity$2(f,(0));
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
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__17902_SHARP_){
if(cljs.core.truth_((function (){var or__3764__auto__ = (function (){var G__17908 = p1__17902_SHARP_;
return (tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(G__17908) : tailrecursion.hoplon.seq_QMARK__STAR_.call(null,G__17908));
})();
if(cljs.core.truth_(or__3764__auto__)){
return or__3764__auto__;
} else {
var G__17909 = p1__17902_SHARP_;
return (tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(G__17909) : tailrecursion.hoplon.vector_QMARK__STAR_.call(null,G__17909));
}
})())){
return unsplice(p1__17902_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17902_SHARP_], null);
}
}),cljs.core.array_seq([forms], 0));
});
tailrecursion.hoplon.when_dom = (function when_dom(this$,f){
if(!((this$ instanceof Element))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$1((function doit(){
if(cljs.core.truth_(document.documentElement.contains(this$))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$2(doit,(20));
}
}));
}
});
tailrecursion.hoplon.parse_args = (function parse_args(p__17912){
var vec__17914 = p__17912;
var head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17914,(0),null);
var tail = cljs.core.nthnext(vec__17914,(1));
var args = vec__17914;
var kw1_QMARK_ = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.first);
var mkkw = ((function (kw1_QMARK_,vec__17914,head,tail,args){
return (function (p1__17910_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(kw1_QMARK_,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),p1__17910_SHARP_)));
});})(kw1_QMARK_,vec__17914,head,tail,args))
;
var drkw = ((function (kw1_QMARK_,mkkw,vec__17914,head,tail,args){
return (function (p1__17911_SHARP_){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.array_seq([cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(kw1_QMARK_,cljs.core.partition.cljs$core$IFn$_invoke$arity$4((2),(2),cljs.core.PersistentVector.EMPTY,p1__17911_SHARP_))], 0));
});})(kw1_QMARK_,mkkw,vec__17914,head,tail,args))
;
if(cljs.core.map_QMARK_(head)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [head,tailrecursion.hoplon.unsplice(tail)], null);
} else {
if((head instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,mkkw(args)),tailrecursion.hoplon.unsplice(drkw(args))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,tailrecursion.hoplon.unsplice(args)], null);

}
}
});
tailrecursion.hoplon.add_attributes_BANG_ = (function add_attributes_BANG_(this$,attr){
var key_STAR_ = (function (p1__17916_SHARP_,p2__17915_SHARP_){
var n = (function (){var s = cljs.core.name(p2__17915_SHARP_);
var c = cljs.core.last(s);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("=",c))){
return s;
} else {
return s.slice((0),(-1));
}
})();
var p = n.substr((0),(3));
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(p2__17915_SHARP_),((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__17916_SHARP_,p)))?n:n.substr((3))));
});
var dokey = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(key_STAR_,"do-");
var onkey = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(key_STAR_,"on-");
var dos = (function (){var G__17983 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17983) : cljs.core.atom.call(null,G__17983));
})();
var ons = (function (){var G__17984 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17984) : cljs.core.atom.call(null,G__17984));
})();
var addcls = ((function (key_STAR_,dokey,onkey,dos,ons){
return (function (p1__17917_SHARP_,p2__17918_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__17917_SHARP_,/ /)),clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__17918_SHARP_,/ /)));
});})(key_STAR_,dokey,onkey,dos,ons))
;
var seq__17985_18043 = cljs.core.seq(attr);
var chunk__17986_18044 = null;
var count__17987_18045 = (0);
var i__17988_18046 = (0);
while(true){
if((i__17988_18046 < count__17987_18045)){
var vec__17989_18047 = chunk__17986_18044.cljs$core$IIndexed$_nth$arity$2(null,i__17988_18046);
var k_18048 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17989_18047,(0),null);
var v_18049 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17989_18047,(1),null);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(v_18049))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dos,cljs.core.assoc,(function (){var G__17990 = k_18048;
return (dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(G__17990) : dokey.call(null,G__17990));
})(),v_18049);
} else {
if(cljs.core.fn_QMARK_(v_18049)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ons,cljs.core.assoc,(function (){var G__17991 = k_18048;
return (onkey.cljs$core$IFn$_invoke$arity$1 ? onkey.cljs$core$IFn$_invoke$arity$1(G__17991) : onkey.call(null,G__17991));
})(),v_18049);
} else {
var G__17992_18050 = this$;
var G__17993_18051 = (function (){var G__17995 = k_18048;
return (dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(G__17995) : dokey.call(null,G__17995));
})();
var G__17994_18052 = v_18049;
(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__17992_18050,G__17993_18051,G__17994_18052) : tailrecursion.hoplon.do_BANG_.call(null,G__17992_18050,G__17993_18051,G__17994_18052));

}
}

var G__18053 = seq__17985_18043;
var G__18054 = chunk__17986_18044;
var G__18055 = count__17987_18045;
var G__18056 = (i__17988_18046 + (1));
seq__17985_18043 = G__18053;
chunk__17986_18044 = G__18054;
count__17987_18045 = G__18055;
i__17988_18046 = G__18056;
continue;
} else {
var temp__4126__auto___18057 = cljs.core.seq(seq__17985_18043);
if(temp__4126__auto___18057){
var seq__17985_18058__$1 = temp__4126__auto___18057;
if(cljs.core.chunked_seq_QMARK_(seq__17985_18058__$1)){
var c__4551__auto___18059 = cljs.core.chunk_first(seq__17985_18058__$1);
var G__18060 = cljs.core.chunk_rest(seq__17985_18058__$1);
var G__18061 = c__4551__auto___18059;
var G__18062 = cljs.core.count(c__4551__auto___18059);
var G__18063 = (0);
seq__17985_18043 = G__18060;
chunk__17986_18044 = G__18061;
count__17987_18045 = G__18062;
i__17988_18046 = G__18063;
continue;
} else {
var vec__17996_18064 = cljs.core.first(seq__17985_18058__$1);
var k_18065 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17996_18064,(0),null);
var v_18066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17996_18064,(1),null);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(v_18066))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dos,cljs.core.assoc,(function (){var G__17997 = k_18065;
return (dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(G__17997) : dokey.call(null,G__17997));
})(),v_18066);
} else {
if(cljs.core.fn_QMARK_(v_18066)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ons,cljs.core.assoc,(function (){var G__17998 = k_18065;
return (onkey.cljs$core$IFn$_invoke$arity$1 ? onkey.cljs$core$IFn$_invoke$arity$1(G__17998) : onkey.call(null,G__17998));
})(),v_18066);
} else {
var G__17999_18067 = this$;
var G__18000_18068 = (function (){var G__18002 = k_18065;
return (dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(G__18002) : dokey.call(null,G__18002));
})();
var G__18001_18069 = v_18066;
(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__17999_18067,G__18000_18068,G__18001_18069) : tailrecursion.hoplon.do_BANG_.call(null,G__17999_18067,G__18000_18068,G__18001_18069));

}
}

var G__18070 = cljs.core.next(seq__17985_18058__$1);
var G__18071 = null;
var G__18072 = (0);
var G__18073 = (0);
seq__17985_18043 = G__18070;
chunk__17986_18044 = G__18071;
count__17987_18045 = G__18072;
i__17988_18046 = G__18073;
continue;
}
} else {
}
}
break;
}

if(cljs.core.seq((function (){var G__18003 = dos;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18003) : cljs.core.deref.call(null,G__18003));
})())){
var G__18004_18074 = ((function (key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (){
var seq__18006 = cljs.core.seq((function (){var G__18010 = dos;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18010) : cljs.core.deref.call(null,G__18010));
})());
var chunk__18007 = null;
var count__18008 = (0);
var i__18009 = (0);
while(true){
if((i__18009 < count__18008)){
var vec__18011 = chunk__18007.cljs$core$IIndexed$_nth$arity$2(null,i__18009);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18011,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18011,(1),null);
var G__18012_18076 = this$;
var G__18013_18077 = k;
var G__18014_18078 = (function (){var G__18015 = v;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18015) : cljs.core.deref.call(null,G__18015));
})();
(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__18012_18076,G__18013_18077,G__18014_18078) : tailrecursion.hoplon.do_BANG_.call(null,G__18012_18076,G__18013_18077,G__18014_18078));

cljs.core.add_watch(v,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (seq__18006,chunk__18007,count__18008,i__18009,vec__18011,k,v,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__17920_SHARP_,p2__17921_SHARP_,p3__17922_SHARP_,p4__17919_SHARP_){
var G__18016 = this$;
var G__18017 = k;
var G__18018 = p4__17919_SHARP_;
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__18016,G__18017,G__18018) : tailrecursion.hoplon.do_BANG_.call(null,G__18016,G__18017,G__18018));
});})(seq__18006,chunk__18007,count__18008,i__18009,vec__18011,k,v,key_STAR_,dokey,onkey,dos,ons,addcls))
);

var G__18079 = seq__18006;
var G__18080 = chunk__18007;
var G__18081 = count__18008;
var G__18082 = (i__18009 + (1));
seq__18006 = G__18079;
chunk__18007 = G__18080;
count__18008 = G__18081;
i__18009 = G__18082;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__18006);
if(temp__4126__auto__){
var seq__18006__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18006__$1)){
var c__4551__auto__ = cljs.core.chunk_first(seq__18006__$1);
var G__18083 = cljs.core.chunk_rest(seq__18006__$1);
var G__18084 = c__4551__auto__;
var G__18085 = cljs.core.count(c__4551__auto__);
var G__18086 = (0);
seq__18006 = G__18083;
chunk__18007 = G__18084;
count__18008 = G__18085;
i__18009 = G__18086;
continue;
} else {
var vec__18019 = cljs.core.first(seq__18006__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18019,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18019,(1),null);
var G__18020_18087 = this$;
var G__18021_18088 = k;
var G__18022_18089 = (function (){var G__18023 = v;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18023) : cljs.core.deref.call(null,G__18023));
})();
(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__18020_18087,G__18021_18088,G__18022_18089) : tailrecursion.hoplon.do_BANG_.call(null,G__18020_18087,G__18021_18088,G__18022_18089));

cljs.core.add_watch(v,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (seq__18006,chunk__18007,count__18008,i__18009,vec__18019,k,v,seq__18006__$1,temp__4126__auto__,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__17920_SHARP_,p2__17921_SHARP_,p3__17922_SHARP_,p4__17919_SHARP_){
var G__18024 = this$;
var G__18025 = k;
var G__18026 = p4__17919_SHARP_;
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__18024,G__18025,G__18026) : tailrecursion.hoplon.do_BANG_.call(null,G__18024,G__18025,G__18026));
});})(seq__18006,chunk__18007,count__18008,i__18009,vec__18019,k,v,seq__18006__$1,temp__4126__auto__,key_STAR_,dokey,onkey,dos,ons,addcls))
);

var G__18090 = cljs.core.next(seq__18006__$1);
var G__18091 = null;
var G__18092 = (0);
var G__18093 = (0);
seq__18006 = G__18090;
chunk__18007 = G__18091;
count__18008 = G__18092;
i__18009 = G__18093;
continue;
}
} else {
return null;
}
}
break;
}
});})(key_STAR_,dokey,onkey,dos,ons,addcls))
;
var G__18005_18075 = (0);
setTimeout(G__18004_18074,G__18005_18075);
} else {
}

if(cljs.core.seq((function (){var G__18027 = ons;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18027) : cljs.core.deref.call(null,G__18027));
})())){
var G__18028_18094 = ((function (key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (){
var seq__18030 = cljs.core.seq((function (){var G__18034 = ons;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18034) : cljs.core.deref.call(null,G__18034));
})());
var chunk__18031 = null;
var count__18032 = (0);
var i__18033 = (0);
while(true){
if((i__18033 < count__18032)){
var vec__18035 = chunk__18031.cljs$core$IIndexed$_nth$arity$2(null,i__18033);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18035,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18035,(1),null);
var G__18036_18096 = this$;
var G__18037_18097 = k;
var G__18038_18098 = v;
(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(G__18036_18096,G__18037_18097,G__18038_18098) : tailrecursion.hoplon.on_BANG_.call(null,G__18036_18096,G__18037_18097,G__18038_18098));

var G__18099 = seq__18030;
var G__18100 = chunk__18031;
var G__18101 = count__18032;
var G__18102 = (i__18033 + (1));
seq__18030 = G__18099;
chunk__18031 = G__18100;
count__18032 = G__18101;
i__18033 = G__18102;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__18030);
if(temp__4126__auto__){
var seq__18030__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18030__$1)){
var c__4551__auto__ = cljs.core.chunk_first(seq__18030__$1);
var G__18103 = cljs.core.chunk_rest(seq__18030__$1);
var G__18104 = c__4551__auto__;
var G__18105 = cljs.core.count(c__4551__auto__);
var G__18106 = (0);
seq__18030 = G__18103;
chunk__18031 = G__18104;
count__18032 = G__18105;
i__18033 = G__18106;
continue;
} else {
var vec__18039 = cljs.core.first(seq__18030__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18039,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18039,(1),null);
var G__18040_18107 = this$;
var G__18041_18108 = k;
var G__18042_18109 = v;
(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(G__18040_18107,G__18041_18108,G__18042_18109) : tailrecursion.hoplon.on_BANG_.call(null,G__18040_18107,G__18041_18108,G__18042_18109));

var G__18110 = cljs.core.next(seq__18030__$1);
var G__18111 = null;
var G__18112 = (0);
var G__18113 = (0);
seq__18030 = G__18110;
chunk__18031 = G__18111;
count__18032 = G__18112;
i__18033 = G__18113;
continue;
}
} else {
return null;
}
}
break;
}
});})(key_STAR_,dokey,onkey,dos,ons,addcls))
;
var G__18029_18095 = (0);
setTimeout(G__18028_18094,G__18029_18095);
} else {
}

return this$;
});
tailrecursion.hoplon.append_child = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__18114_SHARP_,p2__18115_SHARP_){
return p1__18114_SHARP_.appendChild(p2__18115_SHARP_);
}):(function (p1__18116_SHARP_,p2__18117_SHARP_){
try{return p1__18116_SHARP_.appendChild(p2__18117_SHARP_);
}catch (e18118){if((e18118 instanceof Error)){
var _ = e18118;
return null;
} else {
throw e18118;

}
}}));
tailrecursion.hoplon.replace_children_BANG_ = (function replace_children_BANG_(this$,new_children){
(function (){var G__18122 = this$;
return jQuery(G__18122);
})().empty();

var G__18123 = this$;
var G__18124 = ((cljs.core.sequential_QMARK_(new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null));
return (tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2(G__18123,G__18124) : tailrecursion.hoplon.add_children_BANG_.call(null,G__18123,G__18124));
});
tailrecursion.hoplon.add_children_BANG_ = (function add_children_BANG_(this$,p__18130){
var vec__18143 = p__18130;
var child_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18143,(0),null);
var _ = cljs.core.nthnext(vec__18143,(1));
var kids = vec__18143;
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(child_cell))){
tailrecursion.hoplon.replace_children_BANG_(this$,(function (){var G__18144 = child_cell;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18144) : cljs.core.deref.call(null,G__18144));
})());

cljs.core.add_watch(child_cell,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (vec__18143,child_cell,_,kids){
return (function (p1__18126_SHARP_,p2__18127_SHARP_,p3__18128_SHARP_,p4__18125_SHARP_){
return tailrecursion.hoplon.replace_children_BANG_(this$,p4__18125_SHARP_);
});})(vec__18143,child_cell,_,kids))
);
} else {
var node_18155 = ((function (vec__18143,child_cell,_,kids){
return (function (p1__18129_SHARP_){
if(typeof p1__18129_SHARP_ === 'string'){
var G__18145 = p1__18129_SHARP_;
return (tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1(G__18145) : tailrecursion.hoplon.$text.call(null,G__18145));
} else {
if(cljs.core.truth_((function (){var G__18146 = p1__18129_SHARP_;
return (tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1(G__18146) : tailrecursion.hoplon.node_QMARK_.call(null,G__18146));
})())){
return p1__18129_SHARP_;
} else {
return null;
}
}
});})(vec__18143,child_cell,_,kids))
;
var seq__18147_18156 = cljs.core.seq(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(node_18155,tailrecursion.hoplon.unsplice(kids)));
var chunk__18148_18157 = null;
var count__18149_18158 = (0);
var i__18150_18159 = (0);
while(true){
if((i__18150_18159 < count__18149_18158)){
var x_18160 = chunk__18148_18157.cljs$core$IIndexed$_nth$arity$2(null,i__18150_18159);
var G__18151_18161 = this$;
var G__18152_18162 = x_18160;
(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(G__18151_18161,G__18152_18162) : tailrecursion.hoplon.append_child.call(null,G__18151_18161,G__18152_18162));

var G__18163 = seq__18147_18156;
var G__18164 = chunk__18148_18157;
var G__18165 = count__18149_18158;
var G__18166 = (i__18150_18159 + (1));
seq__18147_18156 = G__18163;
chunk__18148_18157 = G__18164;
count__18149_18158 = G__18165;
i__18150_18159 = G__18166;
continue;
} else {
var temp__4126__auto___18167 = cljs.core.seq(seq__18147_18156);
if(temp__4126__auto___18167){
var seq__18147_18168__$1 = temp__4126__auto___18167;
if(cljs.core.chunked_seq_QMARK_(seq__18147_18168__$1)){
var c__4551__auto___18169 = cljs.core.chunk_first(seq__18147_18168__$1);
var G__18170 = cljs.core.chunk_rest(seq__18147_18168__$1);
var G__18171 = c__4551__auto___18169;
var G__18172 = cljs.core.count(c__4551__auto___18169);
var G__18173 = (0);
seq__18147_18156 = G__18170;
chunk__18148_18157 = G__18171;
count__18149_18158 = G__18172;
i__18150_18159 = G__18173;
continue;
} else {
var x_18174 = cljs.core.first(seq__18147_18168__$1);
var G__18153_18175 = this$;
var G__18154_18176 = x_18174;
(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(G__18153_18175,G__18154_18176) : tailrecursion.hoplon.append_child.call(null,G__18153_18175,G__18154_18176));

var G__18177 = cljs.core.next(seq__18147_18168__$1);
var G__18178 = null;
var G__18179 = (0);
var G__18180 = (0);
seq__18147_18156 = G__18177;
chunk__18148_18157 = G__18178;
count__18149_18158 = G__18179;
i__18150_18159 = G__18180;
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
var G__18188__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__18182 = tailrecursion.hoplon.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18182,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18182,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__18183 = this$;
G__18183.hoplonIFn(attr,kids);

return G__18183;
} else {
var G__18184 = this$;
tailrecursion.hoplon.add_attributes_BANG_(G__18184,attr);

tailrecursion.hoplon.add_children_BANG_(G__18184,kids);

return G__18184;
}
};
var G__18188 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__18189__i = 0, G__18189__a = new Array(arguments.length -  1);
while (G__18189__i < G__18189__a.length) {G__18189__a[G__18189__i] = arguments[G__18189__i + 1]; ++G__18189__i;}
  args = new cljs.core.IndexedSeq(G__18189__a,0);
} 
return G__18188__delegate.call(this,self__,args);};
G__18188.cljs$lang$maxFixedArity = 1;
G__18188.cljs$lang$applyTo = (function (arglist__18190){
var self__ = cljs.core.first(arglist__18190);
var args = cljs.core.rest(arglist__18190);
return G__18188__delegate(self__,args);
});
G__18188.cljs$core$IFn$_invoke$arity$variadic = G__18188__delegate;
return G__18188;
})()
;

Element.prototype.apply = (function (self__,args18181){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args18181)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__18191__delegate = function (args){
var this$ = this;
var vec__18185 = tailrecursion.hoplon.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18185,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18185,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__18186 = this$;
G__18186.hoplonIFn(attr,kids);

return G__18186;
} else {
var G__18187 = this$;
tailrecursion.hoplon.add_attributes_BANG_(G__18187,attr);

tailrecursion.hoplon.add_children_BANG_(G__18187,kids);

return G__18187;
}
};
var G__18191 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18192__i = 0, G__18192__a = new Array(arguments.length -  0);
while (G__18192__i < G__18192__a.length) {G__18192__a[G__18192__i] = arguments[G__18192__i + 0]; ++G__18192__i;}
  args = new cljs.core.IndexedSeq(G__18192__a,0);
} 
return G__18191__delegate.call(this,args);};
G__18191.cljs$lang$maxFixedArity = 0;
G__18191.cljs$lang$applyTo = (function (arglist__18193){
var args = cljs.core.seq(arglist__18193);
return G__18191__delegate(args);
});
G__18191.cljs$core$IFn$_invoke$arity$variadic = G__18191__delegate;
return G__18191;
})()
;

Element.prototype.cljs$core$IPrintWithWriter$ = true;

Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<Element: ",this$__$1.tagName,">"], 0));
});
tailrecursion.hoplon.make_singleton_ctor = (function make_singleton_ctor(tag){
return (function() { 
var G__18206__delegate = function (args){
var vec__18200 = tailrecursion.hoplon.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18200,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18200,(1),null);
var elem = (document.getElementsByTagName(tag)[(0)]);
tailrecursion.hoplon.add_attributes_BANG_(elem,attrs);

(function (){var G__18201 = elem;
return jQuery(G__18201);
})().empty();

var seq__18202 = cljs.core.seq(kids);
var chunk__18203 = null;
var count__18204 = (0);
var i__18205 = (0);
while(true){
if((i__18205 < count__18204)){
var k = chunk__18203.cljs$core$IIndexed$_nth$arity$2(null,i__18205);
elem.appendChild(k);

var G__18207 = seq__18202;
var G__18208 = chunk__18203;
var G__18209 = count__18204;
var G__18210 = (i__18205 + (1));
seq__18202 = G__18207;
chunk__18203 = G__18208;
count__18204 = G__18209;
i__18205 = G__18210;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__18202);
if(temp__4126__auto__){
var seq__18202__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18202__$1)){
var c__4551__auto__ = cljs.core.chunk_first(seq__18202__$1);
var G__18211 = cljs.core.chunk_rest(seq__18202__$1);
var G__18212 = c__4551__auto__;
var G__18213 = cljs.core.count(c__4551__auto__);
var G__18214 = (0);
seq__18202 = G__18211;
chunk__18203 = G__18212;
count__18204 = G__18213;
i__18205 = G__18214;
continue;
} else {
var k = cljs.core.first(seq__18202__$1);
elem.appendChild(k);

var G__18215 = cljs.core.next(seq__18202__$1);
var G__18216 = null;
var G__18217 = (0);
var G__18218 = (0);
seq__18202 = G__18215;
chunk__18203 = G__18216;
count__18204 = G__18217;
i__18205 = G__18218;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__18206 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18219__i = 0, G__18219__a = new Array(arguments.length -  0);
while (G__18219__i < G__18219__a.length) {G__18219__a[G__18219__i] = arguments[G__18219__i + 0]; ++G__18219__i;}
  args = new cljs.core.IndexedSeq(G__18219__a,0);
} 
return G__18206__delegate.call(this,args);};
G__18206.cljs$lang$maxFixedArity = 0;
G__18206.cljs$lang$applyTo = (function (arglist__18220){
var args = cljs.core.seq(arglist__18220);
return G__18206__delegate(args);
});
G__18206.cljs$core$IFn$_invoke$arity$variadic = G__18206__delegate;
return G__18206;
})()
;
});
tailrecursion.hoplon.make_elem_ctor = (function make_elem_ctor(tag){
return (function() { 
var G__18221__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(document.createElement(tag),args);
};
var G__18221 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18222__i = 0, G__18222__a = new Array(arguments.length -  0);
while (G__18222__i < G__18222__a.length) {G__18222__a[G__18222__i] = arguments[G__18222__i + 0]; ++G__18222__i;}
  args = new cljs.core.IndexedSeq(G__18222__a,0);
} 
return G__18221__delegate.call(this,args);};
G__18221.cljs$lang$maxFixedArity = 0;
G__18221.cljs$lang$applyTo = (function (arglist__18223){
var args = cljs.core.seq(arglist__18223);
return G__18221__delegate(args);
});
G__18221.cljs$core$IFn$_invoke$arity$variadic = G__18221__delegate;
return G__18221;
})()
;
});
/**
* @param {...*} var_args
*/
tailrecursion.hoplon.html = (function() { 
var html__delegate = function (args){
var vec__18225 = tailrecursion.hoplon.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18225,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18225,(1),null);
return tailrecursion.hoplon.add_attributes_BANG_((document.getElementsByTagName("html")[(0)]),attrs);
};
var html = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18226__i = 0, G__18226__a = new Array(arguments.length -  0);
while (G__18226__i < G__18226__a.length) {G__18226__a[G__18226__i] = arguments[G__18226__i + 0]; ++G__18226__i;}
  args = new cljs.core.IndexedSeq(G__18226__a,0);
} 
return html__delegate.call(this,args);};
html.cljs$lang$maxFixedArity = 0;
html.cljs$lang$applyTo = (function (arglist__18227){
var args = cljs.core.seq(arglist__18227);
return html__delegate(args);
});
html.cljs$core$IFn$_invoke$arity$variadic = html__delegate;
return html;
})()
;
tailrecursion.hoplon.body = tailrecursion.hoplon.make_singleton_ctor("body");
tailrecursion.hoplon.head = tailrecursion.hoplon.make_singleton_ctor("head");
tailrecursion.hoplon.a = tailrecursion.hoplon.make_elem_ctor("a");
tailrecursion.hoplon.abbr = tailrecursion.hoplon.make_elem_ctor("abbr");
tailrecursion.hoplon.acronym = tailrecursion.hoplon.make_elem_ctor("acronym");
tailrecursion.hoplon.address = tailrecursion.hoplon.make_elem_ctor("address");
tailrecursion.hoplon.applet = tailrecursion.hoplon.make_elem_ctor("applet");
tailrecursion.hoplon.area = tailrecursion.hoplon.make_elem_ctor("area");
tailrecursion.hoplon.article = tailrecursion.hoplon.make_elem_ctor("article");
tailrecursion.hoplon.aside = tailrecursion.hoplon.make_elem_ctor("aside");
tailrecursion.hoplon.audio = tailrecursion.hoplon.make_elem_ctor("audio");
tailrecursion.hoplon.b = tailrecursion.hoplon.make_elem_ctor("b");
tailrecursion.hoplon.base = tailrecursion.hoplon.make_elem_ctor("base");
tailrecursion.hoplon.basefont = tailrecursion.hoplon.make_elem_ctor("basefont");
tailrecursion.hoplon.bdi = tailrecursion.hoplon.make_elem_ctor("bdi");
tailrecursion.hoplon.bdo = tailrecursion.hoplon.make_elem_ctor("bdo");
tailrecursion.hoplon.big = tailrecursion.hoplon.make_elem_ctor("big");
tailrecursion.hoplon.blockquote = tailrecursion.hoplon.make_elem_ctor("blockquote");
tailrecursion.hoplon.br = tailrecursion.hoplon.make_elem_ctor("br");
tailrecursion.hoplon.button = tailrecursion.hoplon.make_elem_ctor("button");
tailrecursion.hoplon.canvas = tailrecursion.hoplon.make_elem_ctor("canvas");
tailrecursion.hoplon.caption = tailrecursion.hoplon.make_elem_ctor("caption");
tailrecursion.hoplon.center = tailrecursion.hoplon.make_elem_ctor("center");
tailrecursion.hoplon.cite = tailrecursion.hoplon.make_elem_ctor("cite");
tailrecursion.hoplon.code = tailrecursion.hoplon.make_elem_ctor("code");
tailrecursion.hoplon.col = tailrecursion.hoplon.make_elem_ctor("col");
tailrecursion.hoplon.colgroup = tailrecursion.hoplon.make_elem_ctor("colgroup");
tailrecursion.hoplon.command = tailrecursion.hoplon.make_elem_ctor("command");
tailrecursion.hoplon.data = tailrecursion.hoplon.make_elem_ctor("data");
tailrecursion.hoplon.datalist = tailrecursion.hoplon.make_elem_ctor("datalist");
tailrecursion.hoplon.dd = tailrecursion.hoplon.make_elem_ctor("dd");
tailrecursion.hoplon.del = tailrecursion.hoplon.make_elem_ctor("del");
tailrecursion.hoplon.details = tailrecursion.hoplon.make_elem_ctor("details");
tailrecursion.hoplon.dfn = tailrecursion.hoplon.make_elem_ctor("dfn");
tailrecursion.hoplon.dir = tailrecursion.hoplon.make_elem_ctor("dir");
tailrecursion.hoplon.div = tailrecursion.hoplon.make_elem_ctor("div");
tailrecursion.hoplon.dl = tailrecursion.hoplon.make_elem_ctor("dl");
tailrecursion.hoplon.dt = tailrecursion.hoplon.make_elem_ctor("dt");
tailrecursion.hoplon.em = tailrecursion.hoplon.make_elem_ctor("em");
tailrecursion.hoplon.embed = tailrecursion.hoplon.make_elem_ctor("embed");
tailrecursion.hoplon.eventsource = tailrecursion.hoplon.make_elem_ctor("eventsource");
tailrecursion.hoplon.fieldset = tailrecursion.hoplon.make_elem_ctor("fieldset");
tailrecursion.hoplon.figcaption = tailrecursion.hoplon.make_elem_ctor("figcaption");
tailrecursion.hoplon.figure = tailrecursion.hoplon.make_elem_ctor("figure");
tailrecursion.hoplon.font = tailrecursion.hoplon.make_elem_ctor("font");
tailrecursion.hoplon.footer = tailrecursion.hoplon.make_elem_ctor("footer");
tailrecursion.hoplon.form = tailrecursion.hoplon.make_elem_ctor("form");
tailrecursion.hoplon.frame = tailrecursion.hoplon.make_elem_ctor("frame");
tailrecursion.hoplon.frameset = tailrecursion.hoplon.make_elem_ctor("frameset");
tailrecursion.hoplon.h1 = tailrecursion.hoplon.make_elem_ctor("h1");
tailrecursion.hoplon.h2 = tailrecursion.hoplon.make_elem_ctor("h2");
tailrecursion.hoplon.h3 = tailrecursion.hoplon.make_elem_ctor("h3");
tailrecursion.hoplon.h4 = tailrecursion.hoplon.make_elem_ctor("h4");
tailrecursion.hoplon.h5 = tailrecursion.hoplon.make_elem_ctor("h5");
tailrecursion.hoplon.h6 = tailrecursion.hoplon.make_elem_ctor("h6");
tailrecursion.hoplon.header = tailrecursion.hoplon.make_elem_ctor("header");
tailrecursion.hoplon.hgroup = tailrecursion.hoplon.make_elem_ctor("hgroup");
tailrecursion.hoplon.hr = tailrecursion.hoplon.make_elem_ctor("hr");
tailrecursion.hoplon.i = tailrecursion.hoplon.make_elem_ctor("i");
tailrecursion.hoplon.iframe = tailrecursion.hoplon.make_elem_ctor("iframe");
tailrecursion.hoplon.img = tailrecursion.hoplon.make_elem_ctor("img");
tailrecursion.hoplon.input = tailrecursion.hoplon.make_elem_ctor("input");
tailrecursion.hoplon.ins = tailrecursion.hoplon.make_elem_ctor("ins");
tailrecursion.hoplon.isindex = tailrecursion.hoplon.make_elem_ctor("isindex");
tailrecursion.hoplon.kbd = tailrecursion.hoplon.make_elem_ctor("kbd");
tailrecursion.hoplon.keygen = tailrecursion.hoplon.make_elem_ctor("keygen");
tailrecursion.hoplon.label = tailrecursion.hoplon.make_elem_ctor("label");
tailrecursion.hoplon.legend = tailrecursion.hoplon.make_elem_ctor("legend");
tailrecursion.hoplon.li = tailrecursion.hoplon.make_elem_ctor("li");
tailrecursion.hoplon.link = tailrecursion.hoplon.make_elem_ctor("link");
tailrecursion.hoplon.html_map = tailrecursion.hoplon.make_elem_ctor("map");
tailrecursion.hoplon.main = tailrecursion.hoplon.make_elem_ctor("main");
tailrecursion.hoplon.mark = tailrecursion.hoplon.make_elem_ctor("mark");
tailrecursion.hoplon.menu = tailrecursion.hoplon.make_elem_ctor("menu");
tailrecursion.hoplon.html_meta = tailrecursion.hoplon.make_elem_ctor("meta");
tailrecursion.hoplon.meter = tailrecursion.hoplon.make_elem_ctor("meter");
tailrecursion.hoplon.nav = tailrecursion.hoplon.make_elem_ctor("nav");
tailrecursion.hoplon.noframes = tailrecursion.hoplon.make_elem_ctor("noframes");
tailrecursion.hoplon.noscript = tailrecursion.hoplon.make_elem_ctor("noscript");
tailrecursion.hoplon.object = tailrecursion.hoplon.make_elem_ctor("object");
tailrecursion.hoplon.ol = tailrecursion.hoplon.make_elem_ctor("ol");
tailrecursion.hoplon.optgroup = tailrecursion.hoplon.make_elem_ctor("optgroup");
tailrecursion.hoplon.option = tailrecursion.hoplon.make_elem_ctor("option");
tailrecursion.hoplon.output = tailrecursion.hoplon.make_elem_ctor("output");
tailrecursion.hoplon.p = tailrecursion.hoplon.make_elem_ctor("p");
tailrecursion.hoplon.param = tailrecursion.hoplon.make_elem_ctor("param");
tailrecursion.hoplon.pre = tailrecursion.hoplon.make_elem_ctor("pre");
tailrecursion.hoplon.progress = tailrecursion.hoplon.make_elem_ctor("progress");
tailrecursion.hoplon.q = tailrecursion.hoplon.make_elem_ctor("q");
tailrecursion.hoplon.rp = tailrecursion.hoplon.make_elem_ctor("rp");
tailrecursion.hoplon.rt = tailrecursion.hoplon.make_elem_ctor("rt");
tailrecursion.hoplon.ruby = tailrecursion.hoplon.make_elem_ctor("ruby");
tailrecursion.hoplon.s = tailrecursion.hoplon.make_elem_ctor("s");
tailrecursion.hoplon.samp = tailrecursion.hoplon.make_elem_ctor("samp");
tailrecursion.hoplon.script = tailrecursion.hoplon.make_elem_ctor("script");
tailrecursion.hoplon.section = tailrecursion.hoplon.make_elem_ctor("section");
tailrecursion.hoplon.select = tailrecursion.hoplon.make_elem_ctor("select");
tailrecursion.hoplon.small = tailrecursion.hoplon.make_elem_ctor("small");
tailrecursion.hoplon.source = tailrecursion.hoplon.make_elem_ctor("source");
tailrecursion.hoplon.span = tailrecursion.hoplon.make_elem_ctor("span");
tailrecursion.hoplon.strike = tailrecursion.hoplon.make_elem_ctor("strike");
tailrecursion.hoplon.strong = tailrecursion.hoplon.make_elem_ctor("strong");
tailrecursion.hoplon.style = tailrecursion.hoplon.make_elem_ctor("style");
tailrecursion.hoplon.sub = tailrecursion.hoplon.make_elem_ctor("sub");
tailrecursion.hoplon.summary = tailrecursion.hoplon.make_elem_ctor("summary");
tailrecursion.hoplon.sup = tailrecursion.hoplon.make_elem_ctor("sup");
tailrecursion.hoplon.table = tailrecursion.hoplon.make_elem_ctor("table");
tailrecursion.hoplon.tbody = tailrecursion.hoplon.make_elem_ctor("tbody");
tailrecursion.hoplon.td = tailrecursion.hoplon.make_elem_ctor("td");
tailrecursion.hoplon.textarea = tailrecursion.hoplon.make_elem_ctor("textarea");
tailrecursion.hoplon.tfoot = tailrecursion.hoplon.make_elem_ctor("tfoot");
tailrecursion.hoplon.th = tailrecursion.hoplon.make_elem_ctor("th");
tailrecursion.hoplon.thead = tailrecursion.hoplon.make_elem_ctor("thead");
tailrecursion.hoplon.html_time = tailrecursion.hoplon.make_elem_ctor("time");
tailrecursion.hoplon.title = tailrecursion.hoplon.make_elem_ctor("title");
tailrecursion.hoplon.tr = tailrecursion.hoplon.make_elem_ctor("tr");
tailrecursion.hoplon.track = tailrecursion.hoplon.make_elem_ctor("track");
tailrecursion.hoplon.tt = tailrecursion.hoplon.make_elem_ctor("tt");
tailrecursion.hoplon.u = tailrecursion.hoplon.make_elem_ctor("u");
tailrecursion.hoplon.ul = tailrecursion.hoplon.make_elem_ctor("ul");
tailrecursion.hoplon.html_var = tailrecursion.hoplon.make_elem_ctor("var");
tailrecursion.hoplon.video = tailrecursion.hoplon.make_elem_ctor("video");
tailrecursion.hoplon.wbr = tailrecursion.hoplon.make_elem_ctor("wbr");
tailrecursion.hoplon.spliced = cljs.core.vector;
tailrecursion.hoplon.$text = (function $text(p1__18228_SHARP_){
return document.createTextNode(p1__18228_SHARP_);
});
tailrecursion.hoplon.$comment = (function $comment(p1__18229_SHARP_){
return document.createComment(p1__18229_SHARP_);
});
tailrecursion.hoplon.add_initfn_BANG_ = (function add_initfn_BANG_(f){
var G__18231 = f;
return jQuery(G__18231);
});
tailrecursion.hoplon.page_load = (function page_load(){
return (function (){var G__18233 = document;
return jQuery(G__18233);
})().trigger("page-load");
});
tailrecursion.hoplon.on_page_load = (function on_page_load(f){
return (function (){var G__18235 = document;
return jQuery(G__18235);
})().on("page-load",f);
});
tailrecursion.hoplon.add_initfn_BANG_((function (){
return (function (){var G__18237 = "body";
return jQuery(G__18237);
})().on("submit",(function (p1__18236_SHARP_){
var e = (function (){var G__18238 = p1__18236_SHARP_.target;
return jQuery(G__18238);
})();
if(cljs.core.truth_((function (){var or__3764__auto__ = e.attr("action");
if(cljs.core.truth_(or__3764__auto__)){
return or__3764__auto__;
} else {
return e.attr("method");
}
})())){
return null;
} else {
return p1__18236_SHARP_.preventDefault();
}
}));
}));
tailrecursion.hoplon.by_id = (function by_id(id){
return document.getElementById(cljs.core.name(id));
});
tailrecursion.hoplon.val_id = (function val_id(id){
var G__18241 = tailrecursion.hoplon.by_id(id);
var G__18242 = cljs.core.constant$keyword$25;
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$2(G__18241,G__18242) : tailrecursion.hoplon.do_BANG_.call(null,G__18241,G__18242));
});
tailrecursion.hoplon.rel = (function rel(other,event){
var os = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1((function (){var G__18246 = other;
return jQuery(G__18246);
})().offset());
var ox = (function (){var G__18247 = "left";
return (os.cljs$core$IFn$_invoke$arity$1 ? os.cljs$core$IFn$_invoke$arity$1(G__18247) : os.call(null,G__18247));
})();
var oy = (function (){var G__18248 = "top";
return (os.cljs$core$IFn$_invoke$arity$1 ? os.cljs$core$IFn$_invoke$arity$1(G__18248) : os.call(null,G__18248));
})();
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$26,(event.pageX - ox),cljs.core.constant$keyword$27,(event.pageY - oy)], null);
});
tailrecursion.hoplon.relx = (function relx(other,event){
return cljs.core.constant$keyword$26.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.rel(other,event));
});
tailrecursion.hoplon.rely = (function rely(other,event){
return cljs.core.constant$keyword$27.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.rel(other,event));
});
tailrecursion.hoplon.rel_event = (function rel_event(rel_to,tag,handler){
return (function (event){
(event[[cljs.core.str(tag),cljs.core.str("X")].join('')] = tailrecursion.hoplon.relx(rel_to,event));

(event[[cljs.core.str(tag),cljs.core.str("Y")].join('')] = tailrecursion.hoplon.rely(rel_to,event));

var G__18250 = event;
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__18250) : handler.call(null,G__18250));
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
return e.prop("checked",cljs.core.boolean$(v));
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
tailrecursion.hoplon.do_BANG_ = (function (){var method_table__4661__auto__ = (function (){var G__18251 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18251) : cljs.core.atom.call(null,G__18251));
})();
var prefer_table__4662__auto__ = (function (){var G__18252 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18252) : cljs.core.atom.call(null,G__18252));
})();
var method_cache__4663__auto__ = (function (){var G__18253 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18253) : cljs.core.atom.call(null,G__18253));
})();
var cached_hierarchy__4664__auto__ = (function (){var G__18254 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18254) : cljs.core.atom.call(null,G__18254));
})();
var hierarchy__4665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$7,cljs.core.constant$keyword$28], null),cljs.core.constant$keyword$29,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tailrecursion.hoplon","do!"),((function (method_table__4661__auto__,prefer_table__4662__auto__,method_cache__4663__auto__,cached_hierarchy__4664__auto__,hierarchy__4665__auto__){
return (function (elem,key,val){
return key;
});})(method_table__4661__auto__,prefer_table__4662__auto__,method_cache__4663__auto__,cached_hierarchy__4664__auto__,hierarchy__4665__auto__))
,cljs.core.constant$keyword$28,hierarchy__4665__auto__,method_table__4661__auto__,prefer_table__4662__auto__,method_cache__4663__auto__,cached_hierarchy__4664__auto__));
})();
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$28,(function (elem,key,val){
var G__18255 = elem;
var G__18256 = cljs.core.constant$keyword$30;
var G__18257 = new cljs.core.PersistentArrayMap.fromArray([key,val], true, false);
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__18255,G__18256,G__18257) : tailrecursion.hoplon.do_BANG_.call(null,G__18255,G__18256,G__18257));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$25,(function() { 
var G__18259__delegate = function (elem,_,args){
var e = (function (){var G__18258 = elem;
return jQuery(G__18258);
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_),e,args);
};
var G__18259 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__18260__i = 0, G__18260__a = new Array(arguments.length -  2);
while (G__18260__i < G__18260__a.length) {G__18260__a[G__18260__i] = arguments[G__18260__i + 2]; ++G__18260__i;}
  args = new cljs.core.IndexedSeq(G__18260__a,0);
} 
return G__18259__delegate.call(this,elem,_,args);};
G__18259.cljs$lang$maxFixedArity = 2;
G__18259.cljs$lang$applyTo = (function (arglist__18261){
var elem = cljs.core.first(arglist__18261);
arglist__18261 = cljs.core.next(arglist__18261);
var _ = cljs.core.first(arglist__18261);
var args = cljs.core.rest(arglist__18261);
return G__18259__delegate(elem,_,args);
});
G__18259.cljs$core$IFn$_invoke$arity$variadic = G__18259__delegate;
return G__18259;
})()
);
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$30,(function (elem,_,kvs){
var e = (function (){var G__18262 = elem;
return jQuery(G__18262);
})();
var seq__18263 = cljs.core.seq(kvs);
var chunk__18264 = null;
var count__18265 = (0);
var i__18266 = (0);
while(true){
if((i__18266 < count__18265)){
var vec__18267 = chunk__18264.cljs$core$IIndexed$_nth$arity$2(null,i__18266);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18267,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18267,(1),null);
var k_18269__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_18269__$1);
} else {
e.attr(k_18269__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_18269__$1:v));
}

var G__18270 = seq__18263;
var G__18271 = chunk__18264;
var G__18272 = count__18265;
var G__18273 = (i__18266 + (1));
seq__18263 = G__18270;
chunk__18264 = G__18271;
count__18265 = G__18272;
i__18266 = G__18273;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__18263);
if(temp__4126__auto__){
var seq__18263__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18263__$1)){
var c__4551__auto__ = cljs.core.chunk_first(seq__18263__$1);
var G__18274 = cljs.core.chunk_rest(seq__18263__$1);
var G__18275 = c__4551__auto__;
var G__18276 = cljs.core.count(c__4551__auto__);
var G__18277 = (0);
seq__18263 = G__18274;
chunk__18264 = G__18275;
count__18265 = G__18276;
i__18266 = G__18277;
continue;
} else {
var vec__18268 = cljs.core.first(seq__18263__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18268,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18268,(1),null);
var k_18278__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_18278__$1);
} else {
e.attr(k_18278__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_18278__$1:v));
}

var G__18279 = cljs.core.next(seq__18263__$1);
var G__18280 = null;
var G__18281 = (0);
var G__18282 = (0);
seq__18263 = G__18279;
chunk__18264 = G__18280;
count__18265 = G__18281;
i__18266 = G__18282;
continue;
}
} else {
return null;
}
}
break;
}
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$31,(function (elem,_,kvs){
var elem__$1 = (function (){var G__18284 = elem;
return jQuery(G__18284);
})();
var __GT_map = ((function (elem__$1){
return (function (p1__18283_SHARP_){
return cljs.core.zipmap(p1__18283_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_(kvs))?kvs:__GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs))));
var seq__18285 = cljs.core.seq(clmap);
var chunk__18286 = null;
var count__18287 = (0);
var i__18288 = (0);
while(true){
if((i__18288 < count__18287)){
var vec__18289 = chunk__18286.cljs$core$IIndexed$_nth$arity$2(null,i__18288);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18289,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18289,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__18291 = seq__18285;
var G__18292 = chunk__18286;
var G__18293 = count__18287;
var G__18294 = (i__18288 + (1));
seq__18285 = G__18291;
chunk__18286 = G__18292;
count__18287 = G__18293;
i__18288 = G__18294;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__18285);
if(temp__4126__auto__){
var seq__18285__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18285__$1)){
var c__4551__auto__ = cljs.core.chunk_first(seq__18285__$1);
var G__18295 = cljs.core.chunk_rest(seq__18285__$1);
var G__18296 = c__4551__auto__;
var G__18297 = cljs.core.count(c__4551__auto__);
var G__18298 = (0);
seq__18285 = G__18295;
chunk__18286 = G__18296;
count__18287 = G__18297;
i__18288 = G__18298;
continue;
} else {
var vec__18290 = cljs.core.first(seq__18285__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18290,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18290,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__18299 = cljs.core.next(seq__18285__$1);
var G__18300 = null;
var G__18301 = (0);
var G__18302 = (0);
seq__18285 = G__18299;
chunk__18286 = G__18300;
count__18287 = G__18301;
i__18288 = G__18302;
continue;
}
} else {
return null;
}
}
break;
}
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$32,(function (elem,_,kvs){
var e = (function (){var G__18303 = elem;
return jQuery(G__18303);
})();
var seq__18304 = cljs.core.seq(kvs);
var chunk__18305 = null;
var count__18306 = (0);
var i__18307 = (0);
while(true){
if((i__18307 < count__18306)){
var vec__18308 = chunk__18305.cljs$core$IIndexed$_nth$arity$2(null,i__18307);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18308,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18308,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__18310 = seq__18304;
var G__18311 = chunk__18305;
var G__18312 = count__18306;
var G__18313 = (i__18307 + (1));
seq__18304 = G__18310;
chunk__18305 = G__18311;
count__18306 = G__18312;
i__18307 = G__18313;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__18304);
if(temp__4126__auto__){
var seq__18304__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18304__$1)){
var c__4551__auto__ = cljs.core.chunk_first(seq__18304__$1);
var G__18314 = cljs.core.chunk_rest(seq__18304__$1);
var G__18315 = c__4551__auto__;
var G__18316 = cljs.core.count(c__4551__auto__);
var G__18317 = (0);
seq__18304 = G__18314;
chunk__18305 = G__18315;
count__18306 = G__18316;
i__18307 = G__18317;
continue;
} else {
var vec__18309 = cljs.core.first(seq__18304__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18309,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18309,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__18318 = cljs.core.next(seq__18304__$1);
var G__18319 = null;
var G__18320 = (0);
var G__18321 = (0);
seq__18304 = G__18318;
chunk__18305 = G__18319;
count__18306 = G__18320;
i__18307 = G__18321;
continue;
}
} else {
return null;
}
}
break;
}
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$33,(function (elem,_,v){
return (function (){var G__18322 = elem;
return jQuery(G__18322);
})().toggle(cljs.core.boolean$(v));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$34,(function (elem,_,v){
if(cljs.core.truth_(v)){
return (function (){var G__18323 = elem;
return jQuery(G__18323);
})().hide().slideDown("fast");
} else {
return (function (){var G__18324 = elem;
return jQuery(G__18324);
})().slideUp("fast");
}
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$35,(function (elem,_,v){
if(cljs.core.truth_(v)){
return (function (){var G__18325 = elem;
return jQuery(G__18325);
})().hide().fadeIn("fast");
} else {
return (function (){var G__18326 = elem;
return jQuery(G__18326);
})().fadeOut("fast");
}
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$36,(function (elem,_,v){
var G__18327 = (function (){
if(cljs.core.truth_(v)){
return (function (){var G__18329 = elem;
return jQuery(G__18329);
})().focus();
} else {
return (function (){var G__18330 = elem;
return jQuery(G__18330);
})().focusout();
}
});
var G__18328 = (0);
return setTimeout(G__18327,G__18328);
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$37,(function (elem,_,___$1){
return (function (){var G__18331 = elem;
return jQuery(G__18331);
})().select();
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$38,(function (elem,_,v){
if(cljs.core.truth_(v)){
var G__18332_18338 = elem;
var G__18333_18339 = cljs.core.constant$keyword$36;
var G__18334_18340 = v;
(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__18332_18338,G__18333_18339,G__18334_18340) : tailrecursion.hoplon.do_BANG_.call(null,G__18332_18338,G__18333_18339,G__18334_18340));

var G__18335 = elem;
var G__18336 = cljs.core.constant$keyword$37;
var G__18337 = v;
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__18335,G__18336,G__18337) : tailrecursion.hoplon.do_BANG_.call(null,G__18335,G__18336,G__18337));
} else {
return null;
}
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$39,(function (elem,_,v){
return (function (){var G__18341 = elem;
return jQuery(G__18341);
})().text([cljs.core.str(v)].join(''));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$40,(function (elem,_,v){
return (function (){var G__18342 = elem;
return jQuery(G__18342);
})().html(v);
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$41,(function (elem,_,v){
if(cljs.core.truth_(v)){
var body = (function (){var G__18343 = "body,html";
return jQuery(G__18343);
})();
var elem__$1 = (function (){var G__18344 = elem;
return jQuery(G__18344);
})();
return body.animate(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$42,elem__$1.offset().top], null)));
} else {
return null;
}
}));
tailrecursion.hoplon.on_BANG_ = (function (){var method_table__4661__auto__ = (function (){var G__18345 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18345) : cljs.core.atom.call(null,G__18345));
})();
var prefer_table__4662__auto__ = (function (){var G__18346 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18346) : cljs.core.atom.call(null,G__18346));
})();
var method_cache__4663__auto__ = (function (){var G__18347 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18347) : cljs.core.atom.call(null,G__18347));
})();
var cached_hierarchy__4664__auto__ = (function (){var G__18348 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18348) : cljs.core.atom.call(null,G__18348));
})();
var hierarchy__4665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$7,cljs.core.constant$keyword$28], null),cljs.core.constant$keyword$29,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tailrecursion.hoplon","on!"),((function (method_table__4661__auto__,prefer_table__4662__auto__,method_cache__4663__auto__,cached_hierarchy__4664__auto__,hierarchy__4665__auto__){
return (function (elem,event,callback){
return event;
});})(method_table__4661__auto__,prefer_table__4662__auto__,method_cache__4663__auto__,cached_hierarchy__4664__auto__,hierarchy__4665__auto__))
,cljs.core.constant$keyword$28,hierarchy__4665__auto__,method_table__4661__auto__,prefer_table__4662__auto__,method_cache__4663__auto__,cached_hierarchy__4664__auto__));
})();
jQuery.Event.prototype.cljs$core$IDeref$ = true;

jQuery.Event.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
return (function (){var G__18349 = this$__$1.target;
return jQuery(G__18349);
})().val();
});
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$28,(function (elem,event,callback){
return tailrecursion.hoplon.when_dom(elem,(function (){
return (function (){var G__18350 = elem;
return jQuery(G__18350);
})().on(cljs.core.name(event),callback);
}));
}));
tailrecursion.hoplon.loop_tpl_STAR_ = (function loop_tpl_STAR_(items,reverse_QMARK_,tpl){
var pool_size = tailrecursion.javelin.cell((0));
var items_seq = tailrecursion.javelin.formula(((function (pool_size){
return (function (G__18390,G__18391){
var G__18392 = G__18391;
return (G__18390.cljs$core$IFn$_invoke$arity$1 ? G__18390.cljs$core$IFn$_invoke$arity$1(G__18392) : G__18390.call(null,G__18392));
});})(pool_size))
).call(null,cljs.core.seq,items);
var cur_count = tailrecursion.javelin.formula(((function (pool_size,items_seq){
return (function (G__18394,G__18393){
var G__18395 = G__18394;
return (G__18393.cljs$core$IFn$_invoke$arity$1 ? G__18393.cljs$core$IFn$_invoke$arity$1(G__18395) : G__18393.call(null,G__18395));
});})(pool_size,items_seq))
).call(null,items_seq,cljs.core.count);
var show_ith_QMARK_ = ((function (pool_size,items_seq,cur_count){
return (function (p1__18351_SHARP_){
return tailrecursion.javelin.formula(((function (pool_size,items_seq,cur_count){
return (function (G__18397,G__18396){
return (G__18396 < G__18397);
});})(pool_size,items_seq,cur_count))
).call(null,cur_count,p1__18351_SHARP_);
});})(pool_size,items_seq,cur_count))
;
var ith_item = ((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (p1__18352_SHARP_){
return tailrecursion.javelin.formula(((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (G__18399,G__18400,G__18398){
var G__18401 = G__18399;
var G__18402 = G__18400;
return (G__18398.cljs$core$IFn$_invoke$arity$2 ? G__18398.cljs$core$IFn$_invoke$arity$2(G__18401,G__18402) : G__18398.call(null,G__18401,G__18402));
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
).call(null,items_seq,p1__18352_SHARP_,tailrecursion.hoplon.safe_nth);
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
;
var d = (function (){return (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$0 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$0() : tailrecursion.hoplon.span.call(null));
})();
tailrecursion.hoplon.when_dom(d,((function (d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (){
var p = d.parentNode;
p.removeChild(d);

return tailrecursion.javelin.formula(((function (p,d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (G__18416,G__18414,G__18409,G__18407,G__18408,G__18413,G__18415,G__18410,G__18412,G__18411){
if(cljs.core.truth_((G__18407 < G__18408))){
var seq__18403_18427 = cljs.core.seq((function (){var G__18417 = G__18407;
var G__18418 = G__18408;
return (G__18409.cljs$core$IFn$_invoke$arity$2 ? G__18409.cljs$core$IFn$_invoke$arity$2(G__18417,G__18418) : G__18409.call(null,G__18417,G__18418));
})());
var chunk__18404_18428 = null;
var count__18405_18429 = (0);
var i__18406_18430 = (0);
while(true){
if(cljs.core.truth_((i__18406_18430 < count__18405_18429))){
var i_18431 = chunk__18404_18428.cljs$core$IIndexed$_nth$arity$2(null,i__18406_18430);
var e_18432 = (function (){var G__18419 = (function (){var G__18420 = i_18431;
return (G__18411.cljs$core$IFn$_invoke$arity$1 ? G__18411.cljs$core$IFn$_invoke$arity$1(G__18420) : G__18411.call(null,G__18420));
})();
return (G__18410.cljs$core$IFn$_invoke$arity$1 ? G__18410.cljs$core$IFn$_invoke$arity$1(G__18419) : G__18410.call(null,G__18419));
})().call(null,cljs.core.constant$keyword$43,(function (){var G__18421 = i_18431;
return (G__18412.cljs$core$IFn$_invoke$arity$1 ? G__18412.cljs$core$IFn$_invoke$arity$1(G__18421) : G__18412.call(null,G__18421));
})());
if(cljs.core.not(G__18413)){
G__18414.appendChild(e_18432);
} else {
G__18414.insertBefore(e_18432,G__18414.firstChild);
}

var G__18433 = seq__18403_18427;
var G__18434 = chunk__18404_18428;
var G__18435 = count__18405_18429;
var G__18436 = (i__18406_18430 + (1));
seq__18403_18427 = G__18433;
chunk__18404_18428 = G__18434;
count__18405_18429 = G__18435;
i__18406_18430 = G__18436;
continue;
} else {
var temp__4126__auto___18437 = cljs.core.seq(seq__18403_18427);
if(temp__4126__auto___18437){
var seq__18403_18438__$1 = temp__4126__auto___18437;
if(cljs.core.chunked_seq_QMARK_(seq__18403_18438__$1)){
var c__4551__auto___18439 = cljs.core.chunk_first(seq__18403_18438__$1);
var G__18440 = cljs.core.chunk_rest(seq__18403_18438__$1);
var G__18441 = c__4551__auto___18439;
var G__18442 = cljs.core.count(c__4551__auto___18439);
var G__18443 = (0);
seq__18403_18427 = G__18440;
chunk__18404_18428 = G__18441;
count__18405_18429 = G__18442;
i__18406_18430 = G__18443;
continue;
} else {
var i_18444 = cljs.core.first(seq__18403_18438__$1);
var e_18445 = (function (){var G__18422 = (function (){var G__18423 = i_18444;
return (G__18411.cljs$core$IFn$_invoke$arity$1 ? G__18411.cljs$core$IFn$_invoke$arity$1(G__18423) : G__18411.call(null,G__18423));
})();
return (G__18410.cljs$core$IFn$_invoke$arity$1 ? G__18410.cljs$core$IFn$_invoke$arity$1(G__18422) : G__18410.call(null,G__18422));
})().call(null,cljs.core.constant$keyword$43,(function (){var G__18424 = i_18444;
return (G__18412.cljs$core$IFn$_invoke$arity$1 ? G__18412.cljs$core$IFn$_invoke$arity$1(G__18424) : G__18412.call(null,G__18424));
})());
if(cljs.core.not(G__18413)){
G__18414.appendChild(e_18445);
} else {
G__18414.insertBefore(e_18445,G__18414.firstChild);
}

var G__18446 = cljs.core.next(seq__18403_18438__$1);
var G__18447 = null;
var G__18448 = (0);
var G__18449 = (0);
seq__18403_18427 = G__18446;
chunk__18404_18428 = G__18447;
count__18405_18429 = G__18448;
i__18406_18430 = G__18449;
continue;
}
} else {
}
}
break;
}

var G__18425 = G__18416;
var G__18426 = G__18408;
return (G__18415.cljs$core$IFn$_invoke$arity$2 ? G__18415.cljs$core$IFn$_invoke$arity$2(G__18425,G__18426) : G__18415.call(null,G__18425,G__18426));
} else {
return null;
}
});})(p,d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item))
).call(null,tailrecursion.javelin.cell(pool_size),p,cljs.core.range,pool_size,cur_count,reverse_QMARK_,cljs.core.reset_BANG_,tpl,show_ith_QMARK_,ith_item);
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
var r = (function (){var ret__10315__auto__ = tailrecursion.javelin.cell(window.location.hash);
var G__18475_18500 = ((function (ret__10315__auto__){
return (function (){
var G__18477 = ret__10315__auto__;
var G__18478 = window.location.hash;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18477,G__18478) : cljs.core.reset_BANG_.call(null,G__18477,G__18478));
});})(ret__10315__auto__))
;
var G__18476_18501 = (100);
setInterval(G__18475_18500,G__18476_18501);

return tailrecursion.javelin.formula(((function (ret__10315__auto__){
return (function (G__18479){
return G__18479;
});})(ret__10315__auto__))
).call(null,ret__10315__auto__);
})();
return tailrecursion.javelin.formula(((function (r){
return (function (G__18481,G__18480){
if(cljs.core.truth_((function (){var G__18482 = "";
var G__18483 = G__18481;
return (G__18480.cljs$core$IFn$_invoke$arity$2 ? G__18480.cljs$core$IFn$_invoke$arity$2(G__18482,G__18483) : G__18480.call(null,G__18482,G__18483));
})())){
return G__18481;
} else {
return null;
}
});})(r))
).call(null,r,cljs.core.not_EQ_);
});
var route_cell__1 = (function (setter_or_dfl){
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(setter_or_dfl))){
var setter__10316__auto__ = setter_or_dfl;
var callback__10317__auto__ = (function (){var or__3764__auto__ = null;
if(cljs.core.truth_(or__3764__auto__)){
return or__3764__auto__;
} else {
return cljs.core.identity;
}
})();
tailrecursion.javelin.formula(((function (setter__10316__auto__,callback__10317__auto__){
return (function (G__18485,G__18484){
return G__18484.location.hash = G__18485;
});})(setter__10316__auto__,callback__10317__auto__))
).call(null,setter__10316__auto__,window);

var G__18486_18502 = ((function (setter__10316__auto__,callback__10317__auto__){
return (function (){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__18488 = setter__10316__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18488) : cljs.core.deref.call(null,G__18488));
})(),window.location.hash)){
var G__18489_18504 = window.location.hash;
(callback__10317__auto__.cljs$core$IFn$_invoke$arity$1 ? callback__10317__auto__.cljs$core$IFn$_invoke$arity$1(G__18489_18504) : callback__10317__auto__.call(null,G__18489_18504));

return window.location.hash = (function (){var G__18490 = setter__10316__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18490) : cljs.core.deref.call(null,G__18490));
})();
} else {
return null;
}
});})(setter__10316__auto__,callback__10317__auto__))
;
var G__18487_18503 = (100);
setInterval(G__18486_18502,G__18487_18503);

return setter__10316__auto__;
} else {
var r = route_cell.cljs$core$IFn$_invoke$arity$0();
return tailrecursion.javelin.formula(((function (r){
return (function (G__18491,G__18492){
var or__3764__auto__ = G__18491;
if(cljs.core.truth_(or__3764__auto__)){
return or__3764__auto__;
} else {
return G__18492;
}
});})(r))
).call(null,r,setter_or_dfl);
}
});
var route_cell__2 = (function (setter,callback){
var setter__10316__auto__ = setter;
var callback__10317__auto__ = (function (){var or__3764__auto__ = callback;
if(cljs.core.truth_(or__3764__auto__)){
return or__3764__auto__;
} else {
return cljs.core.identity;
}
})();
tailrecursion.javelin.formula(((function (setter__10316__auto__,callback__10317__auto__){
return (function (G__18494,G__18493){
return G__18493.location.hash = G__18494;
});})(setter__10316__auto__,callback__10317__auto__))
).call(null,setter__10316__auto__,window);

var G__18495_18505 = ((function (setter__10316__auto__,callback__10317__auto__){
return (function (){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__18497 = setter__10316__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18497) : cljs.core.deref.call(null,G__18497));
})(),window.location.hash)){
var G__18498_18507 = window.location.hash;
(callback__10317__auto__.cljs$core$IFn$_invoke$arity$1 ? callback__10317__auto__.cljs$core$IFn$_invoke$arity$1(G__18498_18507) : callback__10317__auto__.call(null,G__18498_18507));

return window.location.hash = (function (){var G__18499 = setter__10316__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18499) : cljs.core.deref.call(null,G__18499));
})();
} else {
return null;
}
});})(setter__10316__auto__,callback__10317__auto__))
;
var G__18496_18506 = (100);
setInterval(G__18495_18505,G__18496_18506);

return setter__10316__auto__;
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
