importScripts("/home/precache-manifest.288c1096a4da95e7f32bdc2e62878247.js", "/home/workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/home/workbox-v3.6.3"});
/* eslint-env worker */
/* global workbox */

workbox.routing.registerRoute(/.*\.html$/, workbox.strategies.networkFirst());
workbox.routing.registerRoute(/.*.(?:js|css)/, workbox.strategies.cacheFirst());

