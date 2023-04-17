module.exports = (async function() {

  const parsers = require("@parsers");

   const kpi = "dxy"
  const url = 'https://query1.finance.yahoo.com/v7/finance/download/DX-Y.NYB?period1=0&period2=9674456596&interval=1d&events=history&includeAdjustedClose=true'
  const payload = await parsers.datosGobarCSV(0,4,url)
   const post = {
    kpi,
    t: "Indice DXY",
    st: "Tipo de Cambio Real Multilateral",
    sd: "",
    c: "",    
    fd: "",
    fdr: "",
    fu: "",
    fur: "",
    frec: parsers.detectDataType(payload), 
        fruc: parsers.detectAggregationFunction(payload),
    u: new Date().toLocaleDateString('en-CA').split('/').join('-'),
    d: "Este índice mide el precio relativo de los bienes y servicios de la economía argentina con respecto al de los de los principales 12 socios comerciales del país, en función del flujo de comercio de manufacturas.",
    dimensions: [
      {     
        label: "DXY",
        data: payload,
         
      },
]
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()

