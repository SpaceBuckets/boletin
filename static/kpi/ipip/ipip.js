module.exports = (async function() {

  const parsers = require("../../parsers");
const generatedTime = require(`../../generatedTime.json`)
  const kpi = "ipip"
  const kpidata = {
    url: 'https://estudioseconomicos.ec.gba.gov.ar/datos/nac/contnac-indice-de-produccion-industrial-pyme.xlsx',
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
  t: "IPIP",
  st: "Índice de Producción Industrial Pyme",
  sd: "El IPIP es un indicador de coyuntura que mide mensualmente la evolución de la facturación de la industria manufacturera PyME que desarrollan su actividad dentro del país y producen bienes seleccionados como representativos de la industria PyME.",
  c: "<p>El IPIP es un indicador de coyuntura que mide mensualmente la evolución de la facturación de la industria manufacturera PyME que desarrollan su actividad dentro del país y producen bienes seleccionados como representativos de la industria PyME.</p>",
  fdr: "https://www.indec.gob.ar/ftp/cuadros/economia/metodologia_emae_ago_16.pdf",
  fd: "Scraped (XLS)",
  fdr: "https://estudioseconomicos.ec.gba.gov.ar/datos/nac/contnac-indice-de-produccion-industrial-pyme.xlsx",
  fu: "CAME",
  fur: "https://www.redcame.org.ar/estadisticas-pyme/79/ndice-de-produccion-industrial-pyme--ipip",
  frec: "Mensual", 
  d: "El IPIP es un indicador de coyuntura que mide mensualmente la evolución de la facturación de la industria manufacturera PyME que desarrollan su actividad dentro del país y producen bienes seleccionados como representativos de la industria PyME.",
  min: 0,
  max: 140,
  cat: "Actividad Económica",
  catslug: "actividad-economica",
  chartdata: {
    labels: require(`../../data/${generatedTime}/${kpi}/valor/dates.json`),
    datasets: [
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "Desestacionalizado",
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
