(function(e){function t(t){for(var r,c,i=t[0],s=t[1],l=t[2],u=0,p=[];u<i.length;u++)c=i[u],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function c(e){return i.p+"js/"+({login:"login"}[e]||e)+"."+{login:"e92b81c1"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=c(e);var l=new Error;o=function(t){s.onerror=s.onload=null,clearTimeout(u);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}a[e]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},ba8c:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(e,t){var n=Object(r["w"])("router-view");return Object(r["r"])(),Object(r["d"])(n)}var o=n("6b0d"),c=n.n(o);const i={},s=c()(i,[["render",a]]);var l=s,u=n("1da1"),f=(n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),p=(n("4de4"),{class:"w-20 flex h-screen"}),d={class:"w-20 bg-green-400 py-4"},b={class:"h-full flex flex-col justify-between text-white"},g={class:"flex flex-col gap-4"},O={key:0,class:"flex flex-col gap-2"},v={class:"flex justify-center"},w=["src"],j={class:"flex justify-center"};function h(e,t,n,a,o,c){var i=Object(r["w"])("installation-component");return Object(r["r"])(),Object(r["f"])("div",p,[Object(r["g"])("div",d,[Object(r["g"])("div",b,[Object(r["g"])("div",g,[(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["v"])(e.installations.filter((function(e){return e.accessToken})),(function(t){return Object(r["r"])(),Object(r["d"])(i,{key:t.id,data:t,onClick:function(n){return e.installationOnClick(t)}},null,8,["data","onClick"])})),128))]),e.user?(Object(r["r"])(),Object(r["f"])("div",O,[Object(r["g"])("div",v,[Object(r["g"])("img",{src:e.user.userpic,class:"w-12 rounded-full"},null,8,w)]),Object(r["g"])("div",j,[Object(r["g"])("a",{href:"#",onClick:t[0]||(t[0]=Object(r["B"])((function(){return e.logout&&e.logout.apply(e,arguments)}),["prevent"])),class:"text-xs"},"Logout")])])):Object(r["e"])("",!0)])])])}var m=n("b85c"),y=n("5530"),x=(n("e9c4"),n("d81d"),n("7db0"),n("25f0"),n("9861"),n("bc3a")),k=n.n(x),S=(n("b0c0"),{class:"flex flex-col gap-2 cursor-pointer"}),I={class:"flex justify-center"},_=["src"],A={key:1,class:"w-12 h-12 rounded-full bg-gray-200"},J={class:"px-2 h-3"},P={key:0,class:"truncate text-xs"},C={key:1,class:"h-full rounded-sm bg-gray-200"};function N(e,t,n,a,o,c){return Object(r["r"])(),Object(r["f"])("div",S,[Object(r["g"])("div",I,[e.installationInfo&&e.installationInfo.logo.image.thumbs["64x64@2x"]?(Object(r["r"])(),Object(r["f"])("img",{key:0,src:e.installationInfo.logo.image.thumbs["64x64@2x"].url,alt:"",class:"w-12 h-12 rounded-full"},null,8,_)):(Object(r["r"])(),Object(r["f"])("div",A))]),Object(r["g"])("div",J,[e.installationInfo?(Object(r["r"])(),Object(r["f"])("div",P,Object(r["y"])(e.installationInfo.name),1)):(Object(r["r"])(),Object(r["f"])("div",C))])])}var R=Object(r["h"])({props:{data:{type:Object,required:!0}},setup:function(e){var t=Object(r["u"])(JSON.parse(window.localStorage.getItem("installation_".concat(e.data.id)))||null);return Object(r["A"])(t,(function(t){window.localStorage.setItem("installation_".concat(e.data.id),JSON.stringify(t))}),{deep:!0}),Object(r["p"])(Object(u["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,k.a.get("".concat(e.data.url,"/api.php/webasyst.getInfo"),{headers:{Authorization:"Bearer ".concat(e.data.accessToken)}});case 2:r=n.sent,a=r.data,t.value=a;case 5:case"end":return n.stop()}}),n)})))),{installationInfo:t}}});const T=c()(R,[["render",N]]);var D=T,L=Object(r["h"])({components:{InstallationComponent:D},setup:function(){var e=Object(r["u"])(JSON.parse(window.localStorage.getItem("WAID_user"))||null),t=Object(r["u"])(JSON.parse(window.localStorage.getItem("WAID_installations"))||[]);console.log(JSON.parse(window.localStorage.getItem("WAID_installations"))),Object(r["A"])(e,(function(e){window.localStorage.setItem("WAID_user",JSON.stringify(e))})),Object(r["A"])(t,(function(e){window.localStorage.setItem("WAID_installations",JSON.stringify(e))}),{deep:!0});var n=function(){window.appState.logout&&window.appState.logout()},a=function(e){window.appState.openAppInView(JSON.parse(JSON.stringify(e)))};return Object(r["n"])(Object(u["a"])(regeneratorRuntime.mark((function n(){var r,a,o,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,window.appState.token();case 2:return r=n.sent,a=k.a.create({headers:{Authorization:"Bearer ".concat(r)}}),n.next=6,a.get("https://www.webasyst.com/id/api/v1/profile/");case 6:o=n.sent,c=o.data,e.value=c,a.get("https://www.webasyst.com/id/api/v1/installations/").then((function(e){t.value=e.data.map((function(e){return Object(y["a"])(Object(y["a"])({},e),t.value.find((function(t){return t.id===e.id})))}));var n=t.value.map((function(e){return e.id}));a.post("https://www.webasyst.com/id/api/v1/auth/client/",{client_id:n}).then((function(e){var n,r=Object(m["a"])(t.value);try{var a=function(){var t=n.value,r=new URLSearchParams({code:e.data[t.id],scope:"cash,webasyst",client_id:"CashDesktopApp"}).toString();k.a.post("".concat(t.url,"/api.php/token-headless"),r).then((function(e){t.accessToken=e.data.access_token}))};for(r.s();!(n=r.n()).done;)a()}catch(o){r.e(o)}finally{r.f()}}))}));case 10:case"end":return n.stop()}}),n)})))),{user:e,installations:t,logout:n,installationOnClick:a}}});const W=c()(L,[["render",h]]);var q=W,E=[{path:"/",name:"Home",component:q,meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:function(){return n.e("login").then(n.bind(null,"a55b"))}}],M=Object(f["a"])({history:Object(f["b"])(),routes:E});M.beforeEach(function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,n,r){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.matched.some((function(e){return e.meta.requiresAuth}))){e.next=7;break}return e.next=3,window.appState.token();case 3:a=e.sent,a?r():r({name:"Login"}),e.next=8;break;case 7:r();case 8:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}());var B=M,z=n("5502"),H=Object(z["a"])({state:{},mutations:{},actions:{},modules:{}});n("ba8c");Object(r["c"])(l).use(H).use(B).mount("#app")}});
//# sourceMappingURL=app.b44a2c9c.js.map