import{f as r,m as t,u as O,o as n,r as s,b as a,k as i,p as Q,N as o,t as e}from"./codemirror-7224b3a8.js";import"./index-546b1e9f.js";import"./use-save-confirm-d0ac2555.js";import"./toggle-02c76972.js";import"./use-react-95665ffb.js";import"./throttle-0f7e1ced.js";import"./FormItem-47cfd295.js";import"./Form-04880262.js";import"./index-67622fda.js";import"./InputNumber-9454ae46.js";import"./Add-89e1c513.js";import"./Switch-ff0d09ee.js";import"./Select-1c50b9d0.js";import"./Tag-d719d8c1.js";const p={__proto__:null,anyref:34,dataref:34,eqref:34,externref:34,i31ref:34,funcref:34,i8:34,i16:34,i32:34,i64:34,f32:34,f64:34},$=Q.deserialize({version:13,states:"!^Q]QPOOOqQPO'#CbOOQO'#Cd'#CdOOQO'#Cl'#ClOOQO'#Ch'#ChQ]QPOOOOQO,58|,58|OxQPO,58|OOQO-E6f-E6fOOQO1G.h1G.h",stateData:"!P~O_OSPOSQOS~OTPOVROXROYROZROaQO~OSUO~P]OSXO~P]O",goto:"xaPPPPPPbPbPPPhPPPrXROPTVQTOQVPTWTVXSOPTV",nodeNames:"\u26A0 LineComment BlockComment Module ) ( App Identifier Type Keyword Number String",maxTerm:17,nodeProps:[[o.openedBy,4,"("],[o.closedBy,5,")"],[o.group,-6,6,7,8,9,10,11,"Expression"]],skippedNodes:[0,1,2],repeatNodeCount:1,tokenData:"/Q~R^XY}YZ}]^}pq}rs!Stu!qxy&Vyz'S{|'X}!O'X!Q!R'b!R![)_!]!^,{#T#o-^~!SO_~~!VTOr!Srs!fs#O!S#O#P!k#P~!S~!kOZ~~!nPO~!S~!tiqr$cst$ctu$cuv$cvw$cwx$cz{$c{|$c}!O$c!O!P$c!P!Q$c!Q![$c![!]$c!^!_$c!_!`$c!`!a$c!a!b$c!b!c$c!c!}$c#Q#R$c#R#S$c#S#T$c#T#o$c#p#q$c#r#s$c~$hiV~qr$cst$ctu$cuv$cvw$cwx$cz{$c{|$c}!O$c!O!P$c!P!Q$c!Q![$c![!]$c!^!_$c!_!`$c!`!a$c!a!b$c!b!c$c!c!}$c#Q#R$c#R#S$c#S#T$c#T#o$c#p#q$c#r#s$c~&[PT~!]!^&_~&bRO!]&_!]!^&k!^~&_~&nTOy&_yz&}z!]&_!]!^&k!^~&_~'SOQ~~'XOS~~'[Q!Q!R'b!R![)_~'gUY~!O!P'y!Q![)_!g!h(j#R#S)s#X#Y(j#l#m)y~(ORY~!Q![(X!g!h(j#X#Y(j~(^SY~!Q![(X!g!h(j#R#S)X#X#Y(j~(mR{|(v}!O(v!Q![(|~(yP!Q![(|~)RQY~!Q![(|#R#S(v~)[P!Q![(X~)dTY~!O!P'y!Q![)_!g!h(j#R#S)s#X#Y(j~)vP!Q![)_~)|R!Q![*V!c!i*V#T#Z*V~*[VY~!O!P*q!Q![*V!c!i*V!r!s+n#R#S)y#T#Z*V#d#e+n~*vTY~!Q![+V!c!i+V!r!s+n#T#Z+V#d#e+n~+[UY~!Q![+V!c!i+V!r!s+n#R#S,o#T#Z+V#d#e+n~+qT{|,Q}!O,Q!Q![,^!c!i,^#T#Z,^~,TR!Q![,^!c!i,^#T#Z,^~,cSY~!Q![,^!c!i,^#R#S,Q#T#Z,^~,rR!Q![+V!c!i+V#T#Z+V~-OP!]!^-R~-WQP~OY-RZ~-R~-ciX~qr-^st-^tu-^uv-^vw-^wx-^z{-^{|-^}!O-^!O!P-^!P!Q-^!Q![-^![!]-^!^!_-^!_!`-^!`!a-^!a!b-^!b!c-^!c!}-^#Q#R-^#R#S-^#S#T-^#T#o-^#p#q-^#r#s-^",tokenizers:[0],topRules:{Module:[0,3]},specialized:[{term:9,get:c=>p[c]||-1}],tokenPrec:0}),P=r.define({parser:$.configure({props:[t.add({App:O({closing:")",align:!1})}),n.add({App:s,BlockComment(c){return{from:c.from+2,to:c.to-2}}}),a({Keyword:e.keyword,Type:e.typeName,Number:e.number,String:e.string,Identifier:e.variableName,LineComment:e.lineComment,BlockComment:e.blockComment,"( )":e.paren})]}),languageData:{commentTokens:{line:";;",block:{open:"(;",close:";)"}},closeBrackets:{brackets:["(",'"']}}});function X(){return new i(P)}export{X as wast,P as wastLanguage};
