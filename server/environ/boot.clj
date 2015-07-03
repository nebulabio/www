(ns environ.boot
  {:boot/export-tasks true}
  (:require [boot.core :as core]
            [boot.util    :as util]
            [environ.core :as environ]))

(core/deftask environ [e env FOO=BAR {kw edn} "The environment map"]
  (fn [next-task]
    (fn [fileset]
      (util/info (str "environment" env "\n"))
      (with-redefs [environ/env (merge environ/env env)]
        (next-task fileset)))))
