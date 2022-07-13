"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[9104],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>s});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),i=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=i(n),s=r,y=m["".concat(d,".").concat(s)]||m[s]||u[s]||o;return n?a.createElement(y,l(l({ref:t},c),{},{components:n})):a.createElement(y,l({ref:t},c))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3222:(e,t,n)=>{n.r(t),n.d(t,{Comment:()=>m,NotNullable:()=>u,Type:()=>c,assets:()=>d,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1},l="The applied add-on object",p={unversionedId:"api/applied_add_ons/applied-add-on-object",id:"api/applied_add_ons/applied-add-on-object",title:"The applied add-on object",description:"This object represents an add-on assigned to a customer of your business.",source:"@site/docs/api/06_applied_add_ons/applied-add-on-object.mdx",sourceDirName:"api/06_applied_add_ons",slug:"/api/applied_add_ons/applied-add-on-object",permalink:"/docs/api/applied_add_ons/applied-add-on-object",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"api",previous:{title:"Apply a coupon to a customer",permalink:"/docs/api/applied_coupons/apply-coupon"},next:{title:"Apply an add-on to a customer",permalink:"/docs/api/applied_add_ons/apply-add-on"}},d={},i=[{value:"Schema",id:"schema",level:2}],c=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{color:"#006CFA",fontSize:"13px"}},t)},u=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{color:"#DC3309",fontSize:"13px"}},t)},m=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{fontSize:"12px"}},t)},s={toc:i,Type:c,NotNullable:u,Comment:m};function y(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"the-applied-add-on-object"},"The applied add-on object"),(0,r.kt)("p",null,"This object represents an add-on assigned to a customer of your business.",(0,r.kt)("br",null)),(0,r.kt)("h2",{id:"schema"},"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "applied_add_on": {\n    "lago_id": "b7ab2926-1de8-4428-9bcd-779314ac129b",\n    "lago_add_on_id": "b7ab2926-1de8-4428-9bcd-779314ac129b",\n    "add_on_code": "add-on-code",\n    "customer_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n    "lago_customer_id": "99a6094e-199b-4101-896a-54e927ce7bd7",\n    "amount_cents": 123,\n    "amount_currency": "EUR",\n    "created_at": "2022-04-29T08:59:51Z"\n  }\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"lago_id")," ","\xa0"," ","\xa0"," ",(0,r.kt)(c,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifer of the applied add-on in Lago application.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"lago_add_on_id")," ","\xa0"," ","\xa0"," ",(0,r.kt)(c,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifer of the add-on in Lago application.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"add_on_code")," ","\xa0"," ","\xa0"," ",(0,r.kt)(c,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Code identifying the add-on.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"customer_id")," ","\xa0"," ","\xa0"," ",(0,r.kt)(c,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifer of the customer in your application.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"lago_customer_id")," ","\xa0"," ","\xa0"," ",(0,r.kt)(c,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifer of the customer in Lago application.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"amount_cents")," ","\xa0"," ","\xa0"," ",(0,r.kt)(c,{mdxType:"Type"},"Integer")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Amount in cents.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"amount_currency")," ","\xa0"," ","\xa0"," ",(0,r.kt)(c,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Currency of the amount.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"created_at")," ","\xa0"," ","\xa0"," ",(0,r.kt)(c,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"NotNullable"},"Not null")," ","\xa0"," ","\xa0"," ",(0,r.kt)("br",null),(0,r.kt)(m,{mdxType:"Comment"},(0,r.kt)("em",{parentName:"td"},"ISO 8601 datetime in UTC"))),(0,r.kt)("td",{parentName:"tr",align:null},"Date of assignation of the add-on to the customer.")))))}y.isMDXComponent=!0}}]);