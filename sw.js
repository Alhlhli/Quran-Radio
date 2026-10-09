// Service worker — caches the app shell only.
// Audio/video streams and third-party CDNs are never intercepted (except fonts,
// which are immutable and cached separately for offline use).
const CACHE = 'qr-shell-v7';
const FONT_CACHE = 'qr-fonts-v1';
// أيقونات PNG ليست ضرورية للعمل دون اتصال (تُعرض عند التثبيت فقط)،
// فاستبعادها يقلّص حجم الكاش المسبق كثيرًا ويسرّع أول تحميل.
const ASSETS = [
  './', './index.html', './style.css', './app.js', './stations.js',
  './manifest.json', './icon.svg'
];
const FONT_HOSTS = ['fonts.googleapis.com', 'fonts.gstatic.com'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.all(ASSETS.map(a => c.add(a).catch(() => {}))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(
        ks.filter(k => k !== CACHE && k !== FONT_CACHE).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', e => {
  if (e.data === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET') return;

  // Google Fonts: cache-first (files are content-hashed and never change)
  if (FONT_HOSTS.includes(url.hostname)) {
    e.respondWith(
      caches.open(FONT_CACHE).then(async cache => {
        const hit = await cache.match(e.request);
        if (hit) return hit;
        const res = await fetch(e.request);
        if (res && res.ok) cache.put(e.request, res.clone());
        return res;
      }).catch(() => caches.match(e.request))
    );
    return;
  }

  if (url.origin !== location.origin) return;

  // App shell: network-first so updates land immediately, cache is the offline fallback
  e.respondWith(
    fetch(e.request).then(r => {
      const copy = r.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy));
      return r;
    }).catch(() =>
      caches.match(e.request).then(hit =>
        hit || (e.request.mode === 'navigate' ? caches.match('./index.html') : undefined)
      )
    )
  );
});
