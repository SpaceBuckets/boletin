module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "icl"
   
  const payload = await parsers.scrapeBCRA("7988",kpi)

  var post = {
    kpi,
  t: "ICL",
  st: "Índice para Contratos de Locacion",
  sd: "El Índice de Contratos de Locación (ICL) es un indicador creado por la Ley 27.551 con el fin de poder establecer parámetros de actualización a la hora de celebrar contratos de alquiler.",
  c: "<p>El Índice de Contratos de Locación (ICL) es un indicador creado por la Ley 27.551 con el fin de poder establecer parámetros de actualización a la hora de celebrar contratos de alquiler.</p>",
  fd: "Scraped (Web)",
  fdr: "http://www.bcra.gov.ar/PublicacionesEstadisticas/Principales_variables_datos.asp?fecha_desde=1900-01-01&fecha_hasta=2040-04-30&primeravez=1&serie=7988",
  fu: "BCRA",
  fur: "http://www.bcra.gob.ar/pdfs/PublicacionesEstadisticas/bolmetes.pdf",
  frec: "Diaria", 
  d: "El Índice de Contratos de Locación (ICL) es un indicador creado por la Ley 27.551 con el fin de poder establecer parámetros de actualización a la hora de celebrar contratos de alquiler.",


  chartdata: {
    labels: payload.dates,
    datasets: [
      {
        backgroundColor: "rgba(46,120,210,0.05)",
        label: "ICL",
        data: payload.d,
        borderColor: "rgba(46,120,210,1)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
]
}
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));


})()