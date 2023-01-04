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
  c: "<p>El producto bruto interno (PBI)​ es una magnitud macroeconómica que expresa el valor monetario de la producción de bienes y servicios de demanda final de un país o región durante un período determinado, normalmente de un año o trimestrales.</p>",
  fd: "Datos BM",
  fdr: "https://api.worldbank.org/v2/country/arg/indicator/NY.GDP.PCAP.KD?format=json&per_page=5000",
  fu: "Banco Mundial",
  fur: "https://datos.bancomundial.org/indicator/NY.GDP.PCAP.KD?locations=AR",
  frec: "Mensual", 
  d: "El producto bruto interno (PBI)​ es una magnitud macroeconómica que expresa el valor monetario de la producción de bienes y servicios de demanda final de un país o región durante un período determinado.",
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


