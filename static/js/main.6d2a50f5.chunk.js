(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{110:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(42),a=n(3),c=n(21),s="SEND-MESSAGE",u={dialogs:[{id:1,name:"Dmitriy"},{id:2,name:"Andrey"},{id:3,name:"Svetlana"},{id:4,name:"Sasha"},{id:5,name:"Viktor"},{id:6,name:"Valeriy"}],messages:[{id:1,message:"Hi",mine:!1},{id:2,message:"How are you",mine:!1},{id:3,message:"Yo",mine:!1},{id:4,message:"Yo",mine:!0},{id:5,message:"My friend",mine:!0},{id:6,message:"It's a new cool chat, dude!",mine:!0}]},i=function(e){return function(t){t(function(e){return{type:s,message:e}}(e)),t(Object(c.a)("dialogAddMessageForm"))}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:var n={id:7,message:t.message,mine:!0};return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[Object(a.a)({},n)])});default:return e}}},12:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return i}));var r=n(135),a=r.create({withCredentials:!0,headers:{"API-KEY":"eed101de-783b-4107-bd06-6b28cf0259ec"},baseURL:"https://social-network.samuraijs.com/api/1.0/"}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},followTo:function(e){return a.post("follow/".concat(e)).then((function(e){return e.data}))},unFollowTo:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data}))},getProfile:function(e){return s.getProfile(e)}},s={getProfile:function(e){return a.get("profile/".concat(e))},getStatus:function(e){return a.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateStatus:function(e){return a.put("profile/status",{status:e}).then((function(e){return e.data}))},updateProfile:function(e){return a.put("profile",e).then((function(e){return e.data}))},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))}},u={getMe:function(){return a.get("auth/me/",{withCredentials:!0}).then((function(e){return e.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3?arguments[3]:void 0;return a.post("auth/login/",{email:e,password:t,rememberMe:n,captcha:r}).then((function(e){return e.data}))},logout:function(){return a.delete("auth/login/").then((function(e){return e.data}))}},i={getCaptchaUrl:function(){return a.get("security/get-captcha-url").then((function(e){return e.data}))}}},138:function(e,t,n){e.exports={button:"Button_button__2OA9t"}},139:function(e,t,n){e.exports={body:"Body_body__O9JwV"}},140:function(e,t,n){e.exports={content:"Content_content__QlRth"}},141:function(e,t,n){e.exports={sidebar:"Sidebar_sidebar__qTWDG"}},169:function(e,t,n){},176:function(e,t,n){},23:function(e,t,n){e.exports={nav:"Navbar_nav__Tt1MA",item:"Navbar_item__1GDSe",active:"Navbar_active__1ndrs"}},24:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return o}));var r=n(3),a=n(38),c="INITIALIZED-SUCCESS",s="HAS-ERROR",u={initialized:!1,errorData:{hasError:!1,errorMessage:null}},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[!1,null];return{type:s,payload:{hasError:e[0],errorMessage:e[1]}}},o=function(){return function(e){var t=e(Object(a.b)());Promise.all([t]).then((function(){e({type:c})}))}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:return Object(r.a)(Object(r.a)({},e),{},{initialized:!0});case s:return Object(r.a)(Object(r.a)({},e),{},{errorData:Object(r.a)({},t.payload)});default:return e}}},294:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(0),c=n.n(a),s=(n(169),n(64)),u=n.n(s),i=n(11),o=n(18),l=n(10),d=n(16),f=(n(176),n(97)),p=n(110),b={friends:[{id:1,img:"https://s0.rbk.ru/v6_top_pics/media/img/8/22/755895443908228.jpg"},{id:2,img:"https://www.moya-planeta.ru/upload/images/xl/19/a7/19a713c5edb6c69c5a0c31b875d732b3.jpg"},{id:3,img:"https://brammels.com/wp-content/uploads/2018/06/krasivye-lyudi-umnee.jpg"},{id:4,img:"https://www.kino-teatr.ru/art/5823/82736.jpg"}]},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b;return e},h=n(66),O=n(38),m=n(136),g=n(133),v=n(24),x=Object(l.c)({profilePage:f.b,dialogsPage:p.a,sidebar:j,usersPage:h.a,auth:O.a,form:g.a,app:v.a}),w=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,_=Object(l.e)(x,w(Object(l.a)(m.a))),y=n(55),N=n(3),S=n(98),E=n(100),k=n(99),C=n(35),P=n.n(C),T=n(54),I=n.p+"static/media/logo.05eddaf0.svg",F=function(e){var t=e.isAuth,n=e.login,a=e.logout;return Object(r.jsxs)("header",{className:P.a.header,children:[Object(r.jsx)("div",{className:P.a.logo,children:Object(r.jsx)("img",{src:I,alt:"logo"})}),Object(r.jsx)("div",{className:P.a.login,children:t?Object(r.jsxs)("div",{className:P.a.loginUser,children:[Object(r.jsx)(o.b,{to:"/profile",className:P.a.loginInfo,children:n}),Object(r.jsx)(T.a,{attr:{onClick:a},children:"Log Out"})]}):Object(r.jsx)(o.b,{className:P.a.loginInfo,to:"/login",children:"Login"})})]})},U=n(70),A=function(e){Object(E.a)(n,e);var t=Object(k.a)(n);function n(){var e;Object(S.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).render=function(){return Object(r.jsx)(F,Object(N.a)({},e.props))},e}return n}(c.a.Component),D={logout:O.d},L=Object(d.b)((function(e){return{isAuth:Object(U.d)(e),login:Object(U.b)(e)}}),D)(A),H=n(139),M=n.n(H),z=function(e){return function(t){return Object(r.jsx)(a.Suspense,{fallback:Object(r.jsx)(y.a,{}),children:Object(r.jsx)(e,Object(N.a)({},t))})}},G=function(){return Object(r.jsx)("div",{children:"Music"})},R=function(){return Object(r.jsx)("div",{children:"Settings"})},W=n(140),B=n.n(W),J=c.a.lazy((function(){return n.e(4).then(n.bind(null,316))})),V=c.a.lazy((function(){return Promise.all([n.e(7),n.e(3)]).then(n.bind(null,315))})),Y=c.a.lazy((function(){return n.e(6).then(n.bind(null,314))})),K=c.a.lazy((function(){return n.e(5).then(n.bind(null,317))})),Q=function(e){return Object(r.jsx)("div",{className:B.a.content,children:Object(r.jsxs)(i.d,{children:[Object(r.jsx)(i.b,{path:"/",exact:!0,render:function(){return Object(r.jsx)(i.a,{to:"/profile"})}}),Object(r.jsx)(i.b,{path:"/profile/:userId?",render:z(V)}),Object(r.jsx)(i.b,{path:"/dialogs",render:z(J)}),Object(r.jsx)(i.b,{path:"/users",render:z(K)}),Object(r.jsx)(i.b,{path:"/music",render:function(){return Object(r.jsx)(G,{})}}),Object(r.jsx)(i.b,{path:"/settings",render:function(){return Object(r.jsx)(R,{})}}),Object(r.jsx)(i.b,{path:"/login",render:z(Y)}),Object(r.jsx)(i.b,{path:"*",render:function(){return Object(r.jsx)("div",{children:"404 NOT FOUND"})}})]})})},X=n(23),q=n.n(X),Z=function(){return Object(r.jsxs)("nav",{className:q.a.nav,children:[Object(r.jsx)(o.b,{to:"/profile",activeClassName:q.a.active,className:q.a.item,children:"Profile"}),Object(r.jsx)(o.b,{to:"/dialogs",activeClassName:q.a.active,className:q.a.item,children:"Messages"}),Object(r.jsx)(o.b,{to:"/users",activeClassName:q.a.active,className:q.a.item,children:"Users"}),Object(r.jsx)(o.b,{to:"/music",activeClassName:q.a.active,className:q.a.item,children:"Music"}),Object(r.jsx)(o.b,{to:"/settings",activeClassName:q.a.active,className:q.a.item,children:"Settings"})]})},$=n(141),ee=n.n($),te=n(88),ne=n(53),re=n.n(ne),ae=n(131),ce=n(132),se=n(21),ue=n(96),ie=Object(ce.a)({form:"searchForm"})((function(e){return Object(r.jsxs)("div",{className:re.a.form,children:[Object(r.jsx)("p",{className:re.a.searchTitle,children:e.title}),Object(r.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(r.jsx)(ae.a,{className:re.a.input,component:ue.a,name:e.name,placeholder:e.placeholder}),Object(r.jsx)(T.a,{children:"Search"})]})]})})),oe={setCurrentPage:h.d,toggleHasError:v.c,reset:se.a},le=Object(l.d)(Object(d.b)(null,oe),i.g)((function(e){var t=Object(a.useState)(!1),n=Object(te.a)(t,2),c=n[0],s=n[1],u=Object(a.useState)(null),i=Object(te.a)(u,2),o=i[0],l=i[1];return c&&(s(!1),o?(e.history.push("/profile/".concat(o)),l(null)):e.history.push("/users")),Object(r.jsxs)("div",{className:re.a.searchBlock,children:[Object(r.jsx)(ie,{title:"User ID",placeholder:"Input user ID",name:"searchUser",onSubmit:function(e){s(!0),l(e.searchUser)}}),Object(r.jsx)(ie,{title:"Page of users",placeholder:"Input number of page",name:"searchPage",onSubmit:function(t){try{if(s(!0),"number"!==typeof+t.searchPage||isNaN(+t.searchPage))throw s(!1),"Input number, please";e.setCurrentPage(+t.searchPage)}catch(n){e.toggleHasError([!0,n])}}})]})})),de=function(e){return Object(r.jsxs)("div",{className:ee.a.sidebar,children:[Object(r.jsx)(Z,{}),Object(r.jsx)(le,{})]})},fe=function(e){return Object(r.jsxs)("div",{className:M.a.body,children:[Object(r.jsx)(de,{}),Object(r.jsx)(Q,{})]})},pe=function(e){return e.app.initialized},be=function(e){return e.app.errorData},je=n(95),he=n.n(je),Oe={toggleHasError:v.c},me=Object(d.b)(null,Oe)((function(e){return Object(r.jsx)("div",{className:he.a.alert,onClick:function(){e.toggleHasError()},children:Object(r.jsx)("div",{className:he.a.message,children:e.children})})})),ge={initializeApp:v.b,toggleHasError:v.c},ve=Object(l.d)(i.g,Object(d.b)((function(e){return{initialized:pe(e),errorData:be(e)}}),ge))((function(e){return Object(a.useEffect)((function(){return e.initializeApp()}),[]),e.initialized?Object(r.jsxs)("div",{className:"app-wrapper",children:[Object(r.jsx)(L,{}),Object(r.jsx)(fe,{}),e.errorData.hasError?Object(r.jsx)(me,{children:e.errorData.errorMessage}):""]}):Object(r.jsx)(y.a,{})})),xe=function(e){return Object(r.jsx)(o.a,{basename:"/SamuraiJS",children:Object(r.jsx)(d.a,{store:_,children:Object(r.jsx)(ve,{})})})};u.a.render(Object(r.jsx)(xe,{}),document.getElementById("root"))},35:function(e,t,n){e.exports={header:"Header_header__2gpML",logo:"Header_logo__2P5Uz",login:"Header_login__37Er4",loginUser:"Header_loginUser__3w0Cd",loginInfo:"Header_loginInfo__1DXwF"}},38:function(e,t,n){"use strict";n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return j})),n.d(t,"d",(function(){return O}));var r=n(8),a=n.n(r),c=n(14),s=n(3),u=n(12),i=n(21),o="samurai-network/auth/SET-USER-DATA",l="samurai-network/auth/GET-CAPTCHA-URL-SUCCESS",d={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},f=function(e,t,n,r){return{type:o,payload:{userId:e,email:t,login:n,isAuth:r}}},p=function(e){return{type:l,payload:{captchaUrl:e}}},b=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c,s,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.getMe();case 2:0===(n=e.sent).resultCode&&(r=n.data,c=r.id,s=r.login,i=r.email,t(f(c,i,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},j=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return function(){var s=Object(c.a)(a.a.mark((function c(s){var o,l;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u.a.login(e,t,n,r);case 2:0===(o=a.sent).resultCode?(s(b()),s(Object(i.a)("login"))):(10===o.resultCode&&(s(Object(i.a)("login")),s(h())),l=o.messages.length>0?o.messages[0]:"Email or password are incorrect.",s(Object(i.b)("login",{_error:l})));case 4:case"end":return a.stop()}}),c)})));return function(e){return s.apply(this,arguments)}}()},h=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.c.getCaptchaUrl();case 2:n=e.sent,r=n.url,t(p(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},O=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.logout();case 2:0===e.sent.resultCode&&t(f(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:case l:return Object(s.a)(Object(s.a)({},e),t.payload);default:return e}}},43:function(e,t,n){e.exports={container:"FormControls_container__1O6pH",input:"FormControls_input__1vNYD",error:"FormControls_error__R3-iJ",errorMessage:"FormControls_errorMessage__znvpV"}},53:function(e,t,n){e.exports={searchBlock:"Search_searchBlock__16f6I",searchTitle:"Search_searchTitle__2lU9A",form:"Search_form__3OOKC",input:"Search_input__SJKux"}},54:function(e,t,n){"use strict";var r=n(3),a=n(1),c=(n(0),n(138)),s=n.n(c),u=function(e){var t=e.className,n=e.attr;return t=t||"",Object(a.jsx)("button",Object(r.a)(Object(r.a)({},n),{},{className:"".concat(s.a.button," ").concat(t),children:e.children}))};t.a=u},55:function(e,t,n){"use strict";var r=n(1),a=(n(0),n(90)),c=n.n(a);t.a=function(e){var t=e.flag;return void 0===t||t?Object(r.jsx)("section",{className:c.a.preloaderWrap,children:Object(r.jsx)("div",{className:c.a.preloaderPulse})}):""}},66:function(e,t,n){"use strict";n.d(t,"d",(function(){return v})),n.d(t,"c",(function(){return _})),n.d(t,"e",(function(){return N})),n.d(t,"b",(function(){return S}));var r=n(8),a=n.n(r),c=n(14),s=n(42),u=n(3),i=n(12),o=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(u.a)(Object(u.a)({},e),r):e}))},l="samurai-network/users/FOLLOW",d="samurai-network/users/UNFOLLOW",f="samurai-network/users/SET-USERS",p="samurai-network/users/SET-CURRENT-PAGE",b="samurai-network/users/SET-TOTAL-COUNT",j="samurai-network/users/TOGGLE-IS-FETCHING",h="samurai-network/users/TOGGLE-IS-FOLLOWING",O={users:[],pageSize:7,totalUsersCount:0,currentPage:1,isFetching:!1,isFollowing:[]},m=function(e){return{type:l,userId:e}},g=function(e){return{type:d,userId:e}},v=function(e){return{type:p,currentPage:e}},x=function(e){return{type:j,isFetching:e}},w=function(e,t){return{type:h,isFollowing:e,userId:t}},_=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(x(!0)),r(v(e)),n.next=4,i.d.getUsers(e,t);case 4:c=n.sent,r(x(!1)),r((s=c.items,{type:f,users:s})),r((a=c.totalCount,{type:b,totalCount:a}));case 8:case"end":return n.stop()}var a,s}),n)})));return function(e){return n.apply(this,arguments)}}()},y=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r,c){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(w(!0)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(c(n)),t(w(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),N=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i.d.unFollowTo.bind(i.d),c=g,t.next=4,y(n,e,r,c);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i.d.followTo.bind(i.d),c=m,t.next=4,y(n,e,r,c);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(u.a)(Object(u.a)({},e),{},{users:o(e.users,t.userId,"id",{followed:!0})});case d:return Object(u.a)(Object(u.a)({},e),{},{users:o(e.users,t.userId,"id",{followed:!1})});case f:return Object(u.a)(Object(u.a)({},e),{},{users:t.users});case p:return Object(u.a)(Object(u.a)({},e),{},{currentPage:t.currentPage});case b:return Object(u.a)(Object(u.a)({},e),{},{totalUsersCount:t.totalCount});case j:return Object(u.a)(Object(u.a)({},e),{},{isFetching:t.isFetching});case h:return Object(u.a)(Object(u.a)({},e),{},{isFollowing:t.isFollowing?[].concat(Object(s.a)(e.isFollowing),[t.userId]):e.isFollowing.filter((function(e){return e!==t.userId}))});default:return e}}},70:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return s}));var r=function(e){return e.auth.userId},a=function(e){return e.auth.isAuth},c=function(e){return e.auth.login},s=function(e){return e.auth.captchaUrl}},90:function(e,t,n){e.exports={preloaderWrap:"Preloader_preloaderWrap__3ydVF",preloaderPulse:"Preloader_preloaderPulse__3Q7Dq"}},95:function(e,t,n){e.exports={alert:"Alert_alert__3F7Uc",message:"Alert_message__xFDTQ"}},96:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=n(3),a=n(1),c=(n(0),n(43)),s=n.n(c),u=function(e){var t=e.meta.error&&e.meta.touched,n=t?s.a.error:"",r=t&&e.meta.active?Object(a.jsx)("small",{className:s.a.errorMessage,children:e.meta.error}):"";return Object(a.jsxs)("div",{className:"".concat(s.a.container," ").concat(e.className," ").concat(n),children:[e.children,r]})},i=function(e){return Object(a.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(a.jsx)("textarea",Object(r.a)(Object(r.a)({},e.input),{},{className:s.a.input,placeholder:e.placeholder}))}))},o=function(e){var t=e.type||e.input.type||"text",n=e.placeholder||e.input.placeholder||"";return Object(a.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(a.jsx)("input",Object(r.a)(Object(r.a)(Object(r.a)({},e.input),{},{className:"".concat(s.a.input," ").concat(e.className)},e.attr),{},{placeholder:n,type:t}))}))}},97:function(e,t,n){"use strict";n.d(t,"f",(function(){return v})),n.d(t,"a",(function(){return x})),n.d(t,"c",(function(){return w})),n.d(t,"d",(function(){return _})),n.d(t,"h",(function(){return y})),n.d(t,"e",(function(){return N})),n.d(t,"g",(function(){return S}));var r=n(8),a=n.n(r),c=n(14),s=n(42),u=n(3),i=n(12),o=n(21),l=n(24),d="samurai-network/profile/ADD-POST",f="samurai-network/profile/DELETE-POST",p="samurai-network/profile/SET-USER-PROFILE",b="samurai-network/profile/SET-STATUS",j="samurai-network/profile/SET-FULLNAME",h="samurai-network/profile/SET-PHOTO",O="samurai-network/profile/TOGGLE-IS-FETCHING",m={posts:[{id:1,post:"Hi how are you",likesCount:15}],status:null,profile:null,isFetching:!1},g=function(e){return{type:b,status:e}},v=function(e){return{type:O,isFetching:e}},x=function(e){return function(t){t(function(e){return{type:d,newPost:e}}(e)),t(Object(o.a)("postForm"))}},w=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.d.getProfile(e);case 3:r=t.sent,n((a=r.data,{type:p,profile:a})),t.next=12;break;case 7:t.prev=7,t.t0=t.catch(0),c=t.t0.response.data.message,t.t0.response.status>=400&&t.t0.response.status<=500&&(c="User is not exist"),n(Object(l.c)([!0,c]));case 12:case"end":return t.stop()}var a}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getStatus(e);case 2:r=t.sent,n(g(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},y=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.b.updateStatus(e);case 3:0===t.sent.resultCode&&n(g(e)),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},N=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.savePhoto(e);case 2:0===(r=t.sent).resultCode&&n((a=r.data.photos,{type:h,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n,r){var c,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r().auth.userId,t.next=3,i.b.updateProfile(e);case 3:if(0!==(s=t.sent).resultCode){t.next=8;break}n(w(c)),t.next=10;break;case 8:return n(Object(o.b)("editProfile",{_error:s.messages[0]})),t.abrupt("return",Promise.reject(s.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:var n={id:3,post:t.newPost,likesCount:1};return Object(u.a)(Object(u.a)({},e),{},{posts:[].concat(Object(s.a)(e.posts),[Object(u.a)({},n)])});case f:return Object(u.a)(Object(u.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.post}))});case p:return Object(u.a)(Object(u.a)({},e),{},{profile:t.profile});case b:return Object(u.a)(Object(u.a)({},e),{},{status:t.status});case j:return Object(u.a)(Object(u.a)({},e),{},{fullName:t.fullName});case h:return Object(u.a)(Object(u.a)({},e),{},{profile:Object(u.a)(Object(u.a)({},e.profile),{},{photos:t.photos})});case O:return Object(u.a)(Object(u.a)({},e),{},{isFetching:t.isFetching});default:return e}}}},[[294,1,2]]]);
//# sourceMappingURL=main.6d2a50f5.chunk.js.map