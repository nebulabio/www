(ns bio.nebula.www
  "Initialization namespace for the Nebula Bio website."
  (:require [reagent.core :as reagent :refer [atom]]
            [markdown.core :refer [md->html]]
            [bio.nebula.www.stripe :as stripe]))

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

(defn donate []
  [stripe/pay-form stripe/support-elem])

(defn copy [state]
  [:div {:id "copy" :data-state @state} (dangerous :p (md->html copy-content))])

(defn join-us [state]
  (let [class (if (= true @state)
                "active"
                "nonactive")
        style (if (= true @state)
                {:display "block"}
                {:display "none"})]
    [:div#join
     [:form {:action "" :method "POST" :id "join-us-form" :style style}
      [:div.form-row
       [:label [:span "Name"]
        [:input {:type "text"}]]]
      [:div.form-row
       [:label [:span "Email"]
        [:input {:type "text"}]]]
      [:button {:type "submit"} ">"]]]))

(defn content [state]
  (let [class (if (= true @state)
                "active"
                "nonactive")]
    [:div#content
     [:div#main
      [copy state]
      [join-us state]]
     [:button#toggler {:on-click #(swap! state not) :class class} "Join us"]]))

(defn page []
  (let [overlay (atom false)]
    [:div#page
     [masthead]
     [content overlay]]))


(defn init []
  (reagent/render-component [page] (.-body js/document)))
