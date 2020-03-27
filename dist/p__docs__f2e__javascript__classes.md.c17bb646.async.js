(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[21],{tMUq:function(s,a,n){"use strict";n.r(a);var e=n("ZZRV"),c=n.n(e);a["default"]=function(){return c.a.createElement("section",{dangerouslySetInnerHTML:{__html:'<html><head></head><body><h2 id="classes"><a class="anchor" href="#classes"></a>classes</h2>\n<p>Classes are in fact &#x201C;special functions&#x201D;, and just as you can define <code>function expressions</code> and <code>function declarations</code>, the class syntax has two components:<br />\n<code>class expressions</code> and <code>class declarations</code></p>\n<h3 id="class-declarations"><a class="anchor" href="#class-declarations"></a>Class declarations</h3>\n<pre><code class="language-JavaScript"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Test</span> </span>{\n    <span class="hljs-keyword">constructor</span> () {}\n}\n</code></pre>\n<h4>Hoisting</h4>\n<p><code>function declarations</code> are <code>hoisting</code> and <code>class declarations</code> are not</p>\n<pre><code class="language-JavaScript"><span class="hljs-keyword">new</span> Test() <span class="hljs-comment">// ReferenceError</span>\n<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Test</span> </span>{}\n</code></pre>\n<h3 id="class-expressions"><a class="anchor" href="#class-expressions"></a>Class expressions</h3>\n<pre><code class="language-JavaScript"><span class="hljs-keyword">const</span> Test = <span class="hljs-class"><span class="hljs-keyword">class</span> </span>{}\n<span class="hljs-keyword">const</span> Test = <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Test2</span> </span>{}\n</code></pre>\n<h3 id="prototype-methods"><a class="anchor" href="#prototype-methods"></a>Prototype methods</h3>\n<pre><code class="language-JavaScript">Class Test {\n    <span class="hljs-keyword">constructor</span> (h, w) {\n        <span class="hljs-keyword">this</span>.h = h\n        <span class="hljs-keyword">this</span>.w = w\n    }\n    <span class="hljs-comment">// Getter</span>\n    <span class="hljs-keyword">get</span> area () {\n        <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.clacArea()\n    }\n    <span class="hljs-comment">// Method</span>\n    calcArea () {\n        <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.h * <span class="hljs-keyword">this</span>.w\n    }\n}\n</code></pre>\n<h3 id="static-methods"><a class="anchor" href="#static-methods"></a>Static methods</h3>\n</body></html>'},className:"markdown-body"})}}}]);