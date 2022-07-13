"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[125],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(a),m=n,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return a?r.createElement(g,o(o({ref:t},c),{},{components:a})):r.createElement(g,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(7294),n=a(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(7462),n=a(7294),l=a(6010),o=a(2389),i=a(7392),s=a(7094),u=a(2466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,a;const{lazy:o,block:d,defaultValue:m,values:g,groupId:b,className:f}=e,v=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=g?g:v.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),y=(0,i.l)(h,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===m?m:null!=(t=null!=m?m:null==(a=v.find((e=>e.props.default)))?void 0:a.props.value)?t:v[0].props.value;if(null!==k&&!h.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:w}=(0,s.U)(),[T,O]=(0,n.useState)(k),_=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=b){const e=N[b];null!=e&&e!==T&&h.some((t=>t.value===e))&&O(e)}const x=e=>{const t=e.currentTarget,a=_.indexOf(t),r=h[a].value;r!==T&&(E(t),O(r),null!=b&&w(b,String(r)))},C=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var r;const t=_.indexOf(e.currentTarget)+1;a=null!=(r=_[t])?r:_[0];break}case"ArrowLeft":{var n;const t=_.indexOf(e.currentTarget)-1;a=null!=(n=_[t])?n:_[_.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},f)},h.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>_.push(e),onKeyDown:C,onFocus:x,onClick:x},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=a?a:t)}))),o?(0,n.cloneElement)(v.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function m(e){const t=(0,o.Z)();return n.createElement(d,(0,r.Z)({key:String(t)},e))}},119:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));a(5488),a(5162);const l={sidebar_position:3},o="Aggregation examples",i={unversionedId:"guide/billable-metrics/aggregation-examples",id:"guide/billable-metrics/aggregation-examples",title:"Aggregation examples",description:"Image you are a Tracking API company (such as Segment.com). For the same events received, the result provided by the aggregation types proposed by Lago is completely different. This result is used to charge your customers.",source:"@site/docs/guide/04_billable-metrics/aggregation-examples.md",sourceDirName:"guide/04_billable-metrics",slug:"/guide/billable-metrics/aggregation-examples",permalink:"/docs/guide/billable-metrics/aggregation-examples",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"guide",previous:{title:"Aggregation Types",permalink:"/docs/guide/billable-metrics/aggregation-types"},next:{title:"Overview",permalink:"/docs/guide/plans/overview"}},s={},u=[{value:"Example of events received",id:"example-of-events-received",level:2},{value:"Differences between the aggregation types",id:"differences-between-the-aggregation-types",level:2}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"aggregation-examples"},"Aggregation examples"),(0,n.kt)("p",null,"Image you are a Tracking API company (such as ",(0,n.kt)("a",{parentName:"p",href:"https://www.segment.com/"},"Segment.com"),"). For the same events received, the result provided by the aggregation types proposed by Lago is completely different. This result is used to charge your customers."),(0,n.kt)("h2",{id:"example-of-events-received"},"Example of events received"),(0,n.kt)("p",null,"You decided to charge the ",(0,n.kt)("inlineCode",{parentName:"p"},"Tracked Pages"),". ",(0,n.kt)("strong",{parentName:"p"},"This is your Billable metric.")," Here are the 2 events sent by your backend to Lago, based on the consumption of a customer:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Event received n\xb01"',title:'"Event',received:!0,'n\xb01"':!0},'{\n    "transaction_id": "1111-1111-1111-1111",\n    "customer_id": "1",\n    "timestamp": "2022-03-16T00:00:00Z",\n    "code": "tracked_pages",\n    "properties": {\n            "tracked_user_id": "1234-5678-9098-7654"\n            "pageviews": 10\n    }\n}\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Event received n\xb02"',title:'"Event',received:!0,'n\xb02"':!0},'{\n    "transaction_id": "2222-2222-2222-2222",\n    "customer_id": "1",\n    "timestamp": "2022-03-17T00:00:00Z",\n    "code": "tracked_pages",\n    "properties": {\n            "tracked_user_id": "1234-5678-9098-7654",\n            "pageviews": 20\n    }\n}\n')),(0,n.kt)("p",null,"Let's see below the differences between the aggregation types."),(0,n.kt)("h2",{id:"differences-between-the-aggregation-types"},"Differences between the aggregation types"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Aggregation"),(0,n.kt)("th",{parentName:"tr",align:null},"Code"),(0,n.kt)("th",{parentName:"tr",align:null},"Units to be charged"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"COUNT")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"COUNT(tracked_pages)")),(0,n.kt)("td",{parentName:"tr",align:null},"2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"SUM")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"SUM(tracked_pages.properties.pageviews)")),(0,n.kt)("td",{parentName:"tr",align:null},"30")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"MAX")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"MAX(tracked_pages.properties.pageviews)")),(0,n.kt)("td",{parentName:"tr",align:null},"20")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"COUNT DISTINCT")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"DISTINCT_COUNT(tracked_pages.properties.tracked_user_id)")),(0,n.kt)("td",{parentName:"tr",align:null},"1")))),(0,n.kt)("p",null,"Based on the aggregation type you defined for your Billable metric ",(0,n.kt)("inlineCode",{parentName:"p"},"Tracked Pages"),", the result that is going to be charged to your customer is completely different. Make sure to choose the right aggregation type for all your Billable metrics. If you need help, don't hesitate to reach out the Lago Team!"))}p.isMDXComponent=!0}}]);