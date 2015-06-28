(ns bio.nebula.www.stripe
  (:require-macros [bio.nebula.www.macros :refer [getenv]])
  (:require [reagent.core :as reagent :refer [atom]]))


(.setPublishableKey js/Stripe (getenv :stripe-pub-key))

(def support-elem (atom false))

(defn donate []
  [stripe/pay-form stripe/support-elem])

(defn pay-form [state]
  (let [style (if (= true @state)
                {:display "block"}
                {:display "none"})
        class (if (= true @state)
                "active"
                "nonactive")]
    [:div#pay-form
     [:button#support
      {:on-click #(swap! state not) :class class}
      "Support Us"]
     [:form {:action "" :method "POST" :id "payment-form" :style style}
      [:span {:class "payment-errors"}]
      [:div {:class "form-row"}
       [:label
        [:span "Card Number"]
        [:input {:type "text" :size 20 :data-stripe "number"}]]]
      [:div {:class "form-row"}
       [:label
        [:span "CVC"]
        [:input {:type "text" :size 4 :data-stripe "cvc"}]]]
      [:div {:class "form-row"}
       [:label
        [:span "Expiration (MM/YYYY)"]
        [:input {:type "text" :size 2 :data-stripe "exp-month"}]]
       [:span " / "]
       [:input {:type "text" :size 4 :data-stripe "exp-year"}]]
      [:button {:type "submit"} "Submit Payment"]]]))
