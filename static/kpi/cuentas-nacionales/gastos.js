module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "gastos"
 
  
  
 

  const energia = await parsers.datosGobarAPI('452.2_CAPITAL_ENION_0_T_22_35')
  const transporte = await parsers.datosGobarAPI('452.3_CAPITAL_TRION_0_M_25_82')
  const educacion = await parsers.datosGobarAPI('452.3_CAPITAL_EDION_0_M_24_92')
  const vivienda = await parsers.datosGobarAPI('452.3_CAPITAL_VIION_0_M_23_52')
  const agua = await parsers.datosGobarAPI('452.3_CAPITAL_AGION_0_M_41_40')
  const otros = await parsers.datosGobarAPI('452.3_CAPITAL_OTION_0_M_20_10')


  var post = {
    kpi,
  t: "Gastos de Capital",
  st: "En Millones de Pesos",
  sd: "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  c: "<p>Los gastos de capital se refieren a las inversiones realizadas por el sector público y privado en la adquisición de activos fijos, tales como maquinarias, equipos, edificios, infraestructura y otros bienes duraderos que se utilizan para la producción de bienes y servicios.</p><p>Estas inversiones son consideradas de largo plazo, ya que se espera que generen beneficios económicos en el futuro y contribuyan al crecimiento y desarrollo del país. Los gastos de capital son un componente importante de la inversión y, por lo tanto, del crecimiento económico de Argentina.</p><p>El Gobierno de Argentina, a través de su presupuesto anual, define los gastos de capital que realizará durante el año fiscal en curso. Estos gastos pueden ser financiados a través de recursos propios, préstamos y emisión de deuda pública.</p><p>El seguimiento de los gastos de capital es importante ya que es un indicador de la confianza en la economía y de las perspectivas de crecimiento a largo plazo. Además, la capacidad del gobierno y las empresas para financiar estos gastos también es importante ya que puede afectar la estabilidad fiscal y financiera del país.</p>",
  fd: "datos.gob.ar",
  fdr: "https://datos.gob.ar/dataset/sspm-informe-mensual-ingresos-gastos-sector-publico-nacional-no-financiero-imig/archivo/sspm_452.3",
  fu: "MECON",
  fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
  frec: "Mensual", 
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  chart: {
    dates:transporte,
    dimensions: [
      {
        label: "Transporte",
        data: transporte,
        color: "rgba(46,120,210,1)",

      },
      {
        label: "Agua",
        data: agua,
        color: "rgba(46,120,210,0.25)",

      },
      {
        label: "Vivienda",
        data: vivienda,
        color: "rgba(46,120,210,0.25)",

      },
      {
        label: "Energia",
        data: energia,
        color: "rgba(46,120,210,0.25)",

      },
      {
        label: "Educacion",
        data: educacion,
        color: "rgba(46,120,210,0.25)",

      },
]
}
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));


})()