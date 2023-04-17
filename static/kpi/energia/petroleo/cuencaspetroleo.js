module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "cuencaspetroleo"
  const url = 'http://datos.energia.gob.ar/dataset/c846e79c-026c-4040-897f-1ad3543b407c/resource/af8c50bb-fde0-43b7-98eb-7cd14daf586c/download/serie-histrica-de-produccin-de-petrleo-por-cuenca-y-sub-tipo-de-recurso-captulo-iv-.csv'
    const payload = await parsers.datosGobarCSV(0,3,url)
  const post = {
    kpi,
  t: "Producción por Cuenca",
  st: "En millones de m3",
  sd: "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  c: "<p>El indicador de Producción de Petróleo por Cuenca en Argentina es una estadística que muestra la cantidad de petróleo extraído de cada cuenca petrolera del país. Las cuencas petroleras son áreas geográficas donde se concentran grandes reservas de petróleo y gas natural. En Argentina, existen varias cuencas petroleras, siendo las más importantes la cuenca Neuquina (que incluye la formación de Vaca Muerta), la cuenca del Golfo San Jorge y la cuenca Cuyana.</p><p>La producción de petróleo en cada cuenca depende de varios factores, como la calidad de los yacimientos, la inversión en exploración y producción, la tecnología utilizada y las políticas gubernamentales. El petróleo extraído en cada cuenca se utiliza para diversos fines, como la producción de combustibles, la generación de energía eléctrica y la fabricación de productos petroquímicos.</p><p>El seguimiento de la producción de petróleo por cuenca es importante para evaluar el desempeño del sector petrolero en el país, identificar las principales áreas de producción y establecer políticas y estrategias para el desarrollo del sector. Además, la producción de petróleo por cuenca es un indicador clave para la balanza comercial y la economía en general, ya que el petróleo es uno de los principales productos de exportación de Argentina.</p>",
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
label: "Neuquina",
        data: payload,
        
      },
      {
label: "Austral",
        data: await parsers.datosGobarCSV(0,1,url),
        color: "#2E78D250",
        
        
      },
      {
label: "Golfo",
        data: await parsers.datosGobarCSV(0,2,url),
        color: "#2E78D250",
        
        
      },
      {
label: "Noroeste",
        data: await parsers.datosGobarCSV(0,4,url),
        color: "#2E78D250",
        
        
      },    
      {
label: "Cuyana",
        data: await parsers.datosGobarCSV(0,5,url),
        color: "#2E78D250",
        
        
      },    
      {
label: "Total",
        data: await parsers.datosGobarCSV(0,6,url),
        color: "#2E78D250",
        
        
      },                                   
]
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()

