(ns bio.nebula.styles
  (:require [garden.def :refer [defrule defstyles]]
            [garden.stylesheet :refer [rule]]))

;; colors
(def white "#fff")
(def light-blue "rgb(114, 140, 191)")

;; fonts
(def sans [["1em" "Open Sans"] 'sans-serif])

;; utils
(defn flex []  {:display "flex"})

;; styles
(def reset [:html :body {:height "100%"}])

(def body [:body {:background-color light-blue
                  :color "#fff"}])

(def page [:#page {:width "100%"
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


(defstyles base
  reset
  body
  page
  content
  logo
  links)
