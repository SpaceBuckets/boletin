module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "reservas"
   const payload = await parsers.datosGobarAPI('174.1_RRVAS_IDOS_0_0_36')
  const post = {
    kpi,
  t: "Reservas BCRA",
  st: "En miles de millones de USD",
  sd: "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  c: "<p>Las reservas del BCRA (Banco Central de la República Argentina) se refieren a los activos financieros, principalmente en moneda extranjera, que el banco central posee y administra como forma de respaldar la estabilidad financiera del país y cumplir con sus obligaciones internacionales.</p><p>Las reservas del BCRA están compuestas principalmente por divisas (como el dólar estadounidense, el euro y el yen japonés), oro y otros activos financieros líquidos. Estos activos se utilizan como una forma de proteger la economía del país frente a eventos externos que puedan afectar la estabilidad financiera, como una crisis financiera o una devaluación de la moneda local.</p><p>Además, las reservas del BCRA son una forma de garantizar el cumplimiento de las obligaciones internacionales del país, como el pago de deuda externa, y de mantener la confianza de los inversores y prestamistas internacionales en la economía argentina.</p><p>Las reservas del BCRA pueden ser afectadas por factores externos e internos. Por ejemplo, la entrada de divisas a la economía, ya sea por exportaciones, inversiones extranjeras o préstamos internacionales, puede incrementar las reservas del BCRA. Por otro lado, una fuga de capitales o una crisis económica pueden reducir las reservas del banco central.</p>",
  fd: "datos.gob.ar",
  fdr: "https://datos.gob.ar/dataset/sspm_174/archivo/sspm_174.1",
  fu: "BCRA",
  fur: "https://www.bcra.gob.ar/",
    frec: parsers.detectDataType(payload), 
      fruc: parsers.detectAggregationFunction(payload),
    u: new Date().toLocaleDateString('en-CA').split('/').join('-'),  
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  min: 0,
  dimensions: [
      {
        label: "Reservas Internacionales",
        data: payload,
        color: '#2E78D2',
        
      },
]
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()

