module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "liquisoja"
  
  const payload = await parsers.datosGobarAPI(kpi,'datos','349.2_ACUM_MENSUAL__13') 
    
  var post = {
    kpi,
    t: "Liquidacion Agro",
    st: "",
    c: "",
    fd: "datos.gob.ar",
    fdr: "https://datos.gob.ar/ja/dataset/sspm_349/archivo/sspm_349.2",
    fu: "MECON",
    fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
    frec: "Mensual", 
    d: "",
    chartdata: {
    labels: payload.dates,
    datasets: [
        {
        backgroundColor: "rgba(46,120,210,0.05)",
        label: "Liquidacion Agro",
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