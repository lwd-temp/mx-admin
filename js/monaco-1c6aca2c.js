import{f as v,y as C,k as E,q as S,K as _,m as w,bn as L,w as h,a as b,b_ as D,bX as y}from"./index-546b1e9f.js";import{u as R,C as k}from"./index-a9cc4d80.js";import{u as A}from"./use-save-confirm-d0ac2555.js";import{e as N,s as V}from"./toggle-02c76972.js";import"./use-react-95665ffb.js";import"./throttle-0f7e1ced.js";import"./FormItem-47cfd295.js";import"./Form-04880262.js";import"./index-67622fda.js";import"./InputNumber-9454ae46.js";import"./Add-89e1c513.js";import"./Switch-ff0d09ee.js";import"./Select-1c50b9d0.js";import"./Tag-d719d8c1.js";const K=v({props:{innerRef:{type:Object},...N},setup(a){const i=C(),l=C(!1);let n;const{isDark:r}=E(S);R(),_(()=>{n?.dispose?.()}),w(async()=>{!i.value||(n=await M(i.value,a.text,r),l.value=!0,["onKeyDown","onDidPaste","onDidBlurEditorText"].forEach(e=>{n[e](()=>{const c=n.getValue();a.onChange(c)})}),a.innerRef&&(a.innerRef.value=n))});let t=L(a.text);return h(()=>a.text,e=>{!t&&e&&(t=e),n&&e!=n.getValue()&&n.setValue(e)}),A(a.unSaveConfirm,()=>t===n.getValue()),()=>b("div",{class:D("editor relative overflow-hidden",V.editor),ref:i},[l.value?null:b(k,null,null)])}}),G=K,M=async(a,i,l)=>{const{editor:n,KeyCode:r,KeyMod:t}=await y(()=>import("./editor.main-0b023ff7.js").then(function(o){return o.e}),["js/editor.main-0b023ff7.js","assets/editor.main.339eee99.css","js/index-546b1e9f.js","assets/index.91340e78.css"]),e=n.create(a,{value:i,language:"markdown",automaticLayout:!0,wrappingStrategy:"advanced",minimap:{enabled:!1},theme:l.value?"dark":"light",wordWrap:"on",cursorStyle:"line-thin",formatOnType:!0,quickSuggestions:{strings:!1,other:!1,comments:!1},tabCompletion:"off",parameterHints:{enabled:!1},suggestOnTriggerCharacters:!1,acceptSuggestionOnEnter:"off",wordBasedSuggestions:!1});h(()=>l.value,o=>{e.updateOptions({theme:o?"dark":"light"})}),e.addAction({id:"bold",label:"bold",keybindings:[t.CtrlCmd|r.KeyB],run:o=>(m(e,"**"),null)}),e.addAction({id:"em",label:"em",keybindings:[t.CtrlCmd|r.KeyI],run:o=>(m(e,"*"),null)}),e.addAction({id:"null",label:"null",keybindings:[t.CtrlCmd|r.KeyS,t.Shift|t.Alt|r.KeyF],run:o=>null}),e.addAction({id:"del",label:"del",keybindings:[t.Alt|r.KeyD],run:o=>(m(e,"~~"),null)});const c=[,r.Digit1,r.Digit2,r.Digit3,r.Digit4,r.Digit5];return Array.from({length:5}).fill(null).forEach((o,x)=>{const s=x+1;e.addAction({id:`head-${s}`,label:"heading",keybindings:[t.CtrlCmd|c[s]],run:u=>{const g=u.getSelection();if(!g)return null;const d=g.startLineNumber,f={startLineNumber:d,endLineNumber:d,startColumn:0,endColumn:s+2},p=u.getModel()?.getValueInRange(f);if(p&&p==`${"#".repeat(s)} `){u.executeEdits("",[{range:f,text:""}]);return}u.executeEdits("",[{range:{startLineNumber:d,endLineNumber:d,startColumn:0,endColumn:0},text:`${"#".repeat(s)} `}])}})}),e},m=async(a,i)=>{const{Selection:l}=await y(()=>import("./editor.main-0b023ff7.js").then(function(e){return e.e}),["js/editor.main-0b023ff7.js","assets/editor.main.339eee99.css","js/index-546b1e9f.js","assets/index.91340e78.css"]),n=a;if(!n)return;const r=i.length,t=n.getSelection();if(!!t)if(t.startLineNumber==t.endLineNumber&&t.startColumn==t.endColumn){n.executeEdits("",[{range:t,text:i.repeat(2)}]);const e=new l(t.startLineNumber,t.startColumn+r,t.startLineNumber,t.startColumn+r);n.setSelection(e)}else{const e=n.getModel()?.getValueInRange(t);if(!e)return;if(e.startsWith(i)&&e.endsWith(i)){n.executeEdits("",[{range:t,text:`${e.slice(r,e.length-r)}`}]);return}n.executeEdits("",[{range:t,text:`${i}${e}${i}`}])}};export{G as MonacoEditor};
