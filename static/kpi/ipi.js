module.exports = {
  "t": "IPI",
  "st": "Índice de Producción Industrial Manufacturero",
  "sd": "Este indicador incluye un exhaustivo relevamiento de todas las <em>actividades económicas que conforman la industria manufacturera</em>, con cobertura para el total del país.",
  "kpi": "ipi",
  "c": "<p>El Índice de Producción Industrial Manufacturero (IPI) se calcula a partir de las variables de producción, ventas, utilización de insumos, consumo, cantidad de horas trabajadas del personal y ventas a precios corrientes.</p>",
  "f": "https://www.indec.gob.ar/ftp/cuadros/economia/metodologia_emae_ago_16.pdf",
  "fu": "INDEC",
  "d": "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  "min": 60,
  "max": 160,
  "cat": "Actividad Económica",
  chartdata: {
    labels: require("../data/ipi/base/dates.json"),
    datasets: [
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "Desestacionalizado",
        data: require("../data/ipi/estacional/d.json"),
        borderColor: "#2E78D2",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        fill: false,
        label: "Tendencia",
        data: require("../data/ipi/tendencia/d.json"),
        borderColor: "#7a49a580",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        fill: false,
        label: "Base",
        data: require("../data/ipi/base/d.json"),
        borderColor: "rgba(46,120,210,0.25)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1.5,
      },
    ],
  }
}
