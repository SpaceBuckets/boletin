module.exports = (async function () {

  const parsers = require("@parsers");

  const kpi = "merval"
  const kpidata = {
    url: 'https://query1.finance.yahoo.com/v7/finance/download/M.BA?period1=0&period2=9674456596&interval=1d&events=history&includeAdjustedClose=true',
     date: 0,
    items: {
      d: 4,
 
    }
  }
  
  const payload = await parsers.datosGobarCSV(kpidata,kpi)

  const post = {
    kpi,
    t: "MERVAL",
    st: "Indice",
    sd: "",
    c: "",
    fd: "datos.gob.ar",
    fdr: "https://datos.gob.ar/dataset/sspm-indices-bursatiles-argentina/archivo/sspm_169.1",
    fu: "MECON",
    fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
    frec: "Mensual", 
    d: "",

    chart: {
      dates:payload,
      dimensions: [
        {
          fillColor: "transparent",
          label: "Indice Merval",
          data: payload,
          color: "#2E78D2CC",
          type: 'line',
          
          
        },

      ]
    }
  }

  parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));


})()

