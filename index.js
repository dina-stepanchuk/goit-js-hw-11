import{a as d,S as f,i as p}from"./assets/vendor-Cq7ZUixy.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/",y="54229947-cd8105fd48042137517a5f764";function g(r){return d.get(m,{params:{key:y,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const a=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=new f(".gallery a",{captionsData:"alt",captionDelay:250});function L(r){const o=r.map(({webformatURL:s,largeImageURL:i,tags:e,likes:t,views:n,comments:c,downloads:u})=>`<li class="gallery-item">
            <a href="${i}"
              ><img src="${s}" alt="${e}" loading="lazy"
            /></a>
            <ul class="description">
              <li><p><span class="title-info">Likes</span>${t}</p></li>
              <li><p><span class="title-info">Views</span>${n}</p></li>
              <li><p><span class="title-info">Comments</span>${c}</p></li>
              <li><p><span class="title-info">Downloads</span>${u}</p></li>
            </ul>
          </li>`).join("");a.insertAdjacentHTML("beforeend",o),h.refresh()}function b(){a.innerHTML=""}function S(){l.classList.remove("hidden")}function q(){l.classList.add("hidden")}const $=document.querySelector(".form");$.addEventListener("submit",w);function w(r){r.preventDefault();const o=r.target.elements["search-text"].value.trim();b(),S(),setTimeout(()=>{g(o).then(s=>{const i=s.data.hits;if(i.length===0){p.warning({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"});return}L(i)}).catch(()=>{}).finally(()=>{q()})},1e3)}
//# sourceMappingURL=index.js.map
