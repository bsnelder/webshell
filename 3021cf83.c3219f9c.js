(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{110:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=b(n),m=a,p=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return n?r.a.createElement(p,c(c({ref:t},l),{},{components:n})):r.a.createElement(p,c({ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},111:function(e,t,n){"use strict";var a=n(0),r=n(20);t.a=function(){var e=Object(a.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},112:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var a=n(111),r=n(114);function i(){var e=Object(a.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,c=void 0!==o&&o,s=i.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(c)return t+n;var b=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+b:b}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},113:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},114:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},115:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var a=n(0),r=n(112),i=function(e){var t=e.reference,n=e.member,r=e.type;return a.createElement("span",{className:"api-symbol "+r},t,n?"."+n:"")},o=function(e){var t=e.reference,n=e.type,i=e.overrideUrl,o=e.member,c=o?"#"+o.toLowerCase():"",s="interface"===n?"/docs/api/interfaces/"+t.toLowerCase()+c:"class"===n?"/docs/api/classes/"+t.toLowerCase()+c:"enum"===n?"/docs/api/enums/"+t.toLowerCase()+c:"/docs/api/index#"+t.toLowerCase();return a.createElement("a",{className:"api-ref api-symbol "+n,href:Object(r.a)(i||s)},t,o?"."+o:"")}},117:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"d",(function(){return p})),n.d(t,"c",(function(){return h})),n.d(t,"b",(function(){return f}));var a=n(131),r=n.n(a),i=n(132),o=n(0),c=n(129),s=n(112),l=n(126),b=n(127);function u(e){var t=o.useState({content:"",error:!1}),n=t[0],a=t[1];return o.useEffect((function(){var t=!1;function n(){return(n=Object(i.a)(r.a.mark((function n(){var i,o;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch(e);case 3:if(!(i=n.sent).ok){n.next=11;break}return n.next=7,i.text();case 7:o=n.sent,!t&&a({error:!1,content:o}),n.next=12;break;case 11:!t&&a({error:!0,content:""});case 12:n.next=18;break;case 14:n.prev=14,n.t0=n.catch(0),console.info(n.t0),!t&&a({error:!0,content:""});case 18:case"end":return n.stop()}}),n,null,[[0,14]])})))).apply(this,arguments)}return function(){n.apply(this,arguments)}(),function(){t=!0}}),[e]),n}var d=function(e){var t=e.children;return o.createElement("div",{className:"mdxCodeBlock__-node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-"},t)},m=function(e){var t=e.lang,n=e.lines,a=e.title,r=e.content;return o.createElement(c.a,{className:"language-"+t,metastring:(n?"{"+n+"}":"")+" "+(a?'title="'+a+'"':""),title:a},r)},p=function(e){var t=e.source,n=e.lang,a=e.lines,r=e.title,i=Object(s.a)("/snippets/"+t),c=u(i),l=r||t;return c.error?o.createElement("div",{className:"admonition admonition-warning alert alert--danger"},i," snippet could not be loaded"):o.createElement(d,null,o.createElement(m,{lang:n,content:c.content,lines:a,title:l}))},h=function(e){var t=e.packages,n=e.dev,a=void 0!==n&&n;return o.createElement(l.a,{defaultValue:"yarn",values:[{label:"yarn",value:"yarn"},{label:"npm",value:"npm"}]},o.createElement(b.a,{value:"yarn"},o.createElement(m,{lang:"sh",content:"yarn add "+(a?"--dev ":"")+t.split(/\s+/).join(" \\\n         ")})),o.createElement(b.a,{value:"npm"},o.createElement(m,{lang:"sh",content:"npm install --save "+(a?"--only=dev ":"")+t.split(/\s+/).join(" \\\n    ")})))},f=function(e){var t=e.sourceBase,n=e.titleBase,a=e.jsx,r=void 0!==a&&a,i=e.lines,c=void 0===i?null:i,p=Object(s.a)("/snippets/"+t+"."+(r?"tsx":"ts")),h=Object(s.a)("/snippets/"+t+"."+(r?"jsx":"js")),f=u(p),v=u(h),O=n||t;return f.error?o.createElement("div",{className:"admonition admonition-warning alert alert--danger"},p," snippet could not be loaded"):v.error?o.createElement("div",{className:"admonition admonition-warning alert alert--danger"},h," snippet could not be loaded"):o.createElement(d,null,o.createElement(l.a,{defaultValue:"ts",values:[{label:"Typescript",value:"ts"},{label:"JavaScript",value:"js"}]},o.createElement(b.a,{value:"ts"},o.createElement(m,{lang:r?"tsx":"ts",content:f.content,lines:c,title:O+"."+(r?"tsx":"ts")})),o.createElement(b.a,{value:"js"},o.createElement(m,{lang:r?"jsx":"js",content:v.content,lines:c,title:O+"."+(r?"jsx":"js")}))))}},118:function(e,t,n){"use strict";var a=n(0),r=n.n(a).a.createContext(void 0);t.a=r},119:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},120:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0);const r=()=>a.createElement("span",{className:"webshell"},"webshell")},121:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0);const r={hoc:"Higher Order Component",dom:"Document Object Model"},i={hoc:"https://reactjs.org/docs/higher-order-components.html",viewport:"https://developer.mozilla.org/en-US/docs/Glossary/Viewport",hooks:"https://reactjs.org/docs/hooks-overview.html",dom:"https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction","messaging system":"https://github.com/react-native-community/react-native-webview/blob/master/docs/Guide.md#communicating-between-js-and-native"},o=({id:e,title:t})=>{const n=i[e&&e.toLowerCase()],o=r[e&&e.toLowerCase()],c=void 0===n?`MISSING REFERENCE '${e}'`:t||e,s=e=>o?a.createElement("abbr",e):a.createElement("span",e);return a.createElement("strong",null,a.createElement(s,{title:o||void 0},a.createElement("a",{className:"term",title:o||null,href:n},c)))}},122:function(e,t,n){"use strict";var a=n(0),r=n(118);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},123:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o}));var a=n(0);const r={webview:"https://github.com/react-native-community/react-native-webview",scrollview:"https://reactnative.dev/docs/scrollview",linking:"https://reactnative.dev/docs/linking",__dev__:"https://reactnative.dev/docs/javascript-environment.html"},i=({name:e,type:t})=>{const n=r[e&&e.toLowerCase()],i=n?e:"MISSING REFERENCE FOR "+e;return a.createElement("a",{className:"api-ref api-symbol "+t,href:n},i)},o=()=>a.createElement(i,{name:"WebView",type:"class"})},124:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0),r=n(115);const i=e=>a.createElement("div",{className:"card api-box shadow--lt",style:{textAlign:"center"}},a.createElement("div",{className:"card__header api-box__title"},"~ API Reference ~"),a.createElement(r.a,e))},125:function(e,t,n){"use strict";var a=n(0),r=n(119);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},133:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0),r=n(117);const i=()=>a.createElement(r.a,{lang:"jsx",content:"const Webshell = makeWebshell(\n  WebView,\n  new HandleLinkPressFeature()\n);\n\nexport default function AugmentedWebView(\n  webViewProps\n) {\n  const onLinkPress = (target) => {\n    Linking.openURL(target.uri);\n  };\n  return (\n    <Webshell\n      onDOMLinkPress={onLinkPress}\n      {...webViewProps}\n    />\n  );\n}\n"})},70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return m})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return f}));var a=n(2),r=n(6),i=(n(0),n(110)),o=(n(126),n(127),n(120)),c=n(121),s=n(123),l=n(115),b=n(124),u=n(117),d=(n(133),{id:"getting-started",title:"Getting Started"}),m={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"import {",source:"@site/docs/getting-started.mdx",slug:"/getting-started",permalink:"/webshell/docs/getting-started",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/getting-started.mdx",version:"current",sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/webshell/docs/"},next:{title:"Autoheight WebView",permalink:"/webshell/docs/autoheight"}},p=[{value:"Install",id:"install",children:[]},{value:"How does it work?",id:"how-does-it-work",children:[]},{value:"What is a Feature?",id:"what-is-a-feature",children:[{value:"Definition",id:"definition",children:[]},{value:"Read More",id:"read-more",children:[]}]},{value:"What is a Shell?",id:"what-is-a-shell",children:[]},{value:"Minimal Example",id:"minimal-example",children:[]}],h={rightToc:p};function f(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"install"},"Install"),Object(i.b)(u.c,{packages:"@formidable-webview/webshell",mdxType:"InstallPackageSnippet"}),Object(i.b)("h2",{id:"how-does-it-work"},"How does it work?"),Object(i.b)("p",null,"@formidable-webview/webshell exports a simple builder-function (",Object(i.b)(c.a,{id:"HOC",mdxType:"Term"}),") which\ncreates an augmented ",Object(i.b)(s.b,{mdxType:"WebView"})," component with additional ",Object(i.b)(c.a,{id:"DOM",mdxType:"Term"}),"-based features. The returned\ncomponent behaves exactly like a ",Object(i.b)(s.b,{mdxType:"WebView"}),", and given a ",Object(i.b)("inlineCode",{parentName:"p"},"ref")," prop, you'll get\nthe underlying ",Object(i.b)(s.b,{mdxType:"WebView"})," instance and be able to access its imperative methods."),Object(i.b)("p",null,"The ",Object(i.b)(c.a,{id:"DOM",mdxType:"Term"})," features form an abstraction layer over ",Object(i.b)(s.b,{mdxType:"WebView"}),"'s ",Object(i.b)(c.a,{id:"messaging system",mdxType:"Term"}),",\nhence the \u201cshell\u201d in ",Object(i.b)(o.a,{mdxType:"Webshell"}),". Each ",Object(i.b)(c.a,{id:"DOM",mdxType:"Term"}),"\nfeature augments the ",Object(i.b)(s.b,{mdxType:"WebView"})," with new props and behaviors."),Object(i.b)("p",null,"And you can, of course, ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./implementing-features"}),"implement any DOM feature you'd\nlike"),". This library also presents a set of good\npractices to test features in isolation and, by extension, test any injected\nscripts. See ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./tooling"}),"the tooling guide"),"."),Object(i.b)("h2",{id:"what-is-a-feature"},"What is a Feature?"),Object(i.b)("h3",{id:"definition"},"Definition"),Object(i.b)("p",null,"In the context of ",Object(i.b)(o.a,{mdxType:"Webshell"}),", a feature is like a plugin. It encapsulates\nbehaviors injectable into ",Object(i.b)(s.b,{mdxType:"WebView"}),"s. More precisely, a feature can do the\nfollowing things:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Alter the content of the ",Object(i.b)(c.a,{id:"DOM",mdxType:"Term"}),";"),Object(i.b)("li",{parentName:"ul"},"Inject behaviors through scripts in the ",Object(i.b)(c.a,{id:"DOM",mdxType:"Term"}),";"),Object(i.b)("li",{parentName:"ul"},"Add handler props to the ",Object(i.b)(s.b,{mdxType:"WebView"})," component in order to react to specific events. These features are called ",Object(i.b)("em",{parentName:"li"},"event features"),".")),Object(i.b)(b.a,{reference:"Feature",type:"class",mdxType:"APIBox"}),Object(i.b)("p",null,"Event features will augment the ",Object(i.b)(s.b,{mdxType:"WebView"})," with ",Object(i.b)(c.a,{id:"DOM",mdxType:"Term"})," message\nhandler props, for example ",Object(i.b)("inlineCode",{parentName:"p"},"onDOMLinkPress"),". Here are examples of event features you\ncan assemble in the shell:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Intercept click events on anchors and prevent navigation (",Object(i.b)(l.a,{reference:"HandleLinkPressFeature",type:"variable",mdxType:"APIReference"}),");"),Object(i.b)("li",{parentName:"ul"},"Get notified when the page content size changes (",Object(i.b)(l.a,{reference:"HandleHTMLDimensionsFeature",type:"variable",mdxType:"APIReference"}),");")),Object(i.b)("h3",{id:"read-more"},"Read More"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"./features"}),"Read the complete list of features exposed by this library"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"./implementing-features"}),"Learn what implementing a feature looks like"),".")),Object(i.b)("h2",{id:"what-is-a-shell"},"What is a Shell?"),Object(i.b)("p",null,"This library exposes one landmark function, ",Object(i.b)(l.a,{reference:"makeWebshell",type:"function",mdxType:"APIReference"}),", a ",Object(i.b)(c.a,{id:"HOC",mdxType:"Term"}),"\nwhich ",Object(i.b)("strong",{parentName:"p"},"augments")," a ",Object(i.b)(s.b,{mdxType:"WebView"})," passed as first argument with features passed\nas remaining arguments."),Object(i.b)(b.a,{reference:"makeWebshell",type:"function",mdxType:"APIBox"}),Object(i.b)("p",null,"Features are classes customizable during instantiation, where you can pass an\nobject of options to their constructor. Sometimes, a feature options object\nmight not have required fields, and you can skip the constructor argument if\nyou are OK with the defaults."),Object(i.b)("p",null,"In the bellow snippet,\nwe are creating a component which augments ",Object(i.b)(s.b,{mdxType:"WebView"})," with the two features\npreviously mentioned, but of course any number of features could be instantiated!"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const Webshell = makeWebshell(\n  WebView,\n  new HandleLinkPressFeature({ preventDefault: true }),\n  new HandleHTMLDimensionsFeature({ forceImplementation: 'mutation' })\n);\n")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"We will use the word ",Object(i.b)("em",{parentName:"p"},"shell")," as an alias to instances of ",Object(i.b)(l.a,{reference:"WebshellComponent",type:"alias",mdxType:"APIReference"})," produced\nby ",Object(i.b)(l.a,{reference:"makeWebshell",type:"function",mdxType:"APIReference"})," function."))),Object(i.b)("p",null,"The injected features will add two props to the shell, which already supports all ",Object(i.b)(s.b,{mdxType:"WebView"})," props:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"onDOMLinkPress")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"onDOMHTMLDimensions"))),Object(i.b)("p",null,"Now it's time to try out this code in a full example."),Object(i.b)("h2",{id:"minimal-example"},"Minimal Example"),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"This example is shown for didactic purposes. If you need an autoheight ",Object(i.b)(s.b,{mdxType:"WebView"}),"\n, ",Object(i.b)("a",{href:"./autoheight"},"read the guide dedicated to ",Object(i.b)(l.b,{reference:"useAutoheight",type:"function",mdxType:"APISymbolFormat"})," hook")," which covers many caveats and their workarounds."))),Object(i.b)("p",null,"The below example will benefit from two features to implement the following behaviors:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Open external links in the system browser, thanks to ",Object(i.b)(l.a,{reference:"HandleLinkPressFeature",type:"variable",mdxType:"APIReference"}),";"),Object(i.b)("li",{parentName:"ul"},"Automatically adjust ",Object(i.b)(c.a,{id:"viewport",mdxType:"Term"})," height with content height, thanks to ",Object(i.b)(l.a,{reference:"HandleHTMLDimensionsFeature",type:"variable",mdxType:"APIReference"}),".")),Object(i.b)(u.b,{jsx:!0,sourceBase:"basic",titleBase:"NaiveAutoheightWebView",mdxType:"DualCodeSource"}),Object(i.b)("p",null,"As you can see, each feature has added two event handler props to the shell,\n",Object(i.b)("inlineCode",{parentName:"p"},"onDOMLinkPress")," and ",Object(i.b)("inlineCode",{parentName:"p"},"onDOMHTMLDimensions"),". When the ",Object(i.b)(c.a,{id:"DOM",mdxType:"Term"})," is\nloaded, the two features scripts are executed and register handlers to communicate with the shell:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"onDOMLinkPress")," is invoked when the user clicks on anchors. The above implementation opens links to system browser thanks to React Native ",Object(i.b)(s.a,{name:"Linking",type:"variable",mdxType:"ReactReference"})," API."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"onDOMHTMLDimensions")," is invoked when the page content size changes. The above implementation stores this size in a local state and injects it to the shell ",Object(i.b)("inlineCode",{parentName:"li"},"style")," prop. We have just created a minimal Autoheight WebView!")),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"This example is shown for didactic purposes. If you need an autoheight ",Object(i.b)(s.b,{mdxType:"WebView"}),"\n, ",Object(i.b)("a",{href:"./autoheight"},"read the guide dedicated to ",Object(i.b)(l.b,{reference:"useAutoheight",type:"function",mdxType:"APISymbolFormat"})," hook")," which covers many caveats and their workarounds."))))}f.isMDXComponent=!0}}]);