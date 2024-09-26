import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import{r as d}from"./index-DJO9vBfz.js";import{P as D}from"./Portal-CvBg43kE.js";import{m as z,d as u,l as y}from"./styled-components.browser.esm-Dsr6U-en.js";import{B as b}from"./Button-BZyZE5fo.js";import"./index-Cp9I2zMD.js";const N=({isLocked:e})=>{const n=d.useCallback(()=>window.innerWidth-document.documentElement.clientWidth,[]),a=d.useCallback(o=>{o.preventDefault()},[]);d.useEffect(()=>{const o=document.getElementById("modalRoot").children;if(e&&o.length>0){const s=n();document.body.style.overflow="hidden",document.body.style.paddingRight=`${s}px`,document.addEventListener("touchmove",a,{passive:!1})}return()=>{document.getElementById("modalRoot").children.length>0||(document.body.style.overflow="initial",document.body.style.paddingRight="",document.removeEventListener("touchmove",a))}},[e,n,a])},W=z`
  from { transform: translateY(50px); }
  to { transform: translateY(0); }
`,_=z`
  from { transform: translateY(0); }
  to { transform: translateY(50px); }
`,Y=u.div`
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

  ${({$opened:e,$isAnimating:n})=>e&&!n?y`
          opacity: 1;
          visibility: visible;
          transition: opacity 0.3s;
        `:y`
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s, visibility 0s 0.3s;
        `}
`,K=u.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  box-sizing: border-box;
  background-color: white;
  max-height: calc(100vh - 80px);
  max-width: calc(100vw - 80px);
  min-width: 250px;
  border-radius: ${({theme:e})=>e.borderRadius.medium};
  z-index: ${({theme:e})=>e.zIndex.modal+1};

  ${({$opened:e,$isAnimating:n})=>e&&!n?y`
          animation: ${W} 0.3s;
        `:y`
          animation: ${_} 0.3s;
        `}

  box-shadow: ${({theme:e})=>e.shadows.medium};
  overflow: auto;
`,V=u.button`
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
    background-color: ${({theme:e})=>e.colors.BLACK};
  }

  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`,G=u.div`
  padding: ${({theme:e})=>e.spacing.xLarge};
  margin: 0;
  font-size: ${({theme:e})=>e.fontSizes.large};
  font-weight: bold;
  border-bottom: 1px solid ${({theme:e})=>e.colors.GRAY_300};
`,U=u.h2`
  margin: 0;
  padding: 0;

  font-size: ${({theme:e})=>e.fontSizes.large};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.BLACK};
  line-height: 1.5;
`,J=u.div`
  padding: ${({theme:e})=>e.spacing.xLarge};
  font-size: ${({theme:e})=>e.fontSizes.medium};
`,Q=u.div`
  display: flex;
  justify-content: flex-end;
  padding: ${({theme:e})=>e.spacing.xLarge};
`,h=({opened:e,hideOnClickOutside:n=!0,showHideButton:a=!1,isAnimating:o=!1,hide:s,children:m})=>{const M=`modal-${d.useId()}`,I=q=>q.stopPropagation(),L=d.useRef(null),C=d.useRef(null);N({isLocked:e});const x=()=>{s()};return d.useEffect(()=>{C.current=document.getElementById("modalRoot")},[]),e?t.jsx(D,{container:C.current,children:t.jsx(Y,{id:M,onClick:n?x:void 0,$opened:e,$isAnimating:o,children:t.jsxs(K,{onClick:I,$opened:e,$isAnimating:o,ref:L,children:[a&&t.jsx(V,{onClick:x,"aria-label":"모달 닫기"}),m]})})}):null},X=({children:e,title:n})=>t.jsxs(G,{children:[t.jsx(U,{children:n}),e]}),Z=({children:e})=>t.jsx(J,{children:e}),ee=({children:e,...n})=>{const a=d.useRef(null);return d.useEffect(()=>{var s;const o=(s=a.current)==null?void 0:s.querySelectorAll("button");return o&&o.length>0&&o[0].focus(),()=>{o==null||o.forEach(m=>{m.removeEventListener("keydown",M=>{M.key==="Tab"&&M.shiftKey&&(M.preventDefault(),o[o.length-1].focus())})})}},[]),t.jsx(Q,{ref:a,...n,children:e})};h.Header=X;h.Content=Z;h.Footer=ee;const g=h;h.__docgenInfo={description:"",methods:[{name:"Header",docblock:null,modifiers:["static"],params:[{name:"{ children, title }: ModalHeaderProps",optional:!1,type:{name:"ModalHeaderProps",alias:"ModalHeaderProps"}}],returns:null},{name:"Content",docblock:null,modifiers:["static"],params:[{name:"{ children }: ModalContentProps",optional:!1,type:{name:"ModalContentProps",alias:"ModalContentProps"}}],returns:null},{name:"Footer",docblock:null,modifiers:["static"],params:[{name:"{ children, ...props }: ModalFooterProps",optional:!1,type:{name:"ModalFooterProps",alias:"ModalFooterProps"}}],returns:null}],displayName:"Modal",props:{opened:{required:!0,tsType:{name:"boolean"},description:""},hideOnClickOutside:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showHideButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hide:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},isAnimating:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const oe=()=>{const[e,n]=d.useState(!1),[a,o]=d.useState(!1),s=d.useCallback(()=>{n(!0)},[]),m=d.useCallback(()=>{a||(o(!0),setTimeout(()=>{n(!1),o(!1)},300))},[]);return{opened:e,openModal:s,closeModal:m,isAnimating:a}},le={title:"Components/Modal",component:g,tags:["autodocs"],argTypes:{hideOnClickOutside:{control:{type:"boolean"},description:"모달 바깥을 클릭했을 때 모달을 닫습니다."},showHideButton:{control:{type:"boolean"},description:"모달 내부에 닫기 버튼을 표시합니다."}},parameters:{docs:{description:{component:`
**Modal 컴포넌트**

\`Modal\` 컴포넌트는 사용자 인터랙션에 따라 표시되는 오버레이 창으로, 중요한 정보를 보여주거나 사용자로부터 입력을 받을 때 사용합니다.

### 주요 기능

- **Portal 사용**: 모달은 어느 위치에서 작성되었든, 항상 최상위 레벨에 렌더링됩니다.
- **컴파운드 패턴 지원**: \`Modal.Header\`, \`Modal.Content\`, \`Modal.Footer\`를 사용하여 모달의 구조를 정의할 수 있습니다.
- **외부 클릭 닫기**: \`hideOnClickOutside\` prop을 사용하여 모달 바깥을 클릭했을 때 모달을 닫을 수 있습니다.
- **닫기 버튼 표시**: \`showHideButton\` prop을 사용하여 모달 내부에 닫기 버튼을 표시할 수 있습니다.

### 사용법

\`\`\`tsx
import { Modal, useModal } from 'yoso-ui';

const Example = () => {
  const { opened, openModal, closeModal, isAnimating } = useModal();

  return (
    <>
      <button onClick={openModal}>모달 열기</button>
      <Modal
        opened={opened}
        hide={closeModal}
        isAnimating={isAnimating}
      >
        <Modal.Header title="모달 제목" />
        <Modal.Content>
          {/* 모달 내용 */}
        </Modal.Content>
        <Modal.Footer>
          {/* 모달 푸터 */}
        </Modal.Footer>
      </Modal>
    </>
  );
};
\`\`\`
        `}}}},f=e=>{const{opened:n,openModal:a,closeModal:o,isAnimating:s}=oe();return t.jsxs("div",{style:{minHeight:"330px"},children:[t.jsx(b,{onClick:a,children:"모달 열기"}),t.jsxs(g,{...e,opened:n,hide:o,isAnimating:s,children:[t.jsx(g.Header,{title:"설정"}),t.jsx(g.Content,{children:t.jsx("p",{children:"여기에 모달 내용을 넣을 수 있습니다."})}),t.jsx(g.Footer,{children:t.jsx(b,{onClick:o,children:"닫기"})})]})]})},i=f.bind({});i.args={hideOnClickOutside:!0,showHideButton:!1};i.storyName="기본 모달";i.parameters={docs:{description:{story:`
**기본 모달**

컴파운드 패턴을 사용하여 모달의 구조를 정의합니다.

\`\`\`tsx
<Modal
  opened={opened}
  hide={closeModal}
>
  <Modal.Header title="모달 제목" />
  <Modal.Content>
    {/* 모달 내용 */}
  </Modal.Content>
  <Modal.Footer>
    {/* 모달 푸터 */}
  </Modal.Footer>
</Modal>
\`\`\`
      `}}};const l=f.bind({});l.args={hideOnClickOutside:!1,showHideButton:!0};l.storyName="닫기 버튼이 있는 모달";l.parameters={docs:{description:{story:`
**닫기 버튼이 있는 모달**

모달 내부에 닫기 버튼을 표시합니다.

\`\`\`tsx
<Modal
  opened={opened}
  hide={closeModal}
  showHideButton={true}
>
  {/* ... */}
</Modal>
\`\`\`
      `}}};const r=f.bind({});r.args={hideOnClickOutside:!0,showHideButton:!1};r.storyName="애니메이션 모달";r.parameters={docs:{description:{story:`
**애니메이션 모달**

모달이 열리고 닫힐 때 애니메이션이 적용됩니다.

\`\`\`tsx
const { opened, openModal, closeModal, isAnimating } = useModal();

<Modal
  opened={opened}
  hide={closeModal}
  isAnimating={isAnimating}
>
  {/* ... */}
</Modal>
\`\`\`
      `}}};const c=f.bind({});c.args={hideOnClickOutside:!0,showHideButton:!1};c.storyName="커스텀 콘텐츠 모달";c.parameters={docs:{description:{story:`
**커스텀 콘텐츠 모달**

모달 내부에 원하는 콘텐츠를 렌더링할 수 있습니다.

\`\`\`tsx
<Modal
  opened={opened}
  hide={closeModal}
>
  <div>
    <h2>커스텀 제목</h2>
    <p>커스텀 내용을 여기에 넣을 수 있습니다.</p>
  </div>
</Modal>
\`\`\`
      `}}};const p=f.bind({});p.args={hideOnClickOutside:!1,showHideButton:!0};p.storyName="외부 클릭으로 닫기 비활성화";p.parameters={docs:{description:{story:`
**외부 클릭으로 닫기 비활성화**

모달 바깥을 클릭해도 모달이 닫히지 않습니다.

\`\`\`tsx
<Modal
  opened={opened}
  hide={closeModal}
  hideOnClickOutside={false}
>
  {/* ... */}
</Modal>
\`\`\`
      `}}};var v,k,B;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  const {
    opened,
    openModal,
    closeModal,
    isAnimating
  } = useModal();
  return <div style={{
    minHeight: "330px"
  }}>
      <Button onClick={openModal}>모달 열기</Button>
      <Modal {...args} opened={opened} hide={closeModal} isAnimating={isAnimating}>
        <Modal.Header title="설정" />
        <Modal.Content>
          <p>여기에 모달 내용을 넣을 수 있습니다.</p>
        </Modal.Content>
        <Modal.Footer>
          <Button onClick={closeModal}>닫기</Button>
        </Modal.Footer>
      </Modal>
    </div>;
}`,...(B=(k=i.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var H,A,w;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`args => {
  const {
    opened,
    openModal,
    closeModal,
    isAnimating
  } = useModal();
  return <div style={{
    minHeight: "330px"
  }}>
      <Button onClick={openModal}>모달 열기</Button>
      <Modal {...args} opened={opened} hide={closeModal} isAnimating={isAnimating}>
        <Modal.Header title="설정" />
        <Modal.Content>
          <p>여기에 모달 내용을 넣을 수 있습니다.</p>
        </Modal.Content>
        <Modal.Footer>
          <Button onClick={closeModal}>닫기</Button>
        </Modal.Footer>
      </Modal>
    </div>;
}`,...(w=(A=l.parameters)==null?void 0:A.docs)==null?void 0:w.source}}};var $,F,j;r.parameters={...r.parameters,docs:{...($=r.parameters)==null?void 0:$.docs,source:{originalSource:`args => {
  const {
    opened,
    openModal,
    closeModal,
    isAnimating
  } = useModal();
  return <div style={{
    minHeight: "330px"
  }}>
      <Button onClick={openModal}>모달 열기</Button>
      <Modal {...args} opened={opened} hide={closeModal} isAnimating={isAnimating}>
        <Modal.Header title="설정" />
        <Modal.Content>
          <p>여기에 모달 내용을 넣을 수 있습니다.</p>
        </Modal.Content>
        <Modal.Footer>
          <Button onClick={closeModal}>닫기</Button>
        </Modal.Footer>
      </Modal>
    </div>;
}`,...(j=(F=r.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var O,S,E;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`args => {
  const {
    opened,
    openModal,
    closeModal,
    isAnimating
  } = useModal();
  return <div style={{
    minHeight: "330px"
  }}>
      <Button onClick={openModal}>모달 열기</Button>
      <Modal {...args} opened={opened} hide={closeModal} isAnimating={isAnimating}>
        <Modal.Header title="설정" />
        <Modal.Content>
          <p>여기에 모달 내용을 넣을 수 있습니다.</p>
        </Modal.Content>
        <Modal.Footer>
          <Button onClick={closeModal}>닫기</Button>
        </Modal.Footer>
      </Modal>
    </div>;
}`,...(E=(S=c.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var R,P,T;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`args => {
  const {
    opened,
    openModal,
    closeModal,
    isAnimating
  } = useModal();
  return <div style={{
    minHeight: "330px"
  }}>
      <Button onClick={openModal}>모달 열기</Button>
      <Modal {...args} opened={opened} hide={closeModal} isAnimating={isAnimating}>
        <Modal.Header title="설정" />
        <Modal.Content>
          <p>여기에 모달 내용을 넣을 수 있습니다.</p>
        </Modal.Content>
        <Modal.Footer>
          <Button onClick={closeModal}>닫기</Button>
        </Modal.Footer>
      </Modal>
    </div>;
}`,...(T=(P=p.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};const re=["Default","WithCloseButton","AnimatedModal","CustomContent","DisableOutsideClick"];export{r as AnimatedModal,c as CustomContent,i as Default,p as DisableOutsideClick,l as WithCloseButton,re as __namedExportsOrder,le as default};
