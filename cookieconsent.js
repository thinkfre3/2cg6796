window.cookieconsent_options={message:"we use cookies to ensure you get the best experience on our website. ",dismiss:"Got it!",learnMore:"More info",link:"https://www.akomsentani.com/p/privacy.html",theme:""},function(){if(!window.hasCookieConsent){window.hasCookieConsent=!0;var e="cookieconsent_dismissed";if(!(document.cookie.indexOf(e)>-1)){"function"!=typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});var t,n={isArray:function(e){return"[object Array]"==Object.prototype.toString.call(e)},isObject:function(e){return"[object Object]"==Object.prototype.toString.call(e)},each:function(e,t,i,o){if(n.isObject(e)&&!o)for(var s in e)e.hasOwnProperty(s)&&t.call(i,e[s],s,e);else for(var r=0,c=e.length;c>r;r++)t.call(i,e[r],r,e)},merge:function(e,t){e&&n.each(t,function(t,i){n.isObject(t)&&n.isObject(e[i])?n.merge(e[i],t):e[i]=t})},bind:function(e,t){return function(){return e.apply(t,arguments)}},queryObject:function(e,t){var n,i=0,o=e;for(t=t.split(".");(n=t[i++])&&o.hasOwnProperty(n)&&(o=o[n]);)if(i===t.length)return o;return null},setCookie:function(e,t,n,i,o){n=n||365;var s=new Date;s.setDate(s.getDate()+n);var r=[e+"="+t,"expires="+s.toUTCString(),"path="+o||"/"];i&&r.push("domain="+i),document.cookie=r.join(";")},addEventListener:function(e,t,n){e.addEventListener?e.addEventListener(t,n):e.attachEvent("on"+t,n)}},i=function(){var e=function(t,i,o){return n.isArray(i)?n.each(i,function(n){e(t,n,o)}):void(t.addEventListener?t.addEventListener(i,o):t.attachEvent("on"+i,o))},t=function(e,t,i){var o=e.parentNode.querySelectorAll("["+t+"]");n.each(o,function(e){var n=e.getAttribute(t);i(e,n)},window,!0)},i=function(i,o){t(i,"data-cc-event",function(t,i){var s=i.split(":"),r=n.queryObject(o,s[1]);e(t,s[0],n.bind(r,o))})};return{build:function(e,o){n.isArray(e)&&(e=e.join(""));var s=function(e){var t=document.createElement("div");return t.innerHTML=e,t.children[0]}(e=function(e,t){return e.replace(/\{\{(.*?)\}\}/g,function(e,i){for(var o,s,r=i.split("||");s=r.shift();){if('"'===(s=s.trim())[0])return s.slice(1,s.length-1);if(o=n.queryObject(t,s))return o}return""})}(e,o));return i(s,o),function(e,i){t(e,"data-cc-if",function(e,t){n.queryObject(i,t)||e.parentNode.removeChild(e)})}(s,o),s}}}(),o={options:{message:"message ",dismiss:"Got it!",learnMore:"More info",link:null,target:"_self",container:null,theme:"dark-bottom",domain:null,path:"/",expiryDays:365,markup:['<div class="cc_banner-wrapper {{containerClasses}}">','<div class="cc_banner cc_container cc_container--open">','<a href="#null" data-cc-event="click:dismiss" target="_blank" class="cc_btn cc_btn_accept_all">{{options.dismiss}}</a>','<p class="cc_message">{{options.message}} <a data-cc-if="options.link" target="{{ options.target }}" class="cc_more_info" href="{{options.link || "#null"}}">{{options.learnMore}}</a></p>','<a class="cc_logo" target="_blank" href="/cookies/">Cookies</a>',"</div>","</div>"]},init:function(){var e=window.cookieconsent_options;e&&this.setOptions(e),this.setContainer(),this.options.theme?this.loadTheme(this.render):this.render()},setOptionsOnTheFly:function(e){this.setOptions(e),this.render()},setOptions:function(e){n.merge(this.options,e)},setContainer:function(){this.options.container?this.container=document.querySelector(this.options.container):this.container=document.body,this.containerClasses="",navigator.appVersion.indexOf("MSIE 8")>-1&&(this.containerClasses+=" cc_ie8")},loadTheme:function(e){var t=this.options.theme;-1===t.indexOf(".js")&&(t="/cookies/empty/"+t+".js");var i=document.createElement("script");i.type="text/javascript",i.src=t;var o=!1;i.onload=n.bind(function(){!o&&e&&(e.call(this),o=!0)},this),document.getElementsByTagName("body")[0].appendChild(i)},render:function(){this.element&&this.element.parentNode&&(this.element.parentNode.removeChild(this.element),delete this.element),this.element=i.build(this.options.markup,this),this.container.firstChild?this.container.insertBefore(this.element,this.container.firstChild):this.container.appendChild(this.element)},dismiss:function(e){e.preventDefault&&e.preventDefault(),e.returnValue=!1,this.setDismissedCookie(),this.container.removeChild(this.element)},setDismissedCookie:function(){n.setCookie(e,"yes",this.options.expiryDays,this.options.domain,this.options.path)}},s=!1;(t=function(){s||"complete"!=document.readyState||(o.init(),s=!0,window.update_cookieconsent_options=n.bind(o.setOptionsOnTheFly,o))})(),n.addEventListener(document,"readystatechange",t)}}}();
