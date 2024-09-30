import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import{r as o}from"./index-DJO9vBfz.js";import{m as l,d as i}from"./styled-components.browser.esm-Dsr6U-en.js";import{d as a}from"./theme-D4jGSYWk.js";import{g as T}from"./style-CuGJsH27.js";import{P as h}from"./Portal-CvBg43kE.js";const v=l`
  from {
    opacity: 0;
    transform: translateY(20%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,$=l`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`,w=l`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`,j=i.div`
  animation: ${v} 0.3s ease-out,
    ${$} 0.3s ease-in ${({$duration:e})=>e-300}ms forwards;
  overflow: hidden;
  border-radius: ${({theme:e})=>e.borderRadius.medium};
  box-shadow: ${({theme:e})=>e.shadows.medium};
  max-width: 400px;
  min-width: 250px;
`,R=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.medium};
  padding: ${({theme:e})=>e.spacing.medium};
  background-color: ${({theme:e})=>e.colors.WHITE};

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  strong {
    color: ${({theme:e})=>e.colors.BLACK};
  }

  p {
    color: ${({theme:e})=>e.colors.GRAY_600};
    margin: 0;
    padding: 0;
  }
`;function u(e){switch(e){case"success":return a.colors.BLUE_500;case"error":return a.colors.RED_500;case"warning":return a.colors.RED_300;default:return a.defaultColor}}const b=i.div`
  position: relative;
  height: 4px;
  box-shadow: 0 2px 4px ${({$type:e})=>T(u(e),.5)};
  background: ${({$type:e})=>u(e)};
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
`,f=({toast:e,onClose:s})=>(o.useEffect(()=>{const r=setTimeout(()=>{s()},e.duration);return()=>clearTimeout(r)},[]),t.jsx(t.Fragment,{children:t.jsxs(j,{role:"alert","aria-live":"assertive","aria-atomic":"true",$duration:e.duration,tabIndex:0,children:[t.jsx(R,{$type:e.type,children:t.jsxs("div",{children:[t.jsx("strong",{children:e.message.title}),t.jsx("p",{children:e.message.content})]})}),t.jsx(b,{$duration:e.duration,$type:e.type})]})}));f.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{toast:{required:!0,tsType:{name:"ToastType"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const g=({toasts:e,removeToast:s})=>{const r=o.useRef();return o.useEffect(()=>{r.current=document.getElementById("toastRoot")},[]),r.current?t.jsx(h,{container:r.current,children:t.jsx(C,{children:e.map(n=>t.jsx(f,{toast:n,onClose:()=>s(n.id)},n.id))})}):null},C=i.div`
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
`;g.__docgenInfo={description:"",methods:[],displayName:"ToastContainer",props:{toasts:{required:!0,tsType:{name:"Array",elements:[{name:"ToastType"}],raw:"ToastType[]"},description:""},removeToast:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}}};const _=o.createContext(null),E=({children:e})=>{const[s,r]=o.useState([]),n=o.useCallback((d,c="info",m=3e3)=>{const x=Date.now().toString();r(y=>[...y,{id:x,message:d,type:c,duration:m}])},[]),p=o.useCallback(d=>{r(c=>c.filter(m=>m.id!==d))},[]);return t.jsxs(_.Provider,{value:{addToast:n,removeToast:p},children:[e,t.jsx(g,{toasts:s,removeToast:p})]})};E.__docgenInfo={description:"",methods:[],displayName:"ToastProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};export{E as T,_ as a};
