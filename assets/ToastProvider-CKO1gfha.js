import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import{r as s}from"./index-DJO9vBfz.js";import{m as u,d as i}from"./styled-components.browser.esm-Dsr6U-en.js";import{a as o}from"./theme-CcpA0LQY.js";import{g as h}from"./style-CuGJsH27.js";import{P as T}from"./Portal-CvBg43kE.js";const v=u`
  from {
    opacity: 0;
    transform: translateY(20%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,$=u`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`,w=u`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`,b=i.div`
  animation: ${v} 0.3s ease-out,
    ${$} 0.3s ease-in ${({$duration:e})=>e-300}ms forwards;
  overflow: hidden;
  border-radius: ${({theme:e})=>e.borderRadius.medium};
  box-shadow: ${({theme:e})=>e.shadows.medium};
  max-width: 400px;
  min-width: 250px;
`,j=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.medium};
  padding: ${({theme:e})=>e.spacing.medium};
  background-color: ${({theme:e})=>e.colors.white};

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  strong {
    color: ${({theme:e})=>e.colors.black};
  }

  p {
    color: ${({theme:e})=>e.colors.gray[600]};
    margin: 0;
    padding: 0;
  }
`;function p(e){switch(e){case"success":return o.colors.blue[500]||o.defaultColor;case"error":return o.colors.red[500]||o.defaultColor;case"warning":return o.colors.red[300]||o.defaultColor;default:return o.defaultColor}}const C=i.div`
  position: relative;
  height: 4px;
  box-shadow: 0 2px 4px ${({$type:e})=>h(p(e),.5)};
  background: ${({$type:e})=>p(e)};
  overflow: hidden;
  width: 100%;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: rgba(255, 255, 255, 0.3);
    animation: ${w} ${({$duration:e})=>e}ms linear;
  }
`,f=({toast:e,onClose:n})=>(s.useEffect(()=>{const r=setTimeout(()=>{n()},e.duration);return()=>clearTimeout(r)},[]),t.jsx(t.Fragment,{children:t.jsxs(b,{role:"alert","aria-live":"assertive","aria-atomic":"true",$duration:e.duration,tabIndex:0,children:[t.jsx(j,{$type:e.type,children:t.jsxs("div",{children:[t.jsx("strong",{children:e.message.title}),t.jsx("p",{children:e.message.content})]})}),t.jsx(C,{$duration:e.duration,$type:e.type})]})}));f.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{toast:{required:!0,tsType:{name:"ToastType"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const g=({toasts:e,removeToast:n})=>{const r=s.useRef();return s.useEffect(()=>{r.current=document.getElementById("toastRoot")},[]),r.current?t.jsx(T,{container:r.current,children:t.jsx(R,{children:e.map(a=>t.jsx(f,{toast:a,onClose:()=>n(a.id)},a.id))})}):null},R=i.div`
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: ${({theme:e})=>e.zIndex.toast};
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: 4px;
    transition: transform 0.3s ease-in-out;
  }
`;g.__docgenInfo={description:"",methods:[],displayName:"ToastContainer",props:{toasts:{required:!0,tsType:{name:"Array",elements:[{name:"ToastType"}],raw:"ToastType[]"},description:""},removeToast:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}}};const I=s.createContext(null),k=({children:e})=>{const[n,r]=s.useState([]),a=s.useCallback((d,c="info",l=3e3)=>{const x=Date.now().toString();r(y=>[...y,{id:x,message:d,type:c,duration:l}])},[]),m=s.useCallback(d=>{r(c=>c.filter(l=>l.id!==d))},[]);return t.jsxs(I.Provider,{value:{addToast:a,removeToast:m},children:[e,t.jsx(g,{toasts:n,removeToast:m})]})};k.__docgenInfo={description:"",methods:[],displayName:"ToastProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};export{k as T,I as a};
