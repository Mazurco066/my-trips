if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,t,a)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const c={uri:location.origin+s.slice(1)};return Promise.all(t.map((s=>{switch(s){case"exports":return n;case"module":return c;default:return e(s)}}))).then((e=>{const s=a(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-030153e1"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/RKG7F5q9_vpTnXMAmcSOs/_buildManifest.js",revision:"RKG7F5q9_vpTnXMAmcSOs"},{url:"/_next/static/RKG7F5q9_vpTnXMAmcSOs/_ssgManifest.js",revision:"RKG7F5q9_vpTnXMAmcSOs"},{url:"/_next/static/chunks/0b7b90cd.d5b297137751fd613262.js",revision:"RKG7F5q9_vpTnXMAmcSOs"},{url:"/_next/static/chunks/14.5e00beff54108ea605b4.js",revision:"RKG7F5q9_vpTnXMAmcSOs"},{url:"/_next/static/chunks/1bfc9850.9ca0b793f6519d4c699f.js",revision:"RKG7F5q9_vpTnXMAmcSOs"},{url:"/_next/static/chunks/4f1c9a10df2b94c598252b918aec17a233bb1fc0.9763047eff9efaa87009.js",revision:"RKG7F5q9_vpTnXMAmcSOs"},{url:"/_next/static/chunks/c4ab6d94139e016125f398191f880905b397fef5.9db1cbeeaf6bc94314d1.js",revision:"RKG7F5q9_vpTnXMAmcSOs"},{url:"/_next/static/chunks/commons.c5b7aa6668160f617225.js",revision:"RKG7F5q9_vpTnXMAmcSOs"},{url:"/_next/static/chunks/framework.349d8128c43083da4feb.js",revision:"RKG7F5q9_vpTnXMAmcSOs"},{url:"/_next/static/chunks/main-c59089572daf06dfd160.js",revision:"RKG7F5q9_vpTnXMAmcSOs"},{url:"/_next/static/chunks/pages/%5Bslug%5D-e17ff5dba93e8200ff89.js",revision:"RKG7F5q9_vpTnXMAmcSOs"},{url:"/_next/static/chunks/pages/_app-f6bfd46ce5da9bff6d61.js",revision:"RKG7F5q9_vpTnXMAmcSOs"},{url:"/_next/static/chunks/pages/_error-0c0ecfb40a83fbaccd86.js",revision:"RKG7F5q9_vpTnXMAmcSOs"},{url:"/_next/static/chunks/pages/index-1c63d7efc8f0c7a16fd6.js",revision:"RKG7F5q9_vpTnXMAmcSOs"},{url:"/_next/static/chunks/pages/places/%5Bslug%5D-f700846b0cf0aa6070c9.js",revision:"RKG7F5q9_vpTnXMAmcSOs"},{url:"/_next/static/chunks/polyfills-ab588e2134a1bc805459.js",revision:"RKG7F5q9_vpTnXMAmcSOs"},{url:"/_next/static/chunks/webpack-c5368aa8fb8a574ef689.js",revision:"RKG7F5q9_vpTnXMAmcSOs"},{url:"/_next/static/css/ffda3d49c188e43a2370.css",revision:"RKG7F5q9_vpTnXMAmcSOs"},{url:"/font/Oswald-Bold.ttf",revision:"e991dea9f65ce799dd72095ab7ad6e88"},{url:"/font/Oswald-ExtraLight.ttf",revision:"309040b6e57cb05a6863228a4d395521"},{url:"/font/Oswald-Light.ttf",revision:"4be970a1b24aa834afff4b16842c8981"},{url:"/font/Oswald-Medium.ttf",revision:"351c498bd487b476454b8f09a34139a9"},{url:"/font/Oswald-Regular.ttf",revision:"e1996192b98a516646ff9a8c0c0ca90c"},{url:"/font/Oswald-SemiBold.ttf",revision:"c8ff3929086488642de6b260f5c14e5b"},{url:"/font/Oswald-VariableFont_wght.ttf",revision:"a6e5446a7c5789aabc9b37eaaf72134d"},{url:"/img/hero-illustration.svg",revision:"5fd5143cba1046a214d9a359fce22e89"},{url:"/img/icon-192.png",revision:"d27169d080684ebb57b8387d05c4b444"},{url:"/img/icon-512.png",revision:"f1d74b43a3832183202483a40d9e9d84"},{url:"/manifest.json",revision:"820017b387ac0adcf42634d0b6363c3f"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
