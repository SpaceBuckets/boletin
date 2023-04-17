module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "barriles"
  const url = 'http://datos.energia.gob.ar/dataset/c846e79c-026c-4040-897f-1ad3543b407c/resource/af8c50bb-fde0-43b7-98eb-7cd14daf586c/download/serie-histrica-de-produccin-de-petrleo-por-cuenca-y-sub-tipo-de-recurso-captulo-iv-.csv'
  const payload = await parsers.datosGobarCSV(0,11,url)

   const post = {
    kpi,
  t: "Produccion Diaria",
  st: "En miles de barriles",
  sd: "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  c: "<p>El indicador de producción diaria de petróleo en Argentina mide la cantidad de barriles de petróleo producidos por día en el país. El petróleo es un recurso natural no renovable y su producción es importante para la economía argentina, ya que es uno de los principales productos de exportación.</p><p>La producción de petróleo en Argentina ha experimentado altibajos a lo largo de los años debido a factores como la inversión en exploración y explotación de reservas, los precios internacionales del petróleo y la demanda interna del país.</p><p>Este indicador es relevante para medir la dependencia del país de este recurso, su capacidad para cubrir su demanda interna y su posición en el mercado internacional. Además, es un indicador importante para la industria energética del país y para los inversores interesados en el sector petrolero.</p>",
  fd: "datos.gob.ar",
  fdr: "https://datos.gob.ar/it/dataset/sspm-produccion-ventas-petroleo-derivados/archivo/sspm_363.3",
  fu: "MECON",
  fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
    frec: parsers.detectDataType(payload), 
      fruc: parsers.detectAggregationFunction(payload),
    u: new Date().toLocaleDateString('en-CA').split('/').join('-'),  
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  min: 200,
  max: 800,
  dimensions: [
      {
        
        label: "kbbl (miles de barriles)",
        data: payload,
        
        
        
      },
    ]
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()

