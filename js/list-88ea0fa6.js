import{f as w,o as N,h as _,i as R,R as c,u as F,j,w as M,k as A,l as L,m as V,n as z,p as E,a as t,C as U,F as b,A as S,I as B,B as $,d as H,N as K,b as v}from"./index-1c0ad94e.js";import{T as q}from"./title-link-760e71f0.js";import{D as G}from"./delete-confirm-d04f3837.js";import{T as J}from"./index-adf59b30.js";import{E as Q}from"./edit-column-6fd4d0c6.js";import{R as x}from"./relative-time-5dc10dee.js";import{u as W}from"./use-table-351bde95.js";import{H as X}from"./rounded-button-c4b84c49.js";import{N as Y}from"./Popconfirm-ee8ddab6.js";import"./iframe-preview-1b02c0dc.js";import"./DataTable-5246e860.js";import"./ChevronRight-46307fc8.js";import"./Icon-f76d8766.js";import"./index-ddd9133d.js";import"./Tooltip-e28b7be1.js";import"./Select-d9659482.js";import"./Tag-df8d4ca0.js";import"./Pagination-d23d7cbf.js";import"./prop-a1682621.js";import"./Forward-ff40209a.js";import"./ExternalLink-38c72212.js";const Z={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ee=R("path",{d:"M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24s24 10.745 24 24s-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098c.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469c8.681 25.895-.069 57.704-16.382 74.757c4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725c-15.957-7.099-36.821-15.887-52.651-16.178c-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521c39.614-39.144 56.648-80.587 89.117-113.111c14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z",fill:"currentColor"},null,-1),te=[ee];var ae=w({name:"ThumbsUp",render:function(n,u){return N(),_("svg",Z,te)}});const xe=w({name:"PostList",setup(){const{loading:k,checkedRowKeys:n,data:u,pager:m,sortProps:l,fetchDataFn:P}=W((s,r)=>async(e=T.query.page||1,y=20)=>{const a=await c.api.posts.get({params:{page:e,size:y,select:"title _id id created modified slug categoryId copyright tags count",...l.sortBy?{sortBy:l.sortBy,sortOrder:l.sortOrder}:{}}});s.value=a.data,r.value=a.pagination}),g=F(),T=j(),o=P;M(()=>T.query.page,async s=>{await o(s)});const i=A(L);V(async()=>{await o(),await i.fetch()});const C=w({setup(){const s=z(()=>i.data.value?.map(e=>({label:e.name,value:e.id}))||[]),r=E([{type:"selection",options:["none","all"]},{title:"\u6807\u9898",sortOrder:!1,sorter:"default",key:"title",width:200,ellipsis:!0,render(e){return t(b,null,[t(q,{id:e.id,title:e.title,inPageTo:`/posts/edit?id=${e.id}`,externalLinkTo:`/posts/${e.category.slug}/${e.slug}`},null)])}},{title:"\u5206\u7C7B",sortOrder:!1,sorter:"default",key:"category",width:80,ellipsis:!0,filterOptions:s,filter:!0,render(e){return i.map.value?t(Q,{returnToConfrim:!1,initialValue:i.map.value.get(e.categoryId)?.name??"",onSubmit:async a=>{await c.api.posts(e.id).patch({data:{categoryId:a}}),g.success("\u4FEE\u6539\u6210\u529F~!"),u.value.find(f=>f.id===e.id).categoryId=a},type:"select",options:i.data.value?.map(a=>({label:a.name,value:a.id,key:a.id}))||[]},null):""}},{title:"\u6807\u7B7E",key:"tags",width:100,ellipsis:!0,render(e){return e.tags?.join("\uFF0C")}},{title:()=>t(B,null,{default:()=>[t($,null,null)]}),key:"count.read",width:50,render(e){return e.count?.read||0}},{title:()=>t(B,null,{default:()=>[t(ae,null,null)]}),width:50,key:"count.like",render(e){return e.count?.like||0}},{title:"\u521B\u5EFA\u4E8E",width:100,key:"created",sortOrder:"descend",sorter:"default",render(e){return t(x,{time:e.created},null)}},{title:"\u4FEE\u6539\u4E8E",key:"modified",sorter:"default",sortOrder:!1,width:100,render(e){return t(x,{time:e.modified},null)}},{title:"\u64CD\u4F5C",fixed:"right",width:60,key:"id",render(e){return t(H,null,{default:()=>[t(Y,{positiveText:"\u53D6\u6D88",negativeText:"\u5220\u9664",onNegativeClick:async()=>{await c.api.posts(e.id).delete(),g.success("\u5220\u9664\u6210\u529F"),await o(m.value.currentPage)}},{trigger:()=>t(K,{text:!0,type:"error",size:"tiny"},{default:()=>[v("\u79FB\u9664")]}),default:()=>t("span",{class:"max-w-48"},[v("\u786E\u5B9A\u8981\u5220\u9664 "),e.title,v(" ?")])})]})}}]);return()=>t(J,{loading:k.value,columns:r,data:u,nTableProps:{onUpdateFilters:async(e,y)=>{if(!!e&&e.category&&Array.isArray(e.category)){if(!e.category.length){await o();return}const f=e.category.join(","),{entries:O}=await c.api.categories.get({params:{ids:f}}),D=Object.values(O).reduce((h,d)=>{const I=d.children?.map(p=>(Object.defineProperty(p,"categoryId",{value:d.id,enumerable:!0}),Object.defineProperty(p,"category",{get(){return p},enumerable:!1}),p));return[...h,...I]},[]).sort((h,d)=>+new Date(h.created)-+new Date(d.created));u.value=D,m.value={currentPage:1,total:1,size:0,hasNextPage:!1,hasPrevPage:!1,totalPage:1}}}},onFetchData:o,pager:m,onUpdateCheckedRowKeys:e=>{n.value=e},onUpdateSorter:async e=>{l.sortBy=e.sortBy,l.sortOrder=e.sortOrder}},null)}});return()=>t(U,null,{actions:()=>t(b,null,[t(G,{checkedRowKeys:n.value,onDelete:async()=>{const s=await Promise.allSettled(n.value.map(r=>c.api.posts(r).delete()));for(const r of s)r.status==="rejected"&&g.success(`\u5220\u9664\u5931\u8D25\uFF0C${r.reason.message}`);n.value.length=0,o()}},null),t(X,{to:"/posts/edit",icon:t(S,null,null)},null)]),default:()=>t(C,null,null)})}});export{xe as ManagePostListView};
