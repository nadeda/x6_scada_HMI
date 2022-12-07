"use strict";(self.webpackChunklot_scada=self.webpackChunklot_scada||[]).push([[416],{9416:function(e,l,n){n.r(l),n.d(l,{FakeData:function(){return w}});var i=n(3433),t=n(9439),o=n(6818),a=n(3099),c=n(1333),r=n(8443),d=n(9389),s=n(2730),u=n(4835),h=n(4940),p=n(7528),v=n(2014),f=n(3231),g=n(2791),m=n(8399),Z=(n(8219),n(8716),n(8418)),x=n(4988),j=n(184),T=o.Z.Option,C=["GET","POST","PUT","PATCH","DELETE"],S=["ascii","utf8","utf16le","base64","binary","hex"],y=[{value:"Accept",label:"Accept"},{value:"Accept-Charset",label:"Accept-Charset"},{value:"Accept-Datetime",label:"Accept-Datetime"},{value:"Accept-Encoding",label:"Accept-Encoding"},{value:"Accept-Language",label:"Accept-Language"}],b=[{value:"application/atom+xml",label:"application/atom+xml"},{value:"application/ecmascript",label:"application/ecmascript"},{value:"application/font-woff",label:"application/font-woff"},{value:"application/graphql",label:"application/graphql"},{value:"application/gzip",label:"application/gzip"}],w=function(e){var l,n,w,P,k,E,A,L,R,O,q,z,N,V,B,D,F,I,$,G,H,J,K=null===(l=e.cell)||void 0===l?void 0:l.toJSON(),U=g.useState(!1),_=(0,t.Z)(U,2),M=_[0],W=_[1],Q=g.useState(!1),X=(0,t.Z)(Q,2),Y=X[0],ee=X[1],le=g.useState(!1),ne=(0,t.Z)(le,2),ie=ne[0],te=ne[1],oe=g.useState((null===K||void 0===K||null===(n=K.config)||void 0===n?void 0:n.method)||C[0]),ae=(0,t.Z)(oe,2),ce=ae[0],re=ae[1],de=g.useState((null===(w=K.config)||void 0===w?void 0:w.uriTemplate)||""),se=(0,t.Z)(de,2),ue=se[0],he=se[1],pe=g.useState((null===(P=K.config)||void 0===P?void 0:P.timeoutTemplate)||""),ve=(0,t.Z)(pe,2),fe=ve[0],ge=ve[1],me=g.useState((null===(k=K.config)||void 0===k?void 0:k.requestEncodingTemplate)||S[0]),Ze=(0,t.Z)(me,2),xe=Ze[0],je=Ze[1],Te=g.useState((null===(E=K.config)||void 0===E?void 0:E.bodyTemplate)||""),Ce=(0,t.Z)(Te,2),Se=Ce[0],ye=Ce[1],be=(0,Z.N)(Se,2e3),we=g.useState((null===(A=K.config)||void 0===A?void 0:A.authType)||"none"),Pe=(0,t.Z)(we,2),ke=Pe[0],Ee=Pe[1],Ae=g.useState((null===(L=K.config)||void 0===L||null===(R=L.authCredentials)||void 0===R?void 0:R.usernameTemplate)||""),Le=(0,t.Z)(Ae,2),Re=Le[0],Oe=Le[1],qe=g.useState((null===(O=K.config)||void 0===O||null===(q=O.authCredentials)||void 0===q?void 0:q.passwordTemplate)||""),ze=(0,t.Z)(qe,2),Ne=ze[0],Ve=ze[1],Be=g.useState((null===(z=K.config)||void 0===z||null===(N=z.authCredentials)||void 0===N?void 0:N.keyTemplate)||""),De=(0,t.Z)(Be,2),Fe=De[0],Ie=De[1],$e=g.useState((null===(V=K.config)||void 0===V||null===(B=V.authCredentials)||void 0===B?void 0:B.certTemplate)||""),Ge=(0,t.Z)($e,2),He=Ge[0],Je=Ge[1],Ke=g.useState((null===(D=K.config)||void 0===D?void 0:D.disableSSLVerification)||!1),Ue=(0,t.Z)(Ke,2),_e=Ue[0],Me=Ue[1],We=g.useState((null===(F=K.config)||void 0===F?void 0:F.caCertTemplate)||""),Qe=(0,t.Z)(We,2),Xe=Qe[0],Ye=Qe[1],el=(0,Z.N)(Xe,2e3),ll=g.useState((null===(I=K.config)||void 0===I?void 0:I.encodingTemplate)||S[0]),nl=(0,t.Z)(ll,2),il=nl[0],tl=nl[1],ol=g.useState((null===($=K.config)||void 0===$?void 0:$.responsePath)||""),al=(0,t.Z)(ol,2),cl=al[0],rl=al[1],dl=g.useState((null===(G=K.config)||void 0===G?void 0:G.errorBehavior)||""),sl=(0,t.Z)(dl,2),ul=sl[0],hl=sl[1],pl=g.useState((null===(H=K.config)||void 0===H?void 0:H.errorPath)||""),vl=(0,t.Z)(pl,2),fl=vl[0],gl=vl[1],ml=g.useState((null===(J=K.config)||void 0===J?void 0:J.headerInfo)||[]),Zl=(0,t.Z)(ml,2),xl=Zl[0],jl=Zl[1],Tl=g.useState([]),Cl=(0,t.Z)(Tl,2),Sl=Cl[0],yl=(Cl[1],g.useState(0)),bl=(0,t.Z)(yl,2),wl=bl[0],Pl=bl[1];g.useEffect((function(){var e,l,n,i,t,o,a,c,r,d,s,u,h,p,v,f,g,m,Z,x,j;re(null===(e=K.config)||void 0===e?void 0:e.method),he(null===(l=K.config)||void 0===l?void 0:l.uriTemplate),ge(null===(n=K.config)||void 0===n?void 0:n.timeoutTemplate),je(null===(i=K.config)||void 0===i?void 0:i.requestEncodingTemplate),ye(null===(t=K.config)||void 0===t?void 0:t.bodyTemplate),Ee(null===(o=K.config)||void 0===o?void 0:o.authType),Oe(null===(a=K.config)||void 0===a||null===(c=a.authCredentials)||void 0===c?void 0:c.React.usernameTemplate),Ve(null===(r=K.config)||void 0===r||null===(d=r.authCredentials)||void 0===d?void 0:d.passwordTemplate),Je(null===(s=K.config)||void 0===s||null===(u=s.authCredentials)||void 0===u?void 0:u.certTemplate),Ie(null===(h=K.config)||void 0===h||null===(p=h.authCredentials)||void 0===p?void 0:p.keyTemplate),Me(null===(v=K.config)||void 0===v?void 0:v.disableSSLVerification),Ye(null===(f=K.config)||void 0===f?void 0:f.caCertTemplate),tl(null===(g=K.config)||void 0===g?void 0:g.encodingTemplate),rl(null===(m=K.config)||void 0===m?void 0:m.responsePath),hl(null===(Z=K.config)||void 0===Z?void 0:Z.errorBehavior),gl(null===(x=K.config)||void 0===x?void 0:x.errorPath),jl((null===(j=K.config)||void 0===j?void 0:j.headerInfo)||[])}),[e.cellId]),g.useEffect((function(){var l;null===(l=e.cell)||void 0===l||l.prop("config",{method:ce,uriTemplate:ue,timeoutTemplate:fe,requestEncodingTemplate:xe,bodyTemplate:Se,authType:ke,config:{authCredentials:{usernameTemplate:Re,passwordTemplate:Ne,certTemplate:He,keyTemplate:Fe}},disableSSLVerification:_e,caCertTemplate:Xe,encodingTemplate:il,responsePath:cl,errorBehavior:ul,errorPath:fl,headerInfo:(0,i.Z)(xl)})}),[e.cellId,ce,ue,fe,xe,Se,ke,Re,Ne,He,Fe,_e,Xe,il,cl,ul,fl,xl]);var kl=function(){ee(!0)},El=function(){te(!0),setTimeout((function(){W(!1),ee(!1),te(!1)}),500)},Al=function(){console.log("Clicked cancel button"),W(!1),ee(!1)},Ll=Object(y).map((function(e){return{value:e.value,label:e.label,children:b}}));return(0,j.jsxs)(a.Z,{direction:"vertical",children:[(0,j.jsx)(c.Z,{plain:!0,children:"Request"}),(0,j.jsx)(r.Z,{children:"Request Method"}),(0,j.jsx)(r.Z,{children:(0,j.jsx)(o.Z,{defaultValue:C[0],value:ce,onChange:function(e){re(e),Pl(wl+1)},style:{width:"100%"},children:C.map((function(e){return(0,j.jsx)(T,{children:e},e)}))})}),(0,j.jsx)(r.Z,{children:"URL Template"}),(0,j.jsx)(r.Z,{children:(0,j.jsx)(d.Z,{placeholder:"http://foo.com,{{data.foo}}",value:ue,onChange:function(e){he(e.target.value),Pl(wl+1)}})}),(0,j.jsx)(r.Z,{children:"Timeout Template(Seconds)"}),(0,j.jsx)(r.Z,{children:(0,j.jsx)(d.Z,{placeholder:"30,{{data.timeout}}",value:fe,onChange:function(e){ge(e.target.value),Pl(wl+1)}})}),"GET"!==ce&&"DELETE"!==ce?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(r.Z,{children:"Body Encoding Type"}),(0,j.jsx)(r.Z,{children:(0,j.jsx)(o.Z,{defaultValue:S[0],value:xe,onChange:function(e){je(e),Pl(wl+1)},style:{width:"100%"},children:S.map((function(e){return(0,j.jsx)(T,{children:e},e)}))})}),(0,j.jsx)(r.Z,{children:"Body Template"}),(0,j.jsxs)(r.Z,{children:[(0,j.jsxs)(s.Z,{style:{width:240},bodyStyle:{width:220,overflow:"auto",padding:"8px"},onClick:kl,children:[(0,j.jsx)("pre",{children:be}),(0,j.jsx)(x.Z,{style:{float:"right",top:"10px"},onClick:kl})]}),(0,j.jsx)(u.Z,{title:"Title1",visible:Y,onOk:El,confirmLoading:ie,onCancel:Al,width:1e3,children:(0,j.jsx)(m.ZP,{mode:"javascript",theme:"tomorrow",name:"editor",onChange:function(e){ye(e),Pl(wl+1)},value:Se,fontSize:14,style:{width:"900px"},editorProps:{$blockScrolling:!0}})})]})]}):null,(0,j.jsx)(c.Z,{plain:!0,children:"Request Headers"}),(0,j.jsx)(r.Z,{children:"Name Template"}),(0,j.jsxs)(r.Z,{align:"middle",children:[(0,j.jsx)(h.Z,{options:Ll,style:{width:240},value:Sl,onChange:function(e){jl([].concat((0,i.Z)(xl),[{key:e[0],valueTemplate:e[1]}])),Pl(wl+1)},placeholder:"Please select"}),null===xl||void 0===xl?void 0:xl.map((function(e,l){var n="".concat(e.key," / ").concat(e.valueTemplate);return(0,j.jsx)(p.Z,{className:"edit-tag",closable:!0,onClose:function(){return function(e){var l=xl.filter((function(l){return JSON.stringify(l)!==JSON.stringify(e)}));jl(l),Pl(wl+1),console.log(l,xl)}(e)},children:n.length>33?"".concat(n.slice(0,33),"..."):n},e.key+e.valueTemplate)}))]}),(0,j.jsx)(c.Z,{plain:!0,children:"Authorization"}),(0,j.jsx)(r.Z,{children:"Authorization Type"}),(0,j.jsx)(r.Z,{children:(0,j.jsxs)(o.Z,{defaultValue:"none",value:ke,onChange:function(e){Ee(e),Pl(wl+1)},style:{width:"100%"},children:[(0,j.jsx)(T,{children:"None"},"none"),(0,j.jsx)(T,{children:"Basic"},"basic"),(0,j.jsx)(T,{children:"Client Certification"},"clientCert")]})}),"basic"===ke?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(r.Z,{children:"React.username"}),(0,j.jsx)(r.Z,{children:(0,j.jsx)(d.Z,{placeholder:"e.g.myReact.user or {{data.React.username}}",value:Re,onChange:function(e){Oe(e.target.value),Pl(wl+1)}})}),(0,j.jsx)(r.Z,{children:"Password"}),(0,j.jsx)(r.Z,{children:(0,j.jsx)(d.Z,{placeholder:"e.g.mypassword or {{data.password}}",value:Ne,onChange:function(e){Ve(e.target.value),Pl(wl+1)}})})]}):"clientCert"===ke?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(r.Z,{children:"Client Certificate Key"}),(0,j.jsx)(r.Z,{children:(0,j.jsx)(m.ZP,{mode:"javascript",theme:"tomorrow",name:"authKey",onChange:function(e){Ie(e),Pl(wl+1)},value:Fe,fontSize:14,style:{width:"240px"},editorProps:{$blockScrolling:!0},height:"250px"})}),(0,j.jsx)(r.Z,{children:"Client Certificate"}),(0,j.jsx)(r.Z,{children:(0,j.jsx)(m.ZP,{mode:"javascript",theme:"tomorrow",name:"authCert",onChange:function(e){Je(e),Pl(wl+1)},value:He,fontSize:14,height:"250px",style:{width:"240px"},editorProps:{$blockScrolling:!0}})})]}):null,(0,j.jsx)(c.Z,{plain:!0,children:"SSL Options"}),(0,j.jsx)(r.Z,{children:(0,j.jsx)(v.Z,{checked:_e,onChange:function(e){Me(e.target.checked),Pl(wl+1)},children:"Disable SSL Verification?"})}),_e?null:(0,j.jsxs)(r.Z,{children:[(0,j.jsx)(s.Z,{extra:(0,j.jsx)(x.Z,{onClick:function(){W(!0)}}),style:{width:220},bodyStyle:{width:220,overflow:"auto"},children:(0,j.jsx)("pre",{children:el})}),(0,j.jsx)(u.Z,{title:"Title",visible:M,onOk:El,confirmLoading:ie,onCancel:Al,width:1e3,children:(0,j.jsx)(m.ZP,{mode:"javascript",theme:"tomorrow",name:"certEditor",onChange:function(e){Ye(e),Pl(wl+1)},value:Xe,fontSize:14,style:{width:"900px"},editorProps:{$blockScrolling:!0}})})]}),(0,j.jsx)(c.Z,{plain:!0,children:"Response"}),(0,j.jsx)(r.Z,{children:"Response Encoding Type"}),(0,j.jsx)(r.Z,{children:(0,j.jsx)(o.Z,{defaultValue:S[0],value:il,onChange:function(e){tl(e),Pl(wl+1)},style:{width:"100%"},children:S.map((function(e){return(0,j.jsx)(T,{children:e},e)}))})}),(0,j.jsx)(r.Z,{children:"Payload Path to Store Response"}),(0,j.jsx)(r.Z,{children:(0,j.jsx)(d.Z,{placeholder:"e.g. data.foo.[0].bar",value:cl,onChange:function(e){rl(e),Pl(wl+1)}})}),(0,j.jsx)(c.Z,{plain:!0,children:"Error"}),(0,j.jsx)(r.Z,{children:(0,j.jsx)(f.ZP.Group,{value:ul,onChange:function(e){hl(e.target.value),Pl(wl+1)},children:(0,j.jsxs)(a.Z,{direction:"vertical",children:[(0,j.jsx)(f.ZP,{value:"throw",children:"Error The Workflow"}),(0,j.jsx)(f.ZP,{value:"payloadPath",children:"Store HTTP Error At Payload Path"})]})})}),"payloadPath"===ul?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(r.Z,{children:"Store Error Response"}),(0,j.jsx)(r.Z,{children:(0,j.jsx)(d.Z,{placeholder:"e.g. data.foo.[0].error",value:fl,onChange:function(e){gl(e.target.value),Pl(wl+1)}})})]}):null]})}}}]);
//# sourceMappingURL=416.7a76d45a.chunk.js.map