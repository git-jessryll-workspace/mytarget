import{r as i,q as j,j as e,W as b,a as v}from"./app-nzOvLD-d.js";import{D as f,A as y}from"./AuthenticatedLayout-Tzv0m-Yu.js";import{S as w,D as k,M as o}from"./DangerButton-B2VfTgUE.js";import{P as p}from"./PriorityLevel-N9q6pdCf.js";import{A as S,a as A}from"./AddTimeLogForm-3j4mDvGs.js";import"./TextInput-687EqTop.js";import{b as u,R as D}from"./QuestionMarkIcon-KARt0TtS.js";import{d as h}from"./date-olAZvHKQ.js";import"./transition--TIntlSB.js";import"./dialog-Xon3Kj8i.js";import"./ErrorInput-5jvALGnN.js";import"./InputLabel-aj1mze1q.js";import"./PrimaryButton-6wS61PwG.js";const T=()=>{const{task:s,time_log_object:a}=j().props,{board:t,client:r}=s;return e.jsxs("div",{className:"",children:[e.jsx("div",{children:e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("div",{className:"w-full md:w-auto",children:[e.jsx("h5",{className:"text-sm font-bold",children:r.name}),e.jsx("h3",{className:"text-teal-600 font-bold text-xl text-balance",children:s.name}),e.jsxs("div",{className:"text-left flex items-center space-x-2 lg:hidden",children:[e.jsx("dt",{className:"text-xs font-bold text-gray-400",children:"Due Date"}),e.jsx("dd",{className:"text-sm font-semibold",children:e.jsx("time",{time:s.created_at,children:h(s.created_at)})})]})]}),e.jsx("div",{className:"hidden md:flex justify-end w-0 md:w-[20%]",children:e.jsxs("div",{className:"text-right",children:[e.jsx("dt",{className:"text-xs font-bold text-gray-400",children:"Due Date"}),e.jsx("dd",{className:"text-sm font-semibold",children:e.jsx("time",{time:s.created_at,children:h(s.created_at)})})]})})]})}),e.jsx("div",{className:"pt-6",children:e.jsx("p",{className:"text-balance",children:s.description})}),e.jsxs("div",{className:"flex md:hidden items-center space-x-6 justify-start pt-5",children:[e.jsx("div",{className:"flex items-center",children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("dd",{className:"text-xs font-bold antialiased",children:"Priority Level"}),e.jsx("div",{children:e.jsx(p,{level:s.priority_level})})]})}),e.jsx("div",{className:"flex items-center",children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("dd",{className:"text-xs font-bold antialiased",children:"Task Position"}),e.jsx("dt",{className:"font-bold text-teal-600",children:t.name})]})}),e.jsx("div",{className:"flex items-center",children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("dd",{className:"text-xs font-bold antialiased",children:"Time Spent"}),e.jsx("dt",{className:"font-bold",children:`${a.weeks}w ${a.days}d ${a.hours}h ${a.minutes}m`})]})}),s.is_archived===1&&e.jsxs("div",{className:"space-y-2",children:[e.jsx("dd",{className:"text-xs font-bold antialiased",children:"Archived Status"}),e.jsx("dt",{className:"text-gray-400 font-bold uppercase text-xs rounded-md border px-3 py-1 border-gray-300",children:"Archived"})]})]})]})},$=i.memo(T),_=i.memo(function({timeLogId:a,setShowDelete:t}){const{delete:r,reset:d}=b(),l=async c=>{c.preventDefault(),await r(route("task_time_logs.destroy",{id:a}),{onSuccess:()=>d()}),t(!1)};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex justify-between items-center pb-4",children:e.jsx("div",{children:e.jsx("h3",{className:"font-bold text-lg text-gray-700 dark:text-gray-300",children:"Confirm to delete the time log"})})}),e.jsxs("form",{onSubmit:l,children:[e.jsx("div",{className:"pb-6",children:e.jsx("p",{className:"",children:"Are you sure to delete this client?"})}),e.jsx("div",{className:"flex justify-end",children:e.jsxs("div",{className:"flex space-x-2",children:[e.jsx(w,{type:"button",onClick:()=>t(!1),children:"Cancel"}),e.jsx(k,{type:"submit",children:"Delete"})]})})]})]})}),L=()=>{const[s,a]=i.useState(!1),[t,r]=i.useState(null),{all_time_logs:d}=j().props;return e.jsxs(e.Fragment,{children:[e.jsxs("section",{children:[e.jsx("div",{className:"pb-2",children:e.jsx("h5",{className:"text-sm leading-6 font-semibold",children:"Time Logs"})}),e.jsx("div",{className:"flow-root overflow-y-auto",children:e.jsxs("ul",{role:"list",children:[e.jsx("div",{className:"block lg:hidden",children:"test asd"}),d.map((l,c)=>e.jsx("li",{children:e.jsxs("div",{className:"relative pb-5",children:[c!==d.length-1&&e.jsx("span",{className:"absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200 dark:bg-gray-500","aria-hidden":"true"}),e.jsxs("div",{className:"relative flex space-x-3 pt-1",children:[e.jsx("div",{children:e.jsx("span",{className:"h-3 w-3 mt-2.5 ml-2.5 rounded-full flex items-center justify-center ring-1 ring-transparent bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-300"})}),e.jsxs("div",{className:"flex min-w-0 flex-1 justify-between space-x-4 pt-1.5",children:[e.jsxs("div",{className:"w-[80%]",children:[e.jsx("p",{className:"text-sm line-clamp-2 text-balance text-gray-500 dark:text-gray-300",children:l.body||"No description"}),e.jsx("span",{className:"text-sm font-bold",children:l.time_log})]}),e.jsxs("div",{className:"whitespace-nowrap text-right text-sm text-gray-500 flex text-balance",children:[e.jsx("time",{dateTime:l.created_at,children:l.created_at}),e.jsx(f,{actionObject:{delete:{action:()=>{a(!0),r(l)},label:"Delete"}},childIcon:e.jsx(u,{className:"cursor-pointer h-6 w-6"})})]})]})]})]})},l.id))]})})]}),e.jsx(o,{show:s,children:e.jsx(_,{timeLogId:t==null?void 0:t.id,setShowDelete:a})})]})},F=i.memo(L);function H({task:s,auth:a,time_log_object:t}){const{client_project:r,acronym:d,board:l}=s,[c,x]=i.useState(!1),N=[{name:r.project_name,href:route("projects.show",{id:r.id}),current:!1},{name:`#${d.acronym}-${d.counter}`,href:route("tasks.show",{id:s.id}),current:!0}],[g,m]=i.useState(!1);return e.jsxs(y,{user:a.user,header:e.jsxs("div",{className:"flex justify-between",children:[e.jsx("nav",{className:"flex","aria-label":"Breadcrumb",children:e.jsxs("ol",{role:"list",className:"flex items-center space-x-4",children:[e.jsx("li",{children:e.jsx("div",{children:e.jsxs("a",{href:`${route("projects.index")}`,className:"text-gray-400 hover:text-gray-700 flex items-center text-sm font-medium",children:[e.jsx(D,{className:"h-5 w-5 flex-shrink-0 mr-3","aria-hidden":"true"}),e.jsx("span",{className:"sr-only",children:"Projects"}),"Projects"]})})}),N.map(n=>e.jsx("li",{children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("svg",{className:"h-5 w-5 flex-shrink-0 text-gray-300",fill:"currentColor",viewBox:"0 0 20 20","aria-hidden":"true",children:e.jsx("path",{d:"M5.555 17.776l8-16 .894.448-8 16-.894-.448z"})}),e.jsx("a",{href:n.href,className:`ml-4 text-sm antialiased ${n.current?"text-teal-600 font-bold":"text-gray-400 font-medium hover:text-gray-700"}`,"aria-current":n.current?"page":void 0,children:n.name})]})},n.name))]})}),e.jsx("div",{children:e.jsx(f,{actionObject:{addTimeLog:{action:()=>x(!0),label:"Add Time Log"},view:{action:()=>{m(!0)},label:"Archive"}},childIcon:e.jsx(u,{className:"cursor-pointer rotate-90 h-8 w-8"})})})]}),children:[e.jsx(v,{title:s.name}),e.jsxs("div",{className:"h-[calc(100dvh-160px)] overflow-y-auto -mr-5",children:[e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 lg:gap-x-6 2xl:gap-x-20",children:[e.jsx("div",{className:"space-y-5 px-1 col-span-2 mr-4",children:e.jsx($,{})}),e.jsx("div",{className:"px-1 mr-0 lg:mr-4 2xl:ml-20",children:e.jsxs("div",{className:"border border-gray-300 rounded-md bg-transparent dark:bg-gray-900/10 shadow-sm dark:shadow-none hidden lg:block",children:[e.jsx("div",{className:"border-b border-gray-200 px-4 py-3 sm:px-4 rounded-t-md",children:e.jsx("h3",{className:"text-base font-semibold leading-6 text-gray-900 dark:text-gray-300",children:"Task Status"})}),e.jsx("table",{className:"table table-md",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm font-bold",children:"Priority Level"}),e.jsx("td",{className:"text-right",children:e.jsx(p,{level:s.priority_level})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm font-bold",children:"Task Board"}),e.jsx("td",{className:"font-bold text-sm text-right",children:l.name})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm font-bold",children:"Time Spent"}),e.jsx("td",{className:"font-bold text-right",children:`${t.weeks}w ${t.days}d ${t.hours}h ${t.minutes}m`})]}),s.is_archived===1&&e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm font-bold",children:"Status"}),e.jsx("td",{className:"font-bold text-right",children:"Archived"})]})]})})]})})]}),e.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 lg:gap-x-6 2xl:gap-x-20 mr-4",children:e.jsx("div",{className:"col-span-2",children:e.jsx(F,{})})})]}),e.jsx(o,{show:g,maxWidth:"lg",children:e.jsx(S,{setShow:m})}),e.jsx(o,{show:c,maxWidth:"sm",children:e.jsx(A,{setShowAddTimeLog:x})})]})}export{H as default};
