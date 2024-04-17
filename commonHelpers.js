import{a as y,i as d,S as b}from"./assets/vendor-6e0bf343.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const L="https://pixabay.com/api/",S="43231904-ed1d7987ff22f73c70c274b13";async function u(t,s){return(await y(L,{params:{key:S,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:s,per_page:15}})).data}function g(t){return console.log(t),t.map(({tags:s,likes:r,views:i,comments:e,downloads:o,webformatURL:l,largeImageURL:h})=>`<li class="gallery-item">
                <a class="gallery-link" href="${h}" >
                   <img
                     class = "gallery-image"
                     src = "${l}"
                     alt = "${s}"
                     />
                 </a>
                 <div class = "wrapper">
                 <div class = "parameters">
                 <span class ="title">Likes</span>
                 <span class = "info">${r}</span>
                 </div>
                  <div class = "parameters">
                 <span class ="title">Views</span>
                 <span class = "info">${i}</span>
                 </div>
                  <div class = "parameters">
                 <span class ="title">Comments</span>
                 <span class = "info">${e}</span>
                 </div>
                  <div class = "parameters">
                 <span class ="title">Downloads</span>
                 <span class = "info">${o}</span>
                 </div></div>
            </li>`).join("")}function v(t){t.style.display="block"}function w(t){t.style.display="none"}const C={form:document.querySelector(".search-form"),loader:document.querySelector(".css-loader"),gallery:document.querySelector(".gallery"),loadBtn:document.querySelector(".load-more-btn")},{form:c,loader:p,gallery:m,loadBtn:a}=C;let n=1;c.addEventListener("submit",k);async function k(t){t.preventDefault(),a.classList.contains("load-more")&&a.classList.replace("load-more","btn-hidden"),m.innerHTML="";const s=t.currentTarget.elements.data.value.trim();if(sessionStorage.setItem("text",s),n=1,s==="")return c.reset(),d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"darkred",progressBarColor:"black"});v(p),await u(s,n).then(r=>{if(console.log(r),r.hits.length===0)return c.reset(),d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"darkred",progressBarColor:"black"});c.reset(),m.insertAdjacentHTML("beforeend",g(r.hits)),f.refresh(),n<Math.ceil(r.totalHits/15)&&a.classList.replace("btn-hidden","load-more"),n>=Math.ceil(r.totalHits/15)&&a.classList.replace("load-more","btn-hidden")}).catch(r=>{c.reset(),d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"darkred",progressBarColor:"black"})}).finally(()=>{w(p)})}a.addEventListener("click",q);async function q(){a.disabled=!0;try{const t=sessionStorage.getItem("text");n+=1;const s=await u(t,n);m.insertAdjacentHTML("beforeend",g(s.hits)),a.disabled=!1,s.hits.length<15&&a.classList.add("btn-hidden"),f.refresh();const r=document.querySelector(".gallery-item");console.log(r);const i=r.getBoundingClientRect().height;window.scrollBy({left:0,top:i*3,behavior:"smooth"})}catch(t){alert(t.message)}}const f=new b(".gallery a",{captionsData:"alt",captionsPosition:"bottom",captionsDelay:250});
//# sourceMappingURL=commonHelpers.js.map
