module.exports = (async function() {

  const parsers = require("../../parsers");
const generatedTime = require(`../../generatedTime.json`)
  const kpi = "petroleo"
 
  await parsers.datosGobarAPI(kpi, "produccion", '363.3_PRODUCCIONUDO__28')

  var post = {
    kpi,
  t: "Producción de Petroleo",
  st: "En millones de m3",
  sd: "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  c: "<p>El petróleo es una mezcla de compuestos orgánicos, principalmente hidrocarburos insolubles en agua. También es conocido como oro negro, petróleo crudo o simplemente crudo. Se produce en el interior de la Tierra, por transformación de la materia orgánica acumulada en sedimentos del pasado geológico​ y puede acumularse en trampas geológicas naturales, que se localizan a nivel mundial​ y de donde se extrae mediante la perforación de pozos. En condiciones normales de presión y temperatura es un líquido bituminoso que puede presentar gran variación en diversos parámetros como color y viscosidad (desde amarillentos y poco viscosos como la gasolina hasta líquidos negros tan viscosos que apenas fluyen), densidad (entre 0,66 g/ml y 0,9785 g/ml), capacidad calorífica, etc. Estas variaciones se deben a la diversidad de concentraciones de los hidrocarburos que componen la mezcla, esto hace que el petróleo de cada pozo o fuente sea distinto de otro. Es un recurso no renovable y actualmente también es la principal fuente de energía y materia prima para la generación de una gran variedad de derivados, entre los que se incluyen la mayoría de los plásticos. El petróleo líquido puede presentarse asociado a capas de gas natural, en yacimientos que han estado enterrados durante millones de años, cubiertos por los estratos superiores de la corteza terrestre. Debido a la importancia fundamental como materia prima, la venta del petróleo y sus derivados es un pilar fundamental del mercado mundial y la política exterior de varios países.</p>",
  f: "https://www.indec.gob.ar/ftp/cuadros/economia/metodologia_emae_ago_16.pdf",
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  cat: "Producción",
  chartdata: {
    labels: require(`../../data/${generatedTime}/${kpi}/produccion/dates.json`),
    datasets: [
      {
        backgroundColor: "rgba(46,120,210,0.05)",
        label: "Pozos de petroleo",
        data: require(`../../data/${generatedTime}/${kpi}/produccion/d.json`),
        borderColor: "#2E78D2",
        pointRadius: 0,
        borderWidth: 1.5,
      },
]
}
}

parsers.writeFileSyncRecursive(`./static/data/${generatedTime}/${kpi}/${kpi}.json`, JSON.stringify(post));

})()

