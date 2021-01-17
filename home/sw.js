importScripts("/home/precache-manifest.a71a9490754c1b0883a996b36142cbe1.js", "/home/workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/home/workbox-v3.6.3"});
/* eslint-env worker */
/* global workbox */

workbox.routing.registerRoute(/.*\.html$/, workbox.strategies.networkFirst());
workbox.routing.registerRoute(/.*.(?:js|css)/, workbox.strategies.cacheFirst());

