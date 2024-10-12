import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{r as c}from"./index-DJO9vBfz.js";import{d as o}from"./styled-components.browser.esm-Dsr6U-en.js";const h=o.div`
  display: flex;
  flex-direction: column;
  width: ${({$fullWidth:a})=>a?"100%":"auto"};
  gap: 4px;
`,v=o.label`
  margin-bottom: ${({theme:a})=>a.spacing.small};
  font-size: ${({theme:a})=>a.fontSizes.medium};
  color: ${({theme:a})=>a.colors.black};
`,I=o.div`
  display: flex;
  align-items: center;
  background-color: ${({theme:a,$disabled:s})=>s?a.colors.gray[100]:a.colors.white};
  border: 1px solid
    ${({theme:a,$error:s})=>s?a.colors.red[500]:a.colors.gray[300]};
  padding: ${({theme:a})=>a.spacing.medium};
  border-radius: ${({theme:a,$radius:s})=>s?a.borderRadius[s]:a.borderRadius.medium};
  transition: ${({theme:a})=>a.transitions.fast};

  &:focus-within {
    border-color: ${({theme:a,$error:s})=>s?a.colors.red[500]:a.defaultColor};
  }
`,w=o.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: ${({theme:a,$size:s})=>{switch(s){case"small":return a.fontSizes.small;case"large":return a.fontSizes.large;default:return a.fontSizes.medium}}};
  padding: ${({theme:a,$size:s,$hasIcon:r})=>{const l=r?a.spacing.small:a.spacing.medium;switch(s){case"small":return`${a.spacing.xsmall} ${l}`;case"large":return`${a.spacing.medium} ${l}`;default:return`${a.spacing.small} ${l}`}}};
  color: ${({theme:a})=>a.colors.black};

  &::placeholder {
    color: ${({theme:a})=>a.colors.gray[500]};
  }
`,u=o.div`
  display: flex;
  align-items: center;
  margin: 0 ${({theme:a})=>a.spacing.small};
  color: ${({theme:a})=>a.colors.gray[500]};

  svg {
    width: 1em;
    height: 1em;
  }
`,S=o.span`
  margin-top: ${({theme:a})=>a.spacing.xsmall};
  font-size: ${({theme:a})=>a.fontSizes.small};
  color: ${({theme:a,$error:s})=>s?a.colors.red[500]:a.colors.gray[500]};
`,p=c.forwardRef(({label:a,error:s,helperText:r,leftIcon:l,rightIcon:i,fullWidth:m=!1,size:f="medium",radius:$="medium",disabled:n=!1,className:g,style:x,id:b,...d},y)=>{const j=c.useId(),t=b||j,z=!!(l||i);return e.jsxs(h,{$fullWidth:m,className:g,style:x,children:[a&&e.jsxs(v,{htmlFor:t,children:[a,d.required&&e.jsx("span",{"aria-hidden":!0,children:"*"})]}),e.jsxs(I,{$disabled:n,$error:!!s,$radius:$,children:[l&&e.jsx(u,{children:l}),e.jsx(w,{id:t,ref:y,disabled:n,$size:f,$hasIcon:z,"aria-invalid":!!s,"aria-disabled":n,...d}),i&&e.jsx(u,{children:i})]}),(r||s)&&e.jsx(S,{$error:!!s,children:s||r})]})});p.displayName="Input";p.__docgenInfo={description:"",methods:[],displayName:"Input",props:{fullWidth:{defaultValue:{value:"false",computed:!1},required:!1},size:{defaultValue:{value:'"medium"',computed:!1},required:!1},radius:{defaultValue:{value:'"medium"',computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};export{p as I};
