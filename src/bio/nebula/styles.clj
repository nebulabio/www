(ns bio.nebula.styles
  (:require [garden.def :refer [defrule defstyles]]
            [garden.stylesheet :refer [rule]]))

;; colors
(def white "#fff")

;; fonts
(def sans [["1em" "Open Sans"] 'sans-serif])

;; utils
(defn flex []  {:display "flex"})


;; styles
(def reset [:html :body {:height "100%"}])

(def body [:body {:background-color "rgb(114, 140, 191)" 
                  :color "#fff"}])

(def page [:#page {:width "100%"
                   :height "100%"
                   :display "flex"
                   :justify-content "center"}])

(def content [:#content {:color white
                         :max-width "52em"
                         :margin "auto"
                         :text-align "center"
                         :display "flex"
                         :flex-direction "column"
                         :font sans}])

(def logo [:.logo {:width "298px"
                   :height "272px"
                   :margin-bottom "4em"}])

(def links [:#links [:a {:margin "2em 1em"
                         :color white}]])


(defstyles base
  reset
  body
  page
  content
  logo
  links)
