(ns bio.nebula.client
  "Initialization namespace for the Nebula Bio website."
  (:require [reagent.core              :as reagent   :refer [atom]]
            [secretary.core            :as secretary :refer-macros [defroute]]
            [goog.events               :as events]
            [goog.history.EventType    :as EventType]
            [markdown.core             :as md        :refer [md->html]]
            [bio.nebula.client.util    :as util]
            [bio.nebula.client.session :as session]
            [bio.nebula.client.stripe  :as stripe]
            [bio.nebula.client.views.funding  :as funding]
            [bio.nebula.client.views.payments :as payments]
            [bio.nebula.client.views.join :as join])
  (:import goog.History))

;;; Content and pages

(defn sidebar []
  [:div#sidebar
   [:ul
    [:li [:a {:href "#/join"} "Sign up for updates"]]
    ;[:li [:a {:href "#/payments"} "Payments"]]
    [:li [:a {:href "#/funding"}  "What needs funding"]]]])


;;; Application state and routing

(defn current-page-will-mount []
  (session/put! :current-page join/main))

(defn current-page-render []
  [:div#viewport
   (sidebar)
   [:div#content
    [(session/get :current-page)]]])

(defn current-page []
  (reagent/create-class {:component-will-mount current-page-will-mount
                         :reagent-render current-page-render}))

(secretary/set-config! :prefix "/#")

(defroute "/"         [] (session/put! :current-page join/main))
(defroute "/join"     [] (session/put! :current-page join/main))
(defroute "/payments" [] (session/put! :current-page payments/main))
(defroute "/funding"  [] (session/put! :current-page funding/main))

(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen EventType/NAVIGATE
                   (fn [event]
                     (secretary/dispatch! (.-token event))))
    (.setEnabled true)))
(hook-browser-navigation!)

(defn main []
  (reagent/render-component [current-page] (.getElementById js/document "app")))
