(ns bio.nebula.views
  (:require [hiccup.page :refer [html5 include-css include-js]]))

(defn page-wrap
  [content & {:keys [title description]
              :or {title "Nebula Bio • Open Source Biotech"
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
   [:body#container
    content
    (include-js "https://js.stripe.com/v2/")
    (include-js "/js/app.js")]))

(defn index-page []
  (page-wrap nil))


(defn payments-page []
  (page-wrap nil)))
