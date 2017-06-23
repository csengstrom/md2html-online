// app.js

var $ΞΞmarkdownΔhtmlΞΞ$_app = (function ($){
//✹✹✹✹✹✹✹✹✹✹✹✹✹✹✹✹✹✹   
var
$j = { //jQuery (dom) objects ($jqo)
	pt: $('#plain_text'),
	ph: $('#plain_html'),
	btnConvert: $('#btn_convert'),
	btnClear: $('#btn_clear'),
	btnCopyToClipboard: $('#btn_copy_to_clipboard'),
	renderedContent: $('#rendered_content'),
	btnHeadings: $('#btn_headings'),
	btnList: $('#btn_ul'),
	btnCode: $('#btn_code'),
	btnReadme: $('#btn_readme'),
	btnFileTree: $('#btn_filetree'),
	btnAll: $('#btn_md_all'),
	copyStatus: $('.copy-status'),
	clipboard: $('.clip-btn'),
	header: $('.header'),
	downArrow: $('.down-arrow'),
	plainText: $('#plain_text')
},

// Private funcs
init, bindEvents, clipboard, clpbrd, initFileDrop, clean, 

f = { // API
	init: null,
	clean: null
},

//................................
_app = { $jqo: null, fn: null };
//................................

// End of decls - - - - - - - - - 

_app.$jqo = $j;
_app.fn = f;

//================================
init = function(){
//================================
	$j.copyStatus.css({
		'display': 'none',
		'font-weight': 'bold'
	});

	// init & binds, clipboard.min.js, v1.5.5
	clpbrd = new Clipboard($j.clipboard.selector);

	if($.support.fileDrop){
		initFileDrop();
	}else{
		alert('Your browser does not support file drag-n-drop :(');
	}

	$j.plainText.focus();
	//document.execCommand("Paste");
};

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - -
initFileDrop = function(){
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	var $count = $("#FILE_COUNT");

	//Add file drag-n-drop to the HTML element
	$('html').fileDrop({ // can drop file anywhere on the page
		decodeBase64: false,
		removeDataUriScheme: false,
		onFileRead: function(fileCollection){

			// if(console){
			// 	console.clear();
			// 	console.log("---File Collection---");
			// 	console.log(fileCollection);
			// }

			var newHtml='';
			var newText='';
			
			//Loop through each file that was dropped
			$.each(fileCollection, function(i){

				if(this.type.indexOf('image')>=0){
					newHtml += '<img src="' + this.data + '"/>';
					if(i !== fileCollection.length-1){
						newHtml += "<hr />";
					}
				}else{
					var noScheme = $.removeUriScheme(this.data);
					var base64Decoded = window.atob(noScheme);
					newText = base64Decoded;
				}
			});

			// Set the text about how many files were dropped. Make it plural when there is more than one!
			var countText = fileCollection.length + ' file' + ( fileCollection.length === 1 ? '' : 's' ) + ' dropped!';
			$count.text(countText);

			// Show the dropped text
			$j.pt.html(newText);
			// ... and convert it
			$j.btnConvert.trigger('click');
		}
	});
};

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - -
clean = function(){
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - -	
    var 
      $tnt = $('div.toolbar');
    $tnt.css('display', 'none');
    $('.page-container').css('visibility', 'visible');
};

//================================
bindEvents = function(){
//================================
	// clipboard handler in clipboard.min.js

	$j.downArrow.click(function(){
		$j.header.slideToggle();
	});

	$j.btnConvert.click(function(){
		var convertedText = marked($j.pt.val());
		$j.ph.val(convertedText)
		$j.renderedContent.html(convertedText);
		SyntaxHighlighter.highlight($j.renderedContent);
		setTimeout(clean, 200);
	});

	$j.btnClear.click(function(){
		$j.pt.val('');
		$j.plainText.focus();
	});

	$j.btnHeadings.click(function(){
		var md = "# h1 Heading\n\n";
		md += "## h2 Heading\n\n";
		md += "### h3 Heading\n\n";
		md += "#### h4 Heading\n\n";
		md += "##### h5 Heading\n\n";
		md += "###### h6 Heading\n\n";
	$j.pt.val(md);
});

	$j.btnList.click(function(){
		var md = "# List\n\n";
		md += "- Item 1\n";
		md += "- Item 2\n";
		md += "  - Item 2a\n";
		md += "  - Item 2b\n";
		md += "- Item 3\n";
		$j.pt.val(md);
	});

	$j.btnFileTree.click(function(){
		var md = '## Folder Structure\n\n';
		md += 'This app makes use of `filetree`.css to graphically display hierarchies. The filetree is specified in HTML.\n';
		md += '<div class="tree">\n';
		md += '<div class="node">ROOT</div>\n';
		md += '<div class="children">\n';
		md += '<div class="node">\n';
		md += '<div class="icon i-db i-darkred">\n';
		md += 'Database <span class="sm-txt"><i class="fa fa-info-circle"></i>  MySql v5.0</span>\n';
		md += '</div>\n';
		md += '</div>\n';
		md += '<div class="node">\n';
		md += '<div class="icon i-folder-open i-gold">\n';
		md += 'Folder 1\n';
		md += '</div>\n';
		md += '</div>\n';
		md += '<div class="children">\n';
		md += '<div class="node">\n';
		md += '<div class="icon i-file-o i-black">\n';
		md += 'file 1\n';
		md += '</div>\n';
		md += '</div>\n';
		md += '<div class="node">file 2</div>\n';
		md += '<div class="node">file 3</div>\n';
		md += '</div>\n';
		md += '<div class="node">\n';
		md += '<div class="icon i-folder-open i-dodgerblue">\n';
		md += 'Folder 2\n';
		md += '</div>\n';
		md += '</div>\n';
		md += '<div class="children">\n';
		md += '<div class="node">\n';
		md += '<div class="icon i-folder-closed i-gold">\n';
		md += 'Folder 2a\n';
		md += '</div>\n';
		md += '</div>\n';
		md += '<div class="node">\n';
		md += '<div class="icon i-folder-open i-limegreen">\n';
		md += 'Folder 2b\n';
		md += '</div>\n';
		md += '</div>\n';
		md += '<div class="children">\n';
		md += '<div class="node">\n';
		md += '<div class="icon i-folder-open i-gold">\n';
		md += 'Folder 2b1\n';
		md += '</div>\n';
		md += '</div>\n';
		md += '<div class="children">\n';
		md += '<div class="node">\n';
		md += '<div class="icon i-folder-open i-gold">\n';
		md += '2b1a\n';
		md += '</div>\n';
		md += '</div>\n';
		md += '<div class="children">\n';
		md += '<div class="node">\n';
		md += '<div class="icon i-file-code i-darkred">\n';
		md += 'code file\n';
		md += '</div>\n';
		md += '</div>\n';
		md += '<span class="under-node-txt"><i class="fa fa-arrow-circle-up"></i> COMMENT UNDER NODE</span>\n';
		md += '</div>\n';
		md += '<div class="node">\n';
		md += '<div class="icon i-files">\n';
		md += 'remaining files &hellip;\n';
		md += '</div>\n';
		md += '</div>\n';
		md += '</div>\n';
		md += '<div class="node">\n';
		md += '<div class="icon i-file-text i-slategray">\n';
		md += 'text file &hellip;\n';
		md += '</div>\n';
		md += '</div>\n';
		md += '</div>\n';
		md += '<div class="node">\n';
		md += '<div class="icon i-cog i-mediumseagreen">\n';
		md += 'Configuration\n';
		md += '</div>\n';
		md += '</div>\n';
		md += '<div class="node">file 3</div>\n';
		md += '</div>\n';
		md += '<div class="node">README.md</div>\n';
		md += '<div class="node">app.component.ts</div>\n';
		md += '<div class="node">app.module.ts</div>\n';
		md += '</div>\n';
		md += '</div>\n\n';
		md += '### Note\n\n';
		md += 'Filetree could use some documentation.  For now, the code *is* the documentation.\n';
		$j.pt.val(md);
	});

	$j.btnCode.click(function(){
		var md = "## Some Code\n\n";
		md += "> box your code with three grave symbols — <kbd>\\`</kbd> <kbd>\\`</kbd> <kbd>\\`</kbd>\n\n";
		// HTML
		md += "### HTML\n\n";
		md += "```html\n";
		md += "<!DOCTYPE html>\n";
		md += '<html lang="en">\n';
		md += "<head>\n";
		md += '	<meta charset="UTF-8">\n';
		md += "	<title>Document</title>\n";
		md += "</head>\n";
		md += "<body>\n";
		md += "</body>\n";
		md += "</html>\n";
		md += "```\n\n";
		// CSS
		md += "### CSS\n\n";
		md += "```css\n";
		md += "pre {\n";
		md += "  overflow: auto;\n";
		md += "}\n\n";
		md += "code,\n";
		md += "kbd,\n";
		md += "pre,\n";
		md += "samp{\n";
		md += "  font-family: monospace;\n";
		md += "  font-size: 1em;\n";
		md += "}\n";
		md += "```\n\n";
		// JS
		md += "### JavaScript\n\n";
		md += "```js\n";
		md += "//Loop through each file that was dropped\n";
		md += "$.each(fileCollection, function(i){\n";
		md += "	if(this.type.indexOf('image')>=0){\n";
		md += "		newHtml += '<img src=\"' + this.data + '\"/>';\n";
		md += "		if(i !== fileCollection.length-1){\n";
		md += "			newHtml += \"<hr />\";\n";
		md += "		}\n";
		md += "	}else{\n";
		md += "		var noScheme = $.removeUriScheme(this.data);\n";
		md += "		var base64Decoded = window.atob(noScheme);\n";
		md += "		newText = base64Decoded;\n";
		md += "	}\n";
		md += "});\n";
		md += "```\n\n";

		md += "[Syntax highlighter credit and thanks to Alex Gorbatchev](http://alexgorbatchev.com/SyntaxHighlighter/)\n\n";

		$j.pt.val(md);
	});

	$j.btnAll.click(function(){
		var md = '# Heading 1\n\n';
		md += 'Paragraph text.\n\n';
		md += '## Heading 2\n\n';
		md += 'https://safeweb.norton.com/safety\n\n';
		md += '## Heading 3\n\n';
		md += '> **Comment Box**\n> \n> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet recusandae repellendus, illo explicabo, saepe necessitatibus. Maiores dolore, officia necessitatibus placeat excepturi aliquid sit soluta modi itaque asperiores! Itaque, ex, deserunt\n\n';
		md += '- bullet 1\n';
		md += '- bullet 2\n';
		md += '  - bullet 2a\n';
		md += '  - bullet 2b\n';
		md += '- bullet 3\n\n\n';
		md += '| Year | Temperature (low) | Temperature (high) |  \n';
		md += '| ---- | ----------------- | -------------------|  \n';
		md += '| 1900 |               -10 |                 25 |  \n';
		md += '| 1910 |               -15 |                 30 |  \n';
		md += '| 1920 | &nbsp; | &nbsp; |\n\n';
		md += '---\n\n';
		md += "## Some Code\n\n";
		md += "> box your code with three grave symbols — <kbd>\\`</kbd> <kbd>\\`</kbd> <kbd>\\`</kbd>\n\n";
		md += "```html\n";
		md += "<!DOCTYPE html>\n";
		md += '<html lang="en">\n';
		md += "<head>\n";
		md += '	<meta charset="UTF-8">\n';
		md += "	<title>Document</title>\n";
		md += "</head>\n";
		md += "<body>\n";
		md += "</body>\n";
		md += "</html>\n";
		md += "```\n\n";
		$j.pt.val(md);
	});

	$j.btnReadme.click(function(){
		var md = 'README.md ';
		md += '# YAM2H\n\n';
		md += '### Yet Another Markdown To HTML Converter\n\n';
		md += '08 December 2015 (Tuesday)\n\n';
		md += 'YAM2H demonstrates the conversion of markdown to HTML via JavaScript in a web browser.\n\n';
		md += '![](img/app.jpg)\n\n';
		md += '### Markdown, HTML &amp; Results Displayed\n\n';
		md += '- Write markdown in your browser &mdash; or click buttons to generate example markdown for you\n';
		md += '- Click the `Convert` button\n';
		md += '- Another text box displays the generated HTML code\n';
		md += '- The browser then renders the HTML code, displaying the final result\n\n';
		md += '### Dependencies\n\n';
		md += '- [jQuery](http://jquery.com/download/)\n';
		md += '- [Foundation](http://foundation.zurb.com/sites/getting-started.html)\n';
		md += '- [marked-js](https://github.com/chjj/marked)\n';
		md += '- [clipboard.js](https://zenorocha.github.io/clipboard.js)\n\n';
		$j.pt.val(md);
		$j.btnConvert.trigger('click');
	});

	$j.clipboard.on('success', function(e) {
		//console.log(e);
		$j.copyStatus.css('color', '#00880E');
		$j.copyStatus.html('Copied!');
		$j.copyStatus.fadeIn(400).delay(200).fadeOut(600)
	});


	$j.clipboard.on('error', function(e) {
		//console.log(e);
		$j.copyStatus.css('color', '#BE1705');
		$j.copyStatus.text('Error: Use Ctrl+C');
		$j.copyStatus.fadeIn( "slow" );
		$j.copyStatus.fadeOut( "slow" );
	});
};

// Public functions
//❚❚❚❚❚❚❚❚❚❚❚❚❚❚❚❚❚❚❚❚❚❚❚❚❚❚
_app.init = function (){
  bindEvents();
  init();
};

//❚❚❚❚❚❚❚❚❚❚❚❚❚❚❚❚❚❚❚❚❚❚❚❚❚❚
return {APP : _app}; 
//✹✹✹✹✹✹✹✹✹✹✹✹✹✹✹✹✹✹
}(jQuery)); // End closure

$(document).ready(function() {
  $ΞΞmarkdownΔhtmlΞΞ$_app.APP.init();
});


