module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "consumogas"
  

  const payload = await parsers.datosGobarAPI('364.3_TOTALTAL__5')

  var post = {
    kpi,
  "t": "Consumo de Gas",
  "st": "En Toneladas",
  "sd": "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  "c": "",
  fd: "datos.gob.ar",
  fdr: "https://datos.gob.ar/dataset/sspm-estadisticas-servicios-publicos/archivo/sspm_302.3",
  fu: "MECON",
  fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
  frec: "Mensual", 
  "d": "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  chart: {
    dates:payload,
    dimensions: [
      {
        fillColor: "rgba(46,120,210,0.05)",
        label: "Consumo de Gas",
        data: payload,
        color: "rgba(46,120,210,1)",
        
        
      },

    ],
  }
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));


})()