(ns bio.nebula.card
  "Cards are independent work items, stored in Trello. This namespace
  defines a service that retrieves the list of cards according to the
  configured schedule (set in bio.nebula.systems). Two RPC endpoints
  are established:

      get-card  - takes a single parameter of a card id and returns the
                  card data as a map
      get-cards - no parameters. returns a vector of all the cards.

  Each resource is first filtered by pull-details, a simple function
  that can be updated when needed to extend the resources, without
  much other modifications to the code."
  (:require
   [environ.core :refer [env]]
   [com.stuartsierra.component :as component]
   [schema.core :as s :refer [defschema]]
   [clojure.tools.logging :as log]
   [cheshire.core :as json]
   [immutant.scheduling :as sch]
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

(defn retrieve-state [list-id]
  (mapv pull-details (needs-funding-cards list-id)))

(defn update-cards [state-atom list-id]
  (log/info "-- Updating state for list" list-id)
  (swap! state-atom assoc :needs-funding-cards (retrieve-state list-id)))

(defrpc get-state []
  "Takes a reference to the Card component and returns the contents of
  the state."
  (let [state-atom (get-in reloaded.repl/system [:cards :state])]
    @state-atom))

(defrecord Card [list-id schedule]
  component/Lifecycle
  (start [component]
    (let [state    (atom {:needs-funding-cards "Starting up..."})
          job      #(update-cards state list-id)]
      (log/info "Starting the Card service with list-id" list-id "with schedule" schedule)
      (sch/schedule job schedule)
      (assoc component :state state)))
  (stop [component]
    (log/info "Stopping the Card service")
    (assoc component :state nil)))

(defn new-card-service [list-id schedule]
  (Card. list-id schedule))
