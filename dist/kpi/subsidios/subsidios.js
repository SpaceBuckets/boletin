module.exports = (async function() {

  const parsers = require("../../parsers");
const generatedTime = require(`../../generatedTime.json`)
  const kpi = "subsidios"
 
  const kpidata = {
    subenergia: '452.2_ENERGIAGIA_0_T_7_56',
    subtransporte: '452.2_TRANSPORTERTE_0_T_10_32',
  }
  try {
  for (let [key, value] of Object.entries(kpidata)) {
    await parsers.datosGobarAPI(kpi, key, value)
  }
  var post = {
    kpi,
  t: "Subsidios Económicos",
  st: "Energía y Transporte",
  sd: "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
   c: "<p>El subsidio es una ayuda extraordinaria por parte de la Administración Pública para estimular la demanda de un bien o proteger a un colectivo. En economía, los subsidios son ayuda que los poderes públicos otorgan a determinados ciudadanos, principalmente, con el fin de brindar acceso a los bienes y servicios básicos.</p>",
   fd: "datos.gob.ar",
   fdr: "https://datos.gob.ar/dataset/sspm-informe-mensual-ingresos-gastos-sector-publico-nacional-no-financiero-imig/archivo/sspm_452.3",
   fu: "MECON",
   fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
   frec: "Mensual", 
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  max: 250000,
  cat: "Cuentas Nacionales",
  chartdata: {
    labels: require(`../../data/${generatedTime}/${kpi}/subenergia/dates.json`),
    datasets: [
      {
        backgroundColor: "rgba(146,220,210,0)",
        label: "Transporte",
        data: require(`../../data/${generatedTime}/${kpi}/subtransporte/d.json`),
        borderColor: "rgba(46,120,210,0.25)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        backgroundColor: "rgba(146,220,210,0)",
        label: "Energia",
        data: require(`../../data/${generatedTime}/${kpi}/subenergia/d.json`),
        borderColor: "#2E78D2",
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

