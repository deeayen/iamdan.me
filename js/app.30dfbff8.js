(function(e){function t(t){for(var r,o,s=t[0],c=t[1],l=t[2],p=0,f=[];p<s.length;p++)o=s[p],a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={1:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;i.push([5,0]),n()})({"0ifB":function(e,t,n){"use strict";var r=n("XAyf"),a=n.n(r);a.a},5:function(e,t,n){e.exports=n("Vtdi")},"6TUI":function(e,t,n){},Vtdi:function(e,t,n){"use strict";n.r(t);n("VRzm");var r=n("Kw5r"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),e._v(" "),n("section",[n("h2",[e._v("I have helped build")]),e._v(" "),n("ul",{staticClass:"portfolio"},e._l(e.portfolio.entries,function(t,r){return n("PortfolioEntry",{key:r,attrs:{entry:t,imagePath:e.portfolio.imagePath}})}))]),e._v(" "),e._m(0),e._v(" "),e._m(1)],1)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("h2",[e._v("Get in touch")]),e._v(" "),n("form",{attrs:{action:"https://formspree.io/danyoungnz@gmail.com",method:"POST"}},[n("input",{attrs:{type:"email",name:"_replyto",placeholder:"Your email address"}}),e._v(" "),n("input",{attrs:{type:"text",name:"name",placeholder:"Your name"}}),e._v(" "),n("input",{attrs:{type:"text",name:"_subject",placeholder:"Subject"}}),e._v(" "),n("textarea",{attrs:{name:"message",placeholder:"Your message"}}),e._v(" "),n("input",{attrs:{type:"submit",value:"Send"}})]),e._v(" "),n("ul",{staticClass:"social-buttons"},[n("li",[n("a",{attrs:{href:"https://linkedin.com/in/dansalias"}},[n("img",{attrs:{src:"images/icons/linkedin.svg"}}),e._v("LinkedIn")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/dansalias"}},[n("img",{attrs:{src:"images/icons/github.svg"}}),e._v("GitHub")])]),e._v(" "),n("li",[n("a",{attrs:{href:"/daniel_young_resume_18-06.pdf"}},[n("img",{attrs:{src:"images/icons/file.svg"}}),e._v("Résumé")])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[e._v("\n    Portrait by "),n("a",{attrs:{href:"https://andicrown.com"}},[e._v("Andi Crown Photography")]),e._v(". Icons by "),n("a",{attrs:{href:"https://fontawesome.com"}},[e._v("Font Awesome")]),e._v(". Source code on "),n("a",{attrs:{href:"https://github.com/d4n13ly/iamdan.me"}},[e._v("GitHub")]),e._v(".\n  ")])}],o=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("div",{attrs:{id:"profile-image"}},[n("img",{attrs:{src:"images/me.jpg"}})]),e._v(" "),n("section",[n("h1",[e._v("Hello! I am Dan.")]),e._v(" "),n("p",[e._v("I am a software developer currently based in Auckland, New Zealand.")]),e._v(" "),n("p",[e._v("I specialise in Full-Stack Web Application Development, DevOps and Cloud Architecture.")])])])}],c=(n("dY9C"),n("KHd+")),l={},u=Object(c["a"])(l,o,s,!1,null,null,null),p=u.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"portfolio-entry"},[n("a",{style:{background:e.entry.background},attrs:{title:e.entry.name,href:e.entry.url}},[n("img",{attrs:{src:e.imagePath+e.entry.image}})])])},m=[],d={props:["entry","imagePath"]},h=d,v=(n("0ifB"),Object(c["a"])(h,f,m,!1,null,null,null)),g=v.exports,_={imagePath:"images/portfolio/",entries:[{name:"Ballance",image:"ballance.png",background:"#ffffff",url:"https://ballance.co.nz/myballance"},{name:"PrimePanels",image:"primepanels.svg",background:"#e8e4df",url:"http://www.primepanels.co.nz"},{name:"Quicksense",image:"quicksense.png",background:"#2947b2",url:"https://quicksense.org"},{name:"Bachcare",image:"bachcare.svg",background:"#ffffff",url:"https://www.bachcare.co.nz/"},{name:"YourDrive",image:"yourdrive.png",background:"#3e3d3f",url:"https://yourdrive.co.nz/"},{name:"Weirdly",image:"weirdly.png",background:"#00c7a5",url:"https://weirdlyhub.com/"}]},b={name:"app",data:function(){return{portfolio:_}},components:{Header:p,PortfolioEntry:g}},y=b,w=(n("nNx0"),Object(c["a"])(y,a,i,!1,null,null,null)),k=w.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(k)}}).$mount("#app")},XAyf:function(e,t,n){},cIV4:function(e,t,n){},dY9C:function(e,t,n){"use strict";var r=n("6TUI"),a=n.n(r);a.a},nNx0:function(e,t,n){"use strict";var r=n("cIV4"),a=n.n(r);a.a}});
//# sourceMappingURL=app.30dfbff8.js.map