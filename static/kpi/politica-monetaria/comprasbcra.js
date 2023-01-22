//const colours = cambio.map((value) => value < 0 ? '#b22222CC' : '#009966');
module.exports = (async function() {

  const parsers = require("../../parsers");

  const kpi = "comprasbcra"
  try {

  var post = {
    kpi,
  t: "Compras BCRA",
  st: "En millones de USD",
  sd: "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  c: "",
  fd: "Scraped (XLS)",
  fdr: "http://www.bcra.gov.ar/Pdfs/PublicacionesEstadisticas/series.xlsm",
  fu: "BCRA",
  fur: "http://www.bcra.gov.ar/Pdfs/PublicacionesEstadisticas/series.xlsm",
  frec: "Diaria", 
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  max: 300,
  min: -300,
  cat: "hide",  
  catslug: "hide",
  chartdata: {
  labels: require(`../../data/${kpi}/diariadates.json`),
  datasets: [
    {
      backgroundColor: "",
      label: "Compras Divisas USD",
      data: require(`../../data/${kpi}/diaria.json`),
      barThickness: 1,
      pointRadius: 0,
    },
  ],
}
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));

} catch (error) {
  console.log('\x1b[41m', '\x1b[37m',`✕ [${kpi}] failed to fetch!` ,'\x1b[0m');
}
})()