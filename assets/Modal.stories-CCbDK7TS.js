import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import{r as a}from"./index-DJO9vBfz.js";import{P as H}from"./Portal-CvBg43kE.js";import{m as j,d as c,l as f}from"./styled-components.browser.esm-Dsr6U-en.js";import{B as u}from"./Button-BMeO3CbM.js";import"./index-Cp9I2zMD.js";const R=e=>{const n=a.useCallback(()=>window.innerWidth-document.documentElement.clientWidth,[]),r=a.useCallback(o=>{o.preventDefault()},[]);a.useEffect(()=>{const o=document.getElementById("modalRoot").children;if(e&&o.length>0){const s=n();document.body.style.overflow="hidden",document.body.style.paddingRight=`${s}px`,document.addEventListener("touchmove",r,{passive:!1})}return()=>{o.length>1||(document.body.style.overflow="initial",document.body.style.paddingRight="",document.removeEventListener("touchmove",r))}},[e,n,r])},T=j`
  from { transform: translateY(50px); }
  to { transform: translateY(0); }
`,$=j`
  from { transform: translateY(0); }
  to { transform: translateY(50px); }
`,B=c.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: ${({theme:e})=>e.zIndex.modal};
  opacity: 0;
  visibility: hidden;

  ${({$opened:e,$isAnimating:n})=>e&&!n?f`
          opacity: 1;
          visibility: visible;
          transition: opacity 0.3s;
        `:f`
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s, visibility 0s 0.3s;
        `}
`,S=c.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  box-sizing: border-box;
  background-color: white;
  max-height: calc(100vh - 80px);
  max-width: calc(100vw - 80px);
  min-width: 250px;
  padding: ${({theme:e})=>e.spacing.medium};
  border-radius: ${({theme:e})=>e.borderRadius.medium};
  z-index: ${({theme:e})=>e.zIndex.modal+1};

  ${({$opened:e,$isAnimating:n})=>e&&!n?f`
          animation: ${T} 0.3s;
        `:f`
          animation: ${$} 0.3s;
        `}

  box-shadow: ${({theme:e})=>e.shadows.medium};
  overflow: auto;
`,P=c.button`
  position: absolute;
  top: ${({theme:e})=>e.spacing.medium};
  right: ${({theme:e})=>e.spacing.medium};
  background: none;
  border: none;
  cursor: pointer;
  width: 1rem;
  height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;

  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 1px;
    height: 1rem;
    border-radius: 1px;
    background-color: ${({theme:e})=>e.defaultColor};
  }

  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`,E=c.div`
  p {
    padding: 0;
    margin: 0;
  }
`,F=c.div``,q=c.div`
  display: flex;
  justify-content: flex-end;
`,i=({opened:e,hideOnClickOutside:n=!0,showHideButton:r=!1,isAnimating:o=!1,hide:s,children:l})=>{const d=O=>O.stopPropagation(),g=a.useRef(null),p=a.useRef(null);R(e&&!o);const y=()=>{s()};return a.useEffect(()=>{p.current=document.getElementById("modalRoot")},[]),t.jsx(H,{container:p.current,children:t.jsx(B,{onClick:n?y:void 0,$opened:e,$isAnimating:o,children:t.jsxs(S,{onClick:d,$opened:e,$isAnimating:o,ref:g,children:[r&&t.jsx(P,{onClick:y,"aria-label":"모달 닫기"}),l]})})})},I=({children:e,title:n})=>t.jsxs(E,{children:[t.jsx("p",{children:n}),e]}),z=({children:e})=>t.jsx(F,{children:e}),N=({children:e,...n})=>{const r=a.useRef(null);return a.useEffect(()=>{var s;const o=(s=r.current)==null?void 0:s.querySelectorAll("button");return o&&o.length>0&&o[0].focus(),()=>{o==null||o.forEach(l=>{l.removeEventListener("keydown",d=>{d.key==="Tab"&&d.shiftKey&&(d.preventDefault(),o[o.length-1].focus())})})}},[]),t.jsx(q,{ref:r,...n,children:e})};i.Header=I;i.Content=z;i.Footer=N;i.__docgenInfo={description:"",methods:[{name:"Header",docblock:null,modifiers:["static"],params:[{name:"{ children, title }: ModalHeaderProps",optional:!1,type:{name:"ModalHeaderProps",alias:"ModalHeaderProps"}}],returns:null},{name:"Content",docblock:null,modifiers:["static"],params:[{name:"{ children }: ModalContentProps",optional:!1,type:{name:"ModalContentProps",alias:"ModalContentProps"}}],returns:null},{name:"Footer",docblock:null,modifiers:["static"],params:[{name:"{ children, ...props }: ModalFooterProps",optional:!1,type:{name:"ModalFooterProps",alias:"ModalFooterProps"}}],returns:null}],displayName:"Modal",props:{opened:{required:!0,tsType:{name:"boolean"},description:""},hideOnClickOutside:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showHideButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hide:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},isAnimating:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const D=()=>{const[e,n]=a.useState(!1),[r,o]=a.useState(!1),s=a.useCallback(()=>{n(!0)},[]),l=a.useCallback(()=>{r||(o(!0),setTimeout(()=>{n(!1),o(!1)},300))},[]);return{opened:e,openModal:s,closeModal:l,isAnimating:r}},w=({content:e,hideOnClickOutside:n,opened:r,showHideButton:o})=>{const{opened:s,openModal:l,closeModal:d,isAnimating:g}=D(),p=()=>{console.log("ok"),d()};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:l,children:"모달 열기"}),t.jsxs(i,{opened:r||s,hide:d,hideOnClickOutside:n,showHideButton:o,isAnimating:g,children:[t.jsx(i.Content,{children:e}),t.jsxs(i.Footer,{style:{display:"flex",justifyContent:"flex-end"},children:[t.jsx(u,{variant:"ghost",size:"small",onClick:p,children:"확인"}),t.jsx(u,{variant:"ghost",size:"small",onClick:d,children:"닫기"})]})]})]})};w.__docgenInfo={description:"",methods:[],displayName:"ModalTrigger",props:{content:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},hideOnClickOutside:{required:!1,tsType:{name:"boolean"},description:""},opened:{required:!0,tsType:{name:"boolean"},description:""},showHideButton:{required:!1,tsType:{name:"boolean"},description:""}}};const K={title:"Components/Modal",component:i,parameters:{tags:["autodocs"],docs:{description:{component:"`모달` 컴포넌트는 `opend` 상태에 따라 화면에 표시됩니다. \n\n`useModal` 훅을 사용하면 손쉽게 모달을 열고 닫을 수 있습니다. \n\n`portal`을 사용하여 렌더링되기 때문에, 모달은 항상 최상위 레벨에 렌더링됩니다. \n\n        \n        "}}},tags:["autodocs"],argTypes:{opened:{control:"boolean",defaultValue:!1,table:{category:"State"}},hideOnClickOutside:{control:"boolean",defaultValue:!1,description:"모달 Dimmed 영역을 클릭했을 때 모달을 닫을지 여부, hide 함수가 실행됩니다.",table:{category:"State"}},showHideButton:{control:"boolean",description:"우측 상단 X모양의 모달 닫기 버튼을 표시할지 여부",table:{category:"State"}},children:{control:"text",description:"모달 내용",table:{category:"Content"}},hide:{table:{category:"Events"}}}},m={render:e=>t.jsx(w,{content:e.children,hideOnClickOutside:e.hideOnClickOutside,opened:e.opened,showHideButton:e.showHideButton}),args:{children:"내용이 들어갑니다",hideOnClickOutside:!1}},h={storyName:"Compound Pattern을 사용할 수 있습니다.",render:e=>t.jsxs(i,{...e,children:[t.jsx(i.Header,{title:"모달 제목"}),t.jsx(i.Content,{children:e.children}),t.jsxs(i.Footer,{children:[t.jsx(u,{variant:"ghost",children:"확인"}),t.jsx(u,{variant:"ghost",onClick:e.hide,children:"닫기"})]})]}),args:{children:"내용이 들어갑니다",hideOnClickOutside:!0}};var b,x,M;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <ModalTrigger content={args.children} hideOnClickOutside={args.hideOnClickOutside} opened={args.opened} showHideButton={args.showHideButton} />,
  args: {
    children: "내용이 들어갑니다",
    hideOnClickOutside: false
  }
}`,...(M=(x=m.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};var v,C,k;h.parameters={...h.parameters,docs:{...(v=h.parameters)==null?void 0:v.docs,source:{originalSource:`{
  storyName: "Compound Pattern을 사용할 수 있습니다.",
  render: args => <Modal {...args}>
      <Modal.Header title="모달 제목" />
      <Modal.Content>{args.children}</Modal.Content>
      <Modal.Footer>
        <Button variant="ghost">확인</Button>
        <Button variant="ghost" onClick={args.hide}>
          닫기
        </Button>
      </Modal.Footer>
    </Modal>,
  args: {
    children: "내용이 들어갑니다",
    hideOnClickOutside: true
  }
}`,...(k=(C=h.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};const U=["트리거혼합","DefaultModal"];export{h as DefaultModal,U as __namedExportsOrder,K as default,m as 트리거혼합};
