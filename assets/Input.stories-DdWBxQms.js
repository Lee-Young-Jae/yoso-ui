import{j as a}from"./jsx-runtime-CkxqCPlQ.js";import{r as S}from"./index-DJO9vBfz.js";import{d as h}from"./styled-components.browser.esm-Dsr6U-en.js";import{G as x}from"./iconBase-DNSKKw1X.js";const pe=h.div`
  display: flex;
  flex-direction: column;
  width: ${({$fullWidth:e})=>e?"100%":"auto"};
`,ue=h.label`
  margin-bottom: ${({theme:e})=>e.spacing.xsmall};
  font-size: ${({theme:e})=>e.fontSizes.medium};
  color: ${({theme:e})=>e.colors.BLACK};
`,me=h.div`
  display: flex;
  align-items: center;
  background-color: ${({theme:e,$disabled:r})=>r?e.colors.GRAY_100:e.colors.WHITE};
  border: 1px solid
    ${({theme:e,$error:r})=>r?e.colors.RED_500:e.colors.GRAY_300};
  padding: ${({theme:e})=>e.spacing.medium};
  border-radius: ${({theme:e,$radius:r})=>r?e.borderRadius[r]:e.borderRadius.medium};
  transition: ${({theme:e})=>e.transitions.fast};

  &:focus-within {
    border-color: ${({theme:e,$error:r})=>r?e.colors.RED_500:e.colors.BLUE_500};
    box-shadow: 0 0 0 1px
      ${({theme:e,$error:r})=>r?e.colors.RED_500:e.colors.BLUE_500};
  }
`,ge=h.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: ${({theme:e,$size:r})=>{switch(r){case"small":return e.fontSizes.small;case"large":return e.fontSizes.large;default:return e.fontSizes.medium}}};
  padding: ${({theme:e,$size:r,$hasIcon:b})=>{const t=b?e.spacing.small:e.spacing.medium;switch(r){case"small":return`${e.spacing.xsmall} ${t}`;case"large":return`${e.spacing.medium} ${t}`;default:return`${e.spacing.small} ${t}`}}};

  &::placeholder {
    color: ${({theme:e})=>e.colors.GRAY_500};
  }
`,v=h.div`
  display: flex;
  align-items: center;
  margin: 0 ${({theme:e})=>e.spacing.small};
  color: ${({theme:e})=>e.colors.GRAY_500};

  svg {
    width: 1em;
    height: 1em;
  }
`,fe=h.span`
  margin-top: ${({theme:e})=>e.spacing.xsmall};
  font-size: ${({theme:e})=>e.fontSizes.small};
  color: ${({theme:e,$error:r})=>r?e.colors.RED_500:e.colors.GRAY_500};
`,f=S.forwardRef(({label:e,error:r,helperText:b,leftIcon:t,rightIcon:y,fullWidth:ae=!1,size:oe="medium",radius:te="medium",disabled:I=!1,className:se,style:le,id:ie,...z},ne)=>{const ce=S.useId(),$=ie||ce,de=!!(t||y);return a.jsxs(pe,{$fullWidth:ae,className:se,style:le,children:[e&&a.jsxs(ue,{htmlFor:$,children:[e,z.required&&a.jsx("span",{"aria-hidden":!0,children:"*"})]}),a.jsxs(me,{$disabled:I,$error:!!r,$radius:te,children:[t&&a.jsx(v,{children:t}),a.jsx(ge,{id:$,ref:ne,disabled:I,$size:oe,$hasIcon:de,"aria-invalid":!!r,"aria-disabled":I,...z}),y&&a.jsx(v,{children:y})]}),(b||r)&&a.jsx(fe,{$error:!!r,children:r||b})]})});f.displayName="Input";f.__docgenInfo={description:"",methods:[],displayName:"Input",props:{fullWidth:{defaultValue:{value:"false",computed:!1},required:!1},size:{defaultValue:{value:'"medium"',computed:!1},required:!1},radius:{defaultValue:{value:'"medium"',computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};function he(e){return x({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(e)}function re(e){return x({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(e)}function be(e){return x({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(e)}const $e={title:"Components/Input",component:f,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}},argTypes:{label:{control:"text",table:{category:"Content"},description:"입력 필드의 레이블을 지정합니다."},error:{control:"text",table:{category:"Content"},description:"유효성 검사 오류 메시지를 표시합니다."},helperText:{control:"text",table:{category:"Content"},description:"입력 필드 아래에 표시되는 도움말 텍스트입니다."},size:{control:{type:"select",options:["small","medium","large"]},description:"입력 필드의 크기를 조절합니다.",table:{category:"Style"}},leftIcon:{control:!1,table:{category:"Content"},description:"입력 필드 왼쪽에 표시되는 아이콘입니다."},rightIcon:{control:!1,table:{category:"Content"},description:"입력 필드 오른쪽에 표시되는 아이콘입니다."},fullWidth:{control:"boolean",table:{category:"Style"}},radius:{control:{type:"select",options:["none","small","medium","large"]},description:"입력 필드의 모서리 둥글기를 조절합니다.",table:{category:"Style"}},disabled:{control:"boolean",table:{category:"State"},description:"입력 필드를 비활성화 상태로 설정합니다."},required:{control:"boolean",table:{category:"State"},description:"필수 입력 필드 여부를 지정합니다. 레이블이 있다면 `*` 표시가 추가됩니다."},onChange:{action:"changed",table:{category:"Events"}},onBlur:{action:"blurred",table:{category:"Events"}},onFocus:{action:"focused",table:{category:"Events"}},onKeyPress:{action:"key pressed",table:{category:"Events"}}}},o=e=>a.jsx(f,{...e}),s=o.bind({});s.args={placeholder:"텍스트를 입력하세요",required:!1,fullWidth:!1,size:"medium",label:"",error:"",helperText:"",leftIcon:void 0,rightIcon:void 0,disabled:!1,radius:"medium"};s.storyName="기본 입력 필드";s.parameters={docs:{description:{story:`
**기본 입력 필드**

기본 설정으로 사용되는 입력 필드입니다.

\`\`\`tsx
<Input
  label="기본 입력"
  placeholder="텍스트를 입력하세요"
/>
\`\`\`
      `}}};const l=o.bind({});l.args={label:"이메일",type:"email",placeholder:"이메일을 입력하세요",leftIcon:a.jsx(re,{})};l.storyName="아이콘이 있는 입력 필드";l.parameters={docs:{description:{story:`
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
      `}}};const i=o.bind({});i.args={label:"비밀번호",type:"password",placeholder:"비밀번호를 입력하세요",leftIcon:a.jsx(he,{})};i.storyName="비밀번호 입력 필드";i.parameters={docs:{description:{story:`
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
      `}}};const n=o.bind({});n.args={label:"이메일",type:"email",placeholder:"이메일을 입력하세요",error:"유효한 이메일 주소를 입력하세요.",leftIcon:a.jsx(re,{})};n.storyName="오류 상태";n.parameters={docs:{description:{story:`
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
      `}}};const c=()=>a.jsxs(a.Fragment,{children:[a.jsx(f,{label:"Small Input",placeholder:"Small size",size:"small",style:{marginBottom:"1rem"}}),a.jsx(f,{label:"Medium Input",placeholder:"Medium size",size:"medium",style:{marginBottom:"1rem"}}),a.jsx(f,{label:"Large Input",placeholder:"Large size",size:"large"})]});c.storyName="크기 변경";c.parameters={docs:{description:{story:`
**크기 변경**

\`size\` prop을 사용하여 입력 필드의 크기를 조절할 수 있습니다.

\`\`\`tsx
<Input size="small" />
<Input size="medium" />
<Input size="large" />
\`\`\`
      `}}};const d=o.bind({});d.args={label:"비활성화된 입력",placeholder:"입력 불가",disabled:!0};d.storyName="비활성화 상태";d.parameters={docs:{description:{story:`
**비활성화 상태**

\`disabled\` prop을 사용하여 입력 필드를 비활성화할 수 있습니다.

\`\`\`tsx
<Input
  label="비활성화된 입력"
  placeholder="입력 불가"
  disabled
/>
\`\`\`
      `}}};const p=o.bind({});p.args={label:"전체 너비 입력",placeholder:"부모 너비를 모두 차지합니다",fullWidth:!0};p.storyName="전체 너비";p.parameters={docs:{description:{story:`
**전체 너비**

\`fullWidth\` prop을 사용하여 입력 필드가 부모의 너비를 모두 차지하도록 설정할 수 있습니다.

\`\`\`tsx
<Input
  label="전체 너비 입력"
  placeholder="부모 너비를 모두 차지합니다"
  fullWidth
/>
\`\`\`
      `}}};const u=o.bind({});u.args={label:"사용자 이름",placeholder:"사용자 이름을 입력하세요",helperText:"5자 이상 입력하세요.",leftIcon:a.jsx(be,{})};u.storyName="도움말 텍스트";u.parameters={docs:{description:{story:`
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
      `}}};const m=o.bind({});m.args={label:"커스텀 라디우스",placeholder:"모서리 둥글기 조절",radius:"large"};m.storyName="모서리 둥글기 변경";m.parameters={docs:{description:{story:`
**모서리 둥글기 변경**

\`radius\` prop을 사용하여 입력 필드의 모서리 둥글기를 조절할 수 있습니다.

\`\`\`tsx
<Input
  label="커스텀 라디우스"
  placeholder="모서리 둥글기 조절"
  radius="large"
/>
\`\`\`
      `}}};const g=o.bind({});g.args={label:"필수 입력",placeholder:"필수 입력 필드",required:!0};g.storyName="필수 입력 필드";g.parameters={docs:{description:{story:`
**필수 입력 필드**

\`required\` prop을 사용하여 필수 입력 필드를 표시할 수 있습니다.

\`\`\`tsx
<Input
  label="필수 입력"
  placeholder="필수 입력 필드"
  required
/>
\`\`\`
      `}}};c.__docgenInfo={description:"",methods:[],displayName:"Sizes"};var j,W,k;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:"args => <Input {...args} />",...(k=(W=s.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var F,R,L;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"args => <Input {...args} />",...(L=(R=l.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var _,w,E;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:"args => <Input {...args} />",...(E=(w=i.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var B,C,M;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:"args => <Input {...args} />",...(M=(C=n.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var N,q,T;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`() => <>
    <Input label="Small Input" placeholder="Small size" size="small" style={{
    marginBottom: "1rem"
  }} />
    <Input label="Medium Input" placeholder="Medium size" size="medium" style={{
    marginBottom: "1rem"
  }} />
    <Input label="Large Input" placeholder="Large size" size="large" />
  </>`,...(T=(q=c.parameters)==null?void 0:q.docs)==null?void 0:T.source}}};var A,D,G;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:"args => <Input {...args} />",...(G=(D=d.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var H,V,U;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:"args => <Input {...args} />",...(U=(V=p.parameters)==null?void 0:V.docs)==null?void 0:U.source}}};var Y,P,K;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:"args => <Input {...args} />",...(K=(P=u.parameters)==null?void 0:P.docs)==null?void 0:K.source}}};var O,J,Q;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:"args => <Input {...args} />",...(Q=(J=m.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Z,ee;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:"args => <Input {...args} />",...(ee=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const Se=["Default","WithIcon","Password","ErrorState","Sizes","Disabled","FullWidth","WithHelperText","CustomRadius","Required"];export{m as CustomRadius,s as Default,d as Disabled,n as ErrorState,p as FullWidth,i as Password,g as Required,c as Sizes,u as WithHelperText,l as WithIcon,Se as __namedExportsOrder,$e as default};
