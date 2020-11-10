(this["webpackJsonpcount-time"]=this["webpackJsonpcount-time"]||[]).push([[0],{128:function(e,t,n){},129:function(e,t,n){"use strict";n.r(t);var a=n(3),c=(n(58),n(59),n(4)),o=n.n(c),r=n(20),s=n.n(r),i=n(11),u=n(51),d=n.n(u),l=n(52),j=n.n(l);n(63);var m=function(e){var t=e.type,n=e.onClick,c=e.value;return Object(a.jsx)("button",{className:"button button--".concat(t),onClick:n,children:c||""})};var h=function(e){var t=e.setTheme,n=e.theme;return Object(a.jsx)("header",{className:j.a.Header,children:Object(a.jsx)(m,{type:"primary",value:"change theme",onClick:function(){"dark"===n?t("light"):"light"===n&&t("dark")}})})},b=n(31),v=n.n(b),_=function(){var e=new Date;return{day:e.getUTCDate(),month:e.getMonth()+1,year:e.getFullYear(),hour:e.getHours(),minute:e.getMinutes(),second:e.getSeconds()}};var O=function(){var e=Object(c.useState)(_()),t=Object(i.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)((function(){var e=setInterval((function(){return r(_())}),500);return function(){return clearInterval(e)}}),[]);var s=function(e){var t=e.day,n=e.month,a=e.year,c=e.hour,o=e.minute,r=e.second;return{day:t=t<10?"0".concat(t):t,month:n=n<10?"0".concat(n):n,year:a,hour:c=c<10?"0".concat(c):c,minute:o=o<10?"0".concat(o):o,second:r=r<10?"0".concat(r):r}}(n),u=s.day,d=s.month,l=s.year,j=s.hour,m=s.minute,h=s.second;return Object(a.jsx)(o.a.Fragment,{children:Object(a.jsxs)("h1",{className:v.a.content,children:[Object(a.jsx)("time",{className:v.a.content__time,dateTime:"".concat(j,":").concat(m,":").concat(h),children:"".concat(j,":").concat(m,":").concat(h)}),Object(a.jsx)("time",{className:v.a.content__date,dateTime:"".concat(d,"/").concat(u,"/").concat(l),children:"".concat(d,"/").concat(u,"/").concat(l)})]})})},p=(n(64),n(65),n(53)),f=n.n(p);var x=function(e){var t=e.dateFormat,n=void 0===t?"MMMM d, yyyy h:mm aa":t,c=e.timeFormat,o=void 0===c?"HH:mm":c,r=e.timeIntervals,s=void 0===r?10:r,i=e.value,u=(e.name,e.id),d=e.isDisable,l=e.onChange;return Object(a.jsx)(f.a,{timeIntervals:s,selected:i,dateFormat:n,timeFormat:o,name:u,id:u,showTimeInput:!0,timeInputLabel:"Time:",disabled:d,onChange:l})};var w=function(e){var t=e.change,n=e.useNow,c=e.scss,o=e.id,r=e.text,s=e.value;return Object(a.jsxs)("div",{className:c,children:[Object(a.jsxs)("label",{htmlFor:o,children:[r,": "]}),Object(a.jsx)(x,{value:s,id:o,name:o,isDisable:n,onChange:function(e){t({date:e,useNow:n})}}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"use-now_".concat(o),children:"Usar data atual?"}),Object(a.jsx)("input",{type:"checkbox",name:"use-now_".concat(o),id:"use-now_".concat(o),value:n,onChange:function(e){t({date:s,useNow:!n})},checked:n})]})]})},N=n(32),k=n.n(N);n(128);var y=function(e){var t=e.time;return Object(a.jsx)("div",{className:"presentation",children:t})};var D=function(){var e=Object(c.useState)({date:new Date,useNow:!1}),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)({date:"",useNow:!0}),u=Object(i.a)(s,2),d=u[0],l=u[1],j=Object(c.useState)(""),h=Object(i.a)(j,2),b=h[0],v=h[1];return Object(a.jsxs)(o.a.Fragment,{children:[Object(a.jsxs)("div",{className:k.a.datepicker,children:[Object(a.jsx)(w,{text:"Data Inicial",id:"startDate",value:n.date,useNow:n.useNow,change:r,scss:k.a.datepicker__calendar}),Object(a.jsx)(w,{text:"Data Final",id:"endDate",value:d.date,useNow:d.useNow,change:l,scss:k.a.datepicker__calendar})]}),Object(a.jsx)(m,{onClick:function(){if((n.date||n.useNow)&&(d.date||d.useNow)){var e=function(e){var t=e.startDate,n=void 0===t?new Date:t,a=e.endDate,c=void 0===a?new Date:a,o=Math.abs(c-n)/1e3,r=n>c?-1:1,s=[["weeks",604800],["days",86400],["hours",3600],["minutes",60],["seconds",1]].reduce((function(e,t){var n=Object(i.a)(t,2),a=n[0],c=n[1],s=Math.floor(o/c);return 0===s||(e[a]=s*r,o-=e[a]*r*c),e}),{}),u=[];for(var d in s)u.push("".concat(s[d]," ").concat(d));return u.join(", ")}({startDate:n.useNow?new Date:new Date(n.date),endDate:d.useNow?new Date:new Date(d.date)});v(e)}else v("Selecione um hor\xe1rio v\xe1lido")},value:"calculate",type:"primary"}),Object(a.jsx)(y,{time:b})]})};var g=function(){var e=Object(c.useState)("dark"),t=Object(i.a)(e,2),n=t[0],o=t[1];return Object(a.jsxs)("div",{className:[d.a.App,"theme-".concat(n)].join(" "),children:[Object(a.jsx)(h,{setTheme:o,theme:n}),Object(a.jsx)(O,{}),Object(a.jsx)(D,{})]})};s.a.render(Object(a.jsx)(g,{}),document.getElementById("root"))},31:function(e,t,n){e.exports={content:"Clock_content__3I42q",content__time:"Clock_content__time__1wJOt",content__date:"Clock_content__date__95Z0y"}},32:function(e,t,n){e.exports={datepicker:"TimeBetween_datepicker__Z2jT4",datepicker__calendar:"TimeBetween_datepicker__calendar__32DJN"}},51:function(e,t,n){e.exports={App:"App_App__rq8wc"}},52:function(e,t,n){e.exports={Header:"Header_Header__1CTzX"}},58:function(e,t,n){},59:function(e,t,n){},63:function(e,t,n){},65:function(e,t,n){}},[[129,1,2]]]);
//# sourceMappingURL=main.db51135f.chunk.js.map