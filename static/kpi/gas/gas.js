module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "gas"
const payload = await parsers.datosGobarAPI('364.3_PRODUCCIoNRAL__25')

  const post = {
    kpi,
  t: "Producción de Gas",
  st: "En millones de metros cúbicos",
  sd: "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  c: "<p>El indicador de producción de gas en millones de metros cúbicos de Argentina mide la cantidad de gas natural producido en el país en un período determinado, expresado en millones de metros cúbicos. El gas natural es un recurso importante para la economía argentina, ya que se utiliza ampliamente como fuente de energía tanto en la industria como en los hogares.</p><p>La producción de gas en Argentina se realiza principalmente en dos cuencas: la Cuenca Neuquina, ubicada en la Patagonia, y la Cuenca del Golfo San Jorge, ubicada en la provincia de Chubut. Estas dos cuencas representan aproximadamente el 90% de la producción total de gas del país.</p><p>El indicador de producción de gas es importante para evaluar la capacidad del país para satisfacer la demanda interna de energía, reducir la dependencia de las importaciones de gas y, en algunos casos, para exportar gas natural a otros países de la región. También puede ser un indicador de la actividad económica en el sector energético y de la inversión en el desarrollo de nuevos yacimientos de gas.</p>",
  fd: "datos.gob.ar",
  fdr: "https://datos.gob.ar/dataset/sspm_364/archivo/sspm_364.3",
  fu: "MECON",
  fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
    frec: parsers.detectDataType(payload), 
      fruc: parsers.detectAggregationFunction(payload),
    u: new Date().toLocaleDateString('en-CA').split('/').join('-'),  
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  max: 6000,
  dimensions: [
      {
        
        label: "Produccion de Gas",
        data: payload,
        color: "rgba(46,120,210,1)",
        
        
      },
]
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()

