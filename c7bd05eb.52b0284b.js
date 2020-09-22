(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var i=n(2),r=n(6),a=(n(0),n(110)),o=n(121),l=n(117),s={id:"tooling",title:"Tooling"},c={unversionedId:"tooling",id:"tooling",isDocsHomePage:!1,title:"Tooling",description:"The objectives of the setup are:",source:"@site/docs/tooling.mdx",slug:"/tooling",permalink:"/webshell/docs/tooling",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/tooling.mdx",version:"current",sidebar:"someSidebar",previous:{title:"Implementing Features",permalink:"/webshell/docs/implementing-features"},next:{title:"Features Reference",permalink:"/webshell/docs/features"}},u=[{value:"Babel",id:"babel",children:[{value:"Install Plugin",id:"install-plugin",children:[]},{value:"Configure Plugin",id:"configure-plugin",children:[]}]},{value:"ESLint",id:"eslint",children:[{value:"Install Plugin",id:"install-plugin-1",children:[]},{value:"Configure Plugin",id:"configure-plugin-1",children:[]}]},{value:"Jest",id:"jest",children:[]},{value:"Syntax Highlight",id:"syntax-highlight",children:[{value:"VSCode",id:"vscode",children:[]},{value:"Github",id:"github",children:[]},{value:"Gitlab",id:"gitlab",children:[]}]},{value:"Debugging WebViews",id:"debugging-webviews",children:[]}],b={rightToc:u};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The objectives of the setup are:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Import ",Object(a.b)(o.a,{id:"DOM",mdxType:"Term"})," scripts (",Object(a.b)("inlineCode",{parentName:"li"},".webjs"),") as strings without the need of an additional bundle;"),Object(a.b)("li",{parentName:"ul"},"Statically check ",Object(a.b)(o.a,{id:"DOM",mdxType:"Term"})," scripts for syntax errors;"),Object(a.b)("li",{parentName:"ul"},"Statically check ",Object(a.b)(o.a,{id:"DOM",mdxType:"Term"})," scripts compatibility given targeted WebViews versions;"),Object(a.b)("li",{parentName:"ul"},"Test the ",Object(a.b)(o.a,{id:"DOM",mdxType:"Term"})," scripts behaviors.")),Object(a.b)("h2",{id:"babel"},"Babel"),Object(a.b)("p",null,"To import ",Object(a.b)("inlineCode",{parentName:"p"},".webjs")," files as strings, we will use\n",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.npmjs.com/package/babel-plugin-inline-import"}),"babel-plugin-inline-import"),"\nwith ",Object(a.b)("inlineCode",{parentName:"p"},"webjs")," or whichever extension you are using for your ",Object(a.b)("inlineCode",{parentName:"p"},"WebView")," scripts.\nThis plugin will allow you to import scripts as strings instead of transpiling the module."),Object(a.b)("h3",{id:"install-plugin"},"Install Plugin"),Object(a.b)(l.c,{dev:!0,packages:"babel-plugin-inline-import",mdxType:"InstallPackageSnippet"}),Object(a.b)("h3",{id:"configure-plugin"},"Configure Plugin"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json",metastring:'title="babel.config.js"',title:'"babel.config.js"'}),'{\n  // ...\n  "plugins": [\n    [\n      "babel-plugin-inline-import",\n      {\n        "extensions": ["webjs"]\n      }\n    ],\n    // ...\n  ]\n}\n')),Object(a.b)("h2",{id:"eslint"},"ESLint"),Object(a.b)("p",null,"You can use\n",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/formidable-webview/eslint-config-webjs"}),"@formidable-webview/eslint-config-webjs"),"\nto target ",Object(a.b)("inlineCode",{parentName:"p"},".webjs")," files with specific config:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Enforce ECMAScript 5 to make sure it runs on reasonably old ",Object(a.b)("inlineCode",{parentName:"li"},"WebView"),"\nbackends."),Object(a.b)("li",{parentName:"ul"},"Enforce a list of supported web engines with the outstanding\n",Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.npmjs.com/package/eslint-plugin-compat"}),"eslint-plugin-compat"),".\nWe make sure we don't use recent web APIs without a fallback or polyfill.")),Object(a.b)("h3",{id:"install-plugin-1"},"Install Plugin"),Object(a.b)(l.c,{dev:!0,packages:"estlint-plugin-compat @formidable-webview/eslint-config-webjs",mdxType:"InstallPackageSnippet"}),Object(a.b)("h3",{id:"configure-plugin-1"},"Configure Plugin"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js",metastring:'title="eslint.js"',title:'"eslint.js"'}),'module.exports = {\n  root: true,\n  overrides: [\n    {\n      files: ["*.webjs"],\n      extends: "@formidable-webview/eslint-config-webjs",\n    },\n  ],\n};\n')),Object(a.b)("h2",{id:"jest"},"Jest"),Object(a.b)("p",null,"See ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"./implementing-features#testing-with-jest"}),"this guide"),"."),Object(a.b)("h2",{id:"syntax-highlight"},"Syntax Highlight"),Object(a.b)("p",null,"The last thing you need to do is associate JavaScript syntax with ",Object(a.b)("inlineCode",{parentName:"p"},"webjs")," or whichever\nextension you have chosen in your text editor."),Object(a.b)("h3",{id:"vscode"},"VSCode"),Object(a.b)("p",null,"Add this file association in your ",Object(a.b)("inlineCode",{parentName:"p"},"settings.json"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json",metastring:'title="settings.json"',title:'"settings.json"'}),'{\n  "files.associations": {\n    "*.webjs": "javascript"\n  }\n}\n')),Object(a.b)("h3",{id:"github"},"Github"),Object(a.b)("p",null,"Add this line to your ",Object(a.b)("inlineCode",{parentName:"p"},".gitattributes")," file:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-gitattributes",metastring:'title=".gitattributes"',title:'".gitattributes"'}),"*.webjs linguist-language=Javascript\n")),Object(a.b)("h3",{id:"gitlab"},"Gitlab"),Object(a.b)("p",null,"Add this line to your ",Object(a.b)("inlineCode",{parentName:"p"},".gitattributes")," file:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-gitattributes",metastring:'title=".gitattributes"',title:'".gitattributes"'}),"*.webjs gitlab-language=Javascript\n")),Object(a.b)("h2",{id:"debugging-webviews"},"Debugging WebViews"),Object(a.b)("p",null,"See ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://blog.vuplex.com/debugging-webviews/"}),"this guide"),"."))}p.isMDXComponent=!0},110:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=u(n),d=i,m=b["".concat(o,".").concat(d)]||b[d]||p[d]||a;return n?r.a.createElement(m,l(l({ref:t},c),{},{components:n})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},111:function(e,t,n){"use strict";var i=n(0),r=n(20);t.a=function(){var e=Object(i.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},112:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var i=n(111),r=n(114);function a(){var e=Object(i.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var a=void 0===i?{}:i,o=a.forcePrependBaseUrl,l=void 0!==o&&o,s=a.absolute,c=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(l)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+u:u}(a,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},113:function(e,t,n){"use strict";function i(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(r&&(r+=" "),r+=t);return r}},114:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!i(e)}n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r}))},117:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"d",(function(){return m})),n.d(t,"c",(function(){return g})),n.d(t,"b",(function(){return f}));var i=n(131),r=n.n(i),a=n(132),o=n(0),l=n(129),s=n(112),c=n(126),u=n(127);function b(e){var t=o.useState({content:"",error:!1}),n=t[0],i=t[1];return o.useEffect((function(){var t=!1;function n(){return(n=Object(a.a)(r.a.mark((function n(){var a,o;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch(e);case 3:if(!(a=n.sent).ok){n.next=11;break}return n.next=7,a.text();case 7:o=n.sent,!t&&i({error:!1,content:o}),n.next=12;break;case 11:!t&&i({error:!0,content:""});case 12:n.next=18;break;case 14:n.prev=14,n.t0=n.catch(0),console.info(n.t0),!t&&i({error:!0,content:""});case 18:case"end":return n.stop()}}),n,null,[[0,14]])})))).apply(this,arguments)}return function(){n.apply(this,arguments)}(),function(){t=!0}}),[e]),n}var p=function(e){var t=e.children;return o.createElement("div",{className:"mdxCodeBlock__-node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-"},t)},d=function(e){var t=e.lang,n=e.lines,i=e.title,r=e.content;return o.createElement(l.a,{className:"language-"+t,metastring:(n?"{"+n+"}":"")+" "+(i?'title="'+i+'"':""),title:i},r)},m=function(e){var t=e.source,n=e.lang,i=e.lines,r=e.title,a=Object(s.a)("/snippets/"+t),l=b(a),c=r||t;return l.error?o.createElement("div",{className:"admonition admonition-warning alert alert--danger"},a," snippet could not be loaded"):o.createElement(p,null,o.createElement(d,{lang:n,content:l.content,lines:i,title:c}))},g=function(e){var t=e.packages,n=e.dev,i=void 0!==n&&n;return o.createElement(c.a,{defaultValue:"yarn",values:[{label:"yarn",value:"yarn"},{label:"npm",value:"npm"}]},o.createElement(u.a,{value:"yarn"},o.createElement(d,{lang:"sh",content:"yarn add "+(i?"--dev ":"")+t.split(/\s+/).join(" \\\n         ")})),o.createElement(u.a,{value:"npm"},o.createElement(d,{lang:"sh",content:"npm install --save "+(i?"--only=dev ":"")+t.split(/\s+/).join(" \\\n    ")})))},f=function(e){var t=e.sourceBase,n=e.titleBase,i=e.jsx,r=void 0!==i&&i,a=e.lines,l=void 0===a?null:a,m=Object(s.a)("/snippets/"+t+"."+(r?"tsx":"ts")),g=Object(s.a)("/snippets/"+t+"."+(r?"jsx":"js")),f=b(m),j=b(g),h=n||t;return f.error?o.createElement("div",{className:"admonition admonition-warning alert alert--danger"},m," snippet could not be loaded"):j.error?o.createElement("div",{className:"admonition admonition-warning alert alert--danger"},g," snippet could not be loaded"):o.createElement(p,null,o.createElement(c.a,{defaultValue:"ts",values:[{label:"Typescript",value:"ts"},{label:"JavaScript",value:"js"}]},o.createElement(u.a,{value:"ts"},o.createElement(d,{lang:r?"tsx":"ts",content:f.content,lines:l,title:h+"."+(r?"tsx":"ts")})),o.createElement(u.a,{value:"js"},o.createElement(d,{lang:r?"jsx":"js",content:j.content,lines:l,title:h+"."+(r?"jsx":"js")}))))}},118:function(e,t,n){"use strict";var i=n(0),r=n.n(i).a.createContext(void 0);t.a=r},119:function(e,t,n){"use strict";var i=n(0),r=Object(i.createContext)(void 0);t.a=r},121:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n(0);const r={hoc:"Higher Order Component",dom:"Document Object Model"},a={hoc:"https://reactjs.org/docs/higher-order-components.html",viewport:"https://developer.mozilla.org/en-US/docs/Glossary/Viewport",hooks:"https://reactjs.org/docs/hooks-overview.html",dom:"https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction","messaging system":"https://github.com/react-native-community/react-native-webview/blob/master/docs/Guide.md#communicating-between-js-and-native"},o=({id:e,title:t})=>{const n=a[e&&e.toLowerCase()],o=r[e&&e.toLowerCase()],l=void 0===n?`MISSING REFERENCE '${e}'`:t||e,s=e=>o?i.createElement("abbr",e):i.createElement("span",e);return i.createElement("strong",null,i.createElement(s,{title:o||void 0},i.createElement("a",{className:"term",title:o||null,href:n},l)))}},122:function(e,t,n){"use strict";var i=n(0),r=n(118);t.a=function(){var e=Object(i.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},125:function(e,t,n){"use strict";var i=n(0),r=n(119);t.a=function(){var e=Object(i.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}}}]);