(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n.p+"static/media/myPhoto.f7ecf73d.jpg"},17:function(e,t,n){e.exports=n.p+"static/media/Resume.0353d42a.pdf"},23:function(e,t,n){e.exports=n(40)},29:function(e,t,n){},35:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a,r,i,c=n(0),o=n.n(c),l=n(12),s=n.n(l),u=n(53),m=(n(29),n(5)),f=n(6),d=n(8),h=n(7),p=n(9),v=n(54),w=n(16),g=n.n(w),E=(n(21),n(10)),b=n.n(E),k=n(17),j=n.n(k),y=12345,O=1103515245,x=Math.pow(2,31),M=16,N=16,A=1,F=1,P=32,W=32,z=32,B=32;var C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{get currentSeed(){return e},reset:function(t){e=t},get:function(){return(e=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y;return((arguments.length>2&&void 0!==arguments[2]?arguments[2]:O)*e+t)%(arguments.length>3&&void 0!==arguments[3]?arguments[3]:x)}(e))/x}}}();function I(e){r.clearRect(0,0,r.canvas.width,r.canvas.height);for(var t=P;t<r.canvas.height-W;t+=N){C.reset(t);for(var n=z;n<r.canvas.width-B;n+=M){var a=C.get(),c=16*a,o=16*a,l=a*Math.PI*2;r.fillStyle="#000",r.fillRect(n,t,A+Math.sin(l+e/1e3)*c,F+Math.cos(l+e/1e3)*o)}}i=window.requestAnimationFrame(I)}function R(){a.width=a.clientWidth,a.height=a.clientHeight}var S=Object(c.lazy)(function(){return Promise.all([n.e(3),n.e(1)]).then(n.bind(null,52))}),q=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this.refs.canvas;console.log(e),r=(a=e).getContext("2d"),window.addEventListener("resize",R),window.dispatchEvent(new Event("resize")),i=window.requestAnimationFrame(I)}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(i)}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("canvas",{ref:"canvas",className:"background"}),o.a.createElement(b.a,{className:"App-Inside"},o.a.createElement("img",{src:g.a,className:"Pic",alt:"Myself"}),o.a.createElement("p",null,"Building beautiful and awesome software!"),o.a.createElement("div",null,o.a.createElement("a",{href:j.a},o.a.createElement("i",{className:"fa fa-file-pdf-o fa-2x"})),o.a.createElement("a",{href:"https://github.com/Apoorv-Mittal",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("i",{className:"fa fa-github fa-2x"})),o.a.createElement("a",{href:"https://www.linkedin.com/in/apoorv-mittal/",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("i",{className:"fa fa-linkedin fa-2x"})))),o.a.createElement(c.Suspense,{fallback:o.a.createElement("div",null,"Loading...")},o.a.createElement(S,null)))}}]),t}(c.Component),J=(n(35),function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return o.a.createElement(b.a,{className:"App"},o.a.createElement(v.a,{exact:!0,path:"/",render:function(e){return o.a.createElement(q,null)}}))}}]),t}(c.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(u.a,{basename:""},o.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,4,2]]]);
//# sourceMappingURL=main.a985bf1e.chunk.js.map