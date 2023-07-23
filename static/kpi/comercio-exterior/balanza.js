module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "balanza"
const payload = await parsers.datosGobarAPI('74.3_IIT_0_M_25')
  const post = {
    kpi,
    t: "Intercambio Comercial",
    st: "Importaciones, Exportaciones y Saldo",
    sd: "El intercambio comercial argentino (ICA) muestra la evolución de la balanza comercial, la relación entre los ingresos en dólares de las exportaciones y los gastos de las importaciones.",
    c: "<p>El Indicador de Intercambio Comercial (ICA) del INDEC es un indicador económico que mide el desempeño del comercio exterior de Argentina. Se calcula mensualmente y muestra la evolución de las exportaciones e importaciones de bienes del país.</p><p>El ICA se compone de dos índices: el Índice de Valor de las Exportaciones (IVE) y el Índice de Valor de las Importaciones (IVI). El IVE representa la evolución del valor de las exportaciones de bienes del país, mientras que el IVI representa la evolución del valor de las importaciones de bienes del país.</p><p>Para el cálculo del IVE y el IVI se utilizan los valores en dólares de las exportaciones e importaciones de bienes, respectivamente, y se ajustan por el tipo de cambio oficial promedio del mes correspondiente. El ICA se expresa en términos de un índice base 100 en el año 2016.</p><p>El ICA es un indicador importante para medir la salud de la economía argentina, ya que el comercio exterior es una parte fundamental de la economía del país. Un aumento en las exportaciones puede indicar un aumento en la demanda internacional de bienes argentinos y una mejora en la competitividad del país, mientras que un aumento en las importaciones puede indicar una mayor demanda interna de bienes y servicios, así como una mayor inversión extranjera en el país.</p>",
    fd: "datos.gob.ar",
    fdr: "https://datos.gob.ar/ja/dataset/sspm-intercambio-comercial-argentino/archivo/sspm_74.3",
    fu: "MECON",
    fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
      frec: parsers.detectDataType(payload), 
      fruc: parsers.detectAggregationFunction(payload),
    u: new Date().toLocaleDateString('en-CA').split('/').join('-'),  
    feat: true,
    d: "El intercambio comercial argentino (ICA) muestra la evolución de la balanza comercial, la relación entre los ingresos en dólares provenientes de los productos que exporta el país y aquellos artículos que se compran en el exterior.",
    dimensions: [
      {
        label: "Importaciones",
        data: payload,
        color: "#b22222CC",

      },
      {
        label: "Exportaciones",
        data: await parsers.datosGobarAPI('74.3_IET_0_M_16'),
        color: "#009966",

      },
      {
        label: "Saldo Comercial",
        type: "bar",
        data: await parsers.datosGobarAPI('74.3_ISC_0_M_19'),
        color: "#ccc",
      },
    ],
  }

  parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()