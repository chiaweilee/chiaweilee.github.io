(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[48],{"0+zf":function(e,t,a){e.exports={map:"map___3iWvI","map-mask":"map-mask___18lyW","map-fullscreen":"map-fullscreen___hG-5F"}},10:function(e,t){},11:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},5:function(e,t){},6:function(e,t){},"6JAd":function(e,t,a){"use strict";a("XGli");var n=a("NHyu"),o=(a("ufv1"),a("QYgq")),r=a("qIgq"),i=a.n(r),c=(a("tU7J"),a("wFql")),l=a("q1tI"),s=a.n(l),u=a("99qe"),d=a.n(u),m=function(e){return s.a.createElement("span",{className:d.a.confidential,onClick:e.onClick},e.children)};a.d(t,"d",function(){return g}),a.d(t,"b",function(){return b}),a.d(t,"a",function(){return w});var p=a("CFOr"),f=c["a"].Text,h=c["a"].Paragraph,g="secretKey",v=e=>{var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),e.dispatchEvent(t)},y=(e,t)=>{var a=window.URL||window.webkitURL||window,n=new Blob([t]),o=document.createElementNS("http://www.w3.org/1999/xhtml","a");o.href=a.createObjectURL(n),o.download=e,v(o)},b=e=>new p(localStorage.getItem(g)).decode(e);t["c"]=function(e){var t=Object(l["useState"])(!0),a=i()(t,2),n=a[0],o=a[1],r=Object(l["useState"])(void 0),c=i()(r,2),u=c[0],d=c[1];return Object(l["useEffect"])(()=>{"string"===typeof e.children&&localStorage.getItem(g)&&d(b(e.children))},[n]),!n&&u?u:s.a.createElement(m,{onClick:()=>{o(!1)}},e.children)};function w(e){var t=localStorage.getItem(g);if(!e.text)return null;var a=e.img?'<C.CImg src="':"<C.Cryptor>",r=e.img?'" />':"</C.Cryptor>",i=new p(t).encode(e.text),c="".concat(a).concat(e.img?e.name:i).concat(r);return s.a.createElement("div",null,s.a.createElement(h,{copyable:{text:c,onCopy:e.onCopy},style:{overflow:"hidden",textOverflow:"ellipsis"}},s.a.createElement(f,{code:!0},c)),s.a.createElement(o["a"],null),e.img&&s.a.createElement(n["a"],{onClick:()=>{y("".concat(e.name,".json")||!1,JSON.stringify(i))}},"Export"))}},7:function(e,t){},"7cJT":function(e,t,a){"use strict";var n,o=a("mjNm"),r=a("6JAd"),i=a("d6i3"),c=a.n(i),l=a("1l/V"),s=a.n(l),u=a("qIgq"),d=a.n(u),m=a("q1tI"),p=a.n(m),f=a("Mu1M"),h=a("PeHE"),g=a("G6/R"),v={position:"absolute",top:"0",bottom:"0",margin:"auto"},y=function(e){var t=e.src,a=e.alt,o={src:"/home/assets/".concat(t),alt:a};return Object(m["useEffect"])(()=>{return()=>{"function"===typeof n&&n()}},[]),p.a.createElement("img",Object.assign({},o,Object(f["a"])({onDblClick:()=>{n=Object(h["a"])(p.a.createElement(g["a"],null,p.a.createElement("img",Object.assign({},o,{width:"100%",style:v}))))}})))},b=function(e){var t=Object(m["useState"])(!0),a=d()(t,2),n=a[0],o=a[1],i=Object(m["useState"])(void 0),l=d()(i,2),u=l[0],h=l[1],g=e.src,v=e.strict,b=e.alt;return Object(m["useEffect"])(()=>{s()(c.a.mark(function e(){var t;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!localStorage.getItem(r["d"])){e.next=7;break}return e.next=3,fetch("/home/assets/".concat(g,".json"));case 3:return e.next=5,e.sent.json();case 5:t=e.sent,t&&h(Object(r["b"])(t));case 7:case"end":return e.stop()}},e)}))()},[g]),u&&localStorage.getItem(r["d"])?n?p.a.createElement("img",Object.assign({},Object(f["a"])({longTouchTimeout:v?3e4:3e3,onLongPress:()=>{o(!1)}}),{src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAEALAAAAAABAAEAAAICRAEAOw==",alt:b,style:{height:"33vw"}})):p.a.createElement(y,{src:u,alt:b}):null},w=a("wd/R"),E=a.n(w),A=function(e){var t=Object(m["useState"])(!1),a=d()(t,2),n=a[0],o=a[1],r=e.date,i=e.nights;function c(){o(!n)}return p.a.createElement("div",{onClick:c,style:{marginBottom:"16px"}},p.a.createElement("i",null,E()(r).format("Do MMM, YYYY")),n&&"number"===typeof i&&p.a.createElement("i",null," - ",E()(r).add(i,"d").format("Do MMM, YYYY")),!n&&"number"===typeof i&&p.a.createElement("i",null,", ",i," nights"))},k=(a("oByq"),a("Wx4G")),O=function(e){var t=e.items,a=e.col,n=void 0===a?3:a;return p.a.createElement(k["a"],{data:t,columnNum:n,renderItem:e=>{return"string"===typeof e?p.a.createElement("div",{style:{backgroundImage:"url(".concat("/home/assets/".concat(e),")")}},p.a.createElement(y,{src:e,alt:""})):p.a.createElement("div",{style:{backgroundImage:"url(".concat("/home/assets/".concat(e.src),")")}},p.a.createElement(y,Object.assign({},e,{src:e.src,alt:e.alt})))}})};t["a"]={Map:o["a"],Cryptor:r["c"],CImg:b,HotelNights:A,Img:y,Imgs:O}},8:function(e,t){},9:function(e,t){},"99qe":function(e,t,a){e.exports={confidential:"confidential___3zs5A"}},"G6/R":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("NXoE"),i=a("xJKY"),c=a.n(i);t["a"]=function(e){var t=e.children,a=e.__unmount__;return o.a.createElement("div",{className:c.a["modal-root"]},o.a.createElement("div",{className:c.a["modal-wrapper"]},o.a.createElement("div",{className:c.a["modal-close"]},o.a.createElement(r["a"],{type:"iconclose",onClick:a})),t))}},Mu1M:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a("p0pE"),o=a.n(n),r=function(){var e,t,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=o()({longTouchTimeout:1e3,dblclickTimeout:200},a),r=n.longTouchTimeout,i=n.dblclickTimeout,c=n.onLongPress,l=n.onClick,s=n.onDblClick,u=n.style,d=void 0===u?{}:u,m=0,p=0;return{style:o()({},d,{touchAction:"pan-y"}),onContextMenu(e){e.preventDefault()},onTouchStart(a){t=!1,e=a,m=setTimeout(function(){t=!0,"function"===typeof c&&c(e)},r),a.preventDefault()},onTouchMove(t){var a=t.touches[0];Math.abs(a.clientY-e.touches[0].touchY)<10&&t.preventDefault()},onTouchEnd(){return m&&!t&&(clearTimeout(m),m=0,p+=1,setTimeout(()=>{1===p?"function"===typeof l&&l(e):2===p&&"function"===typeof s&&s(e),p=0},i)),!1}}}},NXoE:function(e,t,a){"use strict";a("Pwec");var n=a("CtXQ");t["a"]=n["a"].createFromIconfontCN({scriptUrl:"//at.alicdn.com/t/font_1280925_kefrv97j18o.js"})},PeHE:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a("q1tI"),o=a("i8i4");function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;if(!e||!t)return()=>{};var a=document.createElement("div");function r(){o["unmountComponentAtNode"](a),a&&a.parentNode&&a.parentNode.removeChild(a)}return t.appendChild(a),"function"===typeof e.type?o["render"](n["cloneElement"](e,{__unmount__:r}),a):o["render"](e,a),r}},mjNm:function(e,t,a){"use strict";var n,o,r=a("qIgq"),i=a.n(r),c=a("q1tI"),l=a.n(c),s=a("p0pE"),u=a.n(s);function d(e){return window.Microsoft?Promise.resolve():(o||(o=new Promise((t,a)=>{var o="bingAPIReady",r="https://www.bing.com/api/maps/mapcontrol?callback=".concat(o,"&setLang=en");e&&(r+="&key=".concat(e));var i=document.createElement("script");i.type="text/javascript",i.async=!0,i.defer=!0,i.src=r,window.bingAPIReady=(()=>{n=window.Microsoft,t()}),i.onerror=(e=>{a(e)}),document.body.appendChild(i)})),o)}var m={zoom:14};class p extends c["PureComponent"]{constructor(){super(...arguments),this.mapRef=c["createRef"]()}render(){return c["createElement"]("div",{ref:this.mapRef,className:this.props.className})}componentDidMount(){d(this.props.apiKey).then(()=>{this.initMap(),this.walking(),this.driving(),this.addPoint(),this.setCenter()})}componentWillUnmount(){this.map&&this.map.dispose()}initMap(){var e=this.props.aerial;this.map=new n.Maps.Map(this.mapRef.current,u()({},e?{mapTypeId:n.Maps.MapTypeId.aerial}:{},{customMapStyle:{elements:{area:{fillColor:"#b6e591"},water:{fillColor:"#75cff0"},tollRoad:{fillColor:"#a964f4",strokeColor:"#a964f4"},arterialRoad:{fillColor:"#ffffff",strokeColor:"#d7dae7"},road:{fillColor:"#ffa35a",strokeColor:"#ff9c4f"},street:{fillColor:"#ffffff",strokeColor:"#ffffff"},transit:{fillColor:"#000000"}},settings:{landColor:"#efe9e1"}}}))}setCenter(){var e=this.props,t=e.center;t=void 0===t?{}:t;var a=t.latitude,o=t.longitude,r=e.zoom;a&&o&&this.map.setView({center:new n.Maps.Location(a,o),zoom:r})}addPoint(){var e=this.props.points,t=void 0===e?[]:e;Array.isArray(t)&&t.length&&t.forEach(e=>{var t=e.latitude,a=e.longitude,o=new n.Maps.Pushpin(new n.Maps.Location(t,a),null),r=new n.Maps.Layer;r.add(o),this.map.layers.insert(r)})}walking(){var e=this.props.walking,t=void 0===e?[]:e;Array.isArray(t)&&t.length&&this.route(t,"walking")}driving(){var e=this.props.driving,t=void 0===e?[]:e;Array.isArray(t)&&t.length&&this.route(t,"driving")}route(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"walking";Array.isArray(e)&&e.length&&n.Maps.loadModule("Microsoft.Maps.Directions",()=>{var a=new n.Maps.Directions.DirectionsManager(this.map);a.setRequestOptions({routeMode:n.Maps.Directions.RouteMode[t]}),e.forEach(e=>{var t=e.address,o=e.latitude,r=e.longitude;a.addWaypoint(new n.Maps.Directions.Waypoint({address:t,location:new n.Maps.Location(o,r)}))}),a.setRenderOptions({itineraryContainer:document.getElementById("printoutPanel")}),a.calculateDirections()})}}p.defaultProps=m;var f,h=a("NXoE"),g=a("G6/R"),v=a("Mu1M"),y=a("PeHE"),b=a("0+zf"),w=a.n(b),E="AvHBgtLyf4zbDhXESAuvFMSqIg1GgomX6DnDgw-CaXFeRmWVzvXPC55WveE4pJla",A=e=>{var t=Object(c["useState"])(!0),a=i()(t,2),n=a[0],o=a[1],r="string"===typeof e.center?e.center.split(","):[],s=i()(r,2),u=s[0],d=s[1],m=Array.isArray(e.points)?e.points.map(e=>{var t=e.split(","),a=i()(t,2),n=a[0],o=a[1];return{latitude:n,longitude:o}}):[],b=u&&d?{latitude:u,longitude:d}:m[0]&&{latitude:m[0].latitude,longitude:m[0].longitude},k=Array.isArray(e.walking)?e.walking.map(e=>{var t=e.split(","),a=i()(t,3),n=a[0],o=a[1],r=a[2];return{latitude:n,longitude:o,address:r}}):[],O=Array.isArray(e.driving)?e.driving.map(e=>{var t=e.split(","),a=i()(t,3),n=a[0],o=a[1],r=a[2];return{latitude:n,longitude:o,address:r}}):[];Object(c["useEffect"])(()=>{return()=>{"function"===typeof f&&f()}},[]);var M=e.fullscreen,j=M?w.a["map-fullscreen"]:"";return l.a.createElement("div",{className:j,style:{position:"relative"}},!M&&n&&l.a.createElement("div",Object.assign({className:w.a["map-mask"]},Object(v["a"])({onLongPress:()=>{o(!1)},onDblClick:()=>{f=Object(y["a"])(l.a.createElement(g["a"],null,l.a.createElement(A,Object.assign({fullscreen:!0},e))))}})),l.a.createElement(h["a"],{type:"iconunlock"})),l.a.createElement(p,{className:[w.a.map,j].join(" "),apiKey:E,center:b,points:m,walking:k,driving:O,zoom:e.zoom,aerial:e.aerial}))};t["a"]=A},xJKY:function(e,t,a){e.exports={"modal-root":"modal-root___33IwE","modal-wrapper":"modal-wrapper___2srJn","modal-close":"modal-close___3LihS"}},zv6B:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return l});a("q1tI");var n=a("7ljp"),o=a("7cJT");function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}const i={},c="wrapper";function l({components:e,...t}){return Object(n["a"])(c,r({},i,t,{components:e,mdxType:"MDXLayout"}),Object(n["a"])("h2",null,"TOUR SIX SEXY"),Object(n["a"])("h2",null,"BANGKOK"),Object(n["a"])("h2",null,"SURATTHANI 1"),Object(n["a"])("p",null,"Surat Thani Transport Station - Khao Lak"),Object(n["a"])(o["a"].Map,{driving:["9.1438932,99.3283169,Surat Thani Transport Station","8.9006588,98.5198817,Khao Sok Bus Stop","8.6668406,98.2527142,Khao Lak"]}),Object(n["a"])("h2",null,"KOH SIMILAN 2"),Object(n["a"])("p",null,"Manta Queen 1 - Khao Lak - Phuket bus terminal 2, by Scuba Adventures' mini bus.\nBus terminal - Krabi, by bus to Hat Yai, walked to Krabi town at 2 a.m.\nAwaked at 5 a.m, Lomprayah's bus terminal - Donsak Pier - Koh Phangan Thong Sala Pier - Rin Nai Beach."),Object(n["a"])("p",null,"541km, 18 hrs, of course short sleep, a carefully caculately roadmap, a great escape, what do you want?"),Object(n["a"])(o["a"].Map,{driving:["8.644791,98.251189,Khao Lak Scuba Adventures","7.917718,98.395462,Phuket Bus Terminal 2","8.102171,98.907734,Krabi","8.077127,98.904208,Lomprayah","9.318253,99.736982,Donsak","9.709127,99.984432,Thong Sala","9.671759,100.067371,Rin Nai"]}),Object(n["a"])("h2",null,"KOH PHANGAN 2"),Object(n["a"])(o["a"].HotelNights,{date:"2017-1-12",nights:5}),Object(n["a"])("h2",null,"BANGKOK"))}l.isMDXComponent=!0}}]);