(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[62],{R0Cx:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return r});n("q1tI");var a=n("7ljp");function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}const p={},s="wrapper";function r({components:e,...t}){return Object(a["a"])(s,c({},p,t,{components:e,mdxType:"MDXLayout"}),Object(a["a"])("h2",null,"Public, private, and protected modifiers"),Object(a["a"])("p",null,Object(a["a"])("em",{parentName:"p"},Object(a["a"])("a",c({parentName:"em"},{href:"http://www.typescriptlang.org/docs/handbook/classes.html#public-private-and-protected-modifiers"}),"typescript-handbook"))),Object(a["a"])("h3",null,"Public"),Object(a["a"])("p",null,"by default"),Object(a["a"])("h3",null,"Private"),Object(a["a"])("p",null,Object(a["a"])("inlineCode",{parentName:"p"},"private"),", cannot be accessed from outside of its containing class."),Object(a["a"])("h3",null,"Protected"),Object(a["a"])("p",null,Object(a["a"])("inlineCode",{parentName:"p"},"protected"),", can also be accessed within deriving classes."),Object(a["a"])("p",null,Object(a["a"])("a",c({parentName:"p"},{href:"https://codesandbox.io/s/typescript-9eywy"}),"sandbox")),Object(a["a"])("pre",null,Object(a["a"])("code",c({parentName:"pre"},{className:"language-ts"}),"class Component {\n  protected props: any;\n  protected constructor(props: any) {\n    this.props = props;\n  }\n}\n\nclass MyComponent extends Component {\n  public constructor(props: any) {\n    super(props);\n  }\n\n  public test() {\n    return this.props;\n  }\n}\n")),Object(a["a"])("h3",null,"Readonly"),Object(a["a"])("p",null,Object(a["a"])("inlineCode",{parentName:"p"},"readonly")," properties must be initialized at their declaration or in the constructor."),Object(a["a"])("h3",null,"Get/Set"),Object(a["a"])("p",null,Object(a["a"])("inlineCode",{parentName:"p"},"getters"),"/",Object(a["a"])("inlineCode",{parentName:"p"},"setters")," as a way of intercepting accesses to a member of an object."),Object(a["a"])("h3",null,"Static"),Object(a["a"])("p",null,Object(a["a"])("inlineCode",{parentName:"p"},"static")," on the origin, as it\u2019s a general value for all grids. Each instance accesses this value through prepending the name of the class."),Object(a["a"])("h3",null,"Abstract"),Object(a["a"])("p",null,Object(a["a"])("inlineCode",{parentName:"p"},"abstract")," keyword is used to define abstract classes as well as abstract methods within an abstract class."),Object(a["a"])("p",null,Object(a["a"])("a",c({parentName:"p"},{href:"https://codesandbox.io/s/typescript-1kpzw"}),"sandbox")),Object(a["a"])("pre",null,Object(a["a"])("code",c({parentName:"pre"},{className:"language-ts"}),"abstract class Component {\n  protected props: any;\n  protected constructor(props: any) {\n    this.props = props;\n  }\n\n  protected abstract render(): void;\n}\n\nclass MyComponent extends Component {\n  public constructor(props: any) {\n    super(props);\n  }\n\n  public render() {\n    const { name } = this.props;\n    return 'Hello, '.concat(name, '!');\n  }\n}\n")))}r.isMDXComponent=!0}}]);