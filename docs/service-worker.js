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
    "revision": "c5c06183bf3640440dff74055ef6e17f"
  },
  {
    "url": "assets/css/0.styles.f24c2a85.css",
    "revision": "1c905385af53698e2b4ab1b9c7ca2727"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.0b373504.js",
    "revision": "ac3c07dd1687b332f8d66d63c115fd6c"
  },
  {
    "url": "assets/js/3.d4d5575f.js",
    "revision": "53917fe625e0616e63969b8d099c9f5c"
  },
  {
    "url": "assets/js/4.dc4ce114.js",
    "revision": "fea0453b59ad31d4edaf6ac124d9f113"
  },
  {
    "url": "assets/js/app.895eba8c.js",
    "revision": "5ac4b3a0a495d6586c508ad0ac933a71"
  },
  {
    "url": "index.html",
    "revision": "e3852d87c7b1af133cac9f099177e7b0"
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
