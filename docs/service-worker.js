!function(){"use strict";const e=["client/index.65a269a0.js","client/GuideContents.d9fe16e4.js","client/client.9e6c9e33.js","client/index.ca4f4a8d.js","client/[slug].e710d1cc.js","client/index.e0b22755.js","client/index.1407ed7e.js","client/[slug].ed6b6ed5.js","client/_examples.b6ee122f.js","client/hljsDefineSvelte.19043ada.js"].concat(["service-worker-index.html","CNAME","copy.svg","deps.json","favicon.png","global.css","hljs.css","icons/download.svg","icons/link.svg","layercake-logo-100.png","layercake-logo-1200.png","layercake-logo-128.png","layercake-logo-192.png","layercake-logo-500x400.png","layercake-logo-512.png","manifest.json","svelte-app.json"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1579277142745").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1579277142745"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1579277142745").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const n=await t.match(e.request);if(n)return n;throw s}}))))})}();