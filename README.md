# YAM2H

**Yet Another Markdown To HTML Converter**

> See how you can enable your site with markdown capability

YAM2H demonstrates the conversion of markdown to HTML via JavaScript in a web browser.

<i class="fa fa-eye fa-lg"></i> &nbsp; [Demo](http://codebehold.com/code/poc/md2html-online/) &nbsp; | &nbsp; <i class="fa fa-wordpress fa-1"></i> &nbsp; [Blog](http://codebehold.com/2016/02/19/markdown-to-html/)

![](http://codebehold.com/code/poc/md2html-online//img/app.jpg)

### Markdown, HTML &amp; Results Displayed

- Write markdown in your browser &mdash; or click buttons to generate example markdown for you
- Click the "Convert" button
- Another text box displays the generated HTML code
- The browser then renders the HTML code, displaying the final result

### Dependencies

- [jQuery](http://jquery.com/download/)
- [foundation](http://foundation.zurb.com/sites/getting-started.html)
- [marked-js](https://github.com/chjj/marked)
- [clipboard.js](https://zenorocha.github.io/clipboard.js)

### Update: June 22, 2017

**Now Using the** [**Google Closure Compiler**](https://developers.google.com/closure/compiler/): The `/js` folder contains a batch file which runs the compiler and produces `app.cc.min.js`.  For production deployment to a web server this file is manually renamed to `app.min.js`.

See also: [Carl's personal blog article](http://l.carlengstrom.com/2016/08/17/the-google-closure-compiler/) on the subject.

Listing of `./js/cc.bat

```shell
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
 --js foundation/foundation.js  ^
 --js marked-lib/marked.js  ^
 --js clipboard.min.js ^
 --js file-drop/jQuery.FileDrop.all.js ^
 --js app.js ^
 --js_output_file app.cc.min.js ^
 --externs externs.js  ^
 -W=default

pause
 
```

