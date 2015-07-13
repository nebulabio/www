(ns bio.nebula.server.db
  (:require [environ.core :refer [env]]
            [clojure.string :as s]
            [oj.core :as oj]
            [oj.modifiers :as db]))

(def db-spec {:connection-uri (:database-uri env)})
