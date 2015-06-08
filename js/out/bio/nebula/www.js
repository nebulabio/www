// Compiled by ClojureScript 0.0-2816 {}
goog.provide('bio.nebula.www');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('bio.nebula.www.stripe');
goog.require('secretary.core');
goog.require('markdown.core');
goog.require('goog.history.EventType');
goog.require('goog.History');
goog.require('goog.events');
goog.require('quile.component');
bio.nebula.www.masthead = (function masthead(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$95,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$96,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$17,"logo align",cljs.core.constant$keyword$97,"/img/logo-white.png"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$98,"Open Source Biotech"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$99,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$100,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$101,"_blank",cljs.core.constant$keyword$102,"https://github.com/nebulabio"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$103], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$100,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$101,"_blank",cljs.core.constant$keyword$102,"https://trello.com/b/Tb4b74V5/protochip"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$104], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$100,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$101,"_blank",cljs.core.constant$keyword$102,"http://nebulabio.tumblr.com"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$105], null)], null)], null)], null);
});
/**
* Jumbotron copy.
*/
bio.nebula.www.copy_content = "**We are creating a suite of open source medical devices, designed with the *user* in mind first.**\n\nWe believe that medicine should be used to improve the human condition, and to a large extent modern medicine\nexcels at this. However, medical technology has been falling behind computer technology. Medicine is plagued by\nexcessive regulations, opaque art, outlandishly-high costs, and other barriers to entry.\n\nThe solution is not a new gadget, but more openness. [Love, internet style.](https://www.youtube.com/watch?v=Xe1TZaElTAs)\nWorld-changing technology can only be developed when we share our work. That's why the engineers at Nebula share all of\nour work with the world. Just click on the links to the left to see for yourself.\n\nAt Nebula Bio, we are developing medical devices that not only make you healthier, but they help you *learn* about your \nhealth. You own your health data, and you choose what to do with it. Healthcare freedom.";
bio.nebula.www.dangerous = (function() {
var dangerous = null;
var dangerous__2 = (function (comp,content){
return dangerous.cljs$core$IFn$_invoke$arity$3(comp,null,content);
});
var dangerous__3 = (function (comp,props,content){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,cljs.core.constant$keyword$106,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$107,content], null))], null);
});
dangerous = function(comp,props,content){
switch(arguments.length){
case 2:
return dangerous__2.call(this,comp,props);
case 3:
return dangerous__3.call(this,comp,props,content);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dangerous.cljs$core$IFn$_invoke$arity$2 = dangerous__2;
dangerous.cljs$core$IFn$_invoke$arity$3 = dangerous__3;
return dangerous;
})()
;
bio.nebula.www.copy = (function copy(state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$48,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$46,"copy",cljs.core.constant$keyword$108,(function (){var G__10723 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10723) : cljs.core.deref.call(null,G__10723));
})()], null),bio.nebula.www.dangerous.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$109,markdown.core.md__GT_html(bio.nebula.www.copy_content))], null);
});
bio.nebula.www.join_us = (function join_us(state){
var mailchip_endpoint = "//nebulabiotech.us2.list-manage.com/subscribe/post?u=28cc4785c874dceaa296ec03b&amp;id=bb5d4b5ccb";
var class$ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,(function (){var G__10726 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10726) : cljs.core.deref.call(null,G__10726));
})()))?"active":"nonactive");
var style = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,(function (){var G__10727 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10727) : cljs.core.deref.call(null,G__10727));
})()))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$39,"flex"], null):new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$39,"none"], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$48,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$46,"join",cljs.core.constant$keyword$18,style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$48,bio.nebula.www.dangerous.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$110,markdown.core.md__GT_html("We'll mail you an update when we launch our beta test. If you'd like to support us financially (and we could definitely use the support since we are funding this out-of-pocket right now) feel free to [contact us directly](https://trello.com/c/9roL7q3b/74-contact). We have a payment gateway setup for you to [fund specific projects](https://trello.com/c/WXi42q1U/75-help-fund-us). Thanks, and mahalo!"))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$43,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$44,mailchip_endpoint,cljs.core.constant$keyword$45,"POST",cljs.core.constant$keyword$46,"join-us-form"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$111,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$49,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$112,"mce-NAME"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$47,"Name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$50,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$46,"mcd-NAME",cljs.core.constant$keyword$51,"text",cljs.core.constant$keyword$30,"NAME"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$111,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$49,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$112,"mce-EMAIL"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$47,"Email"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$50,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$46,"mce-EMAIL",cljs.core.constant$keyword$51,"email",cljs.core.constant$keyword$30,"EMAIL"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$48,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$18,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$113,cljs.core.constant$keyword$115,cljs.core.constant$keyword$114,"-5000px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$50,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$51,"text",cljs.core.constant$keyword$30,"b_28cc4785c874dceaa296ec03b_bb5d4b5ccb",cljs.core.constant$keyword$116,"-1",cljs.core.constant$keyword$117,""], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$54,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$51,"submit"], null),"Submit"], null)], null)], null);
});
bio.nebula.www.splash = (function splash(state){
var class$ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,(function (){var G__10729 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10729) : cljs.core.deref.call(null,G__10729));
})()))?"active":"nonactive");
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$118,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$119,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bio.nebula.www.copy,state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bio.nebula.www.join_us,state], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$120,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$42,((function (class$){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,cljs.core.not);
});})(class$))
,cljs.core.constant$keyword$17,class$], null),"Join us"], null)], null);
});
bio.nebula.www.home = (function home(){
var overlay = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bio.nebula.www.splash,overlay], null);
});
bio.nebula.www.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
bio.nebula.www.put_BANG_ = (function put_BANG_(k,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bio.nebula.www.app_state,cljs.core.assoc,k,v);
});
bio.nebula.www.current_page_will_mount = (function current_page_will_mount(){
return bio.nebula.www.put_BANG_(cljs.core.constant$keyword$121,bio.nebula.www.home);
});
bio.nebula.www.current_page_render = (function current_page_render(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$122,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bio.nebula.www.masthead], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__10731 = bio.nebula.www.app_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10731) : cljs.core.deref.call(null,G__10731));
})().call(null,cljs.core.constant$keyword$121)], null)], null);
});
bio.nebula.www.current_page = (function current_page(){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$123,bio.nebula.www.current_page_will_mount,cljs.core.constant$keyword$37,bio.nebula.www.current_page_render], null));
});
secretary.core.set_config_BANG_(cljs.core.constant$keyword$87,"#");
var action__10558__auto___10734 = (function (params__10559__auto__){
if(cljs.core.map_QMARK_(params__10559__auto__)){
var map__10732 = params__10559__auto__;
var map__10732__$1 = ((cljs.core.seq_QMARK_(map__10732))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10732):map__10732);
return bio.nebula.www.put_BANG_(cljs.core.constant$keyword$121,bio.nebula.www.home);
} else {
if(cljs.core.vector_QMARK_(params__10559__auto__)){
var vec__10733 = params__10559__auto__;
return bio.nebula.www.put_BANG_(cljs.core.constant$keyword$121,bio.nebula.www.home);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__10558__auto___10734);

var action__10558__auto___10737 = (function (params__10559__auto__){
if(cljs.core.map_QMARK_(params__10559__auto__)){
var map__10735 = params__10559__auto__;
var map__10735__$1 = ((cljs.core.seq_QMARK_(map__10735))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10735):map__10735);
return bio.nebula.www.put_BANG_(cljs.core.constant$keyword$121,bio.nebula.www.support);
} else {
if(cljs.core.vector_QMARK_(params__10559__auto__)){
var vec__10736 = params__10559__auto__;
return bio.nebula.www.put_BANG_(cljs.core.constant$keyword$121,bio.nebula.www.support);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/support",action__10558__auto___10737);

bio.nebula.www.hook_browser_navigation_BANG_ = (function hook_browser_navigation_BANG_(){
var G__10742 = (new goog.History());
var G__10743_10746 = G__10742;
var G__10744_10747 = goog.history.EventType.NAVIGATE;
var G__10745_10748 = ((function (G__10743_10746,G__10744_10747,G__10742){
return (function (event){
return secretary.core.dispatch_BANG_(event.token);
});})(G__10743_10746,G__10744_10747,G__10742))
;
goog.events.listen(G__10743_10746,G__10744_10747,G__10745_10748);

G__10742.setEnabled(true);

return G__10742;
});
bio.nebula.www.hook_browser_navigation_BANG_();
bio.nebula.www.init = (function init(){
var G__10751 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bio.nebula.www.current_page], null);
var G__10752 = document.body;
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__10751,G__10752) : reagent.core.render_component.call(null,G__10751,G__10752));
});
