// Compiled by ClojureScript 0.0-2816 {}
goog.provide('reagent.impl.component');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.interop');
goog.require('reagent.debug');
reagent.impl.component.state_atom = (function state_atom(this$){
var sa = (this$["cljsState"]);
if(!((sa == null))){
return sa;
} else {
return (this$["cljsState"] = reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(null));
}
});
reagent.impl.component.as_element = (function as_element(x){
var G__11150 = x;
return reagent.impl.template.as_element(G__11150);
});
reagent.impl.component.do_render = (function do_render(c){
var _STAR_current_component_STAR_11165 = reagent.impl.component._STAR_current_component_STAR_;
reagent.impl.component._STAR_current_component_STAR_ = c;

try{var f = (c["cljsRender"]);
var _ = ((cljs.core.ifn_QMARK_(f))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')))})());
var p = (c["props"]);
var res = ((((c["reagentRender"]) == null))?(function (){var G__11166 = c;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__11166) : f.call(null,G__11166));
})():(function (){var argv = (p["argv"]);
var n = cljs.core.count(argv);
var G__11167 = n;
switch (G__11167) {
case (1):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (2):
var G__11168 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__11168) : f.call(null,G__11168));

break;
case (3):
var G__11169 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
var G__11170 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__11169,G__11170) : f.call(null,G__11169,G__11170));

break;
case (4):
var G__11171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
var G__11172 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));
var G__11173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(3));
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__11171,G__11172,G__11173) : f.call(null,G__11171,G__11172,G__11173));

break;
case (5):
var G__11174 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
var G__11175 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));
var G__11176 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(3));
var G__11177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(4));
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__11174,G__11175,G__11176,G__11177) : f.call(null,G__11174,G__11175,G__11176,G__11177));

break;
default:
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(argv,(1)));

}
})());
if(cljs.core.vector_QMARK_(res)){
return reagent.impl.component.as_element(res);
} else {
if(cljs.core.ifn_QMARK_(res)){
(c["cljsRender"] = res);

return do_render(c);
} else {
return res;
}
}
}finally {reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR_11165;
}});
reagent.impl.component.static_fns = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$23,(function (){
var c = this;
if(cljs.core.not(reagent.impl.component._STAR_non_reactive_STAR_)){
return reagent.impl.batching.run_reactively(c,((function (c){
return (function (){
return reagent.impl.component.do_render(c);
});})(c))
);
} else {
return reagent.impl.component.do_render(c);
}
})], null);
reagent.impl.component.custom_wrapper = (function custom_wrapper(key,f){
var G__11194 = (((key instanceof cljs.core.Keyword))?key.fqn:null);
switch (G__11194) {
case "getDefaultProps":
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("getDefaultProps not supported yet"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([false], 0)))].join('')));


break;
case "getInitialState":
return ((function (G__11194){
return (function (){
var c = this;
var G__11195 = reagent.impl.component.state_atom(c);
var G__11196 = (function (){var G__11197 = c;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__11197) : f.call(null,G__11197));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11195,G__11196) : cljs.core.reset_BANG_.call(null,G__11195,G__11196));
});
;})(G__11194))

break;
case "componentWillReceiveProps":
return ((function (G__11194){
return (function (props){
var c = this;
var G__11198 = c;
var G__11199 = (props["argv"]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__11198,G__11199) : f.call(null,G__11198,G__11199));
});
;})(G__11194))

break;
case "shouldComponentUpdate":
return ((function (G__11194){
return (function (nextprops,nextstate){
var or__3765__auto__ = reagent.impl.util._STAR_always_update_STAR_;
if(cljs.core.truth_(or__3765__auto__)){
return or__3765__auto__;
} else {
var c = this;
var old_argv = (c["props"]["argv"]);
var new_argv = (nextprops["argv"]);
if((f == null)){
return ((old_argv == null)) || ((new_argv == null)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_argv,new_argv));
} else {
var G__11200 = c;
var G__11201 = old_argv;
var G__11202 = new_argv;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__11200,G__11201,G__11202) : f.call(null,G__11200,G__11201,G__11202));
}
}
});
;})(G__11194))

break;
case "componentWillUpdate":
return ((function (G__11194){
return (function (nextprops){
var c = this;
var G__11203 = c;
var G__11204 = (nextprops["argv"]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__11203,G__11204) : f.call(null,G__11203,G__11204));
});
;})(G__11194))

break;
case "componentDidUpdate":
return ((function (G__11194){
return (function (oldprops){
var c = this;
var G__11205 = c;
var G__11206 = (oldprops["argv"]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__11205,G__11206) : f.call(null,G__11205,G__11206));
});
;})(G__11194))

break;
case "componentWillMount":
return ((function (G__11194){
return (function (){
var c = this;
(c["cljsMountOrder"] = reagent.impl.batching.next_mount_count());

if((f == null)){
return null;
} else {
var G__11207 = c;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__11207) : f.call(null,G__11207));
}
});
;})(G__11194))

break;
case "componentWillUnmount":
return ((function (G__11194){
return (function (){
var c = this;
reagent.impl.batching.dispose(c);

if((f == null)){
return null;
} else {
var G__11208 = c;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__11208) : f.call(null,G__11208));
}
});
;})(G__11194))

break;
default:
return null;

}
});
reagent.impl.component.default_wrapper = (function default_wrapper(f){
if(cljs.core.ifn_QMARK_(f)){
return (function() { 
var G__11210__delegate = function (args){
var c = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,c,args);
};
var G__11210 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11211__i = 0, G__11211__a = new Array(arguments.length -  0);
while (G__11211__i < G__11211__a.length) {G__11211__a[G__11211__i] = arguments[G__11211__i + 0]; ++G__11211__i;}
  args = new cljs.core.IndexedSeq(G__11211__a,0);
} 
return G__11210__delegate.call(this,args);};
G__11210.cljs$lang$maxFixedArity = 0;
G__11210.cljs$lang$applyTo = (function (arglist__11212){
var args = cljs.core.seq(arglist__11212);
return G__11210__delegate(args);
});
G__11210.cljs$core$IFn$_invoke$arity$variadic = G__11210__delegate;
return G__11210;
})()
;
} else {
return f;
}
});
reagent.impl.component.dont_wrap = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$24,null,cljs.core.constant$keyword$25,null,cljs.core.constant$keyword$23,null,cljs.core.constant$keyword$26,null], null), null);
reagent.impl.component.dont_bind = (function dont_bind(f){
if(cljs.core.fn_QMARK_(f)){
var G__11214 = f;
(G__11214["__reactDontBind"] = true);

return G__11214;
} else {
return f;
}
});
reagent.impl.component.get_wrapper = (function get_wrapper(key,f,name){
if(cljs.core.truth_((function (){var G__11216 = key;
return (reagent.impl.component.dont_wrap.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.component.dont_wrap.cljs$core$IFn$_invoke$arity$1(G__11216) : reagent.impl.component.dont_wrap.call(null,G__11216));
})())){
return reagent.impl.component.dont_bind(f);
} else {
var wrap = reagent.impl.component.custom_wrapper(key,f);
if(cljs.core.truth_((function (){var and__3753__auto__ = wrap;
if(cljs.core.truth_(and__3753__auto__)){
return f;
} else {
return and__3753__auto__;
}
})())){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Expected function in "),cljs.core.str(name),cljs.core.str(key),cljs.core.str(" but got "),cljs.core.str(f)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}
} else {
}

var or__3765__auto__ = wrap;
if(cljs.core.truth_(or__3765__auto__)){
return or__3765__auto__;
} else {
return reagent.impl.component.default_wrapper(f);
}
}
});
reagent.impl.component.obligatory = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$27,null,cljs.core.constant$keyword$28,null,cljs.core.constant$keyword$29,null], null);
reagent.impl.component.dash_to_camel = reagent.impl.util.memoize_1(reagent.impl.util.dash_to_camel);
reagent.impl.component.camelify_map_keys = (function camelify_map_keys(fun_map){
return cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((function (){var G__11218 = k;
return (reagent.impl.component.dash_to_camel.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.component.dash_to_camel.cljs$core$IFn$_invoke$arity$1(G__11218) : reagent.impl.component.dash_to_camel.call(null,G__11218));
})()),v);
}),cljs.core.PersistentArrayMap.EMPTY,fun_map);
});
reagent.impl.component.add_obligatory = (function add_obligatory(fun_map){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.impl.component.obligatory,fun_map], 0));
});
reagent.impl.component.add_render = (function add_render(fun_map,render_f,name){
var fm = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(fun_map,cljs.core.constant$keyword$24,render_f,cljs.core.array_seq([cljs.core.constant$keyword$23,cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(reagent.impl.component.static_fns)], 0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fm,cljs.core.constant$keyword$26,((function (fm){
return (function (){
return name;
});})(fm))
);

});
reagent.impl.component.fun_name = (function fun_name(f){
var or__3765__auto__ = (function (){var and__3753__auto__ = cljs.core.fn_QMARK_(f);
if(and__3753__auto__){
var or__3765__auto__ = (f["displayName"]);
if(cljs.core.truth_(or__3765__auto__)){
return or__3765__auto__;
} else {
return (f["name"]);
}
} else {
return and__3753__auto__;
}
})();
if(cljs.core.truth_(or__3765__auto__)){
return or__3765__auto__;
} else {
var or__3765__auto____$1 = (function (){var and__3753__auto__ = (function (){var G__11226 = f;
if(G__11226){
var bit__4439__auto__ = (G__11226.cljs$lang$protocol_mask$partition1$ & (4096));
if((bit__4439__auto__) || (G__11226.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
})();
if(and__3753__auto__){
return cljs.core.name(f);
} else {
return and__3753__auto__;
}
})();
if(cljs.core.truth_(or__3765__auto____$1)){
return or__3765__auto____$1;
} else {
var m = cljs.core.meta(f);
if(cljs.core.map_QMARK_(m)){
return cljs.core.constant$keyword$30.cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
}
}
});
reagent.impl.component.wrap_funs = (function wrap_funs(fmap){
var fun_map = (function (){var temp__4425__auto__ = cljs.core.constant$keyword$31.cljs$core$IFn$_invoke$arity$1(fmap);
if((temp__4425__auto__ == null)){
return fmap;
} else {
var cf = temp__4425__auto__;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fmap,cljs.core.constant$keyword$25,cf),cljs.core.constant$keyword$31);
}
})();
var render_fun = (function (){var or__3765__auto__ = cljs.core.constant$keyword$25.cljs$core$IFn$_invoke$arity$1(fun_map);
if(cljs.core.truth_(or__3765__auto__)){
return or__3765__auto__;
} else {
return cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(fun_map);
}
})();
var _ = ((cljs.core.ifn_QMARK_(render_fun))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Render must be a function, not "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([render_fun], 0)))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"render-fun","render-fun",-1209513086,null))], 0)))].join('')))})());
var name = [cljs.core.str((function (){var or__3765__auto__ = cljs.core.constant$keyword$32.cljs$core$IFn$_invoke$arity$1(fun_map);
if(cljs.core.truth_(or__3765__auto__)){
return or__3765__auto__;
} else {
return reagent.impl.component.fun_name(render_fun);
}
})())].join('');
var name_SINGLEQUOTE_ = ((cljs.core.empty_QMARK_(name))?[cljs.core.str(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("reagent"))].join(''):name);
var fmap__$1 = reagent.impl.component.add_render(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fun_map,cljs.core.constant$keyword$32,name_SINGLEQUOTE_),render_fun,name_SINGLEQUOTE_);
return cljs.core.reduce_kv(((function (fun_map,render_fun,_,name,name_SINGLEQUOTE_,fmap__$1){
return (function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,reagent.impl.component.get_wrapper(k,v,name_SINGLEQUOTE_));
});})(fun_map,render_fun,_,name,name_SINGLEQUOTE_,fmap__$1))
,cljs.core.PersistentArrayMap.EMPTY,fmap__$1);
});
reagent.impl.component.map_to_js = (function map_to_js(m){
return cljs.core.reduce_kv((function (o,k,v){
var G__11228 = o;
(G__11228[cljs.core.name(k)] = v);

return G__11228;
}),{},m);
});
reagent.impl.component.cljsify = (function cljsify(body){
return reagent.impl.component.map_to_js(reagent.impl.component.wrap_funs(reagent.impl.component.add_obligatory(reagent.impl.component.camelify_map_keys(body))));
});
reagent.impl.component.create_class = (function create_class(body){
if(cljs.core.map_QMARK_(body)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"body","body",-408674142,null))], 0)))].join('')));
}

var spec = reagent.impl.component.cljsify(body);
var res = (React["createClass"])(spec);
var f = ((function (spec,res){
return (function() { 
var G__11229__delegate = function (args){
return reagent.impl.component.as_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,res,args));
};
var G__11229 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11230__i = 0, G__11230__a = new Array(arguments.length -  0);
while (G__11230__i < G__11230__a.length) {G__11230__a[G__11230__i] = arguments[G__11230__i + 0]; ++G__11230__i;}
  args = new cljs.core.IndexedSeq(G__11230__a,0);
} 
return G__11229__delegate.call(this,args);};
G__11229.cljs$lang$maxFixedArity = 0;
G__11229.cljs$lang$applyTo = (function (arglist__11231){
var args = cljs.core.seq(arglist__11231);
return G__11229__delegate(args);
});
G__11229.cljs$core$IFn$_invoke$arity$variadic = G__11229__delegate;
return G__11229;
})()
;})(spec,res))
;
reagent.impl.util.cache_react_class(f,res);

reagent.impl.util.cache_react_class(res,res);

return f;
});
reagent.impl.component.comp_name = (function comp_name(){
var n = (function (){var G__11233 = reagent.impl.component._STAR_current_component_STAR_;
var G__11233__$1 = (((G__11233 == null))?null:(G__11233["cljsName"])());
return G__11233__$1;
})();
if(!(cljs.core.empty_QMARK_(n))){
return [cljs.core.str(" (in "),cljs.core.str(n),cljs.core.str(")")].join('');
} else {
return "";
}

});
reagent.impl.component.shallow_obj_to_map = (function shallow_obj_to_map(o){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4521__auto__ = (function iter__11240(s__11241){
return (new cljs.core.LazySeq(null,(function (){
var s__11241__$1 = s__11241;
while(true){
var temp__4423__auto__ = cljs.core.seq(s__11241__$1);
if(temp__4423__auto__){
var s__11241__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11241__$2)){
var c__4519__auto__ = cljs.core.chunk_first(s__11241__$2);
var size__4520__auto__ = cljs.core.count(c__4519__auto__);
var b__11243 = cljs.core.chunk_buffer(size__4520__auto__);
if((function (){var i__11242 = (0);
while(true){
if((i__11242 < size__4520__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4519__auto__,i__11242);
cljs.core.chunk_append(b__11243,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(o[k])], null));

var G__11246 = (i__11242 + (1));
i__11242 = G__11246;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11243),iter__11240(cljs.core.chunk_rest(s__11241__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11243),null);
}
} else {
var k = cljs.core.first(s__11241__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(o[k])], null),iter__11240(cljs.core.rest(s__11241__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4521__auto__(cljs.core.js_keys(o));
})());
});
reagent.impl.component.elem_counter = (0);
reagent.impl.component.reactify_component = (function reactify_component(comp){
return (React["createClass"])({"displayName": "react-wrapper", "render": (function (){
var this$ = this;
return reagent.impl.component.as_element(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(reagent.impl.component.shallow_obj_to_map((this$["props"])),cljs.core.constant$keyword$33,reagent.impl.component.elem_counter = (reagent.impl.component.elem_counter + (1)))], null));
})});
});
