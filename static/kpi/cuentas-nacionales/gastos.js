module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "gastos"
 const payload = await parsers.datosGobarAPI('452.3_CAPITAL_TRION_0_M_25_82')
  const post = {
    kpi,
  t: "Gastos de Capital",
  st: "En Millones de Pesos",
  sd: "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  c: "<p>Los gastos de capital se refieren a las inversiones realizadas por el sector público y privado en la adquisición de activos fijos, tales como maquinarias, equipos, edificios, infraestructura y otros bienes duraderos que se utilizan para la producción de bienes y servicios.</p><p>Estas inversiones son consideradas de largo plazo, ya que se espera que generen beneficios económicos en el futuro y contribuyan al crecimiento y desarrollo del país. Los gastos de capital son un componente importante de la inversión y, por lo tanto, del crecimiento económico de Argentina.</p><p>El Gobierno de Argentina, a través de su presupuesto anual, define los gastos de capital que realizará durante el año fiscal en curso. Estos gastos pueden ser financiados a través de recursos propios, préstamos y emisión de deuda pública.</p><p>El seguimiento de los gastos de capital es importante ya que es un indicador de la confianza en la economía y de las perspectivas de crecimiento a largo plazo. Además, la capacidad del gobierno y las empresas para financiar estos gastos también es importante ya que puede afectar la estabilidad fiscal y financiera del país.</p>",
  fd: "datos.gob.ar",
  fdr: "https://datos.gob.ar/dataset/sspm-informe-mensual-ingresos-gastos-sector-publico-nacional-no-financiero-imig/archivo/sspm_452.3",
  fu: "MECON",
  fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
    frec: parsers.detectDataType(payload), 
      fruc: parsers.detectAggregationFunction(payload),
    u: new Date().toLocaleDateString('en-CA').split('/').join('-'),  
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  dimensions: [
      {
        label: "Transporte",
        data: payload,
        color: "rgba(46,120,210,1)",

      },
      {
        label: "Agua",
        data: await parsers.datosGobarAPI('452.3_CAPITAL_AGION_0_M_41_40'),
        color: "rgba(46,120,210,0.25)",

      },
      {
        label: "Vivienda",
        data: await parsers.datosGobarAPI('452.3_CAPITAL_VIION_0_M_23_52'),
        color: "rgba(46,120,210,0.25)",

      },
      {
        label: "Energia",
        data: await parsers.datosGobarAPI('452.2_CAPITAL_ENION_0_T_22_35'),
        color: "rgba(46,120,210,0.25)",

      },
      {
        label: "Educacion",
        data: await parsers.datosGobarAPI('452.3_CAPITAL_EDION_0_M_24_92'),
        color: "rgba(46,120,210,0.25)",

      },
]
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()