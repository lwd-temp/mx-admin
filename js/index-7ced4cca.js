import{H as y}from"./rounded-button-2024aeb8.js";import{d,x as p,u as b,s as h,g as k,G as B,b as c,H as w,h as t,w as N,F as x,eb as M,ec as S,n as H,z as P,k as I,R,J as v,cX as Y,N as D,bX as L,dw as U}from"./index-8190ace0.js";import{X}from"./index-d77f53dc.js";import{u as E}from"./use-react-cf226e09.js";import{l as G}from"./index-2df64eb0.js";import{E as m}from"./types-4fa065e6.js";import{N as q}from"./Form-d06fae14.js";import{N as O,a as _}from"./ListItem-a2aa7ee9.js";var te=d({name:"pty-view",setup(){let e;const o=p(!1);let r;const a=n=>{e.write(n),e.focus()},l=b(),f=h(),s=G(B+"/pty",{timeout:1e4,transports:["websocket"],forceNew:!0,query:{token:k().replace(/^bearer\s/,"")}});s.on("message",({code:n,data:u,type:i})=>{c.emit(i,u,n)}),E(()=>{const n=()=>{e.writeln("PTY connection closed"),l.warning("\u8FDE\u63A5\u5DF2\u65AD\u5F00",{closable:!0})};return s.on("disconnect",n),()=>{s.off("disconnect",n)}}),w(()=>{s.offAny(),s.disconnect()}),E(()=>{const n=c.on(m.PTY_MESSAGE,(u,i)=>{if(i===1e4||i===10001){const g=f.create({title:"\u9A8C\u8BC1\u5BC6\u7801",closable:!0,content:()=>t(j,{onConfirm:A=>{s.emit("pty",U(e?{cols:e.cols,rows:e.rows}:void 0,{password:A})),requestAnimationFrame(()=>{g.destroy()})}})})}l.info(u)});return()=>{n()}});const F=N(()=>o.value,n=>{n&&(F(),s.emit("pty",{cols:e.cols,rows:e.rows}),r=e.onData(u=>{s.emit("pty-input",u)}),c.on(m.PTY,a))});w(()=>{s.emit("pty-exit"),r?.dispose(),c.off(m.PTY,a)});const C=()=>{if(e&&e.reset(),s.connected===!1){s.io.connect(),setTimeout(()=>{s.connected?s.emit("pty",e?{cols:e.cols,rows:e.rows}:void 0):l.error("\u91CD\u8FDE Socket \u5931\u8D25")},1500);return}s.emit("pty-exit"),setTimeout(()=>{s.emit("pty",e?{cols:e.cols,rows:e.rows}:void 0)},50)},T=()=>{f.create({title:"\u8FDE\u63A5\u72B6\u6001",content:()=>t(z,null)})};return()=>t(H,{actionsElement:t(x,null,t(y,{variant:"info",icon:t(M,null),name:"\u8FDE\u63A5\u72B6\u6001",onClick:T}),t(y,{icon:t(S,null),name:"\u91CD\u65B0\u8FDE\u63A5",onClick:C}))},t(X,{class:"!max-h-[calc(100vh-10.5rem)]",darkMode:!0,terminalOptions:{disableStdin:!1},onReady:n=>{o.value=!0,e=n}}))}});const j=d({props:{onConfirm:Function},setup(e){const o=p(""),r=a=>{a.preventDefault(),e.onConfirm?.(o.value)};return()=>t(q,{onSubmit:r,class:"space-y-6 mt-6"},t(P,{showPasswordOn:"mousedown",type:"password",value:o.value,placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",onUpdateValue:a=>{o.value=a}}),t("div",{class:"flex justify-center"},t(D,{round:!0,type:"primary",onClick:r},"\u786E\u8BA4")))}}),z=d(()=>{const e=p([]);return I(async()=>{const o=await R.api.pty.record.get();e.value=o.data}),()=>t(L,{bordered:!1,class:"max-h-[70vh] overflow-auto"},t(O,{bordered:!1},e.value.map(o=>t(_,{key:o.startTime},t("div",null,"\u5F00\u59CB\u4E8E ",v(o.startTime,"yyyy\u5E74M\u6708d\u65E5 HH:mm:ss")),t("div",null,"IP:"," ",t(Y,{trigger:"hover",ip:o.ip,triggerEl:t(D,{text:!0},o.ip)})),t("div",null,o.endTime?"\u7ED3\u675F\u4E8E "+v(o.endTime,"yyyy\u5E74M\u6708d\u65E5 HH:mm:ss"):"\u6CA1\u6709\u7ED3\u675F"),t("div",null,o.endTime&&"\u65F6\u957F\uFF1A"+(Math.abs(new Date(o.startTime).getTime()-new Date(o.endTime).getTime())/1e3|0)+"\u79D2")))))});export{te as default};
