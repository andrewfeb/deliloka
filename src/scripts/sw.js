import 'regenerator-runtime';
import cacheHelper from './utils/cache-helper';

const assets = [
  './images/heros/hero-image_4.jpg',
  './images/logo/logo.svg',
  './images/bg.png',
  './icons/icon-72x72.png',
  './icons/icon-96x96.png',
  './icons/icon-128x128.png',
  './icons/icon-144x144.png',
  './icons/icon-152x152.png',
  './icons/icon-192x192.png',
  './icons/icon-384x384.png',
  './icons/icon-512x512.png',
  './index.html',
  './app.webmanifest',
  './sw.bundle.js',
  './app.bundle.js',
  './favicon.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(cacheHelper.cachingAppShell([...assets]));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(cacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  if (event.request.url.indexOf('http') !== 0) return;
  event.respondWith(cacheHelper.revalidateCache(event.request));
});
