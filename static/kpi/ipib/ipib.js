
module.exports = (async function() {

  const parsers = require("../../parsers");
const generatedTime = require(`../../generatedTime.json`)
  const kpi = "ipib"
  try { 
  await parsers.datosGobarAPI(kpi, "ipib", '449.1_NIVEL_GENERAL_0_0_13_97&representation_mode=percent_change')

  var post = {
    kpi,
  t: "IPIB",
  st: "Índice de Precios Internos Básicos al por Mayor",
  sd: "Este indicador incluye un exhaustivo relevamiento de todas las <em>actividades económicas que conforman la industria manufacturera</em>, con cobertura para el total del país.",
  c: "<p>Tiene por objeto medir la evolución promedio de los precios a los que el productor y/o importador directo vende sus productos en el mercado doméstico. Se incluyen el Impuesto al Valor Agregado (IVA), los impuestos internos y a los combustibles, netos de los subsidios explícitos como por ejemplo a los bienes de capital. Por tratarse de bienes destinados al mercado interno, se excluyó el valor de las exportaciones en el cálculo del peso relativo de cada actividad.</p>",
  fd: "datos.gob.ar",
  fdr: "https://datos.gob.ar/ar/dataset/sspm-indice-precios-internos-basicos-al-por-mayor-dic-2015-100/archivo/sspm_449.1",
  fu: "INDEC",
  fur: "https://www.indec.gob.ar/indec/web/Nivel3-Tema-3-5",
  frec: "Mensual", 
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  cat: "Precios",
  catslug: "precios",
  min: 0,
  chartdata: {
    labels: require(`../../data/${generatedTime}/${kpi}/ipib/dates.json`),
    datasets: [
      { 
        backgroundColor: "#2E78D295",
        label: "IPIB",
        data: require(`../../data/${generatedTime}/${kpi}/ipib/d.json`),
        type: 'bar',
        borderColor: "#2E78D2",
        pointRadius: 0,
        borderWidth: 0,
      },
]
}
}

parsers.writeFileSyncRecursive(`./static/data/${generatedTime}/${kpi}/${kpi}.json`, JSON.stringify(post));

} catch (error) {
  console.log('\x1b[41m', '\x1b[37m',`✕ [${kpi}] failed to fetch!` ,'\x1b[0m');
}
})()

