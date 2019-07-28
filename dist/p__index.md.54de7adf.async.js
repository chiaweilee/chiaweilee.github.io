(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{eNq8:function(t,n,e){"use strict";e.r(n);var a=e("uqIC"),o=e.n(a);n["default"]=function(){return o.a.createElement("section",{dangerouslySetInnerHTML:{__html:'<html><head></head><body><h1 id="markdown-cheatsheet"><a class="anchor" href="#markdown-cheatsheet"></a>Markdown Cheatsheet</h1>\n<hr />\n<h1 id="heading-1"><a class="anchor" href="#heading-1"></a>Heading 1</h1>\n<pre><code>Markup :  # Heading 1 #\n\n-OR-\n\nMarkup :  ============= (below H1 text)\n</code></pre>\n<h2 id="heading-2"><a class="anchor" href="#heading-2"></a>Heading 2</h2>\n<pre><code>Markup :  ## Heading 2 ##\n\n-OR-\n\nMarkup: --------------- (below H2 text)\n</code></pre>\n<h3 id="heading-3"><a class="anchor" href="#heading-3"></a>Heading 3</h3>\n<pre><code>Markup :  ### Heading 3 ###\n</code></pre>\n<h4>Heading 4</h4>\n<pre><code>Markup :  #### Heading 4 ####\n</code></pre>\n<p>Common text</p>\n<pre><code>Markup :  Common text\n</code></pre>\n<p><em>Emphasized text</em></p>\n<pre><code>Markup :  _Emphasized text_ or *Emphasized text*\n</code></pre>\n<p><s>Strikethrough text</s></p>\n<pre><code>Markup :  ~~Strikethrough text~~\n</code></pre>\n<p><strong>Strong text</strong></p>\n<pre><code>Markup :  __Strong text__ or **Strong text**\n</code></pre>\n<p><em><strong>Strong emphasized text</strong></em></p>\n<pre><code>Markup :  ___Strong emphasized text___ or ***Strong emphasized text***\n</code></pre>\n<p><a href="http://www.google.fr/" title="Named link title">Named Link</a> and <a href="http://www.google.fr/">http://www.google.fr/</a> or <a href="http://example.com/">http://example.com/</a></p>\n<pre><code>Markup :  [Named Link](http://www.google.fr/ &quot;Named link title&quot;) and http://www.google.fr/ or &lt;http://example.com/&gt;\n</code></pre>\n<p><a href="#heading-1" title="Goto heading-1">heading-1</a></p>\n<pre><code>Markup: [heading-1](#heading-1 &quot;Goto heading-1&quot;)\n</code></pre>\n<p>Table, like this one :</p>\n<table>\n<thead>\n<tr>\n<th>First Header</th>\n<th>Second Header</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Content Cell</td>\n<td>Content Cell</td>\n</tr>\n<tr>\n<td>Content Cell</td>\n<td>Content Cell</td>\n</tr>\n</tbody>\n</table>\n<pre><code>First Header  | Second Header\n------------- | -------------\nContent Cell  | Content Cell\nContent Cell  | Content Cell\n</code></pre>\n<p><code>code()</code></p>\n<pre><code>Markup :  `code()`\n</code></pre>\n<pre><code class="language-javascript">    <span class="hljs-keyword">var</span> specificLanguage_code = \n    {\n        <span class="hljs-string">&quot;data&quot;</span>: {\n            <span class="hljs-string">&quot;lookedUpPlatform&quot;</span>: <span class="hljs-number">1</span>,\n            <span class="hljs-string">&quot;query&quot;</span>: <span class="hljs-string">&quot;Kasabian+Test+Transmission&quot;</span>,\n            <span class="hljs-string">&quot;lookedUpItem&quot;</span>: {\n                <span class="hljs-string">&quot;name&quot;</span>: <span class="hljs-string">&quot;Test Transmission&quot;</span>,\n                <span class="hljs-string">&quot;artist&quot;</span>: <span class="hljs-string">&quot;Kasabian&quot;</span>,\n                <span class="hljs-string">&quot;album&quot;</span>: <span class="hljs-string">&quot;Kasabian&quot;</span>,\n                <span class="hljs-string">&quot;picture&quot;</span>: <span class="hljs-literal">null</span>,\n                <span class="hljs-string">&quot;link&quot;</span>: <span class="hljs-string">&quot;http://open.spotify.com/track/5jhJur5n4fasblLSCOcrTp&quot;</span>\n            }\n        }\n    }\n</code></pre>\n<pre><code>Markup : ```javascript\n         ```\n</code></pre>\n<ul>\n<li>Bullet list\n<ul>\n<li>Nested bullet\n<ul>\n<li>Sub-nested bullet etc</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>Bullet list item 2</li>\n</ul>\n<pre><code> Markup : * Bullet list\n              * Nested bullet\n                  * Sub-nested bullet etc\n          * Bullet list item 2\n</code></pre>\n<ol>\n<li>A numbered list\n<ol>\n<li>A nested numbered list</li>\n<li>Which is numbered</li>\n</ol>\n</li>\n<li>Which is numbered</li>\n</ol>\n<pre><code> Markup : 1. A numbered list\n              1. A nested numbered list\n              2. Which is numbered\n          2. Which is numbered\n</code></pre>\n<ul>\n<li>[ ] An uncompleted task</li>\n<li>[x] A completed task</li>\n</ul>\n<pre><code> Markup : - [ ] An uncompleted task\n          - [x] A completed task\n</code></pre>\n<blockquote>\n<p>Blockquote</p>\n<blockquote>\n<p>Nested blockquote</p>\n</blockquote>\n</blockquote>\n<pre><code>Markup :  &gt; Blockquote\n          &gt;&gt; Nested Blockquote\n</code></pre>\n<p><em>Horizontal line :</em></p>\n<hr />\n<pre><code>Markup :  - - - -\n</code></pre>\n<p><em>Image with alt :</em></p>\n<p><img src="http://www.brightlightpictures.com/assets/images/portfolio/thethaw_header.jpg" alt="picture alt" title="Title is optional" /></p>\n<pre><code>Markup : ![picture alt](http://www.brightlightpictures.com/assets/images/portfolio/thethaw_header.jpg &quot;Title is optional&quot;)\n</code></pre>\n<p>Foldable text:</p>\n<details>\n  <summary>Title 1</summary>\n  <p>Content 1 Content 1 Content 1 Content 1 Content 1</p>\n</details>\n<details>\n  <summary>Title 2</summary>\n  <p>Content 2 Content 2 Content 2 Content 2 Content 2</p>\n</details>\n<pre><code>Markup : &lt;details&gt;\n           &lt;summary&gt;Title 1&lt;/summary&gt;\n           &lt;p&gt;Content 1 Content 1 Content 1 Content 1 Content 1&lt;/p&gt;\n         &lt;/details&gt;\n</code></pre>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>HTML<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span> Some HTML code here <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n</code></pre>\n<p>Hotkey:</p>\n<p><kbd>&#x2318;F</kbd></p>\n<p><kbd>&#x21E7;&#x2318;F</kbd></p>\n<pre><code>Markup : &lt;kbd&gt;&#x2318;F&lt;/kbd&gt;\n</code></pre>\n<p>Hotkey list:</p>\n<table>\n<thead>\n<tr>\n<th>Key</th>\n<th>Symbol</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Option</td>\n<td>&#x2325;</td>\n</tr>\n<tr>\n<td>Control</td>\n<td>&#x2303;</td>\n</tr>\n<tr>\n<td>Command</td>\n<td>&#x2318;</td>\n</tr>\n<tr>\n<td>Shift</td>\n<td>&#x21E7;</td>\n</tr>\n<tr>\n<td>Caps Lock</td>\n<td>&#x21EA;</td>\n</tr>\n<tr>\n<td>Tab</td>\n<td>&#x21E5;</td>\n</tr>\n<tr>\n<td>Esc</td>\n<td>&#x238B;</td>\n</tr>\n<tr>\n<td>Power</td>\n<td>&#x233D;</td>\n</tr>\n<tr>\n<td>Return</td>\n<td>&#x21A9;</td>\n</tr>\n<tr>\n<td>Delete</td>\n<td>&#x232B;</td>\n</tr>\n<tr>\n<td>Up</td>\n<td>&#x2191;</td>\n</tr>\n<tr>\n<td>Down</td>\n<td>&#x2193;</td>\n</tr>\n<tr>\n<td>Left</td>\n<td>&#x2190;</td>\n</tr>\n<tr>\n<td>Right</td>\n<td>&#x2192;</td>\n</tr>\n</tbody>\n</table>\n<p>Emoji:</p>\n<p>:exclamation: Use emoji icons to enhance text. :+1:  Look up emoji codes at <a href="http://emoji-cheat-sheet.com/">emoji-cheat-sheet.com</a></p>\n<pre><code>Markup : Code appears between colons :EMOJICODE:\n</code></pre>\n</body></html>'},className:"markdown-body"})}}}]);