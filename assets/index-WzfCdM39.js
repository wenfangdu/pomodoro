(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();onload=()=>navigator.serviceWorker.register("sw.js");let i=25*60,s=!0;const a=r=>{if(!r)return clearInterval(f),"00:00";const o=String(Math.floor(r/60)).padStart(2,0);return r=String(r%60).padStart(2,0),`${o}:${r}`},l=()=>{document.title=a(i),i=Math.max(i-1,0)};l();const f=setInterval(()=>s&&l(),1e3);onkeyup=({key:r})=>r===" "&&(s=!s);
