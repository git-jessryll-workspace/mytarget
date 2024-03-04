import{r as c,W as S,j as e,q as w,a as _}from"./app-I37UwJ8Q.js";import{X as P,D as C,A as B}from"./AuthenticatedLayout-_LED3Hsy.js";import{M as b,S as T,D as N}from"./DangerButton-nVdXsmnN.js";import{I as p}from"./InputLabel-wp07J9qd.js";import{P as A}from"./PrimaryButton-bxyMUJE_.js";import{T as u}from"./TextInput-6ikZNGhg.js";import{A as k,P as D,a as E,R as L,E as F}from"./QuestionMarkIcon-R6bz2KD4.js";import{N as q}from"./NavPanel-Hn58XwUs.js";import{T as I}from"./TableList-QUTrjGB7.js";import{U as $}from"./AddTimeLogForm-VCy16JFL.js";import{T as M}from"./TaskStatus-NoojAPuR.js";import{a as W,b as O}from"./CreateBoardForm-XUNh5wCs.js";import"./ErrorInput-XJQb45Yl.js";import"./transition-IlJ0A8HK.js";import"./dialog-xFae61Sv.js";import"./date-olAZvHKQ.js";import"./TextArea-g7yk2gnD.js";const R=c.memo(function({boardItem:s,boardUp:r,boardDown:t}){const{patch:d,reset:o}=S({}),[x,n]=c.useState(null),[j,h]=c.useState(!1),[a,i]=c.useState(s.name),v=async(m="up")=>{let g;m==="up"?g=[{board_from_id:s.id},{board_to_id:r.id||s.id}]:g=[{board_from_id:s.id},{board_to_id:t.id||s.id}],await d(route("boards.position",g),{onSuccess:()=>o()})},f=async m=>{m.preventDefault(),await d(route("boards.archive",[{board_id:s.id}]),{onSuccess:()=>o()})},y=async()=>{await d(route("boards.name",[{board_id:s.id,name:a}]),{onSuccess:()=>o()})};return e.jsxs(e.Fragment,{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"w-[75%]",children:x?e.jsxs("div",{className:"flex space-x-2 items-center",children:[e.jsx(u,{value:a,onChange:m=>i(m.target.value),onKeyDown:m=>{m.key==="Enter"&&(n(!1),y())}}),e.jsx("div",{className:"cursor-pointer hover:opacity-75",onClick:()=>{n(!1),i(s.name)},children:e.jsx(P,{})})]}):e.jsx("span",{className:"cursor-pointer",onClick:()=>n(!0),children:a})}),e.jsxs("td",{className:"flex space-x-1",children:[e.jsx("div",{className:`${r?"cursor-pointer hover:opacity-75":"cursor-not-allowed opacity-50"}`,onClick:()=>{r&&v("up")},children:e.jsx(k,{className:"h-6 w-6"})}),e.jsx("div",{className:`${t?"cursor-pointer hover:opacity-75":"cursor-not-allowed opacity-50"}`,onClick:()=>{t&&v("down")},children:e.jsx(k,{className:"h-6 w-6 rotate-180"})}),e.jsx("div",{className:"cursor-pointer hover:opacity-75",onClick:()=>n(!0),children:e.jsx(D,{})}),e.jsx("div",{className:"cursor-pointer hover:opacity-75",onClick:()=>h(!0),children:e.jsx(E,{className:"w-6 h-6 text-red-500 dark:text-red-400"})})]})]}),e.jsx(b,{show:j,maxWidth:"sm",children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between items-center pb-4",children:[e.jsx("div",{children:e.jsx("h3",{className:"font-bold text-lg text-gray-700 dark:text-gray-300",children:"Confirm to arvhice the board"})}),e.jsx("div",{})]}),e.jsxs("form",{onSubmit:f,children:[e.jsx("div",{className:"pb-6",children:e.jsx("p",{className:"",children:"All tasks that connected to this board will be archived."})}),e.jsx("div",{className:"flex justify-end",children:e.jsxs("div",{className:"flex space-x-2",children:[e.jsx(T,{type:"button",onClick:()=>h(!1),children:"Cancel"}),e.jsx(N,{type:"submit",children:"Archive"})]})})]})]})})]})}),V=c.memo(function(){const{project_client:s}=w().props,{boards:r}=s;return console.log(r),e.jsx(e.Fragment,{children:e.jsxs("table",{className:"table table-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Board Name"}),e.jsx("th",{children:"Position"})]})}),e.jsx("tbody",{children:r.map((t,d)=>e.jsx(R,{boardItem:t,boardUp:r[d-1]||null,boardDown:r[d+1]||null},t.id))})]})})}),X=()=>{const{project_client:l,client:s,acronym:r}=w().props,{data:t,setData:d}=S({project_name:l.project_name,description:l.description});return e.jsx("div",{className:"h-[calc(100dvh-165px)] overflow-y-auto -mr-5",children:e.jsxs("div",{className:"w-full space-y-5 pl-1 pr-5",children:[e.jsxs("section",{className:"border dark:border-gray-700 bg-gray-900 p-4 md:p-6 rounded-md md:grid md:grid-cols-2",children:[e.jsx("header",{className:"pt-2 pb-4 md:pb-0",children:e.jsx("h2",{className:"text-normal md:text-lg font-medium text-gray-900 dark:text-gray-300",children:"General Settings"})}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(p,{value:"Project Name"}),e.jsx("div",{children:e.jsx(u,{value:t.project_name,onChange:o=>d("project_name",o.target.value)})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(p,{value:"Description"}),e.jsx("div",{children:e.jsx("textarea",{value:t.description,onChange:o=>d("description",o.target.value),className:"textarea border border-gray-300 dark:border-gray-700 focus:ring-gray-800 focus:outline-none focus:ring-1 focus:border-gray-600 h-44 w-full ",placeholder:"Short note on this client"})})]})]}),e.jsx("div",{className:"flex justify-end border-t border-gray-700 col-span-2 mt-3",children:e.jsx("div",{className:"pt-3",children:e.jsx(A,{children:"Save"})})})]}),e.jsxs("section",{className:"border dark:border-gray-700 bg-gray-900 p-4 md:p-6 rounded-md md:grid md:grid-cols-2",children:[e.jsx("header",{className:"pb-4 md:pb-0",children:e.jsx("h2",{className:"text-normal md:text-lg font-medium text-gray-900 dark:text-gray-300",children:"Boards"})}),e.jsx("div",{className:"space-y-4",children:e.jsx(V,{})})]}),e.jsxs("section",{className:"border dark:border-gray-700 bg-gray-900 p-4 md:p-6 rounded-md md:grid md:grid-cols-2",children:[e.jsx("header",{className:"pb-4 md:pb-0",children:e.jsx("h2",{className:"text-normal md:text-lg font-medium text-gray-900 dark:text-gray-300",children:"Client Information"})}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(p,{value:"Client Name"}),e.jsx("div",{children:e.jsx(u,{disabled:!0,value:s.name})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(p,{value:"Project Acronym"}),e.jsx("div",{children:e.jsx(u,{disabled:!0,value:r==null?void 0:r.acronym})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(p,{value:"Current Position"}),e.jsx("div",{children:e.jsx(u,{disabled:!0,value:s.position})})]})]}),e.jsx("div",{className:"flex justify-end col-span-2 mt-5 border-t border-gray-700",children:e.jsx("div",{className:"pt-3",children:e.jsx("button",{className:"px-3 py-2 rounded-md font-bold text-xs border shadow-md uppercase border-gray-300 dark:border-gray-600",children:"View Details"})})})]}),e.jsxs("section",{className:"border dark:border-gray-700 bg-gray-900 p-4 md:p-6 rounded-md md:flex md:justify-between items-center",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900 dark:text-gray-300",children:"Archive Project?"}),e.jsx("p",{className:"mt-1 text-sm text-gray-600 dark:text-gray-400",children:"It will hide on the project list and hide all tasks that connected to this project."})]}),e.jsx("div",{className:"pt-3 md:pt-0 text-balance",children:e.jsx(N,{children:"Archived"})})]}),e.jsxs("section",{className:"border dark:border-gray-700 bg-gray-900 p-4 md:p-6 rounded-md md:flex md:justify-between items-center",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900 dark:text-gray-300",children:"Delete Project?"}),e.jsx("p",{className:"mt-1 text-sm text-gray-600 dark:text-gray-400",children:"All tasks that connected on this project will be deleted."})]}),e.jsx("div",{className:"pt-3 md:pt-0 text-balance",children:e.jsx(N,{children:"Delete"})})]})]})})},U=()=>{const{tasks:l,search_query_task:s}=w().props,[r,t]=c.useState([]),[d,o]=c.useState(null),[x,n]=c.useState(!1);c.useEffect(()=>{t(l.data)},[]);const j=a=>{t(a.data)},h=l.data.map(a=>({id:`${a.acronym}-${a.counter}`,name:e.jsx("p",{className:"line-clamp-1",children:a.name}),priority_level:a.priority_level,status:e.jsx(M,{status:a.task_status}),action:e.jsx(C,{actionObject:{edit:{action:()=>{o(a),n(!0)},label:"Edit"},view:{action:()=>{window.location.href=route("tasks.show",{id:a.id})},label:"View"}}})}));return e.jsxs(e.Fragment,{children:[e.jsx(q,{keyProps:"tasks",updateList:j,data:l,disableCreate:!0,search_query:s,routeControl:"projects.show",search_query_key:"search_query_task"}),e.jsx("div",{className:"h-[calc(100dvh-200px)] overflow-auto -mr-5 pr-3",children:e.jsx(I,{theadObject:{acronym_id:"#",name:"Name",priority_level:"Priority Level",status:"Status",action:""},items:h,indexPrio:1})}),e.jsx(b,{show:x,children:e.jsx($,{task:d,setShow:n})})]})},le=({auth:l,project_client:s})=>{const{boards:r}=s,[t,d]=c.useState(!1),[o,x]=c.useState(!1),[n,j]=c.useState([{name:"Tasks",code:"task",current:!0},{name:"Settings",code:"detail",current:!1}]),h=[{name:s.project_name,href:route("projects.show",{id:s.id}),current:!0}],a=n.find(i=>i.current);return e.jsxs(e.Fragment,{children:[e.jsx(_,{title:s.project_name}),e.jsxs(B,{user:l.user,header:e.jsxs("nav",{className:"flex justify-between items-center","aria-label":"Breadcrumb",children:[e.jsx("div",{children:e.jsxs("ol",{role:"list",className:"flex items-center space-x-4",children:[e.jsx("li",{children:e.jsx("div",{children:e.jsxs("a",{href:`${route("projects.index")}`,className:"text-gray-400 hover:text-gray-500 flex items-center text-sm font-medium",children:[e.jsx(L,{className:"h-5 w-5 flex-shrink-0 mr-3","aria-hidden":"true"}),e.jsx("span",{className:"sr-only",children:"Projects"}),"Projects"]})})}),h.map(i=>e.jsx("li",{children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("svg",{className:"h-5 w-5 flex-shrink-0 text-gray-300",fill:"currentColor",viewBox:"0 0 20 20","aria-hidden":"true",children:e.jsx("path",{d:"M5.555 17.776l8-16 .894.448-8 16-.894-.448z"})}),e.jsx("a",{href:i.href,className:"ml-4 text-sm font-bold antialiased text-gray-500 hover:text-gray-700","aria-current":i.current?"page":void 0,children:i.name})]})},i.name))]})}),e.jsx("div",{children:e.jsx(C,{actionObject:{createTask:{action:()=>d(!0),label:"Add New Task",disabled:r.length===0},view:{action:()=>{x(!0)},label:"Add New Board"}},childIcon:e.jsx(F,{className:"cursor-pointer rotate-90 h-6 w-6"})})})]}),children:[e.jsx("div",{className:"pb-4",children:e.jsx("div",{className:"border-b border-gray-500 dark:border-gray-500",children:e.jsx("nav",{className:"-mb-px flex space-x-3","aria-label":"Tabs",children:n.map(i=>e.jsx("a",{href:"#",onClick:v=>{v.preventDefault(),j(f=>f.map(y=>({...y,current:i.code===y.code})))},className:`${i.current?"border-teal-600 text-gray-600 dark:text-gray-300 font-bold":"border-transparent hover:border-teal-600 hover:text-gray-300"} group inline-flex items-center border-b-2 py-2 px-1 text-sm font-medium`,children:e.jsx("span",{children:i.name})},i.code))})})}),(a==null?void 0:a.code)==="task"&&e.jsx(U,{}),(a==null?void 0:a.code)==="detail"&&e.jsx(X,{})]}),e.jsx(b,{show:t,maxWidth:"sm",children:e.jsx(W,{setShow:d})}),e.jsx(b,{show:o,maxWidth:"sm",children:e.jsx(O,{setShow:x})})]})};export{le as default};
