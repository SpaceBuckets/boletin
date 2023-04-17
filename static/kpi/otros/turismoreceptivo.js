module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "turismoreceptivo"
      const payload = await parsers.datosGobarAPI('322.2_TURISMO_REIVO__17')
  const post = {
    kpi,
    t: "Turismo Receptivo",
    st: "",
    c: "<p>El indicador de Turismo Receptivo de Argentina mide la cantidad de turistas extranjeros que visitan el país durante un período determinado. Este indicador es importante porque el turismo es una de las principales fuentes de ingresos para la economía argentina.</p><p>El turismo receptivo se mide a través de la cantidad de turistas que ingresan al país y que pernoctan en establecimientos hoteleros o en alojamientos privados. La medición se realiza mediante encuestas a los turistas y a los establecimientos de alojamiento.</p><p>El indicador de Turismo Receptivo de Argentina es relevante para el análisis de la economía del país, ya que el turismo es un sector importante que genera empleo y divisas. Además, permite conocer el comportamiento de los turistas que visitan Argentina, lo que puede ser útil para la elaboración de políticas turísticas y la promoción del país como destino turístico.</p>",
    fd: "datos.gob.ar",
    fdr: "https://datos.gob.ar/dataset/sspm_322/archivo/sspm_322.2",
    fu: "MECON",
    fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
      frec: parsers.detectDataType(payload), 
      fruc: parsers.detectAggregationFunction(payload),
    u: new Date().toLocaleDateString('en-CA').split('/').join('-'),  
    d: "",

    dimensions: [
        {
        
        label: "Turismo Receptivo",
        data: payload,
        color: "rgba(46,120,210,1)",
        
        
        },
    ],
  }

  parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);
   

})()