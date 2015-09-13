(set-env!
 :dependencies  '[;; Dev Tools
                  [org.clojure/clojure     "1.7.0" :scope "provided"]
                  [org.clojure/tools.nrepl "0.2.10"]
                  [adzerk/bootlaces        "0.1.12" :scope "test"]
                  [adzerk/boot-cljs        "1.7.48-3" :scope "test"]
                  [adzerk/boot-reload      "0.3.2" :scope "test"]
                  [adzerk/boot-test        "1.0.4" :scope "test"]
                  [environ                 "1.0.1"]
                  [boot-environ            "1.0.1" :scope "test"]

                  ;; Server
                  [org.clojure/core.match "0.3.0-alpha4"]
                  [org.danielsz/system     "0.1.9"]
                  [http-kit           "2.1.19"]
                  [markdown-clj       "0.9.74"]
                  [ring               "1.4.0"]
                  [ring/ring-defaults "0.1.5"]
                  [ring/ring-mock     "0.3.0"]
                  [compojure          "1.4.0"]
                  [prone              "0.8.2"]
                  [hiccup             "1.0.5"]
                  [enlive             "1.1.6"]
                  [prismatic/schema   "1.0.1"]
                  [me.bsima/trello    "0.2.0"]
                  [prachetasp/stripe-clojure "1.0.0"]
                  [stripe-tester-clj       "0.1.0"]
                  [ragtime                 "0.5.2"]
                  [mbuczko/boot-ragtime    "0.1.5" :scope "test"]
                  [postgresql         "9.3-1102.jdbc41"]
                  [oj                 "0.3.0"]
                  [liberator          "0.13"]
                  [cheshire           "5.5.0"]]
 :source-paths   #{"src" "test" "db"}
 :resource-paths #{"resources" "ui"}
 :target-path    "target")

(require
 '[adzerk.bootlaces          :refer [bootlaces!]]
 '[adzerk.boot-test          :refer [test]]
 '[reloaded.repl :as repl    :refer [start stop go reset]]
 '[mbuczko.boot-ragtime      :refer [ragtime]]
 '[environ.boot              :refer [environ]]
 '[system.boot               :refer [system run]]
 '[bio.nebula.server.systems :refer [dev-system]])

(def +version+ "latest")
(bootlaces! +version+)

(task-options! ragtime {:database (str "jdbc:" (:database-uri (load-file ".env.edn")))
                        :directory "db/migrations"}
               ;garden  {:styles-var 'bio.nebula.styles/base :output-to "public/css/style.css"}
               ;cljs    {:source-map true :asset-path "/js/out"}
               pom     {:project 'bio.nebula
                        :version +version+}
               aot     {:namespace '#{bio.nebula.server}}
               jar     {:main 'bio.nebula.server
                        :manifest {"Description" "http://www.nebula.bio"
                                  "Url" "https://github.com/nebulabio/www"}})

(deftask dev
  "Run nebula.bio for local development."
  []
  (comp (environ :env (load-file ".env.edn"))
        (watch :verbose true)
        (speak :theme "pillsbury")
        (system :sys #'dev-system :hot-reload true :auto-start true
                :files ["handler.clj" "views.clj" "db.clj" "trello.clj" "stripe.clj"])
        (repl :server true)
        (speak :theme "ordinance")))

(deftask prod
  "Builds an uberjar to be run with java -jar"
  []
  (comp
   (aot)
   (pom)
   (uber)
   (jar)))

(defn -main [& args]
  (require 'bio.nebula.server)
  (apply (resolve 'bio.nebula.server/-main) args))
