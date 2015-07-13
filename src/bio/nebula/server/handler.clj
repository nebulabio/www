(ns bio.nebula.server.handler
  (:require
   [compojure.core           :as c     :refer [defroutes context GET POST DELETE PUT ANY]]
   [compojure.route          :as route]
   [clojure.data.json        :as json]
   [ring.middleware.defaults           :refer [wrap-defaults site-defaults]]
   [ring.middleware.params             :refer [wrap-params]]
   [ring.util.response                 :refer [redirect]]
   [liberator.core           :as liber :refer [resource defresource]]
   [prone.middleware         :as prone]
   [hiccup.middleware                  :refer [wrap-base-url]]
   [environ.core                       :refer [env]]
   [bio.nebula.server.views  :as views :refer [index-page checkout-page]]
   [bio.nebula.server.card             :refer [card cards]]))


(comment
  "Other routes I want:"
  (ANY "/f" req funds) "A list of the funders we've gotten so far."
  (ANY "/f/:id" [id] (fund id))
  (ANY "/u" req users) "We should eventually keep track of our users."
  (ANY "/u/:id" [id] (user id)))


(defroutes app-routes
  (GET "/"          []    (index-page))
  (ANY "/c"         req   cards)
  (ANY "/c/:id"     [id]  (card id))
  (GET "/checkout/" [req] (checkout-page))
  (route/resources "/")
  (route/not-found "<h1>Page not found.</h1>"))

(defn good-response? [res]
  (and res (not= (:status res) 404)))

(defn wrap-slash [handler]
  (fn [{:keys [uri] :as req}]
    (let [res (handler req)]
      (if (or (good-response? res) (.endsWith uri "/"))
        res
        (let [added-slash (str uri "/")]
          (if (good-response? (handler (-> req
                                           (assoc :uri added-slash)
                                           (assoc :path-info added-slash))))
            (redirect added-slash)
            res))))))

(def prone-enabled? (= true (:enable-prone env)))

(def app
  (cond-> app-routes
    prone-enabled? (prone/wrap-exceptions {:app-namespaces ['bio.nebula]})
    true wrap-slash
    true wrap-params
    true (wrap-defaults site-defaults)))
