import{j as s}from"./jsx-runtime-CkxqCPlQ.js";import{r as Z,R as J}from"./index-DJO9vBfz.js";import{d as m,l as o}from"./styled-components.browser.esm-Dsr6U-en.js";import{g as K}from"./style-CuGJsH27.js";const x={small:"12px",medium:"16px",large:"20px"},T={small:"4px",medium:"4px",large:"5px"},D=m.span`
  position: absolute;
  top: 50%;
  left: ${({$checked:e,$size:a})=>ae(a,e)};
  transform: translateY(-50%);
  ${({$size:e})=>ee(e)};
  ${({$variant:e,$checked:a})=>te(e,a)};
  border-radius: 50%;
  transition: ${({theme:e})=>e.transitions.default};

  &:focus {
    outline: 1px solid ${({theme:e})=>e.colors.blue[100]};
    outline-offset: 1px;
  }
`,P=m.label`
  display: inline-flex;
  align-items: center;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  opacity: ${({$disabled:e})=>e?.6:1};
  user-select: none;

  &:focus-within ${D} {
    outline: 1px solid ${({theme:e})=>e.colors.blue[100]};
    outline-offset: 1px;
  }
`,Q=e=>{switch(e){case"small":return o`
        width: 40px;
        height: 20px;
      `;case"medium":return o`
        width: 50px;
        height: 24px;
      `;case"large":return o`
        width: 60px;
        height: 28px;
      `}},U=(e,a)=>{switch(e){case"outline":return o`
        background-color: ${({theme:t})=>K(t.defaultColor,.1)};
        border: 1px solid
          ${({theme:t})=>a?t.defaultColor:t.colors.gray[300]};
      `;case"solid":return o`
        background-color: ${({theme:t})=>a?t.defaultColor:t.colors.gray[300]};
        border: 1px solid transparent;
      `}},X=m.span`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  ${({$size:e})=>Q(e)};
  ${({$variant:e,$checked:a})=>U(e,a)};
  border-radius: ${({theme:e})=>e.borderRadius.xlarge};
  transition: ${({theme:e})=>e.transitions.default};
  margin-right: 8px;
`,ee=e=>`
  width: ${x[e]};
  height: ${x[e]};
`,ae=(e,a)=>a?`calc(100% - ${x[e]} - ${T[e]})`:T[e],te=(e,a)=>{switch(e){case"outline":return o`
        background-color: ${({theme:t})=>a?t.defaultColor:t.colors.gray[300]};
      `;case"solid":return o`
        background-color: ${({theme:t})=>t.colors.white};
      `}},se=m.span`
  font-size: ${({theme:e})=>e.fontSizes.medium};
  color: ${({theme:e})=>e.colors.black};
  user-select: none;
`,oe=m.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,C=Z.forwardRef(({disabled:e=!1,variant:a="solid",onText:t="On",offText:f="Off",size:u="medium",showText:M=!1,id:k,ariaLabel:A,checked:h,onChange:F,className:W,style:B,...G},Y)=>s.jsxs(P,{$disabled:e,htmlFor:k,style:B,className:W,"aria-checked":h,role:"switch",children:[s.jsx(oe,{ref:Y,id:k,type:"checkbox",checked:h,onChange:F,disabled:e,"aria-label":A,...G}),s.jsx(X,{$checked:!!h,$variant:a,$size:u,"aria-hidden":"true",children:s.jsx(D,{$checked:h,$size:u,$variant:a})}),M&&s.jsx(se,{children:h?t:f})]}));C.displayName="Toggle";const r=C;C.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{disabled:{defaultValue:{value:"false",computed:!1},required:!1},variant:{defaultValue:{value:'"solid"',computed:!1},required:!1},onText:{defaultValue:{value:'"On"',computed:!1},required:!1},offText:{defaultValue:{value:'"Off"',computed:!1},required:!1},size:{defaultValue:{value:'"medium"',computed:!1},required:!1},showText:{defaultValue:{value:"false",computed:!1},required:!1}}};const ce={title:"Components/Toggle",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`
**Toggle 컴포넌트**

\`Toggle\` 컴포넌트는 온/오프 스위치 형태의 토글 버튼을 제공합니다. 다양한 옵션을 통해 스타일과 동작을 커스터마이징할 수 있습니다.

### 주요 기능

- **상태 관리**: \`checked\`와 \`onChange\` props를 통해 토글 상태를 제어합니다.
- **크기 조절**: \`size\` prop을 사용하여 \`small\`, \`medium\`, \`large\` 크기를 선택할 수 있습니다.
- **스타일 변경**: \`variant\` prop을 통해 \`solid\` 또는 \`outline\` 스타일을 적용할 수 있습니다.
- **텍스트 표시**: \`showText\`를 활성화하여 토글 상태에 따른 텍스트를 표시할 수 있습니다.
- **접근성 준수**: ARIA 속성을 사용하여 스크린 리더 및 키보드 내비게이션을 지원합니다.

### 사용법

\`\`\`tsx
import Toggle from './Toggle';

const [isOn, setIsOn] = useState(false);

<Toggle
  id="toggle1"
  checked={isOn}
  onChange={(e) => setIsOn(e.target.checked)}
  size="medium"
  variant="solid"
  showText
  onText="On"
  offText="Off"
  ariaLabel="기능 활성화 토글"
/>;
\`\`\`
        `}}}},p=e=>{const[a,t]=J.useState(e.checked||!1),f=u=>{t(u.target.checked),e.onChange&&e.onChange(u)};return s.jsx(r,{...e,checked:a,onChange:f})},n=p.bind({});n.args={id:"toggle-default",size:"medium",variant:"solid",disabled:!1,showText:!1,ariaLabel:"기본 토글"};n.storyName="기본 토글";const l=()=>s.jsxs(s.Fragment,{children:[s.jsx(r,{id:"toggle-small",size:"small",checked:!0,onChange:()=>{},ariaLabel:"Small 토글"}),s.jsx(r,{id:"toggle-medium",size:"medium",checked:!0,onChange:()=>{},ariaLabel:"Medium 토글"}),s.jsx(r,{id:"toggle-large",size:"large",checked:!0,onChange:()=>{},ariaLabel:"Large 토글"})]});l.storyName="크기 변경";const i=()=>s.jsxs(s.Fragment,{children:[s.jsx(r,{id:"toggle-solid",variant:"solid",checked:!0,onChange:()=>{},ariaLabel:"Solid 토글"}),s.jsx(r,{id:"toggle-outline",variant:"outline",checked:!0,onChange:()=>{},ariaLabel:"Outline 토글"})]});i.storyName="스타일 변경";const c=p.bind({});c.args={id:"toggle-with-text",size:"medium",variant:"solid",showText:!0,onText:"켜짐",offText:"꺼짐",ariaLabel:"텍스트 표시 토글"};c.storyName="텍스트 표시";const d=p.bind({});d.args={id:"toggle-disabled",size:"medium",variant:"solid",disabled:!0,ariaLabel:"비활성화된 토글"};d.storyName="비활성화 상태";const g=p.bind({});g.args={id:"toggle-custom-style",size:"medium",variant:"solid",style:{transform:"scale(1.5)"},ariaLabel:"커스텀 스타일 토글"};g.storyName="커스텀 스타일 적용";l.__docgenInfo={description:"",methods:[],displayName:"Sizes"};i.__docgenInfo={description:"",methods:[],displayName:"Variants"};var b,S,$;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  const [checked, setChecked] = React.useState(args.checked || false);
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    setChecked(e.target.checked);
    args.onChange && args.onChange(e);
  };
  return <Toggle {...args} checked={checked} onChange={handleChange} />;
}`,...($=(S=n.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};var v,w,L;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`() => <>
    <Toggle id="toggle-small" size="small" checked={true} onChange={() => {}} ariaLabel="Small 토글" />
    <Toggle id="toggle-medium" size="medium" checked={true} onChange={() => {}} ariaLabel="Medium 토글" />
    <Toggle id="toggle-large" size="large" checked={true} onChange={() => {}} ariaLabel="Large 토글" />
  </>`,...(L=(w=l.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var y,z,j;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`() => <>
    <Toggle id="toggle-solid" variant="solid" checked={true} onChange={() => {}} ariaLabel="Solid 토글" />
    <Toggle id="toggle-outline" variant="outline" checked={true} onChange={() => {}} ariaLabel="Outline 토글" />
  </>`,...(j=(z=i.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};var E,H,O;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
  const [checked, setChecked] = React.useState(args.checked || false);
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    setChecked(e.target.checked);
    args.onChange && args.onChange(e);
  };
  return <Toggle {...args} checked={checked} onChange={handleChange} />;
}`,...(O=(H=c.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var R,I,N;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`args => {
  const [checked, setChecked] = React.useState(args.checked || false);
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    setChecked(e.target.checked);
    args.onChange && args.onChange(e);
  };
  return <Toggle {...args} checked={checked} onChange={handleChange} />;
}`,...(N=(I=d.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var V,_,q;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`args => {
  const [checked, setChecked] = React.useState(args.checked || false);
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    setChecked(e.target.checked);
    args.onChange && args.onChange(e);
  };
  return <Toggle {...args} checked={checked} onChange={handleChange} />;
}`,...(q=(_=g.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};const de=["Default","Sizes","Variants","WithText","Disabled","CustomStyle"];export{g as CustomStyle,n as Default,d as Disabled,l as Sizes,i as Variants,c as WithText,de as __namedExportsOrder,ce as default};
