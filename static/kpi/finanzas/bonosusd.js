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

      for (let i = 0; i < Math.max(...fillLength); i++) { payload[key][i] = { x: 0, y: null} }
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


  const post = {
    kpi,
    t: "Bonos USD",
    st: "Bonos Ley Argentina y NY",
    sd: "",
    c: "<p>Los bonos extranjeros emitidos por Argentina son instrumentos de deuda denominados en moneda extranjera (usualmente dólares estadounidenses) que son ofrecidos por el Gobierno argentino en los mercados internacionales. Los nombres de los bonos están compuestos por el código del país emisor (AR para Argentina), seguido de un código que indica la moneda en la que está denominado (en este caso, USD para dólares estadounidenses), y un número que indica la fecha de vencimiento del bono.</p><p>Por ejemplo, el bono AL30D es un bono soberano emitido por el Gobierno argentino en dólares estadounidenses con vencimiento en 2030, mientras que el bono AL41D es un bono con vencimiento en 2041.</p><p>Estos bonos se negocian en los mercados internacionales y sus precios varían en función de la oferta y la demanda de los inversores, así como de factores como la calificación crediticia del país emisor, las perspectivas económicas y políticas del país, las tasas de interés y otros factores macroeconómicos y financieros. Los bonos extranjeros de Argentina son una forma en que el país puede obtener financiamiento en el mercado internacional para cubrir sus necesidades de financiamiento y refinanciar su deuda existente.</p>",
    fd: "API",
    fdr: "https://www.intervaloresgroup.com/Financial/GetTablaCotizacionesHistoricas",
    fu: "Intervalores",
    fur: "https://www.intervaloresgroup.com/Financial/GetTablaCotizacionesHistoricas",
      frec: parsers.detectDataType(payload.al30d), 
  fruc: parsers.detectAggregationFunction(payload.al30d),
  u: new Date().toLocaleDateString('en-CA').split('/').join('-'),

    d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",

    min: 0,
   
    dimensions: [
        {
    label: "AL30D",
          data: payload.al30d,
          color: "rgba(46,120,210,1)",
          
          
        },
        {
    label: "AL29D",
          data: payload.al29d,
          color: "rgba(46,120,210,0.25)",
          
          
        },
        {
    label: "AL41D",
          data: payload.al41d,
          color: "rgba(46,120,210,0.25)",
          
          
        },
        {
    label: "GD30D",
          data: payload.gd30d,
          color: "rgba(46,120,210,0.25)",
          
          
        },
        {
    label: "GD35D",
          data: payload.gd35d,
          color: "rgba(46,120,210,0.25)",
          
          
        },
        {
    label: "GD41D",
          data: payload.gd41d,
          color: "rgba(46,120,210,0.25)",
        },
      ],
  }

  
  parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);

})()
