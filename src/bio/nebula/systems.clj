(ns bio.nebula.systems
  (:require [system.core :refer [defsystem]]
            [com.stuartsierra.component :as component]
            (system.components
             [http-kit :refer [new-web-server]]
             [repl-server :refer [new-repl-server]])
            [bio.nebula.card :refer [new-card-service]]
            [environ.core :refer [env]]
            [bio.nebula.handler :refer [app]]))

(defn dev-system []
  (component/system-map :web (new-web-server (Integer. (env :http-port)) app)
                        :protochip-funding (new-card-service "555cffd190be73cf47d22591")))

(defsystem prod-system
  [:web (new-web-server (Integer. (env :http-port)) app)
   :protochip-funding (new-card-service "555cffd190be73cf47d22591")])
