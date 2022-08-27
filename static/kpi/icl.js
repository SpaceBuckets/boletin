module.exports = {
  "t": "ICL",
  "st": "Índice para Contratos de Locacion",
  "sd": "El Índice de Contratos de Locación (ICL) es un indicador creado por la Ley 27.551 con el fin de poder establecer parámetros de actualización a la hora de celebrar contratos de alquiler.",
  "kpi": "icl",
  "c": "<p>El Índice de Contratos de Locación (ICL) es un indicador creado por la Ley 27.551 con el fin de poder establecer parámetros de actualización a la hora de celebrar contratos de alquiler.</p>",
  "f": "https://www.indec.gob.ar/ftp/cuadros/economia/metodologia_emae_ago_16.pdf",
  "d": "El Índice de Contratos de Locación (ICL) es un indicador creado por la Ley 27.551 con el fin de poder establecer parámetros de actualización a la hora de celebrar contratos de alquiler.",
  "cat": "Política Monetaria",
  chartdata: {
    labels: require("../data/bcra/icl/dates.json"),
    datasets: [
      {
        backgroundColor: "rgba(46,120,210,0.05)",
        label: "ICL",
        data: require("../data/bcra/icl/d.json"),
        borderColor: "rgba(46,120,210,1)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
    ],
  }
}