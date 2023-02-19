module.exports = (async function() {

  const parsers = require("@parsers");
  
  const kpi = "bonosusd"
  const reambito = {
    al29d: '13076',
    al30d: '13078',
    al41d: '13083',
    gd30d: '13092',
    gd35d: '13089',
    gd41d: '13093'
  }

    var payload = {}
    var fillLength = []
    var chosenOne = ''
    for (let [key, value] of Object.entries(reambito)) {
      payload[key] = []
      var data = await parsers.parseBonos(value)
      fillLength.push(data.length)
    }
  
    for (let [key, value] of Object.entries(reambito)) {
      var data = (await parsers.parseBonos(value)).reverse()

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
    t: "Bonos USD",
    st: "Bonos Ley Argentina y NY",
    sd: "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
    c: "<p></p>",
    fd: "API",
    fdr: "https://www.intervaloresgroup.com/Financial/GetTablaCotizacionesHistoricas",
    fu: "Intervalores",
    fur: "https://www.intervaloresgroup.com/Financial/GetTablaCotizacionesHistoricas",
    frec: "Diaria", 
    d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",

    min: 0,
   
    chart: {
      dates:payload.al30d,
      dimensions: [
        {
          fillColor: "rgba(46,120,210,0.0)",
          label: "AL30D",
          data: payload.al30d,
          color: "rgba(46,120,210,1)",
          
          
        },
        {
          fillColor: "rgba(46,120,210,0.0)",
          label: "AL29D",
          data: payload.al29d,
          color: "rgba(46,120,210,0.25)",
          
          
        },
        {
          fillColor: "rgba(46,120,210,0.0)",
          label: "AL41D",
          data: payload.al41d,
          color: "rgba(46,120,210,0.25)",
          
          
        },
        {
          fillColor: "rgba(46,120,210,0.0)",
          label: "GD30D",
          data: payload.gd30d,
          color: "rgba(46,120,210,0.25)",
          
          
        },
        {
          fillColor: "rgba(46,120,210,0.0)",
          label: "GD35D",
          data: payload.gd35d,
          color: "rgba(46,120,210,0.25)",
          
          
        },
        {
          fillColor: "rgba(46,120,210,0.0)",
          label: "GD41D",
          data: payload.gd41d,
          color: "rgba(46,120,210,0.25)",
        },
      ],
    }
  }

  
  parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));

})()
