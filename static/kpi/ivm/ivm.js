module.exports = (async function() {

  const parsers = require("../../parsers");
const generatedTime = require(`../../generatedTime.json`)
  const kpi = "ivm"
  const kpidata = {
    url: 'https://estudioseconomicos.ec.gba.gov.ar/datos/nac/contnac-ventas-minoristas.xlsx',
    sheet: 0,
    date: 0,
    items: [{
      name: "valor", id: 1
    }]      
  }
  try {
  await parsers.genericXLS(kpidata, kpi)

  var post = {
    kpi,
  t: "IVM",
  st: "Índice de Ventas Minoristas",
  sd: "El Índice de Ventas Minoristas (IVM) es un indicador de coyuntura que mide mensualmente la evolución de la facturación de los comercios minoristas PyMEs que desarrollan sus actividades dentro del país. Los establecimientos fueron seleccionados como representativos dadas nuestras estimaciones.",
  c: "<p>El Índice de Ventas Minoristas (IVM) es un indicador de coyuntura que mide mensualmente la evolución de la facturación de los comercios minoristas PyMEs que desarrollan sus actividades dentro del país. Los establecimientos fueron seleccionados como representativos dadas nuestras estimaciones.</p>",
  fd: "Scraped (XLS)",
  fdr: "https://estudioseconomicos.ec.gba.gov.ar/datos/nac/contnac-ventas-minoristas.xlsx",
  fu: "CAME",
  fur: "https://www.redcame.org.ar/estadisticas-pyme/78/ndice-de-ventas-minoristas",
  frec: "Mensual", 
  d: "El Índice de Ventas Minoristas (IVM) es un indicador de coyuntura que mide mensualmente la evolución de la facturación de los comercios minoristas PyMEs que desarrollan sus actividades dentro del país. Los establecimientos fueron seleccionados como representativos dadas nuestras estimaciones.",
  max: 200,
  min: 0,
  cat: "Consumo",
  chartdata: {
    labels: require(`../../data/${generatedTime}/${kpi}/valor/dates.json`),
    datasets: [
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "IVM",
        data: require(`../../data/${generatedTime}/${kpi}/valor/d.json`),
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
