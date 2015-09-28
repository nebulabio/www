(set-env!
 :dependencies  '[;; Dev Tools
                  [org.clojure/tools.nrepl "0.2.11"]
                  [org.clojure/tools.logging "0.3.1"]
                  [adzerk/bootlaces        "0.1.12" :scope "test"]
                  [adzerk/boot-cljs        "1.7.48-4" :scope "test"]
                  [adzerk/boot-cljs-repl   "0.2.0" :scope "test"]
                  [adzerk/boot-reload      "0.3.2" :scope "test"]
                  [adzerk/boot-test        "1.0.4" :scope "test"]
                  [environ                 "1.0.1"]
                  [boot-environ            "1.0.1" :scope "test"]

                  ;; Server
                  [org.clojure/clojure     "1.7.0" :scope "provided"]
                  [org.clojure/core.match  "0.3.0-alpha4"]
                  [org.clojure/core.typed  "0.3.11"]
                  [com.stuartsierra/component "0.3.0"]
                  [org.danielsz/system     "0.1.9"]
                  [http-kit           "2.1.19"]
                  [markdown-clj       "0.9.74"]
                  [ring               "1.4.0"]
                  [ring/ring-defaults "0.1.5"]
                  [ring/ring-mock     "0.3.0"]
                  [compojure          "1.4.0"]
                  [hoplon/castra      "3.0.0-SNAPSHOT"]
                  [prismatic/schema   "1.0.1"]
                  [me.bsima/trello    "0.2.1"]
                  [prachetasp/stripe-clojure "1.0.0"]
                  [stripe-tester-clj  "0.1.0"]
                  [cheshire           "5.5.0"]

                  ;; Client
                  [org.clojure/clojurescript "1.7.122"]
                  [hoplon/hoplon "6.0.0-alpha10"]
                  [hoplon/boot-hoplon "0.1.10"]
                  [deraen/boot-less "0.4.2"]]
 :source-paths   #{"src" "test" "db" "ui"}
 :resource-paths #{"resources"}
 :asset-paths    #{}
 :target-path    "target")

(require
 '[adzerk.bootlaces       :refer [bootlaces!]]
 '[adzerk.boot-cljs       :refer [cljs]]
 '[adzerk.boot-cljs-repl  :refer [cljs-repl]]
 '[adzerk.boot-reload     :refer [reload]]
 '[hoplon.boot-hoplon     :refer [hoplon prerender]]
 '[deraen.boot-less       :refer [less]]
 '[reloaded.repl :as repl :refer [start stop go reset]]
 '[environ.boot           :refer [environ]]
 '[environ.core           :refer [env]]
 '[system.boot            :refer [system run]]
 '[bio.nebula.systems     :refer [dev-system prod-system]])

(def +version+ "latest")
(bootlaces! +version+)

(task-options! ;;garden  {:styles-var 'bio.nebula.styles/base :output-to "public/css/style.css"}
 cljs    {:source-map true}
 pom     {:project 'bio.nebula
          :version +version+}
 aot     {:namespace '#{bio.nebula}}
 jar     {:main 'bio.nebula
          :manifest {"Description" "http://www.nebula.bio"
                     "Url" "https://github.com/nebulabio/www"}})

(deftask dev
  "Run nebula.bio for local development."
  []
  (comp 
   (if (.exists (clojure.java.io/as-file ".env.edn")) (environ :env (load-file ".env.edn")))
   (watch :verbose true)
   (speak :theme "ordinance")
   (system :sys #'dev-system :hot-reload true :auto-start true
           :files ["handler.clj" "views.clj" "card.clj" "stripe.clj"])
   (repl :server true)
   (less)
   (hoplon)
   (cljs-repl)
   (cljs)
   (reload)))

(deftask prod
  "Run the production system"
  []
  (comp
   (hoplon)
   (cljs :optimizations :advanced)
   (prerender)
   (system :sys #'prod-system :auto-start true)))

(deftask build
  "Build uberjar for deployment"
  []
  (comp
   (pom)
   (uber)
   (aot)
   (jar)))

(defn -main [& args]
  (require 'bio.nebula)
  (apply (resolve 'bio.nebula/-main) args))

