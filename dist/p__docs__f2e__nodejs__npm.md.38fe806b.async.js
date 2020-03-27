(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[27],{wNEx:function(e,s,n){"use strict";n.r(s);var p=n("ZZRV"),o=n.n(p);s["default"]=function(){return o.a.createElement("section",{dangerouslySetInnerHTML:{__html:'<html><head></head><body><h2 id="npm"><a class="anchor" href="#npm"></a>npm</h2>\n<h3 id="run-script"><a class="anchor" href="#run-script"></a>run-script</h3>\n<p><code>npm run-script &lt;command&gt; [--silent] [-- &lt;args&gt;...]</code></p>\n<h4>custom arguments</h4>\n<p><em>special option <code>--</code> is used by <code>getopt</code>, npm will pass all arguments after <code>--</code> directly to script.<br />\nthe arguments will only be passed to the script specified after <code>npm run</code> and not to any <code>pre</code> or <code>post</code> script.</em></p>\n<h4>.bin</h4>\n<p><em>the shell&#x2019;s pre-existing <code>PATH</code>, <code>npm run</code> add <code>node_modules/.bin</code> to the <code>PATH</code> provided to scripts. Any binaries provided by locally-installed dependencies can be used without <code>node_modules/.bin</code> prefix.</em></p>\n<h4>&amp; &amp;&amp;</h4>\n<p><code>&quot;dev&quot;: &quot;node test.js &amp; webpack&quot;</code></p>\n<p><em>run async</em></p>\n<p><code>&quot;dev&quot;: &quot;node test.js &amp;&amp; webpack&quot;</code></p>\n<p><em>run sync</em></p>\n<h4>pre &amp; post</h4>\n<pre><code class="language-json"><span class="hljs-string">&quot;predev&quot;</span>: <span class="hljs-string">&quot;node 1.js&quot;</span>\n<span class="hljs-string">&quot;dev&quot;</span>: <span class="hljs-string">&quot;node 2.js&quot;</span>\n<span class="hljs-string">&quot;postdev&quot;</span>: <span class="hljs-string">&quot;node 3.js&quot;</span>\n</code></pre>\n<p><em>equal to <code>npm run predev &amp;&amp; npm run dev &amp;&amp; npm run postdev</code></em></p>\n<h4>lifecycle event</h4>\n<p><code>process.env.npm_lifecycle_event</code></p>\n<pre><code class="language-JavaScript"><span class="hljs-keyword">switch</span> (process.env.npm_lifecycle_event) {\n    <span class="hljs-keyword">case</span> <span class="hljs-string">&apos;predev&apos;</span>:\n    <span class="hljs-keyword">case</span> <span class="hljs-string">&apos;dev&apos;</span>:\n    <span class="hljs-keyword">case</span> <span class="hljs-string">&apos;postdev&apos;</span>\n}\n</code></pre>\n<h4>npm package</h4>\n<p><code>process.env.npm_package_name</code></p>\n</body></html>'},className:"markdown-body"})}}}]);