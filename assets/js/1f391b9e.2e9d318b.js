"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[3085],{6416:(e,n,t)=>{t.r(n),t.d(n,{default:()=>d});var l=t(7294),a=t(6010),r=t(6843),c=t(5290),i=t(1575),o=t(833),s=t(5281);const m="mdxPageWrapper_zHyg";function d(e){const{content:n}=e,{metadata:{title:t,description:d,frontMatter:u}}=n,{wrapperClassName:f,hide_table_of_contents:v}=u;return l.createElement(o.FG,{className:(0,a.Z)(null!=f?f:s.k.wrapper.mdxPages,s.k.page.mdxPage)},l.createElement(o.d,{title:t,description:d}),l.createElement(r.Z,null,l.createElement("main",{className:"container container--fluid margin-vert--lg"},l.createElement("div",{className:(0,a.Z)("row",m)},l.createElement("div",{className:(0,a.Z)("col",!v&&"col--8")},l.createElement(c.Z,null,l.createElement(n,null))),!v&&n.toc&&l.createElement("div",{className:"col col--2"},l.createElement(i.Z,{toc:n.toc,minHeadingLevel:u.toc_min_heading_level,maxHeadingLevel:u.toc_max_heading_level}))))))}},1575:(e,n,t)=>{t.d(n,{Z:()=>o});var l=t(7462),a=t(7294),r=t(6010),c=t(721);const i="tableOfContents_cNA8";function o(e){let{className:n,...t}=e;return a.createElement("div",{className:(0,r.Z)(i,"thin-scrollbar",n)},a.createElement(c.Z,(0,l.Z)({},t,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},721:(e,n,t)=>{t.d(n,{Z:()=>v});var l=t(7462),a=t(7294);function r(e){let{toc:n,className:t,linkClassName:l,isChild:c}=e;return n.length?a.createElement("ul",{className:c?void 0:t},n.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:null!=l?l:void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(r,{isChild:!0,toc:e.children,className:t,linkClassName:l}))))):null}const c=a.memo(r);function i(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const l=t.slice(2,e.level);e.parentIndex=Math.max(...l),t[e.level]=n}));const l=[];return n.forEach((e=>{const{parentIndex:t,...a}=e;t>=0?n[t].children.push(a):l.push(a)})),l}function o(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:l}=e;return n.flatMap((e=>{const n=o({toc:e.children,minHeadingLevel:t,maxHeadingLevel:l});return function(e){return e.level>=t&&e.level<=l}(e)?[{...e,children:n}]:n}))}var s=t(6668);function m(e){const n=e.getBoundingClientRect();return n.top===n.bottom?m(e.parentNode):n}function d(e,n){var t;let{anchorTopOffset:l}=n;const a=e.find((e=>m(e).top>=l));if(a){var r;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(m(a))?a:null!=(r=e[e.indexOf(a)-1])?r:null}return null!=(t=e[e.length-1])?t:null}function u(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:n}}=(0,s.L)();return(0,a.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function f(e){const n=(0,a.useRef)(void 0),t=u();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:l,linkActiveClassName:a,minHeadingLevel:r,maxHeadingLevel:c}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(l),i=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const l=[];for(let a=n;a<=t;a+=1)l.push("h"+a+".anchor");return Array.from(document.querySelectorAll(l.join()))}({minHeadingLevel:r,maxHeadingLevel:c}),o=d(i,{anchorTopOffset:t.current}),s=e.find((e=>o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){if(t){var l;n.current&&n.current!==e&&(null==(l=n.current)||l.classList.remove(a)),e.classList.add(a),n.current=e}else e.classList.remove(a)}(e,e===s)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,t])}function v(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:m,minHeadingLevel:d,maxHeadingLevel:u,...v}=e;const g=(0,s.L)(),h=null!=d?d:g.tableOfContents.minHeadingLevel,L=null!=u?u:g.tableOfContents.maxHeadingLevel,p=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:l}=e;return(0,a.useMemo)((()=>o({toc:i(n),minHeadingLevel:t,maxHeadingLevel:l})),[n,t,l])}({toc:n,minHeadingLevel:h,maxHeadingLevel:L});return f((0,a.useMemo)((()=>{if(r&&m)return{linkClassName:r,linkActiveClassName:m,minHeadingLevel:h,maxHeadingLevel:L}}),[r,m,h,L])),a.createElement(c,(0,l.Z)({toc:p,className:t,linkClassName:r},v))}}}]);