module.exports = {
  "t": "IPIP",
  "st": "Índice de Producción Industrial Pyme",
  "sd": "Este indicador incluye un exhaustivo relevamiento de todas las <em>actividades económicas que conforman la industria manufacturera</em>, con cobertura para el total del país.",
  "kpi": "ipip",
  "c": "<p>El Índice de Producción Industrial Manufacturero (IPI) se calcula a partir de las variables de producción, ventas, utilización de insumos, consumo, cantidad de horas trabajadas del personal y ventas a precios corrientes.</p>",
  "f": "https://www.indec.gob.ar/ftp/cuadros/economia/metodologia_emae_ago_16.pdf",
  "fu": "CAME",
  "d": "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  "min": 0,
  "max": 140,
  "cat": "Actividad Económica",
  chartdata: {
    labels: require("../data/ipip/dates.json"),
    datasets: [
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "Desestacionalizado",
        data: require("../data/ipip/valor.json"),
        borderColor: "#2E78D2",
        pointRadius: 0,
        borderWidth: 1.5,
      },
    ],
  }
}
