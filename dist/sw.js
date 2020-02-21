importScripts("/precache-manifest.c6674a5fbeb39680ac75ebdf1eca1c5f.js", "/workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/workbox-v3.6.3"});
/* eslint-env worker */
/* global workbox */

workbox.routing.registerRoute(/.*\.html$/, workbox.strategies.networkFirst());
workbox.routing.registerRoute(/.*.(?:js|css)/, workbox.strategies.cacheFirst());

