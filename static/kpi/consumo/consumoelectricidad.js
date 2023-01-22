module.exports = (async function() {

  const parsers = require("../../parsers");

  const kpi = "consumoelectricidad"
  try {

 const payload = await parsers.datosGobarAPI(kpi, "consumo", '302.3_ELEC_GAS_AGWH_0_S_35')

  var post = {
    kpi,
  "t": "Consumo Electrico",
  "st": "En Toneladas",
  "sd": "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  "c": "",
  fd: "datos.gob.ar",
  fdr: "https://datos.gob.ar/dataset/sspm-estadisticas-servicios-publicos/archivo/sspm_302.3",
  fu: "MECON",
  fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
  frec: "Mensual", 
  "d": "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  "cat": "Energia",  
  catslug: "energia",
  chartdata: {
    labels: payload.dates,
    datasets: [
      {
        backgroundColor: "rgba(46,120,210,0.05)",
        label: "Consumo de Electricidad",
        data: payload.d,
        borderColor: "rgba(46,120,210,1)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
    ],
  }
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));

} catch (error) {
  console.log('\x1b[41m', '\x1b[37m',`✕ [${kpi}] failed to fetch!` ,'\x1b[0m');
}
})()