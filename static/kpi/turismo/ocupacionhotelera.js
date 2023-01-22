module.exports = (async function () {

  const parsers = require("../../parsers");

  const kpi = "ocupacionhotelera"

  
  
  		try {

  const total = await parsers.datosGobarAPI(kpi, 'total', '457.1_VIAJEROS_TLES_0_M_16_50')
  const residentes = await parsers.datosGobarAPI(kpi, 'residentes', '457.1_VIAJEROS_RTES_0_M_19_94')
  const noresidentes = await parsers.datosGobarAPI(kpi, 'noresidentes', '457.1_VIAJEROS_NTES_0_M_22_86')

  const post = {
    kpi,
    t: "Ocupacion Hotelera",
    st: "Viajeros Hospedados",
    sd: "",
    c: "",
    fd: "datos.gob.ar",
    fdr: "https://datos.gob.ar/dataset/sspm_457/archivo/sspm_457.1",
    fu: "MECON",
    fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
    frec: "Mensual", 
    d: "",
    cat: "Otros",
    catslug: "otros",
    chartdata: {
      labels: total.dates,
      datasets: [
        {
          backgroundColor: "rgba(146,220,210,0)",
          label: "Viajeros Hospedados",
          data: total.d,
          borderColor: "#2E78D2CC",
          pointRadius: 0,
          borderWidth: 1.5,
        },
        {
          backgroundColor: "rgba(146,220,210,0)",
          label: "Residentes",
          data: residentes.d,
          borderColor: "#2E78D250",
          pointRadius: 0,
          borderWidth: 1.5,
        },
        {
          backgroundColor: "rgba(146,220,210,0)",
          label: "No Residentes",
          data: noresidentes.d,
          borderColor: "#2E78D250",
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

