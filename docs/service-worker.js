if(!self.define){let a,e={};const s=(s,c)=>(s=new URL(s+".js",c).href,e[s]||new Promise((e=>{if("document"in self){const a=document.createElement("script");a.src=s,a.onload=e,document.head.appendChild(a)}else a=s,importScripts(s),e()})).then((()=>{let a=e[s];if(!a)throw new Error(`Module ${s} didn’t register its module`);return a})));self.define=(c,d)=>{const i=a||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let r={};const n=a=>s(a,i),f={module:{uri:i},exports:r,require:n};e[i]=Promise.all(c.map((a=>f[a]||n(a)))).then((a=>(d(...a),r)))}}define(["./workbox-5b385ed2"],(function(a){"use strict";a.setCacheNameDetails({prefix:"altonbadminton"}),self.addEventListener("message",(a=>{a.data&&"SKIP_WAITING"===a.data.type&&self.skipWaiting()})),a.precacheAndRoute([{url:"/css/about.27dc83a0.css",revision:null},{url:"/css/app.50309ae7.css",revision:null},{url:"/css/clubs.0759b57f.css",revision:null},{url:"/css/constitution.9f160bb9.css",revision:null},{url:"/css/contact.44f09cc4.css",revision:null},{url:"/css/links.5d3031de.css",revision:null},{url:"/css/match-cards.6ac32a2f.css",revision:null},{url:"/css/results.b6aa0056.css",revision:null},{url:"/css/rules.d2557c9d.css",revision:null},{url:"/css/tables.2bab6f4f.css",revision:null},{url:"/data/2000-2001/Combination-1.csv",revision:"f7c923f22581bfd115a155ea794d8852"},{url:"/data/2000-2001/Ladies-1.csv",revision:"978628ea39840c7e91470c03f0946c5f"},{url:"/data/2000-2001/Mens-1.csv",revision:"7fdb2590d5dcf3a540ee1a1dd2ad06e0"},{url:"/data/2000-2001/Mixed-1.csv",revision:"a10c9e32e3a0584c56a10e9ee9993f3c"},{url:"/data/2000-2001/nf-1.csv",revision:"b795901a047bbe228c9045a1e70830c1"},{url:"/data/2001-2002/Combination-1.csv",revision:"958f46257c362eab194591e63e100ccd"},{url:"/data/2001-2002/Ladies-1.csv",revision:"314ff0cc1e89aa7f7630e630b0433ed8"},{url:"/data/2001-2002/Mens-1.csv",revision:"b3d24d8229ff94b595515e420e5c79b4"},{url:"/data/2001-2002/nf-1.csv",revision:"b818c1f790b47eaa9a66f89cd0d1d899"},{url:"/data/2001-2002/nf-2.csv",revision:"c830bf7c14f3870ea3fa3d523748d4b1"},{url:"/data/2002-2003/Combination-1.csv",revision:"53c40b2bf6c172f4a4b173342b9ba867"},{url:"/data/2002-2003/Ladies-1.csv",revision:"9af38cc5ceb6d3e7860dd79cdbe556f5"},{url:"/data/2002-2003/Mens-1.csv",revision:"20006b4371d74e8a8aaea3e32a73034c"},{url:"/data/2002-2003/nf-1.csv",revision:"4abac4d47ec0eab35c9374414a8ad622"},{url:"/data/2002-2003/nf-2.csv",revision:"b8840395ac21e58254e540e93a6998cb"},{url:"/data/2003-2004/Ladies-1.csv",revision:"d103cda6529cc8b49403488ba622ad7f"},{url:"/data/2003-2004/Mens-1.csv",revision:"ee1c82e233d52ee2f5d9db9ea07c3090"},{url:"/data/2003-2004/nf-1.csv",revision:"fed14dffc900de863fbfae8efdc2aaa3"},{url:"/data/2003-2004/nf-2.csv",revision:"7beb392552c8f8376bd5de378d76efb7"},{url:"/data/2004-2005/Ladies-1.csv",revision:"669eb338f3b9c880701be992ab17aed0"},{url:"/data/2004-2005/Mens-1.csv",revision:"ff0fedd2bd21aab3c418b14488296dbd"},{url:"/data/2004-2005/nf-1.csv",revision:"482e4b781ebea3123c0d7bfa08d00862"},{url:"/data/2004-2005/nf-2.csv",revision:"76b7e12678eb6ab26848b90e2368febc"},{url:"/data/2005-2006/Ladies-1.csv",revision:"bcd602c480e6c58161831906a47c6270"},{url:"/data/2005-2006/Mens-1.csv",revision:"1590dd37eeb120b548335288cc8bc4b1"},{url:"/data/2005-2006/nf-1.csv",revision:"b7e26ee15fc7c2d42abb1471652f25f3"},{url:"/data/2005-2006/nf-2.csv",revision:"5bf35b2cdfe5ec538b5840468e4e1533"},{url:"/data/2006-2007/Ladies-1.csv",revision:"f284f24790a69e70db0ccfb0907935ff"},{url:"/data/2006-2007/Mens-1.csv",revision:"c28a9927164e11c867c4068ec8403f59"},{url:"/data/2006-2007/nf-1.csv",revision:"a139b3f293be7639cd4c1c41b439e00e"},{url:"/data/2007-2008/Ladies-1.csv",revision:"35d8aaa6808f187631ae3975e65d20cf"},{url:"/data/2007-2008/Mens-1.csv",revision:"189c27c549a58a862eb9b21e73c48bd4"},{url:"/data/2007-2008/nf-1.csv",revision:"11c096f75725a26b510f4d49669187cb"},{url:"/data/2008-2009/Ladies-1.csv",revision:"72018f5fefef7668229002147b86f65c"},{url:"/data/2008-2009/Mens-1.csv",revision:"21db702f8dd3c349060c059428fa8d1b"},{url:"/data/2008-2009/nf-1.csv",revision:"55c8e796a88cbc9bac6e8ad3aee9ba7b"},{url:"/data/2009-2010/Ladies-1.csv",revision:"c45262155ecd3ea792b2dace6ddc3058"},{url:"/data/2009-2010/Mens-1.csv",revision:"d0b497a17ea60e1b1425259cd6d3f6c3"},{url:"/data/2009-2010/nf-1.csv",revision:"eb7f935c0697ded8305ec2bf0be6e294"},{url:"/data/2010-2011/Ladies-1.csv",revision:"8688a942f94f207fa975e050f960ade2"},{url:"/data/2010-2011/Mens-1.csv",revision:"420e1fb179bc79c742065a53d3a9d3aa"},{url:"/data/2010-2011/nf-1.csv",revision:"fa6da55971cc3e60aa4b2d45290c0285"},{url:"/data/2010-2011/nf-2.csv",revision:"0693631aec17082e13a23334c7539d74"},{url:"/data/2011-2012/Ladies-1.csv",revision:"f9387f672d3b963b5bd324f09b3af166"},{url:"/data/2011-2012/Mens-1.csv",revision:"4f52f169eb55ee77a9c19e3d6f9f1aa7"},{url:"/data/2011-2012/nf-1.csv",revision:"74faef18877642f7c5134db3de0a0c71"},{url:"/data/2011-2012/nf-2.csv",revision:"37b92fc43c492596350c91d353c4cea4"},{url:"/data/2012-2013/Ladies-1.csv",revision:"4cdbb789d905e93356c844e7b39eef09"},{url:"/data/2012-2013/Mens-1.csv",revision:"566986b82c734fee4a9795f232ee6cd8"},{url:"/data/2012-2013/nf-1.csv",revision:"cf8562f9c674ebf467ab5471bdd2c933"},{url:"/data/2012-2013/nf-2.csv",revision:"d3a418ac69c50e8b9a3e87b21dba5161"},{url:"/data/2013-2014/Ladies-1.csv",revision:"9d2a44b560ac13a1b2cfdc5022bc3dff"},{url:"/data/2013-2014/Mens-1.csv",revision:"d2fe0ea5012afd77dfc4ca131bdf67e1"},{url:"/data/2013-2014/nf-1.csv",revision:"c7d8b0044fa73aab9b0bcdcdd25cf22d"},{url:"/data/2013-2014/nf-2.csv",revision:"3e66ef31b28199c945a1458d371e19b8"},{url:"/data/2014-2015/Ladies-1.csv",revision:"769183522bb19bba31835eaeb81c1e69"},{url:"/data/2014-2015/Mens-1.csv",revision:"a36bf01d771a93126e50b026145c7b8d"},{url:"/data/2014-2015/nf-1.csv",revision:"a89b7be3e4d1b96655a2b91b8ba0901a"},{url:"/data/2014-2015/nf-2.csv",revision:"54057e65f00344210e67f5f9458625ab"},{url:"/data/2015-2016/Ladies-1.csv",revision:"6c1c1c1c70628c8a63d38fbcb96a8183"},{url:"/data/2015-2016/Mens-1.csv",revision:"13fe4208a4284d766ef2ba17327d0134"},{url:"/data/2015-2016/nf-1.csv",revision:"2cb180acf25edd9b379491f3c4bbca32"},{url:"/data/2015-2016/nf-2.csv",revision:"a620c6e80bfeea1198c0c231262d39a5"},{url:"/data/2016-2017/Ladies-1.csv",revision:"c91fc32f86e5f35134d251ad415ace2c"},{url:"/data/2016-2017/Mens-1.csv",revision:"943489884ea44d9dadf6327c7f1a1a1c"},{url:"/data/2016-2017/nf-1.csv",revision:"40107314704360091544a38807240880"},{url:"/data/2016-2017/nf-2.csv",revision:"99c9e88bba8694957e85b3d85077996a"},{url:"/data/2017-2018/Ladies-1.csv",revision:"4c616de083d08165959ab51e6c2fd619"},{url:"/data/2017-2018/Mens-1.csv",revision:"870d71a9d80056c03809f3da2bda9027"},{url:"/data/2017-2018/nf-1.csv",revision:"bfc64a1545c627993d964ffff0d97057"},{url:"/data/2017-2018/nf-2.csv",revision:"20fb0af45a71c45a47fe8f2e0d70fbae"},{url:"/data/2018-2019/Ladies-1.csv",revision:"504907d05e3ab7b32c6abe8e911d3a96"},{url:"/data/2018-2019/Mens-1.csv",revision:"0d1460edaf33b8a2b4a696d75bdf4c68"},{url:"/data/2018-2019/nf-1.csv",revision:"72cac6c2ecac7bc358a527e0f77bccd7"},{url:"/data/2018-2019/nf-2.csv",revision:"d3df3e026699cebe2c4162ac1230b635"},{url:"/data/2019-2020/Ladies-1.csv",revision:"6f553c1e09e3b593e5684496e1b2e940"},{url:"/data/2019-2020/Mens-1.csv",revision:"1455d9da23f331b1ea83f4bb1067eefe"},{url:"/data/2019-2020/nf-1.csv",revision:"f7539dde4bdbe1355ad58ac7efdf3204"},{url:"/data/2019-2020/nf-2.csv",revision:"41a4621b441b4534f8a917a061e074f9"},{url:"/data/2021-2022/Ladies-1.csv",revision:"1052be0044f9fa38549b8b1d61fb4838"},{url:"/data/2021-2022/nf-1.csv",revision:"62b1bb30f209931e417fe7bc57f269fc"},{url:"/downloads/20190106_rulesBooklet.pdf",revision:"d608a882937c81f678029c39a9d7ad2b"},{url:"/downloads/match-cards/ladies-a4.pdf",revision:"bb054fc9677db152c96883a54f25e2f0"},{url:"/downloads/match-cards/ladies-a5.pdf",revision:"a01b087e8dafb08d5d4943b8bd4913c5"},{url:"/downloads/match-cards/mens-a4.pdf",revision:"80e2a75bf2053e24fd73c6631daaa828"},{url:"/downloads/match-cards/mens-a5.pdf",revision:"1c9e7ed08120483eecfeafbc29f06f84"},{url:"/downloads/match-cards/nf-a4.pdf",revision:"37b5fec681cc780e264e3a84ee4e0900"},{url:"/downloads/match-cards/nf-a5.pdf",revision:"3ac0237c6d445b2b5da0744c33b0180d"},{url:"/img/avatar.jpg",revision:"fd5be7c58b9f3fc793f8d826aaeb52de"},{url:"/img/badmink.dc75758b.png",revision:null},{url:"/img/courtDiagram.png",revision:"f27a502942aa52fe8e39266caf54a0f3"},{url:"/img/ibflaws2006_img_1.jpg",revision:"7e9a2dc326e7780b1873fdc806034d48"},{url:"/img/ibflaws2006_img_3.jpg",revision:"b6ddacba6aeeb8ae3c9cc69a6b7859f6"},{url:"/img/ladies-a5.4d19ac02.jpg",revision:null},{url:"/img/mens-a5.2ea53093.jpg",revision:null},{url:"/img/nf-a5.89a7d953.jpg",revision:null},{url:"/img/pdf.0a2ba25c.jpg",revision:null},{url:"/index.html",revision:"d562513b3e6f83979cb93c06579358da"},{url:"/js/about.959b1867.js",revision:null},{url:"/js/app.df75239a.js",revision:null},{url:"/js/chunk-vendors.6fe25a99.js",revision:null},{url:"/js/clubs.0e601579.js",revision:null},{url:"/js/constitution.17cae2b7.js",revision:null},{url:"/js/contact.7e75e988.js",revision:null},{url:"/js/links.0cb9c626.js",revision:null},{url:"/js/match-cards.c98ed84d.js",revision:null},{url:"/js/results.89c86042.js",revision:null},{url:"/js/rules.73d2107e.js",revision:null},{url:"/js/tables.350526ac.js",revision:null},{url:"/manifest.json",revision:"f28e138da68bc0f59afbe9d5fa9adc3a"},{url:"/robots.txt",revision:"f34620d0141b81281a12362fe4dacd5d"}],{})}));
