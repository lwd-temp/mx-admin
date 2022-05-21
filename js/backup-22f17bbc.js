import{H as g}from"./rounded-button-27de4eeb.js";import{f as p,o as h,h as f,i as u,R as i,cH as T,t as z,a as t,C as B,F as C,E as R,d as D,b as r,N as m}from"./index-ac59d87d.js";import{D as E}from"./delete-confirm-4257b2b2.js";import{T as N}from"./index-aa98773b.js";import{u as V}from"./use-table-c40938db.js";import{r as x}from"./index-659ead42.js";import{N as y}from"./Popconfirm-cbf4ca5f.js";import"./DataTable-2afb5c9a.js";import"./ChevronRight-16397744.js";import"./Icon-e601fe88.js";import"./index-32787c89.js";import"./Tooltip-796d914c.js";import"./Select-75da8fa3.js";import"./Tag-d2284e4b.js";import"./Pagination-3d259688.js";import"./Forward-2f251eb0.js";import"./transform-3fa7f44d.js";import"./_arrayEach-2ff48152.js";const A={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},$=u("path",{d:"M296 64h-80a7.91 7.91 0 0 0-8 8v24h96V72a7.91 7.91 0 0 0-8-8z",fill:"none"},null,-1),F=u("path",{d:"M292 64h-72a4 4 0 0 0-4 4v28h80V68a4 4 0 0 0-4-4z",fill:"none"},null,-1),H=u("path",{d:"M447.55 96H336V48a16 16 0 0 0-16-16H192a16 16 0 0 0-16 16v48H64.45L64 136h33l20.09 314A32 32 0 0 0 149 480h214a32 32 0 0 0 31.93-29.95L415 136h33zM176 416l-9-256h33l9 256zm96 0h-32V160h32zm24-320h-80V68a4 4 0 0 1 4-4h72a4 4 0 0 1 4 4zm40 320h-33l9-256h33z",fill:"currentColor"},null,-1),M=[$,F,H];var I=p({name:"TrashSharp",render:function(n,c){return h(),f("svg",A,M)}});const K={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},L=u("path",{d:"M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.16 0-7.74 2.42-9.44 5.93c-.32.67.04 1.47.75 1.71c.59.2 1.23-.08 1.5-.64c1.3-2.66 4.03-4.5 7.19-4.5c1.95 0 3.73.72 5.12 1.88l-1.91 1.91c-.63.63-.19 1.71.7 1.71H21c.55 0 1-.45 1-1V9.41c0-.89-1.08-1.34-1.71-.71l-1.89 1.9z",fill:"currentColor"},null,-1),P=[L];var S=p({name:"RedoRound",render:function(n,c){return h(),f("svg",K,P)}});const U={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},j=u("path",{d:"M12.5 8c-2.65 0-5.05.99-6.9 2.6L3.71 8.71C3.08 8.08 2 8.52 2 9.41V15c0 .55.45 1 1 1h5.59c.89 0 1.34-1.08.71-1.71l-1.91-1.91c1.39-1.16 3.16-1.88 5.12-1.88c3.16 0 5.89 1.84 7.19 4.5c.27.56.91.84 1.5.64c.71-.23 1.07-1.04.75-1.72C20.23 10.42 16.65 8 12.5 8z",fill:"currentColor"},null,-1),W=[j];var q=p({name:"UndoRound",render:function(n,c){return h(),f("svg",U,W)}}),pe=p(()=>{const{checkedRowKeys:s,data:n,fetchDataFn:c}=V(e=>async()=>{const a=(await i.api.backups.get()).data;a.sort((l,d)=>d.filename.localeCompare(l.filename)),e.value=a});T(()=>{c()}),z();const v=async()=>{const e=message.info("\u5907\u4EFD\u4E2D",{duration:1e9,closable:!0}),o=await i.api.backups.new.get({responseType:"blob",timeout:1e9});e.destroy(),message.success("\u5907\u4EFD\u5B8C\u6210"),x(o,"backup.zip")},k=async()=>{const e=document.createElement("input");e.type="file",e.style.cssText="position: absolute; opacity: 0; z-index: -9999;top: 0; left: 0",e.accept=".zip",document.body.append(e),e.click(),e.onchange=()=>{const o=e.files[0],a=new FormData;a.append("file",o),i.api.backups.rollback.post({data:a,timeout:1<<30}).then(()=>{message.success("\u6062\u590D\u6210\u529F, \u9875\u9762\u5C06\u4F1A\u91CD\u8F7D"),setTimeout(()=>{location.reload()},1e3)})}},w=async e=>{let o="";if(Array.isArray(e)?o=e.join(","):o=e,await i.api.backups.delete({params:{files:o}}),message.success("\u5220\u9664\u6210\u529F"),Array.isArray(e))e.forEach(a=>{const l=n.value.findIndex(d=>d.filename===a);l!=-1&&n.value.splice(l,1)});else{const a=n.value.findIndex(l=>l.filename===e);a!=-1&&n.value.splice(a,1)}},b=async e=>{await i.api.backups.rollback(e).patch({}),message.info("\u56DE\u6EDA\u4E2D",{closable:!0,duration:1e9})},_=async e=>{const o=message.info("\u4E0B\u8F7D\u4E2D",{duration:1e9,closable:!0}),a=await i.api.backups(e).get({responseType:"blob",timeout:1e9});o.destroy(),message.success("\u4E0B\u8F7D\u5B8C\u6210"),x(a,`${e}.zip`)};return()=>t(B,{actionsElement:t(C,null,[t(g,{icon:t(q,null,null),name:"\u7ACB\u5373\u5907\u4EFD",variant:"primary",onClick:v},null),t(g,{icon:t(S,null,null),onClick:k,name:"\u4E0A\u4F20\u6062\u590D",variant:"info"},null),t(E,{checkedRowKeys:s.value,onDelete:async()=>{w(s.value)},customIcon:t(I,null,null),customButtonTip:"\u6279\u91CF\u5220\u9664"},null)])},{default:()=>[t(N,R({data:n,fetchDataFn:c},{checkedRowKey:"filename",nTableProps:{maxHeight:"calc(100vh - 17rem)"},onUpdateCheckedRowKeys:e=>{s.value=e},maxWidth:500,columns:[{type:"selection",options:["none","all"]},{title:"\u65E5\u671F",key:"filename"},{title:"\u5927\u5C0F",key:"size",width:200},{title:"\u64CD\u4F5C",fixed:"right",key:"filename",render(e){const o=e.filename;return t(D,{inline:!0},{default:()=>[t(m,{text:!0,size:"tiny",type:"primary",onClick:()=>void _(o)},{default:()=>[r("\u4E0B\u8F7D")]}),t(y,{positiveText:"\u53D6\u6D88",negativeText:"\u56DE\u9000",onNegativeClick:()=>{b(o)}},{trigger:()=>t(m,{text:!0,size:"tiny",type:"warning"},{default:()=>[r("\u56DE\u9000")]}),default:()=>t("span",{class:"max-w-48"},[r("\u786E\u5B9A\u8981\u56DE\u9000?")])}),t(y,{positiveText:"\u53D6\u6D88",negativeText:"\u5220\u9664",onNegativeClick:()=>{w(o)}},{trigger:()=>t(m,{text:!0,size:"tiny",type:"error"},{default:()=>[r("\u79FB\u9664")]}),default:()=>t("span",{class:"max-w-48"},[r("\u786E\u5B9A\u8981\u5220\u9664?")])})]})}}],noPagination:!0}),null)]})});export{pe as default};
