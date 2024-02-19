import{r as d,q as u,W as v,j as e,a as A}from"./app-IeTSK-tL.js";import{D as k,A as D,R as L}from"./AuthenticatedLayout-TWqcFy5M.js";import{D as S,M as g}from"./DangerButton-2sRDevm6.js";import{P as _}from"./PriorityLevel-M-DCCDK4.js";import{S as b}from"./SecondaryButton-V3NJyxMn.js";import{T as N}from"./TextInput-PlUSa31n.js";import{E as T}from"./Bars3Icon-i7vWMIFl.js";import{E as y}from"./ErrorInput-ESIgQouR.js";import{I as p}from"./InputLabel-jnQ7j8BR.js";import{P as $}from"./PrimaryButton-EosGIh22.js";import{d as w}from"./date-olAZvHKQ.js";import"./transition-wc5XYkds.js";import"./dialog-Mn_1d4wM.js";const F=({setShow:s})=>{const{task:a}=u().props,{patch:t}=v(),l=async r=>{r.preventDefault(),t(route("tasks.archive",{id:a.id}),{onSuccess:()=>s(!1)})};return e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between items-center pb-4",children:[e.jsx("div",{children:e.jsx("h3",{className:"font-bold text-lg text-gray-700 dark:text-gray-300",children:"Confirm to archive the task"})}),e.jsx("div",{})]}),e.jsxs("form",{onSubmit:l,children:[e.jsx("div",{className:"pb-6",children:e.jsx("p",{className:"",children:"Are you sure to archive this task?"})}),e.jsx("div",{className:"flex justify-end",children:e.jsxs("div",{className:"flex space-x-2",children:[e.jsx(b,{type:"button",onClick:()=>s(!1),children:"Cancel"}),e.jsx(S,{type:"submit",children:"Yes"})]})})]})]})},C=d.memo(F),I=d.memo(function({setShowAddTimeLog:a}){const{task:t}=u().props,{data:l,setData:r,post:i,errors:c,reset:m}=v({time_log:"",created_at:null,body:"",task_id:t.id,client_project_id:t.client_project_id}),[x,h]=d.useState(null),j=async n=>{n.preventDefault(),i(route("task_time_logs.store",{onSuccess:f=>{m()},onError:f=>{console.error(f)}})),a(!1)};function o(n){return/^(\d+h)?(\s*\d+m)?$/.test(n)?(console.log("Valid time format!"),!0):(console.log("Invalid time format. Please use the format 'h hours m minutes', e.g., 3h 5m."),!1)}return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"",children:e.jsx("h3",{className:"leading-6 font-semibold",children:"Add Time Log"})}),e.jsxs("form",{className:"space-y-4 mt-5",onSubmit:j,children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(p,{value:"Time Log"}),e.jsxs("div",{className:"space-y-1",children:[e.jsx(N,{value:l.time_log,onChange:n=>{r("time_log",n.target.value),o(n.target.value)?h(null):h("invalid")}}),e.jsx(y,{errors:c,errorKey:"time_log"}),x&&e.jsx("p",{className:"text-error text-xs",children:"Invalid input time log"}),e.jsx("p",{className:"text-xs italic",children:"Required format h=hour m=minutes. example 3h 5m equevalent of 3hours and 5minutes."})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(p,{value:"Body"}),e.jsxs("div",{children:[e.jsx("textarea",{value:l.body,onChange:n=>r("body",n.target.value),className:"textarea border border-gray-300 dark:border-gray-700 focus:ring-gray-800 focus:outline-none focus:ring-1 focus:border-gray-600 h-24 w-full ",placeholder:"short description of your time log"}),e.jsx(y,{errors:c,errorKey:"body"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(p,{value:"Date"}),e.jsx("div",{children:e.jsx(N,{type:"date"})})]}),e.jsx("div",{className:"border-t border-gray-300 dark:border-gray-500 flex space-x-2 justify-end",children:e.jsxs("div",{className:"flex space-x-2 mt-4",children:[e.jsx(b,{onClick:()=>a(!1),children:"Cancel"}),e.jsx($,{disabled:x,children:"Save"})]})})]})]})}),P=()=>{const{task:s,time_log_object:a}=u().props,{board:t,client_project:l,client:r}=s;return e.jsxs("div",{className:"",children:[e.jsx("div",{children:e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("div",{className:"w-full md:w-auto",children:[e.jsx("h5",{className:"text-sm font-bold",children:r.name}),e.jsx("h3",{className:"text-teal-600 font-bold text-xl text-balance",children:s.name}),e.jsxs("div",{className:"text-left flex items-center space-x-2 lg:hidden",children:[e.jsx("dt",{className:"text-xs font-bold text-gray-400",children:"Due Date"}),e.jsx("dd",{className:"text-sm font-semibold",children:e.jsx("time",{time:s.created_at,children:w(s.created_at)})})]})]}),e.jsx("div",{className:"hidden md:flex justify-end w-0 md:w-[20%]",children:e.jsxs("div",{className:"text-right",children:[e.jsx("dt",{className:"text-xs font-bold text-gray-400",children:"Due Date"}),e.jsx("dd",{className:"text-sm font-semibold",children:e.jsx("time",{time:s.created_at,children:w(s.created_at)})})]})})]})}),e.jsx("div",{className:"pt-6",children:e.jsx("p",{className:"text-balance",children:s.description})}),e.jsxs("div",{className:"flex md:hidden items-center space-x-6 justify-start pt-5",children:[e.jsx("div",{className:"flex items-center",children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("dd",{className:"text-xs font-bold antialiased",children:"Priority Level"}),e.jsx("div",{children:e.jsx(_,{level:s.priority_level})})]})}),e.jsx("div",{className:"flex items-center",children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("dd",{className:"text-xs font-bold antialiased",children:"Task Position"}),e.jsx("dt",{className:"font-bold text-teal-600",children:t.name})]})}),e.jsx("div",{className:"flex items-center",children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("dd",{className:"text-xs font-bold antialiased",children:"Time Spent"}),e.jsx("dt",{className:"font-bold",children:`${a.weeks}w ${a.days}d ${a.hours}h ${a.minutes}m`})]})}),s.is_archived===1&&e.jsxs("div",{className:"space-y-2",children:[e.jsx("dd",{className:"text-xs font-bold antialiased",children:"Archived Status"}),e.jsx("dt",{className:"text-gray-400 font-bold uppercase text-xs rounded-md border px-3 py-1 border-gray-300",children:"Archived"})]})]})]})},B=d.memo(P),E=d.memo(function({timeLogId:a,setShowDelete:t}){const{delete:l,reset:r}=v(),i=async c=>{c.preventDefault(),await l(route("task_time_logs.destroy",{id:a}),{onSuccess:()=>r()}),t(!1)};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex justify-between items-center pb-4",children:e.jsx("div",{children:e.jsx("h3",{className:"font-bold text-lg text-gray-700 dark:text-gray-300",children:"Confirm to delete the time log"})})}),e.jsxs("form",{onSubmit:i,children:[e.jsx("div",{className:"pb-6",children:e.jsx("p",{className:"",children:"Are you sure to delete this client?"})}),e.jsx("div",{className:"flex justify-end",children:e.jsxs("div",{className:"flex space-x-2",children:[e.jsx(b,{type:"button",onClick:()=>t(!1),children:"Cancel"}),e.jsx(S,{type:"submit",children:"Delete"})]})})]})]})}),M=()=>{const[s,a]=d.useState(!1),[t,l]=d.useState(null),{all_time_logs:r}=u().props;return e.jsxs(e.Fragment,{children:[e.jsxs("section",{children:[e.jsx("div",{className:"pb-2",children:e.jsx("h5",{className:"text-sm leading-6 font-semibold",children:"Time Logs"})}),e.jsx("div",{className:"flow-root overflow-y-auto",children:e.jsxs("ul",{role:"list",children:[e.jsx("div",{className:"block lg:hidden",children:"test asd"}),r.map((i,c)=>e.jsx("li",{children:e.jsxs("div",{className:"relative pb-5",children:[c!==r.length-1&&e.jsx("span",{className:"absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200 dark:bg-gray-500","aria-hidden":"true"}),e.jsxs("div",{className:"relative flex space-x-3 pt-1",children:[e.jsx("div",{children:e.jsx("span",{className:"h-3 w-3 mt-2.5 ml-2.5 rounded-full flex items-center justify-center ring-1 ring-transparent bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-300"})}),e.jsxs("div",{className:"flex min-w-0 flex-1 justify-between space-x-4 pt-1.5",children:[e.jsxs("div",{className:"w-[80%]",children:[e.jsx("p",{className:"text-sm line-clamp-2 text-balance text-gray-500 dark:text-gray-300",children:i.body||"No description"}),e.jsx("span",{className:"text-sm font-bold",children:i.time_log})]}),e.jsxs("div",{className:"whitespace-nowrap text-right text-sm text-gray-500 flex text-balance",children:[e.jsx("time",{dateTime:i.created_at,children:i.created_at}),e.jsx(k,{actionObject:{delete:{action:()=>{a(!0),l(i)},label:"Delete"}},childIcon:e.jsx(T,{className:"cursor-pointer h-6 w-6"})})]})]})]})]})},i.id))]})})]}),e.jsx(g,{show:s,children:e.jsx(E,{timeLogId:t==null?void 0:t.id,setShowDelete:a})})]})},R=d.memo(M);function Z({task:s,auth:a,time_log_object:t}){const{client_project:l,acronym:r,board:i}=s,[c,m]=d.useState(!1),x=[{name:l.project_name,href:route("projects.show",{id:l.id}),current:!1},{name:`#${r.acronym}-${r.counter}`,href:route("tasks.show",{id:s.id}),current:!0}],[h,j]=d.useState(!1);return e.jsxs(D,{user:a.user,header:e.jsxs("div",{className:"flex justify-between",children:[e.jsx("nav",{className:"flex","aria-label":"Breadcrumb",children:e.jsxs("ol",{role:"list",className:"flex items-center space-x-4",children:[e.jsx("li",{children:e.jsx("div",{children:e.jsxs("a",{href:`${route("projects.index")}`,className:"text-gray-400 hover:text-gray-700 flex items-center text-sm font-medium",children:[e.jsx(L,{className:"h-5 w-5 flex-shrink-0 mr-1","aria-hidden":"true"}),e.jsx("span",{className:"sr-only",children:"Home"}),"Projects"]})})}),x.map(o=>e.jsx("li",{children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("svg",{className:"h-5 w-5 flex-shrink-0 text-gray-300",fill:"currentColor",viewBox:"0 0 20 20","aria-hidden":"true",children:e.jsx("path",{d:"M5.555 17.776l8-16 .894.448-8 16-.894-.448z"})}),e.jsx("a",{href:o.href,className:`ml-4 text-sm antialiased ${o.current?"text-teal-600 font-bold":"text-gray-400 font-medium hover:text-gray-700"}`,"aria-current":o.current?"page":void 0,children:o.name})]})},o.name))]})}),e.jsx("div",{children:e.jsx(k,{actionObject:{addTimeLog:{action:()=>m(!0),label:"Add Time Log"},view:{action:()=>{j(!0)},label:"Archive"}},childIcon:e.jsx(T,{className:"cursor-pointer rotate-90 h-8 w-8"})})})]}),children:[e.jsx(A,{title:s.name}),e.jsxs("div",{className:"h-[calc(100dvh-160px)] overflow-y-auto -mr-5",children:[e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 lg:gap-x-6 2xl:gap-x-20",children:[e.jsx("div",{className:"space-y-5 px-1 col-span-2 mr-4",children:e.jsx(B,{})}),e.jsx("div",{className:"px-1 mr-0 lg:mr-4 2xl:ml-20",children:e.jsxs("div",{className:"border border-gray-300 rounded-md bg-transparent dark:bg-gray-900/10 shadow-sm dark:shadow-none hidden lg:block",children:[e.jsx("div",{className:"border-b border-gray-200 px-4 py-3 sm:px-4 rounded-t-md",children:e.jsx("h3",{className:"text-base font-semibold leading-6 text-gray-900 dark:text-gray-300",children:"Task Status"})}),e.jsx("table",{className:"table table-md",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm font-bold",children:"Priority Level"}),e.jsx("td",{className:"text-right",children:e.jsx(_,{level:s.priority_level})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm font-bold",children:"Task Board"}),e.jsx("td",{className:"font-bold text-sm text-right",children:i.name})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm font-bold",children:"Time Spent"}),e.jsx("td",{className:"font-bold text-right",children:`${t.weeks}w ${t.days}d ${t.hours}h ${t.minutes}m`})]}),s.is_archived===1&&e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm font-bold",children:"Status"}),e.jsx("td",{className:"font-bold text-right",children:"Archived"})]})]})})]})})]}),e.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 lg:gap-x-6 2xl:gap-x-20 mr-4",children:e.jsx("div",{className:"col-span-2",children:e.jsx(R,{})})})]}),e.jsx(g,{show:h,maxWidth:"lg",children:e.jsx(C,{setShow:j})}),e.jsx(g,{show:c,maxWidth:"sm",children:e.jsx(I,{setShowAddTimeLog:m})})]})}export{Z as default};
