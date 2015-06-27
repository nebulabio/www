(ns bio.nebula.handler
  (:require
   [compojure.core :as c :refer [defroutes GET]]
   [compojure.route :as route]
   [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
   [hiccup.middleware :refer [wrap-base-url]]
   [bio.nebula.views :refer [index-page]]))

(defroutes routes
  (GET "/" [] (index-page))
  (GET "/bar" [] (index-page))
  (route/resources "/")
  (route/not-found "<h1>Page not found.</h1>"))

(def app
  (-> routes
      (wrap-defaults site-defaults)))
