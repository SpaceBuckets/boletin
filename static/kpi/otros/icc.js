module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "icc"
const payload = await parsers.datosGobarAPI('380.3_ICC_NACIONNAL_0_T_12')
  const post = {
    kpi,
  t: "ICC",
  st: "Índice de Confianza del Consumidor",
  sd: "Este indicador busca reflejar el contexto económico internacional que enfrenta el país, a partir de los niveles de liquidez mundial, los precios de las materias primas, la demanda externa y el ciclo económico de Brasil.",
  c: "<p>El ICC (Índice de Confianza del Consumidor) de la Universidad Di Tella de Argentina es un indicador que mide el grado de confianza de los consumidores en la economía del país y en su situación financiera personal.</p><p>El índice se construye a partir de una encuesta mensual que realiza la universidad a una muestra representativa de la población urbana de Argentina. En la encuesta se hacen preguntas sobre la situación económica actual del país y del hogar, sobre las expectativas económicas para el futuro próximo, y sobre las decisiones de consumo que piensan tomar en el corto plazo.</p><p>El ICC se expresa en una escala que va de 0 a 200, donde un valor de 100 representa un nivel de confianza neutral. Valores por encima de 100 indican un mayor grado de confianza en la economía y en la situación financiera personal, mientras que valores por debajo de 100 indican un menor grado de confianza.</p><p>El ICC se considera un indicador importante del sentimiento de los consumidores en relación a la economía, ya que puede influir en su decisión de compra y en la demanda agregada de bienes y servicios. Además, el ICC también puede ser un indicador adelantado de la actividad económica, ya que los cambios en la confianza del consumidor pueden anticipar cambios en el gasto y en la inversión.</p>",
  fd: "datos.gob.ar",
  fdr: "https://datos.gob.ar/dataset/sspm-indice-confianza-consumidor/archivo/sspm_380.3",
  fu: "MECON",
  fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
    frec: parsers.detectDataType(payload), 
      fruc: parsers.detectAggregationFunction(payload),
    u: new Date().toLocaleDateString('en-CA').split('/').join('-'),  
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",

  dimensions: [
      {
        
        label: "ICC",
        data: payload,
        color: "rgba(46,120,210,1)",
        
        
      },
    ]
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()