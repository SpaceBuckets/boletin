module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "cuencasgas"
  const url = 'http://datos.energia.gob.ar/dataset/c846e79c-026c-4040-897f-1ad3543b407c/resource/a3244ddd-38bc-4800-a700-360b649d2f3a/download/serie-histrica-de-produccin-de-gas-natural-por-cuenca-y-sub-tipo-de-recurso-captulo-iv-.csv'
 const payload = await parsers.datosGobarCSV(0,3,url)
  const post = {
    kpi,
    t: "Producción por Cuenca",
    st: "En millones de m3",
    sd: "",
    c: "<p>La producción de gas es un indicador clave para la economía argentina, ya que el país es uno de los principales productores y exportadores de gas natural de América Latina.</p><p>La producción de gas se concentra principalmente en las cuencas del Neuquén, Golfo San Jorge y Austral. La cuenca del Neuquén es la más importante, ya que allí se encuentra la formación de Vaca Muerta, que es una de las reservas de gas y petróleo no convencionales más grandes del mundo.</p><p>La producción de gas natural es una actividad estratégica para el país, ya que el gas es utilizado como fuente de energía en la industria, el transporte y el hogar. Además, Argentina cuenta con una importante infraestructura de transporte y distribución de gas, que le permite abastecer tanto el mercado interno como los mercados internacionales.</p>>El indicador de Producción de gas por Cuenca es relevante para evaluar el desempeño del sector energético del país, así como su capacidad para abastecer la demanda interna y externa de gas natural. También es importante para analizar la competitividad de la industria energética argentina en el mercado internacional y su impacto en la economía del país.</p>",
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

