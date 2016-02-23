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
	btnAll: $('#btn_md_all'),
	copyStatus: $('.copy-status'),
	clipboard: $('.clip-btn')
},

// Private funcs
init, bindEvents, clipboard,  

f = { // API
	init: null
},

//................................
_app = { $jqo: null, fn: null };
//................................

// End of decls

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
	new Clipboard($j.clipboard.selector);
};

//================================
bindEvents = function(){
//================================
	// clipboard handler in clipboard.min.js

	$j.btnConvert.click(function(){
		var convertedText = marked($j.pt.val());
		$j.ph.val(convertedText)
		$j.renderedContent.html(convertedText);
		});
		$j.btnClear.click(function(){
		$j.pt.val('');
	});
	$j.btnHeadings.click(function(){
		var md = "# h1 Heading\n";
		md += "## h2 Heading\n";
		md += "### h3 Heading\n";
		md += "#### h4 Heading\n";
		md += "##### h5 Heading\n";
		md += "###### h6 Heading\n";
	$j.pt.val(md);
	});
	$j.btnList.click(function(){
		var md = "# List\n";
		md += "- Item 1\n";
		md += "- Item 2\n";
		md += "  - Item 2a\n";
		md += "  - Item 2b\n";
		md += "- Item 3\n";
		$j.pt.val(md);
	});
	$j.btnCode.click(function(){
		var md = "## Some Code\n\n";
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
		var md = 'README.md\n\n';
		md += '# online-markdown-converter\n\n';
		md += '08 December 2015 (Tuesday)\n\n';
		md += 'This app converts markdown pasted into a textbox into HTML.\n\n';
		md += '### Dependencies\n\n';
		md += '- [jQuery](http://jquery.com/download/)\n';
		md += '- [Foundation](http://foundation.zurb.com/sites/getting-started.html)\n';
		md += '- [marked-js](https://github.com/chjj/marked)\n';
		md += '- [clipboard.js](https://zenorocha.github.io/clipboard.js)\n';
		$j.pt.val(md);
		$j.btnConvert.trigger('click');
	});
	$j.clipboard.on('success', function(e) {
		console.log(e);
		$j.copyStatus.css('color', '#00880E');
		$j.copyStatus.html('Copied!');
		$j.copyStatus.fadeIn(400).delay(200).fadeOut(600)
	});
	$j.clipboard.on('error', function(e) {
		console.log(e);
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
