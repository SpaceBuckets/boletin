module.exports = (async function() {

  const parsers = require("../../parsers");
  const kpi = "ipicammesa"
  const kpidata = {
    url: 'https://datos.produccion.gob.ar/dataset/2c91f1eb-1eff-47e2-9122-42275e15ad9d/resource/9f5150e2-7de5-4233-b906-a52d26c625c6/download/ipi-cammesa.csv',
    sheet: 0,
    date: 0,
    columns: {
      interanual: 1
    }
  }
  await parsers.datosGobarCSV(kpidata,kpi)

  var post = {
    kpi,
  t: "IPI CAMMESA",
  st: "Índice Adelantado de Producción Industrial",
  sd: "Este indicador incluye un exhaustivo relevamiento de todas las <em>actividades económicas que conforman la industria manufacturera</em>, con cobertura para el total del país.",
  c: "<p>Este indice se basa en los datos diarios de consumo de energía eléctrica (en MWh) de los Grandes Usuarios Mayores, que se componen de 417 establecimientos productivos del país, de los cuales 289 pertenecen a la industria manufacturera.</p>",
  f: "https://www.argentina.gob.ar/produccion/cep/estudios-coyuntura",
  fu: "CEP XXI",
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  cat: "Actividad Económica",
  chartdata: {
    labels: require("./dates.json"),
    datasets: [
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "IPI CAMMESA",
        data: require("./interanual.json"),
        borderColor: "#2E78D2",
        pointRadius: 0,
        borderWidth: 1.5,
      },
]
}
}

parsers.writeFileSyncRecursive(`./static/kpi/${kpi}/${kpi}.json`, JSON.stringify(post));

})()
