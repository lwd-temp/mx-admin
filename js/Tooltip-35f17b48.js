import{f as p,a5 as t,y as i,n,Z as a,L as l,a9 as h,bb as v}from"./index-546b1e9f.js";const c=Object.assign(Object.assign({},h),t.props);var u=p({name:"Tooltip",props:c,__popover__:!0,setup(e){const o=t("Tooltip","-tooltip",void 0,v,e),s=i(null);return Object.assign(Object.assign({},{syncPosition(){s.value.syncPosition()},setShow(r){s.value.setShow(r)}}),{popoverRef:s,mergedTheme:o,popoverThemeOverrides:n(()=>o.value.self)})},render(){const{mergedTheme:e,internalExtraClass:o}=this;return a(l,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:o.concat("tooltip"),ref:"popoverRef"}),this.$slots)}});export{u as N};
