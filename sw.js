const CACHE = 'saliseuranta-offline-v40-20261020';
const APP = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(APP)));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('saliseuranta-offline-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('message', event => {
  if(event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});
self.addEventListener('fetch', event => {
  const request = event.request;
  if(request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;
  // Network first: kun uusi GitHub Pages -versio julkaistaan, sovellus näkee sen.
  // Offline: viimeisin kokonaan välimuistiin tallennettu sovellus toimii verkotta.
  if(request.mode === 'navigate') {
    event.respondWith(fetch(request).then(response => {
      if(response.ok) { const copy=response.clone(); caches.open(CACHE).then(cache => cache.put('./index.html',copy)); }
      return response;
    }).catch(() => caches.match('./index.html')));
    return;
  }
  event.respondWith(caches.match(request).then(cached => cached || fetch(request).then(response => {
    if(response.ok) {const copy=response.clone(); caches.open(CACHE).then(cache => cache.put(request,copy));}
    return response;
  })));
});
