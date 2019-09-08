var CACHE_NAME = 's';
const expectedCaches = [CACHE_NAME];
var urlsToCache = [
  '/start',
  '/css/restart.css',
  '/css/grid.css',
  '/css/header.css',
  '/css/footer.css',
  '/css/main.css',
  '/css/style.css'
];

self.addEventListener('install', function(event) {
  
  console.log(`installing ${CACHE_NAME}`);

  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', event => {
  console.log(`${CACHE_NAME} now ready to handle fetches!`);

  // delete any caches that aren't in expectedCaches
  // which will get rid of static-v1
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(key => {
        if (!expectedCaches.includes(key)) {
          return caches.delete(key);
        }
      })
    )).then(() => {
      console.log(`${CACHE_NAME} now ready to handle fetches!`);
    })
  );
});

self.addEventListener('fetch', function(event) {

    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
  });