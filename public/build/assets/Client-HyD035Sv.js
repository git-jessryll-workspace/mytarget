import{r as i,j as t,a as x}from"./app-IeTSK-tL.js";import{D as u,A as h,Q as j}from"./AuthenticatedLayout-TWqcFy5M.js";import"./Bars3Icon-i7vWMIFl.js";import{T as f,N as w}from"./TableList-lpKZCFgZ.js";import{E as C,D as S,C as b}from"./DeleteClientForm-tYvhp-7A.js";import{M as d}from"./DangerButton-2sRDevm6.js";import"./transition-wc5XYkds.js";import"./dialog-Mn_1d4wM.js";import"./TextInput-PlUSa31n.js";import"./PrimaryButton-EosGIh22.js";import"./ChevronRightIcon-DuXIX0aL.js";import"./InputLabel-jnQ7j8BR.js";import"./SecondaryButton-V3NJyxMn.js";import"./ErrorInput-ESIgQouR.js";const v=({clients:l,updateClientList:a})=>{const[s,n]=i.useState(null),[r,o]=i.useState(!1),[m,c]=i.useState(!1),p=l.map(e=>({id:e.id,name:e.name,position:e.position,status:e.status===1?"Active":"Inactive",action:t.jsx(u,{actionObject:{edit:{action:()=>{n(e),c(!0)},label:"Edit"},show:{action:()=>{window.location.href=route("clients.show",e.id)},label:"View"},delete:{action:()=>{n(e),o(!0)},label:"Delete"}}})}));return t.jsxs(t.Fragment,{children:[t.jsx(d,{show:m,maxWidth:"md",children:t.jsx(C,{updateClientList:a,client:s,resetSelected:()=>c(!1)})}),t.jsx(d,{show:r,maxWidth:"md",children:t.jsx(S,{clientId:s==null?void 0:s.id,setDeleteClient:o,updateClientList:a})}),t.jsx(f,{theadObject:{id:"#",client_name:"Client Name",position:"Position",status:"Status",action:""},items:p})]})},D=i.memo(v);function k({auth:l,clients:a,search_query:s}){const[n,r]=i.useState([]);i.useEffect(()=>{r(a.data)},[]);const o=m=>{r(m.data)};return t.jsxs(t.Fragment,{children:[t.jsx(x,{title:"Clients"}),t.jsxs(h,{user:l.user,header:t.jsxs("div",{className:"flex space-x-2",children:[t.jsx(j,{}),t.jsx("h3",{className:"font-bold text-lg",style:{letterSpacing:"0.5px"},children:"Clients"})]}),children:[t.jsx(w,{search_query:s,keyProps:"clients",updateList:o,data:a,CreateForm:b}),t.jsx("div",{className:"h-[calc(100dvh-180px)] overflow-y-auto -mr-5 pr-3 mt-3 overflow-x-auto ",children:t.jsx(D,{clients:n,updateClientList:o})})]})]})}export{k as default};
