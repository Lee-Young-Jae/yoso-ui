import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import{r as s}from"./index-DJO9vBfz.js";import{m as u,d as i}from"./styled-components.browser.esm-Dsr6U-en.js";import{d as r}from"./theme-DTREIjCk.js";import{g as h}from"./style-x6FuVGrZ.js";import{P as T}from"./Portal-CvBg43kE.js";const v=u`
  from {
    opacity: 0;
    transform: translateY(20%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,w=u`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`,$=u`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`,j=i.div`
  animation: ${v} 0.3s ease-out,
    ${w} 0.3s ease-in ${({$duration:e})=>e-300}ms forwards;
  overflow: hidden;
  border-radius: ${({theme:e})=>e.borderRadius.medium};
  box-shadow: ${({theme:e})=>e.shadows.medium};
  max-width: 400px;
  min-width: 250px;
`,C=i.div`
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
`;function p(e){switch(e){case"success":return r.colors.success||r.defaultColor;case"error":return r.colors.error||r.defaultColor;case"warning":return r.colors.warning||r.defaultColor;case"info":return r.colors.info||r.defaultColor;default:return r.defaultColor}}const b=i.div`
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
    animation: ${$} ${({$duration:e})=>e}ms linear;
  }
`,f=({toast:e,onClose:n})=>(s.useEffect(()=>{const o=setTimeout(()=>{n()},e.duration);return()=>clearTimeout(o)},[]),t.jsx(t.Fragment,{children:t.jsxs(j,{role:"alert","aria-live":"assertive","aria-atomic":"true",$duration:e.duration,tabIndex:0,children:[t.jsx(C,{$type:e.type,children:t.jsxs("div",{children:[t.jsx("strong",{children:e.message.title}),t.jsx("p",{children:e.message.content})]})}),t.jsx(b,{$duration:e.duration,$type:e.type})]})}));f.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{toast:{required:!0,tsType:{name:"ToastType"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const g=({toasts:e,removeToast:n})=>{const o=s.useRef();return s.useEffect(()=>{o.current=document.getElementById("toastRoot")},[]),o.current?t.jsx(T,{container:o.current,children:t.jsx(R,{children:e.map(a=>t.jsx(f,{toast:a,onClose:()=>n(a.id)},a.id))})}):null},R=i.div`
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
`;g.__docgenInfo={description:"",methods:[],displayName:"ToastContainer",props:{toasts:{required:!0,tsType:{name:"Array",elements:[{name:"ToastType"}],raw:"ToastType[]"},description:""},removeToast:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}}};const I=s.createContext(null),k=({children:e})=>{const[n,o]=s.useState([]),a=s.useCallback((d,c="info",l=3e3)=>{const x=Date.now().toString();o(y=>[...y,{id:x,message:d,type:c,duration:l}])},[]),m=s.useCallback(d=>{o(c=>c.filter(l=>l.id!==d))},[]);return t.jsxs(I.Provider,{value:{addToast:a,removeToast:m},children:[e,t.jsx(g,{toasts:n,removeToast:m})]})};k.__docgenInfo={description:"",methods:[],displayName:"ToastProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};export{k as T,I as a};
