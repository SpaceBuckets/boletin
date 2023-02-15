module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "embi"
  const kpidata = {
    url: "https://bcrdgdcprod.blob.core.windows.net/documents/entorno-internacional/documents/Serie_Historica_Spread_del_EMBI.xlsx",
    sheet: 0,
    date: 0,
    items: [
      { name: "argentina", id: 4, },
      { name: "brasil", id: 6, },
      { name: "chile", id: 7,},
      { name: "mexico", id: 14,},
      { name: "colombia", id: 8,},
      { name: "latino", id: 2}
    ]
  }
  
  const payload = await parsers.genericXLS(kpidata, kpi)

  var post = {
    kpi,
  t: "Riesgo País",
  st: "Emerging Market Bond Index",
  sd: "Sirve de referencia para estimar la evolución del mercado de deuda emergente y permite estudiar el comportamiento de una canasta de bonos que conforman la deuda de los países emergentes.",
  c: "<p>Índice calculado por JP Morgan Chase que mide la diferencia entre la tasa de interés que un país debe de pagar por emitir deuda en el exterior con respecto al rédito que pagan los bonos norteamericanos, considerados los bonos gubernamentales libres de riesgo  de modo que refleja el riesgo país también refleja la probabilidad de que una nación incumpla con el pago de la deuda o de los intereses.</p>",
  fd: "Scraped (XLS)",
  fdr: "https://bcrdgdcprod.blob.core.windows.net/documents/entorno-internacional/documents/Serie_Historica_Spread_del_EMBI.xlsx",
  fu: "JP Morgan",
  fur: "https://am.jpmorgan.com/es/es/asset-management/per/products/jpm-emerging-markets-strategic-bond-a-acc-usd-lu1162084740",
  frec: "Diaria", 
  d: "Índice calculado por JP Morgan Chase que mide la diferencia entre la tasa de interés que un país debe de pagar por emitir deuda en el exterior.",
  max: 50,

  chart: {
    dates:payload,
    dimensions: [
      {
        fillColor: 'rgba(46,120,210,0)',
        label: "EMBI Brasil",
        data: payload.brasil,
        color: "rgba(46,120,210,0.3)",

        
        borderWidth: 1,
      },
      {
        fillColor: 'rgba(46,120,210,0)',
        label: "EMBI Chile",
        data: payload.chile,
        color: "rgba(46,120,210,0.3)",

        
        borderWidth: 1,
      },
      {
        fillColor: 'rgba(46,120,210,0)',
        label: "EMBI Colombia",
        data: payload.colombia,
        color: "rgba(46,120,210,0.3)",

        
        borderWidth: 1,
      },
      {
        fillColor: 'rgba(46,120,210,0)',
        label: "EMBI Mexico",
        data: payload.mexico,
        color: "rgba(46,120,210,0.3)",

        
        borderWidth: 1,
      },
      {
        fillColor: 'rgba(46,120,210,0)',
        label: "EMBI Latino",
        data: payload.latino,
        color: "#7a49a580",

        
        borderWidth: 1,
      },
      {
        fillColor: 'rgba(146,220,210,0)',
        label: "EMBI Argentina",
        data: payload.argentina,
        color: "#2E78D2",
        
        

      }
    ]
}
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));


})()

