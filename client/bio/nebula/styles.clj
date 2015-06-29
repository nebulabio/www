(ns bio.nebula.styles
  (:require [garden.def             :refer [defrule defstyles]]
            [garden.color :as color :refer [hsl hsla rgb rgba]]
            [garden.stylesheet      :refer [rule at-font-face]]))

;; colors
(def  black "It's just black." "#111")
(defn black-a [a] "Black, but with transparency." (hsla 1 1 1 a))
(def  white "It's just white." "#fff")
(defn white-a [a] "White, but with transparency." (hsla 0 0 100 a))
(def  blue "Stolen from http://tonsky.me/ - it's such a nice blue!"  (hsl 215 50 55))
(defn blue-a [a] "Blue, but with transparency" (hsla 215 50 55 a))
(def  light-blue "blue lightened by 25%" (color/lighten blue 25))
(def  orange "Complement of blue" (color/complement blue))

;; light -> dark
(def blue-pallet [(rgb 163 195 240)
                  (rgb 103 149 215)
                  (rgb 83 131 198) ;same as blue above
                  (rgb 58 97 152)
                  rgb 37 66 110])

;; true == black, false == white
(def ^:dynamic *color-switch* (atom true))

;; fonts
(def fira (at-font-face
           [:font-family "FiraSans"
            :src "url('fonts/FiraSans-Medium.otf') format('opentype')"]))
(def sans [["1em" "FiraSans"] 'sans-serif])

;; utils
(defn flex []  {:display "flex"})
(def ^:dynamic *border-radii* "3px")

;; styles
(def reset [:html :body {:height "100%" :font-size "10px"
                         :margin 0 :padding 0}])

(def body [:body {:background-color blue
                  :font sans
                  :text-rendering "optimizelegibility"
                  :color white
                  }
           [:a :a:visited :a:active
            {:color white
             :text-decoration "none"
             :border-bottom [["2px" "solid" light-blue]]
             }]
           [:a:hover {:border-color white}]])

(def page [:#page 
           [:&>div {:margin "2em 1em"}]])


(def masthead [:#masthead {:text-align "center"}
               [:a :a:hover :a:visited :a:active
                {:border "none"}]
               [:a:hover {:color (first blue-pallet)}]])

(def sidebar [:#sidebar {:min-width "26rem"}
              [:ul]])

(def splash-page
  [:button#join-us {:margin-top "1rem"
                    :font-size "1.6rem"
                    :color white
                    :width "200px"
                    :background-color (color/complement (second blue-pallet))}
   [:a {:border :none}]])


(def viewport
  [:#viewport {:height "100%"
               :margin :auto
               :max-width "80em"
               :display "flex"
               :flex-wrap "nowrap"
               :flex-direction "row"
               :justify-content "space-between"
               :font-size "1.8rem"
               :line-height "2em"}])

;; FIXME: Split this up into "app" and "index" or something
(def content
  [:#content {:background-color white
              :color (color/darken blue 75)
              :width "100%"
              :padding "3rem"
              :display "flex"
              :flex-direction "column"
              :justify-content "flex-start"
              :align-items "center"
              :position "relative"}



   ;; A well acts to "sit-back" in the viewport
   [:.well {:background-color (color/darken white 7)
            :padding "2rem"}]

   ;; A card has a decent border around the outside
   [:.card {:box-shadow [["0px" "1px" "2px" (rgba 0 0 0 0.05)]]
            :border-radius *border-radii*
            :background-color white}]
   
   [:a {:color black}]
              
   [:#main {:display "flex"
            :flex-direction "column"
            :align-items "center"
            :justify-content "center"
            :position "relative"}]
               
   [:#copy {:z-index 1 :text-align "left" :padding "7px"}
    [:p {:margin-top "2rem"}]
    
    [(keyword "&[data-state='true']") {:z-index -1}
     [:p :a {:text-shadow [["0 0 15px" white] ["0 0 7px" white]]
             :border "none"
             :color (color/rgba 0 0 0 0)}]]]
               
   [:#join
    {:justify-content :flex-start
     :flex-direction :column
     :align-items :center
     :text-align :center}
    
    [:input {:color blue}]
    [:button {:color white
              :background (second blue-pallet)}]]])


(def logo [:.logo {:width "298px"
                   :height "272px"
                   :margin-bottom "4em"
                   :align-self "center"}])

(def notices [:.notice {:border-radius *border-radii*
                        :border [["2px solid" (first blue-pallet)]]
                        :padding "1em"
                        :text-align :left
                        :background (color/lighten (second blue-pallet) 20)}])

(def links [:#links [:a {:margin "2em 1em"
                         :color white}]])

(def forms [:form {:border-radius *border-radii*}
            [:input {:margin "1em"}]])

(def buttons [:button
              :button:focus
              {:border-radius *border-radii*
               :border-color (first blue-pallet)}
              [:&:hover {:border-color white}]])

(defstyles base
  reset
  body
  page
  viewport
  sidebar
  masthead
  content
  logo
  notices
  links
  forms
  buttons)
