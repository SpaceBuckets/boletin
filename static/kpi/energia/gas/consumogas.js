module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "consumogas"
const payload = await parsers.datosGobarAPI('364.3_TOTALTAL__5')
  const post = {
    kpi,
  t: "Consumo de Gas",
  st: "En Toneladas",
  sd: "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  c: "<p>El indicador de consumo de gas en Argentina mide la cantidad de gas natural que se consume en el país en un determinado período de tiempo. El gas natural es un recurso importante para la economía argentina, ya que es utilizado tanto por hogares como por industrias y comercios.</p><p>El consumo de gas se mide en miles de metros cúbicos por día (MMm3/día) y se utiliza para monitorear la oferta y la demanda de gas en el país, así como para planificar la inversión en infraestructura y producción.</p><p>El consumo de gas en Argentina ha experimentado fluctuaciones en las últimas décadas, afectado en gran medida por la producción nacional de gas y la importación de gas natural licuado (GNL) para cubrir la demanda insatisfecha. En los últimos años, ha habido un aumento en la producción de gas no convencional, lo que ha mejorado la oferta de gas en el país.</p>",
  fd: "datos.gob.ar",
  fdr: "https://datos.gob.ar/dataset/sspm-estadisticas-servicios-publicos/archivo/sspm_302.3",
  fu: "MECON",
  fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
    frec: parsers.detectDataType(payload), 
      fruc: parsers.detectAggregationFunction(payload),
    u: new Date().toLocaleDateString('en-CA').split('/').join('-'),  
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  dimensions: [
      {
        
        label: "Consumo de Gas",
        data: payload,
        color: "rgba(46,120,210,1)",
        
        
      },

    ],
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()