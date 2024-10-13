import{j as a}from"./jsx-runtime-CkxqCPlQ.js";import{r as s}from"./index-DJO9vBfz.js";import{d as m,l as W}from"./styled-components.browser.esm-Dsr6U-en.js";import{g as Re}from"./style-x6FuVGrZ.js";const ze=m.div`
  position: relative;
  overflow: hidden;
  touch-action: pan-y; // 가로 슬라이드 방지
  user-select: none; // 드래그 방지
  -webkit-user-drag: none; // Safari 이미지 드래그 방지
  width: ${({$width:e})=>typeof e=="number"?`${e}px`:e};
  height: ${({$height:e})=>typeof e=="number"?`${e}px`:e};
`,Ee=m.div`
  display: flex;
  transition: ${({$transition:e})=>e?"transform 0.3s ease-in-out":"none"};
  transform: translateX(${({$translateX:e})=>e}%);
  will-change: transform;
`,Le=m.div`
  min-width: 100%;
  box-sizing: border-box;
`,Me=m.img`
  width: ${({width:e})=>typeof e=="number"?`${e}px`:e};
  height: ${({height:e})=>typeof e=="number"?`${e}px`:e};
  display: block;
  opacity: ${({$isLoaded:e})=>e?1:0};
  transition: opacity 0.5s ease-in-out;
  pointer-events: none;
  object-fit: ${({$objectFit:e})=>e};
`,Oe=m.div`
  width: 100%;
  height: 10px;
  background-color: ${({theme:e})=>Re(e.colors.black,.1)};
`,Ue=m.div`
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  padding: 0 ${({theme:e})=>e.spacing.large};
  box-sizing: border-box;
`,K=m.button`
  border: none;
  background: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  font-size: 32px;
`,Ve=m.div`
  display: flex;
  justify-content: center;
  flex: 1;
  position: absolute;
  bottom: 15px;
  width: 100%;
  text-align: center;
`,Xe=m.button`
  cursor: pointer;
  margin: 0 4px;
  padding: 0;
  border: none;
  display: inline-block;
  height: ${({theme:e})=>e.spacing.medium};

  ${({$isActive:e,theme:r})=>e?W`
          box-shadow: 0 0 1px ${r.colors.black};
          background-color: ${r.colors.white};
          border-radius: ${r.spacing.large};
          width: ${r.spacing.large};
        `:W`
          box-shadow: 0 0 1px ${r.colors.white};
          background-color: ${r.colors.gray[600]};
          border-radius: ${r.spacing.medium};
          width: ${r.spacing.medium};
        `}

  &:focus {
    outline: none;
  }
`,je=({slide:e,isActive:r,width:i,height:k,objectFit:n})=>{const N=s.useRef(null),[w,D]=s.useState(!1);return s.useEffect(()=>{const c=N.current;let u;return c&&("IntersectionObserver"in window?(u=new IntersectionObserver(F=>{F.forEach(_=>{_.isIntersecting&&(c.src=c.dataset.src,u.unobserve(c))})},{threshold:.1}),u.observe(c)):c.src=c.dataset.src),()=>{u&&u.disconnect()}},[]),a.jsxs(Le,{"aria-hidden":!r,children:[!w&&a.jsx(Oe,{}),a.jsx(Me,{ref:N,"data-src":e.imageUrl,alt:e.altText,$isLoaded:w,width:i,height:k,$objectFit:n,onLoad:()=>D(!0)})]})};je.__docgenInfo={description:"",methods:[],displayName:"Slide",props:{slide:{required:!0,tsType:{name:"SlideItem"},description:""},isActive:{required:!0,tsType:{name:"boolean"},description:""},width:{required:!0,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},height:{required:!0,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},objectFit:{required:!0,tsType:{name:"union",raw:'"cover" | "contain" | "fill" | "none" | "scale-down"',elements:[{name:"literal",value:'"cover"'},{name:"literal",value:'"contain"'},{name:"literal",value:'"fill"'},{name:"literal",value:'"none"'},{name:"literal",value:'"scale-down"'}]},description:""}}};const Pe=({goToNextSlide:e,goToPrevSlide:r})=>a.jsxs(Ue,{children:[a.jsx(K,{onClick:r,"aria-label":"이전 슬라이드",children:"❮"}),a.jsx(K,{onClick:e,"aria-label":"다음 슬라이드",children:"❯"})]});Pe.__docgenInfo={description:"",methods:[],displayName:"Navigation",props:{goToNextSlide:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},goToPrevSlide:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},currentIndex:{required:!0,tsType:{name:"number"},description:""}}};const Ce=({slides:e,currentIndex:r,goToSlide:i})=>a.jsx(Ve,{children:e.map((k,n)=>a.jsx(Xe,{$isActive:n===r,onClick:()=>i(n),"aria-label":`${n+1}번째 슬라이드로 이동`},n))});Ce.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{slides:{required:!0,tsType:{name:"Array",elements:[{name:"SlideItem"}],raw:"SlideItem[]"},description:""},currentIndex:{required:!0,tsType:{name:"number"},description:""},goToSlide:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""}}};const ke=({slides:e,width:r="100%",height:i,objectFit:k="cover",autoPlay:n=!1,autoPlayInterval:N=3e3,loop:w=!1,showNavigation:D=!0,showPagination:c=!0,onSlideChange:u,onClickImage:F,renderNavigation:_,renderPagination:E})=>{const[o,$e]=s.useState(0),[S,L]=s.useState(!1),[qe,Fe]=s.useState(0),[M,R]=s.useState(0),[O,_e]=s.useState(0),[Ae,U]=s.useState(!0),V=s.useRef(null),A=e.length,X=t=>t.type.includes("mouse")?t.clientX:t.touches[0].clientX,I=s.useCallback(t=>{let p=t;t<0?p=w?A-1:0:t>=A&&(p=w?0:A-1),$e(p),u&&u(p)},[w,A,u]),g=s.useCallback(()=>{I(o+1)},[o,I]),$=s.useCallback(()=>{I(o-1)},[o,I]);s.useEffect(()=>{let t;return n&&!S&&(t=setInterval(()=>{g()},N)),()=>{t&&clearInterval(t)}},[n,N,g,S]);const B=t=>{L(!0),U(!1),Fe(X(t)),_e(-o*100),t.preventDefault()},G=t=>{if(!S)return;let q=(X(t)-qe)/V.current.offsetWidth*100;q>100&&(q=100),q<-100&&(q=-100),R(O+q)},z=()=>{L(!1),U(!0);const t=M-O;t<-25?g():t>25?$():R(-o*100)};s.useEffect(()=>{S||R(-o*100)},[o,S]);const De=s.useCallback(t=>{t.key==="ArrowLeft"?$():t.key==="ArrowRight"&&g()},[$,g]);return a.jsxs(ze,{ref:V,onTouchStart:B,onTouchMove:G,onTouchEnd:z,onMouseDown:B,onMouseMove:G,onMouseUp:z,onMouseLeave:()=>S&&z(),onDragStart:t=>t.preventDefault(),tabIndex:0,onKeyDown:De,"aria-roledescription":"carousel","aria-label":"이미지 슬라이더",onClick:()=>F&&F(o),$width:r,$height:i,children:[a.jsx(Ee,{$translateX:M,$transition:Ae,children:e.map((t,p)=>a.jsx(je,{slide:t,isActive:p===o,objectFit:k,width:r,height:i},p))}),_?_({goToNextSlide:g,goToPrevSlide:$,currentIndex:o}):D&&a.jsx(Pe,{currentIndex:o,goToNextSlide:g,goToPrevSlide:$}),E?E({slides:e,currentIndex:o,goToSlide:I}):c&&a.jsx(Ce,{slides:e,currentIndex:o,goToSlide:I})]})},Ne=ke;ke.__docgenInfo={description:"",methods:[],displayName:"ImageSlider",props:{slides:{required:!0,tsType:{name:"Array",elements:[{name:"SlideItem"}],raw:"SlideItem[]"},description:""},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:'"100%"',computed:!1}},height:{required:!0,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},objectFit:{required:!1,tsType:{name:"union",raw:'"cover" | "contain" | "fill" | "none" | "scale-down"',elements:[{name:"literal",value:'"cover"'},{name:"literal",value:'"contain"'},{name:"literal",value:'"fill"'},{name:"literal",value:'"none"'},{name:"literal",value:'"scale-down"'}]},description:"",defaultValue:{value:'"cover"',computed:!1}},autoPlay:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},autoPlayInterval:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3000",computed:!1}},loop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showNavigation:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showPagination:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onClickImage:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},onSlideChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(currentIndex: number) => void",signature:{arguments:[{type:{name:"number"},name:"currentIndex"}],return:{name:"void"}}},description:""},renderNavigation:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: NavigationProps) => ReactNode",signature:{arguments:[{type:{name:"NavigationProps"},name:"props"}],return:{name:"ReactNode"}}},description:""},renderPagination:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: PaginationProps) => ReactNode",signature:{arguments:[{type:{name:"PaginationProps"},name:"props"}],return:{name:"ReactNode"}}},description:""}}};const He={title:"Components/ImageSlider",component:Ne,tags:["autodocs"],argTypes:{width:{control:{type:"number"},description:"슬라이더의 너비를 지정합니다. `string|number` 타입으로 지정할 수 있습니다."},height:{control:{type:"number"}},autoPlayInterval:{control:{type:"number"}}},parameters:{docs:{description:{component:`
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
        `}}}},d=[{imageUrl:"https://young-jae.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2%2Fc02c9244-5e6b-4b53-82f5-20a419cded50%2FGeometric_Serenity_1.png?table=block&id=11d81b43-34ec-80ba-a8e4-d60226ad4909&spaceId=4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2&width=1420&userId=&cache=v2",altText:"슬라이드 1"},{imageUrl:"https://young-jae.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2%2F4fe0037f-e795-4831-9f7e-1e5ff74ef273%2FTranquil_Geometrics_in_Pastels_1.png?table=block&id=11d81b43-34ec-8035-984b-e316ac2a33ca&spaceId=4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2&width=1420&userId=&cache=v2",altText:"슬라이드 2"},{imageUrl:"https://young-jae.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2%2F57260d49-052c-4da9-ad98-a7f9ca8432f4%2FMinimalist_Geometric_Composition_1.png?table=block&id=11d81b43-34ec-8014-baa0-c79cfd1f7581&spaceId=4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2&width=1420&userId=&cache=v2",altText:"슬라이드 3"}],l=e=>a.jsx(Ne,{...e}),T=l.bind({});T.args={slides:d,width:"100%",height:400};T.storyName="기본 이미지 슬라이더";const b=l.bind({});b.args={slides:d,width:800,height:400,autoPlay:!0,autoPlayInterval:2e3};b.storyName="자동 재생 슬라이더";b.parameters={docs:{description:{story:`
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
      `}}};const f=l.bind({});f.args={slides:d,width:800,height:400,loop:!0};f.storyName="무한 루프 슬라이더";f.parameters={docs:{description:{story:`
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
      `}}};const j=l.bind({});j.args={slides:d,width:600,height:300};j.storyName="커스텀 크기 슬라이더";const P=l.bind({});P.args={slides:d,width:800,height:400,showNavigation:!1,showPagination:!1};P.storyName="내비게이션 및 페이지네이션 숨김";const h=l.bind({});h.args={slides:d,width:800,height:400,objectFit:"contain"};h.storyName="object-fit: contain";h.parameters={docs:{description:{story:`
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
      `}}};const C=l.bind({});C.args={slides:d,width:800,height:400,onSlideChange:e=>{console.log(`현재 슬라이드 인덱스: ${e}`)}};C.storyName="슬라이드 변경 이벤트";const y=l.bind({});y.args={slides:d,width:800,height:400,renderNavigation:({goToNextSlide:e,goToPrevSlide:r,currentIndex:i})=>a.jsxs("div",{style:{position:"absolute",top:"50%",width:"100%",display:"flex",justifyContent:"space-between",transform:"translateY(-50%)"},children:[a.jsx("button",{onClick:r,disabled:i===0,style:{background:"transparent",border:"none",fontSize:"2rem",cursor:"pointer"},"aria-label":"이전 슬라이드",children:"⬅️"}),a.jsx("button",{onClick:e,disabled:i===d.length-1,style:{background:"transparent",border:"none",fontSize:"2rem",cursor:"pointer"},"aria-label":"다음 슬라이드",children:"➡️"})]})};y.storyName="커스텀 내비게이션";y.parameters={docs:{description:{story:`
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
      `}}};const v=l.bind({});v.args={slides:d,width:800,height:400,renderPagination:({slides:e,currentIndex:r,goToSlide:i})=>a.jsx("div",{style:{position:"absolute",bottom:"15px",width:"100%",display:"flex",justifyContent:"center"},children:e.map((k,n)=>a.jsx("button",{onClick:()=>i(n),style:{width:"12px",height:"12px",borderRadius:"50%",margin:"0 4px",background:n===r?"#717171":"#bbb",border:"none",cursor:"pointer"},"aria-label":`${n+1}번째 슬라이드로 이동`},n))})};v.storyName="커스텀 페이지네이션";v.parameters={docs:{description:{story:`
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
      `}}};var Y,H,J;T.parameters={...T.parameters,docs:{...(Y=T.parameters)==null?void 0:Y.docs,source:{originalSource:"args => <ImageSlider {...args} />",...(J=(H=T.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var Q,Z,ee;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:"args => <ImageSlider {...args} />",...(ee=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,re,ae;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:"args => <ImageSlider {...args} />",...(ae=(re=f.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var se,ne,oe;j.parameters={...j.parameters,docs:{...(se=j.parameters)==null?void 0:se.docs,source:{originalSource:"args => <ImageSlider {...args} />",...(oe=(ne=j.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var ie,de,le;P.parameters={...P.parameters,docs:{...(ie=P.parameters)==null?void 0:ie.docs,source:{originalSource:"args => <ImageSlider {...args} />",...(le=(de=P.parameters)==null?void 0:de.docs)==null?void 0:le.source}}};var ce,ue,me;h.parameters={...h.parameters,docs:{...(ce=h.parameters)==null?void 0:ce.docs,source:{originalSource:"args => <ImageSlider {...args} />",...(me=(ue=h.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var pe,ge,be;C.parameters={...C.parameters,docs:{...(pe=C.parameters)==null?void 0:pe.docs,source:{originalSource:"args => <ImageSlider {...args} />",...(be=(ge=C.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var fe,he,ye;y.parameters={...y.parameters,docs:{...(fe=y.parameters)==null?void 0:fe.docs,source:{originalSource:"args => <ImageSlider {...args} />",...(ye=(he=y.parameters)==null?void 0:he.docs)==null?void 0:ye.source}}};var ve,xe,we;v.parameters={...v.parameters,docs:{...(ve=v.parameters)==null?void 0:ve.docs,source:{originalSource:"args => <ImageSlider {...args} />",...(we=(xe=v.parameters)==null?void 0:xe.docs)==null?void 0:we.source}}};var Se,Ie,Te;x.parameters={...x.parameters,docs:{...(Se=x.parameters)==null?void 0:Se.docs,source:{originalSource:"args => <ImageSlider {...args} />",...(Te=(Ie=x.parameters)==null?void 0:Ie.docs)==null?void 0:Te.source}}};const Je=["Default","AutoPlay","Looping","CustomSize","WithoutNavigationAndPagination","ObjectFitContain","OnSlideChange","CustomNavigation","CustomPagination","ClickableSlides"];export{b as AutoPlay,x as ClickableSlides,y as CustomNavigation,v as CustomPagination,j as CustomSize,T as Default,f as Looping,h as ObjectFitContain,C as OnSlideChange,P as WithoutNavigationAndPagination,Je as __namedExportsOrder,He as default};
