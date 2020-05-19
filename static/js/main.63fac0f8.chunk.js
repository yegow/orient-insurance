(this["webpackJsonporient-insurance"]=this["webpackJsonporient-insurance"]||[]).push([[2],{1:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"k",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return u})),n.d(t,"i",(function(){return o})),n.d(t,"e",(function(){return i})),n.d(t,"j",(function(){return l})),n.d(t,"l",(function(){return s})),n.d(t,"d",(function(){return d})),n.d(t,"n",(function(){return f})),n.d(t,"m",(function(){return p})),n.d(t,"f",(function(){return y})),n.d(t,"g",(function(){return h})),n.d(t,"h",(function(){return v}));var r="ACTION_CLIENT",a="UPDATE_CLIENTS",c="ADD_INSURERS",u="ADD_ERROR",o="SHIFT_ERROR",i="ADD_SUCCESS",l="SHIFT_SUCCESS",s="UPDATE_INSURERS",d="ADD_POLICY",f="UPDATE_POLICY",p="UPDATE_POLICIES",y="ADD_VEHICLE",h="LOGIN",v="LOGOUT"},108:function(e,t,n){},109:function(e,t,n){},166:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(8),u=n.n(c),o=n(29),i=(n(108),n(65)),l=n(13);n(109);function s(){return a.a.createElement("div",{className:"FallbackContainer",style:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}},a.a.createElement("div",null,a.a.createElement("img",{src:"orient-logo.png",alt:"Company logo",style:{margin:"0 auto",display:"block",borderRadius:"10%",width:"85px"}})))}n(110);var d=n(64);var f=n(45),p=Object(o.b)((function(e){return{errors:e.errors,success:e.success}}),(function(e){return{removeError:function(){return e(Object(f.i)())},removeSuccess:function(){return e(Object(f.j)())}}}))((function(e){var t=e.success,n=e.removeSuccess,c=e.errors,u=e.removeError;return Object(r.useEffect)((function(){c.length&&(d.a.error(c[0]),u()),t.length&&(d.a.success(t[0]),n())}),[c,t]),a.a.createElement("div",null)})),y=a.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(5),n.e(6)]).then(n.bind(null,460))})),h=a.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(7)]).then(n.bind(null,458))})),v=a.a.lazy((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,459))}));var m=function(){return a.a.createElement(i.a,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement(s,null)},a.a.createElement(l.d,null,a.a.createElement(l.b,{path:"/login"},a.a.createElement(h,null)),a.a.createElement(l.b,{path:"/change-password"},a.a.createElement(v,null)),a.a.createElement(l.b,{path:"/app"},a.a.createElement(y,null)),a.a.createElement(l.b,{path:"*"},a.a.createElement(l.a,{to:"/app"})))),a.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var b=n(40);u.a.render(a.a.createElement(o.a,{store:b.a},a.a.createElement(a.a.StrictMode,null,a.a.createElement(m,null))),document.getElementById("root")),window.addEventListener("beforeunload",(function(){var e=b.a.getState().auth;e&&e.token&&e.rememberMe?localStorage.setItem("OrientData",JSON.stringify(b.a.getState())):localStorage.clear()}),!1),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},40:function(e,t,n){"use strict";var r=n(22),a=n(4),c=n(1),u=JSON.parse(localStorage.getItem("OrientData"))||{},o={clients:u.clients||[],insurers:u.insurers||[],policies:u.policies||[],vehicles:u.vehicles||[],auth:u.auth||null},i=function(e,t){return e.filter((function(e){return-1===t.findIndex((function(t){return t.id===e.id}))}))},l=n(44);var s=n(66);var d=Object(r.b)({clients:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.clients,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.a:return[].concat(Object(a.a)(e),[t.payload]);case c.k:return[].concat(Object(a.a)(i(e,t.payload)),Object(a.a)(t.payload));default:return e}},insurers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.insurers,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.c:return[].concat(Object(a.a)(e),[t.payload]);case c.l:return[].concat(Object(a.a)(i(e,t.payload)),Object(a.a)(t.payload));default:return e}},policies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.policies,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.d:return[].concat(Object(a.a)(e),[t.payload]);case c.n:return[t.payload].concat(Object(a.a)(i(e,[t.payload])));case c.m:return[].concat(Object(a.a)(i(e,t.payload)),Object(a.a)(t.payload));default:return e}},vehicles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.vehicles,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.f:return[].concat(Object(a.a)(e),[t.payload]);default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.errors||[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.b:return[].concat(Object(a.a)(e),[t.payload]);case c.i:var n=Object(l.a)(e),r=(n[0],n.slice(1));return Object(a.a)(r);default:return e}},success:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.success||[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.e:return[].concat(Object(a.a)(e),[t.payload]);case c.j:var n=Object(l.a)(e),r=(n[0],n.slice(1));return Object(a.a)(r);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.auth,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.g:return Object(s.a)({},t.payload);case c.h:return null;default:return e}}});t.a=Object(r.c)(d)},45:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"k",(function(){return c})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return o})),n.d(t,"f",(function(){return i})),n.d(t,"n",(function(){return l})),n.d(t,"m",(function(){return s})),n.d(t,"l",(function(){return d})),n.d(t,"b",(function(){return f})),n.d(t,"i",(function(){return p})),n.d(t,"e",(function(){return y})),n.d(t,"j",(function(){return h})),n.d(t,"g",(function(){return v})),n.d(t,"h",(function(){return m}));var r=n(1),a=function(e){return{type:r.a,payload:e}},c=function(e){return{type:r.k,payload:e}},u=function(e){return{type:r.c,payload:e}},o=function(e){return{type:r.d,payload:e}},i=function(e){return{type:r.f,payload:e}},l=function(e){return{type:r.n,payload:e}},s=function(e){return{type:r.m,payload:e}},d=function(e){return{type:r.l,payload:e}},f=function(e){return{type:r.b,payload:e}},p=function(){return{type:r.i,payload:null}},y=function(e){return{type:r.e,payload:e}},h=function(){return{type:r.j,payload:null}},v=function(e){return{type:r.g,payload:e}},m=function(){return{type:r.h,payload:null}}},99:function(e,t,n){e.exports=n(166)}},[[99,3,4]]]);
//# sourceMappingURL=main.63fac0f8.chunk.js.map