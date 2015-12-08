# *.map Files

source: [StackOverflow](http://stackoverflow.com/questions/21504611/what-are-the-map-files-used-for-in-bootstrap-3-1) -- [Steve Jansen](http://stackoverflow.com/users/1995977/steve-jansen) -- Feb 2014

> DevTools lets you live-edit your preprocessor source files in the Sources panel, and view the results without having to leave DevTools or refresh the page.

Many developers generate CSS style sheets using a CSS preprocessor, such as Sass, Less, or Stylus. Because the CSS files are generated, editing the CSS files directly is not as helpful.

For preprocessors that support CSS source maps, DevTools lets you live-edit your preprocessor source files in the Sources panel, and view the results without having to leave DevTools or refresh the page. When you inspect an element whose styles are provided by a generated CSS file, the Elements panel displays a link to the original source file, not the generated .css file.

- See [CHROME: Working with CSS Preprocessors](https://developer.chrome.com/devtools/docs/css-preprocessors)