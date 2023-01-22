module.exports = (async function() {

  const parsers = require("../../parsers");
  

  const kpi = "ipicammesa"
  const kpidata = {
    url: 'https://datos.produccion.gob.ar/dataset/2c91f1eb-1eff-47e2-9122-42275e15ad9d/resource/9f5150e2-7de5-4233-b906-a52d26c625c6/download/ipi-cammesa.csv',
     date: 0,
    items: {
      interanual: 1
    }
  }
  try {
  const payload = await parsers.datosGobarCSV(kpidata,kpi)

  var post = {
    kpi,
  t: "IPI CAMMESA",
  st: "Índice Adelantado de Producción Industrial",
  sd: "Este indicador incluye un exhaustivo relevamiento de todas las <em>actividades económicas que conforman la industria manufacturera</em>, con cobertura para el total del país.",
  c: "<p>Este indice se basa en los datos diarios de consumo de energía eléctrica (en MWh) de los Grandes Usuarios Mayores, que se componen de 417 establecimientos productivos del país, de los cuales 289 pertenecen a la industria manufacturera.</p>",
  fd: "datos.gob.ar",
  fdr: "http://datos.produccion.gob.ar/dataset/2c91f1eb-1eff-47e2-9122-42275e15ad9d/resource/9f5150e2-7de5-4233-b906-a52d26c625c6/download/ipi-cammesa.csv",
  fu: "CEP XXI",
  fur: "https://www.argentina.gob.ar/produccion/cep/estudios-coyuntura",
  frec: "Mensual",   
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  cat: "Actividad Económica",
  catslug: "actividad-economica",
  chartdata: {
    labels: payload.dates,
    datasets: [
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "IPI CAMMESA",
        data: payload.interanual,
        borderColor: "#2E78D2",
        pointRadius: 0,
        borderWidth: 1.5,
      },
]
}
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));

} catch (error) {
  console.log('\x1b[41m', '\x1b[37m',`✕ [${kpi}] ${error}!` ,'\x1b[0m');
}
})()
