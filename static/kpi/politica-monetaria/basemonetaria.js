module.exports = (async function() {
  const parsers = require("../../parsers");

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
    d: "La Base Monetaria (BM) está constituida por todo el dinero legal en circulación (es decir, billetes y monedas), sumado a las reservas de los bancos comerciales en el banco central.",
    cat: "Política Monetaria",
    catslug: "politica-monetaria",
    chartdata: {
      labels: require(`../../data/${kpi}/total/dates.json`),
      datasets: [
        {
          backgroundColor: 'rgba(46,120,210,0)',
          label: "Base Monetaria",
          data: require(`../../data/${kpi}/total/d.json`),
          borderColor: "#2E78D2",
          pointRadius: 0,
          borderWidth: 1.5,
        },
        {
          backgroundColor: 'rgba(46,120,210,0)',
          label: "Base Monetaria + Instrumentos (LELIQ y Otros)",
          data: require(`../../data/${kpi}/totalplus/d.json`),
          borderColor: "#2E78D280",
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