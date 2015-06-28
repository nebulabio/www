(ns bio.nebula.trello
  "Exposes the necessary resources for interacting with Trello."
  (:require
   [environ.core :refer [env]]
   [clojure.data.json :as json]
   [liberator.core    :as liber :refer [defresource]]
   [trello.core       :as trello]))

(def +trello-board-id+ "Tb4b74V5")

(def auth {:key (env :trello-key)
           :token (env :trello-token)})

(def trello-board (trello/board-get auth +trello-board-id+))
(def all-lists    (trello/board-lists auth +trello-board-id+))
(def all-cards    (trello/board-cards auth +trello-board-id+))

(defn- find-needs-funding-cards [req]
    (let [needs-funding-list (first (filter #(= "Needs Funding" (:name %)) all-lists))
          all-cards (trello/board-cards auth +trello-board-id+)]
      (filter #(= (:idList %) (:id needs-funding-list)) all-cards)))

(defresource needs-funding
  :available-media-types ["application/json"]
  :handle-ok find-needs-funding-cards)

