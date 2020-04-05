importScripts("/-/precache-manifest.ff9afefb687e44a7ab0dd443ffc15d55.js", "/-/workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/-/workbox-v3.6.3"});
/* eslint-env worker */
/* global workbox */

workbox.routing.registerRoute(/.*\.html$/, workbox.strategies.networkFirst());
workbox.routing.registerRoute(/.*.(?:js|css)/, workbox.strategies.cacheFirst());

