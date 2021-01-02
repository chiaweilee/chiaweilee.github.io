importScripts("/home/precache-manifest.033961ef2e5076b52746f9c7bc325582.js", "/home/workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/home/workbox-v3.6.3"});
/* eslint-env worker */
/* global workbox */

workbox.routing.registerRoute(/.*\.html$/, workbox.strategies.networkFirst());
workbox.routing.registerRoute(/.*.(?:js|css)/, workbox.strategies.cacheFirst());

