module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "socioscomerciales"
  const url = 'https://infra.datos.gob.ar/catalog/sspm/dataset/140/distribution/140.1/download/participacion-principales-socios-comerciales-comercio-argentino-mensual.csv'
  const payload = await parsers.datosGobarCSV(0,1,url)
  const post = {
    kpi,
    t: "Socios Comerciales",
    st: "Por Pais",
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
        label: "Brasil",
        data: payload,
        
      },
      {
        label: "Canada",
        data: await parsers.datosGobarCSV(0,2,url),
        color: "rgba(46,120,210,0.2)",
      },
      {
        label: "Chile",
        data: await parsers.datosGobarCSV(0,3,url),
        color: "rgba(46,120,210,0.2)",
      },
      {
        label: "Estados Unidos",
        data: await parsers.datosGobarCSV(0,4,url),
        color: "rgba(46,120,210,0.5)",
      },       
      {
        label: "Mexico",
        data: await parsers.datosGobarCSV(0,5,url),
        color: "rgba(46,120,210,0.2)",
      },       
      {
        label: "Uruguay",
        data: await parsers.datosGobarCSV(0,6,url),
        color: "rgba(46,120,210,0.2)",
      },       
      {
        label: "China",
        data: await parsers.datosGobarCSV(0,7,url),
        color: "rgba(46,120,210,0.5)",
      },             
      {
        label: "India",
        data: await parsers.datosGobarCSV(0,8,url),
        color: "rgba(46,120,210,0.2)",
      },    
      {
        label: "Japon",
        data: await parsers.datosGobarCSV(0,9,url),
        color: "rgba(46,120,210,0.2)",
      },   
      {
        label: "Reino Unido",
        data: await parsers.datosGobarCSV(0,10,url),
        color: "rgba(46,120,210,0.2)",
      },        
      {
        label: "Suiza",
        data: await parsers.datosGobarCSV(0,11,url),
        color: "rgba(46,120,210,0.2)",
      },     
      {
        label: "Euro",
        data: await parsers.datosGobarCSV(0,12,url),
        color: "rgba(46,120,210,0.5)",
      },     
      {
        label: "Vietnam",
        data: await parsers.datosGobarCSV(0,13,url),
        color: "rgba(46,120,210,0.2)",
      },                                                           
]
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()

