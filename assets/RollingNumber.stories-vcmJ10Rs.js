import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import{r as o}from"./index-DJO9vBfz.js";import{d as p,l as F,m as I}from"./styled-components.browser.esm-Dsr6U-en.js";import{B as L}from"./Button-CpD3pMnL.js";const O=p.div`
  display: flex;
  gap: 0.05em;
`,T=p.div`
  overflow: hidden;
  display: inline-block;
  position: relative;
  width: 0.8em;
  height: var(--digit-height);
  font-size: 1.2em;

  --digit-height: 1em; // 숫자 높이

  ${({$currentDigit:e,$duration:a,$timingFunction:s})=>F`
    & > div {
      animation: ${A(e)} ${a}s
        ${s} forwards;
    }
  `}
`,A=e=>I`
  to {
    transform: translateY(calc(-1 * ${e} * var(--digit-height)));
  }
`,M=p.div`
  display: flex;
  flex-direction: column;
`,j=p.div`
  height: var(--digit-height);
  line-height: var(--digit-height);
  font-size: 1em;
  text-align: center;
`,f=({value:e,digits:a=-1,padWithZero:s=!1,duration:n=1,timingFunction:h="ease-out",digitClassName:v,digitStyle:b,onComplete:g,useGrouping:y=!1})=>{const[G,Z]=o.useState(""),[i,k]=o.useState("");o.useEffect(()=>{const r=typeof e=="number"?e:parseFloat(e),m=y?r.toLocaleString():r.toString();Z(i),k(m)},[e,y]),o.useEffect(()=>{if(g){const r=setTimeout(()=>{g()},n*1e3);return()=>clearTimeout(r)}},[g,n,i]);const x=a||Math.max(G.length,i.length),z=s?i.padStart(x,"0").split(""):i.padStart(x).split("");return t.jsx(O,{children:z.map((r,m)=>{const S=parseInt(r,10)||0;return isNaN(parseInt(r))?t.jsx(T,{className:v,style:{marginRight:"0.05em",...b},$duration:n,$timingFunction:h,$currentDigit:S,children:t.jsx(j,{children:r})},m):t.jsx(T,{className:v,style:b,$duration:n,$timingFunction:h,$currentDigit:S,children:t.jsx(M,{children:Array.from({length:10},(J,N)=>t.jsx(j,{children:N},N))})},m)})})};f.__docgenInfo={description:"",methods:[],displayName:"RollingNumber",props:{value:{required:!0,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},digits:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"-1",computed:!1}},padWithZero:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},duration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},timingFunction:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"ease-out"',computed:!1}},digitClassName:{required:!1,tsType:{name:"string"},description:""},digitStyle:{required:!1,tsType:{name:"CSSProperties"},description:""},onComplete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},useGrouping:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Y={title:"Typography/RollingNumber",component:f,parameters:{docs:{description:{component:`
**RollingNumber 컴포넌트**

\`RollingNumber\` 컴포넌트는 숫자가 롤링되면서 변경되는 애니메이션 효과를 제공합니다. 
숫자 포맷팅, 애니메이션 지속 시간, 타이밍 함수 등 다양한 옵션을 지원합니다.
        `}}},argTypes:{value:{control:"number",description:"표시할 숫자 값"},digits:{control:"number",description:"표시할 자릿수 (-1은 자동)"},padWithZero:{control:"boolean",description:"앞자리를 0으로 채울지 여부"},duration:{control:"number",description:"애니메이션 지속 시간 (초)"},useGrouping:{control:"boolean",description:"천 단위 구분자 사용 여부"}}},u={name:"기본",args:{value:1234,duration:1}},l={name:"천 단위 구분자",args:{value:1234567,useGrouping:!0,duration:1}},d={name:"0으로 채우기",args:{value:42,digits:4,padWithZero:!0,duration:1}},c={name:"동적 변경",render:e=>{const[a,s]=o.useState(0);return t.jsxs("div",{children:[t.jsx(L,{onClick:()=>s(n=>n+599),style:{marginBottom:"1rem"},children:"증가 (+599)"}),t.jsx(f,{...e,value:a})]})}};var V,$,D;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "기본",
  args: {
    value: 1234,
    duration: 1
  }
}`,...(D=($=u.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};var R,_,q;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "천 단위 구분자",
  args: {
    value: 1234567,
    useGrouping: true,
    duration: 1
  }
}`,...(q=(_=l.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var W,C,B;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "0으로 채우기",
  args: {
    value: 42,
    digits: 4,
    padWithZero: true,
    duration: 1
  }
}`,...(B=(C=d.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var P,w,E;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "동적 변경",
  render: args => {
    const [value, setValue] = useState(0);
    return <div>
        <Button onClick={() => setValue(prev => prev + 599)} style={{
        marginBottom: "1rem"
      }}>
          증가 (+599)
        </Button>
        <RollingNumber {...args} value={value} />
      </div>;
  }
}`,...(E=(w=c.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};const H=["Default","WithGrouping","PaddedNumber","Controlled"],ee=Object.freeze(Object.defineProperty({__proto__:null,Controlled:c,Default:u,PaddedNumber:d,WithGrouping:l,__namedExportsOrder:H,default:Y},Symbol.toStringTag,{value:"Module"}));export{c as C,u as D,d as P,f as R,l as W,ee as a};
