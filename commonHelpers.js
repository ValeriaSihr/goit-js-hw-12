import{a as h,i as d,S as y}from"./assets/vendor-6e0bf343.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const b="https://pixabay.com/api/",L="43231904-ed1d7987ff22f73c70c274b13";async function u(t,s){return(await h(b,{params:{key:L,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:s,per_page:15}})).data}function g(t){return console.log(t),t.map(({tags:s,likes:o,views:a,comments:e,downloads:r,webformatURL:l,largeImageURL:f})=>`<li class="gallery-item">
                <a class="gallery-link" href="${f}" >
                   <img
                     class = "gallery-image"
                     src = "${l}"
                     alt = "${s}"
                     />
                 </a>
                 <div class = "wrapper">
                 <div class = "parameters">
                 <span class ="title">Likes</span>
                 <span class = "info">${o}</span>
                 </div>
                  <div class = "parameters">
                 <span class ="title">Views</span>
                 <span class = "info">${a}</span>
                 </div>
                  <div class = "parameters">
                 <span class ="title">Comments</span>
                 <span class = "info">${e}</span>
                 </div>
                  <div class = "parameters">
                 <span class ="title">Downloads</span>
                 <span class = "info">${r}</span>
                 </div></div>
            </li>`).join("")}function S(t){t.style.display="block"}function v(t){t.style.display="none"}const c=document.querySelector(".search-form"),m=document.querySelector(".css-loader"),p=document.querySelector(".gallery");let n=1;c.addEventListener("submit",w);async function w(t){t.preventDefault(),p.innerHTML="";const s=t.currentTarget.elements.data.value.trim();if(sessionStorage.setItem("text",s),n=1,s==="")return c.reset(),d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"darkred",progressBarColor:"black"});S(m),await u(s,n).then(o=>{if(console.log(o),o.hits.length===0)return c.reset(),d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"darkred",progressBarColor:"black"});c.reset(),p.insertAdjacentHTML("beforeend",g(o.hits)),k.refresh(),n<500&&i.classList.replace("btn-hidden","load-more"),n>500&&i.classList.replace("load-more","btn-hidden")}).catch(o=>{c.reset(),d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"darkred",progressBarColor:"black"})}).finally(()=>{v(m)})}const i=document.querySelector(".load-more-btn");i.addEventListener("click",C);async function C(){i.disabled=!0;try{const t=sessionStorage.getItem("text");n+=1;const s=await u(t,n);p.insertAdjacentHTML("beforeend",g(s.hits)),i.disabled=!1,s.hits.length<15&&i.classList.add("btn-hidden");const o=document.querySelector(".gallery-item");console.log(o);const a=o.getBoundingClientRect().height;window.scrollBy({left:0,top:a*3,behavior:"smooth"})}catch(t){alert(t.message)}}const k=new y(".gallery a",{captionsData:"alt",captionsPosition:"bottom",captionsDelay:250});
//# sourceMappingURL=commonHelpers.js.map
