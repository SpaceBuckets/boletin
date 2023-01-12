module.exports = (async function() {

  const parsers = require("../../parsers");
const generatedTime = require(`../../generatedTime.json`)
  const kpi = "gastos"
 
  const kpidata = {
    energia: '452.2_CAPITAL_ENION_0_T_22_35',
    transporte: '452.3_CAPITAL_TRION_0_M_25_82',
    educacion: '452.3_CAPITAL_EDION_0_M_24_92',
    vivienda: '452.3_CAPITAL_VIION_0_M_23_52',
    agua: '452.3_CAPITAL_AGION_0_M_41_40',
    otros: '452.3_CAPITAL_OTION_0_M_20_10'
  }
  try {
  for (let [key, value] of Object.entries(kpidata)) {
    await parsers.datosGobarAPI(kpi, key, value)
  }
  var post = {
    kpi,
  t: "Gastos de Capital",
  st: "En Millones de Pesos",
  sd: "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  c: "<p>El gasto público es el total de gastos realizados por el sector público del Estado, en la adquisición de bienes y servicios. En una economía de mercado, el destino primordial del gasto público es la satisfacción de las necesidades colectivas, mientras que los gastos públicos destinados a satisfacer el consumo público solo se producen para remediar las deficiencias del mercado.</p>",
  fd: "datos.gob.ar",
  fdr: "https://datos.gob.ar/dataset/sspm-informe-mensual-ingresos-gastos-sector-publico-nacional-no-financiero-imig/archivo/sspm_452.3",
  fu: "MECON",
  fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
  frec: "Mensual", 
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  cat: "Cuentas Nacionales",
  catslug: "cuentas-nacionales",
  chartdata: {
    labels: require(`../../data/${generatedTime}/${kpi}/transporte/dates.json`),
    datasets: [
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "Transporte",
        data: require(`../../data/${generatedTime}/${kpi}/transporte/d.json`),
        borderColor: "rgba(46,120,210,1)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "Agua",
        data: require(`../../data/${generatedTime}/${kpi}/agua/d.json`),
        borderColor: "rgba(46,120,210,0.25)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "Vivienda",
        data: require(`../../data/${generatedTime}/${kpi}/vivienda/d.json`),
        borderColor: "rgba(46,120,210,0.25)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "Energia",
        data: require(`../../data/${generatedTime}/${kpi}/energia/d.json`),
        borderColor: "rgba(46,120,210,0.25)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "Educacion",
        data: require(`../../data/${generatedTime}/${kpi}/educacion/d.json`),
        borderColor: "rgba(46,120,210,0.25)",
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