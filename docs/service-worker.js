/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7e691de0e899d1eb4644e693a4ed5e8e"
  },
  {
    "url": "assets/css/0.styles.c877b678.css",
    "revision": "bba66871e465b81cef8b35e1c448911d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.7d42399c.js",
    "revision": "3ca92005eb502ef53ba4562779049150"
  },
  {
    "url": "assets/js/3.ce5cbe41.js",
    "revision": "2db55dbc159462921d773b616930961f"
  },
  {
    "url": "assets/js/4.52c9d1e9.js",
    "revision": "92a45db91201fdb2bab443bdab66cfe1"
  },
  {
    "url": "assets/js/app.85ff3636.js",
    "revision": "4d1d5869aa2abc9ad605a50b9d0ddc63"
  },
  {
    "url": "index.html",
    "revision": "203a9ccd6b903f5be853501ce7d16ac4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
