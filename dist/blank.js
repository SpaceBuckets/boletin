module.exports = (async function() {

  const parsers = require("../../parsers");
  const kpi = "deficit"
  const deficit = {
    ingresos: '379.9_ING_CORR_2017__13_2',
    gastos: '379.9_GTOS_CORR_017__14_1',
    ahorro: '379.9_RESULTADO_017__41_83',
  }
  for (let [key, value] of Object.entries(deficit)) {
    await parsers.datosGobarAPI(kpi, key, value)
  }

  var post = {
    kpi,
  t: "",
  st: "",
  sd: "",
  c: "",
  f: "",
  d: "",
  cat: "Cuentas Nacionales",
  chartdata: {
    labels: require("./ingresos/dates.json"),
    datasets: [
      {
        backgroundColor: "rgba(146,220,210,0)",
        label: "Ingresos",
        data: require("./ingresos/d.json"),
        borderColor: "#009966",
        pointRadius: 0,
        borderWidth: 1.5,
      },

]
}
}

parsers.writeFileSyncRecursive(`./static/kpi/${kpi}/${kpi}.json`, JSON.stringify(post));

})()

