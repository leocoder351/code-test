var cacheName = 'pwa-step-v1';
var filesToCache = [
  './index.html',
  './index.css',
  './images/city.jpg'
];

// self ServiceWorker 全局变量
// caches 表示缓存 全局变量

self.addEventListener('install', function (event) {
  // 首次访问会触发
  console.log('安装');
  event.waitUntil(function () {
    caches.open(cacheName)
    .then(function (cache) {
      return cache.addAll(filesToCache);
    })
    .then(() => self.skipWaiting());
  });
});

// 匹配一下是否是新的
self.addEventListener('activated', function (event) {
  event.waitUntil(caches.keys().then(function (keyList) {
    return Promise.all(keyList.map(function (key) {
      if (key !== cacheName) {
        return caches.delete(key);
      }
    }))
  }))
});

self.addEventListener('fetch', function (event) {
  console.log('拦截网络请求');
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});