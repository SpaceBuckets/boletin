module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "consumoelectricidad"
const payload = await parsers.datosGobarAPI('302.3_ELEC_GAS_AGWH_0_S_35')
  const post = {
    kpi,
  t: "Consumo Electrico",
  st: "En Toneladas",
  sd: "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  c: "<p>El indicador de consumo eléctrico es un índice que mide la demanda de energía eléctrica en el país en un período determinado. Este indicador es relevante porque la demanda de energía eléctrica está altamente relacionada con la actividad económica y la producción industrial./</p><p>El consumo eléctrico de Argentina se mide en megavatios (MW) y se calcula a partir de la cantidad de energía eléctrica que se consume en todo el país. Este indicador se actualiza periódicamente y se puede obtener información detallada sobre el consumo eléctrico en diferentes sectores de la economía, como la industria, el comercio, el transporte y los hogares.</p><p>El consumo eléctrico es considerado un indicador adelantado de la actividad económica porque muchas empresas necesitan una cantidad significativa de energía eléctrica para llevar a cabo sus procesos productivos. Además, el consumo eléctrico también está relacionado con la demanda de bienes y servicios de los hogares y el nivel de actividad comercial en el país.</p><p>En Argentina, el indicador de consumo eléctrico es monitoreado y publicado por la Compañía Administradora del Mercado Mayorista Eléctrico (CAMMESA). Esta entidad se encarga de coordinar el suministro y la distribución de energía eléctrica en todo el país.</p>",
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
        
        label: "Consumo de Electricidad",
        data: payload,
        color: "rgba(46,120,210,1)",
        
        
      },
    ],
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()