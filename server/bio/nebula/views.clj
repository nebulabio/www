(ns bio.nebula.views
  (:require [markdown.core :refer [md-to-html-string]]
            [hiccup.page   :refer [html5 include-css include-js]]))

(defn page-wrap
  [content & {:keys [id title description]
              :or {id "container"
                   title "Nebula Bio • Open Source Biotech"
                   description "Nebula Bio is an independent movement to create the next generation of biotech products and tools. Everything is open source."}}]
  (html5
   [:head
    [:meta {:charset "utf-8"}]
    [:meta {:name "viewport" :content "width=device-width, initial-scale=1"}]
    [:meta {:name "keywords" :content "biotech, bio, nebula, open source, medical devices"}]
    [:meta {:name "description" :content description}]
    [:title title]
    (include-css "/css/normalize.css")
    (include-css "/css/skeleton.css")
    (include-css "/css/font-awesome.min.css")
    (include-css "/fonts/main.css")
    (include-css "/css/style.css")]
   [:body {:id id}
    content
    (include-js "https://js.stripe.com/v2/")
    (include-js "/js/app.js")]))

(defn masthead []
  [:div#masthead
   [:img {:class "logo align" :src "/img/logo-white.png"}]
   [:h2 "Open Source Biotech"]
   [:div#links
    [:a {:target "_blank" :href "https://github.com/nebulabio"}
     [:i.fa.fa-github.fa-2x]]
    [:a {:target "_blank" :href "https://trello.com/b/Tb4b74V5/protochip"}
     [:i.fa.fa-trello.fa-2x]]
    [:a {:target "_blank" :href "http://nebulabio.tumblr.com"}
     [:i.fa.fa-tumblr.fa-2x]]]])

(def copy-content "Jumbotron copy."
  "**We are creating a suite of open source medical devices, designed with the *user* in mind first.**

We believe that medicine should be used to improve the human condition, and to a large extent modern medicine
excels at this. However, medical technology has been falling behind computer technology. Medicine is plagued by
excessive regulations, opaque art, outlandishly-high costs, and other barriers to entry.

The solution is not a new gadget, but more openness. [Love, internet style.](https://www.youtube.com/watch?v=Xe1TZaElTAs)
World-changing technology can only be developed when we share our work. That's why the engineers at Nebula share all of
our work with the world. Just click on the links to the left to see for yourself.

At Nebula Bio, we are developing medical devices that not only make you healthier, but they help you *learn* about your 
health. You own your health data, and you choose what to do with it. Healthcare freedom.")

(defn index-page []
  (page-wrap [:div#page
              (masthead)
              [:div#content
               [:div#main
                [:div#copy
                 (md-to-html-string copy-content)]]
               [:button#join-us
                [:a {:href "/app"} "Join Us"]]]]))


(defn app-page []
  (page-wrap nil
             :id "app"
             :title "Nebula Bio App"
             :description "Open Source Biotech"))
