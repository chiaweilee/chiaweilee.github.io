(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{SctK:function(s,a,n){"use strict";n.r(a);var c=n("q1tI"),e=n.n(c);a["default"]=function(){return e.a.createElement("section",{dangerouslySetInnerHTML:{__html:'<html><head></head><body><h2 id="microtasks--macrotasks"><a class="anchor" href="#microtasks--macrotasks"></a>Microtasks &amp; Macrotasks</h2>\n<pre><code class="language-JavaScript">setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-number">1</span>)\n})\n\n<span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function"><span class="hljs-params">resolve</span> =&gt;</span> {\n    resolve()\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-number">2</span>)\n})\n    .then(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {\n        <span class="hljs-built_in">console</span>.log(<span class="hljs-number">3</span>)\n    })\n\n<span class="hljs-built_in">console</span>.log(<span class="hljs-number">4</span>)\n</code></pre>\n<pre><code class="language-console">// result: 2 4 3 1\n</code></pre>\n<h3 id="macrotask"><a class="anchor" href="#macrotask"></a>Macrotask</h3>\n<p><code>setTimeout</code>, <code>setInterval</code>, <code>process.nextTick</code></p>\n<h3 id="microtask"><a class="anchor" href="#microtask"></a>Microtask</h3>\n<p><code>process.nextTick</code>, <code>Promise</code></p>\n</body></html>'},className:"markdown-body"})}}}]);