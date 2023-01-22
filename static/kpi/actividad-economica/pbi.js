module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "pbi"
   
  const payload = await parsers.parseWorldBank(kpi, "pbi", 'https://api.worldbank.org/v2/country/arg/indicator/NY.GDP.PCAP.KD?format=json&per_page=5000')

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
  catslug: "actividad-economica",
  chartdata: {
    labels: payload.dates,
    datasets: [
      {
        backgroundColor: 'rgba(46,120,210,0)',
        label: "PBI per capita",
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


