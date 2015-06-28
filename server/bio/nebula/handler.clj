(ns bio.nebula.handler
  (:require
   [compojure.core :as c :refer [defroutes GET]]
   [compojure.route :as route]
   [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
   [hiccup.middleware :refer [wrap-base-url]]
   [bio.nebula.views :refer [index-page]]
   [stripe-clojure.core :as s]))

(s/set-tokens! {:private (environ.core/env :stripe-secret-key)
                :public (environ.core/env :stripe-pub-key)})

(defroutes routes
  (GET "/" [] (index-page))
  (route/resources "/")
  (route/not-found "<h1>Page not found.</h1>"))

(def app
  (-> routes
      (wrap-defaults site-defaults)))
