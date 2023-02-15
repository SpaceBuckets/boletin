module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "consumoagua"
  

  const payload = await parsers.datosGobarAPI('302.3_ELEC_GAS_A_M3_0_S_30')

  var post = {
    kpi,
  "t": "Consumo de Agua",
  "st": "En Toneladas",
  "sd": "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  "c": "",
  fd: "datos.gob.ar",
  fdr: "https://datos.gob.ar/ar/dataset/sspm-estadisticas-servicios-publicos/archivo/sspm_302.3",
  fu: "MECON",
  fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
  frec: "Mensual", 
  "d": "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  chart: {
    dates:payload,
    dimensions: [
      {
        fillColor: "rgba(46,120,210,0.05)",
        label: "Consumo de Agua",
        data: payload,
        color: "rgba(46,120,210,1)",
        
        
      },

    ],
  }
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));


})()