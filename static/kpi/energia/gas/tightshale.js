module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "tightshale"
  const url = 'http://datos.energia.gob.ar/dataset/c846e79c-026c-4040-897f-1ad3543b407c/resource/a3244ddd-38bc-4800-a700-360b649d2f3a/download/serie-histrica-de-produccin-de-gas-natural-por-cuenca-y-sub-tipo-de-recurso-captulo-iv-.csv'
 const payload = await parsers.datosGobarCSV(0,8,url)

   const post = {
    kpi,
  t: "Producción Tight & Shale",
  st: "En millones de m3",
  sd: "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  c: "<p>La producción de gas Tight & Shale es un indicador que mide la cantidad de gas extraído de formaciones geológicas no convencionales, como el shale gas y tight gas, en Argentina. El shale gas se extrae de la roca de esquisto mediante la técnica de fracturación hidráulica, mientras que el tight gas se extrae de rocas sedimentarias de baja permeabilidad.</p><p>En los últimos años, Argentina ha experimentado un aumento en la producción de gas Tight & Shale, especialmente en la formación de Vaca Muerta en la provincia de Neuquén. Esta formación tiene un gran potencial de producción de gas y petróleo no convencional y se considera clave para el futuro energético de Argentina.</p><p>La producción de gas Tight & Shale es importante porque puede reducir la dependencia de Argentina de las importaciones de gas y petróleo, mejorar la balanza comercial y contribuir al desarrollo económico del país. Además, esta producción puede tener un impacto ambiental significativo debido a los riesgos asociados con la técnica de fracturación hidráulica y la necesidad de gestionar adecuadamente los residuos y emisiones asociados.</p>",
  fd: "datos.gob.ar",
  fdr: "https://datos.gob.ar/it/dataset/sspm-produccion-ventas-petroleo-derivados/archivo/sspm_363.3",
  fu: "MECON",
  fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
    frec: parsers.detectDataType(payload), 
      fruc: parsers.detectAggregationFunction(payload),
    u: new Date().toLocaleDateString('en-CA').split('/').join('-'),  
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  dimensions: [
      {
label: "Shale",
        data: payload,
        
        
        
      },
      {
label: "Tight",
        data: await parsers.datosGobarCSV(0,9,url),
        color: "#2E78D250",
        
        
      },
    ]
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()

