(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[50],{"0+zf":function(e,a,t){e.exports={map:"map___3iWvI","map-mask":"map-mask___18lyW","map-fullscreen":"map-fullscreen___hG-5F","map-wrapper":"map-wrapper___3T9JX"}},10:function(e,a){},11:function(e,a){},2:function(e,a){},3:function(e,a){},4:function(e,a){},5:function(e,a){},6:function(e,a){},"6JAd":function(e,a,t){"use strict";t("XGli");var c=t("NHyu"),n=(t("ufv1"),t("QYgq")),o=t("qIgq"),r=t.n(o),d=(t("tU7J"),t("wFql")),i=t("q1tI"),l=t.n(i),f=t("99qe"),s=t.n(f),b=function(e){return l.a.createElement("span",{className:s.a.confidential,onClick:e.onClick},e.children)};t.d(a,"d",function(){return h}),t.d(a,"b",function(){return v}),t.d(a,"a",function(){return w});var u=t("CFOr"),m=d["a"].Text,p=d["a"].Paragraph,h="secretKey",g=e=>{var a=document.createEvent("MouseEvents");a.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),e.dispatchEvent(a)},y=(e,a)=>{var t=window.URL||window.webkitURL||window,c=new Blob([a]),n=document.createElementNS("http://www.w3.org/1999/xhtml","a");n.href=t.createObjectURL(c),n.download=e,g(n)},v=e=>new u(localStorage.getItem(h)).decode(e);a["c"]=function(e){var a=Object(i["useState"])(!0),t=r()(a,2),c=t[0],n=t[1],o=Object(i["useState"])(void 0),d=r()(o,2),f=d[0],s=d[1];return Object(i["useEffect"])(()=>{"string"===typeof e.children&&localStorage.getItem(h)&&s(v(e.children))},[c]),!c&&f?f:l.a.createElement(b,{onClick:()=>{n(!1)}},"string"===typeof e.children&&e.children.substr(0,100))};function w(e){var a=localStorage.getItem(h);if(!e.text)return null;var t=e.img?'<C.CImg src="':"<C.Cryptor>",o=e.img?'" />':"</C.Cryptor>",r=new u(a).encode(e.text),d="".concat(t).concat(e.img?e.name:r).concat(o);return l.a.createElement("div",null,l.a.createElement(p,{copyable:{text:d,onCopy:e.onCopy},style:{overflow:"hidden",textOverflow:"ellipsis"}},l.a.createElement(m,{code:!0},d)),l.a.createElement(n["a"],null),e.img&&l.a.createElement(c["a"],{onClick:()=>{y("".concat(e.name,".json")||!1,JSON.stringify(r))}},"Export"))}},7:function(e,a){},"7cJT":function(e,a,t){"use strict";var c,n=t("mjNm"),o=t("6JAd"),r=t("d6i3"),d=t.n(r),i=t("1l/V"),l=t.n(i),f=t("qIgq"),s=t.n(f),b=t("q1tI"),u=t.n(b),m=t("Mu1M"),p=t("PeHE"),h=t("G6/R"),g=function(e){var a=e.src,t=e.alt,n=e.origin,o=void 0!==n&&n,r={src:o?a:"/home/assets/".concat(a),alt:t};return Object(b["useEffect"])(()=>{return()=>{"function"===typeof c&&c()}},[]),u.a.createElement("img",Object.assign({},r,Object(m["a"])({onDblClick:()=>{c=Object(p["a"])(u.a.createElement(h["a"],null,u.a.createElement("img",Object.assign({},r,{width:"100%"}))))}})))},y=function(e){var a=Object(b["useState"])(!0),t=s()(a,2),c=t[0],n=t[1],r=Object(b["useState"])(void 0),i=s()(r,2),f=i[0],p=i[1],h=e.src,y=e.strict,v=e.alt;return Object(b["useEffect"])(()=>{l()(d.a.mark(function e(){var a;return d.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!localStorage.getItem(o["d"])||c){e.next=7;break}return e.next=3,fetch("/home/assets/".concat(h,".json"));case 3:return e.next=5,e.sent.json();case 5:a=e.sent,a&&p(Object(o["b"])(a));case 7:case"end":return e.stop()}},e)}))()},[h,c]),localStorage.getItem(o["d"])?c?u.a.createElement("img",Object.assign({},Object(m["a"])({longTouchTimeout:y?3e4:3e3,onLongPress:()=>{n(!1)}}),{src:"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",alt:v,style:{height:"33vw"}})):u.a.createElement(g,{origin:!0,src:f,alt:v}):null},v=t("wd/R"),w=t.n(v),O=function(e){var a=Object(b["useState"])(!1),t=s()(a,2),c=t[0],n=t[1],o=e.date,r=e.nights;function d(){n(!c)}return u.a.createElement("div",{onClick:d,style:{marginBottom:"16px"}},u.a.createElement("i",null,w()(o).format("Do MMM, YYYY")),c&&"number"===typeof r&&u.a.createElement("i",null," - ",w()(o).add(r,"d").format("Do MMM, YYYY")),!c&&"number"===typeof r&&u.a.createElement("i",null,", ",r," nights"))},j=(t("oByq"),t("Wx4G")),E=function(e){var a=e.items,t=e.col,c=void 0===t?3:t;return u.a.createElement(j["a"],{data:a,columnNum:c,renderItem:e=>{return"string"===typeof e?u.a.createElement("div",{style:{backgroundImage:"url(".concat("/home/assets/".concat(e),")")}},u.a.createElement(g,{src:e,alt:""})):u.a.createElement("div",{style:{backgroundImage:"url(".concat("/home/assets/".concat(e.src),")")}},u.a.createElement(g,Object.assign({},e,{src:e.src,alt:e.alt})))}})};a["a"]={Map:n["a"],Cryptor:o["c"],CImg:y,HotelNights:O,Img:g,Imgs:E}},8:function(e,a){},9:function(e,a){},"99qe":function(e,a,t){e.exports={confidential:"confidential___3zs5A"}},"G6/R":function(e,a,t){"use strict";var c=t("q1tI"),n=t.n(c),o=t("NXoE"),r=t("xJKY"),d=t.n(r);a["a"]=function(e){var a=e.children,t=e.__unmount__;return Object(c["useEffect"])(()=>{return document.getElementsByTagName("body")[0].style.height="100%",document.getElementsByTagName("body")[0].style.overflow="hidden",()=>{document.getElementsByTagName("body")[0].style.height="",document.getElementsByTagName("body")[0].style.overflow=""}},[]),n.a.createElement("div",null,n.a.createElement("div",{className:d.a["modal-mask"]}),n.a.createElement("div",{className:d.a["modal-wrap"]},n.a.createElement("div",{className:d.a["modal-close"]},n.a.createElement(o["a"],{type:"iconclose",onClick:t})),a))}},Mu1M:function(e,a,t){"use strict";t.d(a,"a",function(){return o});var c=t("p0pE"),n=t.n(c),o=function(){var e,a,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=n()({longTouchTimeout:1e3,dblclickTimeout:200},t),o=c.longTouchTimeout,r=c.dblclickTimeout,d=c.onLongPress,i=c.onClick,l=c.onDblClick,f=c.style,s=void 0===f?{}:f,b=0,u=0;return{style:n()({},s,{touchAction:"pan-y"}),onContextMenu(e){e.preventDefault()},onTouchStart(t){a=!1,e=t,b=setTimeout(function(){a=!0,"function"===typeof d&&d(e)},o),t.preventDefault()},onTouchMove(a){var t=a.touches[0];Math.abs(t.clientY-e.touches[0].touchY)<10&&a.preventDefault()},onTouchEnd(){return b&&!a&&(clearTimeout(b),b=0,u+=1,setTimeout(()=>{1===u?"function"===typeof i&&i(e):2===u&&"function"===typeof l&&l(e),u=0},r)),!1}}}},NXoE:function(e,a,t){"use strict";t("Pwec");var c=t("CtXQ");a["a"]=c["a"].createFromIconfontCN({scriptUrl:"//at.alicdn.com/t/font_1280925_kzicrv7yexi.js"})},PeHE:function(e,a,t){"use strict";t.d(a,"a",function(){return o});var c=t("q1tI"),n=t("i8i4");function o(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;if(!e||!a)return()=>{};var t=document.createElement("div");function o(){n["unmountComponentAtNode"](t),t&&t.parentNode&&t.parentNode.removeChild(t)}return a.appendChild(t),"function"===typeof e.type?n["render"](c["cloneElement"](e,{__unmount__:o}),t):n["render"](e,t),o}},im4i:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return i});t("q1tI");var c=t("7ljp"),n=t("7cJT");function o(){return o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c])}return e},o.apply(this,arguments)}const r={},d="wrapper";function i({components:e,...a}){return Object(c["a"])(d,o({},r,a,{components:e,mdxType:"MDXLayout"}),Object(c["a"])("h1",null,"TOUR SENVEN MEMORY"),Object(c["a"])("p",null,"2 AM, 4 hrs, flight to KULA LUMPUR.\nKOTA KINABALU from 9 Am to 12 Am, directly.\nAirport bus to bus station, and mini bus to park."),Object(c["a"])(n["a"].Map,{driving:["5.9436606,116.0487216,KKIA Terminal 2","5.9809019,116.0763801,Airport Bus Station","6.0076652,116.5425745,Mount Kinabalu National Park","6.0113287,116.5388984,Hill Lodge"]}),Object(c["a"])("h2",null,"MOUNT KINABALU"),Object(c["a"])(n["a"].Map,{walking:["6.0291003,116.5462398,Timpohon Gate","6.0589064,116.5651771,Laban Rata Resthouse","6.0752333,116.5584096,Gunung Kinabalu"]}),Object(c["a"])("h3",null,"LOW'S PEAK"),Object(c["a"])("p",null,Object(c["a"])("em",{parentName:"p"},"The last leg of a journey just marks the halfway point.")),Object(c["a"])("p",null,"I slipped on a rock and my knees hit, just at the feat of peak.\nI imagined that I stood at the peak, no sunrise, saw what I've saught on photos, lonely.\nThen I give up. It's necessary to protect my kness as I will go scuba dive days later."),Object(c["a"])("p",null,"I hit my kness twice again when desend."),Object(c["a"])("h2",null,"KOTA KINIBALU 3"),Object(c["a"])("p",null,"My kness can not band, extremely pantful pain when walk.\nI slowly move to a drug store,"),Object(c["a"])("h2",null,"SEA VENTURES"),Object(c["a"])("p",null,"Paradise but not Sipadan, located just off shore Mabul Island. Minutes away from the Rig, the dive site is made up of artificial house reef where old dive boats were sunk, man-made structure such as pyramids and crates are now home to abundance of marine life. The artificial reef is a collaboration work of resorts within and nearby Mabul."),Object(c["a"])("p",null,'It named "Paradise 2".'),Object(c["a"])(n["a"].Map,{aerial:!0,zoom:15,points:["4.250431,118.630882"]}),Object(c["a"])("h3",null,"Kapalai"),Object(c["a"])(n["a"].Img,{src:"00005170-0001.jpg"}),Object(c["a"])(n["a"].Img,{src:"00025100-0002.jpg"}),Object(c["a"])("h2",null,"KOH SAMUI"),Object(c["a"])("h2",null,"FULLMOON PARTY 3"),Object(c["a"])("p",null,"drunkards, goats, hookers, drugsters and tourists."),Object(c["a"])(n["a"].Img,{src:"vicky-fish.jpg"}),Object(c["a"])("p",null,'I found a camera in the sand. I asked around, it belongs to nobody. I danced and hang camera over my head. Later, a guy found me, it\'s his camera. I asked him to check photos in the camera. "Yes, they are!", These must be his important memories.'),Object(c["a"])("p",null,'Middle night, where the music from the beach party is audible, a couple that we should be danced in the party found me. "It\'s him...a good guy who found a camera..." The guy told her girlfriend. We took photos, and they should uploaded. Unfortunately, I never found it.'),Object(c["a"])("p",null,"After that I took speed boat back to KOH SAMUI."),Object(c["a"])("h2",null,"SONGKRAN 205X"),Object(c["a"])(n["a"].Map,{walking:["9.5179429,100.055656,Samui Hostel","9.5323031,100.0648453,."]}),Object(c["a"])(n["a"].CImg,{src:"bitch.jpg"}),Object(c["a"])("p",null,"green dreadlocks on party"),Object(c["a"])("p",null,"green dreadlocks on pier"),Object(c["a"])("p",null,"green dreadlocks on Songkran"),Object(c["a"])("p",null,"green dreadlocks in dark"),Object(c["a"])(n["a"].Cryptor,null,"2c3deadff7af52a742122163f59ccf406ce0ae747fd1443142ced7c4ea8e8e80675b2727eb43862aaf312bc5f97f86cd4eb94cfbeb47bdb9527a268f656ee35dedc95e9e0b4cea4c32a4453c61c4dfdee55881509659d1652166e3b406942534c0c934301f003d4470b96cd153c4b1f01ca0f39e6acc1eaf80fa1dcc041e53c0a91f1e998380ff7f48232de1197ee0b3c2b12536d67667a63be9e180965eb8d35e75c0771c52940191c3e9d2fad5195a52f9ef0e0875a7dda7fd2eede3c800033a307bffe819142da2f84f4169e4dc6347e871cb213d83ee30ec778590422ab4842b14fa8bbd8a0a239abe851bd7732fec42d86555c36c174d60be26df0a2eee17f4531b9aaa4ee6eb958e34f892acda192cd129072a302bb5d40b89ed5e56f8932f8e12097f003e317265c5ed0b6b4508d13d524f71f5bb6dc3b680d49a578a23bf02604a1b74696df0e36d73c4e0b4aaad5e6383915d8269dd9cf2c833f450c6346dad7a0dabf5e3f57288d62e8eb6bac1045e50f7c62be50c1fb956b10552242debb8ed6b9f6d8b4e45b4b17dae37cda414ad8dc39e8036a5d1abc1918b22b8c91b83bd4a51c058c7d59025d3693051359f4edd1d2f03a28215aae5cf09ef82e5cd74310dbc5fed103b26f79453bbe9c0cc0885814f156679af4c19169e6a436138f0be0e7c9cd839ae759feb8c8ab202fe8b343fe415296f3a5b8ae7"),Object(c["a"])("br",null),Object(c["a"])(n["a"].Map,{walking:["9.5179429,100.055656,Samui Hostel","9.5256037,100.0567723,Irish Pub"]}),Object(c["a"])(n["a"].Cryptor,null,"2f3deadff7951ab20e002371f58ac85570e0b67a7dd0177e468bd4c8e59fc6c1615a7575ec439826f5363a91c43092c74eb94afae609b6f040616398316fe544e1804382014ce54836ed452e29cd96c2f050c4169b5ad565206db1e0089d6026c19b603419542a4478a32b935ed5ada711a0ef9e6ecc0bfccce81fcd4f1e65c1e81c0699c7d2ff63072333a54a67fce3dce8712c866467b069f2e684d157eb890c5dd432065995139786afc9fad5511353aba70f1f26a3c0b7a931a8ecd2445721376bb8f318572ea2ee4f4c68a0cc394980"),Object(c["a"])("br",null),Object(c["a"])(n["a"].Cryptor,null,"283dea91b1b956b642122f79b09ccf4876a7fe7966c60a374a899adde598ddc16b5a7322eb478463bd313dc5c43798cb55ea05b4d141bfb94a7072dc7962f216bfc95782104cea482eec452b7bce8f96eb5ac7169e4c852b2c60fab401962467da8c21241e113a0c7db87c9f11d5aaa71eb0f4da678901eac2bf32da581e7ad2e708569fcf9ded740c763cb3057feba791f0713c987b70af26f3fdc1961ffacb437fc93f155989138787afcef4ca145a52edef071875adc3a7f379c1f99c50023e2c6fece509142ca9aa074674a0cd2c09c434d5683a83a922a22081905f67a28d6a1eb48eeecb122690ed9554cf646aff47d97110d025014028b03ada5e3fe007f55d5eb0f95ce2f498807cce88e9970636cc2f53203a2bb1c94585af0a51bd896a905b167b4e6a27646580a3183e5809983b174c6fbce86784e2"),Object(c["a"])("br",null),Object(c["a"])(n["a"].Cryptor,null,"2f3dea91a3b448b71115607bb3c8ce556be0bb7567d116374a89968df083cbc17c516530e24b8f35b4362380902f9dc95cea5ee6e709b7f8427026947475a051acd340c6440ef04635ef0d3b29c99ac4a450c451d340d565286ffcfb138c6026da8635291254335539b96e925a8de5e617a1bdca6acc02af80f611da0a5f32c2fc050099d1debe790d247da3056efce3c3f4323c9f6267a669f5ef9bd758fd874d62df7d0545db1b84c3e2c7bbca181d55ffaa04036fa0c8efb130e3e89c541f202a7decf343140ca9e41a4e63f2c42f0bc53899753e94fd36be698e991a2aa2932917b384a98a162e8dbe9111d47766fc0edf7f57cf29070869b92c9b4233e11afc0f1ba6fe41efa787c12ebd94e4d2563fcc3354317e7fb1d000cca8101ef5847dc217106a456a2369748cf1092a4906943b174b23aaf36edeb691c38117cd50b40b29480a692b28f2a6696296ada0e5b04b79c9df79853a8996e1d972f21fca3f67f92e16a6fee3e77f81826d91aeedc51c1052bbca2bec4950aa06e2025a2f26aaa3f32e8528910b55e6ac71a223c8b653e9f9dcd19028b386aaca84876ebbcb5785f84b499851c28791329c73714e219f44d317320de0"),Object(c["a"])("br",null),Object(c["a"])(n["a"].Cryptor,null,"283dea91b4b357a00705607cb09a874979a9ac3533e70c3b048dd2c8e780cb8529576227ae469826a6276f84de3bd1dc48f547f1e609bbeb49606898316fe544edc751981009f00933fc172e79d2d196cc59d316915ac13c6965f4f814d82235dd80332212587e447ca52b9d58d1e5f70ca9edc722c802ebcceb1fd14e5b609da93f1e998385fb7f1c7632b41e2af1abd4b13536996622a327e2ae99de50edc04430de7a17169d118e97afcaf3c3510949e2ac011426b9cab6b33cfbfe9c421226286bfdee4d5c20b5aa1b4b6fe7cd3e498047d1647191ec2db8209491167eab846a1dbb9ea6d8112492be951b98766efc4697775ec36c11477fb968cf423fa601ed184ba0aa49ede3c1c732e98facc31e3c8523463770"),Object(c["a"])("br",null),Object(c["a"])(n["a"].CImg,{src:"IMG_20170413_234141.jpg",strict:!0}))}i.isMDXComponent=!0},mjNm:function(e,a,t){"use strict";var c,n,o=t("qIgq"),r=t.n(o),d=t("q1tI"),i=t.n(d),l=t("p0pE"),f=t.n(l);function s(e){return window.Microsoft?Promise.resolve():(n||(n=new Promise((a,t)=>{var n="bingAPIReady",o="https://www.bing.com/api/maps/mapcontrol?callback=".concat(n,"&setLang=en");e&&(o+="&key=".concat(e));var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.defer=!0,r.src=o,window.bingAPIReady=(()=>{c=window.Microsoft,a()}),r.onerror=(e=>{t(e)}),document.body.appendChild(r)})),n)}var b={zoom:14};class u extends d["PureComponent"]{constructor(){super(...arguments),this.mapRef=d["createRef"]()}render(){return d["createElement"]("div",{ref:this.mapRef,className:this.props.className,style:this.props.style})}componentDidMount(){s(this.props.apiKey).then(()=>{this.initMap(),this.walking(),this.driving(),this.addPoint(),this.setCenter()})}componentWillUnmount(){this.map&&this.map.dispose()}initMap(){var e=this.props.aerial;this.map=new c.Maps.Map(this.mapRef.current,f()({},e?{mapTypeId:c.Maps.MapTypeId.aerial}:{},{customMapStyle:{elements:{area:{fillColor:"#b6e591"},water:{fillColor:"#75cff0"},tollRoad:{fillColor:"#a964f4",strokeColor:"#a964f4"},arterialRoad:{fillColor:"#ffffff",strokeColor:"#d7dae7"},road:{fillColor:"#ffa35a",strokeColor:"#ff9c4f"},street:{fillColor:"#ffffff",strokeColor:"#ffffff"},transit:{fillColor:"#000000"}},settings:{landColor:"#efe9e1"}}}))}setCenter(){var e=this.props,a=e.center;a=void 0===a?{}:a;var t=a.latitude,n=a.longitude,o=e.zoom;t&&n&&this.map.setView({center:new c.Maps.Location(t,n),zoom:o})}addPoint(){var e=this.props.points,a=void 0===e?[]:e;Array.isArray(a)&&a.length&&a.forEach(e=>{var a=e.latitude,t=e.longitude,n=new c.Maps.Pushpin(new c.Maps.Location(a,t),null),o=new c.Maps.Layer;o.add(n),this.map.layers.insert(o)})}walking(){var e=this.props.walking,a=void 0===e?[]:e;Array.isArray(a)&&a.length&&this.route(a,"walking")}driving(){var e=this.props.driving,a=void 0===e?[]:e;Array.isArray(a)&&a.length&&this.route(a,"driving")}route(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"walking";Array.isArray(e)&&e.length&&c.Maps.loadModule("Microsoft.Maps.Directions",()=>{var t=new c.Maps.Directions.DirectionsManager(this.map);t.setRequestOptions({routeMode:c.Maps.Directions.RouteMode[a]}),e.forEach(e=>{var a=e.address,n=e.latitude,o=e.longitude;t.addWaypoint(new c.Maps.Directions.Waypoint({address:a,location:new c.Maps.Location(n,o)}))}),t.setRenderOptions({itineraryContainer:document.getElementById("printoutPanel")}),t.calculateDirections()})}}u.defaultProps=b;var m,p=t("G6/R"),h=t("Mu1M"),g=t("PeHE"),y=t("0+zf"),v=t.n(y),w="AvHBgtLyf4zbDhXESAuvFMSqIg1GgomX6DnDgw-CaXFeRmWVzvXPC55WveE4pJla",O=e=>{var a=Object(d["useState"])(!0),t=r()(a,2),c=t[0],n=t[1],o="string"===typeof e.center?e.center.split(","):[],l=r()(o,2),f=l[0],s=l[1],b=Array.isArray(e.points)?e.points.map(e=>{var a=e.split(","),t=r()(a,2),c=t[0],n=t[1];return{latitude:c,longitude:n}}):[],y=f&&s?{latitude:f,longitude:s}:b[0]&&{latitude:b[0].latitude,longitude:b[0].longitude},j=Array.isArray(e.walking)?e.walking.map(e=>{var a=e.split(","),t=r()(a,3),c=t[0],n=t[1],o=t[2];return{latitude:c,longitude:n,address:o}}):[],E=Array.isArray(e.driving)?e.driving.map(e=>{var a=e.split(","),t=r()(a,3),c=t[0],n=t[1],o=t[2];return{latitude:c,longitude:n,address:o}}):[];Object(d["useEffect"])(()=>{return()=>{"function"===typeof m&&m()}},[]);var k=e.fullscreen,A=k?v.a["map-fullscreen"]:v.a["map-wrapper"];return i.a.createElement("div",{className:A,style:{position:"relative"}},!k&&c&&i.a.createElement("div",Object.assign({className:v.a["map-mask"]},Object(h["a"])({onLongPress:()=>{n(!1)},onDblClick:()=>{m=Object(g["a"])(i.a.createElement(p["a"],null,i.a.createElement(O,Object.assign({fullscreen:!0},e))))}}))),i.a.createElement(u,{className:[v.a.map,A].join(" "),apiKey:w,center:y,points:b,walking:j,driving:E,zoom:e.zoom,aerial:e.aerial}))};a["a"]=O},xJKY:function(e,a,t){e.exports={"modal-mask":"modal-mask___2Eqm9","modal-wrap":"modal-wrap___3WcUG","modal-close":"modal-close___3LihS"}}}]);