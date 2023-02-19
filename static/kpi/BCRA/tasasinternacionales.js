module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "tasasinternacionales"
 
 
 

    const reambito = {
      fed: '131.1_FET_0_0_12&start_date=1999-01-01',
      euro: '131.1_MZT_0_0_18&start_date=1999-01-01',
      brasil: '131.1_SBT_0_0_17&start_date=1999-01-01',
      inglaterra: '131.1_RIT_0_0_20&start_date=1999-01-01',
      japon: '131.1_OIRJT_0_0_34&start_date=1999-01-01',
    }
   
    var payload = {}
    var fillLength = []
    var chosenOne = ''
    for (let [key, value] of Object.entries(reambito)) {
      payload[key] = []
      var data = await parsers.datosGobarAPI(value)
      fillLength.push(data.length)
    }
  
    for (let [key, value] of Object.entries(reambito)) {
      var data = (await parsers.datosGobarAPI(value)).reverse()
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
  t: "Tasas Internacionales",
  st: "Tasa de Política Monetaria",
  sd: "La tasa de referencia de la política monetaria es la de Letras de Liquidez (LELIQ). La tasa de política monetaria indica el sesgo de la política que adopta la autoridad monetaria para alcanzar sus metas de inflación.",
  c: "",
  fd: "datos.gob.ar",
  fdr: "https://datos.gob.ar/tr/dataset/sspm-principales-tasas-interes-referencia/archivo/sspm_131.1",
  fu: "MECON",
  fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
  frec: "Mensual", 
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  max: 30,

  chart: {
    dates:payload.fed,
    dimensions: [
      {
        fillColor: "rgba(46,120,210,0.0)",
        label: "Tasa FED",
        data: payload.fed,
        color: "rgba(46,120,210,1)",
        
        
      },
      {
        fillColor: "rgba(46,120,210,0.0)",
        label: "Tasa Euro",
        data: payload.euro,
        color: "rgba(46,120,210,0.25)",
        
        
      },
       {
        fillColor: "rgba(46,120,210,0.0)",
        label: "Tasa Inglaterra",
        data: payload.inglaterra,
        color: "rgba(46,120,210,0.25)",
        
        
      },
      {
        fillColor: "rgba(46,120,210,0.0)",
        label: "Tasa Brasil",
        data: payload.brasil,
        color: "rgba(46,120,210,0.25)",
      },  
/*       {
        fillColor: "rgba(46,120,210,0.0)",
        label: "Tasa Japon",
        data: payload.japon,
        color: "rgba(46,120,210,0.25)",
      },      */   
]
}
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));


})()