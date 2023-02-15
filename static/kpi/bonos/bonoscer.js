module.exports = (async function() {

  const parsers = require("@parsers");
  
  const kpi = "bonoscer"
  const bonoscer = {
    tx23: '12185',
    tx24: '12304',
    tx26: '13029',
    tx28: '13031',
    t2x2: '12416'
  }

  
  
    const payload = await parsers.parseBonos(kpi, bonoscer)

  var post = {
    kpi,
    t: "Bonos CER",
    st: "Bonos del Tesoro",
    sd: "El capital de los bonos CER capital se ajusta por el Índice de Precios al Consumidor y los intereses son calculados sobre saldos ajustados.",
    c: "<p>El capital de los bonos CER se ajusta por el Índice de Precios al Consumidor y los intereses son calculados sobre saldos ajustados.</p>",
    fd: "API",
    fdr: "https://www.intervaloresgroup.com/Financial/GetTablaCotizacionesHistoricas",
    fu: "Intervalores",
    fur: "https://www.intervaloresgroup.com/Financial/GetTablaCotizacionesHistoricas",
    frec: "Diaria", 
    d: "El capital de los bonos CER capital se ajusta por el Índice de Precios al Consumidor y los intereses son calculados sobre saldos ajustados.",

    chart: {
    dates:payload,
    dimensions: [
      {
        fillColor: "rgba(46,120,210,0.0)",
        label: "TX24",
        data: payload.tx24,
        color: "rgba(46,120,210,1)",
        
        
      },
      {
        fillColor: "rgba(46,120,210,0.0)",
        label: "TX23",
        data: payload.tx23,
        color: "rgba(46,120,210,0.25)",
        
        
      },
      {
        fillColor: "rgba(46,120,210,0.0)",
        label: "T2X2",
        data: payload.t2x2,
        color: "rgba(46,120,210,0.25)",
        
        
      },
      {
        fillColor: "rgba(46,120,210,0.0)",
        label: "TX26",
        data: payload.tx26,
        color: "rgba(46,120,210,0.25)",
        
        
      },
      {
        fillColor: "rgba(46,120,210,0.0)",
        label: "TX28",
        data: payload.tx28,
        color: "rgba(46,120,210,0.25)",
        
        
      },
    ],
  }
}
  
   parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));


})()
