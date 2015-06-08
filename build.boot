(set-env!
 :dependencies  '[[adzerk/boot-cljs       "0.0-3269-2"]
                  [adzerk/boot-cljs-repl  "0.1.9"]
                  [adzerk/boot-reload     "0.2.6"]
                  [pandeiro/boot-http     "0.6.3-SNAPSHOT"]
                  [environ                "1.0.0"]
                  [danielsz/boot-environ  "0.0.3"]
                  [boot-garden            "1.2.5-3"]
                  [garden                 "1.2.5"]
                  [quile/component-cljs   "0.2.4"]
                  [reagent                "0.5.0"]
                  [secretary              "1.2.3"]
                  [cljsjs/stripe          "2.0-0"]
                  [markdown-clj           "0.9.66"]]
 :source-paths   #{"src"}
 :resource-paths #{"resources/assets"}
 :target-path    "resources/public")

(require
 '[adzerk.boot-cljs          :refer [cljs]]
 '[adzerk.boot-cljs-repl     :refer [cljs-repl start-repl]]
 '[adzerk.boot-reload        :refer [reload]]
 '[pandeiro.boot-http        :refer [serve]]
 '[boot-garden.core          :refer [garden]]
 '[danielsz.boot-environ     :refer [environ]])

(task-options! garden {:styles-var 'bio.nebula.styles/base
                       :output-to "css/style.css"}
               cljs   {:source-map true})


(deftask dev
  "Build nebula.bio for local development."
  [p port PORT int "Port to serve on"]
  (comp (environ :env (load-file ".env"))
        (serve :port (or port 4000))
        (watch)
        (speak)
        (garden)
        (reload)
        (cljs)))

(deftask prod
  "Build nebula.bio for production deployment."
  []
  (comp (environ :env (load-file ".env"))
        (garden :pretty-print false)
        (cljs :optimizations :advanced :source-map true)))
