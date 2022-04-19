import{Q as Be,aQ as Kt,l as E,$ as w,a1 as b,a0 as O,d as U,P as Ne,bl as Gt,h as a,bm as ae,bn as ee,bo as ce,bp as Ye,bq as be,br as We,bs as ne,bt as ke,bu as Ke,bv as $t,bw as xe,bx as se,by as De,x as P,b7 as ye,bz as $e,L as Jt,aF as nt,z as St,bA as _e,bB as Ge,bC as Je,bD as et,ag as en,aw as tn,aa as te,ad as nn,O as rn,a2 as Se,a3 as Re,T as Ae,ae as ut,w as je,aj as dt,S as rt,b0 as Ct,b1 as tt,ap as on,aq as sn,ar as ln,as as it,b2 as Ve,b4 as an,bE as cn,a8 as me,N as ue,aX as un,bb as dn,k as zt,bF as ot,bG as hn,bH as pn,bI as fn,b3 as ht,bJ as gn,ac as mn,ao as _t,bK as qe,bL as bn,an as pt,bM as xn,bN as vn,bO as wn,bP as kn,bf as yn,o as Rt,e as At,f as st,bQ as $n,bR as Sn,bS as Cn,bT as zn,bU as _n,bV as Rn,p as An,bW as In,I as Bn,a as ft,F as En}from"./index-62a644ac.js";import{N as It}from"./Form-4aaee6bb.js";import{N as le}from"./FormItem-bb27ddd4.js";import{N as Tn}from"./Switch-fc14371a.js";import{N as Pn,a as Un}from"./CollapseItem-50560000.js";import{N as gt}from"./InputNumber-e26baee6.js";import{H as Dn}from"./rounded-button-789e2601.js";import{P as jn}from"./toggle-51390e6e.js";import{l as Fn}from"./js-yaml-fae8e8ce.js";function Mn(r,e){const t=Be(Kt,null);return E(()=>r.hljs||t?.mergedHljsRef.value)}var Vn=w("input-group",`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[b(">",[w("input",[b("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),b("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),w("button",[b("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[O("state-border, border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),b("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[O("state-border, border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),b("*",[b("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[b(">",[w("input",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),w("base-selection",[w("base-selection-label",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),w("base-selection-tags",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),O("box-shadow, border, state-border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),b("&:not(:first-child)",`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[b(">",[w("input",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),w("base-selection",[w("base-selection-label",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),w("base-selection-tags",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),O("box-shadow, border, state-border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]);const On={};var Nn=U({name:"InputGroup",props:On,setup(r){const{mergedClsPrefixRef:e}=Ne(r);return Gt("-input-group",Vn,e),{mergedClsPrefix:e}},render(){const{mergedClsPrefix:r}=this;return a("div",{class:`${r}-input-group`},this.$slots)}});function qn(r,e){switch(r[0]){case"hex":return e?"#000000FF":"#000000";case"rgb":return e?"rgba(0, 0, 0, 1)":"rgb(0, 0, 0)";case"hsl":return e?"hsla(0, 0%, 0%, 1)":"hsl(0, 0%, 0%)";case"hsv":return e?"hsva(0, 0%, 0%, 1)":"hsv(0, 0%, 0%)"}return"#000000"}function Ie(r){return r===null?null:/^ *#/.test(r)?"hex":r.includes("rgb")?"rgb":r.includes("hsl")?"hsl":r.includes("hsv")?"hsv":null}function Ln(r){return r=Math.round(r),r>=360?359:r<0?0:r}function Hn(r){return r=Math.round(r*100)/100,r>1?1:r<0?0:r}const Zn={rgb:{hex(r){return ae(ee(r))},hsl(r){const[e,t,n,i]=ee(r);return ce([...Ye(e,t,n),i])},hsv(r){const[e,t,n,i]=ee(r);return be([...We(e,t,n),i])}},hex:{rgb(r){return ne(ee(r))},hsl(r){const[e,t,n,i]=ee(r);return ce([...Ye(e,t,n),i])},hsv(r){const[e,t,n,i]=ee(r);return be([...We(e,t,n),i])}},hsl:{hex(r){const[e,t,n,i]=ke(r);return ae([...Ke(e,t,n),i])},rgb(r){const[e,t,n,i]=ke(r);return ne([...Ke(e,t,n),i])},hsv(r){const[e,t,n,i]=ke(r);return be([...$t(e,t,n),i])}},hsv:{hex(r){const[e,t,n,i]=xe(r);return ae([...se(e,t,n),i])},rgb(r){const[e,t,n,i]=xe(r);return ne([...se(e,t,n),i])},hsl(r){const[e,t,n,i]=xe(r);return ce([...De(e,t,n),i])}}};function Bt(r,e,t){return t=t||Ie(r),t?t===e?r:Zn[t][e](r):null}const we="12px",Qn=12,fe="6px",Xn=6,Yn="linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)";var Wn=U({name:"HueSlider",props:{clsPrefix:{type:String,required:!0},hue:{type:Number,required:!0},onUpdateHue:{type:Function,required:!0},onComplete:Function},setup(r){const e=P(null);function t(o){!e.value||(ye("mousemove",document,n),ye("mouseup",document,i),n(o))}function n(o){const{value:s}=e;if(!s)return;const{width:l,left:c}=s.getBoundingClientRect(),f=Ln((o.clientX-c-Xn)/(l-Qn)*360);r.onUpdateHue(f)}function i(){var o;$e("mousemove",document,n),$e("mouseup",document,i),(o=r.onComplete)===null||o===void 0||o.call(r)}return{railRef:e,handleMouseDown:t}},render(){const{clsPrefix:r}=this;return a("div",{class:`${r}-color-picker-slider`,style:{height:we,borderRadius:fe}},a("div",{ref:"railRef",style:{boxShadow:"inset 0 0 2px 0 rgba(0, 0, 0, .24)",boxSizing:"border-box",backgroundImage:Yn,height:we,borderRadius:fe,position:"relative"},onMousedown:this.handleMouseDown},a("div",{style:{position:"absolute",left:fe,right:fe,top:0,bottom:0}},a("div",{class:`${r}-color-picker-handle`,style:{left:`calc((${this.hue}%) / 359 * 100 - ${fe})`,borderRadius:fe,width:we,height:we}},a("div",{class:`${r}-color-picker-handle__fill`,style:{backgroundColor:`hsl(${this.hue}, 100%, 50%)`,borderRadius:fe,width:we,height:we}})))))}});const ze="12px",Kn=12,ge="6px";var Gn=U({name:"AlphaSlider",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},alpha:{type:Number,default:0},onUpdateAlpha:{type:Function,required:!0},onComplete:Function},setup(r){const e=P(null);function t(o){!e.value||!r.rgba||(ye("mousemove",document,n),ye("mouseup",document,i),n(o))}function n(o){const{value:s}=e;if(!s)return;const{width:l,left:c}=s.getBoundingClientRect(),f=(o.clientX-c)/(l-Kn);r.onUpdateAlpha(Hn(f))}function i(){var o;$e("mousemove",document,n),$e("mouseup",document,i),(o=r.onComplete)===null||o===void 0||o.call(r)}return{railRef:e,railBackgroundImage:E(()=>{const{rgba:o}=r;return o?`linear-gradient(to right, rgba(${o[0]}, ${o[1]}, ${o[2]}, 0) 0%, rgba(${o[0]}, ${o[1]}, ${o[2]}, 1) 100%)`:""}),handleMouseDown:t}},render(){const{clsPrefix:r}=this;return a("div",{class:`${r}-color-picker-slider`,ref:"railRef",style:{height:ze,borderRadius:ge},onMousedown:this.handleMouseDown},a("div",{style:{borderRadius:ge,position:"absolute",left:0,right:0,top:0,bottom:0,overflow:"hidden"}},a("div",{class:`${r}-color-picker-checkboard`}),a("div",{class:`${r}-color-picker-slider__image`,style:{backgroundImage:this.railBackgroundImage}})),this.rgba&&a("div",{style:{position:"absolute",left:ge,right:ge,top:0,bottom:0}},a("div",{class:`${r}-color-picker-handle`,style:{left:`calc(${this.alpha*100}% - ${ge})`,borderRadius:ge,width:ze,height:ze}},a("div",{class:`${r}-color-picker-handle__fill`,style:{backgroundColor:ne(this.rgba),borderRadius:ge,width:ze,height:ze}}))))}});const Te="12px",Pe="6px";var Jn=U({name:"Pallete",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},displayedHue:{type:Number,required:!0},displayedSv:{type:Array,required:!0},onUpdateSV:{type:Function,required:!0},onComplete:Function},setup(r){const e=P(null);function t(o){!e.value||(ye("mousemove",document,n),ye("mouseup",document,i),n(o))}function n(o){const{value:s}=e;if(!s)return;const{width:l,height:c,left:f,bottom:d}=s.getBoundingClientRect(),$=(d-o.clientY)/c,m=(o.clientX-f)/l,h=100*(m>1?1:m<0?0:m),k=100*($>1?1:$<0?0:$);r.onUpdateSV(h,k)}function i(){var o;$e("mousemove",document,n),$e("mouseup",document,i),(o=r.onComplete)===null||o===void 0||o.call(r)}return{palleteRef:e,handleColor:E(()=>{const{rgba:o}=r;return o?`rgb(${o[0]}, ${o[1]}, ${o[2]})`:""}),handleMouseDown:t}},render(){const{clsPrefix:r}=this;return a("div",{class:`${r}-color-picker-pallete`,onMousedown:this.handleMouseDown,ref:"palleteRef"},a("div",{class:`${r}-color-picker-pallete__layer`,style:{backgroundImage:`linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`}}),a("div",{class:`${r}-color-picker-pallete__layer ${r}-color-picker-pallete__layer--shadowed`,style:{backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))"}}),this.rgba&&a("div",{class:`${r}-color-picker-handle`,style:{width:Te,height:Te,borderRadius:Pe,left:`calc(${this.displayedSv[0]}% - ${Pe})`,bottom:`calc(${this.displayedSv[1]}% - ${Pe})`}},a("div",{class:`${r}-color-picker-handle__fill`,style:{backgroundColor:this.handleColor,borderRadius:Pe,width:Te,height:Te}})))}});const lt=Jt("n-color-picker");function er(r){return/^\d{1,3}\.?\d*$/.test(r.trim())?Math.max(0,Math.min(parseInt(r),255)):!1}function tr(r){return/^\d{1,3}\.?\d*$/.test(r.trim())?Math.max(0,Math.min(parseInt(r),360)):!1}function nr(r){return/^\d{1,3}\.?\d*$/.test(r.trim())?Math.max(0,Math.min(parseInt(r),100)):!1}function rr(r){const e=r.trim();return/^#[0-9a-fA-F]+$/.test(e)?[4,5,7,9].includes(e.length):!1}function ir(r){return/^\d{1,3}\.?\d*%$/.test(r.trim())?Math.max(0,Math.min(parseInt(r),100)):!1}const or={paddingSmall:"0 4px"};var mt=U({name:"ColorInputUnit",props:{label:{type:String,required:!0},value:{type:[Number,String],default:null},showAlpha:Boolean,onUpdateValue:{type:Function,required:!0}},setup(r){const e=P(""),{themeRef:t}=Be(lt,null);nt(()=>{e.value=n()});function n(){const{value:s}=r;if(s===null)return"";const{label:l}=r;return l==="HEX"?s:l==="A"?`${Math.floor(s*100)}%`:String(Math.floor(s))}function i(s){e.value=s}function o(s){let l,c;switch(r.label){case"HEX":c=rr(s),c&&r.onUpdateValue(s),e.value=n();break;case"H":l=tr(s),l===!1?e.value=n():r.onUpdateValue(l);break;case"S":case"L":case"V":l=nr(s),l===!1?e.value=n():r.onUpdateValue(l);break;case"A":l=ir(s),l===!1?e.value=n():r.onUpdateValue(l);break;case"R":case"G":case"B":l=er(s),l===!1?e.value=n():r.onUpdateValue(l);break}}return{mergedTheme:t,inputValue:e,handleInputChange:o,handleInputUpdateValue:i}},render(){const{mergedTheme:r}=this;return a(St,{size:"small",placeholder:this.label,theme:r.peers.Input,themeOverrides:r.peerOverrides.Input,builtinThemeOverrides:or,value:this.inputValue,onUpdateValue:this.handleInputUpdateValue,onChange:this.handleInputChange,style:this.label==="A"?"flex-grow: 1.25;":""})}}),sr=U({name:"ColorInput",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},modes:{type:Array,required:!0},showAlpha:{type:Boolean,required:!0},value:{type:String,default:null},valueArr:{type:Array,default:null},onUpdateValue:{type:Function,required:!0},onUpdateMode:{type:Function,required:!0}},setup(r){return{handleUnitUpdateValue(e,t){const{showAlpha:n}=r;if(r.mode==="hex"){r.onUpdateValue((n?ae:_e)(t));return}let i;switch(r.valueArr===null?i=[0,0,0,0]:i=Array.from(r.valueArr),r.mode){case"hsv":i[e]=t,r.onUpdateValue((n?be:et)(i));break;case"rgb":i[e]=t,r.onUpdateValue((n?ne:Je)(i));break;case"hsl":i[e]=t,r.onUpdateValue((n?ce:Ge)(i));break}}}},render(){const{clsPrefix:r,modes:e}=this;return a("div",{class:`${r}-color-picker-input`},a("div",{class:`${r}-color-picker-input__mode`,onClick:this.onUpdateMode,style:{cursor:e.length===1?"":"pointer"}},this.mode.toUpperCase()+(this.showAlpha?"A":"")),a(Nn,null,{default:()=>{const{mode:t,valueArr:n,showAlpha:i}=this;if(t==="hex"){let o=null;try{o=n===null?null:(i?ae:_e)(n)}catch{}return a(mt,{label:"HEX",showAlpha:i,value:o,onUpdateValue:s=>{this.handleUnitUpdateValue(0,s)}})}return(t+(i?"a":"")).split("").map((o,s)=>a(mt,{label:o.toUpperCase(),value:n===null?null:n[s],onUpdateValue:l=>{this.handleUnitUpdateValue(s,l)}}))}}))}}),lr=U({name:"ColorPickerTrigger",props:{clsPrefix:{type:String,required:!0},value:{type:String,default:null},hsla:{type:Array,default:null},disabled:Boolean,onClick:Function},setup(r){const{colorPickerSlots:e,renderLabelRef:t}=Be(lt,null);return()=>{const{hsla:n,value:i,clsPrefix:o,onClick:s,disabled:l}=r,c=e.label||t.value;return a("div",{class:[`${o}-color-picker-trigger`,l&&`${o}-color-picker-trigger--disabled`],onClick:l?void 0:s},a("div",{class:`${o}-color-picker-trigger__fill`},a("div",{class:`${o}-color-picker-checkboard`}),a("div",{style:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:n?ce(n):""}}),i&&n?a("div",{class:`${o}-color-picker-trigger__value`,style:{color:n[2]>50||n[3]<.5?"black":"white"}},c?c(i):i):null))}}});function ar(r,e){if(e==="hsv"){const[t,n,i,o]=xe(r);return ne([...se(t,n,i),o])}return r}function cr(r){const e=document.createElement("canvas").getContext("2d");return e.fillStyle=r,e.fillStyle}var ur=U({name:"ColorPickerSwatches",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},swatches:{type:Array,required:!0},onUpdateColor:{type:Function,required:!0}},setup(r){const e=E(()=>r.swatches.map(o=>{const s=Ie(o);return{value:o,mode:s,legalValue:ar(o,s)}}));function t(o){const{mode:s}=r;let{value:l,mode:c}=o;return c||(c="hex",/^[a-zA-Z]+$/.test(l)?l=cr(l):(en("color-picker",`color ${l} in swatches is invalid.`),l="#000000")),c===s?l:Bt(l,s,c)}function n(o){r.onUpdateColor(t(o))}function i(o,s){o.key==="Enter"&&n(s)}return{parsedSwatchesRef:e,handleSwatchSelect:n,handleSwatchKeyDown:i}},render(){const{clsPrefix:r}=this;return a("div",{class:`${r}-color-picker-swatches`},this.parsedSwatchesRef.map(e=>a("div",{class:`${r}-color-picker-swatch`,tabindex:0,onClick:()=>this.handleSwatchSelect(e),onKeydown:t=>this.handleSwatchKeyDown(t,e)},a("div",{class:`${r}-color-picker-swatch__fill`,style:{background:e.legalValue}}))))}}),dr=U({name:"ColorPreview",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},color:{type:String,default:null,validator:r=>{const e=Ie(r);return Boolean(!r||e&&e!=="hsv")}},onUpdateColor:{type:Function,required:!0}},setup(r){function e(t){var n;const i=t.target.value;(n=r.onUpdateColor)===null||n===void 0||n.call(r,Bt(i.toUpperCase(),r.mode,"hex")),t.stopPropagation()}return{handleChange:e}},render(){const{clsPrefix:r}=this;return a("div",{class:`${r}-color-picker-preview__preview`},a("span",{class:`${r}-color-picker-preview__fill`,style:{background:this.color||"#000000"}}),a("input",{class:`${r}-color-picker-preview__input`,type:"color",value:this.color,onChange:this.handleChange}))}}),hr=b([w("color-picker",`
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 `),w("color-picker-panel",`
 margin: 4px 0;
 width: 240px;
 font-size: var(--n-panel-font-size);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 `,[tn(),w("input",`
 text-align: center;
 `)]),w("color-picker-checkboard",`
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[b("&::after",`
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 12px 12px;
 background-position: 0 0, 0 6px, 6px -6px, -6px 0px;
 background-repeat: repeat;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),w("color-picker-slider",`
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `,[O("image",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `),b("&::after",`
 content: "";
 position: absolute;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 pointer-events: none;
 `)]),w("color-picker-handle",`
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `,[O("fill",`
 box-sizing: border-box;
 border: 2px solid white;
 `)]),w("color-picker-pallete",`
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `,[O("layer",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[te("shadowed",`
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]),w("color-picker-preview",`
 display: flex;
 `,[O("sliders",`
 flex: 1 0 auto;
 `),O("preview",`
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `),O("fill",`
 display: block;
 width: 30px;
 height: 30px;
 `),O("input",`
 position: absolute;
 top: 0;
 left: 0;
 width: 30px;
 height: 30px;
 opacity: 0;
 z-index: 1;
 `)]),w("color-picker-input",`
 display: flex;
 align-items: center;
 `,[w("input",`
 flex-grow: 1;
 flex-basis: 0;
 `),O("mode",`
 width: 72px;
 text-align: center;
 `)]),w("color-picker-control",`
 padding: 12px;
 `),w("color-picker-action",`
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `,[w("button","margin-left: 8px;")]),w("color-picker-trigger",`
 border: var(--n-border);
 height: 100%;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 cursor: pointer;
 `,[O("value",`
 white-space: nowrap;
 position: relative;
 `),O("fill",`
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `),te("disabled","cursor: not-allowed"),w("color-picker-checkboard",`
 border-radius: var(--n-border-radius);
 `,[b("&::after",`
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]),w("color-picker-swatches",`
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `,[w("color-picker-swatch",`
 width: 18px;
 height: 18px;
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 8px 8px;
 background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;
 background-repeat: repeat;
 `,[O("fill",`
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `),b("&:focus",`
 outline: none;
 `,[O("fill",[b("&::after",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]);const pr=Object.assign(Object.assign({},Se.props),{value:String,show:{type:Boolean,default:void 0},defaultShow:{type:Boolean,default:!1},defaultValue:String,modes:{type:Array,default:()=>["rgb","hex","hsl"]},placement:{type:String,default:"bottom-start"},to:tt.propTo,showAlpha:{type:Boolean,default:!0},showPreview:Boolean,swatches:Array,disabled:{type:Boolean,default:void 0},actions:{type:Array,default:null},internalActions:Array,size:String,renderLabel:Function,onComplete:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]});var fr=U({name:"ColorPicker",props:pr,setup(r,{slots:e}){const t=P(null);let n=null;const i=nn(r),{mergedSizeRef:o,mergedDisabledRef:s}=i,{localeRef:l}=rn("global"),{mergedClsPrefixRef:c,namespaceRef:f,inlineThemeDisabled:d}=Ne(r),$=Se("ColorPicker","-color-picker",hr,cn,r,c);Re(lt,{themeRef:$,renderLabelRef:Ae(r,"renderLabel"),colorPickerSlots:e});const m=P(r.defaultShow),h=ut(Ae(r,"show"),m);function k(u){const{onUpdateShow:C,"onUpdate:show":I}=r;C&&me(C,u),I&&me(I,u),m.value=u}const{defaultValue:y}=r,z=P(y===void 0?qn(r.modes,r.showAlpha):y),x=ut(Ae(r,"value"),z),S=P([x.value]),D=P(0),N=E(()=>Ie(x.value)),{modes:H}=r,R=P(Ie(x.value)||H[0]||"rgb");function Y(){const{modes:u}=r,{value:C}=R,I=u.findIndex(T=>T===C);~I?R.value=u[(I+1)%u.length]:R.value="rgb"}let A,F,Z,oe,W,K,G,L;const de=E(()=>{const{value:u}=x;if(!u)return null;switch(N.value){case"hsv":return xe(u);case"hsl":return[A,F,Z,L]=ke(u),[...$t(A,F,Z),L];case"rgb":case"hex":return[W,K,G,L]=ee(u),[...We(W,K,G),L]}}),he=E(()=>{const{value:u}=x;if(!u)return null;switch(N.value){case"rgb":case"hex":return ee(u);case"hsv":return[A,F,oe,L]=xe(u),[...se(A,F,oe),L];case"hsl":return[A,F,Z,L]=ke(u),[...Ke(A,F,Z),L]}}),Le=E(()=>{const{value:u}=x;if(!u)return null;switch(N.value){case"hsl":return ke(u);case"hsv":return[A,F,oe,L]=xe(u),[...De(A,F,oe),L];case"rgb":case"hex":return[W,K,G,L]=ee(u),[...Ye(W,K,G),L]}}),Ft=E(()=>{switch(R.value){case"rgb":case"hex":return he.value;case"hsv":return de.value;case"hsl":return Le.value}}),Ee=P(0),He=P(1),Ze=P([0,0]);function Mt(u,C){const{value:I}=de,T=Ee.value,j=I?I[3]:1;Ze.value=[u,C];const{showAlpha:B}=r;switch(R.value){case"hsv":V((B?be:et)([T,u,C,j]),"cursor");break;case"hsl":V((B?ce:Ge)([...De(T,u,C),j]),"cursor");break;case"rgb":V((B?ne:Je)([...se(T,u,C),j]),"cursor");break;case"hex":V((B?ae:_e)([...se(T,u,C),j]),"cursor");break}}function Vt(u){Ee.value=u;const{value:C}=de;if(!C)return;const[,I,T,j]=C,{showAlpha:B}=r;switch(R.value){case"hsv":V((B?be:et)([u,I,T,j]),"cursor");break;case"rgb":V((B?ne:Je)([...se(u,I,T),j]),"cursor");break;case"hex":V((B?ae:_e)([...se(u,I,T),j]),"cursor");break;case"hsl":V((B?ce:Ge)([...De(u,I,T),j]),"cursor");break}}function Ot(u){switch(R.value){case"hsv":[A,F,oe]=de.value,V(be([A,F,oe,u]),"cursor");break;case"rgb":[W,K,G]=he.value,V(ne([W,K,G,u]),"cursor");break;case"hex":[W,K,G]=he.value,V(ae([W,K,G,u]),"cursor");break;case"hsl":[A,F,Z]=Le.value,V(ce([A,F,Z,u]),"cursor");break}He.value=u}function V(u,C){C==="cursor"?n=u:n=null;const{nTriggerFormChange:I,nTriggerFormInput:T}=i,{onUpdateValue:j,"onUpdate:value":B}=r;j&&me(j,u),B&&me(B,u),I(),T(),z.value=u}function Nt(u){V(u,"input"),un(ve)}function ve(u=!0){const{value:C}=x;if(C){const{nTriggerFormChange:I,nTriggerFormInput:T}=i,{onComplete:j}=r;j&&j(C);const{value:B}=S,{value:Q}=D;u&&(B.splice(Q+1,B.length,C),D.value=Q+1),I(),T()}}function qt(){const{value:u}=D;u-1<0||(V(S.value[u-1],"input"),ve(!1),D.value=u-1)}function Lt(){const{value:u}=D;u<0||u+1>=S.value.length||(V(S.value[u+1],"input"),ve(!1),D.value=u+1)}function Ht(){k(!1)}const Zt=E(()=>D.value>=1),Qt=E(()=>{const{value:u}=S;return u.length>1&&D.value<u.length-1});je(h,u=>{u||(S.value=[x.value],D.value=0)}),nt(()=>{if(!(n&&n===x.value)){const{value:u}=de;u&&(Ee.value=u[0],He.value=u[3],Ze.value=[u[1],u[2]])}n=null});const Qe=E(()=>{const{value:u}=o,{common:{cubicBezierEaseInOut:C},self:{textColor:I,color:T,panelFontSize:j,boxShadow:B,border:Q,borderRadius:q,dividerColor:pe,[dt("height",u)]:Yt,[dt("fontSize",u)]:Wt}}=$.value;return{"--n-bezier":C,"--n-text-color":I,"--n-color":T,"--n-panel-font-size":j,"--n-font-size":Wt,"--n-box-shadow":B,"--n-border":Q,"--n-border-radius":q,"--n-height":Yt,"--n-divider-color":pe}}),J=d?rt("color-picker",E(()=>o.value[0]),Qe,r):void 0;function Xt(){var u;const{value:C}=he,{value:I}=Ee,{internalActions:T,modes:j,actions:B}=r,{value:Q}=$,{value:q}=c;return a("div",{class:[`${q}-color-picker-panel`,J?.themeClass.value],onDragstart:pe=>{pe.preventDefault()},style:d?void 0:Qe.value},a("div",{class:`${q}-color-picker-control`},a(Jn,{clsPrefix:q,rgba:C,displayedHue:I,displayedSv:Ze.value,onUpdateSV:Mt,onComplete:ve}),a("div",{class:`${q}-color-picker-preview`},a("div",{class:`${q}-color-picker-preview__sliders`},a(Wn,{clsPrefix:q,hue:I,onUpdateHue:Vt,onComplete:ve}),r.showAlpha?a(Gn,{clsPrefix:q,rgba:C,alpha:He.value,onUpdateAlpha:Ot,onComplete:ve}):null),r.showPreview?a(dr,{clsPrefix:q,mode:R.value,color:he.value&&_e(he.value),onUpdateColor:pe=>V(pe,"input")}):null),a(sr,{clsPrefix:q,showAlpha:r.showAlpha,mode:R.value,modes:j,onUpdateMode:Y,value:x.value,valueArr:Ft.value,onUpdateValue:Nt}),((u=r.swatches)===null||u===void 0?void 0:u.length)&&a(ur,{clsPrefix:q,mode:R.value,swatches:r.swatches,onUpdateColor:pe=>V(pe,"input")})),B?.length?a("div",{class:`${q}-color-picker-action`},B.includes("confirm")&&a(ue,{size:"small",onClick:Ht,theme:Q.peers.Button,themeOverrides:Q.peerOverrides.Button},{default:()=>l.value.confirm})):null,e.action?a("div",{class:`${q}-color-picker-action`},{default:e.action}):T?a("div",{class:`${q}-color-picker-action`},T.includes("undo")&&a(ue,{size:"small",onClick:qt,disabled:!Zt.value,theme:Q.peers.Button,themeOverrides:Q.peerOverrides.Button},{default:()=>l.value.undo}),T.includes("redo")&&a(ue,{size:"small",onClick:Lt,disabled:!Qt.value,theme:Q.peers.Button,themeOverrides:Q.peerOverrides.Button},{default:()=>l.value.redo})):null)}return{mergedClsPrefix:c,namespace:f,selfRef:t,hsla:Le,rgba:he,mergedShow:h,mergedDisabled:s,isMounted:Ct(),adjustedTo:tt(r),mergedValue:x,handleTriggerClick(){k(!0)},handleClickOutside(u){var C;!((C=t.value)===null||C===void 0)&&C.contains(u.target)||k(!1)},renderPanel:Xt,cssVars:d?void 0:Qe,themeClass:J?.themeClass,onRender:J?.onRender}},render(){const{$slots:r,mergedClsPrefix:e,onRender:t}=this;return t?.(),a("div",{class:[this.themeClass,`${e}-color-picker`],ref:"selfRef",style:this.cssVars},a(on,null,{default:()=>[a(sn,null,{default:()=>a(lr,{clsPrefix:e,value:this.mergedValue,hsla:this.hsla,disabled:this.mergedDisabled,onClick:this.handleTriggerClick},{label:r.label})}),a(ln,{placement:this.placement,show:this.mergedShow,containerClass:this.namespace,teleportDisabled:this.adjustedTo===tt.tdkey,to:this.adjustedTo},{default:()=>a(it,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.mergedShow?Ve(this.renderPanel(),[[an,this.handleClickOutside,void 0,{capture:!0}]]):null})})]}))}});const gr=r=>{const{textColor2:e,fontSize:t,fontWeightStrong:n}=r;return{textColor:e,fontSize:t,fontWeightStrong:n,"mono-3":"#a0a1a7","hue-1":"#0184bb","hue-2":"#4078f2","hue-3":"#a626a4","hue-4":"#50a14f","hue-5":"#e45649","hue-5-2":"#c91243","hue-6":"#986801","hue-6-2":"#c18401"}},mr={name:"Code",common:dn,self:gr};var br=mr,xr=b([w("code",`
 font-size: var(--n-font-size);
 font-family: var(--n-font-family);
 `,[te("word-wrap",[b("pre",`
 white-space: pre-wrap;
 word-break: break-all;
 `)]),b("pre",`
 margin: 0;
 font-family: inherit;
 `),b("[class^=hljs]",`
 color: var(--n-text-color);
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),({props:r})=>{const e=`${r.bPrefix}code`;return[`${e} .hljs-comment,
 ${e} .hljs-quote {
 color: var(--n-mono-3);
 font-style: italic;
 }`,`${e} .hljs-doctag,
 ${e} .hljs-keyword,
 ${e} .hljs-formula {
 color: var(--n-hue-3);
 }`,`${e} .hljs-section,
 ${e} .hljs-name,
 ${e} .hljs-selector-tag,
 ${e} .hljs-deletion,
 ${e} .hljs-subst {
 color: var(--n-hue-5);
 }`,`${e} .hljs-literal {
 color: var(--n-hue-1);
 }`,`${e} .hljs-string,
 ${e} .hljs-regexp,
 ${e} .hljs-addition,
 ${e} .hljs-attribute,
 ${e} .hljs-meta-string {
 color: var(--n-hue-4);
 }`,`${e} .hljs-built_in,
 ${e} .hljs-class .hljs-title {
 color: var(--n-hue-6-2);
 }`,`${e} .hljs-attr,
 ${e} .hljs-variable,
 ${e} .hljs-template-variable,
 ${e} .hljs-type,
 ${e} .hljs-selector-class,
 ${e} .hljs-selector-attr,
 ${e} .hljs-selector-pseudo,
 ${e} .hljs-number {
 color: var(--n-hue-6);
 }`,`${e} .hljs-symbol,
 ${e} .hljs-bullet,
 ${e} .hljs-link,
 ${e} .hljs-meta,
 ${e} .hljs-selector-id,
 ${e} .hljs-title {
 color: var(--n-hue-2);
 }`,`${e} .hljs-emphasis {
 font-style: italic;
 }`,`${e} .hljs-strong {
 font-weight: var(--n-font-weight-strong);
 }`,`${e} .hljs-link {
 text-decoration: underline;
 }`]}]);const vr=Object.assign(Object.assign({},Se.props),{language:String,code:{type:String,default:""},trim:{type:Boolean,default:!0},hljs:Object,uri:Boolean,inline:Boolean,wordWrap:Boolean,internalFontSize:Number,internalNoHighlight:Boolean});var wr=U({name:"Code",props:vr,setup(r,{slots:e}){const{internalNoHighlight:t}=r,{mergedClsPrefixRef:n,inlineThemeDisabled:i}=Ne(),o=P(null),s=t?{value:void 0}:Mn(r),l=(m,h,k)=>{const{value:y}=s;return!y||!(m&&y.getLanguage(m))?null:y.highlight(k?h.trim():h,{language:m}).value},c=()=>{if(e.default)return;const{value:m}=o;if(!m)return;const{language:h}=r,k=r.uri?window.decodeURIComponent(r.code):r.code;if(h){const z=l(h,k,r.trim);if(z!==null){m.innerHTML=r.inline?z:`<pre>${z}</pre>`;return}}if(r.inline){m.textContent=k;return}const y=m.children[0];if(y&&y.tagName==="PRE")y.textContent=k;else{const z=document.createElement("pre");z.textContent=k,m.innerHTML="",m.appendChild(z)}};zt(c),je(Ae(r,"language"),c),je(Ae(r,"code"),c),t||je(s,c);const f=Se("Code","-code",xr,br,r,n),d=E(()=>{const{common:{cubicBezierEaseInOut:m,fontFamilyMono:h},self:{textColor:k,fontSize:y,fontWeightStrong:z,"mono-3":x,"hue-1":S,"hue-2":D,"hue-3":N,"hue-4":H,"hue-5":R,"hue-5-2":Y,"hue-6":A,"hue-6-2":F}}=f.value,{internalFontSize:Z}=r;return{"--n-font-size":Z?`${Z}px`:y,"--n-font-family":h,"--n-font-weight-strong":z,"--n-bezier":m,"--n-text-color":k,"--n-mono-3":x,"--n-hue-1":S,"--n-hue-2":D,"--n-hue-3":N,"--n-hue-4":H,"--n-hue-5":R,"--n-hue-5-2":Y,"--n-hue-6":A,"--n-hue-6-2":F}}),$=i?rt("code",E(()=>`${r.internalFontSize||"a"}`),d,r):void 0;return{mergedClsPrefix:n,codeRef:o,cssVars:i?void 0:d,themeClass:$?.themeClass,onRender:$?.onRender}},render(){const{mergedClsPrefix:r,wordWrap:e,onRender:t}=this;return t?.(),a("code",{class:[`${r}-code`,this.themeClass,e&&`${r}-code--word-wrap`],style:this.cssVars,ref:"codeRef"},this.$slots)}}),kr=U({name:"NDrawerContent",inheritAttrs:!1,props:{show:{type:Boolean,default:void 0},displayDirective:{type:String,required:!0},placement:{type:String,required:!0},contentStyle:[Object,String],nativeScrollbar:{type:Boolean,required:!0},scrollbarProps:Object,trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},onAfterLeave:Function,onAfterEnter:Function,onEsc:Function},setup(r){const e=P(r.show),t=P(null),n=Be(ot);nt(()=>{r.show&&(e.value=!0)});function i(){var o;e.value=!1,(o=r.onAfterLeave)===null||o===void 0||o.call(r)}return Re(hn,t),Re(pn,null),Re(fn,null),{bodyRef:t,mergedClsPrefix:n.mergedClsPrefixRef,isMounted:n.isMountedRef,mergedTheme:n.mergedThemeRef,displayed:e,transitionName:E(()=>({right:"slide-in-from-right-transition",left:"slide-in-from-left-transition",top:"slide-in-from-top-transition",bottom:"slide-in-from-bottom-transition"})[r.placement]),handleAfterLeave:i}},render(){const{$slots:r,mergedClsPrefix:e}=this;return this.displayDirective==="show"||this.displayed||this.show?Ve(a("div",{role:"none"},a(gn,{disabled:!this.trapFocus,active:this.show,autoFocus:this.autoFocus,onEsc:this.onEsc},{default:()=>a(it,{name:this.transitionName,appear:this.isMounted,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>Ve(a("div",mn(this.$attrs,{role:"dialog",ref:"bodyRef","aria-modal":"true",class:[`${e}-drawer`,`${e}-drawer--${this.placement}-placement`,this.nativeScrollbar&&`${e}-drawer--native-scrollbar`]}),[this.nativeScrollbar?a("div",{class:`${e}-drawer-content-wrapper`,style:this.contentStyle,role:"none"},r):a(_t,Object.assign({},this.scrollbarProps,{contentStyle:this.contentStyle,contentClass:`${e}-drawer-content-wrapper`,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar}),r)]),[[ht,this.show]])})})),[[ht,this.displayDirective==="if"||this.displayed||this.show]]):null}});const{cubicBezierEaseIn:yr,cubicBezierEaseOut:$r}=qe;function Sr({duration:r="0.3s",leaveDuration:e="0.2s",name:t="slide-in-from-right"}={}){return[b(`&.${t}-transition-leave-active`,{transition:`transform ${e} ${yr}`}),b(`&.${t}-transition-enter-active`,{transition:`transform ${r} ${$r}`}),b(`&.${t}-transition-enter-to`,{transform:"translateX(0)"}),b(`&.${t}-transition-enter-from`,{transform:"translateX(100%)"}),b(`&.${t}-transition-leave-from`,{transform:"translateX(0)"}),b(`&.${t}-transition-leave-to`,{transform:"translateX(100%)"})]}const{cubicBezierEaseIn:Cr,cubicBezierEaseOut:zr}=qe;function _r({duration:r="0.3s",leaveDuration:e="0.2s",name:t="slide-in-from-left"}={}){return[b(`&.${t}-transition-leave-active`,{transition:`transform ${e} ${Cr}`}),b(`&.${t}-transition-enter-active`,{transition:`transform ${r} ${zr}`}),b(`&.${t}-transition-enter-to`,{transform:"translateX(0)"}),b(`&.${t}-transition-enter-from`,{transform:"translateX(-100%)"}),b(`&.${t}-transition-leave-from`,{transform:"translateX(0)"}),b(`&.${t}-transition-leave-to`,{transform:"translateX(-100%)"})]}const{cubicBezierEaseIn:Rr,cubicBezierEaseOut:Ar}=qe;function Ir({duration:r="0.3s",leaveDuration:e="0.2s",name:t="slide-in-from-top"}={}){return[b(`&.${t}-transition-leave-active`,{transition:`transform ${e} ${Rr}`}),b(`&.${t}-transition-enter-active`,{transition:`transform ${r} ${Ar}`}),b(`&.${t}-transition-enter-to`,{transform:"translateY(0)"}),b(`&.${t}-transition-enter-from`,{transform:"translateY(-100%)"}),b(`&.${t}-transition-leave-from`,{transform:"translateY(0)"}),b(`&.${t}-transition-leave-to`,{transform:"translateY(-100%)"})]}const{cubicBezierEaseIn:Br,cubicBezierEaseOut:Er}=qe;function Tr({duration:r="0.3s",leaveDuration:e="0.2s",name:t="slide-in-from-bottom"}={}){return[b(`&.${t}-transition-leave-active`,{transition:`transform ${e} ${Br}`}),b(`&.${t}-transition-enter-active`,{transition:`transform ${r} ${Er}`}),b(`&.${t}-transition-enter-to`,{transform:"translateY(0)"}),b(`&.${t}-transition-enter-from`,{transform:"translateY(100%)"}),b(`&.${t}-transition-leave-from`,{transform:"translateY(0)"}),b(`&.${t}-transition-leave-to`,{transform:"translateY(100%)"})]}var Pr=b([w("drawer",`
 line-height: var(--n-line-height);
 position: absolute;
 pointer-events: all;
 box-shadow: var(--n-box-shadow);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background-color: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 `,[Sr(),_r(),Ir(),Tr(),te("native-scrollbar",[w("drawer-content-wrapper",`
 overflow: auto;
 height: 100%;
 `)]),w("drawer-content-wrapper",`
 box-sizing: border-box;
 `),w("drawer-content",`
 height: 100%;
 display: flex;
 flex-direction: column;
 `,[te("native-scrollbar",[w("drawer-body-content-wrapper",`
 height: 100%;
 overflow: auto;
 `)]),w("drawer-body",`
 flex: 1 0 0;
 overflow: hidden;
 `),w("drawer-body-content-wrapper",`
 box-sizing: border-box;
 padding: var(--n-body-padding);
 `),w("drawer-header",`
 font-weight: var(--n-title-font-weight);
 line-height: 1;
 font-size: var(--n-title-font-size);
 color: var(--n-title-text-color);
 padding: var(--n-header-padding);
 transition: border .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-divider-color);
 border-bottom: var(--n-header-border-bottom);
 display: flex;
 justify-content: space-between;
 align-items: center;
 `,[O("close",`
 transition: color .3s var(--n-bezier);
 font-size: var(--n-close-size);
 `)]),w("drawer-footer",`
 display: flex;
 justify-content: flex-end;
 border-top: var(--n-footer-border-top);
 transition: border .3s var(--n-bezier);
 padding: var(--n-footer-padding);
 `)]),te("right-placement",`
 top: 0;
 bottom: 0;
 right: 0;
 `),te("left-placement",`
 top: 0;
 bottom: 0;
 left: 0;
 `),te("top-placement",`
 top: 0;
 left: 0;
 right: 0;
 `),te("bottom-placement",`
 left: 0;
 bottom: 0;
 right: 0;
 `)]),b("body",[b(">",[w("drawer-container",{position:"fixed"})])]),w("drawer-container",`
 position: relative;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 `,[b("> *",{pointerEvents:"all"})]),w("drawer-mask",`
 background-color: rgba(0, 0, 0, .3);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[bn({enterDuration:"0.2s",leaveDuration:"0.2s",enterCubicBezier:"var(--n-bezier-in)",leaveCubicBezier:"var(--n-bezier-out)"})])]);const Ur=Object.assign(Object.assign({},Se.props),{show:Boolean,width:{type:[Number,String],default:251},height:{type:[Number,String],default:251},placement:{type:String,default:"right"},maskClosable:{type:Boolean,default:!0},to:[String,Object],displayDirective:{type:String,default:"if"},nativeScrollbar:{type:Boolean,default:!0},zIndex:Number,onMaskClick:Function,scrollbarProps:Object,contentStyle:[Object,String],trapFocus:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,drawerStyle:[String,Object],drawerClass:String,target:null,onShow:Function,onHide:Function});var Dr=U({name:"Drawer",inheritAttrs:!1,props:Ur,setup(r){const{mergedClsPrefixRef:e,namespaceRef:t,inlineThemeDisabled:n}=Ne(r),i=Ct(),o=Se("Drawer","-drawer",Pr,vn,r,e),s=E(()=>{const{placement:k}=r;if(k==="top"||k==="bottom")return"";const{width:y}=r;return pt(y)}),l=E(()=>{const{placement:k}=r;if(k==="left"||k==="right")return"";const{height:y}=r;return pt(y)}),c=E(()=>[{width:s.value,height:l.value},r.drawerStyle]);function f(k){const{onMaskClick:y,maskClosable:z}=r;z&&$(!1),y&&y(k)}function d(){var k;(k=r.onEsc)===null||k===void 0||k.call(r),r.closeOnEsc&&$(!1)}function $(k){const{onHide:y,onUpdateShow:z,"onUpdate:show":x}=r;z&&me(z,k),x&&me(x,k),y&&!k&&me(y,k)}Re(ot,{isMountedRef:i,mergedThemeRef:o,mergedClsPrefixRef:e,doUpdateShow:$});const m=E(()=>{const{common:{cubicBezierEaseInOut:k,cubicBezierEaseIn:y,cubicBezierEaseOut:z},self:{color:x,textColor:S,boxShadow:D,lineHeight:N,headerPadding:H,footerPadding:R,bodyPadding:Y,titleFontSize:A,titleTextColor:F,titleFontWeight:Z,headerBorderBottom:oe,footerBorderTop:W,closeColor:K,closeColorHover:G,closeColorPressed:L,closeSize:de}}=o.value;return{"--n-line-height":N,"--n-color":x,"--n-text-color":S,"--n-box-shadow":D,"--n-bezier":k,"--n-bezier-out":z,"--n-bezier-in":y,"--n-header-padding":H,"--n-body-padding":Y,"--n-footer-padding":R,"--n-title-text-color":F,"--n-title-font-size":A,"--n-title-font-weight":Z,"--n-header-border-bottom":oe,"--n-footer-border-top":W,"--n-close-color":K,"--n-close-color-hover":G,"--n-close-color-pressed":L,"--n-close-size":de}}),h=n?rt("drawer",void 0,m,r):void 0;return{mergedClsPrefix:e,namespace:t,mergedBodyStyle:c,handleMaskClick:f,handleEsc:d,mergedTheme:o,cssVars:n?void 0:m,themeClass:h?.themeClass,onRender:h?.onRender,isMounted:i}},render(){const{mergedClsPrefix:r}=this;return a(xn,{to:this.to,show:this.show},{default:()=>{var e;return(e=this.onRender)===null||e===void 0||e.call(this),Ve(a("div",{class:[`${r}-drawer-container`,this.namespace,this.themeClass],style:this.cssVars,role:"none"},a(it,{name:"fade-in-transition",appear:this.isMounted},{default:()=>this.show?a("div",{"aria-hidden":!0,class:`${r}-drawer-mask`,onClick:this.handleMaskClick}):null}),a(kr,Object.assign({},this.$attrs,{class:[this.drawerClass,this.$attrs.class],style:[this.mergedBodyStyle,this.$attrs.style],contentStyle:this.contentStyle,placement:this.placement,scrollbarProps:this.scrollbarProps,show:this.show,displayDirective:this.displayDirective,nativeScrollbar:this.nativeScrollbar,onAfterEnter:this.onAfterEnter,onAfterLeave:this.onAfterLeave,trapFocus:this.trapFocus,autoFocus:this.autoFocus,onEsc:this.handleEsc}),this.$slots)),[[wn,{zIndex:this.zIndex,enabled:this.show}]])}})}});const jr={title:{type:String},headerStyle:[Object,String],footerStyle:[Object,String],bodyStyle:[Object,String],bodyContentStyle:[Object,String],nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,closable:Boolean};var Fr=U({name:"DrawerContent",props:jr,setup(){const r=Be(ot,null);r||kn("drawer-content","`n-drawer-content` must be placed inside `n-drawer`.");const{doUpdateShow:e}=r;function t(){e(!1)}return{handleCloseClick:t,mergedTheme:r.mergedThemeRef,mergedClsPrefix:r.mergedClsPrefixRef}},render(){const{title:r,mergedClsPrefix:e,nativeScrollbar:t,mergedTheme:n,bodyStyle:i,bodyContentStyle:o,headerStyle:s,footerStyle:l,scrollbarProps:c,closable:f,$slots:d}=this;return a("div",{role:"none",class:[`${e}-drawer-content`,t&&`${e}-drawer-content--native-scrollbar`]},d.header||r||f?a("div",{class:`${e}-drawer-header`,style:s,role:"none"},a("div",{class:`${e}-drawer-header__main`,role:"heading","aria-level":"1"},d.header!==void 0?d.header():r),f&&a(yn,{onClick:this.handleCloseClick,clsPrefix:e,class:`${e}-drawer-header__close`})):null,t?a("div",{class:`${e}-drawer-body`,style:i,role:"none"},a("div",{class:`${e}-drawer-body-content-wrapper`,style:o,role:"none"},d)):a(_t,Object.assign({themeOverrides:n.peerOverrides.Scrollbar,theme:n.peers.Scrollbar},c,{class:`${e}-drawer-body`,contentClass:`${e}-drawer-body-content-wrapper`,contentStyle:o}),d),d.footer?a("div",{class:`${e}-drawer-footer`,style:l,role:"none"},d.footer()):null)}});const Mr={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Vr=st("path",{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z",fill:"currentColor"},null,-1),Or=st("path",{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7c-21.2 8.1-39.2 22.3-52.1 40.9c-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0 1 30.9-44.8c59-22.7 97.1-74.7 97.1-132.5c.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1 0 80 0a40 40 0 1 0-80 0z",fill:"currentColor"},null,-1),Nr=[Vr,Or];var qr=U({name:"QuestionCircleOutlined",render:function(e,t){return Rt(),At("svg",Mr,Nr)}}),Et={};Object.defineProperty(Et,"__esModule",{value:!0});const Fe=$n,Lr={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 448 512"},Hr=(0,Fe.createElementVNode)("path",{d:"M446.2 270.4c-6.2-19-26.9-29.1-46-22.9l-45.4 15.1l-30.3-90l45.4-15.1c19.1-6.2 29.1-26.8 23-45.9c-6.2-19-26.9-29.1-46-22.9l-45.4 15.1l-15.7-47c-6.2-19-26.9-29.1-46-22.9c-19.1 6.2-29.1 26.8-23 45.9l15.7 47l-93.4 31.2l-15.7-47c-6.2-19-26.9-29.1-46-22.9c-19.1 6.2-29.1 26.8-23 45.9l15.7 47l-45.3 15c-19.1 6.2-29.1 26.8-23 45.9c5 14.5 19.1 24 33.6 24.6c6.8 1 12-1.6 57.7-16.8l30.3 90L78 354.8c-19 6.2-29.1 26.9-23 45.9c5 14.5 19.1 24 33.6 24.6c6.8 1 12-1.6 57.7-16.8l15.7 47c5.9 16.9 24.7 29 46 22.9c19.1-6.2 29.1-26.8 23-45.9l-15.7-47l93.6-31.3l15.7 47c5.9 16.9 24.7 29 46 22.9c19.1-6.2 29.1-26.8 23-45.9l-15.7-47l45.4-15.1c19-6 29.1-26.7 22.9-45.7zm-254.1 47.2l-30.3-90.2l93.5-31.3l30.3 90.2l-93.5 31.3z",fill:"currentColor"},null,-1),Zr=[Hr];var Qr=Et.default=(0,Fe.defineComponent)({name:"SlackHash",render:function(e,t){return(0,Fe.openBlock)(),(0,Fe.createElementBlock)("svg",Lr,Zr)}});const Xr={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Yr=st("path",{d:"M496 384H160v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h80v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h336c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160h-80v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h336v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h80c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160H288V48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16C7.2 64 0 71.2 0 80v32c0 8.8 7.2 16 16 16h208v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h208c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16z",fill:"currentColor"},null,-1),Wr=[Yr];var Ii=U({name:"SlidersH",render:function(e,t){return Rt(),At("svg",Xr,Wr)}});function Kr(r){const e=document.createElement("canvas"),t=e.getContext("2d");e.width=1,e.height=1,t.drawImage(r,0,0,1,1);const n=t.getImageData(0,0,1,1).data;return"#"+((1<<24)+(n[0]<<16)+(n[1]<<8)+n[2]).toString(16).slice(1)}function Tt(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let Ce=Tt();function Gr(r){Ce=r}const Jr=/[&<>"']/,ei=/[&<>"']/g,ti=/[<>"']|&(?!#?\w+;)/,ni=/[<>"']|&(?!#?\w+;)/g,ri={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},bt=r=>ri[r];function M(r,e){if(e){if(Jr.test(r))return r.replace(ei,bt)}else if(ti.test(r))return r.replace(ni,bt);return r}const ii=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function Pt(r){return r.replace(ii,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const oi=/(^|[^\[])\^/g;function _(r,e){r=typeof r=="string"?r:r.source,e=e||"";const t={replace:(n,i)=>(i=i.source||i,i=i.replace(oi,"$1"),r=r.replace(n,i),t),getRegex:()=>new RegExp(r,e)};return t}const si=/[^\w:]/g,li=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function xt(r,e,t){if(r){let n;try{n=decodeURIComponent(Pt(t)).replace(si,"").toLowerCase()}catch{return null}if(n.indexOf("javascript:")===0||n.indexOf("vbscript:")===0||n.indexOf("data:")===0)return null}e&&!li.test(t)&&(t=di(e,t));try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const Ue={},ai=/^[^:]+:\/*[^/]*$/,ci=/^([^:]+:)[\s\S]*$/,ui=/^([^:]+:\/*[^/]*)[\s\S]*$/;function di(r,e){Ue[" "+r]||(ai.test(r)?Ue[" "+r]=r+"/":Ue[" "+r]=Me(r,"/",!0)),r=Ue[" "+r];const t=r.indexOf(":")===-1;return e.substring(0,2)==="//"?t?e:r.replace(ci,"$1")+e:e.charAt(0)==="/"?t?e:r.replace(ui,"$1")+e:r+e}const Oe={exec:function(){}};function X(r){let e=1,t,n;for(;e<arguments.length;e++){t=arguments[e];for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r}function vt(r,e){const t=r.replace(/\|/g,(o,s,l)=>{let c=!1,f=s;for(;--f>=0&&l[f]==="\\";)c=!c;return c?"|":" |"}),n=t.split(/ \|/);let i=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;i<n.length;i++)n[i]=n[i].trim().replace(/\\\|/g,"|");return n}function Me(r,e,t){const n=r.length;if(n===0)return"";let i=0;for(;i<n;){const o=r.charAt(n-i-1);if(o===e&&!t)i++;else if(o!==e&&t)i++;else break}return r.slice(0,n-i)}function hi(r,e){if(r.indexOf(e[1])===-1)return-1;const t=r.length;let n=0,i=0;for(;i<t;i++)if(r[i]==="\\")i++;else if(r[i]===e[0])n++;else if(r[i]===e[1]&&(n--,n<0))return i;return-1}function Ut(r){r&&r.sanitize&&!r.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function wt(r,e){if(e<1)return"";let t="";for(;e>1;)e&1&&(t+=r),e>>=1,r+=r;return t+r}function kt(r,e,t,n){const i=e.href,o=e.title?M(e.title):null,s=r[1].replace(/\\([\[\]])/g,"$1");if(r[0].charAt(0)!=="!"){n.state.inLink=!0;const l={type:"link",raw:t,href:i,title:o,text:s,tokens:n.inlineTokens(s,[])};return n.state.inLink=!1,l}else return{type:"image",raw:t,href:i,title:o,text:M(s)}}function pi(r,e){const t=r.match(/^(\s+)(?:```)/);if(t===null)return e;const n=t[1];return e.split(`
`).map(i=>{const o=i.match(/^\s+/);if(o===null)return i;const[s]=o;return s.length>=n.length?i.slice(n.length):i}).join(`
`)}class at{constructor(e){this.options=e||Ce}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const n=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:Me(n,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const n=t[0],i=pi(n,t[3]||"");return{type:"code",raw:n,lang:t[2]?t[2].trim():t[2],text:i}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(/#$/.test(n)){const o=Me(n,"#");(this.options.pedantic||!o||/ $/.test(o))&&(n=o.trim())}const i={type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:[]};return this.lexer.inline(i.text,i.tokens),i}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const n=t[0].replace(/^ *>[ \t]?/gm,"");return{type:"blockquote",raw:t[0],tokens:this.lexer.blockTokens(n,[]),text:n}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n,i,o,s,l,c,f,d,$,m,h,k,y=t[1].trim();const z=y.length>1,x={type:"list",raw:"",ordered:z,start:z?+y.slice(0,-1):"",loose:!1,items:[]};y=z?`\\d{1,9}\\${y.slice(-1)}`:`\\${y}`,this.options.pedantic&&(y=z?y:"[*+-]");const S=new RegExp(`^( {0,3}${y})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;e&&(k=!1,!(!(t=S.exec(e))||this.rules.block.hr.test(e)));){if(n=t[0],e=e.substring(n.length),d=t[2].split(`
`,1)[0],$=e.split(`
`,1)[0],this.options.pedantic?(s=2,h=d.trimLeft()):(s=t[2].search(/[^ ]/),s=s>4?1:s,h=d.slice(s),s+=t[1].length),c=!1,!d&&/^ *$/.test($)&&(n+=$+`
`,e=e.substring($.length+1),k=!0),!k){const N=new RegExp(`^ {0,${Math.min(3,s-1)}}(?:[*+-]|\\d{1,9}[.)])`);for(;e&&(m=e.split(`
`,1)[0],d=m,this.options.pedantic&&(d=d.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!N.test(d));){if(d.search(/[^ ]/)>=s||!d.trim())h+=`
`+d.slice(s);else if(!c)h+=`
`+d;else break;!c&&!d.trim()&&(c=!0),n+=m+`
`,e=e.substring(m.length+1)}}x.loose||(f?x.loose=!0:/\n *\n *$/.test(n)&&(f=!0)),this.options.gfm&&(i=/^\[[ xX]\] /.exec(h),i&&(o=i[0]!=="[ ] ",h=h.replace(/^\[[ xX]\] +/,""))),x.items.push({type:"list_item",raw:n,task:!!i,checked:o,loose:!1,text:h}),x.raw+=n}x.items[x.items.length-1].raw=n.trimRight(),x.items[x.items.length-1].text=h.trimRight(),x.raw=x.raw.trimRight();const D=x.items.length;for(l=0;l<D;l++){this.lexer.state.top=!1,x.items[l].tokens=this.lexer.blockTokens(x.items[l].text,[]);const N=x.items[l].tokens.filter(R=>R.type==="space"),H=N.every(R=>{const Y=R.raw.split("");let A=0;for(const F of Y)if(F===`
`&&(A+=1),A>1)return!0;return!1});!x.loose&&N.length&&H&&(x.loose=!0,x.items[l].loose=!0)}return x}}html(e){const t=this.rules.block.html.exec(e);if(t){const n={type:"html",raw:t[0],pre:!this.options.sanitizer&&(t[1]==="pre"||t[1]==="script"||t[1]==="style"),text:t[0]};return this.options.sanitize&&(n.type="paragraph",n.text=this.options.sanitizer?this.options.sanitizer(t[0]):M(t[0]),n.tokens=[],this.lexer.inline(n.text,n.tokens)),n}}def(e){const t=this.rules.block.def.exec(e);if(t){t[3]&&(t[3]=t[3].substring(1,t[3].length-1));const n=t[1].toLowerCase().replace(/\s+/g," ");return{type:"def",tag:n,raw:t[0],href:t[2],title:t[3]}}}table(e){const t=this.rules.block.table.exec(e);if(t){const n={type:"table",header:vt(t[1]).map(i=>({text:i})),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(n.header.length===n.align.length){n.raw=t[0];let i=n.align.length,o,s,l,c;for(o=0;o<i;o++)/^ *-+: *$/.test(n.align[o])?n.align[o]="right":/^ *:-+: *$/.test(n.align[o])?n.align[o]="center":/^ *:-+ *$/.test(n.align[o])?n.align[o]="left":n.align[o]=null;for(i=n.rows.length,o=0;o<i;o++)n.rows[o]=vt(n.rows[o],n.header.length).map(f=>({text:f}));for(i=n.header.length,s=0;s<i;s++)n.header[s].tokens=[],this.lexer.inlineTokens(n.header[s].text,n.header[s].tokens);for(i=n.rows.length,s=0;s<i;s++)for(c=n.rows[s],l=0;l<c.length;l++)c[l].tokens=[],this.lexer.inlineTokens(c[l].text,c[l].tokens);return n}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t){const n={type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:[]};return this.lexer.inline(n.text,n.tokens),n}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const n={type:"paragraph",raw:t[0],text:t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1],tokens:[]};return this.lexer.inline(n.text,n.tokens),n}}text(e){const t=this.rules.block.text.exec(e);if(t){const n={type:"text",raw:t[0],text:t[0],tokens:[]};return this.lexer.inline(n.text,n.tokens),n}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:M(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):M(t[0]):t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const n=t[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const s=Me(n.slice(0,-1),"\\");if((n.length-s.length)%2===0)return}else{const s=hi(t[2],"()");if(s>-1){const c=(t[0].indexOf("!")===0?5:4)+t[1].length+s;t[2]=t[2].substring(0,s),t[0]=t[0].substring(0,c).trim(),t[3]=""}}let i=t[2],o="";if(this.options.pedantic){const s=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);s&&(i=s[1],o=s[3])}else o=t[3]?t[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(n)?i=i.slice(1):i=i.slice(1,-1)),kt(t,{href:i&&i.replace(this.rules.inline._escapes,"$1"),title:o&&o.replace(this.rules.inline._escapes,"$1")},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let i=(n[2]||n[1]).replace(/\s+/g," ");if(i=t[i.toLowerCase()],!i||!i.href){const o=n[0].charAt(0);return{type:"text",raw:o,text:o}}return kt(n,i,n[0],this.lexer)}}emStrong(e,t,n=""){let i=this.rules.inline.emStrong.lDelim.exec(e);if(!i||i[3]&&n.match(/[\p{L}\p{N}]/u))return;const o=i[1]||i[2]||"";if(!o||o&&(n===""||this.rules.inline.punctuation.exec(n))){const s=i[0].length-1;let l,c,f=s,d=0;const $=i[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for($.lastIndex=0,t=t.slice(-1*e.length+s);(i=$.exec(t))!=null;){if(l=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!l)continue;if(c=l.length,i[3]||i[4]){f+=c;continue}else if((i[5]||i[6])&&s%3&&!((s+c)%3)){d+=c;continue}if(f-=c,f>0)continue;if(c=Math.min(c,c+f+d),Math.min(s,c)%2){const h=e.slice(1,s+i.index+c);return{type:"em",raw:e.slice(0,s+i.index+c+1),text:h,tokens:this.lexer.inlineTokens(h,[])}}const m=e.slice(2,s+i.index+c-1);return{type:"strong",raw:e.slice(0,s+i.index+c+1),text:m,tokens:this.lexer.inlineTokens(m,[])}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(/\n/g," ");const i=/[^ ]/.test(n),o=/^ /.test(n)&&/ $/.test(n);return i&&o&&(n=n.substring(1,n.length-1)),n=M(n,!0),{type:"codespan",raw:t[0],text:n}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2],[])}}autolink(e,t){const n=this.rules.inline.autolink.exec(e);if(n){let i,o;return n[2]==="@"?(i=M(this.options.mangle?t(n[1]):n[1]),o="mailto:"+i):(i=M(n[1]),o=i),{type:"link",raw:n[0],text:i,href:o,tokens:[{type:"text",raw:i,text:i}]}}}url(e,t){let n;if(n=this.rules.inline.url.exec(e)){let i,o;if(n[2]==="@")i=M(this.options.mangle?t(n[0]):n[0]),o="mailto:"+i;else{let s;do s=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0];while(s!==n[0]);i=M(n[0]),n[1]==="www."?o="http://"+i:o=i}return{type:"link",raw:n[0],text:i,href:o,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(e,t){const n=this.rules.inline.text.exec(e);if(n){let i;return this.lexer.state.inRawBlock?i=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):M(n[0]):n[0]:i=M(this.options.smartypants?t(n[0]):n[0]),{type:"text",raw:n[0],text:i}}}}const g={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:Oe,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};g._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;g._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;g.def=_(g.def).replace("label",g._label).replace("title",g._title).getRegex();g.bullet=/(?:[*+-]|\d{1,9}[.)])/;g.listItemStart=_(/^( *)(bull) */).replace("bull",g.bullet).getRegex();g.list=_(g.list).replace(/bull/g,g.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+g.def.source+")").getRegex();g._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";g._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;g.html=_(g.html,"i").replace("comment",g._comment).replace("tag",g._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();g.paragraph=_(g._paragraph).replace("hr",g.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",g._tag).getRegex();g.blockquote=_(g.blockquote).replace("paragraph",g.paragraph).getRegex();g.normal=X({},g);g.gfm=X({},g.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"});g.gfm.table=_(g.gfm.table).replace("hr",g.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",g._tag).getRegex();g.gfm.paragraph=_(g._paragraph).replace("hr",g.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",g.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",g._tag).getRegex();g.pedantic=X({},g.normal,{html:_(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",g._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Oe,paragraph:_(g.normal._paragraph).replace("hr",g.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",g.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const p={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:Oe,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:Oe,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};p._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";p.punctuation=_(p.punctuation).replace(/punctuation/g,p._punctuation).getRegex();p.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;p.escapedEmSt=/\\\*|\\_/g;p._comment=_(g._comment).replace("(?:-->|$)","-->").getRegex();p.emStrong.lDelim=_(p.emStrong.lDelim).replace(/punct/g,p._punctuation).getRegex();p.emStrong.rDelimAst=_(p.emStrong.rDelimAst,"g").replace(/punct/g,p._punctuation).getRegex();p.emStrong.rDelimUnd=_(p.emStrong.rDelimUnd,"g").replace(/punct/g,p._punctuation).getRegex();p._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;p._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;p._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;p.autolink=_(p.autolink).replace("scheme",p._scheme).replace("email",p._email).getRegex();p._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;p.tag=_(p.tag).replace("comment",p._comment).replace("attribute",p._attribute).getRegex();p._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;p._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;p._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;p.link=_(p.link).replace("label",p._label).replace("href",p._href).replace("title",p._title).getRegex();p.reflink=_(p.reflink).replace("label",p._label).replace("ref",g._label).getRegex();p.nolink=_(p.nolink).replace("ref",g._label).getRegex();p.reflinkSearch=_(p.reflinkSearch,"g").replace("reflink",p.reflink).replace("nolink",p.nolink).getRegex();p.normal=X({},p);p.pedantic=X({},p.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:_(/^!?\[(label)\]\((.*?)\)/).replace("label",p._label).getRegex(),reflink:_(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",p._label).getRegex()});p.gfm=X({},p.normal,{escape:_(p.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/});p.gfm.url=_(p.gfm.url,"i").replace("email",p.gfm._extended_email).getRegex();p.breaks=X({},p.gfm,{br:_(p.br).replace("{2,}","*").getRegex(),text:_(p.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});function fi(r){return r.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201C").replace(/"/g,"\u201D").replace(/\.{3}/g,"\u2026")}function yt(r){let e="",t,n;const i=r.length;for(t=0;t<i;t++)n=r.charCodeAt(t),Math.random()>.5&&(n="x"+n.toString(16)),e+="&#"+n+";";return e}class re{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Ce,this.options.tokenizer=this.options.tokenizer||new at,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:g.normal,inline:p.normal};this.options.pedantic?(t.block=g.pedantic,t.inline=p.pedantic):this.options.gfm&&(t.block=g.gfm,this.options.breaks?t.inline=p.breaks:t.inline=p.gfm),this.tokenizer.rules=t}static get rules(){return{block:g,inline:p}}static lex(e,t){return new re(t).lex(e)}static lexInline(e,t){return new re(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);let t;for(;t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(l,c,f)=>c+"    ".repeat(f.length));let n,i,o,s;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(l=>(n=l.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.space(e)){e=e.substring(n.raw.length),n.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(n);continue}if(n=this.tokenizer.code(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n);continue}if(n=this.tokenizer.fences(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.heading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.hr(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.blockquote(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.list(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.html(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.def(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+n.raw,i.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});continue}if(n=this.tokenizer.table(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.lheading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(o=e,this.options.extensions&&this.options.extensions.startBlock){let l=1/0;const c=e.slice(1);let f;this.options.extensions.startBlock.forEach(function(d){f=d.call({lexer:this},c),typeof f=="number"&&f>=0&&(l=Math.min(l,f))}),l<1/0&&l>=0&&(o=e.substring(0,l+1))}if(this.state.top&&(n=this.tokenizer.paragraph(o))){i=t[t.length-1],s&&i.type==="paragraph"?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n),s=o.length!==e.length,e=e.substring(n.raw.length);continue}if(n=this.tokenizer.text(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&i.type==="text"?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n);continue}if(e){const l="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return this.state.top=!0,t}inline(e,t){this.inlineQueue.push({src:e,tokens:t})}inlineTokens(e,t=[]){let n,i,o,s=e,l,c,f;if(this.tokens.links){const d=Object.keys(this.tokens.links);if(d.length>0)for(;(l=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)d.includes(l[0].slice(l[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,l.index)+"["+wt("a",l[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(l=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)s=s.slice(0,l.index)+"["+wt("a",l[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(l=this.tokenizer.rules.inline.escapedEmSt.exec(s))!=null;)s=s.slice(0,l.index)+"++"+s.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;)if(c||(f=""),c=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(d=>(n=d.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.escape(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.tag(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&n.type==="text"&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(n=this.tokenizer.link(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(n.raw.length),i=t[t.length-1],i&&n.type==="text"&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(n=this.tokenizer.emStrong(e,s,f)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.codespan(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.br(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.del(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.autolink(e,yt)){e=e.substring(n.raw.length),t.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(e,yt))){e=e.substring(n.raw.length),t.push(n);continue}if(o=e,this.options.extensions&&this.options.extensions.startInline){let d=1/0;const $=e.slice(1);let m;this.options.extensions.startInline.forEach(function(h){m=h.call({lexer:this},$),typeof m=="number"&&m>=0&&(d=Math.min(d,m))}),d<1/0&&d>=0&&(o=e.substring(0,d+1))}if(n=this.tokenizer.inlineText(o,fi)){e=e.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(f=n.raw.slice(-1)),c=!0,i=t[t.length-1],i&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(e){const d="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(d);break}else throw new Error(d)}}return t}}class ct{constructor(e){this.options=e||Ce}code(e,t,n){const i=(t||"").match(/\S*/)[0];if(this.options.highlight){const o=this.options.highlight(e,i);o!=null&&o!==e&&(n=!0,e=o)}return e=e.replace(/\n$/,"")+`
`,i?'<pre><code class="'+this.options.langPrefix+M(i,!0)+'">'+(n?e:M(e,!0))+`</code></pre>
`:"<pre><code>"+(n?e:M(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e){return e}heading(e,t,n,i){if(this.options.headerIds){const o=this.options.headerPrefix+i.slug(n);return`<h${t} id="${o}">${e}</h${t}>
`}return`<h${t}>${e}</h${t}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(e,t,n){const i=t?"ol":"ul",o=t&&n!==1?' start="'+n+'"':"";return"<"+i+o+`>
`+e+"</"+i+`>
`}listitem(e){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return`<p>${e}</p>
`}table(e,t){return t&&(t=`<tbody>${t}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+t+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,t){const n=t.header?"th":"td";return(t.align?`<${n} align="${t.align}">`:`<${n}>`)+e+`</${n}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,t,n){if(e=xt(this.options.sanitize,this.options.baseUrl,e),e===null)return n;let i='<a href="'+M(e)+'"';return t&&(i+=' title="'+t+'"'),i+=">"+n+"</a>",i}image(e,t,n){if(e=xt(this.options.sanitize,this.options.baseUrl,e),e===null)return n;let i=`<img src="${e}" alt="${n}"`;return t&&(i+=` title="${t}"`),i+=this.options.xhtml?"/>":">",i}text(e){return e}}class Dt{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}}class jt{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,t){let n=e,i=0;if(this.seen.hasOwnProperty(n)){i=this.seen[e];do i++,n=e+"-"+i;while(this.seen.hasOwnProperty(n))}return t||(this.seen[e]=i,this.seen[n]=0),n}slug(e,t={}){const n=this.serialize(e);return this.getNextSafeSlug(n,t.dryrun)}}class ie{constructor(e){this.options=e||Ce,this.options.renderer=this.options.renderer||new ct,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Dt,this.slugger=new jt}static parse(e,t){return new ie(t).parse(e)}static parseInline(e,t){return new ie(t).parseInline(e)}parse(e,t=!0){let n="",i,o,s,l,c,f,d,$,m,h,k,y,z,x,S,D,N,H,R;const Y=e.length;for(i=0;i<Y;i++){if(h=e[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[h.type]&&(R=this.options.extensions.renderers[h.type].call({parser:this},h),R!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(h.type))){n+=R||"";continue}switch(h.type){case"space":continue;case"hr":{n+=this.renderer.hr();continue}case"heading":{n+=this.renderer.heading(this.parseInline(h.tokens),h.depth,Pt(this.parseInline(h.tokens,this.textRenderer)),this.slugger);continue}case"code":{n+=this.renderer.code(h.text,h.lang,h.escaped);continue}case"table":{for($="",d="",l=h.header.length,o=0;o<l;o++)d+=this.renderer.tablecell(this.parseInline(h.header[o].tokens),{header:!0,align:h.align[o]});for($+=this.renderer.tablerow(d),m="",l=h.rows.length,o=0;o<l;o++){for(f=h.rows[o],d="",c=f.length,s=0;s<c;s++)d+=this.renderer.tablecell(this.parseInline(f[s].tokens),{header:!1,align:h.align[s]});m+=this.renderer.tablerow(d)}n+=this.renderer.table($,m);continue}case"blockquote":{m=this.parse(h.tokens),n+=this.renderer.blockquote(m);continue}case"list":{for(k=h.ordered,y=h.start,z=h.loose,l=h.items.length,m="",o=0;o<l;o++)S=h.items[o],D=S.checked,N=S.task,x="",S.task&&(H=this.renderer.checkbox(D),z?S.tokens.length>0&&S.tokens[0].type==="paragraph"?(S.tokens[0].text=H+" "+S.tokens[0].text,S.tokens[0].tokens&&S.tokens[0].tokens.length>0&&S.tokens[0].tokens[0].type==="text"&&(S.tokens[0].tokens[0].text=H+" "+S.tokens[0].tokens[0].text)):S.tokens.unshift({type:"text",text:H}):x+=H),x+=this.parse(S.tokens,z),m+=this.renderer.listitem(x,N,D);n+=this.renderer.list(m,k,y);continue}case"html":{n+=this.renderer.html(h.text);continue}case"paragraph":{n+=this.renderer.paragraph(this.parseInline(h.tokens));continue}case"text":{for(m=h.tokens?this.parseInline(h.tokens):h.text;i+1<Y&&e[i+1].type==="text";)h=e[++i],m+=`
`+(h.tokens?this.parseInline(h.tokens):h.text);n+=t?this.renderer.paragraph(m):m;continue}default:{const A='Token with "'+h.type+'" type was not found.';if(this.options.silent){console.error(A);return}else throw new Error(A)}}}return n}parseInline(e,t){t=t||this.renderer;let n="",i,o,s;const l=e.length;for(i=0;i<l;i++){if(o=e[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]&&(s=this.options.extensions.renderers[o.type].call({parser:this},o),s!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type))){n+=s||"";continue}switch(o.type){case"escape":{n+=t.text(o.text);break}case"html":{n+=t.html(o.text);break}case"link":{n+=t.link(o.href,o.title,this.parseInline(o.tokens,t));break}case"image":{n+=t.image(o.href,o.title,o.text);break}case"strong":{n+=t.strong(this.parseInline(o.tokens,t));break}case"em":{n+=t.em(this.parseInline(o.tokens,t));break}case"codespan":{n+=t.codespan(o.text);break}case"br":{n+=t.br();break}case"del":{n+=t.del(this.parseInline(o.tokens,t));break}case"text":{n+=t.text(o.text);break}default:{const c='Token with "'+o.type+'" type was not found.';if(this.options.silent){console.error(c);return}else throw new Error(c)}}}return n}}function v(r,e,t){if(typeof r>"u"||r===null)throw new Error("marked(): input parameter is undefined or null");if(typeof r!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected");if(typeof e=="function"&&(t=e,e=null),e=X({},v.defaults,e||{}),Ut(e),t){const n=e.highlight;let i;try{i=re.lex(r,e)}catch(l){return t(l)}const o=function(l){let c;if(!l)try{e.walkTokens&&v.walkTokens(i,e.walkTokens),c=ie.parse(i,e)}catch(f){l=f}return e.highlight=n,l?t(l):t(null,c)};if(!n||n.length<3||(delete e.highlight,!i.length))return o();let s=0;v.walkTokens(i,function(l){l.type==="code"&&(s++,setTimeout(()=>{n(l.text,l.lang,function(c,f){if(c)return o(c);f!=null&&f!==l.text&&(l.text=f,l.escaped=!0),s--,s===0&&o()})},0))}),s===0&&o();return}try{const n=re.lex(r,e);return e.walkTokens&&v.walkTokens(n,e.walkTokens),ie.parse(n,e)}catch(n){if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+M(n.message+"",!0)+"</pre>";throw n}}v.options=v.setOptions=function(r){return X(v.defaults,r),Gr(v.defaults),v};v.getDefaults=Tt;v.defaults=Ce;v.use=function(...r){const e=X({},...r),t=v.defaults.extensions||{renderers:{},childTokens:{}};let n;r.forEach(i=>{if(i.extensions&&(n=!0,i.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if(o.renderer){const s=t.renderers?t.renderers[o.name]:null;s?t.renderers[o.name]=function(...l){let c=o.renderer.apply(this,l);return c===!1&&(c=s.apply(this,l)),c}:t.renderers[o.name]=o.renderer}if(o.tokenizer){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");t[o.level]?t[o.level].unshift(o.tokenizer):t[o.level]=[o.tokenizer],o.start&&(o.level==="block"?t.startBlock?t.startBlock.push(o.start):t.startBlock=[o.start]:o.level==="inline"&&(t.startInline?t.startInline.push(o.start):t.startInline=[o.start]))}o.childTokens&&(t.childTokens[o.name]=o.childTokens)})),i.renderer){const o=v.defaults.renderer||new ct;for(const s in i.renderer){const l=o[s];o[s]=(...c)=>{let f=i.renderer[s].apply(o,c);return f===!1&&(f=l.apply(o,c)),f}}e.renderer=o}if(i.tokenizer){const o=v.defaults.tokenizer||new at;for(const s in i.tokenizer){const l=o[s];o[s]=(...c)=>{let f=i.tokenizer[s].apply(o,c);return f===!1&&(f=l.apply(o,c)),f}}e.tokenizer=o}if(i.walkTokens){const o=v.defaults.walkTokens;e.walkTokens=function(s){i.walkTokens.call(this,s),o&&o.call(this,s)}}n&&(e.extensions=t),v.setOptions(e)})};v.walkTokens=function(r,e){for(const t of r)switch(e.call(v,t),t.type){case"table":{for(const n of t.header)v.walkTokens(n.tokens,e);for(const n of t.rows)for(const i of n)v.walkTokens(i.tokens,e);break}case"list":{v.walkTokens(t.items,e);break}default:v.defaults.extensions&&v.defaults.extensions.childTokens&&v.defaults.extensions.childTokens[t.type]?v.defaults.extensions.childTokens[t.type].forEach(function(n){v.walkTokens(t[n],e)}):t.tokens&&v.walkTokens(t.tokens,e)}};v.parseInline=function(r,e){if(typeof r>"u"||r===null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof r!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected");e=X({},v.defaults,e||{}),Ut(e);try{const t=re.lexInline(r,e);return e.walkTokens&&v.walkTokens(t,e.walkTokens),ie.parseInline(t,e)}catch(t){if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+M(t.message+"",!0)+"</pre>";throw t}};v.Parser=ie;v.parser=ie.parse;v.Renderer=ct;v.TextRenderer=Dt;v.Lexer=re;v.lexer=re.lex;v.Tokenizer=at;v.Slugger=jt;v.parse=v;ie.parse;re.lex;const gi=r=>{const e=v.lexer(r),t=new Set;function n(i){if(i.type==="image"){t.add(i.href);return}if(i.tokens&&Array.isArray(i.tokens))return i.tokens.forEach(n)}return e.forEach(n),[...t.values()]},Bi=U({props:{show:{type:Boolean,required:!0},onUpdateShow:{type:Function,required:!0},data:{type:Object,required:!0}},setup(r,{slots:e}){return()=>a(Dr,{show:r.show,width:450,class:"max-w-[90vw]",placement:"right",onUpdateShow:r.onUpdateShow},a(Fr,{title:"\u6587\u7AE0\u8BBE\u5B9A"},a(It,{labelAlign:"right",labelPlacement:"left",labelWidth:100},e.default?.(),a(le,{label:"\u5141\u8BB8\u8BC4\u8BBA"},a(Tn,{value:r.data.allowComment,onUpdateValue:t=>void(r.data.allowComment=t)})),a(le,{label:"\u56FE\u7247\u8BBE\u5B9A"}),a(le,null,a(mi,{text:r.data.text,images:r.data.images,onChange:t=>{r.data.images=t}})))))}}),mi=U({props:{images:{type:Array,required:!0},onChange:{type:Function,required:!0},text:{type:String,required:!0}},setup(r){const e=P(!1),t=E(()=>{const o=new Map;return r.images.forEach(s=>{o.set(s.src,s)}),o}),n=E(()=>r.text?gi(r.text).map(o=>{const s=t.value.get(o);return{src:o,height:s?.height,width:s?.width,type:s?.type,accent:s?.accent}}):r.images),i=async()=>{e.value=!0;try{const o=await Promise.all(n.value.map((s,l)=>new Promise((c,f)=>{const d=new Image;d.src=s.src,d.crossOrigin="Anonymous",d.onload=()=>{c({width:d.naturalWidth,height:d.naturalHeight,src:s.src,type:d.src.split(".").pop()||"",accent:Kr(d)})},d.onerror=$=>{f($)}})));e.value=!1,r.onChange(o)}catch(o){console.error(o)}finally{e.value=!1}};return()=>a("div",{class:"relative w-full flex flex-col flex-grow"},a("div",{class:"flex justify-between space-x-2 items-center pr-4"},a("div",{class:"flex-grow flex-shrink inline-block"},"\u8C03\u6574 Markdown \u4E2D\u5305\u542B\u7684\u56FE\u7247\u4FE1\u606F"),a(ue,{loading:e.value,class:"self-end",round:!0,onClick:i},"\u81EA\u52A8\u4FEE\u6B63")),a(Pn,{accordion:!0,class:"mt-4"},n.value.map((o,s)=>a(Un,{key:o.src,title:a("span",{class:"w-full flex flex-shrink break-all"},o.src)},a(It,{labelPlacement:"left",labelWidth:"100"},a(le,{label:"\u9AD8\u5EA6"},a(gt,{value:o.height,onUpdateValue:l=>{!l||(r.images[s].height=l)}})),a(le,{label:"\u5BBD\u5EA6"},a(gt,{value:o.width,onUpdateValue:l=>{!l||(r.images[s].width=l)}})),a(le,{label:"\u7C7B\u578B"},a(St,{value:o.type||"",onUpdateValue:l=>{!l||(r.images[s].type=l)}})),a(le,{label:"\u4E3B\u8272\u8C03"},a(fr,{value:o.accent||"",onUpdateValue:l=>{!l||(r.images[s].accent=l)}})),a(le,{label:"\u64CD\u4F5C"},a("div",{class:"flex justify-end w-full"},a(Sn,null,a(ue,{round:!0,onClick:()=>{window.open(o.src)},secondary:!0},"\u67E5\u770B"),a(ue,{secondary:!0,round:!0,type:"error",onClick:()=>{r.images.splice(s,1)}},"\u5220\u9664")))))))))}}),bi={type:{type:String},value:{type:String,required:!0},placeholder:{type:String},onChange:{type:Function,required:!0}},xi="_root_1e9b2_1",vi="_group_1e9b2_5",wi="_bar_1e9b2_47";var Xe={root:xi,group:vi,bar:wi};const Ei=U({props:{...bi,label:{type:String,required:!0}},emits:["compositionend","compositionstart"],setup(r,{emit:e}){const t=P();return zt(()=>{!t.value||(t.value.addEventListener("compositionstart",()=>{e("compositionstart")}),t.value.addEventListener("compositionend",()=>{e("compositionend")}))}),()=>a("div",{class:Cn(Xe.root,Xe.group)},a("input",{required:!0,ref:t,type:r.type??"text",value:r.value,onInput:n=>r.onChange(n.target.value)}),a("span",{class:Xe.bar}),a("label",null,r.label))}}),Ti=U({props:{data:{type:Object,required:!0},onHandleYamlParsedMeta:{type:Function,required:!1}},setup(r){const e=P(!1),t=P(""),n=i=>{i=i.trim();const o=/^---\n((.|\n)*?)\n---/.exec(i);if(o?.length){const f=o[1],d=Fn(f);r.onHandleYamlParsedMeta&&r.onHandleYamlParsedMeta(d),i=i.replace(o[0],"")}const l=i.trim().split(`
`),c=l[0].startsWith("#")?l[0].replace(/^#/,"").trim():"";c&&(r.data.title=c,l.shift()),r.data.text=l.join(`
`).trim(),e.value=!1};return()=>a(En,null,a(Dn,{icon:a(Qr,null),variant:"info",onClick:()=>e.value=!0}),a(zn,{transformOrigin:"center",show:e.value,onUpdateShow:i=>e.value=i},a(_n,{class:"modal-card",closable:!0,onClose:()=>e.value=!1},{header(){return a("div",{class:"space-x-4 relative flex items-center"},a(Rn,null,"\u89E3\u6790 Markdown"),a(An,{trigger:"hover",placement:"right"},{default(){return a("div",{class:"max-w-[80ch] overflow-auto"},a(In,null,"\u53EF\u4EE5\u89E3\u6790 Markdown with YAML \u683C\u5F0F\u7684\u6587\u672C\uFF0C\u4F8B\u5982\uFF1A"),a(wr,{code:`---
date: 2021-04-18T09:33:33.271Z
updated: 2021-04-18T09:33:33.267Z
title: \u865A\u62DF\u5217\u8868\u4E0E Scroll Restoration
slug: visualize-list-scroll-restoration
categories: \u7F16\u7A0B
type: post
permalink: posts/visualize-list-scroll-restoration
---


\u865A\u62DF\u5217\u8868\u662F\u4E3A\u4E86\u63D0\u9AD8\u9875\u9762\u6027\u80FD\u800C\u51FA\u73B0\u7684\u3002`}))},trigger(){return a(Bn,null,a(qr,null))}}))},default(){return a(ft,{vertical:!0,size:"large"},a(jn,{class:"h-[70vh]",onChange:i=>void(t.value=i),text:t.value,unSaveConfirm:!1}),a(ft,{justify:"end"},a(ue,{round:!0,type:"primary",onClick:()=>n(t.value)},"\u786E\u5B9A"),a(ue,{onClick:i=>{t.value=""},round:!0},"\u91CD\u7F6E")))}})))}});export{Ei as M,Ti as P,Ii as S,Bi as T,bi as i};
