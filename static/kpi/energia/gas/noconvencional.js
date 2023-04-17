module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "noconvencional"
  const url = 'http://datos.energia.gob.ar/dataset/c846e79c-026c-4040-897f-1ad3543b407c/resource/a3244ddd-38bc-4800-a700-360b649d2f3a/download/serie-histrica-de-produccin-de-gas-natural-por-cuenca-y-sub-tipo-de-recurso-captulo-iv-.csv'
    const payload = await parsers.datosGobarCSV(0,10,url)

   const post = {
    kpi,
  t: "Participación No Convencional",
  st: "En millones de m3",
  sd: "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  c: "<p>Este indicador se refiere a la proporción de gas producido a partir de fuentes no convencionales, como el gas de esquisto, el gas de lutitas y el gas de arenas compactas, en relación con la producción total de gas en el país.</p><p>En los últimos años, Argentina ha experimentado un auge en la producción de gas no convencional gracias al desarrollo de la tecnología de fracturación hidráulica, que ha permitido la extracción de gas de esquisto y otros recursos no convencionales. Según datos del Ministerio de Energía y Minería de Argentina, en 2020 la producción de gas no convencional representó el 59% del total de gas producido en el país.</p><p>Este indicador es relevante porque la participación del gas no convencional en la producción total de gas tiene implicaciones significativas para la economía y la política energética de Argentina. Por un lado, la producción de gas no convencional ha permitido a Argentina reducir su dependencia de las importaciones de gas natural licuado (GNL) y, en consecuencia, mejorar su balance comercial y reducir su vulnerabilidad a los cambios en los precios internacionales del GNL. Por otro lado, la extracción de gas no convencional ha sido objeto de controversia debido a los posibles efectos negativos sobre el medio ambiente y las comunidades locales que viven cerca de los yacimientos de gas.</p>",
  fd: "datos.gob.ar",
  fdr: "https://datos.gob.ar/it/dataset/sspm-produccion-ventas-petroleo-derivados/archivo/sspm_363.3",
  fu: "MECON",
  fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
    frec: parsers.detectDataType(payload), 
      fruc: parsers.detectAggregationFunction(payload),
    u: new Date().toLocaleDateString('en-CA').split('/').join('-'),  
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  max: 100,
  min: 0,
  dimensions: [
      {
        
        label: "Porcentaje",
        data: payload,
        
        
        
      },
    ]
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()

