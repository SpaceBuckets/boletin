module.exports = (async function() {

  const parsers = require("../../../parsers");

  const kpi = "tightshale"
  const kpidata = {
    url: 'http://datos.energia.gob.ar/dataset/c846e79c-026c-4040-897f-1ad3543b407c/resource/a3244ddd-38bc-4800-a700-360b649d2f3a/download/serie-histrica-de-produccin-de-gas-natural-por-cuenca-y-sub-tipo-de-recurso-captulo-iv-.csv',
     date: 0,
    items: {
      shale: 8,
      tight: 9,
 
    }
  }
  try {
  const payload = await parsers.datosGobarCSV(kpidata,kpi)


   var post = {
    kpi,
  t: "Producción Tight & Shale",
  st: "En millones de m3",
  sd: "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  c: "<p>El petróleo es una mezcla de compuestos orgánicos, principalmente hidrocarburos insolubles en agua. También es conocido como oro negro, petróleo crudo o simplemente crudo. Se produce en el interior de la Tierra, por transformación de la materia orgánica acumulada en sedimentos del pasado geológico​ y puede acumularse en trampas geológicas naturales, que se localizan a nivel mundial​ y de donde se extrae mediante la perforación de pozos.</p>",
  fd: "datos.gob.ar",
  fdr: "https://datos.gob.ar/it/dataset/sspm-produccion-ventas-petroleo-derivados/archivo/sspm_363.3",
  fu: "MECON",
  fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
  frec: "Mensual", 
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  cat: "Hidrocarburos",
  catslug: "hidrocarburos",
  chartdata: {
    labels: payload.dates,
    datasets: [
      {
        backgroundColor: "rgba(46,120,210,0.0)",
        label: "Shale",
        data: payload.shale,
        borderColor: "#2E78D2",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        backgroundColor: "rgba(46,120,210,0.0)",
        label: "Tight",
        data: payload.tight,
        borderColor: "#2E78D250",
        pointRadius: 0,
        borderWidth: 1.5,
      },
    ]
}
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));

} catch (error) {
  console.log('\x1b[41m', '\x1b[37m',`✕ [${kpi}] failed to fetch!` ,'\x1b[0m');
}
})()

