(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{121:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return r})),n.d(t,"default",(function(){return u}));var i=n(2),a=n(6),l=(n(0),n(143)),s=(n(155),n(151)),c={id:"tooling",title:"Tooling"},o={unversionedId:"tooling",id:"tooling",isDocsHomePage:!1,title:"Tooling",description:"The objectives of the setup are:",source:"@site/docs/tooling.mdx",slug:"/tooling",permalink:"/webshell/docs/tooling",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/tooling.mdx",version:"current",sidebar:"someSidebar",previous:{title:"Implementing Web Features",permalink:"/webshell/docs/implementing-features"},next:{title:"@formidable-webview/webshell",permalink:"/webshell/docs/api"}},r=[{value:"Babel",id:"babel",children:[{value:"Install Plugin",id:"install-plugin",children:[]},{value:"Configure Plugin",id:"configure-plugin",children:[]},{value:"Configure Metro",id:"configure-metro",children:[]}]},{value:"ESLint",id:"eslint",children:[{value:"Install Plugin",id:"install-plugin-1",children:[]},{value:"Configure Plugin",id:"configure-plugin-1",children:[]}]},{value:"Typescript",id:"typescript",children:[]},{value:"Jest",id:"jest",children:[]},{value:"Syntax Highlight",id:"syntax-highlight",children:[{value:"VSCode",id:"vscode",children:[]},{value:"Github",id:"github",children:[]},{value:"Gitlab",id:"gitlab",children:[]}]},{value:"Debugging WebViews",id:"debugging-webviews",children:[]}],b={rightToc:r};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(i.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The objectives of the setup are:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Import Web scripts (",Object(l.b)("inlineCode",{parentName:"li"},".webjs"),") as strings without the need of an additional bundle;"),Object(l.b)("li",{parentName:"ul"},"Statically check Web scripts for syntax errors;"),Object(l.b)("li",{parentName:"ul"},"Statically check Web scripts compatibility given targeted WebViews versions;"),Object(l.b)("li",{parentName:"ul"},"Test the Web scripts behaviors.")),Object(l.b)("h2",{id:"babel"},"Babel"),Object(l.b)("p",null,"To import ",Object(l.b)("inlineCode",{parentName:"p"},".webjs")," files as strings, we will use\n",Object(l.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.npmjs.com/package/babel-plugin-inline-import"}),"babel-plugin-inline-import"),"\nwith ",Object(l.b)("inlineCode",{parentName:"p"},"webjs")," or whichever extension you are using for your ",Object(l.b)("inlineCode",{parentName:"p"},"WebView")," scripts.\nThis plugin will allow you to import scripts as strings instead of transpiling the module."),Object(l.b)("h3",{id:"install-plugin"},"Install Plugin"),Object(l.b)(s.c,{dev:!0,packages:"babel-plugin-inline-import",mdxType:"InstallPackageSnippet"}),Object(l.b)("h3",{id:"configure-plugin"},"Configure Plugin"),Object(l.b)("pre",null,Object(l.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json",metastring:'title="babel.config.js"',title:'"babel.config.js"'}),'{\n  // ...\n  "plugins": [\n    [\n      "babel-plugin-inline-import",\n      {\n        "extensions": ["webjs"]\n      }\n    ],\n    // ...\n  ]\n}\n')),Object(l.b)("h3",{id:"configure-metro"},"Configure Metro"),Object(l.b)("p",null,"We need to tell metro to resolve ",Object(l.b)("inlineCode",{parentName:"p"},"webjs")," files:"),Object(l.b)("pre",null,Object(l.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js",metastring:'title="metro.config.js"',title:'"metro.config.js"'}),'const { getDefaultConfig } = require("metro-config");\n\nmodule.exports = (async () => {\n  const {\n    resolver: { sourceExts, assetExts }\n  } = await getDefaultConfig();\n  return {\n    resolver: {\n      sourceExts: [...sourceExts, "webjs"]\n    }\n  };\n})();\n')),Object(l.b)("div",{className:"admonition admonition-important alert alert--info"},Object(l.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(l.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"You might have issue with caching:"),Object(l.b)("ul",{parentName:"div"},Object(l.b)("li",{parentName:"ul"},"With metro, you will need to change ",Object(l.b)("strong",{parentName:"li"},"the file importing the ",Object(l.b)("inlineCode",{parentName:"strong"},"webjs")," extension")," in order to invalidate the cache;"),Object(l.b)("li",{parentName:"ul"},"With jest, you will need to clear cache after changing a ",Object(l.b)("inlineCode",{parentName:"li"},"webjs")," file. Use ",Object(l.b)("inlineCode",{parentName:"li"},"jest --clearCache"),".")))),Object(l.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(l.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(l.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(l.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"To circumvent this issue"))),Object(l.b)("h2",{id:"eslint"},"ESLint"),Object(l.b)("p",null,"You can use\n",Object(l.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/formidable-webview/eslint-config-webjs"}),"@formidable-webview/eslint-config-webjs"),"\nto target ",Object(l.b)("inlineCode",{parentName:"p"},".webjs")," files with specific config:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Enforce ECMAScript 5 to make sure it runs on reasonably old ",Object(l.b)("inlineCode",{parentName:"li"},"WebView"),"\nbackends."),Object(l.b)("li",{parentName:"ul"},"Enforce a list of supported web engines with the outstanding\n",Object(l.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.npmjs.com/package/eslint-plugin-compat"}),"eslint-plugin-compat"),".\nWe make sure we don't use recent Web APIs without a fallback or polyfill.")),Object(l.b)("h3",{id:"install-plugin-1"},"Install Plugin"),Object(l.b)(s.c,{dev:!0,packages:"estlint-plugin-compat @formidable-webview/eslint-config-webjs",mdxType:"InstallPackageSnippet"}),Object(l.b)("h3",{id:"configure-plugin-1"},"Configure Plugin"),Object(l.b)("pre",null,Object(l.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js",metastring:'title="eslint.js"',title:'"eslint.js"'}),'module.exports = {\n  root: true,\n  overrides: [\n    {\n      files: ["*.webjs"],\n      extends: "@formidable-webview/eslint-config-webjs",\n    },\n  ],\n};\n')),Object(l.b)("h2",{id:"typescript"},"Typescript"),Object(l.b)("p",null,"Add a declaration file to resolve ",Object(l.b)("inlineCode",{parentName:"p"},".webjs")," extensions as ",Object(l.b)("inlineCode",{parentName:"p"},"strings"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts",metastring:'title="webjs.d.ts"',title:'"webjs.d.ts"'}),"declare module '*.webjs' {\n  const source: string;\n  export default source;\n}\n")),Object(l.b)("h2",{id:"jest"},"Jest"),Object(l.b)("p",null,"See ",Object(l.b)("a",Object(i.a)({parentName:"p"},{href:"./implementing-features#testing-with-jest"}),"this guide"),"."),Object(l.b)("h2",{id:"syntax-highlight"},"Syntax Highlight"),Object(l.b)("p",null,"The last thing you need to do is associate JavaScript syntax with ",Object(l.b)("inlineCode",{parentName:"p"},"webjs")," or whichever\nextension you have chosen in your text editor."),Object(l.b)("h3",{id:"vscode"},"VSCode"),Object(l.b)("p",null,"Add this file association in your ",Object(l.b)("inlineCode",{parentName:"p"},"settings.json"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json",metastring:'title="settings.json"',title:'"settings.json"'}),'{\n  "files.associations": {\n    "*.webjs": "javascript"\n  }\n}\n')),Object(l.b)("h3",{id:"github"},"Github"),Object(l.b)("p",null,"Add this line to your ",Object(l.b)("inlineCode",{parentName:"p"},".gitattributes")," file:"),Object(l.b)("pre",null,Object(l.b)("code",Object(i.a)({parentName:"pre"},{className:"language-gitattributes",metastring:'title=".gitattributes"',title:'".gitattributes"'}),"*.webjs linguist-language=Javascript\n")),Object(l.b)("h3",{id:"gitlab"},"Gitlab"),Object(l.b)("p",null,"Add this line to your ",Object(l.b)("inlineCode",{parentName:"p"},".gitattributes")," file:"),Object(l.b)("pre",null,Object(l.b)("code",Object(i.a)({parentName:"pre"},{className:"language-gitattributes",metastring:'title=".gitattributes"',title:'".gitattributes"'}),"*.webjs gitlab-language=Javascript\n")),Object(l.b)("h2",{id:"debugging-webviews"},"Debugging WebViews"),Object(l.b)("p",null,"See ",Object(l.b)("a",Object(i.a)({parentName:"p"},{href:"https://blog.vuplex.com/debugging-webviews/"}),"this guide"),"."))}u.isMDXComponent=!0},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return p}));var i=n(0),a=n(152),l=n(145),s=n(158),c=n(159);function o(e){const[t,n]=i.useState({content:"",error:!1});return i.useEffect(()=>{let t=!1;return async function(){try{const i=await fetch(e);if(i.ok){const e=await i.text();!t&&n({error:!1,content:e})}else!t&&n({error:!0,content:""})}catch(i){console.info(i),!t&&n({error:!0,content:""})}}(),()=>{t=!0}},[e]),t}const r=({children:e})=>i.createElement("div",{className:"margin-vert--md mdxCodeBlock__-node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-"},e),b=({lang:e,lines:t,title:n,content:l})=>i.createElement(a.a,{className:"language-"+e,metastring:`${t?`{${t}}`:""} ${n?`title="${n}"`:""}`,title:n},l),u=({source:e,lang:t,lines:n,title:a})=>{const s=Object(l.a)("/snippets/"+e),c=o(s),u=a||e;return c.error?i.createElement("div",{className:"admonition admonition-warning alert alert--danger"},s," snippet could not be loaded"):i.createElement(r,null,i.createElement(b,{lang:t,content:c.content,lines:n,title:u}))},d=({packages:e,dev:t=!1})=>i.createElement(s.a,{defaultValue:"yarn",groupId:"package-manager",values:[{label:"yarn",value:"yarn"},{label:"npm",value:"npm"}]},i.createElement(c.a,{value:"yarn"},i.createElement(b,{lang:"sh",content:`yarn add ${t?"--dev ":""}${e.split(/\s+/).join(" \\\n         ")}`})),i.createElement(c.a,{value:"npm"},i.createElement(b,{lang:"sh",content:`npm install --save ${t?"--only=dev ":""}${e.split(/\s+/).join(" \\\n    ")}`}))),p=({sourceBase:e,titleBase:t,jsx:n=!1,lines:a=null})=>{const u=Object(l.a)(`/snippets/${e}.${n?"tsx":"ts"}`),d=Object(l.a)(`/snippets/${e}.${n?"jsx":"js"}`),p=o(u),m=o(d),g=t||e;return p.error?i.createElement("div",{className:"admonition admonition-warning alert alert--danger"},u," snippet could not be loaded"):m.error?i.createElement("div",{className:"admonition admonition-warning alert alert--danger"},d," snippet could not be loaded"):i.createElement(r,null,i.createElement(s.a,{defaultValue:"ts",groupId:"javascript-source",values:[{label:"Typescript",value:"ts"},{label:"JavaScript",value:"js"}]},i.createElement(c.a,{value:"ts"},i.createElement(b,{lang:n?"tsx":"ts",content:p.content,lines:a,title:`${g}.${n?"tsx":"ts"}`})),i.createElement(c.a,{value:"js"},i.createElement(b,{lang:n?"jsx":"js",content:m.content,lines:a,title:`${g}.${n?"jsx":"js"}`}))))}},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n(0);const a={hoc:"Higher Order Component",dom:"Document Object Model"},l={hoc:"https://reactjs.org/docs/higher-order-components.html",viewport:"https://developer.mozilla.org/en-US/docs/Glossary/Viewport",hooks:"https://reactjs.org/docs/hooks-overview.html",dom:"https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction","messaging system":"https://github.com/react-native-community/react-native-webview/blob/master/docs/Guide.md#communicating-between-js-and-native"},s=({id:e,title:t})=>{const n=l[e&&e.toLowerCase()],s=a[e&&e.toLowerCase()],c=void 0===n?`MISSING REFERENCE '${e}'`:t||e,o=e=>s?i.createElement("abbr",e):i.createElement("span",e);return i.createElement("strong",null,i.createElement(o,{title:s||void 0},i.createElement("a",{className:"term",title:s||null,href:n},c)))}}}]);