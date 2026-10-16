// Service worker: saves the app's files on the phone so it opens with no internet.
// Bump CACHE whenever you change any file below, so phones pick up the new version.
const CACHE = "workout-split-v1";
const FILES = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  "./icons/apple-touch-icon.png",
  "./fonts/poppins-latin-400-normal.woff2",
  "./fonts/poppins-latin-500-normal.woff2",
  "./fonts/poppins-latin-600-normal.woff2",
  "./fonts/poppins-latin-700-normal.woff2",
  "./fonts/poppins-latin-800-normal.woff2"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;

  // The page itself: try the network first so updates show up, fall back to the saved copy offline.
  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req)
        .then(res => {
          const copy = res.clone();
          caches.open(CACHE).then(cache => cache.put("./index.html", copy));
          return res;
        })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }

  // Fonts, icons, manifest: use the saved copy, fetch only if missing.
  event.respondWith(caches.match(req).then(hit => hit || fetch(req)));
});
