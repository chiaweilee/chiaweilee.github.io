importScripts("/precache-manifest.b62610231692b89ae62e96149d0fdfc9.js", "/workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/workbox-v3.6.3"});
/* eslint-env worker */
/* global workbox */

workbox.routing.registerRoute(/.*\.html$/, workbox.strategies.networkFirst());
workbox.routing.registerRoute(/.*.(?:js|css)/, workbox.strategies.cacheFirst());

