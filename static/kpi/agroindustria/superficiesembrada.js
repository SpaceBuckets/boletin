module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "superficiesembrada"
  const url = 'https://infra.datos.gob.ar/catalog/sspm/dataset/34/distribution/34.1/download/indicadores-evolucion-sector-agropecuario-valores-por-campana.csv'
  const payload = await parsers.datosGobarCSV(0,16,url)
  const post = {
    kpi,
    t: "Superficie Sembrada",
    st: "En Hectareas",
    sd: "",
    c: "<p>El indicador de Producción de Petróleo en Argentina se refiere a la cantidad total de petróleo crudo producido en el país en un período determinado, medido en millones de metros cúbicos (m3). La producción de petróleo es uno de los indicadores clave de la economía argentina, ya que el país tiene una importante industria petrolera que es una fuente importante de ingresos y empleo.</p><p>La producción de petróleo en Argentina ha experimentado altibajos en las últimas décadas, con períodos de crecimiento y de declive. En general, la producción de petróleo se ha visto afectada por una serie de factores, como los precios del petróleo, las inversiones en la industria, la exploración de nuevas reservas y los avances tecnológicos.</p><p>El pico de producción de petróleo en Argentina se alcanzó en la década de 1990, cuando se producían más de 1.000 millones de metros cúbicos de petróleo crudo al año. Sin embargo, la producción ha disminuido desde entonces, alcanzando su nivel más bajo en 2017, cuando se produjeron alrededor de 470 millones de metros cúbicos. Desde entonces, la producción ha mostrado cierta recuperación, alcanzando los 554 millones de metros cúbicos en 2019.</p><p>Es importante destacar que la producción de petróleo de Argentina se concentra en las cuencas del golfo San Jorge, Neuquina y Cuyana, que representan la mayor parte de la producción de petróleo del país. También hay una producción menor en las cuencas del Chaco, Austral y Colorado.</p>",
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
        label: "Soja",
        data: payload,
        
      },
      {
        label: "Algodon",
        data: await parsers.datosGobarCSV(0,1,url),
        color: "rgba(46,120,210,0.3)",
      },
      {
        label: "Alpiste",
        data: await parsers.datosGobarCSV(0,2,url),
        color: "rgba(46,120,210,0.6)",
      },
      {
        label: "Arroz",
        data: await parsers.datosGobarCSV(0,3,url),
        color: "rgba(46,120,210,0.3)",
      },          
      {
        label: "Avena",
        data: await parsers.datosGobarCSV(0,4,url),
        color: "rgba(46,120,210,0.3)",
      },   
      {
        label: "Cartamo",
        data: await parsers.datosGobarCSV(0,5,url),
        color: "rgba(46,120,210,0.3)",
      },   
      {
        label: "Cebada Cervecera",
        data: await parsers.datosGobarCSV(0,6,url),
        color: "rgba(46,120,210,0.3)",
      },   
      {
        label: "Cebada Forrajera",
        data: await parsers.datosGobarCSV(0,7,url),
        color: "rgba(46,120,210,0.3)",
      },   
      {
        label: "Centeno",
        data: await parsers.datosGobarCSV(0,8,url),
        color: "rgba(46,120,210,0.3)",
      },   
      {
        label: "Colza",
        data: await parsers.datosGobarCSV(0,9,url),
        color: "rgba(46,120,210,0.3)",
      },   
      {
        label: "Girasol",
        data: await parsers.datosGobarCSV(0,10,url),
        color: "rgba(46,120,210,0.3)",
      },   
      {
        label: "Lino",
        data: await parsers.datosGobarCSV(0,11,url),
        color: "rgba(46,120,210,0.3)",
      },       
      {
        label: "Maiz",
        data: await parsers.datosGobarCSV(0,12,url),
        color: "rgba(46,120,210,0.3)",
      },                
      {
        label: "Mani",
        data: await parsers.datosGobarCSV(0,13,url),
        color: "rgba(46,120,210,0.3)",
      },           
      {
        label: "Mijo",
        data: await parsers.datosGobarCSV(0,14,url),
        color: "rgba(46,120,210,0.3)",
      },           
      {
        label: "Porotos",
        data: await parsers.datosGobarCSV(0,15,url),
        color: "rgba(46,120,210,0.3)",
      },     
      {
        label: "Sorgo",
        data: await parsers.datosGobarCSV(0,17,url),
        color: "rgba(46,120,210,0.3)",
      },          
      {
        label: "Trigo",
        data: await parsers.datosGobarCSV(0,18,url),
        color: "rgba(46,120,210,0.3)",
      },                                                                                                                                                 
]
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()

