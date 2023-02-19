
module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "ipc"
   
  const payload = await parsers.scrapeBCRA("7931")
  
  var post = {
    kpi,
  t: "IPC",
  st: "Índice de Precios al Consumidor",
  sd: "El IPC mide la variación de precios de los bienes y servicios representativos del gasto de consumo de los hogares residentes en la zona seleccionada en comparación con los precios vigentes en el año base.",
  c: "<p>El IPC se utiliza como medida de la inflación del país, por lo cual es considerado para la determinación de políticas económicas y monetarias, obligaciones contractuales, tasa de interés y remuneraciones. Sirve como indicador del cambio en el poder de compra de los consumidores. Es una herramienta útil para estimar series económicas a precios constantes.</p>",
  fd: "Scraped (Web)",
  fdr: "http://www.bcra.gov.ar/PublicacionesEstadisticas/Principales_variables_datos.asp?fecha_desde=1900-01-01&fecha_hasta=2040-04-30&primeravez=1&serie=7931",
  fu: "INDEC",
  fur: "https://www.indec.gob.ar/indec/web/Nivel4-Tema-3-5-31",
  frec: "Mensual",   
  d: "El IPC mide la variación de precios de los bienes y servicios representativos del gasto de consumo de los hogares residentes en la zona seleccionada en comparación con los precios vigentes en el año base.",
  max: 10,
  min: 0,

  chart: {
    dates:payload,
    dimensions: [
      {
        fillColor: "#2E78D295",
        label: "IPC General",
        data: payload,
        type: 'bar',
        color: "#2E78D2",
        
        borderWidth: 0,
      },
]
}
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));


})()

