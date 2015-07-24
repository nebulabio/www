(ns bio.nebula.server.card
  "Cards are independent work items, stored in Trello. This namespace
  defines two RESTful resources that integrate and filter the Trello API
  for the kind of data that we want.

      card  - a resource that takes one id parameter and returns the card
              with the irrelevant data stripped out.
      cards - takes no arguments and returns a list of cards.

  Each resources is first filtered by pull-funding-details, a simple function
  that can be updated when needed to extend the resources, without much other
  modifications to the code."
  (:require
   [environ.core :refer [env]]
   [schema.core  :as s :refer [defschema]]
   [clojure.tools.logging :as log]
   [cheshire.core  :as json  :refer :all]
   [liberator.core :as liber :refer [defresource resource]]
   [trello.core    :as trello]
   [trello.patch   :as patch]
   [bio.nebula.server.views :refer [card-view]]))

(def +trello-board-id+ (:trello-board-id env))
(def auth              {:key (:trello-key env) :token (:trello-token env)})
(def trello-board      (trello/board-get auth +trello-board-id+))
(def all-lists         (trello/board-lists auth +trello-board-id+))


(defn- find-cards-need-funding
  "Convenience function for gathering all the cards that need funding."
  []
  (let [needs-funding-list (first (filter #(= "Needs Funding" (:name %)) all-lists))
        all-cards (trello/board-cards auth +trello-board-id+)]
    (log/info "find-cards-need-funding")
    (filter #(= (:idList %) (:id needs-funding-list)) all-cards)))

(defn- pull-member-details [member]
  {:name (:fullName member)
   :gravatar (:gravatarHash member)})

(defn- pull-details
  "Extract desirable card details from a single card."
  [card]
  (let [members (map #(patch/get-member auth %) (:idMembers card))
        member-details (map pull-member-details members)
        attachments (patch/get-attachments auth (:id card))
        attachment-urls (map :url attachments)
        labels (map #(patch/get-label auth %) (:idLabels card))
        label-data (fn [label] {:color (:color label) :name (:name label)})]
    {:name   (:name card)
     :owner  (first member-details)
     :image  (first attachment-urls)
     :labels (vec (map label-data labels))
     :url    (:url card)
     :id     (:id card)
     :desc   (:desc card)}))

(defn cards-need-funding []
  (map pull-details (find-cards-need-funding)))

(defschema CardSchema
  {:name s/Str
   :owner (s/maybe {:name s/Str :gravatar s/Str})
   :image (s/maybe s/Str)
   :labels (s/maybe [{:name s/Str :color s/Str}])
   :url s/Str
   :id s/Str
   :desc s/Str})

(comment
  "I'm not actually using this record, but if I wanted to use it with the 
schema, this is how.."
  
  (s/defrecord Card
      [name   :- s/Str
       owner  :- {:name s/Str :gravatar s/Str}
       image  :- s/Str
       labels :- [{:name s/Str :color s/Str}]
       url    :- s/Str
       id     :- s/Str
       desc   :- s/Str])
  
  (s/defn cards-need-funding-1 :- Card [_]
    (map pull-details (find-cards-need-funding)))
)

(defresource card [id]
  :available-media-types ["application/json" "text/html"]
  :allowed-methods [:get]
  :handle-ok
  #(let [media-type (get-in % [:representation :media-type])
         this (pull-details (trello/get-card auth id))]
     (condp = media-type
       "application/json" this
       "text/html" (card-view this))))

(defn respond-to [req & responses]
  (let [ks (keys responses)
        vs (vals responses)
        ss (interleave ks vs)]
    (condp = (get-in req [:representation :media-type]) 
      ss)))

(defresource cards
  :available-media-types ["application/json" "text/html"]
  :allowed-method [:get]
  :handle-ok (fn [req]
               (let [this (map pull-details (find-cards-need-funding))]
                 (log/info "cards resource")
                 (respond-to req
                             {"application/json" this
                              "text/html" (apply str (card-view this))}))))
