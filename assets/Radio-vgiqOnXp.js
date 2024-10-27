import{j as o}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as d}from"./index-BrnU7xv7.js";import"./chunk-NUUEMKO5-1Z7VGz94.js";import{ae as r,af as i,ag as l}from"./index-BJCHUGJK.js";import{R as t,D as a,a as c,U as p,b as u,C as x}from"./Radio.stories-CAwyfP35.js";import"./index-DJO9vBfz.js";import"./iframe-CHaK5TDr.js";import"../sb-preview/runtime.js";import"./client-Cd-gdppX.js";import"./index-Cp9I2zMD.js";import"./index-D-8MO0q_.js";import"./index-CvTBScqg.js";import"./index-DrFu-skq.js";import"./styled-components.browser.esm-Dsr6U-en.js";import"./style-x6FuVGrZ.js";function s(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(r,{title:"Components/Radio",component:t}),`
`,o.jsx(n.h1,{id:"radio-컴포넌트",children:"Radio 컴포넌트"}),`
`,o.jsxs(n.p,{children:[o.jsx(n.code,{children:"Radio"})," 컴포넌트는 여러 옵션 중 하나를 선택할 수 있는 라디오 버튼을 제공합니다. 단일로 사용하거나 ",o.jsx(n.code,{children:"Radio.Group"})," 내에서 그룹으로 관리할 수 있으며, 컨트롤드 및 언컨트롤드 모드를 모두 지원합니다."]}),`
`,o.jsx(n.h2,{id:"주요-기능",children:"주요 기능"}),`
`,o.jsxs(n.ul,{children:[`
`,o.jsxs(n.li,{children:[o.jsx(n.strong,{children:"단일 및 그룹 사용 지원"}),": ",o.jsx(n.code,{children:"Radio"}),"를 개별적으로 사용하거나 ",o.jsx(n.code,{children:"Radio.Group"}),"을 통해 그룹화할 수 있습니다."]}),`
`,o.jsxs(n.li,{children:[o.jsx(n.strong,{children:"컨트롤드 및 언컨트롤드 모드 지원"}),": ",o.jsx(n.code,{children:"value"}),"와 ",o.jsx(n.code,{children:"defaultValue"}),"를 통해 상태 관리 방식을 선택할 수 있습니다."]}),`
`,o.jsxs(n.li,{children:[o.jsx(n.strong,{children:"접근성 향상"}),": WAI-ARIA 가이드라인을 준수하여 제작되었으며, 스크린 리더와 키보드 내비게이션을 지원합니다."]}),`
`,o.jsxs(n.li,{children:[o.jsx(n.strong,{children:"스타일 커스터마이징 가능"}),": ",o.jsx(n.code,{children:"className"}),"과 ",o.jsx(n.code,{children:"style"}),"을 사용하여 커스텀 스타일을 적용할 수 있습니다."]}),`
`]}),`
`,o.jsx(n.h2,{id:"사용법",children:"사용법"}),`
`,o.jsx(n.h3,{id:"기본-사용법",children:"기본 사용법"}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-tsx",children:`import Radio from "yoso-ui/Radio";

const App = () => (
  <Radio value="option1" onChange={(e) => console.log(e.target.value)}>
    옵션 1
  </Radio>
);
`})}),`
`,o.jsx(i,{of:a}),`
`,o.jsx(l,{of:a}),`
`,o.jsx(n.h3,{id:"그룹-사용법",children:"그룹 사용법"}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-tsx",children:`import { Radio } from "yoso-ui";

const App = () => {
  const [value, setValue] = useState("option1");

  return (
    <Radio.Group value={value} onChange={(e) => setValue(e.target.value)}>
      <Radio value="option1">옵션 1</Radio>
      <Radio value="option2">옵션 2</Radio>
      <Radio value="option3">옵션 3</Radio>
    </Radio.Group>
  );
};
`})}),`
`,o.jsx(i,{of:c}),`
`,o.jsx(n.h3,{id:"언컨트롤드-모드",children:"언컨트롤드 모드"}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-tsx",children:`import { Radio } from "yoso-ui";

<Radio.Group defaultValue="option2">
  <Radio value="option1">옵션 1</Radio>
  <Radio value="option2">옵션 2</Radio>
  <Radio value="option3">옵션 3</Radio>
</Radio.Group>;
`})}),`
`,o.jsx(i,{of:p}),`
`,o.jsx(n.h3,{id:"옵션-배열로-그룹-생성",children:"옵션 배열로 그룹 생성"}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-tsx",children:`import { Radio } from "yoso-ui";

const options = [
  { label: "사과", value: "apple" },
  { label: "배", value: "pear" },
  { label: "오렌지", value: "orange", disabled: true },
];
`})}),`
`,o.jsx(i,{of:u}),`
`,o.jsx(n.h3,{id:"커스텀-스타일-라디오",children:"커스텀 스타일 라디오"}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-tsx",children:`import { Radio } from "yoso-ui";

<Radio value="custom" color="#FF5722">
  커스텀 컬러 라디오
</Radio>;
`})}),`
`,o.jsx(i,{of:x})]})}function V(e={}){const{wrapper:n}={...d(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(s,{...e})}):s(e)}export{V as default};
