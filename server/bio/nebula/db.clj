(ns bio.nebula.db
  (:require [environ.core :refer [env]]
            [oj.core :as oj]
            [oj.modifiers :as db]))


(def db-url (zipmap [:user :password :hostname :port :database]
                    (-> (env :database-url)
                        (clojure.string/replace #"postgres://" "")
                        (clojure.string/split #":|/|@"))))

(def db-spec {:hostname (:hosname db-url)
              :port     (:port db-url)
              :database (:database db-url)
              :user     (:user db-url)
              :password (:password db-url)})


(defprotocol CrudModel
  "A CRUD model interface for the database."
  (create  [s] "Create a new database record.")
  (read    [s] "Read a record from the database.")
  (update  [s] "Update a record in the database.")
  (destroy [s] "Destroy a record in the database."))

(defrecord Users [name email]
  CrudModel
  (create [this] "Whatever, for now"))
