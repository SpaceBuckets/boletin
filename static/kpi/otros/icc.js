module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "icc"
   
  const payload = await parsers.datosGobarAPI(kpi, "icc", '380.3_ICC_NACIONNAL_0_T_12')

  var post = {
    kpi,
  t: "ICC",
  st: "Índice de Confianza del Consumidor",
  sd: "Este indicador busca reflejar el contexto económico internacional que enfrenta el país, a partir de los niveles de liquidez mundial, los precios de las materias primas, la demanda externa y el ciclo económico de Brasil.",
  c: "<p>El índice de confianza  del consumidor es un indicador económico que mide el grado de optimismo que los consumidores sienten sobre la evolución del estado en general de la economía, y sobre su situación financiera personal. Indica qué tan seguras se sienten las personas sobre la estabilidad de sus ingresos, lo que determina sus actividades de consumo y, por lo tanto, sirve como uno de los indicadores claves en la forma general de la economía.</p>",
  fd: "datos.gob.ar",
  fdr: "https://datos.gob.ar/dataset/sspm-indice-confianza-consumidor/archivo/sspm_380.3",
  fu: "MECON",
  fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
  frec: "Mensual", 
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",

  chartdata: {
    labels: payload.dates,
    datasets: [
      {
        backgroundColor: "rgba(46,120,210,0.05)",
        label: "ICC",
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