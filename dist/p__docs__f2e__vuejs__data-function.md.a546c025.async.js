(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[30],{ABoK:function(e,n,s){"use strict";s.r(n);var a=s("ZZRV"),t=s.n(a);n["default"]=function(){return t.a.createElement("section",{dangerouslySetInnerHTML:{__html:'<html><head></head><body><h2 id="data"><a class="anchor" href="#data"></a>Data()</h2>\n<p><em>to avoid closure share between components</em></p>\n<p><code>Data()</code> return <code>an new object</code> within the function, so every time it called, <code>a fresh object is returned</code>.<br />\nThis means each component instance is self-contained as it should be and will contain its own internal state.</p>\n<pre><code class="language-JavaScript"><span class="hljs-keyword">let</span> closureNumber = <span class="hljs-number">1</span>\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  data () {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">stateNumber</span>: <span class="hljs-number">1</span>\n    }\n  },\n  mounted () {\n    closureNumber += <span class="hljs-number">1</span>\n    <span class="hljs-keyword">this</span>.stateNumber += <span class="hljs-number">1</span>\n  }\n}\n</code></pre>\n<p><em>every time this component init:</em></p>\n<pre><code>// result\n// closureNumber: 2, 3, 4, 5 ..\n// stateNumber: 2, 2, 2, 2 ..\n</code></pre>\n</body></html>'},className:"markdown-body"})}}}]);