var e,t,r,n,i,o,a,s,c,u,l,d,p,f,h,g,v=globalThis;function y(e){return e&&e.__esModule?e.default:e}var m={},b={},_=function(e){return e&&e.Math===Math&&e};b=_("object"==typeof globalThis&&globalThis)||_("object"==typeof window&&window)||_("object"==typeof self&&self)||_("object"==typeof v&&v)||_("object"==typeof b&&b)||function(){return this}()||Function("return this")();var w={},k={};w=!(k=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var E={},S={};S=!k(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var $=Function.prototype.call;E=S?$.bind($):function(){return $.apply($,arguments)};var j={}.propertyIsEnumerable,O=Object.getOwnPropertyDescriptor;n=O&&!j.call({1:2},1)?function(e){var t=O(this,e);return!!t&&t.enumerable}:j;var L={};L=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var P={},x={},M={},T=Function.prototype,H=T.call,q=S&&T.bind.bind(H,H),I={},F=(M=S?q:function(e){return function(){return H.apply(e,arguments)}})({}.toString),A=M("".slice);I=function(e){return A(F(e),8,-1)};var C=Object,N=M("".split);x=k(function(){return!C("z").propertyIsEnumerable(0)})?function(e){return"String"===I(e)?N(e,""):C(e)}:C;var R={},W={};W=function(e){return null==e};var D=TypeError;R=function(e){if(W(e))throw new D("Can't call method on "+e);return e},P=function(e){return x(R(e))};var G={},U={},z={},B={},K="object"==typeof document&&document.all;B=void 0===K&&void 0!==K?function(e){return"function"==typeof e||e===K}:function(e){return"function"==typeof e},z=function(e){return"object"==typeof e?null!==e:B(e)};var J={},Q={};Q=function(e,t){var r;return arguments.length<2?(r=b[e],B(r)?r:void 0):b[e]&&b[e][t]};var Y={};Y=M({}.isPrototypeOf);var V={},X={},Z={},ee={};ee="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var et=b.process,er=b.Deno,en=et&&et.versions||er&&er.version,ei=en&&en.v8;ei&&(o=(i=ei.split("."))[0]>0&&i[0]<4?1:+(i[0]+i[1])),!o&&ee&&(!(i=ee.match(/Edge\/(\d+)/))||i[1]>=74)&&(i=ee.match(/Chrome\/(\d+)/))&&(o=+i[1]),Z=o;var eo=b.String;V=(X=!!Object.getOwnPropertySymbols&&!k(function(){var e=Symbol("symbol detection");return!eo(e)||!(Object(e) instanceof Symbol)||!Symbol.sham&&Z&&Z<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ea=Object;J=V?function(e){return"symbol"==typeof e}:function(e){var t=Q("Symbol");return B(t)&&Y(t.prototype,ea(e))};var es={},ec={},eu={},el=String;eu=function(e){try{return el(e)}catch(e){return"Object"}};var ed=TypeError;ec=function(e){if(B(e))return e;throw new ed(eu(e)+" is not a function")},es=function(e,t){var r=e[t];return W(r)?void 0:ec(r)};var ep={},ef=TypeError;ep=function(e,t){var r,n;if("string"===t&&B(r=e.toString)&&!z(n=E(r,e))||B(r=e.valueOf)&&!z(n=E(r,e))||"string"!==t&&B(r=e.toString)&&!z(n=E(r,e)))return n;throw new ef("Can't convert object to primitive value")};var eh={},eg={},ev={};ev=!1;var ey={},em=Object.defineProperty;ey=function(e,t){try{em(b,e,{value:t,configurable:!0,writable:!0})}catch(r){b[e]=t}return t};var eb="__core-js_shared__",e_=eg=b[eb]||ey(eb,{});(e_.versions||(e_.versions=[])).push({version:"3.37.1",mode:ev?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.37.1/LICENSE",source:"https://github.com/zloirock/core-js"}),eh=function(e,t){return eg[e]||(eg[e]=t||{})};var ew={},ek={},eE=Object;ek=function(e){return eE(R(e))};var eS=M({}.hasOwnProperty);ew=Object.hasOwn||function(e,t){return eS(ek(e),t)};var e$={},ej=0,eO=Math.random(),eL=M(1..toString);e$=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eL(++ej+eO,36)};var eP=b.Symbol,ex=eh("wks"),eM=V?eP.for||eP:eP&&eP.withoutSetter||e$,eT=TypeError,eH=(ew(ex,e="toPrimitive")||(ex[e]=X&&ew(eP,e)?eP[e]:eM("Symbol."+e)),ex[e]);U=function(e,t){if(!z(e)||J(e))return e;var r,n=es(e,eH);if(n){if(void 0===t&&(t="default"),r=E(n,e,t),!z(r)||J(r))return r;throw new eT("Can't convert object to primitive value")}return void 0===t&&(t="number"),ep(e,t)},G=function(e){var t=U(e,"string");return J(t)?t:t+""};var eq={},eI={},eF=b.document,eA=z(eF)&&z(eF.createElement);eI=function(e){return eA?eF.createElement(e):{}},eq=!w&&!k(function(){return 7!==Object.defineProperty(eI("div"),"a",{get:function(){return 7}}).a});var eC=Object.getOwnPropertyDescriptor;r=w?eC:function(e,t){if(e=P(e),t=G(t),eq)try{return eC(e,t)}catch(e){}if(ew(e,t))return L(!E(n,e,t),e[t])};var eN={},eR={};eR=w&&k(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eW={},eD=String,eG=TypeError;eW=function(e){if(z(e))return e;throw new eG(eD(e)+" is not an object")};var eU=TypeError,ez=Object.defineProperty,eB=Object.getOwnPropertyDescriptor,eK="enumerable",eJ="configurable",eQ="writable";a=w?eR?function(e,t,r){if(eW(e),t=G(t),eW(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eQ in r&&!r[eQ]){var n=eB(e,t);n&&n[eQ]&&(e[t]=r.value,r={configurable:eJ in r?r[eJ]:n[eJ],enumerable:eK in r?r[eK]:n[eK],writable:!1})}return ez(e,t,r)}:ez:function(e,t,r){if(eW(e),t=G(t),eW(r),eq)try{return ez(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eU("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eN=w?function(e,t,r){return a(e,t,L(1,r))}:function(e,t,r){return e[t]=r,e};var eY={},eV={},eX=Function.prototype,eZ=w&&Object.getOwnPropertyDescriptor,e0=ew(eX,"name")&&(!w||w&&eZ(eX,"name").configurable),e1={},e2=M(Function.toString);B(eg.inspectSource)||(eg.inspectSource=function(e){return e2(e)}),e1=eg.inspectSource;var e4={},e7={},e3=b.WeakMap;e7=B(e3)&&/native code/.test(String(e3));var e9={},e8=eh("keys");e9=function(e){return e8[e]||(e8[e]=e$(e))};var e5={};e5={};var e6="Object already initialized",te=b.TypeError,tt=b.WeakMap;if(e7||eg.state){var tr=eg.state||(eg.state=new tt);tr.get=tr.get,tr.has=tr.has,tr.set=tr.set,s=function(e,t){if(tr.has(e))throw new te(e6);return t.facade=e,tr.set(e,t),t},c=function(e){return tr.get(e)||{}},u=function(e){return tr.has(e)}}else{var tn=e9("state");e5[tn]=!0,s=function(e,t){if(ew(e,tn))throw new te(e6);return t.facade=e,eN(e,tn,t),t},c=function(e){return ew(e,tn)?e[tn]:{}},u=function(e){return ew(e,tn)}}var ti=(e4={set:s,get:c,has:u,enforce:function(e){return u(e)?c(e):s(e,{})},getterFor:function(e){return function(t){var r;if(!z(t)||(r=c(t)).type!==e)throw new te("Incompatible receiver, "+e+" required");return r}}}).enforce,to=e4.get,ta=String,ts=Object.defineProperty,tc=M("".slice),tu=M("".replace),tl=M([].join),td=w&&!k(function(){return 8!==ts(function(){},"length",{value:8}).length}),tp=String(String).split("String"),tf=eV=function(e,t,r){"Symbol("===tc(ta(t),0,7)&&(t="["+tu(ta(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!ew(e,"name")||e0&&e.name!==t)&&(w?ts(e,"name",{value:t,configurable:!0}):e.name=t),td&&r&&ew(r,"arity")&&e.length!==r.arity&&ts(e,"length",{value:r.arity});try{r&&ew(r,"constructor")&&r.constructor?w&&ts(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=ti(e);return ew(n,"source")||(n.source=tl(tp,"string"==typeof t?t:"")),e};Function.prototype.toString=tf(function(){return B(this)&&to(this).source||e1(this)},"toString"),eY=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(B(r)&&eV(r,o,n),n.global)i?e[t]=r:ey(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:a(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var th={},tg={},tv={},ty={},tm={},tb={},t_=Math.ceil,tw=Math.floor;tb=Math.trunc||function(e){var t=+e;return(t>0?tw:t_)(t)},tm=function(e){var t=+e;return t!=t||0===t?0:tb(t)};var tk=Math.max,tE=Math.min;ty=function(e,t){var r=tm(e);return r<0?tk(r+t,0):tE(r,t)};var tS={},t$={},tj=Math.min;t$=function(e){var t=tm(e);return t>0?tj(t,9007199254740991):0},tS=function(e){return t$(e.length)};var tO=function(e){return function(t,r,n){var i,o=P(t),a=tS(o);if(0===a)return!e&&-1;var s=ty(n,a);if(e&&r!=r){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},tL={includes:tO(!0),indexOf:tO(!1)}.indexOf,tP=M([].push);tv=function(e,t){var r,n=P(e),i=0,o=[];for(r in n)!ew(e5,r)&&ew(n,r)&&tP(o,r);for(;t.length>i;)ew(n,r=t[i++])&&(~tL(o,r)||tP(o,r));return o};var tx=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");l=Object.getOwnPropertyNames||function(e){return tv(e,tx)},d=Object.getOwnPropertySymbols;var tM=M([].concat);tg=Q("Reflect","ownKeys")||function(e){var t=l(eW(e));return d?tM(t,d(e)):t},th=function(e,t,n){for(var i=tg(t),o=0;o<i.length;o++){var s=i[o];ew(e,s)||n&&ew(n,s)||a(e,s,r(t,s))}};var tT={},tH=/#|\.prototype\./,tq=function(e,t){var r=tF[tI(e)];return r===tC||r!==tA&&(B(t)?k(t):!!t)},tI=tq.normalize=function(e){return String(e).replace(tH,".").toLowerCase()},tF=tq.data={},tA=tq.NATIVE="N",tC=tq.POLYFILL="P";tT=tq,m=function(e,t){var n,i,o,a,s,c=e.target,u=e.global,l=e.stat;if(n=u?b:l?b[c]||ey(c,{}):b[c]&&b[c].prototype)for(i in t){if(a=t[i],o=e.dontCallGetSet?(s=r(n,i))&&s.value:n[i],!tT(u?i:c+(l?".":"#")+i,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;th(a,o)}(e.sham||o&&o.sham)&&eN(a,"sham",!0),eY(n,i,a,e)}};var tN={},tR={},tW=Function.prototype,tD=tW.apply,tG=tW.call;tR="object"==typeof Reflect&&Reflect.apply||(S?tG.bind(tD):function(){return tG.apply(tD,arguments)});var tU={},tz={},tB=(tz=function(e){if("Function"===I(e))return M(e)})(tz.bind);tU=function(e,t){return ec(e),void 0===t?e:S?tB(e,t):function(){return e.apply(t,arguments)}};var tK={};tK=Q("document","documentElement");var tJ={};tJ=M([].slice);var tQ={},tY=TypeError;tQ=function(e,t){if(e<t)throw new tY("Not enough arguments");return e};var tV={};tV=/(?:ipad|iphone|ipod).*applewebkit/i.test(ee);var tX={};tX="process"===I(b.process);var tZ=b.setImmediate,t0=b.clearImmediate,t1=b.process,t2=b.Dispatch,t4=b.Function,t7=b.MessageChannel,t3=b.String,t9=0,t8={},t5="onreadystatechange";k(function(){p=b.location});var t6=function(e){if(ew(t8,e)){var t=t8[e];delete t8[e],t()}},re=function(e){return function(){t6(e)}},rt=function(e){t6(e.data)},rr=function(e){b.postMessage(t3(e),p.protocol+"//"+p.host)};tZ&&t0||(tZ=function(e){tQ(arguments.length,1);var t=B(e)?e:t4(e),r=tJ(arguments,1);return t8[++t9]=function(){tR(t,void 0,r)},f(t9),t9},t0=function(e){delete t8[e]},tX?f=function(e){t1.nextTick(re(e))}:t2&&t2.now?f=function(e){t2.now(re(e))}:t7&&!tV?(g=(h=new t7).port2,h.port1.onmessage=rt,f=tU(g.postMessage,g)):b.addEventListener&&B(b.postMessage)&&!b.importScripts&&p&&"file:"!==p.protocol&&!k(rr)?(f=rr,b.addEventListener("message",rt,!1)):f=t5 in eI("script")?function(e){tK.appendChild(eI("script"))[t5]=function(){tK.removeChild(this),t6(e)}}:function(e){setTimeout(re(e),0)});var rn=(tN={set:tZ,clear:t0}).clear;m({global:!0,bind:!0,enumerable:!0,forced:b.clearImmediate!==rn},{clearImmediate:rn});var ri=tN.set,ro={},ra={};ra="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rs=b.Function,rc=/MSIE .\./.test(ee)||ra&&((t=b.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));ro=function(e,t){var r=t?2:1;return rc?function(n,i){var o=tQ(arguments.length,1)>r,a=B(n)?n:rs(n),s=o?tJ(arguments,r):[],c=o?function(){tR(a,this,s)}:a;return t?e(c,i):e(c)}:e};var ru=b.setImmediate?ro(ri,!1):ri;m({global:!0,bind:!0,enumerable:!0,forced:b.setImmediate!==ru},{setImmediate:ru});const rl="https://forkify-api.herokuapp.com/api/v2/recipes/",rd="edbbb776-b5a2-4bee-a023-ded968c44974",rp=async function(e,t){try{t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e);let r=await Promise.race([fetch(e),new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 seconds"))},1e4)})]),n=await r.json();if(!r.ok)throw Error(`${n.message} (${r.status})`);return n}catch(e){throw e}},rf={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},rh=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},rg=async function(e){try{let t=await rp(`${rl}${e}?Key=${rd}`);rf.recipe=rh(t),rf.bookmarks.some(t=>t.id===e)?rf.recipe.bookmarked=!0:rf.recipe.bookmarked=!1}catch(e){throw console.error(`Error loading recipe: ${e.message}`),e}},rv=async function(e){try{rf.search.query=e;let t=await rp(`${rl}?search=${e}&Key=${rd}`);rf.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),rf.search.page=1}catch(e){throw console.error(`Error loading search results: ${e.message}`),e}},ry=function(e=rf.search.page){rf.search.page=e;let t=(e-1)*rf.search.resultsPerPage,r=e*rf.search.resultsPerPage;return rf.search.results.slice(t,r)},rm=function(e){rf.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/rf.recipe.servings}),rf.recipe.servings=e},rb=function(){localStorage.setItem("bookmarks",JSON.stringify(rf.bookmarks))},r_=function(e){rf.bookmarks.push(e),e.id===rf.recipe.id&&(rf.recipe.bookmarked=!0),rb()},rw=function(e){let t=rf.bookmarks.findIndex(t=>t.id===e);rf.bookmarks.splice(t,1),e===rf.recipe.id&&(rf.recipe.bookmarked=!1),rb()};!function(){let e=localStorage.getItem("bookmarks");e&&(rf.bookmarks=JSON.parse(e))}();const rk=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Wrong ingredient format! Please use the correct format :)");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await rp(`${rl}?Key=${rd}`,r);rf.recipe=rh(n),r_(rf.recipe)}catch(e){throw console.error(e.message),e}};var rE={};rE=new URL("icons.c14567a0.svg",import.meta.url).toString();class rS{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()==""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>{r.setAttribute(e.name,e.value)})})}_clear(){this._parentElement.innerHTML=""}renderSpinner=function(){let e=`<div class="spinner">
      <svg>
        <use href="${y(rE)}#icon-loader"></use>
      </svg>
    </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)};renderError(e=this._errorMsg){let t=`<div class="error">
            <div>
              <svg>
                <use href="${y(rE)}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${e}</p>
          </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`<div class="message">
            <div>
              <svg>
                <use href="${y(rE)}#icon-smile"></use>
              </svg>
            </div>
            <p>${e}</p>
          </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}class r$ extends rS{_parentElement=document.querySelector(".recipe");_errorMsg="We could not find the recipe. Please try another one!";_message="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let{updateTo:n}=r.dataset;+n>0&&e(+n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){t.target.closest(".btn--bookmark")&&e()})}_generateMarkup(){return`
      <figure class="recipe__fig">
        <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${this._data.title}</span>
        </h1>
      </figure>

      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${y(rE)}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${y(rE)}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
          <span class="recipe__info-text">servings</span>

          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
              <svg>
                <use href="${y(rE)}#icon-minus-circle"></use>
              </svg>
            </button>
            <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
              <svg>
                <use href="${y(rE)}#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>

        <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
          <svg>
            <use href="${y(rE)}#icon-user"></use>
          </svg>
        </div>
        <button class="btn--round btn--bookmark">
          <svg class="">
            <use href="${y(rE)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
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
        <a
          class="btn--small recipe__btn"
          href="${this._data.sourceUrl}"
          target="_blank"
        >
          <span>Directions</span>
          <svg class="search__icon">
            <use href="${y(rE)}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>
    `}_generateMarkupIng(e){return`
      <li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${y(rE)}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${e.quantity?new Fraction(e.quantity).toString():""}</div>
        <div class="recipe__description">
          <span class="recipe__unit">${e.unit}</span>
          ${e.description}
        </div>
      </li>
    `}}var rj=new r$;class rO{_parentEl=document.querySelector(".search");getQuery(){let e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",t=>{t.preventDefault(),e()})}}var rL=new rO,rP=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,s,c=Object.create((r&&r.prototype instanceof v?r:v).prototype);return i(c,"_invoke",{value:(a=new O(o||[]),s=p,function(r,i){if(s===f)throw Error("Generator is already running");if(s===h){if("throw"===r)throw i;return{value:t,done:!0}}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var c=function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),g;var a=d(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var s=a.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(o,a);if(c){if(c===g)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===p)throw s=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=f;var u=d(e,n,a);if("normal"===u.type){if(s=a.done?h:"suspendedYield",u.arg===g)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(s=h,a.method="throw",a.arg=u.arg)}})}),c}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",f="executing",h="completed",g={};function v(){}function y(){}function m(){}var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(L([])));w&&w!==r&&n.call(w,a)&&(b=w);var k=m.prototype=v.prototype=Object.create(b);function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){var c=d(e[i],e,o);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){u.value=e,a(u)},function(e){return r("throw",e,a,s)})}}(i,o,r,a)})}return r=r?r.then(a,a):a()}})}function $(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach($,this),this.reset(!0)}function L(e){if(null!=e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return y.prototype=m,i(k,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:y,configurable:!0}),y.displayName=u(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new S(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},E(k),u(k,c,"Generator"),u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=L,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;j(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:L(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=rP}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rP:Function("r","regeneratorRuntime = r")(rP)}var rx=new class extends rS{_parentElement="";_generateMarkup(){let e=window.location.hash.slice(1);return`
      <li class="preview">
        <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">
          <figure class="preview__fig">
            <img src="${this._data.image}" alt="${this._data.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${this._data.title}</h4>
            <p class="preview__publisher">${this._data.publisher}</p>
            <div class="preview__user-generated ${this._data.key?"":"hidden"}">
            <svg>
            <use href="${y(rE)}#icon-user"></use>
            </svg>
            </div>
        </div>
        </a>
      </li>
    `}};class rM extends rS{_parentElement=document.querySelector(".results");_errorMsg="No Recipes found for your Query. Please try Again!";_message="";_generateMarkup(){return this._data.map(e=>rx.render(e,!1)).join("")}}var rT=new rM;class rH extends rS{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goto)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return(console.log(t),1===e&&t>1)?`<button data-goto="${e+1}"class="btn--inline pagination__btn--next">
            <span>Page ${e+1}</span>
            <svg class="search__icon">
              <use href="${y(rE)}#icon-arrow-right"></use>
            </svg>
          </button>`:e===t&&t>1?` <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${y(rE)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${e-1}</span>
          </button>
           `:this._data.page<t?`<button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${y(rE)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${e-1}</span>
          </button>
          <button data-goto="${e+1}"class="btn--inline pagination__btn--next">
            <span>Page ${e+1}</span>
            <svg class="search__icon">
              <use href="${y(rE)}#icon-arrow-right"></use>
            </svg>
          </button>`:""}}var rq=new rH;class rI extends rS{_parentElement=document.querySelector(".bookmarks__list");_errorMsg="No bookmarks yet.Find a nice recipe and bookmark it :)";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>rx.render(e,!1)).join("")}}var rF=new rI;class rA extends rS{_parentElement=document.querySelector(".upload");_message="Recipe was successfully uploaded";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault();let r=Object.fromEntries([...new FormData(this)]);e(r),console.log(r)})}_generateMarkup(){}}var rC=new rA;const rN=async function(){try{let e=window.location.hash.slice(1);if(!e)return;rj.renderSpinner(),rT.update(ry()),rF.update(rf.bookmarks),await rg(e),rj.render(rf.recipe)}catch(e){rj.renderError()}},rR=async function(){try{rT.renderSpinner();let e=rL.getQuery();if(!e)return;await rv(e),0===rf.search.results.length?rT.renderError():(rT.render(ry()),rq.render(rf.search))}catch(e){rT.renderError()}},rW=async function(e){try{rC.renderSpinner(),await rk(e),rj.render(rf.recipe),rC.renderMessage(),rF.render(rf.bookmarks),window.history.pushState(null,"",`#${rf.recipe.id}`),setTimeout(function(){rC.toggleWindow()},2500)}catch(e){rC.renderError(e.message)}};rF.addHandlerRender(function(){rF.render(rf.bookmarks)}),rj.addHandlerRender(rN),rj.addHandlerUpdateServings(function(e){rm(e),rj.update(rf.recipe)}),rj.addHandlerAddBookmark(function(){rf.recipe.bookmarked?rw(rf.recipe.id):r_(rf.recipe),rj.update(rf.recipe),rF.render(rf.bookmarks)}),rL.addHandlerSearch(rR),rq.addHandlerClick(function(e){rT.render(ry(e)),rq.render(rf.search)}),rC.addHandlerUpload(rW);
//# sourceMappingURL=index.b5778abd.js.map
