module.exports = (async function() {

  const parsers = require("../../parsers");
const generatedTime = require(`../../generatedTime.json`)
  const kpi = "embi"
  const kpidata = {
    url: "https://bcrdgdcprod.blob.core.windows.net/documents/entorno-internacional/documents/Serie_Historica_Spread_del_EMBI.xlsx",
    sheet: 0,
    date: 0,
    items: [
      { name: "argentina", id: 4, },
      { name: "brasil", id: 6, },
      { name: "chile", id: 7,},
      { name: "mexico", id: 14,},
      { name: "colombia", id: 8,},
      { name: "latino", id: 2}
    ]
  }
  try {
  await parsers.genericXLS(kpidata, kpi)

  var post = {
    kpi,
  t: "Riesgo País",
  st: "Emerging Market Bond Index",
  sd: "Sirve de referencia para estimar la evolución del mercado de deuda emergente y permite estudiar el comportamiento de una canasta de bonos que conforman la deuda de los países emergentes.",
  c: "<p>Índice calculado por JP Morgan Chase que mide la diferencia entre la tasa de interés que un país debe de pagar por emitir deuda en el exterior con respecto al rédito que pagan los bonos norteamericanos, considerados los bonos gubernamentales libres de riesgo  de modo que refleja el riesgo país también refleja la probabilidad de que una nación incumpla con el pago de la deuda o de los intereses.</p>",
  fd: "Scraped (XLS)",
  fdr: "https://bcrdgdcprod.blob.core.windows.net/documents/entorno-internacional/documents/Serie_Historica_Spread_del_EMBI.xlsx",
  fu: "JP Morgan",
  fur: "https://am.jpmorgan.com/es/es/asset-management/per/products/jpm-emerging-markets-strategic-bond-a-acc-usd-lu1162084740",
  frec: "Diaria", 
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  max: 50,
  cat: "Política Monetaria",
  chartdata: {
    labels: require(`../../data/${generatedTime}/${kpi}/argentina/dates.json`),
    datasets: [
      {
        backgroundColor: 'rgba(46,120,210,0)',
        label: "EMBI Brasil",
        data: require(`../../data/${generatedTime}/${kpi}/brasil/d.json`),
        borderColor: "rgba(46,120,210,0.3)",

        pointRadius: 0,
        borderWidth: 1,
      },
      {
        backgroundColor: 'rgba(46,120,210,0)',
        label: "EMBI Chile",
        data: require(`../../data/${generatedTime}/${kpi}/chile/d.json`),
        borderColor: "rgba(46,120,210,0.3)",

        pointRadius: 0,
        borderWidth: 1,
      },
      {
        backgroundColor: 'rgba(46,120,210,0)',
        label: "EMBI Colombia",
        data: require(`../../data/${generatedTime}/${kpi}/colombia/d.json`),
        borderColor: "rgba(46,120,210,0.3)",

        pointRadius: 0,
        borderWidth: 1,
      },
      {
        backgroundColor: 'rgba(46,120,210,0)',
        label: "EMBI Mexico",
        data: require(`../../data/${generatedTime}/${kpi}/mexico/d.json`),
        borderColor: "rgba(46,120,210,0.3)",

        pointRadius: 0,
        borderWidth: 1,
      },
      {
        backgroundColor: 'rgba(46,120,210,0)',
        label: "EMBI Latino",
        data: require(`../../data/${generatedTime}/${kpi}/latino/d.json`),
        borderColor: "#7a49a580",

        pointRadius: 0,
        borderWidth: 1,
      },
      {
        backgroundColor: 'rgba(146,220,210,0)',
        label: "EMBI Argentina",
        data: require(`../../data/${generatedTime}/${kpi}/argentina/d.json`),
        borderColor: "#2E78D2",
        pointRadius: 0,
        borderWidth: 1.5,

      }
    ]
}
}

parsers.writeFileSyncRecursive(`./static/data/${generatedTime}/${kpi}/${kpi}.json`, JSON.stringify(post));

} catch (error) {
  console.log('\x1b[41m', '\x1b[37m',`✕ [${kpi}] failed to fetch!` ,'\x1b[0m');
}
})()

