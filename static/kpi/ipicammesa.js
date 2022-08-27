module.exports = {
  "t": "IPI CAMMESA",
  "st": "Índice Adelantado de Producción Industrial",
  "sd": "Este indicador incluye un exhaustivo relevamiento de todas las <em>actividades económicas que conforman la industria manufacturera</em>, con cobertura para el total del país.",
  "kpi": "ipicammesa",
  "c": "<p>Este indice se basa en los datos diarios de consumo de energía eléctrica (en MWh) de los Grandes Usuarios Mayores, que se componen de 417 establecimientos productivos del país, de los cuales 289 pertenecen a la industria manufacturera.</p>",
  "f": "https://www.argentina.gob.ar/produccion/cep/estudios-coyuntura",
  "fu": "CEP XXI",
  "d": "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  "cat": "Actividad Económica",
  chartdata: {
    labels: require("../data/ipicammesa/dates.json"),
    datasets: [
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "IPI CAMMESA",
        data: require("../data/ipicammesa/interanual.json"),
        borderColor: "#2E78D2",
        pointRadius: 0,
        borderWidth: 1.5,
      },
    ],
  }
}
