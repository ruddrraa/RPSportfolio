// Service worker uninstaller - cleanly unregisters without triggering client reloads
self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    self.registration.unregister().then(() => {
      console.log("[SW] Service worker successfully unregistered.");
    })
  );
});
