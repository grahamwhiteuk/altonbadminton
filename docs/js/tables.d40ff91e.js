(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tables"],{"0d56":function(t,a,e){"use strict";var s=e("9154"),r=e.n(s);r.a},1276:function(t,a,e){"use strict";var s=e("d784"),r=e("44e7"),n=e("825a"),i=e("1d80"),l=e("4840"),o=e("8aa5"),c=e("50c4"),u=e("14c3"),d=e("9263"),v=e("d039"),f=[].push,h=Math.min,p=4294967295,_=!v((function(){return!RegExp(p,"y")}));s("split",2,(function(t,a,e){var s;return s="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var s=String(i(this)),n=void 0===e?p:e>>>0;if(0===n)return[];if(void 0===t)return[s];if(!r(t))return a.call(s,t,n);var l,o,c,u=[],v=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,_=new RegExp(t.source,v+"g");while(l=d.call(_,s)){if(o=_.lastIndex,o>h&&(u.push(s.slice(h,l.index)),l.length>1&&l.index<s.length&&f.apply(u,l.slice(1)),c=l[0].length,h=o,u.length>=n))break;_.lastIndex===l.index&&_.lastIndex++}return h===s.length?!c&&_.test("")||u.push(""):u.push(s.slice(h)),u.length>n?u.slice(0,n):u}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:a.call(this,t,e)}:a,[function(a,e){var r=i(this),n=void 0==a?void 0:a[t];return void 0!==n?n.call(a,r,e):s.call(String(r),a,e)},function(t,r){var i=e(s,t,this,r,s!==a);if(i.done)return i.value;var d=n(t),v=String(this),f=l(d,RegExp),g=d.unicode,C=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(_?"y":"g"),y=new f(_?d:"^(?:"+d.source+")",C),m=void 0===r?p:r>>>0;if(0===m)return[];if(0===v.length)return null===u(y,v)?[v]:[];var b=0,x=0,S=[];while(x<v.length){y.lastIndex=_?x:0;var E,w=u(y,_?v:v.slice(x));if(null===w||(E=h(c(y.lastIndex+(_?0:x)),v.length))===b)x=o(v,x,g);else{if(S.push(v.slice(b,x)),S.length===m)return S;for(var A=1;A<=w.length-1;A++)if(S.push(w[A]),S.length===m)return S;x=b=E}}return S.push(v.slice(b)),S}]}),!_)},"14c3":function(t,a,e){var s=e("c6b6"),r=e("9263");t.exports=function(t,a){var e=t.exec;if("function"===typeof e){var n=e.call(t,a);if("object"!==typeof n)throw TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==s(t))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(t,a)}},"1dde":function(t,a,e){var s=e("d039"),r=e("b622"),n=e("2d00"),i=r("species");t.exports=function(t){return n>=51||!s((function(){var a=[],e=a.constructor={};return e[i]=function(){return{foo:1}},1!==a[t](Boolean).foo}))}},"2ca0":function(t,a,e){"use strict";var s=e("23e7"),r=e("06cf").f,n=e("50c4"),i=e("5a34"),l=e("1d80"),o=e("ab13"),c=e("c430"),u="".startsWith,d=Math.min,v=o("startsWith"),f=!c&&!v&&!!function(){var t=r(String.prototype,"startsWith");return t&&!t.writable}();s({target:"String",proto:!0,forced:!f&&!v},{startsWith:function(t){var a=String(l(this));i(t);var e=n(d(arguments.length>1?arguments[1]:void 0,a.length)),s=String(t);return u?u.call(a,s,e):a.slice(e,e+s.length)===s}})},"44e7":function(t,a,e){var s=e("861d"),r=e("c6b6"),n=e("b622"),i=n("match");t.exports=function(t){var a;return s(t)&&(void 0!==(a=t[i])?!!a:"RegExp"==r(t))}},"5a34":function(t,a,e){var s=e("44e7");t.exports=function(t){if(s(t))throw TypeError("The method doesn't accept regular expressions");return t}},8418:function(t,a,e){"use strict";var s=e("c04e"),r=e("9bf2"),n=e("5c6c");t.exports=function(t,a,e){var i=s(a);i in t?r.f(t,i,n(0,e)):t[i]=e}},8840:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home"},[e("TitleBar",{attrs:{title:"League Tables"}}),e("div",{attrs:{id:"contentContainer"}},[e("MainMenu"),e("div",{attrs:{id:"tablesContainer"}},[e("form",[e("label",{staticStyle:{"margin-right":"5px"},attrs:{for:"seasonSelect"}},[t._v("Season")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.seasonId,expression:"seasonId"}],attrs:{id:"seasonSelect"},on:{change:[function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.seasonId=a.target.multiple?e:e[0]},function(a){return t.updateSeason()}]}},t._l(t.dataDescription,(function(a,s){return e("option",{key:s},[t._v(t._s(s))])})),0)]),e("h2",[t._v("League Tables for "+t._s(t.seasonId))]),t.render?t._e():e("div",[e("h2",[t._v(t._s(t.loadingMsg))])]),t.render?e("div",t._l(t.leagueTables,(function(a,s){return e("div",{key:s},[e("h3",[t._v(t._s(a.leagueName)+" Division "+t._s(a.division))]),e("div",{staticStyle:{"overflow-x":"auto"}},["games-rubbers"==a.type?e("table",{staticClass:"results"},[t._m(0,!0),e("tbody",t._l(a.leagueTable,(function(a,s){return e("tr",{key:s},[e("td",{staticClass:"m"},[t._v(t._s(s+1))]),e("td",{staticClass:"l"},[t._v(t._s(a.club))]),e("td",{staticClass:"r"},[t._v(t._s(a.played))]),e("td",{staticClass:"r"},[t._v(t._s(a.won))]),e("td",{staticClass:"r"},[t._v(t._s(a.drawn))]),e("td",{staticClass:"r"},[t._v(t._s(a.lost))]),e("td",{staticClass:"r"},[t._v(t._s(a.secondaryAgainst))]),e("td",{staticClass:"r"},[t._v(t._s(a.secondaryFor))]),e("td",{staticClass:"r"},[t._v(t._s(a.primaryAgainst))]),e("td",{staticClass:"r b"},[t._v(t._s(a.primaryFor))])])})),0)]):t._e(),"rubbers-games"==a.type?e("table",{staticClass:"results"},[t._m(1,!0),e("tbody",t._l(a.leagueTable,(function(a,s){return e("tr",{key:s},[e("td",{staticClass:"m"},[t._v(t._s(s+1))]),e("td",{staticClass:"l"},[t._v(t._s(a.club))]),e("td",{staticClass:"r"},[t._v(t._s(a.played))]),e("td",{staticClass:"r"},[t._v(t._s(a.won))]),e("td",{staticClass:"r"},[t._v(t._s(a.drawn))]),e("td",{staticClass:"r"},[t._v(t._s(a.lost))]),e("td",{staticClass:"r"},[t._v(t._s(a.secondaryAgainst))]),e("td",{staticClass:"r"},[t._v(t._s(a.secondaryFor))]),e("td",{staticClass:"r"},[t._v(t._s(a.primaryAgainst))]),e("td",{staticClass:"r b"},[t._v(t._s(a.primaryFor))])])})),0)]):t._e(),"games"==a.type?e("table",{staticClass:"results"},[t._m(2,!0),e("tbody",t._l(a.leagueTable,(function(a,s){return e("tr",{key:s},[e("td",{staticClass:"m"},[t._v(t._s(s+1))]),e("td",{staticClass:"l"},[t._v(t._s(a.club))]),e("td",{staticClass:"r"},[t._v(t._s(a.played))]),e("td",{staticClass:"r"},[t._v(t._s(a.won))]),e("td",{staticClass:"r"},[t._v(t._s(a.drawn))]),e("td",{staticClass:"r"},[t._v(t._s(a.lost))]),e("td",{staticClass:"r"},[t._v(t._s(a.primaryAgainst))]),e("td",{staticClass:"r b"},[t._v(t._s(a.primaryFor))])])})),0)]):t._e(),"points"==a.type?e("table",{staticClass:"results"},[t._m(3,!0),e("tbody",t._l(a.leagueTable,(function(a,s){return e("tr",{key:s},[e("td",{staticClass:"m"},[t._v(t._s(s+1))]),e("td",{staticClass:"l"},[t._v(t._s(a.club))]),e("td",{staticClass:"r"},[t._v(t._s(a.played))]),e("td",{staticClass:"r"},[t._v(t._s(a.won))]),e("td",{staticClass:"r"},[t._v(t._s(a.drawn))]),e("td",{staticClass:"r"},[t._v(t._s(a.lost))]),e("td",{staticClass:"r"},[t._v(t._s(a.primaryAgainst))]),e("td",{staticClass:"r b"},[t._v(t._s(a.primaryFor))])])})),0)]):t._e()])])})),0):t._e()])],1)],1)},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",{staticClass:"b",attrs:{colspan:"6"}}),e("th",{staticClass:"m",attrs:{colspan:"2"}},[t._v("Rubbers")]),e("th",{staticClass:"m",attrs:{colspan:"2"}},[t._v("Games")])]),e("tr",[e("th"),e("th",{staticClass:"l"},[t._v("Team")]),e("th",{staticClass:"r"},[t._v("P")]),e("th",{staticClass:"r"},[t._v("W")]),e("th",{staticClass:"r"},[t._v("D")]),e("th",{staticClass:"r"},[t._v("L")]),e("th",{staticClass:"r"},[t._v("A")]),e("th",{staticClass:"r"},[t._v("F")]),e("th",{staticClass:"r"},[t._v("A")]),e("th",{staticClass:"r"},[t._v("F")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",{staticClass:"b",attrs:{colspan:"6"}}),e("th",{staticClass:"m",attrs:{colspan:"2"}},[t._v("Games")]),e("th",{staticClass:"m",attrs:{colspan:"2"}},[t._v("Rubbers")])]),e("tr",[e("th"),e("th",{staticClass:"l"},[t._v("Team")]),e("th",{staticClass:"r"},[t._v("P")]),e("th",{staticClass:"r"},[t._v("W")]),e("th",{staticClass:"r"},[t._v("D")]),e("th",{staticClass:"r"},[t._v("L")]),e("th",{staticClass:"r"},[t._v("A")]),e("th",{staticClass:"r"},[t._v("F")]),e("th",{staticClass:"r"},[t._v("A")]),e("th",{staticClass:"r"},[t._v("F")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",{staticClass:"b",attrs:{colspan:"6"}}),e("th",{staticClass:"m",attrs:{colspan:"2"}},[t._v("Games")])]),e("tr",[e("th"),e("th",{staticClass:"l"},[t._v("Team")]),e("th",{staticClass:"r"},[t._v("P")]),e("th",{staticClass:"r"},[t._v("W")]),e("th",{staticClass:"r"},[t._v("D")]),e("th",{staticClass:"r"},[t._v("L")]),e("th",{staticClass:"r"},[t._v("A")]),e("th",{staticClass:"r"},[t._v("F")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",{staticClass:"b",attrs:{colspan:"6"}}),e("th",{staticClass:"m",attrs:{colspan:"2"}},[t._v("Points")])]),e("tr",[e("th"),e("th",{staticClass:"l"},[t._v("Team")]),e("th",{staticClass:"r"},[t._v("P")]),e("th",{staticClass:"r"},[t._v("W")]),e("th",{staticClass:"r"},[t._v("D")]),e("th",{staticClass:"r"},[t._v("L")]),e("th",{staticClass:"r"},[t._v("A")]),e("th",{staticClass:"r"},[t._v("F")])])])}],n=(e("a4d3"),e("e01a"),e("d28b"),e("d3b7"),e("3ca3"),e("ddb0"),e("1e1d")),i=e("add6"),l=e("faab"),o={name:"tables",mixins:[l["a"]],components:{TitleBar:n["a"],MainMenu:i["a"]},computed:{tableData:function(){return this.$store.state.season[this.seasonId],{}}},data:function(){return{seasonId:"",render:!1,loadingMsg:"Loading...",leagueTables:[]}},mounted:function(){this.seasonId=this.$store.state.currentSeason,this.updateSeason()},methods:{multisort:function(t,a,e,s){if("undefined"==typeof a){a=[];for(var r=0;r<t[0].length;r++)a.push(r)}if("undefined"==typeof e){e=[];for(var n=0;n<t[0].length;n++)e.push("ASC")}function i(t,a,e,r,n){var l="DESC"==r[n]?1:0,o=!isNaN(+t[e[n]]-+a[e[n]]),c=o?+t[e[n]]:t[e[n]].toLowerCase(),u=o?+a[e[n]]:a[e[n]].toLowerCase();return c<u?0==l?-1:1:c==u?e.length-1>n?i(t,a,e,r,n+1):s(t,a):0==l?1:-1}return t.sort((function(t,s){return i(t,s,a,e,0)}))},tie_breaker:function(t,a){var e=[t,a].sort()[0];return t==e?1:a==e?-1:0},generateLeagueTables:function(){var t={club:"",played:0,won:0,drawn:0,lost:0,primaryFor:0,primaryAgainst:0,secondaryFor:0,secondaryAgainst:0},a=[],e={},s=!0,r=!1,n=void 0;try{for(var i,l=this.$store.state.season[this.seasonId].leagues[Symbol.iterator]();!(s=(i=l.next()).done);s=!0){var o=i.value,c=!0,u=!1,d=void 0;try{for(var v,f=o.data[Symbol.iterator]();!(c=(v=f.next()).done);c=!0){var h=v.value,p=h[3],_=h[4],g=parseInt(h[5])||0,C=parseInt(h[6])||0,y=parseInt(h[7])||0,m=parseInt(h[8])||0;void 0===e[p]&&(e[p]=Object.assign({},t),e[p].club=p),void 0===e[_]&&(e[_]=Object.assign({},t),e[_].club=_),0==g&&0==C||(e[p].played++,e[_].played++,g>C?(e[p].won++,e[_].lost++):C>g?(e[_].won++,e[p].lost++):(e[p].drawn++,e[_].drawn++),e[p].primaryFor+=g,e[p].primaryAgainst+=C,e[_].primaryFor+=C,e[_].primaryAgainst+=g,e[p].secondaryFor+=y,e[p].secondaryAgainst+=m,e[_].secondaryFor+=m,e[_].secondaryAgainst+=y)}}catch(E){u=!0,d=E}finally{try{c||null==f.return||f.return()}finally{if(u)throw d}}var b=[];for(var x in e)b.push(e[x]);var S=this.multisort(b,["primaryFor","secondaryFor","primaryAgainst","secondaryAgainst","won","drawn","lost","played"],["DESC","DESC","ASC","ASC","DESC","DESC","ASC","ASC"],this.tie_breaker);a.push({leagueName:o.leagueName,division:o.division,type:o.type,leagueTable:S}),e={}}}catch(E){r=!0,n=E}finally{try{s||null==l.return||l.return()}finally{if(r)throw n}}this.leagueTables=a},updateSeason:function(){var t=this,a=this.seasonId;this.render=!1,this.$store.state.season[a]?(this.generateLeagueTables(),this.render=!0):(this.loadingMsg="Loading...",this.getCSVData(a).then((function(e){"string"===typeof e[0]&&(e=t.parseCSVData(e)),t.storeParsedCSVData(a,e),t.generateLeagueTables(),t.render=!0}),(function(){t.loadingMsg="Failed to load results data"})))}}},c=o,u=(e("0d56"),e("2877")),d=Object(u["a"])(c,s,r,!1,null,"04dedd86",null);a["default"]=d.exports},"8aa5":function(t,a,e){"use strict";var s=e("6547").charAt;t.exports=function(t,a,e){return a+(e?s(t,a).length:1)}},9154:function(t,a,e){},9263:function(t,a,e){"use strict";var s=e("ad6d"),r=e("9f7f"),n=RegExp.prototype.exec,i=String.prototype.replace,l=n,o=function(){var t=/a/,a=/b*/g;return n.call(t,"a"),n.call(a,"a"),0!==t.lastIndex||0!==a.lastIndex}(),c=r.UNSUPPORTED_Y||r.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=o||u||c;d&&(l=function(t){var a,e,r,l,d=this,v=c&&d.sticky,f=s.call(d),h=d.source,p=0,_=t;return v&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),_=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(h="(?: "+h+")",_=" "+_,p++),e=new RegExp("^(?:"+h+")",f)),u&&(e=new RegExp("^"+h+"$(?!\\s)",f)),o&&(a=d.lastIndex),r=n.call(v?e:d,_),v?r?(r.input=r.input.slice(p),r[0]=r[0].slice(p),r.index=d.lastIndex,d.lastIndex+=r[0].length):d.lastIndex=0:o&&r&&(d.lastIndex=d.global?r.index+r[0].length:a),u&&r&&r.length>1&&i.call(r[0],e,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(r[l]=void 0)})),r}),t.exports=l},"99af":function(t,a,e){"use strict";var s=e("23e7"),r=e("d039"),n=e("e8b5"),i=e("861d"),l=e("7b0b"),o=e("50c4"),c=e("8418"),u=e("65f0"),d=e("1dde"),v=e("b622"),f=e("2d00"),h=v("isConcatSpreadable"),p=9007199254740991,_="Maximum allowed index exceeded",g=f>=51||!r((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),C=d("concat"),y=function(t){if(!i(t))return!1;var a=t[h];return void 0!==a?!!a:n(t)},m=!g||!C;s({target:"Array",proto:!0,forced:m},{concat:function(t){var a,e,s,r,n,i=l(this),d=u(i,0),v=0;for(a=-1,s=arguments.length;a<s;a++)if(n=-1===a?i:arguments[a],y(n)){if(r=o(n.length),v+r>p)throw TypeError(_);for(e=0;e<r;e++,v++)e in n&&c(d,v,n[e])}else{if(v>=p)throw TypeError(_);c(d,v++,n)}return d.length=v,d}})},"9f7f":function(t,a,e){"use strict";var s=e("d039");function r(t,a){return RegExp(t,a)}a.UNSUPPORTED_Y=s((function(){var t=r("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),a.BROKEN_CARET=s((function(){var t=r("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ab13:function(t,a,e){var s=e("b622"),r=s("match");t.exports=function(t){var a=/./;try{"/./"[t](a)}catch(e){try{return a[r]=!1,"/./"[t](a)}catch(s){}}return!1}},ac1f:function(t,a,e){"use strict";var s=e("23e7"),r=e("9263");s({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},ad6d:function(t,a,e){"use strict";var s=e("825a");t.exports=function(){var t=s(this),a="";return t.global&&(a+="g"),t.ignoreCase&&(a+="i"),t.multiline&&(a+="m"),t.dotAll&&(a+="s"),t.unicode&&(a+="u"),t.sticky&&(a+="y"),a}},ae40:function(t,a,e){var s=e("83ab"),r=e("d039"),n=e("5135"),i=Object.defineProperty,l={},o=function(t){throw t};t.exports=function(t,a){if(n(l,t))return l[t];a||(a={});var e=[][t],c=!!n(a,"ACCESSORS")&&a.ACCESSORS,u=n(a,0)?a[0]:o,d=n(a,1)?a[1]:void 0;return l[t]=!!e&&!r((function(){if(c&&!s)return!0;var t={length:-1};c?i(t,1,{enumerable:!0,get:o}):t[1]=1,e.call(t,u,d)}))}},d784:function(t,a,e){"use strict";e("ac1f");var s=e("6eeb"),r=e("d039"),n=e("b622"),i=e("9263"),l=e("9112"),o=n("species"),c=!r((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=n("replace"),v=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),f=!r((function(){var t=/(?:)/,a=t.exec;t.exec=function(){return a.apply(this,arguments)};var e="ab".split(t);return 2!==e.length||"a"!==e[0]||"b"!==e[1]}));t.exports=function(t,a,e,d){var h=n(t),p=!r((function(){var a={};return a[h]=function(){return 7},7!=""[t](a)})),_=p&&!r((function(){var a=!1,e=/a/;return"split"===t&&(e={},e.constructor={},e.constructor[o]=function(){return e},e.flags="",e[h]=/./[h]),e.exec=function(){return a=!0,null},e[h](""),!a}));if(!p||!_||"replace"===t&&(!c||!u||v)||"split"===t&&!f){var g=/./[h],C=e(h,""[t],(function(t,a,e,s,r){return a.exec===i?p&&!r?{done:!0,value:g.call(a,e,s)}:{done:!0,value:t.call(e,a,s)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:v}),y=C[0],m=C[1];s(String.prototype,t,y),s(RegExp.prototype,h,2==a?function(t,a){return m.call(t,this,a)}:function(t){return m.call(t,this)})}d&&l(RegExp.prototype[h],"sham",!0)}},d81d:function(t,a,e){"use strict";var s=e("23e7"),r=e("b727").map,n=e("1dde"),i=e("ae40"),l=n("map"),o=i("map");s({target:"Array",proto:!0,forced:!l||!o},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},faab:function(t,a,e){"use strict";e.d(a,"a",(function(){return s}));e("a4d3"),e("e01a"),e("d28b"),e("99af"),e("d81d"),e("d3b7"),e("ac1f"),e("3ca3"),e("1276"),e("2ca0"),e("ddb0");var s={computed:{dataDescription:function(){return this.$store.state.dataDescription}},methods:{getCSVData:function(t){var a=this.dataDescription[t].map((function(a){if("local"===a.location)return"/data/".concat(t,"/").concat(a.fileName);if("sheets"===a.location){var e="https://sheets.googleapis.com/v4/spreadsheets/1foxmSr2zsnsPL3kO5MFyCvHnQvCnA9HEwGar0fpqbEA/values",s="AIzaSyC-PzW649nV3K-Dgh_ZAf3cOL6I5XHOfzg";return"".concat(e,"/").concat(a.sheetName,"!A1%3AZ99?key=").concat(s)}}));return Promise.all(a.map((function(t){return fetch(t).then((function(t){var a=t.headers.get("Content-Type");return a.startsWith("text/csv")?t.text():a.startsWith("application/json")?t.json().then((function(t){if(void 0!==t.values)return t.values})):void 0}))})))},parseCSVData:function(t){var a=[],e=!0,s=!1,r=void 0;try{for(var n,i=t[Symbol.iterator]();!(e=(n=i.next()).done);e=!0){var l=n.value,o=[],c=!0,u=!1,d=void 0;try{for(var v,f=l.split("\n")[Symbol.iterator]();!(c=(v=f.next()).done);c=!0){var h=v.value,p=h.split(",");p.length>1&&o.push(p)}}catch(_){u=!0,d=_}finally{try{c||null==f.return||f.return()}finally{if(u)throw d}}a.push(o)}}catch(_){s=!0,r=_}finally{try{e||null==i.return||i.return()}finally{if(s)throw r}}return a},storeParsedCSVData:function(t,a){var e={seasonId:t,season:{leagues:[]}};for(var s in this.dataDescription[t]){var r=this.dataDescription[t][s],n=a[s].shift();e.season.leagues.push({leagueName:r.leagueName,division:r.division,type:r.type,header:n,data:a[s]})}this.$store.commit("addSeason",e)}}}}}]);