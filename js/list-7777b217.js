import{f as c,R as i,u as h,j as v,w,m as B,p as x,a as t,C as D,F as N,A as P,d as R,N as b,b as n}from"./index-ac59d87d.js";import{T as O}from"./title-link-7eafa5be.js";import{D as C}from"./delete-confirm-4257b2b2.js";import{T as F}from"./index-aa98773b.js";import{R as p}from"./relative-time-2abf5f14.js";import{u as L}from"./use-table-c40938db.js";import{H as A}from"./rounded-button-27de4eeb.js";import{N as M}from"./Popconfirm-cbf4ca5f.js";import"./iframe-preview-0a1eae25.js";import"./DataTable-2afb5c9a.js";import"./ChevronRight-16397744.js";import"./Icon-e601fe88.js";import"./index-32787c89.js";import"./Tooltip-796d914c.js";import"./Select-75da8fa3.js";import"./Tag-d2284e4b.js";import"./Pagination-3d259688.js";import"./Forward-2f251eb0.js";import"./ExternalLink-e49c7dd7.js";const ee=c({name:"PageList",setup(){const{checkedRowKeys:o,data:m,pager:l,sortProps:r,fetchDataFn:g}=L((a,e)=>async(y=d.query.page||1,T=20)=>{const k=await i.api.pages.get({params:{page:y,size:T,select:"title subtitle _id id created modified slug",...r.sortBy?{sortBy:r.sortBy,sortOrder:r.sortOrder}:{}}});a.value=k.data}),u=h(),d=v(),s=g;w(()=>d.query.page,async a=>{await s(a)}),B(async()=>{await s()});const f=c({setup(){const a=x([{type:"selection",options:["none","all"]},{title:"\u6807\u9898",sortOrder:!1,sorter:"default",key:"title",width:300,render(e){return t(O,{inPageTo:`/pages/edit?id=${e.id}`,title:e.title,externalLinkTo:`/${e.slug}`,id:e.id},null)}},{title:"\u526F\u6807\u9898",key:"subtitle"},{title:"\u8DEF\u5F84",key:"slug",render(e){return`/${e.slug}`}},{title:"\u521B\u5EFA\u4E8E",key:"created",sortOrder:"descend",sorter:"default",render(e){return t(p,{time:e.created},null)}},{title:"\u4FEE\u6539\u4E8E",key:"modified",sorter:"default",sortOrder:!1,render(e){return t(p,{time:e.modified},null)}},{title:"\u64CD\u4F5C",fixed:"right",key:"id",render(e){return t(R,null,{default:()=>[t(M,{positiveText:"\u53D6\u6D88",negativeText:"\u5220\u9664",onNegativeClick:async()=>{await i.api.pages(e.id).delete(),u.success("\u5220\u9664\u6210\u529F"),await s(l.value.currentPage)}},{trigger:()=>t(b,{text:!0,type:"error",size:"tiny"},{default:()=>[n("\u79FB\u9664")]}),default:()=>t("span",{class:"max-w-48"},[n("\u786E\u5B9A\u8981\u5220\u9664 "),e.title,n(" ?")])})]})}}]);return()=>t(F,{noPagination:!0,columns:a,data:m,onFetchData:s,pager:l,onUpdateCheckedRowKeys:e=>{o.value=e},onUpdateSorter:async e=>{r.sortBy=e.sortBy,r.sortOrder=e.sortOrder}},null)}});return()=>t(D,null,{actions:()=>t(N,null,[t(C,{checkedRowKeys:o.value,onDelete:async()=>{const a=await Promise.allSettled(o.value.map(e=>i.api.pages(e).delete()));for(const e of a)e.status==="rejected"&&u.success(`\u5220\u9664\u5931\u8D25\uFF0C${e.reason.message}`);o.value.length=0,s()}},null),t(A,{to:"/pages/edit",icon:t(P,null,null)},null)]),default:()=>t(f,null,null)})}});export{ee as ManagePageListView};
