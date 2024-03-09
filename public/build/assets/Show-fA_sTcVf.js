import{r,j as e,q as j,W as N,a as b}from"./app-Go47YkBo.js";import{D as p,A as v}from"./AuthenticatedLayout-2zntfMbU.js";import{S as w,D as S,M as o}from"./DangerButton-Z8_U0IZp.js";import{A as _,a as A,U as k}from"./AddTimeLogForm-X4EFNIFm.js";import{d as L}from"./date-olAZvHKQ.js";import{E as u,R as T}from"./useLocalStorage-q-DAcctf.js";import"./transition-XxuFzMzf.js";import"./dialog-YjMKkp75.js";import"./InputLabel-kjv6hQj2.js";import"./PrimaryButton-2NoDDqEk.js";import"./TextInput-RX5XYjsv.js";import"./Select-i36x1gN_.js";import"./TextArea-XzW6ZjTe.js";import"./ErrorInput-2CLvZnSt.js";const D=({level:s})=>({High:e.jsx("span",{className:"bg-red-500 text-white px-2 py-1 rounded-full text-xs uppercase font-bold",children:"High"}),Medium:e.jsx("span",{className:"bg-yellow-600 text-white px-2 py-1 rounded-full text-xs uppercase font-bold",children:"Medium"}),Low:e.jsx("span",{className:"bg-gray-500 px-2 py-1 rounded-full text-xs uppercase font-bold",children:"Low"}),0:null})[s],$=r.memo(D),F=()=>{const{task:s,time_log_object:t}=j().props,{client:a}=s;return e.jsxs("div",{className:"",children:[e.jsxs("div",{className:"w-full",children:[e.jsx("h5",{className:"text-xs md:text-sm font-bold",children:a.name}),e.jsx("h3",{className:"text-teal-600 font-bold text-lg md:text-xl text-balance",children:s.name}),e.jsxs("div",{className:"text-left pt-1 flex items-center space-x-1 text-xs",children:[e.jsx("dt",{className:"font-bold text-gray-400",children:"Posted @"}),e.jsx("dd",{className:"font-semibold",children:e.jsx("time",{time:s.created_at,children:L(s.created_at)})})]})]}),e.jsx("div",{className:"pt-4 w-full lg:w-[80%]",children:e.jsx("p",{className:"text-balance",children:s.description})}),e.jsxs("div",{className:"flex items-center flex-wrap gap-5 justify-start pt-5 pb-4",children:[s.priority_level&&e.jsx("div",{className:"flex items-center",children:e.jsxs("div",{className:"space-y-1",children:[e.jsx("dd",{className:"text-xs font-bold opacity-75 antialiased",children:"Priority Level"}),e.jsx("div",{children:e.jsx($,{level:s.priority_level})})]})}),e.jsx("div",{className:"flex items-center",children:e.jsxs("div",{className:"space-y-1",children:[e.jsx("dd",{className:"text-xs font-bold antialiased opacity-75",children:"Task Status"}),e.jsx("dt",{className:"font-bold text-teal-600",children:s.task_status})]})}),e.jsx("div",{className:"flex items-center",children:e.jsxs("div",{className:"space-y-1",children:[e.jsx("dd",{className:"text-xs font-bold antialiased opacity-75",children:"Time Spent"}),e.jsx("dt",{className:"font-bold",children:`${t.weeks}w ${t.days}d ${t.hours}h ${t.minutes}m`})]})}),s.is_archived===1&&e.jsxs("div",{className:"space-y-2",children:[e.jsx("dd",{className:"text-xs font-bold antialiased opacity-75",children:"Archived Status"}),e.jsx("dt",{className:"text-gray-400 font-bold uppercase text-xs rounded-md border px-3 py-1 border-gray-300",children:"Archived"})]})]})]})},E=r.memo(F),M=r.memo(function({timeLogId:t,setShowDelete:a}){const{delete:c,reset:i}=N(),l=async d=>{d.preventDefault(),await c(route("task_time_logs.destroy",{id:t}),{onSuccess:()=>i()}),a(!1)};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex justify-between items-center pb-4",children:e.jsx("div",{children:e.jsx("h3",{className:"font-bold text-lg text-gray-700 dark:text-gray-300",children:"Confirm to delete the time log"})})}),e.jsxs("form",{onSubmit:l,children:[e.jsx("div",{className:"pb-6",children:e.jsx("p",{className:"",children:"Are you sure to delete this client?"})}),e.jsx("div",{className:"flex justify-end",children:e.jsxs("div",{className:"flex space-x-2",children:[e.jsx(w,{type:"button",onClick:()=>a(!1),children:"Cancel"}),e.jsx(S,{type:"submit",children:"Delete"})]})})]})]})}),P=()=>{const[s,t]=r.useState(!1),[a,c]=r.useState(null),{all_time_logs:i}=j().props;return e.jsxs(e.Fragment,{children:[e.jsxs("section",{children:[e.jsx("div",{className:"pb-2",children:e.jsx("h5",{className:"text-sm leading-6 font-semibold",children:"Time Logs"})}),e.jsx("div",{className:"flow-root overflow-y-auto",children:e.jsx("ul",{role:"list",children:i.map((l,d)=>e.jsx("li",{children:e.jsxs("div",{className:"relative pb-5",children:[d!==i.length-1&&e.jsx("span",{className:"absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200 dark:bg-gray-500","aria-hidden":"true"}),e.jsxs("div",{className:"relative flex space-x-3 pt-1",children:[e.jsx("div",{children:e.jsx("span",{className:"h-3 w-3 mt-2.5 ml-2.5 rounded-full flex items-center justify-center ring-1 ring-transparent bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-300"})}),e.jsxs("div",{className:"flex min-w-0 flex-1 justify-between space-x-4 pt-1.5",children:[e.jsxs("div",{className:"w-[80%]",children:[e.jsx("p",{className:"text-sm line-clamp-2 text-balance text-gray-500 dark:text-gray-300",children:l.body||"No description"}),e.jsx("span",{className:"text-sm font-bold",children:l.time_log})]}),e.jsxs("div",{className:"whitespace-nowrap text-right text-sm text-gray-500 flex text-balance",children:[e.jsx("time",{dateTime:l.created_at,children:l.created_at}),e.jsx(p,{actionObject:{delete:{action:()=>{t(!0),c(l)},label:"Delete"}},childIcon:e.jsx(u,{className:"cursor-pointer h-6 w-6"})})]})]})]})]})},l.id))})})]}),e.jsx(o,{show:s,children:e.jsx(M,{timeLogId:a==null?void 0:a.id,setShowDelete:t})})]})},I=r.memo(P);function X({task:s,auth:t,time_log_object:a}){const{client_project:c,acronym:i,board:l}=s,[d,x]=r.useState(!1),[f,m]=r.useState(!1),g=[{name:c.project_name,href:route("projects.show",{id:c.id}),current:!1},{name:`#${i.acronym}-${i.counter}`,href:route("tasks.show",{id:s.id}),current:!0}],[y,h]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(b,{title:s.name}),e.jsxs(v,{user:t.user,header:e.jsxs("div",{className:"flex justify-between",children:[e.jsx("nav",{className:"flex","aria-label":"Breadcrumb",children:e.jsxs("ol",{role:"list",className:"flex items-center space-x-4",children:[e.jsx("li",{children:e.jsx("div",{children:e.jsxs("a",{href:`${route("projects.index")}`,className:"text-gray-400 hover:text-gray-700 flex items-center text-sm font-medium",children:[e.jsx(T,{className:"h-5 w-5 flex-shrink-0 mr-3","aria-hidden":"true"}),e.jsx("span",{className:"sr-only",children:"Projects"}),"Projects"]})})}),g.map(n=>e.jsx("li",{children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("svg",{className:"h-5 w-5 flex-shrink-0 text-gray-300",fill:"currentColor",viewBox:"0 0 20 20","aria-hidden":"true",children:e.jsx("path",{d:"M5.555 17.776l8-16 .894.448-8 16-.894-.448z"})}),e.jsx("a",{href:n.href,className:`ml-4 text-sm antialiased ${n.current?"text-teal-600 font-bold":"text-gray-400 font-medium hover:text-gray-700"}`,"aria-current":n.current?"page":void 0,children:n.name})]})},n.name))]})}),e.jsx("div",{children:e.jsx(p,{actionObject:{edit:{action:()=>m(!0),label:"Edit"},addTimeLog:{action:()=>x(!0),label:"Add Time Log"},archived:{action:()=>{h(!0)},label:"Archive"}},childIcon:e.jsx(u,{className:"cursor-pointer rotate-90 h-8 w-8"})})})]}),children:[e.jsxs("div",{className:"h-[calc(100dvh-160px)] overflow-y-auto -mr-5",children:[e.jsx("div",{className:"",children:e.jsx(E,{})}),e.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 lg:gap-x-6 2xl:gap-x-20 mr-4",children:e.jsx("div",{className:"col-span-2",children:e.jsx(I,{})})})]}),e.jsx(o,{show:y,maxWidth:"lg",children:e.jsx(_,{setShow:h})}),e.jsx(o,{show:d,maxWidth:"sm",children:e.jsx(A,{setShowAddTimeLog:x})}),e.jsx(o,{show:f,children:e.jsx(k,{setShow:m,task:s})})]})]})}export{X as default};