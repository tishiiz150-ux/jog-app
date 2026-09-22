self.addEventListener('fetch', function(event) {
  // PWAインストール要件を満たすための最小構成
  event.respondWith(fetch(event.request));
});
