import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{r as i}from"./index-DJO9vBfz.js";import{d as h}from"./styled-components.browser.esm-Dsr6U-en.js";import{g as b}from"./style-CuGJsH27.js";import{d as Z}from"./theme-BstcRpbz.js";import{B as Y}from"./Button-BZyZE5fo.js";function ee(...n){return t=>{n.forEach(c=>{typeof c=="function"?c(t):c!=null&&(c.current=t)})}}const ne=h.div`
  border-radius: ${({theme:n})=>n.borderRadius.medium};
  /* overflow: hidden; */
`,oe=h.div`
  &:last-child {
    border-bottom: none;
  }
`,te=h.button`
  width: 100%;
  padding: ${({theme:n})=>n.spacing.large};
  background-color: ${({theme:n})=>n.colors.WHITE};
  border: none;
  text-align: left;
  cursor: pointer;
  font-size: ${({theme:n})=>n.fontSizes.medium};
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({theme:n,$expanded:t})=>t?n.colors.BLUE_500:n.colors.GRAY_800};

  &:hover {
    background-color: ${({theme:n})=>b(n.defaultColor,.1)};
  }

  &:focus {
    outline: none;
    background-color: ${({theme:n})=>b(n.defaultColor,.1)};
  }
`,re=h.div`
  overflow: hidden;
  max-height: ${({$height:n})=>n}px;
  padding: ${({theme:n,$expanded:t})=>t?n.spacing.large:`0 ${n.spacing.large}`};
  transition: max-height 0.3s ease, padding 0.3s ease, opacity 0.3s ease;
  opacity: ${({$expanded:n})=>n?1:0};
  color: ${({theme:n})=>n.colors.GRAY_800};
`,ce=h.svg`
  transition: transform 0.3s;
  transform: ${({$expanded:n})=>n?"rotate(180deg)":"rotate(0deg)"};
  width: ${({theme:n})=>n.spacing.xLarge};
  height: ${({theme:n})=>n.spacing.xLarge};
`,L=i.createContext({activeValues:[],multiple:!1}),W=i.createContext({toggleItem:()=>{}}),F=()=>{const n=i.useContext(L);if(!n)throw new Error("useAccordion must be used within AccordionProvider");return n},ie=()=>{const n=i.useContext(W);if(!n)throw new Error("useAccordionDispatch must be used within AccordionProvider");return n},se=(n,t)=>{const{children:c,multiple:r=!1,defaultValue:a,value:d,onChange:u,style:s,className:l,...A}=n,[m,H]=i.useState(r?a??[]:a!==void 0?[a]:[]),V=d!==void 0,g=V?r?d:[d]:m,Q=v=>{let p;g.includes(v)?p=r?g.filter(X=>X!==v):[]:p=r?[...g,v]:[v],V||H(p),u&&u(r?p:p[0]??"")};return e.jsx(L.Provider,{value:{activeValues:g,multiple:r},children:e.jsx(W.Provider,{value:{toggleItem:Q},children:e.jsx(ne,{className:l,style:s,ref:t,...A,children:c})})})},J=i.createContext(null),K=()=>{const n=i.useContext(J);if(!n)throw new Error("useAccordionItem must be used within AccordionItem");return n},ae=i.forwardRef(({children:n,value:t,className:c,style:r,...a},d)=>e.jsx(J.Provider,{value:{value:t},children:e.jsx(oe,{className:c,style:r,...a,ref:d,children:n})})),de=e.jsx("polyline",{points:"6 9 12 15 18 9",stroke:Z.colors.GRAY_600,strokeWidth:"2",fill:"none"}),le=i.forwardRef(({children:n,className:t,style:c,...r},a)=>{const{activeValues:d,toggleItem:u,value:s}=(()=>{const{value:A}=K(),{activeValues:m}=F(),{toggleItem:H}=ie();return{activeValues:m,toggleItem:H,value:A}})(),l=d.includes(s);return e.jsxs(te,{$expanded:l,onClick:()=>u(s),"aria-expanded":l,"aria-controls":`accordion-content-${s}`,id:`accordion-header-${s}`,role:"button",className:t,style:c,ref:a,...r,children:[n,e.jsx(ce,{viewBox:"0 0 24 24",$expanded:l,children:de})]})}),ue=i.forwardRef(({children:n,className:t,style:c,...r},a)=>{const{activeValues:d}=F(),{value:u}=K(),s=d.includes(u),l=i.useRef(null),[A,m]=i.useState(0);return i.useEffect(()=>{l.current&&m(s?l.current.scrollHeight:0)},[s]),e.jsx(re,{$expanded:s,$height:A,role:"region",id:`accordion-content-${u}`,"aria-labelledby":`accordion-header-${u}`,className:t,style:c,ref:ee(l,a),...r,children:n})}),o=i.forwardRef(se);o.Item=ae;o.Header=le;o.Content=ue;o.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},className:{required:!1,tsType:{name:"string"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:""},defaultValue:{required:!1,tsType:{name:"T"},description:""},value:{required:!1,tsType:{name:"T"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: T) => void",signature:{arguments:[{type:{name:"T"},name:"value"}],return:{name:"void"}}},description:""}},composes:["Omit"]};const Ce={title:"Components/Accordion",component:o,parameters:{tags:["autodocs"],docs:{description:{component:`
**Accordion 컴포넌트**

\`Accordion\` 컴포넌트는 콘텐츠의 섹션을 접고 펼칠 수 있는 UI 요소를 제공합니다. 단일 및 다중 확장, 컨트롤드 및 언컨트롤드 모드를 모두 지원하며, 다양한 옵션을 통해 커스터마이징할 수 있습니다.

### 주요 기능

- **단일 및 다중 확장 지원**: \`multiple\` prop을 통해 한 번에 하나 또는 여러 개의 아이템을 확장할 수 있습니다.
- **컨트롤드 및 언컨트롤드 모드 지원**: \`value\`와 \`onChange\`를 통해 외부에서 상태를 제어하거나 내부 상태를 사용할 수 있습니다.
- **접근성 향상**: WAI-ARIA 가이드라인을 따라 제작되었으며, 키보드 내비게이션을 지원합니다.
- **스타일 커스터마이징 가능**: \`className\`과 \`style\`을 사용하여 커스텀 스타일을 적용할 수 있습니다.

### 사용법

\`\`\`tsx
import {Accordion} from 'yoso-ui';

const YourComponent = () => (
  <Accordion>
    <Accordion.Item value="item1">
      <Accordion.Header>Header 1</Accordion.Header>
      <Accordion.Content>Content 1</Accordion.Content>
    </Accordion.Item>
    {/* 다른 아이템들 */}
  </Accordion>
);
\`\`\`
          `}}},tags:["autodocs"],argTypes:{multiple:{control:"boolean",description:"여러 아이템을 동시에 확장할 수 있도록 허용합니다.",table:{category:"Behavior"}},value:{control:"object",description:"컨트롤드 모드에서 확장된 아이템의 값입니다.",table:{category:"Behavior"}},defaultValue:{control:"object",description:"언컨트롤드 모드에서 초기 확장된 아이템의 값입니다.",table:{category:"Behavior"}},onChange:{action:"changed",description:"확장된 아이템이 변경될 때 호출되는 콜백 함수입니다.",table:{category:"Events"}},className:{control:"text",description:"Accordion 컨테이너의 커스텀 클래스입니다.",table:{category:"Style"}},style:{control:"object",description:"Accordion 컨테이너의 인라인 스타일입니다.",table:{category:"Style"}}},args:{multiple:!1,className:"",style:{}}},C={name:"기본 아코디언",render:n=>e.jsx(o,{...n,children:e.jsxs(o.Item,{value:"item1",children:[e.jsx(o.Header,{children:'결국 중요한 건 인생을 얼마나 살았느냐가 아니다. 그동안 살아간 삶이다."'}),e.jsx(o.Content,{children:"이 영감을 주는 명언은 우리가 삶을 평가하는 방식을 생각하게 하는 교묘한 단어 유희를 사용합니다."})]})}),parameters:{docs:{description:{story:`
**기본**

\`Accordion\` 컴포넌트는 아이템을 확장할 수 있는 UI 요소입니다.

\`\`\`tsx
<Accordion>
  <Accordion.Item value="item1">
    <Accordion.Header>헤더 1</Accordion.Header>
    <Accordion.Content>콘텐츠 1</Accordion.Content>
  </Accordion.Item>
  {/* 다른 아이템들 */}
</Accordion>
\`\`\`
          `}}}},x={name:"단일 확장 (언컨트롤드)",render:n=>e.jsxs(o,{...n,children:[e.jsxs(o.Item,{value:"item1",children:[e.jsx(o.Header,{children:'제 인생의 사명은 단순히 생존하는 것이 아니라 번창하는 것입니다."'}),e.jsxs(o.Content,{children:[e.jsx("h2",{children:"마야 안젤루"}),"인생에 대한 영감을 주는 이 명언은 카드에 특히 적합합니다. 적절한 시기에 다른 사람에게 이 명언이 적힌 카드를 선물하면 어려움 속에서도 잘 살아나갈 동기를 부여할 수 있습니다."]})]}),e.jsxs(o.Item,{value:"item2",children:[e.jsx(o.Header,{children:'일 때문에 삶을 포기해서는 안 된다."'}),e.jsxs(o.Content,{children:[e.jsx("h2",{children:"존 우든"})," 워라밸이라고 하죠?"]})]}),e.jsxs(o.Item,{value:"item3",children:[e.jsx(o.Header,{children:"더 나은 것을 위해 좋은 것을 포기하는 것을 두려워하지 마라."}),e.jsxs(o.Content,{children:[e.jsx("h2",{children:"존 D. 록펠러"}),"인생에 대한 영감을 주는 명언으로, '충분히 좋은 것'에 안주하는 것과는 정반대의 의미를 담고 있습니다."]})]})]}),parameters:{docs:{description:{story:"\n**단일 확장 (언컨트롤드)**\n\n`multiple`이 `false`인 기본 모드에서는 한 번에 하나의 아이템만 확장됩니다.\n\n```tsx\n<Accordion>\n  {/* Accordion 아이템들 */}\n</Accordion>\n```\n          "}}}},I={name:"다중 확장 (언컨트롤드)",args:{multiple:!0},render:n=>e.jsxs(o,{...n,children:[e.jsxs(o.Item,{value:"item1",children:[e.jsx(o.Header,{children:"헤더 1"}),e.jsx(o.Content,{children:"콘텐츠 1"})]}),e.jsxs(o.Item,{value:"item2",children:[e.jsx(o.Header,{children:"헤더 2"}),e.jsx(o.Content,{children:"콘텐츠 2"})]}),e.jsxs(o.Item,{value:"item3",children:[e.jsx(o.Header,{children:"헤더 3"}),e.jsx(o.Content,{children:"콘텐츠 3"})]})]}),parameters:{docs:{description:{story:"\n**다중 확장 (언컨트롤드)**\n\n`multiple`을 `true`로 설정하여 여러 아이템을 동시에 확장할 수 있습니다.\n\n```tsx\n<Accordion multiple>\n  {/* Accordion 아이템들 */}\n</Accordion>\n```\n          "}}}},j={name:"단일 확장 (컨트롤드)",render:n=>{const[t,c]=i.useState(null);return e.jsxs(e.Fragment,{children:[e.jsx(Y,{size:"small",onClick:()=>c(r=>r?null:"item1"),style:{marginBottom:"10px"},children:t?"Close Panel":"Open Panel 1"}),e.jsxs(o,{...n,value:t,onChange:c,children:[e.jsxs(o.Item,{value:"item1",children:[e.jsx(o.Header,{children:"헤더 1"}),e.jsx(o.Content,{children:"콘텐츠 1"})]}),e.jsxs(o.Item,{value:"item2",children:[e.jsx(o.Header,{children:"헤더 2"}),e.jsx(o.Content,{children:"콘텐츠 2"})]})]})]})},parameters:{docs:{description:{story:`
**단일 확장 (컨트롤드)**

\`value\`와 \`onChange\`를 사용하여 확장된 아이템을 외부에서 제어할 수 있습니다.

\`\`\`tsx
const [activeValue, setActiveValue] = useState<string | null>(null);

<>
  <Button
    onClick={() => setActiveValue((prev) => (prev ? null : "item1"))}
  >
    {activeValue ? "Close Panel" : "Open Panel 1"}
  </Button>
  <Accordion value={activeValue} onChange={setActiveValue}>
    {/* Accordion 아이템들 */}
  </Accordion>
</>
\`\`\`
          `}}}},f={name:"다중 확장 (컨트롤드)",args:{multiple:!0},render:n=>{const[t,c]=i.useState([]);return e.jsxs(e.Fragment,{children:[e.jsx(Y,{size:"small",onClick:()=>c(r=>r.length?[]:["item1","item2"]),style:{marginBottom:"10px"},children:t.length?"Close All":"Open item1 and item2"}),e.jsxs(o,{...n,value:t,onChange:r=>{c(r),n.onChange&&n.onChange(r)},children:[e.jsxs(o.Item,{value:"item1",children:[e.jsx(o.Header,{children:"헤더 1"}),e.jsx(o.Content,{children:"콘텐츠 1"})]}),e.jsxs(o.Item,{value:"item2",children:[e.jsx(o.Header,{children:"헤더 2"}),e.jsx(o.Content,{children:"콘텐츠 2"})]}),e.jsxs(o.Item,{value:"item3",children:[e.jsx(o.Header,{children:"헤더 3"}),e.jsx(o.Content,{children:"콘텐츠 3"})]})]})]})},parameters:{docs:{description:{story:`
**다중 확장 (컨트롤드)**

\`multiple\` 모드에서 \`value\`와 \`onChange\`를 사용하여 확장된 아이템의 배열을 제어할 수 있습니다.

\`\`\`tsx
const [activeValues, setActiveValues] = useState<string[]>([]);

<>
  <Button
    onClick={() => setActiveValues((prev) => (prev.length ? [] : ["item1", "item2"]))}
  >
    {activeValues.length ? "Close All" : "Open item1 and item2"}
  </Button>
  <Accordion value={activeValues} onChange={setActiveValues}>
    {/* Accordion 아이템들 */}
  </Accordion>
</>
\`\`\`
          `}}}},y={name:"커스텀 스타일 적용",render:n=>e.jsx(o,{...n,children:e.jsxs(o.Item,{value:"item1",children:[e.jsx(o.Header,{style:{backgroundColor:"lightblue",color:"white"},children:"헤더 1"}),e.jsx(o.Content,{style:{backgroundColor:"lightblue",color:"white"},children:"콘텐츠 1"})]})}),parameters:{docs:{description:{story:`
**커스텀 스타일 적용**

\`className\`과 \`style\`을 사용하여 컴포넌트에 커스텀 스타일을 적용할 수 있습니다.

\`\`\`tsx
<Accordion className="custom-accordion">
  <Accordion.Item value="item1">
     <Accordion.Header
          style={{ backgroundColor: "lightblue", color: "white" }}
        >
          헤더 1
        </Accordion.Header>
        <Accordion.Content
          style={{ backgroundColor: "lightblue", color: "white" }}
        >
          콘텐츠 1
        </Accordion.Content>
  </Accordion.Item>
</Accordion>
\`\`\`
          `}}}};var w,S,B;C.parameters={...C.parameters,docs:{...(w=C.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "기본 아코디언",
  render: args => <Accordion {...args}>
      <Accordion.Item value="item1">
        <Accordion.Header>
          결국 중요한 건 인생을 얼마나 살았느냐가 아니다. 그동안 살아간 삶이다."
        </Accordion.Header>
        <Accordion.Content>
          이 영감을 주는 명언은 우리가 삶을 평가하는 방식을 생각하게 하는 교묘한
          단어 유희를 사용합니다.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>,
  parameters: {
    docs: {
      description: {
        story: \`
**기본**

\\\`Accordion\\\` 컴포넌트는 아이템을 확장할 수 있는 UI 요소입니다.

\\\`\\\`\\\`tsx
<Accordion>
  <Accordion.Item value="item1">
    <Accordion.Header>헤더 1</Accordion.Header>
    <Accordion.Content>콘텐츠 1</Accordion.Content>
  </Accordion.Item>
  {/* 다른 아이템들 */}
</Accordion>
\\\`\\\`\\\`
          \`
      }
    }
  }
}`,...(B=(S=C.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var $,k,R;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: "단일 확장 (언컨트롤드)",
  render: args => <Accordion {...args}>
      <Accordion.Item value="item1">
        <Accordion.Header>
          제 인생의 사명은 단순히 생존하는 것이 아니라 번창하는 것입니다."
        </Accordion.Header>
        <Accordion.Content>
          <h2>마야 안젤루</h2>
          인생에 대한 영감을 주는 이 명언은 카드에 특히 적합합니다. 적절한
          시기에 다른 사람에게 이 명언이 적힌 카드를 선물하면 어려움 속에서도 잘
          살아나갈 동기를 부여할 수 있습니다.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item2">
        <Accordion.Header>일 때문에 삶을 포기해서는 안 된다."</Accordion.Header>
        <Accordion.Content>
          <h2>존 우든</h2> 워라밸이라고 하죠?
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item3">
        <Accordion.Header>
          더 나은 것을 위해 좋은 것을 포기하는 것을 두려워하지 마라.
        </Accordion.Header>
        <Accordion.Content>
          <h2>존 D. 록펠러</h2>
          인생에 대한 영감을 주는 명언으로, '충분히 좋은 것'에 안주하는 것과는
          정반대의 의미를 담고 있습니다.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>,
  parameters: {
    docs: {
      description: {
        story: \`
**단일 확장 (언컨트롤드)**

\\\`multiple\\\`이 \\\`false\\\`인 기본 모드에서는 한 번에 하나의 아이템만 확장됩니다.

\\\`\\\`\\\`tsx
<Accordion>
  {/* Accordion 아이템들 */}
</Accordion>
\\\`\\\`\\\`
          \`
      }
    }
  }
}`,...(R=(k=x.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var P,T,E;I.parameters={...I.parameters,docs:{...(P=I.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "다중 확장 (언컨트롤드)",
  args: {
    multiple: true
  },
  render: args => <Accordion {...args}>
      <Accordion.Item value="item1">
        <Accordion.Header>헤더 1</Accordion.Header>
        <Accordion.Content>콘텐츠 1</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item2">
        <Accordion.Header>헤더 2</Accordion.Header>
        <Accordion.Content>콘텐츠 2</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item3">
        <Accordion.Header>헤더 3</Accordion.Header>
        <Accordion.Content>콘텐츠 3</Accordion.Content>
      </Accordion.Item>
    </Accordion>,
  parameters: {
    docs: {
      description: {
        story: \`
**다중 확장 (언컨트롤드)**

\\\`multiple\\\`을 \\\`true\\\`로 설정하여 여러 아이템을 동시에 확장할 수 있습니다.

\\\`\\\`\\\`tsx
<Accordion multiple>
  {/* Accordion 아이템들 */}
</Accordion>
\\\`\\\`\\\`
          \`
      }
    }
  }
}`,...(E=(T=I.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var N,O,U;j.parameters={...j.parameters,docs:{...(N=j.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "단일 확장 (컨트롤드)",
  render: args => {
    const [activeValue, setActiveValue] = useState<string | null>(null);
    return <>
        <Button size="small" onClick={() => setActiveValue(prev => prev ? null : "item1")} style={{
        marginBottom: "10px"
      }}>
          {activeValue ? "Close Panel" : "Open Panel 1"}
        </Button>
        <Accordion {...args} value={activeValue} onChange={setActiveValue}>
          <Accordion.Item value="item1">
            <Accordion.Header>헤더 1</Accordion.Header>
            <Accordion.Content>콘텐츠 1</Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="item2">
            <Accordion.Header>헤더 2</Accordion.Header>
            <Accordion.Content>콘텐츠 2</Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </>;
  },
  parameters: {
    docs: {
      description: {
        story: \`
**단일 확장 (컨트롤드)**

\\\`value\\\`와 \\\`onChange\\\`를 사용하여 확장된 아이템을 외부에서 제어할 수 있습니다.

\\\`\\\`\\\`tsx
const [activeValue, setActiveValue] = useState<string | null>(null);

<>
  <Button
    onClick={() => setActiveValue((prev) => (prev ? null : "item1"))}
  >
    {activeValue ? "Close Panel" : "Open Panel 1"}
  </Button>
  <Accordion value={activeValue} onChange={setActiveValue}>
    {/* Accordion 아이템들 */}
  </Accordion>
</>
\\\`\\\`\\\`
          \`
      }
    }
  }
}`,...(U=(O=j.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var _,q,D;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "다중 확장 (컨트롤드)",
  args: {
    multiple: true
  },
  render: args => {
    const [activeValues, setActiveValues] = useState<string[]>([]);
    return <>
        <Button size="small" onClick={() => setActiveValues(prev => prev.length ? [] : ["item1", "item2"])} style={{
        marginBottom: "10px"
      }}>
          {activeValues.length ? "Close All" : "Open item1 and item2"}
        </Button>
        <Accordion {...args} value={activeValues} onChange={values => {
        setActiveValues(values as string[]);
        args.onChange && args.onChange(values);
      }}>
          <Accordion.Item value="item1">
            <Accordion.Header>헤더 1</Accordion.Header>
            <Accordion.Content>콘텐츠 1</Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="item2">
            <Accordion.Header>헤더 2</Accordion.Header>
            <Accordion.Content>콘텐츠 2</Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="item3">
            <Accordion.Header>헤더 3</Accordion.Header>
            <Accordion.Content>콘텐츠 3</Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </>;
  },
  parameters: {
    docs: {
      description: {
        story: \`
**다중 확장 (컨트롤드)**

\\\`multiple\\\` 모드에서 \\\`value\\\`와 \\\`onChange\\\`를 사용하여 확장된 아이템의 배열을 제어할 수 있습니다.

\\\`\\\`\\\`tsx
const [activeValues, setActiveValues] = useState<string[]>([]);

<>
  <Button
    onClick={() => setActiveValues((prev) => (prev.length ? [] : ["item1", "item2"]))}
  >
    {activeValues.length ? "Close All" : "Open item1 and item2"}
  </Button>
  <Accordion value={activeValues} onChange={setActiveValues}>
    {/* Accordion 아이템들 */}
  </Accordion>
</>
\\\`\\\`\\\`
          \`
      }
    }
  }
}`,...(D=(q=f.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var z,G,M;y.parameters={...y.parameters,docs:{...(z=y.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "커스텀 스타일 적용",
  render: args => <Accordion {...args}>
      <Accordion.Item value="item1">
        <Accordion.Header style={{
        backgroundColor: "lightblue",
        color: "white"
      }}>
          헤더 1
        </Accordion.Header>
        <Accordion.Content style={{
        backgroundColor: "lightblue",
        color: "white"
      }}>
          콘텐츠 1
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>,
  parameters: {
    docs: {
      description: {
        story: \`
**커스텀 스타일 적용**

\\\`className\\\`과 \\\`style\\\`을 사용하여 컴포넌트에 커스텀 스타일을 적용할 수 있습니다.

\\\`\\\`\\\`tsx
<Accordion className="custom-accordion">
  <Accordion.Item value="item1">
     <Accordion.Header
          style={{ backgroundColor: "lightblue", color: "white" }}
        >
          헤더 1
        </Accordion.Header>
        <Accordion.Content
          style={{ backgroundColor: "lightblue", color: "white" }}
        >
          콘텐츠 1
        </Accordion.Content>
  </Accordion.Item>
</Accordion>
\\\`\\\`\\\`
          \`
      }
    }
  }
}`,...(M=(G=y.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};const xe=["Default","UncontrolledSingle","UncontrolledMultiple","ControlledSingle","ControlledMultiple","CustomStyling"];export{f as ControlledMultiple,j as ControlledSingle,y as CustomStyling,C as Default,I as UncontrolledMultiple,x as UncontrolledSingle,xe as __namedExportsOrder,Ce as default};
