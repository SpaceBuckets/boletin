module.exports = {
  "t": "Riesgo País",
  "st": "Emerging Market Bond Index",
  "sd": "Sirve de referencia para estimar la evolución del mercado de deuda emergente y permite estudiar el comportamiento de una canasta de bonos que conforman la deuda de los países emergentes.",
  "kpi": "embi",
  "c": "<p>Índice calculado por JP Morgan Chase que mide la diferencia entre la tasa de interés que un país debe de pagar por emitir deuda en el exterior con respecto al rédito que pagan los bonos norteamericanos, considerados los bonos gubernamentales libres de riesgo  de modo que refleja el riesgo país también refleja la probabilidad de que una nación incumpla con el pago de la deuda o de los intereses. En otras palabras, el indicador se utiliza como un termómetro que mide el estado de salud de una economía.</p>",
  "f": "https://www.indec.gob.ar/ftp/cuadros/economia/metodologia_emae_ago_16.pdf",
  "d": "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  "max": 50,
  "cat": "Política Monetaria",
  chartdata: {
    labels: require("../data/embi/dates.json"),
    datasets: [
      {
        backgroundColor: 'rgba(46,120,210,0)',
        label: "EMBI Brasil",
        data: require("../data/embi/brasil.json"),
        borderColor: "rgba(46,120,210,0.3)",

        pointRadius: 0,
        borderWidth: 1,
      },
      {
        backgroundColor: 'rgba(46,120,210,0)',
        label: "EMBI Chile",
        data: require("../data/embi/chile.json"),
        borderColor: "rgba(46,120,210,0.3)",

        pointRadius: 0,
        borderWidth: 1,
      },
      {
        backgroundColor: 'rgba(46,120,210,0)',
        label: "EMBI Colombia",
        data: require("../data/embi/colombia.json"),
        borderColor: "rgba(46,120,210,0.3)",

        pointRadius: 0,
        borderWidth: 1,
      },
      {
        backgroundColor: 'rgba(46,120,210,0)',
        label: "EMBI Mexico",
        data: require("../data/embi/mexico.json"),
        borderColor: "rgba(46,120,210,0.3)",

        pointRadius: 0,
        borderWidth: 1,
      },
      {
        backgroundColor: 'rgba(46,120,210,0)',
        label: "EMBI Latino",
        data: require("../data/embi/latino.json"),
        borderColor: "#7a49a580",

        pointRadius: 0,
        borderWidth: 1,
      },
      {
        backgroundColor: 'rgba(146,220,210,0)',
        label: "EMBI Argentina",
        data: require("../data/embi/argentina.json"),
        borderColor: "#2E78D2",
        pointRadius: 0,
        borderWidth: 1.5,

      }

    ],
  }
}

