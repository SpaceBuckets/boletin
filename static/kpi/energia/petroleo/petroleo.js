module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "petroleo"
   
  const payload = await parsers.datosGobarAPI(kpi, "produccion", '363.3_PRODUCCIONUDO__28')

  var post = {
    kpi,
  t: "Producción de Petroleo",
  st: "En millones de m3",
  sd: "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  c: "<p>El petróleo es una mezcla de compuestos orgánicos, principalmente hidrocarburos insolubles en agua. También es conocido como oro negro, petróleo crudo o simplemente crudo. Se produce en el interior de la Tierra, por transformación de la materia orgánica acumulada en sedimentos del pasado geológico​ y puede acumularse en trampas geológicas naturales, que se localizan a nivel mundial​ y de donde se extrae mediante la perforación de pozos.</p>",
  fd: "datos.gob.ar",
  fdr: "https://datos.gob.ar/it/dataset/sspm-produccion-ventas-petroleo-derivados/archivo/sspm_363.3",
  fu: "MECON",
  fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
  frec: "Mensual", 
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",

  chartdata: {
    labels: payload.dates,
    datasets: [
      {
        backgroundColor: "rgba(46,120,210,0.05)",
        label: "Pozos de petroleo",
        data: payload.d,
        borderColor: "#2E78D2",
        pointRadius: 0,
        borderWidth: 1.5,
      },
]
}
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));


})()

