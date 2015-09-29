(ns bio.nebula.handler
  (:require
   [compojure.core :as c]
   [compojure.route :as route]
   [castra.middleware :as castra]
   [clojure.tools.logging :as log]
   [clojure.core.match :refer [match]]
   [ring.middleware.defaults :refer [wrap-defaults api-defaults]]
   [ring.util.response :as response :refer [redirect]]))

(c/defroutes app-routes
  (c/GET "/" req (response/content-type (response/resource-response "index.html") "text/html"))
  (route/resources "/" {:root ""})
  (route/not-found "<h1>Page not found.</h1>"))

(defn log-request
  "Logs all requests."
  ([handler] (log-request handler :info))
  ([handler log-level]
   (fn [request]
     (let [response (handler request)]
       (match [log-level]
              [:info] (log/info "Handling a request -" (get-in response [:body]))
              [:none] nil)
       response))))

(def app
  (-> app-routes
      (castra/wrap-castra 'bio.nebula.card)
      (castra/wrap-castra-session "asdfasdfasdfasdf")
      (wrap-defaults api-defaults)
      (log-request :none)))
