import{a as h,i as d,S as y}from"./assets/vendor-6e0bf343.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const b="https://pixabay.com/api/",L="43231904-ed1d7987ff22f73c70c274b13";async function u(t,r){return(await h(b,{params:{key:L,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:r,per_page:15}})).data}function g(t){return t.map(({tags:r,likes:o,views:a,comments:e,downloads:s,webformatURL:i,largeImageURL:f})=>`<li class="gallery-item">
                <a class="gallery-link" href="${f}" >
                   <img
                     class = "gallery-image"
                     src = "${i}"
                     alt = "${r}"
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
                 <span class = "info">${s}</span>
                 </div></div>
            </li>`).join("")}function S(t){t.style.display="block"}function v(t){t.style.display="none"}const l=document.querySelector(".search-form"),m=document.querySelector(".css-loader"),p=document.querySelector(".gallery");let n=1;l.addEventListener("submit",w);async function w(t){t.preventDefault(),p.innerHTML="";const r=t.currentTarget.elements.data.value.trim();if(sessionStorage.setItem("text",r),n=1,r==="")return l.reset(),d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"red",progressBarColor:"black"});S(m),await u(r,n).then(o=>{if(o.hits.length===0)return l.reset(),d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"red",progressBarColor:"black"});l.reset(),p.insertAdjacentHTML("beforeend",g(o.hits)),q.refresh(),n<500&&c.classList.replace("btn-hidden","load-more"),n>500&&c.classList.replace("load-more","btn-hidden")}).catch(o=>{l.reset(),d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"red",progressBarColor:"black"})}).finally(()=>{v(m)})}const c=document.querySelector(".load-more-btn");c.addEventListener("click",C);async function C(){c.disabled=!0;try{const t=sessionStorage.getItem("text");n+=1;const r=await u(t,n);p.insertAdjacentHTML("beforeend",g(r.hits)),c.disabled=!1;const o=document.querySelector(".gallery-item");console.log(o);const a=o.getBoundingClientRect().height;window.scrollBy({left:0,top:a*3,behavior:"smooth"})}catch(t){alert(t.message)}}const q=new y(".gallery a",{captionsData:"alt",captionsPosition:"bottom",captionsDelay:250});
//# sourceMappingURL=commonHelpers.js.map
