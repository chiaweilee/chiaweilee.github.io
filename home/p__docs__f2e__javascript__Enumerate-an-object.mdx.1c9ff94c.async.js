(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{huCw:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return c});n("q1tI");var a=n("7ljp");function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}const o={},l="wrapper";function c({components:e,...t}){return Object(a["a"])(l,r({},o,t,{components:e,mdxType:"MDXLayout"}),Object(a["a"])("h2",null,"Enmerate an object"),Object(a["a"])("h3",null,"for..in"),Object(a["a"])("p",null,Object(a["a"])("inlineCode",{parentName:"p"},"for...in")," iterate over ",Object(a["a"])("inlineCode",{parentName:"p"},"all the enumerable properties")," of an object.\nIt traverses all enumerable properties of an object and ",Object(a["a"])("inlineCode",{parentName:"p"},"its prototype chain"),"."),Object(a["a"])("h3",null,"Object.keys()"),Object(a["a"])("p",null,"returns an ",Object(a["a"])("inlineCode",{parentName:"p"},"array")," with all the own(",Object(a["a"])("inlineCode",{parentName:"p"},"not in the prototype chain"),") enumerable properties' names('keys') of an object."),Object(a["a"])("h3",null,"Object.getOwnPropertyName()"),Object(a["a"])("p",null,"returns an ",Object(a["a"])("inlineCode",{parentName:"p"},"array")," containing all own properties' names(",Object(a["a"])("inlineCode",{parentName:"p"},"enumerable or not"),") of an object."),Object(a["a"])("pre",null,Object(a["a"])("code",r({parentName:"pre"},{className:"language-JavaScript"}),"Object.getOwnPropertyNames(['a', 'b', 3])\nObject.getOwnPropertyNames({ a: 1, b: { c: 3 } })\n")),Object(a["a"])("pre",null,Object(a["a"])("code",r({parentName:"pre"},{}),"// result: ['0', '1', '2', 'length']\n// result: ['a', 'b']\n")),Object(a["a"])("h3",null,"Object.assign()"),Object(a["a"])("p",null,"used to copy the values of all ",Object(a["a"])("inlineCode",{parentName:"p"},"enumerable own properties")," from ",Object(a["a"])("inlineCode",{parentName:"p"},"one or more")," source objects to a target object.\nIt will return return the target object."),Object(a["a"])("pre",null,Object(a["a"])("code",r({parentName:"pre"},{className:"language-JavaScript"}),"Object.assign({}, { a: 1 }, { b: 2 })\n")),Object(a["a"])("pre",null,Object(a["a"])("code",r({parentName:"pre"},{}),"// result: { a: 1, b: 2 }\n")),Object(a["a"])("h4",null,"Warning for Deep Clone"),Object(a["a"])("p",null,Object(a["a"])("inlineCode",{parentName:"p"},"Object.assign()")," copies property values.\nIf the source value is a reference to an object, it only copies that reference value."),Object(a["a"])("pre",null,Object(a["a"])("code",r({parentName:"pre"},{className:"language-JavaScript"}),"const A = { a: 0, b: { c: 0 }}\nconst B = Object.assign({}, A)\nA.a = 1\nB.a = 2\nA.b.c = 3\nconsole.log(A)\nconsole.log(B)\n")),Object(a["a"])("pre",null,Object(a["a"])("code",r({parentName:"pre"},{}),"// result: { a: 1, b: { c: 3} }\n// result: { a: 2, b: { c: 3} }\n")),Object(a["a"])("h3",null,"Object.defineProperty()"),Object(a["a"])("p",null,"defines new or modifies existing property(s) directly on an object, returning the object."),Object(a["a"])("h3",null,"Descriptors"),Object(a["a"])("h4",null,"configurable"),Object(a["a"])("p",null,Object(a["a"])("inlineCode",{parentName:"p"},"true")," if and only if the type of this property ",Object(a["a"])("inlineCode",{parentName:"p"},"descriptor may be changed and may be deleted")," from the corresponding object.\nDefaults to ",Object(a["a"])("inlineCode",{parentName:"p"},"false")),Object(a["a"])("h4",null,"enumerable"),Object(a["a"])("p",null,Object(a["a"])("inlineCode",{parentName:"p"},"true")," if and only if this property shows up during enumeration.\nDefaults to ",Object(a["a"])("inlineCode",{parentName:"p"},"false")),Object(a["a"])("h4",null,"get"),Object(a["a"])("p",null,"getter from the property, or ",Object(a["a"])("inlineCode",{parentName:"p"},"undefined")," if no getter.\nWhen the property is ",Object(a["a"])("inlineCode",{parentName:"p"},"accessed"),", this function is called ",Object(a["a"])("inlineCode",{parentName:"p"},"without arguments")," and with ",Object(a["a"])("inlineCode",{parentName:"p"},"this")," set to the object through which the property is accessed.\nThe ",Object(a["a"])("inlineCode",{parentName:"p"},"return value")," will be used as the value of the property.\nDefaults to ",Object(a["a"])("inlineCode",{parentName:"p"},"undefined")),Object(a["a"])("h4",null,"set"),Object(a["a"])("p",null,"setter for the property, or ",Object(a["a"])("inlineCode",{parentName:"p"},"undefined")," if no setter.\nWhen the property is ",Object(a["a"])("inlineCode",{parentName:"p"},"assigned to"),", this function is called with ",Object(a["a"])("inlineCode",{parentName:"p"},"one argument"),"(the value being assigned)\nand with ",Object(a["a"])("inlineCode",{parentName:"p"},"this")," set to the object through which the property is assigned."),Object(a["a"])("pre",null,Object(a["a"])("code",r({parentName:"pre"},{className:"language-JavaScript"}),"var value\nObject.definedProperty(object, 'key', {\n    enumerable: true,\n    configurable: true,\n    get: function () {\n        return value\n    },\n    set: function (to) {\n        value = to\n    }\n})\n")))}c.isMDXComponent=!0}}]);