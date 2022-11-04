module.exports = (async function () {

  const parsers = require("../../parsers");
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
      labels: require("./datos/dates.json"),
      datasets: [
        {
          backgroundColor: "transparent",
          label: "Indice Merval",
          data: require("./datos/d.json"),
          borderColor: "#2E78D2CC",
          type: 'line',
          pointRadius: 0,
          borderWidth: 1.5,
        },

      ]
    }
  }

  parsers.writeFileSyncRecursive(`./static/kpi/${kpi}/${kpi}.json`, JSON.stringify(post));

})()

