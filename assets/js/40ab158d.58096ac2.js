(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[203],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3494:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],c={},s="Structure: Communication",l={unversionedId:"structure/communication",id:"structure/communication",isDocsHomePage:!1,title:"Structure: Communication",description:"| | | |",source:"@site/docs/structure/communication.md",sourceDirName:"structure",slug:"/structure/communication",permalink:"/docs/structure/communication",editUrl:"https://github.com/iotaledger/stronghold.rs/tree/dev/documentation/docs/structure/communication.md",version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Structure: Runtime",permalink:"/docs/structure/runtime"},next:{title:"Structure: Derive",permalink:"/docs/structure/derive"}},p=[{value:"Stronghold Communication",id:"stronghold-communication",children:[{value:"Network Behaviour and Swarm",id:"network-behaviour-and-swarm",children:[]},{value:"Communication Actor",id:"communication-actor",children:[]}]}],m={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"structure-communication"},"Structure: Communication"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/iotaledger/stronghold.rs/tree/dev/communication"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/github-source-blue.svg",alt:"github"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://docs.rs/stronghold-communication"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/rust-docs-green.svg",alt:"github"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://crates.io/crates/stronghold-communication"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/crates/v/stronghold-communication.svg",alt:null})))))),(0,a.kt)("h2",{id:"stronghold-communication"},"Stronghold Communication"),(0,a.kt)("p",null,"This library enables Strongholds on different devices and in different networks to communicate with each other.\nThe main basis for its functionality is the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/libp2p/rust-libp2p"},"rust-libp2p")," library, which is a system of protocols, specifications and libraries that enable the development of peer-to-peer network applications (",(0,a.kt)("a",{parentName:"p",href:"https://libp2p.io/"},"https://libp2p.io/"),")."),(0,a.kt)("h3",{id:"network-behaviour-and-swarm"},"Network Behaviour and Swarm"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"module behaviour.rs:")),(0,a.kt)("p",null,"Stronghold-communication implements the ",(0,a.kt)("inlineCode",{parentName:"p"},"P2PNetworkBehaviour")," for sending messages and reacting upon the outcome of the operation.\nIt combines multiple protocols of Libp2p:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Multiplexing following the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/hashicorp/yamux/blob/master/spec.md"},"Yamux specification"),"  "),(0,a.kt)("li",{parentName:"ul"},"Noise: Encryption of the communication using the ",(0,a.kt)("a",{parentName:"li",href:"https://noiseprotocol.org/noise.html"},"Noise protocol")," with XX-Handshake"),(0,a.kt)("li",{parentName:"ul"},"Multicast DNS: Enable Peer Discovery in a local network"),(0,a.kt)("li",{parentName:"ul"},"Identify Protocol: Receive identifying information like the ",(0,a.kt)("inlineCode",{parentName:"li"},"PeerId")," and listening addresses when connecting to a new peer."),(0,a.kt)("li",{parentName:"ul"},"Request-Response Protocol: Allows sending direct request/response messages between Peers; it expects a response for each request")),(0,a.kt)("p",null,"Upon creating a new instance, a transport is created and upgraded, and combined with the P2PNetworkBehaviour into a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/libp2p/0.35.1/libp2p/swarm/struct.ExpandedSwarm.html"},"ExpandedSwarm"),". This Swarm is returned to the caller and serves as entry-point for all communication to other peers. Additional to the Libp2p methods of the ",(0,a.kt)("inlineCode",{parentName:"p"},"ExpandedSwarm"),", it enables sending outbound messages, and manages the known peers. Incoming ",(0,a.kt)("inlineCode",{parentName:"p"},"P2PEvents")," can be handled by polling from the swarm, e.g. via the ",(0,a.kt)("inlineCode",{parentName:"p"},"next")," method.   "),(0,a.kt)("h3",{id:"communication-actor"},"Communication Actor"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"module actor.rs:")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Communication Actor")," is using the ",(0,a.kt)("a",{parentName:"p",href:"https://riker.rs/"},"Riker Framwork")," to implement the actor pattern.",(0,a.kt)("br",{parentName:"p"}),"\n","When creating a new ",(0,a.kt)("inlineCode",{parentName:"p"},"Communication Actor"),", the actor creates a ",(0,a.kt)("inlineCode",{parentName:"p"},"P2PNetworkBehaviour")," and continuously polls for events,\nincoming requests are sent to the client actor that has to be provided in the ",(0,a.kt)("inlineCode",{parentName:"p"},"CommunicationConfig"),"."),(0,a.kt)("p",null,"All swarm interaction, and configuration of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Communication Actor")," is accomplished by sending the appropriate ",(0,a.kt)("inlineCode",{parentName:"p"},"CommunicationRequest")," to it, for each ",(0,a.kt)("inlineCode",{parentName:"p"},"CommunicationRequest")," a ",(0,a.kt)("inlineCode",{parentName:"p"},"CommunicationResults")," is returned to the sender, this also allows using the ",(0,a.kt)("a",{parentName:"p",href:"https://riker.rs/patterns/#ask"},"ask pattern"),"."),(0,a.kt)("h4",{id:"firewall"},"Firewall"),(0,a.kt)("p",null,"The communication actor implements a firewall that checks the permission of each outgoing and incoming requests and drops them if the necessary permission has not been set. The required ",(0,a.kt)("inlineCode",{parentName:"p"},"ToPermissionVariants")," trait for messages can be derived with the communication-macros, this allows in case of enum Request types to accept specific variants while rejecting others."))}u.isMDXComponent=!0}}]);