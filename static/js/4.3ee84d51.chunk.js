(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{233:function(e,t,o){"use strict";o.d(t,"b",(function(){return s})),o.d(t,"a",(function(){return l}));var n=o(3),r=o(1),a=(o(0),o(234)),c=o.n(a),i=function(e){var t=e.meta.error&&e.meta.touched,o=t?c.a.error:"",n=t&&e.meta.active?Object(r.jsx)("small",{className:c.a.errorMessage,children:e.meta.error}):"";return Object(r.jsxs)("div",{className:"".concat(c.a.container," ").concat(e.className," ").concat(o),children:[e.children,n]})},s=function(e){return Object(r.jsx)(i,Object(n.a)(Object(n.a)({},e),{},{children:Object(r.jsx)("textarea",Object(n.a)(Object(n.a)({},e.input),{},{className:c.a.input,placeholder:e.placeholder}))}))},l=function(e){var t=e.type||e.input.type||"text",o=e.placeholder||e.input.placeholder||"";return Object(r.jsx)(i,Object(n.a)(Object(n.a)({},e),{},{children:Object(r.jsx)("input",Object(n.a)(Object(n.a)(Object(n.a)({},e.input),{},{className:"".concat(c.a.input," ").concat(e.className)},e.attr),{},{placeholder:o,type:t}))}))}},234:function(e,t,o){e.exports={container:"FormControls_container___o5NI",input:"FormControls_input__HTGKf",error:"FormControls_error__W27vx",errorMessage:"FormControls_errorMessage__2rGlJ"}},235:function(e,t,o){"use strict";o.d(t,"c",(function(){return n})),o.d(t,"b",(function(){return r})),o.d(t,"a",(function(){return a}));var n=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}},a=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return function(e){return t.reduce((function(t,o){return t||o(e)}),void 0)}}},237:function(e,t,o){"use strict";o.d(t,"a",(function(){return l}));var n=o(3),r=o(1),a=(o(0),o(7)),c=o(17),i=o(45),s=function(e){return{isAuth:Object(i.d)(e)}},l=function(e){return Object(c.b)(s)((function(t){return t.isAuth?Object(r.jsx)(e,Object(n.a)({},t)):Object(r.jsx)(a.a,{to:"/login"})}))}},239:function(e,t,o){e.exports={profileUser:"ProfileInfo_profileUser__2Aj4n",profileInfoBlock:"ProfileInfo_profileInfoBlock__3NH3c"}},302:function(e,t,o){e.exports={profileMainInfo:"ProfileMainInfo_profileMainInfo__3VFXu",profileAvatar:"ProfileMainInfo_profileAvatar__1YGis",profileStatus:"ProfileMainInfo_profileStatus__2v7Y2",profileId:"ProfileMainInfo_profileId__2YHz5",profileName:"ProfileMainInfo_profileName__2R9nu",profileDesc:"ProfileMainInfo_profileDesc__1RqB4",selectImgBtn:"ProfileMainInfo_selectImgBtn__1nQU6",button:"ProfileMainInfo_button__20zLz",profileNameWrap:"ProfileMainInfo_profileNameWrap__2LMT8"}},303:function(e,t,o){e.exports={profileImageWrap:"ProfileAvatar_profileImageWrap__KRxGx",profileImage:"ProfileAvatar_profileImage__79UbB",imgName:"ProfileAvatar_imgName__3c8Qd"}},304:function(e,t,o){e.exports={post:"Post_post__7QpTi",likes:"Post_likes__2BZyi"}},305:function(e,t,o){e.exports={inputWrap:"Posts_inputWrap__J2q7z",textarea:"Posts_textarea__3-Bia"}},306:function(e,t,o){e.exports={form:"ProfileDataForm_form__niYo3",contactItem:"ProfileDataForm_contactItem__3vuF9",contactItemTitle:"ProfileDataForm_contactItemTitle__3WjWa",lookingForAJob:"ProfileDataForm_lookingForAJob__3O-tq",lookingForAJobCheckbox:"ProfileDataForm_lookingForAJobCheckbox__3K8P_"}},307:function(e,t,o){e.exports={buttonEditMode:"Profile_buttonEditMode__10WGV"}},315:function(e,t,o){"use strict";o.r(t);var n=o(3),r=o(5),a=o.n(r),c=o(9),i=o(1),s=o(0),l=o.n(s),j=o(240),u=o(58),b=o(239),f=o.n(b),p=function(e){var t=e.contacts,o=(Object(u.a)(e,["contacts"]),[]);for(var n in t)t[n]&&o.push(Object(i.jsx)("a",{href:"".concat(t[n]),children:n}));return o.length>0?Object(i.jsxs)("div",{className:f.a.profileInfoBlock,children:[Object(i.jsx)("h2",{children:"Contacts"}),Object(i.jsx)("div",{children:o})]}):""},d=function(e){var t=e.lookingForAJob,o=e.lookingForAJobDescription;Object(u.a)(e,["lookingForAJob","lookingForAJobDescription"]);return Object(i.jsxs)("div",{className:f.a.profileInfoBlock,children:[Object(i.jsx)("h2",{children:"Search for a job"}),Object(i.jsxs)("p",{children:[Object(i.jsx)("strong",{children:t?"Looking for a job.":"Not looking for a job."}),o]})]})},h=o(302),m=o.n(h),O=o(11),x=o(17),_=o(62),g=o(259),v=o(233),N=function(e){return Object(i.jsx)(g.b,{initialValues:e.initialValues,onSubmit:e.deactivateEditMode,children:function(e){var t=e.handleSubmit,o=t,n={autoFocus:!0,onBlur:function(e){return o(e)}};return Object(i.jsx)("form",{onSubmit:t,children:Object(i.jsx)(g.a,{component:v.a,name:"status",attr:n,type:"text"})})}})},I=function(e){var t=!e.match.params.userId,o=Object(s.useState)(!1),n=Object(j.a)(o,2),r=n[0],a=n[1];return Object(i.jsx)("div",{children:r?Object(i.jsx)(N,{initialValues:{status:e.status},deactivateEditMode:function(t){a(!1),e.updateStatus(t.status)}}):t?Object(i.jsx)("div",{children:Object(i.jsx)("span",{onDoubleClick:function(){t&&a(!0)},children:e.status})}):Object(i.jsx)("div",{children:Object(i.jsx)("span",{children:e.status})})})},P=o(7),k=function(e){return e.profilePage},F=function(e){return e.profilePage.profile},A=function(e){return e.profilePage.isFetching},M=function(e){return e.profilePage.status},S={updateStatus:_.h},J=Object(O.d)(Object(x.b)((function(e){return{status:M(e)}}),S),P.g)(I),y=o(303),w=o.n(y),C=function(e){var t,o=e.photos,n=e.fullName;return t=o.large?Object(i.jsx)("img",{className:w.a.profileImage,src:o.large,alt:"avatar"}):o.small?Object(i.jsx)("img",{className:w.a.profileImage,src:o.small,alt:"avatar"}):Object(i.jsx)("span",{className:w.a.imgName,children:n.substr(0,1).toUpperCase()}),Object(i.jsx)("div",{className:w.a.profileImageWrap,children:t})},D=function(e){var t=e.isOwner,o=e.savePhoto,n="Select your image";return t?Object(i.jsxs)("label",{className:m.a.selectImgBtn,children:[Object(i.jsx)("span",{className:m.a.button,children:n}),Object(i.jsx)("input",{type:"file",onChange:function(e){var t=e.target.files;t.length&&(o(t[0]),n=t[0])}})]}):""},B=function(e){var t=e.photos,o=e.fullName,n=e.userId,r=e.isOwner,a=Object(u.a)(e,["photos","fullName","userId","isOwner"]);return Object(i.jsxs)("div",{className:m.a.profileMainInfo,children:[Object(i.jsxs)("div",{className:m.a.profileAvatar,children:[Object(i.jsx)(C,{photos:t,fullName:o}),Object(i.jsx)(D,{isOwner:r,savePhoto:a.savePhoto})]}),Object(i.jsxs)("div",{className:m.a.profileNameWrap,children:[Object(i.jsxs)("div",{className:m.a.profileStatus,children:[Object(i.jsx)("div",{className:m.a.profileName,children:o}),Object(i.jsx)(J,{})]}),Object(i.jsx)("div",{className:m.a.profileId,children:n})]})]})},W=function(e){var t=e.aboutMe;Object(u.a)(e,["aboutMe"]);return t?Object(i.jsxs)("div",{className:f.a.profileInfoBlock,children:[Object(i.jsx)("h2",{children:"About me"}),Object(i.jsx)("p",{children:t})]}):""},U=function(e){var t=e.isOwner,o=e.profile,n=Object(u.a)(e,["isOwner","profile"]);return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:f.a.profileUser,children:[Object(i.jsx)(B,{fullName:o.fullName,photos:o.photos,userId:o.userId,isOwner:t,savePhoto:n.savePhoto}),Object(i.jsx)(W,{aboutMe:o.aboutMe}),Object(i.jsx)(d,{lookingForAJob:o.lookingForAJob,lookingForAJobDescription:o.lookingForAJobDescription}),Object(i.jsx)(p,{contacts:o.contacts})]})})},T=o(304),V=o.n(T),E=function(e){var t=e.message,o=e.likesCount;return Object(i.jsxs)("div",{className:V.a.post,children:[Object(i.jsx)("p",{children:t}),Object(i.jsxs)("div",{className:V.a.likes,children:[Object(i.jsx)("small",{children:"Like"}),Object(i.jsx)("small",{children:o})]})]})},z=o(305),G=o.n(z),L=o(114),q=o(115),Y=o(235),H=o(60),K=Object(Y.b)(300),Q=l.a.memo((function(e){var t=e.addPostTC,o=e.profilePage.posts.map((function(e){return Object(i.jsx)(E,{message:e.post,likesCount:e.likesCount},e.id)}));return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"My posts"}),Object(i.jsx)(R,{onSubmit:function(e){t(e.newPost)}}),Object(i.jsx)("div",{children:o})]})})),R=Object(q.a)({form:"postForm"})((function(e){return Object(i.jsxs)("form",{onSubmit:e.handleSubmit,className:G.a.inputWrap,children:[Object(i.jsx)(L.a,{component:v.b,name:"newPost",placeholder:"Type your post...",className:G.a.textarea,validate:[Y.c,K]}),Object(i.jsx)(H.a,{children:"Add post"})]})})),X=Q,Z={addPostTC:_.a},$=Object(x.b)((function(e){return{profilePage:k(e)}}),Z)(X),ee=o(35),te=o(306),oe=o.n(te),ne=function(e){return Object(i.jsx)(g.b,{onSubmit:e.onSubmit,initialValues:e.initialValues,profile:e.profile,children:function(e){var t=e.handleSubmit,o=e.profile,n=e.error;return Object(i.jsxs)("form",{onSubmit:t,children:[Object(i.jsxs)("div",{className:oe.a.form,children:[Object(i.jsxs)("label",{children:[Object(i.jsx)("h2",{children:"FullName"}),Object(i.jsx)(g.a,{placeholder:"FullName",name:"fullName",validate:Object(Y.a)(Y.c),component:v.a,type:"text"})]}),Object(i.jsxs)("label",{children:[Object(i.jsx)("h2",{children:"About Me"}),Object(i.jsx)(g.a,{placeholder:"About me",name:"aboutMe",component:v.b})]}),Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:oe.a.lookingForAJob,children:[Object(i.jsxs)("label",{className:oe.a.lookingForAJobCheckbox,children:[Object(i.jsx)("h2",{children:"Looking for a job?"}),Object(i.jsx)(g.a,{name:"lookingForAJob",component:v.a,type:"checkbox"})]}),Object(i.jsx)("label",{htmlFor:"lookingForAJobDescription",children:Object(i.jsx)("h2",{children:"Description for a looking job"})})]}),Object(i.jsx)(g.a,{placeholder:"Description for a looking job",name:"lookingForAJobDescription",component:v.b,id:"lookingForAJobDescription"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Contacts"}),Object(i.jsx)("div",{children:Object.keys(o.contacts).map((function(e){return Object(i.jsxs)("label",{className:oe.a.contactItem,children:[Object(i.jsx)("strong",{className:oe.a.contactItemTitle,children:e}),Object(i.jsx)(g.a,{name:"contacts.".concat(e),component:v.a,type:"text",placeholder:"https://".concat(e,"/")})]},e)}))})]})]}),n?Object(i.jsx)("div",{children:n}):"",Object(i.jsx)(H.a,{children:"Save changes"})]})}})},re=o(307),ae=o.n(re),ce=function(e){var t=e.isOwner,o=e.profile,n=Object(u.a)(e,["isOwner","profile"]),r=Object(s.useState)(!1),a=Object(j.a)(r,2),c=a[0],l=a[1];return o?Object(i.jsxs)("div",{className:"component--wrap",children:[c?Object(i.jsx)(ne,{onSubmit:function(e){n.updateProfile(e).then((function(){return l(!1)}))},profile:o,initialValues:o}):Object(i.jsx)(U,{isOwner:t,profile:o,savePhoto:n.savePhoto,updateProfile:n.updateProfile}),!c&&t?Object(i.jsx)(H.a,{className:ae.a.buttonEditMode,attr:{onClick:function(){t&&l(!0)}},children:"Edit profile"}):"",Object(i.jsx)($,{})]}):Object(i.jsx)(ee.a,{})},ie=o(237),se=o(45),le=function(){var e=Object(c.a)(a.a.mark((function e(t,o,n,r,c){var i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=t)||(i=o)||c.push("/login"),e.next=4,n(i);case 4:r(i);case 5:case"end":return e.stop()}}),e)})));return function(t,o,n,r,a){return e.apply(this,arguments)}}(),je={getProfile:_.c,getUserStatus:_.d,savePhoto:_.e,updateProfile:_.g,toggleIsFetching:_.f};t.default=Object(O.d)(Object(x.b)((function(e){return{profile:F(e),authorizedUserId:Object(se.c)(e),isAuth:Object(se.d)(e),isFetching:A(e)}}),je),P.g,ie.a)((function(e){var t=e.match,o=e.authorizedUserId,r=e.getProfile,a=e.getUserStatus;return Object(s.useEffect)((function(){e.toggleIsFetching(!0),le(t.params.userId,o,r,a,e.history).then((function(t){return e.toggleIsFetching(!1)}))}),[t.params.userId]),e.isFetching?Object(i.jsx)(ee.a,{flag:e.isFetching}):Object(i.jsx)(ce,Object(n.a)({isOwner:!t.params.userId},e))}))}}]);
//# sourceMappingURL=4.3ee84d51.chunk.js.map