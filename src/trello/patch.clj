(ns trello.patch
  "Patching the trello library to add more features."
  (:require [trello.core :refer [request]]))


(defn- api-get [auth path & args]
  (partial (request auth :get (format path args))))

(defn get-member [auth id]
  (request auth :get (format "/members/%s" id)))

(defn get-label [auth label-id]
  (request auth :get (format "/labels/%s" label-id)))

(defn get-attachment [auth card-id attachment-id]
  (request auth :get (format "/cards/%s/attachments/%s" card-id attachment-id)))

(defn get-attachments [auth card-id]
  (request auth :get (format "/cards/%s/attachments" card-id)))
