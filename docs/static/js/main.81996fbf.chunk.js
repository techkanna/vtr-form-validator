(this.webpackJsonpsrc=this.webpackJsonpsrc||[]).push([[0],{3:function(e,a,t){e.exports=t(9)},8:function(e,a,t){},9:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(2),s=t.n(l);t(8);var c=function(){function e(e,a){var t=e.parentElement;t.className="form-control error",t.querySelector("small").innerText=a}function a(e){e.parentElement.className="form-control success"}function t(t,n,l){t.value.length<n?e(t,"".concat(r(t)," must be at least ").concat(n," characters")):t.value.length>l?e(t,"".concat(r(t)," must be less than ").concat(l," characters")):a(t)}function r(e){return e.id.charAt(0).toUpperCase()+e.id.slice(1)}return n.a.createElement("div",{className:"container"},n.a.createElement("form",{className:"form",onSubmit:function(n){n.preventDefault();var l,s,c=n.target[0],m=n.target[1],o=n.target[2],i=n.target[3];(function(t){var n=!1;return t.forEach((function(t){""===t.value.trim()?(e(t,"".concat(r(t)," is required")),n=!0):a(t)})),n})([c,m,o,i])||(t(c,3,15),t(o,6,25),/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test((l=m).value.trim())?a(l):e(l,"Email is not valid"),s=i,o.value!==s.value&&e(s,"Passwords do not match"))}},n.a.createElement("h2",null,"Register With Us"),n.a.createElement("div",{className:"form-control"},n.a.createElement("label",{htmlFor:"username"},"Username"),n.a.createElement("input",{type:"text",name:"username",id:"username",placeholder:"Enter username"}),n.a.createElement("small",null,"Error message")),n.a.createElement("div",{className:"form-control"},n.a.createElement("label",{htmlFor:"email"},"Email"),n.a.createElement("input",{type:"text",name:"email",id:"email",placeholder:"Enter email"}),n.a.createElement("small",null,"Error message")),n.a.createElement("div",{className:"form-control"},n.a.createElement("label",{htmlFor:"password"},"Password"),n.a.createElement("input",{type:"password",name:"password",id:"password",placeholder:"Enter password"}),n.a.createElement("small",null,"Error message")),n.a.createElement("div",{className:"form-control"},n.a.createElement("label",{htmlFor:"password2"},"Confirm Password"),n.a.createElement("input",{type:"password",name:"password2",id:"password2",placeholder:"Enter password again"}),n.a.createElement("small",null,"Error message")),n.a.createElement("button",{type:"submit"},"Submit")))};s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(c,null)),document.getElementById("root"))}},[[3,1,2]]]);
//# sourceMappingURL=main.81996fbf.chunk.js.map