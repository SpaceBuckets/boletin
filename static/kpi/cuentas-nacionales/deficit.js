module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "deficit"
 
  
   
    const ingresos = await parsers.datosGobarAPI(kpi, 'ingresos', '379.9_ING_CORR_2017__13_2')
    const gastos = await parsers.datosGobarAPI(kpi, 'gastos', '379.9_GTOS_CORR_017__14_1')
    const ahorro = await parsers.datosGobarAPI(kpi, 'ahorro', '379.9_RESULTADO_017__41_83')


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
  chartdata: {
    labels: ingresos.dates,
    datasets: [
      {
        backgroundColor: "rgba(146,220,210,0)",
        label: "Ingresos",
        data: ingresos.d,
        borderColor: "#009966",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        backgroundColor: "rgba(146,220,210,0)",
        label: "Gastos",
        data: gastos.d,
        borderColor: "#b22222CC",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        backgroundColor: "#ccc",
        label: "Saldo",
        data: ahorro.d,
        borderColor: "#ccc",
        pointRadius: 0,
        borderWidth: 0,
        type: "bar",
      },
]
}
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));


})()

