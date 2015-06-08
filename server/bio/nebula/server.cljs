(ns bio.nebula.server
  (:require [cljs.nodejs :as node]))

(node/enable-util-print!)

(defn working? [] (println "yep"))
