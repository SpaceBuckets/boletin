module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "tcrm"
  const kpidata = {
    url: 'https://www.bcra.gob.ar/Pdfs/PublicacionesEstadisticas/ITCRMSerie.xlsx',
    sheet: 0,
    date: 0,
    items: [
      {name:"itcrm", id:1},
      {name:"itcrb", id:2},
      {name:"itcrus",id:5},
      {name:"itcreur",id:13}
    ]
  }

  const payload = await parsers.genericXLS(kpidata, kpi)
   var post = {
    kpi,
  t: "TCRM",
  st: "Tipo de Cambio Real Multilateral",
  sd: "Este índice mide el precio relativo de los bienes y servicios de la economía argentina con respecto al de los de los principales 12 socios comerciales del país, en función del flujo de comercio de manufacturas.",
  c: "<p>Este índice mide el precio relativo de los bienes y servicios de la economía argentina con respecto al de los de los principales 12 socios comerciales del país, en función del flujo de comercio de manufacturas. Se obtiene a partir de un promedio ponderado de los tipos de cambio reales bilaterales de los principales socios comerciales del país. </p>",
  fd: "Scraped (XLS)",
  fdr: "https://www.bcra.gob.ar/Pdfs/PublicacionesEstadisticas/ITCRMSerie.xls",
  fu: "BCRA",
  fur: "https://www.bcra.gob.ar/Pdfs/PublicacionesEstadisticas/ITCRMSerie.xls",
  frec: "Diaria", 
  d: "Este índice mide el precio relativo de los bienes y servicios de la economía argentina con respecto al de los de los principales 12 socios comerciales del país, en función del flujo de comercio de manufacturas.",
  max: 300,
  min: 0,

  chart: {
    dates:payload,
    dimensions: [
      {
        
        label: "TCRM",
        data: payload.itcrm,
        color: "#2E78D2",
        
        
      },
      {
        fillColor: "rgba(122, 73, 165,0)",
        label: "TCRUS",
        data: payload.itcrus,
        color: "rgba(122, 73, 165,0.25)",
        
        
      },
      {
        
        label: "TRCB",
        data: payload.itcrb,
        color: "rgba(46,120,210,0.25)",
        
        
      },
      {
        
        label: "Zona Euro",
        data: payload.itcreur,
        color: "rgba(46,120,210,0.25)",
        
        
      },      
]
}
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));


})()

