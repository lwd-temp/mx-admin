import{f as s,k as d,q as f,n as i,W as c,R as k,g as m,a as t,s as p,N as T,I as g}from"./index-6abe9a7d.js";import{I as x}from"./iframe-preview-f6fc435e.js";import{N as L}from"./DataTable-e5b1e8c4.js";import{E as w}from"./ExternalLink-79c738bf.js";const E=s({props:{inPageTo:{type:String,required:!0},title:{type:String,required:!0},externalLinkTo:{type:String,required:!1},id:{type:String,required:!1},withToken:{type:Boolean,required:!1}},setup(e,{slots:l}){const{viewport:n}=d(f),o=i(()=>n.value.widest||n.value.wider),a=i(()=>{if(!e.externalLinkTo)return null;try{return new URL(e.externalLinkTo,e.externalLinkTo.startsWith("/")?c:void 0).toString()}catch{return null}}),u=`${k.endpoint}/markdown/render/${e.id}${e.withToken?`?token=${m()}`:""}`;return()=>t(p,{to:e.inPageTo,class:"flex items-center space-x-2"},{default:()=>[t(L,{lineClamp:2,tooltip:{width:500}},{default:()=>[e.title]}),l.default?.(),a.value&&t(T,{text:!0,tag:"a",class:"cursor-[alias]",href:a.value,target:"_blank",type:"primary",onClick:r=>r.stopPropagation()},{default:()=>[t(g,null,{default:()=>[t(w,null,null)]})]}),e.id&&o.value&&t(x,{path:u},null)]})}});export{E as T};
