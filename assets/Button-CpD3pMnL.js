import{j as b}from"./jsx-runtime-CkxqCPlQ.js";import{r as y}from"./index-DJO9vBfz.js";import{l as e,d as v}from"./styled-components.browser.esm-Dsr6U-en.js";import{d,l as x,g as z}from"./style-x6FuVGrZ.js";const w={xsmall:e`
    font-size: ${({theme:o})=>o.fontSizes.small};
    padding: ${({theme:o})=>`${o.spacing.small} ${o.spacing.medium}`};
  `,small:e`
    font-size: ${({theme:o})=>o.fontSizes.small};
    padding: ${({theme:o})=>`${o.spacing.medium} ${o.spacing.large}`};
  `,medium:e`
    font-size: ${({theme:o})=>o.fontSizes.medium};
    padding: ${({theme:o})=>`${o.spacing.medium} ${o.spacing.large}`};
  `,large:e`
    font-size: ${({theme:o})=>o.fontSizes.large};
    padding: ${({theme:o})=>`${o.spacing.large} ${o.spacing.xlarge}`};
  `},k={none:e`
    border-radius: 0;
  `,small:e`
    border-radius: ${({theme:o})=>o.borderRadius.small};
  `,medium:e`
    border-radius: ${({theme:o})=>o.borderRadius.medium};
  `,large:e`
    border-radius: ${({theme:o})=>o.borderRadius.large};
  `},C=v.button`
  // 공통 스타일
  display: inline-flex;
  gap: ${({theme:o})=>o.spacing.small};
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: inherit;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  border: 1px solid transparent;
  transition: ${({theme:o})=>o.transitions.fast};
  white-space: nowrap;

  // 크기
  ${({$fullWidth:o})=>o&&e`
      width: 100%;
    `}

  // 사이즈
  ${({$size:o})=>w[o||"medium"]}

  // 라디우스
  ${({$radius:o})=>k[o||"medium"]}

  // 색상
  ${({$variant:o,$outline:i,theme:r,$color:l})=>{const t={primary:r.colors.primary,secondary:r.colors.secondary,danger:r.colors.error,ghost:r.colors.secondary,default:r.defaultColor},a=l||t[o||"default"],s={primary:d(r.colors.primary,.1),secondary:d(r.colors.secondary,.1),danger:d(r.colors.error,.1),ghost:x(r.colors.secondary,.9),default:d(r.defaultColor,.1)}[o||"default"];return i?e`
        color: ${a};
        background-color: transparent;
        border-color: ${a};
        &:hover:not(:disabled) {
          color: white;
          background-color: ${a};
        }
      `:o==="ghost"?e`
        color: ${a};
        background-color: transparent;
        border-color: transparent;
        &:hover:not(:disabled) {
          background-color: ${r.colors.gray[100]};
        }
      `:e`
        color: white;
        background-color: ${a};
        border-color: ${a};
        &:hover:not(:disabled) {
          background-color: ${s};
          border-color: ${s};
        }
      `}}

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({theme:o})=>z(o.defaultColor,.3)};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,S=y.forwardRef(({children:o,onClick:i,variant:r="default",disabled:l=!1,fullWidth:t=!1,size:a="medium",radius:n="medium",outline:s=!1,leftIcon:u,rightIcon:c,color:f,className:p,style:m,...g},$)=>b.jsxs(C,{onClick:i,disabled:l,"aria-disabled":l,type:"button",$variant:r,$fullWidth:t,$size:a,$radius:n,$outline:s,$color:f,className:p,style:m,...g,ref:$,children:[u&&u,o,c&&c]}));S.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{defaultValue:{value:'"default"',computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},fullWidth:{defaultValue:{value:"false",computed:!1},required:!1},size:{defaultValue:{value:'"medium"',computed:!1},required:!1},radius:{defaultValue:{value:'"medium"',computed:!1},required:!1},outline:{defaultValue:{value:"false",computed:!1},required:!1}}};export{S as B};
