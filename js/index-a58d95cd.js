import{d as c,m as p,h as e,bU as d,z as i,N as m}from"./index-62a644ac.js";import{N as _}from"./Form-4aaee6bb.js";import{N as o}from"./FormItem-bb27ddd4.js";import{N as g}from"./Switch-fc14371a.js";import"./index-c486619c.js";var v=c({setup(){const t=p({apiUrl:localStorage.getItem("__api")||"",gatewayUrl:localStorage.getItem("__gateway")||"",persist:!1}),s=()=>{const a=new URL(location.href),{apiUrl:r,gatewayUrl:l,persist:u}=t;r&&a.searchParams.set("__api",r),l&&a.searchParams.set("____gateway",l),u&&(r&&localStorage.setItem("__api",r),l&&localStorage.setItem("__gateway",l)),a.pathname="/",location.href=a.toString()},n=()=>{localStorage.removeItem("__api"),localStorage.removeItem("__gateway"),location.href="/"};return()=>e("div",{class:"relative h-screen w-full flex items-center justify-center"},e(d,{title:"\u8BBE\u7F6E API",class:"modal-card sm m-auto form-card"},e(_,{onSubmit:s},e(o,{label:"API \u5730\u5740"},e(i,{value:t.apiUrl,onUpdateValue:a=>{t.apiUrl=a}})),e(o,{label:"Gateway \u5730\u5740"},e(i,{value:t.gatewayUrl,onUpdateValue:a=>{t.gatewayUrl=a}})),e(o,{label:"\u6301\u4E45\u5316",labelPlacement:"left"},e(g,{value:t.persist,onUpdateValue:a=>{t.persist=a}})),e("div",{class:"text-center space-x-2"},e(m,{onClick:n,round:!0},"\u91CD\u7F6E"),e(m,{onClick:s,round:!0,type:"primary"},"\u786E\u5B9A")))))}});export{v as default};
