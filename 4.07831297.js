(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{118:function(t,e,r){"use strict";var n=r(2),o=r(0),a=r.n(o),i=r(114),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},l={Prism:r(20).a,theme:s};function u(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var h=/\r\n|\r|\n/,f=function(t){0===t.length?t.push({types:["plain"],content:"",empty:!0}):1===t.length&&""===t[0].content&&(t[0].empty=!0)},g=function(t,e){var r=t.length;return r>0&&t[r-1]===e?t:t.concat(e)},p=function(t,e){var r=t.plain,n=Object.create(null),o=t.styles.reduce((function(t,r){var n=r.languages,o=r.style;return n&&!n.includes(e)||r.types.forEach((function(e){var r=c({},t[e],o);t[e]=r})),t}),n);return o.root=r,o.plain=c({},r,{backgroundColor:null}),o};function d(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&-1===e.indexOf(n)&&(r[n]=t[n]);return r}var m=function(t){function e(){for(var e=this,r=[],n=arguments.length;n--;)r[n]=arguments[n];t.apply(this,r),u(this,"getThemeDict",(function(t){if(void 0!==e.themeDict&&t.theme===e.prevTheme&&t.language===e.prevLanguage)return e.themeDict;e.prevTheme=t.theme,e.prevLanguage=t.language;var r=t.theme?p(t.theme,t.language):void 0;return e.themeDict=r})),u(this,"getLineProps",(function(t){var r=t.key,n=t.className,o=t.style,a=c({},d(t,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=e.getThemeDict(e.props);return void 0!==i&&(a.style=i.plain),void 0!==o&&(a.style=void 0!==a.style?c({},a.style,o):o),void 0!==r&&(a.key=r),n&&(a.className+=" "+n),a})),u(this,"getStyleForToken",(function(t){var r=t.types,n=t.empty,o=r.length,a=e.getThemeDict(e.props);if(void 0!==a){if(1===o&&"plain"===r[0])return n?{display:"inline-block"}:void 0;if(1===o&&!n)return a[r[0]];var i=n?{display:"inline-block"}:{},s=r.map((function(t){return a[t]}));return Object.assign.apply(Object,[i].concat(s))}})),u(this,"getTokenProps",(function(t){var r=t.key,n=t.className,o=t.style,a=t.token,i=c({},d(t,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:e.getStyleForToken(a),key:void 0});return void 0!==o&&(i.style=void 0!==i.style?c({},i.style,o):o),void 0!==r&&(i.key=r),n&&(i.className+=" "+n),i}))}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.render=function(){var t=this.props,e=t.Prism,r=t.language,n=t.code,o=t.children,a=this.getThemeDict(this.props),i=e.languages[r];return o({tokens:function(t){for(var e=[[]],r=[t],n=[0],o=[t.length],a=0,i=0,s=[],l=[s];i>-1;){for(;(a=n[i]++)<o[i];){var u=void 0,c=e[i],p=r[i][a];if("string"==typeof p?(c=i>0?c:["plain"],u=p):(c=g(c,p.type),p.alias&&(c=g(c,p.alias)),u=p.content),"string"==typeof u){var d=u.split(h),m=d.length;s.push({types:c,content:d[0]});for(var y=1;y<m;y++)f(s),l.push(s=[]),s.push({types:c,content:d[y]})}else i++,e.push(c),r.push(u),n.push(0),o.push(u.length)}i--,e.pop(),r.pop(),n.pop(),o.pop()}return f(s),l}(void 0!==i?e.tokenize(n,i,r):[n]),className:"prism-code language-"+r,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},e}(o.Component),y=r(120),v=r.n(y),b=r(121),C=r.n(b),w=r(112),E={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},k=r(117);var O=()=>{const{siteConfig:{themeConfig:{prism:t={}}}}=Object(w.a)(),{isDarkTheme:e}=Object(k.a)(),r=t.theme||E,n=t.darkTheme||r;return e?n:r},L=r(47),P=r.n(L);const B=/{([\d,-]+)}/,D=(t=["js","jsBlock","jsx","python","html"])=>{const e={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},r=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=t.map(t=>`(?:${e[t].start}\\s*(${r})\\s*${e[t].end})`).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)},_=/title=".*"/;e.a=({children:t,className:e,metastring:r})=>{const{siteConfig:{themeConfig:{prism:s={}}}}=Object(w.a)(),[u,c]=Object(o.useState)(!1),[h,f]=Object(o.useState)(!1);Object(o.useEffect)(()=>{f(!0)},[]);const g=Object(o.useRef)(null);let p=[],d="";const y=O();if(r&&B.test(r)){const t=r.match(B)[1];p=C.a.parse(t).filter(t=>t>0)}r&&_.test(r)&&(d=r.match(_)[0].split("title=")[1].replace(/"+/g,""));let b=e&&e.replace(/language-/,"");!b&&s.defaultLanguage&&(b=s.defaultLanguage);let E=t.replace(/\n$/,"");if(0===p.length&&void 0!==b){let e="";const r=(t=>{switch(t){case"js":case"javascript":case"ts":case"typescript":return D(["js","jsBlock"]);case"jsx":case"tsx":return D(["js","jsBlock","jsx"]);case"html":return D(["js","jsBlock","html"]);case"python":case"py":return D(["python"]);default:return D()}})(b),n=t.replace(/\n$/,"").split("\n");let o;for(let t=0;t<n.length;){const a=t+1,i=n[t].match(r);if(null!==i){switch(i.slice(1).reduce((t,e)=>t||e,void 0)){case"highlight-next-line":e+=a+",";break;case"highlight-start":o=a;break;case"highlight-end":e+=`${o}-${a-1},`}n.splice(t,1)}else t+=1}p=C.a.parse(e),E=n.join("\n")}const k=()=>{v()(E),c(!0),setTimeout(()=>c(!1),2e3)};return a.a.createElement(m,Object(n.a)({},l,{key:String(h),theme:y,code:E,language:b}),({className:t,style:e,tokens:r,getLineProps:o,getTokenProps:s})=>a.a.createElement(a.a.Fragment,null,d&&a.a.createElement("div",{style:e,className:P.a.codeBlockTitle},d),a.a.createElement("div",{className:P.a.codeBlockContent},a.a.createElement("button",{ref:g,type:"button","aria-label":"Copy code to clipboard",className:Object(i.a)(P.a.copyButton,{[P.a.copyButtonWithTitle]:d}),onClick:k},u?"Copied":"Copy"),a.a.createElement("div",{tabIndex:0,className:Object(i.a)(t,P.a.codeBlock,{[P.a.codeBlockWithTitle]:d})},a.a.createElement("div",{className:P.a.codeBlockLines,style:e},r.map((t,e)=>{1===t.length&&""===t[0].content&&(t[0].content="\n");const r=o({line:t,key:e});return p.includes(e+1)&&(r.className=r.className+" docusaurus-highlight-code-line"),a.a.createElement("div",Object(n.a)({key:e},r),t.map((t,e)=>a.a.createElement("span",Object(n.a)({key:e},s({token:t,key:e})))))}))))))}},120:function(t,e,r){"use strict";const n=(t,{target:e=document.body}={})=>{const r=document.createElement("textarea"),n=document.activeElement;r.value=t,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";const o=document.getSelection();let a=!1;o.rangeCount>0&&(a=o.getRangeAt(0)),e.append(r),r.select(),r.selectionStart=0,r.selectionEnd=t.length;let i=!1;try{i=document.execCommand("copy")}catch(s){}return r.remove(),a&&(o.removeAllRanges(),o.addRange(a)),n&&n.focus(),i};t.exports=n,t.exports.default=n},121:function(t,e){t.exports.parse=function(t){var e=t.split(",").map((function(t){return function(t){if(/^-?\d+$/.test(t))return parseInt(t,10);var e;if(e=t.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var r=e[1],n=e[2],o=e[3];if(r&&o){var a=[],i=(r=parseInt(r))<(o=parseInt(o))?1:-1;"-"!=n&&".."!=n&&"\u2025"!=n||(o+=i);for(var s=r;s!=o;s+=i)a.push(s);return a}}return[]}(t)}));return 0===e.length?[]:1===e.length?Array.isArray(e[0])?e[0]:e:e.reduce((function(t,e){return Array.isArray(t)||(t=[t]),Array.isArray(e)||(e=[e]),t.concat(e)}))}},129:function(t,e,r){"use strict";var n=r(0),o=r.n(n),a=r(126),i=r(114),s=r(48),l=r.n(s);const u=37,c=39;e.a=function(t){const{block:e,children:r,defaultValue:s,values:h,groupId:f}=t,{tabGroupChoices:g,setTabGroupChoices:p}=Object(a.a)(),[d,m]=Object(n.useState)(s),[y,v]=Object(n.useState)(!1);if(null!=f){const t=g[f];null!=t&&t!==d&&h.some(e=>e.value===t)&&m(t)}const b=t=>{m(t),null!=f&&p(f,t)},C=[],w=t=>{t.metaKey||t.altKey||t.ctrlKey||v(!0)},E=()=>{v(!1)};return Object(n.useEffect)(()=>{window.addEventListener("keydown",w),window.addEventListener("mousedown",E)},[]),o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":e})},h.map(({value:t,label:e})=>o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":d===t,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":d===t}),style:y?{}:{outline:"none"},key:t,ref:t=>C.push(t),onKeyDown:t=>{((t,e,r)=>{switch(r.keyCode){case c:((t,e)=>{const r=t.indexOf(e)+1;t[r]?t[r].focus():t[0].focus()})(t,e);break;case u:((t,e)=>{const r=t.indexOf(e)-1;t[r]?t[r].focus():t[t.length-1].focus()})(t,e)}})(C,t.target,t),w(t)},onFocus:()=>b(t),onClick:()=>{b(t),v(!1)},onPointerDown:()=>v(!1)},e))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(r).filter(t=>t.props.value===d)[0]))}},130:function(t,e,r){"use strict";var n=r(0),o=r.n(n);e.a=function(t){return o.a.createElement("div",null,t.children)}},147:function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(r,!0).forEach((function(e){m(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function c(t,e,r){return e&&u(t.prototype,e),r&&u(t,r),t}function h(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?g(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function g(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function m(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var y=r(0),v=(r(7),r(165)),b=r(149);function C(t){for(var e="",r=0;r<t.length;r++){var n=t.charCodeAt(r);n<128?e+=String.fromCharCode(n):n<2048?(e+=String.fromCharCode(192|n>>6),e+=String.fromCharCode(128|63&n)):n<55296||n>=57344?(e+=String.fromCharCode(224|n>>12),e+=String.fromCharCode(128|n>>6&63),e+=String.fromCharCode(128|63&n)):(r++,n=65536+((1023&n)<<10|1023&t.charCodeAt(r)),e+=String.fromCharCode(240|n>>18),e+=String.fromCharCode(128|n>>12&63),e+=String.fromCharCode(128|n>>6&63),e+=String.fromCharCode(128|63&n))}return e}var w={size:128,level:"L",bgColor:"#FFFFFF",fgColor:"#000000",includeMargin:!1};function E(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=[];return t.forEach((function(t,n){var o=null;t.forEach((function(a,i){if(!a&&null!==o)return r.push("M".concat(o+e," ").concat(n+e,"h").concat(i-o,"v1H").concat(o+e,"z")),void(o=null);if(i!==t.length-1)a&&null===o&&(o=i);else{if(!a)return;null===o?r.push("M".concat(i+e,",").concat(n+e," h1v1H").concat(i+e,"z")):r.push("M".concat(o+e,",").concat(n+e," h").concat(i+1-o,"v1H").concat(o+e,"z"))}}))})),r.join("")}function k(t,e){return t.slice().map((function(t,r){return r<e.y||r>=e.y+e.h?t:t.map((function(t,r){return(r<e.x||r>=e.x+e.w)&&t}))}))}function O(t,e){var r=t.imageSettings,n=t.size,o=t.includeMargin;if(null==r)return null;var a=o?4:0,i=e.length+2*a,s=Math.floor(.1*n),l=i/n,u=(r.width||s)*l,c=(r.height||s)*l,h=null==r.x?e.length/2-u/2:r.x*l,f=null==r.y?e.length/2-c/2:r.y*l,g=null;if(r.excavate){var p=Math.floor(h),d=Math.floor(f);g={x:p,y:d,w:Math.ceil(u+h-p),h:Math.ceil(c+f-d)}}return{x:h,y:f,h:c,w:u,excavation:g}}var L=function(){try{(new Path2D).addPath(new Path2D)}catch(t){return!1}return!0}(),P=function(t){function e(){var t,r;l(this,e);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return m(g(r=h(this,(t=f(e)).call.apply(t,[this].concat(o)))),"_canvas",void 0),m(g(r),"_image",void 0),m(g(r),"state",{imgLoaded:!1}),m(g(r),"handleImageLoad",(function(){r.setState({imgLoaded:!0})})),r}return p(e,t),c(e,[{key:"componentDidMount",value:function(){this.update()}},{key:"componentDidUpdate",value:function(){this.update()}},{key:"update",value:function(){var t=this.props,e=t.value,r=t.size,n=t.level,o=t.bgColor,a=t.fgColor,i=t.includeMargin,s=t.imageSettings,l=new v(-1,b[n]);if(l.addData(C(e)),l.make(),null!=this._canvas){var u=this._canvas,c=u.getContext("2d");if(!c)return;var h=l.modules;if(null===h)return;var f=i?4:0,g=h.length+2*f,p=O(this.props,h);null!=s&&null!=p&&null!=p.excavation&&(h=k(h,p.excavation));var d=window.devicePixelRatio||1;u.height=u.width=r*d;var m=r/g*d;c.scale(m,m),c.fillStyle=o,c.fillRect(0,0,g,g),c.fillStyle=a,L?c.fill(new Path2D(E(h,f))):h.forEach((function(t,e){t.forEach((function(t,r){t&&c.fillRect(r+f,e+f,1,1)}))})),this.state.imgLoaded&&this._image&&null!=p&&c.drawImage(this._image,p.x+f,p.y+f,p.w,p.h)}}},{key:"render",value:function(){var t=this,e=this.props,r=(e.value,e.size),n=(e.level,e.bgColor,e.fgColor,e.style),a=(e.includeMargin,e.imageSettings),l=s(e,["value","size","level","bgColor","fgColor","style","includeMargin","imageSettings"]),u=i({height:r,width:r},n),c=null,h=a&&a.src;return null!=a&&null!=h&&(c=y.createElement("img",{src:h,style:{display:"none"},onLoad:this.handleImageLoad,ref:function(e){return t._image=e}})),y.createElement(y.Fragment,null,y.createElement("canvas",o({style:u,height:r,width:r,ref:function(e){return t._canvas=e}},l)),c)}}]),e}(y.PureComponent);m(P,"defaultProps",w);var B=function(t){function e(){return l(this,e),h(this,f(e).apply(this,arguments))}return p(e,t),c(e,[{key:"render",value:function(){var t=this.props,e=t.value,r=t.size,n=t.level,a=t.bgColor,i=t.fgColor,l=t.includeMargin,u=t.imageSettings,c=s(t,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]),h=new v(-1,b[n]);h.addData(C(e)),h.make();var f=h.modules;if(null===f)return null;var g=l?4:0,p=f.length+2*g,d=O(this.props,f),m=null;null!=u&&null!=d&&(null!=d.excavation&&(f=k(f,d.excavation)),m=y.createElement("image",{xlinkHref:u.src,height:d.h,width:d.w,x:d.x+g,y:d.y+g,preserveAspectRatio:"none"}));var w=E(f,g);return y.createElement("svg",o({shapeRendering:"crispEdges",height:r,width:r,viewBox:"0 0 ".concat(p," ").concat(p)},c),y.createElement("path",{fill:a,d:"M0,0 h".concat(p,"v").concat(p,"H0z")}),y.createElement("path",{fill:i,d:w}),m)}}]),e}(y.PureComponent);m(B,"defaultProps",w);var D=function(t){var e=t.renderAs,r=s(t,["renderAs"]),n="svg"===e?B:P;return y.createElement(n,r)};D.defaultProps=i({renderAs:"canvas"},w),t.exports=D},148:function(t,e){t.exports={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8}},149:function(t,e){t.exports={L:1,M:0,Q:3,H:2}},150:function(t,e,r){var n=r(151);function o(t,e){if(null==t.length)throw new Error(t.length+"/"+e);for(var r=0;r<t.length&&0==t[r];)r++;this.num=new Array(t.length-r+e);for(var n=0;n<t.length-r;n++)this.num[n]=t[n+r]}o.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),r=0;r<this.getLength();r++)for(var a=0;a<t.getLength();a++)e[r+a]^=n.gexp(n.glog(this.get(r))+n.glog(t.get(a)));return new o(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=n.glog(this.get(0))-n.glog(t.get(0)),r=new Array(this.getLength()),a=0;a<this.getLength();a++)r[a]=this.get(a);for(a=0;a<t.getLength();a++)r[a]^=n.gexp(n.glog(t.get(a))+e);return new o(r,0).mod(t)}},t.exports=o},151:function(t,e){for(var r={glog:function(t){if(t<1)throw new Error("glog("+t+")");return r.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return r.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},n=0;n<8;n++)r.EXP_TABLE[n]=1<<n;for(n=8;n<256;n++)r.EXP_TABLE[n]=r.EXP_TABLE[n-4]^r.EXP_TABLE[n-5]^r.EXP_TABLE[n-6]^r.EXP_TABLE[n-8];for(n=0;n<255;n++)r.LOG_TABLE[r.EXP_TABLE[n]]=n;t.exports=r},165:function(t,e,r){var n=r(166),o=r(167),a=r(168),i=r(169),s=r(150);function l(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}var u=l.prototype;u.addData=function(t){var e=new n(t);this.dataList.push(e),this.dataCache=null},u.isDark=function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},u.getModuleCount=function(){return this.moduleCount},u.make=function(){if(this.typeNumber<1){var t=1;for(t=1;t<40;t++){for(var e=o.getRSBlocks(t,this.errorCorrectLevel),r=new a,n=0,s=0;s<e.length;s++)n+=e[s].dataCount;for(s=0;s<this.dataList.length;s++){var l=this.dataList[s];r.put(l.mode,4),r.put(l.getLength(),i.getLengthInBits(l.mode,t)),l.write(r)}if(r.getLengthInBits()<=8*n)break}this.typeNumber=t}this.makeImpl(!1,this.getBestMaskPattern())},u.makeImpl=function(t,e){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++){this.modules[r]=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++)this.modules[r][n]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,e),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=l.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e)},u.setupPositionProbePattern=function(t,e){for(var r=-1;r<=7;r++)if(!(t+r<=-1||this.moduleCount<=t+r))for(var n=-1;n<=7;n++)e+n<=-1||this.moduleCount<=e+n||(this.modules[t+r][e+n]=0<=r&&r<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==r||6==r)||2<=r&&r<=4&&2<=n&&n<=4)},u.getBestMaskPattern=function(){for(var t=0,e=0,r=0;r<8;r++){this.makeImpl(!0,r);var n=i.getLostPoint(this);(0==r||t>n)&&(t=n,e=r)}return e},u.createMovieClip=function(t,e,r){var n=t.createEmptyMovieClip(e,r);this.make();for(var o=0;o<this.modules.length;o++)for(var a=1*o,i=0;i<this.modules[o].length;i++){var s=1*i;this.modules[o][i]&&(n.beginFill(0,100),n.moveTo(s,a),n.lineTo(s+1,a),n.lineTo(s+1,a+1),n.lineTo(s,a+1),n.endFill())}return n},u.setupTimingPattern=function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},u.setupPositionAdjustPattern=function(){for(var t=i.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var r=0;r<t.length;r++){var n=t[e],o=t[r];if(null==this.modules[n][o])for(var a=-2;a<=2;a++)for(var s=-2;s<=2;s++)this.modules[n+a][o+s]=-2==a||2==a||-2==s||2==s||0==a&&0==s}},u.setupTypeNumber=function(t){for(var e=i.getBCHTypeNumber(this.typeNumber),r=0;r<18;r++){var n=!t&&1==(e>>r&1);this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=n}for(r=0;r<18;r++){n=!t&&1==(e>>r&1);this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=n}},u.setupTypeInfo=function(t,e){for(var r=this.errorCorrectLevel<<3|e,n=i.getBCHTypeInfo(r),o=0;o<15;o++){var a=!t&&1==(n>>o&1);o<6?this.modules[o][8]=a:o<8?this.modules[o+1][8]=a:this.modules[this.moduleCount-15+o][8]=a}for(o=0;o<15;o++){a=!t&&1==(n>>o&1);o<8?this.modules[8][this.moduleCount-o-1]=a:o<9?this.modules[8][15-o-1+1]=a:this.modules[8][15-o-1]=a}this.modules[this.moduleCount-8][8]=!t},u.mapData=function(t,e){for(var r=-1,n=this.moduleCount-1,o=7,a=0,s=this.moduleCount-1;s>0;s-=2)for(6==s&&s--;;){for(var l=0;l<2;l++)if(null==this.modules[n][s-l]){var u=!1;a<t.length&&(u=1==(t[a]>>>o&1)),i.getMask(e,n,s-l)&&(u=!u),this.modules[n][s-l]=u,-1==--o&&(a++,o=7)}if((n+=r)<0||this.moduleCount<=n){n-=r,r=-r;break}}},l.PAD0=236,l.PAD1=17,l.createData=function(t,e,r){for(var n=o.getRSBlocks(t,e),s=new a,u=0;u<r.length;u++){var c=r[u];s.put(c.mode,4),s.put(c.getLength(),i.getLengthInBits(c.mode,t)),c.write(s)}var h=0;for(u=0;u<n.length;u++)h+=n[u].dataCount;if(s.getLengthInBits()>8*h)throw new Error("code length overflow. ("+s.getLengthInBits()+">"+8*h+")");for(s.getLengthInBits()+4<=8*h&&s.put(0,4);s.getLengthInBits()%8!=0;)s.putBit(!1);for(;!(s.getLengthInBits()>=8*h||(s.put(l.PAD0,8),s.getLengthInBits()>=8*h));)s.put(l.PAD1,8);return l.createBytes(s,n)},l.createBytes=function(t,e){for(var r=0,n=0,o=0,a=new Array(e.length),l=new Array(e.length),u=0;u<e.length;u++){var c=e[u].dataCount,h=e[u].totalCount-c;n=Math.max(n,c),o=Math.max(o,h),a[u]=new Array(c);for(var f=0;f<a[u].length;f++)a[u][f]=255&t.buffer[f+r];r+=c;var g=i.getErrorCorrectPolynomial(h),p=new s(a[u],g.getLength()-1).mod(g);l[u]=new Array(g.getLength()-1);for(f=0;f<l[u].length;f++){var d=f+p.getLength()-l[u].length;l[u][f]=d>=0?p.get(d):0}}var m=0;for(f=0;f<e.length;f++)m+=e[f].totalCount;var y=new Array(m),v=0;for(f=0;f<n;f++)for(u=0;u<e.length;u++)f<a[u].length&&(y[v++]=a[u][f]);for(f=0;f<o;f++)for(u=0;u<e.length;u++)f<l[u].length&&(y[v++]=l[u][f]);return y},t.exports=l},166:function(t,e,r){var n=r(148);function o(t){this.mode=n.MODE_8BIT_BYTE,this.data=t}o.prototype={getLength:function(t){return this.data.length},write:function(t){for(var e=0;e<this.data.length;e++)t.put(this.data.charCodeAt(e),8)}},t.exports=o},167:function(t,e,r){var n=r(149);function o(t,e){this.totalCount=t,this.dataCount=e}o.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],o.getRSBlocks=function(t,e){var r=o.getRsBlockTable(t,e);if(null==r)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var n=r.length/3,a=new Array,i=0;i<n;i++)for(var s=r[3*i+0],l=r[3*i+1],u=r[3*i+2],c=0;c<s;c++)a.push(new o(l,u));return a},o.getRsBlockTable=function(t,e){switch(e){case n.L:return o.RS_BLOCK_TABLE[4*(t-1)+0];case n.M:return o.RS_BLOCK_TABLE[4*(t-1)+1];case n.Q:return o.RS_BLOCK_TABLE[4*(t-1)+2];case n.H:return o.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},t.exports=o},168:function(t,e){function r(){this.buffer=new Array,this.length=0}r.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var r=0;r<e;r++)this.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},t.exports=r},169:function(t,e,r){var n=r(148),o=r(150),a=r(151),i=0,s=1,l=2,u=3,c=4,h=5,f=6,g=7,p={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;p.getBCHDigit(e)-p.getBCHDigit(p.G15)>=0;)e^=p.G15<<p.getBCHDigit(e)-p.getBCHDigit(p.G15);return(t<<10|e)^p.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;p.getBCHDigit(e)-p.getBCHDigit(p.G18)>=0;)e^=p.G18<<p.getBCHDigit(e)-p.getBCHDigit(p.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return p.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,r){switch(t){case i:return(e+r)%2==0;case s:return e%2==0;case l:return r%3==0;case u:return(e+r)%3==0;case c:return(Math.floor(e/2)+Math.floor(r/3))%2==0;case h:return e*r%2+e*r%3==0;case f:return(e*r%2+e*r%3)%2==0;case g:return(e*r%3+(e+r)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new o([1],0),r=0;r<t;r++)e=e.multiply(new o([1,a.gexp(r)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case n.MODE_NUMBER:return 10;case n.MODE_ALPHA_NUM:return 9;case n.MODE_8BIT_BYTE:case n.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case n.MODE_NUMBER:return 12;case n.MODE_ALPHA_NUM:return 11;case n.MODE_8BIT_BYTE:return 16;case n.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case n.MODE_NUMBER:return 14;case n.MODE_ALPHA_NUM:return 13;case n.MODE_8BIT_BYTE:return 16;case n.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),r=0,n=0;n<e;n++)for(var o=0;o<e;o++){for(var a=0,i=t.isDark(n,o),s=-1;s<=1;s++)if(!(n+s<0||e<=n+s))for(var l=-1;l<=1;l++)o+l<0||e<=o+l||0==s&&0==l||i==t.isDark(n+s,o+l)&&a++;a>5&&(r+=3+a-5)}for(n=0;n<e-1;n++)for(o=0;o<e-1;o++){var u=0;t.isDark(n,o)&&u++,t.isDark(n+1,o)&&u++,t.isDark(n,o+1)&&u++,t.isDark(n+1,o+1)&&u++,0!=u&&4!=u||(r+=3)}for(n=0;n<e;n++)for(o=0;o<e-6;o++)t.isDark(n,o)&&!t.isDark(n,o+1)&&t.isDark(n,o+2)&&t.isDark(n,o+3)&&t.isDark(n,o+4)&&!t.isDark(n,o+5)&&t.isDark(n,o+6)&&(r+=40);for(o=0;o<e;o++)for(n=0;n<e-6;n++)t.isDark(n,o)&&!t.isDark(n+1,o)&&t.isDark(n+2,o)&&t.isDark(n+3,o)&&t.isDark(n+4,o)&&!t.isDark(n+5,o)&&t.isDark(n+6,o)&&(r+=40);var c=0;for(o=0;o<e;o++)for(n=0;n<e;n++)t.isDark(n,o)&&c++;return r+=10*(Math.abs(100*c/e/e-50)/5)}};t.exports=p}}]);