import{R as m,P as i,k as p,T as d,A as v,H as o,J as u,q as c,v as t,x as s,K as l,L as _}from"./vue-d8bdde7d.js";import{_ as h,l as g}from"./index-e947383e.js";import{P as f}from"./PageContents-0e324a49.js";import"./vendor-7adcf331.js";import"./chart-c302dd5a.js";const k={"nav-menu__link":"_nav-menu__link_rox9b_1","nav-menu__list":"_nav-menu__list_rox9b_5","nav-menu__item":"_nav-menu__item_rox9b_10","nav-menu__head":"_nav-menu__head_rox9b_49","nav-menu__right":"_nav-menu__right_rox9b_57","nav-menu__opener":"_nav-menu__opener_rox9b_62","nav-menu__list--depth":"_nav-menu__list--depth_rox9b_70"},$={components:{PageContents:f,RouterLink:m},setup(){const e={ui:{header:g()}},n=i();p(()=>{e.ui.header.setTitle(()=>"전체메뉴"),e.ui.header.setLeftButtons(()=>[]),e.ui.header.setRightButtons(()=>[{name:"homeButton",onClick:()=>n.push("/lm-blog-personal/home")},{name:"close",onClick:()=>n.push("/lm-blog-personal/home")}])}),d(()=>{e.ui.header.setTitle(),e.ui.header.setLeftButtons(),e.ui.header.setRightButtons()})}};function b(e,n,B,C,L,R){const a=u("RouterLink"),r=u("PageContents");return c(),v(r,null,{default:o(()=>[t("div",{class:s(e.$style["nav-menu"])},[t("ul",{class:s(e.$style["nav-menu__list"])},[t("li",{class:s(e.$style["nav-menu__item"])},[l(a,{to:"/lm-blog-personal/quick-counseling",class:s(e.$style["nav-menu__link"])},{default:o(()=>n[0]||(n[0]=[_("빠른 대출 상담")])),_:1},8,["class"])],2),t("li",{class:s(e.$style["nav-menu__item"])},[l(a,{to:"/lm-blog-personal/sms-counseling",class:s(e.$style["nav-menu__link"])},{default:o(()=>n[1]||(n[1]=[_("SMS 상담")])),_:1},8,["class"])],2),t("li",{class:s(e.$style["nav-menu__item"])},[l(a,{to:"/lm-blog-personal/map",class:s(e.$style["nav-menu__link"])},{default:o(()=>n[2]||(n[2]=[_("찾아오시는 길")])),_:1},8,["class"])],2)],2)],2)]),_:1})}const y={$style:k},S=h($,[["render",b],["__cssModules",y]]);export{S as default};
