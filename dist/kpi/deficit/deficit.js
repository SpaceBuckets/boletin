module.exports = (async function() {

  const parsers = require("../../parsers");
const generatedTime = require(`../../generatedTime.json`)
  const kpi = "deficit"
  const deficit = {
    ingresos: '379.9_ING_CORR_2017__13_2',
    gastos: '379.9_GTOS_CORR_017__14_1',
    ahorro: '379.9_RESULTADO_017__41_83',
  }
  try {
  for (let [key, value] of Object.entries(deficit)) {
    await parsers.datosGobarAPI(kpi, key, value)
  }

  var post = {
    kpi,
  t: "Déficit Fiscal",
  st: "Ingresos, Gastos y Ahorro",
  sd: "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  c: "<p>El concepto de déficit fiscal, déficit presupuestario o déficit público describe la situación en la cual los gastos realizados por el Estado superan a los ingresos no financieros, en un determinado periodo (normalmente un año).</p>",
  fd: "datos.gob.ar",
  fdr: "https://datos.gob.ar/ar/dataset/sspm-esquema-ahorro---inversion---financimmiento-sector-publico-nacional-base-caja/archivo/sspm_379.9",
  fu: "MECON",
  fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
  frec: "Mensual", 
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  cat: "Cuentas Nacionales",
  chartdata: {
    labels: require(`../../data/${generatedTime}/${kpi}/ingresos/dates.json`),
    datasets: [
      {
        backgroundColor: "rgba(146,220,210,0)",
        label: "Ingresos",
        data: require(`../../data/${generatedTime}/${kpi}/ingresos/d.json`),
        borderColor: "#009966",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        backgroundColor: "rgba(146,220,210,0)",
        label: "Gastos",
        data: require(`../../data/${generatedTime}/${kpi}/gastos/d.json`),
        borderColor: "#b22222CC",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        backgroundColor: "#ccc",
        label: "Saldo",
        data: require(`../../data/${generatedTime}/${kpi}/ahorro/d.json`),
        borderColor: "#ccc",
        pointRadius: 0,
        borderWidth: 0,
        type: "bar",
      },
]
}
}

parsers.writeFileSyncRecursive(`./static/data/${generatedTime}/${kpi}/${kpi}.json`, JSON.stringify(post));

} catch (error) {
  console.log('\x1b[41m', '\x1b[37m',`✕ [${kpi}] failed to fetch!` ,'\x1b[0m');
}
})()

