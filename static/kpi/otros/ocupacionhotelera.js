module.exports = (async function () {

  const parsers = require("@parsers");

  const kpi = "ocupacionhotelera"

  
  
  		

  const total = await parsers.datosGobarAPI('457.1_VIAJEROS_TLES_0_M_16_50')
  const residentes = await parsers.datosGobarAPI('457.1_VIAJEROS_RTES_0_M_19_94')
  const noresidentes = await parsers.datosGobarAPI('457.1_VIAJEROS_NTES_0_M_22_86')

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

    chart: {
      dates:total,
      dimensions: [
        {
          
          label: "Viajeros Hospedados",
          data: total,
          color: "#2E78D2CC",
          
          
        },
        {
          
          label: "Residentes",
          data: residentes,
          color: "#2E78D250",
          
          
        },
        {
          
          label: "No Residentes",
          data: noresidentes,
          color: "#2E78D250",
          
          
        },        
      ]
    }
  }

  parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));


})()

