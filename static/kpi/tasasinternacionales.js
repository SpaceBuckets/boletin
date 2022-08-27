module.exports = {
  "t": "Tasas Internacionales",
  "st": "Tasa de Política Monetaria",
  "sd": "La tasa de referencia de la política monetaria es la de Letras de Liquidez (LELIQ). La tasa de política monetaria indica el sesgo de la política que adopta la autoridad monetaria para alcanzar sus metas de inflación.",
  "kpi": "tasasinternacionales",
  "c": "<p>La tasa de referencia de la política monetaria es la de Letras de Liquidez (LELIQ). La tasa de política monetaria indica el sesgo de la política que adopta la autoridad monetaria para alcanzar sus metas de inflación.</p><p>El BCRA calibrará las tasas de interés de manera de garantizar una mayor disponibilidad de instrumentos de ahorro que permitan a los argentinos obtener rendimientos acordes con la evolución de la inflación y del tipo de cambio, contribuyendo así a estabilizar las expectativas cambiarias, favoreciendo al proceso de desinflación. Dicho reacomodamiento de la estructura de tasas de interés se complementará con la continuidad de aquellas políticas de estímulo focalizado al crédito al sector privado.</p>",
  "f": "https://www.indec.gob.ar/ftp/cuadros/economia/metodologia_emae_ago_16.pdf",
  "d": "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  "max": 30,
  chartdata: {
    labels: require("../data/tasas/fed/dates.json"),
    datasets: [
      {
        backgroundColor: "rgba(46,120,210,0.0)",
        label: "Tasa FED",
        data: require("../data/tasas/fed/d.json"),
        borderColor: "rgba(46,120,210,1)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        backgroundColor: "rgba(46,120,210,0.0)",
        label: "Tasa Euro",
        data: require("../data/tasas/euro/d.json"),
        borderColor: "rgba(46,120,210,0.25)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      /*     {
            backgroundColor: "rgba(46,120,210,0.0)",
            label: "Tasa Japon",
            data: require("../data/tasas/japon/d.json"),
            borderColor: "rgba(46,120,210,0.25)",
            pointRadius: 0,
            borderWidth: 1.5,
          }, */
      {
        backgroundColor: "rgba(46,120,210,0.0)",
        label: "Tasa Inglaterra",
        data: require("../data/tasas/inglaterra/d.json"),
        borderColor: "rgba(46,120,210,0.25)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        backgroundColor: "rgba(46,120,210,0.0)",
        label: "Tasa Brasil",
        data: require("../data/tasas/brasil/d.json"),
        borderColor: "rgba(46,120,210,0.25)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
    ],
  }
}