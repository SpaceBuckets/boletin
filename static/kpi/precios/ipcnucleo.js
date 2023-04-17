
module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "ipcnucleo"
const payload = await parsers.datosGobarAPI('148.3_INUCLEONAL_DICI_M_19&representation_mode=percent_change')
  const post = {
    kpi,
  t: "IPC Núcleo",
  st: "Índice de Precios al Consumidor",
  sd: "El IPC mide la variación de precios de los bienes y servicios representativos del gasto de consumo de los hogares residentes en la zona seleccionada en comparación con los precios vigentes en el año base.",
   c: "<p>El IPC Núcleo es un indicador de inflación que mide la variación de los precios de un conjunto de bienes y servicios considerados 'esenciales' o 'básicos' para el consumo de los hogares. Estos bienes y servicios se seleccionan cuidadosamente para excluir aquellos que tienen precios volátiles o que están sujetos a cambios estacionales o estacionales.</p><p>En Argentina, el IPC Núcleo es calculado por el Instituto Nacional de Estadísticas y Censos (INDEC), y se utiliza como una medida de referencia para evaluar la tendencia subyacente de la inflación en el país. El índice se calcula utilizando la misma metodología que el IPC general, pero excluyendo los precios de ciertos bienes y servicios, como alimentos y bebidas no alcohólicas, combustibles y energía, servicios de comunicaciones, entre otros.</p><p>La idea detrás del IPC Núcleo es proporcionar una medida más precisa de la inflación subyacente, que refleja mejor la tendencia a largo plazo de los precios en la economía, excluyendo las fluctuaciones temporales y las presiones de precios específicos de ciertos bienes y servicios.</p>",
   fd: "datos.gob.ar",
   fdr: "https://datos.gob.ar/dataset/sspm-indice-precios-al-consumidor-nacional-ipc-base-diciembre-2016/archivo/sspm_145.9?view_id=01510e38-f508-480f-bdf7-6e045b9c04e1",
   fu: "MECON",
   fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
     frec: parsers.detectDataType(payload), 
      fruc: parsers.detectAggregationFunction(payload),
    u: new Date().toLocaleDateString('en-CA').split('/').join('-'),  
     d: "El IPC mide la variación de precios de los bienes y servicios representativos del gasto de consumo de los hogares residentes en la zona seleccionada en comparación con los precios vigentes en el año base.",
 

  dimensions: [
    {
      label: "IPC Núcleo",
      data: payload,
      
    },
  ],
}
parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()
