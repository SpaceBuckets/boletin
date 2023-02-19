module.exports = (async function() {
  const fetch = require('@adobe/node-fetch-retry');
  const parsers = require("@parsers");
  
  const kpi = "cambio"
 
  const reambito = {
    oficial: 'https://mercados.ambito.com//dolar/oficial/historico-general/01-01-1900/01-01-2100',
    mep: 'https://mercados.ambito.com//dolarrava/mep/historico-general/01-01-1900/01-01-2100',
    ccl: 'https://mercados.ambito.com//dolarrava/cl/historico-general/01-01-1900/01-01-2100',
    blue: 'https://mercados.ambito.com//dolar/informal/historico-general/01-01-1900/01-01-2100',
    turista: 'https://mercados.ambito.com//dolarturista/historico-general/01-01-1900/01-01-2100',
    qatar: 'https://mercados.ambito.com//dolarqatar/historico-general/01-01-1900/01-01-2100',
    lujo: 'https://mercados.ambito.com//dolardelujo/historico-general/01-01-1900/01-01-2100',
    //coldplay: 'https://mercados.ambito.com//dolarcoldplay/historico-general/01-01-1900/01-01-2100',
    ahorro: 'https://mercados.ambito.com//dolarahorro/historico-general/01-01-1900/01-01-2100',
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
      payload[key][i].x = new Date(data[i][0].split('-').reverse().join('-')).toISOString().substring(0, 10)
      payload[key][i].y = Number(data[i][1].replace(',','.'))
    }
    payload[key] = payload[key].filter(element => { if (Object.keys(element).length !== 0) { return true; } return false; }).reverse();
    if (payload[key][0].x !== 0) { chosenOne = key }
  }

  for (let [key, value] of Object.entries(reambito)) {
    for (let i = 0; i < payload[chosenOne].length; i++) { payload[key][i].x = payload[chosenOne][i].x }
  }

  var post = {
    kpi,
    t: "Tipos de Cambio",
    st: "Brecha Peso/USD",
    sd: "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
    c: "<p>El tipo de cambio es el precio de una unidad de moneda extranjera expresado en términos de la moneda local. A su vez, encontramos dos Tipos de Cambio Nominal: tipo comprador y tipo vendedor, dado que las entidades financieras obtienen una ganancia por intermediar en el juego de la oferta y la demanda de moneda extranjera. La diferencia entre ambas tasas, es lo que se conoce como 'spread'.</p>",
    fd: "Scraped Web",
    fdr: "https://www.ambito.com/contenidos/dolar.html",
    fu: "BCRA",
    fur: "https://www.bcra.gob.ar/publicacionesestadisticas/tipos_de_cambios.asp",
    frec: "Diaria", 
    d: "El tipo de cambio es el precio de una unidad de moneda extranjera expresado en términos de la moneda local.",
    //max: 400,
    chart: {
      dates: payload.oficial,
      dimensions: [
        {
          label: "Oficial",
          data: payload.oficial,
          color: "#009966",
        },
         {
          label: "Blue",
          data: payload.blue,
          color: "rgba(46,120,210,1)",
          borderWidth: 1.25,
        },
        {
          label: "CCL",
          data: payload.ccl,
          color: "#b22222CC",
          borderWidth: 1.25,
        },
        {
          label: "MEP",
          data: payload.mep,
          color: "#b2222240",
          borderWidth: 1.25,
        },
        {
          label: "Turista",
          data: payload.turista,
          color: "#00996640",
          borderWidth: 1.25,
        },
        {
          label: "Qatar",
          data: payload.qatar,
          color: "#00996640",
          borderWidth: 1.25,
        },    
        {
          label: "Ahorro",
          data: payload.ahorro,
          color: "#00996640",
          borderWidth: 1.25,
        },    
        {
          label: "Lujo",
          data: payload.lujo,
          color: "#00996640",
          borderWidth: 1.25,
        }, 
      ],
    }
  }

  parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));

})()
