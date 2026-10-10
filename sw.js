// Bunker Guardian - Service Worker
const CACHE = "canaa-bunker-v1";
const FILES = ["/Canaa-os-resurrection-/", "/Canaa-os-resurrection-/index.html", "/Canaa-os-resurrection-/manifest.json"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

self.addEventListener("fetch", e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
