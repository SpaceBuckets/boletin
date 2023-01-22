module.exports = (async function () {

  const parsers = require("../../../parsers");

  const kpi = "pozosperforados"
  try {
  const payload = await parsers.datosGobarAPI(kpi, 'datos', '366.3_POZOS_TERMRAL__30')

  const post = {
    kpi,
    t: "Pozos Perforados",
    st: "Petroleo",
    sd: "",
    c: "",
    fd: "datos.gob.ar",
    fdr: "https://datos.gob.ar/ar/dataset/sspm-pozos-petroleo-metros-perforados/archivo/sspm_366.3",
    fu: "MECON",
    fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
    frec: "Mensual", 
    d: "",
    cat: "Hidrocarburos",
    catslug: "hidrocarburos",
    max: 200,
    chartdata: {
      labels: payload.dates,
      datasets: [
        {
          backgroundColor: "rgba(146,220,210,0)",
          label: "Pozos de Petroleo terminados",
          data: payload.d,
          borderColor: "#2E78D2CC",
          backgroundColor: "#2E78D2CC",
          type: 'bar',
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

