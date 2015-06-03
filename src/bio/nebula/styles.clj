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
(def reset [:html :body {:height "100%"}])

(def body [:body {:background-color blue
                  :color "#fff"}])

(def page [:#page {:width "10p0%"
                   :height "100%"
                   :display "flex"
                   :justify-content "center"}])

(def content [:#content {:color white
                         :max-width "52em"
                         :height "100%"
                         :margin "auto"
                         :text-align "center"
                         :display "flex"
                         :flex-direction "column"
                         :align-items "center"
                         :justify-content "center"
                         :font sans}])

(def logo [:.logo {:width "298px"
                   :height "272px"
                   :margin-bottom "4em"
                   :align-self "center"}])

(def links [:#links [:a {:margin "2em 1em"
                         :color white}]])

(def support [:button#support
              :#support:focus
              {:background-color orange
               :color white
               :border-style "solid"
               :border-color white
               :border-width "1px"
               :outline "none"
               :font sans
               :font-weight "bold"
               :padding "1em"
               :margin "1em"}
              [:&.active {:background-color white
                          :color light-blue
                          :border-color light-blue}]])

(defstyles base
  reset
  body
  page
  content
  logo
  links
  support)
