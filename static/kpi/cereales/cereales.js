 
module.exports = (async function() {

  const parsers = require("../../parsers");
const generatedTime = require(`../../generatedTime.json`)
  const kpi = "cereales"
 
  await parsers.datosGobarAPI(kpi, "soja", '34.2_STSOJ_0_P_16')
  await parsers.datosGobarAPI(kpi, "trigo", '34.2_TTTRI_0_P_17')
  await parsers.datosGobarAPI(kpi, "girasol", '34.2_GTGIR_0_P_19')
  await parsers.datosGobarAPI(kpi, "maiz", '34.2_MTMAI_0_P_16')
 
  var post = {
    kpi,
  "t": "Producción de Cereales",
  "st": "En Toneladas",
  "sd": "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  "c": "<p>Las especies cerealeras son la base de la pirámide alimentaria de seres humanos y animales. El trigo, maíz, sorgo, cebada, arroz, y centeno son los principales cultivos de cereal en nuestro país y son empleados con fines tan diversos como la panificación, forraje y la elaboración de alcohol etílico, bebidas, jarabes y endulzantes, alimentos, papel, productos farmacéuticos y en otros sectores industriales. La Argentina es uno de los principales exportadores globales de cereal.</p>",
  "f": "https://www.indec.gob.ar/ftp/cuadros/economia/metodologia_emae_ago_16.pdf",
  "d": "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  "max": 80000000,
  "cat": "Producción",
chartdata: {
  labels: require(`../../data/${generatedTime}/${kpi}/soja/dates.json`),
    datasets: [
      {
        backgroundColor: "rgba(146,220,210,0)",
        label: "Girasol",
        data: require(`../../data/${generatedTime}/${kpi}/girasol/d.json`),
        borderColor: "rgba(46,120,210,0.25)",

        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        backgroundColor: "rgba(146,220,210,0)",
        label: "Maiz",
        data: require(`../../data/${generatedTime}/${kpi}/maiz/d.json`),
        borderColor: "rgba(46,120,210,0.25)",

        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        backgroundColor: "rgba(146,220,210,0)",
        label: "Trigo",
        data: require(`../../data/${generatedTime}/${kpi}/trigo/d.json`),
        borderColor: "rgba(46,120,210,0.25)",

        pointRadius: 0,
        borderWidth: 1.5,
      },                    
      {
        backgroundColor: "rgba(146,220,210,0)",
        label: "Soja",

        data: require(`../../data/${generatedTime}/${kpi}/soja/d.json`),
        borderColor: "#2E78D2",
        pointRadius: 0,
        borderWidth: 1.5,
      },
    ],
  }
}

parsers.writeFileSyncRecursive(`./static/data/${generatedTime}/${kpi}/${kpi}.json`, JSON.stringify(post));

})()