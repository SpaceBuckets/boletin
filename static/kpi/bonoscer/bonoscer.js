module.exports = (async function() {

  const parsers = require("../../parsers");
  const generatedTime = require(`../../generatedTime.json`)
  const kpi = "bonoscer"
  const bonoscer = {
    tx23: '12185',
    tx24: '12304',
    tx26: '13029',
    tx28: '13031',
    t2x2: '12416'
  }

  
  try {
    await parsers.parseBonos(kpi, bonoscer)

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
    cat: "Sector Financiero",
    catslug: "sector-financiero",
    chartdata: {
    labels: require(`../../data/${generatedTime}/${kpi}/tx23/dates.json`),
    datasets: [
      {
        backgroundColor: "rgba(46,120,210,0.0)",
        label: "TX24",
        data: require(`../../data/${generatedTime}/${kpi}/tx24/d.json`),
        borderColor: "rgba(46,120,210,1)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        backgroundColor: "rgba(46,120,210,0.0)",
        label: "TX23",
        data: require(`../../data/${generatedTime}/${kpi}/tx23/d.json`),
        borderColor: "rgba(46,120,210,0.25)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        backgroundColor: "rgba(46,120,210,0.0)",
        label: "T2X2",
        data: require(`../../data/${generatedTime}/${kpi}/t2x2/d.json`),
        borderColor: "rgba(46,120,210,0.25)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        backgroundColor: "rgba(46,120,210,0.0)",
        label: "TX26",
        data: require(`../../data/${generatedTime}/${kpi}/tx26/d.json`),
        borderColor: "rgba(46,120,210,0.25)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        backgroundColor: "rgba(46,120,210,0.0)",
        label: "TX28",
        data: require(`../../data/${generatedTime}/${kpi}/tx28/d.json`),
        borderColor: "rgba(46,120,210,0.25)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
    ],
  }
}
  
   parsers.writeFileSyncRecursive(`./static/data/${generatedTime}/${kpi}/${kpi}.json`, JSON.stringify(post));

} catch (error) {
  console.log('\x1b[41m', '\x1b[37m',`✕ [${kpi}] failed to fetch!` ,'\x1b[0m');
}
})()
