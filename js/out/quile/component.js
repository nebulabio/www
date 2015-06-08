// Compiled by ClojureScript 0.0-2816 {}
goog.provide('quile.component');
goog.require('cljs.core');
goog.require('quile.dependency');

quile.component.Lifecycle = (function (){var obj10947 = {};
return obj10947;
})();

quile.component.start = (function start(component){
if((function (){var and__3753__auto__ = component;
if(and__3753__auto__){
return component.quile$component$Lifecycle$start$arity$1;
} else {
return and__3753__auto__;
}
})()){
return component.quile$component$Lifecycle$start$arity$1(component);
} else {
var x__4409__auto__ = (((component == null))?null:component);
return (function (){var or__3765__auto__ = (quile.component.start[(function (){var G__10951 = x__4409__auto__;
return goog.typeOf(G__10951);
})()]);
if(or__3765__auto__){
return or__3765__auto__;
} else {
var or__3765__auto____$1 = (quile.component.start["_"]);
if(or__3765__auto____$1){
return or__3765__auto____$1;
} else {
throw cljs.core.missing_protocol("Lifecycle.start",component);
}
}
})().call(null,component);
}
});

quile.component.stop = (function stop(component){
if((function (){var and__3753__auto__ = component;
if(and__3753__auto__){
return component.quile$component$Lifecycle$stop$arity$1;
} else {
return and__3753__auto__;
}
})()){
return component.quile$component$Lifecycle$stop$arity$1(component);
} else {
var x__4409__auto__ = (((component == null))?null:component);
return (function (){var or__3765__auto__ = (quile.component.stop[(function (){var G__10955 = x__4409__auto__;
return goog.typeOf(G__10955);
})()]);
if(or__3765__auto__){
return or__3765__auto__;
} else {
var or__3765__auto____$1 = (quile.component.stop["_"]);
if(or__3765__auto____$1){
return or__3765__auto____$1;
} else {
throw cljs.core.missing_protocol("Lifecycle.stop",component);
}
}
})().call(null,component);
}
});

(quile.component.Lifecycle["object"] = true);

(quile.component.start["object"] = (function (this$){
return this$;
}));

(quile.component.stop["object"] = (function (this$){
return this$;
}));
/**
* Returns the map of other components on which this component depends.
*/
quile.component.dependencies = (function dependencies(component){
return cljs.core.constant$keyword$75.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(component),cljs.core.PersistentArrayMap.EMPTY);
});
/**
* Associates metadata with component describing the other components
* on which it depends. Component dependencies are specified as a map.
* Keys in the map correspond to keys in this component which must be
* provided by its containing system. Values in the map are the keys in
* the system at which those components may be found. Alternatively, if
* the keys are the same in both the component and its enclosing
* system, they may be specified as a vector of keys.
*/
quile.component.using = (function using(component,dependencies){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(component,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$75], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY),((cljs.core.map_QMARK_(dependencies))?dependencies:((cljs.core.vector_QMARK_(dependencies))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null);
}),dependencies)):(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Dependencies must be a map or vector",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$76,cljs.core.constant$keyword$79,cljs.core.constant$keyword$77,component,cljs.core.constant$keyword$78,dependencies], null))})()
)));
});
/**
* Associates dependency metadata with multiple components in the
* system. dependency-map is a map of keys in the system to maps or
* vectors specifying the dependencies of the component at that key in
* the system, as per 'using'.
*/
quile.component.system_using = (function system_using(system,dependency_map){
return cljs.core.reduce_kv((function (system__$1,key,dependencies){
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(system__$1,key);
if(cljs.core.truth_(component)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Missing component "),cljs.core.str(key),cljs.core.str(" from system")].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$76,cljs.core.constant$keyword$82,cljs.core.constant$keyword$80,key,cljs.core.constant$keyword$81,system__$1], null));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(system__$1,key,quile.component.using(component,dependencies));
}),system,dependency_map);
});
/**
* Returns a dependency graph, using the data structures defined in
* quile.dependency, for the components found by
* (select-keys system component-keys)
*/
quile.component.dependency_graph = (function dependency_graph(system,component_keys){
return cljs.core.reduce_kv((function (graph,key,component){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__10956_SHARP_,p2__10957_SHARP_){
return quile.dependency.depend(p1__10956_SHARP_,key,p2__10957_SHARP_);
}),graph,cljs.core.vals(quile.component.dependencies(component)));
}),quile.dependency.graph(),cljs.core.select_keys(system,component_keys));
});
quile.component.assoc_dependency = (function assoc_dependency(system,component,dependency_key,system_key){
var dependency = cljs.core.get.cljs$core$IFn$_invoke$arity$2(system,system_key);
if(cljs.core.truth_(dependency)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Missing dependency "),cljs.core.str(dependency_key),cljs.core.str(" of "),cljs.core.str(component),cljs.core.str(" expected in system at "),cljs.core.str(system_key)].join(''),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$76,cljs.core.constant$keyword$84,cljs.core.constant$keyword$80,system_key,cljs.core.constant$keyword$83,dependency_key,cljs.core.constant$keyword$77,component,cljs.core.constant$keyword$81,system], null));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(component,dependency_key,dependency);
});
quile.component.assoc_dependencies = (function assoc_dependencies(component,system){
return cljs.core.reduce_kv((function (p1__10958_SHARP_,p2__10959_SHARP_,p3__10960_SHARP_){
return quile.component.assoc_dependency(system,p1__10958_SHARP_,p2__10959_SHARP_,p3__10960_SHARP_);
}),component,quile.component.dependencies(component));
});
quile.component.try_action = (function try_action(component,system,key,f,args){
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,component,args);
}catch (e10962){if((e10962 instanceof Error)){
var t = e10962;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3([cljs.core.str("Error in component "),cljs.core.str(cljs.core._PLUS_),cljs.core.str(key)].join(''),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$76,cljs.core.constant$keyword$86,cljs.core.constant$keyword$85,f,cljs.core.constant$keyword$77,component,cljs.core.constant$keyword$81,system], null),t);
} else {
throw e10962;

}
}});
quile.component.get_component = (function get_component(system,key){
var or__3765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(system,key);
if(cljs.core.truth_(or__3765__auto__)){
return or__3765__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Missing component "),cljs.core.str(key),cljs.core.str(" from system")].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$76,cljs.core.constant$keyword$82,cljs.core.constant$keyword$80,key,cljs.core.constant$keyword$81,system], null));
}
});
/**
* Invokes (apply f component args) on each of the components at
* component-keys in the system, in dependency order. Before invoking
* f, assoc's updated dependencies of the component.
* @param {...*} var_args
*/
quile.component.update_system = (function() { 
var update_system__delegate = function (system,component_keys,f,args){
var graph = quile.component.dependency_graph(system,component_keys);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (graph){
return (function (system__$1,key){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(system__$1,key,quile.component.try_action(quile.component.assoc_dependencies(quile.component.get_component(system__$1,key),system__$1),system__$1,key,f,args));
});})(graph))
,system,cljs.core.sort.cljs$core$IFn$_invoke$arity$2(quile.dependency.topo_comparator(graph),component_keys));
};
var update_system = function (system,component_keys,f,var_args){
var args = null;
if (arguments.length > 3) {
var G__10963__i = 0, G__10963__a = new Array(arguments.length -  3);
while (G__10963__i < G__10963__a.length) {G__10963__a[G__10963__i] = arguments[G__10963__i + 3]; ++G__10963__i;}
  args = new cljs.core.IndexedSeq(G__10963__a,0);
} 
return update_system__delegate.call(this,system,component_keys,f,args);};
update_system.cljs$lang$maxFixedArity = 3;
update_system.cljs$lang$applyTo = (function (arglist__10964){
var system = cljs.core.first(arglist__10964);
arglist__10964 = cljs.core.next(arglist__10964);
var component_keys = cljs.core.first(arglist__10964);
arglist__10964 = cljs.core.next(arglist__10964);
var f = cljs.core.first(arglist__10964);
var args = cljs.core.rest(arglist__10964);
return update_system__delegate(system,component_keys,f,args);
});
update_system.cljs$core$IFn$_invoke$arity$variadic = update_system__delegate;
return update_system;
})()
;
/**
* Like update-system but operates in reverse dependency order.
* @param {...*} var_args
*/
quile.component.update_system_reverse = (function() { 
var update_system_reverse__delegate = function (system,component_keys,f,args){
var graph = quile.component.dependency_graph(system,component_keys);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (graph){
return (function (system__$1,key){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(system__$1,key,quile.component.try_action(quile.component.assoc_dependencies(quile.component.get_component(system__$1,key),system__$1),system__$1,key,f,args));
});})(graph))
,system,cljs.core.reverse(cljs.core.sort.cljs$core$IFn$_invoke$arity$2(quile.dependency.topo_comparator(graph),component_keys)));
};
var update_system_reverse = function (system,component_keys,f,var_args){
var args = null;
if (arguments.length > 3) {
var G__10965__i = 0, G__10965__a = new Array(arguments.length -  3);
while (G__10965__i < G__10965__a.length) {G__10965__a[G__10965__i] = arguments[G__10965__i + 3]; ++G__10965__i;}
  args = new cljs.core.IndexedSeq(G__10965__a,0);
} 
return update_system_reverse__delegate.call(this,system,component_keys,f,args);};
update_system_reverse.cljs$lang$maxFixedArity = 3;
update_system_reverse.cljs$lang$applyTo = (function (arglist__10966){
var system = cljs.core.first(arglist__10966);
arglist__10966 = cljs.core.next(arglist__10966);
var component_keys = cljs.core.first(arglist__10966);
arglist__10966 = cljs.core.next(arglist__10966);
var f = cljs.core.first(arglist__10966);
var args = cljs.core.rest(arglist__10966);
return update_system_reverse__delegate(system,component_keys,f,args);
});
update_system_reverse.cljs$core$IFn$_invoke$arity$variadic = update_system_reverse__delegate;
return update_system_reverse;
})()
;
/**
* Recursively starts components in the system, in dependency order,
* assoc'ing in their dependencies along the way. component-keys is a
* collection of keys (order doesn't matter) in the system specifying
* the components to start, defaults to all keys in the system.
*/
quile.component.start_system = (function() {
var start_system = null;
var start_system__1 = (function (system){
return start_system.cljs$core$IFn$_invoke$arity$2(system,cljs.core.keys(system));
});
var start_system__2 = (function (system,component_keys){
return quile.component.update_system(system,component_keys,quile.component.start);
});
start_system = function(system,component_keys){
switch(arguments.length){
case 1:
return start_system__1.call(this,system);
case 2:
return start_system__2.call(this,system,component_keys);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
start_system.cljs$core$IFn$_invoke$arity$1 = start_system__1;
start_system.cljs$core$IFn$_invoke$arity$2 = start_system__2;
return start_system;
})()
;
/**
* Recursively stops components in the system, in reverse dependency
* order. component-keys is a collection of keys (order doesn't matter)
* in the system specifying the components to stop, defaults to all
* keys in the system.
*/
quile.component.stop_system = (function() {
var stop_system = null;
var stop_system__1 = (function (system){
return stop_system.cljs$core$IFn$_invoke$arity$2(system,cljs.core.keys(system));
});
var stop_system__2 = (function (system,component_keys){
return quile.component.update_system_reverse(system,component_keys,quile.component.stop);
});
stop_system = function(system,component_keys){
switch(arguments.length){
case 1:
return stop_system__1.call(this,system);
case 2:
return stop_system__2.call(this,system,component_keys);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stop_system.cljs$core$IFn$_invoke$arity$1 = stop_system__1;
stop_system.cljs$core$IFn$_invoke$arity$2 = stop_system__2;
return stop_system;
})()
;

/**
* @constructor
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
quile.component.SystemMap = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
quile.component.SystemMap.prototype.quile$component$Lifecycle$ = true;

quile.component.SystemMap.prototype.quile$component$Lifecycle$start$arity$1 = (function (system){
var self__ = this;
var system__$1 = this;
return quile.component.start_system.cljs$core$IFn$_invoke$arity$1(system__$1);
});

quile.component.SystemMap.prototype.quile$component$Lifecycle$stop$arity$1 = (function (system){
var self__ = this;
var system__$1 = this;
return quile.component.stop_system.cljs$core$IFn$_invoke$arity$1(system__$1);
});

quile.component.SystemMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4368__auto__,k__4369__auto__){
var self__ = this;
var this__4368__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4368__auto____$1,k__4369__auto__,null);
});

quile.component.SystemMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4370__auto__,k10972,else__4371__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
var G__10974 = k10972;
switch (G__10974) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k10972,else__4371__auto__);

}
});

quile.component.SystemMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4382__auto__,writer__4383__auto__,opts__4384__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var pr_pair__4385__auto__ = ((function (this__4382__auto____$1){
return (function (keyval__4386__auto__){
return cljs.core.pr_sequential_writer(writer__4383__auto__,cljs.core.pr_writer,""," ","",opts__4384__auto__,keyval__4386__auto__);
});})(this__4382__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4383__auto__,pr_pair__4385__auto__,"#quile.component.SystemMap{",", ","}",opts__4384__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

quile.component.SystemMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4366__auto__){
var self__ = this;
var this__4366__auto____$1 = this;
return self__.__meta;
});

quile.component.SystemMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4362__auto__){
var self__ = this;
var this__4362__auto____$1 = this;
return (new quile.component.SystemMap(self__.__meta,self__.__extmap,self__.__hash));
});

quile.component.SystemMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4372__auto__){
var self__ = this;
var this__4372__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

quile.component.SystemMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4363__auto__){
var self__ = this;
var this__4363__auto____$1 = this;
var h__4186__auto__ = self__.__hash;
if(!((h__4186__auto__ == null))){
return h__4186__auto__;
} else {
var h__4186__auto____$1 = cljs.core.hash_imap(this__4363__auto____$1);
self__.__hash = h__4186__auto____$1;

return h__4186__auto____$1;
}
});

quile.component.SystemMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4364__auto__,other__4365__auto__){
var self__ = this;
var this__4364__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3753__auto__ = other__4365__auto__;
if(cljs.core.truth_(and__3753__auto__)){
return ((this__4364__auto____$1.constructor === other__4365__auto__.constructor)) && (cljs.core.equiv_map(this__4364__auto____$1,other__4365__auto__));
} else {
return and__3753__auto__;
}
})())){
return true;
} else {
return false;
}
});

quile.component.SystemMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4377__auto__,k__4378__auto__){
var self__ = this;
var this__4377__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__4378__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4377__auto____$1),self__.__meta),k__4378__auto__);
} else {
return (new quile.component.SystemMap(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4378__auto__)),null));
}
});

quile.component.SystemMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4375__auto__,k__4376__auto__,G__10971){
var self__ = this;
var this__4375__auto____$1 = this;
var pred__10975 = cljs.core.keyword_identical_QMARK_;
var expr__10976 = k__4376__auto__;
return (new quile.component.SystemMap(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4376__auto__,G__10971),null));
});

quile.component.SystemMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

quile.component.SystemMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4367__auto__,G__10971){
var self__ = this;
var this__4367__auto____$1 = this;
return (new quile.component.SystemMap(G__10971,self__.__extmap,self__.__hash));
});

quile.component.SystemMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4373__auto__,entry__4374__auto__){
var self__ = this;
var this__4373__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4374__auto__)){
return cljs.core._assoc(this__4373__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4374__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4374__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4373__auto____$1,entry__4374__auto__);
}
});

quile.component.SystemMap.cljs$lang$type = true;

quile.component.SystemMap.cljs$lang$ctorPrSeq = (function (this__4402__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"quile.component/SystemMap");
});

quile.component.SystemMap.cljs$lang$ctorPrWriter = (function (this__4402__auto__,writer__4403__auto__){
return cljs.core._write(writer__4403__auto__,"quile.component/SystemMap");
});

quile.component.__GT_SystemMap = (function __GT_SystemMap(){
return (new quile.component.SystemMap(null,null,null));
});

quile.component.map__GT_SystemMap = (function map__GT_SystemMap(G__10973){
return (new quile.component.SystemMap(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__10973),null));
});

/**
* Returns a system constructed of key/value pairs. The system has
* default implementations of the Lifecycle 'start' and 'stop' methods
* which recursively start/stop all components in the system.
* 
* System maps print as #<SystemMap> to avoid overwhelming the printer
* with large objects. As a consequence, printed system maps cannot be
* 'read'. To disable this behavior and print system maps like normal
* records, call
* (remove-method clojure.core/print-method quile.component.SystemMap)
* @param {...*} var_args
*/
quile.component.system_map = (function() { 
var system_map__delegate = function (keyvals){
if(cljs.core.even_QMARK_(cljs.core.count(keyvals))){
} else {
throw (function (){var G__10980 = "system-map requires an even number of arguments";
return Error(G__10980);
})();
}

return quile.component.map__GT_SystemMap(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,keyvals));
};
var system_map = function (var_args){
var keyvals = null;
if (arguments.length > 0) {
var G__10981__i = 0, G__10981__a = new Array(arguments.length -  0);
while (G__10981__i < G__10981__a.length) {G__10981__a[G__10981__i] = arguments[G__10981__i + 0]; ++G__10981__i;}
  keyvals = new cljs.core.IndexedSeq(G__10981__a,0);
} 
return system_map__delegate.call(this,keyvals);};
system_map.cljs$lang$maxFixedArity = 0;
system_map.cljs$lang$applyTo = (function (arglist__10982){
var keyvals = cljs.core.seq(arglist__10982);
return system_map__delegate(keyvals);
});
system_map.cljs$core$IFn$_invoke$arity$variadic = system_map__delegate;
return system_map;
})()
;
/**
* True if the java.lang.Throwable has ex-data indicating it was
* thrown by something in the quile.component namespace.
*/
quile.component.ex_component_QMARK_ = (function ex_component_QMARK_(throwable){
var map__10984 = cljs.core.ex_data(throwable);
var map__10984__$1 = ((cljs.core.seq_QMARK_(map__10984))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10984):map__10984);
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10984__$1,cljs.core.constant$keyword$76);
return ((reason instanceof cljs.core.Keyword)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("quile.component",cljs.core.namespace(reason)));
});
/**
* If the java.lang.Throwable has ex-data provided by the
* quile.component namespace, returns a new exception
* instance with the :component and :system removed from its ex-data.
* Preserves the message, cause, and stacktrace of the original
* throwable. If the throwable was not created by this namespace,
* returns it unchanged. Use this when you want to catch and rethrow
* exceptions without including the full component or system.
*/
quile.component.ex_without_components = (function ex_without_components(throwable){
if(quile.component.ex_component_QMARK_(throwable)){
var ex = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(throwable.getMessage(),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.ex_data(throwable),cljs.core.constant$keyword$77,cljs.core.array_seq([cljs.core.constant$keyword$81], 0)),throwable.getCause());
var temp__4423__auto___10985 = throwable.getStackTrace();
if(cljs.core.truth_(temp__4423__auto___10985)){
var stacktrace_10986 = temp__4423__auto___10985;
ex.setStackTrace(stacktrace_10986);
} else {
}

return ex;
} else {
return throwable;
}
});
