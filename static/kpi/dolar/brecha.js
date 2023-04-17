module.exports = (async function() {
  const fetch = require('@adobe/node-fetch-retry');
  const parsers = require("@parsers");
  
  const kpi = "brecha"
 
  const reambito = {
    oficial: 'https://mercados.ambito.com//dolar/oficial/historico-general/01-01-1900/01-01-2100',
    blue: 'https://mercados.ambito.com//dolar/informal/historico-general/01-01-1900/01-01-2100',
  }   

  var payload = {}
  var fillLength = []
  var chosenOne = ''
  for (let [key, value] of Object.entries(reambito)) {
    payload[key] = []
    var data = JSON.parse(await (await fetch(value)).text())
    for (let i = 1; i < data.length; i++) { fillLength.push(data.length) }
  } 

  for (let [key, value] of Object.entries(reambito)) {
    var data = JSON.parse(await (await fetch(value)).text())

    for (let i = 1; i < Math.max(...fillLength); i++) { payload[key][i] = { x: 0, y: 0} }
    for (let i = 1; i < data.length; i++) {

      payload[key][i].x =  new Date(data[i][0].split('/').reverse().join('-')).toISOString().substring(0, 10)
      if (key === 'oficial') {
        payload[key][i].y = Number(data[i][2].replace(',','.'))
      } else {
        payload[key][i].y = Number(data[i][1].replace(',','.'))
      }
    }
    payload[key] = payload[key].filter(element => { if (Object.keys(element).length !== 0) { return true; } return false; }).reverse();
    if (payload[key][0].x !== 0) { chosenOne = key }
  }

  for (let [key, value] of Object.entries(reambito)) {
    for (let i = 0; i < payload[chosenOne].length; i++) { payload[key][i].x = payload[chosenOne][i].x }
  }
  
  payload['gap'] = payload.blue.map(({ x, y }, i) => {
    const oficialValue = payload.oficial[i].y;
    if (oficialValue === 0) {
      return { x, y: 0 };
    } else {
      return { x, y: ((y - oficialValue) / oficialValue) * 100 };
    }
  }); 
 
    
  const post = {
    kpi,
    t: "Brecha USD/Peso",
    st: "Gap",
    sd: "La brecha entre cotizaciones en Argentina se refiere a la diferencia entre el tipo de cambio oficial y el tipo de cambio paralelo (también conocido como 'dólar blue' o 'dólar informal'). La brecha entre cotizaciones tiene implicaciones significativas para la economía argentina.",
    c: "<p>La brecha entre cotizaciones en Argentina se refiere a la diferencia entre el tipo de cambio oficial y el tipo de cambio paralelo (también conocido como 'dólar blue' o 'dólar informal'). El tipo de cambio oficial es el valor que el gobierno argentino fija para la compra y venta de divisas en el mercado cambiario, mientras que el tipo de cambio paralelo es el valor que se establece en transacciones no reguladas por el gobierno, como el mercado negro.</p><p>La brecha entre cotizaciones puede tener implicaciones significativas para la economía argentina, incluyendo el aumento de los precios de los bienes importados y la caída de las reservas internacionales del país. El gobierno argentino ha implementado diversas medidas para tratar de reducir la brecha, como la eliminación de ciertos impuestos a las exportaciones y la implementación de restricciones al acceso al mercado paralelo. Sin embargo, la brecha sigue siendo un desafío importante para la economía argentina.</p>",
    fd: "API",
    fdr: "http://www.bcra.gov.ar/Pdfs/PublicacionesEstadisticas/series.xlsm",
    fu: "BCRA",
    fur: "http://www.bcra.gov.ar/Pdfs/PublicacionesEstadisticas/series.xlsm",
    frec: parsers.detectDataType(payload.gap), 
    fruc: parsers.detectAggregationFunction(payload.gap),
    u: new Date().toLocaleDateString('en-CA').split('/').join('-'),
    d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
    dimensions: [
        {
          label: "Brecha USD / Peso",
          data: payload.gap,
          color: "#b22222CC",
        },
      ],
  }

  parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()