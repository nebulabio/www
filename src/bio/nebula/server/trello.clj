(ns bio.nebula.server.trello
  "Exposes the necessary resources for interacting with Trello."
  (:require
   [environ.core :refer [env]]
   [cheshire.core  :as json  :refer :all]
   [liberator.core :as liber :refer [defresource]]
   [trello.core    :as trello]))

(def +trello-board-id+ (:trello-board-id env))

(def auth {:key (:trello-key env)
           :token (:trello-token env)})

;; these can be staticly defined at compile-time because they
;; don't change very often
(def trello-board (trello/board-get auth +trello-board-id+))
(def all-lists    (trello/board-lists auth +trello-board-id+))

(defn- find-cards-need-funding []
  (let [needs-funding-list (first (filter #(= "Needs Funding" (:name %)) all-lists))
        all-cards (trello/board-cards auth +trello-board-id+)]
    (filter #(= (:idList %) (:id needs-funding-list)) all-cards)))

(defn- pull-funding-details [card]
  {:name (:name card)
   :url  (:url card)
   :desc (:desc card)})

(defn cards-need-funding [req]
  (map pull-funding-details (find-cards-need-funding)))

(defresource need-funding
  :available-media-types ["application/json"]
  :handle-ok cards-need-funding)

