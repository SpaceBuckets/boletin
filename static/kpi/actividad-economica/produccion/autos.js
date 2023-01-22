 
module.exports = (async function() {
  
  const parsers = require("@parsers");

  const kpi = "autos"
  

    const payload = await parsers.datosGobarAPI(kpi,'produccion','330.1_PRODUCCIONLES__22') 

  var post = {
    kpi,
    t: "Producción de Autos",
    st: "En Toneladas",
    sd: "Datos históricos de la industria automotriz en unidades.",
    c: "<p>Datos históricos de la industria automotriz en unidades.</p>",
    fd: "datos.gob.ar",
    fdr: "https://datos.gob.ar/dataset/sspm-datos-historicos-industria-automotriz/archivo/sspm_330.1",
    fu: "MECON",
    fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
    frec: "Mensual", 
    d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
    cat: "Producción",
    catslug: "produccion",
    chartdata: {
    labels: payload.dates,
    datasets: [
      {
        backgroundColor: "rgba(46,120,210,0.05)",
        label: "Producción de Autos",
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