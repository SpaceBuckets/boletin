module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "balancecambiario"
  const url = 'https://infra.datos.gob.ar/catalog/sspm/dataset/182/distribution/182.1/download/balance-cambiario.csv'
  const payload = await parsers.datosGobarCSV(0,1,url)

  const post = {
    kpi,
    t: "Balance Cambiario",
    st: "En millones de USD",
    sd: "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
    c: "<p>Las compras diarias de divisas del BCRA (Banco Central de la República Argentina) son una herramienta que utiliza la entidad para intervenir en el mercado de cambios y regular el tipo de cambio del peso argentino con respecto a otras monedas, principalmente el dólar estadounidense.</p><p>El BCRA compra divisas en el mercado cambiario a través de subastas diarias en las que los vendedores ofrecen sus divisas y el BCRA las adquiere al mejor precio posible. Estas compras tienen como objetivo aumentar la oferta de dólares en el mercado y reducir la demanda, lo que a su vez puede contribuir a estabilizar el tipo de cambio del peso argentino.</p><p>El BCRA utiliza sus reservas internacionales para financiar las compras de divisas, que pueden variar en función de las necesidades de la economía y las condiciones del mercado cambiario. Las compras diarias de divisas son una de las herramientas que el BCRA utiliza en su política cambiaria, que también incluye la regulación de la tasa de interés y otras medidas de política monetaria.</p><p>Es importante destacar que las compras diarias de divisas no son una solución definitiva para los problemas económicos y cambiarios del país, sino una medida temporal que puede ayudar a aliviar algunas presiones en el mercado cambiario. Además, las compras de divisas pueden tener impactos en otros aspectos de la economía, como la inflación y el nivel de reservas internacionales del BCRA. Por lo tanto, es necesario que el BCRA evalúe cuidadosamente la eficacia de esta herramienta y la utilice de manera responsable y sostenible.</p>",
    fd: "Scraped (XLS)",
    fdr: "http://www.bcra.gov.ar/Pdfs/PublicacionesEstadisticas/series.xlsm",
    fu: "BCRA",
    fur: "http://www.bcra.gov.ar/Pdfs/PublicacionesEstadisticas/series.xlsm",
      frec: parsers.detectDataType(payload), 
      fruc: parsers.detectAggregationFunction(payload),
    u: new Date().toLocaleDateString('en-CA').split('/').join('-'),
    d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
    max: 300,
    min: -300,
    dimensions: [
    {
      color: "#2E78D2",
      label: "Cuenta Cambiaria USD",
      data: payload,
      barThickness: 1,
      
    },
  ],
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()