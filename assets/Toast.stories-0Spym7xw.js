import{j as n}from"./jsx-runtime-CkxqCPlQ.js";import{a as j,T as l}from"./ToastProvider-BYK96yF4.js";import{r as E}from"./index-DJO9vBfz.js";import{B as e}from"./Button-BZyZE5fo.js";import"./styled-components.browser.esm-Dsr6U-en.js";import"./theme-BRuQYN7o.js";import"./style-CuGJsH27.js";import"./Portal-CvBg43kE.js";import"./index-Cp9I2zMD.js";const d=()=>{const t=E.useContext(j);if(!t)throw new Error("useToast must be used within a ToastProvider");return t},P={title:"Components/Toast",component:l,decorators:[t=>n.jsx(l,{children:n.jsx(t,{})})],tags:["autodocs"],parameters:{docs:{description:{component:`
\`useToast\` 훅은 토스트 메시지를 추가하고 제거할 수 있는 함수를 제공합니다.

**사용법**

\`\`\`tsx
import { useToast } from 'yoso-ui';

const { addToast, removeToast } = useToast();
\`\`\`

**\`addToast\` 함수**

- **인자**
  - \`message\`: \`{ title: string; content: string }\` - 토스트에 표시될 메시지
  - \`type\`: \`'success' | 'error' | 'warning' | 'info'\` - 토스트의 유형
  - \`duration\`: \`number\` - 토스트가 표시될 시간(ms)

- **사용 예시**

\`\`\`tsx
addToast(
  {
    title: '안녕하세요!',
    content: '이것은 토스트 메시지입니다.',
  },
  'info',
  3000
);
\`\`\`

**\`removeToast\` 함수**

- **인자**
  - \`id\`: \`string\` - 제거할 토스트의 ID

- **사용 예시**

\`\`\`tsx
removeToast('toast-id');
\`\`\`

`}}}},k=t=>{switch(t){case"success":return{title:"Success",content:"This is a success message."};case"error":return{title:"Error",content:"This is an error message."};case"warning":return{title:"Warning",content:"This is a warning message."};case"info":return{title:"Info",content:"This is an info message."};default:return{title:"Default",content:"This is a default message."}}},D=()=>{const{addToast:t}=d(),s=(o,u=3e3)=>{t(k(o),o,u)};return n.jsxs("div",{style:{padding:"20px",display:"flex",gap:"8px"},children:[n.jsx(e,{variant:"primary",onClick:()=>s("success"),children:"Success"}),n.jsx(e,{variant:"danger",onClick:()=>s("error"),children:"Error"}),n.jsx(e,{variant:"secondary",onClick:()=>s("warning"),children:"Warning"}),n.jsx(e,{variant:"ghost",onClick:()=>s("info"),children:"Info"})]})},c=D.bind({});c.storyName="기본 토스트";const a=()=>{const{addToast:t}=d(),s=o=>{t({title:`Duration ${o/1e3}초`,content:`이 토스트는 ${o/1e3}초 동안 표시됩니다.`},"info",o)};return n.jsxs("div",{style:{padding:"20px",display:"flex",gap:"8px"},children:[n.jsx(e,{onClick:()=>s(1e3),children:"1초"}),n.jsx(e,{onClick:()=>s(3e3),children:"3초"}),n.jsx(e,{onClick:()=>s(5e3),children:"5초"})]})};a.storyName="지속 시간 예시";const r=()=>{const{addToast:t}=d(),s=()=>{["success","error","warning","info"].forEach((o,u)=>{setTimeout(()=>{t(k(o),o,3e3)},u*500)})};return n.jsx("div",{style:{padding:"20px"},children:n.jsx(e,{onClick:s,children:"여러 개의 토스트 표시"})})};r.storyName="여러 개의 토스트";const i=()=>{const{addToast:t}=d(),s=()=>{t({title:"긴 내용의 토스트",content:"이것은 매우 긴 내용의 토스트 메시지입니다. 이 메시지는 토스트 컴포넌트가 긴 내용을 어떻게 처리하는지 테스트하기 위한 것입니다."},"info",5e3)};return n.jsx("div",{style:{padding:"20px"},children:n.jsx(e,{onClick:s,children:"긴 내용의 토스트"})})};i.storyName="긴 내용의 토스트";a.__docgenInfo={description:"",methods:[],displayName:"DurationExample"};r.__docgenInfo={description:"",methods:[],displayName:"MultipleToasts"};i.__docgenInfo={description:"",methods:[],displayName:"LongContentToast"};var p,m,T;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const {
    addToast
  } = useToast();
  const showToast = (type: "success" | "error" | "warning" | "info", duration: number = 3000) => {
    addToast(getMessage(type), type, duration);
  };
  return <div style={{
    padding: "20px",
    display: "flex",
    gap: "8px"
  }}>
      <Button variant="primary" onClick={() => showToast("success")}>
        Success
      </Button>
      <Button variant="danger" onClick={() => showToast("error")}>
        Error
      </Button>
      <Button variant="secondary" onClick={() => showToast("warning")}>
        Warning
      </Button>
      <Button variant="ghost" onClick={() => showToast("info")}>
        Info
      </Button>
    </div>;
}`,...(T=(m=c.parameters)==null?void 0:m.docs)==null?void 0:T.source}}};var g,x,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const {
    addToast
  } = useToast();
  const showToast = (duration: number) => {
    addToast({
      title: \`Duration \${duration / 1000}초\`,
      content: \`이 토스트는 \${duration / 1000}초 동안 표시됩니다.\`
    }, "info", duration);
  };
  return <div style={{
    padding: "20px",
    display: "flex",
    gap: "8px"
  }}>
      <Button onClick={() => showToast(1000)}>1초</Button>
      <Button onClick={() => showToast(3000)}>3초</Button>
      <Button onClick={() => showToast(5000)}>5초</Button>
    </div>;
}`,...(h=(x=a.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var f,w,y;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const {
    addToast
  } = useToast();
  const showMultipleToasts = () => {
    ["success", "error", "warning", "info"].forEach((type, index) => {
      setTimeout(() => {
        addToast(getMessage(type as "success" | "error" | "warning" | "info"), type as "success" | "error" | "warning" | "info", 3000);
      }, index * 500);
    });
  };
  return <div style={{
    padding: "20px"
  }}>
      <Button onClick={showMultipleToasts}>여러 개의 토스트 표시</Button>
    </div>;
}`,...(y=(w=r.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var C,v,B;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const {
    addToast
  } = useToast();
  const showLongContentToast = () => {
    addToast({
      title: "긴 내용의 토스트",
      content: "이것은 매우 긴 내용의 토스트 메시지입니다. 이 메시지는 토스트 컴포넌트가 긴 내용을 어떻게 처리하는지 테스트하기 위한 것입니다."
    }, "info", 5000);
  };
  return <div style={{
    padding: "20px"
  }}>
      <Button onClick={showLongContentToast}>긴 내용의 토스트</Button>
    </div>;
}`,...(B=(v=i.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};const O=["Default","DurationExample","MultipleToasts","LongContentToast"];export{c as Default,a as DurationExample,i as LongContentToast,r as MultipleToasts,O as __namedExportsOrder,P as default};
