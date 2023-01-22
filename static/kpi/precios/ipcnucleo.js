
module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "ipcnucleo"
   
  const payload = await parsers.datosGobarAPI(kpi, "ipcnucleo", '148.3_INUCLEONAL_DICI_M_19&representation_mode=percent_change')

  var post = {
    kpi,
  t: "IPC Núcleo",
  st: "Índice de Precios al Consumidor",
  sd: "El IPC mide la variación de precios de los bienes y servicios representativos del gasto de consumo de los hogares residentes en la zona seleccionada en comparación con los precios vigentes en el año base.",
   c: "<p>El IPC se utiliza como medida de la inflación del país, por lo cual es considerado para la determinación de políticas económicas y monetarias, obligaciones contractuales, tasa de interés y remuneraciones. Sirve como indicador del cambio en el poder de compra de los consumidores. Es una herramienta útil para estimar series económicas a precios constantes.</p>",
   fd: "datos.gob.ar",
   fdr: "https://datos.gob.ar/dataset/sspm-indice-precios-al-consumidor-nacional-ipc-base-diciembre-2016/archivo/sspm_145.9?view_id=01510e38-f508-480f-bdf7-6e045b9c04e1",
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
      label: "IPC Núcleo",
      data: payload.d,
      type: 'bar',
      borderColor: "#2E78D2",
      pointRadius: 0,
      borderWidth: 0,
    },
  ],
}
}
parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));


})()
