module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "crudoprocesado"
  const url = 'https://infra.datos.gob.ar/catalog/sspm/dataset/41/distribution/41.1/download/indicadores-produccion-industria-manufacturera-valores-mensuales.csv'
  const payload = await parsers.datosGobarCSV(0,1,url)
  const post = {
    kpi,
    t: "Producción Crudo y Procesado",
    st: "En miles de m3",
    sd: "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
    c: "<p>El indicador de Producción de Petróleo en Argentina se refiere a la cantidad total de petróleo crudo producido en el país en un período determinado, medido en millones de metros cúbicos (m3). La producción de petróleo es uno de los indicadores clave de la economía argentina, ya que el país tiene una importante industria petrolera que es una fuente importante de ingresos y empleo.</p><p>La producción de petróleo en Argentina ha experimentado altibajos en las últimas décadas, con períodos de crecimiento y de declive. En general, la producción de petróleo se ha visto afectada por una serie de factores, como los precios del petróleo, las inversiones en la industria, la exploración de nuevas reservas y los avances tecnológicos.</p><p>El pico de producción de petróleo en Argentina se alcanzó en la década de 1990, cuando se producían más de 1.000 millones de metros cúbicos de petróleo crudo al año. Sin embargo, la producción ha disminuido desde entonces, alcanzando su nivel más bajo en 2017, cuando se produjeron alrededor de 470 millones de metros cúbicos. Desde entonces, la producción ha mostrado cierta recuperación, alcanzando los 554 millones de metros cúbicos en 2019.</p><p>Es importante destacar que la producción de petróleo de Argentina se concentra en las cuencas del golfo San Jorge, Neuquina y Cuyana, que representan la mayor parte de la producción de petróleo del país. También hay una producción menor en las cuencas del Chaco, Austral y Colorado.</p>",
    fd: "datos.gob.ar",
    fdr: "https://datos.gob.ar/it/dataset/sspm-produccion-ventas-petroleo-derivados/archivo/sspm_363.3",
    fu: "MECON",
    fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
      frec: parsers.detectDataType(payload), 
  fruc: parsers.detectAggregationFunction(payload),  
    d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",

    dimensions: [
      {
        label: "Crudo",
        data: payload,
        color: "#2E78D2",
      },
      {
        label: "Procesado",
        data: await parsers.datosGobarCSV(0,2,url),
        color: "rgba(46,120,210,0.25)",
      },
 
                                          
]
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));


})()

