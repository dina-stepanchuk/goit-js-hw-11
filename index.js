import{a as f,S as m,i as a}from"./assets/vendor-Cq7ZUixy.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const p="https://pixabay.com/api/",y="54229947-cd8105fd48042137517a5f764";function g(o){return f.get(p,{params:{key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),h=new m(".gallery a",{captionsData:"alt",captionDelay:250});function b(o){const r=o.map(({webformatURL:n,largeImageURL:i,tags:e,likes:t,views:s,comments:u,downloads:d})=>`<li class="gallery-item">
            <a href="${i}"
              ><img src="${n}" alt="${e}" loading="lazy"
            /></a>
            <ul class="description">
              <li><p><b>Likes</b>${t}</p></li>
              <li><p><b>Views</b>${s}</p></li>
              </li><p><b>Comments</b>${u}</p></li>
              </li><p><b>Downloads</b>${d}</p></li>
            </ul>
          </li>`).join("");l.insertAdjacentHTML("beforeend",r),h.refresh()}function L(){l.innerHTML=""}function S(){c.classList.remove("hidden")}function q(){c.classList.add("hidden")}const P=document.querySelector(".form");P.addEventListener("submit",$);function $(o){o.preventDefault();const r=o.target.elements["search-text"].value.trim();if(r===""){a.error({message:"Please enter a search query!",position:"topRight",color:"red"});return}L(),S(),g(r).then(n=>{const i=n.data.hits;if(i.length===0){a.warning({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"});return}b(i)}).catch(()=>{}).finally(()=>{q()})}
//# sourceMappingURL=index.js.map
