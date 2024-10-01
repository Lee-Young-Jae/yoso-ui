import{j as a}from"./jsx-runtime-CkxqCPlQ.js";import{r as n}from"./index-DJO9vBfz.js";import{d as m,l as X}from"./styled-components.browser.esm-Dsr6U-en.js";import{g as Le}from"./style-CuGJsH27.js";const Ee=m.div`
  position: relative;
  overflow: hidden;
  touch-action: pan-y; // 가로 슬라이드 방지
  user-select: none; // 드래그 방지
  -webkit-user-drag: none; // Safari 이미지 드래그 방지
  width: ${({$width:e})=>typeof e=="number"?`${e}px`:e};
  height: ${({$height:e})=>typeof e=="number"?`${e}px`:e};
`,ze=m.div`
  display: flex;
  transition: ${({$transition:e})=>e?"transform 0.3s ease-in-out":"none"};
  transform: translateX(${({$translateX:e})=>e}%);
  will-change: transform;
`,Fe=m.div`
  min-width: 100%;
  box-sizing: border-box;
`,Oe=m.img`
  width: ${({width:e})=>typeof e=="number"?`${e}px`:e};
  height: ${({height:e})=>typeof e=="number"?`${e}px`:e};
  display: block;
  opacity: ${({$isLoaded:e})=>e?1:0};
  transition: opacity 0.5s ease-in-out;
  pointer-events: none;
  object-fit: ${({$objectFit:e})=>e};
`,Ue=m.div`
  width: 100%;
  height: 10px;
  background-color: ${({theme:e})=>Le(e.colors.BLACK,.1)};
`,Be=m.div`
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  padding: 0 ${({theme:e})=>e.spacing.small};
  box-sizing: border-box;
`,Y=m.button`
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
`,Me=m.div`
  display: flex;
  justify-content: center;
  flex: 1;
  position: absolute;
  bottom: 15px;
  width: 100%;
  text-align: center;
`,Ve=m.button`
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
`,Ce=({slide:e,isActive:r,width:i,height:N,objectFit:o})=>{const $=n.useRef(null),[S,D]=n.useState(!1);return n.useEffect(()=>{const c=$.current;let u;return c&&("IntersectionObserver"in window?(u=new IntersectionObserver(A=>{A.forEach(R=>{R.isIntersecting&&(c.src=c.dataset.src,u.unobserve(c))})},{threshold:.1}),u.observe(c)):c.src=c.dataset.src),()=>{u&&u.disconnect()}},[]),a.jsxs(Fe,{"aria-hidden":!r,children:[!S&&a.jsx(Ue,{}),a.jsx(Oe,{ref:$,"data-src":e.imageUrl,alt:e.altText,$isLoaded:S,width:i,height:N,$objectFit:o,onLoad:()=>D(!0)})]})};Ce.__docgenInfo={description:"",methods:[],displayName:"Slide",props:{slide:{required:!0,tsType:{name:"SlideItem"},description:""},isActive:{required:!0,tsType:{name:"boolean"},description:""},width:{required:!0,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},height:{required:!0,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},objectFit:{required:!0,tsType:{name:"union",raw:'"cover" | "contain" | "fill" | "none" | "scale-down"',elements:[{name:"literal",value:'"cover"'},{name:"literal",value:'"contain"'},{name:"literal",value:'"fill"'},{name:"literal",value:'"none"'},{name:"literal",value:'"scale-down"'}]},description:""}}};const Pe=({goToNextSlide:e,goToPrevSlide:r})=>a.jsxs(Be,{children:[a.jsx(Y,{onClick:r,"aria-label":"이전 슬라이드",children:"❮"}),a.jsx(Y,{onClick:e,"aria-label":"다음 슬라이드",children:"❯"})]});Pe.__docgenInfo={description:"",methods:[],displayName:"Navigation",props:{goToNextSlide:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},goToPrevSlide:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},currentIndex:{required:!0,tsType:{name:"number"},description:""}}};const je=({slides:e,currentIndex:r,goToSlide:i})=>a.jsx(Me,{children:e.map((N,o)=>a.jsx(Ve,{$isActive:o===r,onClick:()=>i(o),"aria-label":`${o+1}번째 슬라이드로 이동`},o))});je.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{slides:{required:!0,tsType:{name:"Array",elements:[{name:"SlideItem"}],raw:"SlideItem[]"},description:""},currentIndex:{required:!0,tsType:{name:"number"},description:""},goToSlide:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""}}};const Ne=({slides:e,width:r="100%",height:i,objectFit:N="cover",autoPlay:o=!1,autoPlayInterval:$=3e3,loop:S=!1,showNavigation:D=!0,showPagination:c=!0,onSlideChange:u,onClickImage:A,renderNavigation:R,renderPagination:z})=>{const[s,ke]=n.useState(0),[w,F]=n.useState(!1),[qe,Ae]=n.useState(0),[O,L]=n.useState(0),[U,Re]=n.useState(0),[_e,B]=n.useState(!0),M=n.useRef(null),_=e.length,V=t=>t.type.includes("mouse")?t.clientX:t.touches[0].clientX,I=n.useCallback(t=>{let p=t;t<0?p=S?_-1:0:t>=_&&(p=S?0:_-1),ke(p),u&&u(p)},[S,_,u]),g=n.useCallback(()=>{I(s+1)},[s,I]),k=n.useCallback(()=>{I(s-1)},[s,I]);n.useEffect(()=>{let t;return o&&!w&&(t=setInterval(()=>{g()},$)),()=>{t&&clearInterval(t)}},[o,$,g,w]);const W=t=>{F(!0),B(!1),Ae(V(t)),Re(-s*100),t.preventDefault()},K=t=>{if(!w)return;let q=(V(t)-qe)/M.current.offsetWidth*100;q>100&&(q=100),q<-100&&(q=-100),L(U+q)},E=()=>{F(!1),B(!0);const t=O-U;t<-25?g():t>25?k():L(-s*100)};n.useEffect(()=>{w||L(-s*100)},[s,w]);const De=n.useCallback(t=>{t.key==="ArrowLeft"?k():t.key==="ArrowRight"&&g()},[k,g]);return a.jsxs(Ee,{ref:M,onTouchStart:W,onTouchMove:K,onTouchEnd:E,onMouseDown:W,onMouseMove:K,onMouseUp:E,onMouseLeave:()=>w&&E(),onDragStart:t=>t.preventDefault(),tabIndex:0,onKeyDown:De,"aria-roledescription":"carousel","aria-label":"이미지 슬라이더",onClick:()=>A&&A(s),$width:r,$height:i,children:[a.jsx(ze,{$translateX:O,$transition:_e,children:e.map((t,p)=>a.jsx(Ce,{slide:t,isActive:p===s,objectFit:N,width:r,height:i},p))}),R?R({goToNextSlide:g,goToPrevSlide:k,currentIndex:s}):D&&a.jsx(Pe,{currentIndex:s,goToNextSlide:g,goToPrevSlide:k}),z?z({slides:e,currentIndex:s,goToSlide:I}):c&&a.jsx(je,{slides:e,currentIndex:s,goToSlide:I})]})},$e=Ne;Ne.__docgenInfo={description:"",methods:[],displayName:"ImageSlider",props:{slides:{required:!0,tsType:{name:"Array",elements:[{name:"SlideItem"}],raw:"SlideItem[]"},description:""},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:'"100%"',computed:!1}},height:{required:!0,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},objectFit:{required:!1,tsType:{name:"union",raw:'"cover" | "contain" | "fill" | "none" | "scale-down"',elements:[{name:"literal",value:'"cover"'},{name:"literal",value:'"contain"'},{name:"literal",value:'"fill"'},{name:"literal",value:'"none"'},{name:"literal",value:'"scale-down"'}]},description:"",defaultValue:{value:'"cover"',computed:!1}},autoPlay:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},autoPlayInterval:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3000",computed:!1}},loop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showNavigation:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showPagination:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onClickImage:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},onSlideChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(currentIndex: number) => void",signature:{arguments:[{type:{name:"number"},name:"currentIndex"}],return:{name:"void"}}},description:""},renderNavigation:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: NavigationProps) => ReactNode",signature:{arguments:[{type:{name:"NavigationProps"},name:"props"}],return:{name:"ReactNode"}}},description:""},renderPagination:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: PaginationProps) => ReactNode",signature:{arguments:[{type:{name:"PaginationProps"},name:"props"}],return:{name:"ReactNode"}}},description:""}}};const He={title:"Components/ImageSlider",component:$e,tags:["autodocs"],argTypes:{width:{control:{type:"number"},description:"슬라이더의 너비를 지정합니다. `string|number` 타입으로 지정할 수 있습니다."},height:{control:{type:"number"}},autoPlayInterval:{control:{type:"number"}}},parameters:{docs:{description:{component:`
\`ImageSlider\` 컴포넌트는 이미지 슬라이더를 구현하기 위한 컴포넌트로, 다음과 같은 기능을 제공합니다:

- **드래그 및 터치 지원**: 마우스 드래그 및 터치로 슬라이드를 이동할 수 있습니다.
- **자동 재생**: 슬라이드를 자동으로 전환할 수 있습니다.
- **무한 루프**: 마지막 슬라이드 이후에 처음 슬라이드로 이동합니다.
- **이미지 Lazy Loading**: Intersection Observer API를 사용하여 이미지 로딩을 최적화합니다.
- **접근성 준수**: 키보드 내비게이션 및 ARIA 속성을 사용하여 접근성을 향상시킵니다.

**사용법**

\`\`\`tsx
import { ImageSlider } from 'yoso-ui';

const slides = [
  { imageUrl: 'https://example.com/image1.jpg', altText: '이미지 1' },
  { imageUrl: 'https://example.com/image2.jpg', altText: '이미지 2' },
  { imageUrl: 'https://example.com/image3.jpg', altText: '이미지 3' },
];

<ImageSlider
  slides={slides}
  width={"100%"}
  height={400}
  autoPlay={true}
  loop={true}
/>;
\`\`\`
        `}}}},l=[{imageUrl:"https://via.placeholder.com/800x400?text=Slide+1",altText:"슬라이드 1"},{imageUrl:"https://via.placeholder.com/800x400?text=Slide+2",altText:"슬라이드 2"},{imageUrl:"https://via.placeholder.com/800x400?text=Slide+3",altText:"슬라이드 3"}],d=e=>a.jsx($e,{...e}),T=d.bind({});T.args={slides:l,width:"100%",height:400};T.storyName="기본 이미지 슬라이더";const b=d.bind({});b.args={slides:l,width:800,height:400,autoPlay:!0,autoPlayInterval:2e3};b.storyName="자동 재생 슬라이더";b.parameters={docs:{description:{story:`
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
      `}}};const f=d.bind({});f.args={slides:l,width:800,height:400,loop:!0};f.storyName="무한 루프 슬라이더";f.parameters={docs:{description:{story:`
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
      `}}};const C=d.bind({});C.args={slides:l,width:600,height:300};C.storyName="커스텀 크기 슬라이더";const P=d.bind({});P.args={slides:l,width:800,height:400,showNavigation:!1,showPagination:!1};P.storyName="내비게이션 및 페이지네이션 숨김";const h=d.bind({});h.args={slides:l,width:800,height:400,objectFit:"contain"};h.storyName="object-fit: contain";h.parameters={docs:{description:{story:`
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
      `}}};const j=d.bind({});j.args={slides:l,width:800,height:400,onSlideChange:e=>{console.log(`현재 슬라이드 인덱스: ${e}`)}};j.storyName="슬라이드 변경 이벤트";const y=d.bind({});y.args={slides:l,width:800,height:400,renderNavigation:({goToNextSlide:e,goToPrevSlide:r,currentIndex:i})=>a.jsxs("div",{style:{position:"absolute",top:"50%",width:"100%",display:"flex",justifyContent:"space-between",transform:"translateY(-50%)"},children:[a.jsx("button",{onClick:r,disabled:i===0,style:{background:"transparent",border:"none",fontSize:"2rem",cursor:"pointer"},"aria-label":"이전 슬라이드",children:"⬅️"}),a.jsx("button",{onClick:e,disabled:i===l.length-1,style:{background:"transparent",border:"none",fontSize:"2rem",cursor:"pointer"},"aria-label":"다음 슬라이드",children:"➡️"})]})};y.storyName="커스텀 내비게이션";y.parameters={docs:{description:{story:`
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
      `}}};const x=d.bind({});x.args={slides:l,width:800,height:400,renderPagination:({slides:e,currentIndex:r,goToSlide:i})=>a.jsx("div",{style:{position:"absolute",bottom:"15px",width:"100%",display:"flex",justifyContent:"center"},children:e.map((N,o)=>a.jsx("button",{onClick:()=>i(o),style:{width:"12px",height:"12px",borderRadius:"50%",margin:"0 4px",background:o===r?"#717171":"#bbb",border:"none",cursor:"pointer"},"aria-label":`${o+1}번째 슬라이드로 이동`},o))})};x.storyName="커스텀 페이지네이션";x.parameters={docs:{description:{story:`
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
      `}}};const v=d.bind({});v.args={slides:l,width:800,height:400,onClickImage:e=>alert(`슬라이드 ${e+1} 클릭됨`)};v.storyName="이미지 클릭 이벤트";v.parameters={docs:{description:{story:`
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
      `}}};var G,H,J;T.parameters={...T.parameters,docs:{...(G=T.parameters)==null?void 0:G.docs,source:{originalSource:"args => <ImageSlider {...args} />",...(J=(H=T.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var Q,Z,ee;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:"args => <ImageSlider {...args} />",...(ee=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,re,ae;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:"args => <ImageSlider {...args} />",...(ae=(re=f.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var ne,oe,se;C.parameters={...C.parameters,docs:{...(ne=C.parameters)==null?void 0:ne.docs,source:{originalSource:"args => <ImageSlider {...args} />",...(se=(oe=C.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ie,le,de;P.parameters={...P.parameters,docs:{...(ie=P.parameters)==null?void 0:ie.docs,source:{originalSource:"args => <ImageSlider {...args} />",...(de=(le=P.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ce,ue,me;h.parameters={...h.parameters,docs:{...(ce=h.parameters)==null?void 0:ce.docs,source:{originalSource:"args => <ImageSlider {...args} />",...(me=(ue=h.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var pe,ge,be;j.parameters={...j.parameters,docs:{...(pe=j.parameters)==null?void 0:pe.docs,source:{originalSource:"args => <ImageSlider {...args} />",...(be=(ge=j.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var fe,he,ye;y.parameters={...y.parameters,docs:{...(fe=y.parameters)==null?void 0:fe.docs,source:{originalSource:"args => <ImageSlider {...args} />",...(ye=(he=y.parameters)==null?void 0:he.docs)==null?void 0:ye.source}}};var xe,ve,Se;x.parameters={...x.parameters,docs:{...(xe=x.parameters)==null?void 0:xe.docs,source:{originalSource:"args => <ImageSlider {...args} />",...(Se=(ve=x.parameters)==null?void 0:ve.docs)==null?void 0:Se.source}}};var we,Ie,Te;v.parameters={...v.parameters,docs:{...(we=v.parameters)==null?void 0:we.docs,source:{originalSource:"args => <ImageSlider {...args} />",...(Te=(Ie=v.parameters)==null?void 0:Ie.docs)==null?void 0:Te.source}}};const Je=["Default","AutoPlay","Looping","CustomSize","WithoutNavigationAndPagination","ObjectFitContain","OnSlideChange","CustomNavigation","CustomPagination","ClickableSlides"];export{b as AutoPlay,v as ClickableSlides,y as CustomNavigation,x as CustomPagination,C as CustomSize,T as Default,f as Looping,h as ObjectFitContain,j as OnSlideChange,P as WithoutNavigationAndPagination,Je as __namedExportsOrder,He as default};
