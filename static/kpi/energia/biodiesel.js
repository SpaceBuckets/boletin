 
module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "biodiesel"
  const url = 'https://infra.datos.gob.ar/catalog/sspm/dataset/368/distribution/368.3/download/produccion-ventas-biocombustibles-anual-mensual.csv'
  const payload = await parsers.datosGobarCSV(0,1,url)
   const post = {
    kpi,
    t: "Producción de Biodiesel",
    st: "En Metros Cubicos",
    sd: "",
    c: "<p>La producción de bioetanol en Argentina es un indicador que mide la cantidad de bioetanol que se produce en el país durante un período determinado. El bioetanol es un biocombustible líquido que se produce a partir de la fermentación de materiales orgánicos, como la caña de azúcar, el maíz y la remolacha, entre otros.</p><p>En Argentina, la producción de bioetanol es un sector importante de la industria agroalimentaria, ya que se utiliza principalmente como aditivo en la gasolina para aumentar su octanaje y mejorar su calidad ambiental. Además, el bioetanol se considera una fuente de energía renovable y más limpia que los combustibles fósiles, por lo que su producción y uso están alineados con los objetivos de desarrollo sostenible.</p><p>El indicador de producción de bioetanol en Argentina puede variar en función de varios factores, como la disponibilidad y precio de las materias primas, los costos de producción y la demanda del mercado interno y externo. En general, la producción de bioetanol en el país ha experimentado un aumento significativo en las últimas décadas, especialmente a partir de la implementación de políticas públicas para fomentar el uso de biocombustibles.</p>",
    fd: "datos.gob.ar",
    fdr: "https://datos.gob.ar/sq/dataset/sspm-indicadores-evolucion-sector-agropecuario/archivo/sspm_34.2",
    fu: "MECON",
    fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
      frec: parsers.detectDataType(payload), 
      fruc: parsers.detectAggregationFunction(payload),
    u: new Date().toLocaleDateString('en-CA').split('/').join('-'),  
    d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
    dimensions: [
      {
        label: "Producción de Biodiesel",
        data: payload,
        color: "rgba(46,120,210,0.8)",
      },
      {
        label: "Ventas al Corte",
        data: await parsers.datosGobarCSV(0,2,url),
        color: "rgba(46,120,210,0.2)",
      },
      {
        label: "Exportaciones de Biodiesel",
        data: await parsers.datosGobarCSV(0,4,url),
        color: "rgba(46,120,210,0.2)",
      },            
    ],
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()