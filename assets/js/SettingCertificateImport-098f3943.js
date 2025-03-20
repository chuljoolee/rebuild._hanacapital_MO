import{_ as C,k,B as F,b as L,l as P}from"./index-e947383e.js";import{P as T}from"./PageContents-0e324a49.js";import{P as M}from"./PageTextGroup-063bd0d8.js";import{B as w,a as S}from"./ButtonListItem-9467df73.js";import{I as q}from"./IllustObject-5ee7e64e.js";import{F as R}from"./FormList-24c1b421.js";import{F as E}from"./FormListItem-029601c8.js";import{F as N,a as j}from"./FormInvalidMessage-ff7fec8d.js";import{I as G,a as O}from"./InputBlockCell-5e7cb03a.js";import{B as Q}from"./BottomSticky-1de08ed5.js";import{b as V,k as H,T as U,A as z,H as l,J as i,q as A,K as n,v as t,L as _,x as o}from"./vue-d8bdde7d.js";import"./vendor-7adcf331.js";import"./chart-c302dd5a.js";const J={"contents-list":"_contents-list_oyu6b_1","contents-list__list":"_contents-list__list_oyu6b_4","contents-list__item":"_contents-list__item_oyu6b_9","contents-list__head":"_contents-list__head_oyu6b_12","contents-list__symbol":"_contents-list__symbol_oyu6b_20","contents-list__title":"_contents-list__title_oyu6b_32","contents-list__right":"_contents-list__right_oyu6b_40","contents-list__opener":"_contents-list__opener_oyu6b_51","contents-list__contents":"_contents-list__contents_oyu6b_65","contents-list__depth":"_contents-list__depth_oyu6b_68","contents-list__depth-2":"_contents-list__depth-2_oyu6b_72","contents-list__depth-3":"_contents-list__depth-3_oyu6b_75","contents-list__depth-4":"_contents-list__depth-4_oyu6b_78","contents-list__list--secondary":"_contents-list__list--secondary_oyu6b_81","contents-list__list--tertiary":"_contents-list__list--tertiary_oyu6b_108","contents-list__list--quaternary":"_contents-list__list--quaternary_oyu6b_133","contents-list__list--quinary":"_contents-list__list--quinary_oyu6b_159","contents-list__list--senary":"_contents-list__list--senary_oyu6b_187"},K={components:{PageContents:T,PageTextGroup:M,PageMainText:k,BasicButton:F,ButtonList:w,ButtonListItem:S,IllustObject:q,FormList:R,FormListItem:E,FormInvalid:N,FormInvalidMessage:j,InputBlock:G,InputBlockCell:O,BasicInput:L,BottomSticky:Q},setup(){const e=V({codeError:!1}),s={ui:{header:P()}};return H(()=>{s.ui.header.setTitle(()=>"공동인증서 가져오기"),s.ui.header.setLeftButtons(()=>["back"]),s.ui.header.setRightButtons(()=>[])}),U(()=>{s.ui.header.setTitle(),s.ui.header.setLeftButtons(),s.ui.header.setRightButtons()}),{state:e}}},D={class:"row-margin-contents-group"},W={class:"bottom-wrap"};function X(e,s,Z,r,x,tt){const d=i("PageMainText"),p=i("PageTextGroup"),y=i("IllustObject"),c=i("BasicInput"),a=i("InputBlockCell"),f=i("InputBlock"),b=i("FormInvalidMessage"),B=i("FormInvalid"),g=i("FormListItem"),I=i("FormList"),u=i("BasicButton"),m=i("ButtonListItem"),v=i("ButtonList"),$=i("BottomSticky"),h=i("PageContents");return A(),z(h,null,{foot:l(()=>[n($,null,{default:l(()=>[t("div",W,[n(v,{classNames:{wrap:"row-margin-none"}},{default:l(()=>[n(m,null,{default:l(()=>[n(u,{line:!0,minSide:!0},{default:l(()=>s[6]||(s[6]=[_("QR코드로 가져오기")])),_:1})]),_:1}),n(m,null,{default:l(()=>[n(u,{minSide:!0},{default:l(()=>s[7]||(s[7]=[_("공동인증서 가져오기 ")])),_:1})]),_:1})]),_:1})])]),_:1})]),default:l(()=>[n(p,null,{default:l(()=>[n(d,null,{default:l(()=>s[0]||(s[0]=[_(" PC에 저장된 공동인증서를"),t("br",null,null,-1),_(" 스마트폰으로 복사합니다 ")])),_:1})]),_:1}),n(y,{type:"certification"}),n(I,null,{default:l(()=>[n(g,{titleText:"인증번호로 가져오기",target:"#settingCertificateImportCode"},{default:l(()=>[n(B,{error:r.state.codeError},{default:l(()=>[n(f,{error:r.state.codeError},{default:l(()=>[n(a,{flexible:!0},{default:l(()=>[n(c,{type:"number",pattern:"\\d*",title:"인증번호 앞 4자리",id:"settingCertificateImportCode"})]),_:1}),n(a,{type:"sub"},{default:l(()=>s[1]||(s[1]=[_("-")])),_:1}),n(a,{flexible:!0},{default:l(()=>[n(c,{type:"number",pattern:"\\d*",title:"인증번호 뒤 4자리"})]),_:1})]),_:1},8,["error"]),n(b,null,{default:l(()=>s[2]||(s[2]=[_("Error Message")])),_:1})]),_:1},8,["error"])]),_:1})]),_:1}),t("section",D,[s[5]||(s[5]=t("h2",{class:"text-body-2 row-margin-item-group"},"진행순서",-1)),t("div",{class:o(e.$style["contents-list"])},[t("ol",{class:o([e.$style["contents-list__list"],e.$style["contents-list__list--senary"]])},[t("li",{class:o(e.$style["contents-list__item"])},[t("div",{class:o(e.$style["contents-list__head"])},[t("div",{class:o(e.$style["contents-list__symbol"])},"1",2),t("div",{class:o(e.$style["contents-list__title"])},s[3]||(s[3]=[_(" 하나캐피탈 PC 홈페이지의"),t("br",null,null,-1),t("strong",{class:"color-green font-weight-medium"},"‘고객센터 > 인증센터 > 인증서 내보내기 [PC > 스마트폰]’",-1),_("에 접속해주세요. ")]),2)],2),t("div",{class:o([e.$style["contents-list__depth-4"],"row-margin-mini"])},s[4]||(s[4]=[t("p",{class:"text-body-4 font-weight-light color-gray-tertiary"}," (http://hanacapital.co.kr/cs/cert-center.hnc) ",-1)]),2)],2),t("li",{class:o(e.$style["contents-list__item"])},[t("div",{class:o(e.$style["contents-list__head"])},[t("div",{class:o(e.$style["contents-list__symbol"])},"2",2),t("div",{class:o(e.$style["contents-list__title"])}," ‘공동인증서 내보내기’ 버튼을 선택한 후, 인증서 비밀번호를 입력해주세요 ",2)],2)],2),t("li",{class:o(e.$style["contents-list__item"])},[t("div",{class:o(e.$style["contents-list__head"])},[t("div",{class:o(e.$style["contents-list__symbol"])},"3",2),t("div",{class:o(e.$style["contents-list__title"])}," PC 화면에 표시된 인증번호 8자리 입력하거나, ‘QR코드로 가져오기’ 선택하여 QR코드를 촬영해주세요. ",2)],2)],2),t("li",{class:o(e.$style["contents-list__item"])},[t("div",{class:o(e.$style["contents-list__head"])},[t("div",{class:o(e.$style["contents-list__symbol"])},"4",2),t("div",{class:o(e.$style["contents-list__title"])}," ‘공동인증서 가져오기’ 버튼 선택하시면 가져오기가 완료됩니다. ",2)],2)],2)],2)],2)])]),_:1})}const Y={$style:J},pt=C(K,[["render",X],["__cssModules",Y]]);export{pt as default};
