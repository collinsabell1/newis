/* ===============================
   NEWIS PRODUCTION SERVICE WORKER
   =============================== */

const CACHE_VERSION = "v3";
const CACHE_NAME = `newis-cache-${CACHE_VERSION}`;

const STATIC_ASSETS = [
  "/",
  "/index.html",
  "/riskprediction.html",
  "/register.html",
  "/academic.html",
  "/manifest.json",
  "https://cdn.jsdelivr.net/npm/chart.js"
];

/* INSTALL */
self.addEventListener("install", event => {
  console.log("📦 Installing Service Worker...");
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_ASSETS))
  );
});

/* ACTIVATE */
self.addEventListener("activate", event => {
  console.log("🚀 Activating Service Worker...");

  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            console.log("🗑 Removing old cache:", key);
            return caches.delete(key);
          }
        })
      );
    })
  );

  return self.clients.claim();
});

/* FETCH (SMART CACHE STRATEGY) */
self.addEventListener("fetch", event => {

  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {

        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(event.request)
          .then(networkResponse => {

            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== "basic") {
              return networkResponse;
            }

            const responseClone = networkResponse.clone();

            caches.open(CACHE_NAME)
              .then(cache => cache.put(event.request, responseClone));

            return networkResponse;
          })
          .catch(() => {
            if (event.request.mode === "navigate") {
              return caches.match("/index.html");
            }
          });
      })
  );
});

/* BACKGROUND SYNC */
self.addEventListener("sync", event => {
  if (event.tag === "sync-newis-data") {
    console.log("🔄 Background Sync Triggered");
  }
});
