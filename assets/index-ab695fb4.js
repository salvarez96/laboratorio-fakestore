(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}})();const u=e=>`
    <article class='Card'>
      <img src="${e.images[0]}"/>
      <h2>
        ${e.title}
        <small>Precio $${e.price}</small>  
      </h2>
    </article>
  `,m=e=>{const o=document.createElement("section");return o.classList.add("Items"),o.innerHTML=e,o},f=()=>{const e=document.createElement("p");return e.textContent="Todos los productos Obtenidos",e},a=document.getElementById("app"),l=document.getElementById("observe"),g="https://api.escuelajs.co/api/v1/products",d=10;let c=5;localStorage.setItem("pagination",c);const y=e=>`?offset=${e}&limit=${d}`,h=async e=>{try{const r=(await(await fetch(e)).json()).map(t=>u(t)).join("");a.appendChild(m(r))}catch{}},I=async e=>{await h(`${g}${y(e)}`),localStorage.setItem("pagination",c),c+=d},p=new IntersectionObserver(e=>{const o=JSON.parse(localStorage.getItem("pagination"));e.filter(s=>{s.isIntersecting&&I(o)}),o>200&&(a.appendChild(f()),p.unobserve(l))},{rootMargin:"0px 0px 100% 0px"});p.observe(l);
