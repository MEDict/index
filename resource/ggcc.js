function f(){this.j=!1;this.h=null;this.u=void 0;this.o=1;this.s=this.v=0;this.i=null}function h(a){if(a.j)throw new TypeError("Generator is already running");a.j=!0}f.prototype.l=function(a){this.u=a};f.prototype.m=function(a){this.i={A:a,B:!0};this.o=this.v||this.s};f.prototype["return"]=function(a){this.i={"return":a};this.o=this.s};function l(a){this.g=new f;this.C=a}l.prototype.l=function(a){h(this.g);if(this.g.h)return m(this,this.g.h.next,a,this.g.l);this.g.l(a);return n(this)};
function p(a,b){h(a.g);var d=a.g.h;if(d)return m(a,"return"in d?d["return"]:function(c){return{value:c,done:!0}},b,a.g["return"]);a.g["return"](b);return n(a)}l.prototype.m=function(a){h(this.g);if(this.g.h)return m(this,this.g.h["throw"],a,this.g.l);this.g.m(a);return n(this)};
function m(a,b,d,c){try{var e=b.call(a.g.h,d);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.g.j=!1,e;var k=e.value}catch(g){return a.g.h=null,a.g.m(g),n(a)}a.g.h=null;c.call(a.g,k);return n(a)}function n(a){for(;a.g.o;)try{var b=a.C(a.g);if(b)return a.g.j=!1,{value:b.value,done:!1}}catch(d){a.g.u=void 0,a.g.m(d)}a.g.j=!1;if(a.g.i){b=a.g.i;a.g.i=null;if(b.B)throw b.A;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function q(a){this.next=function(b){return a.l(b)};this["throw"]=function(b){return a.m(b)};this["return"]=function(b){return p(a,b)};this[Symbol.iterator]=function(){return this}}function r(a){function b(c){return a.next(c)}function d(c){return a["throw"](c)}return new Promise(function(c,e){function k(g){g.done?c(g.value):Promise.resolve(g.value).then(b,d).then(k,e)}k(a.next())})}var t=document.getElementById("inp");document.getElementById("upl");var u=document.getElementById("paste");
t.value=document.getElementById("down").href=document.getElementById("p").innerText;function v(a){navigator.clipboard.readText().then(function(b){w(a,b)})}function w(a,b){var d=b.replace(/[\u00A0-\u9999<>&]/g,function(c){return"&#"+c.charCodeAt(0)+";"});document.getElementById("p").innerHTML=d;fetch("https://"+document.domain+"/"+encodeURIComponent(b),{headers:{D:"here"}}).then(function(c){if(c.ok)a.target.textContent="Done!";else throw Error("Network response was not ok.");})}
document.getElementById("copy").addEventListener("click",function(a){navigator.clipboard.writeText(document.getElementById("p").innerText).then(function(){a.target.textContent="Copied!"},function(){})},!1);u.addEventListener("click",function(a){event.target.textContent="Uploading...";v(a)},!1);document.getElementById("upl").addEventListener("click",function(a){t.value&&(event.target.textContent="Sending...",w(a,t.value))},!1);
document.addEventListener("paste",function(a){return r(new q(new l(function(b){if("inp"===document.activeElement.id)return b["return"]();a.preventDefault();u.textContent="Uploading...";v({target:u});b.o=0})))});
