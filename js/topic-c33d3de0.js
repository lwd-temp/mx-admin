import{H as z}from"./rounded-button-c4b84c49.js";import{f as S,y as m,a as e,F as x,N as h,I as T,b as N,bY as P,b$ as C,c$ as k,d0 as w,b0 as F,R as g,g as H,P as q,d1 as L,m as j,A as E,cv as _,p as G,w as O,H as y,x as W,j as J,C as Q}from"./index-1c0ad94e.js";import{u as Y}from"./use-table-351bde95.js";import{I as K}from"./iframe-preview-1b02c0dc.js";import{S as X}from"./Search24Regular-ff50c11b.js";import{N as A}from"./Avatar-7a28a698.js";import{a as Z,N as ee}from"./Select-d9659482.js";import{N as D,a as B}from"./ListItem-63162712.js";import{T as U}from"./Trash-8167b2ff.js";import{N as M}from"./Pagination-d23d7cbf.js";import{N as $}from"./Popconfirm-ee8ddab6.js";import{N as te}from"./Form-bead6e85.js";import{N as b}from"./FormItem-1d022448.js";import{N as ae}from"./ButtonGroup-d888b548.js";import"./Tag-df8d4ca0.js";import"./prop-a1682621.js";import"./Forward-ff40209a.js";import"./index-ddd9133d.js";const V=a=>{if(!a)return"";const t=a.split(" ")[0];return t.length>4?a[0]:t};function le(a){return typeof a=="function"||Object.prototype.toString.call(a)==="[object Object]"&&!q(a)}const ne=S({props:{id:{type:String,required:!0}},setup(a){const t=m(!1),l=m(null),s=m([]),c=m(),d=m(!0),p=async()=>{t.value=!0;const u=await g.api.topics(a.id).get();l.value=u,await n(u.id)},n=async(u,o=1,i=5)=>{d.value=!0;const{data:r,pagination:v}=await g.api.notes.topics(u).get({params:{page:o,size:i}});return d.value=!1,s.value=r,c.value=v,{data:r,pagination:v}},f=async u=>{await g.api.notes(u).patch({data:{topicId:null}}),message.success("\u5DF2\u79FB\u9664\u6587\u7AE0\u7684\u4E13\u680F\u5F15\u7528");const o=s.value.findIndex(i=>i.id===u);-~o&&s.value.splice(o,1)};return()=>{let u;return e(x,null,[e(h,{size:"small",secondary:!0,onClick:p},{default:()=>[e(T,{class:"mr-1"},{default:()=>[e(X,null,null)]}),N("\u8BE6\u60C5")]}),e(P,{show:t.value,closable:!0,onClose:()=>{t.value=!1},closeOnEsc:!0,onUpdateShow:o=>{t.value=o}},{default:()=>[l.value?e(C,{closable:!0,role:"dialog",class:"modal-card md",title:`\u4E13\u680F - ${l.value.name}`},{default:()=>[e(k,null,{avatar(){return e(A,{size:60,class:"rounded-xl",src:l.value?.icon||void 0},{default:()=>[l.value?.icon?void 0:V(l.value?.name)]})},header(){return e("b",null,[l.value?.name])},"header-extra":function(){return e("span",{class:"opacity-80"},[l.value?.slug])},description(){return e("p",{class:"opacity-90 clamp-2 break-all"},[l.value?.introduce])},default(){return e("p",null,[l.value?.description])}}),d.value&&s.value.length==0?e(w,{animated:!0,class:"mt-2 h-[350px]"},null):e("div",{class:"mt-4"},[e("p",{class:"flex justify-between items-center"},[e("strong",null,[N("\u5305\u542B\u7684\u6587\u7AE0\uFF1A")]),e(re,{topicId:l.value.id,onSuccess:()=>{F(()=>p())}},null)]),s.value.length===0&&e("div",{class:"h-[300px] flex items-center justify-center"},[e(Z,{description:"\u8FD9\u91CC\u8FD8\u6CA1\u6709\u4EFB\u4F55\u5185\u5BB9"},null)]),e(D,{bordered:!0,class:"mt-2"},le(u=s.value.map(o=>e(B,{key:o.id},{default(){return e("p",{class:"space-x-2 flex items-center"},[e("span",null,[o.title]),e(K,{path:(()=>`${g.endpoint}/markdown/render/${o.id}${`?token=${H()}`}`)()},null)])},suffix(){return e($,{onPositiveClick:()=>f(o.id)},{trigger(){return e(h,{circle:!0,tertiary:!0,type:"error"},{default:()=>[e(T,null,{default:()=>[e(U,null,null)]})]})},default(){return`\u662F\u5426\u79FB\u9664\u6B64\u8BDD\u9898\u300C${l.value?.name}\u300D\uFF1F`}})}})))?u:{default:()=>[u]}),e("div",{class:"flex justify-end"},[c.value&&e(M,{class:"mt-4",onUpdatePage:o=>{n(a.id,o)},page:c.value.currentPage,pageCount:c.value.totalPage},null)])])]}):e(C,{class:"modal-card md",role:"dialog",title:"\u4E13\u680F\u4FE1\u606F\u83B7\u53D6\u4E2D"},{default:()=>[e("div",{class:"flex relative gap-2 "},[e(w,{animated:!0,circle:!0,width:60},null),e("div",{class:"flex-grow"},[e(w,{animated:!0,text:!0,repeat:3,class:"flex-grow"},null)])]),e(w,{animated:!0,repeat:2,class:"mt-2",text:!0},null)]})]})])}}}),ue=L(()=>{const a=m([]);let t=0,l=!1;const s=m(!0),c=async(d=1)=>{s.value=!0;const{data:p,pagination:n}=await g.api.notes.get({params:{page:d,size:20,select:"nid title _id id"}});a.value.push(...p),s.value=!1,t=n.currentPage,n.hasNextPage||(l=!0)};return{loading:s,notes:a,fetchNext:()=>{l||c(t+1)},refresh:()=>{t=1,l=!1,a.value=[],c(t)}}}),re=S({props:{topicId:{type:String,required:!0},onSuccess:{type:Function,required:!1}},setup(a){const t=m(!1),l=async()=>{const u=_(n);await Promise.all(u.map(o=>g.api.notes(o).patch({data:{topicId:a.topicId}}))),message.success("\u6DFB\u52A0\u6210\u529F"),t.value=!1,a.onSuccess?.(u)},{refresh:s,fetchNext:c,notes:d,loading:p}=ue(),n=m([]),f=u=>{const o=u.currentTarget;o.scrollTop+o.offsetHeight>=o.scrollHeight&&c()};return j(()=>{d.value.length===0&&c()}),()=>e(x,null,[e(h,{secondary:!0,type:"success",circle:!0,onClick:()=>{t.value=!0}},{default:()=>[e(T,null,{default:()=>[e(E,null,null)]})]}),e(P,{closable:!0,closeOnEsc:!0,show:t.value,onUpdateShow:u=>{t.value=u}},{default:()=>[e(C,{title:"\u54EA\u4E9B\u6587\u7AE0\u9700\u8981\u6DFB\u52A0\u5230\u4E13\u680F\uFF1F",class:"modal-card sm"},{footer(){return e("div",{class:"text-right"},[e(h,{round:!0,type:"success",onClick:()=>l()},{default:()=>[N("\u6DFB\u52A0\uFF01")]})])},default(){return e(ee,{maxTagCount:3,filterable:!0,clearable:!0,loading:p.value,multiple:!0,onClear:()=>{s()},value:n.value,onUpdateValue:u=>{n.value=u},resetMenuOnOptionsChange:!1,options:d.value.map(u=>({label:u.title,value:u.id,key:u.id})),onScroll:f},null)}})]})])}}),se=S({props:{show:{type:Boolean,required:!0},onClose:{type:Function,required:!0},id:{type:String,required:!1},onSubmit:{type:Function,required:!1}},setup(a){const t=G({}),l=m(!1),s=()=>{Object.keys(t).forEach(n=>{delete t[n]})};O(()=>a.id,n=>{n?(l.value=!0,g.api.topics(n).get().then(f=>{Object.assign(t,f),l.value=!1})):s()});const c=()=>{a.onClose()},d=()=>{p?.value?.validate(async f=>{f?.length||await n()});async function n(){let f;a.id?(f=await g.api.topics(a.id).put({data:t}),message.success("\u4FEE\u6539\u6210\u529F")):(f=await g.api.topics.post({data:t}),message.success("\u6DFB\u52A0\u6210\u529F")),a.onSubmit?.(f),F(()=>{s()})}},p=m();return()=>e(x,null,[e(P,{show:a.show,onUpdateShow:c,closable:!0,onClose:c,transformOrigin:"center"},{default:()=>[e(C,{role:"dialog",title:"\u65B0\u5EFA\u8BDD\u9898",closable:!0,onClose:c,class:"modal-card sm"},{default:()=>[e(te,{labelPlacement:"top",ref:p,model:t,disabled:l.value},{default:()=>[e(b,{label:"\u540D\u5B57",required:!0,rule:{max:50,required:!0,trigger:["blur","input"]},path:"name"},{default:()=>[e(y,{value:t.name,onUpdateValue:n=>{t.name=n}},null)]}),e(b,{label:"id",required:!0,rule:{required:!0,trigger:["blur","input"]},path:"slug"},{default:()=>[e(y,{value:t.slug,onUpdateValue:n=>{t.slug=n}},null)]}),e(b,{label:"\u7B80\u4ECB",required:!0,rule:{max:100,required:!0,trigger:["blur","input"]},path:"introduce"},{default:()=>[e(y,{value:t.introduce,onUpdateValue:n=>{t.introduce=n}},null)]}),e(b,{label:"\u56FE\u6807"},{default:()=>[e(y,{value:t.icon,onUpdateValue:n=>{t.icon=n}},null)]}),e(b,{label:"\u957F\u63CF\u8FF0",rule:{max:500,trigger:["blur","input"]},path:"description"},{default:()=>[e(y,{type:"textarea",autosize:{maxRows:5,minRows:2},value:t.description,onUpdateValue:n=>{t.description=n}},null)]}),e("div",{class:"flex justify-end gap-2"},[e(h,{round:!0,type:"primary",onClick:d},{default:()=>[N("\u63D0\u4EA4")]})])]})]})]})])}});function oe(a){return typeof a=="function"||Object.prototype.toString.call(a)==="[object Object]"&&!q(a)}var Pe=S({setup(){const a=W(),t=J();O(()=>t.query.page,i=>{l(i?+i:0)});const{fetchDataFn:l,data:s,pager:c}=Y((i,r)=>async(v=parseInt(t.query.page)||1,R=20)=>{const I=await g.api.topics.get({page:v,size:R});return r.value=I.pagination,i.value=I.data,I});j(()=>l());const d=m(""),p=m(!1),n=()=>{p.value=!0,d.value=""},f=()=>{p.value=!1,d.value=""};return{pagination:c,topics:s,fetchTopic:l,handleAddTopic:n,editTopicId:d,showTopicModal:p,handleCloseModal:f,handleSubmit(i){f();const r=s.value.findIndex(v=>v.id===i.id);-~r?s.value[r]=i:s.value.push(i)},handleDelete:async i=>{await g.api.topics(i).delete(),l()},handleEdit:i=>{d.value=i,p.value=!0},route:t,router:a}},render(){const{pagination:a,topics:t,router:l,route:s,editTopicId:c,showTopicModal:d,handleAddTopic:p,handleCloseModal:n,handleSubmit:f,handleEdit:u,handleDelete:o}=this;return e(Q,null,{actions(){return e(x,null,[e(z,{icon:e(E,null,null),onClick:p,variant:"success"},null)])},default(){let i;return e(x,null,[e(D,{bordered:!0,class:"mb-4"},oe(i=t.map(r=>e(B,{key:r.id},{prefix(){return e(A,{"data-src":r.icon,class:"mt-2",circle:!0,src:r.icon||void 0},{default:()=>[r.icon?void 0:V(r.name)]})},suffix(){return e(ae,null,{default:()=>[e(h,{round:!0,onClick:()=>u(r.id)},{default:()=>[N("\u7F16\u8F91")]}),e($,{onPositiveClick:()=>o(r.id)},{default(){return`\u786E\u5B9A\u5220\u9664\u300C${r.name}\u300D\uFF1F`},trigger(){return e(h,{round:!0,tertiary:!0,type:"error"},{default:()=>[e(T,null,{default:()=>[e(U,null,null)]})]})}})]})},default(){return e(k,{title:r.name,description:r.introduce,titleExtra:r.slug},{default(){return r.description},footer(){return e(ne,{id:r.id},null)}})}})))?i:{default:()=>[i]}),a&&e("div",{class:"flex justify-end"},[e(M,{page:a.currentPage,onUpdatePage:r=>{l.replace({query:{...s.query,page:r},params:{...s.params}})},pageCount:a.totalPage,pageSize:a.size,showQuickJumper:!0},null)]),e(se,{onClose:n,show:Boolean(d||c),id:c,onSubmit:f},null)])}})}});export{Pe as default};
