module.exports = (async function() {

  const parsers = require("../../parsers");

  const kpi = "depositosprivados"
  try {
  const payload = await parsers.datosGobarAPI(kpi,'datos','90.1_DET_DESAGRIV_0_0_38') 
    
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
    cat: "Política Monetaria",
    catslug: "politica-monetaria",
    chartdata: {
    labels: payload.dates,
    datasets: [
        {
        backgroundColor: "rgba(46,120,210,0.05)",
        label: "Depositos privados",
        data: payload.d,
        borderColor: "rgba(46,120,210,1)",
        pointRadius: 0,
        borderWidth: 1.5,
        },
    ],
    }
  }

  parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));
   
} catch (error) {
  console.log('\x1b[41m', '\x1b[37m',`✕ [${kpi}] failed to fetch!` ,'\x1b[0m');
}
})()