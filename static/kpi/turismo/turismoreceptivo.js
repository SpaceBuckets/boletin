module.exports = (async function() {

  const parsers = require("../../parsers");

  const kpi = "turismoreceptivo"
  try {
  const payload = await parsers.datosGobarAPI(kpi,'datos','322.2_TURISMO_REIVO__17') 
    
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
    cat: "Otros",
    catslug: "otros",
    chartdata: {
    labels: payload.dates,
    datasets: [
        {
        backgroundColor: "rgba(46,120,210,0.05)",
        label: "Turismo Receptivo",
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