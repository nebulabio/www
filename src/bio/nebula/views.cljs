(ns bio.nebula.views
  (:require-macros [javelin.core :refer [defc defc= cell= cell-let]]
                   [hoplon.core :refer [loop-tpl defelem with-page-load]])
  (:require
   [markdown.core :refer [md->html]]
   [javelin.core :as j :refer [cell]]
   [hoplon.core :as h]))

(defn nav []
  (h/div {:class "ui blue inverted fixed main stackable menu"}
         (h/a {:class "item" :click ""}
              (h/img {:src "/images/symbol-white.png"}))
         (h/a {:class "item" :id "projects-link" :click ""} "Projects")
         (h/div {:class "right menu"}
                (h/a {:class "item" :href "https://github.com/nebulabio/protochip"} "GitHub")
                (h/a {:class "item" :href "https://wiki.github.com/nebulabio/protochip"} "Wiki")
                (h/a {:class "item" :href "https://trello.com/b/Tb4b74V5/protochip"} "Trello")
                (h/a {:class "item" :href "https://nebulabio.tumblr.com"} "Tumblr"))))

(defn index []
  (h/div {:id "index"}
         (h/p (h/b "We are creating a suite of open source medical devices, designed with the " (h/i "user") " in mind first."))
         (h/p "We believe that medicine should be used to improve the human condition, and to a large extent modern medicine excels at this. However, medical technology has been falling behind computer technology. Medicine is plagued by excessive regulations, opaque art, outlandishly-high costs, and other barriers to entry.")
         (h/p "The solution is not a new gadget, but more openness. "
              (h/a {:href "https://www.youtube.com/watch?v=Xe1TZaElTAs"} "Love, internet style.")
              " World-changing technology can only be developed when we share our work. That's why the engineers at Nebula share all of our work with the world. Just click on the links to the left to see for yourself.")
         (h/p "At Nebula Bio, we are developing medical devices that not only make you healthier, but they help you " (h/i "learn") " about your health. You own your health data, and you choose what to do with it. Healthcare freedom.")))


(defelem label [{:keys [label] :as attrs} children]
  (cell-let [{:keys [color name]} label]
            (h/div {:class (str "ui label " @color)} name)))

(defelem card-model [{:keys [card] :as attrs} children]
  (cell-let [{:keys [name owner image labels url desc] :as ks} card]
   (h/div :class "item"
          (h/div :class "image"
                 (h/img :src image))
          (h/div :class "content"
                 (h/div :class "header card-title" (h/text name))
                 (h/div :class "meta"
                        (h/span :class "owner card-owner" (cell= (:name owner)))
                        (loop-tpl :bindings [l labels]
                                  (label :label l)))
                 (h/div {:class "description"} (c/str->dom (md->html @desc)))
                 (h/div :class "extra"
                        (h/a :class "ui right floated basic button" :href url :target "_blank"
                             "View on Trello")
                        (h/button :class "ui right floated green button fund-me"
                                  "Fund Me"))))))

(defn projects [card-list]
  (h/h2 (h/text "Projects that currently need funding"))
  (h/div :class "ui segment"
         (h/div :id "loading" :fade-toggle c/loading? :css {:display "none"} :class "ui message info"
              "loading...")
         (h/div :id "cards" :class "ui divided items"
                (loop-tpl :bindings [card card-list]
                          (card-model :card card)))))
