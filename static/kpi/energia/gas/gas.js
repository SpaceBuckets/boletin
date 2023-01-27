module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "gas"
   
  const payload = await parsers.datosGobarAPI(kpi, "produccion", '364.3_PRODUCCIoNRAL__25')

  var post = {
    kpi,
  t: "Producción de Gas",
  st: "En millones de metros cúbicos",
  sd: "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  c: "<p>El gas natural es un hidrocarburo mezcla de gases ligeros de origen natural. Principalmente contiene metano, normalmente incluye cantidades variables de otros alcanos y a veces un pequeño porcentaje de dióxido de carbono, nitrógeno, ácido sulfhídrico y helio. Se forma cuando varias capas de plantas en descomposición y materia animal se exponen a calor intenso y presión bajo la superficie de la Tierra durante millones de años. </p>",
  fd: "datos.gob.ar",
  fdr: "https://datos.gob.ar/dataset/sspm_364/archivo/sspm_364.3",
  fu: "MECON",
  fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
  frec: "Mensual", 
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  max: 6000,
  chartdata: {
    labels: payload.dates,
    datasets: [
      {
        backgroundColor: "rgba(46,120,210,0.05)",
        label: "Produccion de Gas",
        data: payload.d,
        borderColor: "rgba(46,120,210,1)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
]
}
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));


})()

