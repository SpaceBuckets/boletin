module.exports = (async function() {
  const parsers = require("@parsers");
  const fetch = require('@adobe/node-fetch-retry');
  const xlsx = require('node-xlsx');

  const kpi = "basemonetaria"
  

    const resA = await fetch('http://www.bcra.gov.ar/Pdfs/PublicacionesEstadisticas/series.xlsm');
    var emaeB = await resA.arrayBuffer();
    var obj = xlsx.parse(emaeB);
    var dateBasemonetaria = []
    var redateBasemonetaria = []
    var valTotal = []
    var valPases = []
    var valLeliq = []
    var valNobac = []
    var payload = {}
  
    for (let i = 0; i < obj[6].data.length; i++) {
      var date = new Date(Date.UTC(0, 0, obj[6].data[i][0]));
      if (date != 'Invalid Date') {
       dateBasemonetaria.push(date.toLocaleDateString("en-CA"))
       if (obj[6].data[i][4] === undefined) { obj[6].data[i][4] = 0 }
       if (obj[6].data[i][5] === undefined) { obj[6].data[i][5] = 0 }
        valPases.push(obj[6].data[i][1])
        valLeliq.push(obj[6].data[i][4])
        valNobac.push(obj[6].data[i][5])
   
      }
    }
 
    var valLeliqFiltered = valLeliq.map(e => Number(e.toString().replace('s/o', '0')))
    var valPasesFiltered = valPases.map(e => Number(e.toString().replace('s/o', '0')))
    var valNobacFiltered = valNobac.map(e => Number(e.toString().replace('s/o', '0')))
 
    var BaseMonetariaPlus = valLeliqFiltered.map(function (num, idx) { return (num + valPasesFiltered[idx] +  valNobacFiltered[idx]).toFixed(2); });
 
    for (let i = 0; i < obj[1].data.length; i++) {
     var date = new Date(Date.UTC(0, 0, obj[1].data[i][0]));
     if (date != 'Invalid Date') {
       redateBasemonetaria.push(date.toLocaleDateString("en-CA"))
  
       valTotal.push(obj[1].data[i][28])
  
  
     }
   }
   var refoundArr = []
   for (let e = 0; e < redateBasemonetaria.length; e++) {
     if (redateBasemonetaria[e] === '2003-01-01' || redateBasemonetaria[e] === '2003-01-02' && e !== 0) {
       refoundArr.push(e)
     }
   }
 
    payload.plus = BaseMonetariaPlus.slice(0,refoundArr[0]);
    payload.total = valTotal.slice(0,refoundArr[0]);
    payload.dates = redateBasemonetaria.slice(0,refoundArr[0]);
  

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
      dates:payload,
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
          data: payload.plus,
          color: "#2E78D280",
          
          
        },
      ],
    }
  }

   parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));

})()