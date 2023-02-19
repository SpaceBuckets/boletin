module.exports = (async function() {
  const parsers = require("@parsers");
  const fetch = require('@adobe/node-fetch-retry');
  const xlsx = require('node-xlsx');

  const kpi = "basemonetaria"
  
  const reambito = {
    total: '250',
    leliq: '7926',
 
  }
 
  var payload = {}
  var fillLength = []
  var chosenOne = ''
  for (let [key, value] of Object.entries(reambito)) {
    payload[key] = []
    var data = await parsers.scrapeBCRA(value)
    fillLength.push(data.length)
  }

  for (let [key, value] of Object.entries(reambito)) {
    var data = (await parsers.scrapeBCRA(value)).reverse()
    for (let i = 0; i < Math.max(...fillLength); i++) { payload[key][i] = { x: 0, y: 0} }
    for (let i = 0; i < data.length; i++) {
      payload[key][i].x = data[i].x
      payload[key][i].y = data[i].y
    }

    payload[key] = payload[key].filter(element => { if (Object.keys(element).length !== 0) { return true; } return false; }).reverse();
    if (payload[key][0].x !== 0) { chosenOne = key }
  }
  

  for (let [key, value] of Object.entries(reambito)) {
    for (let i = 0; i < payload[chosenOne].length; i++) { payload[key][i].x = payload[chosenOne][i].x }
  }
 
  var post = {
    kpi,
    t: "Base Monetaria",
    st: "Total e Instrumentos BCRA",
    sd: "La Base Monetaria (BM) está constituida por todo el dinero legal en circulación (es decir, billetes y monedas), sumado a las reservas de los bancos comerciales en el banco central.",
    c: "<p>La Base Monetaria (BM) está constituida por todo el dinero legal en circulación (es decir, billetes y monedas), sumado a las reservas de los bancos comerciales en el banco central.</p>",
    fd: "Scraped (Web)",
    fdr: "http://www.bcra.gov.ar/Pdfs/PublicacionesEstadisticas/series.xlsm",
    fu: "BCRA",
    fur: "http://www.bcra.gov.ar/Pdfs/PublicacionesEstadisticas/series.xlsm",
    frec: "Diaria", 
    min: 0,
    d: "La Base Monetaria (BM) está constituida por todo el dinero legal en circulación (es decir, billetes y monedas), sumado a las reservas de los bancos comerciales en el banco central.",

    chart: {
      dates:payload.total,
      dimensions: [
        {
          fillColor: 'rgba(46,120,210,0)',
          label: "Base Monetaria",
          data: payload.total,
          color: "#2E78D2",
          
          
        },
        {
          fillColor: 'rgba(46,120,210,0)',
          label: "Base Monetaria + Instrumentos (LELIQ y Otros)",
          data: payload.leliq,
          color: "#2E78D280",
          
          
        },
      ],
    }
  }

   parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));

})()