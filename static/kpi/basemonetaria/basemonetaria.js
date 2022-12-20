module.exports = (async function() {
  const parsers = require("../../parsers");
const generatedTime = require(`../../generatedTime.json`)
  const kpi = "basemonetaria"
  try {

  var post = {
    kpi,
    t: "Base Monetaria",
    st: "Total e Instrumentos BCRA",
    sd: "La Base Monetaria (BM) está constituida por todo el dinero legal en circulación (es decir, billetes y monedas), sumado a las reservas de los bancos comerciales en el banco central.",
    c: "<p>La Base Monetaria (BM) está constituida por todo el dinero legal en circulación (es decir, billetes y monedas), sumado a las reservas de los bancos comerciales en el banco central.</p>",
    fd: "Scraped (Web)",
    fdr: "http://www.bcra.gov.ar/Pdfs/PublicacionesEstadisticas/series.xlsm",
    fu: "BCRA",
    fur: "http://www.bcra.gov.ar/Pdfs/PublicacionesEstadisticas/series.xlsm",
    frec: "Diaria", 
    min: 0,
    d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
    cat: "Política Monetaria",
    chartdata: {
      labels: require(`../../data/${generatedTime}/${kpi}/total/dates.json`),
      datasets: [
        {
          backgroundColor: 'rgba(46,120,210,0)',
          label: "Base Monetaria",
          data: require(`../../data/${generatedTime}/${kpi}/total/d.json`),
          borderColor: "#2E78D2",
          pointRadius: 0,
          borderWidth: 1.5,
        },
        {
          backgroundColor: 'rgba(46,120,210,0)',
          label: "Base Monetaria + Instrumentos (LELIQ y Otros)",
          data: require(`../../data/${generatedTime}/${kpi}/totalplus/d.json`),
          borderColor: "#2E78D280",
          pointRadius: 0,
          borderWidth: 1.5,
        },
      ],
    }
  }

   parsers.writeFileSyncRecursive(`./static/data/${generatedTime}/${kpi}/${kpi}.json`, JSON.stringify(post));

} catch (error) {
  console.log('\x1b[41m', '\x1b[37m',`✕ [${kpi}] failed to fetch!` ,'\x1b[0m');
}
})()