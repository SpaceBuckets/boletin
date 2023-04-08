module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "liquisoja"
      const payload = await parsers.datosGobarAPI('349.2_ACUM_MENSUAL__13')
  const post = {
    kpi,
    t: "Liquidacion Agro",
    st: "",
    c: "<p>La liquidación de divisas por exportaciones de oleaginosas y cereales es un indicador económico utilizado en Argentina para medir la cantidad de divisas que ingresan al país por la venta de estos productos en el mercado internacional.</p><p>Este indicador se calcula en base a los datos de las empresas exportadoras, que deben informar al Banco Central de la República Argentina (BCRA) el monto total de divisas que ingresan al país por la venta de estos productos. La liquidación de divisas se realiza en pesos argentinos, utilizando la cotización del tipo de cambio oficial del BCRA.</p><p>En Argentina, la producción y exportación de oleaginosas y cereales es una actividad económica muy importante, ya que estos productos representan una parte significativa de las exportaciones totales del país. Los principales cultivos de oleaginosas son la soja, el girasol y el maní, mientras que los principales cereales son el maíz, el trigo y la cebada.</p><p>Por lo tanto, la liquidación de divisas por exportaciones de oleaginosas y cereales es un indicador clave para medir la salud de la economía argentina, ya que refleja la cantidad de ingresos en divisas que el país está generando por la venta de sus productos en el mercado internacional.</p>",
    fd: "datos.gob.ar",
    fdr: "https://datos.gob.ar/ja/dataset/sspm_349/archivo/sspm_349.2",
    fu: "MECON",
    fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
      frec: parsers.detectDataType(payload), 
      fruc: parsers.detectAggregationFunction(payload),
    u: new Date().toLocaleDateString('en-CA').split('/').join('-'),  
    d: "",
    dimensions: [
        {
        label: "Liquidacion Agro",
        data: payload,
        color: "rgba(46,120,210,1)",
        },
        {
          label: "Promedio Diario",
          data: await parsers.datosGobarCSV(0,2,'https://infra.datos.gob.ar/catalog/sspm/dataset/349/distribution/349.2/download/liquidacion-divisas-exportaciones-oleaginosas-cereales-mensual.csv'),
          color: "rgba(46,120,210,0.5)",
          },        
    ],
  }

  parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);
   

})()