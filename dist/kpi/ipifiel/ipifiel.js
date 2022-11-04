module.exports = (async function () {

  const parsers = require("../../parsers");
  const kpi = "ipifiel"

  kpidata = { 
    "url": "http://www.fiel.org/publicaciones/CuadrosIC/CUAD_INDI_1664381234429.xls", 
    "sheet": "0", 
    "date": "0", 
    "items": [{ "name": "estacional", "id": "1" }] }

  await parsers.genericXLS(kpidata, kpi)

  var post = {
    kpi,
    t: "IPI FIEL",
    st: "",
    c: "",
    f: "",
    fu: "",
    d: "",
    cat: "Actividad Económica",
    chartdata: {
      labels: require("./estacional/dates.json"),
      datasets: [
        {
          backgroundColor: "rgba(46,120,210,0)",
          label: "IPI FIEL",
          data: require("./estacional/d.json"),
          borderColor: "rgba(46,120,210,1)",
          pointRadius: 0,
          borderWidth: 1.5,
          },
      ],
    }
  }

  parsers.writeFileSyncRecursive('./static/kpi/ipifiel/ipifiel.json', JSON.stringify(post));

})()