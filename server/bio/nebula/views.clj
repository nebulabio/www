(ns bio.nebula.views
  (:require [hiccup.page :refer [html5 include-css include-js]]))

(defn index-page []
  (html5
   [:head
    [:meta {:charset "utf-8"}]
    [:meta {:name "viewport" :content "width=device-width, initial-scale=1"}]
    [:meta {:name "keywords" :content "biotech, bio, nebula, open source, medical devices"}]
    [:meta {:name "description" :content "Nebula Bio is an independent movement to create the next generation of biotech products and tools. Everything is open source."}]
    [:title "Nebula Bio • Open Source Biotech"]
    (include-css "/css/normalize.css")
    (include-css "/css/skeleton.css")
    (include-css "/css/font-awesome.min.css")
    (include-css "/fonts/main.css")
    (include-css "/css/style.css")]
   [:body#container
    (include-js "https://js.stripe.com/v2/")
    (include-js "/js/app.js")]))
