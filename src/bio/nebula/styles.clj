(ns bio.nebula.styles
  (:require [garden.def             :refer [defrule defstyles]]
            [garden.color :as color :refer [hsl rgb]]
            [garden.stylesheet      :refer [rule at-font-face]]))

;; colors
(def white "It's just white." "#fff")
(def blue "Stolen from http://tonsky.me/ - it's such a nice blue!"  (hsl 215 50 55))
(def light-blue "blue lightened by 25%" (color/lighten blue 25))
(def orange "Complement of blue" (color/complement blue))

;; fonts
(def fira (at-font-face
           [:font-family "FiraSans"
            :src "url('fonts/FiraSans-Medium.otf') format('opentype')"]))
(def sans [["1em" "FiraSans"] 'sans-serif])

;; utils
(defn flex []  {:display "flex"})

;; styles
(def reset [:html :body {:height "100%" :font-size "10px"}])

(def body [:body {:background-color blue
                  :font sans
                  :text-rendering "optimizelegibility"
                  :color white}
           [:a :a:visited :a:active
            {:color white
             :text-decoration "none"
             :border-bottom [["2px" "solid" light-blue]]}]
           [:a:hover {:border-color white}]])

(def page [:#page {:height "100%"
                   :padding "2em"
                   :margin "auto"
                   :max-width "80em"
                   :display "flex"
                   :flex-wrap "wrap"
                   :flex-direction "row"
                   :justify-content "space-around"
                   :font-size "1.8em"
                   :line-height "2em"}
           [:&>div {:margin "2em 1em"}]])


(def masthead [:#masthead {:text-align "center"}
               [:a :a:hover :a:visited :a:active
                {:border "none"}]
               [:a:hover {:color light-blue}]])

(def all-ease  [["all" "0.5s" :ease]])

(def content [:#content {:max-width "45em"
                         :text-align "center"
                         :display "flex"
                         :flex-direction "column"
                         :justify-content "flex-start"
                         :align-items "center"
                         :position "relative"}
              
              [:#main {:display "flex"
                       :flex-direction "column"
                       :align-items "center"
                       :justify-content "center"
                       :position "relative"}
               
               [:#copy {:z-index 1 :text-align "left"}
                [:p {:margin-top "2em"}]
                
                [(keyword "&[data-state='true']") {:z-index -1}
                 [:p :a {:text-shadow [["0 0 15px" white] ["0 0 7px" white]]
                         :border "none"
                         :color (color/rgba 0 0 0 0)
                         :transition all-ease}]]]

               [:#toggler {:transition all-ease}]
               [:#join {:height "100%"
                        :width "100%"
                        :display "flex"
                        :justify-content "center"
                        :align-items "center"
                        :position "absolute"
                        :top "0px"
                        :left "0px"
                        :transition all-ease}
                
                [:form {:padding "2em"
                        :transition all-ease
                        :background (color/rgba 240 240 240 0.7)}]]]])


;; TODO
; #blur-dropshadow { color: rgba(0,0,0,0); margin: 10px; text-shadow: 0px 0px 6px #000, 0px 0px 3px #000;
;  -webkit-transition: all 0.5s ease; 
;     -moz-transition: all 0.5s ease; 
;      -ms-transition: all 0.5s ease; 
;       -o-transition: all 0.5s ease; 
;          transition: all 0.5s ease;



(def logo [:.logo {:width "298px"
                   :height "272px"
                   :margin-bottom "4em"
                   :align-self "center"}])


(def links [:#links [:a {:margin "2em 1em"
                         :color white}]])

(def forms [:form [:input {:border "none"
                           :margin "1em"
                           :line-height "1.8em"
                           :padding ".4em"}]])

(def buttons [:button
              :button:focus
              {:background-color orange
               :color white
               :border-style "solid"
               :border-color white
               :border-width "1px"
               :outline "none"
               :font-weight "bold"
               :padding "1em"
               :margin "1em"}
              [:&.active {:background-color white
                          :color blue
                          :border-color light-blue}]])

(defstyles base
  reset
  body
  page
  masthead
  content
  logo
  links
  forms
  buttons)
