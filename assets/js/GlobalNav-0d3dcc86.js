import{_ as u,G as l,L as m,u as p,t as d,l as h,v as _}from"./index-e947383e.js";import{P as f}from"./PageContents-0e324a49.js";import{Q as y,r as v,k as B,T as S,A as g,H as C,J as o,q as k,K as n}from"./vue-d8bdde7d.js";import"./vendor-7adcf331.js";import"./chart-c302dd5a.js";const N={components:{PageContents:f,GlobalNav:l,LayerSearch:m},setup(){y({title:"전체메뉴 - 하나캐피탈 공식 웹사이트",meta:[{hid:"title",name:"title",content:"전체메뉴 - 하나캐피탈 공식 웹사이트"},{hid:"description",name:"description",content:"전체메뉴 페이지 설명"}]});const e={ui:{common:p(),layout:d(),header:h(),dockBar:_()}},t=v(null),a=(s={})=>{t.value.layer.open(s.target)};return B(()=>{e.ui.common.setApp(!0),e.ui.common.setRootClassName("page-gnb"),e.ui.layout.setUseFooter(!1),e.ui.header.setTitle(()=>" "),e.ui.header.setLeftButtons(()=>[]),e.ui.header.setRightButtons(()=>[{name:"search",onClick:a},"setting"]),e.ui.dockBar.setActive(()=>"menu")}),S(()=>{e.ui.common.setApp(),e.ui.common.setRootClassName(),e.ui.layout.setUseFooter(),e.ui.header.setTitle(),e.ui.header.setLeftButtons(),e.ui.header.setRightButtons(),e.ui.dockBar.setActive()}),{layerSearch:t}}};function L(e,t,a,s,U,b){const r=o("GlobalNav",!0),c=o("LayerSearch"),i=o("PageContents");return k(),g(i,null,{default:C(()=>[n(r),n(c,{ref:"layerSearch"},null,512)]),_:1})}const R=u(N,[["render",L]]);export{R as default};
