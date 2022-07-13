"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[5336],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>s});var a=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var i=a.createContext({}),c=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},u=function(t){var e=c(t.components);return a.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,i=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),m=c(n),s=o,y=m["".concat(i,".").concat(s)]||m[s]||d[s]||r;return n?a.createElement(y,p(p({ref:e},u),{},{components:n})):a.createElement(y,p({ref:e},u))}));function s(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,p=new Array(r);p[0]=m;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l.mdxType="string"==typeof t?t:o,p[1]=l;for(var c=2;c<r;c++)p[c]=n[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1232:(t,e,n)=>{n.r(e),n.d(e,{Comment:()=>m,NotNullable:()=>d,Type:()=>u,assets:()=>i,contentTitle:()=>p,default:()=>y,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:1},p="The applied coupon object",l={unversionedId:"api/applied_coupons/applied-coupon-object",id:"api/applied_coupons/applied-coupon-object",title:"The applied coupon object",description:"This object represents a coupon assigned to a customer of your business.",source:"@site/docs/api/05_applied_coupons/applied-coupon-object.mdx",sourceDirName:"api/05_applied_coupons",slug:"/api/applied_coupons/applied-coupon-object",permalink:"/docs/api/applied_coupons/applied-coupon-object",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"api",previous:{title:"Events",permalink:"/docs/api/events"},next:{title:"Apply a coupon to a customer",permalink:"/docs/api/applied_coupons/apply-coupon"}},i={},c=[{value:"Schema",id:"schema",level:2}],u=t=>{let{children:e,color:n}=t;return(0,o.kt)("span",{style:{color:"#006CFA",fontSize:"13px"}},e)},d=t=>{let{children:e,color:n}=t;return(0,o.kt)("span",{style:{color:"#DC3309",fontSize:"13px"}},e)},m=t=>{let{children:e,color:n}=t;return(0,o.kt)("span",{style:{fontSize:"12px"}},e)},s={toc:c,Type:u,NotNullable:d,Comment:m};function y(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-applied-coupon-object"},"The applied coupon object"),(0,o.kt)("p",null,"This object represents a coupon assigned to a customer of your business.",(0,o.kt)("br",null),"\nFor now, it lets you assign a one-off coupon to a customer. This coupon can have a termination date or run forever."),(0,o.kt)("h2",{id:"schema"},"Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "applied_coupon": {\n    "lago_id": "b7ab2926-1de8-4428-9bcd-779314ac129b",\n    "lago_coupon_id": "b7ab2926-1de8-4428-9bcd-779314ac129b",\n    "coupon_code": "coupon-code",\n    "customer_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n    "lago_customer_id": "99a6094e-199b-4101-896a-54e927ce7bd7",\n    "amount_cents": 123,\n    "amount_currency": "EUR",\n    "expiration_date": "2022-04-29",\n    "created_at": "2022-04-29T08:59:51Z",\n    "terminated_at": "2022-04-29T08:59:51Z",\n  }\n}\n')),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"lago_id")," ","\xa0"," ","\xa0"," ",(0,o.kt)(u,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,o.kt)(d,{mdxType:"NotNullable"},"Not null")),(0,o.kt)("td",{parentName:"tr",align:null},"Unique identifer of the applied coupon in Lago application.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"lago_coupon_id")," ","\xa0"," ","\xa0"," ",(0,o.kt)(u,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,o.kt)(d,{mdxType:"NotNullable"},"Not null")),(0,o.kt)("td",{parentName:"tr",align:null},"Unique identifer of the coupon in Lago application.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"coupon_code")," ","\xa0"," ","\xa0"," ",(0,o.kt)(u,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,o.kt)(d,{mdxType:"NotNullable"},"Not null")),(0,o.kt)("td",{parentName:"tr",align:null},"Code identifying the coupon.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"customer_id")," ","\xa0"," ","\xa0"," ",(0,o.kt)(u,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,o.kt)(d,{mdxType:"NotNullable"},"Not null")),(0,o.kt)("td",{parentName:"tr",align:null},"Unique identifer of the customer in your application.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"lago_customer_id")," ","\xa0"," ","\xa0"," ",(0,o.kt)(u,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,o.kt)(d,{mdxType:"NotNullable"},"Not null")),(0,o.kt)("td",{parentName:"tr",align:null},"Unique identifer of the customer in Lago application.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"amount_cents")," ","\xa0"," ","\xa0"," ",(0,o.kt)(u,{mdxType:"Type"},"Integer")," ","\xa0"," ","\xa0"," ",(0,o.kt)(d,{mdxType:"NotNullable"},"Not null")),(0,o.kt)("td",{parentName:"tr",align:null},"Amount in cents.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"amount_currency")," ","\xa0"," ","\xa0"," ",(0,o.kt)(u,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,o.kt)(d,{mdxType:"NotNullable"},"Not null")),(0,o.kt)("td",{parentName:"tr",align:null},"Currency of the amount.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"expiration_date")," ","\xa0"," ","\xa0"," ",(0,o.kt)(u,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,o.kt)("br",null),(0,o.kt)(m,{mdxType:"Comment"},(0,o.kt)("em",{parentName:"td"},"ISO 8601 date"))),(0,o.kt)("td",{parentName:"tr",align:null},"Date after which the coupon will stop to apply to customer's invoices.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"created_at")," ","\xa0"," ","\xa0"," ",(0,o.kt)(u,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,o.kt)(d,{mdxType:"NotNullable"},"Not null")," ","\xa0"," ","\xa0"," ",(0,o.kt)("br",null),(0,o.kt)(m,{mdxType:"Comment"},(0,o.kt)("em",{parentName:"td"},"ISO 8601 datetime in UTC"))),(0,o.kt)("td",{parentName:"tr",align:null},"Date of assignation of the coupon to the customer.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"terminated_at")," ","\xa0"," ","\xa0"," ",(0,o.kt)(u,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,o.kt)("br",null),(0,o.kt)(m,{mdxType:"Comment"},(0,o.kt)("em",{parentName:"td"},"ISO 8601 datetime in UTC"))),(0,o.kt)("td",{parentName:"tr",align:null},"Date of total consumption of the coupon amount or date of manual deletion of the coupon from customer's coupons.")))))}y.isMDXComponent=!0}}]);