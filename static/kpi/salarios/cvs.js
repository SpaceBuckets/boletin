module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "cvs"
  
  const payload = await parsers.datosGobarAPI(kpi,'datos','447.1_TOTALTAL_0_0_5_37') 
    
  var post = {
    kpi,
    t: "Coeficiente de Variacion Salarial",
    st: "",
    c: "",
    fd: "datos.gob.ar",
    fdr: "https://datos.gob.ar/sv/dataset/sspm-coeficiente-variacion-salarial-cvs/archivo/sspm_447.1",
    fu: "MECON",
    fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
    frec: "Diaria", 
    d: "",
    cat: "hide",
    catslug: "hide",
    chartdata: {
    labels: payload.dates,
    datasets: [
        {
        backgroundColor: "rgba(46,120,210,0.05)",
        label: "Coeficiente de Variacion Salarial",
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