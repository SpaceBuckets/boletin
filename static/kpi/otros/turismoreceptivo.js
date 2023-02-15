module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "turismoreceptivo"
  
  const payload = await parsers.datosGobarAPI('322.2_TURISMO_REIVO__17') 
    
  var post = {
    kpi,
    t: "Turismo Receptivo",
    st: "",
    c: "",
    fd: "datos.gob.ar",
    fdr: "https://datos.gob.ar/dataset/sspm_322/archivo/sspm_322.2",
    fu: "MECON",
    fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
    frec: "Mensual", 
    d: "",

    chart: {
    dates:payload,
    dimensions: [
        {
        fillColor: "rgba(46,120,210,0.05)",
        label: "Turismo Receptivo",
        data: payload,
        color: "rgba(46,120,210,1)",
        
        
        },
    ],
    }
  }

  parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));
   

})()