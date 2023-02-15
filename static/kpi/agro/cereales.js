 
module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "cereales"
  

  const soja = await parsers.datosGobarAPI('34.2_STSOJ_0_P_16')
  const trigo = await parsers.datosGobarAPI('34.2_TTTRI_0_P_17')
  const girasol = await parsers.datosGobarAPI('34.2_GTGIR_0_P_19')
  const maiz = await parsers.datosGobarAPI('34.2_MTMAI_0_P_16')
 
  var post = {
    kpi,
  "t": "Producción de Cereales",
  "st": "En Toneladas",
  "sd": "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  "c": "<p>Las especies cerealeras son la base de la pirámide alimentaria de seres humanos y animales. El trigo, maíz, sorgo, cebada, arroz, y centeno son los principales cultivos de cereal en nuestro país y son empleados con fines tan diversos como la panificación, forraje y la elaboración de alcohol etílico, bebidas, jarabes y endulzantes, alimentos, papel, productos farmacéuticos y en otros sectores industriales.</p>",
  fd: "datos.gob.ar",
  fdr: "https://datos.gob.ar/sq/dataset/sspm-indicadores-evolucion-sector-agropecuario/archivo/sspm_34.2",
  fu: "MECON",
  fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
  frec: "Mensual", 
  "d": "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  "max": 80000000,
chart: {
  dates:soja,
    dimensions: [
      { 
        label: "Girasol",
        data: girasol,
        color: "rgba(46,120,210,0.25)",
      },
      { 
        label: "Maiz",
        data: maiz,
        color: "rgba(46,120,210,0.25)",
      },
      { 
        label: "Trigo",
        data: trigo,
        color: "rgba(46,120,210,0.25)",
      },                    
      {
        label: "Soja",
        data: soja,
        color: "#2E78D2",
      },
    ],
  }
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));


})()