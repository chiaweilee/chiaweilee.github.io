importScripts("/docs/precache-manifest.bb25b78b2c961e81b749f5fea5786f1f.js", "/docs/workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/docs/workbox-v3.6.3"});
/* eslint-env worker */
/* global workbox */

workbox.routing.registerRoute(/.*\.html$/, workbox.strategies.networkFirst());
workbox.routing.registerRoute(/.*.(?:js|css)/, workbox.strategies.cacheFirst());

