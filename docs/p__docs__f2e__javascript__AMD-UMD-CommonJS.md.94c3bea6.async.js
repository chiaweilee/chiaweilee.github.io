(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"35oH":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return u});t("q1tI");var o=t("7ljp");function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a.apply(this,arguments)}const c={},r="wrapper";function u({components:e,...n}){return Object(o["a"])(r,a({},c,n,{components:e,mdxType:"MDXLayout"}),Object(o["a"])("h2",null),Object(o["a"])("h3",null,"AMD"),Object(o["a"])("p",null,Object(o["a"])("inlineCode",{parentName:"p"},"Asynchronous")," Module Definition (AMD)"),Object(o["a"])("pre",null,Object(o["a"])("code",a({parentName:"pre"},{className:"language-JavaScript"}),"// filename: foo.js\ndefine(['jquery'], function ($) {\n  // methods\n  function myFunc(){}\n  // exposed public methods\n  return myFunc\n});\n")),Object(o["a"])("pre",null,Object(o["a"])("code",a({parentName:"pre"},{className:"language-JavaScript"}),"//  filename: foo.js\ndefine(['jquery', 'underscore'], function ($, _) {\n  //  methods\n  function a(){}  //  private because it's not returned (see below)\n  function b(){}  //  public because it's returned\n  function c(){}  //  public because it's returned\n  //  exposed public methods\n  return {\n  b: b,\n  c: c\n  }\n});\n")),Object(o["a"])("h3",null,"Common JS"),Object(o["a"])("pre",null,Object(o["a"])("code",a({parentName:"pre"},{className:"language-JavaScript"}),"//  filename: foo.js\nvar $ = require('jquery');\nvar _ = require('underscore');\n//  methods\nfunction a(){}  //  private because it's omitted from module.exports (see below)\nfunction b(){}  //  public because it's defined in module.exports\nfunction c(){}  //  public because it's defined in module.exports\n//  exposed public methods\nmodule.exports = {\n  b: b,\n  c: c\n}\n")),Object(o["a"])("h3",null,"UMD"),Object(o["a"])("p",null,Object(o["a"])("inlineCode",{parentName:"p"},"Universal")," Module Definition"),Object(o["a"])("pre",null,Object(o["a"])("code",a({parentName:"pre"},{className:"language-JavaScript"}),"(function (global, factory) {\n  if (typeof export === 'object && typeof module !== 'undefined') {\n    // AMD\n    defined(factory)\n  } else if (typeof define === 'function' && define.amd) {\n    // Node, CommonJS-like\n    module.exports = factory()\n  } else {\n    // Broswer globals (root is window)\n    global.vue = factory()\n  }\n})(this, function () {\n  // vue\n})\n")))}u.isMDXComponent=!0}}]);