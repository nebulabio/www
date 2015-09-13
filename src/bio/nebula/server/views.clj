(ns bio.nebula.server.views
  (:require [markdown.core :refer [md-to-html-string]]
            [hiccup.page   :refer [html5 include-css include-js]]
            [clojure.core.match :refer [match]]
            [net.cgrand.enlive-html :as html :refer [defsnippet deftemplate nth-child nth-of-type]]))

(defn di "Select an HTML element by data-id attribute." [id] (html/attr= :data-id (name id)))

(deftemplate index-page "public/index.html" [])

(defsnippet card-model "public/c/index.html"
  [[(di "card-model") html/first-of-type]]
  [{:keys [name owner image labels url id desc]}]

  [(di :card-model-trello-link)] (html/set-attr :href url)
  [(di :card-model-trello-id)] (html/set-attr :value id)
  [(di :card-model-label)] (html/clone-for [label labels]
                                           (html/do->
                                            (html/add-class (:color label))
                                            (html/content (:name label))))
  [(di :card-model-image)] (if image
                             (html/set-attr :src image)
                             nil)
  [(di :card-model-title)] (html/content name)
  [(di :card-model-owner)] (html/content (:name owner))
  [(di :card-model-content)] (html/html-content (md-to-html-string desc)))

(deftemplate card-view "public/c/index.html"
  [cards]
  [(di "card-listing")] (html/content (map card-model cards)))

(deftemplate checkout-page "public/checkout/index.html" [])
