module.exports = (async function() {

  const parsers = require("@parsers");

   const kpi = "dxy"
  const kpidata = {
    url: 'https://query1.finance.yahoo.com/v7/finance/download/DX-Y.NYB?period1=0&period2=9674456596&interval=1d&events=history&includeAdjustedClose=true',
     date: 0,
    items: {
      dxy: 4,
 
    }
  }
  
  const payload = await parsers.datosGobarCSV(kpidata)

  
   var post = {
    kpi,
  t: "Indice DXY",
  st: "Tipo de Cambio Real Multilateral",
  sd: "Este índice mide el precio relativo de los bienes y servicios de la economía argentina con respecto al de los de los principales 12 socios comerciales del país, en función del flujo de comercio de manufacturas.",
  c: "<p>Este índice mide el precio relativo de los bienes y servicios de la economía argentina con respecto al de los de los principales 12 socios comerciales del país, en función del flujo de comercio de manufacturas. Se obtiene a partir de un promedio ponderado de los tipos de cambio reales bilaterales de los principales socios comerciales del país. </p>",
  fd: "Scraped (XLS)",
  fdr: "https://www.bcra.gob.ar/Pdfs/PublicacionesEstadisticas/ITCRMSerie.xls",
  fu: "BCRA",
  fur: "https://www.bcra.gob.ar/Pdfs/PublicacionesEstadisticas/ITCRMSerie.xls",
  frec: "Diaria", 
  d: "Este índice mide el precio relativo de los bienes y servicios de la economía argentina con respecto al de los de los principales 12 socios comerciales del país, en función del flujo de comercio de manufacturas.",
  max: 200,
  min: 0,

  chart: {
    dates:payload.dxy,
    dimensions: [
      {
        
        label: "DXY",
        data: payload.dxy,
        color: "#2E78D2",
        
        
      },
  
]
}
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));


})()

