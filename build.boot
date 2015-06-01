(set-env!
 :dependencies  '[[adzerk/boot-cljs-repl     "0.1.9"]
                  [adzerk/boot-reload        "0.2.6"]
                  [pandeiro/boot-http        "0.6.2"]
                  [adzerk/boot-cljs          "0.0-2814-0"]
                  [pandeiro/boot-http        "0.6.3-SNAPSHOT"]

                  [boot-garden               "1.2.5-2"]
                  [garden                    "1.2.5"]

                  [tailrecursion/boot-hoplon "0.1.0-SNAPSHOT"]
                  [tailrecursion/hoplon      "6.0.0-SNAPSHOT"]

                  [cljsjs/stripe             "2.0-0"]]
 :source-paths   #{"src"}
 :resource-paths #{"resources/assets"}
 :target-path    "resources/public")

(require
 '[adzerk.boot-cljs          :refer [cljs]]
 '[adzerk.boot-cljs-repl     :refer [cljs-repl start-repl]]
 '[adzerk.boot-reload        :refer [reload]]
 '[pandeiro.boot-http        :refer [serve]]
 '[tailrecursion.boot-hoplon :refer [haml hoplon prerender html2cljs]]
 '[boot-garden.core          :refer [garden]])

(task-options! garden {:styles-var 'bio.nebula.styles/base
                       :output-to "css/style.css"})

(deftask dev
  "Build nebula.bio for local development."
  [p port PORT int "Port to serve on"]
  (comp (serve :port (or port 4000))
        (watch)
        (speak)
        (garden)
        (hoplon)
        (reload)
        (cljs)))

(deftask prod
  "Build nebula.bio for production deployment."
  []
  (comp (hoplon :pretty-print false)
        (garden)
        (cljs :optimizations :advanced :source-map true)
        (prerender)))
