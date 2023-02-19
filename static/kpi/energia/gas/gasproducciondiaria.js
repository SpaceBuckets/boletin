module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "gasproducciondiaria"
   
  const kpidata = {
    url: 'http://datos.energia.gob.ar/dataset/590d1284-fd6d-4686-afd8-b3da5d90a6e9/resource/6a7866a1-723f-420c-898f-c482613646c5/download/produccin-de-gas-promedio-diaria-por-cuenca.csv',
    
    date: 2,
    items: {
      valor: 4,
  
    }
  }
  
  const payload = await parsers.datosGobarCSV(kpidata)

  var post = {
    kpi,
  t: "Producción Promedio Diaria",
  st: "En millones de metros cúbicos",
  sd: "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  c: "<p>El gas natural es un hidrocarburo mezcla de gases ligeros de origen natural. Principalmente contiene metano, normalmente incluye cantidades variables de otros alcanos y a veces un pequeño porcentaje de dióxido de carbono, nitrógeno, ácido sulfhídrico y helio. Se forma cuando varias capas de plantas en descomposición y materia animal se exponen a calor intenso y presión bajo la superficie de la Tierra durante millones de años. </p>",
  fd: "datos.gob.ar",
  fdr: "https://datos.gob.ar/dataset/sspm_364/archivo/sspm_364.3",
  fu: "MECON",
  fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
  frec: "Mensual", 
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  max: 6000,
  chart: {
    dates:payload.valor,
    dimensions: [
      {
        fillColor: "rgba(46,120,210,0.05)",
        label: "Produccion de Gas Diaria mm3",
        data: payload.valor,
        color: "rgba(46,120,210,1)",
        
        
      },
]
}
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));


})()

