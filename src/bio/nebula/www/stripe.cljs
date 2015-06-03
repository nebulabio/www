(ns bio.nebula.www.stripe
  (:require [reagent.core :as reagent :refer [atom]]))

;(def *stripe-key*
;  "The Stripe Publishable Key is set as a dynamic global variable
;  so it can be easily swapped out during testing."
;  "pk_live_MmXcXkUVkMEsC70bvOUfxjoo")
;(.setPublishableKey Stripe *stripe-key*)

(def support-elem (atom false))


(defn pay-form [state]
  (let [style (if @state
                {:display "block"}
                {:display "none"})]
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
     [:button {:type "submit"}
      [:span "Submit Payment"]]]))


(defn support []
  [:button {:on-click #(swap! @support-elem not)}])
