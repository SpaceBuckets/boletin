(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{289:function(t,e,n){var r=n(3);t.exports=r(1..valueOf)},290:function(t,e,n){"use strict";var r=n(2),o=n(3),c=n(47),f=n(289),l=n(198),d=n(4),v=RangeError,h=String,x=Math.floor,m=o(l),w=o("".slice),_=o(1..toFixed),y=function(t,e,n){return 0===e?n:e%2==1?y(t,e-1,n*t):y(t*t,e/2,n)},F=function(data,t,e){for(var n=-1,r=e;++n<6;)r+=t*data[n],data[n]=r%1e7,r=x(r/1e7)},C=function(data,t){for(var e=6,n=0;--e>=0;)n+=data[e],data[e]=x(n/t),n=n%t*1e7},S=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=h(data[t]);s=""===s?e:s+m("0",7-e.length)+e}return s};r({target:"Number",proto:!0,forced:d((function(){return"0.000"!==_(8e-5,3)||"1"!==_(.9,0)||"1.25"!==_(1.255,2)||"1000000000000000128"!==_(0xde0b6b3a7640080,0)}))||!d((function(){_({})}))},{toFixed:function(t){var e,n,r,o,l=f(this),d=c(t),data=[0,0,0,0,0,0],x="",_="0";if(d<0||d>20)throw v("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return h(l);if(l<0&&(x="-",l=-l),l>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(l*y(2,69,1))-69)<0?l*y(2,-e,1):l/y(2,e,1),n*=4503599627370496,(e=52-e)>0){for(F(data,0,n),r=d;r>=7;)F(data,1e7,0),r-=7;for(F(data,y(10,r,1),0),r=e-1;r>=23;)C(data,1<<23),r-=23;C(data,1<<r),F(data,1,1),C(data,2),_=S(data)}else F(data,0,n),F(data,1<<-e,0),_=S(data)+m("0",d);return _=d>0?x+((o=_.length)<=d?"0."+m("0",d-o)+_:w(_,0,o-d)+"."+w(_,o-d)):x+_}})},446:function(t,e,n){var content=n(535);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(81).default)("9c9f8aa0",content,!0,{sourceMap:!1})},534:function(t,e,n){"use strict";n(446)},535:function(t,e,n){var r=n(80)(!1);r.push([t.i,"a[data-v-6f86e198]{text-align:center}.numcontain[data-v-6f86e198]{display:flex;flex-direction:column;justify-content:center;padding-top:5px;font-size:16px}h2[data-v-6f86e198]{margin-bottom:0!important;max-height:20px;overflow:hidden}h4[data-v-6f86e198]{font-size:20px;margin:0 0 10px;text-transform:capitalize}h5[data-v-6f86e198]{font-size:18px;margin:0;text-align:center;color:#096}h5 svg[data-v-6f86e198]{fill:#096}h5.negative[data-v-6f86e198]{color:#b22222}h5.negative svg[data-v-6f86e198]{fill:#b22222;transform:rotate(180deg)}section[data-v-6f86e198]{border-top:1px solid #eee;padding-top:20px;margin-top:10px;border-bottom:1px solid #eee;padding-bottom:20px;margin-bottom:10px}span[data-v-6f86e198]{color:#096;display:inline-block}span svg[data-v-6f86e198]{fill:#096}span.negative[data-v-6f86e198]{color:#b22222}span.negative svg[data-v-6f86e198]{fill:#b22222;transform:rotate(180deg)}",""]),t.exports=r},562:function(t,e,n){"use strict";n.r(e);n(79),n(290),n(48),n(28),n(84);var r=n(197),o={props:{data:{type:String,required:!1}},data:function(){return{chart:n(291)("./".concat(r,"/").concat(this.data,"/").concat(this.data,".json"))}},methods:{getSafeKpi:function(i){return parseFloat(this.chart.chartdata.datasets[0].data.slice(-1)[0]).toFixed(2)},getCapiVariation:function(i){var t=this.chart.chartdata.datasets[i].data.slice(-1)[0],e=this.chart.chartdata.datasets[i].data.slice(-2)[0];return parseFloat((t-e)/t*100).toFixed(2)},getLastUpdated:function(){var t=new Intl.DateTimeFormat("es",{month:"long",year:"numeric"}),e=new Date(this.chart.chartdata.labels.slice(-1)[0]),n=864e5;e=e.setDate(e.getDate()+1);var r=t.format(e);return"01"===(n=this.chart.chartdata.labels.slice(-1)[0].slice(-2))?r.replace("de","").replace(" ",""):n+" "+r.replace("de","").replace(" ","")}}},c=(n(534),n(31)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"chart"},[n("h2",{staticStyle:{"text-transform":"capitalize"}},[n("strong",[t._v(t._s(t.getLastUpdated()))])]),t._v(" "),n("div",{staticClass:"numcontain"},[t._v("\n    "+t._s(t.getSafeKpi(0))+"\n    "),n("span",{class:{negative:t.getCapiVariation(0)<0}},[n("svg",{staticClass:"triangle",staticStyle:{width:"0.6875em",height:"0.6875em"},attrs:{viewBox:"0 0 100 100"}},[n("polygon",{attrs:{points:"5.9,88.2 50,11.8 94.1,88.2 "}})]),t._v("\n      "+t._s(t.getCapiVariation(0))+"\n\n    ")])])])}),[],!1,null,"6f86e198",null);e.default=component.exports}}]);