
module.exports = (async function() {

  const parsers = require("../../parsers");
  const kpi = "ipc"
 
  await parsers.scrapeBCRA("7931",kpi)

  var post = {
    kpi,
  t: "IPC",
  st: "Índice de Precios al Consumidor",
  sd: "El IPC mide la variación de precios de los bienes y servicios representativos del gasto de consumo de los hogares residentes en la zona seleccionada en comparación con los precios vigentes en el año base.",
  c: "<p>El IPC provee información relevante en más de un sentido: • Se utiliza como medida de la inflación del país, por lo cual es considerado para la determinación de políticas económicas y monetarias, obligaciones contractuales, tasa de interés y remuneraciones. • Sirve como indicador del cambio en el poder de compra de los consumidores. • Es una herramienta útil para estimar series económicas a precios constantes. • Proporciona una serie de índices que permiten comparar la evolución de los precios de subconjuntos de bienes y servicios, proveyendo información sobre distintos sectores de la economía. • Muestra la variación promedio de precios de un conjunto de bienes y servicios comercializados en el mercado, representativos del consumo de los hogares. </p><p>Los índices de precios tratan de medir el efecto de los factores de precio, que en general son aquellos que “identifican el monto pagado por una unidad de medida de una clase y calidad específica de un bien o servicio específico obtenido de una fuente específica por un grupo de población específico”2 . Los índices de precios, por lo tanto, no deberían estar afectados por cambios en la calidad de los bienes y servicios.</p>",
  f: "https://www.indec.gob.ar/ftp/cuadros/economia/metodologia_ipc_nacional_2019.pdf",
  d: "El IPC mide la variación de precios de los bienes y servicios representativos del gasto de consumo de los hogares residentes en la zona seleccionada en comparación con los precios vigentes en el año base.",
  max: 10,
  min: 0,
  cat: "Precios",
  chartdata: {
    labels: require("./datos/dates.json"),
    datasets: [
      {
        backgroundColor: "#2E78D295",
        label: "IPC General",
        data: require("./datos/d.json"),
        type: 'bar',
        borderColor: "#2E78D2",
        pointRadius: 0,
        borderWidth: 0,
      },
]
}
}

parsers.writeFileSyncRecursive(`./static/kpi/${kpi}/${kpi}.json`, JSON.stringify(post));

})()

