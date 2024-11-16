import{j as n}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as l}from"./index-BrnU7xv7.js";import"./chunk-NUUEMKO5-D4J4IJ_s.js";import{ae as t,af as s,ag as d}from"./index-KllzpXpg.js";import{R as c,D as o,W as u,P as h,C as x}from"./RollingNumber.stories-vcmJ10Rs.js";import"./index-DJO9vBfz.js";import"./iframe-DtId2032.js";import"../sb-preview/runtime.js";import"./client-Cd-gdppX.js";import"./index-Cp9I2zMD.js";import"./index-D-8MO0q_.js";import"./index-CvTBScqg.js";import"./index-DrFu-skq.js";import"./styled-components.browser.esm-Dsr6U-en.js";import"./Button-CpD3pMnL.js";import"./style-x6FuVGrZ.js";function i(r){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"Typography/RollingNumber",component:c}),`
`,n.jsx(e.h1,{id:"️-실험적-rollingnumber-컴포넌트",children:"(⚠️ 실험적) RollingNumber 컴포넌트"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"⚠️ 이 컴포넌트는 실험적인 기능으로, 사용 시 주의가 필요합니다."}),`
`,n.jsx(e.p,{children:"This component is not fully tested yet and should be used with caution."}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"RollingNumber"})," 컴포넌트는 숫자가 부드럽게 롤링되면서 변경되는 애니메이션 효과를 제공합니다."]}),`
`,n.jsx("br",{}),`
`,n.jsx(e.h2,{id:"주요-기능",children:"주요 기능"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"숫자 롤링 애니메이션"}),": 숫자가 변경될 때 부드러운 롤링 효과를 제공합니다."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"천 단위 구분자"}),": ",n.jsx(e.code,{children:"useGrouping"})," 옵션으로 천 단위 구분자를 표시할 수 있습니다."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"자릿수 지정"}),": ",n.jsx(e.code,{children:"digits"}),"와 ",n.jsx(e.code,{children:"padWithZero"})," 옵션으로 표시할 자릿수를 지정할 수 있습니다."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"애니메이션 커스터마이징"}),": ",n.jsx(e.code,{children:"duration"}),"과 ",n.jsx(e.code,{children:"timingFunction"}),"으로 애니메이션을 조절할 수 있습니다."]}),`
`]}),`
`,n.jsx("br",{}),`
`,n.jsx(e.h2,{id:"사용-방법",children:"사용 방법"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { RollingNumber } from "yoso-ui";

const YourComponent = () => (
  <RollingNumber value={1234} duration={1} useGrouping={true} />
);
`})}),`
`,n.jsx(s,{of:o}),`
`,n.jsx(d,{of:o}),`
`,n.jsx(e.h3,{id:"천-단위-구분자-사용",children:"천 단위 구분자 사용"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"useGrouping"})," 속성을 활성화하여 천 단위 구분자를 표시할 수 있습니다."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<RollingNumber value={1234567} useGrouping={true} />
`})}),`
`,n.jsx(s,{of:u}),`
`,n.jsx(e.h3,{id:"앞자리-0으로-채우기",children:"앞자리 0으로 채우기"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"digits"}),"와 ",n.jsx(e.code,{children:"padWithZero"})," 속성을 사용하여 지정된 자릿수만큼 앞자리를 0으로 채울 수 있습니다."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<RollingNumber value={42} digits={4} padWithZero={true} />
`})}),`
`,n.jsx(s,{of:h}),`
`,n.jsx(e.h3,{id:"동적-값-변경",children:"동적 값 변경"}),`
`,n.jsx(e.p,{children:"상태 값과 함께 사용하여 동적으로 숫자를 변경할 수 있습니다."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const [value, setValue] = useState(0);

<Button onClick={() => setValue(prev => prev + 599)}>
  증가 (+599)
</Button>
<RollingNumber value={value} />
`})}),`
`,n.jsx(s,{of:x})]})}function k(r={}){const{wrapper:e}={...l(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(i,{...r})}):i(r)}export{k as default};
