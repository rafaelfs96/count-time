(this["webpackJsonpcount-time"]=this["webpackJsonpcount-time"]||[]).push([[0],{129:function(e,t,n){},130:function(e,t,n){"use strict";n.r(t);var a=n(3),c=(n(54),n(4)),o=n.n(c),r=n(20),i=n.n(r),s=n(11);n(58),n(59),n(60);var u=function(e){var t=e.type,n=e.onClick,c=e.value;return Object(a.jsx)("button",{className:"button button--".concat(t),onClick:n,children:c||""})};var l=function(e){var t=e.setTheme,n=e.theme;return Object(a.jsx)("header",{className:"Header",children:Object(a.jsx)(u,{type:"primary",value:"change theme",onClick:function(){"dark"===n?(t("light"),localStorage.setItem("theme","light")):"light"===n&&(t("dark"),localStorage.setItem("theme","dark"))}})})};n(61);var d=function(){var e=(new Date).getFullYear();return Object(a.jsxs)("footer",{className:"Footer",children:["\xa9 ",e," Made by ",Object(a.jsx)("a",{className:"link",rel:"noreferrer",href:"https://github.com/rafaelfs96",target:"_blank",children:"rafaelfs96"})]})},h=(n(62),n(63),function(){var e=new Date;return{day:e.getUTCDate(),month:e.getMonth()+1,year:e.getFullYear(),hour:e.getHours(),minute:e.getMinutes(),second:e.getSeconds()}});var j=function(){var e=Object(c.useState)(h()),t=Object(s.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)((function(){var e=setInterval((function(){return r(h())}),500);return function(){return clearInterval(e)}}),[]);var i=function(e){var t=e.day,n=e.month,a=e.year,c=e.hour,o=e.minute,r=e.second;return{day:t=t<10?"0".concat(t):t,month:n=n<10?"0".concat(n):n,year:a,hour:c=c<10?"0".concat(c):c,minute:o=o<10?"0".concat(o):o,second:r=r<10?"0".concat(r):r}}(n),u=i.day,l=i.month,d=i.year,j=i.hour,m=i.minute,v=i.second;return Object(a.jsx)(o.a.Fragment,{children:Object(a.jsxs)("h1",{className:"Clock",children:[Object(a.jsx)("time",{className:"Clock__time",dateTime:"".concat(j,":").concat(m,":").concat(v),children:"".concat(j,":").concat(m,":").concat(v)}),Object(a.jsx)("time",{className:"Clock__date",dateTime:"".concat(l,"/").concat(u,"/").concat(d),children:"".concat(l,"/").concat(u,"/").concat(d)})]})})},m=(n(64),n(65),n(66),n(49)),v=n.n(m);var f=function(e){var t=e.dateFormat,n=void 0===t?"MMMM d, yyyy h:mm aa":t,c=e.timeFormat,o=void 0===c?"HH:mm":c,r=e.timeIntervals,i=void 0===r?10:r,s=e.value,u=(e.name,e.id),l=e.isDisable,d=e.onChange;return Object(a.jsx)(v.a,{timeIntervals:i,selected:s,dateFormat:n,timeFormat:o,name:u,id:u,showTimeInput:!0,timeInputLabel:"Time:",disabled:l,onChange:d})};var b=function(e){var t=e.change,n=e.useNow,c=e.scss,o=e.id,r=e.text,i=e.value;return Object(a.jsxs)("div",{className:c,children:[Object(a.jsxs)("label",{htmlFor:o,children:[r,": "]}),Object(a.jsx)(f,{value:i,id:o,name:o,isDisable:n,onChange:function(e){t({date:e,useNow:n})}}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"use-now_".concat(o),children:"Use current date?"}),Object(a.jsx)("input",{type:"checkbox",name:"use-now_".concat(o),id:"use-now_".concat(o),value:n,onChange:function(e){t({date:i,useNow:!n})},checked:n})]})]})};n(129);var g=function(e){var t=e.time;return Object(a.jsx)("div",{className:"Presentation",children:t})};var w=function(){var e=Object(c.useState)({date:new Date,useNow:!1}),t=Object(s.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)({date:"",useNow:!0}),l=Object(s.a)(i,2),d=l[0],h=l[1],j=Object(c.useState)(""),m=Object(s.a)(j,2),v=m[0],f=m[1];return Object(a.jsxs)(o.a.Fragment,{children:[Object(a.jsxs)("div",{className:"Datepicker",children:[Object(a.jsx)(b,{text:"Initial Date",id:"startDate",value:n.date,useNow:n.useNow,change:r,scss:"Datepicker__calendar"}),Object(a.jsx)(b,{text:"Final Date",id:"endDate",value:d.date,useNow:d.useNow,change:h,scss:"Datepicker__calendar"})]}),Object(a.jsx)(u,{onClick:function(){if((n.date||n.useNow)&&(d.date||d.useNow)){var e=function(e){var t=e.startDate,n=void 0===t?new Date:t,a=e.endDate,c=void 0===a?new Date:a,o=Math.abs(c-n)/1e3,r=n>c?-1:1,i=[["weeks",604800],["days",86400],["hours",3600],["minutes",60],["seconds",1]].reduce((function(e,t){var n=Object(s.a)(t,2),a=n[0],c=n[1],i=Math.floor(o/c);return 0===i||(e[a]=i*r,o-=e[a]*r*c),e}),{}),u=[];for(var l in i)u.push("".concat(i[l]," ").concat(l));return u.join(", ")}({startDate:n.useNow?new Date:new Date(n.date),endDate:d.useNow?new Date:new Date(d.date)});f(e)}else f("Select a valid date")},value:"calculate",type:"primary"}),Object(a.jsx)(g,{time:v})]})};var O=function(){return Object(a.jsxs)("div",{class:"Main",children:[Object(a.jsx)(j,{}),Object(a.jsx)(w,{})]})};var x=function(){var e=localStorage.getItem("theme")||"dark",t=Object(c.useState)(e),n=Object(s.a)(t,2),o=n[0],r=n[1];return Object(a.jsxs)("div",{className:["App","theme-".concat(o)].join(" "),children:[Object(a.jsx)(l,{setTheme:r,theme:o}),Object(a.jsx)(O,{}),Object(a.jsx)(d,{})]})},p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,135)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),o(e),r(e)}))};i.a.render(Object(a.jsx)(x,{}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/count-time",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/count-time","/service-worker.js");p?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):k(t,e)}))}}(),N()},54:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},66:function(e,t,n){}},[[130,1,2]]]);
//# sourceMappingURL=main.2f596450.chunk.js.map