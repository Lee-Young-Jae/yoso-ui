import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{r as a}from"./index-DJO9vBfz.js";import{d as p}from"./styled-components.browser.esm-Dsr6U-en.js";import{g as B}from"./style-CuGJsH27.js";const _e=p.div`
  position: relative;
  overflow: hidden;
  touch-action: pan-y; // 가로 슬라이드 방지
  user-select: none; // 드래그 방지
  -webkit-user-drag: none; // Safari 이미지 드래그 방지
  width: ${({$width:e})=>e}px;
  height: ${({$height:e})=>e}px;
`,Ee=p.div`
  display: flex;
  transition: ${({$transition:e})=>e?"transform 0.3s ease-in-out":"none"};
  transform: translateX(${({$translateX:e})=>e}%);
  will-change: transform;
`,Be=p.div`
  min-width: 100%;
  box-sizing: border-box;
`,ze=p.img`
  width: ${({width:e})=>e}px;
  height: ${({height:e})=>e}px;
  display: block;
  opacity: ${({$isLoaded:e})=>e?1:0};
  transition: opacity 0.5s ease-in-out;
  pointer-events: none;
  object-fit: ${({$objectFit:e})=>e};
`,Fe=p.div`
  width: 100%;
  height: 10px;
  background-color: ${({theme:e})=>B(e.colors.BLACK,.1)};
`,Oe=p.div`
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  padding: 0 ${({theme:e})=>e.spacing.small};
  box-sizing: border-box;
`,Y=p.button`
  background: ${({theme:e})=>B(e.colors.BLACK,.3)};
  border: none;
  border-radius: 50%;
  width: ${({theme:e})=>e.spacing.small};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  font-size: 12px;
`,Ue=p.div`
  position: absolute;
  bottom: 15px;
  width: 100%;
  text-align: center;
`,Ke=p.button`
  cursor: pointer;
  margin: 0 4px;
  background-color: ${({$isActive:e,theme:o})=>e?o.colors.BLACK:B(o.colors.BLACK,.3)};
  border: none;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.3s ease;
  width: ${({theme:e})=>e.spacing.medium};
  height: ${({theme:e})=>e.spacing.medium};
  padding: 0;

  &:hover {
    background-color: ${({theme:e})=>e.colors.BLACK};
  }
`,Ce=({slide:e,isActive:o,width:n,height:S,objectFit:i})=>{const k=a.useRef(null),[w,R]=a.useState(!1);return a.useEffect(()=>{const c=k.current;let u;return c&&("IntersectionObserver"in window?(u=new IntersectionObserver(A=>{A.forEach(L=>{L.isIntersecting&&(c.src=c.dataset.src,u.unobserve(c))})},{threshold:.1}),u.observe(c)):c.src=c.dataset.src),()=>{u&&u.disconnect()}},[]),r.jsxs(Be,{"aria-hidden":!o,children:[!w&&r.jsx(Fe,{$width:n,$height:S}),r.jsx(ze,{ref:k,"data-src":e.imageUrl,alt:e.altText,$isLoaded:w,width:n,height:S,$objectFit:i,onLoad:()=>R(!0)})]})};Ce.__docgenInfo={description:"",methods:[],displayName:"Slide",props:{slide:{required:!0,tsType:{name:"SlideItem"},description:""},isActive:{required:!0,tsType:{name:"boolean"},description:""},width:{required:!0,tsType:{name:"number"},description:""},height:{required:!0,tsType:{name:"number"},description:""},objectFit:{required:!0,tsType:{name:"union",raw:'"cover" | "contain" | "fill" | "none" | "scale-down"',elements:[{name:"literal",value:'"cover"'},{name:"literal",value:'"contain"'},{name:"literal",value:'"fill"'},{name:"literal",value:'"none"'},{name:"literal",value:'"scale-down"'}]},description:""}}};const Pe=({goToNextSlide:e,goToPrevSlide:o})=>r.jsxs(Oe,{children:[r.jsx(Y,{onClick:o,"aria-label":"이전 슬라이드",children:"❮"}),r.jsx(Y,{onClick:e,"aria-label":"다음 슬라이드",children:"❯"})]});Pe.__docgenInfo={description:"",methods:[],displayName:"Navigation",props:{goToNextSlide:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},goToPrevSlide:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},currentIndex:{required:!0,tsType:{name:"number"},description:""}}};const je=({slides:e,currentIndex:o,goToSlide:n})=>r.jsx(Ue,{children:e.map((S,i)=>r.jsx(Ke,{$isActive:i===o,onClick:()=>n(i),"aria-label":`${i+1}번째 슬라이드로 이동`},i))});je.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{slides:{required:!0,tsType:{name:"Array",elements:[{name:"SlideItem"}],raw:"SlideItem[]"},description:""},currentIndex:{required:!0,tsType:{name:"number"},description:""},goToSlide:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""}}};const Ne=({slides:e,width:o,height:n,objectFit:S="cover",autoPlay:i=!1,autoPlayInterval:k=3e3,loop:w=!1,showNavigation:R=!0,showPagination:c=!0,onSlideChange:u,onClickImage:A,renderNavigation:L,renderPagination:z})=>{const[s,$e]=a.useState(0),[I,F]=a.useState(!1),[qe,Ae]=a.useState(0),[O,_]=a.useState(0),[U,Le]=a.useState(0),[De,K]=a.useState(!0),M=a.useRef(null),D=e.length,V=t=>t.type.includes("mouse")?t.clientX:t.touches[0].clientX,T=a.useCallback(t=>{let m=t;t<0?m=w?D-1:0:t>=D&&(m=w?0:D-1),$e(m),u&&u(m)},[w,D,u]),g=a.useCallback(()=>{T(s+1)},[s,T]),$=a.useCallback(()=>{T(s-1)},[s,T]);a.useEffect(()=>{let t;return i&&!I&&(t=setInterval(()=>{g()},k)),()=>{t&&clearInterval(t)}},[i,k,g,I]);const X=t=>{F(!0),K(!1),Ae(V(t)),Le(-s*100),t.preventDefault()},W=t=>{if(!I)return;let q=(V(t)-qe)/M.current.offsetWidth*100;q>100&&(q=100),q<-100&&(q=-100),_(U+q)},E=()=>{F(!1),K(!0);const t=O-U;t<-25?g():t>25?$():_(-s*100)};a.useEffect(()=>{I||_(-s*100)},[s,I]);const Re=a.useCallback(t=>{t.key==="ArrowLeft"?$():t.key==="ArrowRight"&&g()},[$,g]);return r.jsxs(_e,{ref:M,onTouchStart:X,onTouchMove:W,onTouchEnd:E,onMouseDown:X,onMouseMove:W,onMouseUp:E,onMouseLeave:()=>I&&E(),onDragStart:t=>t.preventDefault(),tabIndex:0,onKeyDown:Re,"aria-roledescription":"carousel","aria-label":"이미지 슬라이더",onClick:()=>A&&A(s),$width:o,$height:n,children:[r.jsx(Ee,{$translateX:O,$transition:De,children:e.map((t,m)=>r.jsx(Ce,{slide:t,isActive:m===s,objectFit:S,width:o,height:n},m))}),L?L({goToNextSlide:g,goToPrevSlide:$,currentIndex:s}):R&&r.jsx(Pe,{currentIndex:s,goToNextSlide:g,goToPrevSlide:$}),z?z({slides:e,currentIndex:s,goToSlide:T}):c&&r.jsx(je,{slides:e,currentIndex:s,goToSlide:T})]})},ke=Ne;Ne.__docgenInfo={description:"",methods:[],displayName:"ImageSlider",props:{slides:{required:!0,tsType:{name:"Array",elements:[{name:"SlideItem"}],raw:"SlideItem[]"},description:""},width:{required:!0,tsType:{name:"number"},description:""},height:{required:!0,tsType:{name:"number"},description:""},objectFit:{required:!1,tsType:{name:"union",raw:'"cover" | "contain" | "fill" | "none" | "scale-down"',elements:[{name:"literal",value:'"cover"'},{name:"literal",value:'"contain"'},{name:"literal",value:'"fill"'},{name:"literal",value:'"none"'},{name:"literal",value:'"scale-down"'}]},description:"",defaultValue:{value:'"cover"',computed:!1}},autoPlay:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},autoPlayInterval:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3000",computed:!1}},loop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showNavigation:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showPagination:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onClickImage:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},onSlideChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(currentIndex: number) => void",signature:{arguments:[{type:{name:"number"},name:"currentIndex"}],return:{name:"void"}}},description:""},renderNavigation:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: NavigationProps) => ReactNode",signature:{arguments:[{type:{name:"NavigationProps"},name:"props"}],return:{name:"ReactNode"}}},description:""},renderPagination:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: PaginationProps) => ReactNode",signature:{arguments:[{type:{name:"PaginationProps"},name:"props"}],return:{name:"ReactNode"}}},description:""}}};const Ge={title:"Components/ImageSlider",component:ke,tags:["autodocs"],parameters:{docs:{description:{component:`
\`ImageSlider\` 컴포넌트는 이미지 슬라이더를 구현하기 위한 컴포넌트로, 다음과 같은 기능을 제공합니다:

- **드래그 및 터치 지원**: 마우스 드래그 및 터치로 슬라이드를 이동할 수 있습니다.
- **자동 재생**: 슬라이드를 자동으로 전환할 수 있습니다.
- **무한 루프**: 마지막 슬라이드 이후에 처음 슬라이드로 이동합니다.
- **이미지 Lazy Loading**: Intersection Observer API를 사용하여 이미지 로딩을 최적화합니다.
- **접근성 준수**: 키보드 내비게이션 및 ARIA 속성을 사용하여 접근성을 향상시킵니다.

**사용법**

\`\`\`tsx
import ImageSlider from './ImageSlider';

const slides = [
  { imageUrl: 'https://example.com/image1.jpg', altText: '이미지 1' },
  { imageUrl: 'https://example.com/image2.jpg', altText: '이미지 2' },
  { imageUrl: 'https://example.com/image3.jpg', altText: '이미지 3' },
];

<ImageSlider
  slides={slides}
  width={800}
  height={400}
  autoPlay={true}
  loop={true}
/>;
\`\`\`
        `}}}},d=[{imageUrl:"https://via.placeholder.com/800x400?text=Slide+1",altText:"슬라이드 1"},{imageUrl:"https://via.placeholder.com/800x400?text=Slide+2",altText:"슬라이드 2"},{imageUrl:"https://via.placeholder.com/800x400?text=Slide+3",altText:"슬라이드 3"}],l=e=>r.jsx(ke,{...e}),C=l.bind({});C.args={slides:d,width:400,height:400};C.storyName="기본 이미지 슬라이더";const h=l.bind({});h.args={slides:d,width:800,height:400,autoPlay:!0,autoPlayInterval:2e3};h.storyName="자동 재생 슬라이더";h.parameters={docs:{description:{story:`
**자동 재생 슬라이더**

\`autoPlay\`와 \`autoPlayInterval\` props를 사용하여 슬라이더를 자동으로 전환시킬 수 있습니다.

\`\`\`tsx
<ImageSlider
  slides={slides}
  width={800}
  height={400}
  autoPlay={true}
  autoPlayInterval={2000}
/>
\`\`\`
      `}}};const b=l.bind({});b.args={slides:d,width:800,height:400,loop:!0};b.storyName="무한 루프 슬라이더";b.parameters={docs:{description:{story:`
**무한 루프 슬라이더**

\`loop\` prop을 사용하여 슬라이더가 마지막 슬라이드 이후 첫 번째 슬라이드로 돌아가도록 설정할 수 있습니다.

\`\`\`tsx
<ImageSlider
  slides={slides}
  width={800}
  height={400}
  loop={true}
/>
\`\`\`
      `}}};const P=l.bind({});P.args={slides:d,width:600,height:300};P.storyName="커스텀 크기 슬라이더";const j=l.bind({});j.args={slides:d,width:800,height:400,showNavigation:!1,showPagination:!1};j.storyName="내비게이션 및 페이지네이션 숨김";const f=l.bind({});f.args={slides:d,width:800,height:400,objectFit:"contain"};f.storyName="object-fit: contain";f.parameters={docs:{description:{story:`
**이미지 객체 맞춤 설정**

\`objectFit\` prop을 사용하여 이미지의 크기 조절 방식을 지정할 수 있습니다.

\`\`\`tsx
<ImageSlider
  slides={slides}
  width={800}
  height={400}
  objectFit="contain"
/>
\`\`\`
      `}}};const N=l.bind({});N.args={slides:d,width:800,height:400,onSlideChange:e=>{console.log(`현재 슬라이드 인덱스: ${e}`)}};N.storyName="슬라이드 변경 이벤트";const y=l.bind({});y.args={slides:d,width:800,height:400,renderNavigation:({goToNextSlide:e,goToPrevSlide:o,currentIndex:n})=>r.jsxs("div",{style:{position:"absolute",top:"50%",width:"100%",display:"flex",justifyContent:"space-between",transform:"translateY(-50%)"},children:[r.jsx("button",{onClick:o,disabled:n===0,style:{background:"transparent",border:"none",fontSize:"2rem",cursor:"pointer"},"aria-label":"이전 슬라이드",children:"⬅️"}),r.jsx("button",{onClick:e,disabled:n===d.length-1,style:{background:"transparent",border:"none",fontSize:"2rem",cursor:"pointer"},"aria-label":"다음 슬라이드",children:"➡️"})]})};y.storyName="커스텀 내비게이션";y.parameters={docs:{description:{story:`
**커스텀 내비게이션**

\`renderNavigation\` prop을 사용하여 내비게이션을 커스텀할 수 있습니다.

\`\`\`tsx
<ImageSlider
  slides={slides}
  width={800}
  height={400}
  renderNavigation={({ goToNextSlide, goToPrevSlide, currentIndex }) => (
    <div>
      <button
        disabled={currentIndex === 0}
        onClick={goToPrevSlide}
        style={{ cursor: "pointer" }}
        aria-label="이전 슬라이드"
      >
        ⬅️
      </button>
      <button
        disabled={currentIndex === slides.length - 1}
        onClick={goToNextSlide}
        style={{ cursor: "pointer" }}
        aria-label="다음 슬라이드"
      >
        ➡️
      </button>
    </div>
  )}
/>
\`\`\`
      `}}};const v=l.bind({});v.args={slides:d,width:800,height:400,renderPagination:({slides:e,currentIndex:o,goToSlide:n})=>r.jsx("div",{style:{position:"absolute",bottom:"15px",width:"100%",display:"flex",justifyContent:"center"},children:e.map((S,i)=>r.jsx("button",{onClick:()=>n(i),style:{width:"12px",height:"12px",borderRadius:"50%",margin:"0 4px",background:i===o?"#717171":"#bbb",border:"none",cursor:"pointer"},"aria-label":`${i+1}번째 슬라이드로 이동`},i))})};v.storyName="커스텀 페이지네이션";v.parameters={docs:{description:{story:`
**커스텀 페이지네이션**

\`renderPagination\` prop을 사용하여 페이지네이션을 커스텀할 수 있습니다.

\`\`\`tsx
<ImageSlider
  slides={slides}
  width={800}
  height={400}
  renderPagination={({ slides, currentIndex, goToSlide }) => (
    <div>
      {slides.map((_, index) => (
        <button
          key={index}
          onClick={() => goToSlide(index)}
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            margin: "0 4px",
            background: index === currentIndex ? "#717171" : "#bbb",
            border: "none",
            cursor: "pointer",
          }}
          aria-label={\`\${index + 1}번째 슬라이드로 이동\`}
        />
      ))}
    </div>
  )}
/>
\`\`\`
      `}}};const x=l.bind({});x.args={slides:d,width:800,height:400,onClickImage:e=>alert(`슬라이드 ${e+1} 클릭됨`)};x.storyName="이미지 클릭 이벤트";x.parameters={docs:{description:{story:`
**이미지 클릭 이벤트**

\`onClickImage\` prop을 사용하여 슬라이드 이미지를 클릭했을 때의 동작을 정의할 수 있습니다.

\`\`\`tsx
<ImageSlider
  slides={slides}
  width={800}
  height={400}
  onClickImage={(index) => alert(\`슬라이드 \${index + 1} 클릭됨\`)}
/>
\`\`\`
      `}}};var G,H,J;C.parameters={...C.parameters,docs:{...(G=C.parameters)==null?void 0:G.docs,source:{originalSource:"args => <ImageSlider {...args} />",...(J=(H=C.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var Q,Z,ee;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:"args => <ImageSlider {...args} />",...(ee=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,re,ae;b.parameters={...b.parameters,docs:{...(te=b.parameters)==null?void 0:te.docs,source:{originalSource:"args => <ImageSlider {...args} />",...(ae=(re=b.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var oe,ie,se;P.parameters={...P.parameters,docs:{...(oe=P.parameters)==null?void 0:oe.docs,source:{originalSource:"args => <ImageSlider {...args} />",...(se=(ie=P.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var ne,de,le;j.parameters={...j.parameters,docs:{...(ne=j.parameters)==null?void 0:ne.docs,source:{originalSource:"args => <ImageSlider {...args} />",...(le=(de=j.parameters)==null?void 0:de.docs)==null?void 0:le.source}}};var ce,ue,pe;f.parameters={...f.parameters,docs:{...(ce=f.parameters)==null?void 0:ce.docs,source:{originalSource:"args => <ImageSlider {...args} />",...(pe=(ue=f.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var me,ge,he;N.parameters={...N.parameters,docs:{...(me=N.parameters)==null?void 0:me.docs,source:{originalSource:"args => <ImageSlider {...args} />",...(he=(ge=N.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var be,fe,ye;y.parameters={...y.parameters,docs:{...(be=y.parameters)==null?void 0:be.docs,source:{originalSource:"args => <ImageSlider {...args} />",...(ye=(fe=y.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var ve,xe,Se;v.parameters={...v.parameters,docs:{...(ve=v.parameters)==null?void 0:ve.docs,source:{originalSource:"args => <ImageSlider {...args} />",...(Se=(xe=v.parameters)==null?void 0:xe.docs)==null?void 0:Se.source}}};var we,Ie,Te;x.parameters={...x.parameters,docs:{...(we=x.parameters)==null?void 0:we.docs,source:{originalSource:"args => <ImageSlider {...args} />",...(Te=(Ie=x.parameters)==null?void 0:Ie.docs)==null?void 0:Te.source}}};const He=["Default","AutoPlay","Looping","CustomSize","WithoutNavigationAndPagination","ObjectFitContain","OnSlideChange","CustomNavigation","CustomPagination","ClickableSlides"];export{h as AutoPlay,x as ClickableSlides,y as CustomNavigation,v as CustomPagination,P as CustomSize,C as Default,b as Looping,f as ObjectFitContain,N as OnSlideChange,j as WithoutNavigationAndPagination,He as __namedExportsOrder,Ge as default};
