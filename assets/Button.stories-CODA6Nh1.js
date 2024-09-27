import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{f as b}from"./index-C_FWhylE.js";import{B as v}from"./Button-BZyZE5fo.js";import{G as S}from"./iconBase-DNSKKw1X.js";import"./index-DJO9vBfz.js";import"./styled-components.browser.esm-Dsr6U-en.js";function l(n){return S({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M5.79166 2H1V4H4.2184L6.9872 16.6776H7V17H20V16.7519L22.1932 7.09095L22.5308 6H6.6552L6.08485 3.38852L5.79166 2ZM19.9869 8H7.092L8.62081 15H18.3978L19.9869 8Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M10 22C11.1046 22 12 21.1046 12 20C12 18.8954 11.1046 18 10 18C8.89543 18 8 18.8954 8 20C8 21.1046 8.89543 22 10 22Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M19 20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20C15 18.8954 15.8954 18 17 18C18.1046 18 19 18.8954 19 20Z",fill:"currentColor"},child:[]}]})(n)}function c(n){return S({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M15.3431 15.2426C17.6863 12.8995 17.6863 9.1005 15.3431 6.75736C13 4.41421 9.20101 4.41421 6.85786 6.75736C4.51472 9.1005 4.51472 12.8995 6.85786 15.2426C9.20101 17.5858 13 17.5858 15.3431 15.2426ZM16.7574 5.34315C19.6425 8.22833 19.8633 12.769 17.4195 15.9075C17.4348 15.921 17.4498 15.9351 17.4645 15.9497L21.7071 20.1924C22.0976 20.5829 22.0976 21.2161 21.7071 21.6066C21.3166 21.9971 20.6834 21.9971 20.2929 21.6066L16.0503 17.364C16.0356 17.3493 16.0215 17.3343 16.008 17.319C12.8695 19.7628 8.32883 19.542 5.44365 16.6569C2.31946 13.5327 2.31946 8.46734 5.44365 5.34315C8.56785 2.21895 13.6332 2.21895 16.7574 5.34315ZM10.1005 7H12.1005V10H15.1005V12H12.1005V15H10.1005V12H7.10052V10H10.1005V7Z",fill:"currentColor"},child:[]}]})(n)}const Z={title:"Components/Button",component:v,parameters:{tags:["autodocs"],docs:{description:{component:"`버튼` 컴포넌트의 기본 색상은 `theme`의 `defaultColor`를 수정하여 변경할 수 있습니다."}}},tags:["autodocs"],argTypes:{color:{control:"color",table:{category:"Style"}},children:{control:"text",description:"버튼의 텍스트 혹은 `ReactNode`를 전달합니다.",table:{category:"Content"}},disabled:{control:"boolean",table:{category:"State"}},fullWidth:{control:"boolean",table:{category:"Style"}},variant:{control:"radio",table:{category:"Style"}},size:{control:"radio",table:{category:"Style"}},rightIcon:{control:"select",options:["null","shoppingCart","zoomIn"],mapping:{null:null,shoppingCart:e.jsx(l,{}),zoomIn:e.jsx(c,{})},table:{category:"Content"}},leftIcon:{control:"select",options:["null","shoppingCart","zoomIn"],mapping:{null:null,shoppingCart:e.jsx(l,{}),zoomIn:e.jsx(c,{})},table:{category:"Content"}},outline:{table:{category:"Style"}},radius:{control:"radio",table:{category:"Style"}},onClick:{action:"clicked",table:{category:"Events"}}},args:{onClick:b()}},t={name:"Primary",args:{children:"Button",variant:"default",disabled:!1,fullWidth:!1,outline:!1,size:"medium",radius:"medium"}},o={args:{children:"Secondary Button",variant:"secondary"}},r={args:{children:"Large Button",size:"large"}},a={args:{children:"Left Icon Button",leftIcon:e.jsx(l,{}),outline:!0,variant:"danger"}};var s,i,d;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Primary",
  args: {
    children: "Button",
    variant: "default",
    disabled: false,
    fullWidth: false,
    outline: false,
    size: "medium",
    radius: "medium"
  }
}`,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var u,p,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: "Secondary Button",
    variant: "secondary"
  }
}`,...(g=(p=o.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var m,C,f;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: "Large Button",
    size: "large"
  }
}`,...(f=(C=r.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var h,y,L;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: "Left Icon Button",
    leftIcon: <CgShoppingCart />,
    outline: true,
    variant: "danger"
  }
}`,...(L=(y=a.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};const j=["Primary","Secondary","Large","LeftIcon"];export{r as Large,a as LeftIcon,t as Primary,o as Secondary,j as __namedExportsOrder,Z as default};
