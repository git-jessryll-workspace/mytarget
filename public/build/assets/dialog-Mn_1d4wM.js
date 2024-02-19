import{m as p,r as s,c as Ze,e as ne}from"./app-IeTSK-tL.js";import{e as Q,f as B,l as R,u as O,s as se,o as g,U as T,C as L,t as ce,y as P,p as et,g as ye,T as tt,c as $e,O as Ee,b as nt,d as q}from"./transition-wc5XYkds.js";var we;let N=(we=p.useId)!=null?we:function(){let e=Q(),[t,n]=p.useState(e?()=>B.nextId():null);return R(()=>{t===null&&n(B.nextId())},[t]),t!=null?""+t:void 0};function Te(e){return B.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let re=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var F=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(F||{}),Le=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Le||{}),rt=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(rt||{});function ot(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(re)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var Se=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(Se||{});function lt(e,t=0){var n;return e===((n=Te(e))==null?void 0:n.body)?!1:O(t,{0(){return e.matches(re)},1(){let r=e;for(;r!==null;){if(r.matches(re))return!0;r=r.parentElement}return!1}})}var at=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(at||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function A(e){e==null||e.focus({preventScroll:!0})}let ut=["textarea","input"].join(",");function it(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,ut))!=null?n:!1}function st(e,t=n=>n){return e.slice().sort((n,r)=>{let l=t(n),a=t(r);if(l===null||a===null)return 0;let o=l.compareDocumentPosition(a);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function X(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:l=[]}={}){let a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,o=Array.isArray(e)?n?st(e):e:ot(e);l.length>0&&o.length>1&&(o=o.filter(v=>!l.includes(v))),r=r??a.activeElement;let u=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),i=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,o.indexOf(r))-1;if(t&4)return Math.max(0,o.indexOf(r))+1;if(t&8)return o.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),f=t&32?{preventScroll:!0}:{},c=0,d=o.length,E;do{if(c>=d||c+d<=0)return 0;let v=i+c;if(t&16)v=(v+d)%d;else{if(v<0)return 3;if(v>=d)return 1}E=o[v],E==null||E.focus(f),c+=u}while(E!==a.activeElement);return t&6&&it(E)&&E.select(),2}function Pe(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function ct(){return/Android/gi.test(window.navigator.userAgent)}function dt(){return Pe()||ct()}function K(e,t,n){let r=se(t);s.useEffect(()=>{function l(a){r.current(a)}return document.addEventListener(e,l,n),()=>document.removeEventListener(e,l,n)},[e,n])}function De(e,t,n){let r=se(t);s.useEffect(()=>{function l(a){r.current(a)}return window.addEventListener(e,l,n),()=>window.removeEventListener(e,l,n)},[e,n])}function ft(e,t,n=!0){let r=s.useRef(!1);s.useEffect(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);function l(o,u){if(!r.current||o.defaultPrevented)return;let i=u(o);if(i===null||!i.getRootNode().contains(i)||!i.isConnected)return;let f=function c(d){return typeof d=="function"?c(d()):Array.isArray(d)||d instanceof Set?d:[d]}(e);for(let c of f){if(c===null)continue;let d=c instanceof HTMLElement?c:c.current;if(d!=null&&d.contains(i)||o.composed&&o.composedPath().includes(d))return}return!lt(i,Se.Loose)&&i.tabIndex!==-1&&o.preventDefault(),t(o,i)}let a=s.useRef(null);K("pointerdown",o=>{var u,i;r.current&&(a.current=((i=(u=o.composedPath)==null?void 0:u.call(o))==null?void 0:i[0])||o.target)},!0),K("mousedown",o=>{var u,i;r.current&&(a.current=((i=(u=o.composedPath)==null?void 0:u.call(o))==null?void 0:i[0])||o.target)},!0),K("click",o=>{dt()||a.current&&(l(o,()=>a.current),a.current=null)},!0),K("touchend",o=>l(o,()=>o.target instanceof HTMLElement?o.target:null),!0),De("blur",o=>l(o,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function U(...e){return s.useMemo(()=>Te(...e),[...e])}function de(e,t){let n=s.useRef([]),r=g(e);s.useEffect(()=>{let l=[...n.current];for(let[a,o]of t.entries())if(n.current[a]!==o){let u=r(t,l);return n.current=t,u}},[r,...t])}let pt="div";var z=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(z||{});function mt(e,t){var n;let{features:r=1,...l}=e,a={ref:t,"aria-hidden":(r&2)===2?!0:(n=l["aria-hidden"])!=null?n:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return L({ourProps:a,theirProps:l,slot:{},defaultTag:pt,name:"Hidden"})}let oe=T(mt);function vt(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}let M=[];vt(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&M[0]!==t.target&&(M.unshift(t.target),M=M.filter(n=>n!=null&&n.isConnected),M.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function gt(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(t==null?void 0:t.getAttribute("disabled"))==="";return r&&ht(n)?!1:r}function ht(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}var Me=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Me||{});function Fe(e,t,n,r){let l=se(n);s.useEffect(()=>{e=e??window;function a(o){l.current(o)}return e.addEventListener(t,a,r),()=>e.removeEventListener(t,a,r)},[e,t,r])}function Ce(e){let t=g(e),n=s.useRef(!1);s.useEffect(()=>(n.current=!1,()=>{n.current=!0,ce(()=>{n.current&&t()})}),[t])}var H=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(H||{});function Et(){let e=s.useRef(0);return De("keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function Ae(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}let wt="div";var Re=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Re||{});function bt(e,t){let n=s.useRef(null),r=P(n,t),{initialFocus:l,containers:a,features:o=30,...u}=e;Q()||(o=1);let i=U(n);Tt({ownerDocument:i},!!(o&16));let f=Lt({ownerDocument:i,container:n,initialFocus:l},!!(o&2));St({ownerDocument:i,container:n,containers:a,previousActiveElement:f},!!(o&8));let c=Et(),d=g(y=>{let h=n.current;h&&(D=>D())(()=>{O(c.current,{[H.Forwards]:()=>{X(h,F.First,{skipElements:[y.relatedTarget]})},[H.Backwards]:()=>{X(h,F.Last,{skipElements:[y.relatedTarget]})}})})}),E=et(),v=s.useRef(!1),$={ref:r,onKeyDown(y){y.key=="Tab"&&(v.current=!0,E.requestAnimationFrame(()=>{v.current=!1}))},onBlur(y){let h=Ae(a);n.current instanceof HTMLElement&&h.add(n.current);let D=y.relatedTarget;D instanceof HTMLElement&&D.dataset.headlessuiFocusGuard!=="true"&&(xe(h,D)||(v.current?X(n.current,O(c.current,{[H.Forwards]:()=>F.Next,[H.Backwards]:()=>F.Previous})|F.WrapAround,{relativeTo:y.target}):y.target instanceof HTMLElement&&A(y.target)))}};return p.createElement(p.Fragment,null,!!(o&4)&&p.createElement(oe,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:d,features:z.Focusable}),L({ourProps:$,theirProps:u,defaultTag:wt,name:"FocusTrap"}),!!(o&4)&&p.createElement(oe,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:d,features:z.Focusable}))}let yt=T(bt),k=Object.assign(yt,{features:Re});function $t(e=!0){let t=s.useRef(M.slice());return de(([n],[r])=>{r===!0&&n===!1&&ce(()=>{t.current.splice(0)}),r===!1&&n===!0&&(t.current=M.slice())},[e,M,t]),g(()=>{var n;return(n=t.current.find(r=>r!=null&&r.isConnected))!=null?n:null})}function Tt({ownerDocument:e},t){let n=$t(t);de(()=>{t||(e==null?void 0:e.activeElement)===(e==null?void 0:e.body)&&A(n())},[t]),Ce(()=>{t&&A(n())})}function Lt({ownerDocument:e,container:t,initialFocus:n},r){let l=s.useRef(null),a=ye();return de(()=>{if(!r)return;let o=t.current;o&&ce(()=>{if(!a.current)return;let u=e==null?void 0:e.activeElement;if(n!=null&&n.current){if((n==null?void 0:n.current)===u){l.current=u;return}}else if(o.contains(u)){l.current=u;return}n!=null&&n.current?A(n.current):X(o,F.First)===Le.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),l.current=e==null?void 0:e.activeElement})},[r]),l}function St({ownerDocument:e,container:t,containers:n,previousActiveElement:r},l){let a=ye();Fe(e==null?void 0:e.defaultView,"focus",o=>{if(!l||!a.current)return;let u=Ae(n);t.current instanceof HTMLElement&&u.add(t.current);let i=r.current;if(!i)return;let f=o.target;f&&f instanceof HTMLElement?xe(u,f)?(r.current=f,A(f)):(o.preventDefault(),o.stopPropagation(),A(i)):A(r.current)},!0)}function xe(e,t){for(let n of e)if(n.contains(t))return!0;return!1}let Oe=s.createContext(!1);function Pt(){return s.useContext(Oe)}function le(e){return p.createElement(Oe.Provider,{value:e.force},e.children)}function Dt(e){let t=Pt(),n=s.useContext(Ne),r=U(e),[l,a]=s.useState(()=>{if(!t&&n!==null||B.isServer)return null;let o=r==null?void 0:r.getElementById("headlessui-portal-root");if(o)return o;if(r===null)return null;let u=r.createElement("div");return u.setAttribute("id","headlessui-portal-root"),r.body.appendChild(u)});return s.useEffect(()=>{l!==null&&(r!=null&&r.body.contains(l)||r==null||r.body.appendChild(l))},[l,r]),s.useEffect(()=>{t||n!==null&&a(n.current)},[n,a,t]),l}let Mt=s.Fragment;function Ft(e,t){let n=e,r=s.useRef(null),l=P(tt(c=>{r.current=c}),t),a=U(r),o=Dt(r),[u]=s.useState(()=>{var c;return B.isServer?null:(c=a==null?void 0:a.createElement("div"))!=null?c:null}),i=s.useContext(ae),f=Q();return R(()=>{!o||!u||o.contains(u)||(u.setAttribute("data-headlessui-portal",""),o.appendChild(u))},[o,u]),R(()=>{if(u&&i)return i.register(u)},[i,u]),Ce(()=>{var c;!o||!u||(u instanceof Node&&o.contains(u)&&o.removeChild(u),o.childNodes.length<=0&&((c=o.parentElement)==null||c.removeChild(o)))}),f?!o||!u?null:Ze.createPortal(L({ourProps:{ref:l},theirProps:n,defaultTag:Mt,name:"Portal"}),u):null}let Ct=s.Fragment,Ne=s.createContext(null);function At(e,t){let{target:n,...r}=e,l={ref:P(t)};return p.createElement(Ne.Provider,{value:n},L({ourProps:l,theirProps:r,defaultTag:Ct,name:"Popover.Group"}))}let ae=s.createContext(null);function Rt(){let e=s.useContext(ae),t=s.useRef([]),n=g(a=>(t.current.push(a),e&&e.register(a),()=>r(a))),r=g(a=>{let o=t.current.indexOf(a);o!==-1&&t.current.splice(o,1),e&&e.unregister(a)}),l=s.useMemo(()=>({register:n,unregister:r,portals:t}),[n,r,t]);return[t,s.useMemo(()=>function({children:a}){return p.createElement(ae.Provider,{value:l},a)},[l])]}let xt=T(Ft),Ot=T(At),ue=Object.assign(xt,{Group:Ot});function Nt(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const kt=typeof Object.is=="function"?Object.is:Nt,{useState:It,useEffect:Ht,useLayoutEffect:Bt,useDebugValue:Ut}=ne;function _t(e,t,n){const r=t(),[{inst:l},a]=It({inst:{value:r,getSnapshot:t}});return Bt(()=>{l.value=r,l.getSnapshot=t,ee(l)&&a({inst:l})},[e,r,t]),Ht(()=>(ee(l)&&a({inst:l}),e(()=>{ee(l)&&a({inst:l})})),[e]),Ut(r),r}function ee(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!kt(n,r)}catch{return!0}}function Wt(e,t,n){return t()}const jt=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Yt=!jt,Vt=Yt?Wt:_t,Gt="useSyncExternalStore"in ne?(e=>e.useSyncExternalStore)(ne):Vt;function qt(e){return Gt(e.subscribe,e.getSnapshot,e.getSnapshot)}function Kt(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(l){return r.add(l),()=>r.delete(l)},dispatch(l,...a){let o=t[l].call(n,...a);o&&(n=o,r.forEach(u=>u()))}}}function Xt(){let e;return{before({doc:t}){var n;let r=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-r.clientWidth},after({doc:t,d:n}){let r=t.documentElement,l=r.clientWidth-r.offsetWidth,a=e-l;n.style(r,"paddingRight",`${a}px`)}}}function zt(){return Pe()?{before({doc:e,d:t,meta:n}){function r(l){return n.containers.flatMap(a=>a()).some(a=>a.contains(l))}t.microTask(()=>{var l;if(window.getComputedStyle(e.documentElement).scrollBehavior!=="auto"){let u=$e();u.style(e.documentElement,"scrollBehavior","auto"),t.add(()=>t.microTask(()=>u.dispose()))}let a=(l=window.scrollY)!=null?l:window.pageYOffset,o=null;t.addEventListener(e,"click",u=>{if(u.target instanceof HTMLElement)try{let i=u.target.closest("a");if(!i)return;let{hash:f}=new URL(i.href),c=e.querySelector(f);c&&!r(c)&&(o=c)}catch{}},!0),t.addEventListener(e,"touchstart",u=>{if(u.target instanceof HTMLElement)if(r(u.target)){let i=u.target;for(;i.parentElement&&r(i.parentElement);)i=i.parentElement;t.style(i,"overscrollBehavior","contain")}else t.style(u.target,"touchAction","none")}),t.addEventListener(e,"touchmove",u=>{if(u.target instanceof HTMLElement)if(r(u.target)){let i=u.target;for(;i.parentElement&&i.dataset.headlessuiPortal!==""&&!(i.scrollHeight>i.clientHeight||i.scrollWidth>i.clientWidth);)i=i.parentElement;i.dataset.headlessuiPortal===""&&u.preventDefault()}else u.preventDefault()},{passive:!1}),t.add(()=>{var u;let i=(u=window.scrollY)!=null?u:window.pageYOffset;a!==i&&window.scrollTo(0,a),o&&o.isConnected&&(o.scrollIntoView({block:"nearest"}),o=null)})})}}:{}}function Jt(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function Qt(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let C=Kt(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:$e(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:Qt(n)},l=[zt(),Xt(),Jt()];l.forEach(({before:a})=>a==null?void 0:a(r)),l.forEach(({after:a})=>a==null?void 0:a(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});C.subscribe(()=>{let e=C.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",l=n.count!==0;(l&&!r||!l&&r)&&C.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&C.dispatch("TEARDOWN",n)}});function Zt(e,t,n){let r=qt(C),l=e?r.get(e):void 0,a=l?l.count>0:!1;return R(()=>{if(!(!e||!t))return C.dispatch("PUSH",e,n),()=>C.dispatch("POP",e,n)},[t,e]),a}let te=new Map,I=new Map;function be(e,t=!0){R(()=>{var n;if(!t)return;let r=typeof e=="function"?e():e.current;if(!r)return;function l(){var o;if(!r)return;let u=(o=I.get(r))!=null?o:1;if(u===1?I.delete(r):I.set(r,u-1),u!==1)return;let i=te.get(r);i&&(i["aria-hidden"]===null?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",i["aria-hidden"]),r.inert=i.inert,te.delete(r))}let a=(n=I.get(r))!=null?n:0;return I.set(r,a+1),a!==0||(te.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0),l},[e,t])}function en({defaultContainers:e=[],portals:t,mainTreeNodeRef:n}={}){var r;let l=s.useRef((r=n==null?void 0:n.current)!=null?r:null),a=U(l),o=g(()=>{var u,i,f;let c=[];for(let d of e)d!==null&&(d instanceof HTMLElement?c.push(d):"current"in d&&d.current instanceof HTMLElement&&c.push(d.current));if(t!=null&&t.current)for(let d of t.current)c.push(d);for(let d of(u=a==null?void 0:a.querySelectorAll("html > *, body > *"))!=null?u:[])d!==document.body&&d!==document.head&&d instanceof HTMLElement&&d.id!=="headlessui-portal-root"&&(d.contains(l.current)||d.contains((f=(i=l.current)==null?void 0:i.getRootNode())==null?void 0:f.host)||c.some(E=>d.contains(E))||c.push(d));return c});return{resolveContainers:o,contains:g(u=>o().some(i=>i.contains(u))),mainTreeNodeRef:l,MainTreeNode:s.useMemo(()=>function(){return n!=null?null:p.createElement(oe,{features:z.Hidden,ref:l})},[l,n])}}let fe=s.createContext(()=>{});fe.displayName="StackContext";var ie=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(ie||{});function tn(){return s.useContext(fe)}function nn({children:e,onUpdate:t,type:n,element:r,enabled:l}){let a=tn(),o=g((...u)=>{t==null||t(...u),a(...u)});return R(()=>{let u=l===void 0||l===!0;return u&&o(0,n,r),()=>{u&&o(1,n,r)}},[o,n,r,l]),p.createElement(fe.Provider,{value:o},e)}let ke=s.createContext(null);function Ie(){let e=s.useContext(ke);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,Ie),t}return e}function rn(){let[e,t]=s.useState([]);return[e.length>0?e.join(" "):void 0,s.useMemo(()=>function(n){let r=g(a=>(t(o=>[...o,a]),()=>t(o=>{let u=o.slice(),i=u.indexOf(a);return i!==-1&&u.splice(i,1),u}))),l=s.useMemo(()=>({register:r,slot:n.slot,name:n.name,props:n.props}),[r,n.slot,n.name,n.props]);return p.createElement(ke.Provider,{value:l},n.children)},[t])]}let on="p";function ln(e,t){let n=N(),{id:r=`headlessui-description-${n}`,...l}=e,a=Ie(),o=P(t);R(()=>a.register(r),[r,a.register]);let u={ref:o,...a.props,id:r};return L({ourProps:u,theirProps:l,slot:a.slot||{},defaultTag:on,name:a.name||"Description"})}let an=T(ln),un=Object.assign(an,{});var sn=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(sn||{}),cn=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(cn||{});let dn={0(e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},J=s.createContext(null);J.displayName="DialogContext";function _(e){let t=s.useContext(J);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,_),n}return t}function fn(e,t,n=()=>[document.body]){Zt(e,t,r=>{var l;return{containers:[...(l=r.containers)!=null?l:[],n]}})}function pn(e,t){return O(t.type,dn,e,t)}let mn="div",vn=Ee.RenderStrategy|Ee.Static;function gn(e,t){let n=N(),{id:r=`headlessui-dialog-${n}`,open:l,onClose:a,initialFocus:o,role:u="dialog",__demoMode:i=!1,...f}=e,[c,d]=s.useState(0),E=s.useRef(!1);u=function(){return u==="dialog"||u==="alertdialog"?u:(E.current||(E.current=!0,console.warn(`Invalid role [${u}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")}();let v=nt();l===void 0&&v!==null&&(l=(v&q.Open)===q.Open);let $=s.useRef(null),y=P($,t),h=U($),D=e.hasOwnProperty("open")||v!==null,pe=e.hasOwnProperty("onClose");if(!D&&!pe)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!D)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!pe)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof l!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${l}`);if(typeof a!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${a}`);let w=l?0:1,[W,He]=s.useReducer(pn,{titleId:null,descriptionId:null,panelRef:s.createRef()}),x=g(()=>a(!1)),me=g(m=>He({type:0,id:m})),j=Q()?i?!1:w===0:!1,Y=c>1,ve=s.useContext(J)!==null,[Be,Ue]=Rt(),_e={get current(){var m;return(m=W.panelRef.current)!=null?m:$.current}},{resolveContainers:Z,mainTreeNodeRef:V,MainTreeNode:We}=en({portals:Be,defaultContainers:[_e]}),je=Y?"parent":"leaf",ge=v!==null?(v&q.Closing)===q.Closing:!1,Ye=ve||ge?!1:j,Ve=s.useCallback(()=>{var m,S;return(S=Array.from((m=h==null?void 0:h.querySelectorAll("body > *"))!=null?m:[]).find(b=>b.id==="headlessui-portal-root"?!1:b.contains(V.current)&&b instanceof HTMLElement))!=null?S:null},[V]);be(Ve,Ye);let Ge=Y?!0:j,qe=s.useCallback(()=>{var m,S;return(S=Array.from((m=h==null?void 0:h.querySelectorAll("[data-headlessui-portal]"))!=null?m:[]).find(b=>b.contains(V.current)&&b instanceof HTMLElement))!=null?S:null},[V]);be(qe,Ge),ft(Z,x,!(!j||Y));let Ke=!(Y||w!==0);Fe(h==null?void 0:h.defaultView,"keydown",m=>{Ke&&(m.defaultPrevented||m.key===Me.Escape&&(m.preventDefault(),m.stopPropagation(),x()))}),fn(h,!(ge||w!==0||ve),Z),s.useEffect(()=>{if(w!==0||!$.current)return;let m=new ResizeObserver(S=>{for(let b of S){let G=b.target.getBoundingClientRect();G.x===0&&G.y===0&&G.width===0&&G.height===0&&x()}});return m.observe($.current),()=>m.disconnect()},[w,$,x]);let[Xe,ze]=rn(),Je=s.useMemo(()=>[{dialogState:w,close:x,setTitleId:me},W],[w,W,x,me]),he=s.useMemo(()=>({open:w===0}),[w]),Qe={ref:y,id:r,role:u,"aria-modal":w===0?!0:void 0,"aria-labelledby":W.titleId,"aria-describedby":Xe};return p.createElement(nn,{type:"Dialog",enabled:w===0,element:$,onUpdate:g((m,S)=>{S==="Dialog"&&O(m,{[ie.Add]:()=>d(b=>b+1),[ie.Remove]:()=>d(b=>b-1)})})},p.createElement(le,{force:!0},p.createElement(ue,null,p.createElement(J.Provider,{value:Je},p.createElement(ue.Group,{target:$},p.createElement(le,{force:!1},p.createElement(ze,{slot:he,name:"Dialog.Description"},p.createElement(k,{initialFocus:o,containers:Z,features:j?O(je,{parent:k.features.RestoreFocus,leaf:k.features.All&~k.features.FocusLock}):k.features.None},p.createElement(Ue,null,L({ourProps:Qe,theirProps:f,slot:he,defaultTag:mn,features:vn,visible:w===0,name:"Dialog"}))))))))),p.createElement(We,null))}let hn="div";function En(e,t){let n=N(),{id:r=`headlessui-dialog-overlay-${n}`,...l}=e,[{dialogState:a,close:o}]=_("Dialog.Overlay"),u=P(t),i=g(c=>{if(c.target===c.currentTarget){if(gt(c.currentTarget))return c.preventDefault();c.preventDefault(),c.stopPropagation(),o()}}),f=s.useMemo(()=>({open:a===0}),[a]);return L({ourProps:{ref:u,id:r,"aria-hidden":!0,onClick:i},theirProps:l,slot:f,defaultTag:hn,name:"Dialog.Overlay"})}let wn="div";function bn(e,t){let n=N(),{id:r=`headlessui-dialog-backdrop-${n}`,...l}=e,[{dialogState:a},o]=_("Dialog.Backdrop"),u=P(t);s.useEffect(()=>{if(o.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[o.panelRef]);let i=s.useMemo(()=>({open:a===0}),[a]);return p.createElement(le,{force:!0},p.createElement(ue,null,L({ourProps:{ref:u,id:r,"aria-hidden":!0},theirProps:l,slot:i,defaultTag:wn,name:"Dialog.Backdrop"})))}let yn="div";function $n(e,t){let n=N(),{id:r=`headlessui-dialog-panel-${n}`,...l}=e,[{dialogState:a},o]=_("Dialog.Panel"),u=P(t,o.panelRef),i=s.useMemo(()=>({open:a===0}),[a]),f=g(c=>{c.stopPropagation()});return L({ourProps:{ref:u,id:r,onClick:f},theirProps:l,slot:i,defaultTag:yn,name:"Dialog.Panel"})}let Tn="h2";function Ln(e,t){let n=N(),{id:r=`headlessui-dialog-title-${n}`,...l}=e,[{dialogState:a,setTitleId:o}]=_("Dialog.Title"),u=P(t);s.useEffect(()=>(o(r),()=>o(null)),[r,o]);let i=s.useMemo(()=>({open:a===0}),[a]);return L({ourProps:{ref:u,id:r},theirProps:l,slot:i,defaultTag:Tn,name:"Dialog.Title"})}let Sn=T(gn),Pn=T(bn),Dn=T($n),Mn=T(En),Fn=T(Ln),On=Object.assign(Sn,{Backdrop:Pn,Panel:Dn,Overlay:Mn,Title:Fn,Description:un});export{N as I,On as _,Me as a,dt as b,st as c,oe as f,de as m,U as n,Te as o,gt as r,z as s,M as t,ft as y};
