(self.webpackChunk_louhaojie99_react_components=self.webpackChunk_louhaojie99_react_components||[]).push([[433],{88260:function(S,y,i){"use strict";i.r(y);var x=i(15009),E=i.n(x),c=i(99289),p=i.n(c),v=i(2762),h=i(67294),g=i(85893);function I(M){return new Promise(function(P){setTimeout(P,M)})}var w=function(){var P=function(){var D=p()(E()().mark(function K(){return E()().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:return L.next=2,I(1500);case 2:case"end":return L.stop()}},K)}));return function(){return D.apply(this,arguments)}}(),r=function(){alert("1")};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("p",{children:(0,g.jsx)(v.Z6,{type:"primary",onClick:P,children:"\u70B9\u51FB\u6211-\u6267\u884C\u5F02\u6B65\u51FD\u6570"})}),(0,g.jsx)("p",{children:(0,g.jsx)(v.Z6,{type:"default",onClick:r,children:"\u70B9\u51FB\u6211-\u6267\u884C\u666E\u901A\u51FD\u6570"})})]})};y.default=w},70408:function(S,y,i){"use strict";i.r(y);var x=i(5574),E=i.n(x),c=i(2762),p=i(14726),v=i(67294),h=i(85893),g=function(){var w=(0,v.useState)(!1),M=E()(w,2),P=M[0],r=M[1];return(0,v.useEffect)(function(){if(P){var D=setTimeout(function(){r(!1)},2e3);return function(){clearTimeout(D)}}},[P]),(0,h.jsxs)("div",{style:{position:"relative"},children:[(0,h.jsx)(p.ZP,{type:"primary",onClick:function(){r(!0)},children:"\u70B9\u51FB\u6D4B\u8BD5"}),(0,h.jsx)(c.oC,{spinning:P}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:"\u5C0F\u9177\u540C\u5B66"}),(0,h.jsx)("li",{children:"\u5C0F\u6A31\u540C\u5B66"})]})]})};y.default=g},79341:function(S,y,i){"use strict";i.r(y);var x=i(2762),E=i(67294),c=i(85893),p=function(){return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(x.h_,{children:(0,c.jsx)("h1",{children:"\u6211\u5728 document body \u91CC"})})})};y.default=p},2762:function(S,y,i){"use strict";i.d(y,{Z6:function(){return L},oC:function(){return De},h_:function(){return ne}});var x=i(97857),E=i.n(x),c=i(15009),p=i.n(c),v=i(99289),h=i.n(v),g=i(5574),I=i.n(g),w=i(13769),M=i.n(w),P=i(14726),r=i(67294),D=i(85893),K=["onClick"],Z=r.memo(function(e){var t=e.onClick,n=M()(e,K),o=(0,r.useState)(void 0),a=I()(o,2),l=a[0],u=a[1],C=function(){var _=h()(p()().mark(function f(m){return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(t){s.next=2;break}return s.abrupt("return");case 2:return s.prev=2,u(!0),s.next=6,t==null?void 0:t(m);case 6:return s.prev=6,u(!1),s.finish(6);case 9:case"end":return s.stop()}},f,null,[[2,,6,9]])}));return function(m){return _.apply(this,arguments)}}();return(0,D.jsx)(P.ZP,E()({loading:l,onClick:C},n))}),L=Z,ee=i(73935),te=function(t){var n=t.children,o=t.container;return ee.createPortal(n,o||document.body)},ne=te,ie=i(93967),O=i.n(ie);function oe(e,t,n){var o=n||{},a=o.noTrailing,l=a===void 0?!1:a,u=o.noLeading,C=u===void 0?!1:u,_=o.debounceMode,f=_===void 0?void 0:_,m,b=!1,s=0;function z(){m&&clearTimeout(m)}function A(d){var T=d||{},$=T.upcomingOnly,B=$===void 0?!1:$;z(),b=!B}function R(){for(var d=arguments.length,T=new Array(d),$=0;$<d;$++)T[$]=arguments[$];var B=this,j=Date.now()-s;if(b)return;function N(){s=Date.now(),t.apply(B,T)}function F(){m=void 0}!C&&f&&!m&&N(),z(),f===void 0&&j>e?C?(s=Date.now(),l||(m=setTimeout(f?F:N,e))):N():l!==!0&&(m=setTimeout(f?F:N,f===void 0?e-j:e))}return R.cancel=A,R}function re(e,t,n){var o=n||{},a=o.atBegin,l=a===void 0?!1:a;return oe(e,t,{debounceMode:l!==!1})}var V=i(53124),ae=i(96159),se=i(8410);function le(e){let{percent:t,prefixCls:n}=e;const o=`${n}-dot`,a=`${o}-holder`,l=`${a}-hidden`,[u,C]=r.useState(!1);(0,se.Z)(()=>{t!==0&&C(!0)},[t!==0]);const _=Math.max(Math.min(t,100),0),f=100,m=f/5,b=f/2-m/2,s=b*2*Math.PI,z=(A,R)=>r.createElement("circle",{className:O()(A,`${o}-circle`),r:b,cx:"50",cy:"50",strokeWidth:m,style:R});return u?r.createElement("span",{className:O()(a,`${o}-progress`,_<=0&&l)},r.createElement("svg",{viewBox:`0 0 ${f} ${f}`,role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":_},z(`${o}-circle-bg`),z("",{strokeDasharray:`${s*_/100} ${s*(100-_)/100}`,strokeDashoffset:`${s/4}`}))):null}function ce(e){const{prefixCls:t,percent:n=0}=e,o=`${t}-dot`,a=`${o}-holder`,l=`${a}-hidden`;return r.createElement(r.Fragment,null,r.createElement("span",{className:O()(a,n>0&&l)},r.createElement("span",{className:O()(o,`${t}-dot-spin`)},[1,2,3,4].map(u=>r.createElement("i",{className:`${t}-dot-item`,key:u})))),r.createElement(le,{prefixCls:t,percent:n}))}function ue(e){const{prefixCls:t,indicator:n,percent:o}=e,a=`${t}-dot`;return n&&r.isValidElement(n)?(0,ae.Tm)(n,{className:O()(n.props.className,a),percent:o}):r.createElement(ce,{prefixCls:t,percent:o})}var Y=i(11568),de=i(14747),me=i(83559),fe=i(83262);const pe=new Y.E4("antSpinMove",{to:{opacity:1}}),ve=new Y.E4("antRotate",{to:{transform:"rotate(405deg)"}}),he=e=>{const{componentCls:t,calc:n}=e;return{[`${t}`]:Object.assign(Object.assign({},(0,de.Wf)(e)),{position:"absolute",display:"none",color:e.colorPrimary,fontSize:0,textAlign:"center",verticalAlign:"middle",opacity:0,transition:`transform ${e.motionDurationSlow} ${e.motionEaseInOutCirc}`,"&-spinning":{position:"relative",display:"inline-block",opacity:1},[`${t}-text`]:{fontSize:e.fontSize,paddingTop:n(n(e.dotSize).sub(e.fontSize)).div(2).add(2).equal()},"&-fullscreen":{position:"fixed",width:"100vw",height:"100vh",backgroundColor:e.colorBgMask,zIndex:e.zIndexPopupBase,inset:0,display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center",opacity:0,visibility:"hidden",transition:`all ${e.motionDurationMid}`,"&-show":{opacity:1,visibility:"visible"},[t]:{[`${t}-dot-holder`]:{color:e.colorWhite},[`${t}-text`]:{color:e.colorTextLightSolid}}},"&-nested-loading":{position:"relative",[`> div > ${t}`]:{position:"absolute",top:0,insetInlineStart:0,zIndex:4,display:"block",width:"100%",height:"100%",maxHeight:e.contentHeight,[`${t}-dot`]:{position:"absolute",top:"50%",insetInlineStart:"50%",margin:n(e.dotSize).mul(-1).div(2).equal()},[`${t}-text`]:{position:"absolute",top:"50%",width:"100%",textShadow:`0 1px 2px ${e.colorBgContainer}`},[`&${t}-show-text ${t}-dot`]:{marginTop:n(e.dotSize).div(2).mul(-1).sub(10).equal()},"&-sm":{[`${t}-dot`]:{margin:n(e.dotSizeSM).mul(-1).div(2).equal()},[`${t}-text`]:{paddingTop:n(n(e.dotSizeSM).sub(e.fontSize)).div(2).add(2).equal()},[`&${t}-show-text ${t}-dot`]:{marginTop:n(e.dotSizeSM).div(2).mul(-1).sub(10).equal()}},"&-lg":{[`${t}-dot`]:{margin:n(e.dotSizeLG).mul(-1).div(2).equal()},[`${t}-text`]:{paddingTop:n(n(e.dotSizeLG).sub(e.fontSize)).div(2).add(2).equal()},[`&${t}-show-text ${t}-dot`]:{marginTop:n(e.dotSizeLG).div(2).mul(-1).sub(10).equal()}}},[`${t}-container`]:{position:"relative",transition:`opacity ${e.motionDurationSlow}`,"&::after":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,zIndex:10,width:"100%",height:"100%",background:e.colorBgContainer,opacity:0,transition:`all ${e.motionDurationSlow}`,content:'""',pointerEvents:"none"}},[`${t}-blur`]:{clear:"both",opacity:.5,userSelect:"none",pointerEvents:"none","&::after":{opacity:.4,pointerEvents:"auto"}}},"&-tip":{color:e.spinDotDefault},[`${t}-dot-holder`]:{width:"1em",height:"1em",fontSize:e.dotSize,display:"inline-block",transition:`transform ${e.motionDurationSlow} ease, opacity ${e.motionDurationSlow} ease`,transformOrigin:"50% 50%",lineHeight:1,color:e.colorPrimary,"&-hidden":{transform:"scale(0.3)",opacity:0}},[`${t}-dot-progress`]:{position:"absolute",top:"50%",transform:"translateY(-50%)",insetInlineStart:0},[`${t}-dot`]:{position:"relative",display:"inline-block",fontSize:e.dotSize,width:"1em",height:"1em","&-item":{position:"absolute",display:"block",width:n(e.dotSize).sub(n(e.marginXXS).div(2)).div(2).equal(),height:n(e.dotSize).sub(n(e.marginXXS).div(2)).div(2).equal(),background:"currentColor",borderRadius:"100%",transform:"scale(0.75)",transformOrigin:"50% 50%",opacity:.3,animationName:pe,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear",animationDirection:"alternate","&:nth-child(1)":{top:0,insetInlineStart:0,animationDelay:"0s"},"&:nth-child(2)":{top:0,insetInlineEnd:0,animationDelay:"0.4s"},"&:nth-child(3)":{insetInlineEnd:0,bottom:0,animationDelay:"0.8s"},"&:nth-child(4)":{bottom:0,insetInlineStart:0,animationDelay:"1.2s"}},"&-spin":{transform:"rotate(45deg)",animationName:ve,animationDuration:"1.2s",animationIterationCount:"infinite",animationTimingFunction:"linear"},"&-circle":{strokeLinecap:"round",transition:["stroke-dashoffset","stroke-dasharray","stroke","stroke-width","opacity"].map(o=>`${o} ${e.motionDurationSlow} ease`).join(","),fillOpacity:0,stroke:"currentcolor"},"&-circle-bg":{stroke:e.colorFillSecondary}},[`&-sm ${t}-dot`]:{"&, &-holder":{fontSize:e.dotSizeSM}},[`&-sm ${t}-dot-holder`]:{i:{width:n(n(e.dotSizeSM).sub(n(e.marginXXS).div(2))).div(2).equal(),height:n(n(e.dotSizeSM).sub(n(e.marginXXS).div(2))).div(2).equal()}},[`&-lg ${t}-dot`]:{"&, &-holder":{fontSize:e.dotSizeLG}},[`&-lg ${t}-dot-holder`]:{i:{width:n(n(e.dotSizeLG).sub(e.marginXXS)).div(2).equal(),height:n(n(e.dotSizeLG).sub(e.marginXXS)).div(2).equal()}},[`&${t}-show-text ${t}-text`]:{display:"block"}})}},ge=e=>{const{controlHeightLG:t,controlHeight:n}=e;return{contentHeight:400,dotSize:t/2,dotSizeSM:t*.35,dotSizeLG:n}};var _e=(0,me.I$)("Spin",e=>{const t=(0,fe.IX)(e,{spinDotDefault:e.colorTextDescription});return[he(t)]},ge);const Se=200,J=[[30,.05],[70,.03],[96,.01]];function ye(e,t){const[n,o]=r.useState(0),a=r.useRef(),l=t==="auto";return r.useEffect(()=>(l&&e&&(o(0),a.current=setInterval(()=>{o(u=>{const C=100-u;for(let _=0;_<J.length;_+=1){const[f,m]=J[_];if(u<=f)return u+C*m}return u})},Se)),()=>{clearInterval(a.current)}),[l,e]),l?n:t}var Ee=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]]);return n};const Te=null;let Q;function Ce(e,t){return!!e&&!!t&&!isNaN(Number(t))}const q=e=>{const{prefixCls:t,spinning:n=!0,delay:o=0,className:a,rootClassName:l,size:u="default",tip:C,wrapperClassName:_,style:f,children:m,fullscreen:b=!1,indicator:s,percent:z}=e,A=Ee(e,["prefixCls","spinning","delay","className","rootClassName","size","tip","wrapperClassName","style","children","fullscreen","indicator","percent"]),{getPrefixCls:R}=r.useContext(V.E_),d=R("spin",t),[T,$,B]=_e(d),[j,N]=r.useState(()=>n&&!Ce(n,o)),F=ye(j,z);r.useEffect(()=>{if(n){const U=re(o,()=>{N(!0)});return U(),()=>{var H;(H=U==null?void 0:U.cancel)===null||H===void 0||H.call(U)}}N(!1)},[o,n]);const k=r.useMemo(()=>typeof m!="undefined"&&!b,[m,b]),{direction:Pe,spin:W}=r.useContext(V.E_),Oe=O()(d,W==null?void 0:W.className,{[`${d}-sm`]:u==="small",[`${d}-lg`]:u==="large",[`${d}-spinning`]:j,[`${d}-show-text`]:!!C,[`${d}-rtl`]:Pe==="rtl"},a,!b&&l,$,B),je=O()(`${d}-container`,{[`${d}-blur`]:j}),Me=Object.assign(Object.assign({},W==null?void 0:W.style),f),X=r.createElement("div",Object.assign({},A,{style:Me,className:Oe,"aria-live":"polite","aria-busy":j}),r.createElement(ue,{prefixCls:d,indicator:s!=null?s:Q,percent:F}),C&&(k||b)?r.createElement("div",{className:`${d}-text`},C):null);return T(k?r.createElement("div",Object.assign({},A,{className:O()(`${d}-nested-loading`,_,$,B)}),j&&r.createElement("div",{key:"loading"},X),r.createElement("div",{className:je,key:"container"},m)):b?r.createElement("div",{className:O()(`${d}-fullscreen`,{[`${d}-fullscreen-show`]:j},l,$,B)},X):X)};q.setDefaultIndicator=e=>{Q=e};var be=q,xe=["spinning","background","tip"],G="overlay-spin",$e=function(t){var n=t.spinning,o=t.background,a=o===void 0?"#fff":o,l=t.tip,u=M()(t,xe);return n?(0,D.jsxs)("div",{className:"".concat(G,"-container"),style:{"--background":a},children:[(0,D.jsx)(be,E()({className:G,spinning:n},u)),l&&(0,D.jsx)("div",{className:"".concat(G,"-tip"),children:l})]}):null},De=$e},13769:function(S,y,i){var x=i(48541);function E(c,p){if(c==null)return{};var v=x(c,p),h,g;if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(c);for(g=0;g<I.length;g++)h=I[g],!(p.indexOf(h)>=0)&&Object.prototype.propertyIsEnumerable.call(c,h)&&(v[h]=c[h])}return v}S.exports=E,S.exports.__esModule=!0,S.exports.default=S.exports},48541:function(S){function y(i,x){if(i==null)return{};var E={},c=Object.keys(i),p,v;for(v=0;v<c.length;v++)p=c[v],!(x.indexOf(p)>=0)&&(E[p]=i[p]);return E}S.exports=y,S.exports.__esModule=!0,S.exports.default=S.exports}}]);
