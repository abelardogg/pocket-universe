var CACHE_NAME = 'pu-v7';
var urlsToCache = [
  '/?utm_source=homescreen',
  '/css/restart.css',
  '/css/grid.css',
  '/css/header.css',
  '/css/footer.css',
  '/css/main.css',
  '/css/card.css'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
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