import{W as p,j as e,r as j}from"./app-pnw_1hoo.js";import{I as i}from"./InputLabel-B3C7sjFb.js";import{P as g}from"./PrimaryButton-kmqNyWuS.js";import{S as h,D as f}from"./DangerButton-fMpvN226.js";import{T as c}from"./TextInput-pmi6S2fY.js";import{E as N}from"./ErrorInput-_wli_qqs.js";const _=({updateList:x,setShowCreate:s})=>{const{data:r,setData:n,post:o,processing:l,errors:t,reset:m}=p({name:"",date_started:"",date_ended:"",position:"",note:""}),v=a=>{a.preventDefault(),o(route("clients.store"),{onSuccess:u=>{s(!1),x(u.props.clients),m()}})};return e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("div",{children:e.jsx("h3",{className:"font-bold text-lg text-gray-700 dark:text-gray-300",children:"Create Client"})}),e.jsx("div",{})]}),e.jsxs("form",{className:"space-y-4 pt-4",onSubmit:v,children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(i,{value:"Client name"}),e.jsx("div",{children:e.jsx(c,{id:"client_name",name:"client_name",type:"text",value:r.name,onChange:a=>n("name",a.target.value)})}),e.jsx(N,{errors:t,errorKey:"name"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(i,{value:"Position"}),e.jsx("div",{children:e.jsx(c,{id:"position",name:"position",value:r.position,onChange:a=>n("position",a.target.value)})}),t.position&&e.jsx("p",{className:"text-sm text-error",children:t.position})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(i,{value:"Date started"}),e.jsxs("div",{children:[e.jsx(c,{type:"date",id:"date_started",name:"date_started",value:r.date_started,onChange:a=>n("date_started",a.target.value)}),t.date_started&&e.jsx("p",{className:"text-sm text-error",children:t.date_started})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(i,{value:"Date ended"}),e.jsx("div",{children:e.jsx(c,{type:"date",id:"date_ended",name:"date_ended",value:r.date_ended,onChange:a=>n("date_ended",a.target.value)})}),t.date_ended&&e.jsx("p",{className:"text-sm text-error",children:t.date_ended})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(i,{value:"Note"}),e.jsx("div",{children:e.jsx("textarea",{value:r.note,onChange:a=>n("note",a.target.value),className:"textarea border border-gray-300 dark:border-gray-700 focus:ring-gray-800 focus:outline-none focus:ring-1 focus:border-gray-600 h-24 w-full ",placeholder:"Short note on this client"})})]}),e.jsx("div",{className:"flex justify-end",children:e.jsxs("div",{className:"space-x-2",children:[e.jsx(h,{onClick:()=>{s(!1)},type:"button",children:"Cancel"}),e.jsx(g,{type:"submit",children:"Submit"})]})})]})]})},F=_,I=j.memo(function({client:s,updateClientList:r,resetSelected:n}){const{data:o,setData:l,put:t,processing:m,errors:v,reset:a}=p({name:"",date_started:"",date_ended:"",position:"",note:"",active:!0});j.useEffect(()=>{l({name:(s==null?void 0:s.name)||"",date_started:(s==null?void 0:s.date_started)||"",date_ended:(s==null?void 0:s.date_ended)||"",position:(s==null?void 0:s.position)||"",note:(s==null?void 0:s.note)||"",active:(s==null?void 0:s.active)||!0})},[s==null?void 0:s.id]);const u=d=>{d.preventDefault(),t(route("clients.update",{id:s.id}),{onSuccess:y=>{r(y.props.clients),n(),a()}})};return e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("div",{children:e.jsxs("h3",{className:"font-bold text-lg text-gray-700 dark:text-gray-300",children:["Edit Client ",(s==null?void 0:s.name)||""]})}),e.jsx("div",{})]}),e.jsxs("form",{className:"space-y-4 pt-4",onSubmit:u,children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(i,{value:"Client name"}),e.jsx("div",{children:e.jsx(c,{id:"client_name",name:"client_name",type:"text",value:o.name,onChange:d=>l("name",d.target.value)})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(i,{value:"Position"}),e.jsx("div",{children:e.jsx(c,{id:"position",name:"position",value:o.position,onChange:d=>l("position",d.target.value)})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(i,{value:"Date started"}),e.jsx("div",{children:e.jsx(c,{type:"date",id:"date_started",name:"date_started",value:o.date_started,onChange:d=>l("date_started",d.target.value)})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(i,{value:"Date ended"}),e.jsx("div",{children:e.jsx(c,{type:"date",id:"date_ended",name:"date_ended",value:o.date_ended,onChange:d=>l("date_ended",d.target.value)})})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(i,{value:"Note"}),e.jsx("div",{children:e.jsx("textarea",{value:o.note,onChange:d=>l("note",d.target.value),className:"textarea border border-gray-300 dark:border-gray-700 focus:ring-gray-800 focus:outline-none focus:ring-1 focus:border-gray-600 h-24 w-full ",placeholder:"Short note on this client"})})]}),e.jsx("div",{className:"flex justify-end",children:e.jsxs("div",{className:"space-x-2",children:[e.jsx(h,{onClick:()=>{n()},type:"button",children:"Close"}),e.jsx(g,{type:"submit",children:"Submit"})]})})]})]})}),w=j.memo(function({clientId:s,setDeleteClient:r,updateClientList:n}){const{delete:o}=p({}),l=t=>{t.preventDefault(),o(route("clients.destroy",{id:s}),{onSuccess:m=>{r(!1),n(m.props.clients)}})};return e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between items-center pb-4",children:[e.jsx("div",{children:e.jsx("h3",{className:"font-bold text-lg text-gray-700 dark:text-gray-300",children:"Confirm to delete the client"})}),e.jsx("div",{})]}),e.jsxs("form",{onSubmit:l,children:[e.jsx("div",{className:"pb-6",children:e.jsx("p",{className:"",children:"Are you sure to delete this client?"})}),e.jsx("div",{className:"flex justify-end",children:e.jsxs("div",{className:"flex space-x-2",children:[e.jsx(h,{type:"button",onClick:()=>r(!1),children:"Cancel"}),e.jsx(f,{type:"submit",children:"Delete"})]})})]})]})},(x,s)=>x.clientId===s.clientId);export{F as C,w as D,I as E};
