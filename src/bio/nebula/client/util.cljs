(ns bio.nebula.client.util
  "Frontend utilities")

(defn unsafe-html
  "A helper for rendering raw html with Reagent. Takes a hiccup-style element keyword, 
  optional properties, and the content to actually display."
  ([elem content] (unsafe-html elem nil content))
  ([elem properties content] [elem (assoc properties :dangerouslySetInnterHTML {:__html content})]))
