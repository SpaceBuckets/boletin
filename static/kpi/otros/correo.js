module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "correo"
  

  const payload = await parsers.datosGobarAPI('302.3_CORREOS_COS_U_0_S_29') 
    
  var post = {
    kpi,
    t: "Correo Postal",
    st: "",
    c: "",
    fd: "datos.gob.ar",
    fdr: "https://datos.gob.ar/dataset/sspm-estadisticas-servicios-publicos/archivo/sspm_302.3",
    fu: "MECON",
    fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
    frec: "Mensual", 
    d: "",

    chart: {
    dates:payload,
    dimensions: [
        {
        fillColor: "rgba(46,120,210,0.05)",
        label: "Correo Postal",
        data: payload,
        color: "rgba(46,120,210,1)",
        
        
        },
    ],
    }
  }

  parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));
   

})()