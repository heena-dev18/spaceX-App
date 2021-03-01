module.exports=function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=10)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("@babel/runtime/helpers/slicedToArray")},function(e,t){e.exports=require("@babel/runtime/regenerator")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("http")},function(e,t){e.exports=require("@babel/runtime/helpers/asyncToGenerator")},function(e,t,n){e.exports=n.p+"static/media/rocket-avatar.58026b67.png"},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("cors")},function(e,t,n){e.exports=n(11)},function(e,t,n){"use strict";n.r(t);var a=n(5),r=n.n(a),c=n(20).default;r.a.createServer(c).listen(3e3,(function(){console.log("🚀 started")})).on("error",(function(e){console.log(e)}))},function(e,t){e.exports={}},function(e,t){e.exports={}},function(e,t){e.exports={}},function(e,t){e.exports={}},function(e,t){e.exports={}},function(e,t){e.exports={}},function(e,t){e.exports={}},function(e){e.exports=JSON.parse('{"client":{"css":"/static/css/bundle.10ad78c6.css","js":"/static/js/bundle.982cde79.js"},"":{"json":"/..\\\\chunks.json","txt":"/static/js/bundle.982cde79.js.LICENSE.txt","png":"/static/media/rocket-avatar.58026b67.png"}}')},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(1),l=n(3),s=n.n(l),u=n(6),i=n.n(u),o=n(2),m=n.n(o);var f={formatLaunchData:function(e){return e.map((function(e){return{missionId:e.mission_id,launchYear:e.launch_year,launchSuccess:e.launch_success,landSuccess:e.rocket.first_stage.cores[0].land_success,missionName:e.mission_name,flightNumber:e.flight_number,missionPatch:e.links.mission_patch_small}}))},createSearchString:function(e,t,n){var a="?";return null!==e&&(a+="&launch_year=".concat(e)),null!==t&&(a+="&launch_success=".concat(t)),null!==n&&(a+="&land_success=".concat(n)),a}};var d={fetchLaunches:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:" ";return fetch("https://api.spacexdata.com/v3/launches?limit=100&".concat(e.slice(1))).then((function(e){return e.json()})).then((function(e){return f.formatLaunchData(e)}))}},p=(n(12),function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"SpaceX Launch Programs"))});n(13);function h(e){return r.a.createElement("div",null,r.a.createElement("h2",null,e.filterName),null!==e.filterValue&&r.a.createElement("p",{className:"clear-filter",onClick:function(){return e.setFilter(null)}},"clear filter"),r.a.createElement("hr",null),r.a.createElement("div",{className:"filters-group"},e.filterOptions.map((function(t,n){return r.a.createElement("span",{key:n,className:"filter-item ".concat(e.filterValue===t?"active":void 0),onClick:function(){return e.setFilter(t)}},t)}))))}function b(e){var t=Object(a.useState)(null),n=m()(t,2),c=n[0],l=n[1],s=Object(a.useState)(null),u=m()(s,2),i=u[0],o=u[1],d=Object(a.useState)(null),p=m()(d,2),b=p[0],E=p[1];return Object(a.useEffect)((function(){var t=f.createSearchString(c,i,b);e.updateSearchString(t)}),[c,i,b]),r.a.createElement("aside",null,r.a.createElement("h1",null,"Filters"),r.a.createElement(h,{filterName:"Year Filter",filterValue:c,setFilter:l,filterOptions:["2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020"]}),r.a.createElement(h,{filterName:"Launch Success Filter",filterValue:i,setFilter:o,filterOptions:["true","false"]}),r.a.createElement(h,{filterName:"Land Success Filter",filterValue:b,setFilter:E,filterOptions:["true","false"]}))}n(14),n(15);var E=function(){return r.a.createElement("footer",null,r.a.createElement("h2",null,r.a.createElement("span",{className:"bold"},"Developed by: "),"Heena Kaushar"))},v=(n(16),n(7)),x=n.n(v);function N(e){var t=e.launch;return r.a.createElement("div",{className:"launch-card"},r.a.createElement("div",{className:"card"},r.a.createElement("img",{className:"card-img-top mission-patch",src:t.missionPatch||x.a,alt:"Card image cap"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title mission-name color-blue"},"".concat(t.missionName," #").concat(t.flightNumber)),r.a.createElement("p",{className:"detail bold"},"Mission Ids:"),r.a.createElement("ul",null,t.missionId.map((function(e){return r.a.createElement("li",{className:"color-blue",key:e},e)}))),r.a.createElement("p",null,r.a.createElement("span",{className:"detail bold"},"Launch Year: "),r.a.createElement("span",{className:"color-blue"},t.launchYear)),r.a.createElement("p",null,r.a.createElement("span",{className:"detail bold"},"Successful Launch: "),r.a.createElement("span",{className:"color-blue"},t.launchSuccess?"True":"false")),r.a.createElement("p",null,r.a.createElement("span",{className:"detail bold"},"Sucessfull Landing: "),r.a.createElement("span",{className:"color-blue"},t.landSuccess?"True":"false")))))}function g(e){return e.loading?r.a.createElement("div",{className:"loader"}):r.a.createElement("div",{className:"custom-row"},e.launches.length>0?e.launches.map((function(e){return r.a.createElement(N,{key:e.flightNumber,launch:e})})):r.a.createElement("p",{className:"no-launches"},"Oooopssss........No launches :("))}function S(){var e=Object(a.useState)([]),t=m()(e,2),n=t[0],l=t[1],u=Object(a.useState)(!0),o=m()(u,2),f=o[0],h=o[1],v=Object(c.useLocation)(),x=Object(c.useHistory)();Object(a.useEffect)((function(){(function(){var e=i()(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.fetchLaunches(v.search);case 2:t=e.sent,l(t),h(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[v.search]);return r.a.createElement("div",{className:"custom-container home"},r.a.createElement("div",{className:"custom-row max-width-xl"},r.a.createElement(p,null)),r.a.createElement("div",{className:"custom-row max-width-xl"},r.a.createElement("div",{className:"sidebar-col"},r.a.createElement(b,{updateSearchString:function(e){h(!0),x.push(e)}})),r.a.createElement("div",{className:"main-area-col "},r.a.createElement(g,{loading:f,launches:n}))),r.a.createElement("div",{className:"custom-row max-width-xl"},r.a.createElement(E,null)))}n(17),n(18);var y=function(){return r.a.createElement(c.Switch,null,r.a.createElement(c.Route,{exact:!0,path:"/",component:S}))},j=n(4),O=n.n(j),_=n(8),w=n(9),L=n(19),k=O()();k.use(w()),k.disable("x-powered-by").use(O.a.static("D:\\Sapient\\spacex-app\\build\\public")).get("/*",(function(e,t){var n={},a=Object(_.renderToString)(r.a.createElement(c.StaticRouter,{context:n,location:e.url},r.a.createElement(y,null)));n.url?t.redirect(n.url):t.status(200).send('<!doctype html>\n    <html lang="">\n    <head>\n        <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n        <meta charset="utf-8" />\n        <title>SpaceX Launch Data Viewer</title>\n        <meta name="viewport" content="width=device-width, initial-scale=1">\n        '.concat(L.client.css?'<link rel="stylesheet" defer href="'.concat(L.client.css,'">'):"","\n        ").concat('<script src="'.concat(L.client.js,'" defer><\/script>'),'\n    </head>\n    <body>\n        <div id="root">').concat(a,"</div>\n    </body>\n</html>"))}));t.default=k}]);
//# sourceMappingURL=server.js.map