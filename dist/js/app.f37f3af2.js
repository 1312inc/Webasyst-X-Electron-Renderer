(function(e){function t(t){for(var a,o,s=t[0],i=t[1],l=t[2],u=0,d=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);p&&p(t);while(d.length)d.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,o=1;o<n.length;o++){var i=n[o];0!==r[i]&&(a=!1)}a&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},c=[];function o(e){return s.p+"js/"+({login:"login"}[e]||e)+"."+{login:"2e9018f1"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=a);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.src=o(e);var l=new Error;c=function(t){i.onerror=i.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",l.name="ChunkLoadError",l.type=a,l.request=c,n[1](l)}r[e]=void 0}};var u=setTimeout((function(){c({type:"timeout",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var p=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"9cc2":function(e,t,n){"use strict";n("9d0d")},"9d0d":function(e,t,n){},a608:function(e,t,n){},b7d5:function(e,t,n){"use strict";n("a608")},ba8c:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23");function r(e,t){var n=Object(a["z"])("router-view");return Object(a["s"])(),Object(a["e"])(n)}var c=n("6b0d"),o=n.n(c);const s={},i=o()(s,[["render",r]]);var l=i,u=n("1da1"),p=(n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),d=function(e){return Object(a["v"])("data-v-a2f1199a"),e=e(),Object(a["t"])(),e},f={class:"flex w-full"},b={class:"w-20 flex h-screen"},h={class:"w-20 bg-green pt-8 pb-4"},j={class:"h-full flex flex-col space-y-4 text-white"},O=d((function(){return Object(a["h"])("div",{class:"h-4"},null,-1)})),v={class:"flex flex-grow overflow-y-auto flex-col gap-4"},g={key:0,class:"flex flex-col gap-2"},m={class:"flex justify-center"},w=["src"],x={class:"flex justify-center"},y={class:"flex-grow"};function k(e,t,n,r,c,o){var s=Object(a["z"])("installation-component"),i=Object(a["z"])("install-app");return Object(a["s"])(),Object(a["g"])("div",f,[Object(a["h"])("div",b,[Object(a["h"])("div",h,[Object(a["h"])("div",j,[O,Object(a["h"])("div",v,[Object(a["i"])(a["b"],{name:"list"},{default:Object(a["E"])((function(){return[(Object(a["s"])(!0),Object(a["g"])(a["a"],null,Object(a["y"])(e.sortedInstallations,(function(t,n){return Object(a["s"])(),Object(a["e"])(s,{key:t.id,data:t,onClick:function(n){return e.installationOnClick(t)},selected:0===n,class:"list-item"},null,8,["data","onClick","selected"])})),128))]})),_:1})]),e.user?(Object(a["s"])(),Object(a["g"])("div",g,[Object(a["h"])("div",m,[Object(a["h"])("img",{src:e.user.userpic,class:"w-12 rounded-full"},null,8,w)]),Object(a["h"])("div",x,[Object(a["h"])("a",{href:"#",onClick:t[0]||(t[0]=Object(a["F"])((function(){return e.logout&&e.logout.apply(e,arguments)}),["prevent"])),class:"text-xs"},"Logout")])])):Object(a["f"])("",!0)])])]),Object(a["h"])("div",y,[e.showInstallAppComponent?(Object(a["s"])(),Object(a["e"])(i,{key:0})):Object(a["f"])("",!0)])])}var _=n("3835"),S=n("b85c"),I=n("5530"),A=(n("4e82"),n("4de4"),n("e9c4"),n("d81d"),n("7db0"),n("25f0"),n("9861"),n("bc3a")),C=n.n(A),P=(n("b0c0"),{class:"flex flex-col gap-2 cursor-pointer"}),D={class:"flex justify-center"},T=["src"],J={key:1,class:"w-12 h-12 rounded-full bg-gray-200"},L={class:"px-2 h-3 text-center"},R={key:0,class:"truncate text-xs"},E={key:1,class:"h-full rounded-sm bg-gray-200"};function N(e,t,n,r,c,o){return Object(a["s"])(),Object(a["g"])("div",P,[Object(a["h"])("div",D,[e.data&&e.data.logo.image.thumbs["64x64@2x"]?(Object(a["s"])(),Object(a["g"])("img",{key:0,src:e.data.logo.image.thumbs["64x64@2x"].url,class:Object(a["o"])([{selected:e.selected},"userpic"]),alt:""},null,10,T)):(Object(a["s"])(),Object(a["g"])("div",J))]),Object(a["h"])("div",L,[e.data?(Object(a["s"])(),Object(a["g"])("div",R,Object(a["B"])(e.data.name),1)):(Object(a["s"])(),Object(a["g"])("div",E))])])}var W=Object(a["j"])({props:{data:{type:Object,required:!0},selected:{type:Boolean,default:!1}}});n("9cc2");const z=o()(W,[["render",N],["__scopeId","data-v-6fe061de"]]);var q=z,B={class:"w-full h-screen flex flex-col justify-center bg-green"},F={class:"text-center mb-8"},M=Object(a["h"])("img",{src:"cash.png",alt:"",class:"w-24 mx-auto mb-4"},null,-1),H=Object(a["h"])("div",{class:"text-xl text-white max-w-xl mx-auto mb-4"}," This app automatically shows all Webasyst account with the Cash Flow app installed. Don't see anything here? Head on to the Cash Flow app site and install the app. Then get back here! ",-1),U={class:"flex justify-center"};function V(e,t,n,r,c,o){return Object(a["s"])(),Object(a["g"])("div",B,[Object(a["h"])("div",F,[M,H,Object(a["h"])("div",U,[Object(a["h"])("button",{onClick:t[0]||(t[0]=Object(a["F"])((function(){return e.open&&e.open.apply(e,arguments)}),["prevent"]))},"Install")])])])}var G=Object(a["j"])({setup:function(){var e=function(){window.appState.openExternalLink("https://2.webasyst.ru/store/app/cash/")};return{open:e}}});const K=o()(G,[["render",V]]);var Q=K,X=Object(a["j"])({components:{InstallationComponent:q,InstallApp:Q},setup:function(){var e=Object(a["x"])(JSON.parse(window.localStorage.getItem("WAID_user"))||null),t=Object(a["x"])(JSON.parse(window.localStorage.getItem("WAID_installations"))||[]),n=Object(a["x"])(!1),r=Object(a["c"])((function(){return t.value.filter((function(e){return e.accessToken})).sort((function(e,t){return(e.last_use_datetime||0)>(t.last_use_datetime||0)?-1:(e.last_use_datetime||0)<(t.last_use_datetime||0)?1:0}))}));Object(a["D"])(e,(function(e){window.localStorage.setItem("WAID_user",JSON.stringify(e))})),Object(a["D"])(t,(function(e){window.localStorage.setItem("WAID_installations",JSON.stringify(e))}),{deep:!0});var c=function(){window.appState.logout&&window.appState.logout()},o=function(e){window.appState.openAppInView(JSON.parse(JSON.stringify(e))),e.last_use_datetime=(new Date).getTime()};return Object(u["a"])(regeneratorRuntime.mark((function a(){var c,s,i,l,p,d,f,b,h,j,O,v;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,window.appState.token();case 2:return c=a.sent,s=C.a.create({headers:{Authorization:"Bearer ".concat(c)}}),a.next=6,s.get("https://www.webasyst.com/id/api/v1/profile/");case 6:return i=a.sent,l=i.data,e.value=l,a.next=11,s.get("https://www.webasyst.com/id/api/v1/installations/");case 11:if(p=a.sent,d=p.data,t.value=d.map((function(e){return Object(I["a"])(Object(I["a"])({},t.value.find((function(t){return t.id===e.id}))||{}),e)})),t.value.length){a.next=17;break}return n.value=!0,a.abrupt("return");case 17:return a.next=19,s.post("https://www.webasyst.com/id/api/v1/auth/client/",{client_id:t.value.map((function(e){return e.id}))});case 19:f=a.sent,b=f.data,h=[],j=Object(S["a"])(t.value.entries());try{for(v=function(){var e=Object(_["a"])(O.value,2),n=e[0],a=e[1],r=new URLSearchParams({code:b[a.id],scope:"cash,webasyst",client_id:"WebasystDesktopApp"}).toString();h.push(Object(u["a"])(regeneratorRuntime.mark((function e(){var c,o,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,C.a.post("".concat(a.url,"/api.php/token-headless"),r);case 2:return c=e.sent,o=c.data,e.next=6,C.a.get("".concat(a.url,"/api.php/webasyst.getInfo"),{headers:{Authorization:"Bearer ".concat(o.access_token)}});case 6:s=e.sent,i=s.data,t.value[n]=Object(I["a"])(Object(I["a"])({},t.value[n]),{},{accessToken:o.access_token},i);case 9:case"end":return e.stop()}}),e)})))())},j.s();!(O=j.n()).done;)v()}catch(g){j.e(g)}finally{j.f()}return a.next=26,Promise.all(h);case 26:o(r.value[0]);case 27:case"end":return a.stop()}}),a)})))(),{user:e,sortedInstallations:r,logout:c,showInstallAppComponent:n,installationOnClick:o}}});n("b7d5");const Y=o()(X,[["render",k],["__scopeId","data-v-a2f1199a"]]);var Z=Y,$=[{path:"/",name:"Home",component:Z,meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:function(){return n.e("login").then(n.bind(null,"a55b"))}}],ee=Object(p["a"])({history:Object(p["b"])(),routes:$});ee.beforeEach(function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,n,a){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.matched.some((function(e){return e.meta.requiresAuth}))){e.next=7;break}return e.next=3,window.appState.token();case 3:r=e.sent,r?a():a({name:"Login"}),e.next=8;break;case 7:a();case 8:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}());var te=ee,ne=n("5502"),ae=Object(ne["a"])({state:{},mutations:{},actions:{},modules:{}});n("ba8c");Object(a["d"])(l).use(ae).use(te).mount("#app")}});
//# sourceMappingURL=app.f37f3af2.js.map