import{j as a}from"./jsx-runtime-CkxqCPlQ.js";import{r as l}from"./index-DJO9vBfz.js";import{d as u}from"./styled-components.browser.esm-Dsr6U-en.js";import{g as Q}from"./style-x6FuVGrZ.js";const X=u.label`
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  opacity: ${({$disabled:e})=>e?.6:1};
  width: fit-content;
  color: ${({theme:e})=>e.colors.black};
  font-size: 1rem;
  font-family: inherit;
  vertical-align: middle;
  gap: ${({theme:e})=>e.spacing.small};

  display: inline-flex;
  align-items: center;

  /* 라벨 텍스트의 기준선을 조정 */
  & > span:last-child {
    line-height: 1;
    padding-top: 2px;
  }
`,x=u.input`
  opacity: 0;
  position: absolute;
  pointer-events: none;
`,Y=u.span`
  width: ${({theme:e})=>e.spacing.large};
  height: ${({theme:e})=>e.spacing.large};
  border: 1px solid ${({theme:e,$color:n})=>n||e.colors.gray[300]};
  border-radius: ${({theme:e})=>e.borderRadius.round};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;

  ${x}:checked + & {
    background-color: ${({theme:e,$color:n})=>n||e.defaultColor};
  }

  ${x}:focus + & {
    outline: none;
    box-shadow: 0 0 0 2px ${({theme:e})=>Q(e.defaultColor,.3)};
  }

  & > span {
    width: 50%;
    height: 50%;
    background-color: white;
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.2s;
  }

  ${x}:checked + & > span {
    opacity: 1;
  }
`,Z=u.span`
  color: ${({theme:e,$disabled:n})=>n?e.colors.gray[500]:"inherit"};
`,ee=u.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.medium};
  align-items: center;
`;u.span`
  color: ${({theme:e})=>e.colors.error};
  font-size: ${({theme:e})=>e.fontSizes.small};
  margin-top: 4px;
`;const B=l.createContext(null),J=({value:e,defaultValue:n,onChange:i,children:s,name:G,disabled:C=!1,options:p,className:f,style:d})=>{const[V,j]=l.useState(n),y=e!==void 0,S={value:y?e:V,onChange:r=>{const K=r.target.value;y||j(K),i&&i(r)},name:G,disabled:C},$=()=>p&&p.length>0?(s&&console.warn("RadioGroup: props로 'options'이 제공되었기 때문에 'children' 은 무시됩니다."),p.map(r=>a.jsx(o,{value:r.value,disabled:r.disabled,children:r.label},r.value))):s;return a.jsx(B.Provider,{value:S,children:a.jsx(ee,{className:f,style:d,role:"radiogroup",children:$()})})};J.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{value:{required:!1,tsType:{name:"any"},description:""},defaultValue:{required:!1,tsType:{name:"any"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"event"}],return:{name:"void"}}},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},name:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},options:{required:!1,tsType:{name:"Array",elements:[{name:"RadioOptionType"}],raw:"RadioOptionType[]"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const T=l.forwardRef(({value:e,checked:n,color:i,disabled:s=!1,className:G,style:C,autoFocus:p,onChange:f,children:d,name:V,...j},y)=>{const t=l.useContext(B),c=s||(t==null?void 0:t.disabled)||!1,S=t?t.value===e:n,$=r=>{t&&t.onChange&&t.onChange(r),f&&f(r)};return a.jsxs(X,{className:G,style:C,$disabled:c,children:[a.jsx(x,{ref:y,type:"radio",disabled:c,"aria-label":typeof d=="string"?d:void 0,value:e,checked:S,onChange:$,autoFocus:p,name:(t==null?void 0:t.name)||V,...j}),a.jsx(Y,{$color:i,$disabled:c,children:a.jsx("span",{})}),d&&a.jsx(Z,{$disabled:c,children:d})]})});T.displayName="Radio";const o=T;o.Group=J;T.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const ae={title:"Components/Radio",component:o,parameters:{docs:{description:{component:"\n**Radio 컴포넌트**\n\n`Radio` 컴포넌트는 여러 옵션 중 하나를 선택할 수 있는 라디오 버튼을 제공합니다. 단일로 사용하거나 `Radio.Group` 내에서 그룹으로 관리할 수 있으며, 컨트롤드 및 언컨트롤드 모드를 모두 지원합니다.\n\n### 주요 기능\n\n- **단일 및 그룹 사용 지원**: `Radio`를 개별적으로 사용하거나 `Radio.Group`을 통해 그룹화할 수 있습니다.\n- **컨트롤드 및 언컨트롤드 모드 지원**: `value`와 `defaultValue`를 통해 상태 관리 방식을 선택할 수 있습니다.\n- **접근성 향상**: WAI-ARIA 가이드라인을 준수하여 제작되었으며, 스크린 리더와 키보드 내비게이션을 지원합니다.\n- **스타일 커스터마이징 가능**: `className`과 `style`을 사용하여 커스텀 스타일을 적용할 수 있습니다.\n        "}}},argTypes:{value:{control:"text",description:"라디오 버튼의 값",table:{category:"Input"}},checked:{control:"boolean",description:"선택 상태 (컨트롤드 모드)",table:{category:"Input"}},defaultChecked:{control:"boolean",description:"초기 선택 상태 (언컨트롤드 모드)",table:{category:"Input"}},disabled:{control:"boolean",description:"비활성화 여부",table:{category:"State"}},onChange:{action:"changed",description:"상태가 변경될 때 호출되는 콜백 함수",table:{category:"Events"}},color:{control:"color",description:"라디오 버튼의 커스텀 색상",table:{category:"Style"}},children:{control:"text",description:"라벨 내용",table:{category:"Content"}}},args:{disabled:!1,children:"라디오 라벨"}},R={name:"기본 라디오",render:e=>a.jsx(o,{...e}),parameters:{docs:{description:{story:'\n**기본 라디오**\n\n`Radio` 컴포넌트를 사용하여 기본 라디오 버튼을 렌더링합니다.\n\n```tsx\n<Radio value="option1">옵션 1</Radio>\n```\n        '}}}},m={name:"라디오 그룹",render:()=>{const[e,n]=l.useState("option1");return a.jsxs(o.Group,{value:e,onChange:i=>n(i.target.value),children:[a.jsx(o,{value:"option1",children:"옵션 1"}),a.jsx(o,{value:"option2",children:"옵션 2"}),a.jsx(o,{value:"option3",children:"옵션 3"})]})},parameters:{docs:{description:{story:`
**라디오 그룹**

\`Radio.Group\`을 사용하여 여러 개의 라디오 버튼을 그룹화할 수 있습니다.

\`\`\`tsx
const [value, setValue] = useState("option1");

<Radio.Group value={value} onChange={(e) => setValue(e.target.value)}>
  <Radio value="option1">옵션 1</Radio>
  <Radio value="option2">옵션 2</Radio>
  <Radio value="option3">옵션 3</Radio>
</Radio.Group>
\`\`\`
        `}}}},v={name:"언컨트롤드 라디오 그룹",render:()=>a.jsxs(o.Group,{defaultValue:"option2",children:[a.jsx(o,{value:"option1",children:"옵션 1"}),a.jsx(o,{value:"option2",children:"옵션 2"}),a.jsx(o,{value:"option3",children:"옵션 3"})]}),parameters:{docs:{description:{story:`
**언컨트롤드 라디오 그룹**

\`defaultValue\`를 사용하여 언컨트롤드 모드에서 초기 선택 값을 설정할 수 있습니다.

\`\`\`tsx
<Radio.Group defaultValue="option2">
  <Radio value="option1">옵션 1</Radio>
  <Radio value="option2">옵션 2</Radio>
  <Radio value="option3">옵션 3</Radio>
</Radio.Group>
\`\`\`
        `}}}},g={name:"옵션 배열로 라디오 그룹 생성",render:()=>{const e=[{label:"사과",value:"apple"},{label:"배",value:"pear"},{label:"오렌지",value:"orange",disabled:!0}],[n,i]=l.useState("apple");return a.jsx(o.Group,{options:e,value:n,onChange:s=>i(s.target.value)})},parameters:{docs:{description:{story:`
**옵션 배열로 라디오 그룹 생성**

\`options\` 프롭을 사용하여 배열로 라디오 버튼들을 생성할 수 있습니다.

\`\`\`tsx
const options = [
  { label: "사과", value: "apple" },
  { label: "배", value: "pear" },
  { label: "오렌지", value: "orange", disabled: true },
];

const [value, setValue] = useState("apple");

<Radio.Group
  options={options}
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>
\`\`\`
        `}}}},b={name:"커스텀 스타일 라디오",render:()=>a.jsx(o,{value:"custom",color:"#FF5722",children:"커스텀 컬러 라디오"}),parameters:{docs:{description:{story:`
**커스텀 스타일 라디오**

\`color\` 프롭을 사용하여 라디오 버튼의 색상을 커스터마이징할 수 있습니다.

\`\`\`tsx
<Radio value="custom" color="#FF5722">
  커스텀 컬러 라디오
</Radio>
\`\`\`
        `}}}},h={name:"비활성화된 라디오",render:()=>a.jsxs(o.Group,{children:[a.jsx(o,{value:"enabled",children:"활성화된 옵션"}),a.jsx(o,{value:"disabled",disabled:!0,children:"비활성화된 옵션"})]}),parameters:{docs:{description:{story:`
**비활성화된 라디오**

\`disabled\`를 \`true\`로 설정하여 라디오 버튼을 비활성화할 수 있습니다.

\`\`\`tsx
<Radio.Group>
  <Radio value="enabled">활성화된 옵션</Radio>
  <Radio value="disabled" disabled>
    비활성화된 옵션
  </Radio>
</Radio.Group>
\`\`\`
        `}}}};var w,E,I;R.parameters={...R.parameters,docs:{...(w=R.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "기본 라디오",
  render: args => <Radio {...args} />,
  parameters: {
    docs: {
      description: {
        story: \`
**기본 라디오**

\\\`Radio\\\` 컴포넌트를 사용하여 기본 라디오 버튼을 렌더링합니다.

\\\`\\\`\\\`tsx
<Radio value="option1">옵션 1</Radio>
\\\`\\\`\\\`
        \`
      }
    }
  }
}`,...(I=(E=R.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var _,k,q;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "라디오 그룹",
  render: () => {
    const [value, setValue] = useState("option1");
    return <Radio.Group value={value} onChange={e => setValue(e.target.value)}>
        <Radio value="option1">옵션 1</Radio>
        <Radio value="option2">옵션 2</Radio>
        <Radio value="option3">옵션 3</Radio>
      </Radio.Group>;
  },
  parameters: {
    docs: {
      description: {
        story: \`
**라디오 그룹**

\\\`Radio.Group\\\`을 사용하여 여러 개의 라디오 버튼을 그룹화할 수 있습니다.

\\\`\\\`\\\`tsx
const [value, setValue] = useState("option1");

<Radio.Group value={value} onChange={(e) => setValue(e.target.value)}>
  <Radio value="option1">옵션 1</Radio>
  <Radio value="option2">옵션 2</Radio>
  <Radio value="option3">옵션 3</Radio>
</Radio.Group>
\\\`\\\`\\\`
        \`
      }
    }
  }
}`,...(q=(k=m.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var F,O,D;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "언컨트롤드 라디오 그룹",
  render: () => <Radio.Group defaultValue="option2">
      <Radio value="option1">옵션 1</Radio>
      <Radio value="option2">옵션 2</Radio>
      <Radio value="option3">옵션 3</Radio>
    </Radio.Group>,
  parameters: {
    docs: {
      description: {
        story: \`
**언컨트롤드 라디오 그룹**

\\\`defaultValue\\\`를 사용하여 언컨트롤드 모드에서 초기 선택 값을 설정할 수 있습니다.

\\\`\\\`\\\`tsx
<Radio.Group defaultValue="option2">
  <Radio value="option1">옵션 1</Radio>
  <Radio value="option2">옵션 2</Radio>
  <Radio value="option3">옵션 3</Radio>
</Radio.Group>
\\\`\\\`\\\`
        \`
      }
    }
  }
}`,...(D=(O=v.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var N,A,z;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "옵션 배열로 라디오 그룹 생성",
  render: () => {
    const options = [{
      label: "사과",
      value: "apple"
    }, {
      label: "배",
      value: "pear"
    }, {
      label: "오렌지",
      value: "orange",
      disabled: true
    }];
    const [value, setValue] = useState("apple");
    return <Radio.Group options={options} value={value} onChange={e => setValue(e.target.value)} />;
  },
  parameters: {
    docs: {
      description: {
        story: \`
**옵션 배열로 라디오 그룹 생성**

\\\`options\\\` 프롭을 사용하여 배열로 라디오 버튼들을 생성할 수 있습니다.

\\\`\\\`\\\`tsx
const options = [
  { label: "사과", value: "apple" },
  { label: "배", value: "pear" },
  { label: "오렌지", value: "orange", disabled: true },
];

const [value, setValue] = useState("apple");

<Radio.Group
  options={options}
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>
\\\`\\\`\\\`
        \`
      }
    }
  }
}`,...(z=(A=g.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};var H,L,M;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "커스텀 스타일 라디오",
  render: () => <Radio value="custom" color="#FF5722">
      커스텀 컬러 라디오
    </Radio>,
  parameters: {
    docs: {
      description: {
        story: \`
**커스텀 스타일 라디오**

\\\`color\\\` 프롭을 사용하여 라디오 버튼의 색상을 커스터마이징할 수 있습니다.

\\\`\\\`\\\`tsx
<Radio value="custom" color="#FF5722">
  커스텀 컬러 라디오
</Radio>
\\\`\\\`\\\`
        \`
      }
    }
  }
}`,...(M=(L=b.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var P,U,W;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "비활성화된 라디오",
  render: () => <Radio.Group>
      <Radio value="enabled">활성화된 옵션</Radio>
      <Radio value="disabled" disabled>
        비활성화된 옵션
      </Radio>
    </Radio.Group>,
  parameters: {
    docs: {
      description: {
        story: \`
**비활성화된 라디오**

\\\`disabled\\\`를 \\\`true\\\`로 설정하여 라디오 버튼을 비활성화할 수 있습니다.

\\\`\\\`\\\`tsx
<Radio.Group>
  <Radio value="enabled">활성화된 옵션</Radio>
  <Radio value="disabled" disabled>
    비활성화된 옵션
  </Radio>
</Radio.Group>
\\\`\\\`\\\`
        \`
      }
    }
  }
}`,...(W=(U=h.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};const oe=["Default","RadioGroupExample","UncontrolledRadioGroup","RadioGroupWithOptions","CustomStyledRadio","DisabledRadio"],se=Object.freeze(Object.defineProperty({__proto__:null,CustomStyledRadio:b,Default:R,DisabledRadio:h,RadioGroupExample:m,RadioGroupWithOptions:g,UncontrolledRadioGroup:v,__namedExportsOrder:oe,default:ae},Symbol.toStringTag,{value:"Module"}));export{b as C,R as D,o as R,v as U,m as a,g as b,se as c};
