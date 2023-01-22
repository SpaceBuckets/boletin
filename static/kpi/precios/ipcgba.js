
module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "ipcgba"
   
  const payload = await parsers.datosGobarAPI(kpi, "ipcgba", '101.1_I2NG_2016_M_22&representation_mode=percent_change')

  var post = {
    kpi,
  t: "IPC-GBA",
  st: "Índice de Precios al Consumidor",
  sd: "El IPC mide la variación de precios de los bienes y servicios representativos del gasto de consumo de los hogares residentes en la zona seleccionada en comparación con los precios vigentes en el año base.",
  c: "<p>El IPC se utiliza como medida de la inflación del país, por lo cual es considerado para la determinación de políticas económicas y monetarias, obligaciones contractuales, tasa de interés y remuneraciones. Sirve como indicador del cambio en el poder de compra de los consumidores. Es una herramienta útil para estimar series económicas a precios constantes.</p>",
  fd: "datos.gob.ar",
  fdr: "https://datos.gob.ar/dataset/sspm-indice-precios-al-consumidor-gba-ipc-gba-base-diciembre-2016/archivo/sspm_101.1",
  fu: "MECON",
  fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
  frec: "Mensual",  
  d: "El IPC mide la variación de precios de los bienes y servicios representativos del gasto de consumo de los hogares residentes en la zona seleccionada en comparación con los precios vigentes en el año base.",
  max: 10,
  min: 0,
  cat: "Precios",
  catslug: "precios",
  chartdata: {
    labels: payload.dates,
    datasets: [
      {
        backgroundColor: "#2E78D295",
        label: "Desestacionalizado",
        data: payload.d,
        type: 'bar',
        borderColor: "#2E78D2",
        pointRadius: 0,
        borderWidth: 0,
      },
]
}
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));


})()

