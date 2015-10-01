(ns bio.nebula.client
  "State handler for all of the client-side stuff."
  (:require-macros [javelin.core :refer [defc defc= cell= cell-let]]
                   [hoplon.core :refer [loop-tpl defelem]])
  (:require
   [markdown.core :refer [md->html]]
   [javelin.core :as j :refer [cell]]
   [castra.core :as c :refer [mkremote]]
   [hoplon.core :as h]))

;; card component state
(defc  state         {})
(defc  error         nil)
(defc= error-message (when error (.-message error)))
(defc  loading       [])
(defc= loading?      (seq loading))

(defc= needs-funding-cards (:needs-funding-cards state))

;; api functions for getting cards that need funding
(def get-state (mkremote 'bio.nebula.card/get-state state error loading))

(defn init []
  (get-state)
  (js/setInterval (get-state) 200))


;; library fns
;; also see: https://github.com/tailrecursion/hoplon.io/blob/master/src/util.clj#L30-L37
(defn str->dom [^String s]
  "Takes a string and returns a DOM node fit for snuggling right along
  side other Hlisp code."
  (seq (.parseHTML js/jQuery s)))


;;;;;;;;;;;;;;;;;;;;;;;; views ;;;;;;;;;;;;;;;;;;;;;;;;;;
(def index
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
                 (h/div {:class "description"} (str->dom (md->html @desc)))
                 (h/div :class "extra"
                        (h/a :class "ui right floated basic button" :href url :target "_blank"
                             "View on Trello")
                        (h/button :class "ui right floated green button fund-me"
                                  "Fund Me"))))))

(def cards-view
  (h/div :class "ui segment"
         (h/div :id "loading" :fade-toggle loading? :css {:display "none"} :class "ui message info"
              "loading...")
         (h/div :id "cards" :class "ui divided items"
                (loop-tpl :bindings [card needs-funding-cards]
                          (card-model :card card)))))
