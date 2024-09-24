import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import{r}from"./index-DJO9vBfz.js";import{P as R}from"./Portal-CvBg43kE.js";import{m as w,d as c,l as h}from"./styled-components.browser.esm-Dsr6U-en.js";import{B as u}from"./Button-BMeO3CbM.js";import"./index-Cp9I2zMD.js";const $=({isLocked:e})=>{const n=r.useCallback(()=>window.innerWidth-document.documentElement.clientWidth,[]),a=r.useCallback(o=>{o.preventDefault()},[]);r.useEffect(()=>{const o=document.getElementById("modalRoot").children;if(e&&o.length>0){const i=n();document.body.style.overflow="hidden",document.body.style.paddingRight=`${i}px`,document.addEventListener("touchmove",a,{passive:!1})}return()=>{document.getElementById("modalRoot").children.length>0||(document.body.style.overflow="initial",document.body.style.paddingRight="",document.removeEventListener("touchmove",a))}},[e,n,a])},B=w`
  from { transform: translateY(50px); }
  to { transform: translateY(0); }
`,T=w`
  from { transform: translateY(0); }
  to { transform: translateY(50px); }
`,S=c.div`
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

  ${({$opened:e,$isAnimating:n})=>e&&!n?h`
          opacity: 1;
          visibility: visible;
          transition: opacity 0.3s;
        `:h`
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s, visibility 0s 0.3s;
        `}
`,E=c.div`
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

  ${({$opened:e,$isAnimating:n})=>e&&!n?h`
          animation: ${B} 0.3s;
        `:h`
          animation: ${T} 0.3s;
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
`,F=c.div`
  p {
    padding: 0;
    margin: 0;
  }
`,q=c.div``,I=c.div`
  display: flex;
  justify-content: flex-end;
`,s=({opened:e,hideOnClickOutside:n=!0,showHideButton:a=!1,isAnimating:o=!1,hide:i,children:l})=>{const d=`modal-${r.useId()}`,f=H=>H.stopPropagation(),g=r.useRef(null),y=r.useRef(null);$({isLocked:e});const b=()=>{i()};return r.useEffect(()=>{y.current=document.getElementById("modalRoot")},[]),e?t.jsx(R,{container:y.current,children:t.jsx(S,{id:d,onClick:n?b:void 0,$opened:e,$isAnimating:o,children:t.jsxs(E,{onClick:f,$opened:e,$isAnimating:o,ref:g,children:[a&&t.jsx(P,{onClick:b,"aria-label":"모달 닫기"}),l]})})}):null},z=({children:e,title:n})=>t.jsxs(F,{children:[t.jsx("p",{children:n}),e]}),N=({children:e})=>t.jsx(q,{children:e}),A=({children:e,...n})=>{const a=r.useRef(null);return r.useEffect(()=>{var i;const o=(i=a.current)==null?void 0:i.querySelectorAll("button");return o&&o.length>0&&o[0].focus(),()=>{o==null||o.forEach(l=>{l.removeEventListener("keydown",d=>{d.key==="Tab"&&d.shiftKey&&(d.preventDefault(),o[o.length-1].focus())})})}},[]),t.jsx(I,{ref:a,...n,children:e})};s.Header=z;s.Content=N;s.Footer=A;s.__docgenInfo={description:"",methods:[{name:"Header",docblock:null,modifiers:["static"],params:[{name:"{ children, title }: ModalHeaderProps",optional:!1,type:{name:"ModalHeaderProps",alias:"ModalHeaderProps"}}],returns:null},{name:"Content",docblock:null,modifiers:["static"],params:[{name:"{ children }: ModalContentProps",optional:!1,type:{name:"ModalContentProps",alias:"ModalContentProps"}}],returns:null},{name:"Footer",docblock:null,modifiers:["static"],params:[{name:"{ children, ...props }: ModalFooterProps",optional:!1,type:{name:"ModalFooterProps",alias:"ModalFooterProps"}}],returns:null}],displayName:"Modal",props:{opened:{required:!0,tsType:{name:"boolean"},description:""},hideOnClickOutside:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showHideButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hide:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},isAnimating:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const D=()=>{const[e,n]=r.useState(!1),[a,o]=r.useState(!1),i=r.useCallback(()=>{n(!0)},[]),l=r.useCallback(()=>{a||(o(!0),setTimeout(()=>{n(!1),o(!1)},300))},[]);return{opened:e,openModal:i,closeModal:l,isAnimating:a}},O=({content:e,hideOnClickOutside:n,opened:a,showHideButton:o})=>{const{opened:i,openModal:l,closeModal:d,isAnimating:f}=D(),g=()=>{console.log("ok"),d()};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:l,children:"모달 열기"}),t.jsxs(s,{opened:a||i,hide:d,hideOnClickOutside:n,showHideButton:o,isAnimating:f,children:[t.jsx(s.Content,{children:e}),t.jsxs(s.Footer,{style:{display:"flex",justifyContent:"flex-end"},children:[t.jsx(u,{variant:"ghost",size:"small",onClick:g,children:"확인"}),t.jsx(u,{variant:"ghost",size:"small",onClick:d,children:"닫기"})]})]})]})};O.__docgenInfo={description:"",methods:[],displayName:"ModalTrigger",props:{content:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},hideOnClickOutside:{required:!1,tsType:{name:"boolean"},description:""},opened:{required:!0,tsType:{name:"boolean"},description:""},showHideButton:{required:!1,tsType:{name:"boolean"},description:""}}};const U={title:"Components/Modal",component:s,parameters:{tags:["autodocs"],docs:{description:{component:"`모달` 컴포넌트는 `opend` 상태에 따라 화면에 표시됩니다. \n\n`useModal` 훅을 사용하면 손쉽게 모달을 열고 닫을 수 있습니다. \n\n`portal`을 사용하여 렌더링되기 때문에, 모달은 항상 최상위 레벨에 렌더링됩니다. \n\n        \n        "}}},tags:["autodocs"],argTypes:{opened:{control:"boolean",defaultValue:!1,table:{category:"State"}},hideOnClickOutside:{control:"boolean",defaultValue:!1,description:"모달 Dimmed 영역을 클릭했을 때 모달을 닫을지 여부, hide 함수가 실행됩니다.",table:{category:"State"}},showHideButton:{control:"boolean",description:"우측 상단 X모양의 모달 닫기 버튼을 표시할지 여부",table:{category:"State"}},children:{control:"text",description:"모달 내용",table:{category:"Content"}},hide:{table:{category:"Events"}}}},m={render:e=>t.jsx(O,{content:e.children,hideOnClickOutside:e.hideOnClickOutside,opened:e.opened,showHideButton:e.showHideButton}),args:{children:"내용이 들어갑니다",hideOnClickOutside:!1}},p={storyName:"Compound Pattern을 사용할 수 있습니다.",render:e=>t.jsxs(s,{...e,children:[t.jsx(s.Header,{title:"모달 제목"}),t.jsx(s.Content,{children:e.children}),t.jsxs(s.Footer,{children:[t.jsx(u,{variant:"ghost",children:"확인"}),t.jsx(u,{variant:"ghost",onClick:e.hide,children:"닫기"})]})]}),args:{children:"내용이 들어갑니다",hideOnClickOutside:!0}};var x,M,v;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <ModalTrigger content={args.children} hideOnClickOutside={args.hideOnClickOutside} opened={args.opened} showHideButton={args.showHideButton} />,
  args: {
    children: "내용이 들어갑니다",
    hideOnClickOutside: false
  }
}`,...(v=(M=m.parameters)==null?void 0:M.docs)==null?void 0:v.source}}};var C,k,j;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(j=(k=p.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};const X=["트리거혼합","DefaultModal"];export{p as DefaultModal,X as __namedExportsOrder,U as default,m as 트리거혼합};
