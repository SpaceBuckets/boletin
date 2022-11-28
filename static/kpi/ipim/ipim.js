
module.exports = (async function() {

  const parsers = require("../../parsers");
const generatedTime = require(`../../generatedTime.json`)
  const kpi = "ipim"
 
  await parsers.datosGobarAPI(kpi, "ipim", '448.1_NIVEL_GENERAL_0_0_13_46&representation_mode=percent_change')

  var post = {
    kpi,
  t: "IPIM",
  st: "Índice de Precios Internos al por Mayor",
  sd: "Este indicador incluye un exhaustivo relevamiento de todas las <em>actividades económicas que conforman la industria manufacturera</em>, con cobertura para el total del país.",
  c: "<p>Tiene por objeto medir la evolución promedio de los precios a los que el productor y/o importador directo vende sus productos en el mercado doméstico. Se incluyen el Impuesto al Valor Agregado (IVA), los impuestos internos y a los combustibles, netos de los subsidios explícitos como por ejemplo a los bienes de capital. Por tratarse de bienes destinados al mercado interno, se excluyó el valor de las exportaciones en el cálculo del peso relativo de cada actividad. Este índice por su cobertura y su tratamiento impositivo es similar al anterior Índice de Precios al por Mayor, pero difiere por los criterios utilizados en el tratamiento de las exportaciones. Índice de Precios Internos Básicos al por Mayor (lPIB) Índice de Precios Básicos del Productor (lPP)</p>",
  f: "https://www.indec.gob.ar/ftp/cuadros/economia/metodologia_emae_ago_16.pdf",
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  cat: "Precios",
  min: 0,
  chartdata: {
    labels: require(`../../data/${generatedTime}/${kpi}/ipim/dates.json`),
    datasets: [
      {
        backgroundColor: "#2E78D295",
        label: "IPIM",
        data: require(`../../data/${generatedTime}/${kpi}/ipim/d.json`),
        type: 'bar',
        borderColor: "#2E78D2",
        pointRadius: 0,
        borderWidth: 0,
      },
]
}
}

parsers.writeFileSyncRecursive(`./static/data/${generatedTime}/${kpi}/${kpi}.json`, JSON.stringify(post));

})()
