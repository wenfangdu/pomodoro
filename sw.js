if(!self.define){let e,s={};const i=(i,o)=>(i=new URL(i+".js",o).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(o,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let n={};const c=e=>i(e,t),d={module:{uri:t},exports:n,require:c};s[t]=Promise.all(o.map((e=>d[e]||c(e)))).then((e=>(r(...e),n)))}}define(["./workbox-03270c55"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-Bkx7Aas4.js",revision:"882bb5c887c51b44b0b7b99fc81c0fa2"},{url:"assets/index-u4ENqPMG.css",revision:"d967f9d1886507df30c32c85874d4b29"},{url:"icon.png",revision:"85b04b0dbd43bd7de2f98ad5c7b0710b"},{url:"index.html",revision:"754234d144ee8543277ae0445d2865ff"},{url:"RobotoMono-Regular.ttf",revision:"5b04fdfec4c8c36e8ca574e40b7148bb"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
