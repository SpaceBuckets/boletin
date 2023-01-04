module.exports = (async function() {

  const parsers = require("../../parsers");
const generatedTime = require(`../../generatedTime.json`)
  const kpi = "tcrm"
  const kpidata = {
    url: 'https://www.bcra.gob.ar/Pdfs/PublicacionesEstadisticas/ITCRMSerie.xlsx',
    sheet: 0,
    date: 0,
    items: [
      {name:"itcrm", id:1},
      {name:"itcrb", id:2},
      {name:"itcrus",id:5},
      {name:"itcreur",id:13}
    ]
  }
try {
  await parsers.genericXLS(kpidata, kpi)

  var post = {
    kpi,
  t: "TCRM",
  st: "Tipo de Cambio Real Multilateral",
  sd: "Este índice mide el precio relativo de los bienes y servicios de la economía argentina con respecto al de los de los principales 12 socios comerciales del país, en función del flujo de comercio de manufacturas.",
  c: "<p>Este índice mide el precio relativo de los bienes y servicios de la economía argentina con respecto al de los de los principales 12 socios comerciales del país, en función del flujo de comercio de manufacturas. Se obtiene a partir de un promedio ponderado de los tipos de cambio reales bilaterales de los principales socios comerciales del país. </p>",
  fd: "Scraped (XLS)",
  fdr: "https://www.bcra.gob.ar/Pdfs/PublicacionesEstadisticas/ITCRMSerie.xls",
  fu: "BCRA",
  fur: "https://www.bcra.gob.ar/Pdfs/PublicacionesEstadisticas/ITCRMSerie.xls",
  frec: "Diaria", 
  d: "Este índice mide el precio relativo de los bienes y servicios de la economía argentina con respecto al de los de los principales 12 socios comerciales del país, en función del flujo de comercio de manufacturas.",
  max: 300,
  min: 0,
  cat: "Política Monetaria",
  chartdata: {
    labels: require(`../../data/${generatedTime}/${kpi}/itcrm/dates.json`),
    datasets: [
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "TCRM",
        data: require(`../../data/${generatedTime}/${kpi}/itcrm/d.json`),
        borderColor: "#2E78D2",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        backgroundColor: "rgba(122, 73, 165,0)",
        label: "TCRUS",
        data: require(`../../data/${generatedTime}/${kpi}/itcrus/d.json`),
        borderColor: "rgba(122, 73, 165,0.25)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "TRCB",
        data: require(`../../data/${generatedTime}/${kpi}/itcrb/d.json`),
        borderColor: "rgba(46,120,210,0.25)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "Zona Euro",
        data: require(`../../data/${generatedTime}/${kpi}/itcreur/d.json`),
        borderColor: "rgba(46,120,210,0.25)",
        pointRadius: 0,
        borderWidth: 1.5,
      },      
]
}
}

parsers.writeFileSyncRecursive(`./static/data/${generatedTime}/${kpi}/${kpi}.json`, JSON.stringify(post));

} catch (error) {
  console.log('\x1b[41m', '\x1b[37m',`✕ [${kpi}] failed to fetch!` ,'\x1b[0m');
}
})()

