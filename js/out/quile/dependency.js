// Compiled by ClojureScript 0.0-2816 {}
goog.provide('quile.dependency');
goog.require('cljs.core');
goog.require('clojure.set');

quile.dependency.DependencyGraph = (function (){var obj10990 = {};
return obj10990;
})();

quile.dependency.immediate_dependencies = (function immediate_dependencies(graph,node){
if((function (){var and__3753__auto__ = graph;
if(and__3753__auto__){
return graph.quile$dependency$DependencyGraph$immediate_dependencies$arity$2;
} else {
return and__3753__auto__;
}
})()){
return graph.quile$dependency$DependencyGraph$immediate_dependencies$arity$2(graph,node);
} else {
var x__4409__auto__ = (((graph == null))?null:graph);
return (function (){var or__3765__auto__ = (quile.dependency.immediate_dependencies[(function (){var G__10994 = x__4409__auto__;
return goog.typeOf(G__10994);
})()]);
if(or__3765__auto__){
return or__3765__auto__;
} else {
var or__3765__auto____$1 = (quile.dependency.immediate_dependencies["_"]);
if(or__3765__auto____$1){
return or__3765__auto____$1;
} else {
throw cljs.core.missing_protocol("DependencyGraph.immediate-dependencies",graph);
}
}
})().call(null,graph,node);
}
});

quile.dependency.immediate_dependents = (function immediate_dependents(graph,node){
if((function (){var and__3753__auto__ = graph;
if(and__3753__auto__){
return graph.quile$dependency$DependencyGraph$immediate_dependents$arity$2;
} else {
return and__3753__auto__;
}
})()){
return graph.quile$dependency$DependencyGraph$immediate_dependents$arity$2(graph,node);
} else {
var x__4409__auto__ = (((graph == null))?null:graph);
return (function (){var or__3765__auto__ = (quile.dependency.immediate_dependents[(function (){var G__10998 = x__4409__auto__;
return goog.typeOf(G__10998);
})()]);
if(or__3765__auto__){
return or__3765__auto__;
} else {
var or__3765__auto____$1 = (quile.dependency.immediate_dependents["_"]);
if(or__3765__auto____$1){
return or__3765__auto____$1;
} else {
throw cljs.core.missing_protocol("DependencyGraph.immediate-dependents",graph);
}
}
})().call(null,graph,node);
}
});

quile.dependency.transitive_dependencies = (function transitive_dependencies(graph,node){
if((function (){var and__3753__auto__ = graph;
if(and__3753__auto__){
return graph.quile$dependency$DependencyGraph$transitive_dependencies$arity$2;
} else {
return and__3753__auto__;
}
})()){
return graph.quile$dependency$DependencyGraph$transitive_dependencies$arity$2(graph,node);
} else {
var x__4409__auto__ = (((graph == null))?null:graph);
return (function (){var or__3765__auto__ = (quile.dependency.transitive_dependencies[(function (){var G__11002 = x__4409__auto__;
return goog.typeOf(G__11002);
})()]);
if(or__3765__auto__){
return or__3765__auto__;
} else {
var or__3765__auto____$1 = (quile.dependency.transitive_dependencies["_"]);
if(or__3765__auto____$1){
return or__3765__auto____$1;
} else {
throw cljs.core.missing_protocol("DependencyGraph.transitive-dependencies",graph);
}
}
})().call(null,graph,node);
}
});

quile.dependency.transitive_dependents = (function transitive_dependents(graph,node){
if((function (){var and__3753__auto__ = graph;
if(and__3753__auto__){
return graph.quile$dependency$DependencyGraph$transitive_dependents$arity$2;
} else {
return and__3753__auto__;
}
})()){
return graph.quile$dependency$DependencyGraph$transitive_dependents$arity$2(graph,node);
} else {
var x__4409__auto__ = (((graph == null))?null:graph);
return (function (){var or__3765__auto__ = (quile.dependency.transitive_dependents[(function (){var G__11006 = x__4409__auto__;
return goog.typeOf(G__11006);
})()]);
if(or__3765__auto__){
return or__3765__auto__;
} else {
var or__3765__auto____$1 = (quile.dependency.transitive_dependents["_"]);
if(or__3765__auto____$1){
return or__3765__auto____$1;
} else {
throw cljs.core.missing_protocol("DependencyGraph.transitive-dependents",graph);
}
}
})().call(null,graph,node);
}
});

quile.dependency.nodes = (function nodes(graph){
if((function (){var and__3753__auto__ = graph;
if(and__3753__auto__){
return graph.quile$dependency$DependencyGraph$nodes$arity$1;
} else {
return and__3753__auto__;
}
})()){
return graph.quile$dependency$DependencyGraph$nodes$arity$1(graph);
} else {
var x__4409__auto__ = (((graph == null))?null:graph);
return (function (){var or__3765__auto__ = (quile.dependency.nodes[(function (){var G__11010 = x__4409__auto__;
return goog.typeOf(G__11010);
})()]);
if(or__3765__auto__){
return or__3765__auto__;
} else {
var or__3765__auto____$1 = (quile.dependency.nodes["_"]);
if(or__3765__auto____$1){
return or__3765__auto____$1;
} else {
throw cljs.core.missing_protocol("DependencyGraph.nodes",graph);
}
}
})().call(null,graph);
}
});


quile.dependency.DependencyGraphUpdate = (function (){var obj11012 = {};
return obj11012;
})();

quile.dependency.depend = (function depend(graph,node,dep){
if((function (){var and__3753__auto__ = graph;
if(and__3753__auto__){
return graph.quile$dependency$DependencyGraphUpdate$depend$arity$3;
} else {
return and__3753__auto__;
}
})()){
return graph.quile$dependency$DependencyGraphUpdate$depend$arity$3(graph,node,dep);
} else {
var x__4409__auto__ = (((graph == null))?null:graph);
return (function (){var or__3765__auto__ = (quile.dependency.depend[(function (){var G__11016 = x__4409__auto__;
return goog.typeOf(G__11016);
})()]);
if(or__3765__auto__){
return or__3765__auto__;
} else {
var or__3765__auto____$1 = (quile.dependency.depend["_"]);
if(or__3765__auto____$1){
return or__3765__auto____$1;
} else {
throw cljs.core.missing_protocol("DependencyGraphUpdate.depend",graph);
}
}
})().call(null,graph,node,dep);
}
});

quile.dependency.remove_edge = (function remove_edge(graph,node,dep){
if((function (){var and__3753__auto__ = graph;
if(and__3753__auto__){
return graph.quile$dependency$DependencyGraphUpdate$remove_edge$arity$3;
} else {
return and__3753__auto__;
}
})()){
return graph.quile$dependency$DependencyGraphUpdate$remove_edge$arity$3(graph,node,dep);
} else {
var x__4409__auto__ = (((graph == null))?null:graph);
return (function (){var or__3765__auto__ = (quile.dependency.remove_edge[(function (){var G__11020 = x__4409__auto__;
return goog.typeOf(G__11020);
})()]);
if(or__3765__auto__){
return or__3765__auto__;
} else {
var or__3765__auto____$1 = (quile.dependency.remove_edge["_"]);
if(or__3765__auto____$1){
return or__3765__auto____$1;
} else {
throw cljs.core.missing_protocol("DependencyGraphUpdate.remove-edge",graph);
}
}
})().call(null,graph,node,dep);
}
});

quile.dependency.remove_all = (function remove_all(graph,node){
if((function (){var and__3753__auto__ = graph;
if(and__3753__auto__){
return graph.quile$dependency$DependencyGraphUpdate$remove_all$arity$2;
} else {
return and__3753__auto__;
}
})()){
return graph.quile$dependency$DependencyGraphUpdate$remove_all$arity$2(graph,node);
} else {
var x__4409__auto__ = (((graph == null))?null:graph);
return (function (){var or__3765__auto__ = (quile.dependency.remove_all[(function (){var G__11024 = x__4409__auto__;
return goog.typeOf(G__11024);
})()]);
if(or__3765__auto__){
return or__3765__auto__;
} else {
var or__3765__auto____$1 = (quile.dependency.remove_all["_"]);
if(or__3765__auto____$1){
return or__3765__auto____$1;
} else {
throw cljs.core.missing_protocol("DependencyGraphUpdate.remove-all",graph);
}
}
})().call(null,graph,node);
}
});

quile.dependency.remove_node = (function remove_node(graph,node){
if((function (){var and__3753__auto__ = graph;
if(and__3753__auto__){
return graph.quile$dependency$DependencyGraphUpdate$remove_node$arity$2;
} else {
return and__3753__auto__;
}
})()){
return graph.quile$dependency$DependencyGraphUpdate$remove_node$arity$2(graph,node);
} else {
var x__4409__auto__ = (((graph == null))?null:graph);
return (function (){var or__3765__auto__ = (quile.dependency.remove_node[(function (){var G__11028 = x__4409__auto__;
return goog.typeOf(G__11028);
})()]);
if(or__3765__auto__){
return or__3765__auto__;
} else {
var or__3765__auto____$1 = (quile.dependency.remove_node["_"]);
if(or__3765__auto____$1){
return or__3765__auto____$1;
} else {
throw cljs.core.missing_protocol("DependencyGraphUpdate.remove-node",graph);
}
}
})().call(null,graph,node);
}
});

quile.dependency.remove_from_map = (function remove_from_map(amap,x){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__11031){
var vec__11032 = p__11031;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11032,(0),null);
var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11032,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(vs,x));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(amap,x));
});
/**
* Recursively expands the set of dependency relationships starting
* at (get m x)
*/
quile.dependency.transitive = (function transitive(m,x){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,k){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(s,transitive(m,k));
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,x),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,x));
});
quile.dependency.set_conj = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY);

/**
* @constructor
*/
quile.dependency.MapDependencyGraph = (function (dependencies,dependents){
this.dependencies = dependencies;
this.dependents = dependents;
})
quile.dependency.MapDependencyGraph.prototype.quile$dependency$DependencyGraph$ = true;

quile.dependency.MapDependencyGraph.prototype.quile$dependency$DependencyGraph$immediate_dependencies$arity$2 = (function (graph,node){
var self__ = this;
var graph__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.dependencies,node,cljs.core.PersistentHashSet.EMPTY);
});

quile.dependency.MapDependencyGraph.prototype.quile$dependency$DependencyGraph$immediate_dependents$arity$2 = (function (graph,node){
var self__ = this;
var graph__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.dependents,node,cljs.core.PersistentHashSet.EMPTY);
});

quile.dependency.MapDependencyGraph.prototype.quile$dependency$DependencyGraph$transitive_dependencies$arity$2 = (function (graph,node){
var self__ = this;
var graph__$1 = this;
return quile.dependency.transitive(self__.dependencies,node);
});

quile.dependency.MapDependencyGraph.prototype.quile$dependency$DependencyGraph$transitive_dependents$arity$2 = (function (graph,node){
var self__ = this;
var graph__$1 = this;
return quile.dependency.transitive(self__.dependents,node);
});

quile.dependency.MapDependencyGraph.prototype.quile$dependency$DependencyGraph$nodes$arity$1 = (function (graph){
var self__ = this;
var graph__$1 = this;
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(self__.dependencies)),cljs.core.set(cljs.core.keys(self__.dependents)));
});

quile.dependency.MapDependencyGraph.prototype.quile$dependency$DependencyGraphUpdate$ = true;

quile.dependency.MapDependencyGraph.prototype.quile$dependency$DependencyGraphUpdate$depend$arity$3 = (function (graph,node,dep){
var self__ = this;
var graph__$1 = this;
if(cljs.core.truth_((function (){var or__3765__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node,dep);
if(or__3765__auto__){
return or__3765__auto__;
} else {
var G__11038 = graph__$1;
var G__11039 = dep;
var G__11040 = node;
return (quile.dependency.depends_QMARK_.cljs$core$IFn$_invoke$arity$3 ? quile.dependency.depends_QMARK_.cljs$core$IFn$_invoke$arity$3(G__11038,G__11039,G__11040) : quile.dependency.depends_QMARK_.call(null,G__11038,G__11039,G__11040));
}
})())){
throw (new Error([cljs.core.str("Circular dependency between "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([node], 0))),cljs.core.str(" and "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([dep], 0)))].join('')));
} else {
}

return (new quile.dependency.MapDependencyGraph(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(self__.dependencies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null),quile.dependency.set_conj,dep),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(self__.dependents,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep], null),quile.dependency.set_conj,node)));
});

quile.dependency.MapDependencyGraph.prototype.quile$dependency$DependencyGraphUpdate$remove_edge$arity$3 = (function (graph,node,dep){
var self__ = this;
var graph__$1 = this;
return (new quile.dependency.MapDependencyGraph(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(self__.dependencies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null),cljs.core.disj,dep),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(self__.dependents,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep], null),cljs.core.disj,node)));
});

quile.dependency.MapDependencyGraph.prototype.quile$dependency$DependencyGraphUpdate$remove_all$arity$2 = (function (graph,node){
var self__ = this;
var graph__$1 = this;
return (new quile.dependency.MapDependencyGraph(quile.dependency.remove_from_map(self__.dependencies,node),quile.dependency.remove_from_map(self__.dependents,node)));
});

quile.dependency.MapDependencyGraph.prototype.quile$dependency$DependencyGraphUpdate$remove_node$arity$2 = (function (graph,node){
var self__ = this;
var graph__$1 = this;
return (new quile.dependency.MapDependencyGraph(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.dependencies,node),self__.dependents));
});

quile.dependency.MapDependencyGraph.cljs$lang$type = true;

quile.dependency.MapDependencyGraph.cljs$lang$ctorStr = "quile.dependency/MapDependencyGraph";

quile.dependency.MapDependencyGraph.cljs$lang$ctorPrWriter = (function (this__4352__auto__,writer__4353__auto__,opt__4354__auto__){
return cljs.core._write(writer__4353__auto__,"quile.dependency/MapDependencyGraph");
});

quile.dependency.__GT_MapDependencyGraph = (function __GT_MapDependencyGraph(dependencies,dependents){
return (new quile.dependency.MapDependencyGraph(dependencies,dependents));
});

/**
* Returns a new, empty, dependency graph. A graph contains nodes,
* which may be any type which supports Clojure's equality semantics.
* Edges are represented as pairs of nodes. An edge between two nodes X
* and Y indicates that X depends on Y or, conversely, that Y is a
* dependent of X. A dependency graph may not have cycles.
*/
quile.dependency.graph = (function graph(){
return (new quile.dependency.MapDependencyGraph(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* True if x is directly or transitively dependent on y.
*/
quile.dependency.depends_QMARK_ = (function depends_QMARK_(graph,x,y){
return cljs.core.contains_QMARK_(quile.dependency.transitive_dependencies(graph,x),y);
});
/**
* True if y is a direct or transitive dependent of x.
*/
quile.dependency.dependent_QMARK_ = (function dependent_QMARK_(graph,x,y){
return cljs.core.contains_QMARK_(quile.dependency.transitive_dependents(graph,x),y);
});
/**
* Returns a topologically-sorted list of nodes in graph.
*/
quile.dependency.topo_sort = (function topo_sort(graph){
var sorted = cljs.core.List.EMPTY;
var g = graph;
var todo = cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (sorted,g){
return (function (p1__11041_SHARP_){
return cljs.core.empty_QMARK_(quile.dependency.immediate_dependents(graph,p1__11041_SHARP_));
});})(sorted,g))
,quile.dependency.nodes(graph)));
while(true){
if(cljs.core.empty_QMARK_(todo)){
return sorted;
} else {
var vec__11044 = cljs.core.seq(todo);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11044,(0),null);
var more = cljs.core.nthnext(vec__11044,(1));
var deps = quile.dependency.immediate_dependencies(g,node);
var vec__11045 = (function (){var deps__$1 = deps;
var g__$1 = g;
var add = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.seq(deps__$1)){
var d = cljs.core.first(deps__$1);
var g_SINGLEQUOTE_ = quile.dependency.remove_edge(g__$1,node,d);
if(cljs.core.empty_QMARK_(quile.dependency.immediate_dependents(g_SINGLEQUOTE_,d))){
var G__11046 = cljs.core.rest(deps__$1);
var G__11047 = g_SINGLEQUOTE_;
var G__11048 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(add,d);
deps__$1 = G__11046;
g__$1 = G__11047;
add = G__11048;
continue;
} else {
var G__11049 = cljs.core.rest(deps__$1);
var G__11050 = g_SINGLEQUOTE_;
var G__11051 = add;
deps__$1 = G__11049;
g__$1 = G__11050;
add = G__11051;
continue;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [add,g__$1], null);
}
break;
}
})();
var add = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11045,(0),null);
var g_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11045,(1),null);
var G__11052 = cljs.core.cons(node,sorted);
var G__11053 = quile.dependency.remove_node(g_SINGLEQUOTE_,node);
var G__11054 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(more),cljs.core.set(add));
sorted = G__11052;
g = G__11053;
todo = G__11054;
continue;
}
break;
}
});
/**
* Returns a comparator fn which produces a topological sort based on
* the dependencies in graph. Nodes not present in the graph will sort
* after nodes in the graph.
*/
quile.dependency.topo_comparator = (function topo_comparator(graph){
var pos = cljs.core.zipmap(quile.dependency.topo_sort(graph),cljs.core.range.cljs$core$IFn$_invoke$arity$0());
return ((function (pos){
return (function (a,b){
return cljs.core.compare(cljs.core.get.cljs$core$IFn$_invoke$arity$3(pos,a,(Number["MAX_VALUE"])),cljs.core.get.cljs$core$IFn$_invoke$arity$3(pos,b,(Number["MAX_VALUE"])));
});
;})(pos))
});
