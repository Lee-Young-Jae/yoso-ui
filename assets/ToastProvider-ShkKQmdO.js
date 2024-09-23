import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import{r as s}from"./index-DJO9vBfz.js";import{m,d as n}from"./styled-components.browser.esm-Dsr6U-en.js";import{g as h}from"./style-CuGJsH27.js";import{P as y}from"./Portal-CvBg43kE.js";const a={defaultColor:"#7C93C3",colors:{RED_300:"#FFCDD2",RED_500:"#F44336",RED_700:"#D32F2F",RED_900:"#B71C1C",GREEN_300:"#A5D6A7",GREEN_500:"#4CAF50",GREEN_700:"#388E3C",GREEN_900:"#1B5E20",BLUE_100:"#BBDEFB",BLUE_300:"#81D4FA",BLUE_500:"#2196F3",BLUE_700:"#1976D2",BLUE_900:"#0D47A1",GRAY_50:"#FAFAFA",GRAY_100:"#F5F5F5",GRAY_200:"#EEEEEE",GRAY_300:"#E0E0E0",GRAY_500:"#9E9E9E",GRAY_600:"#757575",GRAY_900:"#212121",BLACK:"#212121",WHITE:"#FFFFFF"},fontSizes:{small:"0.8rem",medium:"1rem",large:"1.2rem"},borderRadius:{small:"4px",medium:"8px",large:"12px"},fontWeights:{regular:400,bold:700},spacing:{small:"4px",medium:"8px",large:"16px",xLarge:"24px"},shadows:{small:"0 1px 3px rgba(0, 0, 0, 0.12)",medium:"0 4px 6px rgba(0, 0, 0, 0.16)",large:"0 10px 20px rgba(0, 0, 0, 0.19)"},transitions:{default:"all 0.3s ease",fast:"all 0.1s ease",slow:"all 0.5s ease"},zIndex:{modal:1e3,toast:1100}},T=m`
  from {
    opacity: 0;
    transform: translateY(20%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,_=m`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`,R=m`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`,F=n.div`
  animation: ${T} 0.3s ease-out,
    ${_} 0.3s ease-in ${({$duration:e})=>e-300}ms forwards;
  overflow: hidden;
  border-radius: ${({theme:e})=>e.borderRadius.medium};
  box-shadow: ${({theme:e})=>e.shadows.medium};
  max-width: 400px;
  min-width: 250px;
`,v=n.div`
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
`;function p(e){switch(e){case"success":return a.colors.BLUE_500;case"error":return a.colors.RED_500;case"warning":return a.colors.RED_300;default:return a.defaultColor}}const C=n.div`
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
    animation: ${R} ${({$duration:e})=>e}ms linear;
  }
`,u=({toast:e,onClose:o})=>(s.useEffect(()=>{const r=setTimeout(()=>{o()},e.duration);return()=>clearTimeout(r)},[]),t.jsx(t.Fragment,{children:t.jsxs(F,{role:"alert","aria-live":"assertive","aria-atomic":"true",$duration:e.duration,tabIndex:0,children:[t.jsx(v,{$type:e.type,children:t.jsxs("div",{children:[t.jsx("strong",{children:e.message.title}),t.jsx("p",{children:e.message.content})]})}),t.jsx(C,{$duration:e.duration,$type:e.type})]})}));u.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{toast:{required:!0,tsType:{name:"ToastType"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const x=({toasts:e,removeToast:o})=>t.jsx(y,{container:document.getElementById("toastRoot"),children:t.jsx(A,{children:e.map(r=>t.jsx(u,{toast:r,onClose:()=>o(r.id)},r.id))})}),A=n.div`
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
`;x.__docgenInfo={description:"",methods:[],displayName:"ToastContainer",props:{toasts:{required:!0,tsType:{name:"Array",elements:[{name:"ToastType"}],raw:"ToastType[]"},description:""},removeToast:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}}};const w=s.createContext(null),$=({children:e})=>{const[o,r]=s.useState([]),g=s.useCallback((i,d="info",l=3e3)=>{const f=Date.now().toString();r(E=>[...E,{id:f,message:i,type:d,duration:l}])},[]),c=s.useCallback(i=>{r(d=>d.filter(l=>l.id!==i))},[]);return t.jsxs(w.Provider,{value:{addToast:g,removeToast:c},children:[e,t.jsx(x,{toasts:o,removeToast:c})]})};$.__docgenInfo={description:"",methods:[],displayName:"ToastProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};export{$ as T,w as a,a as d};
