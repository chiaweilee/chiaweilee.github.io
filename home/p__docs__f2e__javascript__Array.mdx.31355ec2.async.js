(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"5uI2":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return o});a("q1tI");var n=a("7ljp");function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}const l={},p="wrapper";function o({components:e,...t}){return Object(n["a"])(p,r({},l,t,{components:e,mdxType:"MDXLayout"}),Object(n["a"])("h2",null,"Array"),Object(n["a"])("h3",null,"Array.from()"),Object(n["a"])("p",null,Object(n["a"])("em",{parentName:"p"},"not support IE")),Object(n["a"])("p",null,"create a new, ",Object(n["a"])("inlineCode",{parentName:"p"},"shallow-copied")," Array instance from an array-like or iterable object."),Object(n["a"])("pre",null,Object(n["a"])("code",r({parentName:"pre"},{className:"language-JavaScript"}),"Array.from('foo')\n")),Object(n["a"])("pre",null,Object(n["a"])("code",r({parentName:"pre"},{}),"// result: ['f', 'o', 'o']\n")),Object(n["a"])("pre",null,Object(n["a"])("code",r({parentName:"pre"},{className:"language-JavaScript"}),"")),Object(n["a"])("h3",null,"prototype.pop()"),Object(n["a"])("p",null,"delete last element, and ",Object(n["a"])("inlineCode",{parentName:"p"},"return this element")),Object(n["a"])("h3",null,"prototype.shift()"),Object(n["a"])("p",null,"delete first element, and ",Object(n["a"])("inlineCode",{parentName:"p"},"return this element")),Object(n["a"])("h3",null,"prototype.push()"),Object(n["a"])("p",null,"add element(s) at end, and ",Object(n["a"])("inlineCode",{parentName:"p"},"return new length")),Object(n["a"])("h3",null,"prototype.unshift()"),Object(n["a"])("p",null,"add element(s) at start, and ",Object(n["a"])("inlineCode",{parentName:"p"},"return new length")),Object(n["a"])("h3",null,"prototype.splice()"),Object(n["a"])("p",null,Object(n["a"])("inlineCode",{parentName:"p"},"array.splice(start[, deleteCount[, item1[, item2[, ...]]]])")),Object(n["a"])("h3",null,"prototype.order()"),Object(n["a"])("pre",null,Object(n["a"])("code",r({parentName:"pre"},{className:"language-JavaScript"}),"[1, 5, 4, 2, 3, 6].sort((a, b) => a - b)\n[1, 5, 4, 2, 3, 6].sort((a, b) => b - a)\n")),Object(n["a"])("p",null,"argument a start at ","[1]","\nargumemt b start at ","[0]"),Object(n["a"])("p",null,"e.g: (5, 1) => (4, 5) => (2, 4)"),Object(n["a"])("pre",null,Object(n["a"])("code",r({parentName:"pre"},{}),"// result: [1, 2, 3, 4, 5, 6] [6, 5, 4, 3, 2, 1]\n")),Object(n["a"])("h3",null,"Vue Observer array"),Object(n["a"])("pre",null,Object(n["a"])("code",r({parentName:"pre"},{className:"language-JavaScript"}),"const arrayProto = Array.prototype\nconst arrayMethods = Object.create(arrayProto)\nconst method = 'push'\nconst original = arrayProto[method]\n\nObject.defineProperty(arrayMethods, method, {\n    value: function (...args) {\n        return original.apply(this, args)\n    },\n    enumerable: false,\n    writable: true,\n    configurable: true\n  })\n")))}o.isMDXComponent=!0}}]);