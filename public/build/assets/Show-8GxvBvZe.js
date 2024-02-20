import{q as p,W as u,j as e,r as x,a as y}from"./app-IeTSK-tL.js";import{D as g,A as v,R as f}from"./AuthenticatedLayout-TWqcFy5M.js";import{D as h}from"./DangerButton-2sRDevm6.js";import{I as n}from"./InputLabel-jnQ7j8BR.js";import{P as b}from"./PrimaryButton-EosGIh22.js";import{T as o}from"./TextInput-PlUSa31n.js";import{N,T as k}from"./TableList-lpKZCFgZ.js";import{d as w}from"./date-olAZvHKQ.js";import"./Bars3Icon-i7vWMIFl.js";import"./transition-wc5XYkds.js";import"./dialog-Mn_1d4wM.js";import"./ChevronRightIcon-DuXIX0aL.js";const _=()=>{const{project_client:l,client:t,acronym:d}=p().props,{data:i,setData:c}=u({project_name:l.project_name,description:l.description});return e.jsx("div",{className:"h-[calc(100dvh-200px)] overflow-y-auto -mr-5",children:e.jsxs("div",{className:"max-w-7xl w-3/4 mx-auto space-y-5 px-1",children:[e.jsxs("section",{className:"border dark:border-gray-700 bg-gray-900 p-6 rounded-md grid grid-cols-1 md:grid-cols-2",children:[e.jsx("header",{className:"pt-2",children:e.jsx("h2",{className:"text-lg font-medium text-gray-900 dark:text-gray-300",children:"General Settings"})}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(n,{value:"Project Name"}),e.jsx("div",{children:e.jsx(o,{value:i.project_name,onChange:s=>c("project_name",s.target.value)})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(n,{value:"Description"}),e.jsx("div",{children:e.jsx("textarea",{value:i.description,onChange:s=>c("description",s.target.value),className:"textarea border border-gray-300 dark:border-gray-700 focus:ring-gray-800 focus:outline-none focus:ring-1 focus:border-gray-600 h-44 w-full ",placeholder:"Short note on this client"})})]})]}),e.jsx("div",{className:"flex justify-end border-t border-gray-700 col-span-2 mt-3",children:e.jsx("div",{className:"pt-3",children:e.jsx(b,{children:"Save"})})})]}),e.jsxs("section",{className:"border dark:border-gray-700 bg-gray-900 p-6 rounded-md grid grid-cols-1 md:grid-cols-2",children:[e.jsx("header",{children:e.jsx("h2",{className:"text-lg font-medium text-gray-900 dark:text-gray-300",children:"Client Information"})}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(n,{value:"Client Name"}),e.jsx("div",{children:e.jsx(o,{disabled:!0,value:t.name})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(n,{value:"Project Acronym"}),e.jsx("div",{children:e.jsx(o,{value:d==null?void 0:d.acronym})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(n,{value:"Current Position"}),e.jsx("div",{children:e.jsx(o,{disabled:!0,value:t.position})})]})]}),e.jsx("div",{className:"flex justify-end col-span-2 mt-5 border-t border-gray-700",children:e.jsx("div",{className:"pt-3",children:e.jsx("button",{className:"px-3 py-2 rounded-md font-bold text-xs border shadow-md uppercase border-gray-300 dark:border-gray-600",children:"View Details"})})})]}),e.jsxs("section",{className:"border dark:border-gray-700 bg-gray-900 p-6 rounded-md flex justify-between items-center",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900 dark:text-gray-300",children:"Archive Project?"}),e.jsx("p",{className:"mt-1 text-sm text-gray-600 dark:text-gray-400",children:"It will hide on the project list and hide all tasks that connected to this project."})]}),e.jsx("div",{children:e.jsx(h,{children:"Archived"})})]}),e.jsxs("section",{className:"border dark:border-gray-700 bg-gray-900 p-6 rounded-md flex justify-between items-center",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900 dark:text-gray-300",children:"Delete Project?"}),e.jsx("p",{className:"mt-1 text-sm text-gray-600 dark:text-gray-400",children:"All tasks that connected on this project will be deleted."})]}),e.jsx("div",{children:e.jsx(h,{children:"Delete"})})]})]})})},D=()=>{const{tasks:l,search_query_task:t}=p().props;x.useState(!1);const[d,i]=x.useState([]);x.useEffect(()=>{i(l.data)},[]);const c=a=>{i(a.data)},s={3:e.jsx("span",{className:"bg-red-500 text-white px-2 py-1 rounded-full text-xs uppercase font-bold",children:"High"}),2:e.jsx("span",{className:"bg-yellow-600 text-white px-2 py-1 rounded-full text-xs uppercase font-bold",children:"Medium"}),1:e.jsx("span",{className:"bg-gray-500 px-2 py-1 rounded-full text-xs uppercase font-bold",children:"Low"}),0:null},r=d.map(a=>({id:`#${a.acronym}-${a.counter}`,name:a.name,priority_level:s[a.priority_level],updated_at:w(a.updated_at),action:e.jsx(g,{actionObject:{view:{action:()=>{window.location.href=route("tasks.show",{id:a.id})},label:"View"}}})}));return e.jsxs(e.Fragment,{children:[e.jsx(N,{keyProps:"tasks",updateList:c,data:l,disableCreate:!0,search_query:t,routeControl:"projects.show",search_query_key:"search_query_task"}),e.jsx("div",{className:"h-[calc(100dvh-240px)] overflow-auto -mr-5 pr-3",children:e.jsx(k,{theadObject:{acronym_id:"#",name:"Name",priority_level:"Priority Level",updated_at:"Date Updated",action:""},items:r})})]})},R=({auth:l,project_client:t})=>{const[d,i]=x.useState([{name:"Tasks",code:"task",current:!0},{name:"Settings",code:"detail",current:!1}]),c=[{name:t.project_name,href:route("projects.show",{id:t.id}),current:!0}],s=d.find(r=>r.current);return e.jsxs(e.Fragment,{children:[e.jsx(y,{title:t.project_name}),e.jsxs(v,{user:l.user,header:e.jsx("nav",{className:"flex","aria-label":"Breadcrumb",children:e.jsxs("ol",{role:"list",className:"flex items-center space-x-4",children:[e.jsx("li",{children:e.jsx("div",{children:e.jsxs("a",{href:`${route("projects.index")}`,className:"text-gray-400 hover:text-gray-500 flex items-center text-sm font-medium",children:[e.jsx(f,{className:"h-5 w-5 flex-shrink-0 mr-1","aria-hidden":"true"}),e.jsx("span",{className:"sr-only",children:"Home"}),"Projects"]})})}),c.map(r=>e.jsx("li",{children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("svg",{className:"h-5 w-5 flex-shrink-0 text-gray-300",fill:"currentColor",viewBox:"0 0 20 20","aria-hidden":"true",children:e.jsx("path",{d:"M5.555 17.776l8-16 .894.448-8 16-.894-.448z"})}),e.jsx("a",{href:r.href,className:"ml-4 text-sm font-bold antialiased text-gray-500 hover:text-gray-700","aria-current":r.current?"page":void 0,children:r.name})]})},r.name))]})}),children:[e.jsx("div",{className:"pb-4",children:e.jsx("div",{className:"border-b border-gray-500 dark:border-gray-500",children:e.jsx("nav",{className:"-mb-px flex space-x-3","aria-label":"Tabs",children:d.map(r=>e.jsx("a",{href:"#",onClick:a=>{a.preventDefault(),i(j=>j.map(m=>({...m,current:r.code===m.code})))},className:`${r.current?"border-teal-600 text-gray-600 dark:text-gray-300 font-bold":"border-transparent hover:border-teal-600 hover:text-gray-300"} group inline-flex items-center border-b-2 py-2 px-1 text-sm font-medium`,children:e.jsx("span",{children:r.name})},r.code))})})}),(s==null?void 0:s.code)==="task"&&e.jsx(D,{}),(s==null?void 0:s.code)==="detail"&&e.jsx(_,{})]})]})};export{R as default};