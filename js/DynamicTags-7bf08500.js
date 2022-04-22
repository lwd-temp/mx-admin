import{t as j,c as k,N as w}from"./Tag-3efc0e97.js";import{c1 as $,bb as K,c2 as W,c3 as E,c4 as _,$ as x,d as H,P as M,O as X,ad as Y,x as h,a2 as P,T as q,ae as G,l as V,S as J,h as r,a as Q,aX as Z,z as ee,N as te,Y as ne,a8 as N}from"./index-524a5fea.js";import{A as ae}from"./Add-094210b4.js";function se(t){switch(t){case"small":return"tiny";case"medium":return"small";case"large":return"medium";case"huge":return"large"}}const ie=$({name:"DynamicTags",common:K,peers:{Input:W,Button:E,Tag:j,Space:_},self(){return{inputWidth:"64px"}}});var le=ie,re=x("dynamic-tags",[x("input",{minWidth:"var(--n-input-width)"})]);const ue=Object.assign(Object.assign(Object.assign({},P.props),k),{closable:{type:Boolean,default:!0},defaultValue:{type:Array,default:()=>[]},value:Array,inputStyle:[String,Object],inputProps:Object,max:Number,tagStyle:[String,Object],renderTag:Function,onCreate:{type:Function,default:t=>t},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]});var me=H({name:"DynamicTags",props:ue,setup(t){const{mergedClsPrefixRef:f,inlineThemeDisabled:u}=M(t),{localeRef:o}=X("DynamicTags"),c=Y(t),{mergedDisabledRef:s}=c,d=h(""),m=h(!1),p=h(!0),v=h(null),y=P("DynamicTags","-dynamic-tags",re,le,t,f),b=h(t.defaultValue),F=q(t,"value"),i=G(F,b),O=V(()=>o.value.add),z=V(()=>se(t.size)),C=V(()=>s.value||!!t.max&&i.value.length>=t.max);function T(e){const{onChange:n,"onUpdate:value":g,onUpdateValue:B}=t,{nTriggerFormInput:L,nTriggerFormChange:U}=c;n&&N(n,e),B&&N(B,e),g&&N(g,e),b.value=e,L(),U()}function I(e){const n=i.value.slice(0);n.splice(e,1),T(n)}function D(e){switch(e.code){case"Enter":case"NumpadEnter":l()}}function l(e){const n=e??d.value;if(n){const g=i.value.slice(0);g.push(n),T(g)}m.value=!1,p.value=!0,d.value=""}function R(){l()}function A(){m.value=!0,Z(()=>{var e;(e=v.value)===null||e===void 0||e.focus(),p.value=!1})}const S=V(()=>{const{self:{inputWidth:e}}=y.value;return{"--n-input-width":e}}),a=u?J("dynamic-tags",void 0,S,t):void 0;return{mergedClsPrefix:f,inputInstRef:v,localizedAdd:O,inputSize:z,inputValue:d,showInput:m,inputForceFocused:p,mergedValue:i,mergedDisabled:s,triggerDisabled:C,handleInputKeyUp:D,handleAddClick:A,handleInputBlur:R,handleCloseClick:I,handleInputConfirm:l,mergedTheme:y,cssVars:u?void 0:S,themeClass:a?.themeClass,onRender:a?.onRender}},render(){const{mergedTheme:t,cssVars:f,mergedClsPrefix:u,onRender:o,renderTag:c}=this;return o?.(),r(Q,{class:[`${u}-dynamic-tags`,this.themeClass],size:"small",style:f,theme:t.peers.Space,themeOverrides:t.peerOverrides.Space,itemStyle:"display: flex;"},{default:()=>{const{mergedTheme:s,tagStyle:d,type:m,round:p,size:v,color:y,closable:b,mergedDisabled:F,showInput:i,inputValue:O,inputStyle:z,inputSize:C,inputForceFocused:T,triggerDisabled:I,handleInputKeyUp:D,handleInputBlur:l,handleAddClick:R,handleCloseClick:A,handleInputConfirm:S,$slots:a}=this;return this.mergedValue.map((e,n)=>c?c(e,n):r(w,{key:n,theme:s.peers.Tag,themeOverrides:s.peerOverrides.Tag,style:d,type:m,round:p,size:v,color:y,closable:b,disabled:F,onClose:()=>A(n)},{default:()=>typeof e=="string"?e:e.label})).concat(i?a.input?a.input({submit:S,deactivate:l}):r(ee,Object.assign({placeholder:"",size:C,style:z,autosize:!0},this.inputProps,{ref:"inputInstRef",value:O,onUpdateValue:e=>{this.inputValue=e},theme:s.peers.Input,themeOverrides:s.peerOverrides.Input,onKeyup:D,onBlur:l,internalForceFocus:T})):a.trigger?a.trigger({activate:R,disabled:I}):r(te,{dashed:!0,disabled:I,theme:s.peers.Button,themeOverrides:s.peerOverrides.Button,size:C,onClick:R},{icon:()=>r(ne,{clsPrefix:u},{default:()=>r(ae,null)})}))}})}});export{me as N};
