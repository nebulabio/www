(set-env!
 :dependencies  '[;; Dev Tools
                  [adzerk/bootlaces        "0.1.11" :scope "test"]
                  [adzerk/boot-cljs        "0.0-3269-4" :scope "test"]
                  [org.danielsz/system     "0.1.8"]
                  [environ                 "1.0.0"]
                  [danielsz/boot-environ   "0.0.4" :scope "test"]
                  [org.clojure/tools.nrepl "0.2.10"]

                  ;; Server
                  [http-kit           "2.1.19"]
                  [markdown-clj       "0.9.67"]
                  [ring               "1.4.0-RC1"]
                  [ring/ring-defaults "0.1.5"]
                  [compojure          "1.3.4"]
                  [hiccup             "1.0.5"]
                  [prachetasp/stripe-clojure "1.0.0"]
                  
                  ;; Client
                  [reagent                "0.5.0"]
                  [secretary              "1.2.3"]
                  [cljsjs/stripe          "2.0-0"]
                  [boot-garden            "1.2.5-3" :scope "test"]
                  [garden                 "1.2.5"]]
 :source-paths   #{"client" "server"}
 :resource-paths #{"resources" "client" "server"}
 :target-path    "target")

(require
 '[adzerk.bootlaces       :refer :all]
 '[reloaded.repl :as repl :refer [start stop go reset]]
 '[adzerk.boot-cljs       :refer [cljs]]
 '[boot-garden.core       :refer [garden]]
 '[danielsz.boot-environ  :refer [environ]]
 '[system.boot            :refer [system run]]
 '[bio.nebula.systems     :refer [dev-system]])

(def +version+ "latest")
(bootlaces! +version+)

(task-options! garden {:styles-var 'bio.nebula.styles/base
                       :output-to "public/css/style.css"}
               cljs   {:source-map true
                       :asset-path "js/out"}
               pom    {:project 'bio.nebula
                       :version +version+}
               aot    {:namespace '#{bio.nebula.core}}
               jar    {:main 'bio.nebula.core
                       :manifest {"Description" "http://www.nebula.bio"
                                  "Url" "https://github.com/nebulabio/www"}})

(deftask dev
  "Run nebula.bio for local development."
  []
  (comp (environ :env (load-file ".env.edn"))
        (watch :verbose true)
        (cljs)
        (garden)
        (system :sys #'dev-system :hot-reload true :auto-start true :files ["handler.clj" "views.clj"])
        (repl :server true)
        (speak)))

(deftask build
  "Builds an uberjar to be run with java -jar"
  []
  (comp
   (garden :pretty-print false)
   (cljs :optimizations :advanced :source-map true)
   (aot)
   (pom)
   (uber)
   (jar)))

(defn -main [& args]
  (require 'bio.nebula.core)
  (apply (resolve 'bio.nebula.core/-main) args))
