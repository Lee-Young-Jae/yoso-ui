import{j as p}from"./jsx-runtime-CkxqCPlQ.js";import{d as f,l as r}from"./styled-components.browser.esm-Dsr6U-en.js";const g=f.button`
  // 공통 스타일
  display: inline-flex;
  gap: ${({theme:e})=>e.spacing.small};
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: inherit;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  border: 1px solid transparent;
  transition: ${({theme:e})=>e.transitions.fast};
  white-space: nowrap;

  // 크기
  ${({$fullWidth:e})=>e&&r`
      width: 100%;
    `}

  // 사이즈
  ${({$size:e,theme:a})=>{switch(e){case"xsmall":return r`
          font-size: ${a.fontSizes.small};
          padding: ${a.spacing.small} ${a.spacing.medium};
        `;case"small":return r`
          font-size: ${a.fontSizes.small};
          padding: ${a.spacing.medium} ${a.spacing.large};
        `;case"large":return r`
          font-size: ${a.fontSizes.large};
          padding: ${a.spacing.large} ${a.spacing.xLarge};
        `;default:return r`
          font-size: ${a.fontSizes.medium};
          padding: ${a.spacing.medium} ${a.spacing.large};
        `}}}

  // 라디우스
  ${({$radius:e,theme:a})=>{switch(e){case"none":return r`
          border-radius: 0;
        `;case"small":return r`
          border-radius: ${a.borderRadius.small};
        `;case"large":return r`
          border-radius: ${a.borderRadius.large};
        `;default:return r`
          border-radius: ${a.borderRadius.medium};
        `}}}

  // 색상
  ${({$variant:e,$outline:a,theme:o,$color:s})=>{const l=(n=>{if(s)return s;switch(n){case"secondary":return o.colors.GRAY_500;case"danger":return o.colors.RED_500;case"ghost":case"default":return o.defaultColor;default:return o.defaultColor}})(e);return a?r`
        color: ${l};
        background-color: transparent;
        border-color: ${l};
        &:hover:not(:disabled) {
          color: white;
          background-color: ${l};
        }
      `:e==="ghost"?r`
        color: ${l};
        background-color: transparent;
        border-color: transparent;
        &:hover:not(:disabled) {
          background-color: ${o.colors.GRAY_100};
        }
      `:r`
        color: white;
        background-color: ${l};
        border-color: ${l};
        &:hover:not(:disabled) {
          background-color: ${o.colors[`${e==null?void 0:e.toUpperCase()}_700`]||l};
          border-color: ${o.colors[`${e==null?void 0:e.toUpperCase()}_700`]||l};
        }
      `}}

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.BLUE_100};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,b=({children:e,onClick:a,variant:o="default",disabled:s=!1,fullWidth:t=!1,size:l="medium",radius:n="medium",outline:u=!1,leftIcon:i,rightIcon:d,color:c,...m})=>p.jsxs(g,{onClick:a,$variant:o,disabled:s,$fullWidth:t,$size:l,$radius:n,$outline:u,$color:c,...m,children:[i&&i,e,d&&d]});b.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "ghost" | "danger" | "default"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"ghost"'},{name:"literal",value:'"danger"'},{name:"literal",value:'"default"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"xsmall" | "small" | "medium" | "large"',elements:[{name:"literal",value:'"xsmall"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},radius:{required:!1,tsType:{name:"union",raw:'"none" | "small" | "medium" | "large"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},outline:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leftIcon:{required:!1,tsType:{name:"ReactElement"},description:""},rightIcon:{required:!1,tsType:{name:"ReactElement"},description:""},color:{required:!1,tsType:{name:"string"},description:""}}};export{b as B};
