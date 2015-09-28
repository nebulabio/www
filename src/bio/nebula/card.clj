(ns bio.nebula.card
  "Cards are independent work items, stored in Trello. This namespace
  defines two RESTful resources that integrate and filter the Trello
  API for the kind of data that we want.

      card  - a resource that takes one id parameter and returns the
              card with the irrelevant data stripped out.
      cards - takes no arguments and returns a list of cards.

  Each resource is first filtered by pull-funding-details, a simple
  function that can be updated when needed to extend the resources,
  without much other modifications to the code."
  (:require
   [environ.core :refer [env]]
   [schema.core :as s :refer [defschema]]
   [clojure.tools.logging :as log]
   [cheshire.core :as json :refer :all]
   [trello.client :as t]
   [trello.core :refer [make-client]]
   [castra.core :refer [defrpc]]
   [clojure.core.match :refer [match]]))

(def ^:private +board-id+              "Tb4b74V5")
(def ^:private +needs-funding-list-id+ "555cffd190be73cf47d22591")
(def ^:private auth                    {:key (:trello-key env) :token (:trello-token env)})
(def ^:private trello-client           (make-client (:trello-key env) (:trello-token env)))

(defn needs-funding-cards []
  (trello-client t/get (str "lists/" +needs-funding-list-id+ "/cards")))

(defn- pull-member-details [member]
  {:name (:fullName member)
   :gravatar (:gravatarHash member)})

(defn- pull-details
  "Extract desirable card details from a single card."
  [card]
  (let [members        (map #(trello-client t/get (str "members/"  %)) (:idMembers card))
        member-details (map pull-member-details members)
        image          (trello-client t/get (str "cards/" (:id card) "/attachments/" (:idAttachmentCover card)))
        labels         (map #(trello-client t/get  (str "labels/" %)) (:idLabels card))
        label-data     (fn [label] {:color (:color label) :name (:name label)})]
    {:name   (:name card)
     :owner  (first member-details)
     :image  (:url image)
     :labels (vec (map label-data labels))
     :url    (:url card)
     :id     (:id card)
     :desc   (:desc card)}))

(defn get-card [id]
  (pull-details (trello-client t/get (str "cards/" id))))

(def initial-state {:needs-funding-cards (mapv pull-details (needs-funding-cards))})

(def state (atom initial-state))

(defrpc get-state []
  @state)

(comment
  "Old stuff"
  (defresource card [id]
    :available-media-types ["application/json" "text/html"]
    :allowed-methods [:get]
    :handle-ok
    #(let [media-type (get-in % [:representation :media-type])
           this (pull-details (trello-client t/get (str "cards/" id)))]
       (match media-type
              ["application/json"] this
              ["text/html"] (card-view this))))

  (defresource cards
    :available-media-types ["application/json" "text/html"]
    :allowed-method [:get]
    :handle-ok (fn [req]
                 (let [this (map pull-details (needs-funding-cards))
                       media-type (get-in req [:representation :media-type])]
                   (match [media-type]
                          ["application/json"] this
                          ["text/html"] (apply str (card-view this)))))))
