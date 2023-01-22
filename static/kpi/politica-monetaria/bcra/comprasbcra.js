//const colours = cambio.map((value) => value < 0 ? '#b22222CC' : '#009966');
module.exports = (async function() {

  const parsers = require("@parsers");
  const fetch = require('@adobe/node-fetch-retry');
  const xlsx = require('node-xlsx');
  const kpi = "comprasbcra"
  


    const resA = await fetch('http://www.bcra.gov.ar/Pdfs/PublicacionesEstadisticas/series.xlsm');
   var emaeB = await resA.arrayBuffer();
  var obj = xlsx.parse(emaeB);
  var dateUSD = []
  var valUSD = []
  var valRes = []
    var payload = {}
   for (let i = 0; i < obj[2].data.length; i++) {
    var date = new Date(Date.UTC(0, 0, obj[2].data[i][0]));
    if (date != 'Invalid Date') {
      dateUSD.push(date.toLocaleDateString("en-CA"))
      valUSD.push(obj[2].data[i][7])
      valRes.push(obj[2].data[i][3])
    }
  }

  var foundArr = []
  for (let e = 0; e < dateUSD.length; e++) {
    if (dateUSD[e] === '2003-01-01' || dateUSD[e] === '2003-01-02' && e !== 0) {
      foundArr.push(e)
    }
  }

  payload.dates = dateUSD.slice(0, foundArr[0]);
  payload.diaria =  valUSD.slice(0, foundArr[0]);
 

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
  labels: payload.dates,
  datasets: [
    {
      backgroundColor: "",
      label: "Compras Divisas USD",
      data: payload.diaria,
      barThickness: 1,
      pointRadius: 0,
    },
  ],
}
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));


})()