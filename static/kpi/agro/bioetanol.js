 
module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "bioetanol"
  

  const bioetanol = await parsers.datosGobarAPI('368.3_BIOETANOL_ION__26')
 
   var post = {
    kpi,
  "t": "Producción de Bioetanol",
  "st": "En Metros Cubicos",
  "sd": "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  "c": "<p>Las especies cerealeras son la base de la pirámide alimentaria de seres humanos y animales. El trigo, maíz, sorgo, cebada, arroz, y centeno son los principales cultivos de cereal en nuestro país y son empleados con fines tan diversos como la panificación, forraje y la elaboración de alcohol etílico, bebidas, jarabes y endulzantes, alimentos, papel, productos farmacéuticos y en otros sectores industriales.</p>",
  fd: "datos.gob.ar",
  fdr: "https://datos.gob.ar/sq/dataset/sspm-indicadores-evolucion-sector-agropecuario/archivo/sspm_34.2",
  fu: "MECON",
  fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
  frec: "Mensual", 
  "d": "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  max: 180000,
chart: {
  dates:bioetanol,
    dimensions: [
      {
        fillColor: "rgba(46,120,210,0.1)",
        label: "Producción de Bioetanol",
        data: bioetanol,
        color: "rgba(46,120,210,0.8)",
      },
    ],
  }
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));


})()