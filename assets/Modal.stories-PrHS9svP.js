import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import{r as d}from"./index-DJO9vBfz.js";import{P as N}from"./Portal-CvBg43kE.js";import{m as z,d as u,l as y}from"./styled-components.browser.esm-Dsr6U-en.js";import{B as C}from"./Button-CpD3pMnL.js";import"./index-Cp9I2zMD.js";import"./style-x6FuVGrZ.js";const W=({isLocked:o})=>{const n=d.useCallback(()=>window.innerWidth-document.documentElement.clientWidth,[]),a=d.useCallback(e=>{e.preventDefault()},[]);d.useEffect(()=>{const e=document.getElementById("modalRoot").children;if(o&&e.length>0){const s=n();document.body.style.overflow="hidden",document.body.style.paddingRight=`${s}px`,document.addEventListener("touchmove",a,{passive:!1})}return()=>{document.getElementById("modalRoot").children.length>0||(document.body.style.overflow="initial",document.body.style.paddingRight="",document.removeEventListener("touchmove",a))}},[o,n,a])},_=z`
  from { transform: translateY(50px); }
  to { transform: translateY(0); }
`,L=z`
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
  z-index: ${({theme:o})=>o.zIndex.modal};
  opacity: 0;
  visibility: hidden;

  ${({$opened:o,$isAnimating:n})=>o&&!n?y`
          opacity: 0.99;
          visibility: visible;
          transition: opacity 0.3s;
        `:y`
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s, visibility 0s 0.3s;
        `}
`,V=u.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  box-sizing: border-box;
  max-height: calc(100vh - 80px);
  max-width: calc(100vw - 80px);
  min-width: 250px;
  border-radius: ${({theme:o})=>o.borderRadius.medium};
  z-index: ${({theme:o})=>o.zIndex.modal+1};
  background-color: ${({theme:o})=>o.colors.white};

  ${({$opened:o,$isAnimating:n})=>o&&!n?y`
          animation: ${_} 0.3s;
        `:y`
          animation: ${L} 0.3s;
        `}

  box-shadow: ${({theme:o})=>o.shadows.medium};
  overflow: auto;
`,K=u.button`
  position: absolute;
  top: ${({theme:o})=>o.spacing.medium};
  right: ${({theme:o})=>o.spacing.medium};
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
    background-color: ${({theme:o})=>o.colors.black};
  }

  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`,U=u.div`
  padding: ${({theme:o})=>o.spacing.xlarge};
  margin: 0;
  font-size: ${({theme:o})=>o.fontSizes.large};
  font-weight: bold;
  border-bottom: 1px solid ${({theme:o})=>o.colors.gray[300]};
`,G=u.h2`
  margin: 0;
  padding: 0;
  font-size: ${({theme:o})=>o.fontSizes.large};
  font-weight: ${({theme:o})=>o.fontWeights.bold};
  color: ${({theme:o})=>o.colors.black};
  line-height: 1.5;
`,J=u.div`
  padding: ${({theme:o})=>o.spacing.xlarge};
  font-size: ${({theme:o})=>o.fontSizes.medium};
  color: ${({theme:o})=>o.colors.black};
`,Q=u.div`
  display: flex;
  justify-content: flex-end;
  padding: ${({theme:o})=>o.spacing.xlarge};
`,h=({opened:o,hideOnClickOutside:n=!0,showHideButton:a=!1,isAnimating:e=!1,hide:s,children:m})=>{const M=`modal-${d.useId()}`,I=D=>D.stopPropagation(),q=d.useRef(null),x=d.useRef(null);W({isLocked:o});const b=()=>{s()};return d.useEffect(()=>{x.current=document.getElementById("modalRoot")},[]),o?t.jsx(N,{container:x.current,children:t.jsx(Y,{id:M,onClick:n?b:void 0,$opened:o,$isAnimating:e,children:t.jsxs(V,{onClick:I,$opened:o,$isAnimating:e,ref:q,children:[a&&t.jsx(K,{onClick:b,"aria-label":"모달 닫기"}),m]})})}):null},X=({children:o,title:n})=>t.jsxs(U,{children:[t.jsx(G,{children:n}),o]}),Z=({children:o})=>t.jsx(J,{children:o}),oo=({children:o,...n})=>{const a=d.useRef(null);return d.useEffect(()=>{var s;const e=(s=a.current)==null?void 0:s.querySelectorAll("button");return e&&e.length>0&&e[0].focus(),()=>{e==null||e.forEach(m=>{m.removeEventListener("keydown",M=>{M.key==="Tab"&&M.shiftKey&&(M.preventDefault(),e[e.length-1].focus())})})}},[]),t.jsx(Q,{ref:a,...n,children:o})};h.Header=X;h.Content=Z;h.Footer=oo;const g=h;h.__docgenInfo={description:"",methods:[{name:"Header",docblock:null,modifiers:["static"],params:[{name:"{ children, title }: ModalHeaderProps",optional:!1,type:{name:"ModalHeaderProps",alias:"ModalHeaderProps"}}],returns:null},{name:"Content",docblock:null,modifiers:["static"],params:[{name:"{ children }: ModalContentProps",optional:!1,type:{name:"ModalContentProps",alias:"ModalContentProps"}}],returns:null},{name:"Footer",docblock:null,modifiers:["static"],params:[{name:"{ children, ...props }: ModalFooterProps",optional:!1,type:{name:"ModalFooterProps",alias:"ModalFooterProps"}}],returns:null}],displayName:"Modal",props:{opened:{required:!0,tsType:{name:"boolean"},description:""},hideOnClickOutside:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showHideButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hide:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},isAnimating:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const eo=()=>{const[o,n]=d.useState(!1),[a,e]=d.useState(!1),s=d.useCallback(()=>{n(!0)},[]),m=d.useCallback(()=>{a||(e(!0),setTimeout(()=>{n(!1),e(!1)},300))},[]);return{opened:o,openModal:s,closeModal:m,isAnimating:a}},co={title:"Components/Modal",component:g,tags:["autodocs"],argTypes:{hideOnClickOutside:{control:{type:"boolean"},description:"모달 바깥을 클릭했을 때 모달을 닫습니다."},showHideButton:{control:{type:"boolean"},description:"모달 내부에 닫기 버튼을 표시합니다."}},parameters:{docs:{description:{component:`
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
        `}}}},f=o=>{const{opened:n,openModal:a,closeModal:e,isAnimating:s}=eo();return t.jsxs("div",{style:{minHeight:"330px"},children:[t.jsx(C,{onClick:a,children:"모달 열기"}),t.jsxs(g,{...o,opened:n,hide:e,isAnimating:s,children:[t.jsx(g.Header,{title:"설정"}),t.jsx(g.Content,{children:t.jsx("p",{children:"여기에 모달 내용을 넣을 수 있습니다."})}),t.jsx(g.Footer,{children:t.jsx(C,{onClick:e,children:"닫기"})})]})]})},i=f.bind({});i.args={hideOnClickOutside:!0,showHideButton:!1};i.storyName="기본 모달";i.parameters={docs:{description:{story:`
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
}`,...(B=(k=i.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var H,A,$;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`args => {
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
}`,...($=(A=l.parameters)==null?void 0:A.docs)==null?void 0:$.source}}};var w,F,j;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
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
}`,...(E=(S=c.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var P,R,T;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
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
}`,...(T=(R=p.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};const po=["Default","WithCloseButton","AnimatedModal","CustomContent","DisableOutsideClick"];export{r as AnimatedModal,c as CustomContent,i as Default,p as DisableOutsideClick,l as WithCloseButton,po as __namedExportsOrder,co as default};
