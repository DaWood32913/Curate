(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(56)},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(24),s=a.n(l),c=a(25),o=a(58),i=a(62),m=a(61),u=a(59);var h=function(e){return r.a.createElement("div",null,r.a.createElement(o.a,null,r.a.createElement("form",{action:"/login",method:"GET"},r.a.createElement("span",null,"Username: ",e.username),r.a.createElement("input",{type:"text",placeholder:"Username",name:"username",value:e.username,onChange:e.handleInputChange}),r.a.createElement("span",null,"Password: ",e.password),r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",value:e.password,onChange:e.handleInputChange}),r.a.createElement("button",{onClick:e.handleLogInSubmit},"Sign In"),r.a.createElement("div",null,r.a.createElement(u.a,{to:"/createaccount"},"Create Account")))))},d=a(8),p=a(9),E=a(10),v=a(16),g=a(11),f=a(15),w=a(60),b=a(12),N=a.n(b),y=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(v.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",redirectTo:null},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(d.a)({},n,r))},a.handleFormSubmit=function(e){e.preventDefault(),a.state.username&&a.state.password?a.state.password.length<6?alert("Choose a more secure password, ".concat(a.state.username)):alert("Hello ".concat(a.state.username)):alert("Fill out your username and password please!"),N.a.post("/auth/createAccount",{username:a.state.username,password:a.state.password}).then(function(e){console.log(e),a.setState({redirectTo:"/login"})})},a}return Object(f.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return this.state.redirectTo?r.a.createElement(w.a,{to:{pathname:this.state.redirectTo}}):r.a.createElement(o.a,null,r.a.createElement("form",{action:"/createaccount/",method:"POST"},r.a.createElement("span",null,"Username: ",this.state.username),r.a.createElement("input",{type:"text",placeholder:"Username",name:"username",value:this.state.username,onChange:this.state.handleInputChange}),r.a.createElement("span",null,"Password: ",this.state.password),r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",value:this.state.password,onChange:this.state.handleInputChange}),r.a.createElement("button",{onClick:this.handleFormSubmit},"Create Account")))}}]),t}(n.Component);a(52);var C=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("ul",{className:"nav"},r.a.createElement("li",{className:" nav-item logo-container"},r.a.createElement("h1",{className:"display-4",to:"/"},"Goog Enheim",r.a.createElement(u.a,{to:"/"}))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(u.a,{to:"/login",className:"nav-link"},"Login")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(u.a,{to:"/",className:"nav-link"},"Search")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(u.a,{to:"/saved",className:"nav-link"},"Saved"))))},S=a(6);a(53);var O=function(){return r.a.createElement("div",null)},j=(a(54),function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(v.a)(this,Object(g.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(d.a)({},n,r))},a.handleArtistSubmit=function(e){e.preventDefault(),console.log("inside handleArtistSubmit"),N.a.get("/api/artists/",{params:{name:a.state.name}}).then(function(e){console.log("handleArtistSubmit: res: ",e),a.setState({serverResponse:e.data})})},a.state={name:"",serverResponse:null},a.handleArtistSubmit.bind(Object(S.a)(Object(S.a)(a))),a}return Object(f.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(O,null),r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"form-group",action:"/",method:"GET"},r.a.createElement("label",null,"Artist Search"),r.a.createElement("input",{name:"name",type:"text",className:"form-control",placeholder:"Search for artist",onChange:this.handleInputChange}),r.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:this.handleArtistSubmit},"Search")),r.a.createElement("div",null,r.a.createElement("div",{className:"card img-container hover"},r.a.createElement("img",{src:this.state.thumbnail,alt:"artwork"}),r.a.createElement("ul",null,r.a.createElement("li",{className:"art_title"},this.state.art_title,"Art Title"),r.a.createElement("li",{className:"art_date"},this.state.art_date,"Date Created"),r.a.createElement("li",{className:"artist_name"},this.state.name,"Artist Name"),r.a.createElement("li",{className:"nationality"},this.state.nationality,"Artist Nationality")))),r.a.createElement("pre",null,JSON.stringify(this.state,null,2))))}}]),t}(n.Component));var k=function(){return r.a.createElement("div",null,r.a.createElement("h4",null,"Populate saved cards here."))};a(55);var A=function(){return r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement(C,null),r.a.createElement(i.a,null,r.a.createElement(m.a,{exact:!0,path:"/login",component:h}),r.a.createElement(m.a,{exact:!0,path:"/createaccount/",component:y}),r.a.createElement(m.a,{exact:!0,path:"/",component:j}),r.a.createElement(m.a,{exact:!0,path:"/saved",component:k}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=(0,a(5).createBrowserHistory)();s.a.render(r.a.createElement(c.a,{history:I},r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.a4007ecc.chunk.js.map