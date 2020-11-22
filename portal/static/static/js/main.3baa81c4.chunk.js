(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{101:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(15),c=n.n(o),l=(n(75),n(76),n(20)),i=n(21),s=n(25),u=n(24),m=n(6),p=n(16),h=n(50),d=n(51),f=n(43),g=n(27),E=n(35),v=n(33),b=n(30),k=n.n(b),w=function(e){return{type:"AUTH_SUCCESS",token:e}},y=function(e){return{type:"AUTH_FAIL",error:e}},O=function(){return localStorage.removeItem("user"),localStorage.removeItem("expirationDate"),{type:"AUTH_LOGOUT"}},S=function(e){return function(t){setTimeout((function(){t(O())}),1e3*e)}},T=function(){return function(e){var t=localStorage.getItem("token");if(void 0===t)e(O());else{var n=new Date(localStorage.getItem("expirationDate"));n<=new Date?e(O()):(e(w(t)),e(S((n.getTime()-(new Date).getTime())/1e3)))}}},j=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).onChange=function(e){var t=e.target.name,n=e.target.value;r.setState(Object(f.a)({},t,n))},r.onSubmit=function(e){e.preventDefault(),""===r.state.username?r.setState({errorShow:!0,errorTitle:"Username Error",errorBody:"Please enter your username!"}):""===r.state.password?r.setState({errorShow:!0,errorTitle:"Password Error",errorBody:"Please enter your password!"}):(console.log("I tried to log in"),r.props.onAuth(r.state.username,r.state.password))},r.handleErrorClose=function(){r.setState({errorShow:!1})},r.handleErrorShow=function(){r.setState({errorShow:!0})},r.state={username:"",password:"",errorShow:!1,errorTitle:"Generic Error",errorBody:"This is a generic error!"},r}return Object(i.a)(n,[{key:"render",value:function(){return this.props.token&&this.props.history.push("/portal"),a.a.createElement("div",{className:"login center"},a.a.createElement("div",{className:"container center_div w-50 align-items-center focus"},a.a.createElement("h1",null,"Login Page"),a.a.createElement(g.a,null,a.a.createElement(g.a.Group,{controlId:"formUsername"},a.a.createElement(g.a.Label,null,"Username"),a.a.createElement(g.a.Control,{name:"username",type:"username",placeholder:"Enter username",value:this.state.username,onChange:this.onChange})),a.a.createElement(g.a.Group,{controlId:"formUsername"},a.a.createElement(g.a.Label,null,"Password"),a.a.createElement(g.a.Control,{name:"password",type:"password",placeholder:"Enter password",value:this.state.password,onChange:this.onChange})),a.a.createElement(E.a,{variant:"primary",type:"submit",onClick:this.onSubmit},"Login"))),a.a.createElement(v.a,{show:this.state.errorShow,onHide:this.handleErrorClose,backdrop:"static",keyboard:!1,centered:!0},a.a.createElement(v.a.Header,{closeButton:!0},a.a.createElement(v.a.Title,null,this.state.errorTitle)),a.a.createElement(v.a.Body,null,a.a.createElement("p",null,this.state.errorBody)),a.a.createElement(v.a.Footer,null,a.a.createElement(E.a,{variant:"secondary",onClick:this.handleErrorClose},"Close"))))}}]),n}(a.a.Component),C=Object(p.b)((function(e){return{token:e.token,loading:e.loading,error:e.error}}),(function(e){return{onAuth:function(t,n){return e(function(e,t){return function(n){n({type:"AUTH_START"}),k.a.post("http://localhost:8080/rest-auth/login/",{username:e,password:t}).then((function(e){console.log(e);var t=e.data.key,r=new Date((new Date).getTime()+36e5);localStorage.setItem("token",t),localStorage.setItem("expirationDate",r),n(w(t)),n(S(3600))})).catch((function(e){n(y(e)),console.log(e.response)}))}}(t,n))}}}))(j),A=n(32),U=n.n(A),_=n(47),x=n(38),I=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return a.a.createElement(x.a,{style:{margin:"1rem"},bg:"light",text:"black"},a.a.createElement("div",{class:"shadow"},a.a.createElement("a",{href:this.props.link},a.a.createElement(x.a.Body,null,a.a.createElement(x.a.Title,null,this.props.name),a.a.createElement(x.a.Text,null,this.props.link)))))}}]),n}(a.a.Component),D=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).componentDidMount=Object(_.a)(U.a.mark((function e(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.props.isLoggedIn();case 2:r.props.token?(k.a.defaults.headers={"Content-Type":"application/json",Authorization:"Token ".concat(r.props.token)},k.a.get("http://localhost:8080/portal/api/links").then((function(e){var t=e.data;console.log(e.data),r.setState({links:t})})).catch((function(e){window.alert(e)}))):r.props.history.push("/");case 3:case"end":return e.stop()}}),e)}))),r.onLogout=function(e){r.props.logout(),r.props.history.push("/")},r.state={links:[]},r}return Object(i.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"portal center"},a.a.createElement("div",{className:"container center_div w-50 focus"},a.a.createElement("h1",null,"Portal Page"),a.a.createElement("div",{class:"adminlinks"},this.state.links.map((function(e,t){return a.a.createElement(I,{key:t,name:e.name,link:e.url})})))))}}]),n}(a.a.Component),L=Object(p.b)((function(e){return{token:e.token}}),(function(e){return{isLoggedIn:function(){return e(T())},logout:function(){return e(O())}}}))(D);var N=Object(p.b)((function(e){return{token:e.token}}),(function(e){return{logout:function(){return e(O())}}}))((function(e){var t=e.token,n=e.logout,r=Object(m.e)();return t?a.a.createElement(E.a,{type:"submit",variant:"light",onClick:function(){n(),r.push("/")}},"Log Out"):null})),B=function(e){return e.children},H=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).Main=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(d.a,{bg:"primary",variant:"dark"},a.a.createElement(d.a.Brand,{href:"/"},"Admin Portal"),a.a.createElement(h.a,{className:"ml-auto"}),a.a.createElement(h.a,{className:"ml-auto"},a.a.createElement(N,{className:"mr-auto"}))),a.a.createElement(d.a,{bg:"light",variant:"light",sticky:"bottom",fixed:"bottom"},a.a.createElement(h.a,{className:"m-auto"},a.a.createElement("div",{className:"text-center","text-align":"center",width:"100%"},a.a.createElement("p",null,"COSC 4351 Project - By Carroll Vance, Andrew Vieira, and Jerrin Wiley")))),a.a.createElement(B,null,a.a.createElement(m.a,{exact:!0,path:"/",component:C}),a.a.createElement(m.a,{exact:!0,path:"/portal",component:L})))},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup()}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(this.Main,this.props))}}]),n}(a.a.Component),P=Object(p.b)((function(e){return{isAuthenticated:null!==e.token}}),(function(e){return{onTryAutoSignup:function(){return e(T())}}}))(H);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=n(42),M=n(29),F=n(69),J=n(57),R=function(e,t){return Object(J.a)(Object(J.a)({},e),t)},V={token:null,error:null,loading:!1},W=function(e,t){return R(e,{error:null,loading:!0})},X=function(e,t){return R(e,{token:t.token,error:null,loading:!1})},z=function(){var e=Object(_.a)(U.a.mark((function e(t,n){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(t,{error:n.error,loading:!1});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),$=function(e,t){return R(e,{token:null})},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_START":return W(e);case"AUTH_SUCCESS":return X(e,t);case"AUTH_FAIL":return z(e,t);case"AUTH_LOGOUT":return $(e);default:return e}},K=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||M.c,Q=Object(M.d)(q,K(Object(M.a)(F.a)));c.a.render(a.a.createElement(p.a,{store:Q},a.a.createElement(G.a,null,a.a.createElement(P,null)),","),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},70:function(e,t,n){e.exports=n(101)},75:function(e,t,n){}},[[70,1,2]]]);
//# sourceMappingURL=main.3baa81c4.chunk.js.map