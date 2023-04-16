"use strict";(self.webpackChunksamurai_networking_app=self.webpackChunksamurai_networking_app||[]).push([[154],{154:function(t,n,e){e.r(n),e.d(n,{default:function(){return tn}});var i,a,r,s,o,d,c,l,p,u,h,f,g=e(8683),x=e(5671),b=e(3144),v=e(136),Z=e(4104),m=e(2791),j=e(8687),k=e(6070),y=e(7689),P=e(1474),S=e(347),w=e(3644),D=e(9098),O=e(704),U=e(8610),C=e(1766),T=e(6139),M=e(6444),z=e(6747),A=M.ZP.form(i||(i=(0,C.Z)([""]))),_=M.ZP.div(a||(a=(0,C.Z)([""]))),F=(0,M.ZP)(T.Z)(r||(r=(0,C.Z)(["\n  width: 100%;\n  border: 1px solid ",';\n  font-size: 14px;\n  font-family: "Montserrat", sans-serif;\n  padding: 5px;\n'])),z.O.gray1),E=e(184),H=(0,U.DT)(10),L=(0,O.Z)({form:"addPost"})((function(t){var n=t.handleSubmit;return(0,E.jsx)(A,{onSubmit:n,children:(0,E.jsxs)(_,{children:[(0,E.jsx)(F,{validate:[U.lp,H],component:"textarea",placeholder:"\u0427\u0442\u043e \u0443 \u0432\u0430\u0441 \u043d\u043e\u0432\u043e\u0433\u043e?",name:"postText"}),(0,E.jsx)(D.D,{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u0441\u0442"})]})})})),N=function(t){var n=t.onSubmit;return(0,E.jsx)(L,{onSubmit:n})},$=M.ZP.div(s||(s=(0,C.Z)(["\n  grid-area: c;\n"]))),I=M.ZP.div(o||(o=(0,C.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 15px;\n"]))),J=M.ZP.div(d||(d=(0,C.Z)(["\n  border: 1px solid ",";\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 15px;\n"])),z.O.gray2),W=(M.ZP.img(c||(c=(0,C.Z)(["\n  height: 50px;\n  width: 50px;\n"]))),M.ZP.img(l||(l=(0,C.Z)([""])))),R=M.ZP.img(p||(p=(0,C.Z)(["\n  border: 1px solid ",";\n  height: fit-content;\n  padding: 3px;\n\n  cursor: pointer;\n\n  transition: 0.3s ease;\n  :hover {\n    background: #d0d0d0;\n    border: 1px solid ",";\n  }\n"])),z.O.gray2,z.O.dark),q=M.ZP.div(u||(u=(0,C.Z)(["\n  background-color: rgb(255, 255, 255);\n\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  border: 1px solid ",";\n  width: fit-content;\n  padding: 5px;\n\n  cursor: pointer;\n"])),z.O.gray2),B=M.ZP.div(h||(h=(0,C.Z)(["\n  background-color: rgb(217, 119, 119);\n\n  color: white;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  border: 1px solid ",";\n  width: fit-content;\n  padding: 5px;\n\n  cursor: pointer;\n"])),z.O.gray5),G=M.ZP.div(f||(f=(0,C.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 5px;\n"])));var K=e.p+"static/media/HeartStraight.252b3c14e67de779607cfa73abb70141.svg";var Q=e.p+"static/media/HeartStraightWhite.25911538bc898c0587d4d30b664f87c2.svg";var V,X,Y,tt,nt,et,it,at,rt,st,ot,dt,ct,lt,pt,ut,ht,ft,gt,xt,bt,vt,Zt=e.p+"static/media/Trash.0fe5821953ca280ed68aefe31807729d.svg",mt=(0,j.$j)((function(t){return{postsData:t.profilePage.postsData}}),{addPostActionCreator:k.Wl,togglePostLike:k._P,deletePost:k.fR})((function(t){var n=t.postsData,e=t.addPostActionCreator,i=t.togglePostLike,a=t.deletePost,r=function(t){i(t)},s=function(t){a(t)};return(0,E.jsxs)($,{children:[(0,E.jsx)(N,{onSubmit:function(t){e(t.postText)}}),n.map((function(t,n){return(0,E.jsxs)(I,{children:[(0,E.jsx)(J,{children:t.message}),!0===t.isLiked?(0,E.jsxs)(G,{children:[(0,E.jsxs)(B,{onClick:function(){r(n)},children:[(0,E.jsx)(W,{src:Q,alt:"icon"}),t.likesCount]}),(0,E.jsx)(R,{src:Zt,alt:"icon",onClick:function(){s(t.id)}})]}):(0,E.jsxs)(G,{children:[(0,E.jsxs)(q,{onClick:function(){r(n)},children:[(0,E.jsx)(W,{src:K,alt:"icon"}),t.likesCount]}),(0,E.jsx)(R,{src:Zt,alt:"icon",onClick:function(){s(t.id)}})]})]},t.id)}))]})})),jt=M.ZP.button(V||(V=(0,C.Z)(['\n  display: flex;\n  align-items: center;\n  font-family: "Montserrat", sans-serif;\n  gap: 5px;\n  cursor: pointer;\n  border: 1px solid ',";\n  background: transparent;\n  color: ",";\n  padding: 5px 25px;\n"])),z.O.gray2,z.O.dark),kt=M.ZP.img(X||(X=(0,C.Z)(["\n  width: 24px;\n  background: ",";\n"])),z.O.primaryDark),yt=function(t){var n=t.children,e=t.icon,i=t.onClick;return(0,E.jsxs)(jt,{onClick:i,children:[e&&(0,E.jsx)(kt,{src:e,alt:"button icon"}),n]})},Pt=M.ZP.div(Y||(Y=(0,C.Z)(["\n  margin: 15px 0;\n"]))),St=M.ZP.div(tt||(tt=(0,C.Z)(["\n  display: flex;\n"]))),wt=M.ZP.div(nt||(nt=(0,C.Z)(["\n  display: flex;\n"]))),Dt=M.ZP.input(et||(et=(0,C.Z)(['\n  font-size: 14px;\n  font-family: "Montserrat", sans-serif;\n  width: 300px;\n  outline: none;\n\n  border-top: 1px solid ',";\n  border-left: 1px solid ",";\n  border-bottom: 1px solid ",";\n  border-right: none;\n  padding-left: 8px;\n"])),z.O.gray2,z.O.gray2,z.O.gray2),Ot=M.ZP.div(it||(it=(0,C.Z)(['\n  font-size: 14px;\n  font-family: "Montserrat", sans-serif;\n  border-top: 1px solid ',";\n  border-left: 1px solid ",";\n  border-bottom: 1px solid ",";\n  border-right: none;\n  border: 1px solid ",";\n  color: ",";\n  width: fit-content;\n  width: 300px;\n  text-overflow: ellipsis;\n  display: inline-block;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  padding-left: 8px;\n"])),z.O.gray2,z.O.gray2,z.O.gray2,z.O.gray2,z.O.gray4),Ut=function(t){(0,v.Z)(e,t);var n=(0,Z.Z)(e);function e(){var t;(0,x.Z)(this,e);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(t=n.call.apply(n,[this].concat(a))).state={editMode:!1,status:t.props.profileStatus},t.onChangeStatus=function(n){t.setState({status:n.currentTarget.value})},t}return(0,b.Z)(e,[{key:"getStatus",value:function(){this.props.getUserStatus()}},{key:"activateStatusEdit",value:function(){this.setState({editMode:!0})}},{key:"componentDidUpdate",value:function(t,n){}},{key:"deactivateStatusEdit",value:function(){this.setState({editMode:!1})}},{key:"onSaveStatus",value:function(){this.props.setUserStatus(this.state.status),this.deactivateStatusEdit(),this.getStatus()}},{key:"render",value:function(){var t=this.props.authData.id,n=this.props.userId;return(0,E.jsxs)(Pt,{children:[!this.state.editMode&&(0,E.jsxs)(St,{children:[(0,E.jsx)(Ot,{children:this.props.profileStatus}),t===n&&(0,E.jsx)(yt,{onClick:this.activateStatusEdit.bind(this),children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"})]}),this.state.editMode&&(0,E.jsxs)(wt,{children:[(0,E.jsx)(Dt,{autoFocus:!0,onChange:this.onChangeStatus,value:this.state.status}),(0,E.jsx)(D.D,{onClick:this.onSaveStatus.bind(this),children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})]})}}]),e}(m.Component),Ct=M.ZP.div(at||(at=(0,C.Z)(['\n  display: grid;\n  margin-top: 15px;\n  grid-template-areas:\n    "a i"\n    ". p";\n\n  justify-content: start;\n']))),Tt=M.ZP.div(rt||(rt=(0,C.Z)(["\n  grid-area: i;\n  min-width: 0;\n  margin-left: 15px;\n"]))),Mt=M.ZP.div(st||(st=(0,C.Z)(["\n  grid-area: p;\n  min-width: 0;\n  margin-left: 15px;\n"]))),zt=M.ZP.div(ot||(ot=(0,C.Z)(["\n  font-size: 26px;\n  font-weight: 500;\n"]))),At=M.ZP.div(dt||(dt=(0,C.Z)(["\n  display: flex;\n  gap: 10px;\n  margin-top: 10px;\n"]))),_t=M.ZP.div(ct||(ct=(0,C.Z)(["\n  margin-top: 20px;\n  font-size: 14px;\n  font-weight: 500;\n  color: ",";\n"])),z.O.gray3),Ft=M.ZP.div(lt||(lt=(0,C.Z)(["\n  font-size: 18;\n  font-weight: 500;\n"]))),Et=M.ZP.img(pt||(pt=(0,C.Z)([""]))),Ht=M.ZP.div(ut||(ut=(0,C.Z)(["\n  font-size: 18px;\n  font-weight: 400;\n"]))),Lt=M.ZP.div(ht||(ht=(0,C.Z)(["\n  font-size: 12px;\n  font-weight: 400;\n  color: ",";\n"])),z.O.gray2),Nt=M.ZP.div(ft||(ft=(0,C.Z)(["\n  border-top: 1px solid ",";\n  justify-content: space-between;\n  display: grid;\n\n  padding: 15px 10px 18px;\n"])),z.O.gray1),$t=M.ZP.a(gt||(gt=(0,C.Z)(['\n  font-size: 14px;\n  font-family: "Montserrat", sans-serif;\n\n  color: ',";\n"])),z.O.primary),It=M.ZP.div(xt||(xt=(0,C.Z)(["\n  margin-top: 10px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n"]))),Jt=M.ZP.img(bt||(bt=(0,C.Z)(["\n  object-fit: cover;\n\n  height: 300px;\n  grid-area: a;\n"]))),Wt=M.ZP.img(vt||(vt=(0,C.Z)(["\n  object-fit: cover;\n\n  height: 300px;\n  background: #b6b5b5;\n  font-size: 10px;\n  color: red;\n  grid-area: a;\n"])));var Rt=e.p+"static/media/Facebook.db58fcca8e2318e21d2bc4861b8768b6.svg";var qt=e.p+"static/media/Instagram.8378bdeb7f346169babf1fbdda90cae6.svg";var Bt=e.p+"static/media/github.828bb4ce3a01c45efbba7f5c312c143b.svg";var Gt=e.p+"static/media/vk.9a39043566db9864335762d748ac1fd2.svg",Kt=function(t){var n=t.profilePage;return(0,E.jsx)(E.Fragment,{children:null!==n?(0,E.jsxs)(Ct,{children:[n.photos.small?(0,E.jsx)(Jt,{src:n.photos.large,alt:"avatar"}):(0,E.jsx)(Wt,{src:w,alt:"avatar"}),(0,E.jsxs)(Tt,{children:[(0,E.jsx)(zt,{children:n.fullName}),(0,E.jsx)(Ut,(0,g.Z)((0,g.Z)({},n),{},{setUserStatus:t.setUserStatus,getUserStatus:t.getUserStatus,profileStatus:t.profileStatus,authData:t.authData})),(0,E.jsxs)(At,{children:[(0,E.jsx)(Ft,{children:"\u041c\u0435\u0441\u0442\u043e \u0440\u0430\u0431\u043e\u0442\u044b:"}),(0,E.jsx)(Ht,{children:!1===n.lookingForAJob?"\u0418\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443":n.lookingForAJobDescription})]}),(0,E.jsx)(_t,{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),(0,E.jsxs)(Nt,{children:[(0,E.jsxs)(It,{children:[(0,E.jsx)(Et,{src:Rt,alt:"facebook"}),null===n.contacts.facebook?(0,E.jsx)(Lt,{children:"\u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u043e"}):(0,E.jsx)($t,{href:n.contacts.facebook,target:"_blank",children:n.contacts.facebook})]}),(0,E.jsxs)(It,{children:[(0,E.jsx)(Et,{src:qt,alt:"facebook"}),null===n.contacts.instagram?(0,E.jsx)(Lt,{children:"\u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u043e"}):(0,E.jsx)($t,{href:n.contacts.instagram,target:"_blank",children:n.contacts.instagram})]}),(0,E.jsxs)(It,{children:[(0,E.jsx)(Et,{src:Bt,alt:"github"}),null===n.contacts.github?(0,E.jsx)(Lt,{children:"\u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u043e"}):(0,E.jsx)($t,{href:n.contacts.github,target:"_blank",children:n.contacts.github})]}),(0,E.jsxs)(It,{children:[(0,E.jsx)(Et,{src:Gt,alt:"vk"}),null===n.contacts.vk?(0,E.jsx)(Lt,{children:"\u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u043e"}):(0,E.jsx)($t,{href:n.contacts.vk,target:"_blank",children:n.contacts.vk})]})]})]}),(0,E.jsx)(Mt,{children:(0,E.jsx)(mt,{})})]}):(0,E.jsx)(S.p,{})})},Qt=(0,m.memo)(Kt),Vt=function(t){(0,v.Z)(e,t);var n=(0,Z.Z)(e);function e(){return(0,x.Z)(this,e),n.apply(this,arguments)}return(0,b.Z)(e,[{key:"componentDidMount",value:function(){this.getUserStatus(),this.getUserProfile()}},{key:"getUserProfile",value:function(){var t=this.props.authData.id,n=Number(this.props.router.params.id);this.props.getProfileDataThunk(n||(t||2))}},{key:"setAuthUserStatus",value:function(t){this.props.setAuthUserStatusThunk(t)}},{key:"getUserStatus",value:function(){var t=this.props.authData.id,n=Number(this.props.router.params.id);this.props.getUserStatusThunk(n||(t||2))}},{key:"render",value:function(){return(0,E.jsx)(E.Fragment,{children:(0,E.jsx)(Qt,{profilePage:this.props.profilePage.userProfile,profileStatus:this.props.profilePage.userStatus,getUserStatus:this.getUserStatus.bind(this),setUserStatus:this.setAuthUserStatus.bind(this),authData:this.props.authData})})}}]),e}(m.Component);var Xt,Yt=(0,P.D)(Vt),tn=(0,j.$j)((function(t){return{authData:t.authData,profilePage:t.profilePage}}),{getProfileDataThunk:k.lT,getUserStatusThunk:k.$S,setAuthUserStatusThunk:k.c5})((Xt=Yt,function(t){var n=(0,y.TH)(),e=(0,y.s0)(),i=(0,y.UO)();return(0,E.jsx)(Xt,(0,g.Z)((0,g.Z)({},t),{},{router:{location:n,navigate:e,params:i}}))}))},8610:function(t,n,e){e.d(n,{DT:function(){return a},lp:function(){return i}});var i=function(t){if(!t)return"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435"},a=function(t){return function(n){return n.length>t?"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u043d\u0430 ".concat(t," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"):void 0}}}}]);
//# sourceMappingURL=154.5ea0259a.chunk.js.map