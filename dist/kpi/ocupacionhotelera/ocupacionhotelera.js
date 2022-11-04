module.exports = (async function () {

  const parsers = require("../../parsers");
  const kpi = "ocupacionhotelera"

  
  
  		

  await parsers.datosGobarAPI(kpi, 'total', '457.1_VIAJEROS_TLES_0_M_16_50')
  await parsers.datosGobarAPI(kpi, 'residentes', '457.1_VIAJEROS_RTES_0_M_19_94')
  await parsers.datosGobarAPI(kpi, 'noresidentes', '457.1_VIAJEROS_NTES_0_M_22_86')

  const post = {
    kpi,
    t: "Ocupacion Hotelera",
    st: "Viajeros Hospedados",
    sd: "",
    c: "",
    f: "",
    d: "",
    cat: "Turismo",
    chartdata: {
      labels: require("./total/dates.json"),
      datasets: [
        {
          backgroundColor: "rgba(146,220,210,0)",
          label: "Viajeros Hospedados",
          data: require("./total/d.json"),
          borderColor: "#2E78D2CC",
          pointRadius: 0,
          borderWidth: 1.5,
        },
        {
          backgroundColor: "rgba(146,220,210,0)",
          label: "Residentes",
          data: require("./residentes/d.json"),
          borderColor: "#2E78D250",
          pointRadius: 0,
          borderWidth: 1.5,
        },
        {
          backgroundColor: "rgba(146,220,210,0)",
          label: "No Residentes",
          data: require("./noresidentes/d.json"),
          borderColor: "#2E78D250",
          pointRadius: 0,
          borderWidth: 1.5,
        },        
      ]
    }
  }

  parsers.writeFileSyncRecursive(`./static/kpi/${kpi}/${kpi}.json`, JSON.stringify(post));

})()

