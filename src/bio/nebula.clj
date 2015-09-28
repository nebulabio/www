(ns bio.nebula.server
  (:gen-class)
  (:require
   [reloaded.repl :refer [set-init! go]]
   [bio.nebula.server.systems :refer [prod-system]]))

(defn -main
  "Start the production server."
  [& args]
  (let [system (or (first args) #'prod-system)]
    (set-init! system)
    (go)))
