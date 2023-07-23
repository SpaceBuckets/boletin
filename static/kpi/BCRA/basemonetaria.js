module.exports = (async function() {
  const parsers = require("@parsers");
 
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
 
  const post = {
    kpi,
    t: "Base Monetaria",
    st: "Total e Instrumentos BCRA",
    sd: "La Base Monetaria (BM) está constituida por todo el dinero legal en circulación (es decir, billetes y monedas), sumado a las reservas de los bancos comerciales en el banco central.",
    c: "<p>La base monetaria es un indicador que refleja la cantidad de dinero emitido por el Banco Central de la República Argentina (BCRA) en circulación en la economía. En otras palabras, representa la cantidad de dinero que se encuentra en poder del público y los bancos comerciales en forma de billetes y monedas, más los depósitos de estos últimos en el BCRA.La base monetaria está compuesta por los siguientes elementos:</p><p>Billetes y monedas en circulación: se refiere a la cantidad de dinero físico que se encuentra en poder del público en general.<p>Reservas bancarias: son los depósitos que los bancos comerciales mantienen en el BCRA como parte de los requisitos de encaje que deben cumplir.</p><p>Depósitos del Tesoro Nacional: son los depósitos que el gobierno realiza en el BCRA.</p><p>El BCRA tiene la capacidad de controlar la base monetaria a través de su política monetaria, que incluye la regulación de la cantidad de dinero que se encuentra en circulación. Por ejemplo, el BCRA puede aumentar la base monetaria comprando bonos del Tesoro o vendiendo dólares, o puede disminuir la base monetaria vendiendo bonos del Tesoro o comprando dólares.</p><p>La base monetaria es un indicador importante para evaluar la política monetaria del BCRA y su impacto en la economía. Un aumento en la base monetaria puede estimular el crecimiento económico y la inflación, mientras que una disminución puede tener el efecto contrario. Por lo tanto, el BCRA utiliza la base monetaria como una herramienta para alcanzar sus objetivos de estabilidad de precios y crecimiento económico sostenible.</p>",
    fd: "Scraped (Web)",
    fdr: "http://www.bcra.gov.ar/Pdfs/PublicacionesEstadisticas/series.xlsm",
    fu: "BCRA",
    fur: "http://www.bcra.gov.ar/Pdfs/PublicacionesEstadisticas/series.xlsm",
      frec: parsers.detectDataType(payload.total), 
  fruc: parsers.detectAggregationFunction(payload.total),
  u: new Date().toLocaleDateString('en-CA').split('/').join('-'),
  feat: true,

    min: 0,
    d: "La Base Monetaria (BM) está constituida por todo el dinero legal en circulación (es decir, billetes y monedas), sumado a las reservas de los bancos comerciales en el banco central.",
    dimensions: [
        {
    label: "Base Monetaria",
          data: payload.total,
          
        },
        {
    label: "Base Monetaria + Instrumentos (LELIQ y Otros)",
          data: payload.leliq,
          color: "#2E78D280",
        },
      ],
  }

   parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);

})()