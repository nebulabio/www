(ns bio.nebula.www.macros)

(defmacro getenv [k] (System/getenv k))
