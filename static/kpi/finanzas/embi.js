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
  
  const payload = await parsers.genericXLS(kpidata)

  const post = {
    kpi,
  t: "Riesgo País",
  st: "Emerging Market Bond Index",
  sd: "Sirve de referencia para estimar la evolución del mercado de deuda emergente y permite estudiar el comportamiento de una canasta de bonos que conforman la deuda de los países emergentes.",
  c: "<p>El índice EMBI (Emerging Markets Bond Index) es un índice elaborado por el banco JP Morgan que mide el riesgo de crédito de los bonos emitidos por países en desarrollo, conocidos como mercados emergentes. El EMBI se calcula tomando en cuenta los rendimientos de los bonos de los países incluidos en el índice y comparándolos con los rendimientos de los bonos del Tesoro de Estados Unidos.</p><p>En el caso específico de Argentina, el EMBI se refiere al riesgo de crédito que se asocia con la deuda soberana del país, es decir, el riesgo de que el gobierno argentino no cumpla con el pago de sus compromisos de deuda. El EMBI de Argentina se calcula a partir de la diferencia entre el rendimiento de los bonos del Tesoro de Estados Unidos y los bonos soberanos argentinos, ajustados por el riesgo de cambio.</p><p>Un EMBI alto indica que los inversores consideran que existe un mayor riesgo de crédito asociado con la deuda soberana del país. Por lo tanto, el riesgo país EMBI de Argentina es un indicador importante para medir la percepción de los inversores sobre la solvencia del gobierno y la estabilidad de la economía argentina en relación con otros países emergentes.</p>",
  fd: "Scraped (XLS)",
  fdr: "https://bcrdgdcprod.blob.core.windows.net/documents/entorno-internacional/documents/Serie_Historica_Spread_del_EMBI.xlsx",
  fu: "JP Morgan",
  fur: "https://am.jpmorgan.com/es/es/asset-management/per/products/jpm-emerging-markets-strategic-bond-a-acc-usd-lu1162084740",
    frec: parsers.detectDataType(payload.argentina), 
  fruc: parsers.detectAggregationFunction(payload.argentina),
  u: new Date().toLocaleDateString('en-CA').split('/').join('-'),

  d: "Índice calculado por JP Morgan Chase que mide la diferencia entre la tasa de interés que un país debe de pagar por emitir deuda en el exterior.",
  max: 50,

  dimensions: [
      {
label: "EMBI Brasil",
        data: payload.brasil,
        color: "rgba(46,120,210,0.3)",

        
        borderWidth: 1,
      },
      {
label: "EMBI Chile",
        data: payload.chile,
        color: "rgba(46,120,210,0.3)",

        
        borderWidth: 1,
      },
      {
label: "EMBI Colombia",
        data: payload.colombia,
        color: "rgba(46,120,210,0.3)",

        
        borderWidth: 1,
      },
      {
label: "EMBI Mexico",
        data: payload.mexico,
        color: "rgba(46,120,210,0.3)",

        
        borderWidth: 1,
      },
      {
label: "EMBI Latino",
        data: payload.latino,
        color: "#7a49a580",

        
        borderWidth: 1,
      },
      {
        label: "EMBI Argentina",
        data: payload.argentina,
        
        
        

      }
    ]
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()

