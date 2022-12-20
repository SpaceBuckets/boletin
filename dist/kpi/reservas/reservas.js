module.exports = (async function() {

  const parsers = require("../../parsers");
const generatedTime = require(`../../generatedTime.json`)
  const kpi = "reservas"
  try { 
  await parsers.datosGobarAPI(kpi, "datos", '174.1_RRVAS_IDOS_0_0_36')

  var post = {
    kpi,
  t: "Reservas BCRA",
  st: "En miles de millones de USD",
  sd: "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  c: "",
  fd: "datos.gob.ar",
  fdr: "https://datos.gob.ar/dataset/sspm_174/archivo/sspm_174.1",
  fu: "BCRA",
  fur: "https://www.bcra.gob.ar/",
  frec: "Mensual", 
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  max: 90000,
  cat: "Política Monetaria",
  chartdata: {
    labels: require(`../../data/${generatedTime}/${kpi}/datos/dates.json`),
    datasets: [
      {
        backgroundColor: 'rgba(46,120,210,0.1)',
        label: "Reservas Internacionales",
        data: require(`../../data/${generatedTime}/${kpi}/datos/d.json`),
        borderColor: '#2E78D2',
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

