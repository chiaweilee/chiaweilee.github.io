this.version = 1.0;
var cacheNames = {
  static: 'static' + this.version,
  core: 'core' + this.version,
};

var staticAsset = [];

// Install process
this.oninstalled = function(event) {
  caches.set(
    cacheNames['static'],
    new Cache(staticAsset)
  );

  // core cache entried should be check on each controller update
  caches.set(cacheNames['core'], new Cache(['/']));

  event
    .waitUntil(
      Promise.all(
        caches.values().map(function(x) {
          return x.ready();
        })
      )
    )
    .then(function() {
      if (event.previousVersion) {
        event.reloadAll();
      } else {
        // if no previous version, we may as well take over now
        event.replace();
      }
    });
};

this.onactivate = function(event) {
  var expectedCaches = Object.keys(cacheNames).map(function(key) {
    return cacheNames[key];
  });

  // remove caches that shouldn't be there
  typeof caches.keys
  .filter === 'function' && caches.keys
    .filter(function(cacheName) {
      return expectedCaches.indexOf(cacheName) === -1;
    })
    .forEach(caches.delete.bind(caches));
};

// Request handling
this.addEventListener('fetch', function(event) {
  if (!new RegExp('://' + this.location.host + '/', 'i').test(event.request.url)) {
    event.respondWith(
      caches.match(cacheNames['static'], event.request.url).catch(function() {
        return fetch(event.request);
      })
    );

    return;
  }

  event.respondWith(
    caches.match(cacheNames['core'], event.request.url).catch(function() {
      return fetch(event.request);
    })
  );
});
