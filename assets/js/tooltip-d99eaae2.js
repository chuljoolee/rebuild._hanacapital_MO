import{_ as z}from"./index-e947383e.js";import{b as M,r as _,j as x,k as K,l as j,q as k,s as C,v as c,y as v,x as b,z as y,n as u}from"./vue-d8bdde7d.js";const S="_tooltip_12v5q_1",W="_tooltip__button_12v5q_5",I="_tooltip__bubble_12v5q_9",O="_tooltip__tail_12v5q_21",H={tooltip:S,tooltip__button:W,tooltip__bubble:I,tooltip__tail:O,"tooltip--bottom":"_tooltip--bottom_12v5q_30","tooltip--fit":"_tooltip--fit_12v5q_38"},w=()=>({wrap:"",button:"",bubble:"",tail:""}),P={props:{classNames:{Type:Object,default(){return w()}},placement:{Type:String,default:"top"},fit:{Type:Boolean,default:!1}},setup(e){const t=M({show:!1,top:0,tailLeft:0,isBubbleClick:!1,isButtonClick:!1}),i=_(null),o=_(null),f=x(()=>{const{classNames:n}=e;return Object.assign(w(),n)}),s=()=>{if(!t.show)return;const{placement:n}=e,a=i.value,E=o.value,N=a.offsetWidth,L=E.offsetWidth,T=(()=>{const r=a.offsetLeft-20+N/2,p=L-22;return r<22?22:r>p?p:r})();n==="bottom"?t.top=0:t.top=a.offsetHeight+12,t.tailLeft=T},l=()=>{t.show=!t.show,u(()=>{s()})},q=()=>{t.show=!0,u(()=>{s()})},d=()=>{t.show=!1,u(()=>{s()})},m=()=>{!t.isBubbleClick&&!t.isButtonClick&&d(),t.isBubbleClick=!1,t.isButtonClick=!1},B=()=>{t.isBubbleClick=!0},g=()=>{l(),t.isButtonClick=!0},h=n=>{const{keyCode:a}=n;switch(a){case 13:case 32:l();break}};return K(()=>{const n=document.getElementsByTagName("body")[0];s(),n.addEventListener("click",m),window.addEventListener("resize",s),window.addEventListener("orientationchange",s)}),j(()=>{document.getElementsByTagName("body")[0].removeEventListener("click",m),window.removeEventListener("resize",s),window.removeEventListener("orientationchange",s)}),{state:t,button:i,bubble:o,customClassNames:f,toggle:l,open:q,close:d,onClick:g,onKeyup:h,bubbleClick:B}}};function U(e,t,i,o,f,s){return k(),C("div",{class:b([e.$style.tooltip,{[e.$style["tooltip--bottom"]]:i.placement==="bottom",[e.$style["tooltip--fit"]]:i.fit,"is-show":o.state.show},o.customClassNames.wrap])},[c("div",{ref:"button",class:b([e.$style.tooltip__button,o.customClassNames.button]),tabindex:"0",role:"button",onClick:t[0]||(t[0]=(...l)=>o.onClick&&o.onClick(...l)),onKeyup:t[1]||(t[1]=(...l)=>o.onKeyup&&o.onKeyup(...l))},[v(e.$slots,"default")],34),c("div",{ref:"bubble",class:b([e.$style.tooltip__bubble,o.customClassNames.bubble]),style:y(`margin-top: -${o.state.top}px;`),onClick:t[2]||(t[2]=(...l)=>o.bubbleClick&&o.bubbleClick(...l))},[c("div",{class:b([e.$style.tooltip__tail,o.customClassNames.tail]),style:y(`left: ${o.state.tailLeft}px;`)},null,6),v(e.$slots,"contents")],6)],2)}const V={$style:H},J=z(P,[["render",U],["__cssModules",V]]),A={xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",fill:"none",viewBox:"0 0 22 22"};function D(e,t){return k(),C("svg",A,t[0]||(t[0]=[c("path",{fill:"#9E9E9E",d:"M20.165 11a9.167 9.167 0 1 1-18.333 0 9.167 9.167 0 0 1 18.333 0"},null,-1),c("path",{fill:"#fff",d:"M10.902 5.5q.77 0 1.383.2.612.185 1.04.541.428.343.657.828.228.485.228 1.069v.157q0 .342-.086.656-.072.3-.27.613-.186.313-.528.67-.33.357-.828.813-.314.285-.498.499a2 2 0 0 0-.286.385q-.1.171-.128.356a2.5 2.5 0 0 0-.029.4q0 .328-.256.513a.9.9 0 0 1-.57.185 1.1 1.1 0 0 1-.614-.17q-.256-.186-.256-.571 0-.37.042-.67t.157-.57q.129-.285.357-.557.242-.285.627-.627.443-.385.699-.642.27-.27.413-.485.143-.213.186-.385.042-.184.042-.399v-.071q0-.228-.085-.428a1 1 0 0 0-.271-.356 1.16 1.16 0 0 0-.47-.243q-.285-.1-.713-.1-.57 0-.999.171a4 4 0 0 0-.812.442q-.285.2-.57.143a.86.86 0 0 1-.471-.342.9.9 0 0 1-.2-.57q.015-.33.3-.542a4.2 4.2 0 0 1 1.211-.656q.7-.257 1.598-.257m-.186 8.84q.456 0 .77.314.315.314.314.77 0 .457-.314.77-.314.315-.77.314-.456 0-.77-.314a1.05 1.05 0 0 1-.314-.77q0-.456.314-.77.314-.313.77-.313"},null,-1)]))}const Q={render:D};export{J as B,Q as I};
