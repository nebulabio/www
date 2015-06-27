(set-env!
 :dependencies  '[;; Dev Tools
                  [adzerk/boot-cljs        "0.0-3269-2"]
                  [org.danielsz/system     "0.1.8-SNAPSHOT"]
                  [environ                 "1.0.0"]
                  [danielsz/boot-environ   "0.0.3"]
                  [org.clojure/tools.nrepl "0.2.10"]

                  ;; Server
                  [http-kit           "2.1.18"]
                  [markdown-clj       "0.9.66"]
                  [ring               "1.3.0"]
                  [ring/ring-json     "0.3.1"]
                  [ring/ring-defaults "0.1.4"]
                  [compojure          "1.3.4"]
                  [hiccup             "1.0.0"]
                  
                  ;; Client
                  [reagent                "0.5.0"]
                  [secretary              "1.2.3"]
                  [cljsjs/stripe          "2.0-0"]
                  [boot-garden            "1.2.5-3"]
                  [garden                 "1.2.5"]]
 :source-paths   #{"client" "server"}
 :resource-paths #{"resources/"}
 :target-path    "target")

(require
 '[reloaded.repl :as repl :refer [start stop go reset]]
 '[adzerk.boot-cljs       :refer [cljs]]
 '[boot-garden.core       :refer [garden]]
 '[danielsz.boot-environ  :refer [environ]]
 '[system.boot            :refer [system run]]
 '[bio.nebula.systems     :refer [dev-system]])

(task-options! garden {:styles-var 'bio.nebula.styles/base
                       :output-to "public/css/style.css"}
               cljs   {:source-map true
                       :asset-path "js/out"})

(deftask dev
  "Run nebula.bio for local development."
  []
  (comp (environ :env {:http-port 3000 :repl-port 3030})
        (watch :verbose true)
        (cljs)
        (garden)
        (system :sys #'dev-system :hot-reload true :auto-start true :files ["handler.clj" "views.clj"])
        (repl :server true)
        (speak)))

(deftask dev-run
  "Run a dev system from the command line."
  []
  (comp
   (environ :env {:http-port 3000 :repl-port 3030})
   (run :main-namespace "bio.nebula.core" :arguments [#'dev-system])
   (wait)))

(deftask prod
  "Build nebula.bio for production deployment."
  []
  (comp (environ :env (load-file ".env"))
        (garden :pretty-print false)
        (cljs :optimizations :advanced :source-map true)))

(deftask build
  "Builds an uberjar to be run with java -jar"
  []
  (comp
   (aot :namespace '#{bio.nebula.core})
   (pom :project 'bio.nebula :version "1.0.0")
   (uber)
   (jar :main 'bio.nebula.core)))
