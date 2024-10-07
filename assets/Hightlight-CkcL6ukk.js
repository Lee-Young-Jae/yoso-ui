import{j as n}from"./jsx-runtime-CkxqCPlQ.js";import{d as p}from"./theme-BstcRpbz.js";import{g as u}from"./style-CuGJsH27.js";import{d as f}from"./styled-components.browser.esm-Dsr6U-en.js";const m=f.span`
  position: relative;
  display: inline-block;
  z-index: 1;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${({$width:e})=>e}%;
    height: ${({$height:e})=>e}%;
    background-color: ${({$color:e})=>e};
    border-radius: 1px;
    z-index: -1;
    transform: translate(
      ${({$offsetX:e})=>e}px,
      ${({$offsetY:e})=>e}px
    );
  }
`,c=({children:e,color:t,offsetX:s=0,offsetY:i=0,width:r=100,height:o=50,className:a,style:d,...l})=>n.jsx(m,{style:d,className:a,$color:typeof t=="string"?t:u(p.defaultColor,.3),$width:r,$height:o,$offsetX:s,$offsetY:i,...l,children:e});c.__docgenInfo={description:"",methods:[],displayName:"Highlight",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},color:{required:!1,tsType:{name:"string"},description:""},offsetY:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},offsetX:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"50",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:""}},composes:["HTMLAttributes"]};export{c as H};
