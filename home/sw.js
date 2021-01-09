importScripts("/home/precache-manifest.cb5182c61fd43c30664ca2d06b9cae7b.js", "/home/workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/home/workbox-v3.6.3"});
/* eslint-env worker */
/* global workbox */

workbox.routing.registerRoute(/.*\.html$/, workbox.strategies.networkFirst());
workbox.routing.registerRoute(/.*.(?:js|css)/, workbox.strategies.cacheFirst());

