module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "subsidios"
 const payload = await parsers.datosGobarAPI('452.2_TRANSPORTERTE_0_T_10_32')
  const post = {
    kpi,
  t: "Subsidios Económicos",
  st: "Energía y Transporte",
  sd: "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
   c: "<p>Los subsidios económicos son una herramienta utilizada por el gobierno para apoyar ciertos sectores o actividades de la economía que se consideran importantes o que necesitan ayuda financiera. En Argentina, los subsidios son una parte importante de la política económica y han sido utilizados para apoyar diversos sectores, como la energía, el transporte y la vivienda.</p><p>Entre los subsidios más importantes de Argentina se encuentran los subsidios energéticos, que se utilizan para mantener los precios bajos de la energía eléctrica y el gas natural para los consumidores. Estos subsidios son costosos y han sido objeto de críticas debido a su impacto en las finanzas públicas.</p><p>Otro tipo de subsidio importante en Argentina son los subsidios al transporte público, que se utilizan para mantener los precios bajos de los boletos de autobús, metro y tren. Estos subsidios son esenciales para garantizar el acceso al transporte público para todos los ciudadanos, especialmente los de bajos ingresos.</p><p>También existen subsidios para la vivienda, que se utilizan para ayudar a las familias de bajos ingresos a adquirir viviendas propias. Estos subsidios pueden tomar la forma de préstamos con tasas de interés bajas o de subsidios directos para la construcción de viviendas.</p>",
   fd: "datos.gob.ar",
   fdr: "https://datos.gob.ar/dataset/sspm-informe-mensual-ingresos-gastos-sector-publico-nacional-no-financiero-imig/archivo/sspm_452.3",
   fu: "MECON",
   fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
     frec: parsers.detectDataType(payload), 
      fruc: parsers.detectAggregationFunction(payload),
    u: new Date().toLocaleDateString('en-CA').split('/').join('-'),  
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  max: 250000,
  dimensions: [
      {
        label: "Transporte",
        data: payload,
        color: "rgba(46,120,210,0.25)",

      },
      {
        label: "Energia",
        data: await parsers.datosGobarAPI('452.2_ENERGIAGIA_0_T_7_56'),
        

      },
]
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()

