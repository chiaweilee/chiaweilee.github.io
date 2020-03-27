(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{k5DC:function(s,n,a){"use strict";a.r(n);var l=a("ZZRV"),e=a.n(l);n["default"]=function(){return e.a.createElement("section",{dangerouslySetInnerHTML:{__html:'<html><head></head><body><h2 id="promise"><a class="anchor" href="#promise"></a>Promise</h2>\n<h3 id="states"><a class="anchor" href="#states"></a>states</h3>\n<p>A <code>Promise</code> is in one of these states:</p>\n<ul>\n<li><code>pending</code>: initial state, neither fulfilled and rejected.</li>\n<li><code>fulfilled</code>: completed successfully</li>\n<li><code>rejected</code>: operation failed</li>\n</ul>\n<h3 id="then-and-catch-return-promises"><a class="anchor" href="#then-and-catch-return-promises"></a>then and catch return promises</h3>\n<p><code>.then()</code> and <code>.catch()</code> return <code>promises</code>, they can be chained.</p>\n<pre><code class="language-JavaScript"><span class="hljs-keyword">const</span> promise = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">resolve</span>) </span>{\n    resolve(<span class="hljs-number">100</span>)\n})\n\npromise.then(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">value</span>) </span>{\n    <span class="hljs-keyword">return</span> value * <span class="hljs-number">2</span>\n})\n\npromise.then(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">value</span>) </span>{\n    <span class="hljs-keyword">return</span> value * <span class="hljs-number">2</span>\n})\n\npromise.then(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">value</span>) </span>{\n    <span class="hljs-built_in">console</span>.log(value)\n})\n</code></pre>\n<pre><code>// result: 100\n</code></pre>\n<h3 id="promiseall"><a class="anchor" href="#promiseall"></a>Promise.all()</h3>\n<p>return a promise that either <code>fulfills</code> when:</p>\n<ul>\n<li><code>all</code> promises <code>fulfilled</code></li>\n<li>or <code>one</code> of promises <code>rejects</code></li>\n</ul>\n<pre><code class="language-JavaScript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setTime</span> (<span class="hljs-params">time</span>) </span>{\n    <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function"><span class="hljs-params">resolve</span> =&gt;</span> {\n        setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {\n            resolve(time)\n        }, time)\n    })\n}\n\n<span class="hljs-built_in">Promise</span>.all([setTime(<span class="hljs-number">1</span>), setTime(<span class="hljs-number">100</span>), setTime(<span class="hljs-number">200</span>)])\n    .then(<span class="hljs-function"><span class="hljs-params">value</span> =&gt;</span> {\n        <span class="hljs-built_in">console</span>.log(value)\n    })\n</code></pre>\n<pre><code>// result: [1, 100, 200]\n</code></pre>\n<pre><code class="language-JavaScript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">fail</span> (<span class="hljs-params">time</span>) </span>{\n    <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve, reject</span>) =&gt;</span> {\n        setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {\n            reject(time)\n        }, time)\n    })\n}\n\n<span class="hljs-built_in">Promise</span>.all([setTime(<span class="hljs-number">1</span>), fail(<span class="hljs-number">100</span>), setTime(<span class="hljs-number">200</span>)])\n    .then(<span class="hljs-function"><span class="hljs-params">value</span> =&gt;</span> {\n        <span class="hljs-built_in">console</span>.log(value)\n    })\n    .catch(<span class="hljs-function">(<span class="hljs-params">err</span>) =&gt;</span> {\n        <span class="hljs-built_in">console</span>.error(err)\n    })\n</code></pre>\n<pre><code>// result: Error(100)\n</code></pre>\n<h3 id="promiserace"><a class="anchor" href="#promiserace"></a>Promise.race()</h3>\n<p>return a promise that either <code>fulfills</code> when:</p>\n<ul>\n<li>one of promise <code>fulfilled</code> or <code>rejects</code></li>\n</ul>\n<pre><code class="language-JavaScript"><span class="hljs-keyword">const</span> rabit = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function"><span class="hljs-params">resolve</span> =&gt;</span> {\n    setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {\n        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&apos;rabit race!&apos;</span>)\n        resolve(<span class="hljs-string">&apos;rabit win!&apos;</span>)\n    }, <span class="hljs-number">1000</span>)\n})\n\n<span class="hljs-keyword">const</span> turtle = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function"><span class="hljs-params">resolve</span> =&gt;</span> {\n    setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {\n        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&apos;turtle race!&apos;</span>)\n        resolve(<span class="hljs-string">&apos;turtle win!&apos;</span>)\n    }, <span class="hljs-number">10</span>)\n})\n\n<span class="hljs-built_in">Promise</span>.race([rabit, turtle])\n    .then(<span class="hljs-function"><span class="hljs-params">result</span> =&gt;</span> {\n        <span class="hljs-built_in">console</span>.log(result)\n    })\n</code></pre>\n<pre><code>// turtle race!\n// turtle win!\n// rabit race!\n</code></pre>\n<h3 id="promiseresolve"><a class="anchor" href="#promiseresolve"></a>Promise.resolve()</h3>\n<pre><code class="language-JavaScript"><span class="hljs-keyword">const</span> task1 = <span class="hljs-function"><span class="hljs-params">value</span> =&gt;</span> value + <span class="hljs-number">1</span>\n<span class="hljs-keyword">const</span> task2 = <span class="hljs-function"><span class="hljs-params">value</span> =&gt;</span> value + <span class="hljs-number">2</span>\n<span class="hljs-keyword">const</span> task3 = <span class="hljs-function"><span class="hljs-params">value</span> =&gt;</span> {\n    <span class="hljs-built_in">console</span>.log(value + <span class="hljs-number">3</span>)\n}\n\n<span class="hljs-built_in">Promise</span>.resolve(<span class="hljs-number">1</span>).then(task1).then(task2).then(task3)\n</code></pre>\n<pre><code>// result: 7\n</code></pre>\n</body></html>'},className:"markdown-body"})}}}]);