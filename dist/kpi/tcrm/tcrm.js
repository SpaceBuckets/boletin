module.exports = (async function() {

  const parsers = require("../../parsers");
  const kpi = "tcrm"
  const kpidata = {
    url: 'http://www.bcra.gob.ar/Pdfs/PublicacionesEstadisticas/ITCRMSerie.xls',
    sheet: 0,
    date: 0,
    items: [
      {name:"itcrm", id:1},
      {name:"itcrb", id:2},
      {name:"itcrus",id:5}
    ]
  }

  await parsers.genericXLS(kpidata, kpi)

  var post = {
    kpi,
  t: "TCRM",
  st: "Tipo de Cambio Real Multilateral",
  sd: "Este índice mide el precio relativo de los bienes y servicios de la economía argentina con respecto al de los de los principales 12 socios comerciales del país, en función del flujo de comercio de manufacturas.",
  c: "<p>Este índice mide el precio relativo de los bienes y servicios de la economía argentina con respecto al de los de los principales 12 socios comerciales del país, en función del flujo de comercio de manufacturas.</p>\n<p>Se obtiene a partir de un promedio ponderado de los tipos de cambio reales bilaterales de los principales socios comerciales del país. Se considera la evolución de los precios de las canastas de consumo representativas de los socios comerciales expresados en moneda local en relación con el valor de la canasta de consumo local, constituyéndose como una de las medidas amplias de competitividad (de tipo precio).</p>\n<p>El ITCRM se elabora y publica de forma diaria, a partir de las cotizaciones de las monedas a las 15 hs. de cada día y contempla un mecanismo de diarización de las estimaciones y de replicación de los últimos datos de los índices de precios representativos para información aún no conocida.</p>",
  f: "https://www.indec.gob.ar/ftp/cuadros/economia/metodologia_emae_ago_16.pdf",
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  max: 300,
  min: 0,
  cat: "Política Monetaria",
  chartdata: {
    labels: require("./dates.json"),
    datasets: [
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "TCRM",
        data: require("./itcrm.json"),
        borderColor: "#2E78D2",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        backgroundColor: "rgba(122, 73, 165,0)",
        label: "TCRUS",
        data: require("./itcrus.json"),
        borderColor: "rgba(122, 73, 165,0.25)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "TRCB",
        data: require("./itcrb.json"),
        borderColor: "rgba(46,120,210,0.25)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
]
}
}

parsers.writeFileSyncRecursive(`./static/kpi/${kpi}/${kpi}.json`, JSON.stringify(post));

})()

