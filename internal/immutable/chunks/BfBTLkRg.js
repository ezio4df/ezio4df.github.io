import{i as Ue,j as yr,aL as tt,o as Ce,k as O,m as Ar,N as Sr,g as We,_ as wr,P as xr,Q as kr,R as ya,s as ne,p as me,C as Er,aE as Ir,an as Aa,t as Pr,y as se,A as _r,aH as Cr,$ as Sa,aC as rt,aM as nt,aN as it,aO as ot,v as st,x as Nr,aP as Fr,aQ as Ne,E as lt,aR as Or,n as Tr,aS as Mr,aT as jr,aB as Lr,w as ye,aU as ft,B as ut,aV as $r,aW as zr,au as Dr,aX as Rr,aY as Ur,aZ as Wr,a_ as Yr,a$ as Hr,b0 as Gr,b1 as Br,b2 as Vr,b3 as Xr}from"./BsYQBZWl.js";import{i as Kr,c as Jr,d as qr,n as Qr,a as Zr}from"./CLUzvEfY.js";function en(e,a,t){for(var r=[],n=a.length,o=0;o<n;o++)Mr(a[o].e,r,!0);jr(r,()=>{var i=r.length===0&&t!==null;if(i){var s=t,l=s.parentNode;Lr(l),l.append(s),e.items.clear(),L(e,a[0].prev,a[n-1].next)}for(var f=0;f<n;f++){var u=a[f];i||(e.items.delete(u.k),L(e,u.prev,u.next)),ye(u.e,!i)}e.first===a[0]&&(e.first=a[0].prev)})}function Ts(e,a,t,r,n,o=null){var i=e,s=new Map,l=null,f=(a&tt)!==0,u=(a&it)!==0,d=(a&ot)!==0;if(f){var m=e;i=O?Ce(Ar(m)):m.appendChild(Ue())}O&&Sr();var v=null,S=wr(()=>{var A=t();return nt(A)?A:A==null?[]:rt(A)}),b,h=!0;function p(){an(P,b,i,a,r),v!==null&&(b.length===0?(v.fragment?(i.before(v.fragment),v.fragment=null):st(v.effect),I.first=v.effect):Nr(v.effect,()=>{v=null}))}var I=yr(()=>{b=We(S);var A=b.length;let C=!1;if(O){var w=xr(i)===kr;w!==(A===0)&&(i=ya(),Ce(i),ne(!1),C=!0)}for(var x=new Set,k=Pr,N=null,_=_r(),T=0;T<A;T+=1){O&&me.nodeType===Er&&me.data===Ir&&(i=me,C=!0,ne(!1));var ee=b[T],de=r(ee,T),j=h?null:s.get(de);j?(u&&Aa(j.v,ee),d?Aa(j.i,T):j.i=T,_&&k.skipped_effects.delete(j.e)):(j=tn(h?i:null,N,ee,de,T,n,a,t),h&&(j.o=!0,N===null?l=j:N.next=j,N=j),s.set(de,j)),x.add(de)}if(A===0&&o&&!v)if(h)v={fragment:null,effect:se(()=>o(i))};else{var pa=document.createDocumentFragment(),ba=Ue();pa.append(ba),v={fragment:pa,effect:se(()=>o(ba))}}if(O&&A>0&&Ce(ya()),!h)if(_){for(const[pr,br]of s)x.has(pr)||k.skipped_effects.add(br.e);k.oncommit(p),k.ondiscard(()=>{})}else p();C&&ne(!0),We(S)}),P={effect:I,items:s,first:l};h=!1,O&&(i=me)}function an(e,a,t,r,n){var o=(r&Or)!==0,i=a.length,s=e.items,l=e.first,f,u=null,d,m=[],v=[],S,b,h,p;if(o)for(p=0;p<i;p+=1)S=a[p],b=n(S,p),h=s.get(b),h.o&&(h.a?.measure(),(d??=new Set).add(h));for(p=0;p<i;p+=1){if(S=a[p],b=n(S,p),h=s.get(b),e.first??=h,!h.o){h.o=!0;var I=u?u.next:l;L(e,u,h),L(e,h,I),Fe(h,I,t),u=h,m=[],v=[],l=u.next;continue}if((h.e.f&Ne)!==0&&(st(h.e),o&&(h.a?.unfix(),(d??=new Set).delete(h))),h!==l){if(f!==void 0&&f.has(h)){if(m.length<v.length){var P=v[0],A;u=P.prev;var C=m[0],w=m[m.length-1];for(A=0;A<m.length;A+=1)Fe(m[A],P,t);for(A=0;A<v.length;A+=1)f.delete(v[A]);L(e,C.prev,w.next),L(e,u,C),L(e,w,P),l=P,u=w,p-=1,m=[],v=[]}else f.delete(h),Fe(h,l,t),L(e,h.prev,h.next),L(e,h,u===null?e.first:u.next),L(e,u,h),u=h;continue}for(m=[],v=[];l!==null&&l.k!==b;)(l.e.f&Ne)===0&&(f??=new Set).add(l),v.push(l),l=l.next;if(l===null)continue;h=l}m.push(h),u=h,l=h.next}let x=s.size>i;if(l!==null||f!==void 0){for(var k=f===void 0?[]:rt(f);l!==null;)(l.e.f&Ne)===0&&k.push(l),l=l.next;var N=k.length;if(x=s.size-N>i,N>0){var _=(r&tt)!==0&&i===0?t:null;if(o){for(p=0;p<N;p+=1)k[p].a?.measure();for(p=0;p<N;p+=1)k[p].a?.fix()}en(e,k,_)}}if(x)for(const T of s.values())T.o||(L(e,u,T),u=T);e.effect.last=u&&u.e,o&&lt(()=>{if(d!==void 0)for(h of d)h.a?.apply()})}function tn(e,a,t,r,n,o,i,s){var l=(i&it)!==0,f=(i&Fr)===0,u=l?f?Cr(t,!1,!1):Sa(t):t,d=(i&ot)===0?n:Sa(n),m={i:d,v:u,k:r,a:null,e:null,o:!1,prev:a,next:null};try{if(e===null){var v=document.createDocumentFragment();v.append(e=Ue())}return m.e=se(()=>o(e,u,d,s)),a!==null&&(a.next=m),m}finally{}}function Fe(e,a,t){for(var r=e.next?e.next.e.nodes_start:t,n=a?a.e.nodes_start:t,o=e.e.nodes_start;o!==null&&o!==r;){var i=Tr(o);n.before(o),o=i}}function L(e,a,t){a===null?(e.first=t,e.effect.first=t&&t.e):(a.e.next&&(a.e.next.prev=null),a.next=t,a.e.next=t&&t.e),t!==null&&(t.e.prev&&(t.e.prev.next=null),t.prev=a,t.e.prev=a&&a.e)}function rn(e,a){var t=void 0,r;ft(()=>{t!==(t=a())&&(r&&(ye(r),r=null),t&&(r=se(()=>{ut(()=>t(e))})))})}function ct(e){var a,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var n=e.length;for(a=0;a<n;a++)e[a]&&(t=ct(e[a]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function nn(){for(var e,a,t=0,r="",n=arguments.length;t<n;t++)(e=arguments[t])&&(a=ct(e))&&(r&&(r+=" "),r+=a);return r}function on(e){return typeof e=="object"?nn(e):e??""}const wa=[...` 	
\r\f \v\uFEFF`];function sn(e,a,t){var r=e==null?"":""+e;if(a&&(r=r?r+" "+a:a),t){for(var n in t)if(t[n])r=r?r+" "+n:n;else if(r.length)for(var o=n.length,i=0;(i=r.indexOf(n,i))>=0;){var s=i+o;(i===0||wa.includes(r[i-1]))&&(s===r.length||wa.includes(r[s]))?r=(i===0?"":r.substring(0,i))+r.substring(s+1):i=s}}return r===""?null:r}function xa(e,a=!1){var t=a?" !important;":";",r="";for(var n in e){var o=e[n];o!=null&&o!==""&&(r+=" "+n+": "+o+t)}return r}function Oe(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function ln(e,a){if(a){var t="",r,n;if(Array.isArray(a)?(r=a[0],n=a[1]):r=a,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var o=!1,i=0,s=!1,l=[];r&&l.push(...Object.keys(r).map(Oe)),n&&l.push(...Object.keys(n).map(Oe));var f=0,u=-1;const b=e.length;for(var d=0;d<b;d++){var m=e[d];if(s?m==="/"&&e[d-1]==="*"&&(s=!1):o?o===m&&(o=!1):m==="/"&&e[d+1]==="*"?s=!0:m==='"'||m==="'"?o=m:m==="("?i++:m===")"&&i--,!s&&o===!1&&i===0){if(m===":"&&u===-1)u=d;else if(m===";"||d===b-1){if(u!==-1){var v=Oe(e.substring(f,u).trim());if(!l.includes(v)){m!==";"&&d++;var S=e.substring(f,d).trim();t+=" "+S+";"}}f=d+1,u=-1}}}}return r&&(t+=xa(r)),n&&(t+=xa(n,!0)),t=t.trim(),t===""?null:t}return e==null?null:String(e)}function fn(e,a,t,r,n,o){var i=e.__className;if(O||i!==t||i===void 0){var s=sn(t,r,o);(!O||s!==e.getAttribute("class"))&&(s==null?e.removeAttribute("class"):a?e.className=s:e.setAttribute("class",s)),e.__className=t}else if(o&&n!==o)for(var l in o){var f=!!o[l];(n==null||f!==!!n[l])&&e.classList.toggle(l,f)}return o}function Te(e,a={},t,r){for(var n in t){var o=t[n];a[n]!==o&&(t[n]==null?e.style.removeProperty(n):e.style.setProperty(n,o,r))}}function un(e,a,t,r){var n=e.__style;if(O||n!==a){var o=ln(a,r);(!O||o!==e.getAttribute("style"))&&(o==null?e.removeAttribute("style"):e.style.cssText=o),e.__style=a}else r&&(Array.isArray(r)?(Te(e,t?.[0],r[0]),Te(e,t?.[1],r[1],"important")):Te(e,t,r));return r}function Ye(e,a,t=!1){if(e.multiple){if(a==null)return;if(!nt(a))return $r();for(var r of e.options)r.selected=a.includes(ka(r));return}for(r of e.options){var n=ka(r);if(zr(n,a)){r.selected=!0;return}}(!t||a!==void 0)&&(e.selectedIndex=-1)}function cn(e){var a=new MutationObserver(()=>{Ye(e,e.__value)});a.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Dr(()=>{a.disconnect()})}function ka(e){return"__value"in e?e.__value:e.value}const ae=Symbol("class"),te=Symbol("style"),dt=Symbol("is custom element"),mt=Symbol("is html");function dn(e){if(O){var a=!1,t=()=>{if(!a){if(a=!0,e.hasAttribute("value")){var r=e.value;Ae(e,"value",null),e.value=r}if(e.hasAttribute("checked")){var n=e.checked;Ae(e,"checked",null),e.checked=n}}};e.__on_r=t,lt(t),Wr()}}function mn(e,a){a?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Ae(e,a,t,r){var n=vt(e);O&&(n[a]=e.getAttribute(a),a==="src"||a==="srcset"||a==="href"&&e.nodeName==="LINK")||n[a]!==(n[a]=t)&&(a==="loading"&&(e[Yr]=t),t==null?e.removeAttribute(a):typeof t!="string"&&ht(e).includes(a)?e[a]=t:e.setAttribute(a,t))}function vn(e,a,t,r,n=!1,o=!1){if(O&&n&&e.tagName==="INPUT"){var i=e,s=i.type==="checkbox"?"defaultChecked":"defaultValue";s in t||dn(i)}var l=vt(e),f=l[dt],u=!l[mt];let d=O&&f;d&&ne(!1);var m=a||{},v=e.tagName==="OPTION";for(var S in a)S in t||(t[S]=null);t.class?t.class=on(t.class):t[ae]&&(t.class=null),t[te]&&(t.style??=null);var b=ht(e);for(const w in t){let x=t[w];if(v&&w==="value"&&x==null){e.value=e.__value="",m[w]=x;continue}if(w==="class"){var h=e.namespaceURI==="http://www.w3.org/1999/xhtml";fn(e,h,x,r,a?.[ae],t[ae]),m[w]=x,m[ae]=t[ae];continue}if(w==="style"){un(e,x,a?.[te],t[te]),m[w]=x,m[te]=t[te];continue}var p=m[w];if(!(x===p&&!(x===void 0&&e.hasAttribute(w)))){m[w]=x;var I=w[0]+w[1];if(I!=="$$")if(I==="on"){const k={},N="$$"+w;let _=w.slice(2);var P=Zr(_);if(Kr(_)&&(_=_.slice(0,-7),k.capture=!0),!P&&p){if(x!=null)continue;e.removeEventListener(_,m[N],k),m[N]=null}if(x!=null)if(P)e[`__${_}`]=x,qr([_]);else{let T=function(ee){m[w].call(this,ee)};m[N]=Jr(_,e,T,k)}else P&&(e[`__${_}`]=void 0)}else if(w==="style")Ae(e,w,x);else if(w==="autofocus")Vr(e,!!x);else if(!f&&(w==="__value"||w==="value"&&x!=null))e.value=e.__value=x;else if(w==="selected"&&v)mn(e,x);else{var A=w;u||(A=Qr(A));var C=A==="defaultValue"||A==="defaultChecked";if(x==null&&!f&&!C)if(l[w]=null,A==="value"||A==="checked"){let k=e;const N=a===void 0;if(A==="value"){let _=k.defaultValue;k.removeAttribute(A),k.defaultValue=_,k.value=k.__value=N?_:null}else{let _=k.defaultChecked;k.removeAttribute(A),k.defaultChecked=_,k.checked=N?_:!1}}else e.removeAttribute(w);else C||b.includes(A)&&(f||typeof x!="string")?(e[A]=x,A in l&&(l[A]=Xr)):typeof x!="function"&&Ae(e,A,x)}}}return d&&ne(!0),m}function Ms(e,a,t=[],r=[],n=[],o,i=!1,s=!1){Gr(n,t,r,l=>{var f=void 0,u={},d=e.nodeName==="SELECT",m=!1;if(ft(()=>{var S=a(...l.map(We)),b=vn(e,f,S,o,i,s);m&&d&&"value"in S&&Ye(e,S.value);for(let p of Object.getOwnPropertySymbols(u))S[p]||ye(u[p]);for(let p of Object.getOwnPropertySymbols(S)){var h=S[p];p.description===Br&&(!f||h!==f[p])&&(u[p]&&ye(u[p]),u[p]=se(()=>rn(e,()=>h))),b[p]=h}f=b}),d){var v=e;ut(()=>{Ye(v,f.value,!0),cn(v)})}m=!0})}function vt(e){return e.__attributes??={[dt]:e.nodeName.includes("-"),[mt]:e.namespaceURI===Rr}}var Ea=new Map;function ht(e){var a=e.getAttribute("is")||e.nodeName,t=Ea.get(a);if(t)return t;Ea.set(a,t=[]);for(var r,n=e,o=Element.prototype;o!==n;){r=Hr(n);for(var i in r)r[i].set&&t.push(i);n=Ur(n)}return t}function He(e,a){(a==null||a>e.length)&&(a=e.length);for(var t=0,r=Array(a);t<a;t++)r[t]=e[t];return r}function hn(e){if(Array.isArray(e))return e}function gn(e){if(Array.isArray(e))return He(e)}function pn(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function bn(e,a){for(var t=0;t<a.length;t++){var r=a[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,gt(r.key),r)}}function yn(e,a,t){return a&&bn(e.prototype,a),Object.defineProperty(e,"prototype",{writable:!1}),e}function ge(e,a){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=ia(e))||a){t&&(e=t);var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:n}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o,i=!0,s=!1;return{s:function(){t=t.call(e)},n:function(){var l=t.next();return i=l.done,l},e:function(l){s=!0,o=l},f:function(){try{i||t.return==null||t.return()}finally{if(s)throw o}}}}function y(e,a,t){return(a=gt(a))in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function An(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Sn(e,a){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,n,o,i,s=[],l=!0,f=!1;try{if(o=(t=t.call(e)).next,a===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(r=o.call(t)).done)&&(s.push(r.value),s.length!==a);l=!0);}catch(u){f=!0,n=u}finally{try{if(!l&&t.return!=null&&(i=t.return(),Object(i)!==i))return}finally{if(f)throw n}}return s}}function wn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ia(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};a%2?Ia(Object(t),!0).forEach(function(r){y(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ia(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function ke(e,a){return hn(e)||Sn(e,a)||ia(e,a)||wn()}function z(e){return gn(e)||An(e)||ia(e)||xn()}function kn(e,a){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,a);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(e)}function gt(e){var a=kn(e,"string");return typeof a=="symbol"?a:a+""}function Se(e){"@babel/helpers - typeof";return Se=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},Se(e)}function ia(e,a){if(e){if(typeof e=="string")return He(e,a);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?He(e,a):void 0}}var Pa=function(){},oa={},pt={},bt=null,yt={mark:Pa,measure:Pa};try{typeof window<"u"&&(oa=window),typeof document<"u"&&(pt=document),typeof MutationObserver<"u"&&(bt=MutationObserver),typeof performance<"u"&&(yt=performance)}catch{}var En=oa.navigator||{},_a=En.userAgent,Ca=_a===void 0?"":_a,Y=oa,E=pt,Na=bt,ve=yt;Y.document;var W=!!E.documentElement&&!!E.head&&typeof E.addEventListener=="function"&&typeof E.createElement=="function",At=~Ca.indexOf("MSIE")||~Ca.indexOf("Trident/"),Me,In=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Pn=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,St={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},_n={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},wt=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],F="classic",fe="duotone",xt="sharp",kt="sharp-duotone",Et="chisel",It="etch",Pt="jelly",_t="jelly-duo",Ct="jelly-fill",Nt="notdog",Ft="notdog-duo",Ot="slab",Tt="slab-press",Mt="thumbprint",jt="utility",Lt="utility-duo",$t="utility-fill",zt="whiteboard",Cn="Classic",Nn="Duotone",Fn="Sharp",On="Sharp Duotone",Tn="Chisel",Mn="Etch",jn="Jelly",Ln="Jelly Duo",$n="Jelly Fill",zn="Notdog",Dn="Notdog Duo",Rn="Slab",Un="Slab Press",Wn="Thumbprint",Yn="Utility",Hn="Utility Duo",Gn="Utility Fill",Bn="Whiteboard",Dt=[F,fe,xt,kt,Et,It,Pt,_t,Ct,Nt,Ft,Ot,Tt,Mt,jt,Lt,$t,zt];Me={},y(y(y(y(y(y(y(y(y(y(Me,F,Cn),fe,Nn),xt,Fn),kt,On),Et,Tn),It,Mn),Pt,jn),_t,Ln),Ct,$n),Nt,zn),y(y(y(y(y(y(y(y(Me,Ft,Dn),Ot,Rn),Tt,Un),Mt,Wn),jt,Yn),Lt,Hn),$t,Gn),zt,Bn);var Vn={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},Xn={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},Kn=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),Jn={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},Rt=["fak","fa-kit","fakd","fa-kit-duotone"],Fa={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},qn=["kit"],Qn="kit",Zn="kit-duotone",ei="Kit",ai="Kit Duotone";y(y({},Qn,ei),Zn,ai);var ti={kit:{"fa-kit":"fak"}},ri={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},ni={kit:{fak:"fa-kit"}},Oa={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},je,he={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ii=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],oi="classic",si="duotone",li="sharp",fi="sharp-duotone",ui="chisel",ci="etch",di="jelly",mi="jelly-duo",vi="jelly-fill",hi="notdog",gi="notdog-duo",pi="slab",bi="slab-press",yi="thumbprint",Ai="utility",Si="utility-duo",wi="utility-fill",xi="whiteboard",ki="Classic",Ei="Duotone",Ii="Sharp",Pi="Sharp Duotone",_i="Chisel",Ci="Etch",Ni="Jelly",Fi="Jelly Duo",Oi="Jelly Fill",Ti="Notdog",Mi="Notdog Duo",ji="Slab",Li="Slab Press",$i="Thumbprint",zi="Utility",Di="Utility Duo",Ri="Utility Fill",Ui="Whiteboard";je={},y(y(y(y(y(y(y(y(y(y(je,oi,ki),si,Ei),li,Ii),fi,Pi),ui,_i),ci,Ci),di,Ni),mi,Fi),vi,Oi),hi,Ti),y(y(y(y(y(y(y(y(je,gi,Mi),pi,ji),bi,Li),yi,$i),Ai,zi),Si,Di),wi,Ri),xi,Ui);var Wi="kit",Yi="kit-duotone",Hi="Kit",Gi="Kit Duotone";y(y({},Wi,Hi),Yi,Gi);var Bi={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},Vi={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},Ge={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},Xi=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],Ut=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(ii,Xi),Ki=["solid","regular","light","thin","duotone","brands","semibold"],Wt=[1,2,3,4,5,6,7,8,9,10],Ji=Wt.concat([11,12,13,14,15,16,17,18,19,20]),qi=["aw","fw","pull-left","pull-right"],Qi=[].concat(z(Object.keys(Vi)),Ki,qi,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",he.GROUP,he.SWAP_OPACITY,he.PRIMARY,he.SECONDARY]).concat(Wt.map(function(e){return"".concat(e,"x")})).concat(Ji.map(function(e){return"w-".concat(e)})),Zi={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},R="___FONT_AWESOME___",Be=16,Yt="fa",Ht="svg-inline--fa",V="data-fa-i2svg",Ve="data-fa-pseudo-element",eo="data-fa-pseudo-element-pending",sa="data-prefix",la="data-icon",Ta="fontawesome-i2svg",ao="async",to=["HTML","HEAD","STYLE","SCRIPT"],Gt=["::before","::after",":before",":after"],Bt=(function(){try{return!0}catch{return!1}})();function ue(e){return new Proxy(e,{get:function(t,r){return r in t?t[r]:t[F]}})}var Vt=c({},St);Vt[F]=c(c(c(c({},{"fa-duotone":"duotone"}),St[F]),Fa.kit),Fa["kit-duotone"]);var ro=ue(Vt),Xe=c({},Jn);Xe[F]=c(c(c(c({},{duotone:"fad"}),Xe[F]),Oa.kit),Oa["kit-duotone"]);var Ma=ue(Xe),Ke=c({},Ge);Ke[F]=c(c({},Ke[F]),ni.kit);var fa=ue(Ke),Je=c({},Bi);Je[F]=c(c({},Je[F]),ti.kit);ue(Je);var no=In,Xt="fa-layers-text",io=Pn,oo=c({},Vn);ue(oo);var so=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Le=_n,lo=[].concat(z(qn),z(Qi)),ie=Y.FontAwesomeConfig||{};function fo(e){var a=E.querySelector("script["+e+"]");if(a)return a.getAttribute(e)}function uo(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(E&&typeof E.querySelector=="function"){var co=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];co.forEach(function(e){var a=ke(e,2),t=a[0],r=a[1],n=uo(fo(t));n!=null&&(ie[r]=n)})}var Kt={styleDefault:"solid",familyDefault:F,cssPrefix:Yt,replacementClass:Ht,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ie.familyPrefix&&(ie.cssPrefix=ie.familyPrefix);var Q=c(c({},Kt),ie);Q.autoReplaceSvg||(Q.observeMutations=!1);var g={};Object.keys(Kt).forEach(function(e){Object.defineProperty(g,e,{enumerable:!0,set:function(t){Q[e]=t,oe.forEach(function(r){return r(g)})},get:function(){return Q[e]}})});Object.defineProperty(g,"familyPrefix",{enumerable:!0,set:function(a){Q.cssPrefix=a,oe.forEach(function(t){return t(g)})},get:function(){return Q.cssPrefix}});Y.FontAwesomeConfig=g;var oe=[];function mo(e){return oe.push(e),function(){oe.splice(oe.indexOf(e),1)}}var K=Be,D={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function vo(e){if(!(!e||!W)){var a=E.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=e;for(var t=E.head.childNodes,r=null,n=t.length-1;n>-1;n--){var o=t[n],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(r=o)}return E.head.insertBefore(a,r),e}}var ho="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ja(){for(var e=12,a="";e-- >0;)a+=ho[Math.random()*62|0];return a}function Z(e){for(var a=[],t=(e||[]).length>>>0;t--;)a[t]=e[t];return a}function ua(e){return e.classList?Z(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(a){return a})}function Jt(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function go(e){return Object.keys(e||{}).reduce(function(a,t){return a+"".concat(t,'="').concat(Jt(e[t]),'" ')},"").trim()}function Ee(e){return Object.keys(e||{}).reduce(function(a,t){return a+"".concat(t,": ").concat(e[t].trim(),";")},"")}function ca(e){return e.size!==D.size||e.x!==D.x||e.y!==D.y||e.rotate!==D.rotate||e.flipX||e.flipY}function po(e){var a=e.transform,t=e.containerWidth,r=e.iconWidth,n={transform:"translate(".concat(t/2," 256)")},o="translate(".concat(a.x*32,", ").concat(a.y*32,") "),i="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),s="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(o," ").concat(i," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:n,inner:l,path:f}}function bo(e){var a=e.transform,t=e.width,r=t===void 0?Be:t,n=e.height,o=n===void 0?Be:n,i="";return At?i+="translate(".concat(a.x/K-r/2,"em, ").concat(a.y/K-o/2,"em) "):i+="translate(calc(-50% + ".concat(a.x/K,"em), calc(-50% + ").concat(a.y/K,"em)) "),i+="scale(".concat(a.size/K*(a.flipX?-1:1),", ").concat(a.size/K*(a.flipY?-1:1),") "),i+="rotate(".concat(a.rotate,"deg) "),i}var yo=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
  --fa-font-utility-semibold: normal 600 1em/1 "Font Awesome 7 Utility";
  --fa-font-utility-duo-semibold: normal 600 1em/1 "Font Awesome 7 Utility Duo";
  --fa-font-utility-fill-semibold: normal 600 1em/1 "Font Awesome 7 Utility Fill";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function qt(){var e=Yt,a=Ht,t=g.cssPrefix,r=g.replacementClass,n=yo;if(t!==e||r!==a){var o=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(a),"g");n=n.replace(o,".".concat(t,"-")).replace(i,"--".concat(t,"-")).replace(s,".".concat(r))}return n}var La=!1;function $e(){g.autoAddCss&&!La&&(vo(qt()),La=!0)}var Ao={mixout:function(){return{dom:{css:qt,insertCss:$e}}},hooks:function(){return{beforeDOMElementCreation:function(){$e()},beforeI2svg:function(){$e()}}}},U=Y||{};U[R]||(U[R]={});U[R].styles||(U[R].styles={});U[R].hooks||(U[R].hooks={});U[R].shims||(U[R].shims=[]);var $=U[R],Qt=[],Zt=function(){E.removeEventListener("DOMContentLoaded",Zt),we=1,Qt.map(function(a){return a()})},we=!1;W&&(we=(E.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(E.readyState),we||E.addEventListener("DOMContentLoaded",Zt));function So(e){W&&(we?setTimeout(e,0):Qt.push(e))}function ce(e){var a=e.tag,t=e.attributes,r=t===void 0?{}:t,n=e.children,o=n===void 0?[]:n;return typeof e=="string"?Jt(e):"<".concat(a," ").concat(go(r),">").concat(o.map(ce).join(""),"</").concat(a,">")}function $a(e,a,t){if(e&&e[a]&&e[a][t])return{prefix:a,iconName:t,icon:e[a][t]}}var ze=function(a,t,r,n){var o=Object.keys(a),i=o.length,s=t,l,f,u;for(r===void 0?(l=1,u=a[o[0]]):(l=0,u=r);l<i;l++)f=o[l],u=s(u,a[f],f,a);return u};function er(e){return z(e).length!==1?null:e.codePointAt(0).toString(16)}function za(e){return Object.keys(e).reduce(function(a,t){var r=e[t],n=!!r.icon;return n?a[r.iconName]=r.icon:a[t]=r,a},{})}function qe(e,a){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=t.skipHooks,n=r===void 0?!1:r,o=za(a);typeof $.hooks.addPack=="function"&&!n?$.hooks.addPack(e,za(a)):$.styles[e]=c(c({},$.styles[e]||{}),o),e==="fas"&&qe("fa",a)}var le=$.styles,wo=$.shims,ar=Object.keys(fa),xo=ar.reduce(function(e,a){return e[a]=Object.keys(fa[a]),e},{}),da=null,tr={},rr={},nr={},ir={},or={};function ko(e){return~lo.indexOf(e)}function Eo(e,a){var t=a.split("-"),r=t[0],n=t.slice(1).join("-");return r===e&&n!==""&&!ko(n)?n:null}var sr=function(){var a=function(o){return ze(le,function(i,s,l){return i[l]=ze(s,o,{}),i},{})};tr=a(function(n,o,i){if(o[3]&&(n[o[3]]=i),o[2]){var s=o[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){n[l.toString(16)]=i})}return n}),rr=a(function(n,o,i){if(n[i]=i,o[2]){var s=o[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){n[l]=i})}return n}),or=a(function(n,o,i){var s=o[2];return n[i]=i,s.forEach(function(l){n[l]=i}),n});var t="far"in le||g.autoFetchSvg,r=ze(wo,function(n,o){var i=o[0],s=o[1],l=o[2];return s==="far"&&!t&&(s="fas"),typeof i=="string"&&(n.names[i]={prefix:s,iconName:l}),typeof i=="number"&&(n.unicodes[i.toString(16)]={prefix:s,iconName:l}),n},{names:{},unicodes:{}});nr=r.names,ir=r.unicodes,da=Ie(g.styleDefault,{family:g.familyDefault})};mo(function(e){da=Ie(e.styleDefault,{family:g.familyDefault})});sr();function ma(e,a){return(tr[e]||{})[a]}function Io(e,a){return(rr[e]||{})[a]}function B(e,a){return(or[e]||{})[a]}function lr(e){return nr[e]||{prefix:null,iconName:null}}function Po(e){var a=ir[e],t=ma("fas",e);return a||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function H(){return da}var fr=function(){return{prefix:null,iconName:null,rest:[]}};function _o(e){var a=F,t=ar.reduce(function(r,n){return r[n]="".concat(g.cssPrefix,"-").concat(n),r},{});return Dt.forEach(function(r){(e.includes(t[r])||e.some(function(n){return xo[r].includes(n)}))&&(a=r)}),a}function Ie(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=a.family,r=t===void 0?F:t,n=ro[r][e];if(r===fe&&!e)return"fad";var o=Ma[r][e]||Ma[r][n],i=e in $.styles?e:null,s=o||i||null;return s}function Co(e){var a=[],t=null;return e.forEach(function(r){var n=Eo(g.cssPrefix,r);n?t=n:r&&a.push(r)}),{iconName:t,rest:a}}function Da(e){return e.sort().filter(function(a,t,r){return r.indexOf(a)===t})}var Ra=Ut.concat(Rt);function Pe(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=a.skipLookups,r=t===void 0?!1:t,n=null,o=Da(e.filter(function(v){return Ra.includes(v)})),i=Da(e.filter(function(v){return!Ra.includes(v)})),s=o.filter(function(v){return n=v,!wt.includes(v)}),l=ke(s,1),f=l[0],u=f===void 0?null:f,d=_o(o),m=c(c({},Co(i)),{},{prefix:Ie(u,{family:d})});return c(c(c({},m),To({values:e,family:d,styles:le,config:g,canonical:m,givenPrefix:n})),No(r,n,m))}function No(e,a,t){var r=t.prefix,n=t.iconName;if(e||!r||!n)return{prefix:r,iconName:n};var o=a==="fa"?lr(n):{},i=B(r,n);return n=o.iconName||i||n,r=o.prefix||r,r==="far"&&!le.far&&le.fas&&!g.autoFetchSvg&&(r="fas"),{prefix:r,iconName:n}}var Fo=Dt.filter(function(e){return e!==F||e!==fe}),Oo=Object.keys(Ge).filter(function(e){return e!==F}).map(function(e){return Object.keys(Ge[e])}).flat();function To(e){var a=e.values,t=e.family,r=e.canonical,n=e.givenPrefix,o=n===void 0?"":n,i=e.styles,s=i===void 0?{}:i,l=e.config,f=l===void 0?{}:l,u=t===fe,d=a.includes("fa-duotone")||a.includes("fad"),m=f.familyDefault==="duotone",v=r.prefix==="fad"||r.prefix==="fa-duotone";if(!u&&(d||m||v)&&(r.prefix="fad"),(a.includes("fa-brands")||a.includes("fab"))&&(r.prefix="fab"),!r.prefix&&Fo.includes(t)){var S=Object.keys(s).find(function(h){return Oo.includes(h)});if(S||f.autoFetchSvg){var b=Kn.get(t).defaultShortPrefixId;r.prefix=b,r.iconName=B(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||o==="fa")&&(r.prefix=H()||"fas"),r}var Mo=(function(){function e(){pn(this,e),this.definitions={}}return yn(e,[{key:"add",value:function(){for(var t=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];var i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){t.definitions[s]=c(c({},t.definitions[s]||{}),i[s]),qe(s,i[s]);var l=fa[F][s];l&&qe(l,i[s]),sr()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,r){var n=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(n).map(function(o){var i=n[o],s=i.prefix,l=i.iconName,f=i.icon,u=f[2];t[s]||(t[s]={}),u.length>0&&u.forEach(function(d){typeof d=="string"&&(t[s][d]=f)}),t[s][l]=f}),t}}])})(),Ua=[],J={},q={},jo=Object.keys(q);function Lo(e,a){var t=a.mixoutsTo;return Ua=e,J={},Object.keys(q).forEach(function(r){jo.indexOf(r)===-1&&delete q[r]}),Ua.forEach(function(r){var n=r.mixout?r.mixout():{};if(Object.keys(n).forEach(function(i){typeof n[i]=="function"&&(t[i]=n[i]),Se(n[i])==="object"&&Object.keys(n[i]).forEach(function(s){t[i]||(t[i]={}),t[i][s]=n[i][s]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(i){J[i]||(J[i]=[]),J[i].push(o[i])})}r.provides&&r.provides(q)}),t}function Qe(e,a){for(var t=arguments.length,r=new Array(t>2?t-2:0),n=2;n<t;n++)r[n-2]=arguments[n];var o=J[e]||[];return o.forEach(function(i){a=i.apply(null,[a].concat(r))}),a}function X(e){for(var a=arguments.length,t=new Array(a>1?a-1:0),r=1;r<a;r++)t[r-1]=arguments[r];var n=J[e]||[];n.forEach(function(o){o.apply(null,t)})}function G(){var e=arguments[0],a=Array.prototype.slice.call(arguments,1);return q[e]?q[e].apply(null,a):void 0}function Ze(e){e.prefix==="fa"&&(e.prefix="fas");var a=e.iconName,t=e.prefix||H();if(a)return a=B(t,a)||a,$a(ur.definitions,t,a)||$a($.styles,t,a)}var ur=new Mo,$o=function(){g.autoReplaceSvg=!1,g.observeMutations=!1,X("noAuto")},zo={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return W?(X("beforeI2svg",a),G("pseudoElements2svg",a),G("i2svg",a)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=a.autoReplaceSvgRoot;g.autoReplaceSvg===!1&&(g.autoReplaceSvg=!0),g.observeMutations=!0,So(function(){Ro({autoReplaceSvgRoot:t}),X("watch",a)})}},Do={icon:function(a){if(a===null)return null;if(Se(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:B(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var t=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=Ie(a[0]);return{prefix:r,iconName:B(r,t)||t}}if(typeof a=="string"&&(a.indexOf("".concat(g.cssPrefix,"-"))>-1||a.match(no))){var n=Pe(a.split(" "),{skipLookups:!0});return{prefix:n.prefix||H(),iconName:B(n.prefix,n.iconName)||n.iconName}}if(typeof a=="string"){var o=H();return{prefix:o,iconName:B(o,a)||a}}}},M={noAuto:$o,config:g,dom:zo,parse:Do,library:ur,findIconDefinition:Ze,toHtml:ce},Ro=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=a.autoReplaceSvgRoot,r=t===void 0?E:t;(Object.keys($.styles).length>0||g.autoFetchSvg)&&W&&g.autoReplaceSvg&&M.dom.i2svg({node:r})};function _e(e,a){return Object.defineProperty(e,"abstract",{get:a}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return ce(r)})}}),Object.defineProperty(e,"node",{get:function(){if(W){var r=E.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Uo(e){var a=e.children,t=e.main,r=e.mask,n=e.attributes,o=e.styles,i=e.transform;if(ca(i)&&t.found&&!r.found){var s=t.width,l=t.height,f={x:s/l/2,y:.5};n.style=Ee(c(c({},o),{},{"transform-origin":"".concat(f.x+i.x/16,"em ").concat(f.y+i.y/16,"em")}))}return[{tag:"svg",attributes:n,children:a}]}function Wo(e){var a=e.prefix,t=e.iconName,r=e.children,n=e.attributes,o=e.symbol,i=o===!0?"".concat(a,"-").concat(g.cssPrefix,"-").concat(t):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c(c({},n),{},{id:i}),children:r}]}]}function Yo(e){var a=["aria-label","aria-labelledby","title","role"];return a.some(function(t){return t in e})}function va(e){var a=e.icons,t=a.main,r=a.mask,n=e.prefix,o=e.iconName,i=e.transform,s=e.symbol,l=e.maskId,f=e.extra,u=e.watchable,d=u===void 0?!1:u,m=r.found?r:t,v=m.width,S=m.height,b=[g.replacementClass,o?"".concat(g.cssPrefix,"-").concat(o):""].filter(function(C){return f.classes.indexOf(C)===-1}).filter(function(C){return C!==""||!!C}).concat(f.classes).join(" "),h={children:[],attributes:c(c({},f.attributes),{},{"data-prefix":n,"data-icon":o,class:b,role:f.attributes.role||"img",viewBox:"0 0 ".concat(v," ").concat(S)})};!Yo(f.attributes)&&!f.attributes["aria-hidden"]&&(h.attributes["aria-hidden"]="true"),d&&(h.attributes[V]="");var p=c(c({},h),{},{prefix:n,iconName:o,main:t,mask:r,maskId:l,transform:i,symbol:s,styles:c({},f.styles)}),I=r.found&&t.found?G("generateAbstractMask",p)||{children:[],attributes:{}}:G("generateAbstractIcon",p)||{children:[],attributes:{}},P=I.children,A=I.attributes;return p.children=P,p.attributes=A,s?Wo(p):Uo(p)}function Wa(e){var a=e.content,t=e.width,r=e.height,n=e.transform,o=e.extra,i=e.watchable,s=i===void 0?!1:i,l=c(c({},o.attributes),{},{class:o.classes.join(" ")});s&&(l[V]="");var f=c({},o.styles);ca(n)&&(f.transform=bo({transform:n,width:t,height:r}),f["-webkit-transform"]=f.transform);var u=Ee(f);u.length>0&&(l.style=u);var d=[];return d.push({tag:"span",attributes:l,children:[a]}),d}function Ho(e){var a=e.content,t=e.extra,r=c(c({},t.attributes),{},{class:t.classes.join(" ")}),n=Ee(t.styles);n.length>0&&(r.style=n);var o=[];return o.push({tag:"span",attributes:r,children:[a]}),o}var De=$.styles;function ea(e){var a=e[0],t=e[1],r=e.slice(4),n=ke(r,1),o=n[0],i=null;return Array.isArray(o)?i={tag:"g",attributes:{class:"".concat(g.cssPrefix,"-").concat(Le.GROUP)},children:[{tag:"path",attributes:{class:"".concat(g.cssPrefix,"-").concat(Le.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(g.cssPrefix,"-").concat(Le.PRIMARY),fill:"currentColor",d:o[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:a,height:t,icon:i}}var Go={found:!1,width:512,height:512};function Bo(e,a){!Bt&&!g.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(a,'" is missing.'))}function aa(e,a){var t=a;return a==="fa"&&g.styleDefault!==null&&(a=H()),new Promise(function(r,n){if(t==="fa"){var o=lr(e)||{};e=o.iconName||e,a=o.prefix||a}if(e&&a&&De[a]&&De[a][e]){var i=De[a][e];return r(ea(i))}Bo(e,a),r(c(c({},Go),{},{icon:g.showMissingIcons&&e?G("missingIconAbstract")||{}:{}}))})}var Ya=function(){},ta=g.measurePerformance&&ve&&ve.mark&&ve.measure?ve:{mark:Ya,measure:Ya},re='FA "7.1.0"',Vo=function(a){return ta.mark("".concat(re," ").concat(a," begins")),function(){return cr(a)}},cr=function(a){ta.mark("".concat(re," ").concat(a," ends")),ta.measure("".concat(re," ").concat(a),"".concat(re," ").concat(a," begins"),"".concat(re," ").concat(a," ends"))},ha={begin:Vo,end:cr},pe=function(){};function Ha(e){var a=e.getAttribute?e.getAttribute(V):null;return typeof a=="string"}function Xo(e){var a=e.getAttribute?e.getAttribute(sa):null,t=e.getAttribute?e.getAttribute(la):null;return a&&t}function Ko(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(g.replacementClass)}function Jo(){if(g.autoReplaceSvg===!0)return be.replace;var e=be[g.autoReplaceSvg];return e||be.replace}function qo(e){return E.createElementNS("http://www.w3.org/2000/svg",e)}function Qo(e){return E.createElement(e)}function dr(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=a.ceFn,r=t===void 0?e.tag==="svg"?qo:Qo:t;if(typeof e=="string")return E.createTextNode(e);var n=r(e.tag);Object.keys(e.attributes||[]).forEach(function(i){n.setAttribute(i,e.attributes[i])});var o=e.children||[];return o.forEach(function(i){n.appendChild(dr(i,{ceFn:r}))}),n}function Zo(e){var a=" ".concat(e.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var be={replace:function(a){var t=a[0];if(t.parentNode)if(a[1].forEach(function(n){t.parentNode.insertBefore(dr(n),t)}),t.getAttribute(V)===null&&g.keepOriginalSource){var r=E.createComment(Zo(t));t.parentNode.replaceChild(r,t)}else t.remove()},nest:function(a){var t=a[0],r=a[1];if(~ua(t).indexOf(g.replacementClass))return be.replace(a);var n=new RegExp("".concat(g.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(s,l){return l===g.replacementClass||l.match(n)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",o.toNode.join(" "))}var i=r.map(function(s){return ce(s)}).join(`
`);t.setAttribute(V,""),t.innerHTML=i}};function Ga(e){e()}function mr(e,a){var t=typeof a=="function"?a:pe;if(e.length===0)t();else{var r=Ga;g.mutateApproach===ao&&(r=Y.requestAnimationFrame||Ga),r(function(){var n=Jo(),o=ha.begin("mutate");e.map(n),o(),t()})}}var ga=!1;function vr(){ga=!0}function ra(){ga=!1}var xe=null;function Ba(e){if(Na&&g.observeMutations){var a=e.treeCallback,t=a===void 0?pe:a,r=e.nodeCallback,n=r===void 0?pe:r,o=e.pseudoElementsCallback,i=o===void 0?pe:o,s=e.observeMutationsRoot,l=s===void 0?E:s;xe=new Na(function(f){if(!ga){var u=H();Z(f).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Ha(d.addedNodes[0])&&(g.searchPseudoElements&&i(d.target),t(d.target)),d.type==="attributes"&&d.target.parentNode&&g.searchPseudoElements&&i([d.target],!0),d.type==="attributes"&&Ha(d.target)&&~so.indexOf(d.attributeName))if(d.attributeName==="class"&&Xo(d.target)){var m=Pe(ua(d.target)),v=m.prefix,S=m.iconName;d.target.setAttribute(sa,v||u),S&&d.target.setAttribute(la,S)}else Ko(d.target)&&n(d.target)})}}),W&&xe.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function es(){xe&&xe.disconnect()}function as(e){var a=e.getAttribute("style"),t=[];return a&&(t=a.split(";").reduce(function(r,n){var o=n.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(r[i]=s.join(":").trim()),r},{})),t}function ts(e){var a=e.getAttribute("data-prefix"),t=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",n=Pe(ua(e));return n.prefix||(n.prefix=H()),a&&t&&(n.prefix=a,n.iconName=t),n.iconName&&n.prefix||(n.prefix&&r.length>0&&(n.iconName=Io(n.prefix,e.innerText)||ma(n.prefix,er(e.innerText))),!n.iconName&&g.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=e.firstChild.data)),n}function rs(e){var a=Z(e.attributes).reduce(function(t,r){return t.name!=="class"&&t.name!=="style"&&(t[r.name]=r.value),t},{});return a}function ns(){return{iconName:null,prefix:null,transform:D,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Va(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=ts(e),r=t.iconName,n=t.prefix,o=t.rest,i=rs(e),s=Qe("parseNodeAttributes",{},e),l=a.styleParser?as(e):[];return c({iconName:r,prefix:n,transform:D,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:i}},s)}var is=$.styles;function hr(e){var a=g.autoReplaceSvg==="nest"?Va(e,{styleParser:!1}):Va(e);return~a.extra.classes.indexOf(Xt)?G("generateLayersText",e,a):G("generateSvgReplacementMutation",e,a)}function os(){return[].concat(z(Rt),z(Ut))}function Xa(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!W)return Promise.resolve();var t=E.documentElement.classList,r=function(d){return t.add("".concat(Ta,"-").concat(d))},n=function(d){return t.remove("".concat(Ta,"-").concat(d))},o=g.autoFetchSvg?os():wt.concat(Object.keys(is));o.includes("fa")||o.push("fa");var i=[".".concat(Xt,":not([").concat(V,"])")].concat(o.map(function(u){return".".concat(u,":not([").concat(V,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=Z(e.querySelectorAll(i))}catch{}if(s.length>0)r("pending"),n("complete");else return Promise.resolve();var l=ha.begin("onTree"),f=s.reduce(function(u,d){try{var m=hr(d);m&&u.push(m)}catch(v){Bt||v.name==="MissingIcon"&&console.error(v)}return u},[]);return new Promise(function(u,d){Promise.all(f).then(function(m){mr(m,function(){r("active"),r("complete"),n("pending"),typeof a=="function"&&a(),l(),u()})}).catch(function(m){l(),d(m)})})}function ss(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;hr(e).then(function(t){t&&mr([t],a)})}function ls(e){return function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:Ze(a||{}),n=t.mask;return n&&(n=(n||{}).icon?n:Ze(n||{})),e(r,c(c({},t),{},{mask:n}))}}var fs=function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.transform,n=r===void 0?D:r,o=t.symbol,i=o===void 0?!1:o,s=t.mask,l=s===void 0?null:s,f=t.maskId,u=f===void 0?null:f,d=t.classes,m=d===void 0?[]:d,v=t.attributes,S=v===void 0?{}:v,b=t.styles,h=b===void 0?{}:b;if(a){var p=a.prefix,I=a.iconName,P=a.icon;return _e(c({type:"icon"},a),function(){return X("beforeDOMElementCreation",{iconDefinition:a,params:t}),va({icons:{main:ea(P),mask:l?ea(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:I,transform:c(c({},D),n),symbol:i,maskId:u,extra:{attributes:S,styles:h,classes:m}})})}},us={mixout:function(){return{icon:ls(fs)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=Xa,t.nodeCallback=ss,t}}},provides:function(a){a.i2svg=function(t){var r=t.node,n=r===void 0?E:r,o=t.callback,i=o===void 0?function(){}:o;return Xa(n,i)},a.generateSvgReplacementMutation=function(t,r){var n=r.iconName,o=r.prefix,i=r.transform,s=r.symbol,l=r.mask,f=r.maskId,u=r.extra;return new Promise(function(d,m){Promise.all([aa(n,o),l.iconName?aa(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var S=ke(v,2),b=S[0],h=S[1];d([t,va({icons:{main:b,mask:h},prefix:o,iconName:n,transform:i,symbol:s,maskId:f,extra:u,watchable:!0})])}).catch(m)})},a.generateAbstractIcon=function(t){var r=t.children,n=t.attributes,o=t.main,i=t.transform,s=t.styles,l=Ee(s);l.length>0&&(n.style=l);var f;return ca(i)&&(f=G("generateAbstractTransformGrouping",{main:o,transform:i,containerWidth:o.width,iconWidth:o.width})),r.push(f||o.icon),{children:r,attributes:n}}}},cs={mixout:function(){return{layer:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.classes,o=n===void 0?[]:n;return _e({type:"layer"},function(){X("beforeDOMElementCreation",{assembler:t,params:r});var i=[];return t(function(s){Array.isArray(s)?s.map(function(l){i=i.concat(l.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(g.cssPrefix,"-layers")].concat(z(o)).join(" ")},children:i}]})}}}},ds={mixout:function(){return{counter:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};r.title;var n=r.classes,o=n===void 0?[]:n,i=r.attributes,s=i===void 0?{}:i,l=r.styles,f=l===void 0?{}:l;return _e({type:"counter",content:t},function(){return X("beforeDOMElementCreation",{content:t,params:r}),Ho({content:t.toString(),extra:{attributes:s,styles:f,classes:["".concat(g.cssPrefix,"-layers-counter")].concat(z(o))}})})}}}},ms={mixout:function(){return{text:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.transform,o=n===void 0?D:n,i=r.classes,s=i===void 0?[]:i,l=r.attributes,f=l===void 0?{}:l,u=r.styles,d=u===void 0?{}:u;return _e({type:"text",content:t},function(){return X("beforeDOMElementCreation",{content:t,params:r}),Wa({content:t,transform:c(c({},D),o),extra:{attributes:f,styles:d,classes:["".concat(g.cssPrefix,"-layers-text")].concat(z(s))}})})}}},provides:function(a){a.generateLayersText=function(t,r){var n=r.transform,o=r.extra,i=null,s=null;if(At){var l=parseInt(getComputedStyle(t).fontSize,10),f=t.getBoundingClientRect();i=f.width/l,s=f.height/l}return Promise.resolve([t,Wa({content:t.innerHTML,width:i,height:s,transform:n,extra:o,watchable:!0})])}}},gr=new RegExp('"',"ug"),Ka=[1105920,1112319],Ja=c(c(c(c({},{FontAwesome:{normal:"fas",400:"fas"}}),Xn),Zi),ri),na=Object.keys(Ja).reduce(function(e,a){return e[a.toLowerCase()]=Ja[a],e},{}),vs=Object.keys(na).reduce(function(e,a){var t=na[a];return e[a]=t[900]||z(Object.entries(t))[0][1],e},{});function hs(e){var a=e.replace(gr,"");return er(z(a)[0]||"")}function gs(e){var a=e.getPropertyValue("font-feature-settings").includes("ss01"),t=e.getPropertyValue("content"),r=t.replace(gr,""),n=r.codePointAt(0),o=n>=Ka[0]&&n<=Ka[1],i=r.length===2?r[0]===r[1]:!1;return o||i||a}function ps(e,a){var t=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(a),n=isNaN(r)?"normal":r;return(na[t]||{})[n]||vs[t]}function qa(e,a){var t="".concat(eo).concat(a.replace(":","-"));return new Promise(function(r,n){if(e.getAttribute(t)!==null)return r();var o=Z(e.children),i=o.filter(function(w){return w.getAttribute(Ve)===a})[0],s=Y.getComputedStyle(e,a),l=s.getPropertyValue("font-family"),f=l.match(io),u=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(i&&!f)return e.removeChild(i),r();if(f&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),v=ps(l,u),S=hs(m),b=f[0].startsWith("FontAwesome"),h=gs(s),p=ma(v,S),I=p;if(b){var P=Po(S);P.iconName&&P.prefix&&(p=P.iconName,v=P.prefix)}if(p&&!h&&(!i||i.getAttribute(sa)!==v||i.getAttribute(la)!==I)){e.setAttribute(t,I),i&&e.removeChild(i);var A=ns(),C=A.extra;C.attributes[Ve]=a,aa(p,v).then(function(w){var x=va(c(c({},A),{},{icons:{main:w,mask:fr()},prefix:v,iconName:I,extra:C,watchable:!0})),k=E.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?e.insertBefore(k,e.firstChild):e.appendChild(k),k.outerHTML=x.map(function(N){return ce(N)}).join(`
`),e.removeAttribute(t),r()}).catch(n)}else r()}else r()})}function bs(e){return Promise.all([qa(e,"::before"),qa(e,"::after")])}function ys(e){return e.parentNode!==document.head&&!~to.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ve)&&(!e.parentNode||e.parentNode.tagName!=="svg")}var As=function(a){return!!a&&Gt.some(function(t){return a.includes(t)})},Ss=function(a){if(!a)return[];var t=new Set,r=a.split(/,(?![^()]*\))/).map(function(l){return l.trim()});r=r.flatMap(function(l){return l.includes("(")?l:l.split(",").map(function(f){return f.trim()})});var n=ge(r),o;try{for(n.s();!(o=n.n()).done;){var i=o.value;if(As(i)){var s=Gt.reduce(function(l,f){return l.replace(f,"")},i);s!==""&&s!=="*"&&t.add(s)}}}catch(l){n.e(l)}finally{n.f()}return t};function Qa(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(W){var t;if(a)t=e;else if(g.searchPseudoElementsFullScan)t=e.querySelectorAll("*");else{var r=new Set,n=ge(document.styleSheets),o;try{for(n.s();!(o=n.n()).done;){var i=o.value;try{var s=ge(i.cssRules),l;try{for(s.s();!(l=s.n()).done;){var f=l.value,u=Ss(f.selectorText),d=ge(u),m;try{for(d.s();!(m=d.n()).done;){var v=m.value;r.add(v)}}catch(b){d.e(b)}finally{d.f()}}}catch(b){s.e(b)}finally{s.f()}}catch(b){g.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(i.href," (").concat(b.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(b){n.e(b)}finally{n.f()}if(!r.size)return;var S=Array.from(r).join(", ");try{t=e.querySelectorAll(S)}catch{}}return new Promise(function(b,h){var p=Z(t).filter(ys).map(bs),I=ha.begin("searchPseudoElements");vr(),Promise.all(p).then(function(){I(),ra(),b()}).catch(function(){I(),ra(),h()})})}}var ws={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=Qa,t}}},provides:function(a){a.pseudoElements2svg=function(t){var r=t.node,n=r===void 0?E:r;g.searchPseudoElements&&Qa(n)}}},Za=!1,xs={mixout:function(){return{dom:{unwatch:function(){vr(),Za=!0}}}},hooks:function(){return{bootstrap:function(){Ba(Qe("mutationObserverCallbacks",{}))},noAuto:function(){es()},watch:function(t){var r=t.observeMutationsRoot;Za?ra():Ba(Qe("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},et=function(a){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(r,n){var o=n.toLowerCase().split("-"),i=o[0],s=o.slice(1).join("-");if(i&&s==="h")return r.flipX=!0,r;if(i&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(i){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},t)},ks={mixout:function(){return{parse:{transform:function(t){return et(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,r){var n=r.getAttribute("data-fa-transform");return n&&(t.transform=et(n)),t}}},provides:function(a){a.generateAbstractTransformGrouping=function(t){var r=t.main,n=t.transform,o=t.containerWidth,i=t.iconWidth,s={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(n.x*32,", ").concat(n.y*32,") "),f="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),u="rotate(".concat(n.rotate," 0 0)"),d={transform:"".concat(l," ").concat(f," ").concat(u)},m={transform:"translate(".concat(i/2*-1," -256)")},v={outer:s,inner:d,path:m};return{tag:"g",attributes:c({},v.outer),children:[{tag:"g",attributes:c({},v.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:c(c({},r.icon.attributes),v.path)}]}]}}}},Re={x:0,y:0,width:"100%",height:"100%"};function at(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||a)&&(e.attributes.fill="black"),e}function Es(e){return e.tag==="g"?e.children:[e]}var Is={hooks:function(){return{parseNodeAttributes:function(t,r){var n=r.getAttribute("data-fa-mask"),o=n?Pe(n.split(" ").map(function(i){return i.trim()})):fr();return o.prefix||(o.prefix=H()),t.mask=o,t.maskId=r.getAttribute("data-fa-mask-id"),t}}},provides:function(a){a.generateAbstractMask=function(t){var r=t.children,n=t.attributes,o=t.main,i=t.mask,s=t.maskId,l=t.transform,f=o.width,u=o.icon,d=i.width,m=i.icon,v=po({transform:l,containerWidth:d,iconWidth:f}),S={tag:"rect",attributes:c(c({},Re),{},{fill:"white"})},b=u.children?{children:u.children.map(at)}:{},h={tag:"g",attributes:c({},v.inner),children:[at(c({tag:u.tag,attributes:c(c({},u.attributes),v.path)},b))]},p={tag:"g",attributes:c({},v.outer),children:[h]},I="mask-".concat(s||ja()),P="clip-".concat(s||ja()),A={tag:"mask",attributes:c(c({},Re),{},{id:I,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,p]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:P},children:Es(m)},A]};return r.push(C,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(P,")"),mask:"url(#".concat(I,")")},Re)}),{children:r,attributes:n}}}},Ps={provides:function(a){var t=!1;Y.matchMedia&&(t=Y.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var r=[],n={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:c(c({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=c(c({},o),{},{attributeName:"opacity"}),s={tag:"circle",attributes:c(c({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||s.children.push({tag:"animate",attributes:c(c({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:c(c({},i),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:c(c({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:c(c({},i),{},{values:"1;0;0;0;0;1;"})}]}),t||r.push({tag:"path",attributes:c(c({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:c(c({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},_s={hooks:function(){return{parseNodeAttributes:function(t,r){var n=r.getAttribute("data-fa-symbol"),o=n===null?!1:n===""?!0:n;return t.symbol=o,t}}}},Cs=[Ao,us,cs,ds,ms,ws,xs,ks,Is,Ps,_s];Lo(Cs,{mixoutsTo:M});M.noAuto;M.config;var js=M.library;M.dom;var Ls=M.parse;M.findIconDefinition;M.toHtml;var $s=M.icon;M.layer;M.text;M.counter;var zs={prefix:"fab",iconName:"stack-overflow",icon:[384,512,[],"f16c","M291 311l-195.7-41.3-8.2 39.3 195.7 41 8.2-39zm51-87L188.5 95.7 163 126.5 316.5 254.8 342 224zm-31.2 39.7L129.5 179 112.8 215.5 294 300 310.8 263.7zM262.3 32l-32 24 119.3 160.3 32-24-119.3-160.3zm20.5 328l-200 0 0 39.7 200 0 0-39.7zm39.7 80l-279.5 0 0-120-40 0 0 160 359.5 0 0-160-40 0 0 120z"]},Ds={prefix:"fab",iconName:"github",icon:[512,512,[],"f09b","M173.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM252.8 8c-138.7 0-244.8 105.3-244.8 244 0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1 100-33.2 167.8-128.1 167.8-239 0-138.7-112.5-244-251.2-244zM105.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},Rs={prefix:"fab",iconName:"kaggle",icon:[320,512,[],"f5fa","M304.2 501.5L158.4 320.3 298.2 185c2.6-2.7 1.7-10.5-5.3-10.5l-69.2 0c-3.5 0-7 1.8-10.5 5.3l-132.3 133.7 0-306c0-5-2.5-7.5-7.5-7.5L21.5 0C16.5 0 14 2.5 14 7.5l0 497c0 5 2.5 7.5 7.5 7.5l51.9 0c5 0 7.5-2.5 7.5-7.5l0-109 30.8-29.3 110.5 140.6c3 3.5 6.5 5.3 10.5 5.3l66.9 0c3.5 0 5.5-1 6-3l-1.4-7.6z"]};var Us={prefix:"fas",iconName:"at",icon:[512,512,[61946],"40","M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0 512 114.6 512 256l0 32c0 53-43 96-96 96-29.3 0-55.6-13.2-73.2-33.9-22.8 21-53.3 33.9-86.8 33.9-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1 5.7-5 13.1-8.1 21.3-8.1 17.7 0 32 14.3 32 32l0 112c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"]},Ws={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M241 87.1l15 20.7 15-20.7C296 52.5 336.2 32 378.9 32 452.4 32 512 91.6 512 165.1l0 2.6c0 112.2-139.9 242.5-212.9 298.2-12.4 9.4-27.6 14.1-43.1 14.1s-30.8-4.6-43.1-14.1C139.9 410.2 0 279.9 0 167.7l0-2.6C0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1z"]},Ys={prefix:"fas",iconName:"school",icon:[576,512,[127979],"f549","M0 192c0-35.3 28.7-64 64-64l64 0 127.9-115.1c18.3-16.4 46-16.4 64.2 0L448 128 512 128c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 192zM224 376l0 88 128 0 0-88c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zm-112 8c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0zm16-144l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16zM496 384c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0zm16-144l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16zM288 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"]},Hs={prefix:"fas",iconName:"code",icon:[576,512,[],"f121","M360.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm64.6 136.1c-12.5 12.5-12.5 32.8 0 45.3l73.4 73.4-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0zm-274.7 0c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 150.6 182.6c12.5-12.5 12.5-32.8 0-45.3z"]},Ns={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M195.1 9.5C198.1-5.3 211.2-16 226.4-16l59.8 0c15.2 0 28.3 10.7 31.3 25.5L332 79.5c14.1 6 27.3 13.7 39.3 22.8l67.8-22.5c14.4-4.8 30.2 1.2 37.8 14.4l29.9 51.8c7.6 13.2 4.9 29.8-6.5 39.9L447 233.3c.9 7.4 1.3 15 1.3 22.7s-.5 15.3-1.3 22.7l53.4 47.5c11.4 10.1 14 26.8 6.5 39.9l-29.9 51.8c-7.6 13.1-23.4 19.2-37.8 14.4l-67.8-22.5c-12.1 9.1-25.3 16.7-39.3 22.8l-14.4 69.9c-3.1 14.9-16.2 25.5-31.3 25.5l-59.8 0c-15.2 0-28.3-10.7-31.3-25.5l-14.4-69.9c-14.1-6-27.2-13.7-39.3-22.8L73.5 432.3c-14.4 4.8-30.2-1.2-37.8-14.4L5.8 366.1c-7.6-13.2-4.9-29.8 6.5-39.9l53.4-47.5c-.9-7.4-1.3-15-1.3-22.7s.5-15.3 1.3-22.7L12.3 185.8c-11.4-10.1-14-26.8-6.5-39.9L35.7 94.1c7.6-13.2 23.4-19.2 37.8-14.4l67.8 22.5c12.1-9.1 25.3-16.7 39.3-22.8L195.1 9.5zM256.3 336a80 80 0 1 0 -.6-160 80 80 0 1 0 .6 160z"]},Gs=Ns,Bs={prefix:"fas",iconName:"brain",icon:[512,512,[129504],"f5dc","M120 56c0-30.9 25.1-56 56-56l24 0c17.7 0 32 14.3 32 32l0 448c0 17.7-14.3 32-32 32l-32 0c-29.8 0-54.9-20.4-62-48-.7 0-1.3 0-2 0-44.2 0-80-35.8-80-80 0-18 6-34.6 16-48-19.4-14.6-32-37.8-32-64 0-30.9 17.6-57.8 43.2-71.1-7.1-12-11.2-26-11.2-40.9 0-44.2 35.8-80 80-80l0-24zm272 0l0 24c44.2 0 80 35.8 80 80 0 15-4.1 29-11.2 40.9 25.7 13.3 43.2 40.1 43.2 71.1 0 26.2-12.6 49.4-32 64 10 13.4 16 30 16 48 0 44.2-35.8 80-80 80-.7 0-1.3 0-2 0-7.1 27.6-32.2 48-62 48l-32 0c-17.7 0-32-14.3-32-32l0-448c0-17.7 14.3-32 32-32l24 0c30.9 0 56 25.1 56 56z"]},Vs={prefix:"fas",iconName:"language",icon:[576,512,[],"f1ab","M160 0c17.7 0 32 14.3 32 32l0 32 128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-9.6 0-8.4 23.1c-16.4 45.2-41.1 86.5-72.2 122 14.2 8.8 29 16.6 44.4 23.5l50.4 22.4 62.2-140c5.1-11.6 16.6-19 29.2-19s24.1 7.4 29.2 19l128 288c7.2 16.2-.1 35.1-16.2 42.2s-35.1-.1-42.2-16.2l-20-45-157.5 0-20 45c-7.2 16.2-26.1 23.4-42.2 16.2s-23.4-26.1-16.2-42.2l39.8-89.5-50.4-22.4c-23-10.2-45-22.4-65.8-36.4-21.3 17.2-44.6 32.2-69.5 44.7L78.3 380.6c-15.8 7.9-35 1.5-42.9-14.3s-1.5-35 14.3-42.9l34.5-17.3c16.3-8.2 31.8-17.7 46.4-28.3-13.8-12.7-26.8-26.4-38.9-40.9L81.6 224.7c-11.3-13.6-9.5-33.8 4.1-45.1s33.8-9.5 45.1 4.1l10.2 12.2c11.5 13.9 24.1 26.8 37.4 38.7 27.5-30.4 49.2-66.1 63.5-105.4l.5-1.2-210.3 0C14.3 128 0 113.7 0 96S14.3 64 32 64l96 0 0-32c0-17.7 14.3-32 32-32zM416 270.8L365.7 384 466.3 384 416 270.8z"]};export{fn as a,un as b,on as c,Rs as d,Ts as e,Ds as f,zs as g,Ws as h,Gs as i,Us as j,Ys as k,js as l,Vs as m,Bs as n,Hs as o,Ls as p,Ms as q,$s as r,Ae as s,dn as t};
