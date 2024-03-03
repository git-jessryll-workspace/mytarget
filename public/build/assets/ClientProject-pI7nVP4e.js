import{r as a,j as e,a as h}from"./app-f9npXpwR.js";import{D as p,A as u}from"./AuthenticatedLayout-07E8yd_R.js";import{N as f}from"./NavPanel-SA-13TvS.js";import{R as w}from"./QuestionMarkIcon-D9v-Zww3.js";import{M as j}from"./DangerButton-GcJG4a03.js";import{T as P}from"./TableList-IQsa4xsQ.js";import"./TextInput-uo1B8Cph.js";import"./CreateBoardForm-fw-OYUpV.js";import"./ErrorInput-GoHyxi22.js";import{E as v,D as b,C as N}from"./DeleteProjectForm-qzbG8J_l.js";import"./transition-0tvAEGH0.js";import"./dialog-ALxYEdJ2.js";import"./PrimaryButton-quU-Lmp0.js";import"./InputLabel-NbOcPn1X.js";const S=({projects:l,updateList:r})=>{const[s,i]=a.useState(null),[c,o]=a.useState(!1),[n,m]=a.useState(!1),x=l.map(t=>{var d;return{id:`#${t.id}`,project_name:t.project_name,client:(d=t.client)==null?void 0:d.name,status:t.active===1?"Active":"Inactive",action:e.jsx(p,{actionObject:{edit:{action:()=>{i(t),m(!0)},label:"Edit"},view:{action:()=>{window.location.href=route("projects.show",t.id)},label:"View"},delete:{action:()=>{i(t),o(!0)},label:"Delete"}}})}});return e.jsxs(e.Fragment,{children:[e.jsx(j,{show:n,maxWidth:"md",children:e.jsx(v,{updateList:r,project:s,setShowEdit:m})}),e.jsx(j,{show:c,maxWidth:"md",children:e.jsx(b,{updateList:r,projectId:s==null?void 0:s.id,setShowDelete:o})}),e.jsx(P,{theadObject:{id:"#",project_name:"Project Name",client:"Client",status:"Status",action:""},items:x})]})},D=a.memo(S);function T({auth:l,projects:r,search_query:s}){const[i,c]=a.useState([]);a.useEffect(()=>{c(r.data)},[]);const o=n=>{c(n.data)};return e.jsxs(u,{user:l.user,header:e.jsx("nav",{className:"flex","aria-label":"Breadcrumb",children:e.jsx("ol",{role:"list",className:"flex items-center space-x-4",children:e.jsx("li",{children:e.jsx("div",{children:e.jsxs("a",{href:`${route("projects.index")}`,className:"text-gray-500 dark:text-gray-300 hover:opacity-75 flex items-center text-sm font-bold antialiased",children:[e.jsx(w,{className:"h-5 w-5 flex-shrink-0 mr-3","aria-hidden":"true"}),e.jsx("span",{className:"sr-only",children:"Home"}),"Projects"]})})})})}),children:[e.jsx(h,{title:"Projects"}),e.jsx(f,{search_query:s,keyProps:"projects",updateList:o,data:r,CreateForm:N}),e.jsx("div",{className:"h-[calc(100dvh-180px)] overflow-auto -mr-5 pr-3 mt-3",children:e.jsx(D,{projects:i,updateList:o})})]})}export{T as default};