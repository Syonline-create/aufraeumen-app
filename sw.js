self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('fetch', () => {
  // Minimaler SW – keine Offline-Logik nötig
});
