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

(def page [:#page {:height "100%"
                   :margin :auto
                   :max-width "80em"
                   :display "flex"
                   :flex-wrap "wrap"
                   :flex-direction "row"
                   :justify-content "space-around"
                   :font-size "1.8rem"
                   :line-height "2em"}
           [:&>div {:margin "2em 1em"}]])


(def masthead [:#masthead {:text-align "center"}
               [:a :a:hover :a:visited :a:active
                {:border "none"}]
               [:a:hover {:color (first blue-pallet)}]])

(def content [:#content {:max-width "45em"
                         :display "flex"
                         :flex-direction "column"
                         :justify-content "flex-start"
                         :align-items "center"
                         :position "relative"}

              [:#toggler {:margin-top "1rem"                          
                          :font-size "1.6rem"
                          :color white
                          :width "200px"
                          :background-color (color/complement (second blue-pallet))}]
              
              [:#main {:display "flex"
                       :flex-direction "column"
                       :align-items "center"
                       :justify-content "center"
                       :position "relative"}
               
               [:#copy {:z-index 1 :text-align "left" :padding "7px"}
                [:p {:margin-top "2rem"}]
                
                [(keyword "&[data-state='true']") {:z-index -1}
                 [:p :a {:text-shadow [["0 0 15px" white] ["0 0 7px" white]]
                         :border "none"
                         :color (color/rgba 0 0 0 0)}]]]
               
               [:#join {:height "100%"
                        :width "100%"
                        :display "flex"
                        :justify-content :flex-start
                        :flex-direction :column
                        :align-items :center
                        :text-align :center
                        :position "absolute"
                        :top "0px"
                        :left "0px"
                        :border-radius *border-radii*
                        :background (color/lighten (blue-a 0.7) 20)}
                [:input {:color blue}]
                [:button {:color white
                          :background (second blue-pallet)}]]]])


(def logo [:.logo {:width "298px"
                   :height "272px"
                   :margin-bottom "4em"
                   :align-self "center"}])

(def notices [:.notice {:border-radius *border-radii*
                        :border [["2px solid" (first blue-pallet)]]
                        :margin "1em"
                        :padding "1em"
                        :text-align :left
                        :background (second blue-pallet)}])

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
  masthead
  content
  logo
  notices
  links
  forms
  buttons)
