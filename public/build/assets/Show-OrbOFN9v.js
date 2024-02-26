import{j as e,r as c,W as f,q as j,a as k}from"./app-pnw_1hoo.js";import{D as v,A as _,R as C}from"./AuthenticatedLayout-fI5SoyNf.js";import{D as g,M as y}from"./DangerButton-fMpvN226.js";import{I as h}from"./InputLabel-B3C7sjFb.js";import{P as B}from"./PrimaryButton-kmqNyWuS.js";import{T as p}from"./TextInput-pmi6S2fY.js";import{E as P}from"./Bars3Icon-cCr0DFmb.js";import{N as S,T as D}from"./TableList-SCR7WvZN.js";import{d as L}from"./date-olAZvHKQ.js";import{a as T,b as A}from"./CreateBoardForm-V5LVkSrG.js";import"./ErrorInput-_wli_qqs.js";import"./transition-CELxIJuG.js";import"./dialog-K8KWdwvm.js";import"./ChevronRightIcon-Nu5v_C9d.js";function b({className:o="w-6 h-6"}){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:o,children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"})})}const I=c.memo(function({boardItem:s,boardUp:a,boardDown:t}){console.log(a,s,t);const{patch:i,reset:l,setData:x}=f({}),d=async(m,n="up")=>{let r;n==="up"?r=[{board_from_id:m.id},{board_to_id:a.id||m.id}]:r=[{board_from_id:m.id},{board_to_id:t.id||m.id}],await i(route("boards.position",r),{onSuccess:()=>l()})};return e.jsxs("tr",{children:[e.jsx("td",{children:s.name}),e.jsxs("td",{className:"flex",children:[e.jsx("div",{className:"cursor-pointer",onClick:()=>d(s,"up"),children:e.jsx(b,{className:"h-6 w-6"})}),e.jsx("div",{className:"cursor-pointer",onClick:()=>{d(s,"down")},children:e.jsx(b,{className:"h-6 w-6 rotate-180"})})]})]})}),F=c.memo(function(){const{project_client:s}=j().props,{boards:a}=s;return console.log(a),e.jsx(e.Fragment,{children:e.jsxs("table",{className:"table table-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Board Name"}),e.jsx("th",{children:"Position"})]})}),e.jsx("tbody",{children:a.map((t,i)=>e.jsx(I,{boardItem:t,boardUp:a[i-1]||null,boardDown:a[i+1]||null},t.id))})]})})}),M=()=>{const{project_client:o,client:s,acronym:a}=j().props,{data:t,setData:i}=f({project_name:o.project_name,description:o.description});return e.jsx("div",{className:"h-[calc(100dvh-165px)] overflow-y-auto -mr-5",children:e.jsxs("div",{className:"w-full space-y-5 pl-1 pr-5",children:[e.jsxs("section",{className:"border dark:border-gray-700 bg-gray-900 p-4 md:p-6 rounded-md md:grid md:grid-cols-2",children:[e.jsx("header",{className:"pt-2 pb-4 md:pb-0",children:e.jsx("h2",{className:"text-normal md:text-lg font-medium text-gray-900 dark:text-gray-300",children:"General Settings"})}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(h,{value:"Project Name"}),e.jsx("div",{children:e.jsx(p,{value:t.project_name,onChange:l=>i("project_name",l.target.value)})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(h,{value:"Description"}),e.jsx("div",{children:e.jsx("textarea",{value:t.description,onChange:l=>i("description",l.target.value),className:"textarea border border-gray-300 dark:border-gray-700 focus:ring-gray-800 focus:outline-none focus:ring-1 focus:border-gray-600 h-44 w-full ",placeholder:"Short note on this client"})})]})]}),e.jsx("div",{className:"flex justify-end border-t border-gray-700 col-span-2 mt-3",children:e.jsx("div",{className:"pt-3",children:e.jsx(B,{children:"Save"})})})]}),e.jsxs("section",{className:"border dark:border-gray-700 bg-gray-900 p-4 md:p-6 rounded-md md:grid md:grid-cols-2",children:[e.jsx("header",{className:"pb-4 md:pb-0",children:e.jsx("h2",{className:"text-normal md:text-lg font-medium text-gray-900 dark:text-gray-300",children:"Boards"})}),e.jsx("div",{className:"space-y-4",children:e.jsx(F,{})})]}),e.jsxs("section",{className:"border dark:border-gray-700 bg-gray-900 p-4 md:p-6 rounded-md md:grid md:grid-cols-2",children:[e.jsx("header",{className:"pb-4 md:pb-0",children:e.jsx("h2",{className:"text-normal md:text-lg font-medium text-gray-900 dark:text-gray-300",children:"Client Information"})}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(h,{value:"Client Name"}),e.jsx("div",{children:e.jsx(p,{disabled:!0,value:s.name})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(h,{value:"Project Acronym"}),e.jsx("div",{children:e.jsx(p,{disabled:!0,value:a==null?void 0:a.acronym})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(h,{value:"Current Position"}),e.jsx("div",{children:e.jsx(p,{disabled:!0,value:s.position})})]})]}),e.jsx("div",{className:"flex justify-end col-span-2 mt-5 border-t border-gray-700",children:e.jsx("div",{className:"pt-3",children:e.jsx("button",{className:"px-3 py-2 rounded-md font-bold text-xs border shadow-md uppercase border-gray-300 dark:border-gray-600",children:"View Details"})})})]}),e.jsxs("section",{className:"border dark:border-gray-700 bg-gray-900 p-4 md:p-6 rounded-md md:flex md:justify-between items-center",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900 dark:text-gray-300",children:"Archive Project?"}),e.jsx("p",{className:"mt-1 text-sm text-gray-600 dark:text-gray-400",children:"It will hide on the project list and hide all tasks that connected to this project."})]}),e.jsx("div",{className:"pt-3 md:pt-0 text-balance",children:e.jsx(g,{children:"Archived"})})]}),e.jsxs("section",{className:"border dark:border-gray-700 bg-gray-900 p-4 md:p-6 rounded-md md:flex md:justify-between items-center",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900 dark:text-gray-300",children:"Delete Project?"}),e.jsx("p",{className:"mt-1 text-sm text-gray-600 dark:text-gray-400",children:"All tasks that connected on this project will be deleted."})]}),e.jsx("div",{className:"pt-3 md:pt-0 text-balance",children:e.jsx(g,{children:"Delete"})})]})]})})},q=()=>{const{tasks:o,search_query_task:s}=j().props,[a,t]=c.useState([]);c.useEffect(()=>{t(o.data)},[]);const i=d=>{t(d.data)},l={3:e.jsx("span",{className:"bg-red-500 text-white px-2 py-1 rounded-full text-xs uppercase font-bold",children:"High"}),2:e.jsx("span",{className:"bg-yellow-600 text-white px-2 py-1 rounded-full text-xs uppercase font-bold",children:"Medium"}),1:e.jsx("span",{className:"bg-gray-500 px-2 py-1 rounded-full text-xs uppercase font-bold",children:"Low"}),0:null},x=o.data.map(d=>({id:`#${d.acronym}-${d.counter}`,name:d.name,priority_level:l[d.priority_level],updated_at:L(d.updated_at),action:e.jsx(v,{actionObject:{view:{action:()=>{window.location.href=route("tasks.show",{id:d.id})},label:"View"}}})}));return e.jsxs(e.Fragment,{children:[e.jsx(S,{keyProps:"tasks",updateList:i,data:o,disableCreate:!0,search_query:s,routeControl:"projects.show",search_query_key:"search_query_task"}),e.jsx("div",{className:"h-[calc(100dvh-200px)] overflow-auto -mr-5 pr-3",children:e.jsx(D,{theadObject:{acronym_id:"#",name:"Name",priority_level:"Priority Level",updated_at:"Date Updated",action:""},items:x})})]})},X=({auth:o,project_client:s})=>{const[a,t]=c.useState(!1),[i,l]=c.useState(!1),[x,d]=c.useState([{name:"Tasks",code:"task",current:!0},{name:"Settings",code:"detail",current:!1}]),m=[{name:s.project_name,href:route("projects.show",{id:s.id}),current:!0}],n=x.find(r=>r.current);return e.jsxs(e.Fragment,{children:[e.jsx(k,{title:s.project_name}),e.jsxs(_,{user:o.user,header:e.jsxs("nav",{className:"flex justify-between items-center","aria-label":"Breadcrumb",children:[e.jsx("div",{children:e.jsxs("ol",{role:"list",className:"flex items-center space-x-4",children:[e.jsx("li",{children:e.jsx("div",{children:e.jsxs("a",{href:`${route("projects.index")}`,className:"text-gray-400 hover:text-gray-500 flex items-center text-sm font-medium",children:[e.jsx(C,{className:"h-5 w-5 flex-shrink-0 mr-1","aria-hidden":"true"}),e.jsx("span",{className:"sr-only",children:"Home"}),"Projects"]})})}),m.map(r=>e.jsx("li",{children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("svg",{className:"h-5 w-5 flex-shrink-0 text-gray-300",fill:"currentColor",viewBox:"0 0 20 20","aria-hidden":"true",children:e.jsx("path",{d:"M5.555 17.776l8-16 .894.448-8 16-.894-.448z"})}),e.jsx("a",{href:r.href,className:"ml-4 text-sm font-bold antialiased text-gray-500 hover:text-gray-700","aria-current":r.current?"page":void 0,children:r.name})]})},r.name))]})}),e.jsx("div",{children:e.jsx(v,{actionObject:{createTask:{action:()=>t(!0),label:"Add New Task"},view:{action:()=>{l(!0)},label:"Add New Board"}},childIcon:e.jsx(P,{className:"cursor-pointer rotate-90 h-6 w-6"})})})]}),children:[e.jsx("div",{className:"pb-4",children:e.jsx("div",{className:"border-b border-gray-500 dark:border-gray-500",children:e.jsx("nav",{className:"-mb-px flex space-x-3","aria-label":"Tabs",children:x.map(r=>e.jsx("a",{href:"#",onClick:N=>{N.preventDefault(),d(w=>w.map(u=>({...u,current:r.code===u.code})))},className:`${r.current?"border-teal-600 text-gray-600 dark:text-gray-300 font-bold":"border-transparent hover:border-teal-600 hover:text-gray-300"} group inline-flex items-center border-b-2 py-2 px-1 text-sm font-medium`,children:e.jsx("span",{children:r.name})},r.code))})})}),(n==null?void 0:n.code)==="task"&&e.jsx(q,{}),(n==null?void 0:n.code)==="detail"&&e.jsx(M,{})]}),e.jsx(y,{show:a,maxWidth:"sm",children:e.jsx(T,{setShow:t})}),e.jsx(y,{show:i,maxWidth:"sm",children:e.jsx(A,{setShow:l})})]})};export{X as default};
