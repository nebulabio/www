(ns bio.nebula.server.stripe
  "Handles Stripe interactions."
  (:require
   [stripe-clojure.core :as s]
   [environ.core :refer [env]]))

(s/set-tokens! {:private (env :stripe-secret-key)
                :public (env :stripe-pub-key)})
