(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{268:function(t,e,r){var n=r(3);t.exports=n(1..valueOf)},269:function(t,e,r){"use strict";var n=r(2),o=r(3),c=r(46),f=r(268),l=r(188),d=r(4),h=RangeError,v=String,x=Math.floor,m=o(l),_=o("".slice),w=o(1..toFixed),y=function(t,e,r){return 0===e?r:e%2==1?y(t,e-1,r*t):y(t*t,e/2,r)},C=function(data,t,e){for(var r=-1,n=e;++r<6;)n+=t*data[r],data[r]=n%1e7,n=x(n/1e7)},F=function(data,t){for(var e=6,r=0;--e>=0;)r+=data[e],data[e]=x(r/t),r=r%t*1e7},S=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=v(data[t]);s=""===s?e:s+m("0",7-e.length)+e}return s};n({target:"Number",proto:!0,forced:d((function(){return"0.000"!==w(8e-5,3)||"1"!==w(.9,0)||"1.25"!==w(1.255,2)||"1000000000000000128"!==w(0xde0b6b3a7640080,0)}))||!d((function(){w({})}))},{toFixed:function(t){var e,r,n,o,l=f(this),d=c(t),data=[0,0,0,0,0,0],x="",w="0";if(d<0||d>20)throw h("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return v(l);if(l<0&&(x="-",l=-l),l>1e-21)if(r=(e=function(t){for(var e=0,r=t;r>=4096;)e+=12,r/=4096;for(;r>=2;)e+=1,r/=2;return e}(l*y(2,69,1))-69)<0?l*y(2,-e,1):l/y(2,e,1),r*=4503599627370496,(e=52-e)>0){for(C(data,0,r),n=d;n>=7;)C(data,1e7,0),n-=7;for(C(data,y(10,n,1),0),n=e-1;n>=23;)F(data,1<<23),n-=23;F(data,1<<n),C(data,1,1),F(data,2),w=S(data)}else C(data,0,r),C(data,1<<-e,0),w=S(data)+m("0",d);return w=d>0?x+((o=w.length)<=d?"0."+m("0",d-o)+w:_(w,0,o-d)+"."+_(w,o-d)):x+w}})},418:function(t,e,r){var content=r(484);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(77).default)("1b1b7f40",content,!0,{sourceMap:!1})},483:function(t,e,r){"use strict";r(418)},484:function(t,e,r){var n=r(76)(!1);n.push([t.i,".numcontain[data-v-054a252f]{display:flex;flex-direction:column;justify-content:center}h2[data-v-054a252f]{margin-bottom:0!important;max-height:20px;overflow:hidden}h4[data-v-054a252f]{font-size:24px;margin:0 0 15px}h4[data-v-054a252f],h5[data-v-054a252f]{text-align:center}h5[data-v-054a252f]{font-size:20px;margin:0;color:#096}h5 svg[data-v-054a252f]{fill:#096}h5.negative[data-v-054a252f]{color:#b22222}h5.negative svg[data-v-054a252f]{fill:#b22222;transform:rotate(180deg)}",""]),t.exports=n},513:function(t,e,r){"use strict";r.r(e);r(269),r(60);var n={props:{data:{type:String,required:!1}},data:function(){return{chart:r(270)("./".concat(this.data,".json"))}},created:function(){},methods:{getSafeKpi:function(i){return parseFloat(this.chart.chartdata.datasets[0].data.slice(-1)[0]).toFixed(2)},getCapiVariation:function(i){var t=this.chart.chartdata.datasets[i].data.slice(-1)[0],e=this.chart.chartdata.datasets[i].data.slice(-2)[0];return parseFloat((t-e)/t*100).toFixed(2)}}},o=(r(483),r(26)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"chart"},[r("h2",[r("strong",[t._v(t._s(t.chart.t))]),t._v(". "+t._s(t.chart.st)+"\n  ")]),t._v(" "),r("div",{staticClass:"numcontain",staticStyle:{position:"absolute",top:"55px",bottom:"15px",left:"15px",right:"15px"}},[r("h4",[t._v(t._s(t.getSafeKpi(0)))]),t._v(" "),r("h5",{class:{negative:t.getCapiVariation(0)<0}},[r("svg",{staticClass:"triangle",staticStyle:{width:"0.6875em",height:"0.6875em"},attrs:{viewBox:"0 0 100 100"}},[r("polygon",{attrs:{points:"5.9,88.2 50,11.8 94.1,88.2 "}})]),t._v(" "+t._s(t.getCapiVariation(0))+"\n    ")])])])}),[],!1,null,"054a252f",null);e.default=component.exports}}]);