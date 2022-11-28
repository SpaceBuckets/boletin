module.exports = (async function () {

  const parsers = require("../../parsers");
const generatedTime = require(`../../generatedTime.json`)
  const kpi = "merval"

  await parsers.datosGobarAPI(kpi, 'datos', '169.1_MALVAL_0_0_6')

  const post = {
    kpi,
    t: "MERVAL",
    st: "Indice",
    sd: "",
    c: "",
    f: "",
    d: "",
    cat: "Sector Financiero",
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

})()
