module.exports = (async function() {
  const fetch = require('@adobe/node-fetch-retry');
  const parsers = require("../../parsers");
  
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

  var pepeLength

  for (let [key, value] of Object.entries(reambito)) {
  
      const resA = await fetch(value);
      var emaeB = JSON.parse(await resA.text())

      var datesArray = []
      var tempArray = []

      for (let i = 1; i < emaeB.length; i++) {
        datesArray.push(emaeB[i][0].split('-').reverse().join('-'))
        tempArray.push(Number(emaeB[i][1].replace(',','.')))  
      }

      if (key === 'oficial') { pepeLength = tempArray.length }
      tempArray.length = pepeLength  

      parsers.writeFileSyncRecursive(`./static/data/cambio/${key}/dates.json`, JSON.stringify(datesArray.reverse()));
      parsers.writeFileSyncRecursive(`./static/data/cambio/${key}/d.json`, JSON.stringify(tempArray.reverse()));
      
      console.log('\x1b[42m',`♥ [ambito] ${key} updated` ,'\x1b[0m');
  } 
  
  try {

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
    max: 400,
    cat: "Política Monetaria",  
    catslug: "politica-monetaria",
    chartdata: {
    labels: require(`../../data/${kpi}/oficial/dates.json`),
    datasets: [
        {
          backgroundColor: "rgba(0,153,102,0.0)",
          label: "Oficial",
          data: require(`../../data/${kpi}/oficial/d.json`),
          borderColor: "#009966",
          pointRadius: 0,
          borderWidth: 1.5,
          //fill: "-1", //fill until previous dataset

        },
        {
          backgroundColor: "rgba(178,34,34,0)",
          label: "Blue",
          data: require(`../../data/${kpi}/blue/d.json`),
          //borderColor: "#2E78D2",
          borderColor: "rgba(46,120,210,1)",
          pointRadius: 0,
          borderWidth: 1.25,

        },
        {
          backgroundColor: "rgba(178,34,34,0)",
          label: "CCL",
          data: require(`../../data/${kpi}/ccl/d.json`),
          borderColor: "#b22222CC",
          

          pointRadius: 0,
          borderWidth: 1.25,
        },
        {
          backgroundColor: "rgba(178,34,34,0)",
          label: "MEP",
          data: require(`../../data/${kpi}/mep/d.json`),
          borderColor: "#b2222240",
    
          pointRadius: 0,
          borderWidth: 1.25,
        },
        {
          backgroundColor: "rgba(178,34,34,0)",
          label: "Turista",
          data: require(`../../data/${kpi}/turista/d.json`),
          borderColor: "#00996640",
          pointRadius: 0,
          borderWidth: 1.25,
        },
        {
          backgroundColor: "rgba(178,34,34,0)",
          label: "Qatar",
          data: require(`../../data/${kpi}/qatar/d.json`),
          borderColor: "#00996640",
          pointRadius: 0,
          borderWidth: 1.25,
        },    
        {
          backgroundColor: "rgba(178,34,34,0)",
          label: "Ahorro",
          data: require(`../../data/${kpi}/ahorro/d.json`),
          borderColor: "#00996640",
          pointRadius: 0,
          borderWidth: 1.25,
        },    
        {
          backgroundColor: "rgba(178,34,34,0)",
          label: "Lujo",
          data: require(`../../data/${kpi}/lujo/d.json`),
          borderColor: "#00996640",
          pointRadius: 0,
          borderWidth: 1.25,
        },    
      ],
    }
  }

  parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));

  } catch (error) {
    console.log('\x1b[41m', '\x1b[37m',`✕ [${kpi}] failed to fetch!` ,'\x1b[0m');
  }
})()
