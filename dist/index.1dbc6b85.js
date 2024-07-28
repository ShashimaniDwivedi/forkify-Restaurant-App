function e(e){return e&&e.__esModule?e.default:e}var t=globalThis,r={},n={},i=t.parcelRequire6c34;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return r[e]=i,t.call(i.exports,i,i.exports),i.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},t.parcelRequire6c34=i),(0,i.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>r,set:e=>r=e,enumerable:!0,configurable:!0});var r,n=new Map;r=function(e,t){for(var r=0;r<t.length-1;r+=2)n.set(t[r],{baseUrl:e,path:t[r+1]})}}),i("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["f9fpV","index.1dbc6b85.js","eyyUD","icons.c14567a0.svg"]'));const s="https://forkify-api.herokuapp.com/api/v2/recipes/",a="edbbb776-b5a2-4bee-a023-ded968c44974",o=async function(e,t){try{t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e);let r=await Promise.race([fetch(e),new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 seconds"))},1e4)})]),n=await r.json();if(!r.ok)throw Error(`${n.message} (${r.status})`);return n}catch(e){throw e}},c={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},l=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},d=async function(e){try{let t=await o(`${s}${e}?Key=${a}`);c.recipe=l(t),c.bookmarks.some(t=>t.id===e)?c.recipe.bookmarked=!0:c.recipe.bookmarked=!1}catch(e){throw console.error(`Error loading recipe: ${e.message}`),e}},u=async function(e){try{c.search.query=e;let t=await o(`${s}?search=${e}&Key=${a}`);c.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),c.search.page=1}catch(e){throw console.error(`Error loading search results: ${e.message}`),e}},p=function(e=c.search.page){c.search.page=e;let t=(e-1)*c.search.resultsPerPage,r=e*c.search.resultsPerPage;return c.search.results.slice(t,r)},g=function(e){c.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/c.recipe.servings}),c.recipe.servings=e},h=function(){localStorage.setItem("bookmarks",JSON.stringify(c.bookmarks))},_=function(e){c.bookmarks.push(e),e.id===c.recipe.id&&(c.recipe.bookmarked=!0),h()},f=function(e){let t=c.bookmarks.findIndex(t=>t.id===e);c.bookmarks.splice(t,1),e===c.recipe.id&&(c.recipe.bookmarked=!1),h()};!function(){let e=localStorage.getItem("bookmarks");e&&(c.bookmarks=JSON.parse(e))}();const v=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Wrong ingredient format! Please use the correct format :)");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await o(`${s}?Key=${a}`,r);c.recipe=l(n),_(c.recipe)}catch(e){throw console.error(e.message),e}};var m={};m=new URL("icons.c14567a0.svg",import.meta.url).toString();var b={};function k(e,t,r,n,i){var s,a,o;let c=[2,3,5];if(!0===i)for(let t=3;t*t<=e;t+=2)e%t==0&&c.push(t);let l=0,d=e,u=t;for(;l<=c.length;)d%c[l]==0&&u%c[l]==0?(c[l],d/=c[l],u/=c[l]):l++;return s=u,a=d,o=r,1===s&&1===a?(o=`${n}${(parseInt(o)+1).toString()}`,`${o}`):0===a?`${n}${o}`:"0"==o?`${n}${a}/${s}`:`${n}${o} ${a}/${s}`}b=function(e){let t,r;if(e<0?(e=Math.abs(e),t="-"):t="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${t}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${t}${e}`;if(e<1e-6)return"0";let n=e.toString(),i=n.split("."),s=i[0];if("0"==r&&"0"!==s)return s;if("0"==r&&"0"==s)return"0";if("99"==(r=n.length>=17?i[1].slice(0,i[1].length-1):i[1])&&"0"!==s)return`${s} 99/100`;if("99"==r&&"0"==s)return"99/100";if(1-parseFloat(`.${r}`)<.0011&&(r="999"),void 0==r)return s;let a=r.split("").reverse().join("").match(/^(\d+)\1{1,2}/);if(!a||!(r.length>2)){var o,c;return o=r,c=t,k(parseInt(o,10),Math.pow(10,o.length),s,c,!1)}{let e=a[0].split("").reverse().join(""),n=a[1].split("").reverse().join("");if(n.length>1){let e=n.split(""),t=1;for(let r=0;r<e.length;r++)t/=e[0]/e[r];1===t&&(n=e[0])}return n.length>1&&n.length%2==0&&(n=parseInt(n.slice(0,n.length/2),10)-parseInt(n.slice(n.length/2,n.length),10)==0?n.slice(0,n.length/2):n),function(e,t,r,n,i){let s=e.length-r.length>=1?e.length-r.length:1,a=Math.pow(10,s),o=parseFloat(`0.${e}`),c=Math.pow(10,t.length);return k(Math.round((o*c-o)*Math.pow(10,s)),(c-1)*a,n,i,!0)}(r,n,e,s,t)}};class y{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()==""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>{r.setAttribute(e.name,e.value)})})}_clear(){this._parentElement.innerHTML=""}renderSpinner=function(){let t=`<div class="spinner">
      <svg>
        <use href="${e(m)}#icon-loader"></use>
      </svg>
    </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)};renderError(t=this._errorMsg){let r=`<div class="error">
            <div>
              <svg>
                <use href="${e(m)}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${t}</p>
          </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}renderMessage(t=this._message){let r=`<div class="message">
            <div>
              <svg>
                <use href="${e(m)}#icon-smile"></use>
              </svg>
            </div>
            <p>${t}</p>
          </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}}class w extends y{_parentElement=document.querySelector(".recipe");_errorMsg="We could not find the recipe. Please try another one!";_message="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let{updateTo:n}=r.dataset;+n>0&&e(+n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){t.target.closest(".btn--bookmark")&&e()})}_generateMarkup(){return`
      <figure class="recipe__fig">
        <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${this._data.title}</span>
        </h1>
      </figure>

      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${e(m)}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${e(m)}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
          <span class="recipe__info-text">servings</span>

          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
              <svg>
                <use href="${e(m)}#icon-minus-circle"></use>
              </svg>
            </button>
            <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
              <svg>
                <use href="${e(m)}#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>

        <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
          <svg>
            <use href="${e(m)}#icon-user"></use>
          </svg>
        </div>
        <button class="btn--round btn--bookmark">
          <svg class="">
            <use href="${e(m)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
          </svg>
        </button>
      </div>

      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
          ${this._data.ingredients.map(this._generateMarkupIng).join("")}
        </ul>
      </div>

      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${this._data.publisher}</span>. Please check out directions at their website.
        </p>
        <a class="btn--small recipe__btn" href="${this._data.sourceUrl}" target="_blank">
          <span>Directions</span>
          <svg class="search__icon">
            <use href="${e(m)}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>
    `}_generateMarkupIng(t){return`
      <li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${e(m)}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${t.quantity?new(e(b))(t.quantity).toString():""}</div>
        <div class="recipe__description">
          <span class="recipe__unit">${t.unit}</span>
          ${t.description}
        </div>
      </li>
    `}}var $=new w;class E{_parentEl=document.querySelector(".search");getQuery(){let e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",t=>{t.preventDefault(),e()})}}var S=new E,H=new class extends y{_parentElement="";_generateMarkup(){let t=window.location.hash.slice(1);return`
      <li class="preview">
        <a class="preview__link ${this._data.id===t?"preview__link--active":""}" href="#${this._data.id}">
          <figure class="preview__fig">
            <img src="${this._data.image}" alt="${this._data.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${this._data.title}</h4>
            <p class="preview__publisher">${this._data.publisher}</p>
            <div class="preview__user-generated ${this._data.key?"":"hidden"}">
            <svg>
            <use href="${e(m)}#icon-user"></use>
            </svg>
            </div>
        </div>
        </a>
      </li>
    `}};class M extends y{_parentElement=document.querySelector(".results");_errorMsg="No Recipes found for your Query. Please try Again!";_message="";_generateMarkup(){return this._data.map(e=>H.render(e,!1)).join("")}}var q=new M;class x extends y{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goto)})}_generateMarkup(){let t=this._data.page,r=Math.ceil(this._data.results.length/this._data.resultsPerPage);return(console.log(r),1===t&&r>1)?`<button data-goto="${t+1}"class="btn--inline pagination__btn--next">
            <span>Page ${t+1}</span>
            <svg class="search__icon">
              <use href="${e(m)}#icon-arrow-right"></use>
            </svg>
          </button>`:t===r&&r>1?` <button data-goto="${t-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${e(m)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${t-1}</span>
          </button>
           `:this._data.page<r?`<button data-goto="${t-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${e(m)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${t-1}</span>
          </button>
          <button data-goto="${t+1}"class="btn--inline pagination__btn--next">
            <span>Page ${t+1}</span>
            <svg class="search__icon">
              <use href="${e(m)}#icon-arrow-right"></use>
            </svg>
          </button>`:""}}var L=new x;class P extends y{_parentElement=document.querySelector(".bookmarks__list");_errorMsg="No bookmarks yet.Find a nice recipe and bookmark it :)";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>H.render(e,!1)).join("")}}new P;class A extends y{_parentElement=document.querySelector(".upload");_message="Recipe was successfully uploaded";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault();let r=Object.fromEntries([...new FormData(this)]);e(r),console.log(r)})}_generateMarkup(){}}var T=new A;const j=async function(){try{let e=window.location.hash.slice(1);if(!e)return;$.renderSpinner(),q.update(p()),bookmarksView.update(c.bookmarks),await d(e),$.render(c.recipe)}catch(e){console.error("Error loading recipe:",e),$.renderError()}},R=async function(){try{q.renderSpinner();let e=S.getQuery();if(!e)return;await u(e),0===c.search.results.length?q.renderError():(q.render(p()),L.render(c.search))}catch(e){console.error("Error loading search results:",e),q.renderError()}},I=async function(e){try{T.renderSpinner(),await v(e),$.render(c.recipe),T.renderMessage(),setTimeout(function(){T.toggleWindow()},2500)}catch(e){console.error("Error adding recipe:",e),T.renderError(e.message)}};bookmarksView.addHandlerRender(function(){bookmarksView.render(c.bookmarks)}),$.addHandlerRender(j),$.addHandlerUpdateServings(function(e){g(e),$.update(c.recipe)}),$.addHandlerAddBookmark(function(){c.recipe.bookmarked?f(c.recipe.id):_(c.recipe),$.update(c.recipe),bookmarksView.render(c.bookmarks)}),S.addHandlerSearch(R),L.addHandlerClick(function(e){q.render(p(e)),L.render(c.search)}),T.addHandlerUpload(I);
//# sourceMappingURL=index.1dbc6b85.js.map
