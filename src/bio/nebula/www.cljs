(ns bio.nebula.www
  "Initialization namespace for the Nebula Bio website."
  (:require [reagent.core :as reagent]
            [bio.nebula.www.stripe :as stripe]))

(defn splash []
  [:div#splash
   [:img {:class "logo align" :src "/img/logo-white.png"}]
   [:h2 "Open Source Biotech"]
   [:div#links
    [:a {:target "_blank" :href "https://github.com/nebulabio"}
     [:i.fa.fa-github.fa-5x]]
    [:a {:target "_blank" :href "https://trello.com/b/Tb4b74V5/protochip"}
     [:i.fa.fa-trello.fa-5x]]]])


(defn container []
  [:div#content
   [splash]
   [stripe/pay-form stripe/support-elem]
   [stripe/support]])


(defn init []
  (reagent/render-component [container] (.-body js/document)))
