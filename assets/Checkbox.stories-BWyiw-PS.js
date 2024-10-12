import{j as o}from"./jsx-runtime-CkxqCPlQ.js";import{r as p}from"./index-DJO9vBfz.js";import{d as i,l as B}from"./styled-components.browser.esm-Dsr6U-en.js";const M=i.label`
  display: flex;
  align-items: center;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  opacity: ${({disabled:e})=>e?.6:1};
  gap: ${({$gap:e,theme:r})=>e||r.spacing.small};
`,V=i.input.attrs({type:"checkbox"})`
  border: 0;
  clip: rect(0 0 0 0); // 숨김
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`,P=i.div`
  width: ${({theme:e})=>e.spacing.large};
  height: ${({theme:e})=>e.spacing.large};
  background: ${({$checked:e,$indeterminate:r,theme:s})=>e||r?s.defaultColor:s.colors.white};
  border: 1px solid
    ${({$checked:e,$indeterminate:r,theme:s})=>e||r?s.defaultColor:s.colors.gray[300]};
  border-radius: ${({theme:e})=>e.borderRadius.small};
  transition: all 150ms;
  display: flex;
  align-items: center;
  justify-content: center;

  ${V}:focus + & {
    outline: none;
    border-color: ${({theme:e})=>e.defaultColor};
  }

  ${({disabled:e})=>e&&B`
      border-color: ${({theme:r})=>r.colors.gray[300]};
      background: ${({theme:r})=>r.colors.gray[100]};
    `}
`,W=i.svg`
  fill: none;
  stroke: ${({theme:e})=>e.colors.white};
  stroke-width: 2px;
`,Q=i.span`
  font-size: ${({theme:e})=>e.fontSizes.medium};
  user-select: none;
  cursor: pointer;
  color: ${({theme:e})=>e.colors.black};

  ${({$disabled:e})=>e&&B`
      color: ${({theme:r})=>r.colors.gray[500]};
      cursor: not-allowed;
    `}
`,U=i.span`
  display: block;
  color: ${({$error:e,theme:r})=>e?r.colors.red[500]:r.colors.gray[600]};
  font-size: ${({theme:e})=>e.fontSizes.small};
  margin-top: ${({theme:e})=>e.spacing.xsmall};
  margin-left: ${({theme:e})=>e.spacing.xsmall};
`,X=o.jsx(W,{viewBox:"0 0 24 24",children:o.jsx("polyline",{points:"20 6 9 17 4 12"})}),Y=o.jsx(W,{viewBox:"0 0 24 24",children:o.jsx("line",{x1:"4",y1:"12",x2:"20",y2:"12"})}),f=p.forwardRef(({id:e,label:r,error:s,helperText:g,disabled:k=!1,indeterminate:u=!1,checked:x,onChange:L,gap:G,...J},m)=>{const C=p.useRef(null),K=`checkbox-${p.useId()}`;return p.useEffect(()=>{C.current&&(C.current.indeterminate=u)},[u]),o.jsxs(o.Fragment,{children:[o.jsxs(M,{disabled:k,$gap:G,children:[o.jsx(V,{type:"checkbox",id:K,disabled:k,checked:x,onChange:L,ref:b=>{C.current=b,typeof m=="function"?m(b):m&&(m.current=b)},...J}),o.jsx(P,{$checked:x,$indeterminate:u,disabled:k,children:u?Y:x&&X}),r&&o.jsx(Q,{$disabled:k,children:r})]}),(s||g)&&o.jsx(U,{$error:!!s,children:s||g})]})});f.displayName="Checkbox";const F=f;f.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{disabled:{defaultValue:{value:"false",computed:!1},required:!1},indeterminate:{defaultValue:{value:"false",computed:!1},required:!1}}};const se={title:"Components/Checkbox",component:F,tags:["autodocs"],argTypes:{label:{control:"text",description:"체크박스 레이블 텍스트"},checked:{control:"boolean",description:"체크 상태"},disabled:{control:"boolean",description:"비활성화 상태"},error:{control:"text",description:"유효성 검사 오류 메시지"},helperText:{control:"text",description:"도움말 텍스트"},indeterminate:{control:"boolean",description:"불확정 상태"},onChange:{action:"changed",description:"체크 상태 변경 이벤트 핸들러"}},parameters:{docs:{description:{component:`
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
        `}}}},h=e=>{const[r,s]=p.useState(e.checked??!1);return o.jsx(F,{...e,checked:r,onChange:g=>{s(g.target.checked),e.onChange&&e.onChange(g)}})},c=h.bind({});c.args={label:"기본 체크박스"};c.storyName="기본 체크박스";const a=h.bind({});a.args={label:"비활성화된 체크박스",disabled:!0};a.storyName="비활성화 상태";const t=h.bind({});t.args={label:"에러 상태 체크박스",error:"이 필드를 체크해야 합니다."};t.storyName="에러 상태";const n=h.bind({});n.args={label:"불확정 상태 체크박스",indeterminate:!0};n.storyName="불확정 상태";const d=h.bind({});d.args={label:"도움말이 있는 체크박스",helperText:"추가 정보가 여기에 표시됩니다."};d.storyName="도움말 텍스트";const l=h.bind({});l.args={label:"모든 옵션 적용",error:"에러 메시지",helperText:"도움말 텍스트",disabled:!1,indeterminate:!0};l.storyName="모든 옵션 적용";var $,y,S;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(args.checked ?? false);
  return <Checkbox {...args} checked={checked} onChange={e => {
    setChecked(e.target.checked);
    args.onChange && args.onChange(e);
  }} />;
}`,...(S=(y=c.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var j,w,I;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(args.checked ?? false);
  return <Checkbox {...args} checked={checked} onChange={e => {
    setChecked(e.target.checked);
    args.onChange && args.onChange(e);
  }} />;
}`,...(I=(w=a.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var T,N,v;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(args.checked ?? false);
  return <Checkbox {...args} checked={checked} onChange={e => {
    setChecked(e.target.checked);
    args.onChange && args.onChange(e);
  }} />;
}`,...(v=(N=t.parameters)==null?void 0:N.docs)==null?void 0:v.source}}};var E,R,_;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(args.checked ?? false);
  return <Checkbox {...args} checked={checked} onChange={e => {
    setChecked(e.target.checked);
    args.onChange && args.onChange(e);
  }} />;
}`,...(_=(R=n.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var z,A,D;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(args.checked ?? false);
  return <Checkbox {...args} checked={checked} onChange={e => {
    setChecked(e.target.checked);
    args.onChange && args.onChange(e);
  }} />;
}`,...(D=(A=d.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var H,O,q;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(args.checked ?? false);
  return <Checkbox {...args} checked={checked} onChange={e => {
    setChecked(e.target.checked);
    args.onChange && args.onChange(e);
  }} />;
}`,...(q=(O=l.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};const ce=["Default","Disabled","ErrorState","Indeterminate","WithHelperText","AllOptions"];export{l as AllOptions,c as Default,a as Disabled,t as ErrorState,n as Indeterminate,d as WithHelperText,ce as __namedExportsOrder,se as default};
