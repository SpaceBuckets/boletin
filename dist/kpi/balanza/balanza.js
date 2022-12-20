module.exports = (async function() {

  const parsers = require("../../parsers");
const generatedTime = require(`../../generatedTime.json`)
  const kpi = "balanza"
  try {

  await parsers.datosGobarAPI(kpi, "impo", '74.3_IIT_0_M_25')
  await parsers.datosGobarAPI(kpi, "expo", '74.3_IET_0_M_16')
  await parsers.datosGobarAPI(kpi, "saldo", '74.3_ISC_0_M_19')

  var post = {
    kpi,
    t: "Intercambio Comercial",
    st: "Importaciones, Exportaciones y Saldo",
    sd: "El intercambio comercial argentino (ICA) muestra la evolución de la balanza comercial, la relación entre los ingresos en dólares de las exportaciones y los gastos de las importaciones.",
    c: "<p>Las estadísticas del comercio exterior se elaboran principalmente sobre la base de los registros aduaneros (permisos de embarque para las exportaciones y despachos de importación para las importaciones). Para completar la cobertura, se utilizan encuestas a entes binacionales de producción de energía eléctrica, gas y a empresas de transporte marítimo y aéreo como única fuente de información complementaria.</p>",
    fd: "datos.gob.ar",
    fdr: "https://datos.gob.ar/ja/dataset/sspm-intercambio-comercial-argentino/archivo/sspm_74.3",
    fu: "MECON",
    fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
    frec: "Mensual", 
    d: "El intercambio comercial argentino (ICA) muestra la evolución de la balanza comercial, la relación entre los ingresos en dólares provenientes de los productos que exporta el país y aquellos artículos que se compran en el exterior.",
    cat: "Cuentas Nacionales",
    chartdata: {
    labels: require(`../../data/${generatedTime}/${kpi}/impo/dates.json`),
    datasets: [
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "Importaciones",
        data: require(`../../data/${generatedTime}/${kpi}/impo/d.json`),
        borderColor: "#b22222CC",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        backgroundColor: "rgba(146,220,210,0)",
        label: "Exportaciones",
        data: require(`../../data/${generatedTime}/${kpi}/expo/d.json`),
        borderColor: "#009966",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        backgroundColor: "#ccc",
        label: "Saldo Comercial",
        type: "bar",
        data: require(`../../data/${generatedTime}/${kpi}/saldo/d.json`),
        borderColor: "#ccc",
        pointRadius: 0,
        borderWidth: 0,
      },
    ],
  },
  }

  parsers.writeFileSyncRecursive(`./static/data/${generatedTime}/${kpi}/${kpi}.json`, JSON.stringify(post));

} catch (error) {
  console.log('\x1b[41m', '\x1b[37m',`✕ [${kpi}] failed to fetch!` ,'\x1b[0m');
}
})()