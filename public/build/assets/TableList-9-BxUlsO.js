import{r as d,j as e}from"./app-nzOvLD-d.js";const x=({theadObject:a,items:r,uniqueKey:l="id",indexPrio:n=-1})=>e.jsxs("table",{className:"table table-sm",children:[e.jsx("thead",{children:e.jsx("tr",{children:Object.entries(a).map(([s,t])=>e.jsx("th",{children:t},s))})}),e.jsxs("tbody",{children:[r.length===0&&e.jsx("tr",{children:e.jsx("td",{colSpan:Object.entries(a).length,className:"text-center",children:e.jsx("h3",{children:"No data available"})})}),r.map(s=>e.jsx("tr",{className:"hover font-semibold text-balance",children:Object.entries(s).map(([t,c],i)=>e.jsx("td",{className:`${n===i?"w-[65%]":"w-auto"}`,children:c},t))},s[l]))]})]}),o=d.memo(x);export{o as T};