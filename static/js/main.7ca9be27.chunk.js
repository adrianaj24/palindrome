(window.webpackJsonppalindrome=window.webpackJsonppalindrome||[]).push([[0],{11:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(3),c=a.n(i),o=(a(16),a(8)),r=a(4),s=a(5),u=a(9),h=a(6),m=a(1),d=a(10),p=a(7),b=a.n(p),v=(a(17),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={value:"",alert:""},a.handleChange=a.handleChange.bind(Object(m.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this.state.value,a=this.state.value.toLowerCase().replace(/\s/g,"");console.log(a.length),e.preventDefault(),t&&0!==a.length?Object(o.a)(a).reduce(function(e,t){return t+e})===a?this.setState({alert:"".concat(t," is a Palindrome :)")}):this.setState({alert:"".concat(t," is not a Palindrome :(")}):this.setState({alert:"Please Enter Text"}),this.setState({value:""})}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("img",{src:b.a,className:"cat-image",alt:"logo"}),l.a.createElement("h1",{className:"alert"},this.state.alert),l.a.createElement("p",null,"IS IT A PALINDROME?"),l.a.createElement("form",{className:"pali-check",onSubmit:this.handleSubmit},l.a.createElement("input",{className:"text-input",type:"text",placeholder:"Enter Text Here",onChange:this.handleChange,value:this.state.value}),l.a.createElement("input",{className:"submit-button",type:"submit",value:"Submit"}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,a){e.exports=a.p+"static/media/tacocat.2e2c5abe.svg"}},[[11,1,2]]]);
//# sourceMappingURL=main.7ca9be27.chunk.js.map