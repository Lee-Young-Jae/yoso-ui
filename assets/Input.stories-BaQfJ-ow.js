import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{I as u}from"./Input-BBDMf5vw.js";import{G as g}from"./iconBase-DNSKKw1X.js";import"./index-DJO9vBfz.js";import"./styled-components.browser.esm-Dsr6U-en.js";function K(t){return g({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(t)}function V(t){return g({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(t)}function O(t){return g({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(t)}const $={title:"Components/Input",component:u,tags:["autodocs"],parameters:{docs:{description:{component:`
**Input 컴포넌트**

\`Input\` 컴포넌트는 다양한 타입의 입력 필드를 제공하며, 레이블, 오류 메시지, 아이콘 등을 지원합니다.

### 주요 기능

- **다양한 입력 타입 지원**: \`type\` prop을 통해 텍스트, 이메일, 비밀번호 등 다양한 입력 타입을 지원합니다.
- **레이블 및 도움말 텍스트**: \`label\`, \`helperText\`를 통해 레이블과 도움말을 표시할 수 있습니다.
- **오류 메시지 표시**: \`error\` prop을 사용하여 유효성 검사 오류 메시지를 표시합니다.
- **아이콘 지원**: \`leftIcon\`, \`rightIcon\`을 통해 입력 필드에 아이콘을 추가할 수 있습니다.
- **크기 및 스타일 조절**: \`size\`, \`radius\`, \`fullWidth\` 등으로 입력 필드의 스타일을 조절할 수 있습니다.
- **접근성 준수**: 레이블과 입력 필드의 연결, ARIA 속성 등을 사용하여 접근성을 향상시킵니다.

### 사용법

\`\`\`tsx
import { Input } from 'yoso-ui';
import { FiMail } from 'react-icons/fi';

<Input
  label="이메일"
  type="email"
  placeholder="이메일을 입력하세요"
  leftIcon={<FiMail />}
/>;
\`\`\`
        `}}},argTypes:{label:{control:"text",table:{category:"Content"},description:"입력 필드의 레이블을 지정합니다."},error:{control:"text",table:{category:"Content"},description:"유효성 검사 오류 메시지를 표시합니다."},helperText:{control:"text",table:{category:"Content"},description:"입력 필드 아래에 표시되는 도움말 텍스트입니다."},size:{control:{type:"select",options:["small","medium","large"]},description:"입력 필드의 크기를 조절합니다.",table:{category:"Style"}},leftIcon:{control:!1,table:{category:"Content"},description:"입력 필드 왼쪽에 표시되는 아이콘입니다."},rightIcon:{control:!1,table:{category:"Content"},description:"입력 필드 오른쪽에 표시되는 아이콘입니다."},fullWidth:{control:"boolean",table:{category:"Style"}},radius:{control:{type:"select",options:["none","small","medium","large"]},description:"입력 필드의 모서리 둥글기를 조절합니다.",table:{category:"Style"}},disabled:{control:"boolean",table:{category:"State"},description:"입력 필드를 비활성화 상태로 설정합니다."},required:{control:"boolean",table:{category:"State"},description:"필수 입력 필드 여부를 지정합니다. 레이블이 있다면 `*` 표시가 추가됩니다."},onChange:{action:"changed",table:{category:"Events"}},onBlur:{action:"blurred",table:{category:"Events"}},onFocus:{action:"focused",table:{category:"Events"}},onKeyPress:{action:"key pressed",table:{category:"Events"}}}},r=t=>e.jsx(u,{...t}),o=r.bind({});o.args={placeholder:"텍스트를 입력하세요",required:!1,fullWidth:!1,size:"medium",label:"",error:"",helperText:"",leftIcon:void 0,rightIcon:void 0,disabled:!1,radius:"medium"};o.storyName="기본 입력 필드";o.parameters={docs:{description:{story:`
**기본 입력 필드**

기본 설정으로 사용되는 입력 필드입니다.

\`\`\`tsx
<Input
  label="기본 입력"
  placeholder="텍스트를 입력하세요"
/>
\`\`\`
      `}}};const a=r.bind({});a.args={label:"이메일",type:"email",placeholder:"이메일을 입력하세요",leftIcon:e.jsx(V,{})};a.storyName="아이콘이 있는 입력 필드";a.parameters={docs:{description:{story:`
**아이콘이 있는 입력 필드**

\`leftIcon\` 또는 \`rightIcon\`을 사용하여 입력 필드에 아이콘을 추가할 수 있습니다.

\`\`\`tsx
import { FiMail } from 'react-icons/fi';

<Input
  label="이메일"
  type="email"
  placeholder="이메일을 입력하세요"
  leftIcon={<FiMail />}
/>
\`\`\`
      `}}};const s=r.bind({});s.args={label:"비밀번호",type:"password",placeholder:"비밀번호를 입력하세요",leftIcon:e.jsx(K,{})};s.storyName="비밀번호 입력 필드";s.parameters={docs:{description:{story:`
**비밀번호 입력 필드**

\`type="password"\`를 사용하여 비밀번호 입력 필드를 생성합니다.

\`\`\`tsx
import { FiLock } from 'react-icons/fi';

<Input
  label="비밀번호"
  type="password"
  placeholder="비밀번호를 입력하세요"
  leftIcon={<FiLock />}
/>
\`\`\`
      `}}};const l=r.bind({});l.args={label:"이메일",type:"email",placeholder:"이메일을 입력하세요",error:"유효한 이메일 주소를 입력하세요.",leftIcon:e.jsx(V,{})};l.storyName="오류 상태";l.parameters={docs:{description:{story:`
**오류 상태**

\`error\` prop을 사용하여 유효성 검사 오류 메시지를 표시합니다.

\`\`\`tsx
import { FiMail } from 'react-icons/fi';

<Input
  label="이메일"
  type="email"
  placeholder="이메일을 입력하세요"
  error="유효한 이메일 주소를 입력하세요."
  leftIcon={<FiMail />}
/>
\`\`\`
      `}}};const i=()=>e.jsxs(e.Fragment,{children:[e.jsx(u,{label:"Small Input",placeholder:"Small size",size:"small",style:{marginBottom:"1rem"}}),e.jsx(u,{label:"Medium Input",placeholder:"Medium size",size:"medium",style:{marginBottom:"1rem"}}),e.jsx(u,{label:"Large Input",placeholder:"Large size",size:"large"})]});i.storyName="크기 변경";i.parameters={docs:{description:{story:`
**크기 변경**

\`size\` prop을 사용하여 입력 필드의 크기를 조절할 수 있습니다.

\`\`\`tsx
<Input size="small" />
<Input size="medium" />
<Input size="large" />
\`\`\`
      `}}};const c=r.bind({});c.args={label:"비활성화된 입력",placeholder:"입력 불가",disabled:!0};c.storyName="비활성화 상태";c.parameters={docs:{description:{story:`
**비활성화 상태**

\`disabled\` prop을 사용하여 입력 필드를 비활성화할 수 있습니다.

\`\`\`tsx
<Input
  label="비활성화된 입력"
  placeholder="입력 불가"
  disabled
/>
\`\`\`
      `}}};const n=r.bind({});n.args={label:"전체 너비 입력",placeholder:"부모 너비를 모두 차지합니다",fullWidth:!0};n.storyName="전체 너비";n.parameters={docs:{description:{story:`
**전체 너비**

\`fullWidth\` prop을 사용하여 입력 필드가 부모의 너비를 모두 차지하도록 설정할 수 있습니다.

\`\`\`tsx
<Input
  label="전체 너비 입력"
  placeholder="부모 너비를 모두 차지합니다"
  fullWidth
/>
\`\`\`
      `}}};const p=r.bind({});p.args={label:"사용자 이름",placeholder:"사용자 이름을 입력하세요",helperText:"5자 이상 입력하세요.",leftIcon:e.jsx(O,{})};p.storyName="도움말 텍스트";p.parameters={docs:{description:{story:`
**도움말 텍스트**

\`helperText\` prop을 사용하여 입력 필드 아래에 도움말 텍스트를 표시할 수 있습니다.

\`\`\`tsx
import { FiUser } from 'react-icons/fi';

<Input
  label="사용자 이름"
  placeholder="사용자 이름을 입력하세요"
  helperText="5자 이상 입력하세요."
  leftIcon={<FiUser />}
/>
\`\`\`
      `}}};const d=r.bind({});d.args={label:"커스텀 라디우스",placeholder:"모서리 둥글기 조절",radius:"large"};d.storyName="모서리 둥글기 변경";d.parameters={docs:{description:{story:`
**모서리 둥글기 변경**

\`radius\` prop을 사용하여 입력 필드의 모서리 둥글기를 조절할 수 있습니다.

\`\`\`tsx
<Input
  label="커스텀 라디우스"
  placeholder="모서리 둥글기 조절"
  radius="large"
/>
\`\`\`
      `}}};const m=r.bind({});m.args={label:"필수 입력",placeholder:"필수 입력 필드",required:!0};m.storyName="필수 입력 필드";m.parameters={docs:{description:{story:`
**필수 입력 필드**

\`required\` prop을 사용하여 필수 입력 필드를 표시할 수 있습니다.

\`\`\`tsx
<Input
  label="필수 입력"
  placeholder="필수 입력 필드"
  required
/>
\`\`\`
      `}}};i.__docgenInfo={description:"",methods:[],displayName:"Sizes"};var h,b,y;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:"args => <Input {...args} />",...(y=(b=o.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var I,f,x;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:"args => <Input {...args} />",...(x=(f=a.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var S,z,F;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:"args => <Input {...args} />",...(F=(z=s.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var k,v,W;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:"args => <Input {...args} />",...(W=(v=l.parameters)==null?void 0:v.docs)==null?void 0:W.source}}};var j,M,L;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`() => <>
    <Input label="Small Input" placeholder="Small size" size="small" style={{
    marginBottom: "1rem"
  }} />
    <Input label="Medium Input" placeholder="Medium size" size="medium" style={{
    marginBottom: "1rem"
  }} />
    <Input label="Large Input" placeholder="Large size" size="large" />
  </>`,...(L=(M=i.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var C,N,T;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:"args => <Input {...args} />",...(T=(N=c.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var w,B,E;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:"args => <Input {...args} />",...(E=(B=n.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var q,R,D;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:"args => <Input {...args} />",...(D=(R=p.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var H,_,P;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:"args => <Input {...args} />",...(P=(_=d.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var U,A,G;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:"args => <Input {...args} />",...(G=(A=m.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};const ee=["Default","WithIcon","Password","ErrorState","Sizes","Disabled","FullWidth","WithHelperText","CustomRadius","Required"];export{d as CustomRadius,o as Default,c as Disabled,l as ErrorState,n as FullWidth,s as Password,m as Required,i as Sizes,p as WithHelperText,a as WithIcon,ee as __namedExportsOrder,$ as default};
