(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return O})),n.d(t,"metadata",(function(){return f})),n.d(t,"rightToc",(function(){return w})),n.d(t,"default",(function(){return N}));var a=n(2),r=n(6),i=n(0),o=n.n(i),c=n(111),s=n(116),l=n(128),b=n(131),d=n(122),m=n(123),p=n(138),u=n(113);const h=({iconName:e})=>o.a.createElement("i",{style:v.button,className:"material-icons",role:"button"},e),v={video:{width:320,height:568},button:{fontSize:30,color:"white",display:"block"},controls:{position:"absolute",bottom:50,left:15,right:15,height:42,display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"black",zIndex:100}},g=({url:e})=>{const t=Object(i.useRef)(null),[n,a]=Object(i.useState)(!1),r=Object(i.useCallback)(()=>{var e,a;n?null===(e=t.current)||void 0===e||e.pause():null===(a=t.current)||void 0===a||a.play()},[n]),c=Object(i.useCallback)(()=>a(!0),[]),s=Object(i.useCallback)(()=>a(!1),[]);return o.a.createElement("div",{className:"marvel-device nexus5",role:"figure"},o.a.createElement("div",{className:"top-bar"}),o.a.createElement("div",{className:"sleep"}),o.a.createElement("div",{className:"volume"}),o.a.createElement("div",{className:"camera"}),o.a.createElement("div",{className:"screen"},o.a.createElement("video",{ref:t,controls:!1,loop:!0,autoPlay:!0,onPlay:c,onPause:s,onAbort:s,style:v.video},o.a.createElement("source",{src:Object(u.a)(e),type:"video/mp4"}))),o.a.createElement("div",{style:v.controls},o.a.createElement("a",{onClick:r},n?o.a.createElement(h,{iconName:"pause"}):o.a.createElement(h,{iconName:"play_arrow"}))))};function j({children:e,url:t}){return o.a.createElement("div",{className:"margin-vert--lg",style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap"}},o.a.createElement("div",{style:{marginRight:20,flexBasis:400}},e),o.a.createElement(g,{url:t}))}var O={id:"autoheight",sidebar_label:"Autoheight WebView",title:"Autoheight WebView"},f={unversionedId:"autoheight",id:"autoheight",isDocsHomePage:!1,title:"Autoheight WebView",description:"Craft -based components which heights automatically and dynamically adapts to their page",source:"@site/docs/autoheight.mdx",slug:"/autoheight",permalink:"/webshell/docs/autoheight",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/autoheight.mdx",version:"current",sidebar_label:"Autoheight WebView",sidebar:"someSidebar",previous:{title:"Getting Started",permalink:"/webshell/docs/getting-started"},next:{title:"Implementing Features",permalink:"/webshell/docs/implementing-features"}},w=[{value:"Highlights",id:"highlights",children:[]},{value:"Basic Example",id:"basic-example",children:[]},{value:"Caveats and their Workarounds",id:"caveats-and-their-workarounds",children:[{value:"Mobile Virtual Viewport",id:"mobile-virtual-viewport",children:[]},{value:"Cyclic Size Constraints \u221e",id:"cyclic-size-constraints-\u221e",children:[]}]},{value:"Robust Example",id:"robust-example",children:[]},{value:"Integration with ScrollView",id:"integration-with-scrollview",children:[{value:"Recommended ScrollView Props Values",id:"recommended-scrollview-props-values",children:[]},{value:"Handling <code>hashchange</code> Events",id:"handling-hashchange-events",children:[]}]}],y={rightToc:w};function N(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},y,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Craft ",Object(c.b)(l.b,{mdxType:"WebView"}),"-based components which heights automatically and dynamically adapts to their page\ncontent heights, anytime the ",Object(c.b)(d.a,{id:"DOM",mdxType:"Term"})," changes."),Object(c.b)(p.a,{label:"Try Autoheight WebView on Expo!",mdxType:"TryOnExpo"}),Object(c.b)("h2",{id:"highlights"},"Highlights"),Object(c.b)(j,{url:"/img/autoheight-screencast.mp4",mdxType:"AsideShowcaseFrame"},Object(c.b)(b.a,{reference:"useAutoheight",type:"function",mdxType:"APIBox"}),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"The ",Object(c.b)("strong",{parentName:"p"},"width")," of the ",Object(c.b)(d.a,{id:"viewport",mdxType:"Term"})," will grow to the\navailable horizontal space and won't need to be specified. You can\noverride this behavior by setting explicit ",Object(c.b)("inlineCode",{parentName:"p"},"width")," as a\nparameter attribute of ",Object(c.b)(s.a,{reference:"useAutoheight",type:"function",mdxType:"APIReference"})," hook.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"The ",Object(c.b)("strong",{parentName:"p"},"height")," of the ",Object(c.b)(d.a,{id:"viewport",mdxType:"Term"})," will dynamically adapts to the ",Object(c.b)("strong",{parentName:"p"},"content height"),", which has\nbeen constrained by the ",Object(c.b)(d.a,{id:"viewport",mdxType:"Term"})," ",Object(c.b)("strong",{parentName:"p"},"width")," as we have just mentioned! It\nmeans that anytime the content changes or the ",Object(c.b)(d.a,{id:"viewport",mdxType:"Term"})," width changes,\nsuch as in screen rotations, the ",Object(c.b)(d.a,{id:"viewport",mdxType:"Term"})," height will get updated."),Object(c.b)("p",{parentName:"li"},"Look at the screen and notice in the top console how ",Object(c.b)(d.a,{id:"viewport",mdxType:"Term"})," height closely follows ",Object(c.b)("strong",{parentName:"p"},"content")," height updates.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"This hook will rely on ",Object(c.b)(s.a,{reference:"HandleHTMLDimensionsFeature",type:"variable",mdxType:"APIReference"})," to use the best API\navailable in the browser\n",Object(c.b)("strong",{parentName:"p"},"and dynamically adapt ",Object(c.b)(d.a,{id:"viewport",mdxType:"Term"})," to content size"),". In\norder of preference,\n",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver"}),"ResizeObserver"),",\n",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver"}),"MutationObserver"),"\nand finally, polling on a regular interval.")))),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},'You can interchangeably replace "',Object(c.b)(d.a,{id:"viewport",mdxType:"Term"}),' size" with "',Object(c.b)(l.b,{mdxType:"WebView"}),'\nsize" in the above description, if that makes more sense to you.'))),Object(c.b)("h2",{id:"basic-example"},"Basic Example"),Object(c.b)("p",null,"As previously stated, ",Object(c.b)(s.a,{reference:"useAutoheight",type:"function",mdxType:"APIReference"}),"\nrequires ",Object(c.b)("em",{parentName:"p"},"a minima")," injection of a ",Object(c.b)(s.a,{reference:"HandleHTMLDimensionsFeature",type:"variable",mdxType:"APIReference"})," in the shell to fetch content dimensions:"),Object(c.b)(m.b,{jsx:!0,titleBase:"MinimalAutoheightWebView",sourceBase:"minimal-autoheight",mdxType:"DualCodeSource"}),Object(c.b)("h2",{id:"caveats-and-their-workarounds"},"Caveats and their Workarounds"),Object(c.b)("h3",{id:"mobile-virtual-viewport"},"Mobile Virtual Viewport"),Object(c.b)("p",null,"In some circumstances, the mobile browser might use a virtual\nviewport much larger then the available width in the ",Object(c.b)(l.b,{mdxType:"WebView"}),", often\naround 980px for websites which have been built for desktop. For\nthis autoheight component to be reliable, you must ensure that the\ncontent has a ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.w3schools.com/css/css_rwd_viewport.asp"}),"meta viewport element"),"\nin the header."),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"solution")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"This can be enforced by setting responsive layout with ",Object(c.b)(s.a,{reference:"ForceResponsiveViewportFeature",type:"variable",mdxType:"APIReference"}),"."),Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"{4}","{4}":!0}),"const Webshell = makeWebshell(\n  WebView,\n  new HandleHTMLDimensionsFeature(),\n  new ForceResponsiveViewportFeature({ maxScale: 1 })\n);\n")),Object(c.b)("p",{parentName:"div"},"However, the result might be ugly and overflow on the horizontal axis if the page is not responsive (optimized for mobile).\nAlways make sure the content is optimized for mobile, ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.google.com/search/mobile-sites/mobile-seo/responsive-design"}),"read more about this here"),"."))),Object(c.b)("h3",{id:"cyclic-size-constraints-\u221e"},"Cyclic Size Constraints ","\u221e"),Object(c.b)(j,{url:"/img/autoheight-regression-screencast.mp4",mdxType:"AsideShowcaseFrame"},Object(c.b)("p",null,"Because the ",Object(c.b)("strong",{parentName:"p"},"viewport height")," now depends on ",Object(c.b)("strong",{parentName:"p"},"content heigh"),", you must never have a ",Object(c.b)("strong",{parentName:"p"},"body")," element\nheight depending on viewport height, such as:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css",metastring:'title="evil.css"',title:'"evil.css"'}),"body {\n  height: 100vh;\n}\n")),Object(c.b)("div",{className:"margin-bottom--md",style:{textAlign:"center",fontStyle:"italic"}},"or"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css",metastring:'title="evil.css"',title:'"evil.css"'}),"body {\n  height: 100%;\n}\n")),Object(c.b)("p",null,"That is an evil cyclic dependency ready to cast an infinite loop!\nWikipedia website has such styles. Watch the console on top of screen and\nnotice how the shell is caught in an infinite loop shrinking the height\ninexorably.")),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"solution")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Body width and height can be forced to\n",Object(c.b)("strong",{parentName:"p"},"auto")," with ",Object(c.b)(s.a,{reference:"ForceElementSizeFeature",type:"variable",mdxType:"APIReference"}),"."),Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"{4,5,6,7}","{4,5,6,7}":!0}),"const Webshell = makeWebshell(\n  WebView,\n  new HandleHTMLDimensionsFeature(),\n  new ForceElementSizeFeature({\n    target: 'body',\n    heightValue: 'auto',\n    widthValue: 'auto'\n  })\n);\n")))),Object(c.b)("h2",{id:"robust-example"},"Robust Example"),Object(c.b)("p",null,"In this example, we use the two tips listed in above Caveats section to provide a much resilient implementation."),Object(c.b)(m.b,{jsx:!0,titleBase:"ResilientAutoheightWebView",sourceBase:"resilient-autoheight",mdxType:"DualCodeSource"}),Object(c.b)("h2",{id:"integration-with-scrollview"},"Integration with ScrollView"),Object(c.b)("p",null,"More often than not, an autoheight feature is needed to embed the ",Object(c.b)(l.b,{mdxType:"WebView"})," along with\ncontent of unpredictable length, and a ",Object(c.b)(l.a,{name:"ScrollView",type:"class",mdxType:"ReactReference"})," works just fine.\nThis section summarize best practices and tricks for a perfect integration."),Object(c.b)("h3",{id:"recommended-scrollview-props-values"},"Recommended ScrollView Props Values"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Prop"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Value"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Rationale"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.b)("inlineCode",{parentName:"td"},"pinchGestureEnabled")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.b)("inlineCode",{parentName:"td"},"false")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Enabling pinch (the default) will conflict with the pinch-to-zoom feature provided by ",Object(c.b)(s.a,{reference:"ForceResponsiveViewportFeature",type:"variable",mdxType:"APIReference"})," ",Object(c.b)("inlineCode",{parentName:"td"},"maxScale")," option. When ",Object(c.b)("inlineCode",{parentName:"td"},"maxScale")," is above ",Object(c.b)("inlineCode",{parentName:"td"},"1"),", it will allow for pinch to zoom gestures up to the provided zoom level.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.b)("inlineCode",{parentName:"td"},"horizontal")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.b)("inlineCode",{parentName:"td"},"false")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"When the web page is ill-designed (not-responsive), the content might overflows horizontally. We suggest to avoid nesting components providing scroll in the same direction, unless necessary.")))),Object(c.b)("h3",{id:"handling-hashchange-events"},"Handling ",Object(c.b)("inlineCode",{parentName:"h3"},"hashchange")," Events"),Object(c.b)("p",null,"However, scroll to hash on link press, for example:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<a href="#head">go to top</a>\n')),Object(c.b)("p",null,"will not work, because the underlying ",Object(c.b)(l.b,{mdxType:"WebView"})," will not have vertical scroll anymore."),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"solution")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"You can register a prop to listen to ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/hashchange_event"}),"haschange")," events with ",Object(c.b)(s.a,{reference:"HandleHashChangeFeature",type:"variable",mdxType:"APIReference"}),"."),Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"{4}","{4}":!0}),"const Webshell = makeWebshell(\n  WebView,\n  new HandleHTMLDimensionsFeature(),\n  new HandleHashChangeFeature({ shouldResetHashOnEvent: true })\n);\n")))),Object(c.b)("p",null,"After that, you must implement the desired behavior, that is to scroll to the\ndesired DOM element when a hashchange event is fired, while accounting for the space\noccupied by components above the shell, inside the ",Object(c.b)(l.a,{name:"ScrollView",type:"class",mdxType:"ReactReference"}),". Below is a complete\nexample:"),Object(c.b)(m.b,{jsx:!0,sourceBase:"scrollview",titleBase:"AutoheightWebViewInScrollView",mdxType:"DualCodeSource"}))}N.isMDXComponent=!0},111:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=b(n),p=a,u=d["".concat(o,".").concat(p)]||d[p]||m[p]||i;return n?r.a.createElement(u,c(c({ref:t},l),{},{components:n})):r.a.createElement(u,c({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},112:function(e,t,n){"use strict";var a=n(0),r=n(21);t.a=function(){const e=Object(a.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},113:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var a=n(112),r=n(115);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.a)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(a)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+o:o}(t,e,n,a)}}function o(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},114:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},115:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},116:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var a=n(0),r=n(113);const i=({reference:e,member:t,type:n})=>a.createElement("span",{className:"api-symbol "+n},e,t?"."+t:""),o=({reference:e,type:t,overrideUrl:n,member:i})=>{const o=i?"#"+i.toLowerCase():"",c="interface"===t?`/docs/api/interfaces/${e.toLowerCase()}${o}`:"class"===t?`/docs/api/classes/${e.toLowerCase()}${o}`:"enum"===t?`/docs/api/enums/${e.toLowerCase()}${o}`:"/docs/api/index#"+e.toLowerCase();return a.createElement("a",{className:"api-ref api-symbol "+t,href:Object(r.a)(n||c)},e,i?"."+i:"")}},117:function(e,t,n){"use strict";var a=n(0),r=n(124);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},122:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0);const r={hoc:"Higher Order Component",dom:"Document Object Model"},i={hoc:"https://reactjs.org/docs/higher-order-components.html",viewport:"https://developer.mozilla.org/en-US/docs/Glossary/Viewport",hooks:"https://reactjs.org/docs/hooks-overview.html",dom:"https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction","messaging system":"https://github.com/react-native-community/react-native-webview/blob/master/docs/Guide.md#communicating-between-js-and-native"},o=({id:e,title:t})=>{const n=i[e&&e.toLowerCase()],o=r[e&&e.toLowerCase()],c=void 0===n?`MISSING REFERENCE '${e}'`:t||e,s=e=>o?a.createElement("abbr",e):a.createElement("span",e);return a.createElement("strong",null,a.createElement(s,{title:o||void 0},a.createElement("a",{className:"term",title:o||null,href:n},c)))}},123:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return m})),n.d(t,"b",(function(){return p}));var a=n(0),r=n(118),i=n(113),o=n(129),c=n(130);function s(e){const[t,n]=a.useState({content:"",error:!1});return a.useEffect(()=>{let t=!1;return async function(){try{const a=await fetch(e);if(a.ok){const e=await a.text();!t&&n({error:!1,content:e})}else!t&&n({error:!0,content:""})}catch(a){console.info(a),!t&&n({error:!0,content:""})}}(),()=>{t=!0}},[e]),t}const l=({children:e})=>a.createElement("div",{className:"mdxCodeBlock__-node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-"},e),b=({lang:e,lines:t,title:n,content:i})=>a.createElement(r.a,{className:"language-"+e,metastring:`${t?`{${t}}`:""} ${n?`title="${n}"`:""}`,title:n},i),d=({source:e,lang:t,lines:n,title:r})=>{const o=Object(i.a)("/snippets/"+e),c=s(o),d=r||e;return c.error?a.createElement("div",{className:"admonition admonition-warning alert alert--danger"},o," snippet could not be loaded"):a.createElement(l,null,a.createElement(b,{lang:t,content:c.content,lines:n,title:d}))},m=({packages:e,dev:t=!1})=>a.createElement(o.a,{defaultValue:"yarn",values:[{label:"yarn",value:"yarn"},{label:"npm",value:"npm"}]},a.createElement(c.a,{value:"yarn"},a.createElement(b,{lang:"sh",content:`yarn add ${t?"--dev ":""}${e.split(/\s+/).join(" \\\n         ")}`})),a.createElement(c.a,{value:"npm"},a.createElement(b,{lang:"sh",content:`npm install --save ${t?"--only=dev ":""}${e.split(/\s+/).join(" \\\n    ")}`}))),p=({sourceBase:e,titleBase:t,jsx:n=!1,lines:r=null})=>{const d=Object(i.a)(`/snippets/${e}.${n?"tsx":"ts"}`),m=Object(i.a)(`/snippets/${e}.${n?"jsx":"js"}`),p=s(d),u=s(m),h=t||e;return p.error?a.createElement("div",{className:"admonition admonition-warning alert alert--danger"},d," snippet could not be loaded"):u.error?a.createElement("div",{className:"admonition admonition-warning alert alert--danger"},m," snippet could not be loaded"):a.createElement(l,null,a.createElement(o.a,{defaultValue:"ts",values:[{label:"Typescript",value:"ts"},{label:"JavaScript",value:"js"}]},a.createElement(c.a,{value:"ts"},a.createElement(b,{lang:n?"tsx":"ts",content:p.content,lines:r,title:`${h}.${n?"tsx":"ts"}`})),a.createElement(c.a,{value:"js"},a.createElement(b,{lang:n?"jsx":"js",content:u.content,lines:r,title:`${h}.${n?"jsx":"js"}`}))))}},124:function(e,t,n){"use strict";var a=n(0);const r=n.n(a).a.createContext(void 0);t.a=r},125:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},126:function(e,t,n){"use strict";var a=n(0),r=n(125);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},128:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c}));var a=n(0),r=n.n(a);const i={webview:"https://github.com/react-native-community/react-native-webview",scrollview:"https://reactnative.dev/docs/scrollview",linking:"https://reactnative.dev/docs/linking",__dev__:"https://reactnative.dev/docs/javascript-environment.html"},o=({name:e,type:t})=>{const n=i[e&&e.toLowerCase()],a=n?e:"MISSING REFERENCE FOR "+e;return r.a.createElement("a",{className:"api-ref api-symbol "+t,href:n},a)},c=()=>r.a.createElement(o,{name:"WebView",type:"class"})},131:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0),r=n(116);const i=e=>a.createElement("div",{className:"card api-box shadow--lt",style:{textAlign:"center"}},a.createElement("div",{className:"card__header api-box__title"},"~ API Reference ~"),a.createElement(r.a,e))},138:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(0),r=n(147),i=n.n(r),o=n(117);const c={container:{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",alignSelf:"stretch",paddingTop:20,paddingBottom:20},qrcode:{marginTop:20},boxStyle:{},boxTitle:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",alignSelf:"stretch",marginBottom:20},expoLogoContainer:{backgroundColor:"transparent"},expoLogo:{width:48,height:48}},s=({color:e,size:t})=>a.createElement("svg",{width:"24",height:"26",viewBox:"0 0 24 26",style:{width:t,height:t},fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M22.069 10.075a2.273 2.273 0 00-.887-.74 2.296 2.296 0 00-2.237.16 2.265 2.265 0 00-.77.859 2.016 2.016 0 00.392 2.274 3.342 3.342 0 002.23-.63 3.289 3.289 0 001.271-1.923zM15.3 1.3l-1.45-.788-6.31 3.481.503.27.957.498 1.732-.954 4.569-2.523-.001.016zm.584-.24a.225.225 0 01.16.15l2.114 6.182a.205.205 0 01-.1.269 4.063 4.063 0 00-1.798 1.974 4.017 4.017 0 00-.175 2.655 4.283 4.283 0 001.755 2.332c.842.55 1.852.79 2.854.68a.269.269 0 01.262.16l2.184 6.345a.256.256 0 01-.101.278l-6.712 3.89a.253.253 0 01-.101.02.27.27 0 01-.181-.03L13.69 24.5a.234.234 0 01-.1-.1l-4.6-10.483-7.005 3.95a.327.327 0 01-.272.01l-1.592-.898a.23.23 0 01-.1-.299l6.805-12.8a.243.243 0 01.11-.099L13.721.03a.259.259 0 01.241 0l1.923 1.03zM7.47 4.499L7.14 4.33.58 16.71l1.197.668 5.657-7.335a.275.275 0 01.231-.1.282.282 0 01.201.149l6.16 14.066 1.646 1.007L9.06 6.005l-.281-.798-1.318-.718.01.01zm10.145 7.382a2.51 2.51 0 01.12-1.663 2.54 2.54 0 011.138-1.23 2.798 2.798 0 013.261.4 2.513 2.513 0 01.073 3.568l-.073.073a2.77 2.77 0 01-3.788.01 2.719 2.719 0 01-.731-1.158z",fill:e})),l="@jsamr/formidable-webview-autoheight-example",b=({label:e,className:t})=>{const{isDarkTheme:n}=Object(o.a)(),r=n?"#18191a":"white",b=n?"white":"#1c1e21";return a.createElement("div",{className:t,style:{...c.boxStyle,backgroundColor:r}},a.createElement("div",{className:"padding-vert--ml",style:c.container},a.createElement("div",{style:c.boxTitle},a.createElement("div",{style:c.expoLogoContainer},a.createElement(s,{size:48,color:b}))),a.createElement("a",{href:"https://expo.io/"+l},a.createElement("strong",null,e)),a.createElement(i.a,{style:c.qrcode,fgColor:b,bgColor:r,size:160,renderAs:"svg",value:"exp://exp.host/"+l})))}}}]);