module.exports = (async function () {

  const parsers = require("@parsers");

  const kpi = "metrosperforados"
  
  const payload = await parsers.datosGobarAPI(kpi, 'datos', '366.3_METROS_PERRAL__31')

  const post = {
    kpi,
    t: "Metros Perforados",
    st: "Petroleo",
    sd: "",
    c: "",
    fd: "datos.gob.ar",
    fdr: "https://datos.gob.ar/ar/dataset/sspm-pozos-petroleo-metros-perforados/archivo/sspm_366.3",
    fu: "MECON",
    fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
    frec: "Mensual", 
    d: "",
     chartdata: {
      labels: payload.dates,
      datasets: [
        {
          backgroundColor: "rgba(146,220,210,0)",
          label: "Pozos de Petroleo terminados",
          data: payload.d,
          borderColor: "#2E78D2CC",
           //type: 'bar',
          pointRadius: 0,
          borderWidth: 1.5,
        },

      ]
    }
  }

  parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));


})()

