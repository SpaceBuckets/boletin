//const colours = cambio.map((value) => value < 0 ? '#b22222CC' : '#009966');
module.exports = (async function() {

  const parsers = require("@parsers");
  const fetch = require('@adobe/node-fetch-retry');
  const xlsx = require('node-xlsx');
  const kpi = "comprasbcra"
  const payload = await parsers.scrapeBCRA("247")



/*   var obj = xlsx.parse(await (await fetch('http://www.bcra.gov.ar/Pdfs/PublicacionesEstadisticas/series.xlsm')).arrayBuffer());
 
    var payload = []

   for (let i = 0; i < obj[2].data.length; i++) {
    payload[i] = {}
    var date = new Date(Date.UTC(0, 0, obj[2].data[i][0]));
    if (date != 'Invalid Date') {
      payload[i].x = date.toLocaleDateString("en-CA")
      payload[i].y = obj[2].data[i][7]
    }
  }
  payload = payload.filter(element => { if (Object.keys(element).length !== 0) { return true; } return false; }).reverse();
 */

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
  chart: {
  dates:payload,
  dimensions: [
    {
      fillColor: "",
      label: "Compras Divisas USD",
      data: payload,
      barThickness: 1,
      
    },
  ],
}
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));


})()