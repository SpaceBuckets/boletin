module.exports = (async function () {

  const parsers = require("../../parsers");

  const kpi = "merval"
  try {
  const payload = await parsers.datosGobarAPI(kpi, 'datos', '169.1_MALVAL_0_0_6')

  const post = {
    kpi,
    t: "MERVAL",
    st: "Indice",
    sd: "",
    c: "",
    fd: "datos.gob.ar",
    fdr: "https://datos.gob.ar/dataset/sspm-indices-bursatiles-argentina/archivo/sspm_169.1",
    fu: "MECON",
    fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
    frec: "Mensual", 
    d: "",
    cat: "Sector Financiero",
    catslug: "sector-financiero",
    chartdata: {
      labels: payload.dates,
      datasets: [
        {
          backgroundColor: "transparent",
          label: "Indice Merval",
          data: payload.d,
          borderColor: "#2E78D2CC",
          type: 'line',
          pointRadius: 0,
          borderWidth: 1.5,
        },

      ]
    }
  }

  parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));

} catch (error) {
  console.log('\x1b[41m', '\x1b[37m',`✕ [${kpi}] failed to fetch!` ,'\x1b[0m');
}
})()

