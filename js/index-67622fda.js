import{U as v,bl as I,w as o,aU as m,y as w}from"./index-546b1e9f.js";function x(r,f,t){var u;const i=v(r,null);if(i===null)return;const s=(u=I())===null||u===void 0?void 0:u.proxy;o(t,d),d(t.value),m(()=>{d(void 0,t.value)});function d(n,e){const a=i[f];e!==void 0&&c(a,e),n!==void 0&&l(a,n)}function c(n,e){n[e]||(n[e]=[]),n[e].splice(n[e].findIndex(a=>a===s),1)}function l(n,e){n[e]||(n[e]=[]),~n[e].findIndex(a=>a===s)||n[e].push(s)}}function j(r,f,t){if(!f)return r;const u=w(r.value);let i=null;return o(r,s=>{i!==null&&window.clearTimeout(i),s===!0?t&&!t.value?u.value=!0:i=window.setTimeout(()=>{u.value=!0},f):u.value=!1}),u}export{x as a,j as u};
