(ns bio.nebula.client
  "Initialization namespace for the Nebula Bio website."
  (:require [reagent.core             :as reagent   :refer [atom]]
            [secretary.core           :as secretary :refer-macros [defroute]]
            [goog.events              :as events]
            [goog.history.EventType   :as EventType]
            [markdown.core            :as md        :refer [md->html]]
            [bio.nebula.client.stripe :as stripe])
  (:import goog.History))

(defn- unsafe-html
  ([comp content] (unsafe-html comp nil content))
  ([comp props content] [comp (assoc props :dangerouslySetInnerHTML {:__html content})]))

;;; Content and pages

(defn sidebar []
  [:div#sidebar
   [:ul
    [:li [:a {:href "#/join"} "Sign up for updates"]]
    [:li [:a {:href "#/payments"} "Payments"]]
    [:li [:a {:href "#/funding"}  "What needs funding"]]]])


(defn join-email-list []
  (let [mailchimp-endpoint "//nebulabiotech.us2.list-manage.com/subscribe/post?u=28cc4785c874dceaa296ec03b&amp;id=bb5d4b5ccb"]
    [:div {:id "join"}
     [:div (unsafe-html :div.notice
                        (md->html
                         "We'll mail you an update when we launch our beta test. If you'd like to support us financially (and we could definitely use the support since we are funding this out-of-pocket right now) feel free to [contact us directly](https://trello.com/c/9roL7q3b/74-contact). We have a payment gateway setup for you to [fund specific projects](https://trello.com/c/WXi42q1U/75-help-fund-us). Thanks, and mahalo!"))]
     [:form {:action mailchimp-endpoint :method "POST" :id "join-email-list-form"}
      [:div.form-row
       [:label {:for "mce-NAME"} [:span "Name"]
        [:input {:id "mcd-NAME" :type "text" :name "NAME"}]]]
      [:div.form-row
       [:label {:for "mce-EMAIL"} [:span "Email"]
        [:input {:id "mce-EMAIL" :type "email" :name "EMAIL"}]]]
      ;; required by MailChimp:
      [:div {:style {:position :absolute :left "-5000px"}}
       [:input {:type "text" :name "b_28cc4785c874dceaa296ec03b_bb5d4b5ccb" :tabindex "-1" :value ""}]]
      [:button {:type "submit"} "Submit"]]]))

(defn payments []
  [:h2.card "This is payments"])

(defn funding []
  [:h2 "This is funding"])

;;; Application state and routing

(def app-state (atom {}))

(defn put! [k v]
  (swap! app-state assoc k v))

(defn current-page-will-mount []
  (put! :current-page join-email-list))

(defn current-page-render []
  [:div#viewport
   (sidebar)
   [:div#content
    [(@app-state :current-page)]]])

(defn current-page []
  (reagent/create-class {:component-will-mount current-page-will-mount
                         :reagent-render current-page-render}))

(secretary/set-config! :prefix "/#")

(defroute "/"         [] (put! :current-page join-email-list))
(defroute "/join"     [] (put! :current-page join-email-list))
(defroute "/payments" [] (put! :current-page payments))
(defroute "/funding"  [] (put! :current-page funding))

(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen EventType/NAVIGATE
                   (fn [event]
                     (secretary/dispatch! (.-token event))))
    (.setEnabled true)))
(hook-browser-navigation!)

(defn init []
  (reagent/render-component [current-page] (.getElementById js/document "app")))
