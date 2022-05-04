import{H as w}from"./rounded-button-af673ee0.js";import{d as r,o as m,e as h,f as l,R as u,cE as b,s as _,h as t,a as C,N as d,F as E,n as B}from"./index-5f09ba15.js";import{D as F}from"./delete-confirm-ee18a7be.js";import{T as z}from"./index-0f723da9.js";import{u as T}from"./use-table-2b7854f0.js";import{r as g}from"./index-6a47972f.js";import{N as x}from"./Popconfirm-057bec62.js";import"./DataTable-de6e990a.js";import"./ChevronRight-5b7f4947.js";import"./Icon-32fff895.js";import"./Select-577ab9c6.js";import"./Tag-22dd1dee.js";import"./Forward-5abdce9a.js";import"./index-7af81d95.js";import"./Tooltip-485a70b2.js";import"./transform-4eb5b072.js";import"./_arrayEach-2ff48152.js";const R={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},A=l("path",{d:"M296 64h-80a7.91 7.91 0 0 0-8 8v24h96V72a7.91 7.91 0 0 0-8-8z",fill:"none"},null,-1),M=l("path",{d:"M292 64h-72a4 4 0 0 0-4 4v28h80V68a4 4 0 0 0-4-4z",fill:"none"},null,-1),N=l("path",{d:"M447.55 96H336V48a16 16 0 0 0-16-16H192a16 16 0 0 0-16 16v48H64.45L64 136h33l20.09 314A32 32 0 0 0 149 480h214a32 32 0 0 0 31.93-29.95L415 136h33zM176 416l-9-256h33l9 256zm96 0h-32V160h32zm24-320h-80V68a4 4 0 0 1 4-4h72a4 4 0 0 1 4 4zm40 320h-33l9-256h33z",fill:"currentColor"},null,-1),V=[A,M,N];var $=r({name:"TrashSharp",render:function(a,c){return m(),h("svg",R,V)}});const H={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},I=l("path",{d:"M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.16 0-7.74 2.42-9.44 5.93c-.32.67.04 1.47.75 1.71c.59.2 1.23-.08 1.5-.64c1.3-2.66 4.03-4.5 7.19-4.5c1.95 0 3.73.72 5.12 1.88l-1.91 1.91c-.63.63-.19 1.71.7 1.71H21c.55 0 1-.45 1-1V9.41c0-.89-1.08-1.34-1.71-.71l-1.89 1.9z",fill:"currentColor"},null,-1),K=[I];var L=r({name:"RedoRound",render:function(a,c){return m(),h("svg",H,K)}});const S={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},U=l("path",{d:"M12.5 8c-2.65 0-5.05.99-6.9 2.6L3.71 8.71C3.08 8.08 2 8.52 2 9.41V15c0 .55.45 1 1 1h5.59c.89 0 1.34-1.08.71-1.71l-1.91-1.91c1.39-1.16 3.16-1.88 5.12-1.88c3.16 0 5.89 1.84 7.19 4.5c.27.56.91.84 1.5.64c.71-.23 1.07-1.04.75-1.72C20.23 10.42 16.65 8 12.5 8z",fill:"currentColor"},null,-1),P=[U];var j=r({name:"UndoRound",render:function(a,c){return m(),h("svg",S,P)}}),ce=r(()=>{const{checkedRowKeys:s,data:a,fetchDataFn:c}=T(e=>async()=>{const n=(await u.api.backups.get()).data;n.sort((i,p)=>p.filename.localeCompare(i.filename)),e.value=n});b(()=>{c()}),_();const y=async()=>{const e=message.info("\u5907\u4EFD\u4E2D",{duration:1e9,closable:!0}),o=await u.api.backups.new.get({responseType:"blob",timeout:1e9});e.destroy(),message.success("\u5907\u4EFD\u5B8C\u6210"),g(o,"backup.zip")},v=async()=>{const e=document.createElement("input");e.type="file",e.style.cssText="position: absolute; opacity: 0; z-index: -9999;top: 0; left: 0",e.accept=".zip",document.body.append(e),e.click(),e.onchange=()=>{const o=e.files[0],n=new FormData;n.append("file",o),u.api.backups.rollback.post({data:n,timeout:1<<30}).then(()=>{message.success("\u6062\u590D\u6210\u529F, \u9875\u9762\u5C06\u4F1A\u91CD\u8F7D"),setTimeout(()=>{location.reload()},1e3)})}},f=async e=>{let o="";if(Array.isArray(e)?o=e.join(","):o=e,await u.api.backups.delete({params:{files:o}}),message.success("\u5220\u9664\u6210\u529F"),Array.isArray(e))e.forEach(n=>{const i=a.value.findIndex(p=>p.filename===n);i!=-1&&a.value.splice(i,1)});else{const n=a.value.findIndex(i=>i.filename===e);n!=-1&&a.value.splice(n,1)}},k=async e=>{await u.api.backups.rollback(e).patch({}),message.info("\u56DE\u6EDA\u4E2D",{closable:!0,duration:1e9})},D=async e=>{const o=message.info("\u4E0B\u8F7D\u4E2D",{duration:1e9,closable:!0}),n=await u.api.backups(e).get({responseType:"blob",timeout:1e9});o.destroy(),message.success("\u4E0B\u8F7D\u5B8C\u6210"),g(n,e+".zip")};return()=>t(B,{actionsElement:t(E,null,t(w,{icon:t(j,null),name:"\u7ACB\u5373\u5907\u4EFD",variant:"primary",onClick:y}),t(w,{icon:t(L,null),onClick:v,name:"\u4E0A\u4F20\u6062\u590D",variant:"info"}),t(F,{checkedRowKeys:s.value,onDelete:async()=>{f(s.value)},customIcon:t($,null),customButtonTip:"\u6279\u91CF\u5220\u9664"}))},t(z,{data:a,fetchDataFn:c,checkedRowKey:"filename",nTableProps:{maxHeight:"calc(100vh - 17rem)"},onUpdateCheckedRowKeys:e=>{s.value=e},maxWidth:500,columns:[{type:"selection",options:["none","all"]},{title:"\u65E5\u671F",key:"filename"},{title:"\u5927\u5C0F",key:"size",width:200},{title:"\u64CD\u4F5C",fixed:"right",key:"filename",render(e){const o=e.filename;return t(C,{inline:!0},t(d,{text:!0,size:"tiny",type:"primary",onClick:()=>void D(o)},"\u4E0B\u8F7D"),t(x,{positiveText:"\u53D6\u6D88",negativeText:"\u56DE\u9000",onNegativeClick:()=>{k(o)}},{trigger:()=>t(d,{text:!0,size:"tiny",type:"warning"},"\u56DE\u9000"),default:()=>t("span",{class:"max-w-48"},"\u786E\u5B9A\u8981\u56DE\u9000?")}),t(x,{positiveText:"\u53D6\u6D88",negativeText:"\u5220\u9664",onNegativeClick:()=>{f(o)}},{trigger:()=>t(d,{text:!0,size:"tiny",type:"error"},"\u79FB\u9664"),default:()=>t("span",{class:"max-w-48"},"\u786E\u5B9A\u8981\u5220\u9664?")}))}}],noPagination:!0}))});export{ce as default};
