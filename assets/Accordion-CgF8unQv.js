import{j as n}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as d}from"./index-BrnU7xv7.js";import"./chunk-NUUEMKO5-DY1GssFd.js";import{ae as t,af as c,ag as l}from"./index-CI6p9fke.js";import{A as s,D as r,U as a,a as m,C as x,b as h}from"./Accordion.stories-BDyYXWL0.js";import"./index-DJO9vBfz.js";import"./iframe-g09WvU2b.js";import"../sb-preview/runtime.js";import"./client-Cd-gdppX.js";import"./index-Cp9I2zMD.js";import"./index-D-8MO0q_.js";import"./index-CvTBScqg.js";import"./index-DrFu-skq.js";import"./styled-components.browser.esm-Dsr6U-en.js";import"./style-x6FuVGrZ.js";import"./theme-DTREIjCk.js";import"./Button-CpD3pMnL.js";function i(e){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"Components/Accordion",component:s}),`
`,n.jsx(o.h1,{id:"accordion-컴포넌트",children:"Accordion 컴포넌트"}),`
`,n.jsxs(o.p,{children:[n.jsx(o.code,{children:"Accordion"})," 컴포넌트는 콘텐츠의 섹션을 접고 펼칠 수 있는 UI 요소를 제공합니다. 단일 및 다중 확장, 컨트롤드 및 언컨트롤드 모드를 모두 지원하며, 다양한 옵션을 통해 커스터마이징할 수 있습니다."]}),`
`,n.jsx("br",{}),`
`,n.jsx(o.h2,{id:"주요-기능",children:"주요 기능"}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsxs(o.li,{children:[n.jsx(o.strong,{children:"단일 및 다중 확장 지원"}),": `multiple` prop을 통해 한 번에 하나 또는 여러 개의 아이템을 확장할 수 있습니다."]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.strong,{children:"컨트롤드 및 언컨트롤드 모드 지원"}),": `value`와 `onChange`를 통해 외부에서 상태를 제어하거나 내부 상태를 사용할 수 있습니다."]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.strong,{children:"접근성 향상"}),": WAI-ARIA 가이드라인을 따라 제작되었으며, 키보드 내비게이션을 지원합니다."]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.strong,{children:"스타일 커스터마이징 가능"}),": `className`과 `style`을 사용하여 커스텀 스타일을 적용할 수 있습니다."]}),`
`]}),`
`,n.jsx("br",{}),`
`,n.jsx(o.h3,{id:"사용-방법",children:"사용 방법"}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsxs(o.li,{children:[n.jsx(o.code,{children:"Accordion.Item"})," 컴포넌트로 감싸진 ",n.jsx(o.code,{children:"Accordion.Header"}),"와 ",n.jsx(o.code,{children:"Accordion.Content"})," 컴포넌트를 사용하여 아이템을 생성합니다."]}),`
`]}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`import { Accordion } from "yoso-ui";

const YourComponent = () => (
  <Accordion>
    <Accordion.Item value="item1">
      <Accordion.Header>
        "결국 중요한 건 인생을 얼마나 살았느냐가 아니다. 그동안 살아간 삶이다."
      </Accordion.Header>
      <Accordion.Content>
        이 영감을 주는 명언은 우리가 삶을 평가하는 방식을 생각하게 하는 교묘한
        단어 유희를 사용합니다.
      </Accordion.Content>
    </Accordion.Item>
    {/* 다른 아이템들 */}
  </Accordion>
);
`})}),`
`,n.jsx(c,{of:r}),`
`,n.jsx(l,{of:r}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsxs(o.li,{children:[`단일 확장 (uncontrolled mode)
`,n.jsx(o.code,{children:"multiple"}),"이 false인 기본 상태에서는 한번에 하나의 아이템만 확장됩니다."]}),`
`]}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`<Accordion>
  <Accordion.Item value="item1">
    <Accordion.Header>아이템 1</Accordion.Header>
    <Accordion.Content>아이템 1의 내용입니다.</Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="item2">
    <Accordion.Header>아이템 2</Accordion.Header>
    <Accordion.Content>아이템 2의 내용입니다.</Accordion.Content>
  </Accordion.Item>
</Accordion>
`})}),`
`,n.jsx(c,{of:a}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsx(o.li,{children:"다중 확장 (uncontrolled mode)"}),`
`]}),`
`,n.jsxs(o.p,{children:[n.jsx(o.code,{children:"multiple"}),"이 true인 상태에서는 여러 아이템을 동시에 확장할 수 있습니다."]}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`<Accordion multiple>
  <Accordion.Item value="item1">
    <Accordion.Header>아이템 1</Accordion.Header>
    <Accordion.Content>아이템 1의 내용입니다.</Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="item2">
    <Accordion.Header>아이템 2</Accordion.Header>
    <Accordion.Content>아이템 2의 내용입니다.</Accordion.Content>
  </Accordion.Item>
</Accordion>
`})}),`
`,n.jsx(c,{of:m}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsx(o.li,{children:"컨트롤드 모드"}),`
`]}),`
`,n.jsxs(o.p,{children:[n.jsx(o.code,{children:"value"}),"와 ",n.jsx(o.code,{children:"onChange"}),"를 통해 외부에서 상태를 제어할 수 있습니다."]}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`const [activeValues, setActiveValues] = useState<string[]>([]);

<>
  <Button
    onClick={() =>
      setActiveValues((prev) => (prev.length ? [] : ["item1", "item2"]))
    }
  >
    {activeValues.length ? "Close All" : "Open item1 and item2"}
  </Button>
  <Accordion value={activeValues} onChange={setActiveValues}>
    {/* Accordion 아이템들 */}
  </Accordion>
</>;
`})}),`
`,n.jsx(c,{of:x}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsx(o.li,{children:"사용자 정의 스타일 적용"}),`
`]}),`
`,n.jsxs(o.p,{children:[n.jsx(o.code,{children:"className"}),"과 ",n.jsx(o.code,{children:"style"}),"을 사용하여 커스텀 스타일을 적용할 수 있습니다."]}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`<Accordion>
  <Accordion.Item value="item1">
    <Accordion.Header style={{ backgroundColor: "lightblue", color: "white" }}>
      헤더 1
    </Accordion.Header>
    <Accordion.Content style={{ backgroundColor: "lightblue", color: "white" }}>
      콘텐츠 1
    </Accordion.Content>
  </Accordion.Item>
</Accordion>
`})}),`
`,n.jsx(c,{of:h})]})}function k(e={}){const{wrapper:o}={...d(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(i,{...e})}):i(e)}export{k as default};
