(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"1fpI":function(e,t,n){e.exports={userContainer:"userinfo_userContainer__3QJn_",userImage:"userinfo_userImage__Zp_Eq",userInfo:"userinfo_userInfo__2V2pw"}},"8lov":function(e,t,n){"use strict";n.r(t);var r=n("ln6h"),i=n.n(r),o=n("q1tI"),a=n.n(o),u=n("vcXL"),s=n.n(u),c=n("miPH"),f=n.n(c);function l(){return"undefined"===typeof document||"undefined"===typeof document.visibilityState||"hidden"!==document.visibilityState}function d(){return"undefined"===typeof navigator.onLine||navigator.onLine}const p=new Map;function g(e){return p.get(e)}function h(e,t){return p.set(e,t)}const v={},y={},b={},w={},m={};const O={onLoadingSlow:()=>{},onSuccess:()=>{},onError:()=>{},onErrorRetry:function(e,t,n,r,i){if(!l())return;const o=Math.min(i.retryCount||0,8),a=~~((Math.random()+.5)*(1<<o))*n.errorRetryInterval;setTimeout(r,a,i)},errorRetryInterval:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:3e3,refreshInterval:0,revalidateOnFocus:!0,revalidateOnReconnect:!0,refreshWhenHidden:!1,refreshWhenOffline:!1,shouldRetryOnError:!0,suspense:!1};"undefined"!==typeof window&&navigator.connection&&-1!==["slow-2g","2g"].indexOf(navigator.connection.effectiveType)&&(O.errorRetryInterval=1e4,O.loadingTimeout=5e3);let I=!1;if("undefined"!==typeof window&&window.addEventListener&&!I){const e=()=>{if(l()&&d())for(let e in b)b[e][0]&&b[e][0]()};window.addEventListener("visibilitychange",e,!1),window.addEventListener("focus",e,!1),I=!0}var j=O;const E=new WeakMap;let x=0;const R=Object(o.createContext)({});R.displayName="SWRConfigContext";var T=R;const C="undefined"===typeof window,S=C?o.useEffect:o.useLayoutEffect,_=e=>e?"err@"+e:"",k=e=>{let t=null;if("function"===typeof e)try{e=e()}catch(n){e=""}return Array.isArray(e)?(t=e,e=function(e){if(!e.length)return"";let t="arg";for(let n=0;n<e.length;++n){let r;"object"!==typeof e[n]?r="string"===typeof e[n]?'"'+e[n]+'"':String(e[n]):E.has(e[n])?r=E.get(e[n]):(r=x,E.set(e[n],x++)),t+="@"+r}return t}(e)):e=String(e||""),[e,t]},L=(e,t,n)=>{const r=w[e];if(e&&r)for(let i=0;i<r.length;++i)r[i](!1,t,n)};T.Provider;var V=function(...e){let t,n,r={};e.length>=1&&(t=e[0]),e.length>2?(n=e[1],r=e[2]):"function"===typeof e[1]?n=e[1]:"object"===typeof e[1]&&(r=e[1]);const[i,a]=k(t),u=_(i);r=Object.assign({},j,Object(o.useContext)(T),r),"undefined"===typeof n&&(n=r.fetcher);const s=g(i)||r.initialData,c=g(u),p=Object(o.useRef)({data:!1,error:!1,isValidating:!1}),O=Object(o.useRef)({data:s,error:c,isValidating:!1}),I=Object(o.useState)(null)[1];let E=Object(o.useCallback)(e=>{let t=!1;for(let n in e)O.current[n]=e[n],p.current[n]&&(t=!0);(t||r.suspense)&&I({})},[]);const x=Object(o.useRef)(!1),R=Object(o.useRef)(i),V=Object(o.useCallback)(async(e={})=>{if(!i||!n)return!1;if(x.current)return!1;e=Object.assign({dedupe:!1},e);let t=!0,o="undefined"!==typeof v[i]&&e.dedupe;try{let e,s;if(E({isValidating:!0}),o?(s=y[i],e=await v[i]):(v[i]&&(m[i]=Date.now()-1),r.loadingTimeout&&!g(i)&&setTimeout(()=>{t&&r.onLoadingSlow(i,r)},r.loadingTimeout),v[i]=null!==a?n(...a):n(i),y[i]=s=Date.now(),setTimeout(()=>{delete v[i],delete y[i]},r.dedupingInterval),e=await v[i],r.onSuccess(e,i,r)),m[i]&&s<=m[i])return E({isValidating:!1}),!1;h(i,e),h(u,void 0),R.current=i;const c={isValidating:!1};"undefined"!==typeof O.current.error&&(c.error=void 0),f()(O.current.data,e)||(c.data=e),E(c),o||L(i,e,void 0)}catch(s){if(delete v[i],delete y[i],h(u,s),R.current=i,O.current.error!==s&&(E({isValidating:!1,error:s}),o||L(i,void 0,s)),r.onError(s,i,r),r.shouldRetryOnError){const t=(e.retryCount||0)+1;r.onErrorRetry(s,i,r,V,Object.assign({dedupe:!0},e,{retryCount:t}))}}return t=!1,!0},[i]);if(S(()=>{if(!i)return;x.current=!1;const e=O.current.data,t=g(i)||r.initialData;R.current===i&&f()(e,t)||(E({data:t}),R.current=i);const n=()=>V({dedupe:!0});let o;r.initialData||("undefined"!==typeof t&&!C&&window.requestIdleCallback?window.requestIdleCallback(n):n()),r.revalidateOnFocus&&(o=function(e,t){let n=!1;return(...r)=>{n||(n=!0,e(...r),setTimeout(()=>n=!1,t))}}(n,r.focusThrottleInterval),b[i]?b[i].push(o):b[i]=[o]);const a=(e=!0,t,r,o=!0)=>{const a={};let u=!1;return"undefined"===typeof t||f()(O.current.data,t)||(a.data=t,u=!0),O.current.error!==r&&(a.error=r,u=!0),u&&E(a),R.current=i,!!e&&(o?n():V())};w[i]?w[i].push(a):w[i]=[a];let u=null;return r.revalidateOnReconnect&&(u=addEventListener("online",n)),()=>{if(E=()=>null,x.current=!0,o&&b[i]){const e=b[i],t=e.indexOf(o);t>=0&&(e[t]=e[e.length-1],e.pop())}if(w[i]){const e=w[i],t=e.indexOf(a);t>=0&&(e[t]=e[e.length-1],e.pop())}null!==u&&removeEventListener("online",u)}},[i,V]),S(()=>{let e=null;const t=async()=>{O.current.error||!r.refreshWhenHidden&&!l()||r.refreshWhenOffline||!d()||await V({dedupe:!0}),r.refreshInterval&&(e=setTimeout(t,r.refreshInterval))};return r.refreshInterval&&(e=setTimeout(t,r.refreshInterval)),()=>{e&&clearTimeout(e)}},[r.refreshInterval,r.refreshWhenHidden,r.refreshWhenOffline,V]),r.suspense){if(C)throw new Error("Suspense on server side is not yet supported!");let e=g(i),t=g(u);if("undefined"===typeof e&&"undefined"===typeof t){if(v[i]||V(),v[i]&&"function"===typeof v[i].then)throw v[i];e=v[i]}if("undefined"===typeof e&&t)throw t;return{error:t,data:e,revalidate:V,isValidating:O.current.isValidating}}return Object(o.useMemo)(()=>{const e={revalidate:V};return Object.defineProperties(e,{error:{get:function(){return p.current.error=!0,R.current===i?O.current.error:c}},data:{get:function(){return p.current.data=!0,R.current===i?O.current.data:s}},isValidating:{get:function(){return p.current.isValidating=!0,O.current.isValidating}}}),e},[V])},W=n("1fpI"),D=n.n(W),H=n("IP2g"),P=n("8tEE"),M=a.a.createElement;function N(e){return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.awrap(s()(e).then((function(e){return e.json()})));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))}t.default=function(e){var t=V("https://api.github.com/users/littleboycoding",N),n=t.data;return t.error,n?n?M("div",{className:D.a.userContainer},M("img",{className:D.a.userImage,src:n.avatar_url}),M("div",{className:D.a.userInfo},M("b",{style:{fontSize:"20px"}},n.name)," @".concat(n.login),M("br",null),M(H.a,{icon:P.b})," ",M("a",{target:"_blank",href:"https://github.com/littleboycoding"},"GitHub")," ",M(H.a,{icon:P.a})," ",M("a",{target:"_blank",href:"https://www.facebook.com/littleboycoding"},"Facebook"),M("p",null,n.bio))):void 0:M("div",{className:D.a.userContainer},M("h1",null,". . ."))}},miPH:function(e,t,n){"use strict";var r=Array.isArray,i=Object.keys,o=Object.prototype.hasOwnProperty;e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var a,u,s,c=r(t),f=r(n);if(c&&f){if((u=t.length)!=n.length)return!1;for(a=u;0!==a--;)if(!e(t[a],n[a]))return!1;return!0}if(c!=f)return!1;var l=t instanceof Date,d=n instanceof Date;if(l!=d)return!1;if(l&&d)return t.getTime()==n.getTime();var p=t instanceof RegExp,g=n instanceof RegExp;if(p!=g)return!1;if(p&&g)return t.toString()==n.toString();var h=i(t);if((u=h.length)!==i(n).length)return!1;for(a=u;0!==a--;)if(!o.call(n,h[a]))return!1;for(a=u;0!==a--;)if(!e(t[s=h[a]],n[s]))return!1;return!0}return t!==t&&n!==n}},vcXL:function(e,t,n){"use strict";var r=self.fetch.bind(self);e.exports=r,e.exports.default=e.exports}}]);