import{dB as i,bV as a}from"./index-8190ace0.js";import{t as f}from"./transform-58bb40dc.js";function l(t,e){return i(t,e)}function d(t,e){function o(n,s){return f(n,function(p,r,c){l(r,s[c])||(p[c]=a(r)&&a(s[c])?o(r,s[c]):r)})}return o(e,t)}function g(t,e){const o=window.URL.createObjectURL(new Blob([t])),n=document.createElement("a");n.href=o,n.setAttribute("download",e),document.body.appendChild(n),n.click()}function m(t){return`${t}`.replace(new RegExp(/[-_]+/,"g")," ").replace(new RegExp(/[^\w\s]/,"g"),"").replace(new RegExp(/\s+(.)(\w*)/,"g"),(e,o,n)=>`${o.toUpperCase()+n.toLowerCase()}`).replace(new RegExp(/\w/),e=>e.toUpperCase())}export{d,g as r,m as t};
