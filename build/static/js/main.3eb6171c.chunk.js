(this["webpackJsonpflask-app"]=this["webpackJsonpflask-app"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},,function(e,t,n){e.exports=n.p+"static/media/figure.fb1272bd.png"},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),i=(n(15),n(16),n(17),n(1)),s=n.n(i),u=n(2),l=n(7),p=n(3),m=n(4),f=n(9),h=n(8),v=new(function(){function e(){var t=this;Object(p.a)(this,e),this.predict=function(){var e=Object(u.a)(s.a.mark((function e(n,a){var r,o,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.makeOptions("POST",!1,{name:n,type:a}),e.next=3,fetch("/predict",r);case 3:return o=e.sent,e.next=6,o.json();case 6:if(c=e.sent,o.ok){e.next=9;break}throw{status:o.status,fullError:c};case 9:return e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}return Object(m.a)(e,[{key:"makeOptions",value:function(e,t,n){var a={method:e,headers:{"Content-type":"application/json",Accept:"application/json"}};return n&&(a.body=JSON.stringify(n)),a}}]),e}()),d=function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).onChange=function(e){e.persist(),n.setState(Object(l.a)({},e.target.id,e.target.value))},n.state={name:"Google",type:"STOCK"},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.mounted=!0;case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"doFetch",value:function(){var e=Object(u.a)(s.a.mark((function e(t,n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=t.replace(" ","+"),console.log(t,n),e.next=4,v.predict(t,n);case 4:return a=e.sent,e.next=7,console.log(a);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"changeType",value:function(e){e.persist();var t=e.target.value;this.setState({type:t})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",{className:"name-input-container"},r.a.createElement("form",{onChange:this.onChange},r.a.createElement("input",{className:"nameInput",type:"text",id:"name",defaultValue:"Google"}))),r.a.createElement("div",{className:"type-input-container"},r.a.createElement("select",{className:"Type",onChange:function(t){return e.changeType(t)}},r.a.createElement("option",{value:"STOCK"},"Stock"),r.a.createElement("option",{value:"FOREX"},"Forex"),r.a.createElement("option",{value:"CRYPTO"},"Crypto Currency"))),r.a.createElement("button",{onClick:function(t){return e.doFetch(e.state.name,e.state.type)}},"Go")),r.a.createElement("img",{src:n(19),alt:"chart"}))}}]),a}(a.Component);var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.3eb6171c.chunk.js.map