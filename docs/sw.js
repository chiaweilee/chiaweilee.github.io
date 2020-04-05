importScripts("/-/precache-manifest.9c12b77e1ab8c63852df3946aed402c7.js", "/-/workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/-/workbox-v3.6.3"});
/* eslint-env worker */
/* global workbox */

workbox.routing.registerRoute(/.*\.html$/, workbox.strategies.networkFirst());
workbox.routing.registerRoute(/.*.(?:js|css)/, workbox.strategies.cacheFirst());

