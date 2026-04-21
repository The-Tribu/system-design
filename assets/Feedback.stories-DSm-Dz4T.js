import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";const S={success:{bg:"rgba(29,158,117,.12)",border:"0.5px solid rgba(29,158,117,.25)",color:"#4dd9a5",dot:"#4dd9a5"},error:{bg:"rgba(226,75,74,.12)",border:"0.5px solid rgba(226,75,74,.25)",color:"#f07070",dot:"#f07070"},info:{bg:"rgba(198,33,229,.08)",border:"0.5px solid rgba(198,33,229,.25)",color:"#d966f0",dot:"#d966f0"},warning:{bg:"rgba(239,159,39,.1)",border:"0.5px solid rgba(239,159,39,.25)",color:"#f0b429",dot:"#f0b429"}};function e({children:k,variant:R="info"}){const a=S[R];return r.jsxs("div",{style:{padding:"11px 16px",borderRadius:"var(--radius-lg)",display:"flex",alignItems:"center",gap:"10px",fontSize:"13px",background:a.bg,border:a.border,color:a.color,fontFamily:"var(--font-body)"},children:[r.jsx("div",{style:{width:"7px",height:"7px",borderRadius:"50%",background:a.dot,flexShrink:0}}),k]})}e.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'success' | 'error' | 'info' | 'warning'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'info'",computed:!1}}}};const N={title:"Components/Feedback",component:e,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"dark"}},argTypes:{variant:{control:"select",options:["success","error","info","warning"]}}},s={args:{children:"You have successfully enrolled in the React course",variant:"success"}},o={name:"Error",args:{children:"An error occurred while processing your payment. Please try again",variant:"error"}},n={args:{children:"New event available: community hackathon this Friday",variant:"info"}},t={args:{children:"Your subscription expires in 3 days — renew it to keep access",variant:"warning"}},i={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",maxWidth:"480px"},children:[r.jsx(e,{variant:"success",children:"You have successfully enrolled in the React course"}),r.jsx(e,{variant:"error",children:"An error occurred while processing your payment. Please try again"}),r.jsx(e,{variant:"info",children:"New event available: community hackathon this Friday"}),r.jsx(e,{variant:"warning",children:"Your subscription expires in 3 days — renew it to keep access"})]})};var c,d,l;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'You have successfully enrolled in the React course',
    variant: 'success'
  }
}`,...(l=(d=s.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var u,p,m;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Error',
  args: {
    children: 'An error occurred while processing your payment. Please try again',
    variant: 'error'
  }
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,h,v;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'New event available: community hackathon this Friday',
    variant: 'info'
  }
}`,...(v=(h=n.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var y,f,x;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: 'Your subscription expires in 3 days — renew it to keep access',
    variant: 'warning'
  }
}`,...(x=(f=t.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var b,w,T;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    maxWidth: '480px'
  }}>
      <Toast variant="success">You have successfully enrolled in the React course</Toast>
      <Toast variant="error">An error occurred while processing your payment. Please try again</Toast>
      <Toast variant="info">New event available: community hackathon this Friday</Toast>
      <Toast variant="warning">Your subscription expires in 3 days — renew it to keep access</Toast>
    </div>
}`,...(T=(w=i.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};const A=["Success","ErrorToast","Info","Warning","AllToasts"];export{i as AllToasts,o as ErrorToast,n as Info,s as Success,t as Warning,A as __namedExportsOrder,N as default};
