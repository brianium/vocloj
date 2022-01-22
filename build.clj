(ns build
  (:require [clojure.tools.build.api :as b]))

(def lib 'com.github.brianium/vocloj)

(def version (format "1.0.%s" (b/git-count-revs nil)))

(def class-dir "target/classes")

(def basis (b/create-basis {:project "deps.edn"}))

(def jar-file (format "target/%s.jar" (name lib)))

(defn clean [_]
  (b/delete {:path "target"}))

(defn jar [_]
  (b/write-pom {:class-dir class-dir
                :lib lib
                :version version
                :basis basis
                :src-dirs ["src/cljc" "src/cljs"]
                :scm {:url                 "https://github.com/brianium/vocloj"
                      :connection          "scm:git:git://github.com/brianium/vocloj.git"
                      :developerConnection "scm:git:git://github.com/brianium/vocloj.git"
                      :tag                 "HEAD"}})
  (b/copy-dir {:src-dirs ["src/cljc" "src/cljs"]
               :target-dir class-dir})
  (b/jar {:class-dir class-dir
          :jar-file jar-file}))

(defn copy-public [_]
  (b/copy-dir {:src-dirs   ["resources/public"]
               :target-dir "target/public"}))
