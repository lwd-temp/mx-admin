import{cG as _}from"./index-24b44d60.js";function g(n,c){return c.forEach(function(r){r&&typeof r!="string"&&!Array.isArray(r)&&Object.keys(r).forEach(function(t){if(t!=="default"&&!(t in n)){var i=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(n,t,i.get?i:{enumerable:!0,get:function(){return r[t]}})}})}),Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var u={exports:{}};(function(n,c){(function(r,t){n.exports=t()})(self,function(){return(()=>{var r={775:(i,o)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.FitAddon=void 0;var a=function(){function s(){}return s.prototype.activate=function(e){this._terminal=e},s.prototype.dispose=function(){},s.prototype.fit=function(){var e=this.proposeDimensions();if(e&&this._terminal){var l=this._terminal._core;this._terminal.rows===e.rows&&this._terminal.cols===e.cols||(l._renderService.clear(),this._terminal.resize(e.cols,e.rows))}},s.prototype.proposeDimensions=function(){if(this._terminal&&this._terminal.element&&this._terminal.element.parentElement){var e=this._terminal._core;if(e._renderService.dimensions.actualCellWidth!==0&&e._renderService.dimensions.actualCellHeight!==0){var l=window.getComputedStyle(this._terminal.element.parentElement),d=parseInt(l.getPropertyValue("height")),m=Math.max(0,parseInt(l.getPropertyValue("width"))),p=window.getComputedStyle(this._terminal.element),f=d-(parseInt(p.getPropertyValue("padding-top"))+parseInt(p.getPropertyValue("padding-bottom"))),h=m-(parseInt(p.getPropertyValue("padding-right"))+parseInt(p.getPropertyValue("padding-left")))-e.viewport.scrollBarWidth;return{cols:Math.max(2,Math.floor(h/e._renderService.dimensions.actualCellWidth)),rows:Math.max(1,Math.floor(f/e._renderService.dimensions.actualCellHeight))}}}},s}();o.FitAddon=a}},t={};return function i(o){if(t[o])return t[o].exports;var a=t[o]={exports:{}};return r[o](a,a.exports,i),a.exports}(775)})()})})(u);var v=_(u.exports),x=g({__proto__:null,default:v},[u.exports]);export{x};
