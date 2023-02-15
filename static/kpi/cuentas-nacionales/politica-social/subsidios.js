module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "subsidios"
 
 
  
    const subenergia = await parsers.datosGobarAPI('452.2_ENERGIAGIA_0_T_7_56')
    const subtransporte = await parsers.datosGobarAPI('452.2_TRANSPORTERTE_0_T_10_32')
 
  var post = {
    kpi,
  t: "Subsidios Económicos",
  st: "Energía y Transporte",
  sd: "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
   c: "<p>El subsidio es una ayuda extraordinaria por parte de la Administración Pública para estimular la demanda de un bien o proteger a un colectivo. En economía, los subsidios son ayuda que los poderes públicos otorgan a determinados ciudadanos, principalmente, con el fin de brindar acceso a los bienes y servicios básicos.</p>",
   fd: "datos.gob.ar",
   fdr: "https://datos.gob.ar/dataset/sspm-informe-mensual-ingresos-gastos-sector-publico-nacional-no-financiero-imig/archivo/sspm_452.3",
   fu: "MECON",
   fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
   frec: "Mensual", 
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  max: 250000,
  chart: {
    dates:subenergia,
    dimensions: [
      {
        label: "Transporte",
        data: subtransporte,
        color: "rgba(46,120,210,0.25)",

      },
      {
        label: "Energia",
        data: subenergia,
        color: "#2E78D2",

      },
]
}
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));


})()

