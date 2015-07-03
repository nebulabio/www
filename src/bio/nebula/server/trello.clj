(ns bio.nebula.server.trello
  "Exposes the necessary resources for interacting with Trello."
  (:require
   [environ.core :refer [env]]
   [clojure.data.json :as json]
   [liberator.core    :as liber :refer [defresource]]
   [trello.core       :as trello]))

(def +trello-board-id+ (env :trello-board-id))

(def auth {:key (env :trello-key)
           :token (env :trello-token)})

;; these can be staticly defined at compile-time because they
;; don't change very often
(def trello-board (trello/board-get auth +trello-board-id+))
(def all-lists    (trello/board-lists auth +trello-board-id+))

(defn- find-cards-need-funding [req]
  (let [needs-funding-list (first (filter #(= "Needs Funding" (:name %)) all-lists))
        all-cards (trello/board-cards auth +trello-board-id+)]
    (filter #(= (:idList %) (:id needs-funding-list)) all-cards)))

(defn- cards-need-funding [req]
  (find-cards-need-funding))

(defresource need-funding
  :available-media-types ["application/json"]
  :handle-ok find-cards-need-funding)

