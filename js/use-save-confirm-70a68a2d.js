import{m as f,K as l,t as d,cw as v}from"./index-6abe9a7d.js";const E=(o,r,i="\u6587\u7AE0\u672A\u4FDD\u5B58\u662F\u5426\u786E\u5B9A\u79BB\u5F00\uFF1F")=>{const n=e=>{if(!r())return e.preventDefault(),e.returnValue=i,!1};f(()=>{o&&window.addEventListener("beforeunload",n)}),l(()=>{o&&window.removeEventListener("beforeunload",n)});const s=d();v(async(e,c,u)=>{if(!o){u();return}if(r()){u();return}if(e.hash=="|publish"){u();return}const a=new Promise((t,m)=>{s.warning({title:i,negativeText:"\u55EF",positiveText:"\u624B\u6296\u4E86\u5566",onNegativeClick(){t(!0)},onPositiveClick(){t(!1)}})});await Promise.resolve(a)&&u()})};export{E as u};
