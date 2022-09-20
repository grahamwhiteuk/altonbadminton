"use strict";(self["webpackChunkaltonbadminton"]=self["webpackChunkaltonbadminton"]||[]).push([[18],{385:function(t,s,a){a.r(s),a.d(s,{default:function(){return d}});a(1249),a(7327),a(1539);var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"home"},[s("TitleBar",{attrs:{title:"League Fixtures and Results"}}),s("div",{attrs:{id:"contentContainer"}},[s("MainMenu"),s("div",{attrs:{id:"resultsContainer"}},[s("form",[s("label",{staticStyle:{"margin-right":"5px"},attrs:{for:"seasonSelect"}},[t._v("Season")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.seasonId,expression:"seasonId"}],attrs:{id:"seasonSelect"},on:{change:[function(s){var a=Array.prototype.filter.call(s.target.options,(function(t){return t.selected})).map((function(t){var s="_value"in t?t._value:t.value;return s}));t.seasonId=s.target.multiple?a:a[0]},function(s){return t.updateSeason()}]}},t._l(t.dataDescription,(function(a,e){return s("option",{key:e},[t._v(t._s(e))])})),0)]),s("h2",[t._v("Fixtures and Results for "+t._s(t.seasonId))]),t.render?t._e():s("div",[s("h2",[t._v(t._s(t.loadingMsg))])]),t.render?s("div",t._l(t.seasonData.leagues,(function(a,e){return s("div",{key:e},[s("h3",[t._v(t._s(a.leagueName)+" Division "+t._s(a.division))]),s("div",{staticStyle:{"overflow-x":"auto"}},["points"==a.type?s("table",{staticClass:"results"},[t._m(0,!0),s("tbody",t._l(a.data,(function(a,e){return s("tr",{key:e},[s("td",{staticClass:"l"},[t._v(t._s(a[0]))]),t._v(" "),s("td",{staticClass:"l"},[t._v(t._s(a[1]))]),t._v(" "),s("td",{staticClass:"r br"},[t._v(t._s(a[2]))]),t._v(" "),s("td",{staticClass:"r br"},[t._v(t._s(a[3]))]),t._v(" "),s("td",{staticClass:"r"},[t._v(t._s(a[5]))]),t._v(" "),s("td",{staticClass:"r br"},[t._v(t._s(a[6]))]),t._v(" "),s("td",{staticClass:"l"},[t._v(t._s(a[4]))])])})),0)]):t._e(),"rubbers-games"==a.type?s("table",{staticClass:"results"},[t._m(1,!0),s("tbody",t._l(a.data,(function(a,e){return s("tr",{key:e},[s("td",{staticClass:"l"},[t._v(t._s(a[0]))]),t._v(" "),s("td",{staticClass:"l"},[t._v(t._s(a[1]))]),t._v(" "),s("td",{staticClass:"r br"},[t._v(t._s(a[2]))]),t._v(" "),s("td",{staticClass:"r br"},[t._v(t._s(a[3]))]),t._v(" "),s("td",{staticClass:"r"},[t._v(t._s(a[5]))]),t._v(" "),s("td",{staticClass:"r br"},[t._v(t._s(a[6]))]),t._v(" "),s("td",{staticClass:"r"},[t._v(t._s(a[7]))]),t._v(" "),s("td",{staticClass:"r br"},[t._v(t._s(a[8]))]),t._v(" "),s("td",{staticClass:"l"},[t._v(t._s(a[4]))])])})),0)]):t._e(),"games-rubbers"==a.type?s("table",{staticClass:"results"},[t._m(2,!0),s("tbody",t._l(a.data,(function(a,e){return s("tr",{key:e},[s("td",{staticClass:"l"},[t._v(t._s(a[0]))]),t._v(" "),s("td",{staticClass:"l"},[t._v(t._s(a[1]))]),t._v(" "),s("td",{staticClass:"r br"},[t._v(t._s(a[2]))]),t._v(" "),s("td",{staticClass:"r br"},[t._v(t._s(a[3]))]),t._v(" "),s("td",{staticClass:"r"},[t._v(t._s(a[5]))]),t._v(" "),s("td",{staticClass:"r br"},[t._v(t._s(a[6]))]),t._v(" "),s("td",{staticClass:"r"},[t._v(t._s(a[7]))]),t._v(" "),s("td",{staticClass:"r br"},[t._v(t._s(a[8]))]),t._v(" "),s("td",{staticClass:"l"},[t._v(t._s(a[4]))])])})),0)]):t._e(),"games"==a.type?s("table",{staticClass:"results"},[t._m(3,!0),s("tbody",t._l(a.data,(function(a,e){return s("tr",{key:e},[s("td",{staticClass:"l"},[t._v(t._s(a[0]))]),t._v(" "),s("td",{staticClass:"l"},[t._v(t._s(a[1]))]),t._v(" "),s("td",{staticClass:"r br"},[t._v(t._s(a[2]))]),t._v(" "),s("td",{staticClass:"r br"},[t._v(t._s(a[3]))]),t._v(" "),s("td",{staticClass:"r"},[t._v(t._s(a[5]))]),t._v(" "),s("td",{staticClass:"r br"},[t._v(t._s(a[6]))]),t._v(" "),s("td",{staticClass:"l"},[t._v(t._s(a[4]))])])})),0)]):t._e()])])})),0):t._e()])],1)],1)},r=[function(){var t=this,s=t._self._c;return s("thead",[s("tr",[s("th",{attrs:{colspan:"3"}},[t._v("Date")]),s("th",[t._v("Home")]),s("th",{attrs:{colspan:"2"}},[t._v("Points")]),s("th",[t._v("Away")])])])},function(){var t=this,s=t._self._c;return s("thead",[s("tr",[s("th",{attrs:{colspan:"3"}},[t._v("Date")]),s("th",[t._v("Home")]),s("th",{attrs:{colspan:"2"}},[t._v("Rubbers")]),s("th",{attrs:{colspan:"2"}},[t._v("Games")]),s("th",[t._v("Away")])])])},function(){var t=this,s=t._self._c;return s("thead",[s("tr",[s("th",{attrs:{colspan:"3"}},[t._v("Date")]),s("th",[t._v("Home")]),s("th",{attrs:{colspan:"2"}},[t._v("Games")]),s("th",{attrs:{colspan:"2"}},[t._v("Rubbers")]),s("th",[t._v("Away")])])])},function(){var t=this,s=t._self._c;return s("thead",[s("tr",[s("th",{attrs:{colspan:"3"}},[t._v("Date")]),s("th",[t._v("Home")]),s("th",{attrs:{colspan:"2"}},[t._v("Games")]),s("th",[t._v("Away")])])])}],n=(a(6699),a(2023),a(4337)),i=a(3400),o=a(9158),l={name:"results",mixins:[o.W],components:{TitleBar:n.Z,MainMenu:i.Z},computed:{seasonData:function(){return void 0!==this.$store.state.season[this.seasonId]?this.$store.state.season[this.seasonId]:{leagues:[]}}},data:function(){return{seasonId:"",render:!1,loadingMsg:"Loading..."}},mounted:function(){this.seasonId=this.$store.state.currentSeason,this.updateSeason()},methods:{updateSeason:function(){var t=this,s=this.seasonId;this.render=!1,this.$store.state.season[s]?this.render=!0:(this.loadingMsg="Loading...",this.getCSVData(s).then((function(a){a.includes(void 0)?t.loadingMsg="Failed to load results data":("string"===typeof a[0]&&(a=t.parseCSVData(a)),t.storeParsedCSVData(s,a),t.render=!0)}),(function(){t.loadingMsg="Failed to load results data"})))}}},c=l,_=a(1001),v=(0,_.Z)(c,e,r,!1,null,"d67ea416",null),d=v.exports},2222:function(t,s,a){var e=a(2109),r=a(7293),n=a(3157),i=a(111),o=a(7908),l=a(6244),c=a(7207),_=a(6135),v=a(5417),d=a(1194),u=a(5112),h=a(7392),f=u("isConcatSpreadable"),p=h>=51||!r((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),C=d("concat"),g=function(t){if(!i(t))return!1;var s=t[f];return void 0!==s?!!s:n(t)},m=!p||!C;e({target:"Array",proto:!0,arity:1,forced:m},{concat:function(t){var s,a,e,r,n,i=o(this),d=v(i,0),u=0;for(s=-1,e=arguments.length;s<e;s++)if(n=-1===s?i:arguments[s],g(n))for(r=l(n),c(u+r),a=0;a<r;a++,u++)a in n&&_(d,u,n[a]);else c(u+1),_(d,u++,n);return d.length=u,d}})},7327:function(t,s,a){var e=a(2109),r=a(2092).filter,n=a(1194),i=n("filter");e({target:"Array",proto:!0,forced:!i},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},6755:function(t,s,a){var e=a(2109),r=a(1702),n=a(1236).f,i=a(7466),o=a(1340),l=a(3929),c=a(4488),_=a(4964),v=a(1913),d=r("".startsWith),u=r("".slice),h=Math.min,f=_("startsWith"),p=!v&&!f&&!!function(){var t=n(String.prototype,"startsWith");return t&&!t.writable}();e({target:"String",proto:!0,forced:!p&&!f},{startsWith:function(t){var s=o(c(this));l(t);var a=i(h(arguments.length>1?arguments[1]:void 0,s.length)),e=o(t);return d?d(s,e,a):u(s,a,a+e.length)===e}})},9158:function(t,s,a){a.d(s,{W:function(){return r}});var e=a(8439),r=(a(1249),a(2222),a(1539),a(8783),a(3948),a(6755),a(7658),{computed:{dataDescription:function(){return this.$store.state.dataDescription}},methods:{getCSVData:function(t){var s=this.dataDescription[t].map((function(s){if("local"===s.location)return"/data/".concat(t,"/").concat(s.fileName);if("sheets"===s.location&&s.sheetId){var a="https://sheets.googleapis.com/v4/spreadsheets/".concat(s.sheetId,"/values"),e="AIzaSyC-PzW649nV3K-Dgh_ZAf3cOL6I5XHOfzg";return"".concat(a,"/").concat(s.sheetName,"!A1%3AZ99?key=").concat(e)}}));return Promise.all(s.map((function(t){return fetch(t).then((function(t){var s=t.headers.get("Content-Type");return s.startsWith("text/csv")?t.text():s.startsWith("application/json")?t.json().then((function(t){if(void 0!==t.values)return t.values})):void 0}))})))},parseCSVData:function(t){var s,a=[],r=(0,e.Z)(t);try{for(r.s();!(s=r.n()).done;){var n,i=s.value,o=[],l=(0,e.Z)(i.split("\n"));try{for(l.s();!(n=l.n()).done;){var c=n.value,_=c.split(",");_.length>1&&o.push(_)}}catch(v){l.e(v)}finally{l.f()}a.push(o)}}catch(v){r.e(v)}finally{r.f()}return a},storeParsedCSVData:function(t,s){var a={seasonId:t,season:{leagues:[]}};for(var e in this.dataDescription[t]){var r=this.dataDescription[t][e],n=s[e].shift();a.season.leagues.push({leagueName:r.leagueName,division:r.division,type:r.type,header:n,data:s[e]})}this.$store.commit("addSeason",a)}}})}}]);