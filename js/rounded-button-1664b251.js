import{f as l,a as e,N as r,P as i,s as u,L as c,I as d}from"./index-546b1e9f.js";function s(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!i(t)}const a={variant:{type:String,default:"primary"},color:{type:String},onClick:{type:Function},disabled:{type:Boolean}},f=l({props:a,setup(t,{slots:n}){return()=>e(r,{type:t.variant,color:t.color,circle:!0,onClick:t.onClick,disabled:t.disabled},s(n)?n:{default:()=>[n]})}}),y=l({props:{...a,to:{type:[Object,String]},name:{type:String},icon:{type:Object,required:!0}},setup(t){const n=()=>e(f,{variant:t.variant,class:"shadow",onClick:t.onClick,disabled:t.disabled,color:t.color},{default:()=>[e(d,{size:"16"},{default:()=>[t.icon]})]}),o=()=>t.name?e(c,{trigger:"hover",placement:"bottom"},{trigger(){return e(n,null,null)},default(){return t.name}}):e(n,null,null);return()=>t.to?e(u,{to:t.to},{default:()=>[e(o,null,null)]}):e(o,null,null)}});export{y as H};
