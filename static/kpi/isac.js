module.exports = {
  "t": "ISAC",
  "st": "Indicador Sintético de la Actividad de la Construcción",
  "sd": "El indicador ISAC <em>muestra la evolución del sector de la construcción</em> tomando como referencia los consumos aparentes de insumos requeridos en la actividad. ",
  "kpi": "isac",
  "c": "<p>El indicador sintético de la actividad de la construcción (ISAC) muestra la evolución del sector tomando como referencia los consumos aparentes de insumos requeridos en la construcción. El consumo aparente se calcula como la suma de los despachos al mercado interno de producción nacional mas las importaciones para cada uno de los insumos que componen el indice general del ISAC.</p><p>La publicación incluye la serie original (números índice, variación porcentual respecto al mismo mes del año an- terior y variación porcentual acumulada), la serie desestacionalizada y la serie tendencia-ciclo (números índice y variación respecto al mes inmediato anterior) del ISAC. </p><p>Para el calculo del ISAC se consideran, en términos de volumen físico, los insumos: Asfalto, Cales, Cemento Portland, Grifería, Hierro redondo y aceros para la construcción, Hormigón elaborado, Ladrillos huecos, Mosaicos graníticos y cacareos, Pinturas para la construcción, Pisos y revestimientos cerámicos, Placas de yeso, Sanitarios de cerámica, Tubos de acero sin costura, Vidrio plano para la construcción y Yeso.</p>",
  "f": "https://www.indec.gob.ar/ftp/cuadros/economia/metodologia_isac_2018.pdf",
  "d": "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  "min": 0,
  "max": 300,
  "cat": "Actividad Económica",
  chartdata: {
    labels: require("../data/isac/base/dates.json"),
    datasets: [
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "Desestacionalizado",
        data: require("../data/isac/estacional/d.json"),
        borderColor: "#2E78D2",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        fill: false,
        label: "Tendencia",
        data: require("../data/isac/tendencia/d.json"),
        borderColor: "#7a49a580",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        fill: false,
        label: "Base",
        data: require("../data/isac/base/d.json"),
        borderColor: "rgba(46,120,210,0.25)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1.5,
      },
    ],
  }
}

