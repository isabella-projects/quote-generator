(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();function Te(e,t){return function(){return e.apply(t,arguments)}}const{toString:We}=Object.prototype,{getPrototypeOf:oe}=Object,J=(e=>t=>{const n=We.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),A=e=>(e=e.toLowerCase(),t=>J(t)===e),V=e=>t=>typeof t===e,{isArray:_}=Array,q=V("undefined");function Qe(e){return e!==null&&!q(e)&&e.constructor!==null&&!q(e.constructor)&&O(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ae=A("ArrayBuffer");function Xe(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ae(e.buffer),t}const Ge=V("string"),O=V("function"),xe=V("number"),$=e=>e!==null&&typeof e=="object",Ye=e=>e===!0||e===!1,I=e=>{if(J(e)!=="object")return!1;const t=oe(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Ze=A("Date"),et=A("File"),tt=A("Blob"),nt=A("FileList"),rt=e=>$(e)&&O(e.pipe),st=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||O(e.append)&&((t=J(e))==="formdata"||t==="object"&&O(e.toString)&&e.toString()==="[object FormData]"))},ot=A("URLSearchParams"),[it,at,ct,ut]=["ReadableStream","Request","Response","Headers"].map(A),lt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function j(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),_(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function Ce(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Pe=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Ne=e=>!q(e)&&e!==Pe;function Y(){const{caseless:e}=Ne(this)&&this||{},t={},n=(r,s)=>{const o=e&&Ce(t,s)||s;I(t[o])&&I(r)?t[o]=Y(t[o],r):I(r)?t[o]=Y({},r):_(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&j(arguments[r],n);return t}const ft=(e,t,n,{allOwnKeys:r}={})=>(j(t,(s,o)=>{n&&O(s)?e[o]=Te(s,n):e[o]=s},{allOwnKeys:r}),e),dt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),ht=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},pt=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&oe(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},mt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},yt=e=>{if(!e)return null;if(_(e))return e;let t=e.length;if(!xe(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},wt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&oe(Uint8Array)),Et=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},bt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},gt=A("HTMLFormElement"),Rt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),fe=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),St=A("RegExp"),Le=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};j(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},Ot=e=>{Le(e,(t,n)=>{if(O(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(O(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Tt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return _(e)?r(e):r(String(e).split(t)),n},At=()=>{},xt=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,W="abcdefghijklmnopqrstuvwxyz",de="0123456789",Fe={DIGIT:de,ALPHA:W,ALPHA_DIGIT:W+W.toUpperCase()+de},Ct=(e=16,t=Fe.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Pt(e){return!!(e&&O(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Nt=e=>{const t=new Array(10),n=(r,s)=>{if($(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=_(r)?[]:{};return j(r,(i,c)=>{const f=n(i,s+1);!q(f)&&(o[c]=f)}),t[s]=void 0,o}}return r};return n(e,0)},Lt=A("AsyncFunction"),Ft=e=>e&&($(e)||O(e))&&O(e.then)&&O(e.catch),a={isArray:_,isArrayBuffer:Ae,isBuffer:Qe,isFormData:st,isArrayBufferView:Xe,isString:Ge,isNumber:xe,isBoolean:Ye,isObject:$,isPlainObject:I,isReadableStream:it,isRequest:at,isResponse:ct,isHeaders:ut,isUndefined:q,isDate:Ze,isFile:et,isBlob:tt,isRegExp:St,isFunction:O,isStream:rt,isURLSearchParams:ot,isTypedArray:wt,isFileList:nt,forEach:j,merge:Y,extend:ft,trim:lt,stripBOM:dt,inherits:ht,toFlatObject:pt,kindOf:J,kindOfTest:A,endsWith:mt,toArray:yt,forEachEntry:Et,matchAll:bt,isHTMLForm:gt,hasOwnProperty:fe,hasOwnProp:fe,reduceDescriptors:Le,freezeMethods:Ot,toObjectSet:Tt,toCamelCase:Rt,noop:At,toFiniteNumber:xt,findKey:Ce,global:Pe,isContextDefined:Ne,ALPHABET:Fe,generateString:Ct,isSpecCompliantForm:Pt,toJSONObject:Nt,isAsyncFn:Lt,isThenable:Ft};function p(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(p,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const _e=p.prototype,Be={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Be[e]={value:e}});Object.defineProperties(p,Be);Object.defineProperty(_e,"isAxiosError",{value:!0});p.from=(e,t,n,r,s,o)=>{const i=Object.create(_e);return a.toFlatObject(e,i,function(f){return f!==Error.prototype},c=>c!=="isAxiosError"),p.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const _t=null;function Z(e){return a.isPlainObject(e)||a.isArray(e)}function De(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function he(e,t,n){return e?e.concat(t).map(function(s,o){return s=De(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function Bt(e){return a.isArray(e)&&!e.some(Z)}const Dt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function v(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,g){return!a.isUndefined(g[m])});const r=n.metaTokens,s=n.visitor||u,o=n.dots,i=n.indexes,f=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function l(d){if(d===null)return"";if(a.isDate(d))return d.toISOString();if(!f&&a.isBlob(d))throw new p("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(d)||a.isTypedArray(d)?f&&typeof Blob=="function"?new Blob([d]):Buffer.from(d):d}function u(d,m,g){let R=d;if(d&&!g&&typeof d=="object"){if(a.endsWith(m,"{}"))m=r?m:m.slice(0,-2),d=JSON.stringify(d);else if(a.isArray(d)&&Bt(d)||(a.isFileList(d)||a.endsWith(m,"[]"))&&(R=a.toArray(d)))return m=De(m),R.forEach(function(w,D){!(a.isUndefined(w)||w===null)&&t.append(i===!0?he([m],D,o):i===null?m:m+"[]",l(w))}),!1}return Z(d)?!0:(t.append(he(g,m,o),l(d)),!1)}const h=[],E=Object.assign(Dt,{defaultVisitor:u,convertValue:l,isVisitable:Z});function y(d,m){if(!a.isUndefined(d)){if(h.indexOf(d)!==-1)throw Error("Circular reference detected in "+m.join("."));h.push(d),a.forEach(d,function(R,x){(!(a.isUndefined(R)||R===null)&&s.call(t,R,a.isString(x)?x.trim():x,m,E))===!0&&y(R,m?m.concat(x):[x])}),h.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}function pe(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ie(e,t){this._pairs=[],e&&v(e,this,t)}const Ue=ie.prototype;Ue.append=function(t,n){this._pairs.push([t,n])};Ue.toString=function(t){const n=t?function(r){return t.call(this,r,pe)}:pe;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Ut(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function qe(e,t,n){if(!t)return e;const r=n&&n.encode||Ut,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new ie(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class me{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const je={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},qt=typeof URLSearchParams<"u"?URLSearchParams:ie,jt=typeof FormData<"u"?FormData:null,kt=typeof Blob<"u"?Blob:null,It={isBrowser:!0,classes:{URLSearchParams:qt,FormData:jt,Blob:kt},protocols:["http","https","file","blob","url","data"]},ae=typeof window<"u"&&typeof document<"u",Ht=(e=>ae&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),Mt=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",zt=ae&&window.location.href||"http://localhost",Jt=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ae,hasStandardBrowserEnv:Ht,hasStandardBrowserWebWorkerEnv:Mt,origin:zt},Symbol.toStringTag,{value:"Module"})),T={...Jt,...It};function Vt(e,t){return v(e,new T.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return T.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function $t(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function vt(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function ke(e){function t(n,r,s,o){let i=n[o++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),f=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,f?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=vt(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t($t(r),s,n,0)}),n}return null}function Kt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const k={transitional:je,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify(ke(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t)||a.isReadableStream(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Vt(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return v(c?{"files[]":t}:t,f&&new f,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),Kt(t)):t}],transformResponse:[function(t){const n=this.transitional||k.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(a.isResponse(t)||a.isReadableStream(t))return t;if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?p.from(c,p.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:T.classes.FormData,Blob:T.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{k.headers[e]={}});const Wt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Qt=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&Wt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},ye=Symbol("internals");function U(e){return e&&String(e).trim().toLowerCase()}function H(e){return e===!1||e==null?e:a.isArray(e)?e.map(H):String(e)}function Xt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Gt=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Q(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Yt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Zt(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class S{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,f,l){const u=U(f);if(!u)throw new Error("header name must be a non-empty string");const h=a.findKey(s,u);(!h||s[h]===void 0||l===!0||l===void 0&&s[h]!==!1)&&(s[h||f]=H(c))}const i=(c,f)=>a.forEach(c,(l,u)=>o(l,u,f));if(a.isPlainObject(t)||t instanceof this.constructor)i(t,n);else if(a.isString(t)&&(t=t.trim())&&!Gt(t))i(Qt(t),n);else if(a.isHeaders(t))for(const[c,f]of t.entries())o(f,c,r);else t!=null&&o(n,t,r);return this}get(t,n){if(t=U(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Xt(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=U(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Q(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=U(i),i){const c=a.findKey(r,i);c&&(!n||Q(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||Q(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=H(s),delete n[o];return}const c=t?Yt(o):String(o).trim();c!==o&&delete n[o],n[c]=H(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[ye]=this[ye]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=U(i);r[c]||(Zt(s,i),r[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}S.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(S.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(S);function X(e,t){const n=this||k,r=t||n,s=S.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Ie(e){return!!(e&&e.__CANCEL__)}function B(e,t,n){p.call(this,e??"canceled",p.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(B,p,{__CANCEL__:!0});function He(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new p("Request failed with status code "+n.status,[p.ERR_BAD_REQUEST,p.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function en(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function tn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(f){const l=Date.now(),u=r[o];i||(i=l),n[s]=f,r[s]=l;let h=o,E=0;for(;h!==s;)E+=n[h++],h=h%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),l-i<t)return;const y=u&&l-u;return y?Math.round(E*1e3/y):void 0}}function nn(e,t){let n=0;const r=1e3/t;let s=null;return function(){const i=this===!0,c=Date.now();if(i||c-n>r)return s&&(clearTimeout(s),s=null),n=c,e.apply(null,arguments);s||(s=setTimeout(()=>(s=null,n=Date.now(),e.apply(null,arguments)),r-(c-n)))}}const M=(e,t,n=3)=>{let r=0;const s=tn(50,250);return nn(o=>{const i=o.loaded,c=o.lengthComputable?o.total:void 0,f=i-r,l=s(f),u=i<=c;r=i;const h={loaded:i,total:c,progress:c?i/c:void 0,bytes:f,rate:l||void 0,estimated:l&&c&&u?(c-i)/l:void 0,event:o,lengthComputable:c!=null};h[t?"download":"upload"]=!0,e(h)},n)},rn=T.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const c=a.isString(i)?s(i):i;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}(),sn=T.hasStandardBrowserEnv?{write(e,t,n,r,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function on(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function an(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Me(e,t){return e&&!on(t)?an(e,t):t}const we=e=>e instanceof S?{...e}:e;function L(e,t){t=t||{};const n={};function r(l,u,h){return a.isPlainObject(l)&&a.isPlainObject(u)?a.merge.call({caseless:h},l,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function s(l,u,h){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l,h)}else return r(l,u,h)}function o(l,u){if(!a.isUndefined(u))return r(void 0,u)}function i(l,u){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function c(l,u,h){if(h in t)return r(l,u);if(h in e)return r(void 0,l)}const f={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(l,u)=>s(we(l),we(u),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const h=f[u]||s,E=h(e[u],t[u],u);a.isUndefined(E)&&h!==c||(n[u]=E)}),n}const ze=e=>{const t=L({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:o,headers:i,auth:c}=t;t.headers=i=S.from(i),t.url=qe(Me(t.baseURL,t.url),e.params,e.paramsSerializer),c&&i.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):"")));let f;if(a.isFormData(n)){if(T.hasStandardBrowserEnv||T.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if((f=i.getContentType())!==!1){const[l,...u]=f?f.split(";").map(h=>h.trim()).filter(Boolean):[];i.setContentType([l||"multipart/form-data",...u].join("; "))}}if(T.hasStandardBrowserEnv&&(r&&a.isFunction(r)&&(r=r(t)),r||r!==!1&&rn(t.url))){const l=s&&o&&sn.read(o);l&&i.set(s,l)}return t},cn=typeof XMLHttpRequest<"u",un=cn&&function(e){return new Promise(function(n,r){const s=ze(e);let o=s.data;const i=S.from(s.headers).normalize();let{responseType:c}=s,f;function l(){s.cancelToken&&s.cancelToken.unsubscribe(f),s.signal&&s.signal.removeEventListener("abort",f)}let u=new XMLHttpRequest;u.open(s.method.toUpperCase(),s.url,!0),u.timeout=s.timeout;function h(){if(!u)return;const y=S.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),m={data:!c||c==="text"||c==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:y,config:e,request:u};He(function(R){n(R),l()},function(R){r(R),l()},m),u=null}"onloadend"in u?u.onloadend=h:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(h)},u.onabort=function(){u&&(r(new p("Request aborted",p.ECONNABORTED,s,u)),u=null)},u.onerror=function(){r(new p("Network Error",p.ERR_NETWORK,s,u)),u=null},u.ontimeout=function(){let d=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const m=s.transitional||je;s.timeoutErrorMessage&&(d=s.timeoutErrorMessage),r(new p(d,m.clarifyTimeoutError?p.ETIMEDOUT:p.ECONNABORTED,s,u)),u=null},o===void 0&&i.setContentType(null),"setRequestHeader"in u&&a.forEach(i.toJSON(),function(d,m){u.setRequestHeader(m,d)}),a.isUndefined(s.withCredentials)||(u.withCredentials=!!s.withCredentials),c&&c!=="json"&&(u.responseType=s.responseType),typeof s.onDownloadProgress=="function"&&u.addEventListener("progress",M(s.onDownloadProgress,!0)),typeof s.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",M(s.onUploadProgress)),(s.cancelToken||s.signal)&&(f=y=>{u&&(r(!y||y.type?new B(null,e,u):y),u.abort(),u=null)},s.cancelToken&&s.cancelToken.subscribe(f),s.signal&&(s.signal.aborted?f():s.signal.addEventListener("abort",f)));const E=en(s.url);if(E&&T.protocols.indexOf(E)===-1){r(new p("Unsupported protocol "+E+":",p.ERR_BAD_REQUEST,e));return}u.send(o||null)})},ln=(e,t)=>{let n=new AbortController,r;const s=function(f){if(!r){r=!0,i();const l=f instanceof Error?f:this.reason;n.abort(l instanceof p?l:new B(l instanceof Error?l.message:l))}};let o=t&&setTimeout(()=>{s(new p(`timeout ${t} of ms exceeded`,p.ETIMEDOUT))},t);const i=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(f=>{f&&(f.removeEventListener?f.removeEventListener("abort",s):f.unsubscribe(s))}),e=null)};e.forEach(f=>f&&f.addEventListener&&f.addEventListener("abort",s));const{signal:c}=n;return c.unsubscribe=i,[c,()=>{o&&clearTimeout(o),o=null}]},fn=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,s;for(;r<n;)s=r+t,yield e.slice(r,s),r=s},dn=async function*(e,t,n){for await(const r of e)yield*fn(ArrayBuffer.isView(r)?r:await n(String(r)),t)},Ee=(e,t,n,r,s)=>{const o=dn(e,t,s);let i=0;return new ReadableStream({type:"bytes",async pull(c){const{done:f,value:l}=await o.next();if(f){c.close(),r();return}let u=l.byteLength;n&&n(i+=u),c.enqueue(new Uint8Array(l))},cancel(c){return r(c),o.return()}},{highWaterMark:2})},be=(e,t)=>{const n=e!=null;return r=>setTimeout(()=>t({lengthComputable:n,total:e,loaded:r}))},K=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Je=K&&typeof ReadableStream=="function",ee=K&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),hn=Je&&(()=>{let e=!1;const t=new Request(T.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})(),ge=64*1024,te=Je&&!!(()=>{try{return a.isReadableStream(new Response("").body)}catch{}})(),z={stream:te&&(e=>e.body)};K&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!z[t]&&(z[t]=a.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new p(`Response type '${t}' is not supported`,p.ERR_NOT_SUPPORT,r)})})})(new Response);const pn=async e=>{if(e==null)return 0;if(a.isBlob(e))return e.size;if(a.isSpecCompliantForm(e))return(await new Request(e).arrayBuffer()).byteLength;if(a.isArrayBufferView(e))return e.byteLength;if(a.isURLSearchParams(e)&&(e=e+""),a.isString(e))return(await ee(e)).byteLength},mn=async(e,t)=>{const n=a.toFiniteNumber(e.getContentLength());return n??pn(t)},yn=K&&(async e=>{let{url:t,method:n,data:r,signal:s,cancelToken:o,timeout:i,onDownloadProgress:c,onUploadProgress:f,responseType:l,headers:u,withCredentials:h="same-origin",fetchOptions:E}=ze(e);l=l?(l+"").toLowerCase():"text";let[y,d]=s||o||i?ln([s,o],i):[],m,g;const R=()=>{!m&&setTimeout(()=>{y&&y.unsubscribe()}),m=!0};let x;try{if(f&&hn&&n!=="get"&&n!=="head"&&(x=await mn(u,r))!==0){let C=new Request(t,{method:"POST",body:r,duplex:"half"}),F;a.isFormData(r)&&(F=C.headers.get("content-type"))&&u.setContentType(F),C.body&&(r=Ee(C.body,ge,be(x,M(f)),null,ee))}a.isString(h)||(h=h?"cors":"omit"),g=new Request(t,{...E,signal:y,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",withCredentials:h});let w=await fetch(g);const D=te&&(l==="stream"||l==="response");if(te&&(c||D)){const C={};["status","statusText","headers"].forEach(le=>{C[le]=w[le]});const F=a.toFiniteNumber(w.headers.get("content-length"));w=new Response(Ee(w.body,ge,c&&be(F,M(c,!0)),D&&R,ee),C)}l=l||"text";let Ke=await z[a.findKey(z,l)||"text"](w,e);return!D&&R(),d&&d(),await new Promise((C,F)=>{He(C,F,{data:Ke,headers:S.from(w.headers),status:w.status,statusText:w.statusText,config:e,request:g})})}catch(w){throw R(),w&&w.name==="TypeError"&&/fetch/i.test(w.message)?Object.assign(new p("Network Error",p.ERR_NETWORK,e,g),{cause:w.cause||w}):p.from(w,w&&w.code,e,g)}}),ne={http:_t,xhr:un,fetch:yn};a.forEach(ne,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Re=e=>`- ${e}`,wn=e=>a.isFunction(e)||e===null||e===!1,Ve={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!wn(n)&&(r=ne[(i=String(n)).toLowerCase()],r===void 0))throw new p(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([c,f])=>`adapter ${c} `+(f===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(Re).join(`
`):" "+Re(o[0]):"as no adapter specified";throw new p("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:ne};function G(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new B(null,e)}function Se(e){return G(e),e.headers=S.from(e.headers),e.data=X.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Ve.getAdapter(e.adapter||k.adapter)(e).then(function(r){return G(e),r.data=X.call(e,e.transformResponse,r),r.headers=S.from(r.headers),r},function(r){return Ie(r)||(G(e),r&&r.response&&(r.response.data=X.call(e,e.transformResponse,r.response),r.response.headers=S.from(r.response.headers))),Promise.reject(r)})}const $e="1.7.2",ce={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ce[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Oe={};ce.transitional=function(t,n,r){function s(o,i){return"[Axios v"+$e+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new p(s(i," has been removed"+(n?" in "+n:"")),p.ERR_DEPRECATED);return n&&!Oe[i]&&(Oe[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};function En(e,t,n){if(typeof e!="object")throw new p("options must be an object",p.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],f=c===void 0||i(c,o,e);if(f!==!0)throw new p("option "+o+" must be "+f,p.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new p("Unknown option "+o,p.ERR_BAD_OPTION)}}const re={assertOptions:En,validators:ce},P=re.validators;class N{constructor(t){this.defaults=t,this.interceptors={request:new me,response:new me}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=L(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&re.assertOptions(r,{silentJSONParsing:P.transitional(P.boolean),forcedJSONParsing:P.transitional(P.boolean),clarifyTimeoutError:P.transitional(P.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:re.assertOptions(s,{encode:P.function,serialize:P.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],d=>{delete o[d]}),n.headers=S.concat(i,o);const c=[];let f=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(f=f&&m.synchronous,c.unshift(m.fulfilled,m.rejected))});const l=[];this.interceptors.response.forEach(function(m){l.push(m.fulfilled,m.rejected)});let u,h=0,E;if(!f){const d=[Se.bind(this),void 0];for(d.unshift.apply(d,c),d.push.apply(d,l),E=d.length,u=Promise.resolve(n);h<E;)u=u.then(d[h++],d[h++]);return u}E=c.length;let y=n;for(h=0;h<E;){const d=c[h++],m=c[h++];try{y=d(y)}catch(g){m.call(this,g);break}}try{u=Se.call(this,y)}catch(d){return Promise.reject(d)}for(h=0,E=l.length;h<E;)u=u.then(l[h++],l[h++]);return u}getUri(t){t=L(this.defaults,t);const n=Me(t.baseURL,t.url);return qe(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){N.prototype[t]=function(n,r){return this.request(L(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(L(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}N.prototype[t]=n(),N.prototype[t+"Form"]=n(!0)});class ue{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new B(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ue(function(s){t=s}),cancel:t}}}function bn(e){return function(n){return e.apply(null,n)}}function gn(e){return a.isObject(e)&&e.isAxiosError===!0}const se={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(se).forEach(([e,t])=>{se[t]=e});function ve(e){const t=new N(e),n=Te(N.prototype.request,t);return a.extend(n,N.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return ve(L(e,s))},n}const b=ve(k);b.Axios=N;b.CanceledError=B;b.CancelToken=ue;b.isCancel=Ie;b.VERSION=$e;b.toFormData=v;b.AxiosError=p;b.Cancel=b.CanceledError;b.all=function(t){return Promise.all(t)};b.spread=bn;b.isAxiosError=gn;b.mergeConfig=L;b.AxiosHeaders=S;b.formToJSON=e=>ke(a.isHTMLForm(e)?new FormData(e):e);b.getAdapter=Ve.getAdapter;b.HttpStatusCode=se;b.default=b;class Rn{constructor(){this.currentQuote={quote:"",author:""},this.quoteContainer=document.getElementById("quote-container"),this.quoteElement=document.getElementById("quote"),this.authorElement=document.getElementById("author"),this.btn=document.getElementById("new-quote"),this._init()}_init(){this.btn.addEventListener("click",()=>this.fetchAndDisplayQuote())}async fetchQuote(){const t="https://api.api-ninjas.com/v1/quotes",n="W556mvdLN86c27pfvoN68w==RP32IzzTPdbaZSN4";try{const{data:r}=await b.get(t,{headers:{"X-Api-Key":n,"Content-Type":"application/json"}}),{quote:s,author:o}=r[0];this.currentQuote={quote:s,author:o},this.updateQuoteUI()}catch(r){console.log(`Error while fetching data: ${r}`)}}updateQuoteUI(){this.quoteElement.textContent=this.currentQuote.quote,this.authorElement.textContent=`— ${this.currentQuote.author}`}async fetchAndDisplayQuote(){await this.fetchQuote()}}class Sn{constructor(){this.quoteElement=document.getElementById("quote"),this.authorElement=document.getElementById("author"),this.twitterBtn=document.getElementById("twitter"),this._initTweet()}_initTweet(){this.twitterBtn.addEventListener("click",()=>this.tweetQuote())}tweetQuote(){const t=`https://twitter.com/intent/tweet?text=${this.quoteElement.textContent} - ${this.authorElement.textContent}`;window.open(t,"_blank")}}class On{constructor(){this.year=document.getElementById("year")}getCurrentYear(){this.year.textContent=new Date().getFullYear()}}document.addEventListener("DOMContentLoaded",()=>{new Rn().fetchQuote(),new Sn,new On().getCurrentYear()});
