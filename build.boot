(set-env! :dependencies '[[adzerk/boot-cljs-repl "0.1.10-SNAPSHOT" :scope "test"]
                          [adzerk/boot-reload    "0.3.1"           :scope "test"]
                          [pandeiro/boot-http    "0.6.3-SNAPSHOT"  :scope "test"]
                          [environ               "1.0.0"]
                          [danielsz/boot-environ "0.0.4"           :scope "test"]
                          [garden                "1.2.5"]
                          [boot-garden           "1.2.5-3"         :scope "test"]])


(require '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]]
         '[adzerk.boot-reload    :refer [reload]]
         '[boot-garden.core      :refer [garden]]
         '[danielsz.boot-environ :refer [environ]]
         '[pandeiro.boot-http    :refer [serve]])

(declare cljs)

#_(deftask whatevs
  []
  (require 'cljs.build.api)
  (cljs.build.api/build "server"
                        {:main 'bio.nebula.server/init
                         :output-to "out/main.js"
                         :verbose true}))


#_(deftask nodejs-repl []
  (require 'cljs.repl)
  (require 'cljs.repl.node)
  (cljs.repl/repl (cljs.repl.node/repl-env)
                  :watch "src"
                  :output-dir "out"))

;;; Build tasks

(deftask dev
  "Build nebula.bio client for local development."
  [c client       bool "Build for the client."
   s server       bool "Build for the sever."
   p port   PORT  int  "Port to serve on (for client only)"]
  ;(require  '[adzerk.boot-cljs :refer [cljs]])
  (comp
        (environ :env (load-file ".env"))
        (if client (serve :port (or port 4000)) identity)
        (watch)
        (speak)
        (reload)
        (if client (garden) identity)
        (if client (repl :server true) (cljs-repl))
        ;(cljs)
        ))


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
  (set-env! :dependencies   #(conj %
                                   '[adzerk/boot-cljs "0.0-2814-4" :scope "test"]
                                   '[reagent       "0.5.0"]
                                   '[secretary     "1.2.3"]
                                   '[cljsjs/stripe "2.0-0"]
                                   '[markdown-clj  "0.9.66"])
            :source-paths   #{"client"}
            :resource-paths #{"resources/assets"}
            :target-path    "resources/public")
  (require  '[adzerk.boot-cljs :refer [cljs]])
  (task-options! garden {:styles-var 'bio.nebula.styles/base
                         :output-to "css/style.css"}
                 cljs   {:source-map true}
                 dev    {:client true}
                 prod   {:client true}
                 reload {:on-jsload 'bio.nebula.www/init})
  identity)


(deftask server
  "Set environment for the server."
  []
  (set-env! :dependencies   #(conj %
                                   '[org.clojure/clojurescript "0.0-3308"]
                                   '[adzerk/boot-cljs          "0.0-3308-0" :scope "test"])
            :source-paths   #{"server"}
            :resource-paths #{"resources/server"}
            :target-path    "target")
  (require  '[adzerk.boot-cljs :refer [cljs]])
  (task-options! cljs   {:target :nodejs :main 'bio.nebula.server :output-to "main.js"}
                 dev    {:server true}
                 prod   {:server true}
                 reload {:on-jsload 'bio.nebula.server/working?})
  identity)
