import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{r as c}from"./index-DJO9vBfz.js";import{d as o}from"./styled-components.browser.esm-Dsr6U-en.js";const v=o.div`
  display: flex;
  flex-direction: column;
  width: ${({$fullWidth:s})=>s?"100%":"auto"};
  gap: 4px;
`,I=o.label`
  margin-bottom: ${({theme:s})=>s.spacing.small};
  font-size: ${({theme:s})=>s.fontSizes.medium};
  color: ${({theme:s})=>s.colors.black};
`,q=o.span`
  color: ${({theme:s})=>s.colors.red[500]};
  margin-left: ${({theme:s})=>s.spacing.xsmall};
`,w=o.div`
  display: flex;
  align-items: center;
  background-color: ${({theme:s,$disabled:a})=>a?s.colors.gray[100]:s.colors.white};
  border: 1px solid
    ${({theme:s,$error:a})=>a?s.colors.red[500]:s.colors.gray[300]};
  padding: ${({theme:s})=>s.spacing.medium};
  border-radius: ${({theme:s,$radius:a})=>a?s.borderRadius[a]:s.borderRadius.medium};
  transition: ${({theme:s})=>s.transitions.fast};

  &:focus-within {
    border-color: ${({theme:s,$error:a})=>a?s.colors.red[500]:s.defaultColor};
  }
`,R=o.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: ${({theme:s,$size:a})=>{switch(a){case"small":return s.fontSizes.small;case"large":return s.fontSizes.large;default:return s.fontSizes.medium}}};
  padding: ${({theme:s,$size:a,$hasIcon:r})=>{const l=r?s.spacing.small:s.spacing.medium;switch(a){case"small":return`${s.spacing.xsmall} ${l}`;case"large":return`${s.spacing.medium} ${l}`;default:return`${s.spacing.small} ${l}`}}};
  color: ${({theme:s})=>s.colors.black};

  &::placeholder {
    color: ${({theme:s})=>s.colors.gray[500]};
  }
`,u=o.div`
  display: flex;
  align-items: center;
  margin: 0 ${({theme:s})=>s.spacing.small};
  color: ${({theme:s})=>s.colors.gray[500]};

  svg {
    width: 1em;
    height: 1em;
  }
`,S=o.span`
  margin-top: ${({theme:s})=>s.spacing.xsmall};
  font-size: ${({theme:s})=>s.fontSizes.small};
  color: ${({theme:s,$error:a})=>a?s.colors.red[500]:s.colors.gray[500]};
`,p=c.forwardRef(({label:s,error:a,helperText:r,leftIcon:l,rightIcon:i,fullWidth:m=!1,size:f="medium",radius:$="medium",disabled:n=!1,className:g,style:x,id:b,...d},y)=>{const j=c.useId(),t=b||j,z=!!(l||i),h=d.required;return e.jsxs(v,{$fullWidth:m,className:g,style:x,children:[s&&e.jsxs(I,{htmlFor:t,children:[s,h&&e.jsx(q,{"aria-hidden":"true",children:"*"})]}),e.jsxs(w,{$disabled:n,$error:!!a,$radius:$,children:[l&&e.jsx(u,{children:l}),e.jsx(R,{id:t,ref:y,disabled:n,$size:f,$hasIcon:z,"aria-invalid":!!a,"aria-disabled":n,...d}),i&&e.jsx(u,{children:i})]}),(r||a)&&e.jsx(S,{$error:!!a,children:a||r})]})});p.displayName="Input";p.__docgenInfo={description:"",methods:[],displayName:"Input",props:{fullWidth:{defaultValue:{value:"false",computed:!1},required:!1},size:{defaultValue:{value:'"medium"',computed:!1},required:!1},radius:{defaultValue:{value:'"medium"',computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};export{p as I};
