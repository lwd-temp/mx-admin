import{d,R as i,u as k,i as D,w as T,k as h,m as v,h as t,N as B,a as w,F as E,A as C,n as P}from"./index-62a644ac.js";import{T as R}from"./title-link-595ab951.js";import{D as x}from"./delete-confirm-f1f3cc86.js";import{T as O}from"./index-36f7419e.js";import{R as c}from"./relative-time-0c984ec4.js";import{u as b}from"./use-table-402cddc8.js";import{H as N}from"./rounded-button-789e2601.js";import{N as A}from"./Popconfirm-f49290bc.js";import"./ExternalLink-5d4943f2.js";import"./DataTable-4010003d.js";import"./Icon-efb52841.js";import"./Select-ed5812f0.js";import"./Tag-d545e93d.js";import"./Forward-947f70cd.js";import"./index-c486619c.js";import"./ChevronRight-b5bf07a7.js";import"./Tooltip-5b6cbc1e.js";const Y=d({name:"PageList",setup(){const{checkedRowKeys:o,data:m,pager:u,sortProps:r,fetchDataFn:p}=b((a,e)=>async(f=l.query.page||1,y=20)=>{const F=await i.api.pages.get({params:{page:f,size:y,select:"title subtitle _id id created modified slug",...r.sortBy?{sortBy:r.sortBy,sortOrder:r.sortOrder}:{}}});a.value=F.data}),n=k(),l=D(),s=p;T(()=>l.query.page,async a=>{await s(a)}),h(async()=>{await s()});const g=d({setup(){const a=v([{type:"selection",options:["none","all"]},{title:"\u6807\u9898",sortOrder:!1,sorter:"default",key:"title",width:300,render(e){return t(R,{inPageTo:"/pages/edit?id="+e.id,title:e.title,externalLinkTo:"/"+e.slug,id:e.id})}},{title:"\u526F\u6807\u9898",key:"subtitle"},{title:"\u8DEF\u5F84",key:"slug",render(e){return"/"+e.slug}},{title:"\u521B\u5EFA\u4E8E",key:"created",sortOrder:"descend",sorter:"default",render(e){return t(c,{time:e.created})}},{title:"\u4FEE\u6539\u4E8E",key:"modified",sorter:"default",sortOrder:!1,render(e){return t(c,{time:e.modified})}},{title:"\u64CD\u4F5C",fixed:"right",key:"id",render(e){return t(w,null,t(A,{positiveText:"\u53D6\u6D88",negativeText:"\u5220\u9664",onNegativeClick:async()=>{await i.api.pages(e.id).delete(),n.success("\u5220\u9664\u6210\u529F"),await s(u.value.currentPage)}},{trigger:()=>t(B,{text:!0,type:"error",size:"tiny"},"\u79FB\u9664"),default:()=>t("span",{class:"max-w-48"},"\u786E\u5B9A\u8981\u5220\u9664 ",e.title," ?")}))}}]);return()=>t(O,{noPagination:!0,columns:a,data:m,onFetchData:s,pager:u,onUpdateCheckedRowKeys:e=>{o.value=e},onUpdateSorter:async e=>{r.sortBy=e.sortBy,r.sortOrder=e.sortOrder}})}});return()=>t(P,null,{actions:()=>t(E,null,t(x,{checkedRowKeys:o.value,onDelete:async()=>{const a=await Promise.allSettled(o.value.map(e=>i.api.pages(e).delete()));for(const e of a)e.status==="rejected"&&n.success("\u5220\u9664\u5931\u8D25\uFF0C"+e.reason.message);o.value.length=0,s()}}),t(N,{to:"/pages/edit",icon:t(C,null)})),default:()=>t(g,null)})}});export{Y as ManagePageListView};
