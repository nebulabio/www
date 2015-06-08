(ns bio.nebula.www
  "Initialization namespace for the Nebula Bio website."
  (:require [reagent.core    :as reagent   :refer [atom]]
            [secretary.core  :as secretary :refer-macros [defroute]]
            [goog.events     :as events]
            [goog.history.EventType :as EventType]
            ;[bidi.bidi       :as bidi      :refer (match-route resolve-handler RouteProvider tag)]
            [markdown.core   :refer [md->html]]
            [bio.nebula.www.stripe :as stripe])
  (:import goog.History))

;;; Content and pages

(defn masthead []
  [:div#masthead
   [:img {:class "logo align" :src "/img/logo-white.png"}]
   [:h2 "Open Source Biotech"]
   [:div#links
    [:a {:target "_blank" :href "https://github.com/nebulabio"}
     [:i.fa.fa-github.fa-2x]]
    [:a {:target "_blank" :href "https://trello.com/b/Tb4b74V5/protochip"}
     [:i.fa.fa-trello.fa-2x]]
    [:a {:target "_blank" :href "http://nebulabio.tumblr.com"}
     [:i.fa.fa-tumblr.fa-2x]]]])


(def copy-content "Jumbotron copy."
  "**We are creating a suite of open source medical devices, designed with the *user* in mind first.**

We believe that medicine should be used to improve the human condition, and to a large extent modern medicine
excels at this. However, medical technology has been falling behind computer technology. Medicine is plagued by
excessive regulations, opaque art, outlandishly-high costs, and other barriers to entry.

The solution is not a new gadget, but more openness. [Love, internet style.](https://www.youtube.com/watch?v=Xe1TZaElTAs)
World-changing technology can only be developed when we share our work. That's why the engineers at Nebula share all of
our work with the world. Just click on the links to the left to see for yourself.

At Nebula Bio, we are developing medical devices that not only make you healthier, but they help you *learn* about your 
health. You own your health data, and you choose what to do with it. Healthcare freedom.")

(defn dangerous
  ([comp content] (dangerous comp nil content))
  ([comp props content] [comp (assoc props :dangerouslySetInnerHTML {:__html content})]))

(defn copy [state]
  [:div {:id "copy" :data-state @state} (dangerous :p (md->html copy-content))])

(defn join-us [state]
  (let [mailchip-endpoint "//nebulabiotech.us2.list-manage.com/subscribe/post?u=28cc4785c874dceaa296ec03b&amp;id=bb5d4b5ccb"
        class (if (= true @state)
                "active"
                "nonactive")
        style (if (= true @state)
                {:display "flex"}
                {:display "none"})]
    [:div {:id "join" :style style}
     [:div (dangerous :p.notice
                      (md->html
                       "We'll mail you an update when we launch our beta test. If you'd like to support us financially (and we could definitely use the support since we are funding this out-of-pocket right now) feel free to [contact us directly](https://trello.com/c/9roL7q3b/74-contact). We have a payment gateway setup for you to [fund specific projects](https://trello.com/c/WXi42q1U/75-help-fund-us). Thanks, and mahalo!"))]
     [:form {:action mailchip-endpoint :method "POST" :id "join-us-form"}
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

(defn splash [state]
  (let [class (if (= true @state)
                "active"
                "nonactive")]
    [:div#content
     [:div#main
      [copy state]
      [join-us state]]
     [:button#toggler {:on-click #(swap! state not) :class class} "Join us"]]))

(defn home []
  (let [overlay (atom false)]
     [splash overlay]))


;;; Application state and routing

(def app-state (atom {}))

(defn put! [k v]
  (swap! app-state assoc k v))

(defn current-page-will-mount []
  (put! :current-page home))

(defn current-page-render []
  [:div#page
   [masthead]
   [(@app-state :current-page)]])

(defn current-page []
  (reagent/create-class {:component-will-mount current-page-will-mount
                         :reagent-render current-page-render}))

(secretary/set-config! :prefix "#")

(defroute "/"        [] (put! :current-page home))
(defroute "/support" [] (put! :current-page support))

(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen EventType/NAVIGATE
                   (fn [event]
                     (secretary/dispatch! (.-token event))))
    (.setEnabled true)))
(hook-browser-navigation!)

(defn init []
  (reagent/render-component [current-page] (.-body js/document)))
