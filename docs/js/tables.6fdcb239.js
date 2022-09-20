"use strict";(self["webpackChunkaltonbadminton"]=self["webpackChunkaltonbadminton"]||[]).push([[930],{504:function(t,s,a){a.r(s),a.d(s,{default:function(){return u}});var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"home"},[s("TitleBar",{attrs:{title:"League Tables"}}),s("div",{attrs:{id:"contentContainer"}},[s("MainMenu"),s("div",{attrs:{id:"tablesContainer"}},[s("form",[s("label",{staticStyle:{"margin-right":"5px"},attrs:{for:"seasonSelect"}},[t._v("Season")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.seasonId,expression:"seasonId"}],attrs:{id:"seasonSelect"},on:{change:[function(s){var a=Array.prototype.filter.call(s.target.options,(function(t){return t.selected})).map((function(t){var s="_value"in t?t._value:t.value;return s}));t.seasonId=s.target.multiple?a:a[0]},function(s){return t.updateSeason()}]}},t._l(t.dataDescription,(function(a,e){return s("option",{key:e},[t._v(t._s(e))])})),0)]),s("h2",[t._v("League Tables for "+t._s(t.seasonId))]),t.render?t._e():s("div",[s("h2",[t._v(t._s(t.loadingMsg))])]),t.render?s("div",t._l(t.leagueTables,(function(a,e){return s("div",{key:e},[s("h3",[t._v(t._s(a.leagueName)+" Division "+t._s(a.division))]),s("div",{staticStyle:{"overflow-x":"auto"}},["games-rubbers"==a.type?s("table",{staticClass:"results"},[t._m(0,!0),s("tbody",t._l(a.leagueTable,(function(a,e){return s("tr",{key:e},[s("td",{staticClass:"m"},[t._v(t._s(e+1))]),s("td",{staticClass:"l br"},[t._v(t._s(a.club))]),s("td",{staticClass:"r br"},[t._v(t._s(a.played))]),s("td",{staticClass:"r br"},[t._v(t._s(a.won))]),s("td",{staticClass:"r br"},[t._v(t._s(a.drawn))]),s("td",{staticClass:"r br"},[t._v(t._s(a.lost))]),s("td",{staticClass:"r"},[t._v(t._s(a.secondaryAgainst))]),s("td",{staticClass:"r br"},[t._v(t._s(a.secondaryFor))]),s("td",{staticClass:"r"},[t._v(t._s(a.primaryAgainst))]),s("td",{staticClass:"r b"},[t._v(t._s(a.primaryFor))])])})),0)]):t._e(),"rubbers-games"==a.type?s("table",{staticClass:"results"},[t._m(1,!0),s("tbody",t._l(a.leagueTable,(function(a,e){return s("tr",{key:e},[s("td",{staticClass:"m"},[t._v(t._s(e+1))]),s("td",{staticClass:"l br"},[t._v(t._s(a.club))]),s("td",{staticClass:"r br"},[t._v(t._s(a.played))]),s("td",{staticClass:"r br"},[t._v(t._s(a.won))]),s("td",{staticClass:"r br"},[t._v(t._s(a.drawn))]),s("td",{staticClass:"r br"},[t._v(t._s(a.lost))]),s("td",{staticClass:"r"},[t._v(t._s(a.secondaryAgainst))]),s("td",{staticClass:"r br"},[t._v(t._s(a.secondaryFor))]),s("td",{staticClass:"r"},[t._v(t._s(a.primaryAgainst))]),s("td",{staticClass:"r b"},[t._v(t._s(a.primaryFor))])])})),0)]):t._e(),"games"==a.type?s("table",{staticClass:"results"},[t._m(2,!0),s("tbody",t._l(a.leagueTable,(function(a,e){return s("tr",{key:e},[s("td",{staticClass:"m"},[t._v(t._s(e+1))]),s("td",{staticClass:"l br"},[t._v(t._s(a.club))]),s("td",{staticClass:"r br"},[t._v(t._s(a.played))]),s("td",{staticClass:"r br"},[t._v(t._s(a.won))]),s("td",{staticClass:"r br"},[t._v(t._s(a.drawn))]),s("td",{staticClass:"r br"},[t._v(t._s(a.lost))]),s("td",{staticClass:"r"},[t._v(t._s(a.primaryAgainst))]),s("td",{staticClass:"r b"},[t._v(t._s(a.primaryFor))])])})),0)]):t._e(),"points"==a.type?s("table",{staticClass:"results"},[t._m(3,!0),s("tbody",t._l(a.leagueTable,(function(a,e){return s("tr",{key:e},[s("td",{staticClass:"m"},[t._v(t._s(e+1))]),s("td",{staticClass:"l br"},[t._v(t._s(a.club))]),s("td",{staticClass:"r br"},[t._v(t._s(a.played))]),s("td",{staticClass:"r br"},[t._v(t._s(a.won))]),s("td",{staticClass:"r br"},[t._v(t._s(a.drawn))]),s("td",{staticClass:"r br"},[t._v(t._s(a.lost))]),s("td",{staticClass:"r"},[t._v(t._s(a.primaryAgainst))]),s("td",{staticClass:"r b"},[t._v(t._s(a.primaryFor))])])})),0)]):t._e()])])})),0):t._e()])],1)],1)},r=[function(){var t=this,s=t._self._c;return s("thead",[s("tr",[s("th",{staticClass:"b",attrs:{colspan:"6"}}),s("th",{staticClass:"m",attrs:{colspan:"2"}},[t._v("Rubbers")]),s("th",{staticClass:"m",attrs:{colspan:"2"}},[t._v("Games")])]),s("tr",[s("th"),s("th",{staticClass:"l"},[t._v("Team")]),s("th",{staticClass:"r"},[t._v("P")]),s("th",{staticClass:"r"},[t._v("W")]),s("th",{staticClass:"r"},[t._v("D")]),s("th",{staticClass:"r"},[t._v("L")]),s("th",{staticClass:"r"},[t._v("A")]),s("th",{staticClass:"r"},[t._v("F")]),s("th",{staticClass:"r"},[t._v("A")]),s("th",{staticClass:"r"},[t._v("F")])])])},function(){var t=this,s=t._self._c;return s("thead",[s("tr",[s("th",{staticClass:"b",attrs:{colspan:"6"}}),s("th",{staticClass:"m",attrs:{colspan:"2"}},[t._v("Games")]),s("th",{staticClass:"m",attrs:{colspan:"2"}},[t._v("Rubbers")])]),s("tr",[s("th"),s("th",{staticClass:"l"},[t._v("Team")]),s("th",{staticClass:"r"},[t._v("P")]),s("th",{staticClass:"r"},[t._v("W")]),s("th",{staticClass:"r"},[t._v("D")]),s("th",{staticClass:"r"},[t._v("L")]),s("th",{staticClass:"r"},[t._v("A")]),s("th",{staticClass:"r"},[t._v("F")]),s("th",{staticClass:"r"},[t._v("A")]),s("th",{staticClass:"r"},[t._v("F")])])])},function(){var t=this,s=t._self._c;return s("thead",[s("tr",[s("th",{staticClass:"b",attrs:{colspan:"6"}}),s("th",{staticClass:"m",attrs:{colspan:"2"}},[t._v("Games")])]),s("tr",[s("th"),s("th",{staticClass:"l"},[t._v("Team")]),s("th",{staticClass:"r"},[t._v("P")]),s("th",{staticClass:"r"},[t._v("W")]),s("th",{staticClass:"r"},[t._v("D")]),s("th",{staticClass:"r"},[t._v("L")]),s("th",{staticClass:"r"},[t._v("A")]),s("th",{staticClass:"r"},[t._v("F")])])])},function(){var t=this,s=t._self._c;return s("thead",[s("tr",[s("th",{staticClass:"b",attrs:{colspan:"6"}}),s("th",{staticClass:"m",attrs:{colspan:"2"}},[t._v("Points")])]),s("tr",[s("th"),s("th",{staticClass:"l"},[t._v("Team")]),s("th",{staticClass:"r"},[t._v("P")]),s("th",{staticClass:"r"},[t._v("W")]),s("th",{staticClass:"r"},[t._v("D")]),s("th",{staticClass:"r"},[t._v("L")]),s("th",{staticClass:"r"},[t._v("A")]),s("th",{staticClass:"r"},[t._v("F")])])])}],i=(a(7658),a(4337)),l=a(3400),n=a(9158),o={name:"tables",mixins:[n.W],components:{TitleBar:i.Z,MainMenu:l.Z},computed:{tableData(){return this.$store.state.season[this.seasonId],{}}},data(){return{seasonId:"",render:!1,loadingMsg:"Loading...",leagueTables:[]}},mounted(){this.seasonId=this.$store.state.currentSeason,this.updateSeason()},methods:{multisort:function(t,s,a,e){if("undefined"==typeof s){s=[];for(let a=0;a<t[0].length;a++)s.push(a)}if("undefined"==typeof a){a=[];for(let s=0;s<t[0].length;s++)a.push("ASC")}function r(t,s,a,i,l){let n="DESC"==i[l]?1:0,o=!isNaN(+t[a[l]]-+s[a[l]]),c=o?+t[a[l]]:t[a[l]].toLowerCase(),d=o?+s[a[l]]:s[a[l]].toLowerCase();return c<d?0==n?-1:1:c==d?a.length-1>l?r(t,s,a,i,l+1):e(t,s):0==n?1:-1}return t.sort((function(t,e){return r(t,e,s,a,0)}))},tie_breaker:function(t,s){let a=[t,s].sort()[0];return t==a?1:s==a?-1:0},generateLeagueTables:function(){let t={club:"",played:0,won:0,drawn:0,lost:0,primaryFor:0,primaryAgainst:0,secondaryFor:0,secondaryAgainst:0},s=[],a={};for(let e of this.$store.state.season[this.seasonId].leagues){for(let s of e.data){let e=s[3],r=s[4],i=parseInt(s[5])||0,l=parseInt(s[6])||0,n=parseInt(s[7])||0,o=parseInt(s[8])||0;void 0===a[e]&&(a[e]=Object.assign({},t),a[e].club=e),void 0===a[r]&&(a[r]=Object.assign({},t),a[r].club=r),0==i&&0==l||(a[e].played++,a[r].played++,i>l?(a[e].won++,a[r].lost++):l>i?(a[r].won++,a[e].lost++):(a[e].drawn++,a[r].drawn++),a[e].primaryFor+=i,a[e].primaryAgainst+=l,a[r].primaryFor+=l,a[r].primaryAgainst+=i,a[e].secondaryFor+=n,a[e].secondaryAgainst+=o,a[r].secondaryFor+=o,a[r].secondaryAgainst+=n)}let r=[];for(let t in a)r.push(a[t]);let i=this.multisort(r,["primaryFor","secondaryFor","primaryAgainst","secondaryAgainst","won","drawn","lost","played"],["DESC","DESC","ASC","ASC","DESC","DESC","ASC","ASC"],this.tie_breaker);s.push({leagueName:e.leagueName,division:e.division,type:e.type,leagueTable:i}),a={}}this.leagueTables=s},updateSeason:function(){let t=this.seasonId;this.render=!1,this.$store.state.season[t]?(this.generateLeagueTables(),this.render=!0):(this.loadingMsg="Loading...",this.getCSVData(t).then((s=>{s.includes(void 0)?this.loadingMsg="Failed to load results data":("string"===typeof s[0]&&(s=this.parseCSVData(s)),this.storeParsedCSVData(t,s),this.generateLeagueTables(),this.render=!0)}),(()=>{this.loadingMsg="Failed to load results data"})))}}},c=o,d=a(1001),_=(0,d.Z)(c,e,r,!1,null,"c0e2cab0",null),u=_.exports},9158:function(t,s,a){a.d(s,{W:function(){return e}});a(7658);const e={computed:{dataDescription(){return this.$store.state.dataDescription}},methods:{getCSVData:function(t){let s=this.dataDescription[t].map((s=>{if("local"===s.location)return`/data/${t}/${s.fileName}`;if("sheets"===s.location&&s.sheetId){let t=`https://sheets.googleapis.com/v4/spreadsheets/${s.sheetId}/values`,a="AIzaSyC-PzW649nV3K-Dgh_ZAf3cOL6I5XHOfzg";return`${t}/${s.sheetName}!A1%3AZ99?key=${a}`}}));return Promise.all(s.map((t=>fetch(t).then((t=>{let s=t.headers.get("Content-Type");return s.startsWith("text/csv")?t.text():s.startsWith("application/json")?t.json().then((t=>{if(void 0!==t.values)return t.values})):void 0})))))},parseCSVData:function(t){let s=[];for(let a of t){let t=[];for(let s of a.split("\n")){let a=s.split(",");a.length>1&&t.push(a)}s.push(t)}return s},storeParsedCSVData:function(t,s){let a={seasonId:t,season:{leagues:[]}};for(let e in this.dataDescription[t]){let r=this.dataDescription[t][e],i=s[e].shift();a.season.leagues.push({leagueName:r.leagueName,division:r.division,type:r.type,header:i,data:s[e]})}this.$store.commit("addSeason",a)}}}}}]);