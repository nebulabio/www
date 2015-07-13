(ns bio.nebula.client.macros
  (:require [environ.core :refer [env]]))


(defmacro getenv [k] (env k))
