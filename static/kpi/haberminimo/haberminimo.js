module.exports = (async function() {

  const parsers = require("../../parsers");
const generatedTime = require(`../../generatedTime.json`)
  const kpi = "haberminimo"
  try { 
  await parsers.datosGobarAPI(kpi, "haberminimo", '58.1_MP_0_M_24')

  var post = {
    kpi,
  t: "Haber Minimo Jubilatorio",
  st: "Remuneración imponible promedio de los trabajadores estables",
  sd: "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  c: "<p>Jubilación es el acto administrativo por el que un trabajador en activo, por cuenta propia o ajena, solicita pasar a una situación pasiva o de inactividad laboral tras haber alcanzado la edad legal para ello. También, se puede originar por enfermedad crónica grave o incapacidad. Después de su resolución favorable, el interesado obtiene una prestación económica vitalicia. La legislación laboral de cada país estipula condiciones distintas al respecto.</p>",
  f: "https://www.indec.gob.ar/ftp/cuadros/economia/metodologia_emae_ago_16.pdf",
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  cat: "Salarios",
  max: 50000,
  chartdata: {
    labels: require(`../../data/${generatedTime}/${kpi}/haberminimo/dates.json`),
    datasets: [
      {
        backgroundColor: "rgba(46,120,210,0.05)",
        label: "Haber Minimo Jubilatorio",
        data: require(`../../data/${generatedTime}/${kpi}/haberminimo/d.json`),
        borderColor: "rgba(46,120,210,1)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
]
}
}

parsers.writeFileSyncRecursive(`./static/data/${generatedTime}/${kpi}/${kpi}.json`, JSON.stringify(post));

} catch (error) {
  console.log('\x1b[41m', '\x1b[37m',`✕ [${kpi}] failed to fetch!` ,'\x1b[0m');
}
})()