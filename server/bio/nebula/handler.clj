(ns bio.nebula.handler
  (:require
   [compojure.core :as c :refer [defroutes GET]]
   [compojure.route :as route]
   [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
   [hiccup.middleware :refer [wrap-base-url]]
   [bio.nebula.views :refer [index-page]]
   [environ.core :refer [env]]
   [stripe-clojure.core :as s]
   [trello.core :as trello]))

(def +trello-board-id+ "Tb4b74V5")

(def trello-auth {:key (env :trello-key)
                  :token (env :trello-token)})

(def board (trello/board-get trello-auth +trello-board-id+))

(s/set-tokens! {:private (env :stripe-secret-key)
                :public (env :stripe-pub-key)})

(defroutes routes
  (GET "/" [] (index-page))
  (route/resources "/")
  (route/not-found "<h1>Page not found.</h1>"))

(def app
  (-> routes
      (wrap-defaults site-defaults)))
