
module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "ipc"
  const payload = await parsers.scrapeBCRA("7931")
  const post = {
    kpi,
    t: "IPC",
    st: "Índice de Precios al Consumidor",
    sd: "El IPC mide la variación de precios de los bienes y servicios representativos del gasto de consumo de los hogares residentes en la zona seleccionada en comparación con los precios vigentes en el año base.",
    c: "<p>El IPC (Índice de Precios al Consumidor) es un indicador que mide la variación de los precios de un conjunto de bienes y servicios que consumen los hogares en una región geográfica determinada durante un periodo de tiempo determinado. En Argentina, el IPC es calculado y publicado por el INDEC (Instituto Nacional de Estadística y Censos).</p><p>El cálculo del IPC se realiza mediante una canasta básica de consumo, que es un conjunto representativo de bienes y servicios que consumen los hogares. Esta canasta básica se establece a partir de las encuestas de gastos de los hogares. Se asignan ponderaciones a cada uno de los bienes y servicios incluidos en la canasta, de acuerdo con la importancia que tienen en el gasto total de los hogares.</p><p>El IPC se calcula mensualmente y se expresa como un índice de precios, que se construye tomando como base un período determinado. El índice se compone de una serie de subíndices, cada uno de los cuales mide la variación de los precios de un grupo de bienes y servicios específicos, como por ejemplo alimentos y bebidas, vivienda, transporte, entre otros.</p><p>El IPC es un indicador económico importante porque permite medir el nivel de inflación en una economía y cómo esta inflación afecta el poder adquisitivo de los hogares. Además, es utilizado por el gobierno y otras entidades para tomar decisiones en políticas públicas, como la fijación de tasas de interés y ajustes en los salarios.</p>",
    fd: "Scraped (Web)",
    fdr: "http://www.bcra.gov.ar/PublicacionesEstadisticas/Principales_variables_datos.asp?fecha_desde=1900-01-01&fecha_hasta=2040-04-30&primeravez=1&serie=7931",
    fu: "INDEC",
    fur: "https://www.indec.gob.ar/indec/web/Nivel4-Tema-3-5-31",
      frec: parsers.detectDataType(payload), 
      fruc: parsers.detectAggregationFunction(payload),
    u: new Date().toLocaleDateString('en-CA').split('/').join('-'),    
    d: "El IPC mide la variación de precios de los bienes y servicios representativos del gasto de consumo de los hogares residentes en la zona seleccionada en comparación con los precios vigentes en el año base.",
    feat: true,
    dimensions: [
        {
          label: "IPC General",
          data: payload,
          
        },
    ]
  }

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()

