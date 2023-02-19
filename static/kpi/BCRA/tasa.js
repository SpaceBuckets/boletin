module.exports = (async function() {

  const parsers = require("@parsers");
  const kpi = "tasa"
 
  const reambito = {
    referencia: '7935',
    badlar: '1222',
    plazo: '7938',
    pases: '7921',
    uva: '7934',
    prestamos: '7925'
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
    t: "Tasas de Interés",
    st: "Tasa de Política Monetaria",
    sd: "La tasa de referencia de la política monetaria es la de Letras de Liquidez (LELIQ). La tasa de política monetaria indica el sesgo de la política que adopta la autoridad monetaria para alcanzar sus metas de inflación.",
    c: "<p>La tasa de referencia de la política monetaria es la de Letras de Liquidez (LELIQ). La tasa de política monetaria indica el sesgo de la política que adopta la autoridad monetaria para alcanzar sus metas de inflación.</p><p>El BCRA calibrará las tasas de interés de manera de garantizar una mayor disponibilidad de instrumentos de ahorro que permitan a los argentinos obtener rendimientos acordes con la evolución de la inflación y del tipo de cambio, contribuyendo así a estabilizar las expectativas cambiarias, favoreciendo al proceso de desinflación. Dicho reacomodamiento de la estructura de tasas de interés se complementará con la continuidad de aquellas políticas de estímulo focalizado al crédito al sector privado.</p>",
    fd: "Scraped (XLS)",
    fdr: "http://www.bcra.gov.ar/Pdfs/PublicacionesEstadisticas/series.xlsm",
    fu: "BCRA",
    fur: "http://www.bcra.gov.ar/Pdfs/PublicacionesEstadisticas/series.xlsm",
    frec: "Diaria", 
    d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
    max: 100,
    chart: {
      dates: payload.referencia,
      dimensions: [
        {
          label: "Referencia",
          data: payload.referencia,
          color: "#2E78D2", 
        },
       {
          label: "Badlar",
          data: payload.badlar,
          color: "rgba(46,120,210,0.25)", 
          borderWidth: 1,
        },
        {
          label: "Plazo Fijo",
          data: payload.plazo,
          color: "rgba(46,120,210,0.25)", 
          borderWidth: 1,
        },
        {      
          label: "Pases Pasivos (1d)",
          data: payload.pases,
          color: "#7a49a580",
        },  
        {      
          label: "UVA",
          data: payload.uva,
          color: "rgba(46,120,210,0.25)", 
        },  
        {      
          label: "Prestamos",
          data: payload.prestamos,
          color: "rgba(46,120,210,0.25)", 
        },                 
      ]
    }
  }

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));


})()

