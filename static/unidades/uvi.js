
module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "uvi"
const payload = await parsers.scrapeBCRA("7914")
  const post = {
    kpi,
    t: "UVI",
    st: "Unidad de Vivienda",
    sd: "",
    c: "<p>La Unidad de Vivienda (UVI) es una unidad de medida creada por el Banco Central de la República Argentina (BCRA) en 2016 para ajustar el valor de los créditos hipotecarios en función de la inflación y permitir que más personas puedan acceder a una vivienda propia. </p><p>El valor de la UVI se actualiza diariamente de acuerdo con el Coeficiente de Estabilización de Referencia (CER), que a su vez se ajusta por la variación del índice de precios al consumidor (IPC). De esta manera, el monto de un crédito hipotecario en UVIs se ajusta automáticamente de acuerdo con la inflación, lo que protege a los deudores de las fluctuaciones del mercado y les permite planificar mejor sus pagos. </p><p>Además, el BCRA establece una tasa de interés máxima para los créditos hipotecarios en UVIs, lo que evita que los bancos puedan imponer tasas excesivas a los prestatarios y garantiza que las condiciones sean más justas y accesibles para todos. </p>",
    fd: "datos.gob.ar",
    fdr: "https://datos.gob.ar/ar/dataset/sspm-cer-uva-uvi/archivo/sspm_94.2",
    fu: "MECON",
    fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
      frec: parsers.detectDataType(payload), 
      fruc: parsers.detectAggregationFunction(payload),
    u: new Date().toLocaleDateString('en-CA').split('/').join('-'),
    d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
    dimensions: [
      {
        
        label: "UVI",
        data: payload,
        color: "rgba(46,120,210,1)",
      },
    ],
  }

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()