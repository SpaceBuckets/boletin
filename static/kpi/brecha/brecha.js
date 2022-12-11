module.exports = (async function() {

  const parsers = require("../../parsers");
const generatedTime = require(`../../generatedTime.json`)
  const kpi = "brecha"
  try {

  var post = {
    kpi,
    t: "Brecha USD/Peso",
    st: "Gap",
    sd: "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
    c: "",
    fd: "Scraped",
    fdr: "http://www.bcra.gov.ar/Pdfs/PublicacionesEstadisticas/series.xlsm",
    fu: "BCRA",
    fur: "http://www.bcra.gov.ar/Pdfs/PublicacionesEstadisticas/series.xlsm",
    frec: "Diaria", 
    min: 0,
    cat: "Política Monetaria",
    d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
    chartdata: {
      labels: require(`../../data/${generatedTime}/${kpi}/blue/dates.json`),
      datasets: [
        {
          backgroundColor: "rgba(178,34,34,0.05)",
          label: "Brecha USD / Peso",
          data: require(`../../data/${generatedTime}/${kpi}/blue/gap.json`),
          borderColor: "#b22222CC",
          pointRadius: 0,
          borderWidth: 1.5,
        },
      ],
    } 
  }

  
  parsers.writeFileSyncRecursive(`./static/data/${generatedTime}/${kpi}/${kpi}.json`, JSON.stringify(post));

} catch (error) {
  console.log('\x1b[41m', '\x1b[37m',`✕ [${kpi}] failed to fetch!` ,'\x1b[0m');
}
})()