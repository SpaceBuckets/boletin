 
module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "bioetanol"
 
   const post = {
    kpi,
    t: "Producción de Bioetanol",
    st: "En Metros Cubicos",
    sd: "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
    c: "<p>La producción de bioetanol en Argentina es un indicador que mide la cantidad de bioetanol que se produce en el país durante un período determinado. El bioetanol es un biocombustible líquido que se produce a partir de la fermentación de materiales orgánicos, como la caña de azúcar, el maíz y la remolacha, entre otros.</p><p>En Argentina, la producción de bioetanol es un sector importante de la industria agroalimentaria, ya que se utiliza principalmente como aditivo en la gasolina para aumentar su octanaje y mejorar su calidad ambiental. Además, el bioetanol se considera una fuente de energía renovable y más limpia que los combustibles fósiles, por lo que su producción y uso están alineados con los objetivos de desarrollo sostenible.</p><p>El indicador de producción de bioetanol en Argentina puede variar en función de varios factores, como la disponibilidad y precio de las materias primas, los costos de producción y la demanda del mercado interno y externo. En general, la producción de bioetanol en el país ha experimentado un aumento significativo en las últimas décadas, especialmente a partir de la implementación de políticas públicas para fomentar el uso de biocombustibles.</p>",
    fd: "datos.gob.ar",
    fdr: "https://datos.gob.ar/sq/dataset/sspm-indicadores-evolucion-sector-agropecuario/archivo/sspm_34.2",
    fu: "MECON",
    fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
    frec: "Mensual", 
    d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
    max: 180000,
    dimensions: [
      {
        fillColor: "rgba(46,120,210,0.1)",
        label: "Producción de Bioetanol",
        data: await parsers.datosGobarAPI('368.3_BIOETANOL_ION__26'),
        color: "rgba(46,120,210,0.8)",
      },
    ],
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));


})()