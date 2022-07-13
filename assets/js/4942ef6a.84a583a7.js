"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[3530],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,g=u["".concat(s,".").concat(d)]||u[d]||c[d]||r;return n?a.createElement(g,o(o({ref:t},m),{},{components:n})):a.createElement(g,o({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5243:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:12},o="Stripe Integration",l={unversionedId:"guide/stripe-integration",id:"guide/stripe-integration",title:"Stripe Integration",description:"Lago's native integration with Stripe allows you to collect payments automatically when new invoices are generated.",source:"@site/docs/guide/12_stripe-integration.md",sourceDirName:"guide",slug:"/guide/stripe-integration",permalink:"/docs/guide/stripe-integration",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"guide",previous:{title:"Integration Testing",permalink:"/docs/guide/testing-integration"}},s={},p=[{value:"Setting up the integration",id:"setting-up-the-integration",level:2},{value:"Customer information",id:"customer-information",level:2},{value:"Payment intents",id:"payment-intents",level:2},{value:"Implementation options",id:"implementation-options",level:2},{value:"New billing and payment system",id:"new-billing-and-payment-system",level:3},{value:"Migration to a new billing system",id:"migration-to-a-new-billing-system",level:3}],m={toc:p};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"stripe-integration"},"Stripe Integration"),(0,i.kt)("p",null,"Lago's native integration with Stripe allows you to collect payments automatically when new invoices are generated."),(0,i.kt)("h2",{id:"setting-up-the-integration"},"Setting up the integration"),(0,i.kt)("p",null,"To set up the integration with Stripe through the user interface:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the side menu, select ",(0,i.kt)("strong",{parentName:"li"},'"Settings"'),";"),(0,i.kt)("li",{parentName:"ol"},"Select the ",(0,i.kt)("strong",{parentName:"li"},'"Integrations"')," tab;"),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},'"Stripe"')," and enter your Stripe API key (",(0,i.kt)("a",{parentName:"li",href:"https://support.stripe.com/questions/locate-api-keys-in-the-dashboard"},"locate your API key"),"); and"),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},'"Connect to Stripe"')," to confirm.")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"By default, customers created in Lago are not automatically created in Stripe. If you want your Lago customers to be added to Stripe, you need to activate this option manually."))),(0,i.kt)("h2",{id:"customer-information"},"Customer information"),(0,i.kt)("p",null,"To collect payments automatically, the customer must exist in both the Lago and Stripe databases."),(0,i.kt)("p",null,"If the customer already exists in Stripe but not in Lago, we recommend that you use the Lago API to ",(0,i.kt)("a",{parentName:"p",href:"../api/customers/create-update-customer"},"create the customer record"),". When adding customer information, you must:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Define Stripe as the ",(0,i.kt)("strong",{parentName:"li"},"default payment provider"),"; and"),(0,i.kt)("li",{parentName:"ol"},"Provide the ",(0,i.kt)("strong",{parentName:"li"},"Stripe customer ID"),".")),(0,i.kt)("p",null,"If the customer does not exist in Stripe, you can first create them in Lago and if the option to create Lago customers in Stripe is activated, the customer will automatically be added to Stripe. Stripe will then return the customer ID, which will be stored in Lago."),(0,i.kt)("h2",{id:"payment-intents"},"Payment intents"),(0,i.kt)("p",null,"Once Stripe is connected and the customer exists in both databases, you can start collecting payments."),(0,i.kt)("p",null,"Each time a new invoice ",(0,i.kt)("strong",{parentName:"p"},"with an amount greater than 0 (zero)")," is generated by Lago, a payment intent will automatically be created. Stripe will record the invoice ID and process the payment. If the payment is successful, the status of the invoice will switch from ",(0,i.kt)("inlineCode",{parentName:"p"},"pending")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"succeeded"),"."),(0,i.kt)("p",null,"If the payment fails, the status of the invoice will switch from ",(0,i.kt)("inlineCode",{parentName:"p"},"pending")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"failed")," and Lago will generate an ",(0,i.kt)("inlineCode",{parentName:"p"},"invoice.payment_failure")," webhook (",(0,i.kt)("a",{parentName:"p",href:"../api/webhooks/invoice-payment-failure"},"learn more"),")."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"A valid payment method for the customer must be defined in Stripe for the payment intent to succeed (",(0,i.kt)("a",{parentName:"p",href:"https://stripe.com/docs/payments/save-and-reuse"},"learn how to save payment details"),")."))),(0,i.kt)("h2",{id:"implementation-options"},"Implementation options"),(0,i.kt)("p",null,"The level of development of your billing and payment system will determine the optimal setup for the Lago-Stripe integration."),(0,i.kt)("h3",{id:"new-billing-and-payment-system"},"New billing and payment system"),(0,i.kt)("p",null,"When implementing a new system:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Set up the Lago-Stripe integration and ",(0,i.kt)("strong",{parentName:"li"},"activate")," the option that automatically creates Lago customers in Stripe;"),(0,i.kt)("li",{parentName:"ol"},"When a customer signs up to your application, use the API to create the corresponding customer record in Lago;"),(0,i.kt)("li",{parentName:"ol"},"Lago will automatically create the customer in Stripe and retrieve the Stripe customer ID;"),(0,i.kt)("li",{parentName:"ol"},"When the customer adds their payment details via the checkout page of your application, use the Stripe API to update their payment method; and"),(0,i.kt)("li",{parentName:"ol"},"You're ready to start billing!")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Illustration of the setup when billing from scratch",src:n(6113).Z,width:"1792",height:"922"})),(0,i.kt)("h3",{id:"migration-to-a-new-billing-system"},"Migration to a new billing system"),(0,i.kt)("p",null,"When migrating to a new system:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Set up the Lago-Stripe integration and ",(0,i.kt)("strong",{parentName:"li"},"deactivate")," the option that automatically creates Lago customers in Stripe;"),(0,i.kt)("li",{parentName:"ol"},"Use the customer information that is already in your application database to create customers in Lago, including their Stripe customer ID;"),(0,i.kt)("li",{parentName:"ol"},"Make sure there's a valid payment method defined for each customer in Stripe; and"),(0,i.kt)("li",{parentName:"ol"},"You're ready to start billing!")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Illustration of the setup when migrating to a new billing system",src:n(5307).Z,width:"1848",height:"528"})))}c.isMDXComponent=!0},6113:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/from scratch-e99ec7af752438786978356ee6502792.png"},5307:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/migration-58e0b439c3a0936651952e70b0e9589d.png"}}]);