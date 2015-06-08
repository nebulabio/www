// Compiled by ClojureScript 0.0-2816 {}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function init_transformer(p__11595){
var map__11603 = p__11595;
var map__11603__$1 = ((cljs.core.seq_QMARK_(map__11603))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11603):map__11603);
var replacement_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11603__$1,cljs.core.constant$keyword$72);
var custom_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11603__$1,cljs.core.constant$keyword$73);
return ((function (map__11603,map__11603__$1,replacement_transformers,custom_transformers){
return (function (html,line,next_line,state){
var _STAR_next_line_STAR_11604 = markdown.transformers._STAR_next_line_STAR_;
markdown.transformers._STAR_next_line_STAR_ = next_line;

try{var vec__11605 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_STAR_next_line_STAR_11604,map__11603,map__11603__$1,replacement_transformers,custom_transformers){
return (function (p__11606,transformer){
var vec__11607 = p__11606;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11607,(0),null);
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11607,(1),null);
var G__11608 = text;
var G__11609 = state__$1;
return (transformer.cljs$core$IFn$_invoke$arity$2 ? transformer.cljs$core$IFn$_invoke$arity$2(G__11608,G__11609) : transformer.call(null,G__11608,G__11609));
});})(_STAR_next_line_STAR_11604,map__11603,map__11603__$1,replacement_transformers,custom_transformers))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__3765__auto__ = replacement_transformers;
if(cljs.core.truth_(or__3765__auto__)){
return or__3765__auto__;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11605,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11605,(1),null);
html.append(text);

return new_state;
}finally {markdown.transformers._STAR_next_line_STAR_ = _STAR_next_line_STAR_11604;
}});
;})(map__11603,map__11603__$1,replacement_transformers,custom_transformers))
});
/**
* Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
* @param {...*} var_args
*/
markdown.core.format = (function() { 
var format__delegate = function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
};
var format = function (fmt,var_args){
var args = null;
if (arguments.length > 1) {
var G__11610__i = 0, G__11610__a = new Array(arguments.length -  1);
while (G__11610__i < G__11610__a.length) {G__11610__a[G__11610__i] = arguments[G__11610__i + 1]; ++G__11610__i;}
  args = new cljs.core.IndexedSeq(G__11610__a,0);
} 
return format__delegate.call(this,fmt,args);};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__11611){
var fmt = cljs.core.first(arglist__11611);
var args = cljs.core.rest(arglist__11611);
return format__delegate(fmt,args);
});
format.cljs$core$IFn$_invoke$arity$variadic = format__delegate;
return format;
})()
;
markdown.core.parse_references = (function parse_references(lines){
var references = (function (){var G__11618 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11618) : cljs.core.atom.call(null,G__11618));
})();
var seq__11619_11624 = cljs.core.seq(lines);
var chunk__11620_11625 = null;
var count__11621_11626 = (0);
var i__11622_11627 = (0);
while(true){
if((i__11622_11627 < count__11621_11626)){
var line_11628 = chunk__11620_11625.cljs$core$IIndexed$_nth$arity$2(null,i__11622_11627);
markdown.transformers.parse_reference_link(line_11628,references);

var G__11629 = seq__11619_11624;
var G__11630 = chunk__11620_11625;
var G__11631 = count__11621_11626;
var G__11632 = (i__11622_11627 + (1));
seq__11619_11624 = G__11629;
chunk__11620_11625 = G__11630;
count__11621_11626 = G__11631;
i__11622_11627 = G__11632;
continue;
} else {
var temp__4423__auto___11633 = cljs.core.seq(seq__11619_11624);
if(temp__4423__auto___11633){
var seq__11619_11634__$1 = temp__4423__auto___11633;
if(cljs.core.chunked_seq_QMARK_(seq__11619_11634__$1)){
var c__4552__auto___11635 = cljs.core.chunk_first(seq__11619_11634__$1);
var G__11636 = cljs.core.chunk_rest(seq__11619_11634__$1);
var G__11637 = c__4552__auto___11635;
var G__11638 = cljs.core.count(c__4552__auto___11635);
var G__11639 = (0);
seq__11619_11624 = G__11636;
chunk__11620_11625 = G__11637;
count__11621_11626 = G__11638;
i__11622_11627 = G__11639;
continue;
} else {
var line_11640 = cljs.core.first(seq__11619_11634__$1);
markdown.transformers.parse_reference_link(line_11640,references);

var G__11641 = cljs.core.next(seq__11619_11634__$1);
var G__11642 = null;
var G__11643 = (0);
var G__11644 = (0);
seq__11619_11624 = G__11641;
chunk__11620_11625 = G__11642;
count__11621_11626 = G__11643;
i__11622_11627 = G__11644;
continue;
}
} else {
}
}
break;
}

var G__11623 = references;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11623) : cljs.core.deref.call(null,G__11623));
});
/**
* processes input text line by line and outputs an HTML string
* @param {...*} var_args
*/
markdown.core.md__GT_html = (function() { 
var md__GT_html__delegate = function (text,params){
var _STAR_substring_STAR_11663 = markdown.transformers._STAR_substring_STAR_;
var formatter11664 = markdown.transformers.formatter;
markdown.transformers._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_11663,formatter11664){
return (function (s,n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s));
});})(_STAR_substring_STAR_11663,formatter11664))
;

markdown.transformers.formatter = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = text.split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(cljs.core.constant$keyword$74.cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references(lines):null);
var transformer = markdown.core.init_transformer(params__$1);
var G__11666_11681 = lines;
var vec__11667_11682 = G__11666_11681;
var line_11683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11667_11682,(0),null);
var more_11684 = cljs.core.nthnext(vec__11667_11682,(1));
var state_11685 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$62,true,cljs.core.constant$keyword$68,references,cljs.core.constant$keyword$66,true], null),params__$1], 0));
var G__11666_11686__$1 = G__11666_11681;
var state_11687__$1 = state_11685;
while(true){
var vec__11668_11688 = G__11666_11686__$1;
var line_11689__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11668_11688,(0),null);
var more_11690__$1 = cljs.core.nthnext(vec__11668_11688,(1));
var state_11691__$2 = state_11687__$1;
var state_11692__$3 = (cljs.core.truth_(cljs.core.constant$keyword$71.cljs$core$IFn$_invoke$arity$1(state_11691__$2))?(function (){var G__11669 = html;
var G__11670 = cljs.core.constant$keyword$71.cljs$core$IFn$_invoke$arity$1(state_11691__$2);
var G__11671 = cljs.core.first(more_11690__$1);
var G__11672 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state_11691__$2,cljs.core.constant$keyword$71,cljs.core.array_seq([cljs.core.constant$keyword$61], 0)),cljs.core.constant$keyword$66,true);
return (transformer.cljs$core$IFn$_invoke$arity$4 ? transformer.cljs$core$IFn$_invoke$arity$4(G__11669,G__11670,G__11671,G__11672) : transformer.call(null,G__11669,G__11670,G__11671,G__11672));
})():state_11691__$2);
if(cljs.core.truth_(cljs.core.first(more_11690__$1))){
var G__11693 = more_11690__$1;
var G__11694 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__11673 = html;
var G__11674 = line_11689__$1;
var G__11675 = cljs.core.first(more_11690__$1);
var G__11676 = state_11692__$3;
return (transformer.cljs$core$IFn$_invoke$arity$4 ? transformer.cljs$core$IFn$_invoke$arity$4(G__11673,G__11674,G__11675,G__11676) : transformer.call(null,G__11673,G__11674,G__11675,G__11676));
})(),cljs.core.constant$keyword$66,cljs.core.empty_QMARK_(line_11689__$1));
G__11666_11686__$1 = G__11693;
state_11687__$1 = G__11694;
continue;
} else {
var G__11677_11695 = html;
var G__11678_11696 = line_11689__$1;
var G__11679_11697 = "";
var G__11680_11698 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_11692__$3,cljs.core.constant$keyword$63,true);
(transformer.cljs$core$IFn$_invoke$arity$4 ? transformer.cljs$core$IFn$_invoke$arity$4(G__11677_11695,G__11678_11696,G__11679_11697,G__11680_11698) : transformer.call(null,G__11677_11695,G__11678_11696,G__11679_11697,G__11680_11698));
}
break;
}

return html.toString();
}finally {markdown.transformers.formatter = formatter11664;

markdown.transformers._STAR_substring_STAR_ = _STAR_substring_STAR_11663;
}};
var md__GT_html = function (text,var_args){
var params = null;
if (arguments.length > 1) {
var G__11699__i = 0, G__11699__a = new Array(arguments.length -  1);
while (G__11699__i < G__11699__a.length) {G__11699__a[G__11699__i] = arguments[G__11699__i + 1]; ++G__11699__i;}
  params = new cljs.core.IndexedSeq(G__11699__a,0);
} 
return md__GT_html__delegate.call(this,text,params);};
md__GT_html.cljs$lang$maxFixedArity = 1;
md__GT_html.cljs$lang$applyTo = (function (arglist__11700){
var text = cljs.core.first(arglist__11700);
var params = cljs.core.rest(arglist__11700);
return md__GT_html__delegate(text,params);
});
md__GT_html.cljs$core$IFn$_invoke$arity$variadic = md__GT_html__delegate;
return md__GT_html;
})()
;
/**
* Js accessible wrapper
* @param {...*} var_args
*/
markdown.core.mdToHtml = (function() { 
var mdToHtml__delegate = function (params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.core.md__GT_html,params);
};
var mdToHtml = function (var_args){
var params = null;
if (arguments.length > 0) {
var G__11701__i = 0, G__11701__a = new Array(arguments.length -  0);
while (G__11701__i < G__11701__a.length) {G__11701__a[G__11701__i] = arguments[G__11701__i + 0]; ++G__11701__i;}
  params = new cljs.core.IndexedSeq(G__11701__a,0);
} 
return mdToHtml__delegate.call(this,params);};
mdToHtml.cljs$lang$maxFixedArity = 0;
mdToHtml.cljs$lang$applyTo = (function (arglist__11702){
var params = cljs.core.seq(arglist__11702);
return mdToHtml__delegate(params);
});
mdToHtml.cljs$core$IFn$_invoke$arity$variadic = mdToHtml__delegate;
return mdToHtml;
})()
;
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);
