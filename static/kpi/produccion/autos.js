 
module.exports = (async function() {
  
  const parsers = require("@parsers");

  const kpi = "autos"
  const payload = await parsers.datosGobarAPI('330.1_PRODUCCIONLES__22')
  const post = {
    kpi,
    t: "Producción de Autos",
    st: "En Toneladas",
    sd: "Datos históricos de la industria automotriz en unidades.",
    c: "<p>El indicador de producción automotriz de ADEFA es un índice que mide la cantidad de vehículos producidos por las empresas asociadas a la Asociación de Fábricas de Automotores (ADEFA) en Argentina. La ADEFA es una organización que representa a las empresas productoras de vehículos en Argentina, y su índice de producción de automóviles es una medida importante de la actividad del sector automotriz en el país.</p><p>El indicador de producción automotriz de ADEFA se calcula a través de una encuesta mensual realizada a las empresas asociadas a la cámara. En esta encuesta, se recopila información sobre la cantidad de vehículos producidos por cada empresa durante el mes anterior. La información recopilada se utiliza para calcular la producción total de vehículos de la ADEFA.</p><p>El indicador de producción automotriz de ADEFA es importante porque la industria automotriz es un sector clave en la economía de Argentina, siendo una importante fuente de empleo y de generación de divisas. Además, la producción de vehículos también puede ser un indicador temprano de la actividad económica en general, ya que la demanda de vehículos a menudo refleja la salud de otros sectores.</p>",
    fd: "datos.gob.ar",
    fdr: "https://datos.gob.ar/dataset/sspm-datos-historicos-industria-automotriz/archivo/sspm_330.1",
    fu: "ADEFA",
    fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
    frec: parsers.detectDataType(payload), 
        fruc: parsers.detectAggregationFunction(payload),
    u: new Date().toLocaleDateString('en-CA').split('/').join('-'),    
    d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
    dimensions: [
        {
          
          label: "Producción de Autos",
          data: payload,
          color: "rgba(46,120,210,1)",
        },
      ],
  }

  parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()