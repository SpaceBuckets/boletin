module.exports = (async function () {

  const parsers = require("../../parsers");
  const kpi = "auh"

  await parsers.datosGobarAPI(kpi, 'datos', '188.1_AUH_ASIGNAADO_0_0_48')

  const post = {
    kpi,
    t: "Asignacion Universal",
    st: "Cantidad de personas",
    sd: "",
    c: "",
    f: "",
    d: "",
    cat: "Cuentas Nacionales",
    chartdata: {
      labels: require("./datos/dates.json"),
      datasets: [
        {
          backgroundColor: "rgba(146,220,210,0)",
          label: "AUH",
          data: require("./datos/d.json"),
          borderColor: "#2E78D2CC",
          backgroundColor: "#2E78D2CC",
          type: 'bar',
          pointRadius: 0,
          borderWidth: 1.5,
        },

      ]
    }
  }

  parsers.writeFileSyncRecursive(`./static/kpi/${kpi}/${kpi}.json`, JSON.stringify(post));

})()

