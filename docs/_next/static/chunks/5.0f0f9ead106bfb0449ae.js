(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/0+H":function(e,t,n){"use strict";var r=n("hfKm"),a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};r(t,"__esModule",{value:!0});var o=a(n("q1tI")),i=n("lwAK");function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery;return n||a&&(void 0!==o&&o)}t.isInAmpMode=u,t.useAmp=function(){return u(o.default.useContext(i.AmpStateContext))}},"0tVQ":function(e,t,n){n("FlQf"),n("VJsP"),e.exports=n("WEpk").Array.from},"2PDY":function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},"8Kt/":function(e,t,n){"use strict";var r=n("ttDY"),a=n("hfKm"),o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};a(t,"__esModule",{value:!0});var i=o(n("q1tI")),u=o(n("Xuae")),c=n("lwAK"),l=n("FYa8"),f=n("/0+H");function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=s;var p=["name","httpEquiv","charSet","itemProp"];function v(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new r,t=new r,n=new r,a={};return function(o){var i=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var u=o.key.slice(o.key.indexOf("$")+1);e.has(u)?i=!1:e.add(u)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var c=0,l=p.length;c<l;c++){var f=p[c];if(o.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?i=!1:n.add(f);else{var s=o.props[f],d=a[f]||new r;d.has(s)?i=!1:(d.add(s),a[f]=d)}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return i.default.cloneElement(e,{key:n})}))}var h=u.default();function m(e){var t=e.children;return i.default.createElement(c.AmpStateContext.Consumer,null,(function(e){return i.default.createElement(l.HeadManagerContext.Consumer,null,(function(n){return i.default.createElement(h,{reduceComponentsToState:v,handleStateChange:n,inAmpMode:f.isInAmpMode(e)},t)}))}))}m.rewind=h.rewind,t.default=m},FYa8:function(e,t,n){"use strict";var r=n("hfKm"),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};r(t,"__esModule",{value:!0});var o=a(n("q1tI"));t.HeadManagerContext=o.createContext(null)},IP1Z:function(e,t,n){"use strict";var r=n("2faE"),a=n("rr1i");e.exports=function(e,t,n){t in e?r.f(e,t,a(0,n)):e[t]=n}},PQJW:function(e,t,n){var r=n("d04V"),a=n("yLu3");e.exports=function(e){if(a(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return r(e)}},TbGu:function(e,t,n){var r=n("fGSI"),a=n("PQJW"),o=n("2PDY");e.exports=function(e){return r(e)||a(e)||o()}},VJsP:function(e,t,n){"use strict";var r=n("2GTP"),a=n("Y7ZC"),o=n("JB68"),i=n("sNwI"),u=n("NwJ3"),c=n("tEej"),l=n("IP1Z"),f=n("fNZA");a(a.S+a.F*!n("TuGD")((function(e){Array.from(e)})),"Array",{from:function(e){var t,n,a,s,d=o(e),p="function"==typeof this?this:Array,v=arguments.length,h=v>1?arguments[1]:void 0,m=void 0!==h,_=0,y=f(d);if(m&&(h=r(h,v>2?arguments[2]:void 0,2)),void 0==y||p==Array&&u(y))for(n=new p(t=c(d.length));t>_;_++)l(n,_,m?h(d[_],_):d[_]);else for(s=y.call(d),n=new p;!(a=s.next()).done;_++)l(n,_,m?i(s,h,[a.value,_],!0):a.value);return n.length=_,n}})},Xuae:function(e,t,n){"use strict";var r=n("/HRN"),a=n("ZDA2"),o=n("/+P4"),i=n("K47E"),u=n("WaGi"),c=n("N9n2"),l=n("TbGu"),f=n("ttDY");n("hfKm")(t,"__esModule",{value:!0});var s=n("q1tI"),d=!1;t.default=function(){var e,t=new f;function n(n){e=n.props.reduceComponentsToState(l(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(l){function f(e){var u;return r(this,f),u=a(this,o(f).call(this,e)),d&&(t.add(i(u)),n(i(u))),u}return c(f,l),u(f,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),u(f,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),f}(s.Component)}},d04V:function(e,t,n){e.exports=n("0tVQ")},fGSI:function(e,t,n){var r=n("p0XB");e.exports=function(e){if(r(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},iskQ:function(e,t,n){e.exports={container:"container_container__3vClx",content:"container_content__2-tk8",fade:"container_fade__2qPEv",footer:"container_footer__QTgeK"}},lwAK:function(e,t,n){"use strict";var r=n("hfKm"),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};r(t,"__esModule",{value:!0});var o=a(n("q1tI"));t.AmpStateContext=o.createContext({})},vUxr:function(e,t,n){"use strict";n.r(t);var r=n("a6RD"),a=n.n(r),o=(n("8Kt/"),n("iskQ")),i=n.n(o),u=n("q1tI"),c=n.n(u).a.createElement,l=a()((function(){return Promise.all([n.e(1),n.e(6),n.e(4),n.e(14)]).then(n.bind(null,"8lov"))}),{loading:function(){return c("h1",null,". . .")},loadableGenerated:{webpack:function(){return["8lov"]},modules:["./userinfo"]}});t.default=function(e){var t=(new Date).getFullYear(),n=Object(u.useState)(e.title),r=n[0];return n[1],Object(u.useEffect)((function(){document.title="".concat(r," - Little Boy")})),c("div",{className:i.a.container},c(l,null),c("div",{className:i.a.content},e.children),c("div",{className:i.a.footer},c("p",null,c("a",{target:"_blank",href:"https://en.wikipedia.org/wiki/Creative_Commons_license"},"Creative Common License")," @".concat(t," \ud83d\udcdd")),c("p",null,"Created with \u2665\ufe0f by Thanawat Yodnil")))}}}]);