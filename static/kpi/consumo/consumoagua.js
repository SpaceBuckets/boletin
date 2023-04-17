module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "consumoagua"
const payload = await parsers.datosGobarAPI('302.3_ELEC_GAS_A_M3_0_S_30')
  const post = {
    kpi,
  t: "Consumo de Agua",
  st: "En Toneladas",
  sd: "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  c: "<p>El indicador de consumo de agua en Argentina se refiere a la cantidad de agua que se utiliza en el país. Este indicador es importante porque el agua es un recurso esencial para la vida y el desarrollo humano, y su uso eficiente y sostenible es clave para garantizar el acceso a este recurso para las generaciones presentes y futuras.</p><p>Según datos del Instituto Nacional de Estadística y Censos (INDEC), el consumo de agua en Argentina ha venido aumentando en los últimos años. En 2018, se consumieron en promedio 305 litros de agua por habitante por día en el área urbana del país, y 112 litros de agua por habitante por día en el área rural. Este consumo varía según la región y la actividad económica.</p><p>El uso del agua en Argentina se destina principalmente al consumo humano, la agricultura y la industria. El consumo humano incluye el agua potable para el consumo doméstico y los servicios de saneamiento, como el tratamiento de aguas residuales. La agricultura es el principal usuario de agua en Argentina, ya que se utiliza para riego de cultivos, ganadería y otros usos agrícolas. La industria también consume una cantidad significativa de agua para procesos productivos y otros fines.</p>",
  fd: "datos.gob.ar",
  fdr: "https://datos.gob.ar/ar/dataset/sspm-estadisticas-servicios-publicos/archivo/sspm_302.3",
  fu: "MECON",
  fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
    frec: parsers.detectDataType(payload), 
      fruc: parsers.detectAggregationFunction(payload),
    u: new Date().toLocaleDateString('en-CA').split('/').join('-'),  
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  dimensions: [
      {
        
        label: "Consumo de Agua",
        data: payload,
        color: "rgba(46,120,210,1)",
        
      },

    ],
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()