import{_}from"./index-e947383e.js";import{b,j as m,w as g,q as o,s as l,x as n,D as h}from"./vue-d8bdde7d.js";const d={"car-thumb":"_car-thumb_16gr0_1","car-thumb__img":"_car-thumb__img_16gr0_11","car-thumb--size-small":"_car-thumb--size-small_16gr0_20","car-thumb--size-medium":"_car-thumb--size-medium_16gr0_23","car-thumb--size-large":"_car-thumb--size-large_16gr0_26"},f="/rebuild._hanacapital_MO/",i=()=>({wrap:"",img:""}),z={props:{classNames:{Type:Object,default(){return i()}},size:{Type:String,default:null},src:{Type:String,default:null}},setup(r){const e=b({isError:!1}),t=m(()=>{const{classNames:a}=r;return Object.assign(i(),a)}),s=m(()=>{const{src:a=""}=r;return a.match(/^\//)?f+a.replace(/^\//,""):a}),c=()=>{e.isError=!0};return g(()=>r.src,()=>{e.isError=!1}),{state:e,customClassNames:t,imgSrc:s,onError:c}}},E=["src"];function y(r,e,t,s,c,a){return o(),l("span",{class:n([r.$style["car-thumb"],{"is-error":s.state.isError,[r.$style[`car-thumb--size-${t.size}`]]:t.size},s.customClassNames.wrap])},[t.src?(o(),l("img",{key:0,src:s.imgSrc,alt:"",class:n([r.$style["car-thumb__img"],s.customClassNames.img]),onError:e[0]||(e[0]=(...u)=>s.onError&&s.onError(...u))},null,42,E)):h("",!0)],2)}const C={$style:d},S=_(z,[["render",y],["__cssModules",C]]);export{S as C};
