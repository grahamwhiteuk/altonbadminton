(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tables"],{"0de0":function(t,a,s){},1276:function(t,a,s){"use strict";var e=s("d784"),r=s("44e7"),n=s("825a"),i=s("1d80"),l=s("4840"),o=s("8aa5"),c=s("50c4"),u=s("14c3"),d=s("9263"),v=s("d039"),h=[].push,f=Math.min,p=4294967295,_=!v((function(){return!RegExp(p,"y")}));e("split",2,(function(t,a,s){var e;return e="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,s){var e=String(i(this)),n=void 0===s?p:s>>>0;if(0===n)return[];if(void 0===t)return[e];if(!r(t))return a.call(e,t,n);var l,o,c,u=[],v=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,_=new RegExp(t.source,v+"g");while(l=d.call(_,e)){if(o=_.lastIndex,o>f&&(u.push(e.slice(f,l.index)),l.length>1&&l.index<e.length&&h.apply(u,l.slice(1)),c=l[0].length,f=o,u.length>=n))break;_.lastIndex===l.index&&_.lastIndex++}return f===e.length?!c&&_.test("")||u.push(""):u.push(e.slice(f)),u.length>n?u.slice(0,n):u}:"0".split(void 0,0).length?function(t,s){return void 0===t&&0===s?[]:a.call(this,t,s)}:a,[function(a,s){var r=i(this),n=void 0==a?void 0:a[t];return void 0!==n?n.call(a,r,s):e.call(String(r),a,s)},function(t,r){var i=s(e,t,this,r,e!==a);if(i.done)return i.value;var d=n(t),v=String(this),h=l(d,RegExp),g=d.unicode,b=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(_?"y":"g"),C=new h(_?d:"^(?:"+d.source+")",b),y=void 0===r?p:r>>>0;if(0===y)return[];if(0===v.length)return null===u(C,v)?[v]:[];var m=0,x=0,S=[];while(x<v.length){C.lastIndex=_?x:0;var E,w=u(C,_?v:v.slice(x));if(null===w||(E=f(c(C.lastIndex+(_?0:x)),v.length))===m)x=o(v,x,g);else{if(S.push(v.slice(m,x)),S.length===y)return S;for(var A=1;A<=w.length-1;A++)if(S.push(w[A]),S.length===y)return S;x=m=E}}return S.push(v.slice(m)),S}]}),!_)},"14c3":function(t,a,s){var e=s("c6b6"),r=s("9263");t.exports=function(t,a){var s=t.exec;if("function"===typeof s){var n=s.call(t,a);if("object"!==typeof n)throw TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==e(t))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(t,a)}},"2ca0":function(t,a,s){"use strict";var e=s("23e7"),r=s("06cf").f,n=s("50c4"),i=s("5a34"),l=s("1d80"),o=s("ab13"),c=s("c430"),u="".startsWith,d=Math.min,v=o("startsWith"),h=!c&&!v&&!!function(){var t=r(String.prototype,"startsWith");return t&&!t.writable}();e({target:"String",proto:!0,forced:!h&&!v},{startsWith:function(t){var a=String(l(this));i(t);var s=n(d(arguments.length>1?arguments[1]:void 0,a.length)),e=String(t);return u?u.call(a,e,s):a.slice(s,s+e.length)===e}})},"3a9d":function(t,a,s){"use strict";var e=s("0de0"),r=s.n(e);r.a},8418:function(t,a,s){"use strict";var e=s("c04e"),r=s("9bf2"),n=s("5c6c");t.exports=function(t,a,s){var i=e(a);i in t?r.f(t,i,n(0,s)):t[i]=s}},8840:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"home"},[s("TitleBar",{attrs:{title:"League Tables"}}),s("div",{attrs:{id:"contentContainer"}},[s("MainMenu"),s("div",{attrs:{id:"tablesContainer"}},[s("form",[s("label",{staticStyle:{"margin-right":"5px"},attrs:{for:"seasonSelect"}},[t._v("Season")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.seasonId,expression:"seasonId"}],attrs:{id:"seasonSelect"},on:{change:[function(a){var s=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.seasonId=a.target.multiple?s:s[0]},function(a){return t.updateSeason()}]}},t._l(t.dataDescription,(function(a,e){return s("option",{key:e},[t._v(t._s(e))])})),0)]),s("h2",[t._v("League Tables for "+t._s(t.seasonId))]),t.render?t._e():s("div",[s("h2",[t._v(t._s(t.loadingMsg))])]),t.render?s("div",t._l(t.leagueTables,(function(a,e){return s("div",{key:e},[s("h3",[t._v(t._s(a.leagueName)+" Division "+t._s(a.division))]),s("div",{staticStyle:{"overflow-x":"auto"}},["games-rubbers"==a.type?s("table",{staticClass:"results"},[t._m(0,!0),s("tbody",t._l(a.leagueTable,(function(a,e){return s("tr",{key:e},[s("td",{staticClass:"m"},[t._v(t._s(e+1))]),s("td",{staticClass:"l br"},[t._v(t._s(a.club))]),s("td",{staticClass:"r br"},[t._v(t._s(a.played))]),s("td",{staticClass:"r br"},[t._v(t._s(a.won))]),s("td",{staticClass:"r br"},[t._v(t._s(a.drawn))]),s("td",{staticClass:"r br"},[t._v(t._s(a.lost))]),s("td",{staticClass:"r"},[t._v(t._s(a.secondaryAgainst))]),s("td",{staticClass:"r br"},[t._v(t._s(a.secondaryFor))]),s("td",{staticClass:"r"},[t._v(t._s(a.primaryAgainst))]),s("td",{staticClass:"r b"},[t._v(t._s(a.primaryFor))])])})),0)]):t._e(),"rubbers-games"==a.type?s("table",{staticClass:"results"},[t._m(1,!0),s("tbody",t._l(a.leagueTable,(function(a,e){return s("tr",{key:e},[s("td",{staticClass:"m"},[t._v(t._s(e+1))]),s("td",{staticClass:"l br"},[t._v(t._s(a.club))]),s("td",{staticClass:"r br"},[t._v(t._s(a.played))]),s("td",{staticClass:"r br"},[t._v(t._s(a.won))]),s("td",{staticClass:"r br"},[t._v(t._s(a.drawn))]),s("td",{staticClass:"r br"},[t._v(t._s(a.lost))]),s("td",{staticClass:"r"},[t._v(t._s(a.secondaryAgainst))]),s("td",{staticClass:"r br"},[t._v(t._s(a.secondaryFor))]),s("td",{staticClass:"r"},[t._v(t._s(a.primaryAgainst))]),s("td",{staticClass:"r b"},[t._v(t._s(a.primaryFor))])])})),0)]):t._e(),"games"==a.type?s("table",{staticClass:"results"},[t._m(2,!0),s("tbody",t._l(a.leagueTable,(function(a,e){return s("tr",{key:e},[s("td",{staticClass:"m"},[t._v(t._s(e+1))]),s("td",{staticClass:"l br"},[t._v(t._s(a.club))]),s("td",{staticClass:"r br"},[t._v(t._s(a.played))]),s("td",{staticClass:"r br"},[t._v(t._s(a.won))]),s("td",{staticClass:"r br"},[t._v(t._s(a.drawn))]),s("td",{staticClass:"r br"},[t._v(t._s(a.lost))]),s("td",{staticClass:"r"},[t._v(t._s(a.primaryAgainst))]),s("td",{staticClass:"r b"},[t._v(t._s(a.primaryFor))])])})),0)]):t._e(),"points"==a.type?s("table",{staticClass:"results"},[t._m(3,!0),s("tbody",t._l(a.leagueTable,(function(a,e){return s("tr",{key:e},[s("td",{staticClass:"m"},[t._v(t._s(e+1))]),s("td",{staticClass:"l br"},[t._v(t._s(a.club))]),s("td",{staticClass:"r br"},[t._v(t._s(a.played))]),s("td",{staticClass:"r br"},[t._v(t._s(a.won))]),s("td",{staticClass:"r br"},[t._v(t._s(a.drawn))]),s("td",{staticClass:"r br"},[t._v(t._s(a.lost))]),s("td",{staticClass:"r"},[t._v(t._s(a.primaryAgainst))]),s("td",{staticClass:"r b"},[t._v(t._s(a.primaryFor))])])})),0)]):t._e()])])})),0):t._e()])],1)],1)},r=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",[s("tr",[s("th",{staticClass:"b",attrs:{colspan:"6"}}),s("th",{staticClass:"m",attrs:{colspan:"2"}},[t._v("Rubbers")]),s("th",{staticClass:"m",attrs:{colspan:"2"}},[t._v("Games")])]),s("tr",[s("th"),s("th",{staticClass:"l"},[t._v("Team")]),s("th",{staticClass:"r"},[t._v("P")]),s("th",{staticClass:"r"},[t._v("W")]),s("th",{staticClass:"r"},[t._v("D")]),s("th",{staticClass:"r"},[t._v("L")]),s("th",{staticClass:"r"},[t._v("A")]),s("th",{staticClass:"r"},[t._v("F")]),s("th",{staticClass:"r"},[t._v("A")]),s("th",{staticClass:"r"},[t._v("F")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",[s("tr",[s("th",{staticClass:"b",attrs:{colspan:"6"}}),s("th",{staticClass:"m",attrs:{colspan:"2"}},[t._v("Games")]),s("th",{staticClass:"m",attrs:{colspan:"2"}},[t._v("Rubbers")])]),s("tr",[s("th"),s("th",{staticClass:"l"},[t._v("Team")]),s("th",{staticClass:"r"},[t._v("P")]),s("th",{staticClass:"r"},[t._v("W")]),s("th",{staticClass:"r"},[t._v("D")]),s("th",{staticClass:"r"},[t._v("L")]),s("th",{staticClass:"r"},[t._v("A")]),s("th",{staticClass:"r"},[t._v("F")]),s("th",{staticClass:"r"},[t._v("A")]),s("th",{staticClass:"r"},[t._v("F")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",[s("tr",[s("th",{staticClass:"b",attrs:{colspan:"6"}}),s("th",{staticClass:"m",attrs:{colspan:"2"}},[t._v("Games")])]),s("tr",[s("th"),s("th",{staticClass:"l"},[t._v("Team")]),s("th",{staticClass:"r"},[t._v("P")]),s("th",{staticClass:"r"},[t._v("W")]),s("th",{staticClass:"r"},[t._v("D")]),s("th",{staticClass:"r"},[t._v("L")]),s("th",{staticClass:"r"},[t._v("A")]),s("th",{staticClass:"r"},[t._v("F")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",[s("tr",[s("th",{staticClass:"b",attrs:{colspan:"6"}}),s("th",{staticClass:"m",attrs:{colspan:"2"}},[t._v("Points")])]),s("tr",[s("th"),s("th",{staticClass:"l"},[t._v("Team")]),s("th",{staticClass:"r"},[t._v("P")]),s("th",{staticClass:"r"},[t._v("W")]),s("th",{staticClass:"r"},[t._v("D")]),s("th",{staticClass:"r"},[t._v("L")]),s("th",{staticClass:"r"},[t._v("A")]),s("th",{staticClass:"r"},[t._v("F")])])])}],n=(s("a4d3"),s("e01a"),s("d28b"),s("d3b7"),s("3ca3"),s("ddb0"),s("1e1d")),i=s("add6"),l=s("faab"),o={name:"tables",mixins:[l["a"]],components:{TitleBar:n["a"],MainMenu:i["a"]},computed:{tableData:function(){return this.$store.state.season[this.seasonId],{}}},data:function(){return{seasonId:"",render:!1,loadingMsg:"Loading...",leagueTables:[]}},mounted:function(){this.seasonId=this.$store.state.currentSeason,this.updateSeason()},methods:{multisort:function(t,a,s,e){if("undefined"==typeof a){a=[];for(var r=0;r<t[0].length;r++)a.push(r)}if("undefined"==typeof s){s=[];for(var n=0;n<t[0].length;n++)s.push("ASC")}function i(t,a,s,r,n){var l="DESC"==r[n]?1:0,o=!isNaN(+t[s[n]]-+a[s[n]]),c=o?+t[s[n]]:t[s[n]].toLowerCase(),u=o?+a[s[n]]:a[s[n]].toLowerCase();return c<u?0==l?-1:1:c==u?s.length-1>n?i(t,a,s,r,n+1):e(t,a):0==l?1:-1}return t.sort((function(t,e){return i(t,e,a,s,0)}))},tie_breaker:function(t,a){var s=[t,a].sort()[0];return t==s?1:a==s?-1:0},generateLeagueTables:function(){var t={club:"",played:0,won:0,drawn:0,lost:0,primaryFor:0,primaryAgainst:0,secondaryFor:0,secondaryAgainst:0},a=[],s={},e=!0,r=!1,n=void 0;try{for(var i,l=this.$store.state.season[this.seasonId].leagues[Symbol.iterator]();!(e=(i=l.next()).done);e=!0){var o=i.value,c=!0,u=!1,d=void 0;try{for(var v,h=o.data[Symbol.iterator]();!(c=(v=h.next()).done);c=!0){var f=v.value,p=f[3],_=f[4],g=parseInt(f[5])||0,b=parseInt(f[6])||0,C=parseInt(f[7])||0,y=parseInt(f[8])||0;void 0===s[p]&&(s[p]=Object.assign({},t),s[p].club=p),void 0===s[_]&&(s[_]=Object.assign({},t),s[_].club=_),0==g&&0==b||(s[p].played++,s[_].played++,g>b?(s[p].won++,s[_].lost++):b>g?(s[_].won++,s[p].lost++):(s[p].drawn++,s[_].drawn++),s[p].primaryFor+=g,s[p].primaryAgainst+=b,s[_].primaryFor+=b,s[_].primaryAgainst+=g,s[p].secondaryFor+=C,s[p].secondaryAgainst+=y,s[_].secondaryFor+=y,s[_].secondaryAgainst+=C)}}catch(E){u=!0,d=E}finally{try{c||null==h.return||h.return()}finally{if(u)throw d}}var m=[];for(var x in s)m.push(s[x]);var S=this.multisort(m,["primaryFor","secondaryFor","primaryAgainst","secondaryAgainst","won","drawn","lost","played"],["DESC","DESC","ASC","ASC","DESC","DESC","ASC","ASC"],this.tie_breaker);a.push({leagueName:o.leagueName,division:o.division,type:o.type,leagueTable:S}),s={}}}catch(E){r=!0,n=E}finally{try{e||null==l.return||l.return()}finally{if(r)throw n}}this.leagueTables=a},updateSeason:function(){var t=this,a=this.seasonId;this.render=!1,this.$store.state.season[a]?(this.generateLeagueTables(),this.render=!0):(this.loadingMsg="Loading...",this.getCSVData(a).then((function(s){"string"===typeof s[0]&&(s=t.parseCSVData(s)),t.storeParsedCSVData(a,s),t.generateLeagueTables(),t.render=!0}),(function(){t.loadingMsg="Failed to load results data"})))}}},c=o,u=(s("3a9d"),s("2877")),d=Object(u["a"])(c,e,r,!1,null,"59dd751b",null);a["default"]=d.exports},"8aa5":function(t,a,s){"use strict";var e=s("6547").charAt;t.exports=function(t,a,s){return a+(s?e(t,a).length:1)}},9263:function(t,a,s){"use strict";var e=s("ad6d"),r=s("9f7f"),n=RegExp.prototype.exec,i=String.prototype.replace,l=n,o=function(){var t=/a/,a=/b*/g;return n.call(t,"a"),n.call(a,"a"),0!==t.lastIndex||0!==a.lastIndex}(),c=r.UNSUPPORTED_Y||r.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=o||u||c;d&&(l=function(t){var a,s,r,l,d=this,v=c&&d.sticky,h=e.call(d),f=d.source,p=0,_=t;return v&&(h=h.replace("y",""),-1===h.indexOf("g")&&(h+="g"),_=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(f="(?: "+f+")",_=" "+_,p++),s=new RegExp("^(?:"+f+")",h)),u&&(s=new RegExp("^"+f+"$(?!\\s)",h)),o&&(a=d.lastIndex),r=n.call(v?s:d,_),v?r?(r.input=r.input.slice(p),r[0]=r[0].slice(p),r.index=d.lastIndex,d.lastIndex+=r[0].length):d.lastIndex=0:o&&r&&(d.lastIndex=d.global?r.index+r[0].length:a),u&&r&&r.length>1&&i.call(r[0],s,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(r[l]=void 0)})),r}),t.exports=l},"99af":function(t,a,s){"use strict";var e=s("23e7"),r=s("d039"),n=s("e8b5"),i=s("861d"),l=s("7b0b"),o=s("50c4"),c=s("8418"),u=s("65f0"),d=s("1dde"),v=s("b622"),h=s("2d00"),f=v("isConcatSpreadable"),p=9007199254740991,_="Maximum allowed index exceeded",g=h>=51||!r((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),b=d("concat"),C=function(t){if(!i(t))return!1;var a=t[f];return void 0!==a?!!a:n(t)},y=!g||!b;e({target:"Array",proto:!0,forced:y},{concat:function(t){var a,s,e,r,n,i=l(this),d=u(i,0),v=0;for(a=-1,e=arguments.length;a<e;a++)if(n=-1===a?i:arguments[a],C(n)){if(r=o(n.length),v+r>p)throw TypeError(_);for(s=0;s<r;s++,v++)s in n&&c(d,v,n[s])}else{if(v>=p)throw TypeError(_);c(d,v++,n)}return d.length=v,d}})},"9f7f":function(t,a,s){"use strict";var e=s("d039");function r(t,a){return RegExp(t,a)}a.UNSUPPORTED_Y=e((function(){var t=r("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),a.BROKEN_CARET=e((function(){var t=r("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,a,s){"use strict";var e=s("23e7"),r=s("9263");e({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},ad6d:function(t,a,s){"use strict";var e=s("825a");t.exports=function(){var t=e(this),a="";return t.global&&(a+="g"),t.ignoreCase&&(a+="i"),t.multiline&&(a+="m"),t.dotAll&&(a+="s"),t.unicode&&(a+="u"),t.sticky&&(a+="y"),a}},d784:function(t,a,s){"use strict";s("ac1f");var e=s("6eeb"),r=s("d039"),n=s("b622"),i=s("9263"),l=s("9112"),o=n("species"),c=!r((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=n("replace"),v=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),h=!r((function(){var t=/(?:)/,a=t.exec;t.exec=function(){return a.apply(this,arguments)};var s="ab".split(t);return 2!==s.length||"a"!==s[0]||"b"!==s[1]}));t.exports=function(t,a,s,d){var f=n(t),p=!r((function(){var a={};return a[f]=function(){return 7},7!=""[t](a)})),_=p&&!r((function(){var a=!1,s=/a/;return"split"===t&&(s={},s.constructor={},s.constructor[o]=function(){return s},s.flags="",s[f]=/./[f]),s.exec=function(){return a=!0,null},s[f](""),!a}));if(!p||!_||"replace"===t&&(!c||!u||v)||"split"===t&&!h){var g=/./[f],b=s(f,""[t],(function(t,a,s,e,r){return a.exec===i?p&&!r?{done:!0,value:g.call(a,s,e)}:{done:!0,value:t.call(s,a,e)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:v}),C=b[0],y=b[1];e(String.prototype,t,C),e(RegExp.prototype,f,2==a?function(t,a){return y.call(t,this,a)}:function(t){return y.call(t,this)})}d&&l(RegExp.prototype[f],"sham",!0)}},faab:function(t,a,s){"use strict";s.d(a,"a",(function(){return e}));s("a4d3"),s("e01a"),s("d28b"),s("99af"),s("d81d"),s("d3b7"),s("ac1f"),s("3ca3"),s("1276"),s("2ca0"),s("ddb0");var e={computed:{dataDescription:function(){return this.$store.state.dataDescription}},methods:{getCSVData:function(t){var a=this.dataDescription[t].map((function(a){if("local"===a.location)return"/data/".concat(t,"/").concat(a.fileName);if("sheets"===a.location){var s="https://sheets.googleapis.com/v4/spreadsheets/1foxmSr2zsnsPL3kO5MFyCvHnQvCnA9HEwGar0fpqbEA/values",e="AIzaSyC-PzW649nV3K-Dgh_ZAf3cOL6I5XHOfzg";return"".concat(s,"/").concat(a.sheetName,"!A1%3AZ99?key=").concat(e)}}));return Promise.all(a.map((function(t){return fetch(t).then((function(t){var a=t.headers.get("Content-Type");return a.startsWith("text/csv")?t.text():a.startsWith("application/json")?t.json().then((function(t){if(void 0!==t.values)return t.values})):void 0}))})))},parseCSVData:function(t){var a=[],s=!0,e=!1,r=void 0;try{for(var n,i=t[Symbol.iterator]();!(s=(n=i.next()).done);s=!0){var l=n.value,o=[],c=!0,u=!1,d=void 0;try{for(var v,h=l.split("\n")[Symbol.iterator]();!(c=(v=h.next()).done);c=!0){var f=v.value,p=f.split(",");p.length>1&&o.push(p)}}catch(_){u=!0,d=_}finally{try{c||null==h.return||h.return()}finally{if(u)throw d}}a.push(o)}}catch(_){e=!0,r=_}finally{try{s||null==i.return||i.return()}finally{if(e)throw r}}return a},storeParsedCSVData:function(t,a){var s={seasonId:t,season:{leagues:[]}};for(var e in this.dataDescription[t]){var r=this.dataDescription[t][e],n=a[e].shift();s.season.leagues.push({leagueName:r.leagueName,division:r.division,type:r.type,header:n,data:a[e]})}this.$store.commit("addSeason",s)}}}}}]);