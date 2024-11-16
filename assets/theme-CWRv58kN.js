import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as s}from"./index-BrnU7xv7.js";import"./chunk-NUUEMKO5-D4J4IJ_s.js";import{ae as i}from"./index-KllzpXpg.js";import"./index-DJO9vBfz.js";import"./iframe-DtId2032.js";import"../sb-preview/runtime.js";import"./client-Cd-gdppX.js";import"./index-Cp9I2zMD.js";import"./index-D-8MO0q_.js";import"./index-CvTBScqg.js";import"./index-DrFu-skq.js";function r(o){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Theme/YosoThemeProvider"}),`
`,e.jsx(n.h1,{id:"yosothemeprovider",children:"YosoThemeProvider"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"YosoThemeProvider"}),"는 애플리케이션에 테마를 적용하고 다크 모드를 지원하는 컴포넌트입니다."]}),`
`,e.jsx(n.p,{children:"컴포넌트를 사용하고자 하는 앱의 최상위 컴포넌트로 감싸서 사용합니다."}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"theme"})," (선택 사항): 사용자 정의 테마를 적용하기 위한 객체입니다. ",e.jsx(n.code,{children:"Partial<Theme>"})," 타입으로, 필요한 부분만 재정의할 수 있습니다."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"useSystemColorMode"})," (선택 사항): 시스템의 다크 모드 설정에 따라 테마를 자동으로 변경할지 여부를 설정합니다. 기본값은 false입니다."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"initialThemeMode"}),' (선택 사항): 초기 테마 모드를 설정합니다. "light" 또는 "dark" 중 하나를 선택할 수 있으며, 기본값은 "light"입니다']}),`
`,e.jsx(n.h2,{id:"주요-기능",children:"주요 기능"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"테마 적용"}),": 기본 테마 또는 사용자 정의 테마를 적용할 수 있습니다."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"다크 모드 지원"}),": 시스템 설정 또는 사용자 설정에 따라 다크 모드를 지원합니다."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"테마 토글 기능"}),": ",e.jsx(n.code,{children:"useTheme"})," 훅을 사용하여 테마 모드를 토글할 수 있습니다."]}),`
`]}),`
`,e.jsx(n.h2,{id:"사용법",children:"사용법"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"기본-사용법",children:"기본 사용법"}),`
`,e.jsxs(n.p,{children:["yoso-ui를 사용하려면 ",e.jsx(n.code,{children:"YosoThemeProvider"}),"로 앱을 감싸면 됩니다."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { YosoThemeProvider } from "yoso-ui";

function App() {
  return (
    <YosoThemeProvider>
      <YourApp />
    </YosoThemeProvider>
  );
}

export default App;
`})}),`
`,e.jsx(n.h3,{id:"시스템-설정에-따른-다크-모드-지원",children:"시스템 설정에 따른 다크 모드 지원"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"YosoThemeProvider"}),"의 ",e.jsx(n.code,{children:"useSystemColorMode"})," prop을 사용하여 시스템 설정에 따라 다크 모드를 지원할 수 있습니다."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { YosoThemeProvider } from "yoso-ui";

function App() {
  return (
    <YosoThemeProvider useSystemColorMode={true}>
      {/* 앱 내용 */}
    </YosoThemeProvider>
  );
}

export default App;
`})}),`
`,e.jsx(n.h3,{id:"기본-테마-색상",children:"기본 테마 색상"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"YosoThemeProvider"}),"의 ",e.jsx(n.code,{children:"initialThemeMode"})," prop을 사용하여 기본 테마 색상을 변경할 수 있습니다."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { YosoThemeProvider } from "yoso-ui";

function App() {
  return (
    <YosoThemeProvider initialThemeMode="dark">
      {/* 앱 내용 */}
    </YosoThemeProvider>
  );
}

export default App;
`})}),`
`,e.jsx(n.h3,{id:"다크-모드-토글-기능",children:"다크 모드 토글 기능"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"useTheme"})," 훅을 사용하여 yoso component들의 테마 모드를 토글할 수 있습니다."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useTheme } from "yoso-ui";

function YourComponent() {
  const { themeMode, toggleThemeMode } = useTheme();

  return <button onClick={toggleThemeMode}>테마 변경</button>;
}
`})}),`
`,e.jsx(n.h3,{id:"사용자-정의-테마-적용",children:"사용자 정의 테마 적용"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"YosoThemeProvider"}),"의 ",e.jsx(n.code,{children:"theme"})," prop을 사용하여 사용자 정의 테마를 적용할 수 있습니다."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { YosoThemeProvider, Theme } from "yoso-ui";

const customTheme: Partial<Theme> = {
  defaultColor: "#ef4567",
  // 기타 스타일 속성
};

function App() {
  return (
    <YosoThemeProvider theme={customTheme}>{/* 앱 내용 */}</YosoThemeProvider>
  );
}

export default App;
`})})]})}function f(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{f as default};
