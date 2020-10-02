(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{143:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(a),h=n,m=p["".concat(o,".").concat(h)]||p[h]||u[h]||i;return a?r.a.createElement(m,b(b({ref:t},c),{},{components:a})):r.a.createElement(m,b({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:n,o[1]=b;for(var c=2;c<i;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},83:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return u}));var n,r=a(2),i=a(6),o=(a(0),a(143)),b={id:"useautoheight",title:"Function: useAutoheight",sidebar_label:"useAutoheight",hide_title:!0},l={unversionedId:"api/functions/useautoheight",id:"api/functions/useautoheight",isDocsHomePage:!1,title:"Function: useAutoheight",description:"Function: useAutoheight",source:"@site/docs/api/functions/useautoheight.md",slug:"/api/functions/useautoheight",permalink:"/webshell/docs/api/functions/useautoheight",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/functions/useautoheight.md",version:"current",sidebar_label:"useAutoheight",sidebar:"someSidebar",previous:{title:"Function: makeWebshell",permalink:"/webshell/docs/api/functions/makewebshell"},next:{title:"Class: Feature",permalink:"/webshell/docs/api/classes/feature"}},c=[{value:"Callable",id:"callable",children:[]}],s=(n="WebView",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),p={rightToc:c};function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"function-useautoheight"},"Function: useAutoheight"),Object(o.b)("h2",{id:"callable"},"Callable"),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("strong",{parentName:"p"},"useAutoheight"),"<","S>(",Object(o.b)("inlineCode",{parentName:"p"},"params"),": ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/webshell/docs/api/interfaces/autoheightparams"}),"AutoheightParams"),"<","S>): ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/webshell/docs/api/interfaces/autoheightstate"}),"AutoheightState"),"<","S>"),Object(o.b)("p",null,'This hook will provide props to inject in a shell component to implement an "autoheight" behavior.\nIt requires ',Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/webshell/docs/api/variables/handlehtmldimensionsfeature"}),"HandleHTMLDimensionsFeature")," to have be instantiated in the shell.\nAlso recommend (see remarks):"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/webshell/docs/api/variables/forceelementsizefeature"}),"ForceElementSizeFeature"),","),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/webshell/docs/api/variables/forceresponsiveviewportfeature"}),"ForceResponsiveViewportFeature"),".")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"remarks")),"\nThis hook has caveats you must understand:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Because the viewport height is now bound to the content heigh, you cannot\nand must not have an element which height depends on viewport, such as\nwhen using ",Object(o.b)("inlineCode",{parentName:"li"},"vh")," unit or ",Object(o.b)("inlineCode",{parentName:"li"},"height: 100%;")," on body. That will either create\nan infinite loop, or a zero-height page (this happens for Wikipedia).\nHence, it is strongly advised that you use autoheight only with content\nyou have been able to test. This can be worked around by forcing body\nheight to 'auto', see ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/webshell/docs/api/variables/forceelementsizefeature"}),"ForceElementSizeFeature"),"."),Object(o.b)("li",{parentName:"ul"},"In some circumstances, the mobile browser might use a virtual\nviewport much larger then the available width in the ",Object(o.b)(s,{mdxType:"WebView"}),", often\naround 980px for websites which have been built for desktop. For\nthis autoheight component to be reliable, you must ensure that the\ncontent has a ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.w3schools.com/css/css_rwd_viewport.asp"}),"meta viewport element"),"\nin the header. You can enforce this behavior with ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/webshell/docs/api/variables/forceresponsiveviewportfeature"}),"ForceResponsiveViewportFeature"),".")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"example"))," "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"export default function MinimalAutoheightWebView(\n  webshellProps: ComponentProps<typeof Webshell>\n) {\n  const { autoheightWebshellProps } = useAutoheight({\n    webshellProps\n  });\n  return <Webshell {...autoheightWebshellProps} />;\n}\n")),Object(o.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"S")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"/webshell/docs/api/types/webshellprops"}),"WebshellProps"),"<",Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"/webshell/docs/api/interfaces/minimalwebviewprops"}),"MinimalWebViewProps"),", [",Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"/webshell/docs/api/types/extractfeaturefromclass"}),"ExtractFeatureFromClass"),"<",Object(o.b)("em",{parentName:"td"},"typeof")," ",Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"/webshell/docs/api/variables/handlehtmldimensionsfeature"}),"HandleHTMLDimensionsFeature"),">]>"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The type of the ",Object(o.b)("inlineCode",{parentName:"td"},"Webshell")," props used by this hook.")))),Object(o.b)("h4",{id:"parameters"},"Parameters:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"params")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"/webshell/docs/api/interfaces/autoheightparams"}),"AutoheightParams"),"<","S>"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The parameters to specify autoheight behavior.")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/webshell/docs/api/interfaces/autoheightstate"}),"AutoheightState"),"<","S>"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"An object to implement autoheight behavior.")))}u.isMDXComponent=!0}}]);