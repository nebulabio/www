(ns bio.nebula.www.util
  (:require [tailrecursion.hoplon :refer [html head html-meta title link body div]]))

(defelem page [{:keys [page-title description keywords] :as attrs} content]
  (html :lang "en"
        (head
         (html-meta :charset "utf-8")
         (html-meta :name "keywords" :content keywords)
         (html-meta :name "description" :content description)
         (title page-title)
         (link :href "css/style.css" :rel "stylesheet" :type "text/css")
         (link :href "css/font-awesome.min.css" :rel "stylesheet" :type "text/css")
         (link :href "http://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,700italic,400,600,700" :rel "stylesheet" :type "text/css"))
        (body
         (div (merge {:id "content"} (dissoc attrs :page-title :description :keywords))
          content))))
