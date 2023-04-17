
module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "ipim"
   const payload = await parsers.datosGobarAPI('448.1_NIVEL_GENERAL_0_0_13_46&representation_mode=percent_change')
  const post = {
    kpi,
  t: "IPIM",
  st: "Índice de Precios Internos al por Mayor",
  sd: "Este indicador incluye un exhaustivo relevamiento de todas las <em>actividades económicas que conforman la industria manufacturera</em>, con cobertura para el total del país.",
  c: "<p>El IPIM (Índice de Precios Internos al por Mayor) es un indicador elaborado por el Instituto Nacional de Estadística y Censos (INDEC) de Argentina, que mide la evolución de los precios de los productos nacionales e importados vendidos al por mayor en el mercado interno.</p><p>El IPIM se calcula a través de un índice de precios promedio ponderado de los bienes y servicios transados en el mercado mayorista, teniendo en cuenta los volúmenes de producción y las ponderaciones de los diferentes productos. El índice se actualiza mensualmente y se expresa en términos de variación porcentual en relación al mes anterior y al mismo mes del año anterior.</p><p>El IPIM es considerado un indicador importante para medir la inflación en la economía argentina, ya que los precios al por mayor son un factor clave en la determinación de los precios al consumidor, y pueden reflejar cambios en la oferta y la demanda a nivel nacional e internacional. Además, el IPIM es utilizado como referencia para la fijación de precios de los productos exportados y para la regulación de precios de algunos productos importados en el mercado local.</p>",
  fd: "datos.gob.ar",
  fdr: "https://datos.gob.ar/ar/dataset/sspm-indice-precios-internos-al-por-mayor-ipim-dic-2015-100/archivo/sspm_448.1",
  fu: "INDEC",
  fur: "https://www.indec.gob.ar/indec/web/Nivel3-Tema-3-5",
    frec: parsers.detectDataType(payload), 
      fruc: parsers.detectAggregationFunction(payload),
    u: new Date().toLocaleDateString('en-CA').split('/').join('-'),  
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
   dimensions: [
      {
        label: "IPIM",
        data: payload,
        
      },
]
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()

