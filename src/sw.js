/* eslint-env worker */
/* global workbox */

workbox.routing.registerRoute(/.*.(?:js|css)/, workbox.strategies.cacheFirst());
workbox.routing.registerRoute(/.*.(?:jpg|png)/, workbox.strategies.cacheFirst());
