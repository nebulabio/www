(ns bio.nebula.systems
  (:require [system.core :refer [defsystem]]
            [com.stuartsierra.component :as component]
            (system.components
             [http-kit :refer [new-web-server]]
             [repl-server :refer [new-repl-server]])
            [bio.nebula.card :refer [new-card-service]]
            [environ.core :refer [env]]
            [bio.nebula.handler :refer [app]]))

(defsystem dev-system
  [:web (new-web-server (Integer. (env :http-port)) app)
   :cards (new-card-service "555cffd190be73cf47d22591" {:in [0 :seconds],
                                                        :every [1 :minute]})])

(defsystem prod-system
  [:web (new-web-server (Integer. (env :http-port)) app)
   :cards (new-card-service "555cffd190be73cf47d22591")])
