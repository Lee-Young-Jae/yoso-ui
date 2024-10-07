import{j as o}from"./jsx-runtime-CkxqCPlQ.js";import{r as c}from"./index-DJO9vBfz.js";import{d as l}from"./styled-components.browser.esm-Dsr6U-en.js";const z=l.div`
  display: flex;
  flex-direction: column;
  width: ${({$fullWidth:s})=>s?"100%":"auto"};
`,I=l.label`
  margin-bottom: ${({theme:s})=>s.spacing.xsmall};
  font-size: ${({theme:s})=>s.fontSizes.medium};
  color: ${({theme:s})=>s.colors.BLACK};
`,v=l.div`
  display: flex;
  align-items: center;
  background-color: ${({theme:s,$disabled:a})=>a?s.colors.GRAY_100:s.colors.WHITE};
  border: 1px solid
    ${({theme:s,$error:a})=>a?s.colors.RED_500:s.colors.GRAY_300};
  padding: ${({theme:s})=>s.spacing.medium};
  border-radius: ${({theme:s,$radius:a})=>a?s.borderRadius[a]:s.borderRadius.medium};
  transition: ${({theme:s})=>s.transitions.fast};

  &:focus-within {
    border-color: ${({theme:s,$error:a})=>a?s.colors.RED_500:s.colors.BLUE_500};
    box-shadow: 0 0 0 1px
      ${({theme:s,$error:a})=>a?s.colors.RED_500:s.colors.BLUE_500};
  }
`,E=l.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: ${({theme:s,$size:a})=>{switch(a){case"small":return s.fontSizes.small;case"large":return s.fontSizes.large;default:return s.fontSizes.medium}}};
  padding: ${({theme:s,$size:a,$hasIcon:i})=>{const e=i?s.spacing.small:s.spacing.medium;switch(a){case"small":return`${s.spacing.xsmall} ${e}`;case"large":return`${s.spacing.medium} ${e}`;default:return`${s.spacing.small} ${e}`}}};

  &::placeholder {
    color: ${({theme:s})=>s.colors.GRAY_500};
  }
`,u=l.div`
  display: flex;
  align-items: center;
  margin: 0 ${({theme:s})=>s.spacing.small};
  color: ${({theme:s})=>s.colors.GRAY_500};

  svg {
    width: 1em;
    height: 1em;
  }
`,h=l.span`
  margin-top: ${({theme:s})=>s.spacing.xsmall};
  font-size: ${({theme:s})=>s.fontSizes.small};
  color: ${({theme:s,$error:a})=>a?s.colors.RED_500:s.colors.GRAY_500};
`,p=c.forwardRef(({label:s,error:a,helperText:i,leftIcon:e,rightIcon:r,fullWidth:m=!1,size:f="medium",radius:$="medium",disabled:n=!1,className:g,style:x,id:b,...d},R)=>{const _=c.useId(),t=b||_,j=!!(e||r);return o.jsxs(z,{$fullWidth:m,className:g,style:x,children:[s&&o.jsxs(I,{htmlFor:t,children:[s,d.required&&o.jsx("span",{"aria-hidden":!0,children:"*"})]}),o.jsxs(v,{$disabled:n,$error:!!a,$radius:$,children:[e&&o.jsx(u,{children:e}),o.jsx(E,{id:t,ref:R,disabled:n,$size:f,$hasIcon:j,"aria-invalid":!!a,"aria-disabled":n,...d}),r&&o.jsx(u,{children:r})]}),(i||a)&&o.jsx(h,{$error:!!a,children:a||i})]})});p.displayName="Input";p.__docgenInfo={description:"",methods:[],displayName:"Input",props:{fullWidth:{defaultValue:{value:"false",computed:!1},required:!1},size:{defaultValue:{value:'"medium"',computed:!1},required:!1},radius:{defaultValue:{value:'"medium"',computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};export{p as I};
