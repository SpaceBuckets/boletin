module.exports = (async function() {

  const parsers = require("../../parsers");
const generatedTime = require(`../../generatedTime.json`)
  const kpi = "icc"
  try { 
  await parsers.datosGobarAPI(kpi, "icc", '380.3_ICC_NACIONNAL_0_T_12')

  var post = {
    kpi,
  t: "ICC",
  st: "Índice de Confianza del Consumidor",
  sd: "Este indicador busca reflejar el contexto económico internacional que enfrenta el país, a partir de los niveles de liquidez mundial, los precios de las materias primas, la demanda externa y el ciclo económico de Brasil.",
  c: "<p>El índice de confianza  del consumidor es un indicador económico que mide el grado de optimismo que los consumidores sienten sobre la evolución del estado en general de la economía, y sobre su situación financiera personal. Indica qué tan seguras se sienten las personas sobre la estabilidad de sus ingresos, lo que determina sus actividades de consumo y, por lo tanto, sirve como uno de los indicadores claves en la forma general de la economía. En esencia, si la confianza del consumidor es mayor, los consumidores aumentan o mejor dicho están haciendo más compras, impulsando la expansión económica. Por otra parte, si la confianza es menor, los consumidores tienden a ahorrar más de lo que gastan, lo que provoca contracciones en la economía, esto ocurre por miedo a que la economía entre en recesión, como es la sensación que siente el consumidor quizás esto no ocurra pero si lo ve posible.</p>",
  f: "https://www.indec.gob.ar/ftp/cuadros/economia/metodologia_emae_ago_16.pdf",
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  cat: "Otros",
  chartdata: {
    labels: require(`../../data/${generatedTime}/${kpi}/icc/dates.json`),
    datasets: [
      {
        backgroundColor: "rgba(46,120,210,0.05)",
        label: "ICC",
        data: require(`../../data/${generatedTime}/${kpi}/icc/d.json`),
        borderColor: "rgba(46,120,210,1)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
    ]
}
}

parsers.writeFileSyncRecursive(`./static/data/${generatedTime}/${kpi}/${kpi}.json`, JSON.stringify(post));

} catch (error) {
  console.log('\x1b[41m', '\x1b[37m',`✕ [${kpi}] failed to fetch!` ,'\x1b[0m');
}
})()