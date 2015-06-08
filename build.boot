(set-env! :dependencies '[[adzerk/boot-cljs       "0.0-2814-4"     :scope "test"]
                          [adzerk/boot-cljs-repl  "0.1.9"          :scope "test"]
                          [adzerk/boot-reload     "0.2.6"          :scope "test"]
                          [pandeiro/boot-http     "0.6.3-SNAPSHOT" :scope "test"]
                          [environ                "1.0.0"]
                          [danielsz/boot-environ  "0.0.3"          :scope "test"]
                          [garden                 "1.2.5"]
                          [boot-garden            "1.2.5-3"        :scope "test"]
                          [org.clojure/clojurescript "0.0-2816"]                          
                          [reagent                "0.5.0"]
                          [secretary              "1.2.3"]
                          [cljsjs/stripe          "2.0-0"]
                          [markdown-clj           "0.9.66"]])


(require '[adzerk.boot-cljs      :refer [cljs]]
         '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]]
         '[adzerk.boot-reload    :refer [reload]]
         '[danielsz.boot-environ :refer [environ]]
         '[boot-garden.core      :refer [garden]]
         '[pandeiro.boot-http    :refer [serve]])


;;; Build tasks

(deftask dev
  "Build nebula.bio client for local development."
  [c client       bool "Build for the client."
   s server       bool "Build for the sever."
   p port   PORT  int  "Port to serve on (for client only)"]
  (comp (environ :env (load-file ".env"))
        (if client (serve :port (or port 4000)) identity)
        (watch)
        (speak)
        (if client (garden) identity)
        (if server (repl :server true) identity)
        (reload)
        (cljs)))


(deftask prod
  ""
  [c client      bool "Build for the client."
   s server      bool "Build for the sever."]
  (task-options! garden {:pretty-print false}
                 cljs   {:optimizations :advanced})
  (comp (if client (garden) identity)
        (cljs)))


;;; Environments

(deftask client
  "Set environment for the client."
  []
  (set-env! :source-paths   #{"client"}
            :resource-paths #{"resources/assets"}
            :target-path    "resources/public")

  (task-options! garden {:styles-var 'bio.nebula.styles/base
                         :output-to "css/style.css"}
                 cljs   {:source-map true}
                 dev    {:client true}
                 prod   {:client true})
  identity)


(deftask server
  "Set environment for the server."
  []
  (set-env! :source-paths   #{"server"}
            :resource-paths #{"resources/server"}
            :target-path    "target")
  (task-options! dev  {:server true}
                 prod {:server true})
  identity)
