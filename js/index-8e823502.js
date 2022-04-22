import{L as C,d as L,i as D,N as O,s as R,T as u,t as U,a as c,b as E,l as V,P as j,g as d,c as M,e as P}from"./codemirror-79241bda.js";import"./index-524a5fea.js";import"./use-save-confirm-94f3d490.js";import"./toggle-e8b30ce6.js";import"./use-react-be4c6ebd.js";import"./throttle-6371af48.js";import"./FormItem-5f07fc31.js";import"./Form-88a5f5a7.js";import"./index-ef78730c.js";import"./InputNumber-f05d5864.js";import"./Add-094210b4.js";import"./Switch-e7f8dc87.js";import"./Select-08f12922.js";import"./Tag-3efc0e97.js";function w(a,t,e,n=0,s=0){t==null&&(t=a.search(/[^\s\u00a0]/),t==-1&&(t=a.length));let i=s;for(let r=n;r<t;r++)a.charCodeAt(r)==9?i+=e-i%e:i++;return i}class y{constructor(t,e,n){this.string=t,this.tabSize=e,this.indentUnit=n,this.pos=0,this.start=0,this.lastColumnPos=0,this.lastColumnValue=0}eol(){return this.pos>=this.string.length}sol(){return this.pos==0}peek(){return this.string.charAt(this.pos)||void 0}next(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)}eat(t){let e=this.string.charAt(this.pos),n;if(typeof t=="string"?n=e==t:n=e&&(t instanceof RegExp?t.test(e):t(e)),n)return++this.pos,e}eatWhile(t){let e=this.pos;for(;this.eat(t););return this.pos>e}eatSpace(){let t=this.pos;for(;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;return this.pos>t}skipToEnd(){this.pos=this.string.length}skipTo(t){let e=this.string.indexOf(t,this.pos);if(e>-1)return this.pos=e,!0}backUp(t){this.pos-=t}column(){return this.lastColumnPos<this.start&&(this.lastColumnValue=w(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start),this.lastColumnValue}indentation(){return w(this.string,null,this.tabSize)}match(t,e,n){if(typeof t=="string"){let s=r=>n?r.toLowerCase():r,i=this.string.substr(this.pos,t.length);return s(i)==s(t)?(e!==!1&&(this.pos+=t.length),!0):null}else{let s=this.string.slice(this.pos).match(t);return s&&s.index>0?null:(s&&e!==!1&&(this.pos+=s[0].length),s)}}current(){return this.string.slice(this.start,this.pos)}}function z(a){return{token:a.token,blankLine:a.blankLine||(()=>{}),startState:a.startState||(()=>!0),copyState:a.copyState||F,indent:a.indent||(()=>null),languageData:a.languageData||{},tokenTable:a.tokenTable||m}}function F(a){if(typeof a!="object")return a;let t={};for(let e in a){let n=a[e];t[e]=n instanceof Array?n.slice():n}return t}class T extends C{constructor(t){let e=L(t.languageData),n=z(t),s,i=new class extends j{createParse(r,h,l){return new $(s,r,h,l)}};super(e,i,W(e),[D.of((r,h)=>this.getIndent(r,h))]);s=this,this.streamParser=n,this.stateAfter=new O({perNode:!0}),this.tokenTable=t.tokenTable?new N(n.tokenTable):B}static define(t){return new T(t)}getIndent(t,e){let n=R(t.state),s=n.resolve(e);for(;s&&s.type!=this.topNode;)s=s.parent;if(!s)return null;let i=g(this,n,0,s.from,e),r,h;if(i?(h=i.state,r=i.pos+1):(h=this.streamParser.startState(t.unit),r=0),e-r>1e4)return null;for(;r<e;){let o=t.state.doc.lineAt(r),k=Math.min(e,o.to);if(o.length){let b=new y(o.text,t.state.tabSize,t.unit);for(;b.pos<k-o.from;)x(this.streamParser.token,b,h)}else this.streamParser.blankLine(h,t.unit);if(k==e)break;r=o.to+1}let{text:l}=t.lineAt(e);return this.streamParser.indent(h,/^\s*(.*)/.exec(l)[1],t)}get allowsNesting(){return!1}}function g(a,t,e,n,s){let i=e>=n&&e+t.length<=s&&t.prop(a.stateAfter);if(i)return{state:a.streamParser.copyState(i),pos:e+t.length};for(let r=t.children.length-1;r>=0;r--){let h=t.children[r],l=e+t.positions[r],o=h instanceof u&&l<s&&g(a,h,l,n,s);if(o)return o}return null}function v(a,t,e,n,s){if(s&&e<=0&&n>=t.length)return t;!s&&t.type==a.topNode&&(s=!0);for(let i=t.children.length-1;i>=0;i--){let r=t.positions[i],h=t.children[i],l;if(r<n&&h instanceof u){if(!(l=v(a,h,e-r,n-r,s)))break;return s?new u(t.type,t.children.slice(0,i).concat(l),t.positions.slice(0,i+1),r+l.length):l}}return null}function G(a,t,e,n){for(let s of t){let i=s.from+(s.openStart?25:0),r=s.to-(s.openEnd?25:0),h=i<=e&&r>e&&g(a,s.tree,0-s.offset,e,r),l;if(h&&(l=v(a,s.tree,e+s.offset,h.pos+s.offset,!1)))return{state:h.state,tree:l}}return{state:a.streamParser.startState(n?d(n):4),tree:u.empty}}class ${constructor(t,e,n,s){this.lang=t,this.input=e,this.fragments=n,this.ranges=s,this.stoppedAt=null,this.chunks=[],this.chunkPos=[],this.chunk=[],this.chunkReused=void 0,this.rangeIndex=0,this.to=s[s.length-1].to;let i=P.get(),r=s[0].from,{state:h,tree:l}=G(t,n,r,i?.state);this.state=h,this.parsedPos=this.chunkStart=r+l.length;for(let o=0;o<l.children.length;o++)this.chunks.push(l.children[o]),this.chunkPos.push(l.positions[o]);i&&this.parsedPos<i.viewport.from-1e5&&(this.state=this.lang.streamParser.startState(d(i.state)),i.skipUntilInView(this.parsedPos,i.viewport.from),this.parsedPos=i.viewport.from),this.moveRangeIndex()}advance(){let t=P.get(),e=this.stoppedAt==null?this.to:Math.min(this.to,this.stoppedAt),n=Math.min(e,this.chunkStart+2048);for(t&&(n=Math.min(n,t.viewport.to));this.parsedPos<n;)this.parseLine(t);return this.chunkStart<this.parsedPos&&this.finishChunk(),this.parsedPos>=e?this.finish():t&&this.parsedPos>=t.viewport.to?(t.skipUntilInView(this.parsedPos,e),this.finish()):null}stopAt(t){this.stoppedAt=t}lineAfter(t){let e=this.input.chunk(t);if(this.input.lineChunks)e==`
`&&(e="");else{let n=e.indexOf(`
`);n>-1&&(e=e.slice(0,n))}return t+e.length<=this.to?e:e.slice(0,this.to-t)}nextLine(){let t=this.parsedPos,e=this.lineAfter(t),n=t+e.length;for(let s=this.rangeIndex;;){let i=this.ranges[s].to;if(i>=n||(e=e.slice(0,i-(n-e.length)),s++,s==this.ranges.length))break;let r=this.ranges[s].from,h=this.lineAfter(r);e+=h,n=r+h.length}return{line:e,end:n}}skipGapsTo(t,e,n){for(;;){let s=this.ranges[this.rangeIndex].to,i=t+e;if(n>0?s>i:s>=i)break;e+=this.ranges[++this.rangeIndex].from-s}return e}moveRangeIndex(){for(;this.ranges[this.rangeIndex].to<this.parsedPos;)this.rangeIndex++}emitToken(t,e,n,s,i){if(this.ranges.length>1){i=this.skipGapsTo(e,i,1),e+=i;let r=this.chunk.length;i=this.skipGapsTo(n,i,-1),n+=i,s+=this.chunk.length-r}return this.chunk.push(t,e,n,s),i}parseLine(t){let{line:e,end:n}=this.nextLine(),s=0,{streamParser:i}=this.lang,r=new y(e,t?t.state.tabSize:4,t?d(t.state):2);if(r.eol())i.blankLine(this.state,r.indentUnit);else for(;!r.eol();){let h=x(i.token,r,this.state);if(h&&(s=this.emitToken(this.lang.tokenTable.resolve(h),this.parsedPos+r.start,this.parsedPos+r.pos,4,s)),r.start>1e4)break}this.parsedPos=n,this.moveRangeIndex(),this.parsedPos<this.to&&this.parsedPos++}finishChunk(){let t=u.build({buffer:this.chunk,start:this.chunkStart,length:this.parsedPos-this.chunkStart,nodeSet:q,topID:0,maxBufferLength:2048,reused:this.chunkReused});t=new u(t.type,t.children,t.positions,t.length,[[this.lang.stateAfter,this.lang.streamParser.copyState(this.state)]]),this.chunks.push(t),this.chunkPos.push(this.chunkStart-this.ranges[0].from),this.chunk=[],this.chunkReused=void 0,this.chunkStart=this.parsedPos}finish(){return new u(this.lang.topNode,this.chunks,this.chunkPos,this.parsedPos-this.ranges[0].from).balance()}}function x(a,t,e){t.start=t.pos;for(let n=0;n<10;n++){let s=a(t,e);if(t.pos>t.start)return s}throw new Error("Stream parser failed to advance stream.")}const m=Object.create(null),p=[c.none],q=new M(p),S=[],A=Object.create(null);for(let[a,t]of[["variable","variableName"],["variable-2","variableName.special"],["string-2","string.special"],["def","variableName.definition"],["tag","typeName"],["attribute","propertyName"],["type","typeName"],["builtin","variableName.standard"],["qualifier","modifier"],["error","invalid"],["header","heading"],["property","propertyName"]])A[a]=I(m,t);class N{constructor(t){this.extra=t,this.table=Object.assign(Object.create(null),A)}resolve(t){return t?this.table[t]||(this.table[t]=I(this.extra,t)):0}}const B=new N(m);function f(a,t){S.indexOf(a)>-1||(S.push(a),console.warn(t))}function I(a,t){let e=null;for(let i of t.split(".")){let r=a[i]||U[i];r?typeof r=="function"?e?e=r(e):f(i,`Modifier ${i} used at start of tag`):e?f(i,`Tag ${i} used as modifier`):e=r:f(i,`Unknown highlighting tag ${i}`)}if(!e)return 0;let n=t.replace(/ /g,"_"),s=c.define({id:p.length,name:n,props:[E({[n]:e})]});return p.push(s),s.id}function W(a){let t=c.define({id:p.length,name:"Document",props:[V.add(()=>a)]});return p.push(t),t}export{T as StreamLanguage,y as StringStream};
