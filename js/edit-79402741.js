import{H as i}from"./rounded-button-4d26df67.js";import{d as F,i as b,v as S,x as A,cw as R,cW as k,cX as r,s as C,m as I,l as P,k as N,R as l,h as e,z as c,F as f,cY as y,cZ as T,n as H,bk as h,bj as L}from"./index-524a5fea.js";import{u as M}from"./use-parse-payload-d7e04922.js";import{i as v}from"./isString-10d86a81.js";import{t as q}from"./transform-aed8bc4e.js";import{N as z}from"./Form-88a5f5a7.js";import{N as m}from"./FormItem-5f07fc31.js";import"./_arrayEach-2ff48152.js";import"./index-ef78730c.js";const K=F({setup(){const E=b(),p=S(),B=()=>({text:"",author:"",source:""}),s=A({});R(()=>{k([r.\u539F\u521B,r.\u54F2\u5B66,r.\u6587\u5B66,r.\u8BD7\u8BCD]).then(t=>{s.value={source:t.from,text:t.hitokoto,author:t.from_who||t.creator}})});const g=C(),x=async()=>{const t=async()=>{await l.api.says.post({data:s.value}),message.success("\u53D1\u5E03\u6210\u529F"),p.push({name:h.ListSay})};a.text||a.author||a.source?g.create({title:"\u8B66\u544A",content:"\u53D1\u5E03\u4E00\u8A00\u4F1A\u8986\u76D6\u73B0\u6709\u7684\u5185\u5BB9, \u8981\u7EE7\u7EED\u5417",type:"warning",negativeText:"\u53D6\u6D88",positiveText:"\u786E\u5B9A",onPositiveClick(){t()}}):t()},D=t=>M(a)(t),a=I(B()),n=P(()=>E.query.id);N(async()=>{const t=n.value;if(t&&typeof t=="string"){const o=(await l.api.says(t).get({})).data;D(o)}});const d=async()=>{const t=()=>{try{if(!a.text||a.text.trim().length==0)throw"\u5185\u5BB9\u4E3A\u7A7A";return{...q(L(a),(u,o,w)=>(u[w]=typeof o>"u"?null:typeof o=="string"&&o.length==0?"":o,u)),text:a.text.trim()}}catch(u){throw message.error(u),u}};if(n.value){if(!v(n.value))return;const u=n.value;await l.api.says(u).put({data:t()}),message.success("\u4FEE\u6539\u6210\u529F")}else await l.api.says.post({data:t()}),message.success("\u53D1\u5E03\u6210\u529F");p.push({name:h.ListSay})};return()=>e(H,{actionsElement:e(f,null,v(n)?e(i,{name:"\u66F4\u65B0",variant:"info",onClick:d,icon:e(y,null)}):e(f,null,e(i,{name:"\u53D1\u5E03\u4E00\u8A00",variant:"info",onClick:x,icon:e(T,null)}),e(i,{name:"\u53D1\u5E03\u81EA\u5DF1\u8BF4\u7684",variant:"primary",onClick:d,icon:e(y,null)})))},e(z,null,e(m,{label:"\u5185\u5BB9",required:!0,labelPlacement:"left",labelStyle:{width:"4rem"}},e(c,{type:"textarea",autofocus:!0,autosize:{minRows:6,maxRows:8},placeholder:s.value.text,value:a.text,onInput:t=>void(a.text=t)})),e(m,{label:"\u4F5C\u8005",labelPlacement:"left",labelStyle:{width:"4rem"}},e(c,{placeholder:s.value.author,value:a.author,onInput:t=>void(a.author=t)})),e(m,{label:"\u6765\u6E90",labelPlacement:"left",labelStyle:{width:"4rem"}},e(c,{placeholder:s.value.source,value:a.source,onInput:t=>void(a.source=t)}))))}});export{K as default};
