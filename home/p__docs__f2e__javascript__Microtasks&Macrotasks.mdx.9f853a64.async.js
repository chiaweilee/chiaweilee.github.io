(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{mS6C:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return l});t("q1tI");var a=t("7ljp");function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o.apply(this,arguments)}const c={},r="wrapper";function l({components:e,...n}){return Object(a["a"])(r,o({},c,n,{components:e,mdxType:"MDXLayout"}),Object(a["a"])("h2",null,"Microtasks & Macrotasks"),Object(a["a"])("pre",null,Object(a["a"])("code",o({parentName:"pre"},{className:"language-JavaScript"}),"setTimeout(() => {\n    console.log(1)\n})\n\nnew Promise(resolve => {\n    resolve()\n    console.log(2)\n})\n    .then(() => {\n        console.log(3)\n    })\n\nconsole.log(4)\n")),Object(a["a"])("pre",null,Object(a["a"])("code",o({parentName:"pre"},{className:"language-console"}),"// result: 2 4 3 1\n")),Object(a["a"])("h3",null,"Macrotask"),Object(a["a"])("p",null,Object(a["a"])("inlineCode",{parentName:"p"},"setTimeout"),", ",Object(a["a"])("inlineCode",{parentName:"p"},"setInterval"),", ",Object(a["a"])("inlineCode",{parentName:"p"},"process.nextTick")),Object(a["a"])("h3",null,"Microtask"),Object(a["a"])("p",null,Object(a["a"])("inlineCode",{parentName:"p"},"process.nextTick"),", ",Object(a["a"])("inlineCode",{parentName:"p"},"Promise")))}l.isMDXComponent=!0}}]);