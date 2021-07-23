(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[890],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=n.createContext({}),c=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=c(t.components);return n.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,u=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),m=c(r),d=a,g=m["".concat(u,".").concat(d)]||m[d]||s[d]||o;return r?n.createElement(g,i(i({ref:e},p),{},{components:r})):n.createElement(g,i({ref:e},p))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5699:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i=["components"],l={},u="Structure: Engine",c={unversionedId:"structure/engine",id:"structure/engine",isDocsHomePage:!1,title:"Structure: Engine",description:"| | | |",source:"@site/docs/structure/engine.md",sourceDirName:"structure",slug:"/structure/engine",permalink:"/docs/structure/engine",editUrl:"https://github.com/iotaledger/stronghold.rs/tree/dev/documentation/docs/structure/engine.md",version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Structure: Client",permalink:"/docs/structure/client"},next:{title:"Structure: Engine::Snapshot",permalink:"/docs/structure/snapshot"}},p=[{value:"engine",id:"engine",children:[{value:"Snapshot",id:"snapshot",children:[]}]}],s={toc:p};function m(t){var e=t.components,r=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"structure-engine"},"Structure: Engine"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/iotaledger/stronghold.rs/tree/dev/engine"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/github-source-blue.svg",alt:"github"}))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://docs.rs/stronghold-engine"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/rust-docs-green.svg",alt:"github"}))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://crates.io/crates/stronghold-engine"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/crates/v/stronghold-engine.svg",alt:null})))))),(0,o.kt)("h2",{id:"engine"},"engine"),(0,o.kt)("p",null,"Engine is the collection of low-level module with which application architects can build higher-level implementations of Strongholds for a variety of purposes. It is platform agnostic, in that it should run anywhere a Rust Compiler will work."),(0,o.kt)("p",null,"It is composed of 4 primary module:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"snapshot"),(0,o.kt)("li",{parentName:"ul"},"vault"),(0,o.kt)("li",{parentName:"ul"},"store"),(0,o.kt)("li",{parentName:"ul"},"runtime")),(0,o.kt)("h3",{id:"snapshot"},"Snapshot"),(0,o.kt)("p",null,"The snapshot protocol follows a fairly simple transparent pattern. Each Snapshot file follows a simple structure:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},(0,o.kt)("strong",{parentName:"th"},"Header")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Magic Bytes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Version Bytes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("strong",{parentName:"td"},"Body"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Ephemeral Key")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"xchacha20 tag")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Cipher Text")))))}m.isMDXComponent=!0}}]);