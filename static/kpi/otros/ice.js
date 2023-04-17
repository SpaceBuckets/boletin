module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "ice"
 
  const kpidata = {
    url: 'https://estudioseconomicos.ec.gba.gov.ar/datos/nac/contnac-indice-de-condiciones-externas.xlsx',
    sheet: 0,
    date: 0,
    items: [
      {name: "coyuntural", id: 2},
      {name: "estructural", id: 1}
    ]
  }
  
  const payload = await parsers.genericXLS(kpidata)

  const post = {
    kpi,
  t: "ICE",
  st: "Índice de Condiciones Externas",
  sd: "Este indicador busca reflejar el contexto económico internacional que enfrenta el país, a partir de los niveles de liquidez mundial, los precios de las materias primas, la demanda externa y el ciclo económico de Brasil.",
  c: "<p>Índice mensual que busca reflejar el contexto económico internacional que enfrenta el país, a partir de los niveles de liquidez mundial (medido por la tasa de interés de la FED), los precios de las materias primas (medido por los términos de intercambio), la demanda externa (medido por el volumen del comercio global) y el ciclo económico de Brasil (medido por su producción industrial).</p><p>Las series fueron normalizadas en base al promedio histórico desde 1997 a la actualidad, dándole un valor igual a 5. Desde allí, una serie que indica un valor por encima de 5 (por encima de la media del período) refleja que la situación externa es más favorable, y viceversa. Se presentan dos indicadores, el ICE-estructural donde la base del análisis son los promedios históricos, y el ICE-coyuntural más de corto plazo (de 5 años) para una mejor captura de los cambios recientes.</p><p>El ICE (Índice de Condiciones Externas) es un indicador elaborado por el Banco Provincia de Buenos Aires, que tiene como objetivo medir la evolución de las condiciones externas para la economía argentina. El ICE busca proporcionar una señal temprana sobre los posibles impactos que pueden tener los cambios en las condiciones externas sobre la economía argentina, permitiendo a los analistas y responsables de políticas tomar decisiones informadas y oportunas para gestionar los riesgos y aprovechar las oportunidades que surjan.</p>",
  fd: "Scraped (XLS)",
  fdr: "https://estudioseconomicos.ec.gba.gov.ar/datos/nac/contnac-indice-de-condiciones-externas.xlsx",
  fu: "Banco Provincia",
  fur: "https://www.bancoprovincia.com.ar/estudios_economicos/informe_estudios_economicos",
    frec: parsers.detectDataType(payload.coyuntural), 
  fruc: parsers.detectAggregationFunction(payload.coyuntural),    
  u: new Date().toLocaleDateString('en-CA').split('/').join('-'),

  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  max: 10,

  dimensions: [
      {
label: "ICE Coyuntural",
        data: payload.coyuntural,
        color: "rgba(46,120,210,0.3)",

        
        
      },
      {
        label: "ICE Estructural",
        data: payload.estructural,
        
        
        

      },
    ]
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()

