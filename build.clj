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
                :src-dirs ["src"]
                :scm {:url                 "https://github.com/brianium/vocloj.git"
                      :connection          "scm:git:git://github.com/brianium/vocloj.git"
                      :developerConnection "scm:git:git://github.com/brianium/vocloj.git"
                      :tag                 "HEAD"}})
  (b/copy-dir {:src-dirs ["src"]
               :target-dir class-dir})
  (b/jar {:class-dir class-dir
          :jar-file jar-file}))
