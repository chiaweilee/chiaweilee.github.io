(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[44],{"0+zf":function(e,t,a){e.exports={map:"map___3iWvI","map-mask":"map-mask___18lyW","map-fullscreen":"map-fullscreen___hG-5F"}},10:function(e,t){},11:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},5:function(e,t){},6:function(e,t){},"6JAd":function(e,t,a){"use strict";a("XGli");var n=a("NHyu"),o=(a("ufv1"),a("QYgq")),r=a("qIgq"),i=a.n(r),c=(a("tU7J"),a("wFql")),l=a("q1tI"),s=a.n(l),u=a("99qe"),d=a.n(u),p=function(e){return s.a.createElement("span",{className:d.a.confidential,onClick:e.onClick},e.children)};a.d(t,"d",function(){return h}),a.d(t,"b",function(){return y}),a.d(t,"a",function(){return w});var m=a("CFOr"),f=c["a"].Text,g=c["a"].Paragraph,h="secretKey",b=e=>{var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),e.dispatchEvent(t)},v=(e,t)=>{var a=window.URL||window.webkitURL||window,n=new Blob([t]),o=document.createElementNS("http://www.w3.org/1999/xhtml","a");o.href=a.createObjectURL(n),o.download=e,b(o)},y=e=>new m(localStorage.getItem(h)).decode(e);t["c"]=function(e){var t=Object(l["useState"])(!0),a=i()(t,2),n=a[0],o=a[1],r=Object(l["useState"])(void 0),c=i()(r,2),u=c[0],d=c[1];return Object(l["useEffect"])(()=>{"string"===typeof e.children&&localStorage.getItem(h)&&d(y(e.children))},[n]),!n&&u?u:s.a.createElement(p,{onClick:()=>{o(!1)}},"string"===typeof e.children&&e.children.substr(0,100))};function w(e){var t=localStorage.getItem(h);if(!e.text)return null;var a=e.img?'<C.CImg src="':"<C.Cryptor>",r=e.img?'" />':"</C.Cryptor>",i=new m(t).encode(e.text),c="".concat(a).concat(e.img?e.name:i).concat(r);return s.a.createElement("div",null,s.a.createElement(g,{copyable:{text:c,onCopy:e.onCopy},style:{overflow:"hidden",textOverflow:"ellipsis"}},s.a.createElement(f,{code:!0},c)),s.a.createElement(o["a"],null),e.img&&s.a.createElement(n["a"],{onClick:()=>{v("".concat(e.name,".json")||!1,JSON.stringify(i))}},"Export"))}},7:function(e,t){},"7cJT":function(e,t,a){"use strict";var n,o=a("mjNm"),r=a("6JAd"),i=a("d6i3"),c=a.n(i),l=a("1l/V"),s=a.n(l),u=a("qIgq"),d=a.n(u),p=a("q1tI"),m=a.n(p),f=a("Mu1M"),g=a("PeHE"),h=a("G6/R"),b={position:"absolute",top:"0",bottom:"0",margin:"auto"},v=function(e){var t=e.src,a=e.alt,o=e.origin,r=void 0!==o&&o,i={src:r?t:"/home/assets/".concat(t),alt:a};return Object(p["useEffect"])(()=>{return()=>{"function"===typeof n&&n()}},[]),m.a.createElement("img",Object.assign({},i,Object(f["a"])({onDblClick:()=>{n=Object(g["a"])(m.a.createElement(h["a"],null,m.a.createElement("img",Object.assign({},i,{width:"100%",style:b}))))}})))},y=function(e){var t=Object(p["useState"])(!0),a=d()(t,2),n=a[0],o=a[1],i=Object(p["useState"])(void 0),l=d()(i,2),u=l[0],g=l[1],h=e.src,b=e.strict,y=e.alt;return Object(p["useEffect"])(()=>{s()(c.a.mark(function e(){var t;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!localStorage.getItem(r["d"])){e.next=7;break}return e.next=3,fetch("/home/assets/".concat(h,".json"));case 3:return e.next=5,e.sent.json();case 5:t=e.sent,t&&g(Object(r["b"])(t));case 7:case"end":return e.stop()}},e)}))()},[h]),u&&localStorage.getItem(r["d"])?n?m.a.createElement("img",Object.assign({},Object(f["a"])({longTouchTimeout:b?3e4:3e3,onLongPress:()=>{o(!1)}}),{src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAEALAAAAAABAAEAAAICRAEAOw==",alt:y,style:{height:"33vw"}})):m.a.createElement(v,{origin:!0,src:u,alt:y}):null},w=a("wd/R"),O=a.n(w),j=function(e){var t=Object(p["useState"])(!1),a=d()(t,2),n=a[0],o=a[1],r=e.date,i=e.nights;function c(){o(!n)}return m.a.createElement("div",{onClick:c,style:{marginBottom:"16px"}},m.a.createElement("i",null,O()(r).format("Do MMM, YYYY")),n&&"number"===typeof i&&m.a.createElement("i",null," - ",O()(r).add(i,"d").format("Do MMM, YYYY")),!n&&"number"===typeof i&&m.a.createElement("i",null,", ",i," nights"))},A=(a("oByq"),a("Wx4G")),E=function(e){var t=e.items,a=e.col,n=void 0===a?3:a;return m.a.createElement(A["a"],{data:t,columnNum:n,renderItem:e=>{return"string"===typeof e?m.a.createElement("div",{style:{backgroundImage:"url(".concat("/home/assets/".concat(e),")")}},m.a.createElement(v,{src:e,alt:""})):m.a.createElement("div",{style:{backgroundImage:"url(".concat("/home/assets/".concat(e.src),")")}},m.a.createElement(v,Object.assign({},e,{src:e.src,alt:e.alt})))}})};t["a"]={Map:o["a"],Cryptor:r["c"],CImg:y,HotelNights:j,Img:v,Imgs:E}},8:function(e,t){},9:function(e,t){},"99qe":function(e,t,a){e.exports={confidential:"confidential___3zs5A"}},"G6/R":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("NXoE"),i=a("xJKY"),c=a.n(i);t["a"]=function(e){var t=e.children,a=e.__unmount__;return o.a.createElement("div",{className:c.a["modal-root"]},o.a.createElement("div",{className:c.a["modal-wrapper"]},o.a.createElement("div",{className:c.a["modal-close"]},o.a.createElement(r["a"],{type:"iconclose",onClick:a})),t))}},IOGx:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return l});a("q1tI");var n=a("7ljp"),o=a("7cJT");function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}const i={},c="wrapper";function l({components:e,...t}){return Object(n["a"])(c,r({},i,t,{components:e,mdxType:"MDXLayout"}),Object(n["a"])("h1",null,"TOUR TWO BACKPACKER"),Object(n["a"])("h2",null,"KULA LUMPUR 1"),Object(n["a"])("h2",null,"KOTA KINABALU 1"),Object(n["a"])(o["a"].Map,{driving:["5.943993,116.050642,KKIA Terminal 2","5.9833774,116.0776038,Borneo Backpackers"]}),Object(n["a"])("p",null,"A couple get on the bus, sit behind me. They talked about is this bus go downtown.\nI turned and told them it did. They are lovers, from Wuhan.\nFall in love by riding. They just stay near by my hostel."),Object(n["a"])(o["a"].Cryptor,null,"3634fdd8beb043ac07410e73"),Object(n["a"])("h3",null,"SAPI"),Object(n["a"])(o["a"].Map,{points:["5.9834548,116.0775237"]}),Object(n["a"])("h2",null,"MABUL 1"),Object(n["a"])("p",null,"My phone out of power after landing. I found a sim card store for charging.\nI missed the transform. A guy ask to buy a SIM card,I ask can I take a ride.\nThen I found we start at the same hostel. Brasil."),Object(n["a"])(o["a"].Map,{driving:["4.313783,118.113794,Tawau Airport","4.479184,118.617147,Borneo Global Sipadan Backpackers"]}),Object(n["a"])("p",null,"Arrive I met feng cheche.\nAnd she will go penang after semporna."),Object(n["a"])(o["a"].Img,{src:"dd.jpg"}),Object(n["a"])("h3",null,"UNCLE CHANG BANGELOW"),Object(n["a"])(o["a"].Map,{points:["4.2477133,118.6271726"]}),Object(n["a"])(o["a"].Map,{points:["4.224935,118.683287"]}),Object(n["a"])(o["a"].Img,{src:"mabul-1.jgp"}),Object(n["a"])(o["a"].Img,{src:"mabul-2.jpg"}),Object(n["a"])("h2",null,"KOTA KINABALU 2"),Object(n["a"])("h3",null,"MAEILYNE"),Object(n["a"])("p",null,"You are far from home. You meet a girl. It's exciting, why not? You are attracted to her - it's in your eyes. Perhaps in hers as well. So you think something might happen; it's easy to believe, it's exciting. But she has a boyfriend so you are jealous."),Object(n["a"])(o["a"].Map,{points:["5.9830424,116.0764658"]}),Object(n["a"])("h2",null,"GERGORE TOWN"),Object(n["a"])(o["a"].Img,{src:"gt-1.jpg"}),Object(n["a"])(o["a"].Cryptor,null,"3226e6c2f7854f"),Object(n["a"])("h3",null,"DANNI"),Object(n["a"])(o["a"].Map,{walking:["5.420885,100.343897,Fort Cornwallis","5.421882,100.342654,DANNI","5.420896,100.337566,Love Ln","5.420208,100.335220,Ryokan Muntri Boutique Hostel"]}),Object(n["a"])("h3",null,"BAR"),Object(n["a"])(o["a"].Map,{walking:["5.418435,100.335625,Halab Penang","5.418612,100.336421,Love Ln","5.420208,100.335220,Ryokan Muntri Boutique Hostel"]}),Object(n["a"])("p",null,"On road back, just passed 7-Eleven corner, at the beginning of Love Ln I walk outside and girls walked inside.\nA motorcycle with two guys race beside me, I saw the guy in the back strangely stared us.\nFew seconds later motor with two policemen pass by, one of policeman look at us, seems like to checking if we are okay."),Object(n["a"])("p",null,"Night bar, riding danger"),Object(n["a"])("h3",null,"BEACH"),Object(n["a"])(o["a"].Map,{driving:["5.418612,100.336421,Love Ln","5.477992,100.254231,."]}),Object(n["a"])("h3",null,"NIGHT FOOD"),Object(n["a"])(o["a"].Map,{walking:["5.420208,100.335220,Ryokan Muntri Boutique Hostel","5.418612,100.336421,Love Ln","5.416457,100.332673,Kimberley Street Food Night Market"]}),Object(n["a"])("h3",null,"PENANG HILL"),Object(n["a"])(o["a"].Map,{walking:["5.423528,100.269514,Penang Hill Upper Station","5.418529,100.263881,Ice cream store","5.4181686,100.2628177,Monkey Family"]}),Object(n["a"])("h2",null,"KULA LUMPUR 2"))}l.isMDXComponent=!0},Mu1M:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a("p0pE"),o=a.n(n),r=function(){var e,t,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=o()({longTouchTimeout:1e3,dblclickTimeout:200},a),r=n.longTouchTimeout,i=n.dblclickTimeout,c=n.onLongPress,l=n.onClick,s=n.onDblClick,u=n.style,d=void 0===u?{}:u,p=0,m=0;return{style:o()({},d,{touchAction:"pan-y"}),onContextMenu(e){e.preventDefault()},onTouchStart(a){t=!1,e=a,p=setTimeout(function(){t=!0,"function"===typeof c&&c(e)},r),a.preventDefault()},onTouchMove(t){var a=t.touches[0];Math.abs(a.clientY-e.touches[0].touchY)<10&&t.preventDefault()},onTouchEnd(){return p&&!t&&(clearTimeout(p),p=0,m+=1,setTimeout(()=>{1===m?"function"===typeof l&&l(e):2===m&&"function"===typeof s&&s(e),m=0},i)),!1}}}},NXoE:function(e,t,a){"use strict";a("Pwec");var n=a("CtXQ");t["a"]=n["a"].createFromIconfontCN({scriptUrl:"//at.alicdn.com/t/font_1280925_kzicrv7yexi.js"})},PeHE:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a("q1tI"),o=a("i8i4");function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;if(!e||!t)return()=>{};var a=document.createElement("div");function r(){o["unmountComponentAtNode"](a),a&&a.parentNode&&a.parentNode.removeChild(a)}return t.appendChild(a),"function"===typeof e.type?o["render"](n["cloneElement"](e,{__unmount__:r}),a):o["render"](e,a),r}},mjNm:function(e,t,a){"use strict";var n,o,r=a("qIgq"),i=a.n(r),c=a("q1tI"),l=a.n(c),s=a("p0pE"),u=a.n(s);function d(e){return window.Microsoft?Promise.resolve():(o||(o=new Promise((t,a)=>{var o="bingAPIReady",r="https://www.bing.com/api/maps/mapcontrol?callback=".concat(o,"&setLang=en");e&&(r+="&key=".concat(e));var i=document.createElement("script");i.type="text/javascript",i.async=!0,i.defer=!0,i.src=r,window.bingAPIReady=(()=>{n=window.Microsoft,t()}),i.onerror=(e=>{a(e)}),document.body.appendChild(i)})),o)}var p={zoom:14};class m extends c["PureComponent"]{constructor(){super(...arguments),this.mapRef=c["createRef"]()}render(){return c["createElement"]("div",{ref:this.mapRef,className:this.props.className})}componentDidMount(){d(this.props.apiKey).then(()=>{this.initMap(),this.walking(),this.driving(),this.addPoint(),this.setCenter()})}componentWillUnmount(){this.map&&this.map.dispose()}initMap(){var e=this.props.aerial;this.map=new n.Maps.Map(this.mapRef.current,u()({},e?{mapTypeId:n.Maps.MapTypeId.aerial}:{},{customMapStyle:{elements:{area:{fillColor:"#b6e591"},water:{fillColor:"#75cff0"},tollRoad:{fillColor:"#a964f4",strokeColor:"#a964f4"},arterialRoad:{fillColor:"#ffffff",strokeColor:"#d7dae7"},road:{fillColor:"#ffa35a",strokeColor:"#ff9c4f"},street:{fillColor:"#ffffff",strokeColor:"#ffffff"},transit:{fillColor:"#000000"}},settings:{landColor:"#efe9e1"}}}))}setCenter(){var e=this.props,t=e.center;t=void 0===t?{}:t;var a=t.latitude,o=t.longitude,r=e.zoom;a&&o&&this.map.setView({center:new n.Maps.Location(a,o),zoom:r})}addPoint(){var e=this.props.points,t=void 0===e?[]:e;Array.isArray(t)&&t.length&&t.forEach(e=>{var t=e.latitude,a=e.longitude,o=new n.Maps.Pushpin(new n.Maps.Location(t,a),null),r=new n.Maps.Layer;r.add(o),this.map.layers.insert(r)})}walking(){var e=this.props.walking,t=void 0===e?[]:e;Array.isArray(t)&&t.length&&this.route(t,"walking")}driving(){var e=this.props.driving,t=void 0===e?[]:e;Array.isArray(t)&&t.length&&this.route(t,"driving")}route(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"walking";Array.isArray(e)&&e.length&&n.Maps.loadModule("Microsoft.Maps.Directions",()=>{var a=new n.Maps.Directions.DirectionsManager(this.map);a.setRequestOptions({routeMode:n.Maps.Directions.RouteMode[t]}),e.forEach(e=>{var t=e.address,o=e.latitude,r=e.longitude;a.addWaypoint(new n.Maps.Directions.Waypoint({address:t,location:new n.Maps.Location(o,r)}))}),a.setRenderOptions({itineraryContainer:document.getElementById("printoutPanel")}),a.calculateDirections()})}}m.defaultProps=p;var f,g=a("NXoE"),h=a("G6/R"),b=a("Mu1M"),v=a("PeHE"),y=a("0+zf"),w=a.n(y),O="AvHBgtLyf4zbDhXESAuvFMSqIg1GgomX6DnDgw-CaXFeRmWVzvXPC55WveE4pJla",j=e=>{var t=Object(c["useState"])(!0),a=i()(t,2),n=a[0],o=a[1],r="string"===typeof e.center?e.center.split(","):[],s=i()(r,2),u=s[0],d=s[1],p=Array.isArray(e.points)?e.points.map(e=>{var t=e.split(","),a=i()(t,2),n=a[0],o=a[1];return{latitude:n,longitude:o}}):[],y=u&&d?{latitude:u,longitude:d}:p[0]&&{latitude:p[0].latitude,longitude:p[0].longitude},A=Array.isArray(e.walking)?e.walking.map(e=>{var t=e.split(","),a=i()(t,3),n=a[0],o=a[1],r=a[2];return{latitude:n,longitude:o,address:r}}):[],E=Array.isArray(e.driving)?e.driving.map(e=>{var t=e.split(","),a=i()(t,3),n=a[0],o=a[1],r=a[2];return{latitude:n,longitude:o,address:r}}):[];Object(c["useEffect"])(()=>{return()=>{"function"===typeof f&&f()}},[]);var M=e.fullscreen,k=M?w.a["map-fullscreen"]:"";return l.a.createElement("div",{className:k,style:{position:"relative"}},!M&&n&&l.a.createElement("div",Object.assign({className:w.a["map-mask"]},Object(b["a"])({onLongPress:()=>{o(!1)},onDblClick:()=>{f=Object(v["a"])(l.a.createElement(h["a"],null,l.a.createElement(j,Object.assign({fullscreen:!0},e))))}})),l.a.createElement(g["a"],{type:"iconunlock"})),l.a.createElement(m,{className:[w.a.map,k].join(" "),apiKey:O,center:y,points:p,walking:A,driving:E,zoom:e.zoom,aerial:e.aerial}))};t["a"]=j},xJKY:function(e,t,a){e.exports={"modal-root":"modal-root___33IwE","modal-wrapper":"modal-wrapper___2srJn","modal-close":"modal-close___3LihS"}}}]);