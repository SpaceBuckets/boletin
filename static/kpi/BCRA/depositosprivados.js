module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "depositosprivados"
  
  const payload = await parsers.datosGobarAPI('90.1_DET_DESAGRIV_0_0_38') 
    
  var post = {
    kpi,
    t: "Depositos Privados",
    st: "",
    c: "",
    fd: "datos.gob.ar",
    fdr: "https://datos.gob.ar/dataset/sspm_90/archivo/sspm_90.1",
    fu: "MECON",
    fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
    frec: "Mensual", 
    d: "",

    chart: {
    dates:payload,
    dimensions: [
        {
        fillColor: "rgba(46,120,210,0.05)",
        label: "Depositos privados",
        data: payload,
        color: "rgba(46,120,210,1)",
        
        
        },
    ],
    }
  }

  parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));
   

})()