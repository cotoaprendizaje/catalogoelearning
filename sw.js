/**
 * Service Worker — Catálogo e-learning COTO CICSA
 *
 * Estrategia:
 *  - App shell (HTML, CSS, JS, logos): cache-first
 *  - Imágenes de cursos: stale-while-revalidate (rápidas + se actualizan en segundo plano)
 *  - PDF y todo lo demás: network-first con fallback a cache
 *
 * Para invalidar el cache después de editar cursos, subí CACHE_VERSION.
 */

const CACHE_VERSION = 'v1';
const SHELL_CACHE = `shell-${CACHE_VERSION}`;
const IMG_CACHE = `img-${CACHE_VERSION}`;

const SHELL_FILES = [
  './',
  './index.html',
  './app.js',
  './styles.css',
  './img/logo-coto.png',
  './img/logo-rrhh.png',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(SHELL_CACHE)
      .then(cache => cache.addAll(SHELL_FILES))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys
        .filter(k => k !== SHELL_CACHE && k !== IMG_CACHE)
        .map(k => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // Imágenes: stale-while-revalidate
  if (/\.(webp|jpe?g|png|gif|svg)$/i.test(url.pathname)) {
    event.respondWith(staleWhileRevalidate(req, IMG_CACHE));
    return;
  }

  // App shell + PDF: cache-first con actualización en background
  event.respondWith(cacheFirst(req, SHELL_CACHE));
});

async function cacheFirst(req, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(req);
  if (cached) {
    fetch(req).then(res => { if (res.ok) cache.put(req, res); }).catch(() => {});
    return cached;
  }
  try {
    const res = await fetch(req);
    if (res.ok) cache.put(req, res.clone());
    return res;
  } catch (err) {
    const fallback = await cache.match('./index.html');
    return fallback || Response.error();
  }
}

async function staleWhileRevalidate(req, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(req);
  const networkPromise = fetch(req)
    .then(res => { if (res.ok) cache.put(req, res.clone()); return res; })
    .catch(() => null);
  return cached || networkPromise || Response.error();
}
