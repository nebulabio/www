(ns bio.nebula.db
  (:require [environ.core :refer [env]]
            [clojure.string :as s]
            [oj.core :as oj]
            [oj.modifiers :as db]))

(def db-spec {:connection-uri (:database-uri env)})

(defprotocol CrudModel
  "A CRUD model interface for the database."
  (create  [s] "Create a new database record.")
  (read    [s] "Read a record from the database.")
  (update  [s] "Update a record in the database.")
  (destroy [s] "Destroy a record in the database."))

(defrecord Users [name email]
  CrudModel
  (create [this] "Whatever, for now"))
