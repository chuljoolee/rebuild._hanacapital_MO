import{P as u}from"./PageContents-0e324a49.js";import{_,B as f}from"./index-e947383e.js";import{B,a as d}from"./ButtonListItem-9467df73.js";import{A as g}from"./AlertSystem-a81c5ee8.js";import{r as C,A,H as n,J as o,q as L,K as s,L as k}from"./vue-d8bdde7d.js";import"./vendor-7adcf331.js";import"./chart-c302dd5a.js";import"./PopupTitle-668cc03b.js";import"./PopupText-5271f7dc.js";import"./AlertPopup-0bc4699e.js";const x={components:{PageContents:u,BasicButton:f,ButtonList:B,ButtonListItem:d,AlertSystem:g},setup(){const a=C(null),e=t=>{a.value.open(t)};return{alert:a,alertOpen001:()=>{e({message:`여기에 내용이 표시될 예정입니다.
줄바꿈은 \\n 이용.
세 줄일 경우는 이렿게 표시됩니다.`,buttons:[{callback:t=>{console.log("확인"),t()},closeAfterCallback:()=>{console.log("[확인] 닫는 애니메이션 끝난 후 호출 될 함수")}}]})}}}};function O(a,e,r,t,P,b){const l=o("BasicButton"),c=o("ButtonListItem"),m=o("ButtonList"),p=o("AlertSystem"),i=o("PageContents");return L(),A(i,null,{default:n(()=>[s(m,{classNames:{wrap:"row-margin-none"},align:"full"},{default:n(()=>[s(c,null,{default:n(()=>[s(l,{onClick:t.alertOpen001},{default:n(()=>e[0]||(e[0]=[k("얼럿")])),_:1},8,["onClick"])]),_:1})]),_:1}),s(p,{ref:"alert"},null,512)]),_:1})}const H=_(x,[["render",O]]);export{H as default};
