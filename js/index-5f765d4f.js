import{d as S,x as A,h as o,e2 as ee,b$ as te,s as ae,F as ne,k as re,R as P,w as ie,dt as H,dg as se,n as ce}from"./index-703972d3.js";import{H as $}from"./rounded-button-31fc7a7e.js";import{u as oe}from"./use-react-387ca1ce.js";import{T as ue}from"./two-col-738e2334.js";import{C as le}from"./index-bd7777ac.js";import{a as fe,u as me,p as de}from"./use-async-monaco-4c34ac42.js";import{T as he}from"./Trash-ef6703f2.js";import{N as pe}from"./Switch-1c5d8d17.js";import{N as ve,a as J}from"./Tabs-045c3144.js";import"./editor.main-759b9211.js";import"./use-save-confirm-11723bdc.js";import"./Add-ee1a21b4.js";import"./throttle-3595fdec.js";const ge=S({props:{value:{type:String,required:!0},onChange:{type:Function,required:!0}},setup(r){const h=A(),m=fe(r),c=me(h,m,r.onChange,{language:"html"});return()=>o("div",{class:"h-full w-full relative"},o("div",{ref:h,class:"h-full w-full relative"}),!c.loaded.value&&o(le,{description:"Monaco \u4F53\u79EF\u8F83\u5927\u8010\u5FC3\u7B49\u5F85\u52A0\u8F7D\u5B8C\u6210..."}))}});var U={},V={};(function(r){var h=/[|\\{}()[\]^$+*?.]/g;r.escapeRegExpChars=function(s){return s?String(s).replace(h,"\\$&"):""};var m={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function w(s){return m[s]||s}var L=`var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
`;r.escapeXML=function(s){return s==null?"":String(s).replace(c,w)},r.escapeXML.toString=function(){return Function.prototype.toString.call(this)+`;
`+L},r.shallowCopy=function(s,f){if(f=f||{},s!=null)for(var p in f)s[p]=f[p];return s},r.shallowCopyFromList=function(s,f,p){if(p=p||[],f=f||{},s!=null)for(var v=0;v<p.length;v++){var y=p[v];typeof f[y]<"u"&&(s[y]=f[y])}return s},r.cache={_data:{},set:function(s,f){this._data[s]=f},get:function(s){return this._data[s]},remove:function(s){delete this._data[s]},reset:function(){this._data={}}},r.hyphenToCamel=function(s){return s.replace(/-[a-z]/g,function(f){return f[1].toUpperCase()})},r.createNullProtoObjWherePossible=function(){return typeof Object.create=="function"?function(){return Object.create(null)}:{__proto__:null}instanceof Object?function(){return{}}:function(){return{__proto__:null}}}()})(V);const _e="ejs",Ee="Embedded JavaScript templates",we=["template","engine","ejs"],ye="3.1.7",be="Matthew Eernisse <mde@fleegix.org> (http://fleegix.org)",Ae="Apache-2.0",Le={ejs:"./bin/cli.js"},Te="./lib/ejs.js",Fe="ejs.min.js",Ce="ejs.min.js",Se={type:"git",url:"git://github.com/mde/ejs.git"},Ne="https://github.com/mde/ejs/issues",De="https://github.com/mde/ejs",Oe={jake:"^10.8.5"},Pe={browserify:"^16.5.1",eslint:"^6.8.0","git-directory-deploy":"^1.5.1",jsdoc:"^3.6.7","lru-cache":"^4.0.1",mocha:"^7.1.1","uglify-js":"^3.3.16"},je={node:">=0.10.0"},Ie={test:"mocha"};var Me={name:_e,description:Ee,keywords:we,version:ye,author:be,license:Ae,bin:Le,main:Te,jsdelivr:Fe,unpkg:Ce,repository:Se,bugs:Ne,homepage:De,dependencies:Oe,devDependencies:Pe,engines:je,scripts:Ie};(function(r){/**
 * @file Embedded JavaScript templating engine. {@link http://ejs.co}
 * @author Matthew Eernisse <mde@fleegix.org>
 * @author Tiancheng "Timothy" Gu <timothygu99@gmail.com>
 * @project EJS
 * @license {@link http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0}
 */var h=ee,m=de,c=V,w=!1,L=Me.version,s="<",f=">",p="%",v="locals",y="ejs",q="(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)",j=["delimiter","scope","context","debug","compileDebug","client","_with","rmWhitespace","strict","filename","async"],X=j.concat("cache"),I=/^\uFEFF/,D=/^[a-zA-Z_$][0-9a-zA-Z_$]*$/;r.cache=c.cache,r.fileLoader=h.readFileSync,r.localsName=v,r.promiseImpl=new Function("return this;")().Promise,r.resolveInclude=function(t,a,e){var n=m.dirname,i=m.extname,u=m.resolve,d=u(e?a:n(a),t),E=i(t);return E||(d+=".ejs"),d};function M(t,a){var e;if(a.some(function(n){return e=r.resolveInclude(t,n,!0),h.existsSync(e)}))return e}function z(t,a){var e,n,i=a.views,u=/^[A-Za-z]+:\\|^\//.exec(t);if(u&&u.length)t=t.replace(/^\/*/,""),Array.isArray(a.root)?e=M(t,a.root):e=r.resolveInclude(t,a.root||"/",!0);else if(a.filename&&(n=r.resolveInclude(t,a.filename),h.existsSync(n)&&(e=n)),!e&&Array.isArray(i)&&(e=M(t,i)),!e&&typeof a.includer!="function")throw new Error('Could not find the include file "'+a.escapeFunction(t)+'"');return e}function T(t,a){var e,n=t.filename,i=arguments.length>1;if(t.cache){if(!n)throw new Error("cache option requires a filename");if(e=r.cache.get(n),e)return e;i||(a=R(n).toString().replace(I,""))}else if(!i){if(!n)throw new Error("Internal EJS error: no file name or template provided");a=R(n).toString().replace(I,"")}return e=r.compile(a,t),t.cache&&r.cache.set(n,e),e}function G(t,a,e){var n;if(e){try{n=T(t)(a)}catch(i){return e(i)}e(null,n)}else{if(typeof r.promiseImpl=="function")return new r.promiseImpl(function(i,u){try{n=T(t)(a),i(n)}catch(d){u(d)}});throw new Error("Please provide a callback function")}}function R(t){return r.fileLoader(t)}function Z(t,a){var e=c.shallowCopy(c.createNullProtoObjWherePossible(),a);if(e.filename=z(t,e),typeof a.includer=="function"){var n=a.includer(t,e.filename);if(n&&(n.filename&&(e.filename=n.filename),n.template))return T(e,n.template)}return T(e)}function k(t,a,e,n,i){var u=a.split(`
`),d=Math.max(n-3,0),E=Math.min(u.length,n+3),_=i(e),b=u.slice(d,E).map(function(F,N){var C=N+d+1;return(C==n?" >> ":"    ")+C+"| "+F}).join(`
`);throw t.path=_,t.message=(_||"ejs")+":"+n+`
`+b+`

`+t.message,t}function B(t){return t.replace(/;(\s*$)/,"$1")}r.compile=function(a,e){var n;return e&&e.scope&&(w||(console.warn("`scope` option is deprecated and will be removed in EJS 3"),w=!0),e.context||(e.context=e.scope),delete e.scope),n=new l(a,e),n.compile()},r.render=function(t,a,e){var n=a||c.createNullProtoObjWherePossible(),i=e||c.createNullProtoObjWherePossible();return arguments.length==2&&c.shallowCopyFromList(i,n,j),T(i,t)(n)},r.renderFile=function(){var t=Array.prototype.slice.call(arguments),a=t.shift(),e,n={filename:a},i,u;return typeof arguments[arguments.length-1]=="function"&&(e=t.pop()),t.length?(i=t.shift(),t.length?c.shallowCopy(n,t.pop()):(i.settings&&(i.settings.views&&(n.views=i.settings.views),i.settings["view cache"]&&(n.cache=!0),u=i.settings["view options"],u&&c.shallowCopy(n,u)),c.shallowCopyFromList(n,i,X)),n.filename=a):i=c.createNullProtoObjWherePossible(),G(n,i,e)},r.Template=l,r.clearCache=function(){r.cache.reset()};function l(t,a){a=a||c.createNullProtoObjWherePossible();var e=c.createNullProtoObjWherePossible();this.templateText=t,this.mode=null,this.truncate=!1,this.currentLine=1,this.source="",e.client=a.client||!1,e.escapeFunction=a.escape||a.escapeFunction||c.escapeXML,e.compileDebug=a.compileDebug!==!1,e.debug=!!a.debug,e.filename=a.filename,e.openDelimiter=a.openDelimiter||r.openDelimiter||s,e.closeDelimiter=a.closeDelimiter||r.closeDelimiter||f,e.delimiter=a.delimiter||r.delimiter||p,e.strict=a.strict||!1,e.context=a.context,e.cache=a.cache||!1,e.rmWhitespace=a.rmWhitespace,e.root=a.root,e.includer=a.includer,e.outputFunctionName=a.outputFunctionName,e.localsName=a.localsName||r.localsName||v,e.views=a.views,e.async=a.async,e.destructuredLocals=a.destructuredLocals,e.legacyInclude=typeof a.legacyInclude<"u"?!!a.legacyInclude:!0,e.strict?e._with=!1:e._with=typeof a._with<"u"?a._with:!0,this.opts=e,this.regex=this.createRegex()}l.modes={EVAL:"eval",ESCAPED:"escaped",RAW:"raw",COMMENT:"comment",LITERAL:"literal"},l.prototype={createRegex:function(){var t=q,a=c.escapeRegExpChars(this.opts.delimiter),e=c.escapeRegExpChars(this.opts.openDelimiter),n=c.escapeRegExpChars(this.opts.closeDelimiter);return t=t.replace(/%/g,a).replace(/</g,e).replace(/>/g,n),new RegExp(t)},compile:function(){var t,a,e=this.opts,n="",i="",u=e.escapeFunction,d,E=e.filename?JSON.stringify(e.filename):"undefined";if(!this.source){if(this.generateSource(),n+=`  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
`,e.outputFunctionName){if(!D.test(e.outputFunctionName))throw new Error("outputFunctionName is not a valid JS identifier.");n+="  var "+e.outputFunctionName+` = __append;
`}if(e.localsName&&!D.test(e.localsName))throw new Error("localsName is not a valid JS identifier.");if(e.destructuredLocals&&e.destructuredLocals.length){for(var _="  var __locals = ("+e.localsName+` || {}),
`,b=0;b<e.destructuredLocals.length;b++){var F=e.destructuredLocals[b];if(!D.test(F))throw new Error("destructuredLocals["+b+"] is not a valid JS identifier.");b>0&&(_+=`,
  `),_+=F+" = __locals."+F}n+=_+`;
`}e._with!==!1&&(n+="  with ("+e.localsName+` || {}) {
`,i+=`  }
`),i+=`  return __output;
`,this.source=n+this.source+i}e.compileDebug?t=`var __line = 1
  , __lines = `+JSON.stringify(this.templateText)+`
  , __filename = `+E+`;
try {
`+this.source+`} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}
`:t=this.source,e.client&&(t="escapeFn = escapeFn || "+u.toString()+`;
`+t,e.compileDebug&&(t="rethrow = rethrow || "+k.toString()+`;
`+t)),e.strict&&(t=`"use strict";
`+t),e.debug&&console.log(t),e.compileDebug&&e.filename&&(t=t+`
//# sourceURL=`+E+`
`);try{if(e.async)try{d=new Function("return (async function(){}).constructor;")()}catch(g){throw g instanceof SyntaxError?new Error("This environment does not support async/await"):g}else d=Function;a=new d(e.localsName+", escapeFn, include, rethrow",t)}catch(g){throw g instanceof SyntaxError&&(e.filename&&(g.message+=" in "+e.filename),g.message+=` while compiling ejs

`,g.message+=`If the above error is not helpful, you may want to try EJS-Lint:
`,g.message+="https://github.com/RyanZim/EJS-Lint",e.async||(g.message+=`
`,g.message+="Or, if you meant to create an async function, pass `async: true` as an option.")),g}var N=e.client?a:function(W){var Q=function(Y,x){var O=c.shallowCopy(c.createNullProtoObjWherePossible(),W);return x&&(O=c.shallowCopy(O,x)),Z(Y,e)(O)};return a.apply(e.context,[W||c.createNullProtoObjWherePossible(),u,Q,k])};if(e.filename&&typeof Object.defineProperty=="function"){var C=e.filename,K=m.basename(C,m.extname(C));try{Object.defineProperty(N,"name",{value:K,writable:!1,enumerable:!1,configurable:!0})}catch{}}return N},generateSource:function(){var t=this.opts;t.rmWhitespace&&(this.templateText=this.templateText.replace(/[\r\n]+/g,`
`).replace(/^\s+|\s+$/gm,"")),this.templateText=this.templateText.replace(/[ \t]*<%_/gm,"<%_").replace(/_%>[ \t]*/gm,"_%>");var a=this,e=this.parseTemplateText(),n=this.opts.delimiter,i=this.opts.openDelimiter,u=this.opts.closeDelimiter;e&&e.length&&e.forEach(function(d,E){var _;if(d.indexOf(i+n)===0&&d.indexOf(i+n+n)!==0&&(_=e[E+2],!(_==n+u||_=="-"+n+u||_=="_"+n+u)))throw new Error('Could not find matching close tag for "'+d+'".');a.scanLine(d)})},parseTemplateText:function(){for(var t=this.templateText,a=this.regex,e=a.exec(t),n=[],i;e;)i=e.index,i!==0&&(n.push(t.substring(0,i)),t=t.slice(i)),n.push(e[0]),t=t.slice(e[0].length),e=a.exec(t);return t&&n.push(t),n},_addOutput:function(t){if(this.truncate&&(t=t.replace(/^(?:\r\n|\r|\n)/,""),this.truncate=!1),!t)return t;t=t.replace(/\\/g,"\\\\"),t=t.replace(/\n/g,"\\n"),t=t.replace(/\r/g,"\\r"),t=t.replace(/"/g,'\\"'),this.source+='    ; __append("'+t+`")
`},scanLine:function(t){var a=this,e=this.opts.delimiter,n=this.opts.openDelimiter,i=this.opts.closeDelimiter,u=0;switch(u=t.split(`
`).length-1,t){case n+e:case n+e+"_":this.mode=l.modes.EVAL;break;case n+e+"=":this.mode=l.modes.ESCAPED;break;case n+e+"-":this.mode=l.modes.RAW;break;case n+e+"#":this.mode=l.modes.COMMENT;break;case n+e+e:this.mode=l.modes.LITERAL,this.source+='    ; __append("'+t.replace(n+e+e,n+e)+`")
`;break;case e+e+i:this.mode=l.modes.LITERAL,this.source+='    ; __append("'+t.replace(e+e+i,e+i)+`")
`;break;case e+i:case"-"+e+i:case"_"+e+i:this.mode==l.modes.LITERAL&&this._addOutput(t),this.mode=null,this.truncate=t.indexOf("-")===0||t.indexOf("_")===0;break;default:if(this.mode){switch(this.mode){case l.modes.EVAL:case l.modes.ESCAPED:case l.modes.RAW:t.lastIndexOf("//")>t.lastIndexOf(`
`)&&(t+=`
`)}switch(this.mode){case l.modes.EVAL:this.source+="    ; "+t+`
`;break;case l.modes.ESCAPED:this.source+="    ; __append(escapeFn("+B(t)+`))
`;break;case l.modes.RAW:this.source+="    ; __append("+B(t)+`)
`;break;case l.modes.COMMENT:break;case l.modes.LITERAL:this._addOutput(t);break}}else this._addOutput(t)}a.opts.compileDebug&&u&&(this.currentLine+=u,this.source+="    ; __line = "+this.currentLine+`
`)}},r.escapeXML=c.escapeXML,r.__express=r.renderFile,r.VERSION=L,r.name=y,typeof window<"u"&&(window.ejs=r)})(U);const Re=S({props:{template:{type:String,required:!0},data:{type:Object,required:!0}},setup(r){return()=>o("div",{class:"h-full overflow-auto  bg-white"},o("div",{innerHTML:U.render(r.template,r.data)}))}}),ke=S({setup(){const r=A(""),h=A(""),m=A("guest"),c=A(null),{setHeaderButtons:w}=te(),L=async()=>{await P.api.options.email.template.reply.put({params:{type:m.value},data:{source:h.value}}),await p()},s=ae(),f=()=>{s.warning({title:"\u786E\u8BA4\u91CD\u7F6E?",content:"\u91CD\u7F6E\u540E, \u6A21\u677F\u5C06\u88AB\u6062\u590D\u4E3A\u9ED8\u8BA4\u6A21\u677F",async onNegativeClick(){await P.api.options.email.template.reply.delete({params:{type:m.value}}),await p()},onPositiveClick(){},negativeText:"\u55EF",positiveText:"\u8FBE\u54A9"})};oe(()=>(w(o(ne,null,o($,{icon:o(se,null),name:"\u63D0\u4EA4",onClick:L,variant:"success"}),o($,{icon:o(he,null),name:"\u91CD\u7F6E\u81EA\u5B9A\u4E49\u6A21\u677F",onClick:f,variant:"error"}))),()=>{w(null)})),re(()=>{p()});const p=async()=>{const{template:v,props:y}=await P.api.options.email.template.reply.get({params:{type:m.value}});r.value=v,h.value=v,c.value=y};return ie(()=>m.value,p),()=>o("div",null,o(pe,{defaultValue:m.value==="guest",onUpdateValue:v=>{m.value=v?"guest":"owner"}},{checked(){return"\u6E38\u5BA2"},unchecked(){return"\u4E3B\u4EBA"}}),o("div",{class:"pb-4"}),o(ue,null,o(H,{span:18},o(ge,{onChange:v=>{h.value=v},value:r.value})),o(H,{span:18,class:"relative h-[calc(100vh-15rem)] "},o(Re,{data:c.value,template:h.value}))))}}),Be=S({setup(){return()=>o("div",null,"\u5373\u5C06\u63A8\u51FA")}});var Qe=S({setup(){const r=A("1");return()=>o(ce,null,o(ve,{value:r.value,size:"medium",onUpdateValue:h=>{r.value=h}},o(J,{name:"1",tab:"\u8BC4\u8BBA\u90AE\u4EF6\u6A21\u677F"},o(ke,null)),o(J,{name:"2",tab:"\u9884\u89C8 Markdown \u6A21\u677F"},o(Be,null))))}});export{Qe as default};