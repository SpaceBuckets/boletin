(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{435:function(e,t,o){var content=o(455);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(81).default)("7eed55be",content,!0,{sourceMap:!1})},453:function(e){e.exports=JSON.parse('["hide"]')},454:function(e,t,o){"use strict";o(435)},455:function(e,t,o){var n=o(80)(!1);n.push([e.i,".admin-contain{background:#fafafa;padding:25px 30px;position:relative}.admin-contain hr{border-bottom:0;border-top:1px dashed #ccc}.admin-contain h2{margin:0 0 20px}.admin-contain label{display:inline-block;margin-bottom:3px;font-size:16px}.admin-contain input,.admin-contain select{display:block;width:100%;padding:10px;border:1px solid #ddd;border-radius:2px;font-size:16px}.admin-contain input:focus,.admin-contain select:focus{outline:0;background:rgba(0,255,0,.0392156863)}.pepeflex{display:flex;flex-wrap:wrap;grid-gap:15px;gap:15px}.pepeflex>*{flex:1;min-width:calc(33% - 15px)}textarea{display:block;border:1px solid #ddd;border-radius:2px;padding:10px;font-size:16px;width:100%;resize:none;height:150px;font-family:arial,helvetica,sans-serif}textarea:focus{outline:0;background:rgba(0,255,0,.0392156863)}.submit-container{padding-top:20px;border-top:1px dashed #ccc}.submit{border:0;background:green;color:#fff;border-radius:4px;padding:12px 20px;cursor:pointer;z-index:9999;width:100%;font-size:16px}.submit:hover{background:#006400}.values{min-width:100%}.mainflex{display:flex;grid-gap:20px;gap:20px}.mainflex>div{flex:1}.mainflex>div:last-child{max-width:300px}.postsidebar{border-left:1px dashed #ccc;padding-left:20px}.additem{border:1px dashed #ccc;background:transparent;cursor:pointer;padding:10px 20px;color:#aaa;border-radius:4px;width:100%}.additem:hover{background:#006400;color:#fff}.deleteitem{border:0;color:#aaa;cursor:pointer;background:transparent;padding:0 5px}.deleteitem:hover{color:#8b0000}",""]),e.exports=n},548:function(e,t,o){"use strict";o.r(t);var n=o(9),r=(o(49),{name:"Admin",data:function(){return{categories:o(453),newpost:{kpi:"",title:"",subtitle:"",description:"",category:"",fuente:"",fuenteURL:"",selectedParser:"datosGobarAPI"},selectedMethod:{datosGobarAPI:{items:[{name:"",id:""}]},datosGobarCSV:{url:"",date:"",items:[{name:"",id:""}]},scrapeBCRA:{items:[{name:"",serie:""}]},genericXLS:{url:"",sheet:"",date:"",items:[{name:"",id:""}]},parseWorldBank:{items:[{name:"",id:""}]}}}},updated:function(){},methods:{testApi:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("◷ Running..."),"genericXLS"===e.newpost.selectedParser||"datosGobarCSV"===e.newpost.selectedParser?e.newpost.items=e.selectedMethod[e.newpost.selectedParser]:e.newpost.items=e.selectedMethod[e.newpost.selectedParser].items,t.next=4,e.$axios.post("/api/test",e.newpost);case 4:t.sent,window.location.reload(!0);case 6:case"end":return t.stop()}}),t)})))()}}}),d=(o(454),o(31)),component=Object(d.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"pepeboard"},[o("div",{staticClass:"admin-contain"},[o("h2",[e._v("New Post")]),e._v(" "),o("hr"),e._v(" "),o("br"),e._v(" "),o("div",{staticClass:"mainflex"},[o("div",{staticClass:"pepeflex"},[o("div",{staticStyle:{"max-width":"100px","min-width":"auto"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.newpost.kpi,expression:"newpost.kpi"}],attrs:{type:"text",placeholder:"KPI"},domProps:{value:e.newpost.kpi},on:{input:function(t){t.target.composing||e.$set(e.newpost,"kpi",t.target.value)}}})]),e._v(" "),o("div",{staticStyle:{"max-width":"300px","min-width":"auto"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.newpost.title,expression:"newpost.title"}],attrs:{type:"text",placeholder:"Title"},domProps:{value:e.newpost.title},on:{input:function(t){t.target.composing||e.$set(e.newpost,"title",t.target.value)}}})]),e._v(" "),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.newpost.subtitle,expression:"newpost.subtitle"}],attrs:{type:"text",placeholder:"Subtitle"},domProps:{value:e.newpost.subtitle},on:{input:function(t){t.target.composing||e.$set(e.newpost,"subtitle",t.target.value)}}})]),e._v(" "),o("div",{staticStyle:{"max-width":"100%","min-width":"100%"}},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.newpost.description,expression:"newpost.description"}],attrs:{placeholder:"Description"},domProps:{value:e.newpost.description},on:{input:function(t){t.target.composing||e.$set(e.newpost,"description",t.target.value)}}})]),e._v(" "),o("div",[o("select",{directives:[{name:"model",rawName:"v-model",value:e.newpost.category,expression:"newpost.category"}],attrs:{name:"categories",id:"categories"},on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.newpost,"category",t.target.multiple?o:o[0])}}},[o("option",{attrs:{value:"",disabled:"",selected:"",hidden:""}},[e._v("Category")]),e._v(" "),e._l(e.categories,(function(t){return o("option",{domProps:{value:t}},[e._v("\n              "+e._s(t)+"\n            ")])}))],2)]),e._v(" "),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.newpost.fuente,expression:"newpost.fuente"}],attrs:{type:"text",placeholder:"Fuente"},domProps:{value:e.newpost.fuente},on:{input:function(t){t.target.composing||e.$set(e.newpost,"fuente",t.target.value)}}})]),e._v(" "),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.newpost.fuenteURL,expression:"newpost.fuenteURL"}],attrs:{type:"text",placeholder:"Fuente URL"},domProps:{value:e.newpost.fuenteURL},on:{input:function(t){t.target.composing||e.$set(e.newpost,"fuenteURL",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"submit-container"},[o("button",{staticClass:"submit",on:{click:function(t){return e.testApi()}}},[e._v("Create Post")])])]),e._v(" "),o("div",{staticClass:"postsidebar"},[o("div",{staticStyle:{"margin-bottom":"15px"}},[o("select",{directives:[{name:"model",rawName:"v-model",value:e.newpost.selectedParser,expression:"newpost.selectedParser"}],attrs:{name:"cars",id:"cars"},on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.newpost,"selectedParser",t.target.multiple?o:o[0])}}},[o("option",{attrs:{value:"",disabled:"",selected:"",hidden:""}},[e._v("Parser")]),e._v(" "),o("option",{attrs:{value:"datosGobarAPI"}},[e._v("DatosGobarAPI")]),e._v(" "),o("option",{attrs:{value:"datosGobarCSV"}},[e._v("DatosGobarCSV")]),e._v(" "),o("option",{attrs:{value:"scrapeBCRA"}},[e._v("scrapeBCRA")]),e._v(" "),o("option",{attrs:{value:"genericXLS"}},[e._v("genericXLS")]),e._v(" "),o("option",{attrs:{value:"parseWorldBank"}},[e._v("parseWorldBank")])])]),e._v(" "),"genericXLS"===e.newpost.selectedParser?o("div",{staticStyle:{display:"flex",gap:"5px","margin-bottom":"10px"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedMethod.genericXLS.url,expression:"selectedMethod['genericXLS']['url']"}],attrs:{type:"text",placeholder:"URL"},domProps:{value:e.selectedMethod.genericXLS.url},on:{input:function(t){t.target.composing||e.$set(e.selectedMethod.genericXLS,"url",t.target.value)}}}),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedMethod.genericXLS.sheet,expression:"selectedMethod['genericXLS']['sheet']"}],attrs:{type:"text",placeholder:"Sheet"},domProps:{value:e.selectedMethod.genericXLS.sheet},on:{input:function(t){t.target.composing||e.$set(e.selectedMethod.genericXLS,"sheet",t.target.value)}}}),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedMethod.genericXLS.date,expression:"selectedMethod['genericXLS']['date']"}],attrs:{type:"text",placeholder:"Date Column"},domProps:{value:e.selectedMethod.genericXLS.date},on:{input:function(t){t.target.composing||e.$set(e.selectedMethod.genericXLS,"date",t.target.value)}}})]):e._e(),e._v(" "),"datosGobarCSV"===e.newpost.selectedParser?o("div",{staticStyle:{display:"flex",gap:"5px","margin-bottom":"10px"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedMethod.datosGobarCSV.url,expression:"selectedMethod['datosGobarCSV']['url']"}],attrs:{type:"text",placeholder:"URL"},domProps:{value:e.selectedMethod.datosGobarCSV.url},on:{input:function(t){t.target.composing||e.$set(e.selectedMethod.datosGobarCSV,"url",t.target.value)}}}),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedMethod.datosGobarCSV.date,expression:"selectedMethod['datosGobarCSV']['date']"}],attrs:{type:"text",placeholder:"Date Column"},domProps:{value:e.selectedMethod.datosGobarCSV.date},on:{input:function(t){t.target.composing||e.$set(e.selectedMethod.datosGobarCSV,"date",t.target.value)}}})]):e._e(),e._v(" "),o("div",{staticClass:"values"},[e._l(e.selectedMethod[e.newpost.selectedParser].items,(function(t,n){return o("div",{staticStyle:{display:"flex",gap:"5px","margin-bottom":"10px"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedMethod[e.newpost.selectedParser].items[n].name,expression:"selectedMethod[newpost.selectedParser].items[parent]['name']"}],staticStyle:{"max-width":"100px"},attrs:{type:"text",placeholder:"Name"},domProps:{value:e.selectedMethod[e.newpost.selectedParser].items[n].name},on:{input:function(t){t.target.composing||e.$set(e.selectedMethod[e.newpost.selectedParser].items[n],"name",t.target.value)}}}),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedMethod[e.newpost.selectedParser].items[n].id,expression:"selectedMethod[newpost.selectedParser].items[parent]['id']"}],attrs:{type:"text",placeholder:"ID"},domProps:{value:e.selectedMethod[e.newpost.selectedParser].items[n].id},on:{input:function(t){t.target.composing||e.$set(e.selectedMethod[e.newpost.selectedParser].items[n],"id",t.target.value)}}}),e._v(" "),o("button",{staticClass:"deleteitem",on:{click:function(t){return e.$delete(e.selectedMethod[e.newpost.selectedParser].items,n)}}},[e._v("x")])])})),e._v(" "),o("button",{staticClass:"additem",on:{click:function(t){e.selectedMethod[e.newpost.selectedParser].items.push({name:"",id:""})}}},[e._v("\n            Add Metric\n          ")])],2)])])])])}),[],!1,null,null,null);t.default=component.exports}}]);