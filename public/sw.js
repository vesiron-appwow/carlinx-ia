/**
 * CarLinx-IA Service Worker
 * Cache strategy: Cache-First for static assets, Network-First for API & navigation.
 */

const CACHE_NAME = 'carlinx-v1';
const OFFLINE_URL = '/';

const PRECACHE_URLS = [
  '/',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
];

// ── INSTALL: pre-cache shell ──────────────────────────────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

// ── ACTIVATE: purge old caches ───────────────────────────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// ── FETCH: routing strategy ───────────────────────────────────────────────────
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Only handle same-origin or VTL API requests
  if (!url.origin.includes(self.location.origin) &&
      !url.hostname.includes('vtl-platform')) {
    return;
  }

  // API requests → Network First, fallback to cache
  if (url.pathname.startsWith('/api/') || url.hostname.includes('vtl-platform')) {
    event.respondWith(networkFirstWithCache(request));
    return;
  }

  // Static assets (fonts, icons, CSS, JS bundles) → Cache First
  if (
    request.destination === 'style' ||
    request.destination === 'script' ||
    request.destination === 'image' ||
    request.destination === 'font' ||
    url.pathname.startsWith('/icons/') ||
    url.pathname.startsWith('/_astro/')
  ) {
    event.respondWith(cacheFirstWithNetwork(request));
    return;
  }

  // Navigation (HTML pages) → Network First, cached fallback
  if (request.mode === 'navigate') {
    event.respondWith(networkFirstNavigation(request));
    return;
  }
});

// ── STRATEGY: Network First, cache fallback ───────────────────────────────────
async function networkFirstWithCache(request) {
  const cache = await caches.open(CACHE_NAME);
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch {
    const cached = await cache.match(request);
    if (cached) return cached;
    return new Response(JSON.stringify({ vehicles: [], total: 0, page: 1, limit: 24 }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

// ── STRATEGY: Cache First, network fallback ───────────────────────────────────
async function cacheFirstWithNetwork(request) {
  const cached = await caches.match(request);
  if (cached) return cached;

  try {
    const cache = await caches.open(CACHE_NAME);
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch {
    return new Response('', { status: 503, statusText: 'Offline' });
  }
}

// ── STRATEGY: Navigation with offline fallback ────────────────────────────────
async function networkFirstNavigation(request) {
  const cache = await caches.open(CACHE_NAME);
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch {
    // Try the exact URL cached, else fall back to root
    const cached = await cache.match(request) ?? await cache.match(OFFLINE_URL);
    if (cached) return cached;
    return new Response('<h1>You are offline</h1><p>CarLinx requires a connection for new searches.</p>', {
      status: 503,
      headers: { 'Content-Type': 'text/html' },
    });
  }
}
