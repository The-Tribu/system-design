import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as W}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const z={width:"100%",padding:"10px 14px",borderRadius:"var(--radius-lg)",background:"#0a0c1a",color:"var(--color-text-primary)",fontSize:"0.8125rem",fontFamily:"var(--font-body)",outline:"none",transition:"border-color 200ms var(--ease-out)",boxSizing:"border-box"},B={default:"1.5px solid var(--color-border)",focused:"1.5px solid var(--color-accent)",error:"1.5px solid var(--color-error)",disabled:"1.5px solid var(--color-border)"};function a({label:i,placeholder:I,value:P,hint:n,errorMessage:c,state:r="default",type:_="text"}){const[q,u]=W.useState(!1),p=r==="focused"||q?"focused":r;return e.jsxs("div",{style:{marginBottom:"14px"},children:[i&&e.jsx("label",{style:{fontSize:"12px",color:"var(--color-text-secondary)",marginBottom:"6px",fontWeight:500,display:"block"},children:i}),e.jsx("input",{type:_,placeholder:I,defaultValue:P,disabled:r==="disabled",style:{...z,border:B[p],opacity:r==="disabled"?.4:1,cursor:r==="disabled"?"not-allowed":"text"},onFocus:()=>u(!0),onBlur:()=>u(!1)}),n&&r!=="error"&&e.jsx("div",{style:{fontSize:"11px",color:p==="focused"?"#d966f0":"var(--color-text-tertiary)",marginTop:"5px"},children:n}),c&&r==="error"&&e.jsx("div",{style:{fontSize:"11px",color:"var(--color-error)",marginTop:"5px"},children:c})]})}a.__docgenInfo={description:"",methods:[],displayName:"Input",props:{label:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},hint:{required:!1,tsType:{name:"string"},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""},state:{required:!1,tsType:{name:"union",raw:"'default' | 'focused' | 'error' | 'disabled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'focused'"},{name:"literal",value:"'error'"},{name:"literal",value:"'disabled'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},type:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'text'",computed:!1}}}};const U={title:"Components/Input",component:a,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"dark"}},argTypes:{state:{control:"select",options:["default","focused","error","disabled"]},type:{control:"select",options:["text","email","password"]}}},s={args:{label:"Email address",placeholder:"hello@thetribu.dev",hint:"We'll use this email for course notifications",state:"default",type:"email"}},t={args:{label:"Username",value:"@tribu_dev",hint:"Focused state — border-color: accent",state:"focused"}},o={args:{label:"Password",placeholder:"••••••••",state:"error",type:"password",errorMessage:"Password must be at least 8 characters"}},l={args:{label:"Disabled field",value:"Not editable",state:"disabled"}},d={render:()=>e.jsxs("div",{style:{maxWidth:"400px"},children:[e.jsx(a,{label:"Email address",placeholder:"hello@thetribu.dev",hint:"We'll use this email for course notifications",type:"email"}),e.jsx(a,{label:"Username",value:"@tribu_dev",hint:"Focused state",state:"focused"}),e.jsx(a,{label:"Password",placeholder:"••••••••",state:"error",type:"password",errorMessage:"Password must be at least 8 characters"}),e.jsx(a,{label:"Disabled field",value:"Not editable",state:"disabled"})]})};var m,b,f;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Email address',
    placeholder: 'hello@thetribu.dev',
    hint: "We'll use this email for course notifications",
    state: 'default',
    type: 'email'
  }
}`,...(f=(b=s.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var h,v,x;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    value: '@tribu_dev',
    hint: 'Focused state — border-color: accent',
    state: 'focused'
  }
}`,...(x=(v=t.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var g,y,w;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    placeholder: '••••••••',
    state: 'error',
    type: 'password',
    errorMessage: 'Password must be at least 8 characters'
  }
}`,...(w=(y=o.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var S,j,T;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Disabled field',
    value: 'Not editable',
    state: 'disabled'
  }
}`,...(T=(j=l.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var F,D,E;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '400px'
  }}>
      <Input label="Email address" placeholder="hello@thetribu.dev" hint="We'll use this email for course notifications" type="email" />
      <Input label="Username" value="@tribu_dev" hint="Focused state" state="focused" />
      <Input label="Password" placeholder="••••••••" state="error" type="password" errorMessage="Password must be at least 8 characters" />
      <Input label="Disabled field" value="Not editable" state="disabled" />
    </div>
}`,...(E=(D=d.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};const V=["Default","Focused","Error","Disabled","AllStates"];export{d as AllStates,s as Default,l as Disabled,o as Error,t as Focused,V as __namedExportsOrder,U as default};
