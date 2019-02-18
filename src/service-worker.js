this.version = 1.0;
const cacheNames = {
  static: `static${this.version}`,
  core: `core${this.version}`,
};

const staticAsset = [];

// Install process
this.oninstalled = function(event) {
  caches.set(cacheNames.static, new Cache(staticAsset));

  // core cache entried should be check on each controller update
  caches.set(cacheNames.core, new Cache(['/']));

  event
    .waitUntil(
      Promise.all(
        caches.values().map(x => {
          return x.ready();
        })
      )
    )
    .then(() => {
      if (event.previousVersion) {
        event.reloadAll();
      } else {
        // if no previous version, we may as well take over now
        event.replace();
      }
    });
};

this.onactivate = function(event) {
  const expectedCaches = Object.keys(cacheNames).map(key => {
    return cacheNames[key];
  });

  // remove caches that shouldn't be there
  typeof caches.keys.filter === 'function' &&
    caches.keys
      .filter(cacheName => {
        return expectedCaches.indexOf(cacheName) === -1;
      })
      .forEach(caches.delete.bind(caches));
};

// Request handling
this.addEventListener('fetch', function(event) {
  if (!new RegExp(`://${this.location.host}/`, 'i').test(event.request.url)) {
    event.respondWith(
      caches.match(cacheNames.static, event.request.url).catch(() => {
        return fetch(event.request);
      })
    );

    return;
  }

  event.respondWith(
    caches.match(cacheNames.core, event.request.url).catch(() => {
      return fetch(event.request);
    })
  );
});
