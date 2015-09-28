(ns bio.nebula.handler
  (:require
   [compojure.core :as c]
   [compojure.route :as route]
   [castra.middleware :as castra]
   [ring.middleware.defaults :refer [wrap-defaults api-defaults]]
   [ring.util.response :as response :refer [redirect]]))

(c/defroutes app-routes
  (c/GET "/" req (response/content-type (response/resource-response "index.html") "text/html"))
  (route/resources "/" {:root ""})
  (route/not-found "<h1>Page not found.</h1>"))

(def app
  (-> app-routes
      (castra/wrap-castra 'bio.nebula.card)
      (castra/wrap-castra-session "asdfasdfasdfasdf")
      (wrap-defaults api-defaults)))
