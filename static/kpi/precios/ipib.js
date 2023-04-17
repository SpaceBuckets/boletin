
module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "ipib"
const payload = await parsers.datosGobarAPI('449.1_NIVEL_GENERAL_0_0_13_97&representation_mode=percent_change')
  const post = {
    kpi,
  t: "IPIB",
  st: "Índice de Precios Internos Básicos al por Mayor",
  sd: "Este indicador incluye un exhaustivo relevamiento de todas las <em>actividades económicas que conforman la industria manufacturera</em>, con cobertura para el total del país.",
  c: "<p>El IPIB (Índice de Precios Internos Básicos al por Mayor) es un indicador que mide la evolución de los precios de los bienes y servicios producidos en Argentina y destinados a la venta en el mercado interno. Es elaborado por el INDEC (Instituto Nacional de Estadística y Censos) y se publica mensualmente.</p><p>Este índice se calcula a partir de los precios de los bienes y servicios que se venden en el mercado interno, excluyendo los productos exportados y los importados. Incluye los precios de los bienes y servicios que se venden en el mercado mayorista, es decir, antes de que sean vendidos al consumidor final.</p><p>El IPIB se utiliza como una medida de la inflación en Argentina, ya que los precios al por mayor tienen un impacto directo en los precios al consumidor final. Además, es un indicador importante para los productores, ya que les permite evaluar la evolución de los precios de los bienes y servicios que producen y venden en el mercado interno. También es útil para los economistas y analistas, ya que proporciona información sobre la evolución de los precios en la economía en general.</p>",
  fd: "datos.gob.ar",
  fdr: "https://datos.gob.ar/ar/dataset/sspm-indice-precios-internos-basicos-al-por-mayor-dic-2015-100/archivo/sspm_449.1",
  fu: "INDEC",
  fur: "https://www.indec.gob.ar/indec/web/Nivel3-Tema-3-5",
    frec: parsers.detectDataType(payload), 
      fruc: parsers.detectAggregationFunction(payload),
    u: new Date().toLocaleDateString('en-CA').split('/').join('-'),  
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
 
  dimensions: [
      { 
        label: "IPIB",
        data: payload,
        
      },
]
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()

