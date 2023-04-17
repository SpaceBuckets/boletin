
module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "ipcgba"
const payload = await parsers.datosGobarAPI('101.1_I2NG_2016_M_22&representation_mode=percent_change')
  const post = {
    kpi,
  t: "IPC-GBA",
  st: "Índice de Precios al Consumidor",
  sd: "El IPC mide la variación de precios de los bienes y servicios representativos del gasto de consumo de los hogares residentes en la zona seleccionada en comparación con los precios vigentes en el año base.",
  c: "<p>El IPC-GBA (Índice de Precios al Consumidor - Gran Buenos Aires) es un índice de precios que mide la variación en el tiempo del costo promedio de un conjunto de bienes y servicios adquiridos por los hogares residentes en el Gran Buenos Aires.</p><p>El índice se construye mediante la recolección de precios de una canasta de bienes y servicios que incluye alimentos, bebidas, vestimenta, vivienda, transporte, educación, salud, entre otros. La canasta se actualiza regularmente para reflejar los cambios en los hábitos de consumo de la población.</p><p>El IPC-GBA se expresa en términos de un índice base 100, que corresponde al promedio de los precios en un período de referencia, que actualmente es diciembre de 2016. De esta manera, cualquier variación en el índice a partir de ese mes refleja la variación de los precios en relación a ese período de referencia.</p><p>El IPC-GBA es ampliamente utilizado por empresas, analistas económicos, inversores y el gobierno para medir la inflación en Argentina y para ajustar los precios de contratos, salarios y otros valores monetarios a la inflación.</p>",
  fd: "datos.gob.ar",
  fdr: "https://datos.gob.ar/dataset/sspm-indice-precios-al-consumidor-gba-ipc-gba-base-diciembre-2016/archivo/sspm_101.1",
  fu: "MECON",
  fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
    frec: parsers.detectDataType(payload), 
      fruc: parsers.detectAggregationFunction(payload),
    u: new Date().toLocaleDateString('en-CA').split('/').join('-'),   
  d: "El IPC mide la variación de precios de los bienes y servicios representativos del gasto de consumo de los hogares residentes en la zona seleccionada en comparación con los precios vigentes en el año base.",
  dimensions: [
      {
        label: "Desestacionalizado",
        data: payload,
        
      },
]
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()

