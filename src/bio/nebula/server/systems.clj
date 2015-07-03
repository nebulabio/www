(ns bio.nebula.server.systems
  (:require [system.core               :refer [defsystem]]
            (system.components
             [http-kit                 :refer [new-web-server]]
             [repl-server              :refer [new-repl-server]]
             [postgres           :as p :refer [new-postgres-database]])
            [environ.core              :refer [env]]
            [bio.nebula.server.db      :refer [db-spec]]
            [bio.nebula.server.handler :refer [app]]))

(defsystem dev-system
  [:web (new-web-server (Integer. (env :http-port)) app)])

(defsystem prod-system
  [:web (new-web-server (Integer. (env :http-port)) app)
   :repl-server (new-repl-server (Integer. (env :repl-port)))])
