import{j as s}from"./jsx-runtime-CkxqCPlQ.js";import{r as o}from"./index-DJO9vBfz.js";import{d as C}from"./styled-components.browser.esm-Dsr6U-en.js";import{P as at}from"./Portal-CvBg43kE.js";import{B as N}from"./Button-CpD3pMnL.js";import{I as lt}from"./Input-BBDMf5vw.js";const it=C.div`
  display: inline-block;
  position: relative;
`,ct=C.div`
  position: absolute;
  z-index: ${({theme:t})=>t.zIndex.tooltip};
  color: ${({theme:t})=>t.defaultColor};
  background-color: ${({theme:t})=>t.colors.white};
  box-shadow: ${({theme:t})=>t.shadows.small};
  padding: ${({theme:t})=>t.spacing.medium};
  border-radius: ${({theme:t})=>t.borderRadius.small};
  font-size: ${({theme:t})=>t.fontSizes.medium};
  opacity: ${({$visible:t})=>t?1:0};
  transition: "opacity 0.2s ease-in-out";
`,pt=C.div`
  position: absolute;
  width: 12px;
  height: 12px;
  background-color: inherit;
  transform: rotate(45deg);

  ${({$placement:t})=>{switch(t){case"top":return`
          bottom: -6px;
          left: 50%;
          transform: translateX(-50%) rotate(45deg);
          box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.06);
        `;case"bottom":return`
          top: -6px;
          left: 50%;
          transform: translateX(-50%) rotate(45deg);
          box-shadow: -1px -1px 1px rgba(0, 0, 0, 0.06);
        `;case"left":return`
          right: -6px;
          top: 50%;
          transform: translateY(-50%) rotate(45deg);
          box-shadow: 1px -1px 1px rgba(0, 0, 0, 0.06);
        `;case"right":return`
          left: -6px;
          top: 50%;
          transform: translateY(-50%) rotate(45deg);
          box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.06);
        `;default:return""}}}
`,u=o.forwardRef(({children:t,content:X,placement:h="top",trigger:k="hover",delay:S=0,disabled:j=!1,className:Y,style:W,contentClassName:A,contentStyle:K},g)=>{var P;const[r,R]=o.useState(!1),[G,$]=o.useState(!1),[J,Q]=o.useState({}),[U,Z]=o.useState(h),l=o.useRef(null),i=o.useRef(null),b=o.useRef(null),E=`tooltip-${o.useId()}`,y=o.useCallback(()=>{j||(l.current&&clearTimeout(l.current),$(!0),l.current=setTimeout(()=>R(!0),S))},[S,j]),a=o.useCallback(()=>{l.current&&clearTimeout(l.current),R(!1),setTimeout(()=>{$(!1)},200)},[]),tt=o.useCallback(e=>{e.stopPropagation(),r?a():y()},[r,y,a]),I=o.useCallback(()=>{if(!i.current||!b.current)return;const e=i.current.getBoundingClientRect(),n=b.current.getBoundingClientRect(),nt=window.innerWidth,rt=window.innerHeight,x=8,v=6;let T=h,c=0,p=0;const B={top:()=>{c=e.top-n.height-x-v,p=e.left+(e.width-n.width)/2},bottom:()=>{c=e.bottom+x+v,p=e.left+(e.width-n.width)/2},left:()=>{c=e.top+(e.height-n.height)/2,p=e.left-n.width-x-v},right:()=>{c=e.top+(e.height-n.height)/2,p=e.right+x+v}};B[T]();const V=()=>c<0||c+n.height>rt||p<0||p+n.width>nt;if(V()){const st=["top","bottom","left","right"].filter(w=>w!==h);for(const w of st)if(B[w](),!V()){T=w;break}}Q({top:`${c+window.scrollY}px`,left:`${p+window.scrollX}px`,position:"absolute"}),Z(T)},[h]);o.useLayoutEffect(()=>{r&&i.current&&b.current&&I()},[r,I]),o.useEffect(()=>()=>{l.current&&clearTimeout(l.current)},[]),o.useEffect(()=>{if(r){const e=n=>{n.key==="Escape"&&a()};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}}},[r,a]),o.useEffect(()=>{if(r&&k==="click"){const e=n=>{i.current&&!i.current.contains(n.target)&&a()};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}},[r,k,a]);const et=(()=>{switch(k){case"hover":return{onMouseEnter:y,onMouseLeave:a};case"click":return{onClick:tt};case"focus":return{onFocus:y,onBlur:a};default:return{}}})(),ot=e=>{i.current=e,typeof g=="function"?g(e):g&&(g.current=e)};return s.jsxs(it,{ref:ot,className:Y,style:W,"aria-describedby":r?E:void 0,...et,children:[t,G&&s.jsx(at,{container:(P=i.current)==null?void 0:P.ownerDocument.body,children:s.jsxs(ct,{id:E,ref:b,role:"tooltip","aria-hidden":!r,style:{...J,...K},$visible:r,className:A,children:[X,s.jsx(pt,{$placement:U})]})})]})});u.displayName="Tooltip";u.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{placement:{defaultValue:{value:'"top"',computed:!1},required:!1},trigger:{defaultValue:{value:'"hover"',computed:!1},required:!1},delay:{defaultValue:{value:"0",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const ut={component:u,title:"Components/Tooltip"},d={name:"기본 툴팁",parameters:{},args:{content:"tooltip 내용입니다.",placement:"top",trigger:"hover",delay:0,disabled:!1},argTypes:{content:{control:{type:"text"}},trigger:{description:"어떤 액션에 툴팁을 표시할지 지정합니다.",options:["hover","click","focus"],table:{type:{summary:'"hover" | "click" | "focus"'}},control:{type:"radio",labels:{hover:"hover",click:"click",focus:"focus"}}},placement:{options:["top","bottom","left","right"],defaultValue:"top",description:"툴팁이 표시될 위치를 지정합니다.",table:{type:{summary:'"top" | "bottom" | "left" | "right"'}},control:{type:"radio",labels:{top:"top",bottom:"bottom",left:"left",right:"right"}}},delay:{table:{type:{summary:"number"}},description:"툴팁이 표시되기 전 지연 시간을 지정합니다.",control:{type:"range",min:0,step:100,max:5e3}},disabled:{table:{type:{summary:"boolean"}},description:"툴팁을 비활성화합니다.",control:{type:"boolean"}}},render:t=>s.jsx(u,{...t,children:s.jsx(N,{onClick:()=>{console.log({...t})},children:"툴팁 트리거"})})},m={name:"포커스 툴팁",args:{content:"포커스 툴팁",placement:"bottom",trigger:"focus"},render:t=>s.jsx(u,{...t,children:s.jsx(lt,{placeholder:"포커스 툴팁"})})},f={name:"커스텀 스타일",args:{content:"나만의 스타일",placement:"right",trigger:"hover"},render:t=>s.jsx(u,{...t,contentStyle:{backgroundColor:"#000",color:"#fff"},content:s.jsx("span",{role:"img","aria-label":"heart",children:"⭐️"}),children:s.jsx(N,{children:"커스텀 스타일"})})};var _,z,L;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "기본 툴팁",
  parameters: {},
  args: {
    content: "tooltip 내용입니다.",
    placement: "top",
    trigger: "hover",
    delay: 0,
    disabled: false
  },
  argTypes: {
    content: {
      control: {
        type: "text"
      }
    },
    trigger: {
      description: "어떤 액션에 툴팁을 표시할지 지정합니다.",
      options: ["hover", "click", "focus"],
      table: {
        type: {
          summary: \`"hover" | "click" | "focus"\`
        }
      },
      control: {
        type: "radio",
        labels: {
          hover: "hover",
          click: "click",
          focus: "focus"
        }
      }
    },
    placement: {
      options: ["top", "bottom", "left", "right"],
      defaultValue: "top",
      description: "툴팁이 표시될 위치를 지정합니다.",
      table: {
        type: {
          summary: \`"top" | "bottom" | "left" | "right"\`
          // detail: "",
        }
      },
      control: {
        type: "radio",
        labels: {
          top: "top",
          bottom: "bottom",
          left: "left",
          right: "right"
        }
      }
    },
    delay: {
      table: {
        type: {
          summary: "number"
        }
      },
      description: "툴팁이 표시되기 전 지연 시간을 지정합니다.",
      control: {
        type: "range",
        min: 0,
        step: 100,
        max: 5000
      }
    },
    disabled: {
      table: {
        type: {
          summary: "boolean"
        }
      },
      description: "툴팁을 비활성화합니다.",
      control: {
        type: "boolean"
      }
    }
  },
  render: props => <Tooltip {...props}>
      <Button onClick={() => {
      console.log({
        ...props
      });
    }}>
        툴팁 트리거
      </Button>
    </Tooltip>
}`,...(L=(z=d.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var O,D,q;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "포커스 툴팁",
  args: {
    content: "포커스 툴팁",
    placement: "bottom",
    trigger: "focus"
  },
  render: props => <Tooltip {...props}>
      <Input placeholder="포커스 툴팁" />
    </Tooltip>
}`,...(q=(D=m.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var F,H,M;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "커스텀 스타일",
  args: {
    content: "나만의 스타일",
    placement: "right",
    trigger: "hover"
  },
  render: props => <Tooltip {...props} contentStyle={{
    backgroundColor: "#000",
    color: "#fff"
  }} content={<span role="img" aria-label="heart">
          ⭐️
        </span>}>
      <Button>커스텀 스타일</Button>
    </Tooltip>
}`,...(M=(H=f.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};const dt=["Default","FocusInput","CustomStyle"],xt=Object.freeze(Object.defineProperty({__proto__:null,CustomStyle:f,Default:d,FocusInput:m,__namedExportsOrder:dt,default:ut},Symbol.toStringTag,{value:"Module"}));export{f as C,d as D,m as F,xt as T,u as a};
