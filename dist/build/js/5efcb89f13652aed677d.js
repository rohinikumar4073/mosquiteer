(window.webpackJsonp=window.webpackJsonp||[]).push([[1,8,14],{601:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var o=n(0),r=n.n(o),a=n(163);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,u(t).apply(this,arguments))}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){var e=this.props.children;return r.a.createElement("div",null,r.a.createElement("header",{className:"hero is-light"},r.a.createElement("div",{className:"hero-head container"},r.a.createElement("nav",{className:"navbar has-shadow",role:"navigation","aria-label":"main navigation"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("span",{className:"navbar-item"}),r.a.createElement(a.c,{className:"navbar-item is--brand",to:"/dashboard"},"Dashboard"),r.a.createElement(a.c,{to:"/logout",className:"navbar-item is-pulled-right"},"Logout"))))),r.a.createElement("br",null),r.a.createElement("div",{className:"wrapper container p-l-md p-r-md"},r.a.createElement("div",{className:"columns"},r.a.createElement("main",{className:"column main"},e))))}}])&&c(n.prototype,o),i&&c(n,i),t}(r.a.PureComponent)},602:function(e,t,n){"use strict";t.a={getItem:function(e){return e&&decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null},setItem:function(e,t,n,o,r,a){if(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))return!1;var i="";if(n)switch(n.constructor){case Number:i=n===1/0?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+n;break;case String:i="; expires="+n;break;case Date:i="; expires="+n.toUTCString()}return document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+i+(r?"; domain="+r:"")+(o?"; path="+o:"")+(a?"; secure":""),!0},removeItem:function(e,t,n){return!!this.hasItem(e)&&(document.cookie=encodeURIComponent(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(n?"; domain="+n:"")+(t?"; path="+t:""),!0)},hasItem:function(e){return!(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))&&new RegExp("(?:^|;\\s*)"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)},keys:function(){for(var e=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),t=e.length,n=0;n<t;n++)e[n]=decodeURIComponent(e[n]);return e}}},605:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var o=n(0),r=n.n(o),a=n(7),i=n(602);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=u(this,l(t).call(this,e))).redirectUrl="/login",n.state={initialized:!1,allow:!1},n}var n,o,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(o=[{key:"componentDidMount",value:function(){"allowmein"===i.a.getItem("secretKey")?this.setState({initialized:!0,allow:!0}):this.setState({initialized:!0,allow:!1})}},{key:"render",value:function(){var e=this,t=this.state,n=t.initialized,o=t.allow,i=this.props.children;return n?o?i:r.a.createElement(a.b,{render:function(t){var n=t.staticContext;return n&&(n.status=403),r.a.createElement(a.a,{to:e.redirectUrl})}}):null}}])&&s(n.prototype,o),c&&s(n,c),t}(r.a.Component)},609:function(e,t,n){"use strict";t.a={getAllMosquitoBreeding:"http://localhost:8080/getAllMosquitoBreeding",reportMosquitoBreeding:"http://localhost:8080/reportMosquitoBreeding"}},610:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=function(){return(o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},r={lines:12,length:7,width:5,radius:10,scale:1,corners:1,color:"#000",fadeColor:"transparent",animation:"spinner-line-fade-default",rotate:0,direction:1,speed:1,zIndex:2e9,className:"spinner",top:"50%",left:"50%",shadow:"0 0 1px transparent",position:"absolute"},a=function(){function e(e){void 0===e&&(e={}),this.opts=o(o({},r),e)}return e.prototype.spin=function(e){return this.stop(),this.el=document.createElement("div"),this.el.className=this.opts.className,this.el.setAttribute("role","progressbar"),i(this.el,{position:this.opts.position,width:0,zIndex:this.opts.zIndex,left:this.opts.left,top:this.opts.top,transform:"scale("+this.opts.scale+")"}),e&&e.insertBefore(this.el,e.firstChild||null),function(e,t){var n=Math.round(t.corners*t.width*500)/1e3+"px",o="none";!0===t.shadow?o="0 2px 4px #000":"string"==typeof t.shadow&&(o=t.shadow);for(var r=function(e){for(var t=/^\s*([a-zA-Z]+\s+)?(-?\d+(\.\d+)?)([a-zA-Z]*)\s+(-?\d+(\.\d+)?)([a-zA-Z]*)(.*)$/,n=[],o=0,r=e.split(",");o<r.length;o++){var a=r[o].match(t);if(null!==a){var i=+a[2],c=+a[5],s=a[4],u=a[7];0!==i||s||(s=u),0!==c||u||(u=s),s===u&&n.push({prefix:a[1]||"",x:i,y:c,xUnits:s,yUnits:u,end:a[8]})}}return n}(o),a=0;a<t.lines;a++){var u=~~(360/t.lines*a+t.rotate),l=i(document.createElement("div"),{position:"absolute",top:-t.width/2+"px",width:t.length+t.width+"px",height:t.width+"px",background:c(t.fadeColor,a),borderRadius:n,transformOrigin:"left",transform:"rotate("+u+"deg) translateX("+t.radius+"px)"}),p=a*t.direction/t.lines/t.speed;p-=1/t.speed;var f=i(document.createElement("div"),{width:"100%",height:"100%",background:c(t.color,a),borderRadius:n,boxShadow:s(r,u),animation:1/t.speed+"s linear "+p+"s infinite "+t.animation});l.appendChild(f),e.appendChild(l)}}(this.el,this.opts),this},e.prototype.stop=function(){return this.el&&("undefined"!=typeof requestAnimationFrame?cancelAnimationFrame(this.animateId):clearTimeout(this.animateId),this.el.parentNode&&this.el.parentNode.removeChild(this.el),this.el=void 0),this},e}();function i(e,t){for(var n in t)e.style[n]=t[n];return e}function c(e,t){return"string"==typeof e?e:e[t%e.length]}function s(e,t){for(var n=[],o=0,r=e;o<r.length;o++){var a=r[o],i=u(a.x,a.y,t);n.push(a.prefix+i[0]+a.xUnits+" "+i[1]+a.yUnits+a.end)}return n.join(", ")}function u(e,t,n){var o=n*Math.PI/180,r=Math.sin(o),a=Math.cos(o);return[Math.round(1e3*(e*a+t*r))/1e3,Math.round(1e3*(-e*r+t*a))/1e3]}},611:function(e,t,n){e.exports={"spinner-line-fade-more":"spinner-line-fade-more","spinner-line-fade-quick":"spinner-line-fade-quick","spinner-line-fade-default":"spinner-line-fade-default","spinner-line-shrink":"spinner-line-shrink"}},622:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var o=n(0),r=n.n(o),a=n(163);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=s(this,(e=u(t)).call.apply(e,[this].concat(r)))).loadMap=function(e){if(document.querySelector(".mosquito-breeding-map")){document.querySelector(".mosquito-breeding-map").innerHTML="";var t={lat:e.coords.latitude,lng:e.coords.longitude};n.setState({cords:t});var o=new window.google.maps.Map(document.querySelector(".mosquito-breeding-map"),{zoom:15,center:t});n.props.onCordinatesSet(e.coords);var r=new google.maps.Marker({position:t,map:o,draggable:!0}),a=n.props.onCordinatesSet;r.addListener("dragend",(function(){a({latitude:this.position.lat(),longitude:this.position.lng()})}))}},n}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,e),n=t,(o=[{key:"getLocation",value:function(){window.navigator.geolocation?window.navigator.geolocation.getCurrentPosition(this.loadMap):console.log("Geo Location not supported by browser")}},{key:"componentDidMount",value:function(){this.loadMap({coords:{latitude:17.433095129274008,longitude:78.3736156970283}}),this.getLocation()}},{key:"render",value:function(){return r.a.createElement("div",{className:"container-child"},r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"mosquito-breeding-map columns"})),r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column"},r.a.createElement(a.c,{to:"/Details"},r.a.createElement("button",{className:"button"}," Next")))))}}])&&c(n.prototype,o),i&&c(n,i),t}(r.a.Component)},623:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var o=n(0),r=n.n(o);n(607),n(605),n(601);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=c(this,s(t).call(this,e))).handleChange=function(e){console.log("value",e.target.value),n.setState({user_id:e.target.value})},n.handleAddressChange=function(e){n.setState({address:e.target.value})},n.handleDescriptionChange=function(e){n.setState({description:e.target.value})},n.submitDetails=function(e){n.props.submitDetails({user_id:n.state.user_id,address:n.state.user_id,description:n.state.description})},n.state={data:{user_id:""},address:""},n}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,e),n=t,(o=[{key:"load",value:function(){var e,t;return regeneratorRuntime.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,regeneratorRuntime.awrap(fetch("https://maps.googleapis.com/maps/api/geocode/json?latlng=".concat(this.props.latitude,",").concat(this.props.longitude,"&key=AIzaSyCkq8e6Wp58o-iTjAwhbAxVeScdhLInsTI")));case 2:if(!(e=n.sent).ok){n.next=10;break}return n.next=6,regeneratorRuntime.awrap(e.json());case 6:t=n.sent,this.setState({address:t.plus_code.compound_code}),n.next=11;break;case 10:alert("HTTP-Error: "+e.status);case 11:case"end":return n.stop()}}),null,this)}},{key:"componentDidMount",value:function(){this.load()}},{key:"render",value:function(){return r.a.createElement("div",{className:"details"},r.a.createElement("div",{className:"columns"},r.a.createElement("label",{className:"column is-2 "},"Name:"),r.a.createElement("input",{className:"column",type:"text",name:"name",onChange:this.handleChange})),r.a.createElement("div",{className:"columns"},r.a.createElement("label",{className:"column is-2"},"Address:"),r.a.createElement("textarea",{className:"column",type:"textarea",name:"address",value:this.state.address,onChange:this.handleAddressChange})),r.a.createElement("div",{className:"columns"},r.a.createElement("label",{className:"column is-2"},"Description:"),r.a.createElement("textarea",{className:"column",type:"textarea",name:"description",onChange:this.handleDescriptionChange})),r.a.createElement("button",{className:"button",id:"submit",onClick:this.submitDetails},"Submit"))}}])&&i(n.prototype,o),a&&i(n,a),t}(r.a.Component)},649:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(163);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=s(this,u(t).call(this,e))).handlePhotoUpload=function(e){return n._handlePhotoUpload(e.currentTarget,n.refs.photImg)},n}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,e),n=t,(o=[{key:"_handlePhotoUpload",value:function(e){this.props.onPictureTaken(e)}},{key:"render",value:function(){return r.a.createElement("div",{className:"container-child"},r.a.createElement("div",{className:"columns is-vcentered"},r.a.createElement("div",{className:"column is-vcentered"},r.a.createElement("input",{type:"file",id:"input-photo",accept:"image/*",onChange:this.handlePhotoUpload}),r.a.createElement("img",{id:"photoImage"}))),r.a.createElement("div",{className:"columns is-vcentered"},r.a.createElement("div",{className:"column "},r.a.createElement("button",{className:"button",onClick:function(){document.querySelector("#input-photo").click()}}," Take A Picture")),r.a.createElement("div",{className:"column "},r.a.createElement(a.c,{to:"/Location"},r.a.createElement("button",{className:"button"}," Next")))))}}])&&c(n.prototype,o),i&&c(n,i),t}(r.a.Component),f=n(623),d=n(622),m=n(601),h=n(607),b=n.n(h),y=n(609),v=n(610),g=(n(611),n(7));function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function O(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"default",(function(){return x}));d.default,f.default;var x=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=O(this,S(t).call(this,e))).submitDetails=function(e){event.preventDefault();var t=n.state.image,o=new FormData;o.append("avatar",t),o.append("user_id",e.user_id),o.append("latitude",n.state.latitude),o.append("longitude",n.state.longitude),o.append("address",e.address),o.append("description",e.description);var r=(new v.a).spin();document.body.append(r.el),b.a.post(y.a.reportMosquitoBreeding,o,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){r.stop(),n.setState({redirect:!0})})).catch((function(e){console.error("Image post failed: ",e)}))},n.onPictureTaken=function(e){var t=e.files,o=document.getElementById("photoImage");n.setState({image:t[0]});var r=new FileReader;r.readAsDataURL(t[0]),r.onload=function(e){o.src=e.target.result}},n.onCordinatesSet=function(e){n.setState(e)},n.state={image:""},n}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){return this.state.redirect?r.a.createElement(g.a,{to:{pathname:"/dashboard"}}):r.a.createElement(m.a,null,this.props.location.state?r.a.createElement(a.a,null,r.a.createElement("div",{className:"tabs"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(a.d,{to:"/Pictures",activeClassName:"is-active"},"Take Picture")),r.a.createElement("li",null,r.a.createElement(a.d,{to:"/Location",activeClassName:"is-active"},"Location")),r.a.createElement("li",null,r.a.createElement(a.d,{to:"/Details",activeClassName:"is-active"},"Details")))),r.a.createElement(g.d,null,r.a.createElement(g.b,{path:"/Pictures",children:r.a.createElement(p,{onPictureTaken:this.onPictureTaken})}),r.a.createElement(g.b,{path:"/Location",children:r.a.createElement(d.default,{onCordinatesSet:this.onCordinatesSet})}),r.a.createElement(g.b,{path:"/Details",children:r.a.createElement(f.default,{latitude:this.state.latitude,longitude:this.state.longitude,submitDetails:this.submitDetails})}))):r.a.createElement(g.a,{to:{pathname:"/Pictures",state:{redirect:!0}}}))}}])&&E(n.prototype,o),i&&E(n,i),t}(r.a.Component)}}]);