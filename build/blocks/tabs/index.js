!function(){"use strict";var e,t={234:function(){var e=window.wp.element,t=window.wp.blocks,a=JSON.parse('{"apiVersion":2,"name":"tb/tabs","version":"1.0.0","title":"Accessible Tab Block","category":"tb-block","description":"Display content in accessible tabpanels","supports":{"html":false,"anchor":false,"customClassName":false},"attributes":{"tabLabelsArray":{"type":"array","default":[]},"updateChild":{"type":"boolean","default":false},"anchorId":{"type":"string"},"customClass":{"type":"string"}},"textdomain":"tabs-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}'),l=window.wp.i18n,n=window.wp.blockEditor,o=window.wp.components,r=window.wp.data;const{__:__}=wp.i18n,{registerBlockType:c}=wp.blocks;c("tb/tab",{title:__("Tab","tabs-block"),description:__("Holds tabpanel content.","tabs-block"),supports:{html:!1,customClassName:!1},icon:{foreground:"#555",src:"text"},parent:["tb/tabs"],category:"tb-block",keywords:[__("tab","tabs-block"),__("tabs","tabs-block")],attributes:{tabLabel:{type:"string",default:""},blockIndex:{type:"number",default:""}},edit:t=>{let{className:a,attributes:l,setAttributes:o,clientId:c}=t;const{tabLabel:s,blockIndex:b}=l,i=wp.data.select("core/block-editor").getBlockParentsByBlockName(c,["tb/tabs"])[0],d=b,u=wp.data.select("core/block-editor").getBlockOrder(i).indexOf(c),p=(0,r.subscribe)((()=>{const e=wp.data.select("core/block-editor").getBlockOrder(i).indexOf(c);e!==d&&(p(),o({blockIndex:e}),wp.data.dispatch("core/block-editor").updateBlockAttributes(i,{updateChild:!0}))})),m=[["core/group",{},[["core/heading",{placeholder:__("Tabpanel Content","tabs-block")}],["core/paragraph"]]]];return(0,e.createElement)("div",{className:a},(0,e.createElement)("label",{"aria-hidden":"true"},__("Tab Label","tabs-block")),(0,e.createElement)(n.RichText,{tagName:"p",className:"tb__tab_label",value:s,onChange:e=>{o({tabLabel:e}),o({blockIndex:u}),wp.data.dispatch("core/block-editor").updateBlockAttributes(i,{updateChild:!0})},placeholder:__("Tab Label","tabs-block")}),(0,e.createElement)("div",{className:"tb__inner_blocks "+a+"_inner"},(0,e.createElement)(n.InnerBlocks,{allowedBlocks:!0,template:m})))},save:t=>{let{attributes:a}=t;const{tabLabel:l}=a;return(0,e.createElement)("div",{className:"tb__tab-panel",role:"tabpanel"},(0,e.createElement)(n.InnerBlocks.Content,null))}});const{Fragment:s}=wp.element,b=["tb/tab"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},i.apply(this,arguments)}const{RawHTML:d}=wp.element;(0,t.registerBlockType)(a,{icon:{src:(0,e.createElement)("svg",{width:"17px",height:"17px",viewBox:"0 0 17 17",version:"1.1"},(0,e.createElement)("path",{d:"M6 1v1h-6v4h1v4h5v6.018h11v-15.018h-11zM2 6h4v1h-4v-1zM2 9v-1h4v1h-4zM16 15.018h-9v-10.018h-6v-2h6v-1h9v13.018z",fill:"#000"})),foreground:"#000"},edit:function(t){let{attributes:a,setAttributes:c,clientId:i}=t;const{tabLabelsArray:d,updateChild:u,customClass:p,anchorId:m}=a,k=(()=>{const e=i,{innerBlockCount:t}=(0,r.useSelect)((t=>({innerBlockCount:t("core/block-editor").getBlockCount(e)}))),a=[];for(let l=0;l<t;l++){const t=wp.data.select("core/block-editor").getBlocks(e)[l].attributes.tabLabel;a.push(t)}return a})();return(k.length!==d.length||u)&&(c({tabLabelsArray:k}),c({updateChild:!1})),(0,e.createElement)(s,null,(0,e.createElement)(n.InspectorControls,null,(0,e.createElement)(o.TabPanel,{className:"tb__tabs",activeClass:"active_tab",initialTabName:"tb__advanced",tabs:[{name:"tb__advanced",title:(0,l.__)("Settings","tabs-block"),className:"tb__tab"}]},(t=>{if("tb__advanced"===t.name)return(0,e.createElement)(s,null,(0,e.createElement)(o.PanelBody,{title:(0,l.__)("Miscellaneous","tab-blocks"),initialOpen:!0},(0,e.createElement)(o.TextControl,{label:(0,l.__)("HTML Anchor ID","tab-blocks"),value:m,onChange:e=>c({anchorId:e.replace(/[^a-zA-Z0-9_-]/g,"-")}),help:(0,l.__)("Anchor ID lets you link directly to a section on a page.","tab-blocks")}),(0,e.createElement)(o.TextControl,{label:(0,l.__)("Additional Class(es)","tab-block"),value:p,onChange:e=>c({customClass:e}),help:(0,l.__)("Use space to separate multiple classes.","tab-block")})))}))),(0,e.createElement)(n.InnerBlocks,{allowedBlocks:b,template:[["tb/tab"]]}))},save:function(t){let{attributes:a}=t;const{tabLabelsArray:l,customClass:o,anchorId:r}=a,c=n.useBlockProps.save({className:"tb__tabs_accessible_tabs "+o});return(0,e.createElement)("div",i({},c,{id:r||null}),(0,e.createElement)("div",{className:"tb__tab-labels",role:"tablist"},l.map(((t,a)=>(0,e.createElement)("button",{key:a,className:0===a?"tb__tab-label active":"tb__tab-label",role:"tab",type:"button","aria-selected":0===a?"true":"false"},(0,e.createElement)(d,null,t))))),(0,e.createElement)("div",{className:"tb__tab-content"},(0,e.createElement)(n.InnerBlocks.Content,null)))}})}},a={};function l(e){var n=a[e];if(void 0!==n)return n.exports;var o=a[e]={exports:{}};return t[e](o,o.exports,l),o.exports}l.m=t,e=[],l.O=function(t,a,n,o){if(!a){var r=1/0;for(i=0;i<e.length;i++){a=e[i][0],n=e[i][1],o=e[i][2];for(var c=!0,s=0;s<a.length;s++)(!1&o||r>=o)&&Object.keys(l.O).every((function(e){return l.O[e](a[s])}))?a.splice(s--,1):(c=!1,o<r&&(r=o));if(c){e.splice(i--,1);var b=n();void 0!==b&&(t=b)}}return t}o=o||0;for(var i=e.length;i>0&&e[i-1][2]>o;i--)e[i]=e[i-1];e[i]=[a,n,o]},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={70:0,50:0};l.O.j=function(t){return 0===e[t]};var t=function(t,a){var n,o,r=a[0],c=a[1],s=a[2],b=0;if(r.some((function(t){return 0!==e[t]}))){for(n in c)l.o(c,n)&&(l.m[n]=c[n]);if(s)var i=s(l)}for(t&&t(a);b<r.length;b++)o=r[b],l.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return l.O(i)},a=self.webpackChunkaccessible_tab_block=self.webpackChunkaccessible_tab_block||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var n=l.O(void 0,[50],(function(){return l(234)}));n=l.O(n)}();