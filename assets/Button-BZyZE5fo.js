import{j as g}from"./jsx-runtime-CkxqCPlQ.js";import{r as b}from"./index-DJO9vBfz.js";import{l as e,d as v}from"./styled-components.browser.esm-Dsr6U-en.js";const x={xsmall:e`
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
    padding: ${({theme:o})=>`${o.spacing.large} ${o.spacing.xLarge}`};
  `},y={none:e`
    border-radius: 0;
  `,small:e`
    border-radius: ${({theme:o})=>o.borderRadius.small};
  `,medium:e`
    border-radius: ${({theme:o})=>o.borderRadius.medium};
  `,large:e`
    border-radius: ${({theme:o})=>o.borderRadius.large};
  `},R=v.button`
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
  ${({$size:o})=>x[o||"medium"]}

  // 라디우스
  ${({$radius:o})=>y[o||"medium"]}

  // 색상
  ${({$variant:o,$outline:d,theme:r,$color:l})=>{const i={primary:r.colors.BLUE_500,secondary:r.colors.GRAY_500,danger:r.colors.RED_500,ghost:r.colors.GRAY_600,default:r.defaultColor},a=l||i[o||"default"],s={primary:r.colors.BLUE_700,secondary:r.colors.GRAY_600,danger:r.colors.RED_700,ghost:r.colors.GRAY_300,default:r.defaultColor}[o||"default"];return d?e`
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
          background-color: ${r.colors.GRAY_100};
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
    box-shadow: 0 0 0 2px ${({theme:o})=>o.colors.BLUE_100};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,_=b.forwardRef(({children:o,onClick:d,variant:r="default",disabled:l=!1,fullWidth:i=!1,size:a="medium",radius:t="medium",outline:s=!1,leftIcon:n,rightIcon:u,color:c,className:f,style:p,...m},$)=>g.jsxs(R,{onClick:d,disabled:l,"aria-disabled":l,type:"button",$variant:r,$fullWidth:i,$size:a,$radius:t,$outline:s,$color:c,className:f,style:p,...m,ref:$,children:[n&&n,o,u&&u]}));_.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{defaultValue:{value:'"default"',computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},fullWidth:{defaultValue:{value:"false",computed:!1},required:!1},size:{defaultValue:{value:'"medium"',computed:!1},required:!1},radius:{defaultValue:{value:'"medium"',computed:!1},required:!1},outline:{defaultValue:{value:"false",computed:!1},required:!1}}};export{_ as B};
