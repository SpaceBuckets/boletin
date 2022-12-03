module.exports = (async function() {

  const parsers = require("../../parsers");
const generatedTime = require(`../../generatedTime.json`)
  const kpi = "pbi"
  try { 
  await parsers.parseWorldBank(kpi, "pbi", 'https://api.worldbank.org/v2/country/arg/indicator/NY.GDP.PCAP.KD?format=json&per_page=5000')

  var post = {
    kpi,
  t: "PBI",
  st: "Producto Bruto Interno (per Capita)",
  sd: "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  c: "<p>El producto bruto interno (PBI)​ es una magnitud macroeconómica que expresa el valor monetario de la producción de bienes y servicios de demanda final de un país o región durante un período determinado, normalmente de un año o trimestrales.</p><p>La Organización para la Cooperación y el Desarrollo Económicos (OCDE) define el PIB como: «una medida agregada de producción igual a la suma de los valores brutos agregados de todas las unidades residentes e institucionales dedicadas a la producción y los servicios (más impuestos y menos subsidios, sobre productos no incluidos en el valor de sus productos)».4​ Una publicación del FMI establece que «el PIB mide el valor monetario de los bienes y servicios finales, que son comprados por el usuario final, producidos en un país en un período de tiempo determinado (por ejemplo, un trimestre o un año)».</p>",
  f: "https://www.indec.gob.ar/ftp/cuadros/economia/metodologia_emae_ago_16.pdf",
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  cat: "Actividad Económica",
  chartdata: {
    labels: require(`../../data/${generatedTime}/${kpi}/pbi/dates.json`),
    datasets: [
      {
        backgroundColor: 'rgba(46,120,210,0)',
        label: "PBI per capita",
        data: require(`../../data/${generatedTime}/${kpi}/pbi/d.json`),
        borderColor: "#2E78D2",
        pointRadius: 0,
        borderWidth: 1.5,
      },
]
}
}

parsers.writeFileSyncRecursive(`./static/data/${generatedTime}/${kpi}/${kpi}.json`, JSON.stringify(post));

} catch (error) {
  console.log('\x1b[41m', '\x1b[37m',`✕ [${kpi}] failed to fetch!` ,'\x1b[0m');
}
})()


