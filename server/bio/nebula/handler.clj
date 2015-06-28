(ns bio.nebula.handler
  (:require
   [compojure.core           :as c     :refer [defroutes context GET POST DELETE PUT ANY]]
   [compojure.route          :as route]
   [clojure.data.json        :as json]
   [ring.middleware.defaults           :refer [wrap-defaults site-defaults]]
   [ring.middleware.params             :refer [wrap-params]]
   [liberator.core           :as liber :refer [resource defresource]]
   [prone.middleware         :as prone]
   [hiccup.middleware                  :refer [wrap-base-url]]
   [environ.core                       :refer [env]]
   [bio.nebula.views         :as views :refer [index-page payments-page]]
   [bio.nebula.trello                  :refer [need-funding]]))


;;https://github.com/adambard/Circulure/blob/master/src/circulure/core.clj#L144-L145
(defmacro r [method route handler]
  `(~method ~route req# (~handler req#)))

(defmacro rr [route resource]
  "Defines a route to a RESTful resource. CRUD operations are assumed
  to be handled by Liberator."
  `(ANY ~route req# (~resource req#)))

(defroutes api-routes
  (r GET "/cards/need-funding" need-funding))

(defroutes app-routes
  (GET "/" [req] (index-page))
  (GET "/payments" [req] (payments-page))
  (route/resources "/")
  (context "/api" req api-routes)
  (route/not-found "<h1>Page not found.</h1>"))

(def prone-enabled? (= true (env :enable-prone)))

(def app
  (cond-> app-routes
    prone-enabled? (prone/wrap-exceptions {:app-namespaces ['bio.nebula]})
    true wrap-params
    true (wrap-defaults site-defaults)))
