(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{QL8Z:function(e,a,n){"use strict";n.r(a);var c=n("q1tI"),o=n.n(c);a["default"]=function(){return o.a.createElement("section",{dangerouslySetInnerHTML:{__html:'<html><head></head><body><h2 id="headers-and-caching"><a class="anchor" href="#headers-and-caching"></a>Headers and Caching</h2>\n<h3 id="expires"><a class="anchor" href="#expires"></a>Expires</h3>\n<p><code>HTTP/1.0</code></p>\n<p><em>Invalid dates, like 0 mean already expired</em></p>\n<pre><code>Expires: Wed, 21 Oct 2015 07:28:00 GMT\n</code></pre>\n<h3 id="cache-control"><a class="anchor" href="#cache-control"></a>Cache-Control</h3>\n<p><code>HTTP/1.1</code></p>\n<h4>max-age=&lt;<code>seconds</code>&gt;</h4>\n<h3 id="etag--if-none-match"><a class="anchor" href="#etag--if-none-match"></a>Etag &amp; If-none-match</h3>\n<p>Server compares <code>ETag</code> with the <code>Etag</code> of the resource, server send back a <code>304 Not Modified</code> if cache is still fresh.</p>\n<h4>304 Not Modified</h4>\n<p>maximum time a resource will be considered fresh.</p>\n<h3 id="last-modified"><a class="anchor" href="#last-modified"></a>Last-Modified</h3>\n<p>contains date and time which server believes resource was last modified.</p>\n<p><code>Less accurate</code> than <code>ETag</code></p>\n<h3 id="http2"><a class="anchor" href="#http2"></a>HTTP/2</h3>\n<ul>\n<li>Longer-lived connection</li>\n<li>Request and response multiplexing within a shared connection</li>\n<li>HPACK - Header Compression</li>\n<li>Server push resources</li>\n</ul>\n</body></html>'},className:"markdown-body"})}}}]);