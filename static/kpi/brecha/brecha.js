module.exports = (async function() {
  const fetch = require('@adobe/node-fetch-retry');
  const parsers = require("../../parsers");
  const generatedTime = require(`../../generatedTime.json`)
  const kpi = "brecha"

  const resA = await fetch('https://api.bluelytics.com.ar/v2/evolution.json');
  var emaeB = await resA.json();
  var dateUSD = []
  var valUSD = []
  var valBlue = []
  var valGap = []

  for (let i = 0; i < emaeB.length; i++) {
    dateUSD.push(emaeB[i].date)
    if (emaeB[i].source === 'Oficial') { valUSD.push(emaeB[i].value_buy) }
    if (emaeB[i].source === 'Blue') { valBlue.push(emaeB[i].value_buy) }
  }

  for (let i = 0; i < valUSD.length; i++) {
    var tempBrecha = (valBlue[i] - valUSD[i]) / valUSD[i] * 100.0;
    valGap.push(tempBrecha)
  }

  dateUSD = [...new Set(dateUSD)]
 
  parsers.writeFileSyncRecursive(`./static/data/${generatedTime}/brecha/blue/dates.json`, JSON.stringify(dateUSD.reverse()));
  parsers.writeFileSyncRecursive(`./static/data/${generatedTime}/brecha/blue/gap.json`, JSON.stringify(valGap.reverse()));
  console.log('\x1b[42m',`♥ [monetaria] brecha updated` ,'\x1b[0m');

  try {

  var post = {
    kpi,
    t: "Brecha USD/Peso",
    st: "Gap",
    sd: "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
    c: "",
    fd: "API",
    fdr: "http://www.bcra.gov.ar/Pdfs/PublicacionesEstadisticas/series.xlsm",
    fu: "BCRA",
    fur: "http://www.bcra.gov.ar/Pdfs/PublicacionesEstadisticas/series.xlsm",
    frec: "Diaria", 
    min: 0,
    cat: "hide",
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