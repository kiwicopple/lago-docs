"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[6023],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,g=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(g,o(o({ref:t},d),{},{components:n})):a.createElement(g,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7784:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:5},o="Upgrades & Downgrades",l={unversionedId:"guide/plans/upgrades-downgrades",id:"guide/plans/upgrades-downgrades",title:"Upgrades & Downgrades",description:"To modify an active subscription through the user interface:",source:"@site/docs/guide/05_plans/upgrades-downgrades.md",sourceDirName:"guide/05_plans",slug:"/guide/plans/upgrades-downgrades",permalink:"/docs/guide/plans/upgrades-downgrades",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"guide",previous:{title:"Subscriptions",permalink:"/docs/guide/plans/subscription"},next:{title:"Customers",permalink:"/docs/guide/customers"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Impact on invoicing",id:"impact-on-invoicing",level:2}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"upgrades--downgrades"},"Upgrades & Downgrades"),(0,r.kt)("p",null,"To modify an active subscription through the user interface:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to the ",(0,r.kt)("strong",{parentName:"li"},'"Customers"')," section;"),(0,r.kt)("li",{parentName:"ol"},"Select a customer from the list;"),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},'"Change plan"'),";"),(0,r.kt)("li",{parentName:"ol"},"Select the new plan you want to assign to the customer; and"),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},'"Change plan"')," to save.")),(0,r.kt)("p",null,"You can also terminate a subscription and create a new one via the API (",(0,r.kt)("a",{parentName:"p",href:"/docs/api/subscriptions/terminate-subscription"},"learn more"),")."),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"When modifying a subscription, Lago will assess whether the change is an upgrade or a downgrade. The result is determined by the monthly value of the plans (i.e. the base amount as defined in each plan model, calculated on a monthly basis, and excluding charges)."),(0,r.kt)("p",null,"Here are some examples:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Initial plan model"),(0,r.kt)("th",{parentName:"tr",align:null},"New plan model"),(0,r.kt)("th",{parentName:"tr",align:null},"Result"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"$20 per month"),(0,r.kt)("td",{parentName:"tr",align:null},"$40 per month"),(0,r.kt)("td",{parentName:"tr",align:null},"Upgrade"),(0,r.kt)("td",{parentName:"tr",align:null},"$40 > $20")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"$20 per month"),(0,r.kt)("td",{parentName:"tr",align:null},"$15 per month"),(0,r.kt)("td",{parentName:"tr",align:null},"Downgrade"),(0,r.kt)("td",{parentName:"tr",align:null},"$15 < $20")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"$20 per month"),(0,r.kt)("td",{parentName:"tr",align:null},"$300 per year"),(0,r.kt)("td",{parentName:"tr",align:null},"Upgrade"),(0,r.kt)("td",{parentName:"tr",align:null},"$300 / 12 = $25 > $20")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"$20 per month"),(0,r.kt)("td",{parentName:"tr",align:null},"$180 per year"),(0,r.kt)("td",{parentName:"tr",align:null},"Downgrade"),(0,r.kt)("td",{parentName:"tr",align:null},"$180 / 12 = $15 < $20")))),(0,r.kt)("p",null,"In the case of an upgrade, the initial subscription will terminate immediately and the new subscription will start right away. However, in the case of a downgrade, the initial subscription will terminate at the end of the current billing period."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you upgrade the subscription during the trial period of the initial plan, the customer will lose the remaining days of their trial. To avoid this, you should ensure the new plan also includes a trial period."))),(0,r.kt)("h2",{id:"impact-on-invoicing"},"Impact on invoicing"),(0,r.kt)("p",null,"When a subscription terminates, Lago automatically generates a final invoice including charges and/or the outstanding subscription fee (only if the plan had to be paid in arrears). It may also generate an invoice for the new subscription if the new plan has to be paid in advance."),(0,r.kt)("p",null,"Invoices are calculated on a pro rata basis according to the number of days."),(0,r.kt)("p",null,"Consider the following example:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Your customer is on the standard plan (e.g. $20 to be paid in advance each month). Therefore, beginning of May, an invoice of $20 was generated for them."),(0,r.kt)("p",{parentName:"blockquote"},"The customer now wants to switch to the premium plan (e.g. $40 to be paid in advance each month). If you modify their subscription on May 11th, Lago will generate a new invoice of $7.10."),(0,r.kt)("p",{parentName:"blockquote"},"There are 21 days left until the end of the month (including May 11th), so the calculation is:"),(0,r.kt)("p",{parentName:"blockquote"},"21 days x $40 / 31 days = $27.10 - $20 already invoiced = $7.10")))}u.isMDXComponent=!0}}]);