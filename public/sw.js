const CACHE_NAME = "newis-dynamic-cache-v2";

const STATIC_ASSETS = [
  "/",
  "/index.html",
  "/register.html",
  "/login.html",
  "/dashboard.html",
  "/academics.html",
  "/behavioral.html",
  "/assessment.html",
  "/riskprediction.html",
  "/manifest.json"
];

// Install - cache core assets
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

// Activate - clean old caches
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Fetch - Network First (auto switch)
self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
      .catch(() => {
        return caches.match(event.request);
      })
  );
});

