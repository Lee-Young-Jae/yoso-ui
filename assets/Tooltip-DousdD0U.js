import{j as n}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as i}from"./index-BrnU7xv7.js";import{ae as l,af as e,ag as c}from"./index-DHR3IsnS.js";import{T as p,D as r,F as d,C as x}from"./Tooltip.stories-CFOiZ9iH.js";import"./Button-BZyZE5fo.js";import"./Input-CvG_f9Ux.js";import"./index-DJO9vBfz.js";import"./iframe-Bxw-JrWE.js";import"../sb-preview/runtime.js";import"./index-Cp9I2zMD.js";import"./index-D-8MO0q_.js";import"./index-CvTBScqg.js";import"./index-DrFu-skq.js";import"./styled-components.browser.esm-Dsr6U-en.js";import"./Portal-CvBg43kE.js";function s(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"Components/Tooltip",component:p}),`
`,n.jsx(o.h1,{id:"tooltip-컴포넌트",children:"Tooltip 컴포넌트"}),`
`,n.jsxs(o.p,{children:[n.jsx(o.code,{children:"Tooltip"})," 컴포넌트는 사용자에게 추가 정보를 제공하기 위해 호버, 포커스 또는 클릭 시 나타나는 작은 정보 창입니다. 다양한 위치, 트리거 방식, 커스텀 스타일링 등을 지원하며, 접근성을 고려하여 제작되었습니다."]}),`
`,n.jsx(o.h2,{id:"주요-기능",children:"주요 기능"}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsxs(o.li,{children:[n.jsx(o.strong,{children:"다양한 위치 지원"}),": ",n.jsx(o.code,{children:"placement"})," prop을 통해 ",n.jsx(o.code,{children:"top"}),", ",n.jsx(o.code,{children:"bottom"}),", ",n.jsx(o.code,{children:"left"}),", ",n.jsx(o.code,{children:"right"})," 위치를 지정할 수 있습니다."]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.strong,{children:"트리거 방식 선택"}),": ",n.jsx(o.code,{children:"trigger"})," prop을 사용하여 ",n.jsx(o.code,{children:"hover"}),", ",n.jsx(o.code,{children:"click"}),", ",n.jsx(o.code,{children:"focus"})," 중 하나로 툴팁을 활성화할 수 있습니다."]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.strong,{children:"접근성 향상"}),": ARIA 속성을 사용하여 스크린 리더 사용자도 툴팁 정보를 얻을 수 있습니다."]}),`
`]}),`
`,n.jsx(o.h2,{id:"사용-방법",children:"사용 방법"}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsxs(o.li,{children:["tooltip을 사용할 컴포넌트를 ",n.jsx(o.code,{children:"Tooltip"})," 컴포넌트로 감싸주세요."]}),`
`]}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`import { Tooltip } from "yoso-ui";

const YourComponent = () => (
  <Tooltip content="Tooltip 내용입니다." placement="top">
    <Button>툴팁 트리거</Button>
  </Tooltip>
);
`})}),`
`,n.jsx(e,{of:r}),`
`,n.jsx(c,{of:r}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsx(o.li,{children:"'trigger' prop을 사용하여 툴팁을 활성화할 방식을 선택할 수 있습니다."}),`
`]}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`<Tooltip
  content="Tooltip 내용입니다."
  placement="bottom"
  trigger="focus"
  content="포커스 툴팁"
>
  <Input />
</Tooltip>
`})}),`
`,n.jsx(e,{of:d}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsx(o.li,{children:"커스텀 Style 적용하기"}),`
`]}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`<Tooltip
  {...props}
  contentStyle={{ backgroundColor: "#000", color: "#fff" }}
  content={
    <span role="img" aria-label="heart">
      ⭐️
    </span>
  }
>
  <Button variant="">마우스를 올려보세요</Button>
</Tooltip>
`})}),`
`,n.jsx(e,{of:x})]})}function F(t={}){const{wrapper:o}={...i(),...t.components};return o?n.jsx(o,{...t,children:n.jsx(s,{...t})}):s(t)}export{F as default};
