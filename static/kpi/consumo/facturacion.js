module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "facturacion"
  const url = 'https://cdn.produccion.gob.ar/cdn-cep/datos-facturacion/fact_por_total.csv'
  const payload = await parsers.datosGobarCSV(0,1,url)
  const post = {
    kpi,
  t: "Facturación mediana",
  st: "Variación interanual total",
  sd: "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  c: "<p>La variación interanual es una medida importante utilizada para evaluar el rendimiento económico de los sectores empresariales en un país o región. Esta medida compara la mediana de facturación de las empresas en un período específico con el mismo período del año anterior, mostrando el porcentaje de cambio.</p><p>La mediana se utiliza como medida de tendencia central porque es menos sensible a valores extremos o atípicos que podrían afectar la medida. A diferencia de la media, que se ve afectada por los valores extremos, la mediana es el valor central que divide la muestra en dos partes iguales, es decir, la mitad de las empresas tienen una facturación mayor y la otra mitad una facturación menor que la mediana.</p><p>Esta medida proporciona información útil para los analistas económicos y los encargados de tomar decisiones en las empresas. Por ejemplo, una variación interanual positiva en la mediana de facturación de un sector determinado indica que ese sector está experimentando un crecimiento económico, lo que podría significar que hay más empleo, más inversión y un aumento en la demanda. </p>",
  fd: "datos.gob.ar",
  fdr: "http://datos.produccion.gob.ar/dataset/variacion-interanual-mediana-en-la-facturacion-de-las-empresas",
  fu: "CEP XXI",
  fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
    frec: parsers.detectDataType(payload), 
      fruc: parsers.detectAggregationFunction(payload),
    u: new Date().toLocaleDateString('en-CA').split('/').join('-'),  
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  dimensions: [
      {
        
        label: "Facturación Mediana",
        data: payload,
        color: "rgba(46,120,210,1)",
        
      },

    ],
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()