"use strict";(self.webpackChunklot_scada=self.webpackChunklot_scada||[]).push([[584],{7584:function(e,t,n){n.r(t),n.d(t,{FakeData:function(){return p}});var o=n(9439),i=n(3099),l=n(8443),a=n(2730),c=n(4835),r=n(2791),s=n(8399),u=(n(8219),n(8716),n(8418)),d=n(4988),f=n(184),p=function(e){var t=r.useState(!1),n=(0,o.Z)(t,2),p=n[0],h=n[1],v=r.useState(!1),b=(0,o.Z)(v,2),g=b[0],y=b[1],j=r.useState("/*\n* payload variable contains current payload.\n* e.g. payload.data.myValue\n*\n* You can modify the current payload variable\n* or return an object that will entirely\n* replace the payload.\n*\n* console.log() will write a message to\n* the Debug tab.\n*\n* The Buffer object is available for\n* complex parsing: https://nodejs.org/dist/latest-v6.x/docs/api/buffer.html\n*/"),m=(0,o.Z)(j,2),w=m[0],x=m[1],k=(0,u.N)(w,2e3);r.useEffect((function(){if(e){var t,n,o=null===(t=e.cell)||void 0===t?void 0:t.toJSON();x(null===(n=o.config)||void 0===n?void 0:n.script)}}),[e.cellId]),r.useEffect((function(){var t;null===(t=e.cell)||void 0===t||t.prop("config",{script:k})}),[e.cellId,k]);return(0,f.jsx)(i.Z,{direction:"vertical",children:(0,f.jsxs)(l.Z,{children:[(0,f.jsx)(a.Z,{title:"Function (JavaScript)",extra:(0,f.jsx)(d.Z,{onClick:function(){h(!0)}}),style:{width:220},bodyStyle:{width:220,overflow:"auto"},children:(0,f.jsx)("pre",{children:k})}),(0,f.jsx)(c.Z,{title:"Title",visible:p,onOk:function(){y(!0),setTimeout((function(){h(!1),y(!1)}),500)},confirmLoading:g,onCancel:function(){console.log("Clicked cancel button"),h(!1)},width:1e3,children:(0,f.jsx)(s.ZP,{mode:"javascript",theme:"tomorrow",name:"editor",onChange:function(e){x(e)},value:w,fontSize:14,style:{width:"900px"},editorProps:{$blockScrolling:!0}})})]})})}}}]);
//# sourceMappingURL=584.61a568d1.chunk.js.map