module.exports = (async function() {

  const parsers = require("@parsers");

   const kpi = "ipimundial"
  const kpidata = {
    url: 'https://datos.produccion.gob.ar/dataset/178d90a9-43df-408c-92f4-36ad14885f99/resource/88adb84d-622d-43d6-91fc-8f87f8bac91c/download/ipi-mundial.csv',
     date: 0,
    items: {
      estacional: 1,
      desestacional: 2,
 
    }
  }
  
  const payload = await parsers.datosGobarCSV(kpidata,kpi)

  
   var post = {
    kpi,
  t: "IPI Mundial",
  st: "CEP XXI",
  sd: "Este índice mide el precio relativo de los bienes y servicios de la economía argentina con respecto al de los de los principales 12 socios comerciales del país, en función del flujo de comercio de manufacturas.",
  c: "<p>Este índice mide el precio relativo de los bienes y servicios de la economía argentina con respecto al de los de los principales 12 socios comerciales del país, en función del flujo de comercio de manufacturas. Se obtiene a partir de un promedio ponderado de los tipos de cambio reales bilaterales de los principales socios comerciales del país. </p>",
  fd: "Scraped (XLS)",
  fdr: "https://www.bcra.gob.ar/Pdfs/PublicacionesEstadisticas/ITCRMSerie.xls",
  fu: "BCRA",
  fur: "https://www.bcra.gob.ar/Pdfs/PublicacionesEstadisticas/ITCRMSerie.xls",
  frec: "Diaria", 
  d: "Este índice mide el precio relativo de los bienes y servicios de la economía argentina con respecto al de los de los principales 12 socios comerciales del país, en función del flujo de comercio de manufacturas.",
  max: 220,
  min: 80,
  cat: "Política Monetaria",
  catslug: "politica-monetaria",
  chartdata: {
    labels: payload.dates,
    datasets: [
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "Estacionalizado",
        data: payload.estacional,
        borderColor: "#2E78D250",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "Desestacionalizado",
        data: payload.desestacional,
        borderColor: "#2E78D2",
        pointRadius: 0,
        borderWidth: 1.5,
      },
]
}
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));


})()

