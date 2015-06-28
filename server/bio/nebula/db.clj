(ns bio.nebula.db
  (:require [environ.core :refer [env]]
            [posgres.async :refer [open-db]]
            [oj.core :as oj]
            [oj.modifiers :as db]))


(def db-url (zipmap [:user :password :hostname :port :database]
                    (-> (env :database-url)
                        (clojure.string/replace #"postgres://" "")
                        (clojure.string/split #":|/|@"))))

(def db (open-db {:hostname (:hosname db-url)
                  :port     (:port db-url)
                  :database (:database db-url)
                  :use      (:user db-url)
                  :password (:password db-url)}))


(defprotocol CrudModel
  "A CRUD model interface for the database."
  (create  [] "Create a new database record.")
  (read    [] "Read a record from the database.")
  (update  [] "Update a record in the database.")
  (destroy [] "Destroy a record in the database."))

(defrecord Users [name email]
  CrudModel
  (create [] "Whatever, for now"))
