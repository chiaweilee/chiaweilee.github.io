(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[62],{"0+zf":function(e,t,a){e.exports={map:"map___3iWvI","map-mask":"map-mask___18lyW","map-fullscreen":"map-fullscreen___hG-5F"}},"G6/R":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("NXoE"),i=a("xJKY"),l=a.n(i);t["a"]=function(e){var t=e.children,a=e.__unmount__;return o.a.createElement("div",null,o.a.createElement("div",{className:l.a["modal-mask"]}),o.a.createElement("div",{className:l.a["modal-wrap"]},o.a.createElement("div",{className:l.a["modal-close"]},o.a.createElement(r["a"],{type:"iconclose",onClick:a})),t))}},Mu1M:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a("p0pE"),o=a.n(n),r=function(){var e,t,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=o()({longTouchTimeout:1e3,dblclickTimeout:200},a),r=n.longTouchTimeout,i=n.dblclickTimeout,l=n.onLongPress,s=n.onClick,c=n.onDblClick,u=n.style,p=void 0===u?{}:u,d=0,m=0;return{style:o()({},p,{touchAction:"pan-y"}),onContextMenu(e){e.preventDefault()},onTouchStart(a){t=!1,e=a,d=setTimeout(function(){t=!0,"function"===typeof l&&l(e)},r),a.preventDefault()},onTouchMove(t){var a=t.touches[0];Math.abs(a.clientY-e.touches[0].touchY)<10&&t.preventDefault()},onTouchEnd(){return d&&!t&&(clearTimeout(d),d=0,m+=1,setTimeout(()=>{1===m?"function"===typeof s&&s(e):2===m&&"function"===typeof c&&c(e),m=0},i)),!1}}}},NXoE:function(e,t,a){"use strict";a("Pwec");var n=a("CtXQ");t["a"]=n["a"].createFromIconfontCN({scriptUrl:"//at.alicdn.com/t/font_1280925_kzicrv7yexi.js"})},PeHE:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a("q1tI"),o=a("i8i4");function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;if(!e||!t)return()=>{};var a=document.createElement("div");function r(){o["unmountComponentAtNode"](a),a&&a.parentNode&&a.parentNode.removeChild(a)}return t.appendChild(a),"function"===typeof e.type?o["render"](n["cloneElement"](e,{__unmount__:r}),a):o["render"](e,a),r}},mjNm:function(e,t,a){"use strict";var n,o,r=a("qIgq"),i=a.n(r),l=a("q1tI"),s=a.n(l),c=a("p0pE"),u=a.n(c);function p(e){return window.Microsoft?Promise.resolve():(o||(o=new Promise((t,a)=>{var o="bingAPIReady",r="https://www.bing.com/api/maps/mapcontrol?callback=".concat(o,"&setLang=en");e&&(r+="&key=".concat(e));var i=document.createElement("script");i.type="text/javascript",i.async=!0,i.defer=!0,i.src=r,window.bingAPIReady=(()=>{n=window.Microsoft,t()}),i.onerror=(e=>{a(e)}),document.body.appendChild(i)})),o)}var d={zoom:14};class m extends l["PureComponent"]{constructor(){super(...arguments),this.mapRef=l["createRef"]()}render(){return l["createElement"]("div",{ref:this.mapRef,className:this.props.className})}componentDidMount(){p(this.props.apiKey).then(()=>{this.initMap(),this.walking(),this.driving(),this.addPoint(),this.setCenter()})}componentWillUnmount(){this.map&&this.map.dispose()}initMap(){var e=this.props.aerial;this.map=new n.Maps.Map(this.mapRef.current,u()({},e?{mapTypeId:n.Maps.MapTypeId.aerial}:{},{customMapStyle:{elements:{area:{fillColor:"#b6e591"},water:{fillColor:"#75cff0"},tollRoad:{fillColor:"#a964f4",strokeColor:"#a964f4"},arterialRoad:{fillColor:"#ffffff",strokeColor:"#d7dae7"},road:{fillColor:"#ffa35a",strokeColor:"#ff9c4f"},street:{fillColor:"#ffffff",strokeColor:"#ffffff"},transit:{fillColor:"#000000"}},settings:{landColor:"#efe9e1"}}}))}setCenter(){var e=this.props,t=e.center;t=void 0===t?{}:t;var a=t.latitude,o=t.longitude,r=e.zoom;a&&o&&this.map.setView({center:new n.Maps.Location(a,o),zoom:r})}addPoint(){var e=this.props.points,t=void 0===e?[]:e;Array.isArray(t)&&t.length&&t.forEach(e=>{var t=e.latitude,a=e.longitude,o=new n.Maps.Pushpin(new n.Maps.Location(t,a),null),r=new n.Maps.Layer;r.add(o),this.map.layers.insert(r)})}walking(){var e=this.props.walking,t=void 0===e?[]:e;Array.isArray(t)&&t.length&&this.route(t,"walking")}driving(){var e=this.props.driving,t=void 0===e?[]:e;Array.isArray(t)&&t.length&&this.route(t,"driving")}route(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"walking";Array.isArray(e)&&e.length&&n.Maps.loadModule("Microsoft.Maps.Directions",()=>{var a=new n.Maps.Directions.DirectionsManager(this.map);a.setRequestOptions({routeMode:n.Maps.Directions.RouteMode[t]}),e.forEach(e=>{var t=e.address,o=e.latitude,r=e.longitude;a.addWaypoint(new n.Maps.Directions.Waypoint({address:t,location:new n.Maps.Location(o,r)}))}),a.setRenderOptions({itineraryContainer:document.getElementById("printoutPanel")}),a.calculateDirections()})}}m.defaultProps=d;var f,h=a("NXoE"),v=a("G6/R"),y=a("Mu1M"),b=a("PeHE"),g=a("0+zf"),k=a.n(g),w="AvHBgtLyf4zbDhXESAuvFMSqIg1GgomX6DnDgw-CaXFeRmWVzvXPC55WveE4pJla",M=e=>{var t=Object(l["useState"])(!0),a=i()(t,2),n=a[0],o=a[1],r="string"===typeof e.center?e.center.split(","):[],c=i()(r,2),u=c[0],p=c[1],d=Array.isArray(e.points)?e.points.map(e=>{var t=e.split(","),a=i()(t,2),n=a[0],o=a[1];return{latitude:n,longitude:o}}):[],g=u&&p?{latitude:u,longitude:p}:d[0]&&{latitude:d[0].latitude,longitude:d[0].longitude},j=Array.isArray(e.walking)?e.walking.map(e=>{var t=e.split(","),a=i()(t,3),n=a[0],o=a[1],r=a[2];return{latitude:n,longitude:o,address:r}}):[],C=Array.isArray(e.driving)?e.driving.map(e=>{var t=e.split(","),a=i()(t,3),n=a[0],o=a[1],r=a[2];return{latitude:n,longitude:o,address:r}}):[];Object(l["useEffect"])(()=>{return()=>{"function"===typeof f&&f()}},[]);var E=e.fullscreen,O=E?k.a["map-fullscreen"]:"";return s.a.createElement("div",{className:O,style:{position:"relative"}},!E&&n&&s.a.createElement("div",Object.assign({className:k.a["map-mask"]},Object(y["a"])({onLongPress:()=>{o(!1)},onDblClick:()=>{f=Object(b["a"])(s.a.createElement(v["a"],null,s.a.createElement(M,Object.assign({fullscreen:!0},e))))}})),s.a.createElement(h["a"],{type:"iconunlock"})),s.a.createElement(m,{className:[k.a.map,O].join(" "),apiKey:w,center:g,points:d,walking:j,driving:C,zoom:e.zoom,aerial:e.aerial}))};t["a"]=M},o8uC:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return s});a("q1tI");var n=a("7ljp"),o=a("mjNm");function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}const i={},l="wrapper";function s({components:e,...t}){return Object(n["a"])(l,r({},i,t,{components:e,mdxType:"MDXLayout"}),Object(n["a"])("h2",null,"The Great Escape"),Object(n["a"])(o["a"],{driving:["9.1438932,99.3283169,Surat Thani Transport Station","8.9006588,98.5198817,Khao Sok Bus Stop","8.6668406,98.2527142,Khao Lak"],mdxType:"Map"}),Object(n["a"])(o["a"],{points:["8.6558474,97.6437167"],center:"8.584864,97.638397",zoom:10,mdxType:"Map"}),Object(n["a"])("p",null,"To catch up with Full Moon Party, I have to travel 541km distance in 18 hours."),Object(n["a"])("h4",null,"Day 1, afternoon"),Object(n["a"])("p",null,"Departure from Koh Similan by Manta Queen 1."),Object(n["a"])("h4",null,"Day 1, about 18:00"),Object(n["a"])("p",null,"From Khao Lak Scuba Adventures to Phuket Bus Terminal 2 by Adventures' mini van."),Object(n["a"])("h4",null,"Day 1, about 22:00"),Object(n["a"])("p",null,"From Phuket Bus Terminal 2 to Krabi by final night bus to HAT YAI, arrived at about 01:00."),Object(n["a"])("h4",null,"Day 2, about 07:00"),Object(n["a"])("p",null,"Take Lomprayah's bus to Donsak Pier."),Object(n["a"])("h4",null,"Day 2, about 09:00"),Object(n["a"])("p",null,"Donsak Pier to Koh Phangan by Lomprayah's speed boat."),Object(n["a"])("h4",null,"Day 2, about 12:00"),Object(n["a"])("p",null,"Mini van from Thong Sala Pier to Rin Nai Beach."),Object(n["a"])(o["a"],{driving:["8.644791,98.251189,Khao Lak Scuba Adventures","7.917718,98.395462,Phuket Bus Terminal 2","8.102171,98.907734,Krabi","8.077127,98.904208,Lomprayah","9.318253,99.736982,Donsak","9.709127,99.984432,Thong Sala","9.671759,100.067371,Rin Nai"],mdxType:"Map"}))}s.isMDXComponent=!0},xJKY:function(e,t,a){e.exports={"modal-mask":"modal-mask___2Eqm9","modal-wrap":"modal-wrap___3WcUG","modal-close":"modal-close___3LihS"}}}]);