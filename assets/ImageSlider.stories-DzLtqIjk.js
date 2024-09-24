import{j as a}from"./jsx-runtime-CkxqCPlQ.js";import{r as o}from"./index-DJO9vBfz.js";import{d as p,l as X}from"./styled-components.browser.esm-Dsr6U-en.js";import{g as Le}from"./style-CuGJsH27.js";const Ee=p.div`
  position: relative;
  overflow: hidden;
  touch-action: pan-y; // 가로 슬라이드 방지
  user-select: none; // 드래그 방지
  -webkit-user-drag: none; // Safari 이미지 드래그 방지
  width: ${({$width:e})=>e}px;
  height: ${({$height:e})=>e}px;
`,ze=p.div`
  display: flex;
  transition: ${({$transition:e})=>e?"transform 0.3s ease-in-out":"none"};
  transform: translateX(${({$translateX:e})=>e}%);
  will-change: transform;
`,Fe=p.div`
  min-width: 100%;
  box-sizing: border-box;
`,Oe=p.img`
  width: ${({width:e})=>e}px;
  height: ${({height:e})=>e}px;
  display: block;
  opacity: ${({$isLoaded:e})=>e?1:0};
  transition: opacity 0.5s ease-in-out;
  pointer-events: none;
  object-fit: ${({$objectFit:e})=>e};
`,Ue=p.div`
  width: 100%;
  height: 10px;
  background-color: ${({theme:e})=>Le(e.colors.BLACK,.1)};
`,Be=p.div`
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  padding: 0 ${({theme:e})=>e.spacing.small};
  box-sizing: border-box;
`,Y=p.button`
  border: none;
  background: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  font-size: 22px;
  text-shadow: 0 0 1px ${({theme:e})=>e.colors.BLACK};
`,Me=p.div`
  display: flex;
  justify-content: center;
  flex: 1;
  position: absolute;
  bottom: 15px;
  width: 100%;
  text-align: center;
`,Ve=p.button`
  cursor: pointer;
  margin: 0 4px;
  padding: 0;
  border: none;
  display: inline-block;
  height: ${({theme:e})=>e.spacing.medium};

  ${({$isActive:e,theme:r})=>e?X`
          box-shadow: 0 0 1px ${r.colors.BLACK};
          background-color: ${r.colors.WHITE};
          border-radius: ${r.spacing.large};
          width: ${r.spacing.large};
        `:X`
          box-shadow: 0 0 1px ${r.colors.WHITE};
          background-color: ${r.colors.GRAY_600};
          border-radius: ${r.spacing.medium};
          width: ${r.spacing.medium};
        `}

  &:focus {
    outline: none;
  }
`,Ce=({slide:e,isActive:r,width:n,height:S,objectFit:s})=>{const $=o.useRef(null),[w,D]=o.useState(!1);return o.useEffect(()=>{const c=$.current;let u;return c&&("IntersectionObserver"in window?(u=new IntersectionObserver(A=>{A.forEach(R=>{R.isIntersecting&&(c.src=c.dataset.src,u.unobserve(c))})},{threshold:.1}),u.observe(c)):c.src=c.dataset.src),()=>{u&&u.disconnect()}},[]),a.jsxs(Fe,{"aria-hidden":!r,children:[!w&&a.jsx(Ue,{$width:n,$height:S}),a.jsx(Oe,{ref:$,"data-src":e.imageUrl,alt:e.altText,$isLoaded:w,width:n,height:S,$objectFit:s,onLoad:()=>D(!0)})]})};Ce.__docgenInfo={description:"",methods:[],displayName:"Slide",props:{slide:{required:!0,tsType:{name:"SlideItem"},description:""},isActive:{required:!0,tsType:{name:"boolean"},description:""},width:{required:!0,tsType:{name:"number"},description:""},height:{required:!0,tsType:{name:"number"},description:""},objectFit:{required:!0,tsType:{name:"union",raw:'"cover" | "contain" | "fill" | "none" | "scale-down"',elements:[{name:"literal",value:'"cover"'},{name:"literal",value:'"contain"'},{name:"literal",value:'"fill"'},{name:"literal",value:'"none"'},{name:"literal",value:'"scale-down"'}]},description:""}}};const je=({goToNextSlide:e,goToPrevSlide:r})=>a.jsxs(Be,{children:[a.jsx(Y,{onClick:r,"aria-label":"이전 슬라이드",children:"❮"}),a.jsx(Y,{onClick:e,"aria-label":"다음 슬라이드",children:"❯"})]});je.__docgenInfo={description:"",methods:[],displayName:"Navigation",props:{goToNextSlide:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},goToPrevSlide:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},currentIndex:{required:!0,tsType:{name:"number"},description:""}}};const Pe=({slides:e,currentIndex:r,goToSlide:n})=>a.jsx(Me,{children:e.map((S,s)=>a.jsx(Ve,{$isActive:s===r,onClick:()=>n(s),"aria-label":`${s+1}번째 슬라이드로 이동`},s))});Pe.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{slides:{required:!0,tsType:{name:"Array",elements:[{name:"SlideItem"}],raw:"SlideItem[]"},description:""},currentIndex:{required:!0,tsType:{name:"number"},description:""},goToSlide:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""}}};const Ne=({slides:e,width:r,height:n,objectFit:S="cover",autoPlay:s=!1,autoPlayInterval:$=3e3,loop:w=!1,showNavigation:D=!0,showPagination:c=!0,onSlideChange:u,onClickImage:A,renderNavigation:R,renderPagination:z})=>{const[i,ke]=o.useState(0),[I,F]=o.useState(!1),[qe,Ae]=o.useState(0),[O,L]=o.useState(0),[U,Re]=o.useState(0),[_e,B]=o.useState(!0),M=o.useRef(null),_=e.length,V=t=>t.type.includes("mouse")?t.clientX:t.touches[0].clientX,T=o.useCallback(t=>{let m=t;t<0?m=w?_-1:0:t>=_&&(m=w?0:_-1),ke(m),u&&u(m)},[w,_,u]),g=o.useCallback(()=>{T(i+1)},[i,T]),k=o.useCallback(()=>{T(i-1)},[i,T]);o.useEffect(()=>{let t;return s&&!I&&(t=setInterval(()=>{g()},$)),()=>{t&&clearInterval(t)}},[s,$,g,I]);const W=t=>{F(!0),B(!1),Ae(V(t)),Re(-i*100),t.preventDefault()},K=t=>{if(!I)return;let q=(V(t)-qe)/M.current.offsetWidth*100;q>100&&(q=100),q<-100&&(q=-100),L(U+q)},E=()=>{F(!1),B(!0);const t=O-U;t<-25?g():t>25?k():L(-i*100)};o.useEffect(()=>{I||L(-i*100)},[i,I]);const De=o.useCallback(t=>{t.key==="ArrowLeft"?k():t.key==="ArrowRight"&&g()},[k,g]);return a.jsxs(Ee,{ref:M,onTouchStart:W,onTouchMove:K,onTouchEnd:E,onMouseDown:W,onMouseMove:K,onMouseUp:E,onMouseLeave:()=>I&&E(),onDragStart:t=>t.preventDefault(),tabIndex:0,onKeyDown:De,"aria-roledescription":"carousel","aria-label":"이미지 슬라이더",onClick:()=>A&&A(i),$width:r,$height:n,children:[a.jsx(ze,{$translateX:O,$transition:_e,children:e.map((t,m)=>a.jsx(Ce,{slide:t,isActive:m===i,objectFit:S,width:r,height:n},m))}),R?R({goToNextSlide:g,goToPrevSlide:k,currentIndex:i}):D&&a.jsx(je,{currentIndex:i,goToNextSlide:g,goToPrevSlide:k}),z?z({slides:e,currentIndex:i,goToSlide:T}):c&&a.jsx(Pe,{slides:e,currentIndex:i,goToSlide:T})]})},$e=Ne;Ne.__docgenInfo={description:"",methods:[],displayName:"ImageSlider",props:{slides:{required:!0,tsType:{name:"Array",elements:[{name:"SlideItem"}],raw:"SlideItem[]"},description:""},width:{required:!0,tsType:{name:"number"},description:""},height:{required:!0,tsType:{name:"number"},description:""},objectFit:{required:!1,tsType:{name:"union",raw:'"cover" | "contain" | "fill" | "none" | "scale-down"',elements:[{name:"literal",value:'"cover"'},{name:"literal",value:'"contain"'},{name:"literal",value:'"fill"'},{name:"literal",value:'"none"'},{name:"literal",value:'"scale-down"'}]},description:"",defaultValue:{value:'"cover"',computed:!1}},autoPlay:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},autoPlayInterval:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3000",computed:!1}},loop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showNavigation:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showPagination:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onClickImage:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},onSlideChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(currentIndex: number) => void",signature:{arguments:[{type:{name:"number"},name:"currentIndex"}],return:{name:"void"}}},description:""},renderNavigation:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: NavigationProps) => ReactNode",signature:{arguments:[{type:{name:"NavigationProps"},name:"props"}],return:{name:"ReactNode"}}},description:""},renderPagination:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: PaginationProps) => ReactNode",signature:{arguments:[{type:{name:"PaginationProps"},name:"props"}],return:{name:"ReactNode"}}},description:""}}};const He={title:"Components/ImageSlider",component:$e,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}}},d=[{imageUrl:"https://via.placeholder.com/800x400?text=Slide+1",altText:"슬라이드 1"},{imageUrl:"https://via.placeholder.com/800x400?text=Slide+2",altText:"슬라이드 2"},{imageUrl:"https://via.placeholder.com/800x400?text=Slide+3",altText:"슬라이드 3"}],l=e=>a.jsx($e,{...e}),C=l.bind({});C.args={slides:d,width:400,height:400};C.storyName="기본 이미지 슬라이더";const h=l.bind({});h.args={slides:d,width:800,height:400,autoPlay:!0,autoPlayInterval:2e3};h.storyName="자동 재생 슬라이더";h.parameters={docs:{description:{story:`
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
      `}}};const j=l.bind({});j.args={slides:d,width:600,height:300};j.storyName="커스텀 크기 슬라이더";const P=l.bind({});P.args={slides:d,width:800,height:400,showNavigation:!1,showPagination:!1};P.storyName="내비게이션 및 페이지네이션 숨김";const f=l.bind({});f.args={slides:d,width:800,height:400,objectFit:"contain"};f.storyName="object-fit: contain";f.parameters={docs:{description:{story:`
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
      `}}};const N=l.bind({});N.args={slides:d,width:800,height:400,onSlideChange:e=>{console.log(`현재 슬라이드 인덱스: ${e}`)}};N.storyName="슬라이드 변경 이벤트";const y=l.bind({});y.args={slides:d,width:800,height:400,renderNavigation:({goToNextSlide:e,goToPrevSlide:r,currentIndex:n})=>a.jsxs("div",{style:{position:"absolute",top:"50%",width:"100%",display:"flex",justifyContent:"space-between",transform:"translateY(-50%)"},children:[a.jsx("button",{onClick:r,disabled:n===0,style:{background:"transparent",border:"none",fontSize:"2rem",cursor:"pointer"},"aria-label":"이전 슬라이드",children:"⬅️"}),a.jsx("button",{onClick:e,disabled:n===d.length-1,style:{background:"transparent",border:"none",fontSize:"2rem",cursor:"pointer"},"aria-label":"다음 슬라이드",children:"➡️"})]})};y.storyName="커스텀 내비게이션";y.parameters={docs:{description:{story:`
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
      `}}};const x=l.bind({});x.args={slides:d,width:800,height:400,renderPagination:({slides:e,currentIndex:r,goToSlide:n})=>a.jsx("div",{style:{position:"absolute",bottom:"15px",width:"100%",display:"flex",justifyContent:"center"},children:e.map((S,s)=>a.jsx("button",{onClick:()=>n(s),style:{width:"12px",height:"12px",borderRadius:"50%",margin:"0 4px",background:s===r?"#717171":"#bbb",border:"none",cursor:"pointer"},"aria-label":`${s+1}번째 슬라이드로 이동`},s))})};x.storyName="커스텀 페이지네이션";x.parameters={docs:{description:{story:`
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
      `}}};const v=l.bind({});v.args={slides:d,width:800,height:400,onClickImage:e=>alert(`슬라이드 ${e+1} 클릭됨`)};v.storyName="이미지 클릭 이벤트";v.parameters={docs:{description:{story:`
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
      `}}};var G,H,J;C.parameters={...C.parameters,docs:{...(G=C.parameters)==null?void 0:G.docs,source:{originalSource:"args => <ImageSlider {...args} />",...(J=(H=C.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var Q,Z,ee;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:"args => <ImageSlider {...args} />",...(ee=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,re,ae;b.parameters={...b.parameters,docs:{...(te=b.parameters)==null?void 0:te.docs,source:{originalSource:"args => <ImageSlider {...args} />",...(ae=(re=b.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var oe,se,ie;j.parameters={...j.parameters,docs:{...(oe=j.parameters)==null?void 0:oe.docs,source:{originalSource:"args => <ImageSlider {...args} />",...(ie=(se=j.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var ne,de,le;P.parameters={...P.parameters,docs:{...(ne=P.parameters)==null?void 0:ne.docs,source:{originalSource:"args => <ImageSlider {...args} />",...(le=(de=P.parameters)==null?void 0:de.docs)==null?void 0:le.source}}};var ce,ue,pe;f.parameters={...f.parameters,docs:{...(ce=f.parameters)==null?void 0:ce.docs,source:{originalSource:"args => <ImageSlider {...args} />",...(pe=(ue=f.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var me,ge,he;N.parameters={...N.parameters,docs:{...(me=N.parameters)==null?void 0:me.docs,source:{originalSource:"args => <ImageSlider {...args} />",...(he=(ge=N.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var be,fe,ye;y.parameters={...y.parameters,docs:{...(be=y.parameters)==null?void 0:be.docs,source:{originalSource:"args => <ImageSlider {...args} />",...(ye=(fe=y.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var xe,ve,Se;x.parameters={...x.parameters,docs:{...(xe=x.parameters)==null?void 0:xe.docs,source:{originalSource:"args => <ImageSlider {...args} />",...(Se=(ve=x.parameters)==null?void 0:ve.docs)==null?void 0:Se.source}}};var we,Ie,Te;v.parameters={...v.parameters,docs:{...(we=v.parameters)==null?void 0:we.docs,source:{originalSource:"args => <ImageSlider {...args} />",...(Te=(Ie=v.parameters)==null?void 0:Ie.docs)==null?void 0:Te.source}}};const Je=["Default","AutoPlay","Looping","CustomSize","WithoutNavigationAndPagination","ObjectFitContain","OnSlideChange","CustomNavigation","CustomPagination","ClickableSlides"];export{h as AutoPlay,v as ClickableSlides,y as CustomNavigation,x as CustomPagination,j as CustomSize,C as Default,b as Looping,f as ObjectFitContain,N as OnSlideChange,P as WithoutNavigationAndPagination,Je as __namedExportsOrder,He as default};
