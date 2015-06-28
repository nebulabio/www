(ns bio.nebula.www.macros
  (:require [environ.core :refer [env]]))


(defmacro getenv [k] (env k))
