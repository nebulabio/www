(ns bio.nebula.client
  "State handler for all of the client-side stuff."
  (:require-macros [javelin.core :refer [defc defc= cell= cell-let]]
                   [hoplon.core :refer [loop-tpl defelem with-page-load]])
  (:require
   [markdown.core :refer [md->html]]
   [javelin.core :as j :refer [cell]]
   [castra.core :as c :refer [mkremote]]
   [hoplon.core :as h :refer [route-cell]]
   [bidi.bidi :as bidi]
   [pushy.core :as pushy]
   [bio.nebula.views :as views]))

;; card component state
(defc  state         {})
(defc  error         nil)
(defc= error-message (when error (.-message error)))
(defc  loading       [])
(defc= loading?      (seq loading))

(defc= needs-funding-cards (:needs-funding-cards state))

;; api functions for getting cards that need funding
(def get-state (mkremote 'bio.nebula.card/get-state state error loading))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; library fns
;; also see: https://github.com/tailrecursion/hoplon.io/blob/master/src/util.clj#L30-L37
(defn str->dom
  "Takes a string and returns a DOM node fit for snuggling right along
  side other Hlisp code."
  [^String s]
  (seq (.parseHTML js/jQuery s)))



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; routing
(def routes ["/" {"" :index
                  "projects" :projects}])

(defmulti pages identity)

(defmethod pages :index
  []
  (views/index))

(defmethod pages :projects
  []
  (views/projects needs-funding-cards))

(defmethod pages :default
  []
  (views/index))

(defc view-cell (pages :index))

(defn- parse-url [url]
  (bidi/match-route routes url))

(defn- dispatch-route [matched-route]
  (let [page-name (keyword (str (name (:handler matched-route))))]
    (reset! view-cell page-name)))

(defn app-routes []
  (pushy/start! (pushy/pushy dispatch-route parse-url)))

(def url-for (partial bidi/path-for routes))

(defn init []
  (get-state)
  (js/setInterval (get-state) 200))

