(function(e){function t(t){for(var r,a,u=t[0],c=t[1],s=t[2],l=0,p=[];l<u.length;l++)a=u[l],o[a]&&p.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(p.length)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={3:0},i=[];function a(e){return u.p+""+({1:"layouts__index",2:"p__index.md"}[e]||e)+"."+{1:"43619b6f",2:"0d3761af"}[e]+".async.js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=r);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=a(e);var s=new Error;i=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",s.name="ChunkLoadError",s.type=r,s.request=i,n[1](s)}o[e]=void 0}};var l=setTimeout(function(){i({type:"timeout",target:c})},12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=s;i.push([0,0]),n()})({0:function(e,t,n){e.exports=n("KyW6")},1:function(e,t){},Bm4k:function(e,t,n){"use strict";n.r(t),n.d(t,"dva",function(){return r});var r={config:{onError(e){e.preventDefault()}}}},KyW6:function(e,t,n){"use strict";n.r(t);var r=n("Ico4"),o=n.n(r),i=n("mK77"),a=n.n(i),u=n("UWy3"),c=n.n(u),s=(n("viO2"),n("n6SA"),n("8wH/"),n("t0Wp"),n("1Inz"),n("obnL"),n("dN79"),n("c2Tj"),n("3zb0"),n("qrSE"),n("D18l"),n("Id5o"),n("Izgy"),n("bUoo"),n("HrQ8"),n("S0ZO"),n("Duy8"),n("biYw"),n("32cN"),n("oOAt"),n("PGt6"),n("NKNl"),n("e8Ej"),n("VaDo"),n("CFej"),n("PLaa"),n("pMXg"),n("DrUQ"),n("VcNP"),n("3SEt"),n("dL63"),n("4TN0"),n("dOho"),n("RqSw"),n("5oBH"),n("bCkO"),n("fMSf"),n("lXWl"),n("QuQD"),n("xhUj"),n("VMiv"),n("8Lka"),n("LbbD"),n("6ftb"),n("WBob"),n("fPsh"),n("92Ob"),n("RFOA"),n("RFCh"),n("uqIC")),l=n.n(s),f=n("jCnN"),p=n.n(f),d=n("FNtr"),h=n.n(d);n.d(t,"ReactDOMServer",function(){return g});var v=n("RwsS");window.g_plugins=v,v.init({validKeys:["patchRoutes","render","rootContainer","modifyRouteProps","onRouteChange","modifyInitialProps","initialProps","dva"]}),v.use(n("P74/")),v.use(n("Bm4k"));var w=n("xg5P")._onCreate();window.g_app=w;var g,m=function(){var e=c()(o.a.mark(function e(){var t,r,i,u,c;return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(window.g_isBrowser=!0,t={},!window.g_useSSR){e.next=6;break}t=window.g_initialData,e.next=18;break;case 6:if(r=location.pathname,i=h()(n("i4x8").routes,r),!(i&&i.component&&i.component.getInitialProps)){e.next=18;break}if(u=v.apply("modifyInitialProps",{initialValue:{}}),!i.component.getInitialProps){e.next=16;break}return e.next=13,i.component.getInitialProps(a()({route:i,isServer:!1},u));case 13:e.t0=e.sent,e.next=17;break;case 16:e.t0={};case 17:t=e.t0;case 18:c=v.apply("rootContainer",{initialValue:l.a.createElement(n("i4x8").default,t)}),p.a[window.g_useSSR?"hydrate":"render"](c,document.getElementById("root"));case 20:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),y=v.compose("render",{initialValue:m}),b=[];Promise.all(b).then(()=>{y()}).catch(e=>{window.console&&window.console.error(e)});t["default"]=null;n("hh8c");var _=n("gSpl").default;_("sw.js")},RFCh:function(e,t,n){"use strict";var r=n("85Gk").default({basename:window.routerBase});window.g_history=r,t["a"]=r},hh8c:function(e,t,n){},i4x8:function(e,t,n){"use strict";n.r(t),n.d(t,"routes",function(){return f}),n.d(t,"default",function(){return h});var r=n("uqIC"),o=n.n(r),i=n("03Z1"),a=n.n(i),u=n("RFCh"),c=n("aP9n"),s=n.n(c),l=n("nX5h").routerRedux.ConnectedRouter,f=[{path:"/",component:s()({component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"+ego"))}),routes:[{path:"/",exact:!0,component:s()({component:()=>n.e(2).then(n.bind(null,"eNq8"))}),_title:"test",_title_default:"test"}],_title:"test",_title_default:"test"}];window.g_routes=f;var p=n("RwsS");function d(e,t){p.applyForEach("onRouteChange",{initialValue:{routes:f,location:e,action:t}})}function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o.a.createElement(l,{history:u["a"]},a()(f,e))}p.applyForEach("patchRoutes",{initialValue:f}),u["a"].listen(d),d(u["a"].location)},xg5P:function(e,t,n){"use strict";n.r(t),n.d(t,"_onCreate",function(){return f}),n.d(t,"getApp",function(){return p}),n.d(t,"_DvaContainer",function(){return d});var r=n("mK77"),o=n.n(r),i=n("7FZp"),a=n("uqIC"),u=n("FHAQ"),c=n.n(u),s=n("RFCh"),l=null;function f(){var e=n("RwsS"),t=e.mergeConfig("dva");return l=Object(i["a"])(o()({history:s["a"]},t.config||{},window.g_useSSR?{initialState:window.g_initialData}:{})),l.use(c()()),(t.plugins||[]).forEach(e=>{l.use(e)}),l}function p(){return l}class d extends a["Component"]{render(){var e=p();return e.router(()=>this.props.children),e.start()()}}}});