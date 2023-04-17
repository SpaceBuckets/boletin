module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "gasproducciondiaria"
  const url = 'http://datos.energia.gob.ar/dataset/590d1284-fd6d-4686-afd8-b3da5d90a6e9/resource/6a7866a1-723f-420c-898f-c482613646c5/download/produccin-de-gas-promedio-diaria-por-cuenca.csv'
  const payload = await parsers.datosGobarCSV(2,4,url)
  const post = {
    kpi,
  t: "Producción Promedio Diaria",
  st: "En millones de metros cúbicos",
  sd: "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  c: "<p>El indicador Producción Promedio Diaria de gas en Argentina se refiere a la cantidad de gas natural que se extrae en promedio cada día en el país, expresada en millones de metros cúbicos por día (MMm3/d).</p><p>La producción de gas en Argentina es un indicador importante debido a que el país cuenta con importantes reservas de gas natural, lo que le ha permitido convertirse en uno de los mayores productores y exportadores de gas de la región. La producción de gas se utiliza tanto para consumo interno como para exportación, y es un indicador clave para la economía argentina.</p><p>La producción promedio diaria de gas en Argentina ha experimentado fluctuaciones en los últimos años debido a diversos factores, como las políticas de incentivos a la inversión en el sector energético, las condiciones climáticas, las fluctuaciones de los precios internacionales del gas y los cambios en la demanda interna y externa.</p>",
  fd: "datos.gob.ar",
  fdr: "https://datos.gob.ar/dataset/sspm_364/archivo/sspm_364.3",
  fu: "MECON",
  fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
    frec: parsers.detectDataType(payload), 
      fruc: parsers.detectAggregationFunction(payload),
    u: new Date().toLocaleDateString('en-CA').split('/').join('-'),  
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  max: 6000,
  dimensions: [
      {
        
        label: "Produccion de Gas Diaria mm3",
        data: payload,
        color: "rgba(46,120,210,1)",
        
        
      },
  ]
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()

