 
module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "exportacionesbienes"
  const url = 'https://cdn.produccion.gob.ar/cdn-cep/datos-por-actividad/expo/total-expo/total_expo_privada_total.csv'
  const payload = await parsers.datosGobarCSV(0,1,url)
   const post = {
    kpi,
    t: "Exportaciones de Bienes",
    st: "Valor de las exportaciones",
    sd: "",
    c: "",
    fd: "datos.gob.ar",
    fdr: "",
    fu: "MECON",
    fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
    frec: parsers.detectDataType(payload), 
        fruc: parsers.detectAggregationFunction(payload),
    u: new Date().toLocaleDateString('en-CA').split('/').join('-'),  
    d: "",
    dimensions: [
      {
        
        label: "Exportaciones de Bienes",
        data: payload,
        color: "rgba(46,120,210,0.8)",
      },      
    ],
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()