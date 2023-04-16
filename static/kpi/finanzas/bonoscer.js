module.exports = (async function() {

  const parsers = require("@parsers");
  
  const kpi = "bonoscer"
  const reambito = {
    tx23: '12185',
    tx24: '12304',
    tx26: '13029',
    tx28: '13031',
    t2x2: '12416'
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
    t: "Bonos CER",
    st: "Bonos del Tesoro",
    sd: "El capital de los bonos CER capital se ajusta por el Índice de Precios al Consumidor y los intereses son calculados sobre saldos ajustados.",
    c: "<p>Los bonos CER son títulos de deuda emitidos por el Gobierno argentino que se ajustan por el Coeficiente de Estabilización de Referencia (CER), un índice que mide la evolución de los precios al consumidor en el país.</p><p>El ajuste por CER se realiza diariamente, lo que significa que el valor nominal de los bonos se ajusta automáticamente para reflejar la inflación medida por el CER. De esta manera, el valor real de los bonos se mantiene relativamente constante a lo largo del tiempo, lo que los hace atractivos para los inversores que buscan protegerse contra la inflación.</p><p>Los bonos CER se emiten en diferentes plazos, desde corto hasta largo plazo, y ofrecen una tasa de interés fija sobre el valor nominal ajustado por inflación. Los bonos CER también pueden ser negociados en el mercado secundario, lo que permite a los inversores comprar y vender los títulos antes de su vencimiento.</p>",
    fd: "API",
    fdr: "https://www.intervaloresgroup.com/Financial/GetTablaCotizacionesHistoricas",
    fu: "Intervalores",
    fur: "https://www.intervaloresgroup.com/Financial/GetTablaCotizacionesHistoricas",
      frec: parsers.detectDataType(payload.tx24), 
  fruc: parsers.detectAggregationFunction(payload.tx24),
  u: new Date().toLocaleDateString('en-CA').split('/').join('-'),

    d: "El capital de los bonos CER capital se ajusta por el Índice de Precios al Consumidor y los intereses son calculados sobre saldos ajustados.",

    dimensions: [
      {
        label: "TX24",
        data: payload.tx24,
        color: "rgba(46,120,210,1)",
      },
      {
        label: "TX23",
        data: payload.tx23,
        color: "rgba(46,120,210,0.25)",
      },
      {
        label: "T2X2",
        data: payload.t2x2,
        color: "rgba(46,120,210,0.25)",
      },
      {
        label: "TX26",
        data: payload.tx26,
        color: "rgba(46,120,210,0.25)",
      },
      {
        label: "TX28",
        data: payload.tx28,
        color: "rgba(46,120,210,0.25)",
      },
    ],
}
  
   parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()
