module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "ferrocargas"
  
  const payload = await parsers.datosGobarAPI(kpi,'datos','302.3_TRANSP_CAR_KM_0_S_36') 
    
  var post = {
    kpi,
    t: "Cargas Ferrocarril",
    st: "",
    c: "",
    fd: "datos.gob.ar",
    fdr: "https://datos.gob.ar/dataset/sspm-estadisticas-servicios-publicos/archivo/sspm_302.3",
    fu: "MECON",
    fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
    frec: "Mensual", 
    d: "",

    chartdata: {
    labels: payload.dates,
    datasets: [
        {
        backgroundColor: "rgba(46,120,210,0.05)",
        label: "Cargas Ferrocarril",
        data: payload.d,
        borderColor: "rgba(46,120,210,1)",
        pointRadius: 0,
        borderWidth: 1.5,
        },
    ],
    }
  }

  parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));
   

})()