(this.webpackJsonprobocops=this.webpackJsonprobocops||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(6),c=a.n(o),s=(a(12),a(1)),l=a(2),i=a(4),u=a(3),h=function(e){var t=e.robot,a=t.name,n=t.email,o=t.id;return r.a.createElement("div",{className:"tc w5 h10 ma2 ba bw1 b--purple br3 shadow-3 grow"},r.a.createElement("img",{src:"https://robohash.org/".concat(o,".jpg?bgset=bg1"),alt:"Robocop"}),r.a.createElement("h1",{className:"f3"},a),r.a.createElement("h2",{className:"f6 normal"},n))},m=function(e){var t=e.robots;return r.a.createElement("div",{className:"flex flex-wrap justify-center"},t.map((function(e){return r.a.createElement(h,{robot:e})})))},f=(a(13),function(e){var t=e.searchChange;return r.a.createElement("div",{className:"ma4"},r.a.createElement("input",{onChange:t,type:"text",placeholder:"Search Robocops"}))}),d=(a(14),function(e){return r.a.createElement("div",{style:{overflowY:"scroll",height:"500px",border:"3px solid midnightblue"}},e.children)}),b=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={hasError:!1},e}return Object(l.a)(a,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",{className:"tc"},"OOOOOOPPPPPPSSSSSS.....Something Went Wrong.."):this.props.children}}]),a}(n.Component),p=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={robots:[],searchfield:""},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.robots,n=t.searchfield,o=a.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return r.a.createElement("div",{className:"tc"},a.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h3",{className:"f1 ma3"},"Robocops"),r.a.createElement(f,{searchChange:function(t){e.setState({searchfield:t.target.value})}}),r.a.createElement(b,null,r.a.createElement(d,null,r.a.createElement(m,{robots:o})))):r.a.createElement("div",{className:"flex justify-center f4"},r.a.createElement("h1",null,"Loading....")))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.dc017c8a.chunk.js.map