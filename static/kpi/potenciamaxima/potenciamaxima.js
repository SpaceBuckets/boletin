module.exports = (async function () {

  const parsers = require("../../parsers");
const generatedTime = require(`../../generatedTime.json`)
  const kpi = "potenciamaxima"

  await parsers.datosGobarAPI(kpi, 'datos', '367.3_POTENCIA_MIMA__15')

  const post = {
    kpi,
    t: "Potencia Maxima",
    st: "Electricidad",
    sd: "",
    c: "",
    f: "",
    d: "",
    cat: "Energia",
    chartdata: {
      labels: require(`../../data/${generatedTime}/${kpi}/datos/dates.json`),
      datasets: [
        {
          backgroundColor: "rgba(146,220,210,0)",
          label: "Potencia Electrica Maxima",
          data: require(`../../data/${generatedTime}/${kpi}/datos/d.json`),
          borderColor: "#2E78D2CC",
          pointRadius: 0,
          borderWidth: 1.5,
        },

      ]
    }
  }

  parsers.writeFileSyncRecursive(`./static/data/${generatedTime}/${kpi}/${kpi}.json`, JSON.stringify(post));

})()

