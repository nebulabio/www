// Compiled by ClojureScript 0.0-2816 {}
goog.provide('markdown.transformers');
goog.require('cljs.core');
goog.require('clojure.string');
markdown.transformers.heading_QMARK_ = (function heading_QMARK_(text,type){
if(cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [" ",null], null), null),cljs.core.take.cljs$core$IFn$_invoke$arity$2((4),text))){
return null;
} else {
var trimmed = (cljs.core.truth_(text)?clojure.string.trim(text):null);
var and__3753__auto__ = cljs.core.not_empty(trimmed);
if(cljs.core.truth_(and__3753__auto__)){
return cljs.core.every_QMARK_(cljs.core.PersistentHashSet.fromArray([type], true),trimmed);
} else {
return and__3753__auto__;
}
}
});
markdown.transformers.h1_QMARK_ = (function h1_QMARK_(text){
return markdown.transformers.heading_QMARK_(text,"=");
});
markdown.transformers.h2_QMARK_ = (function h2_QMARK_(text){
return markdown.transformers.heading_QMARK_(text,"-");
});
markdown.transformers.empty_line = (function empty_line(text,state){
if(cljs.core.truth_((function (){var or__3765__auto__ = cljs.core.constant$keyword$55.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__3765__auto__)){
return or__3765__auto__;
} else {
return cljs.core.constant$keyword$56.cljs$core$IFn$_invoke$arity$1(state);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__3765__auto__ = markdown.transformers.h1_QMARK_(text);
if(cljs.core.truth_(or__3765__auto__)){
return or__3765__auto__;
} else {
return markdown.transformers.h2_QMARK_(text);
}
})())?"":text),(cljs.core.truth_(clojure.string.blank_QMARK_(text))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.constant$keyword$57,cljs.core.array_seq([cljs.core.constant$keyword$58], 0)):state)], null);
}
});
markdown.transformers.escape_code = (function escape_code(s){
return clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(s,/&/,"&amp;"),/\*/,"&#42;"),/\^/,"&#94;"),/\_/,"&#95;"),/\~/,"&#126;"),/\</,"&lt;"),/\>/,"&gt;"),/\[/,"&#91;"),/\]/,"&#93;"),/\(/,"&#40;"),/\)/,"&#41;"),/\"/,"&quot;");
});
/**
* @param {...*} var_args
*/
markdown.transformers.escape_link = (function() { 
var escape_link__delegate = function (xs){
return cljs.core.seq(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,xs)),/\*/,"&#42;"),/\^/,"&#94;"),/\_/,"&#95;"),/\~/,"&#126;"));
};
var escape_link = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__11705__i = 0, G__11705__a = new Array(arguments.length -  0);
while (G__11705__i < G__11705__a.length) {G__11705__a[G__11705__i] = arguments[G__11705__i + 0]; ++G__11705__i;}
  xs = new cljs.core.IndexedSeq(G__11705__a,0);
} 
return escape_link__delegate.call(this,xs);};
escape_link.cljs$lang$maxFixedArity = 0;
escape_link.cljs$lang$applyTo = (function (arglist__11706){
var xs = cljs.core.seq(arglist__11706);
return escape_link__delegate(xs);
});
escape_link.cljs$core$IFn$_invoke$arity$variadic = escape_link__delegate;
return escape_link;
})()
;
markdown.transformers.escaped_chars = (function escaped_chars(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__3765__auto__ = cljs.core.constant$keyword$55.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__3765__auto__)){
return or__3765__auto__;
} else {
return cljs.core.constant$keyword$56.cljs$core$IFn$_invoke$arity$1(state);
}
})())?text:clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(text,/\\\\/,"&#92;"),/\\`/,"&#8216;"),/\\\*/,"&#42;"),/\\_/,"&#95;"),/\\\{/,"&#123;"),/\\\}/,"&#125;"),/\\\[/,"&#91;"),/\\\]/,"&#93;"),/\\\(/,"&#40;"),/\\\)/,"&#41;"),/\\#/,"&#35;"),/\\\+/,"&#43;"),/\\-/,"&#45;"),/\\\./,"&#46;"),/\\!/,"&#33;")),state], null);
});
markdown.transformers.separator = (function separator(escape_QMARK_,text,open,close,separator__$1,state){
if(cljs.core.truth_(cljs.core.constant$keyword$55.cljs$core$IFn$_invoke$arity$1(state))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var out = cljs.core.PersistentVector.EMPTY;
var buf = cljs.core.PersistentVector.EMPTY;
var tokens = cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.first(separator__$1)),cljs.core.seq(text));
var cur_state = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$59,false);
while(true){
if(cljs.core.empty_QMARK_(tokens)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.constant$keyword$59.cljs$core$IFn$_invoke$arity$1(cur_state))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(out,separator__$1):out),buf)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cur_state,cljs.core.constant$keyword$59)], null);
} else {
if(cljs.core.truth_(cljs.core.constant$keyword$59.cljs$core$IFn$_invoke$arity$1(cur_state))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(tokens),separator__$1)){
var G__11707 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(out,cljs.core.seq(open),cljs.core.array_seq([(cljs.core.truth_(escape_QMARK_)?cljs.core.seq(markdown.transformers.escape_code(clojure.string.join.cljs$core$IFn$_invoke$arity$1(buf))):buf),cljs.core.seq(close)], 0)));
var G__11708 = cljs.core.PersistentVector.EMPTY;
var G__11709 = cljs.core.rest(tokens);
var G__11710 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cur_state,cljs.core.constant$keyword$59,false);
out = G__11707;
buf = G__11708;
tokens = G__11709;
cur_state = G__11710;
continue;
} else {
var G__11711 = out;
var G__11712 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(buf,cljs.core.first(tokens));
var G__11713 = cljs.core.rest(tokens);
var G__11714 = cur_state;
out = G__11711;
buf = G__11712;
tokens = G__11713;
cur_state = G__11714;
continue;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(tokens),separator__$1)){
var G__11715 = out;
var G__11716 = buf;
var G__11717 = cljs.core.rest(tokens);
var G__11718 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cur_state,cljs.core.constant$keyword$59,true);
out = G__11715;
buf = G__11716;
tokens = G__11717;
cur_state = G__11718;
continue;
} else {
var G__11719 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(out,cljs.core.first(tokens));
var G__11720 = buf;
var G__11721 = cljs.core.rest(tokens);
var G__11722 = cur_state;
out = G__11719;
buf = G__11720;
tokens = G__11721;
cur_state = G__11722;
continue;

}
}
}
break;
}
}
});
markdown.transformers.strong = (function strong(text,state){
return markdown.transformers.separator(false,text,"<strong>","</strong>",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*","*"], null),state);
});
markdown.transformers.bold = (function bold(text,state){
return markdown.transformers.separator(false,text,"<b>","</b>",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["_","_"], null),state);
});
markdown.transformers.em = (function em(text,state){
return markdown.transformers.separator(false,text,"<em>","</em>",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*"], null),state);
});
markdown.transformers.italics = (function italics(text,state){
return markdown.transformers.separator(false,text,"<i>","</i>",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["_"], null),state);
});
markdown.transformers.inline_code = (function inline_code(text,state){
return markdown.transformers.separator(true,text,"<code>","</code>",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`"], null),state);
});
markdown.transformers.strikethrough = (function strikethrough(text,state){
return markdown.transformers.separator(false,text,"<del>","</del>",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["~","~"], null),state);
});
markdown.transformers.superscript = (function superscript(text,state){
if(cljs.core.truth_(cljs.core.constant$keyword$55.cljs$core$IFn$_invoke$arity$1(state))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var tokens = cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"^",null], null), null)),text);
var buf = cljs.core.PersistentVector.EMPTY;
var remaining = tokens;
while(true){
if(cljs.core.empty_QMARK_(remaining)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.cljs$core$IFn$_invoke$arity$1(buf),state], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(remaining),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^"], null))){
var G__11723 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(buf,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq("<sup>"),cljs.core.second(remaining),cljs.core.array_seq([cljs.core.seq("</sup>")], 0)));
var G__11724 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),remaining);
buf = G__11723;
remaining = G__11724;
continue;
} else {
var G__11725 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(buf,cljs.core.first(remaining));
var G__11726 = cljs.core.rest(remaining);
buf = G__11725;
remaining = G__11726;
continue;

}
}
break;
}
}
});
markdown.transformers.heading_text = (function heading_text(text){
return clojure.string.trim(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__11728_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("#",p1__11728_SHARP_);
}),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__11727_SHARP_){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",p1__11727_SHARP_)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(" ",p1__11727_SHARP_));
}),text))));
});
markdown.transformers.heading_level = (function heading_level(text){
var num_hashes = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__11729_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(" ",p1__11729_SHARP_);
}),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__11730_SHARP_){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",p1__11730_SHARP_)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(" ",p1__11730_SHARP_));
}),cljs.core.seq(text))));
if((num_hashes > (0))){
return num_hashes;
} else {
return null;
}
});
markdown.transformers.make_heading = (function make_heading(text,heading_anchors){
var temp__4421__auto__ = markdown.transformers.heading_level(text);
if(cljs.core.truth_(temp__4421__auto__)){
var heading = temp__4421__auto__;
var text__$1 = markdown.transformers.heading_text(text);
return [cljs.core.str("<h"),cljs.core.str(heading),cljs.core.str(">"),cljs.core.str((cljs.core.truth_(heading_anchors)?[cljs.core.str("<a name=\""),cljs.core.str(clojure.string.replace(clojure.string.lower_case(text__$1)," ","&#95;")),cljs.core.str("\"></a>")].join(''):null)),cljs.core.str(text__$1),cljs.core.str("</h"),cljs.core.str(heading),cljs.core.str(">")].join('');
} else {
return null;
}
});
markdown.transformers.heading = (function heading(text,state){
if(cljs.core.truth_((function (){var or__3765__auto__ = cljs.core.constant$keyword$56.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__3765__auto__)){
return or__3765__auto__;
} else {
return cljs.core.constant$keyword$55.cljs$core$IFn$_invoke$arity$1(state);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(markdown.transformers.h1_QMARK_(markdown.transformers._STAR_next_line_STAR_))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<h1>"),cljs.core.str(text),cljs.core.str("</h1>")].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$58,true)], null);
} else {
if(cljs.core.truth_(markdown.transformers.h2_QMARK_(markdown.transformers._STAR_next_line_STAR_))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<h2>"),cljs.core.str(text),cljs.core.str("</h2>")].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$58,true)], null);
} else {
var temp__4421__auto__ = markdown.transformers.make_heading(text,cljs.core.constant$keyword$60.cljs$core$IFn$_invoke$arity$1(state));
if(cljs.core.truth_(temp__4421__auto__)){
var heading__$1 = temp__4421__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [heading__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$58,true)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}

}
}
}
});
markdown.transformers.br = (function br(text,p__11731){
var map__11733 = p__11731;
var map__11733__$1 = ((cljs.core.seq_QMARK_(map__11733))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11733):map__11733);
var state = map__11733__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11733__$1,cljs.core.constant$keyword$55);
var lists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11733__$1,cljs.core.constant$keyword$61);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "," "], null),cljs.core.take_last((2),text))) && (cljs.core.not((function (){var or__3765__auto__ = code;
if(cljs.core.truth_(or__3765__auto__)){
return or__3765__auto__;
} else {
return lists;
}
})())))?[cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),text))),cljs.core.str("<br />")].join(''):text),state], null);
});
markdown.transformers.autourl_transformer = (function autourl_transformer(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.constant$keyword$55.cljs$core$IFn$_invoke$arity$1(state))?text:clojure.string.replace(text,/<https?:\/\/[-A-Za-z0-9+&@#\/%?=~_()|!:,.;]*[-A-Za-z0-9+&@#\/%=~_()|]>/,(function (p1__11734_SHARP_){
var url = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p1__11734_SHARP_,(1),(cljs.core.count(p1__11734_SHARP_) - (1)));
return [cljs.core.str("<a href=\""),cljs.core.str(url),cljs.core.str("\">"),cljs.core.str(url),cljs.core.str("</a>")].join('');
}))),state], null);
});
markdown.transformers.autoemail_transformer = (function autoemail_transformer(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__3765__auto__ = cljs.core.constant$keyword$55.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__3765__auto__)){
return or__3765__auto__;
} else {
return cljs.core.constant$keyword$56.cljs$core$IFn$_invoke$arity$1(state);
}
})())?text:clojure.string.replace(text,/<[\w._%+-]+@[\w.-]+\.[\w]{2,4}>/,(function (p1__11735_SHARP_){
var encoded = (cljs.core.truth_(cljs.core.constant$keyword$62.cljs$core$IFn$_invoke$arity$1(state))?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p1__11735_SHARP_,(1),(cljs.core.count(p1__11735_SHARP_) - (1))):cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
if((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() > 0.5)){
var G__11738 = "&#x%02x;";
var G__11739 = (c | (0));
return (markdown.transformers.formatter.cljs$core$IFn$_invoke$arity$2 ? markdown.transformers.formatter.cljs$core$IFn$_invoke$arity$2(G__11738,G__11739) : markdown.transformers.formatter.call(null,G__11738,G__11739));
} else {
return c;
}
}),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p1__11735_SHARP_,(1),(cljs.core.count(p1__11735_SHARP_) - (1))))));
return [cljs.core.str("<a href=\"mailto:"),cljs.core.str(encoded),cljs.core.str("\">"),cljs.core.str(encoded),cljs.core.str("</a>")].join('');
}))),state], null);
});
markdown.transformers.paragraph_text = (function paragraph_text(last_line_empty_QMARK_,text){
if(cljs.core.truth_((function (){var and__3753__auto__ = cljs.core.not(last_line_empty_QMARK_);
if(and__3753__auto__){
return cljs.core.not_empty(text);
} else {
return and__3753__auto__;
}
})())){
return [cljs.core.str(" "),cljs.core.str(text)].join('');
} else {
return text;
}
});
markdown.transformers.paragraph = (function paragraph(text,p__11740){
var map__11742 = p__11740;
var map__11742__$1 = ((cljs.core.seq_QMARK_(map__11742))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11742):map__11742);
var state = map__11742__$1;
var eof = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11742__$1,cljs.core.constant$keyword$63);
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11742__$1,cljs.core.constant$keyword$58);
var hr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11742__$1,cljs.core.constant$keyword$57);
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11742__$1,cljs.core.constant$keyword$55);
var lists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11742__$1,cljs.core.constant$keyword$61);
var blockquote = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11742__$1,cljs.core.constant$keyword$64);
var paragraph__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11742__$1,cljs.core.constant$keyword$65);
var last_line_empty_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11742__$1,cljs.core.constant$keyword$66);
if(cljs.core.truth_((function (){var or__3765__auto__ = heading;
if(cljs.core.truth_(or__3765__auto__)){
return or__3765__auto__;
} else {
var or__3765__auto____$1 = hr;
if(cljs.core.truth_(or__3765__auto____$1)){
return or__3765__auto____$1;
} else {
var or__3765__auto____$2 = code;
if(cljs.core.truth_(or__3765__auto____$2)){
return or__3765__auto____$2;
} else {
var or__3765__auto____$3 = lists;
if(cljs.core.truth_(or__3765__auto____$3)){
return or__3765__auto____$3;
} else {
return blockquote;
}
}
}
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(paragraph__$1)){
if(cljs.core.truth_((function (){var or__3765__auto__ = eof;
if(cljs.core.truth_(or__3765__auto__)){
return or__3765__auto__;
} else {
return cljs.core.empty_QMARK_(clojure.string.trim(text));
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(markdown.transformers.paragraph_text(last_line_empty_QMARK_,text)),cljs.core.str("</p>")].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$65,false)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.paragraph_text(last_line_empty_QMARK_,text),state], null);
}
} else {
if(cljs.core.truth_((function (){var and__3753__auto__ = cljs.core.not(eof);
if(and__3753__auto__){
return last_line_empty_QMARK_;
} else {
return and__3753__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<p>"),cljs.core.str(text)].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.constant$keyword$65,true,cljs.core.array_seq([cljs.core.constant$keyword$66,false], 0))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);

}
}
}
});
markdown.transformers.code = (function code(text,p__11743){
var map__11745 = p__11743;
var map__11745__$1 = ((cljs.core.seq_QMARK_(map__11745))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11745):map__11745);
var state = map__11745__$1;
var eof = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11745__$1,cljs.core.constant$keyword$63);
var lists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11745__$1,cljs.core.constant$keyword$61);
var code__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11745__$1,cljs.core.constant$keyword$55);
var codeblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11745__$1,cljs.core.constant$keyword$56);
if(cljs.core.truth_((function (){var or__3765__auto__ = lists;
if(cljs.core.truth_(or__3765__auto__)){
return or__3765__auto__;
} else {
return codeblock;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(code__$1)){
if(cljs.core.truth_((function (){var or__3765__auto__ = eof;
if(cljs.core.truth_(or__3765__auto__)){
return or__3765__auto__;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("    ",clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.take.cljs$core$IFn$_invoke$arity$2((4),text)));
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("\n</code></pre>"),cljs.core.str(text)].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.constant$keyword$55,false,cljs.core.array_seq([cljs.core.constant$keyword$66,false], 0))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("\n"),cljs.core.str(markdown.transformers.escape_code(clojure.string.replace_first(text,/    /,"")))].join(''),state], null);
}
} else {
if(cljs.core.empty_QMARK_(clojure.string.trim(text))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var num_spaces = cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_," "),text));
if((num_spaces > (3))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<pre><code>"),cljs.core.str(markdown.transformers.escape_code(clojure.string.replace_first(text,/    /,"")))].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$55,true)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}

}
}
}
});
markdown.transformers.codeblock = (function codeblock(text,state){
var trimmed = clojure.string.trim(text);
if(cljs.core.truth_((function (){var and__3753__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`","`","`"], null),cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),trimmed));
if(and__3753__auto__){
return cljs.core.constant$keyword$56.cljs$core$IFn$_invoke$arity$1(state);
} else {
return and__3753__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("</code></pre>"),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),trimmed)))].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.constant$keyword$55,false,cljs.core.array_seq([cljs.core.constant$keyword$56,false,cljs.core.constant$keyword$66,false], 0))], null);
} else {
if(cljs.core.truth_((function (){var and__3753__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`","`","`"], null),cljs.core.take_last((3),trimmed));
if(and__3753__auto__){
return cljs.core.constant$keyword$56.cljs$core$IFn$_invoke$arity$1(state);
} else {
return and__3753__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("</code></pre>"),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((3),trimmed)))].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.constant$keyword$55,false,cljs.core.array_seq([cljs.core.constant$keyword$56,false,cljs.core.constant$keyword$66,false], 0))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`","`","`"], null),cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),trimmed))){
var vec__11748 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_," "),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),trimmed));
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11748,(0),null);
var code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11748,(1),null);
var s = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.rest(code));
var formatter = cljs.core.constant$keyword$67.cljs$core$IFn$_invoke$arity$1(state);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<pre><code"),cljs.core.str((cljs.core.truth_(cljs.core.not_empty(lang))?[cljs.core.str(" "),cljs.core.str((cljs.core.truth_(formatter)?(function (){var G__11749 = clojure.string.join.cljs$core$IFn$_invoke$arity$1(lang);
return (formatter.cljs$core$IFn$_invoke$arity$1 ? formatter.cljs$core$IFn$_invoke$arity$1(G__11749) : formatter.call(null,G__11749));
})():[cljs.core.str("class=\""),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$1(lang)),cljs.core.str("\"")].join('')))].join(''):null)),cljs.core.str(">"),cljs.core.str(markdown.transformers.escape_code(((cljs.core.empty_QMARK_(s))?s:[cljs.core.str(s),cljs.core.str("\n")].join(''))))].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.constant$keyword$55,true,cljs.core.array_seq([cljs.core.constant$keyword$56,true], 0))], null);
} else {
if(cljs.core.truth_(cljs.core.constant$keyword$56.cljs$core$IFn$_invoke$arity$1(state))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(markdown.transformers.escape_code(text)),cljs.core.str("\n")].join(''),state], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);

}
}
}
}
});
markdown.transformers.hr = (function hr(text,state){
if(cljs.core.truth_(cljs.core.constant$keyword$55.cljs$core$IFn$_invoke$arity$1(state))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(((cljs.core.empty_QMARK_(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"*",null], null), null),text))) || (cljs.core.empty_QMARK_(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"-",null], null), null),text))) || (cljs.core.empty_QMARK_(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"_",null], null), null),text)))) && ((cljs.core.count(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [" ",null], null), null),text)) > (2)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<hr/>")].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$57,true)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}
}
});
markdown.transformers.blockquote = (function blockquote(text,p__11750){
var map__11752 = p__11750;
var map__11752__$1 = ((cljs.core.seq_QMARK_(map__11752))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11752):map__11752);
var state = map__11752__$1;
var eof = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11752__$1,cljs.core.constant$keyword$63);
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11752__$1,cljs.core.constant$keyword$55);
var codeblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11752__$1,cljs.core.constant$keyword$56);
var lists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11752__$1,cljs.core.constant$keyword$61);
var trimmed = clojure.string.trim(text);
if(cljs.core.truth_((function (){var or__3765__auto__ = code;
if(cljs.core.truth_(or__3765__auto__)){
return or__3765__auto__;
} else {
var or__3765__auto____$1 = codeblock;
if(cljs.core.truth_(or__3765__auto____$1)){
return or__3765__auto____$1;
} else {
return lists;
}
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(cljs.core.constant$keyword$64.cljs$core$IFn$_invoke$arity$1(state))){
if(cljs.core.truth_((function (){var or__3765__auto__ = eof;
if(cljs.core.truth_(or__3765__auto__)){
return or__3765__auto__;
} else {
return cljs.core.empty_QMARK_(trimmed);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["</p></blockquote>",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$64,false)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(">-",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(trimmed,(0),(2)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("</p><footer>"),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(text,(2))),cljs.core.str("</footer><p>")].join(''),state], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(text),cljs.core.str(" ")].join(''),state], null);
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(">",cljs.core.first(text))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<blockquote><p>"),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.rest(text))),cljs.core.str(" ")].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$64,true)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}

}
}
});
markdown.transformers.href = (function href(title,link){
return markdown.transformers.escape_link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.seq("<a href='"),link,cljs.core.seq("'>"),title,cljs.core.seq("</a>")], 0));
});
/**
* @param {...*} var_args
*/
markdown.transformers.img = (function() { 
var img__delegate = function (alt,url,p__11753){
var vec__11755 = p__11753;
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11755,(0),null);
return markdown.transformers.escape_link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.seq("<img src=\""),url,cljs.core.seq("\" alt=\""),alt,(cljs.core.truth_(cljs.core.not_empty(title))?cljs.core.seq(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"\" title=",clojure.string.join.cljs$core$IFn$_invoke$arity$1(title)," />")):cljs.core.seq("\" />"))], 0));
};
var img = function (alt,url,var_args){
var p__11753 = null;
if (arguments.length > 2) {
var G__11756__i = 0, G__11756__a = new Array(arguments.length -  2);
while (G__11756__i < G__11756__a.length) {G__11756__a[G__11756__i] = arguments[G__11756__i + 2]; ++G__11756__i;}
  p__11753 = new cljs.core.IndexedSeq(G__11756__a,0);
} 
return img__delegate.call(this,alt,url,p__11753);};
img.cljs$lang$maxFixedArity = 2;
img.cljs$lang$applyTo = (function (arglist__11757){
var alt = cljs.core.first(arglist__11757);
arglist__11757 = cljs.core.next(arglist__11757);
var url = cljs.core.first(arglist__11757);
var p__11753 = cljs.core.rest(arglist__11757);
return img__delegate(alt,url,p__11753);
});
img.cljs$core$IFn$_invoke$arity$variadic = img__delegate;
return img;
})()
;
markdown.transformers.handle_img_link = (function handle_img_link(xs){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","!","["], null),cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),xs))){
var xs__$1 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),xs);
var vec__11761 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,"]"),xs__$1);
var alt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11761,(0),null);
var xy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11761,(1),null);
var vec__11762 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,")"),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),xy));
var url_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11762,(0),null);
var zy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11762,(1),null);
var vec__11763 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_," "),url_title);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11763,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11763,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic("[",markdown.transformers.img.cljs$core$IFn$_invoke$arity$variadic(alt,url,cljs.core.array_seq([cljs.core.not_empty(title)], 0)),cljs.core.array_seq([cljs.core.rest(zy)], 0));
} else {
return xs;
}
});
markdown.transformers.process_link_title = (function process_link_title(title,state){
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__11765_SHARP_,p2__11764_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(p2__11764_SHARP_,p1__11765_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [title,state], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.italics,markdown.transformers.em,markdown.transformers.strong,markdown.transformers.bold,markdown.transformers.strikethrough], null)));
});
markdown.transformers.link = (function link(text,p__11766){
var map__11773 = p__11766;
var map__11773__$1 = ((cljs.core.seq_QMARK_(map__11773))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11773):map__11773);
var state = map__11773__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11773__$1,cljs.core.constant$keyword$55);
var codeblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11773__$1,cljs.core.constant$keyword$56);
if(cljs.core.truth_((function (){var or__3765__auto__ = code;
if(cljs.core.truth_(or__3765__auto__)){
return or__3765__auto__;
} else {
return codeblock;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var out = cljs.core.PersistentVector.EMPTY;
var tokens = cljs.core.seq(text);
while(true){
if(cljs.core.empty_QMARK_(tokens)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.cljs$core$IFn$_invoke$arity$1(out),state], null);
} else {
var vec__11774 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,"["),tokens);
var head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11774,(0),null);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11774,(1),null);
var xs__$1 = markdown.transformers.handle_img_link(xs);
var vec__11775 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,"]"),xs__$1);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11775,(0),null);
var ys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11775,(1),null);
var vec__11776 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,"("),ys);
var dud = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11776,(0),null);
var zs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11776,(1),null);
var vec__11777 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,")"),zs);
var link__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11777,(0),null);
var tail = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11777,(1),null);
if(((cljs.core.count(link__$1) < (2))) || ((cljs.core.count(tail) < (1))) || ((cljs.core.count(dud) > (1)))){
var G__11779 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(out,head,cljs.core.array_seq([markdown.transformers.process_link_title(title,state),dud,link__$1], 0));
var G__11780 = tail;
out = G__11779;
tokens = G__11780;
continue;
} else {
var G__11781 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(out,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(head),"!"))?(function (){var alt = cljs.core.rest(title);
var vec__11778 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_," "),cljs.core.rest(link__$1));
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11778,(0),null);
var title__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11778,(1),null);
var title__$2 = markdown.transformers.process_link_title(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.rest(title__$1)),state);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(head),markdown.transformers.img.cljs$core$IFn$_invoke$arity$variadic(alt,url,cljs.core.array_seq([title__$2], 0)));
})():cljs.core.concat.cljs$core$IFn$_invoke$arity$2(head,markdown.transformers.href(cljs.core.rest(markdown.transformers.process_link_title(title,state)),cljs.core.rest(link__$1)))));
var G__11782 = cljs.core.rest(tail);
out = G__11781;
tokens = G__11782;
continue;
}
}
break;
}
}
});
markdown.transformers.reference = (function reference(text){
return cljs.core.re_find(/^\[[a-zA-Z0-9 ]+\]:/,text);
});
markdown.transformers.parse_reference = (function parse_reference(reference,start){
return clojure.string.split.cljs$core$IFn$_invoke$arity$3(clojure.string.trim(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(reference,start)),/\s+/,(2));
});
markdown.transformers.parse_reference_link = (function parse_reference_link(line,references){
var trimmed = clojure.string.trim(line);
var temp__4423__auto__ = markdown.transformers.reference(trimmed);
if(cljs.core.truth_(temp__4423__auto__)){
var link = temp__4423__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(references,cljs.core.assoc,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(link,(0),(cljs.core.count(link) - (1))),markdown.transformers.parse_reference(trimmed,(cljs.core.count(link) + (1))));
} else {
return null;
}
});
markdown.transformers.replace_reference_link = (function replace_reference_link(references,reference){
var vec__11785 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(reference,/\]\s*/,(2));
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11785,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11785,(1),null);
var vec__11786 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(references,id);
var link = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11786,(0),null);
var alt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11786,(1),null);
return [cljs.core.str("<a href='"),cljs.core.str(link),cljs.core.str("'"),cljs.core.str((cljs.core.truth_(alt)?[cljs.core.str(" title='"),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(alt,(1),(cljs.core.count(alt) - (1)))),cljs.core.str("'")].join(''):null)),cljs.core.str(">"),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(title,(1))),cljs.core.str("</a>")].join('');
});
markdown.transformers.reference_link = (function reference_link(text,p__11787){
var map__11789 = p__11787;
var map__11789__$1 = ((cljs.core.seq_QMARK_(map__11789))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11789):map__11789);
var state = map__11789__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11789__$1,cljs.core.constant$keyword$55);
var codeblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11789__$1,cljs.core.constant$keyword$56);
var references = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11789__$1,cljs.core.constant$keyword$68);
if((references == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(markdown.transformers.reference(clojure.string.trim(text)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",state], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__3765__auto__ = code;
if(cljs.core.truth_(or__3765__auto__)){
return or__3765__auto__;
} else {
return codeblock;
}
})())?text:clojure.string.replace(text,/\[[a-zA-Z0-9 ]+\]\s*\[[a-zA-Z0-9 ]+\]/,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(markdown.transformers.replace_reference_link,references))),state], null);

}
}
});
markdown.transformers.close_lists = (function close_lists(lists){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1((function (){var iter__4521__auto__ = (function iter__11800(s__11801){
return (new cljs.core.LazySeq(null,(function (){
var s__11801__$1 = s__11801;
while(true){
var temp__4423__auto__ = cljs.core.seq(s__11801__$1);
if(temp__4423__auto__){
var s__11801__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11801__$2)){
var c__4519__auto__ = cljs.core.chunk_first(s__11801__$2);
var size__4520__auto__ = cljs.core.count(c__4519__auto__);
var b__11803 = cljs.core.chunk_buffer(size__4520__auto__);
if((function (){var i__11802 = (0);
while(true){
if((i__11802 < size__4520__auto__)){
var vec__11808 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4519__auto__,i__11802);
var list_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11808,(0),null);
cljs.core.chunk_append(b__11803,[cljs.core.str("</li></"),cljs.core.str(cljs.core.name(list_type)),cljs.core.str(">")].join(''));

var G__11810 = (i__11802 + (1));
i__11802 = G__11810;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11803),iter__11800(cljs.core.chunk_rest(s__11801__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11803),null);
}
} else {
var vec__11809 = cljs.core.first(s__11801__$2);
var list_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11809,(0),null);
return cljs.core.cons([cljs.core.str("</li></"),cljs.core.str(cljs.core.name(list_type)),cljs.core.str(">")].join(''),iter__11800(cljs.core.rest(s__11801__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4521__auto__(lists);
})());
});
markdown.transformers.add_row = (function add_row(row_type,list_type,num_indents,indents,content,state){
if(cljs.core.truth_(list_type)){
if((num_indents < indents)){
var lists_to_close = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__11811_SHARP_){
return (cljs.core.second(p1__11811_SHARP_) > num_indents);
}),cljs.core.reverse(cljs.core.constant$keyword$61.cljs$core$IFn$_invoke$arity$1(state)));
var remaining_lists = cljs.core.vec(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2(cljs.core.count(lists_to_close),cljs.core.constant$keyword$61.cljs$core$IFn$_invoke$arity$1(state)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,markdown.transformers.close_lists(lists_to_close),"</li><li>",content),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$61,(((num_indents > cljs.core.second(cljs.core.last(remaining_lists))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(remaining_lists,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_type,num_indents], null)):remaining_lists))], null);
} else {
if((num_indents > indents)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<"),cljs.core.str(cljs.core.name(row_type)),cljs.core.str("><li>"),cljs.core.str(content)].join(''),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$61], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_type,num_indents], null))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(num_indents,indents)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("</li><li>"),cljs.core.str(content)].join(''),state], null);
} else {
return null;
}
}
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<"),cljs.core.str(cljs.core.name(row_type)),cljs.core.str("><li>"),cljs.core.str(content)].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$61,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_type,num_indents], null)], null))], null);
}
});
markdown.transformers.ul = (function ul(text,state){
var vec__11815 = cljs.core.last(cljs.core.constant$keyword$61.cljs$core$IFn$_invoke$arity$1(state));
var list_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11815,(0),null);
var indents = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11815,(1),null);
var num_indents = cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_," "),text));
var content = clojure.string.trim((function (){var G__11816 = text;
var G__11817 = (num_indents + (1));
return (markdown.transformers._STAR_substring_STAR_.cljs$core$IFn$_invoke$arity$2 ? markdown.transformers._STAR_substring_STAR_.cljs$core$IFn$_invoke$arity$2(G__11816,G__11817) : markdown.transformers._STAR_substring_STAR_.call(null,G__11816,G__11817));
})());
return markdown.transformers.add_row(cljs.core.constant$keyword$69,list_type,num_indents,indents,(function (){var or__3765__auto__ = markdown.transformers.make_heading(content,false);
if(cljs.core.truth_(or__3765__auto__)){
return or__3765__auto__;
} else {
return content;
}
})(),state);
});
markdown.transformers.ol = (function ol(text,state){
var vec__11819 = cljs.core.last(cljs.core.constant$keyword$61.cljs$core$IFn$_invoke$arity$1(state));
var list_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11819,(0),null);
var indents = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11819,(1),null);
var num_indents = cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_," "),text));
var content = clojure.string.trim(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_," "),clojure.string.trim(text))));
return markdown.transformers.add_row(cljs.core.constant$keyword$70,list_type,num_indents,indents,(function (){var or__3765__auto__ = markdown.transformers.make_heading(content,false);
if(cljs.core.truth_(or__3765__auto__)){
return or__3765__auto__;
} else {
return content;
}
})(),state);
});
markdown.transformers.li = (function li(text,p__11820){
var map__11822 = p__11820;
var map__11822__$1 = ((cljs.core.seq_QMARK_(map__11822))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11822):map__11822);
var state = map__11822__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11822__$1,cljs.core.constant$keyword$55);
var codeblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11822__$1,cljs.core.constant$keyword$56);
var last_line_empty_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11822__$1,cljs.core.constant$keyword$66);
var eof = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11822__$1,cljs.core.constant$keyword$63);
var lists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11822__$1,cljs.core.constant$keyword$61);
if(cljs.core.truth_((function (){var and__3753__auto__ = last_line_empty_QMARK_;
if(cljs.core.truth_(and__3753__auto__)){
return clojure.string.blank_QMARK_(text);
} else {
return and__3753__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(markdown.transformers.close_lists(cljs.core.reverse(lists))),cljs.core.str(text)].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.constant$keyword$61),cljs.core.constant$keyword$66,false)], null);
} else {
if(cljs.core.truth_((function (){var or__3765__auto__ = code;
if(cljs.core.truth_(or__3765__auto__)){
return or__3765__auto__;
} else {
return codeblock;
}
})())){
if(cljs.core.truth_((function (){var and__3753__auto__ = lists;
if(cljs.core.truth_(and__3753__auto__)){
var or__3765__auto__ = last_line_empty_QMARK_;
if(cljs.core.truth_(or__3765__auto__)){
return or__3765__auto__;
} else {
return eof;
}
} else {
return and__3753__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(markdown.transformers.close_lists(cljs.core.reverse(lists))),cljs.core.str(text)].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.constant$keyword$61),cljs.core.constant$keyword$66,false)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}
} else {
if(cljs.core.truth_((function (){var and__3753__auto__ = cljs.core.not(eof);
if(and__3753__auto__){
var and__3753__auto____$1 = lists;
if(cljs.core.truth_(and__3753__auto____$1)){
return clojure.string.blank_QMARK_(text);
} else {
return and__3753__auto____$1;
}
} else {
return and__3753__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$66,true)], null);
} else {
var indents = (cljs.core.truth_(last_line_empty_QMARK_)?(0):cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_," "),text)));
var trimmed = clojure.string.trim(text);
var in_list_QMARK_ = cljs.core.constant$keyword$61.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(cljs.core.re_find(/^[\*\+-] /,trimmed))){
return markdown.transformers.ul((cljs.core.truth_(in_list_QMARK_)?text:trimmed),state);
} else {
if(cljs.core.truth_(cljs.core.re_find(/^[0-9]+\. /,trimmed))){
return markdown.transformers.ol((cljs.core.truth_(in_list_QMARK_)?text:trimmed),state);
} else {
if((indents > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_((function (){var and__3753__auto__ = (function (){var or__3765__auto__ = eof;
if(cljs.core.truth_(or__3765__auto__)){
return or__3765__auto__;
} else {
return last_line_empty_QMARK_;
}
})();
if(cljs.core.truth_(and__3753__auto__)){
return cljs.core.not_empty(lists);
} else {
return and__3753__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.close_lists(cljs.core.reverse(lists)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.constant$keyword$61,cljs.core.PersistentVector.EMPTY,cljs.core.array_seq([cljs.core.constant$keyword$71,text], 0))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);

}
}
}
}

}
}
}
});
markdown.transformers.transformer_vector = new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.empty_line,markdown.transformers.codeblock,markdown.transformers.code,markdown.transformers.escaped_chars,markdown.transformers.inline_code,markdown.transformers.autoemail_transformer,markdown.transformers.autourl_transformer,markdown.transformers.link,markdown.transformers.reference_link,markdown.transformers.hr,markdown.transformers.li,markdown.transformers.heading,markdown.transformers.italics,markdown.transformers.em,markdown.transformers.strong,markdown.transformers.bold,markdown.transformers.strikethrough,markdown.transformers.superscript,markdown.transformers.blockquote,markdown.transformers.paragraph,markdown.transformers.br], null);
