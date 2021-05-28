(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{75:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(21),o=n.n(c),a=n(14),s=n(19),i=n(39),u=n(40),l=n(17),d=n(3),j=n(7),b=n.n(j),h="https://keeper-quietnix.herokuapp.com",p="CHANGE_AUTH_STATUS",f="REQUEST_AUTH_PENDING",O="REQUEST_AUTH_SUCCESS",g="REQUEST_AUTH_FAILED",x="USER_CREATED_STATUS",m=function(e){return{type:p,payload:e}},v=n(1);var y=Object(a.b)((function(e){return{authStatus:e.auth}}),(function(e){return{onAuthSet:function(t){return e(m(t))}}}))((function(e){var t=e.authStatus,n=e.onAuthSet;return Object(v.jsxs)("header",{children:[Object(v.jsx)("h1",{style:{display:"inline-block"},children:"Keeper"}),t&&Object(v.jsx)("button",{onClick:function(){b.a.get(h+"/logout",{withCredentials:!0}).then((function(e){n(!1)})).catch((function(e){console.log(e.response)}))},className:"LogoutButton",children:"Logout"})]})}));var w=function(){var e=(new Date).getFullYear();return Object(v.jsx)("footer",{children:Object(v.jsxs)("p",{children:["Copyright \u24d2 ",e]})})};var C=function(e){return Object(v.jsx)(r.Fragment,{children:Object(v.jsx)("div",{className:"centered",children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("h1",{children:"Note Taking App"}),Object(v.jsx)("p",{className:"lead",children:"Don't take risk keeping a food list in mind."}),Object(v.jsx)("br",{}),Object(v.jsx)("a",{className:"btn btn-light btn-lg",href:"/#/register",role:"button",children:"Register"}),Object(v.jsx)("a",{className:"btn btn-dark btn-lg",href:"/#/login",role:"button",children:"Login"})]})})})},S=n(6),E=n.n(S),k=n(13),A=n(5),N=n(15),T=n(4);var _=function(e){var t=e.message,n=e.FormSubmit,c=e.setMessage,o=e.route,a=Object(r.useState)({username:"",password:""}),s=Object(A.a)(a,2),i=s[0],u=s[1];function l(e){var t=e.target,n=t.name,r=t.value;u((function(e){return Object(T.a)(Object(T.a)({},e),{},Object(N.a)({},n,r))}))}return Object(v.jsxs)("div",{className:"container-fluid",children:[Object(v.jsx)("br",{}),Object(v.jsx)("div",{className:"row",style:{justifyContent:"center"},children:Object(v.jsxs)("div",{className:"card",children:[Object(v.jsx)("h3",{children:t}),Object(v.jsx)("h1",{children:o}),Object(v.jsxs)("form",{method:"POST",children:[Object(v.jsx)("label",{htmlFor:"email",children:"Email"}),Object(v.jsx)("input",{onChange:l,type:"email",className:"form-control",name:"username",placeholder:"email address",value:i.username}),Object(v.jsx)("br",{}),Object(v.jsx)("label",{htmlFor:"password",children:"Password"}),Object(v.jsx)("input",{onChange:l,type:"password",className:"form-control",name:"password",placeholder:"Password",value:i.password}),Object(v.jsx)("button",{onClick:function(e){e.preventDefault(),console.log(e),""===i.username||""===i.password?c("Please Enter Your Credential"):/^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(i.username)?/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(i.password)?n({username:i.username,password:i.password}):c("Enter Valid Password"):c("Enter Valid Email address"),u({username:"",password:""})},id:"Submit",className:"btn btn-light  loginButton",children:o})]})]})})]})};var U=Object(a.b)((function(e){return{userCreated:e.userCreated}}),(function(e){return{onUserCreated:function(t){return e(function(e){return{type:x,payload:e}}(t))}}}))((function(e){var t=e.userCreated,n=e.onUserCreated,c=Object(r.useState)(""),o=Object(A.a)(c,2),a=o[0],s=o[1];function i(){return(i=Object(k.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b.a.post(h+"/register",t).then((function(e){e.data.user?s("User Successfully Created"):s("User Already exist, try logging in"),console.log("if user already existed",e.data),n(e.data.user)})).catch((function(e){console.log(e.response)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return t?(console.log("user created finally",t),Object(v.jsx)(d.a,{to:"/login"})):Object(v.jsx)(_,{route:"Register",message:a,FormSubmit:function(e){return i.apply(this,arguments)},setMessage:s})}));var F=Object(a.b)((function(e){return{authStatus:e.auth,userCreated:e.userCreated}}),(function(e){return{onAuthSet:function(t){return e(m(t))}}}))((function(e){var t=e.authStatus,n=e.onAuthSet,c=e.userCreated,o=Object(r.useState)(""),a=Object(A.a)(o,2),s=a[0],i=a[1];function u(){return(u=Object(k.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("should not reach if wrong email"),fetch(h+"/login",{method:"POST",credentials:"include",credential:t}).then((function(e){return e.json()})).then((function(e){console.log("jhjhbkj",e),e.data.user?e.data.verified?e.data.auth&&(i(""),n(!0)):i("Verify Your Email Address"):i("User doesn't exist")})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){c&&i("Verify Your Email Address")}),[c]),t?Object(v.jsx)(d.a,{to:"/"}):Object(v.jsx)(_,{route:"Login",message:s,FormSubmit:function(e){return u.apply(this,arguments)},setMessage:i})})),P=n(41);var D=function(e){return Object(v.jsxs)("div",{className:"note",children:[Object(v.jsx)("h1",{children:e.title}),Object(v.jsx)("p",{children:e.content}),Object(v.jsx)("button",{id:"Submit",onClick:function(){e.onDelete(e.id)},children:"Del"}),Object(v.jsx)("button",{onClick:function(){e.onOpen(e.id)},children:"Open"})]})};function R(e){console.log("Compose");var t=Object(r.useState)({title:"",content:""}),n=Object(A.a)(t,2),c=n[0],o=n[1];function a(e){var t=e.target,n=t.name,r=t.value;o((function(e){return Object(T.a)(Object(T.a)({},e),{},Object(N.a)({},n,r))}))}function s(){return(s=Object(k.a)(E.a.mark((function t(n){var r;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),""!==c.content||""!==c.title){t.next=3;break}return t.abrupt("return");case 3:return""===c.title&&(c.title=c.content.substring(0,29)),""===c.content&&(c.content=c.title),t.next=7,b.a.post(h+"/compose",c,{withCredentials:!0});case 7:r=t.sent,console.log("Added"),console.log(r.data),e.onAdd(r.data),o({title:"",content:""});case 12:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(v.jsx)(r.Fragment,{children:Object(v.jsx)("div",{className:"Container-fluid",style:{textAlign:"center"},children:Object(v.jsxs)("form",{id:"ComposeForm",style:{position:"relative",left:"auto",width:"40%"},children:[Object(v.jsx)("input",{name:"title",onChange:a,value:c.title,placeholder:"Title"}),Object(v.jsx)("textarea",{name:"content",onChange:a,value:c.content,placeholder:"Take a note...",rows:"3"}),Object(v.jsx)("button",{id:"Submit",onClick:function(e){return s.apply(this,arguments)},children:"Add"})]})})})}var L=Object(r.memo)(R,(function(e,t){return e.show===t.show}));var H=function(e){console.log("Edit");var t=Object(r.useState)({key:"",title:"",content:""}),n=Object(A.a)(t,2),c=n[0],o=n[1];function a(e){var t=e.target,n=t.name,r=t.value;o((function(e){return Object(T.a)(Object(T.a)({},e),{},Object(N.a)({},n,r))}))}function s(){return(s=Object(k.a)(E.a.mark((function t(n){var r;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),""!==c.content||""!==c.title){t.next=3;break}return t.abrupt("return");case 3:return""===c.title&&(c.title=c.content.substring(0,29)),""===c.content&&(c.content=c.title),t.next=7,b.a.post(h+"/recompose",c,{withCredentials:!0});case 7:r=t.sent,console.log("edited"),console.log(c),console.log(r.data),e.onEdit(r.data.reverse()),o({title:"",content:""}),e.onEditComplete();case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(r.useEffect)((function(){o({key:e.note.key,title:e.note.title,content:e.note.content})}),[e]),Object(v.jsx)(r.Fragment,{children:Object(v.jsxs)("form",{id:"ComposeForm",children:[Object(v.jsx)("input",{name:"title",onChange:a,value:c.title,placeholder:"Title"}),Object(v.jsx)("textarea",{name:"content",onChange:a,value:c.content,placeholder:"Take a note...",rows:"3"}),Object(v.jsx)("button",{id:"Submit",onClick:function(e){return s.apply(this,arguments)},children:"Edit"})]})})};var Y=function(e){return Object(v.jsx)("div",{style:{overflowY:"scroll",border:"1px none black",padding:"1%",margin:"1%",height:"400px"},children:e.children})};var I=function(){var e=Object(r.useState)([]),t=Object(A.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(!1),a=Object(A.a)(o,2),s=a[0],i=a[1],u=Object(r.useState)({}),l=Object(A.a)(u,2),d=l[0],j=l[1],p=Object(r.useState)(""),f=Object(A.a)(p,2),O=f[0],g=f[1];function x(){return(x=Object(k.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get(h+"/home",{withCredentials:!0}).then((function(e){console.log("Notes"),console.log(e),console.log(e.data),c(e.data.reverse())})).catch((function(e){console.log(e.response)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){var t=n.filter((function(t){return t._id===e}));console.log("delete"),console.log(t[0]),b.a.post(h+"/delete",{postID:t[0]._id},{withCredentials:!0}),c((function(t){return t.filter((function(t){return t._id!==e}))}))}function y(e){var t=n.filter((function(t){return t._id===e})),r={key:t[0]._id,title:t[0].title,content:t[0].content};j(r),i(!0)}console.log("home"),Object(r.useEffect)((function(){!function(){x.apply(this,arguments)}()}),[]);var w=n.filter((function(e){return e.title.toLowerCase().includes(O.toLowerCase())||e.content.toLowerCase().includes(O.toLowerCase())}));return Object(v.jsxs)(r.Fragment,{children:[Object(v.jsx)("div",{style:{textAlign:"center"},children:Object(v.jsx)("input",{style:{width:"70%",height:"2rem",marginTop:"2px",border:"none",borderRadius:"5px",paddingLeft:"10px",boxShadow:"0 2px 5px #ccc"},onChange:function(e){g(e.target.value)},type:"search",placeholder:"Search Notes",value:O})}),s?Object(v.jsx)(H,{note:d,onEditComplete:function(){i(!1)},onEdit:function(e){c(e)}}):Object(v.jsx)(L,{onAdd:function(e){c((function(t){return[e].concat(Object(P.a)(t))}))}}),Object(v.jsx)(Y,{children:""===O?n.map((function(e){return Object(v.jsx)(D,{id:e._id,title:e.title.substring(0,29),content:e.content.length>29?e.content.substring(0,25)+"... ":e.content,onDelete:m,onOpen:y},e._id)})):w.map((function(e){return Object(v.jsx)(D,{id:e._id,title:e.title.substring(0,29),content:e.content.length>29?e.content.substring(0,25)+"... ":e.content,onDelete:m,onOpen:y},e._id)}))})]})};var V=function(){return Object(v.jsx)(r.Fragment,{children:"Loading"})};var $=Object(a.b)((function(e){return{auth:e.auth,isPending:e.isPending,error:e.error}}),(function(e){return{onAuthSet:function(t){return e(m(t))},onRequestAuth:function(){return e((function(e){e({type:f}),b.a.get(h+"/isAuthenticated",{withCredentials:!0}).then((function(t){return e({type:O,payload:t.data.isAuth})})).catch((function(t){return e({type:g,payload:t})}))}))}}}))((function(e){var t=e.auth,n=e.isPending,c=e.error,o=e.onRequestAuth;return Object(r.useEffect)((function(){t||o()}),[t,o]),Object(v.jsxs)(r.Fragment,{children:[Object(v.jsx)(y,{}),Object(v.jsxs)(d.d,{children:[c?Object(v.jsx)("h1",{children:"ERRoR"}):n?Object(v.jsx)(d.b,{exact:!0,path:"/",component:V}):t?Object(v.jsx)(d.b,{exact:!0,path:"/",component:I}):Object(v.jsx)(d.b,{exact:!0,path:"/",component:C}),Object(v.jsx)(d.b,{exact:!0,path:"/register",component:U}),Object(v.jsx)(d.b,{exact:!0,path:"/login",component:F})]}),Object(v.jsx)(w,{})]})})),q={userCreated:!1,isPending:!0,auth:!1,error:""},z=Object(i.createLogger)(),B=Object(s.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case x:return Object(T.a)(Object(T.a)({},e),{},{userCreated:t.payload});case p:return Object(T.a)(Object(T.a)({},e),{},{auth:t.payload});case f:return Object(T.a)(Object(T.a)({},e),{},{isPending:!0});case O:return Object(T.a)(Object(T.a)({},e),{},{auth:t.payload,isPending:!1});case g:return Object(T.a)(Object(T.a)({},e),{},{error:t.payload,isPending:!1});default:return e}}),Object(s.a)(u.a,z));o.a.render(Object(v.jsx)(l.a,{children:Object(v.jsx)(a.a,{store:B,children:Object(v.jsx)($,{})})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.3b7c367d.chunk.js.map