(set-env!
 :dependencies  '[;; Dev Tools
                  [org.clojure/clojure     "1.6.0" :scope "provided"]
                  [adzerk/bootlaces        "0.1.11" :scope "test"]
                  [adzerk/boot-cljs        "0.0-3269-4" :scope "test"]
                  [adzerk/boot-reload      "0.3.1" :scope "test"]
                  [adzerk/boot-test        "1.0.4" :scope "test"]
                  [stripe-tester-clj       "0.1.0"]
                  [org.danielsz/system     "0.1.8"]
                  [environ                 "1.0.0"]
                  ;;[boot-environ            "1.0.0" :scope "test"]
                  ;; boot/core can be removed once boot-environ is on Clojars
                  [boot/core               "2.1.2" :scope "test"]
                  [org.clojure/tools.nrepl "0.2.10"]
                  [ragtime                 "0.4.1"]
                  [mbuczko/boot-ragtime    "0.1.3" :scope "test"]

                  ;; Server
                  [http-kit           "2.1.19"]
                  [markdown-clj       "0.9.67"]
                  [ring               "1.4.0-RC1"]
                  [ring/ring-defaults "0.1.5"]
                  [ring/ring-mock     "0.2.0"]
                  [compojure          "1.3.4"]
                  [prone              "0.8.2"]
                  [hiccup             "1.0.5"]
                  [enlive             "1.1.5"]
                  [prismatic/schema "0.4.3"]
                  [trello             "0.1.2-SNAPSHOT"]
                  [prachetasp/stripe-clojure "1.0.0"]
                  [postgresql         "9.3-1102.jdbc41"]
                  [oj                 "0.3.0"]
                  [liberator          "0.13"]
                  [cheshire           "5.5.0"]]
 :source-paths   #{"src" "test"}
 :resource-paths #{"resources" "src" "assets"}
 :target-path    "target")

(require
 '[adzerk.bootlaces          :refer :all]
 '[adzerk.boot-test          :refer [test]]
 '[reloaded.repl :as repl    :refer [start stop go reset]]
 '[mbuczko.boot-ragtime      :refer [ragtime]]
 '[environ.boot              :refer [environ]]
 '[system.boot               :refer [system run]]
 '[bio.nebula.server.systems :refer [dev-system]])

(def +version+ "latest")
(bootlaces! +version+)

(task-options! ragtime {:database (str "jdbc:" (:database-uri (load-file ".env.edn")))
                        :directory "resources/migrations"}
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
        (test)
        (system :sys #'dev-system :hot-reload true :auto-start true
                :files ["handler.clj" "views.clj" "db.clj" "trello.clj" "stripe.clj"])
        (repl :server true)
        (speak)))

(deftask build
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
