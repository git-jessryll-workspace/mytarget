import{j as e,a as i,d as r}from"./app-IeTSK-tL.js";import{P as c}from"./PrimaryButton-EosGIh22.js";import{T as t}from"./TextInput-PlUSa31n.js";import{A as d,Q as n}from"./AuthenticatedLayout-TWqcFy5M.js";import{a as h,C as x}from"./ChevronRightIcon-DuXIX0aL.js";import"./Bars3Icon-i7vWMIFl.js";import{P as j}from"./PriorityLevel-M-DCCDK4.js";import"./transition-wc5XYkds.js";import"./dialog-Mn_1d4wM.js";const y=({auth:a,tasks:l})=>e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Tasks"}),e.jsxs(d,{user:a.user,header:e.jsx("div",{className:"flex justify-between",children:e.jsx("div",{children:e.jsxs("h3",{className:"font-bold text-lg flex items-center",style:{letterSpacing:"0.5px"},children:[e.jsx(n,{className:"h-6 w-6 mr-3"}),"Tasks"]})})}),children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-2",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-2 col-span-2",children:[e.jsx(t,{placeholder:"Search"}),e.jsx(t,{type:"date"}),e.jsx("div",{children:e.jsx(c,{className:"",children:"Search"})})]}),e.jsxs("div",{className:"flex space-x-3 items-center justify-end",children:[e.jsx("div",{className:"font-bold text-sm",children:"1 - 10 of 10"}),e.jsxs("div",{className:"join space-x-1",children:[e.jsx("div",{children:e.jsx(r,{href:"#",className:"btn btn-sm bg-teal-600 hover:bg-teal-600/90 text-white",children:e.jsx(h,{className:"h-4 w-4"})})}),e.jsx("div",{children:e.jsx(r,{href:"#",className:"btn btn-sm bg-teal-600 hover:bg-teal-600/90 text-white",children:e.jsx(x,{className:"h-4 w-4"})})})]})]})]}),e.jsx("div",{className:"pt-4 h-[calc(100dvh-180px)] -mr-5 pr-3 mt-3 overflow-y-auto",children:e.jsxs("table",{className:"table table-lg",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Task Name"}),e.jsx("th",{children:"Project Name"}),e.jsx("th",{children:"Priority Level"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:l.data.map(s=>e.jsxs("tr",{className:"text-sm",children:[e.jsx("td",{children:s.id}),e.jsx("td",{children:s.name}),e.jsx("td",{children:s.client_project.project_name}),e.jsx("td",{className:"flex justify-center",children:e.jsx(j,{level:s.priority_level})}),e.jsx("td",{})]},s.id))})]})})]})]});export{y as default};
