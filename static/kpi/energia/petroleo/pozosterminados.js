module.exports = (async function () {

  const parsers = require("@parsers");

  const kpi = "pozosterminados"
  
  const payload = await parsers.datosGobarAPI('366.3_POZOS_TERMRAL__30')

  const post = {
    kpi,
    t: "Pozos Terminados",
    st: "Petroleo",
    sd: "",
    c: "",
    fd: "datos.gob.ar",
    fdr: "https://datos.gob.ar/ar/dataset/sspm-pozos-petroleo-metros-perforados/archivo/sspm_366.3",
    fu: "MECON",
    fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
    frec: "Mensual", 
    d: "",
    cat: "Hidrocarburos",
    catslug: "hidrocarburos",
    max: 200,
    chart: {
      dates:payload,
      dimensions: [
        {
          
          label: "Pozos de Petroleo terminados",
          data: payload,
          color: "#2E78D2CC",
           //type: 'bar',
          
          
        },

      ]
    }
  }

  parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));


})()

