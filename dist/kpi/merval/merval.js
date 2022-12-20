module.exports = (async function () {

  const parsers = require("../../parsers");
const generatedTime = require(`../../generatedTime.json`)
  const kpi = "merval"
  try {
  await parsers.datosGobarAPI(kpi, 'datos', '169.1_MALVAL_0_0_6')

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
    cat: "Política Monetaria",
    chartdata: {
      labels: require(`../../data/${generatedTime}/${kpi}/datos/dates.json`),
      datasets: [
        {
          backgroundColor: "transparent",
          label: "Indice Merval",
          data: require(`../../data/${generatedTime}/${kpi}/datos/d.json`),
          borderColor: "#2E78D2CC",
          type: 'line',
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

