import{H as m}from"./rounded-button-af673ee0.js";import{d,s as y,u as F,t as h,h as u,D as w}from"./index-5f09ba15.js";const f=d({props:{checkedRowKeys:{type:Object},onDelete:{type:Function,required:!0},message:{type:String},customIcon:{type:Object},showSuccessMessage:{type:Boolean,default:!0},customSuccessMessage:{type:String},customButtonTip:{type:String}},setup(o){const c=y(),n=F();return()=>{const{customIcon:a,checkedRowKeys:s,onDelete:i,message:r,customSuccessMessage:l,showSuccessMessage:p,customButtonTip:g}=o,e=h(s)?s.value:s,t=e?Array.isArray(e)?e.length:e.size:0;return u(m,{variant:"error",disabled:e?t===0:!1,name:g??"\u5220\u9664\u591A\u6761",onClick:()=>{c.warning({title:"\u8B66\u544A",content:r??`\u4F60\u786E\u5B9A\u8981\u5220\u9664${t>1?"\u591A\u6761":"\u8FD9\u6761"}\u6570\u636E\uFF1F`,positiveText:"\u306F\u3044",negativeText:"\u8FBE\u54A9",onPositiveClick:async()=>{await i(e),p&&n.success(l??"\u5220\u9664\u6210\u529F")}})},icon:a??u(w,null)})}}});export{f as D};
