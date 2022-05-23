(this.webpackJsonpHUW=this.webpackJsonpHUW||[]).push([[0],{111:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(30),i=n.n(r),c=(n(81),n(56)),o=n(9),l=n(10),d=n(13),u=n(12),h=n(14),j=n(114),m=n(2),b=n(3),g=n(1),p=["user","component","render"],O=function(e){var t=e.user,n=e.component,a=e.render,s=Object(b.a)(e,p);return t&&a?Object(g.jsx)(h.b,Object(m.a)(Object(m.a)({},s),{},{render:a})):Object(g.jsx)(h.b,Object(m.a)(Object(m.a)({},s),{},{render:function(e){return t?Object(g.jsx)(n,Object(m.a)({},e)):Object(g.jsx)(h.a,{to:"/"})}}))},f=n(62),x=(n(90),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleClose=function(){return a.setState({show:!1})},a.state={show:!0},a.timeoutId=null,a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.timeoutId=setTimeout(this.handleClose,5e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutId)}},{key:"render",value:function(){var e=this.props,t=e.variant,n=e.heading,a=e.message,s=e.deleteAlert,r=e.id;return this.state.show||setTimeout((function(){s(r)}),300),Object(g.jsx)(f.a,{dismissible:!0,show:this.state.show,variant:t,onClose:this.handleClose,children:Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)(f.a.Heading,{children:n}),Object(g.jsx)("p",{className:"alert-body",children:a})]})})}}]),n}(s.a.Component)),v=n(74),w=n(46),C=n(11),y=Object(g.jsxs)(a.Fragment,{children:[Object(g.jsx)(C.c,{to:"/change-password",className:"nav-link",children:"Change Password"}),Object(g.jsx)(C.c,{to:"/sign-out",className:"nav-link",children:"Sign Out"}),Object(g.jsx)(C.c,{to:"/list",className:"nav-link",children:"Create List"}),Object(g.jsx)(C.c,{to:"/list-index",className:"nav-link",children:"My List"})]}),S=Object(g.jsxs)(a.Fragment,{children:[Object(g.jsx)(C.c,{to:"/sign-up",className:"nav-link",children:"Sign Up"}),Object(g.jsx)(C.c,{to:"/sign-in",className:"nav-link",children:"Sign In"})]}),k=Object(g.jsx)(a.Fragment,{children:Object(g.jsx)(C.c,{exact:!0,to:"/",className:"nav-link",children:"Home"})}),A=function(e){var t=e.user;return Object(g.jsxs)(w.a,{bg:"dark",variant:"dark",expand:"md",children:[Object(g.jsx)(w.a.Brand,{children:Object(g.jsx)(C.b,{to:"/",style:{color:"#189356",textDecoration:"none"},children:"H.U.W"})}),Object(g.jsx)(w.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(g.jsx)(w.a.Collapse,{id:"basic-navbar-nav",children:Object(g.jsxs)(v.a,{className:"ml-auto",children:[t&&Object(g.jsxs)("span",{className:"navbar-text mr-2",children:["Welcome, ",t.email]}),k,t?y:S]})})]})},I=n(7),N="https://aqueous-atoll-85096.herokuapp.com",P="http://localhost:4741",U="localhost"===window.location.hostname?P:N,D=n(28),L=n.n(D),T=function(e){return L()({url:U+"/sign-in/",method:"POST",data:{credentials:{email:e.email,password:e.password}}})},E=n(6),F=n(31),G=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(I.a)({},e.target.name,e.target.value))},a.onSignUp=function(e){e.preventDefault();var t,n=a.props,s=n.msgAlert,r=n.history,i=n.setUser;(t=a.state,L()({method:"POST",url:U+"/sign-up/",data:{credentials:{email:t.email,password:t.password,password_confirmation:t.passwordConfirmation}}})).then((function(){return T(a.state)})).then((function(e){return i(e.data.user)})).then((function(){return s({heading:"Sign Up Success",message:"Succesfully registered! You've been signed in as well.",variant:"success"})})).then((function(){return r.push("/")})).catch((function(e){a.setState({email:"",password:"",passwordConfirmation:""}),s({heading:"Sign Up Failed with error: "+e.message,message:"Registration failed. Email may be taken, or passwords don't match.",variant:"danger"})}))},a.state={email:"",password:"",passwordConfirmation:""},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password,a=e.passwordConfirmation;return Object(g.jsx)("div",{className:"row",children:Object(g.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(g.jsx)("h3",{children:"Sign Up"}),Object(g.jsxs)(E.a,{onSubmit:this.onSignUp,children:[Object(g.jsxs)(E.a.Group,{controlId:"email",children:[Object(g.jsx)(E.a.Label,{children:"Email address"}),Object(g.jsx)(E.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(g.jsxs)(E.a.Group,{controlId:"password",children:[Object(g.jsx)(E.a.Label,{children:"Password"}),Object(g.jsx)(E.a.Control,{required:!0,name:"password",value:n,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(g.jsxs)(E.a.Group,{controlId:"passwordConfirmation",children:[Object(g.jsx)(E.a.Label,{children:"Password Confirmation"}),Object(g.jsx)(E.a.Control,{required:!0,name:"passwordConfirmation",value:a,type:"password",placeholder:"Confirm Password",onChange:this.handleChange})]}),Object(g.jsx)(F.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),n}(a.Component),q=Object(h.f)(G),B=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(I.a)({},e.target.name,e.target.value))},a.onSignIn=function(e){e.preventDefault();var t=a.props,n=t.msgAlert,s=t.history,r=t.setUser;T(a.state).then((function(e){return r(e.data.user)})).then((function(){return n({heading:"Sign In Success",message:"Welcome!",variant:"success"})})).then((function(){return s.push("/")})).catch((function(e){a.setState({email:"",password:""}),n({heading:"Sign In Failed with error: "+e.message,message:"Failed to sign in. Check your email and password and try again.",variant:"danger"})}))},a.state={email:"",password:""},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password;return Object(g.jsx)("div",{className:"row",children:Object(g.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(g.jsx)("h3",{children:"Sign In"}),Object(g.jsxs)(E.a,{onSubmit:this.onSignIn,children:[Object(g.jsxs)(E.a.Group,{controlId:"email",children:[Object(g.jsx)(E.a.Label,{children:"Email address"}),Object(g.jsx)(E.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(g.jsxs)(E.a.Group,{controlId:"password",children:[Object(g.jsx)(E.a.Label,{children:"Password"}),Object(g.jsx)(E.a.Control,{required:!0,name:"password",value:n,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(g.jsx)(F.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),n}(a.Component),H=Object(h.f)(B),z=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.msgAlert,n=e.history,a=e.clearUser;(function(e){return L()({url:U+"/sign-out/",method:"DELETE",headers:{Authorization:"Bearer ".concat(e.token)}})})(e.user).finally((function(){return t({heading:"Signed Out Successfully",message:"Come back soon!",variant:"success"})})).finally((function(){return n.push("/")})).finally((function(){return a()}))}},{key:"render",value:function(){return""}}]),n}(a.Component),M=Object(h.f)(z),W=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(I.a)({},e.target.name,e.target.value))},a.onChangePassword=function(e){e.preventDefault();var t=a.props,n=t.msgAlert,s=t.history,r=t.user;(function(e,t){return L()({url:U+"/change-password/",method:"PATCH",headers:{Authorization:"Bearer ".concat(t.token)},data:{passwords:{old:e.oldPassword,new:e.newPassword}}})})(a.state,r).then((function(){return n({heading:"Change Password Success",message:"Password changed successfully!",variant:"success"})})).then((function(){return s.push("/")})).catch((function(e){a.setState({oldPassword:"",newPassword:""}),n({heading:"Change Password Failed with error: "+e.message,message:"Failed to change passwords. Check your old password and try again.",variant:"danger"})}))},a.state={oldPassword:"",newPassword:""},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.oldPassword,n=e.newPassword;return Object(g.jsx)("div",{className:"row",children:Object(g.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(g.jsx)("h3",{children:"Change Password"}),Object(g.jsxs)(E.a,{onSubmit:this.onChangePassword,children:[Object(g.jsxs)(E.a.Group,{controlId:"oldPassword",children:[Object(g.jsx)(E.a.Label,{children:"Old password"}),Object(g.jsx)(E.a.Control,{required:!0,name:"oldPassword",value:t,type:"password",placeholder:"Old Password",onChange:this.handleChange})]}),Object(g.jsxs)(E.a.Group,{controlId:"newPassword",children:[Object(g.jsx)(E.a.Label,{children:"New Password"}),Object(g.jsx)(E.a.Control,{required:!0,name:"newPassword",value:n,type:"password",placeholder:"New Password",onChange:this.handleChange})]}),Object(g.jsx)(F.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),n}(a.Component),_=Object(h.f)(W),J=function(e,t){return L()({url:U+"/list/"+e,method:"GET",headers:{Authorization:"Bearer ".concat(t.token)}})},Y=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={list:[]},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.user,a=t.msgAlert;(function(e){return L()({url:U+"/list-index/",method:"GET",headers:{Authorization:"Bearer ".concat(e.token)}})})(n).then((function(t){return e.setState({list:t.data.list})})).then((function(){a({heading:"Index success",message:"Successfully indexed",variant:"success"})})).catch((function(e){a({heading:"Index fail",message:"Index error: "+e.message,variant:"danger"})}))}},{key:"render",value:function(){var e,t=this.state.list;return null===t?"Loading...":(e=0===t.length?"No items created.":t.map((function(e){return Object(g.jsx)("li",{children:Object(g.jsx)(C.b,{to:"/list/".concat(e._id),children:e.item})},e._id)})),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h3",{children:"My List:"}),Object(g.jsx)("ul",{children:e})]}))}}]),n}(a.Component),R=n(43),K=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleDelete=function(){var e=a.props,t=e.match,n=e.user,s=e.msgAlert,r=e.history;(function(e,t){return L()({url:U+"/list/"+e,method:"DELETE",headers:{Authorization:"Bearer ".concat(t.token)}})})(t.params.id,n).then((function(){return r.push("/list")})).then((function(){s({heading:"Delete success",message:"Successfully deleted",variant:"success"})})).catch((function(e){s({heading:"Delete fail",message:"Delete error: "+e.message,variant:"danger"})}))},a.state={list:null},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.match,a=t.user,s=t.msgAlert;J(n.params.id,a).then((function(t){return e.setState({list:t.data.list})})).then((function(){s({heading:"New Item Created",message:"You can now Update or Delete the Item",variant:"success"})})).catch((function(e){s({heading:"Show Item failed",message:"Error message: "+e.message,variant:"danger"})}))}},{key:"render",value:function(){if(null===this.state.list)return"Loading...";var e=this.state.list,t=e.item,n=e.description,a=e.owner,s=this.props,r=s.user,i=s.history,c=s.match;return Object(g.jsx)("div",{className:"container col-sm-10 col-md-8",children:Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(R.a,{className:"card",border:"light",style:{width:"30rem"},children:[Object(g.jsx)(R.a.Header,{className:"cardHeader",children:t}),Object(g.jsxs)(R.a.Body,{className:"cardColor",children:[Object(g.jsx)(R.a.Title,{className:"cardColor",children:Object(g.jsxs)("p",{children:["This is a ",t,"!"]})}),Object(g.jsx)(R.a.Text,{children:Object(g.jsxs)("p",{children:["Notes: ",n]})}),r._id===a&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(F.a,{className:"formButton btn1",variant:"outline-dark",onClick:this.handleDelete,children:"Delete"}),Object(g.jsx)(F.a,{className:"formButton btn1",variant:"outline-dark",onClick:function(){return i.push("/list/".concat(c.params.id,"/edit"))},children:"Update"})]})]})]})})})}}]),n}(a.Component),Q=Object(h.f)(K),V=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(I.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t,n=a.props,s=n.user,r=n.msgAlert,i=n.history;(function(e,t){return L()({method:"POST",url:U+"/list/",data:{list:{item:e.item,description:e.description}},headers:{Authorization:"Bearer ".concat(t.token)}})})(a.state,s).then((function(e){return r({heading:"Item created",message:"Item created!",variant:"success"}),e})).then((function(e){return t=e.data.list._id})).then((function(){i.push("/list/".concat(t))})).catch((function(e){r({heading:"Item creation failed",message:"Item error: "+e.message,variant:"danger"})}))},a.state={item:"",description:""},a}return Object(l.a)(n,[{key:"setName",value:function(e){this.setState({name:e.target.value})}},{key:"render",value:function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(E.a,{className:"container col-sm-10 col-md-8 mx-auto mt-5",onSubmit:this.handleSubmit,children:[Object(g.jsx)("div",{className:"box",children:Object(g.jsx)("h3",{children:"Create Item"})}),Object(g.jsxs)(E.a.Group,{controlId:"item",children:[Object(g.jsx)(E.a.Label,{children:"Item"}),Object(g.jsx)(E.a.Control,{required:!0,name:"item",value:this.state.item,placeholder:"....",onChange:this.handleChange})]}),Object(g.jsxs)(E.a.Group,{controlId:"description",children:[Object(g.jsx)(E.a.Label,{children:"Description"}),Object(g.jsx)(E.a.Control,{required:!0,name:"description",value:this.state.description,placeholder:"....",onChange:this.handleChange})]}),Object(g.jsx)(F.a,{className:"btn2 btn-lg",variant:"outline-secondary",type:"submit",children:"Submit"})]})})}}]),n}(a.Component),X=Object(h.f)(V),Z=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(I.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t=a.props,n=t.user,s=t.msgAlert,r=t.history,i=t.match;(function(e,t,n){return L()({url:U+"/list/"+t,method:"PATCH",data:{list:{item:e.item,description:e.description}},headers:{Authorization:"Bearer ".concat(n.token)}})})(a.state,i.params.id,n).then((function(){s({heading:"Updated Item",message:"Item updated",variant:"success"})})).catch((function(e){s({heading:"Item update failed",message:"Update error: "+e.message,variant:"danger"})})).then((function(){return r.push("/list/"+i.params.id)}))},a.state={item:"",description:""},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.match,a=t.user;J(n.params.id,a).then((function(t){return e.setState({username:t.data.list.username,first:t.data.list.first,last:t.data.list.last})}))}},{key:"setName",value:function(e){this.setState({name:e.target.value})}},{key:"render",value:function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(E.a,{className:"container col-sm-10 col-md-8 mx-auto mt-5",onSubmit:this.handleSubmit,children:[Object(g.jsx)("div",{className:"box",children:Object(g.jsx)("h3",{children:"Create Item"})}),Object(g.jsxs)(E.a.Group,{controlId:"item",children:[Object(g.jsx)(E.a.Label,{children:"Item"}),Object(g.jsx)(E.a.Control,{required:!0,name:"item",value:this.state.item,placeholder:"....",onChange:this.handleChange})]}),Object(g.jsxs)(E.a.Group,{controlId:"description",children:[Object(g.jsx)(E.a.Label,{children:"Description"}),Object(g.jsx)(E.a.Control,{required:!0,name:"description",value:this.state.description,placeholder:"....",onChange:this.handleChange})]}),Object(g.jsx)(F.a,{className:"btn2 btn-lg",variant:"outline-secondary",type:"submit",children:"Submit"})]})})}}]),n}(a.Component),$=Object(h.f)(Z),ee=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).setUser=function(e){return a.setState({user:e})},a.clearUser=function(){return a.setState({user:null})},a.deleteAlert=function(e){a.setState((function(t){return{msgAlerts:t.msgAlerts.filter((function(t){return t.id!==e}))}}))},a.msgAlert=function(e){var t=e.heading,n=e.message,s=e.variant,r=Object(j.a)();a.setState((function(e){return{msgAlerts:[].concat(Object(c.a)(e.msgAlerts),[{heading:t,message:n,variant:s,id:r}])}}))},a.state={user:null,msgAlerts:[]},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.msgAlerts,s=t.user;return Object(g.jsxs)(a.Fragment,{children:[Object(g.jsx)(A,{user:s}),n.map((function(t){return Object(g.jsx)(x,{heading:t.heading,variant:t.variant,message:t.message,id:t.id,deleteAlert:e.deleteAlert},t.id)})),Object(g.jsxs)("main",{className:"container",children:[Object(g.jsx)(h.b,{path:"/sign-up",render:function(){return Object(g.jsx)(q,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(g.jsx)(h.b,{path:"/sign-in",render:function(){return Object(g.jsx)(H,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(g.jsx)(O,{user:s,path:"/sign-out",render:function(){return Object(g.jsx)(M,{msgAlert:e.msgAlert,clearUser:e.clearUser,user:s})}}),Object(g.jsx)(O,{user:s,path:"/change-password",render:function(){return Object(g.jsx)(_,{msgAlert:e.msgAlert,user:s})}}),Object(g.jsx)(O,{user:s,path:"/list",render:function(){return Object(g.jsx)(X,{msgAlert:e.msgAlert,user:s})}}),Object(g.jsx)(O,{user:s,path:"/list-index",render:function(){return Object(g.jsx)(Y,{msgAlert:e.msgAlert,user:s})}}),Object(g.jsx)(O,{exact:!0,user:s,path:"/list/:id",render:function(){return Object(g.jsx)(Q,{msgAlert:e.msgAlert,user:s})}}),Object(g.jsx)(O,{user:s,exact:!0,path:"/list/edit/:id",render:function(){return Object(g.jsx)($,{msgAlert:e.msgAlert,user:s})}})]})]})}}]),n}(a.Component),te=Object(g.jsx)(C.a,{basename:"/HUW-Client",children:Object(g.jsx)(ee,{})});i.a.render(te,document.getElementById("root"))},81:function(e,t,n){},90:function(e,t,n){}},[[111,1,2]]]);
//# sourceMappingURL=main.9a78a158.chunk.js.map