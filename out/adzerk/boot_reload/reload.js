// Compiled by ClojureScript 0.0-2814 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('goog.net.jsloader');
goog.require('goog.async.DeferredList');
goog.require('goog.Uri');
goog.require('clojure.string');
adzerk.boot_reload.reload.page_uri = (new goog.Uri(window.location.href));
adzerk.boot_reload.reload.ends_with_QMARK_ = (function ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.changed_href_QMARK_ = (function changed_href_QMARK_(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var uri = (new goog.Uri(href_or_uri));
var path = adzerk.boot_reload.reload.page_uri.resolve(uri).getPath();
if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (uri,path){
return (function (p1__6161_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__6161_SHARP_,path);
});})(uri,path))
,changed)))){
return uri;
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function reload_css(changed){
var sheets = document.styleSheets;
var seq__6166 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__6167 = null;
var count__6168 = (0);
var i__6169 = (0);
while(true){
if((i__6169 < count__6168)){
var s = cljs.core._nth.call(null,chunk__6167,i__6169);
var temp__4126__auto___6170 = (sheets[s]);
if(cljs.core.truth_(temp__4126__auto___6170)){
var sheet_6171 = temp__4126__auto___6170;
var temp__4126__auto___6172__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_6171.href,changed);
if(cljs.core.truth_(temp__4126__auto___6172__$1)){
var href_uri_6173 = temp__4126__auto___6172__$1;
sheet_6171.ownerNode.href = href_uri_6173.makeUnique().toString();
} else {
}
} else {
}

var G__6174 = seq__6166;
var G__6175 = chunk__6167;
var G__6176 = count__6168;
var G__6177 = (i__6169 + (1));
seq__6166 = G__6174;
chunk__6167 = G__6175;
count__6168 = G__6176;
i__6169 = G__6177;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__6166);
if(temp__4126__auto__){
var seq__6166__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6166__$1)){
var c__4551__auto__ = cljs.core.chunk_first.call(null,seq__6166__$1);
var G__6178 = cljs.core.chunk_rest.call(null,seq__6166__$1);
var G__6179 = c__4551__auto__;
var G__6180 = cljs.core.count.call(null,c__4551__auto__);
var G__6181 = (0);
seq__6166 = G__6178;
chunk__6167 = G__6179;
count__6168 = G__6180;
i__6169 = G__6181;
continue;
} else {
var s = cljs.core.first.call(null,seq__6166__$1);
var temp__4126__auto___6182__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4126__auto___6182__$1)){
var sheet_6183 = temp__4126__auto___6182__$1;
var temp__4126__auto___6184__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_6183.href,changed);
if(cljs.core.truth_(temp__4126__auto___6184__$2)){
var href_uri_6185 = temp__4126__auto___6184__$2;
sheet_6183.ownerNode.href = href_uri_6185.makeUnique().toString();
} else {
}
} else {
}

var G__6186 = cljs.core.next.call(null,seq__6166__$1);
var G__6187 = null;
var G__6188 = (0);
var G__6189 = (0);
seq__6166 = G__6186;
chunk__6167 = G__6187;
count__6168 = G__6188;
i__6169 = G__6189;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function reload_img(changed){
var images = document.images;
var seq__6194 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__6195 = null;
var count__6196 = (0);
var i__6197 = (0);
while(true){
if((i__6197 < count__6196)){
var s = cljs.core._nth.call(null,chunk__6195,i__6197);
var temp__4126__auto___6198 = (images[s]);
if(cljs.core.truth_(temp__4126__auto___6198)){
var image_6199 = temp__4126__auto___6198;
var temp__4126__auto___6200__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_6199.src,changed);
if(cljs.core.truth_(temp__4126__auto___6200__$1)){
var href_uri_6201 = temp__4126__auto___6200__$1;
image_6199.src = href_uri_6201.makeUnique().toString();
} else {
}
} else {
}

var G__6202 = seq__6194;
var G__6203 = chunk__6195;
var G__6204 = count__6196;
var G__6205 = (i__6197 + (1));
seq__6194 = G__6202;
chunk__6195 = G__6203;
count__6196 = G__6204;
i__6197 = G__6205;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__6194);
if(temp__4126__auto__){
var seq__6194__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6194__$1)){
var c__4551__auto__ = cljs.core.chunk_first.call(null,seq__6194__$1);
var G__6206 = cljs.core.chunk_rest.call(null,seq__6194__$1);
var G__6207 = c__4551__auto__;
var G__6208 = cljs.core.count.call(null,c__4551__auto__);
var G__6209 = (0);
seq__6194 = G__6206;
chunk__6195 = G__6207;
count__6196 = G__6208;
i__6197 = G__6209;
continue;
} else {
var s = cljs.core.first.call(null,seq__6194__$1);
var temp__4126__auto___6210__$1 = (images[s]);
if(cljs.core.truth_(temp__4126__auto___6210__$1)){
var image_6211 = temp__4126__auto___6210__$1;
var temp__4126__auto___6212__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_6211.src,changed);
if(cljs.core.truth_(temp__4126__auto___6212__$2)){
var href_uri_6213 = temp__4126__auto___6212__$2;
image_6211.src = href_uri_6213.makeUnique().toString();
} else {
}
} else {
}

var G__6214 = cljs.core.next.call(null,seq__6194__$1);
var G__6215 = null;
var G__6216 = (0);
var G__6217 = (0);
seq__6194 = G__6214;
chunk__6195 = G__6215;
count__6196 = G__6216;
i__6197 = G__6217;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function reload_js(changed,p__6220){
var map__6222 = p__6220;
var map__6222__$1 = ((cljs.core.seq_QMARK_.call(null,map__6222))?cljs.core.apply.call(null,cljs.core.hash_map,map__6222):map__6222);
var on_jsload = cljs.core.get.call(null,map__6222__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__6222,map__6222__$1,on_jsload){
return (function (p1__6218_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__6218_SHARP_,".js");
});})(map__6222,map__6222__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__6222,map__6222__$1,on_jsload){
return (function (p1__6219_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__6219_SHARP_).makeUnique());
});})(js_files,map__6222,map__6222__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__6222,map__6222__$1,on_jsload){
return (function() { 
var G__6223__delegate = function (_){
return on_jsload.call(null);
};
var G__6223 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__6224__i = 0, G__6224__a = new Array(arguments.length -  0);
while (G__6224__i < G__6224__a.length) {G__6224__a[G__6224__i] = arguments[G__6224__i + 0]; ++G__6224__i;}
  _ = new cljs.core.IndexedSeq(G__6224__a,0);
} 
return G__6223__delegate.call(this,_);};
G__6223.cljs$lang$maxFixedArity = 0;
G__6223.cljs$lang$applyTo = (function (arglist__6225){
var _ = cljs.core.seq(arglist__6225);
return G__6223__delegate(_);
});
G__6223.cljs$core$IFn$_invoke$arity$variadic = G__6223__delegate;
return G__6223;
})()
;})(js_files,map__6222,map__6222__$1,on_jsload))
,((function (js_files,map__6222,map__6222__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__6222,map__6222__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.getPath();
var html_path = ((adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str(page_path),cljs.core.str("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_href_QMARK_.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__6230_6234 = cljs.core.seq.call(null,things_to_log);
var chunk__6231_6235 = null;
var count__6232_6236 = (0);
var i__6233_6237 = (0);
while(true){
if((i__6233_6237 < count__6232_6236)){
var t_6238 = cljs.core._nth.call(null,chunk__6231_6235,i__6233_6237);
console.log(t_6238);

var G__6239 = seq__6230_6234;
var G__6240 = chunk__6231_6235;
var G__6241 = count__6232_6236;
var G__6242 = (i__6233_6237 + (1));
seq__6230_6234 = G__6239;
chunk__6231_6235 = G__6240;
count__6232_6236 = G__6241;
i__6233_6237 = G__6242;
continue;
} else {
var temp__4126__auto___6243 = cljs.core.seq.call(null,seq__6230_6234);
if(temp__4126__auto___6243){
var seq__6230_6244__$1 = temp__4126__auto___6243;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6230_6244__$1)){
var c__4551__auto___6245 = cljs.core.chunk_first.call(null,seq__6230_6244__$1);
var G__6246 = cljs.core.chunk_rest.call(null,seq__6230_6244__$1);
var G__6247 = c__4551__auto___6245;
var G__6248 = cljs.core.count.call(null,c__4551__auto___6245);
var G__6249 = (0);
seq__6230_6234 = G__6246;
chunk__6231_6235 = G__6247;
count__6232_6236 = G__6248;
i__6233_6237 = G__6249;
continue;
} else {
var t_6250 = cljs.core.first.call(null,seq__6230_6244__$1);
console.log(t_6250);

var G__6251 = cljs.core.next.call(null,seq__6230_6244__$1);
var G__6252 = null;
var G__6253 = (0);
var G__6254 = (0);
seq__6230_6234 = G__6251;
chunk__6231_6235 = G__6252;
count__6232_6236 = G__6253;
i__6233_6237 = G__6254;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
adzerk.boot_reload.reload.reload = (function reload(opts,changed){
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed);

var G__6256 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__6256,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__6256);

adzerk.boot_reload.reload.reload_css.call(null,G__6256);

adzerk.boot_reload.reload.reload_img.call(null,G__6256);

return G__6256;
});
