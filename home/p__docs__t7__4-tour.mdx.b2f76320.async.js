(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[47],{"0+zf":function(e,t,n){e.exports={map:"map___3iWvI","map-mask":"map-mask___18lyW","map-fullscreen":"map-fullscreen___hG-5F"}},10:function(e,t){},11:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},5:function(e,t){},6:function(e,t){},"6JAd":function(e,t,n){"use strict";n("XGli");var a=n("NHyu"),r=(n("ufv1"),n("QYgq")),o=n("qIgq"),i=n.n(o),c=(n("tU7J"),n("wFql")),l=n("q1tI"),s=n.n(l),u=n("99qe"),d=n.n(u),m=function(e){return s.a.createElement("span",{className:d.a.confidential,onClick:e.onClick},e.children)};n.d(t,"d",function(){return h}),n.d(t,"b",function(){return y}),n.d(t,"a",function(){return w});var p=n("CFOr"),f=c["a"].Text,g=c["a"].Paragraph,h="secretKey",v=e=>{var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),e.dispatchEvent(t)},b=(e,t)=>{var n=window.URL||window.webkitURL||window,a=new Blob([t]),r=document.createElementNS("http://www.w3.org/1999/xhtml","a");r.href=n.createObjectURL(a),r.download=e,v(r)},y=e=>new p(localStorage.getItem(h)).decode(e);t["c"]=function(e){var t=Object(l["useState"])(!0),n=i()(t,2),a=n[0],r=n[1],o=Object(l["useState"])(void 0),c=i()(o,2),u=c[0],d=c[1];return Object(l["useEffect"])(()=>{"string"===typeof e.children&&localStorage.getItem(h)&&d(y(e.children))},[a]),!a&&u?u:s.a.createElement(m,{onClick:()=>{r(!1)}},"string"===typeof e.children&&e.children.substr(0,100))};function w(e){var t=localStorage.getItem(h);if(!e.text)return null;var n=e.img?'<C.CImg src="':"<C.Cryptor>",o=e.img?'" />':"</C.Cryptor>",i=new p(t).encode(e.text),c="".concat(n).concat(e.img?e.name:i).concat(o);return s.a.createElement("div",null,s.a.createElement(g,{copyable:{text:c,onCopy:e.onCopy},style:{overflow:"hidden",textOverflow:"ellipsis"}},s.a.createElement(f,{code:!0},c)),s.a.createElement(r["a"],null),e.img&&s.a.createElement(a["a"],{onClick:()=>{b("".concat(e.name,".json")||!1,JSON.stringify(i))}},"Export"))}},7:function(e,t){},"7cJT":function(e,t,n){"use strict";var a,r=n("mjNm"),o=n("6JAd"),i=n("d6i3"),c=n.n(i),l=n("1l/V"),s=n.n(l),u=n("qIgq"),d=n.n(u),m=n("q1tI"),p=n.n(m),f=n("Mu1M"),g=n("PeHE"),h=n("G6/R"),v=function(e){var t=e.src,n=e.alt,r=e.origin,o=void 0!==r&&r,i={src:o?t:"/home/assets/".concat(t),alt:n};return Object(m["useEffect"])(()=>{return()=>{"function"===typeof a&&a()}},[]),p.a.createElement("img",Object.assign({},i,Object(f["a"])({onDblClick:()=>{a=Object(g["a"])(p.a.createElement(h["a"],null,p.a.createElement("img",Object.assign({},i,{width:"100%"}))))}})))},b=function(e){var t=Object(m["useState"])(!0),n=d()(t,2),a=n[0],r=n[1],i=Object(m["useState"])(void 0),l=d()(i,2),u=l[0],g=l[1],h=e.src,b=e.strict,y=e.alt;return Object(m["useEffect"])(()=>{s()(c.a.mark(function e(){var t;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!localStorage.getItem(o["d"])){e.next=7;break}return e.next=3,fetch("/home/assets/".concat(h,".json"));case 3:return e.next=5,e.sent.json();case 5:t=e.sent,t&&g(Object(o["b"])(t));case 7:case"end":return e.stop()}},e)}))()},[h]),u&&localStorage.getItem(o["d"])?a?p.a.createElement("img",Object.assign({},Object(f["a"])({longTouchTimeout:b?3e4:3e3,onLongPress:()=>{r(!1)}}),{src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAEALAAAAAABAAEAAAICRAEAOw==",alt:y,style:{height:"33vw"}})):p.a.createElement(v,{origin:!0,src:u,alt:y}):null},y=n("wd/R"),w=n.n(y),O=function(e){var t=Object(m["useState"])(!1),n=d()(t,2),a=n[0],r=n[1],o=e.date,i=e.nights;function c(){r(!a)}return p.a.createElement("div",{onClick:c,style:{marginBottom:"16px"}},p.a.createElement("i",null,w()(o).format("Do MMM, YYYY")),a&&"number"===typeof i&&p.a.createElement("i",null," - ",w()(o).add(i,"d").format("Do MMM, YYYY")),!a&&"number"===typeof i&&p.a.createElement("i",null,", ",i," nights"))},E=(n("oByq"),n("Wx4G")),A=function(e){var t=e.items,n=e.col,a=void 0===n?3:n;return p.a.createElement(E["a"],{data:t,columnNum:a,renderItem:e=>{return"string"===typeof e?p.a.createElement("div",{style:{backgroundImage:"url(".concat("/home/assets/".concat(e),")")}},p.a.createElement(v,{src:e,alt:""})):p.a.createElement("div",{style:{backgroundImage:"url(".concat("/home/assets/".concat(e.src),")")}},p.a.createElement(v,Object.assign({},e,{src:e.src,alt:e.alt})))}})};t["a"]={Map:r["a"],Cryptor:o["c"],CImg:b,HotelNights:O,Img:v,Imgs:A}},8:function(e,t){},9:function(e,t){},"99qe":function(e,t,n){e.exports={confidential:"confidential___3zs5A"}},EvI4:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return l});n("q1tI");var a=n("7ljp"),r=n("7cJT");function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}const i={},c="wrapper";function l({components:e,...t}){return Object(a["a"])(c,o({},i,t,{components:e,mdxType:"MDXLayout"}),Object(a["a"])("h1",null,"TOUR FOUR SOUL"),Object(a["a"])("h2",null,"BANGKOK"),Object(a["a"])(r["a"].Img,{src:"baiyokesky-1.jpg"}),Object(a["a"])("p",null,"13.7537798,100.5421587"),Object(a["a"])("h2",null,"KOH TAO"),Object(a["a"])("p",null,"You think I waste time taking photographs of the sky.\nOne night I will get the perfect photograph."),Object(a["a"])("h3",null,"FULLMOON PARTY"),Object(a["a"])(r["a"].Map,{driving:["10.084742,99.824118,Koh Tao (Mae Haad Pier)","9.709127,99.984432,Thong Sala","9.676993,100.068051,Haad Rin"]}),Object(a["a"])(r["a"].Img,{src:"fullmoon-1.jpg"}),Object(a["a"])(r["a"].Img,{src:"fullmoon-2.jpg"}),Object(a["a"])("h2",null,"KRABI"),Object(a["a"])(r["a"].Map,{driving:["8.042807,98.810486,Ao Nang Landmark Bus Station","7.884028,98.395726,Phuket Bus Terminal 1","7.844075,98.294148,Woraburi Phuket Resort & Spa"]}),Object(a["a"])("h2",null,"KARON"),Object(a["a"])("h3",null,"SONGKRAN 1"),Object(a["a"])("h4",null,"A Free Riding"),Object(a["a"])(r["a"].Map,{driving:["7.881441,98.294236,Corner","7.844075,98.294148,Woraburi Phuket Resort & Spa"]}),Object(a["a"])("h2",null,"KOH SIMILAN 1"),Object(a["a"])(r["a"].Map,{driving:["7.844075,98.294148,Woraburi Phuket Resort & Spa","8.644964,98.251020,Khao Lak Scuba Adventures"]}),Object(a["a"])(r["a"].Img,{src:"similan.jpg"}),Object(a["a"])("h2",null,"BANGKOK"))}l.isMDXComponent=!0},"G6/R":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("NXoE"),i=n("xJKY"),c=n.n(i);t["a"]=function(e){var t=e.children,n=e.__unmount__;return r.a.createElement("div",null,r.a.createElement("div",{className:c.a["modal-mask"]}),r.a.createElement("div",{className:c.a["modal-wrap"]},r.a.createElement("div",{className:c.a["modal-close"]},r.a.createElement(o["a"],{type:"iconclose",onClick:n})),t))}},Mu1M:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n("p0pE"),r=n.n(a),o=function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=r()({longTouchTimeout:1e3,dblclickTimeout:200},n),o=a.longTouchTimeout,i=a.dblclickTimeout,c=a.onLongPress,l=a.onClick,s=a.onDblClick,u=a.style,d=void 0===u?{}:u,m=0,p=0;return{style:r()({},d,{touchAction:"pan-y"}),onContextMenu(e){e.preventDefault()},onTouchStart(n){t=!1,e=n,m=setTimeout(function(){t=!0,"function"===typeof c&&c(e)},o),n.preventDefault()},onTouchMove(t){var n=t.touches[0];Math.abs(n.clientY-e.touches[0].touchY)<10&&t.preventDefault()},onTouchEnd(){return m&&!t&&(clearTimeout(m),m=0,p+=1,setTimeout(()=>{1===p?"function"===typeof l&&l(e):2===p&&"function"===typeof s&&s(e),p=0},i)),!1}}}},NXoE:function(e,t,n){"use strict";n("Pwec");var a=n("CtXQ");t["a"]=a["a"].createFromIconfontCN({scriptUrl:"//at.alicdn.com/t/font_1280925_kzicrv7yexi.js"})},PeHE:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n("q1tI"),r=n("i8i4");function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;if(!e||!t)return()=>{};var n=document.createElement("div");function o(){r["unmountComponentAtNode"](n),n&&n.parentNode&&n.parentNode.removeChild(n)}return t.appendChild(n),"function"===typeof e.type?r["render"](a["cloneElement"](e,{__unmount__:o}),n):r["render"](e,n),o}},mjNm:function(e,t,n){"use strict";var a,r,o=n("qIgq"),i=n.n(o),c=n("q1tI"),l=n.n(c),s=n("p0pE"),u=n.n(s);function d(e){return window.Microsoft?Promise.resolve():(r||(r=new Promise((t,n)=>{var r="bingAPIReady",o="https://www.bing.com/api/maps/mapcontrol?callback=".concat(r,"&setLang=en");e&&(o+="&key=".concat(e));var i=document.createElement("script");i.type="text/javascript",i.async=!0,i.defer=!0,i.src=o,window.bingAPIReady=(()=>{a=window.Microsoft,t()}),i.onerror=(e=>{n(e)}),document.body.appendChild(i)})),r)}var m={zoom:14};class p extends c["PureComponent"]{constructor(){super(...arguments),this.mapRef=c["createRef"]()}render(){return c["createElement"]("div",{ref:this.mapRef,className:this.props.className})}componentDidMount(){d(this.props.apiKey).then(()=>{this.initMap(),this.walking(),this.driving(),this.addPoint(),this.setCenter()})}componentWillUnmount(){this.map&&this.map.dispose()}initMap(){var e=this.props.aerial;this.map=new a.Maps.Map(this.mapRef.current,u()({},e?{mapTypeId:a.Maps.MapTypeId.aerial}:{},{customMapStyle:{elements:{area:{fillColor:"#b6e591"},water:{fillColor:"#75cff0"},tollRoad:{fillColor:"#a964f4",strokeColor:"#a964f4"},arterialRoad:{fillColor:"#ffffff",strokeColor:"#d7dae7"},road:{fillColor:"#ffa35a",strokeColor:"#ff9c4f"},street:{fillColor:"#ffffff",strokeColor:"#ffffff"},transit:{fillColor:"#000000"}},settings:{landColor:"#efe9e1"}}}))}setCenter(){var e=this.props,t=e.center;t=void 0===t?{}:t;var n=t.latitude,r=t.longitude,o=e.zoom;n&&r&&this.map.setView({center:new a.Maps.Location(n,r),zoom:o})}addPoint(){var e=this.props.points,t=void 0===e?[]:e;Array.isArray(t)&&t.length&&t.forEach(e=>{var t=e.latitude,n=e.longitude,r=new a.Maps.Pushpin(new a.Maps.Location(t,n),null),o=new a.Maps.Layer;o.add(r),this.map.layers.insert(o)})}walking(){var e=this.props.walking,t=void 0===e?[]:e;Array.isArray(t)&&t.length&&this.route(t,"walking")}driving(){var e=this.props.driving,t=void 0===e?[]:e;Array.isArray(t)&&t.length&&this.route(t,"driving")}route(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"walking";Array.isArray(e)&&e.length&&a.Maps.loadModule("Microsoft.Maps.Directions",()=>{var n=new a.Maps.Directions.DirectionsManager(this.map);n.setRequestOptions({routeMode:a.Maps.Directions.RouteMode[t]}),e.forEach(e=>{var t=e.address,r=e.latitude,o=e.longitude;n.addWaypoint(new a.Maps.Directions.Waypoint({address:t,location:new a.Maps.Location(r,o)}))}),n.setRenderOptions({itineraryContainer:document.getElementById("printoutPanel")}),n.calculateDirections()})}}p.defaultProps=m;var f,g=n("NXoE"),h=n("G6/R"),v=n("Mu1M"),b=n("PeHE"),y=n("0+zf"),w=n.n(y),O="AvHBgtLyf4zbDhXESAuvFMSqIg1GgomX6DnDgw-CaXFeRmWVzvXPC55WveE4pJla",E=e=>{var t=Object(c["useState"])(!0),n=i()(t,2),a=n[0],r=n[1],o="string"===typeof e.center?e.center.split(","):[],s=i()(o,2),u=s[0],d=s[1],m=Array.isArray(e.points)?e.points.map(e=>{var t=e.split(","),n=i()(t,2),a=n[0],r=n[1];return{latitude:a,longitude:r}}):[],y=u&&d?{latitude:u,longitude:d}:m[0]&&{latitude:m[0].latitude,longitude:m[0].longitude},A=Array.isArray(e.walking)?e.walking.map(e=>{var t=e.split(","),n=i()(t,3),a=n[0],r=n[1],o=n[2];return{latitude:a,longitude:r,address:o}}):[],j=Array.isArray(e.driving)?e.driving.map(e=>{var t=e.split(","),n=i()(t,3),a=n[0],r=n[1],o=n[2];return{latitude:a,longitude:r,address:o}}):[];Object(c["useEffect"])(()=>{return()=>{"function"===typeof f&&f()}},[]);var k=e.fullscreen,M=k?w.a["map-fullscreen"]:"";return l.a.createElement("div",{className:M,style:{position:"relative"}},!k&&a&&l.a.createElement("div",Object.assign({className:w.a["map-mask"]},Object(v["a"])({onLongPress:()=>{r(!1)},onDblClick:()=>{f=Object(b["a"])(l.a.createElement(h["a"],null,l.a.createElement(E,Object.assign({fullscreen:!0},e))))}})),l.a.createElement(g["a"],{type:"iconunlock"})),l.a.createElement(p,{className:[w.a.map,M].join(" "),apiKey:O,center:y,points:m,walking:A,driving:j,zoom:e.zoom,aerial:e.aerial}))};t["a"]=E},xJKY:function(e,t,n){e.exports={"modal-mask":"modal-mask___2Eqm9","modal-wrap":"modal-wrap___3WcUG","modal-close":"modal-close___3LihS"}}}]);