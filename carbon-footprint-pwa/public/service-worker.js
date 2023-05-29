// Define a cache name
const CACHE_NAME = 'carbon-footprint-calculator-cache';

// Define the files to cache
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/logo.png',
];

// Install the service worker and cache the files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

// Fetch assets from the cache or the network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});