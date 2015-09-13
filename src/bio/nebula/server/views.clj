(ns bio.nebula.server.views
  (:require [markdown.core :refer [md-to-html-string]]
            [hiccup.page   :refer [html5 include-css include-js]]
            [net.cgrand.enlive-html :as html :refer [defsnippet deftemplate nth-child nth-of-type]]))

(defn di [x] (html/attr= :data-id (name x)))

(deftemplate index-page "public/index.html" [])

(defsnippet card-model "public/c/index.html"
  [:#card-index :> :div.ui.container :> :div :> [:div (nth-child 1)]]
  [{:keys [name owner image labels url id desc]}]
  [(di :card-model-title)] (html/content name)
  [(di :card-model-owner)] (html/content owner)
  [(di :card-model-content)] (html/html-content (md-to-html-string desc)))

(deftemplate card-view "public/c/index.html"
  [cards]
  [:.ui.cards] (html/content (map card-model cards)))

(deftemplate checkout-page "public/checkout/index.html" [])
