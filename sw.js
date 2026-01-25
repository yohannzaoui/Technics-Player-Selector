const CACHE_NAME = 'Technics Player Selector';
const ASSETS = [
  'select.html',
  'img/Technics-Logo-org.png',
  'img/favicon.png',
  'style.css',
];

// Installation du Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Stratégie de cache : Réseau d'abord, sinon Cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});
