(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const Ye=(e,t)=>e===t,ee=Symbol("solid-proxy"),Ze=Symbol("solid-track"),te={equals:Ye};let Re=Be;const D=1,ne=2,Te={owned:null,cleanups:null,context:null,owner:null};var p=null;let ue=null,m=null,P=null,N=null,ie=0;function V(e,t){const n=m,r=p,s=e.length===0,i=s?Te:{owned:null,cleanups:null,context:null,owner:t===void 0?r:t},o=s?e:()=>e(()=>_(()=>oe(i)));p=i,m=null;try{return B(o,!0)}finally{m=n,p=r}}function k(e,t){t=t?Object.assign({},te,t):te;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=s=>(typeof s=="function"&&(s=s(n.value)),Ie(n,s));return[De.bind(n),r]}function R(e,t,n){const r=ve(e,t,!1,D);X(r)}function et(e,t,n){Re=ot;const r=ve(e,t,!1,D);(!n||!n.render)&&(r.user=!0),N?N.push(r):X(r)}function A(e,t,n){n=n?Object.assign({},te,n):te;const r=ve(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,X(r),De.bind(r)}function _(e){if(m===null)return e();const t=m;m=null;try{return e()}finally{m=t}}function je(e,t,n){const r=Array.isArray(e);let s,i=n&&n.defer;return o=>{let l;if(r){l=Array(e.length);for(let f=0;f<e.length;f++)l[f]=e[f]()}else l=e();if(i){i=!1;return}const u=_(()=>t(l,s,o));return s=l,u}}function we(e){return p===null||(p.cleanups===null?p.cleanups=[e]:p.cleanups.push(e)),e}function tt(){return p}function nt(e,t){const n=p,r=m;p=e,m=null;try{return B(t,!0)}catch(s){Pe(s)}finally{p=n,m=r}}function rt(e){const t=m,n=p;return Promise.resolve().then(()=>{m=t,p=n;let r;return B(e,!1),m=p=null,r?r.done:void 0})}function ke(e,t){const n=Symbol("context");return{id:n,Provider:lt(n),defaultValue:e}}function be(e){let t;return(t=Ke(p,e.id))!==void 0?t:e.defaultValue}function Ae(e){const t=A(e),n=A(()=>he(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}function De(){if(this.sources&&this.state)if(this.state===D)X(this);else{const e=P;P=null,B(()=>se(this),!1),P=e}if(m){const e=this.observers?this.observers.length:0;m.sources?(m.sources.push(this),m.sourceSlots.push(e)):(m.sources=[this],m.sourceSlots=[e]),this.observers?(this.observers.push(m),this.observerSlots.push(m.sources.length-1)):(this.observers=[m],this.observerSlots=[m.sources.length-1])}return this.value}function Ie(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&B(()=>{for(let s=0;s<e.observers.length;s+=1){const i=e.observers[s],o=ue&&ue.running;o&&ue.disposed.has(i),(o?!i.tState:!i.state)&&(i.pure?P.push(i):N.push(i),i.observers&&Me(i)),o||(i.state=D)}if(P.length>1e6)throw P=[],new Error},!1)),t}function X(e){if(!e.fn)return;oe(e);const t=p,n=m,r=ie;m=p=e,st(e,e.value,r),m=n,p=t}function st(e,t,n){let r;try{r=e.fn(t)}catch(s){return e.pure&&(e.state=D,e.owned&&e.owned.forEach(oe),e.owned=null),e.updatedAt=n+1,Pe(s)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Ie(e,r):e.value=r,e.updatedAt=n)}function ve(e,t,n,r=D,s){const i={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:p,context:null,pure:n};return p===null||p!==Te&&(p.owned?p.owned.push(i):p.owned=[i]),i}function re(e){if(e.state===0)return;if(e.state===ne)return se(e);if(e.suspense&&_(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<ie);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===D)X(e);else if(e.state===ne){const r=P;P=null,B(()=>se(e,t[0]),!1),P=r}}function B(e,t){if(P)return e();let n=!1;t||(P=[]),N?n=!0:N=[],ie++;try{const r=e();return it(n),r}catch(r){n||(N=null),P=null,Pe(r)}}function it(e){if(P&&(Be(P),P=null),e)return;const t=N;N=null,t.length&&B(()=>Re(t),!1)}function Be(e){for(let t=0;t<e.length;t++)re(e[t])}function ot(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:re(r)}for(t=0;t<n;t++)re(e[t])}function se(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const r=e.sources[n];if(r.sources){const s=r.state;s===D?r!==t&&(!r.updatedAt||r.updatedAt<ie)&&re(r):s===ne&&se(r,t)}}}function Me(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=ne,n.pure?P.push(n):N.push(n),n.observers&&Me(n))}}function oe(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const i=s.pop(),o=n.observerSlots.pop();r<s.length&&(i.sourceSlots[o]=r,s[r]=i,n.observerSlots[r]=o)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)oe(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function Pe(e){throw e}function Ke(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:Ke(e.owner,t):void 0}function he(e){if(typeof e=="function"&&!e.length)return he(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=he(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function lt(e,t){return function(r){let s;return R(()=>s=_(()=>(p.context={[e]:r.value},Ae(()=>r.children))),void 0),s}}const ct=Symbol("fallback");function $e(e){for(let t=0;t<e.length;t++)e[t]()}function ut(e,t,n={}){let r=[],s=[],i=[],o=0,l=t.length>1?[]:null;return we(()=>$e(i)),()=>{let u=e()||[],f,c;return u[Ze],_(()=>{let a=u.length,g,b,d,L,O,S,x,$,E;if(a===0)o!==0&&($e(i),i=[],r=[],s=[],o=0,l&&(l=[])),n.fallback&&(r=[ct],s[0]=V(G=>(i[0]=G,n.fallback())),o=1);else if(o===0){for(s=new Array(a),c=0;c<a;c++)r[c]=u[c],s[c]=V(h);o=a}else{for(d=new Array(a),L=new Array(a),l&&(O=new Array(a)),S=0,x=Math.min(o,a);S<x&&r[S]===u[S];S++);for(x=o-1,$=a-1;x>=S&&$>=S&&r[x]===u[$];x--,$--)d[$]=s[x],L[$]=i[x],l&&(O[$]=l[x]);for(g=new Map,b=new Array($+1),c=$;c>=S;c--)E=u[c],f=g.get(E),b[c]=f===void 0?-1:f,g.set(E,c);for(f=S;f<=x;f++)E=r[f],c=g.get(E),c!==void 0&&c!==-1?(d[c]=s[f],L[c]=i[f],l&&(O[c]=l[f]),c=b[c],g.set(E,c)):i[f]();for(c=S;c<a;c++)c in d?(s[c]=d[c],i[c]=L[c],l&&(l[c]=O[c],l[c](c))):s[c]=V(h);s=s.slice(0,o=a),r=u.slice(0)}return s});function h(a){if(i[c]=a,l){const[g,b]=k(c);return l[c]=b,t(u[c],g)}return t(u[c])}}}function C(e,t){return _(()=>e(t||{}))}function Q(){return!0}const de={get(e,t,n){return t===ee?n:e.get(t)},has(e,t){return t===ee?!0:e.has(t)},set:Q,deleteProperty:Q,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:Q,deleteProperty:Q}},ownKeys(e){return e.keys()}};function ae(e){return(e=typeof e=="function"?e():e)?e:{}}function at(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function ge(...e){let t=!1;for(let i=0;i<e.length;i++){const o=e[i];t=t||!!o&&ee in o,e[i]=typeof o=="function"?(t=!0,A(o)):o}if(t)return new Proxy({get(i){for(let o=e.length-1;o>=0;o--){const l=ae(e[o])[i];if(l!==void 0)return l}},has(i){for(let o=e.length-1;o>=0;o--)if(i in ae(e[o]))return!0;return!1},keys(){const i=[];for(let o=0;o<e.length;o++)i.push(...Object.keys(ae(e[o])));return[...new Set(i)]}},de);const n={},r={};let s=!1;for(let i=e.length-1;i>=0;i--){const o=e[i];if(!o)continue;const l=Object.getOwnPropertyNames(o);s=s||i!==0&&!!l.length;for(let u=0,f=l.length;u<f;u++){const c=l[u];if(!(c==="__proto__"||c==="constructor"))if(c in n){const h=r[c],a=Object.getOwnPropertyDescriptor(o,c);h?a.get?h.push(a.get.bind(o)):a.value!==void 0&&h.push(()=>a.value):n[c]===void 0&&(n[c]=a.value)}else{const h=Object.getOwnPropertyDescriptor(o,c);h.get?Object.defineProperty(n,c,{enumerable:!0,configurable:!0,get:at.bind(r[c]=[h.get.bind(o)])}):n[c]=h.value}}}return n}function ft(e,...t){if(ee in e){const s=new Set(t.length>1?t.flat():t[0]),i=t.map(o=>new Proxy({get(l){return o.includes(l)?e[l]:void 0},has(l){return o.includes(l)&&l in e},keys(){return o.filter(l=>l in e)}},de));return i.push(new Proxy({get(o){return s.has(o)?void 0:e[o]},has(o){return s.has(o)?!1:o in e},keys(){return Object.keys(e).filter(o=>!s.has(o))}},de)),i}const n={},r=t.map(()=>({}));for(const s of Object.getOwnPropertyNames(e)){const i=Object.getOwnPropertyDescriptor(e,s),o=!i.get&&!i.set&&i.enumerable&&i.writable&&i.configurable;let l=!1,u=0;for(const f of t)f.includes(s)&&(l=!0,o?r[u][s]=i.value:Object.defineProperty(r[u],s,i)),++u;l||(o?n[s]=i.value:Object.defineProperty(n,s,i))}return[...r,n]}const ht=e=>`Stale read from <${e}>.`;function dt(e){const t="fallback"in e&&{fallback:()=>e.fallback};return A(ut(()=>e.each,e.children,t||void 0))}function Ue(e){const t=e.keyed,n=A(()=>e.when,void 0,{equals:(r,s)=>t?r===s:!r==!s});return A(()=>{const r=n();if(r){const s=e.children;return typeof s=="function"&&s.length>0?_(()=>s(t?r:()=>{if(!_(n))throw ht("Show");return e.when})):s}return e.fallback},void 0,void 0)}const gt=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],yt=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...gt]),mt=new Set(["innerHTML","textContent","innerText","children"]),pt=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),wt=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function bt(e,t){const n=wt[e];return typeof n=="object"?n[t]?n.$:void 0:n}const At=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),vt={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Pt(e,t,n){let r=n.length,s=t.length,i=r,o=0,l=0,u=t[s-1].nextSibling,f=null;for(;o<s||l<i;){if(t[o]===n[l]){o++,l++;continue}for(;t[s-1]===n[i-1];)s--,i--;if(s===o){const c=i<r?l?n[l-1].nextSibling:n[i-l]:u;for(;l<i;)e.insertBefore(n[l++],c)}else if(i===l)for(;o<s;)(!f||!f.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[i-1]&&n[l]===t[s-1]){const c=t[--s].nextSibling;e.insertBefore(n[l++],t[o++].nextSibling),e.insertBefore(n[--i],c),t[s]=n[i]}else{if(!f){f=new Map;let h=l;for(;h<i;)f.set(n[h],h++)}const c=f.get(t[o]);if(c!=null)if(l<c&&c<i){let h=o,a=1,g;for(;++h<s&&h<i&&!((g=f.get(t[h]))==null||g!==c+a);)a++;if(a>c-l){const b=t[o];for(;l<c;)e.insertBefore(n[l++],b)}else e.replaceChild(n[l++],t[o++])}else o++;else t[o++].remove()}}}const Ce="_$DX_DELEGATE";function St(e,t,n,r={}){let s;return V(i=>{s=i,t===document?e():U(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{s(),t.textContent=""}}function M(e,t,n){let r;const s=()=>{const o=document.createElement("template");return o.innerHTML=e,n?o.content.firstChild.firstChild:o.content.firstChild},i=t?()=>_(()=>document.importNode(r||(r=s()),!0)):()=>(r||(r=s())).cloneNode(!0);return i.cloneNode=i,i}function qe(e,t=window.document){const n=t[Ce]||(t[Ce]=new Set);for(let r=0,s=e.length;r<s;r++){const i=e[r];n.has(i)||(n.add(i),t.addEventListener(i,Nt))}}function ye(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function xt(e,t,n,r){r==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r)}function me(e,t){t==null?e.removeAttribute("class"):e.className=t}function $t(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const s=n[0];e.addEventListener(t,n[0]=i=>s.call(e,n[1],i))}else e.addEventListener(t,n)}function Ct(e,t,n={}){const r=Object.keys(t||{}),s=Object.keys(n);let i,o;for(i=0,o=s.length;i<o;i++){const l=s[i];!l||l==="undefined"||t[l]||(Ee(e,l,!1),delete n[l])}for(i=0,o=r.length;i<o;i++){const l=r[i],u=!!t[l];!l||l==="undefined"||n[l]===u||!u||(Ee(e,l,!0),n[l]=u)}return n}function Et(e,t,n){if(!t)return n?ye(e,"style"):t;const r=e.style;if(typeof t=="string")return r.cssText=t;typeof n=="string"&&(r.cssText=n=void 0),n||(n={}),t||(t={});let s,i;for(i in n)t[i]==null&&r.removeProperty(i),delete n[i];for(i in t)s=t[i],s!==n[i]&&(r.setProperty(i,s),n[i]=s);return n}function Lt(e,t={},n,r){const s={};return r||R(()=>s.children=q(e,t.children,s.children)),R(()=>t.ref&&t.ref(e)),R(()=>Ot(e,t,n,!0,s,!0)),s}function U(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return q(e,t,r,n);R(s=>q(e,t(),s,n),r)}function Ot(e,t,n,r,s={},i=!1){t||(t={});for(const o in s)if(!(o in t)){if(o==="children")continue;s[o]=Le(e,o,null,s[o],n,i)}for(const o in t){if(o==="children"){r||q(e,t.children);continue}const l=t[o];s[o]=Le(e,o,l,s[o],n,i)}}function _t(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function Ee(e,t,n){const r=t.trim().split(/\s+/);for(let s=0,i=r.length;s<i;s++)e.classList.toggle(r[s],n)}function Le(e,t,n,r,s,i){let o,l,u,f,c;if(t==="style")return Et(e,n,r);if(t==="classList")return Ct(e,n,r);if(n===r)return r;if(t==="ref")i||n(e);else if(t.slice(0,3)==="on:"){const h=t.slice(3);r&&e.removeEventListener(h,r),n&&e.addEventListener(h,n)}else if(t.slice(0,10)==="oncapture:"){const h=t.slice(10);r&&e.removeEventListener(h,r,!0),n&&e.addEventListener(h,n,!0)}else if(t.slice(0,2)==="on"){const h=t.slice(2).toLowerCase(),a=At.has(h);if(!a&&r){const g=Array.isArray(r)?r[0]:r;e.removeEventListener(h,g)}(a||n)&&($t(e,h,n,a),a&&qe([h]))}else if(t.slice(0,5)==="attr:")ye(e,t.slice(5),n);else if((c=t.slice(0,5)==="prop:")||(u=mt.has(t))||!s&&((f=bt(t,e.tagName))||(l=yt.has(t)))||(o=e.nodeName.includes("-")))c&&(t=t.slice(5),l=!0),t==="class"||t==="className"?me(e,n):o&&!l&&!u?e[_t(t)]=n:e[f||t]=n;else{const h=s&&t.indexOf(":")>-1&&vt[t.split(":")[0]];h?xt(e,h,t,n):ye(e,pt[t]||t,n)}return n}function Nt(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const r=n[t];if(r&&!n.disabled){const s=n[`${t}Data`];if(s!==void 0?r.call(n,s,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function q(e,t,n,r,s){for(;typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,o=r!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,i==="string"||i==="number")if(i==="number"&&(t=t.toString()),o){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=K(e,n,r,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||i==="boolean")n=K(e,n,r);else{if(i==="function")return R(()=>{let l=t();for(;typeof l=="function";)l=l();n=q(e,l,n,r)}),()=>n;if(Array.isArray(t)){const l=[],u=n&&Array.isArray(n);if(pe(l,t,n,s))return R(()=>n=q(e,l,n,r,!0)),()=>n;if(l.length===0){if(n=K(e,n,r),o)return n}else u?n.length===0?Oe(e,l,r):Pt(e,n,l):(n&&K(e),Oe(e,l));n=l}else if(t.nodeType){if(Array.isArray(n)){if(o)return n=K(e,n,r,t);K(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function pe(e,t,n,r){let s=!1;for(let i=0,o=t.length;i<o;i++){let l=t[i],u=n&&n[i],f;if(!(l==null||l===!0||l===!1))if((f=typeof l)=="object"&&l.nodeType)e.push(l);else if(Array.isArray(l))s=pe(e,l,u)||s;else if(f==="function")if(r){for(;typeof l=="function";)l=l();s=pe(e,Array.isArray(l)?l:[l],Array.isArray(u)?u:[u])||s}else e.push(l),s=!0;else{const c=String(l);u&&u.nodeType===3&&u.data===c?e.push(u):e.push(document.createTextNode(c))}}return s}function Oe(e,t,n=null){for(let r=0,s=t.length;r<s;r++)e.insertBefore(t[r],n)}function K(e,t,n,r){if(n===void 0)return e.textContent="";const s=r||document.createTextNode("");if(t.length){let i=!1;for(let o=t.length-1;o>=0;o--){const l=t[o];if(s!==l){const u=l.parentNode===e;!i&&!o?u?e.replaceChild(s,l):e.insertBefore(s,n):u&&l.remove()}else i=!0}}else e.insertBefore(s,n);return[s]}const Rt=!1;const Tt="_App_7aaas_9",jt="_logo_7aaas_13",kt="_header_7aaas_19",Dt="_link_7aaas_30",Y={App:Tt,logo:jt,"logo-spin":"_logo-spin_7aaas_1",header:kt,link:Dt};function It(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function Bt([e,t],n,r){return[n?()=>n(e()):e,r?s=>t(r(s)):t]}function Mt(e){try{return document.querySelector(e)}catch{return null}}function Kt(e,t){const n=Mt(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function Ut(e,t,n,r){let s=!1;const i=l=>typeof l=="string"?{value:l}:l,o=Bt(k(i(e()),{equals:(l,u)=>l.value===u.value}),void 0,l=>(!s&&t(l),l));return n&&we(n((l=e())=>{s=!0,o[1](i(l)),s=!1})),{signal:o,utils:r}}function qt(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:k({value:""})};return e}function Ft(){return Ut(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:n,state:r})=>{t?window.history.replaceState(r,"",e):window.history.pushState(r,"",e),Kt(window.location.hash.slice(1),n)},e=>It(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}function Ht(){let e=new Set;function t(s){return e.add(s),()=>e.delete(s)}let n=!1;function r(s,i){if(n)return!(n=!1);const o={to:s,options:i,defaultPrevented:!1,preventDefault:()=>o.defaultPrevented=!0};for(const l of e)l.listener({...o,from:l.location,retry:u=>{u&&(n=!0),l.navigate(s,i)}});return!o.defaultPrevented}return{subscribe:t,confirm:r}}const Vt=/^(?:[a-z0-9]+:)?\/\//i,Wt=/^\/+|(\/)\/+$/g;function I(e,t=!1){const n=e.replace(Wt,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function Z(e,t,n){if(Vt.test(t))return;const r=I(e),s=n&&I(n);let i="";return!s||t.startsWith("/")?i=r:s.toLowerCase().indexOf(r.toLowerCase())!==0?i=r+s:i=s,(i||"/")+I(t,!i)}function Xt(e,t){if(e==null)throw new Error(t);return e}function Fe(e,t){return I(e).replace(/\/*(\*.*)?$/g,"")+I(t)}function Gt(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function Jt(e,t,n){const[r,s]=e.split("/*",2),i=r.split("/").filter(Boolean),o=i.length;return l=>{const u=l.split("/").filter(Boolean),f=u.length-o;if(f<0||f>0&&s===void 0&&!t)return null;const c={path:o?"":"/",params:{}},h=a=>n===void 0?void 0:n[a];for(let a=0;a<o;a++){const g=i[a],b=u[a],d=g[0]===":",L=d?g.slice(1):g;if(d&&fe(b,h(L)))c.params[L]=b;else if(d||!fe(b,g))return null;c.path+=`/${b}`}if(s){const a=f?u.slice(-f).join("/"):"";if(fe(a,h(s)))c.params[s]=a;else return null}return c}}function fe(e,t){const n=r=>r.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function zt(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((s,i)=>s+(i.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function He(e){const t=new Map,n=tt();return new Proxy({},{get(r,s){return t.has(s)||nt(n,()=>t.set(s,A(()=>e()[s]))),t.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function Ve(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const s=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)s.push(n+=t[1]),r=r.slice(t[0].length);return Ve(r).reduce((i,o)=>[...i,...s.map(l=>l+o)],[])}const Qt=100,We=ke(),le=ke(),ce=()=>Xt(be(We),"Make sure your app is wrapped in a <Router />");let W;const Se=()=>W||be(le)||ce().base,Yt=e=>{const t=Se();return A(()=>t.resolvePath(e()))},Zt=e=>{const t=ce();return A(()=>{const n=e();return n!==void 0?t.renderPath(n):n})},en=()=>ce().location;function tn(e,t="",n){const{component:r,data:s,children:i}=e,o=!i||Array.isArray(i)&&!i.length,l={key:e,element:r?()=>C(r,{}):()=>{const{element:u}=e;return u===void 0&&n?C(n,{}):u},preload:e.component?r.preload:e.preload,data:s};return Xe(e.path).reduce((u,f)=>{for(const c of Ve(f)){const h=Fe(t,c),a=o?h:h.split("/*",1)[0];u.push({...l,originalPath:c,pattern:a,matcher:Jt(a,!o,e.matchFilters)})}return u},[])}function nn(e,t=0){return{routes:e,score:zt(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let s=e.length-1;s>=0;s--){const i=e[s],o=i.matcher(n);if(!o)return null;r.unshift({...o,route:i})}return r}}}function Xe(e){return Array.isArray(e)?e:[e]}function Ge(e,t="",n,r=[],s=[]){const i=Xe(e);for(let o=0,l=i.length;o<l;o++){const u=i[o];if(u&&typeof u=="object"&&u.hasOwnProperty("path")){const f=tn(u,t,n);for(const c of f){r.push(c);const h=Array.isArray(u.children)&&u.children.length===0;if(u.children&&!h)Ge(u.children,c.pattern,n,r,s);else{const a=nn([...r],s.length);s.push(a)}r.pop()}}}return r.length?s:s.sort((o,l)=>l.score-o.score)}function rn(e,t){for(let n=0,r=e.length;n<r;n++){const s=e[n].matcher(t);if(s)return s}return[]}function sn(e,t){const n=new URL("http://sar"),r=A(u=>{const f=e();try{return new URL(f,n)}catch{return console.error(`Invalid path ${f}`),u}},n,{equals:(u,f)=>u.href===f.href}),s=A(()=>r().pathname),i=A(()=>r().search,!0),o=A(()=>r().hash),l=A(()=>"");return{get pathname(){return s()},get search(){return i()},get hash(){return o()},get state(){return t()},get key(){return l()},query:He(je(i,()=>Gt(r())))}}function on(e,t="",n,r){const{signal:[s,i],utils:o={}}=qt(e),l=o.parsePath||(w=>w),u=o.renderPath||(w=>w),f=o.beforeLeave||Ht(),c=Z("",t),h=void 0;if(c===void 0)throw new Error(`${c} is not a valid base path`);c&&!s().value&&i({value:c,replace:!0,scroll:!1});const[a,g]=k(!1),b=async w=>{g(!0);try{await rt(w)}finally{g(!1)}},[d,L]=k(s().value),[O,S]=k(s().state),x=sn(d,O),$=[],E={pattern:c,params:{},path:()=>c,outlet:()=>null,resolvePath(w){return Z(c,w)}};if(n)try{W=E,E.data=n({data:void 0,params:{},location:x,navigate:xe(E)})}finally{W=void 0}function G(w,y,v){_(()=>{if(typeof y=="number"){y&&(o.go?f.confirm(y,v)&&o.go(y):console.warn("Router integration does not support relative routing"));return}const{replace:J,resolve:z,scroll:T,state:F}={replace:!1,resolve:!0,scroll:!0,...v},j=z?w.resolvePath(y):Z("",y);if(j===void 0)throw new Error(`Path '${y}' is not a routable path`);if($.length>=Qt)throw new Error("Too many redirects");const H=d();if((j!==H||F!==O())&&!Rt){if(f.confirm(j,v)){const Qe=$.push({value:H,replace:J,scroll:T,state:O()});b(()=>{L(j),S(F)}).then(()=>{$.length===Qe&&ze({value:j,state:F})})}}})}function xe(w){return w=w||be(le)||E,(y,v)=>G(w,y,v)}function ze(w){const y=$[0];y&&((w.value!==y.value||w.state!==y.state)&&i({...w,replace:y.replace,scroll:y.scroll}),$.length=0)}R(()=>{const{value:w,state:y}=s();_(()=>{w!==d()&&b(()=>{L(w),S(y)})})});{let w=function(y){if(y.defaultPrevented||y.button!==0||y.metaKey||y.altKey||y.ctrlKey||y.shiftKey)return;const v=y.composedPath().find(H=>H instanceof Node&&H.nodeName.toUpperCase()==="A");if(!v||!v.hasAttribute("link"))return;const J=v.href;if(v.target||!J&&!v.hasAttribute("state"))return;const z=(v.getAttribute("rel")||"").split(/\s+/);if(v.hasAttribute("download")||z&&z.includes("external"))return;const T=new URL(J);if(T.origin!==window.location.origin||c&&T.pathname&&!T.pathname.toLowerCase().startsWith(c.toLowerCase()))return;const F=l(T.pathname+T.search+T.hash),j=v.getAttribute("state");y.preventDefault(),G(E,F,{resolve:!1,replace:v.hasAttribute("replace"),scroll:!v.hasAttribute("noscroll"),state:j&&JSON.parse(j)})};var vn=w;qe(["click"]),document.addEventListener("click",w),we(()=>document.removeEventListener("click",w))}return{base:E,out:h,location:x,isRouting:a,renderPath:u,parsePath:l,navigatorFactory:xe,beforeLeave:f}}function ln(e,t,n,r,s){const{base:i,location:o,navigatorFactory:l}=e,{pattern:u,element:f,preload:c,data:h}=r().route,a=A(()=>r().path);c&&c();const g={parent:t,pattern:u,get child(){return n()},path:a,params:s,data:t.data,outlet:f,resolvePath(b){return Z(i.path(),b,a())}};if(h)try{W=g,g.data=h({data:t.data,params:s,location:o,navigate:l(g)})}finally{W=void 0}return g}const cn=M("<a link>"),un=e=>{const{source:t,url:n,base:r,data:s,out:i}=e,o=t||Ft(),l=on(o,r,s);return C(We.Provider,{value:l,get children(){return e.children}})},an=e=>{const t=ce(),n=Se(),r=Ae(()=>e.children),s=A(()=>Ge(r(),Fe(n.pattern,e.base||""),fn)),i=A(()=>rn(s(),t.location.pathname)),o=He(()=>{const c=i(),h={};for(let a=0;a<c.length;a++)Object.assign(h,c[a].params);return h});t.out&&t.out.matches.push(i().map(({route:c,path:h,params:a})=>({originalPath:c.originalPath,pattern:c.pattern,path:h,params:a})));const l=[];let u;const f=A(je(i,(c,h,a)=>{let g=h&&c.length===h.length;const b=[];for(let d=0,L=c.length;d<L;d++){const O=h&&h[d],S=c[d];a&&O&&S.route.key===O.route.key?b[d]=a[d]:(g=!1,l[d]&&l[d](),V(x=>{l[d]=x,b[d]=ln(t,b[d-1]||n,()=>f()[d+1],()=>i()[d],o)}))}return l.splice(c.length).forEach(d=>d()),a&&g?a:(u=b[0],b)}));return C(Ue,{get when(){return f()&&u},keyed:!0,children:c=>C(le.Provider,{value:c,get children(){return c.outlet()}})})},_e=e=>{const t=Ae(()=>e.children);return ge(e,{get children(){return t()}})},fn=()=>{const e=Se();return C(Ue,{get when(){return e.child},keyed:!0,children:t=>C(le.Provider,{value:t,get children(){return t.outlet()}})})};function Je(e){e=ge({inactiveClass:"inactive",activeClass:"active"},e);const[,t]=ft(e,["href","state","class","activeClass","inactiveClass","end"]),n=Yt(()=>e.href),r=Zt(n),s=en(),i=A(()=>{const o=n();if(o===void 0)return!1;const l=I(o.split(/[?#]/,1)[0]).toLowerCase(),u=I(s.pathname).toLowerCase();return e.end?l===u:u.startsWith(l)});return(()=>{const o=cn();return Lt(o,ge(t,{get href(){return r()||e.href},get state(){return JSON.stringify(e.state)},get classList(){return{...e.class&&{[e.class]:!0},[e.inactiveClass]:!i(),[e.activeClass]:i(),...t.classList}},get["aria-current"](){return i()?"page":void 0}}),!1,!1),o})()}const hn=M("<div><p>This is the homepage</p> <br> <br>");function dn(){return(()=>{const e=hn(),t=e.firstChild,n=t.nextSibling;return U(e,C(Je,{get class(){return Y.link},href:"/deliverables",children:"View Deliverables"}),n),e})()}const Ne=M("<br>"),gn=M("<div><p>Deliverables:</p><ol>"),yn=M("<p>Loading..."),mn=M("<li>");function pn(){const[e,t]=k({});function n(s){return["name: ",A(()=>s.name)," ",Ne(),Ne()]}async function r(){let i=await(await fetch("https://cs-423-server.vercel.app/getDeliverables")).json();t(i)}return r(),(()=>{const s=gn(),i=s.firstChild,o=i.nextSibling;return U(o,C(dt,{get each(){return e()},get fallback(){return yn()},children:l=>(()=>{const u=mn();return U(u,()=>n(l)),u})()})),s})()}const wn=M("<div><header>Senior Design Deliverables ");function bn(){return k(null),et(async()=>{}),C(un,{get children(){const e=wn(),t=e.firstChild,n=t.firstChild;return U(t,C(Je,{get class(){return Y.link},href:"/",children:"Home"}),n),U(e,C(an,{get children(){return[C(_e,{path:"/",component:dn}),C(_e,{path:"/deliverables",component:pn})]}}),null),R(r=>{const s=Y.App,i=Y.header;return s!==r._v$&&me(e,r._v$=s),i!==r._v$2&&me(t,r._v$2=i),r},{_v$:void 0,_v$2:void 0}),e}})}const An=document.getElementById("root");St(()=>C(bn,{}),An);
