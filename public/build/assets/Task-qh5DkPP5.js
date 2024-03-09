import{r as c,W as u,j as e,a as p,d as l}from"./app-Go47YkBo.js";import{P as j}from"./PrimaryButton-2NoDDqEk.js";import{T as n}from"./TextInput-RX5XYjsv.js";import{D as f,A as v}from"./AuthenticatedLayout-2zntfMbU.js";import{Q as b,c as N,d as y}from"./useLocalStorage-q-DAcctf.js";import{T as g}from"./TableList-dkTgwSdr.js";import{T as w}from"./TaskStatus-sjyO7VL2.js";import"./transition-XxuFzMzf.js";import"./dialog-YjMKkp75.js";const R=({auth:o,tasks:t,search_query:d,search_date:m})=>{const a=c.useRef(),r=c.useRef(),{get:h}=u();c.useEffect(()=>{a.current.value=d,r.current.value=m},[]);const i=s=>{s.preventDefault(),h(route("tasks.index",[{search_date:r.current.value,search_query:a.current.value}]))},x=t.data.map(s=>({id:`#${s.acronym}-${s.counter}`,name:e.jsxs("p",{className:"line-clamp-1 py-0.5",children:[e.jsx("span",{className:"mr-1 border boarder-gray-300 py-0.5 px-1 text-xs rounded-sm",children:s.project_name}),s.name]}),priority_level:s.priority_level,status:e.jsx(w,{status:s.task_status}),action:e.jsx(f,{actionObject:{view:{action:()=>{window.location.href=route("tasks.show",{id:s.id})},label:"View"}}})}));return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"Tasks"}),e.jsxs(v,{user:o.user,header:e.jsx("div",{className:"flex justify-between items-center",children:e.jsx("div",{children:e.jsxs("h3",{className:"font-bold text-sm flex items-center",children:[e.jsx(b,{className:"h-5 w-5 mr-3"}),"Tasks"]})})}),children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3",children:[e.jsx("form",{onSubmit:i,className:"w-full col-span-2",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-2",children:[e.jsx(n,{ref:a,name:"search_query",placeholder:"Search"}),e.jsx(n,{ref:r,name:"search_date",type:"date"}),e.jsxs("div",{className:"flex space-x-3 items-center",children:[e.jsx(j,{type:"submit",className:"",children:"Search"}),e.jsx("button",{className:"uppercase font-bold hover:opacity-75 text-sm",onClick:s=>{r.current.value=null,a.current.value=null,i(s)},children:"Clear"})]})]})}),e.jsxs("div",{className:"flex space-x-3 items-center justify-end",children:[e.jsxs("div",{className:"font-bold text-sm",children:[t.from," - ",t.to," of ",t.total]}),e.jsxs("div",{className:"join space-x-1",children:[e.jsx("div",{children:e.jsx(l,{href:"#",className:"btn btn-sm bg-teal-600 hover:bg-teal-600/90 text-white",children:e.jsx(N,{className:"h-4 w-4"})})}),e.jsx("div",{children:e.jsx(l,{href:"#",className:"btn btn-sm bg-teal-600 hover:bg-teal-600/90 text-white",children:e.jsx(y,{className:"h-4 w-4"})})})]})]})]}),e.jsx("div",{className:"h-[calc(100dvh-180px)] overflow-y-auto -mr-5 pr-3 mt-3 overflow-x-auto",children:e.jsx(g,{theadObject:{acronym_id:"#",name:"Name",priority_level:"Priority Level",status:"Status",action:""},items:x,indexPrio:1})})]})]})};export{R as default};
