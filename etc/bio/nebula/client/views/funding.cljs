(ns bio.nebula.client.views.funding
  (:require [ajax.core :refer [GET POST]]))

#_(defn- handler [response]
  (map [:div.funding-item
        [:h3 [:a {:href (:url card)} (:name card)]]
        [:div.description (:desc card)]]))

(defn- handler [response]
  [:span response])

(defn- error-handler [{:keys [status status-text]}]
  (.log js/console (str "Error: " status " " status-text)))

(defn- get-trello-cards []
  (GET "/api/cards/need-funding" {:handler handler
                                  :error-handler error-handler}))

(defn main []
  [:p (get-trello-cards)])
