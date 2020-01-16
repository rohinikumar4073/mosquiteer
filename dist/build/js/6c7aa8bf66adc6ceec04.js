(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{601:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(0),o=n.n(r),i=n(163);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,l(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props.children;return o.a.createElement("div",null,o.a.createElement("header",{className:"hero is-light"},o.a.createElement("div",{className:"hero-head container"},o.a.createElement("nav",{className:"navbar has-shadow",role:"navigation","aria-label":"main navigation"},o.a.createElement("div",{className:"navbar-brand"},o.a.createElement("span",{className:"navbar-item"}),o.a.createElement(i.c,{className:"navbar-item is--brand",to:"/dashboard"},"Dashboard"),o.a.createElement(i.c,{to:"/logout",className:"navbar-item is-pulled-right"},"Logout"))))),o.a.createElement("br",null),o.a.createElement("div",{className:"wrapper container p-l-md p-r-md"},o.a.createElement("div",{className:"columns"},o.a.createElement("main",{className:"column main"},e))))}}])&&s(n.prototype,r),a&&s(n,a),t}(o.a.PureComponent)},609:function(e,t,n){"use strict";t.a={getAllMosquitoBreeding:"http://localhost:8080/getAllMosquitoBreeding",reportMosquitoBreeding:"http://localhost:8080/reportMosquitoBreeding"}},610:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o={lines:12,length:7,width:5,radius:10,scale:1,corners:1,color:"#000",fadeColor:"transparent",animation:"spinner-line-fade-default",rotate:0,direction:1,speed:1,zIndex:2e9,className:"spinner",top:"50%",left:"50%",shadow:"0 0 1px transparent",position:"absolute"},i=function(){function e(e){void 0===e&&(e={}),this.opts=r(r({},o),e)}return e.prototype.spin=function(e){return this.stop(),this.el=document.createElement("div"),this.el.className=this.opts.className,this.el.setAttribute("role","progressbar"),a(this.el,{position:this.opts.position,width:0,zIndex:this.opts.zIndex,left:this.opts.left,top:this.opts.top,transform:"scale("+this.opts.scale+")"}),e&&e.insertBefore(this.el,e.firstChild||null),function(e,t){var n=Math.round(t.corners*t.width*500)/1e3+"px",r="none";!0===t.shadow?r="0 2px 4px #000":"string"==typeof t.shadow&&(r=t.shadow);for(var o=function(e){for(var t=/^\s*([a-zA-Z]+\s+)?(-?\d+(\.\d+)?)([a-zA-Z]*)\s+(-?\d+(\.\d+)?)([a-zA-Z]*)(.*)$/,n=[],r=0,o=e.split(",");r<o.length;r++){var i=o[r].match(t);if(null!==i){var a=+i[2],s=+i[5],c=i[4],l=i[7];0!==a||c||(c=l),0!==s||l||(l=c),c===l&&n.push({prefix:i[1]||"",x:a,y:s,xUnits:c,yUnits:l,end:i[8]})}}return n}(r),i=0;i<t.lines;i++){var l=~~(360/t.lines*i+t.rotate),u=a(document.createElement("div"),{position:"absolute",top:-t.width/2+"px",width:t.length+t.width+"px",height:t.width+"px",background:s(t.fadeColor,i),borderRadius:n,transformOrigin:"left",transform:"rotate("+l+"deg) translateX("+t.radius+"px)"}),p=i*t.direction/t.lines/t.speed;p-=1/t.speed;var d=a(document.createElement("div"),{width:"100%",height:"100%",background:s(t.color,i),borderRadius:n,boxShadow:c(o,l),animation:1/t.speed+"s linear "+p+"s infinite "+t.animation});u.appendChild(d),e.appendChild(u)}}(this.el,this.opts),this},e.prototype.stop=function(){return this.el&&("undefined"!=typeof requestAnimationFrame?cancelAnimationFrame(this.animateId):clearTimeout(this.animateId),this.el.parentNode&&this.el.parentNode.removeChild(this.el),this.el=void 0),this},e}();function a(e,t){for(var n in t)e.style[n]=t[n];return e}function s(e,t){return"string"==typeof e?e:e[t%e.length]}function c(e,t){for(var n=[],r=0,o=e;r<o.length;r++){var i=o[r],a=l(i.x,i.y,t);n.push(i.prefix+a[0]+i.xUnits+" "+a[1]+i.yUnits+i.end)}return n.join(", ")}function l(e,t,n){var r=n*Math.PI/180,o=Math.sin(r),i=Math.cos(r);return[Math.round(1e3*(e*i+t*o))/1e3,Math.round(1e3*(-e*o+t*i))/1e3]}},611:function(e,t,n){e.exports={"spinner-line-fade-more":"spinner-line-fade-more","spinner-line-fade-quick":"spinner-line-fade-quick","spinner-line-fade-default":"spinner-line-fade-default","spinner-line-shrink":"spinner-line-shrink"}},644:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var r=n(0),o=n.n(r),i=n(607),a=n.n(i),s=n(601),c=n(609),l=n(610);n(611);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(n=d(this,(e=f(t)).call.apply(e,[this].concat(o)))).loadMap=function(e){document.querySelector(".disease-breeding-visualization")&&function(){document.querySelector(".disease-breeding-visualization").innerHTML="";for(var t=new google.maps.Map(document.querySelector(".disease-breeding-visualization"),{zoom:13,center:{lat:17.4415342,lng:78.3820794},mapTypeId:"terrain"}),r=e,o=function(o){var i=r[o],s=new google.maps.LatLng(i.latitude,i.longitude),l=new google.maps.Marker({position:s,map:t,index:o}),u=n.createInfoMap,p=n.createInfoMapWithSpinner,d=o;google.maps.event.addListener(l,"click",(function(){var n=document.createElement("div");n.classList.add("info-marker");p(n);new google.maps.InfoWindow({content:n}).open(t,l),a.a.get("".concat(c.a.getAllMosquitoBreeding,"/").concat(e[d]._id)).then((function(e){n.innerHTML=u(e.data)}))}))},i=0;i<r.length;i++)o(i)}()},n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),n=t,(r=[{key:"createInfoMap",value:function(e){var t="data:image/png;base64,".concat(e.img);return"<div class='wrapper-vis'>\n       <div class='description'>".concat(e.description," </div>\n       <div class='reported-by'> reported by : ").concat(e.user_id," </div>\n        <img src=").concat(t," width='200'>   \n     \n      </div>")}},{key:"createInfoMapWithSpinner",value:function(e){var t=(new l.a).spin();return e.appendChild(t.el),t}},{key:"onCordinatesSet",value:function(){this.props.onCordinatesSet(this.state.cords)}},{key:"componentDidMount",value:function(){var e=this,t=(new l.a).spin();document.body.append(t.el),a.a.get(c.a.getAllMosquitoBreeding).then((function(n){t.stop(),e.loadMap(n.data)}))}},{key:"render",value:function(){return o.a.createElement(s.a,null,o.a.createElement("div",{className:"columns"},o.a.createElement("div",{className:"disease-breeding-visualization columns"})))}}])&&p(n.prototype,r),i&&p(n,i),t}(o.a.Component)}}]);