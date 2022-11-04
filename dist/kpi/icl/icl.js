module.exports = (async function() {

  const parsers = require("../../parsers");
  const kpi = "icl"
 
  await parsers.scrapeBCRA("7988",kpi)

  var post = {
    kpi,
  t: "ICL",
  st: "Índice para Contratos de Locacion",
  sd: "El Índice de Contratos de Locación (ICL) es un indicador creado por la Ley 27.551 con el fin de poder establecer parámetros de actualización a la hora de celebrar contratos de alquiler.",
  c: "<p>El Índice de Contratos de Locación (ICL) es un indicador creado por la Ley 27.551 con el fin de poder establecer parámetros de actualización a la hora de celebrar contratos de alquiler.</p>",
  f: "https://www.indec.gob.ar/ftp/cuadros/economia/metodologia_emae_ago_16.pdf",
  d: "El Índice de Contratos de Locación (ICL) es un indicador creado por la Ley 27.551 con el fin de poder establecer parámetros de actualización a la hora de celebrar contratos de alquiler.",
  cat: "Política Monetaria",
  chartdata: {
    labels: require("./datos/dates.json"),
    datasets: [
      {
        backgroundColor: "rgba(46,120,210,0.05)",
        label: "ICL",
        data: require("./datos/d.json"),
        borderColor: "rgba(46,120,210,1)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
]
}
}

parsers.writeFileSyncRecursive(`./static/kpi/${kpi}/${kpi}.json`, JSON.stringify(post));

})()