(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{601:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(0),o=n.n(r),a=n(163);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,u(t).apply(this,arguments))}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props.children;return o.a.createElement("div",null,o.a.createElement("header",{className:"hero is-light"},o.a.createElement("div",{className:"hero-head container"},o.a.createElement("nav",{className:"navbar has-shadow",role:"navigation","aria-label":"main navigation"},o.a.createElement("div",{className:"navbar-brand"},o.a.createElement("span",{className:"navbar-item"}),o.a.createElement(a.c,{className:"navbar-item is--brand",to:"/dashboard"},"Dashboard"),o.a.createElement(a.c,{to:"/logout",className:"navbar-item is-pulled-right"},"Logout"))))),o.a.createElement("br",null),o.a.createElement("div",{className:"wrapper container p-l-md p-r-md"},o.a.createElement("div",{className:"columns"},o.a.createElement("main",{className:"column main"},e))))}}])&&c(n.prototype,r),i&&c(n,i),t}(o.a.PureComponent)},602:function(e,t,n){"use strict";t.a={getItem:function(e){return e&&decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null},setItem:function(e,t,n,r,o,a){if(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))return!1;var i="";if(n)switch(n.constructor){case Number:i=n===1/0?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+n;break;case String:i="; expires="+n;break;case Date:i="; expires="+n.toUTCString()}return document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+i+(o?"; domain="+o:"")+(r?"; path="+r:"")+(a?"; secure":""),!0},removeItem:function(e,t,n){return!!this.hasItem(e)&&(document.cookie=encodeURIComponent(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(n?"; domain="+n:"")+(t?"; path="+t:""),!0)},hasItem:function(e){return!(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))&&new RegExp("(?:^|;\\s*)"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)},keys:function(){for(var e=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),t=e.length,n=0;n<t;n++)e[n]=decodeURIComponent(e[n]);return e}}},605:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(0),o=n.n(r),a=n(7),i=n(602);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=u(this,l(t).call(this,e))).redirectUrl="/login",n.state={initialized:!1,allow:!1},n}var n,r,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){"allowmein"===i.a.getItem("secretKey")?this.setState({initialized:!0,allow:!0}):this.setState({initialized:!0,allow:!1})}},{key:"render",value:function(){var e=this,t=this.state,n=t.initialized,r=t.allow,i=this.props.children;return n?r?i:o.a.createElement(a.b,{render:function(t){var n=t.staticContext;return n&&(n.status=403),o.a.createElement(a.a,{to:e.redirectUrl})}}):null}}])&&s(n.prototype,r),c&&s(n,c),t}(o.a.Component)},623:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var r=n(0),o=n.n(r);n(607),n(605),n(601);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=c(this,s(t).call(this,e))).handleChange=function(e){console.log("value",e.target.value),n.setState({user_id:e.target.value})},n.handleAddressChange=function(e){n.setState({address:e.target.value})},n.handleDescriptionChange=function(e){n.setState({description:e.target.value})},n.submitDetails=function(e){n.props.submitDetails({user_id:n.state.user_id,address:n.state.user_id,description:n.state.description})},n.state={data:{user_id:""},address:""},n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,e),n=t,(r=[{key:"load",value:function(){var e,t;return regeneratorRuntime.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,regeneratorRuntime.awrap(fetch("https://maps.googleapis.com/maps/api/geocode/json?latlng=".concat(this.props.latitude,",").concat(this.props.longitude,"&key=AIzaSyCkq8e6Wp58o-iTjAwhbAxVeScdhLInsTI")));case 2:if(!(e=n.sent).ok){n.next=10;break}return n.next=6,regeneratorRuntime.awrap(e.json());case 6:t=n.sent,this.setState({address:t.plus_code.compound_code}),n.next=11;break;case 10:alert("HTTP-Error: "+e.status);case 11:case"end":return n.stop()}}),null,this)}},{key:"componentDidMount",value:function(){this.load()}},{key:"render",value:function(){return o.a.createElement("div",{className:"details"},o.a.createElement("div",{className:"columns"},o.a.createElement("label",{className:"column is-2 "},"Name:"),o.a.createElement("input",{className:"column",type:"text",name:"name",onChange:this.handleChange})),o.a.createElement("div",{className:"columns"},o.a.createElement("label",{className:"column is-2"},"Address:"),o.a.createElement("textarea",{className:"column",type:"textarea",name:"address",value:this.state.address,onChange:this.handleAddressChange})),o.a.createElement("div",{className:"columns"},o.a.createElement("label",{className:"column is-2"},"Description:"),o.a.createElement("textarea",{className:"column",type:"textarea",name:"description",onChange:this.handleDescriptionChange})),o.a.createElement("button",{className:"button",id:"submit",onClick:this.submitDetails},"Submit"))}}])&&i(n.prototype,r),a&&i(n,a),t}(o.a.Component)}}]);