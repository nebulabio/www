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
   [com.stuartsierra.component :as component]
   [schema.core :as s :refer [defschema]]
   [clojure.tools.logging :as log]
   [cheshire.core :as json :refer :all]
   [trello.client :as t]
   [trello.core :refer [make-client]]
   [castra.core :refer [defrpc]]
   [clojure.core.match :refer [match]]))

(def ^:private +board-id+              "Tb4b74V5")
(def ^:private auth                    {:key (:trello-key env) :token (:trello-token env)})
(def ^:private trello-client           (make-client (:trello-key env) (:trello-token env)))

(defn needs-funding-cards [list-id]
  (trello-client t/get (str "lists/" list-id "/cards")))

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

(defn initial-state [list-id]
  {:needs-funding-cards (mapv pull-details (needs-funding-cards list-id))})

(defn get-state* [component]
  (let [state-atom (:state component)]
    @state-atom))

(defrecord Card [list-id state]
  component/Lifecycle
  (start [this]
    (log/info "Starting the Card service with list-id" list-id)
    (defrpc get-state [] (get-state* this)))
  (stop [this]
    (log/info "Stopping the Card service")
    (assoc this :state nil)))

(defn new-card-service [list-id]
  (Card. list-id (atom (initial-state list-id))))
