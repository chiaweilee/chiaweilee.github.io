(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"0lfv":function(e,t,n){"use strict";var r=n("RFCh");t["a"]={historyGoBack(){r["a"].goBack()}}},10:function(e,t){},11:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},5:function(e,t){},6:function(e,t){},"6JAd":function(e,t,n){"use strict";n("XGli");var r=n("NHyu"),a=(n("ufv1"),n("QYgq")),o=n("qIgq"),c=n.n(o),i=(n("tU7J"),n("wFql")),s=n("q1tI"),l=n.n(s),u=n("99qe"),h=n.n(u),p=function(e){return l.a.createElement("span",{className:h.a.confidential,onClick:e.onClick},e.children)};n.d(t,"d",function(){return f}),n.d(t,"b",function(){return y}),n.d(t,"a",function(){return E});var m=n("CFOr"),d=i["a"].Text,g=i["a"].Paragraph,f="secretKey",w=e=>{var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),e.dispatchEvent(t)},v=(e,t)=>{var n=window.URL||window.webkitURL||window,r=new Blob([t]),a=document.createElementNS("http://www.w3.org/1999/xhtml","a");a.href=n.createObjectURL(r),a.download=e,w(a)},y=e=>new m(localStorage.getItem(f)).decode(e);t["c"]=function(e){var t=Object(s["useState"])(!0),n=c()(t,2),r=n[0],a=n[1],o=Object(s["useState"])(void 0),i=c()(o,2),u=i[0],h=i[1];return Object(s["useEffect"])(()=>{"string"===typeof e.children&&localStorage.getItem(f)&&h(y(e.children))},[r]),!r&&u?u:l.a.createElement(p,{onClick:()=>{a(!1)}},"string"===typeof e.children&&e.children.substr(0,100))};function E(e){var t=localStorage.getItem(f);if(!e.text)return null;var n=e.img?'<C.CImg src="':"<C.Cryptor>",o=e.img?'" />':"</C.Cryptor>",c=new m(t).encode(e.text),i="".concat(n).concat(e.img?e.name:c).concat(o);return l.a.createElement("div",null,l.a.createElement(g,{copyable:{text:i,onCopy:e.onCopy},style:{overflow:"hidden",textOverflow:"ellipsis"}},l.a.createElement(d,{code:!0},i)),l.a.createElement(a["a"],null),e.img&&l.a.createElement(r["a"],{onClick:()=>{v("".concat(e.name,".json")||!1,JSON.stringify(c))}},"Export"))}},7:function(e,t){},8:function(e,t){},9:function(e,t){},"99qe":function(e,t,n){e.exports={confidential:"confidential___3zs5A"}},NXoE:function(e,t,n){"use strict";n("Pwec");var r=n("CtXQ");t["a"]=r["a"].createFromIconfontCN({scriptUrl:"//at.alicdn.com/t/font_1280925_kzicrv7yexi.js"})},WQfG:function(e,t,n){"use strict";n.r(t);n("ZPo2");var r=n("nj1r"),a=(n("puyI"),n("xZH1")),o=(n("WQyz"),n("LoM5")),c=(n("1Cgs"),n("zvbH")),i=n("q1tI"),s=n.n(i),l=n("NXoE"),u=(n("mw1O"),n("nJCp")),h=(n("ufv1"),n("QYgq")),p=(n("JI3C"),n("i79i")),m=n("wY1l"),d=n.n(m),g=n("bt/X"),f=n.n(g),w=n("Y+p1"),v=n.n(w),y=n("YO3V"),E=n.n(y),b=n("3WF5"),C=n.n(b),k=e=>{return e&&Array.isArray(e)&&e.filter(e=>!!e.path).map(e=>e.path.split("/").slice(1)).filter(e=>e.length>1&&!!e[0])||[]},x=class extends s.a.PureComponent{constructor(e){super(e),this.state={routes:k(e.route&&e.route.routes)}}get currentRoute(){return this.props.location.pathname.split("/").splice(1)}get currentDir(){return this.currentRoute.slice(0,this.currentRoute.length)}get routesIndex(){var e=this.state.routes,t=e.filter(e=>{return v()(this.currentDir,e.slice(0,this.currentDir.length))&&!v()(this.currentDir,e)});return f()(t,this.currentRoute.length)}get renderRoutes(){return E()(this.routesIndex)&&C()(this.routesIndex,(e,t)=>{var n=[...this.currentDir,t].join("/");return s.a.createElement(p["a"],{key:n},s.a.createElement(d.a,{to:"/".concat(n)},t))})}render(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(h["a"],{size:"lg"}),s.a.createElement(u["a"],{size:"md"},this.renderRoutes),this.props.children)}},I=(n("ra+K"),n("tM9S")),S=e=>{return e&&Array.isArray(e)&&e.filter(e=>!!e.path).map(e=>e.path.split("/").slice(1)).filter(e=>e.length>1&&!!e[0])||[]};function R(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return C()(f()(e,t),(e,n)=>{return 1===t?{value:n,label:n,children:R(e,t+1)}:{value:n,label:n}})}class O extends s.a.PureComponent{constructor(e){super(e),this.switchClick=(()=>{this.setState(e=>({navShow:!e.navShow}))}),this.onChange=(e=>{this.props.history.push({pathname:"".concat(this.props.route.path,"/").concat(e.join("/"))})}),this.state={navShow:!1,routes:S(e.route&&e.route.routes)}}render(){return this.state.navShow&&s.a.createElement(I["a"],{data:this.data,onChange:this.onChange})}get data(){return R(this.state.routes)}}var j=n("6JAd"),q=n("0lfv"),P=["Cryptor","Base64"];t["default"]=class extends s.a.PureComponent{constructor(){super(...arguments),this.menuRef={}}get constructDisable(){return!localStorage.getItem(j["d"])}get githubPage(){var e=this.props.location.pathname,t="https://github.com/chiaweilee/-/tree/master/src/pages",n=".mdx";return"".concat(t).concat(e).concat(n)}render(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(c["a"],{mode:"light",icon:s.a.createElement(l["a"],{type:"iconback"}),onLeftClick:q["a"].historyGoBack,rightContent:[s.a.createElement(l["a"],{type:"iconlist",onClick:()=>{this.menuRef.switchClick()},style:{marginRight:"16px"}}),s.a.createElement(o["a"],{onSelect:e=>{switch(e.props.value){case"github":window.open(this.githubPage);break;case"big":a["a"].prompt("Password","Password Required",e=>{localStorage.setItem(j["d"],e)},"secure-text");break;case"construct":r["a"].showActionSheetWithOptions({options:P,maskClosable:!0},e=>{"string"===typeof P[e]&&this.props.history.push({pathname:"/constructor/".concat(P[e].toLowerCase()),state:{refer:this.props.location.pathname}})});break;default:}},overlay:[s.a.createElement(o["a"].Item,{key:"1",value:"github",icon:s.a.createElement(l["a"],{type:"icongithub"})},"Github"),s.a.createElement(o["a"].Item,{key:"2",value:"construct",icon:s.a.createElement(l["a"],{type:"iconsettings"}),disabled:this.constructDisable},"Construct"),s.a.createElement(o["a"].Item,{key:"3",value:"big",icon:s.a.createElement(l["a"],{type:"iconbig"})},"Big")]},s.a.createElement(l["a"],{type:"iconmore"}))]}),s.a.createElement(O,Object.assign({},this.props,{ref:e=>{this.menuRef=e}})),s.a.createElement(x,Object.assign({},this.props),s.a.createElement("section",{className:"markdown-body"},this.props.children)))}}}}]);