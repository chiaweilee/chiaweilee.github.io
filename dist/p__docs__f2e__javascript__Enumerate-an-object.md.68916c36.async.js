(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{FFo4:function(e,s,a){"use strict";a.r(s);var n=a("ZZRV"),o=a.n(n);s["default"]=function(){return o.a.createElement("section",{dangerouslySetInnerHTML:{__html:'<html><head></head><body><h2 id="enmerate-an-object"><a class="anchor" href="#enmerate-an-object"></a>Enmerate an object</h2>\n<h3 id="forin"><a class="anchor" href="#forin"></a>for&#x2026;in</h3>\n<p><code>for...in</code> iterate over <code>all the enumerable properties</code> of an object.<br />\nIt traverses all enumerable properties of an object and <code>its prototype chain</code>.</p>\n<h3 id="objectkeys"><a class="anchor" href="#objectkeys"></a>Object.keys()</h3>\n<p>returns an <code>array</code> with all the own(<code>not in the prototype chain</code>) enumerable properties&#x2019; names(&#x2018;keys&#x2019;) of an object.</p>\n<h3 id="objectgetownpropertyname"><a class="anchor" href="#objectgetownpropertyname"></a>Object.getOwnPropertyName()</h3>\n<p>returns an <code>array</code> containing all own properties&#x2019; names(<code>enumerable or not</code>) of an object.</p>\n<pre><code class="language-JavaScript"><span class="hljs-built_in">Object</span>.getOwnPropertyNames([<span class="hljs-string">&apos;a&apos;</span>, <span class="hljs-string">&apos;b&apos;</span>, <span class="hljs-number">3</span>])\n<span class="hljs-built_in">Object</span>.getOwnPropertyNames({ <span class="hljs-attr">a</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">b</span>: { <span class="hljs-attr">c</span>: <span class="hljs-number">3</span> } })\n</code></pre>\n<pre><code>// result: [&apos;0&apos;, &apos;1&apos;, &apos;2&apos;, &apos;length&apos;]\n// result: [&apos;a&apos;, &apos;b&apos;]\n</code></pre>\n<h3 id="objectassign"><a class="anchor" href="#objectassign"></a>Object.assign()</h3>\n<p>used to copy the values of all <code>enumerable own properties</code> from <code>one or more</code> source objects to a target object.<br />\nIt will return return the target object.</p>\n<pre><code class="language-JavaScript"><span class="hljs-built_in">Object</span>.assign({}, { <span class="hljs-attr">a</span>: <span class="hljs-number">1</span> }, { <span class="hljs-attr">b</span>: <span class="hljs-number">2</span> })\n</code></pre>\n<pre><code>// result: { a: 1, b: 2 }\n</code></pre>\n<h4>Warning for Deep Clone</h4>\n<p><code>Object.assign()</code> copies property values.<br />\nIf the source value is a reference to an object, it only copies that reference value.</p>\n<pre><code class="language-JavaScript"><span class="hljs-keyword">const</span> A = { <span class="hljs-attr">a</span>: <span class="hljs-number">0</span>, <span class="hljs-attr">b</span>: { <span class="hljs-attr">c</span>: <span class="hljs-number">0</span> }}\n<span class="hljs-keyword">const</span> B = <span class="hljs-built_in">Object</span>.assign({}, A)\nA.a = <span class="hljs-number">1</span>\nB.a = <span class="hljs-number">2</span>\nA.b.c = <span class="hljs-number">3</span>\n<span class="hljs-built_in">console</span>.log(A)\n<span class="hljs-built_in">console</span>.log(B)\n</code></pre>\n<pre><code>// result: { a: 1, b: { c: 3} }\n// result: { a: 2, b: { c: 3} }\n</code></pre>\n<h3 id="objectdefineproperty"><a class="anchor" href="#objectdefineproperty"></a>Object.defineProperty()</h3>\n<p>defines new or modifies existing property(s) directly on  an object, returning the object.</p>\n<h3 id="descriptors"><a class="anchor" href="#descriptors"></a>Descriptors</h3>\n<h4>configurable</h4>\n<p><code>true</code> if and only if the type of this property <code>descriptor may be changed and may be deleted</code> from the corresponding object.<br />\nDefaults to <code>false</code></p>\n<h4>enumerable</h4>\n<p><code>true</code> if and only if this property shows up during enumeration.<br />\nDefaults to <code>false</code></p>\n<h4>get</h4>\n<p>getter from the property, or <code>undefined</code> if no getter.<br />\nWhen the property is <code>accessed</code>, this function is called <code>without arguments</code> and with <code>this</code> set to the object through which the property is accessed.<br />\nThe <code>return value</code> will be used as the value of the property.<br />\nDefaults to <code>undefined</code></p>\n<h4>set</h4>\n<p>setter for the property, or <code>undefined</code> if no setter.<br />\nWhen the property is <code>assigned to</code>, this function is called with <code>one argument</code>(the value being assigned)<br />\nand with <code>this</code> set to the object through which the property is assigned.</p>\n<pre><code class="language-JavaScript"><span class="hljs-keyword">var</span> value\n<span class="hljs-built_in">Object</span>.definedProperty(object, <span class="hljs-string">&apos;key&apos;</span>, {\n    <span class="hljs-attr">enumerable</span>: <span class="hljs-literal">true</span>,\n    <span class="hljs-attr">configurable</span>: <span class="hljs-literal">true</span>,\n    <span class="hljs-attr">get</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{\n        <span class="hljs-keyword">return</span> value\n    },\n    <span class="hljs-attr">set</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">to</span>) </span>{\n        value = to\n    }\n})\n</code></pre>\n</body></html>'},className:"markdown-body"})}}}]);