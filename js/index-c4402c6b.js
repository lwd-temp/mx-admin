import{C as N,E as Z,p as G,N as S,f as Y,m as j,o as V,b as A,k as q,s as I,t as m}from"./codemirror-79241bda.js";import"./index-524a5fea.js";import"./use-save-confirm-94f3d490.js";import"./toggle-e8b30ce6.js";import"./use-react-be4c6ebd.js";import"./throttle-6371af48.js";import"./FormItem-5f07fc31.js";import"./Form-88a5f5a7.js";import"./index-ef78730c.js";import"./InputNumber-f05d5864.js";import"./Add-094210b4.js";import"./Switch-e7f8dc87.js";import"./Select-08f12922.js";import"./Tag-3efc0e97.js";const W=1,D=2,M=3,B=4,H=5,L=36,F=37,J=38,K=10,ee=12;function Oe(e){return e==45||e==46||e==58||e>=65&&e<=90||e==95||e>=97&&e<=122||e>=161}function te(e){return e==9||e==10||e==13||e==32}let _=null,y=null,R=0;function Q(e,O){let a=e.pos+O;if(y==e&&R==a)return _;for(;te(e.peek(O));)O++;let t="";for(;;){let n=e.peek(O);if(!Oe(n))break;t+=String.fromCharCode(n),O++}return y=e,R=a,_=t||null}function U(e,O){this.name=e,this.parent=O,this.hash=O?O.hash:0;for(let a=0;a<e.length;a++)this.hash+=(this.hash<<4)+e.charCodeAt(a)+(e.charCodeAt(a)<<8)}const ae=new N({start:null,shift(e,O,a,t){return O==W?new U(Q(t,1)||"",e):e},reduce(e,O){return O==K&&e?e.parent:e},reuse(e,O,a,t){let n=O.type.id;return n==W||n==ee?new U(Q(t,1)||"",e):e},hash(e){return e?e.hash:0},strict:!1}),ne=new Z((e,O)=>{if(e.next==60){if(e.advance(),e.next==47){e.advance();let a=Q(e,0);if(!a)return e.acceptToken(H);if(O.context&&a==O.context.name)return e.acceptToken(D);for(let t=O.context;t;t=t.parent)if(t.name==a)return e.acceptToken(M,-2);e.acceptToken(B)}else if(e.next!=33&&e.next!=63)return e.acceptToken(W)}},{contextual:!0});function z(e,O){return new Z(a=>{for(let t=0,n=0;;n++){if(a.next<0){n&&a.acceptToken(e);break}if(a.next==O.charCodeAt(t)){if(t++,t==O.length){n>O.length&&a.acceptToken(e,1-O.length);break}}else t=0;a.advance()}})}const re=z(L,"-->"),oe=z(F,"?>"),le=z(J,"]]>"),se=G.deserialize({version:13,states:"-OOQOaOOOcObO'#CcOkOdO'#CdOOOP'#Cv'#CvOsOaO'#DTO!XOaOOOOOQ'#Cw'#CwO!aObO,58}OOOP,58},58}OOOS'#Cx'#CxO!iOdO,59OOOOP,59O,59OOOOP-E6t-E6tO!qO`O'#ChO#kOqO'#CfOOOP'#Cf'#CfO#rOaO'#CyQ$TOPOOO$YOaOOOOOQ-E6u-E6uOOOP1G.i1G.iOOOS-E6v-E6vOOOP1G.j1G.jOOOO'#Cz'#CzO$hO`O,59SO$pO!bO,59SO%OOhO'#CqO%WO`O'#CrOOOP'#D]'#D]OOOP'#C}'#C}O%`OqO,59QO%gO`O'#CsOOOP,59Q,59QOOOP,59e,59eOOOP-E6w-E6wO$TOPOOOOOO-E6x-E6xO%oO!bO1G.nO%oO!bO1G.nO%}O`O'#CjO&VO!bO'#C{O&eO!bO1G.nOOOP1G.n1G.nOOOP1G.{1G.{OOOW'#DO'#DOO&pOhO,59]OOOP,59],59]O&xO`O,59^O'QO`O,59^OOOP-E6{-E6{OOOP1G.l1G.lO'YO`O,59_O'bO`O,59_O'jO!bO7+$YO'xO!bO7+$YOOOP7+$Y7+$YOOOP7+$g7+$gO(TO`O,59UO(]O`O,59UO(eO!bO,59gOOOO-E6y-E6yOOOW-E6|-E6|OOOP1G.w1G.wO(sO`O1G.xO(sO`O1G.xOOOP1G.x1G.xO({O`O1G.yO({O`O1G.yOOOP1G.y1G.yO)TO!bO<<GtOOOP<<Gt<<GtOOOP<<HR<<HRO(]O`O1G.pO(]O`O1G.pO)`O#tO'#CmOOOO1G.p1G.pO)nO`O7+$dOOOP7+$d7+$dO)vO`O7+$eOOOP7+$e7+$eOOOPAN=`AN=`OOOPAN=mAN=mO(]O`O7+$[OOOO7+$[7+$[OOOO'#C|'#C|O*OO#tO,59XOOOO,59X,59XOOOP<<HO<<HOOOOP<<HP<<HPOOOO<<Gv<<GvOOOO-E6z-E6zOOOO1G.s1G.s",stateData:"*^~OyPOzRO|QOPwPXwP~OtUOxWO~OuXO{ZO~OyPOzRO|QOPwXXwXswX~OP]OXbO~OtUOxdO~OuXO{fO~O]iOzgO~OP]OQoOSkOTlOblOclOdlOyPO|QO!RjO~ORpO~P!yOyPOzRO|QOPwPswP~OP]O~OyPOzRO|QOPwP~O]uOzgO~OZzO_wOh{OzgO~Ov|O!Q!OO~O]!QOzgO~OR!SO~P!yO]!UOzgO~OZ!XO_wOh!YOzgO~O`![OzgO~OzgOZoX_oXhoX~OZ!XO_wOh!YO~Ov|O!Q!`O~O]!aOzgO~OZ!cOzgO~O]!dOzgO~OZ!fOzgO~OZ!hO_wOh!iOzgO~OZ!hO_wOh!iO~O`!jOzgO~OzgO}!lO~OzgOZoa_oahoa~OZ!oOzgO~OZ!qOzgO~OZ!rO_wOh!sO~Ob!vOc!vO}!xO!O!vO~OZ!yOzgO~OZ!zOzgO~Ob!vOc!vO}!}O!O!vO~O",goto:"&S!QPPPPPPP!R!RP!]P!fP!mPP!vPPP!X!X#QP#W#_#g#m#s#z%S%c%i%oPPPP%uPPPPPPP&OWROS`bTl^nU`TasTl^nZ^T^ans_xiuvy!V!W!gQ!m![S!u!j!kR!{!tQp^R!SnZ_T^ansUSO`bR[SQVPRcVQYQReYSaTsRraQh]jthv!P!T!V!Z!]!b!e!k!n!p!tQviQ!PkQ!ToQ!VuQ!ZwQ!]xQ!b!QQ!e!UQ!k![Q!n!aQ!p!dR!t!jQyiS!WuvU!^y!W!gR!g!VQ!w!lR!|!wQn^R!RnQ}jR!_}QTOQq`RsbTm^n",nodeNames:"\u26A0 StartTag StartCloseTag MissingCloseTag StartCloseTag StartCloseTag Document Comment ProcessingInst DoctypeDecl Element EndTag OpenTag TagName Attribute AttributeName Is AttributeValue EntityReference CharacterReference Text Cdata MismatchedCloseTag CloseTag SelfCloseEndTag SelfClosingTag",maxTerm:49,context:ae,nodeProps:[[S.closedBy,1,"SelfCloseEndTag EndTag",12,"CloseTag MissingCloseTag"],[S.openedBy,11,"StartTag StartCloseTag",23,"OpenTag",24,"StartTag"]],skippedNodes:[0],repeatNodeCount:9,tokenData:"Az~R!WOX$kXY%rYZ%rZ]$k]^%r^p$kpq%rqr$krs&tsv$kvw'Uw}$k}!O(q!O!P$k!P!Q*n!Q![$k![!]+z!]!^$k!^!_/s!_!`=i!`!a>U!a!b>q!b!c$k!c!}+z!}#P$k#P#Q?}#Q#R$k#R#S+z#S#T$k#T#o+z#o%W$k%W%o+z%o%p$k%p&a+z&a&b$k&b1p+z1p4U$k4U4d+z4d4e$k4e$IS+z$IS$I`$k$I`$Ib+z$Ib$Kh$k$Kh%#t+z%#t&/x$k&/x&Et+z&Et&FV$k&FV;'S+z;'S;:j/S;:j?&r$k?&r?Ah+z?Ah?BY$k?BY?Mn+z?Mn~$kY$rUdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_~$kQ%ZRdQOv%Uw!^%U!_~%UW%iR!OWOr%dsv%dw~%d_%{]dQ!OWzTOX$kXY%rYZ%rZ]$k]^%r^p$kpq%rqr$krs%Usv$kw!^$k!^!_%d!_~$kZ&{R}XdQOv%Uw!^%U!_~%U~'XTOp'hqs'hst(Pt!]'h!^~'h~'kTOp'hqs'ht!]'h!]!^'z!^~'h~(POb~~(SROp(]q!](]!^~(]~(`SOp(]q!](]!]!^(l!^~(]~(qOc~Z(xWdQ!OWOr$krs%Usv$kw}$k}!O)b!O!^$k!^!_%d!_~$kZ)iWdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_!`$k!`!a*R!a~$kZ*[UxPdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_~$k^*uWdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_!`$k!`!a+_!a~$k^+hUhSdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_~$k_,V}_S]PdQ!OWOr$krs%Usv$kw}$k}!O+z!O!P+z!P!Q$k!Q![+z![!]+z!]!^$k!^!_%d!_!c$k!c!}+z!}#R$k#R#S+z#S#T$k#T#o+z#o$}$k$}%O+z%O%W$k%W%o+z%o%p$k%p&a+z&a&b$k&b1p+z1p4U+z4U4d+z4d4e$k4e$IS+z$IS$I`$k$I`$Ib+z$Ib$Je$k$Je$Jg+z$Jg$Kh$k$Kh%#t+z%#t&/x$k&/x&Et+z&Et&FV$k&FV;'S+z;'S;:j/S;:j?&r$k?&r?Ah+z?Ah?BY$k?BY?Mn+z?Mn~$k_/ZWdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_;=`$k;=`<%l+z<%l~$kZ/xU!OWOq%dqr0[sv%dw!a%d!a!b=X!b~%dZ0aZ!OWOr%dsv%dw}%d}!O1S!O!f%d!f!g1x!g!}%d!}#O5s#O#W%d#W#X:k#X~%dZ1XT!OWOr%dsv%dw}%d}!O1h!O~%dZ1oRyR!OWOr%dsv%dw~%dX1}T!OWOr%dsv%dw!q%d!q!r2^!r~%dX2cT!OWOr%dsv%dw!e%d!e!f2r!f~%dX2wT!OWOr%dsv%dw!v%d!v!w3W!w~%dX3]T!OWOr%dsv%dw!{%d!{!|3l!|~%dX3qT!OWOr%dsv%dw!r%d!r!s4Q!s~%dX4VT!OWOr%dsv%dw!g%d!g!h4f!h~%dX4kV!OWOr4frs5Qsv4fvw5Qw!`4f!`!a5c!a~4fP5TRO!`5Q!`!a5^!a~5QP5cOXPX5jRXP!OWOr%dsv%dw~%dY5xV!OWOr%dsv%dw!e%d!e!f6_!f#V%d#V#W8w#W~%dY6dT!OWOr%dsv%dw!f%d!f!g6s!g~%dY6xT!OWOr%dsv%dw!c%d!c!d7X!d~%dY7^T!OWOr%dsv%dw!v%d!v!w7m!w~%dY7rT!OWOr%dsv%dw!c%d!c!d8R!d~%dY8WT!OWOr%dsv%dw!}%d!}#O8g#O~%dY8nR!OW!RQOr%dsv%dw~%dY8|T!OWOr%dsv%dw#W%d#W#X9]#X~%dY9bT!OWOr%dsv%dw#T%d#T#U9q#U~%dY9vT!OWOr%dsv%dw#h%d#h#i:V#i~%dY:[T!OWOr%dsv%dw#T%d#T#U8R#U~%dX:pT!OWOr%dsv%dw#c%d#c#d;P#d~%dX;UT!OWOr%dsv%dw#V%d#V#W;e#W~%dX;jT!OWOr%dsv%dw#h%d#h#i;y#i~%dX<OT!OWOr%dsv%dw#m%d#m#n<_#n~%dX<dT!OWOr%dsv%dw#d%d#d#e<s#e~%dX<xT!OWOr%dsv%dw#X%d#X#Y4f#Y~%dZ=`R|R!OWOr%dsv%dw~%dZ=rU`PdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_~$k_>_UZTdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_~$kZ>xWdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_!`$k!`!a?b!a~$kZ?kU{PdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_~$kZ@UWdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_#P$k#P#Q@n#Q~$kZ@uWdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_!`$k!`!aA_!a~$kZAhU!QPdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_~$k",tokenizers:[ne,re,oe,le,0,1,2,3],topRules:{Document:[0,6]},tokenPrec:0});function h(e,O){let a=O&&O.getChild("TagName");return a?e.sliceString(a.from,a.to):""}function C(e,O){let a=O&&O.firstChild;return!a||a.name!="OpenTag"?"":h(e,a)}function de(e,O,a){let t=O&&O.getChildren("Attribute").find(o=>o.from<=a&&o.to>=a),n=t&&t.getChild("AttributeName");return n?e.sliceString(n.from,n.to):""}function b(e){for(let O=e&&e.parent;O;O=O.parent)if(O.name=="Element")return O;return null}function ie(e,O){var a;let t=I(e).resolveInner(O,-1),n=null;for(let o=t;!n&&o.parent;o=o.parent)(o.name=="OpenTag"||o.name=="CloseTag"||o.name=="SelfClosingTag"||o.name=="MismatchedCloseTag")&&(n=o);if(n&&(n.to>O||n.lastChild.type.isError)){let o=n.parent;if(t.name=="TagName")return n.name=="CloseTag"||n.name=="MismatchedCloseTag"?{type:"closeTag",from:t.from,context:o}:{type:"openTag",from:t.from,context:b(o)};if(t.name=="AttributeName")return{type:"attrName",from:t.from,context:n};if(t.name=="AttributeValue")return{type:"attrValue",from:t.from,context:n};let d=t==n||t.name=="Attribute"?t.childBefore(O):t;return d?.name=="StartTag"?{type:"openTag",from:O,context:b(o)}:d?.name=="StartCloseTag"&&d.to<=O?{type:"closeTag",from:O,context:o}:d?.name=="Is"?{type:"attrValue",from:O,context:n}:d?{type:"attrName",from:O,context:n}:null}else if(t.name=="StartCloseTag")return{type:"closeTag",from:O,context:t.parent};for(;t.parent&&t.to==O&&!(!((a=t.lastChild)===null||a===void 0)&&a.type.isError);)t=t.parent;return t.name=="Element"||t.name=="Text"||t.name=="Document"?{type:"tag",from:O,context:t.name=="Element"?t:b(t)}:null}class me{constructor(O,a,t){this.attrs=a,this.attrValues=t,this.children=[],this.name=O.name,this.completion=Object.assign(Object.assign({type:"type"},O.completion||{}),{label:this.name}),this.openCompletion=Object.assign(Object.assign({},this.completion),{label:"<"+this.name}),this.closeCompletion=Object.assign(Object.assign({},this.completion),{label:"</"+this.name+">",boost:2}),this.closeNameCompletion=Object.assign(Object.assign({},this.completion),{label:this.name+">"}),this.text=O.textContent?O.textContent.map(n=>({label:n,type:"text"})):[]}}const w=/^[:\-\.\w\u00b7-\uffff]*$/;function X(e){return Object.assign(Object.assign({type:"property"},e.completion||{}),{label:e.name})}function x(e){return typeof e=="string"?{label:`"${e}"`,type:"constant"}:/^"/.test(e.label)?e:Object.assign(Object.assign({},e),{label:`"${e.label}"`})}function $e(e,O){let a=[],t=[],n=Object.create(null);for(let r of O){let $=X(r);a.push($),r.global&&t.push($),r.values&&(n[r.name]=r.values.map(x))}let o=[],d=[],k=Object.create(null);for(let r of e){let $=t,l=n;r.attributes&&($=$.concat(r.attributes.map(c=>typeof c=="string"?a.find(u=>u.label==c)||{label:c,type:"property"}:(c.values&&(l==n&&(l=Object.create(l)),l[c.name]=c.values.map(x)),X(c)))));let p=new me(r,$,l);k[p.name]=p,o.push(p),r.top&&d.push(p)}d.length||(d=o);for(let r=0;r<o.length;r++){let $=e[r],l=o[r];if($.children)for(let p of $.children)k[p]&&l.children.push(k[p]);else l.children=o}return r=>{var $;let{doc:l}=r.state,p=ie(r.state,r.pos);if(!p||p.type=="tag"&&!r.explicit)return null;let{type:c,from:u,context:f}=p;if(c=="openTag"){let s=d,i=C(l,f);if(i){let g=k[i];s=g?.children||o}return{from:u,options:s.map(g=>g.completion),span:w}}else if(c=="closeTag"){let s=C(l,f);return s?{from:u,to:r.pos+(l.sliceString(r.pos,r.pos+1)==">"?1:0),options:[(($=k[s])===null||$===void 0?void 0:$.closeNameCompletion)||{label:s+">",type:"type"}],span:w}:null}else if(c=="attrName"){let s=k[h(l,f)];return{from:u,options:s?.attrs||t,span:w}}else if(c=="attrValue"){let s=de(l,f,u);if(!s)return null;let i=k[h(l,f)],g=(i?.attrValues||n)[s];return!g||!g.length?null:{from:u,to:r.pos+(l.sliceString(r.pos,r.pos+1)=='"'?1:0),options:g,span:/^"[^"]*"?$/}}else if(c=="tag"){let s=C(l,f),i=k[s],g=[],P=f&&f.lastChild;s&&(!P||P.name!="CloseTag"||h(l,P)!=s)&&g.push(i?i.closeCompletion:{label:"</"+s+">",type:"type",boost:2});let v=g.concat((i?.children||(f?o:d)).map(T=>T.openCompletion));if(f&&i?.text.length){let T=f.firstChild;T.to>r.pos-20&&!/\S/.test(r.state.sliceDoc(T.to,r.pos))&&(v=v.concat(i.text))}return{from:u,options:v,span:/^<\/?[:\-\.\w\u00b7-\uffff]*$/}}else return null}}const E=Y.define({parser:se.configure({props:[j.add({Element(e){let O=/^\s*<\//.test(e.textAfter);return e.lineIndent(e.node.from)+(O?0:e.unit)},"OpenTag CloseTag SelfClosingTag"(e){return e.column(e.node.from)+e.unit}}),V.add({Element(e){let O=e.firstChild,a=e.lastChild;return!O||O.name!="OpenTag"?null:{from:O.to,to:a.name=="CloseTag"?a.from:e.to}}}),A({Text:m.content,"StartTag StartCloseTag EndTag SelfCloseEndTag":m.angleBracket,TagName:m.tagName,"MismatchedCloseTag/Tagname":[m.tagName,m.invalid],AttributeName:m.attributeName,AttributeValue:m.attributeValue,Is:m.definitionOperator,"EntityReference CharacterReference":m.character,Comment:m.blockComment,ProcessingInst:m.processingInstruction,DoctypeDecl:m.documentMeta,Cdata:m.special(m.string)})]}),languageData:{commentTokens:{block:{open:"<!--",close:"-->"}},indentOnInput:/^\s*<\/$/}});function Qe(e={}){return new q(E,E.data.of({autocomplete:$e(e.elements||[],e.attributes||[])}))}export{$e as completeFromSchema,Qe as xml,E as xmlLanguage};
