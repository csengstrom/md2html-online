REM Google closure compiler settings
REM Breaking long lines requires space, carot (^), newline, space, continue command

java -jar closure-compiler-v20170521.jar ^
 --compilation_level SIMPLE_OPTIMIZATIONS ^
 --js ../../../../libs/syntax_highlighter/js/shCore.js ^
 --js ../../../../libs/syntax_highlighter/js/shBrushJScript.js ^
 --js ../../../../libs/syntax_highlighter/js/shBrushCss.js ^
 --js ../../../../libs/syntax_highlighter/js/shBrushXml.js ^
 --js ../../../../libs/syntax_highlighter/js/shBrushBash.js ^
 --js ../../../../libs/syntax_highlighter/js/shBrushCpp.js ^
 --js ../../../../libs/syntax_highlighter/js/shBrushCSharp.js ^
 --js ../../../../libs/syntax_highlighter/js/shBrushDiff.js ^
 --js ../../../../libs/syntax_highlighter/js/shBrushJava.js ^
 --js ../../../../libs/syntax_highlighter/js/shBrushSass.js ^
 --js ../../../../libs/syntax_highlighter/js/shBrushPhp.js ^
 --js ../../../../libs/syntax_highlighter/js/shBrushPlain.js ^
 --js foundation/foundation.js  ^
 --js marked-lib/marked.js  ^
 --js clipboard.min.js ^
 --js file-drop/jQuery.FileDrop.all.js ^
 --js app.js ^
 --js_output_file app.cc.min.js ^
 --externs externs.js  ^
 -W=default

pause
 