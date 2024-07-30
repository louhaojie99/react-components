"use strict";(self.webpackChunk_louhaojie99_react_components=self.webpackChunk_louhaojie99_react_components||[]).push([[237],{47577:function(m,t,n){n.r(t),n.d(t,{demos:function(){return v}});var a=n(17061),r=n.n(a),i=n(17156),s=n.n(i),u=n(67294),y=n(342),v={"asyncbutton-demo-demo":{component:u.memo(u.lazy(function(){return n.e(290).then(n.bind(n,74294))})),asset:{type:"BLOCK",id:"asyncbutton-demo-demo",refAtomIds:["AsyncButton"],dependencies:{"index.tsx":{type:"FILE",value:n(71166).Z},"@louhaojie99/react-components":{type:"NPM",value:"0.0.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@louhaojie99/react-components":n(83099),react:n(67294)},renderOpts:{compile:function(){var f=s()(r()().mark(function p(){var l,c=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.e(335).then(n.bind(n,37335));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,c));case 3:case"end":return o.stop()}},p)}));function h(){return f.apply(this,arguments)}return h}()}}}},83099:function(m,t,n){n.r(t),n.d(t,{AsyncButton:function(){return M}});var a=n(42122),r=n.n(a),i=n(17061),s=n.n(i),u=n(17156),y=n.n(u),v=n(27424),f=n.n(v),h=n(70215),p=n.n(h),l=n(65854),c=n(67294),A=n(85893),o=["onClick"],I=c.memo(function(E){var d=E.onClick,O=p()(E,o),j=(0,c.useState)(void 0),P=f()(j,2),T=P[0],B=P[1],g=function(){var R=y()(s()().mark(function C(D){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(d){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,B(!0),e.next=6,d==null?void 0:d(D);case 6:return e.prev=6,B(!1),e.finish(6);case 9:case"end":return e.stop()}},C,null,[[2,,6,9]])}));return function(D){return R.apply(this,arguments)}}();return(0,A.jsx)(l.ZP,r()({loading:T,onClick:g},O))}),M=I},68051:function(m,t,n){n.r(t),n.d(t,{texts:function(){return r}});var a=n(342);const r=[{value:"\u4E00\u4E2A\u652F\u6301\u5F02\u6B65\u7684\u6309\u94AE\uFF0ConClick \u4F20\u5165\u5F02\u6B65\u51FD\u6570\u5219\u81EA\u52A8\u663E\u793A loading",paraId:0,tocIndex:0},{value:"\u914D\u7F6E\u53C2\u8003\uFF1A",paraId:1,tocIndex:2},{value:"Ant Design => Button API",paraId:1,tocIndex:2}]},71166:function(m,t){t.Z=`import { AsyncButton } from '@louhaojie99/react-components';
import React from 'react';

function sleep(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

const Demos = () => {
  // \u5F02\u6B65\u51FD\u6570
  const handleSubmit = async () => {
    await sleep(1500);
  };

  // \u666E\u901A\u51FD\u6570
  const handleClick = () => {
    alert('1');
  };

  return (
    <>
      <p>
        <AsyncButton type="primary" onClick={handleSubmit}>
          \u70B9\u51FB\u6211-\u6267\u884C\u5F02\u6B65\u51FD\u6570
        </AsyncButton>
      </p>

      <p>
        <AsyncButton type="default" onClick={handleClick}>
          \u70B9\u51FB\u6211-\u6267\u884C\u666E\u901A\u51FD\u6570
        </AsyncButton>
      </p>
    </>
  );
};

export default Demos;
`}}]);
