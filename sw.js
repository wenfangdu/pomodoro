if(!self.define){let e,s={};const i=(i,t)=>(i=new URL(i+".js",t).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(t,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let n={};const c=e=>i(e,r),d={module:{uri:r},exports:n,require:c};s[r]=Promise.all(t.map((e=>d[e]||c(e)))).then((e=>(o(...e),n)))}}define(["./workbox-03270c55"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-4fVtudD-.css",revision:"61f5dd942e529d71d1b7f3b9bb2a261a"},{url:"assets/index-aRP9yTGY.js",revision:"882bb5c887c51b44b0b7b99fc81c0fa2"},{url:"icon.png",revision:"85b04b0dbd43bd7de2f98ad5c7b0710b"},{url:"index.html",revision:"0a91fc2b970d6f62c3890511d1e8339d"},{url:"RobotoMono-Regular.ttf",revision:"5b04fdfec4c8c36e8ca574e40b7148bb"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
