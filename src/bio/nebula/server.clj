(ns bio.nebula.server
  (:gen-class)
  (:require
   [reloaded.repl :refer [system init start stop go reset]]
   [bio.nebula.server.systems :refer [prod-system]]))

(defn -main
  "Start the production server."
  [& args]
  (let [system (or (first args) #'prod-system)]
    (reloaded.repl/set-init! system)
    (go)))
