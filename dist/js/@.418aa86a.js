/*!
 * app v0.1.0
 * (c) 2018 +v
 * Released under the MIT License.
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["@"],{"013e":function(e,t,a){var n={"./airasia":["6381","chunk-2d0cf36c"],"./airasia/":["6381","chunk-2d0cf36c"],"./airasia/api":["8dad"],"./airasia/api.js":["8dad"],"./airasia/date":["6551"],"./airasia/date.js":["6551"],"./airasia/index":["6381","chunk-2d0cf36c"],"./airasia/index.vue":["6381","chunk-2d0cf36c"],"./airasia/name":["233b"],"./airasia/name.js":["233b"],"./airasia/request":["2d8c"],"./airasia/request.js":["2d8c"],"./airasia/routes":["a2ec"],"./airasia/routes.js":["a2ec"],"./airasia/x":["e07f"],"./airasia/x.js":["e07f"]};function o(e){var t=n[e];return t?Promise.all(t.slice(1).map(a.e)).then(function(){var e=t[0];return a(e)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}o.keys=function(){return Object.keys(n)},o.id="013e",e.exports=o},"048f":function(e,t,a){"use strict";function n(e,t,a,n,o,r,i,s){var c,u="function"===typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=a,u._compiled=!0),n&&(u.functional=!0),r&&(u._scopeId="data-v-"+r),i?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},u._ssrRegister=c):o&&(c=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(u.functional){u._injectStyles=c;var d=u.render;u.render=function(e,t){return c.call(t),d(e,t)}}else{var m=u.beforeCreate;u.beforeCreate=m?[].concat(m,c):[c]}return{exports:e,options:u}}a.d(t,"a",function(){return n})},"4e1c":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("app-page",[a("app-topbar",{attrs:{theme:e.theme||"dark-blue",transition:""}},[a("app-button",{attrs:{left:"","history-back":""}},[a("span",[e._v("back")])]),a("app-title",[e._v("\n      @"+e._s(e.at)+"\n    ")])],1),a("app-content",[e.compo?a(e.compo,{tag:"component",on:{theme:e.setTheme}}):e._e()],1)],1)},o=[],r=(a("58e0"),a("7847"),a("4d8f"),{name:"AtView",data:function(){return{theme:null,compo:null,meta:null}},created:function(){this.mount()},computed:{at:function(){return this.$route.params.at}},destroyed:function(){this.meta&&(this.removeMeta(this.meta),this.newMeta({name:"theme-color",content:"#fff"}))},methods:{setTheme:function(e){var t=this;this.theme=e;var a=Object({"$color-primary":Object({r:255,g:0,b:51,a:1,hex:"#ff0033"})})["$".concat(e)];if(a&&a.hex){var n=document.getElementsByTagName("meta");Object.keys(n).every(function(e){return"theme-color"!==n[e].name||(t.removeMeta(n[e]),!1)}),this.newMeta({name:"theme-color",content:a.hex})}},removeMeta:function(e){document.getElementsByTagName("head")[0].removeChild(e)},newMeta:function(e){var t=this.meta=document.createElement("meta");Object.keys(e).forEach(function(a){t[a]=e[a]}),document.getElementsByTagName("head")[0].appendChild(t)},mount:function(){var e=this;this.compo=function(){return a("013e")("./".concat(e.at))}}}}),i=r,s=a("048f"),c=Object(s["a"])(i,n,o,!1,null,null,null);c.options.__file="@.vue";t["default"]=c.exports}}]);