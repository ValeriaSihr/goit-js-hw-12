import{i,S as m}from"./assets/vendor-8c59ed88.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const f="https://pixabay.com/api/",g="43231904-ed1d7987ff22f73c70c274b13";function h(t){const a=new URLSearchParams({key:g,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${f}/?${a}`).then(s=>{if(!s.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return s.json()})}function y(t){return t.map(({tags:a,likes:s,views:n,comments:e,downloads:r,webformatURL:o,largeImageURL:d})=>`<li class="gallery-item">
                <a class="gallery-link" href="${d}" >
                   <img
                     class = "gallery-image"
                     src = "${o}"
                     alt = "${a}"
                     />
                 </a>
                 <div class = "wrapper">
                 <div class = "parameters">
                 <span class ="title">Likes</span>
                 <span class = "info">${s}</span>
                 </div>
                  <div class = "parameters">
                 <span class ="title">Views</span>
                 <span class = "info">${n}</span>
                 </div>
                  <div class = "parameters">
                 <span class ="title">Comments</span>
                 <span class = "info">${e}</span>
                 </div>
                  <div class = "parameters">
                 <span class ="title">Downloads</span>
                 <span class = "info">${r}</span>
                 </div></div>
            </li>`).join("")}function b(t){t.style.display="block"}function l(t){t.style.display="none"}const p=document.querySelector(".search-form"),c=document.querySelector(".css-loader"),u=document.querySelector(".gallery");p.addEventListener("submit",v);function v(t){t.preventDefault(),u.innerHTML="";const a=t.currentTarget.elements.data.value.trim();if(a==="")return i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"red",progressBarColor:"black"});b(c),h(a).then(s=>{if(s.hits.length===0)return l(c),i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"red",progressBarColor:"black"});l(c),u.innerHTML=y(s.hits),L.refresh()}).catch(s=>{i.error({message:`${s}`})}).finally(()=>{p.reset()})}const L=new m(".gallery a",{captionsData:"alt",captionsPosition:"bottom",captionsDelay:250});
//# sourceMappingURL=commonHelpers.js.map
