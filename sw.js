// Keeps the app itself available offline. Network first, so a new version is used as soon
// as there's a connection; the saved copy is used when there isn't. Only this app's own
// files are cached (never OneDrive or Microsoft sign-in traffic, and never budget data).
const CACHE = "my-money-app";

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== location.origin) return;
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(e.request, copy));
        }
        return res;
      })
      .catch(() => caches.match(e.request).then((hit) => hit ?? caches.match("./"))),
  );
});
