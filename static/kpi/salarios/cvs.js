module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "cvs"
  
  const payload = await parsers.datosGobarAPI('447.1_TOTALTAL_0_0_5_37') 
    
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

    chart: {
    dates:payload,
    dimensions: [
        {
        fillColor: "rgba(46,120,210,0.05)",
        label: "Coeficiente de Variacion Salarial",
        data: payload,
        color: "rgba(46,120,210,1)",
        
        
        },
    ],
    }
  }

  parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));
   

})()