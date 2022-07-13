"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[1577],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),g=i,b=d["".concat(c,".").concat(g)]||d[g]||u[g]||o;return r?n.createElement(b,a(a({ref:t},p),{},{components:r})):n.createElement(b,a({ref:t},p))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6096:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),i=(r(7294),r(3905));const o={sidebar_position:4},a="Subscriptions",s={unversionedId:"guide/plans/subscription",id:"guide/plans/subscription",title:"Subscriptions",description:"By creating a subscription, you assign a Plan to a Customer. Subscriptions can be added when creating a customer or added seperately later on.",source:"@site/docs/guide/05_plans/subscription.md",sourceDirName:"guide/05_plans",slug:"/guide/plans/subscription",permalink:"/docs/guide/plans/subscription",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"guide",previous:{title:"Charges",permalink:"/docs/guide/plans/charges"},next:{title:"Upgrades & Downgrades",permalink:"/docs/guide/plans/upgrades-downgrades"}},c={},l=[{value:"Billing cycles of subscription",id:"billing-cycles-of-subscription",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"subscriptions"},"Subscriptions"),(0,i.kt)("p",null,"By creating a subscription, you ",(0,i.kt)("strong",{parentName:"p"},"assign a Plan to a Customer"),". Subscriptions can be added when creating a customer or added seperately later on."),(0,i.kt)("p",null,"This customer is now invoiced based on the fixed recurring charges and the usage-based charges belonging to this Plan."),(0,i.kt)("h2",{id:"billing-cycles-of-subscription"},"Billing cycles of subscription"),(0,i.kt)("p",null,"In order to make billing cycles easy, Lago automatically aligns the subscriptions with the calendar. "),(0,i.kt)("p",null,"For instance, if your customer is assigned to a subscription on March 15:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The first invoice is received for the billing period of March 15 - March 31"),(0,i.kt)("li",{parentName:"ul"},"The next invoice is created for the billing period of April 1 - April 30"),(0,i.kt)("li",{parentName:"ul"},"The following one is created for the billing period of May 1 - May 31 ... and so on.")))}u.isMDXComponent=!0}}]);