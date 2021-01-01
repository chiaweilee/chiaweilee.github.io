importScripts("/home/precache-manifest.e05f0cecc7a59b14fb9d664a2ba9a804.js", "/home/workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/home/workbox-v3.6.3"});
/* eslint-env worker */
/* global workbox */

workbox.routing.registerRoute(/.*\.html$/, workbox.strategies.networkFirst());
workbox.routing.registerRoute(/.*.(?:js|css)/, workbox.strategies.cacheFirst());

