[1mdiff --git a/client/src/views/Home/Home.css b/client/src/views/Home/Home.css[m
[1mindex 1a7bfaf..af74e9b 100755[m
[1m--- a/client/src/views/Home/Home.css[m
[1m+++ b/client/src/views/Home/Home.css[m
[36m@@ -3,11 +3,11 @@[m
 }[m
 [m
 .App-logo {[m
[31m-    height: 40vmin;[m
[32m+[m[32m    height: 10min;[m
 }[m
 [m
 .App-header {[m
[31m-    background-color: #282c34;[m
[32m+[m[32m    background-color: #F3D07B;[m
     min-height: 100vh;[m
     display: flex;[m
     flex-direction: column;[m
[1mdiff --git a/client/src/views/Home/Home.js b/client/src/views/Home/Home.js[m
[1mindex baa24b1..dc1b654 100755[m
[1m--- a/client/src/views/Home/Home.js[m
[1m+++ b/client/src/views/Home/Home.js[m
[36m@@ -8,7 +8,7 @@[m [mfunction Home() {[m
             <header className="App-header">[m
                 <img src={logo} className="App-logo" alt="logo" />[m
                 <p>[m
[31m-                    Edit <code>src/App.js</code> and save to reload.[m
[32m+[m[32m                    Track that Job[m
                 </p>[m
                 <a[m
                     className="App-link"[m
[1mdiff --git a/package-lock.json b/package-lock.json[m
[1mindex 0902009..cbb7a7e 100755[m
[1m--- a/package-lock.json[m
[1m+++ b/package-lock.json[m
[36m@@ -1034,8 +1034,7 @@[m
         },[m
         "ansi-regex": {[m
           "version": "2.1.1",[m
[31m-          "bundled": true,[m
[31m-          "optional": true[m
[32m+[m[32m          "bundled": true[m
         },[m
         "aproba": {[m
           "version": "1.2.0",[m
[36m@@ -1053,13 +1052,11 @@[m
         },[m
         "balanced-match": {[m
           "version": "1.0.0",[m
[31m-          "bundled": true,[m
[31m-          "optional": true[m
[32m+[m[32m          "bundled": true[m
         },[m
         "brace-expansion": {[m
           "version": "1.1.11",[m
           "bundled": true,[m
[31m-          "optional": true,[m
           "requires": {[m
             "balanced-match": "^1.0.0",[m
             "concat-map": "0.0.1"[m
[36m@@ -1072,18 +1069,15 @@[m
         },[m
         "code-point-at": {[m
           "version": "1.1.0",[m
[31m-          "bundled": true,[m
[31m-          "optional": true[m
[32m+[m[32m          "bundled": true[m
         },[m
         "concat-map": {[m
           "version": "0.0.1",[m
[31m-          "bundled": true,[m
[31m-          "optional": true[m
[32m+[m[32m          "bundled": true[m
         },[m
         "console-control-strings": {[m
           "version": "1.1.0",[m
[31m-          "bundled": true,[m
[31m-          "optional": true[m
[32m+[m[32m          "bundled": true[m
         },[m
         "core-util-is": {[m
           "version": "1.0.2",[m
[36m@@ -1186,8 +1180,7 @@[m
         },[m
         "inherits": {[m
           "version": "2.0.3",[m
[31m-          "bundled": true,[m
[31m-          "optional": true[m
[32m+[m[32m          "bundled": true[m
         },[m
         "ini": {[m
           "version": "1.3.5",[m
[36m@@ -1197,7 +1190,6 @@[m
         "is-fullwidth-code-point": {[m
           "version": "1.0.0",[m
           "bundled": true,[m
[31m-          "optional": true,[m
           "requires": {[m
             "number-is-nan": "^1.0.0"[m
           }[m
[36m@@ -1210,20 +1202,17 @@[m
         "minimatch": {[m
           "version": "3.0.4",[m
           "bundled": true,[m
[31m-          "optional": true,[m
           "requires": {[m
             "brace-expansion": "^1.1.7"[m
           }[m
         },[m
         "minimist": {[m
           "version": "0.0.8",[m
[31m-          "bundled": true,[m
[31m-          "optional": true[m
[32m+[m[32m          "bundled": true[m
         },[m
         "minipass": {[m
           "version": "2.3.5",[m
           "bundled": true,[m
[31m-          "optional": true,[m
           "requires": {[m
             "safe-buffer": "^5.1.2",[m
             "yallist": "^3.0.0"[m
[36m@@ -1240,7 +1229,6 @@[m
         "mkdirp": {[m
           "version": "0.5.1",[m
           "bundled": true,[m
[31m-          "optional": true,[m
           "requires": {[m
             "minimist": "0.0.8"[m
           }[m
[36m@@ -1313,8 +1301,7 @@[m
         },[m
         "number-is-nan": {[m
           "version": "1.0.1",[m
[31m-          "bundled": true,[m
[31m-          "optional": true[m
[32m+[m[32m          "bundled": true[m
         },[m
         "object-assign": {[m
           "version": "4.1.1",[m
[36m@@ -1324,7 +1311,6 @@[m
         "once": {[m
           "version": "1.4.0",[m
           "bundled": true,[m
[31m-          "optional": true,[m
           "requires": {[m
             "wrappy": "1"[m
           }[m
[36m@@ -1400,8 +1386,7 @@[m
         },[m
         "safe-buffer": {[m
           "version": "5.1.2",[m
[31m-          "bundled": true,[m
[31m-          "optional": true[m
[32m+[m[32m          "bundled": true[m
         },[m
         "safer-buffer": {[m
           "version": "2.1.2",[m
[36m@@ -1431,7 +1416,6 @@[m
         "string-width": {[m
           "version": "1.0.2",[m
           "bundled": true,[m
[31m-          "optional": true,[m
           "requires": {[m
             "code-point-at": "^1.0.0",[m
             "is-fullwidth-code-point": "^1.0.0",[m
[36m@@ -1449,7 +1433,6 @@[m
         "strip-ansi": {[m
           "version": "3.0.1",[m
           "bundled": true,[m
[31m-          "optional": true,[m
           "requires": {[m
             "ansi-regex": "^2.0.0"[m
           }[m
[36m@@ -1488,13 +1471,11 @@[m
         },[m
         "wrappy": {[m
           "version": "1.0.2",[m
[31m-          "bundled": true,[m
[31m-          "optional": true[m
[32m+[m[32m          "bundled": true[m
         },[m
         "yallist": {[m
           "version": "3.0.3",[m
[31m-          "bundled": true,[m
[31m-          "optional": true[m
[32m+[m[32m          "bundled": true[m
         }[m
       }[m
     },[m
