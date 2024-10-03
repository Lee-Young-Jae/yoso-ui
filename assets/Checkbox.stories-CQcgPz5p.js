import{j as o}from"./jsx-runtime-CkxqCPlQ.js";import{r as g}from"./index-DJO9vBfz.js";import{d as h,l as Y}from"./styled-components.browser.esm-Dsr6U-en.js";const V=h.label`
  display: flex;
  align-items: center;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  opacity: ${({disabled:e})=>e?.6:1};
`,z=h.input.attrs({type:"checkbox"})`
  border: 0;
  clip: rect(0 0 0 0); // 숨김
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`,F=h.div`
  width: ${({theme:e})=>e.spacing.large};
  height: ${({theme:e})=>e.spacing.large};
  background: ${({$checked:e,$indeterminate:r,theme:s})=>e||r?s.colors.BLUE_700:s.colors.WHITE};
  border: 1px solid
    ${({$checked:e,$indeterminate:r,theme:s})=>e||r?s.colors.BLUE_700:s.colors.GRAY_300};
  border-radius: ${({theme:e})=>e.borderRadius.small};
  transition: all 150ms;
  display: flex;
  align-items: center;
  justify-content: center;

  ${z}:focus + & {
    outline: none;
    box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.BLUE_100};
  }

  ${({disabled:e})=>e&&Y`
      border-color: ${({theme:r})=>r.colors.GRAY_300};
      background: ${({theme:r})=>r.colors.GRAY_100};
    `}
`,L=h.svg`
  fill: none;
  stroke: ${({theme:e})=>e.colors.WHITE};
  stroke-width: 2px;
`,J=h.span`
  margin-left: ${({theme:e})=>e.spacing.small};
  font-size: ${({theme:e})=>e.fontSizes.medium};
  user-select: none;
  cursor: pointer;

  ${({$disabled:e})=>e&&Y`
      color: ${({theme:r})=>r.colors.GRAY_500};
      cursor: not-allowed;
    `}
`,K=h.span`
  display: block;
  color: ${({$error:e,theme:r})=>e?r.colors.RED_500:r.colors.GRAY_600};
  font-size: ${({theme:e})=>e.fontSizes.small};
  margin-top: ${({theme:e})=>e.spacing.xsmall};
  margin-left: ${({theme:e})=>e.spacing.xsmall};
`,M=o.jsx(L,{viewBox:"0 0 24 24",children:o.jsx("polyline",{points:"20 6 9 17 4 12"})}),P=o.jsx(L,{viewBox:"0 0 24 24",children:o.jsx("line",{x1:"4",y1:"12",x2:"20",y2:"12"})}),b=g.forwardRef(({label:e,error:r,helperText:s,disabled:c=!1,indeterminate:k=!1,checked:m,onChange:O,...U},u)=>{const x=g.useRef(),q=`checkbox-${g.useId()}`;return g.useEffect(()=>{x.current&&(x.current.indeterminate=k)},[k]),o.jsxs(o.Fragment,{children:[o.jsxs(V,{disabled:c,children:[o.jsx(z,{type:"checkbox",id:q,disabled:c,checked:m,onChange:O,ref:C=>{x.current=C||void 0,typeof u=="function"?u(C):u&&(u.current=C)},...U}),o.jsx(F,{$checked:m,$indeterminate:k,disabled:c,children:k?P:m&&M}),e&&o.jsx(J,{$disabled:c,children:e})]}),(r||s)&&o.jsx(K,{$error:!!r,children:r||s})]})});b.displayName="Checkbox";const W=b;b.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{disabled:{defaultValue:{value:"false",computed:!1},required:!1},indeterminate:{defaultValue:{value:"false",computed:!1},required:!1}}};const re={title:"Components/Checkbox",component:W,tags:["autodocs"],argTypes:{label:{control:"text",description:"체크박스 레이블 텍스트"},checked:{control:"boolean",description:"체크 상태"},disabled:{control:"boolean",description:"비활성화 상태"},error:{control:"text",description:"유효성 검사 오류 메시지"},helperText:{control:"text",description:"도움말 텍스트"},indeterminate:{control:"boolean",description:"불확정 상태"},onChange:{action:"changed",description:"체크 상태 변경 이벤트 핸들러"}},parameters:{docs:{description:{component:`
**Checkbox 컴포넌트**

\`Checkbox\` 컴포넌트는 폼에서 사용되는 체크박스를 제공합니다. 레이블, 에러 메시지, 비활성화, 불확정(indeterminate) 상태 등을 지원합니다.

### 주요 기능

- **체크 상태 관리**: \`checked\`, \`onChange\`를 통해 체크 상태를 제어합니다.
- **불확정 상태**: \`indeterminate\` prop을 사용하여 불확정 상태를 표시합니다.
- **레이블 및 도움말 텍스트**: \`label\`, \`helperText\`를 통해 레이블과 도움말을 표시할 수 있습니다.
- **에러 메시지 표시**: \`error\` prop을 사용하여 유효성 검사 오류 메시지를 표시합니다.
- **비활성화**: \`disabled\` prop을 사용하여 체크박스를 비활성화할 수 있습니다.
- **접근성 준수**: ARIA 속성을 사용하여 스크린 리더 및 키보드 내비게이션을 지원합니다.

### 사용법

\`\`\`tsx
import Checkbox from './Checkbox';

<Checkbox
  label="동의합니다."
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
/>;
\`\`\`
        `}}}},p=e=>{const[r,s]=g.useState(e.checked??!1);return o.jsx(W,{...e,checked:r,onChange:c=>{s(c.target.checked),e.onChange&&e.onChange(c)}})},n=p.bind({});n.args={label:"기본 체크박스"};n.storyName="기본 체크박스";const t=p.bind({});t.args={label:"비활성화된 체크박스",disabled:!0};t.storyName="비활성화 상태";const a=p.bind({});a.args={label:"에러 상태 체크박스",error:"이 필드를 체크해야 합니다."};a.storyName="에러 상태";const d=p.bind({});d.args={label:"불확정 상태 체크박스",indeterminate:!0};d.storyName="불확정 상태";const l=p.bind({});l.args={label:"도움말이 있는 체크박스",helperText:"추가 정보가 여기에 표시됩니다."};l.storyName="도움말 텍스트";const i=p.bind({});i.args={label:"모든 옵션 적용",error:"에러 메시지",helperText:"도움말 텍스트",disabled:!1,indeterminate:!0};i.storyName="모든 옵션 적용";var f,$,y;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(args.checked ?? false);
  return <Checkbox {...args} checked={checked} onChange={e => {
    setChecked(e.target.checked);
    args.onChange && args.onChange(e);
  }} />;
}`,...(y=($=n.parameters)==null?void 0:$.docs)==null?void 0:y.source}}};var S,j,_;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(args.checked ?? false);
  return <Checkbox {...args} checked={checked} onChange={e => {
    setChecked(e.target.checked);
    args.onChange && args.onChange(e);
  }} />;
}`,...(_=(j=t.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};var w,E,I;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(args.checked ?? false);
  return <Checkbox {...args} checked={checked} onChange={e => {
    setChecked(e.target.checked);
    args.onChange && args.onChange(e);
  }} />;
}`,...(I=(E=a.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var R,T,A;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(args.checked ?? false);
  return <Checkbox {...args} checked={checked} onChange={e => {
    setChecked(e.target.checked);
    args.onChange && args.onChange(e);
  }} />;
}`,...(A=(T=d.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var v,N,H;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(args.checked ?? false);
  return <Checkbox {...args} checked={checked} onChange={e => {
    setChecked(e.target.checked);
    args.onChange && args.onChange(e);
  }} />;
}`,...(H=(N=l.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};var B,D,G;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(args.checked ?? false);
  return <Checkbox {...args} checked={checked} onChange={e => {
    setChecked(e.target.checked);
    args.onChange && args.onChange(e);
  }} />;
}`,...(G=(D=i.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};const oe=["Default","Disabled","ErrorState","Indeterminate","WithHelperText","AllOptions"];export{i as AllOptions,n as Default,t as Disabled,a as ErrorState,d as Indeterminate,l as WithHelperText,oe as __namedExportsOrder,re as default};
