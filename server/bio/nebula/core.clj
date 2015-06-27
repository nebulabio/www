(ns bio.nebula.core
  (:gen-class)
  (:require
   [reloaded.repl :refer [system init start stop go reset]]
   [bio.nebula.systems :refer [prod-system]]))

(defn -main
  "Start the production system."
  [& args]
  (let [system (or (first args) #'prod-system)]
    (reloaded.repl/set-init! system)
    (go)))
