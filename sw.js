/* Anchor service worker — offline app shell + runtime font cache */
const VERSION = "anchor-v3-v1";
const SHELL = [
  "./",
  "./index.html",
  "./styles/base.css",
  "./styles/v3.css",
  "./scripts/app.js",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-maskable-512.png",
  "./apple-touch-icon.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // App navigation: network first, fall back to cached shell (offline launch)
  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req).catch(() => caches.match("./index.html"))
    );
    return;
  }

  // Google Fonts: cache-first so the app keeps its typography offline after first load
  if (url.host === "fonts.googleapis.com" || url.host === "fonts.gstatic.com") {
    e.respondWith(
      caches.open(VERSION).then((cache) =>
        cache.match(req).then((hit) =>
          hit || fetch(req).then((res) => { cache.put(req, res.clone()); return res; }).catch(() => hit)
        )
      )
    );
    return;
  }

  // Same-origin static: cache-first
  if (url.origin === self.location.origin) {
    e.respondWith(
      caches.match(req).then((hit) =>
        hit || fetch(req).then((res) => {
          const copy = res.clone();
          caches.open(VERSION).then((c) => c.put(req, copy));
          return res;
        }).catch(() => hit)
      )
    );
  }
});

/* Tapping a notification focuses an existing window or opens the app */
self.addEventListener("notificationclick", (e) => {
  e.notification.close();
  e.waitUntil((async () => {
    const all = await clients.matchAll({ type: "window", includeUncontrolled: true });
    for (const c of all) { if ("focus" in c) return c.focus(); }
    if (clients.openWindow) return clients.openWindow("./");
  })());
});

/* Push support (no server today, but ready if you add one later) */
self.addEventListener("push", (e) => {
  let data = { title: "Anchor", body: "" };
  try { if (e.data) data = e.data.json(); } catch (_) {}
  e.waitUntil(self.registration.showNotification(data.title || "Anchor", {
    body: data.body || "", icon: "./icon-192.png", badge: "./icon-192.png"
  }));
});
