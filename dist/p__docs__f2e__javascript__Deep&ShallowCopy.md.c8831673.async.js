(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{jRjR:function(s,n,a){"use strict";a.r(n);var e=a("q1tI"),c=a.n(e);n["default"]=function(){return c.a.createElement("section",{dangerouslySetInnerHTML:{__html:'<html><head></head><body><h2 id="deep--shallow-copy"><a class="anchor" href="#deep--shallow-copy"></a>Deep &amp; Shallow Copy</h2>\n<h3 id="shallow-copy"><a class="anchor" href="#shallow-copy"></a>Shallow Copy</h3>\n<p>Shallow copy is a <code>bit-wise</code> copy of an object.<br />\nIf any of the fields of the object are references to other objects, just <code>the reference address are copied</code>.<br />\ni.e, <code>only the memory address is copied</code>.</p>\n<pre><code class="language-JavaScript"><span class="hljs-keyword">const</span> A = { <span class="hljs-attr">c</span>: <span class="hljs-number">1</span> }\n<span class="hljs-keyword">const</span> B = A <span class="hljs-comment">// shallow copy</span>\nB.c = <span class="hljs-number">2</span>\n<span class="hljs-built_in">console</span>.log(A.c)\n</code></pre>\n<pre><code>// result: 2\n</code></pre>\n<h3 id="deep-copy"><a class="anchor" href="#deep-copy"></a>Deep Copy</h3>\n<pre><code class="language-JavaScript"><span class="hljs-keyword">const</span> B = <span class="hljs-built_in">JSON</span>.parse(<span class="hljs-built_in">JSON</span>.stringify(A))\n</code></pre>\n<pre><code class="language-JavaScript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">deepClone</span> (<span class="hljs-params">object</span>) </span>{\n    <span class="hljs-keyword">const</span> clonedObject = object.constructor()\n    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> key <span class="hljs-keyword">in</span> object) {\n        clonedObject[key] = deepClone(object[key])\n    }\n    <span class="hljs-keyword">return</span> clonedObject\n}\n\n<span class="hljs-keyword">const</span> A = { <span class="hljs-attr">c</span>: <span class="hljs-number">1</span> }\n<span class="hljs-keyword">const</span> B = deepClone(A) <span class="hljs-comment">// deep copy</span>\nB.c = <span class="hljs-number">2</span>\n<span class="hljs-built_in">console</span>.log(B.c)\n<span class="hljs-built_in">console</span>.log(A.c)\n</code></pre>\n<pre><code>// result: 2 1\n</code></pre>\n</body></html>'},className:"markdown-body"})}}}]);