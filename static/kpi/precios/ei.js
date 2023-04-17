
module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "ei"
 

  const kpidata = {
    url: 'https://www.utdt.edu/download.php?fname=_167709187927706200.xls',
    sheet: 0,
    date: 0,
    items: [
      {name: "mediana", id: 1},
      {name: "promedio", id: 2}
    ]
  }
  
  const payload = await parsers.genericXLS(kpidata)

  const post = {
    kpi,
    t: "EI",
    st: "Expectativas de Inflación",
    sd: "Este relevamiento tiene como objetivo recabar la opinión del público respecto de la trayectoria del nivel general de precios durante los próximos doce meses.",
    c: "<p>El Indicador de Expectativas de Inflación de la Universidad Torcuato Di Tella es un instrumento de medición mensual que se encarga de captar las expectativas de inflación de la población argentina para los próximos doce meses. El Centro de Investigación en Finanzas de la UTDT es el responsable de llevar a cabo esta encuesta desde el año 2006.</p><p>La metodología empleada para la elaboración del indicador consiste en formular una pregunta a los encuestados: '¿Cuál cree Ud. que será la inflación general de precios en los próximos doce meses?' La respuesta a esta pregunta se traduce en un número que refleja la expectativa de inflación de cada individuo.</p><p>Este indicador es considerado relevante debido a que las expectativas de inflación suelen influir en las decisiones de consumo e inversión y en la formación de los precios. Además, estas expectativas pueden tener un impacto en la política monetaria y fiscal, ya que los bancos centrales y los gobiernos suelen tomarlas en cuenta para la toma de decisiones económicas, tales como la fijación de las tasas de interés.</p>",
    fd: "Scraped (XLS)",
    fdr: "https://www.utdt.edu/download.php?fname=_167709187927706200.xls",
    fu: "UTDT",
    fur: "https://www.utdt.edu/ver_contenido.php?id_contenido=2593&id_item_menu=4988",
      frec: parsers.detectDataType(payload.mediana), 
  fruc: parsers.detectAggregationFunction(payload.mediana),   
  u: new Date().toLocaleDateString('en-CA').split('/').join('-'),
 
    d: "El IPC mide la variación de precios de los bienes y servicios representativos del gasto de consumo de los hogares residentes en la zona seleccionada en comparación con los precios vigentes en el año base.",
    dimensions: [
        {
          label: "EI Mediana",
          data: payload.mediana,
          color: "rgba(46,120,210,0.3)",
        },
        {
          label: "EI Promedio",
          data: payload.promedio,
          
        },        
    ]
  }

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()

