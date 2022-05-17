"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[651],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8551:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:8},s="Integration Testing",c={unversionedId:"guide/testing-integration",id:"guide/testing-integration",title:"Integration Testing",description:"This step-by-step integration guide will help you get started with Lago.",source:"@site/docs/guide/08_testing-integration.md",sourceDirName:"guide",slug:"/guide/testing-integration",permalink:"/docs/guide/testing-integration",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"guide",previous:{title:"Payments",permalink:"/docs/guide/invoicing/payments"}},u={},p=[{value:"Foreword",id:"foreword",level:2},{value:"1. Define a billable metric",id:"1-define-a-billable-metric",level:2},{value:"2. Create a plan (with charges)",id:"2-create-a-plan-with-charges",level:2},{value:"3. Create a customer",id:"3-create-a-customer",level:2},{value:"4. Start a subscription",id:"4-start-a-subscription",level:2},{value:"5. Send usage-based events",id:"5-send-usage-based-events",level:2},{value:"6. Invoice your customers",id:"6-invoice-your-customers",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"integration-testing"},"Integration Testing"),(0,o.kt)("p",null,"This step-by-step integration guide will help you get started with Lago."),(0,o.kt)("h2",{id:"foreword"},"Foreword"),(0,o.kt)("p",null,"At the moment, each Lago account is associated with a unique environment. It is not currently possible to have your test environment and production environment in the same account."),(0,o.kt)("p",null,"However, we can suggest different workarounds:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Create two accounts"),' to get access to two environments, one that could be called "Company Staging" and another one that could be called "Company Production"; or')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Leverage our two hosting solutions")," to use Lago Cloud as a test environment and Lago Open Source as a production environment (or vice versa)."))),(0,o.kt)("p",null,"Please note that the above workarounds will require you to replicate the same setup in both environments."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In the future, you will be able to get access to a test environment and a production environment with the same Lago account."))),(0,o.kt)("h2",{id:"1-define-a-billable-metric"},"1. Define a billable metric"),(0,o.kt)("p",null,"To define a billable metric through the user interface:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the side menu, select ",(0,o.kt)("strong",{parentName:"li"},'"Billable metrics"'),";"),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},'"Add a billable metric"')," in the upper right corner;"),(0,o.kt)("li",{parentName:"ol"},"Fill in the form (",(0,o.kt)("a",{parentName:"li",href:"/docs/guide/billable-metrics/overview"},"learn more about billable metrics"),"); and"),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},'"Add billable metric"')," to save.")),(0,o.kt)("h2",{id:"2-create-a-plan-with-charges"},"2. Create a plan (with charges)"),(0,o.kt)("p",null,"To create a plan through the user interface:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the side menu, select ",(0,o.kt)("strong",{parentName:"li"},'"Plans"'),";"),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},'"Add a plan"')," in the upper right corner;"),(0,o.kt)("li",{parentName:"ol"},"Fill in the form (",(0,o.kt)("a",{parentName:"li",href:"/docs/guide/plans/overview"},"learn more about plans"),"); and"),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},'"Add plan"')," to save.")),(0,o.kt)("h2",{id:"3-create-a-customer"},"3. Create a customer"),(0,o.kt)("p",null,"To create a customer through the user interface:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the side menu, select ",(0,o.kt)("strong",{parentName:"li"},'"Customers"'),";"),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},'"Add a customer"')," in the upper right corner;"),(0,o.kt)("li",{parentName:"ol"},"Fill in the form in the pop-up window (",(0,o.kt)("a",{parentName:"li",href:"/docs/guide/customers"},"learn more about customers"),"); and"),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},'"Add customer"')," to save.")),(0,o.kt)("p",null,"You can also create customers through the API, as described in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/customers/create-update-customer"},"documentation"),"."),(0,o.kt)("h2",{id:"4-start-a-subscription"},"4. Start a subscription"),(0,o.kt)("p",null,"To start a subscription, you need to assign a plan to an existing customer. To do so through the user interface:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the side menu, select ",(0,o.kt)("strong",{parentName:"li"},'"Customers"'),";"),(0,o.kt)("li",{parentName:"ol"},"Select a customer from the list;"),(0,o.kt)("li",{parentName:"ol"},"On the right-hand side, click ",(0,o.kt)("strong",{parentName:"li"},'"Add a plan"'),";"),(0,o.kt)("li",{parentName:"ol"},"Select the plan you would like to assign to your customer; and"),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},'"Add plan"')," to confirm.")),(0,o.kt)("p",null,"A success toast will be displayed and the new subscription will appear in the customer view."),(0,o.kt)("p",null,"You can also start a subscription through the API, as described in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/subscriptions/create-subscription"},"documentation"),"."),(0,o.kt)("h2",{id:"5-send-usage-based-events"},"5. Send usage-based events"),(0,o.kt)("p",null,"Events sent from your backend to Lago will be automatically aggregated according to the predefined billable metrics. To start sending usage-based events, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/events"},"API documentation"),"."),(0,o.kt)("h2",{id:"6-invoice-your-customers"},"6. Invoice your customers"),(0,o.kt)("p",null,"At the end of the billing period, Lago will automatically generate an invoice for each customer. Invoices will be sent to your application using webhooks. To define the URL to which the webhooks will be sent:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the side menu of the user interface, select ",(0,o.kt)("strong",{parentName:"li"},'"Developers"'),";"),(0,o.kt)("li",{parentName:"ol"},"On the right-hand side, click ",(0,o.kt)("strong",{parentName:"li"},'"Add a webhook"'),";"),(0,o.kt)("li",{parentName:"ol"},"Enter your the URL of your application; and"),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},'"Add webhook"')," to confirm.")),(0,o.kt)("p",null,"To learn more about webhooks and invoices, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/invoices"},"API documentation"),"."))}m.isMDXComponent=!0}}]);