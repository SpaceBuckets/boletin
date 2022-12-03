module.exports = (async function () {

  const parsers = require("../../parsers");
const generatedTime = require(`../../generatedTime.json`)
  const kpi = "pozosperforados"
  try {
  await parsers.datosGobarAPI(kpi, 'datos', '366.3_POZOS_TERMRAL__30')

  const post = {
    kpi,
    t: "Pozos Perforados",
    st: "Petroleo",
    sd: "",
    c: "",
    f: "",
    d: "",
    cat: "Energia",
    max: 200,
    chartdata: {
      labels: require(`../../data/${generatedTime}/${kpi}/datos/dates.json`),
      datasets: [
        {
          backgroundColor: "rgba(146,220,210,0)",
          label: "Pozos de Petroleo terminados",
          data: require(`../../data/${generatedTime}/${kpi}/datos/d.json`),
          borderColor: "#2E78D2CC",
          backgroundColor: "#2E78D2CC",
          type: 'bar',
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

