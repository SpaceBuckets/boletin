module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "tasasinternacionales"
 
 
  
      const fed = await parsers.datosGobarAPI('131.1_FET_0_0_12&start_date=1999-01-01')
    const euro = await parsers.datosGobarAPI('131.1_MZT_0_0_18&start_date=1999-01-01')
    const brasil = await parsers.datosGobarAPI('131.1_SBT_0_0_17&start_date=1999-01-01')
    const inglaterra = await parsers.datosGobarAPI('131.1_RIT_0_0_20&start_date=1999-01-01')
    const japon = await parsers.datosGobarAPI('131.1_OIRJT_0_0_34&start_date=1999-01-01')
 
  var post = {
    kpi,
  t: "Tasas Internacionales",
  st: "Tasa de Política Monetaria",
  sd: "La tasa de referencia de la política monetaria es la de Letras de Liquidez (LELIQ). La tasa de política monetaria indica el sesgo de la política que adopta la autoridad monetaria para alcanzar sus metas de inflación.",
  c: "",
  fd: "datos.gob.ar",
  fdr: "https://datos.gob.ar/tr/dataset/sspm-principales-tasas-interes-referencia/archivo/sspm_131.1",
  fu: "MECON",
  fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
  frec: "Mensual", 
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  max: 30,

  chart: {
    dates:fed,
    dimensions: [
      {
        fillColor: "rgba(46,120,210,0.0)",
        label: "Tasa FED",
        data: fed,
        color: "rgba(46,120,210,1)",
        
        
      },
      {
        fillColor: "rgba(46,120,210,0.0)",
        label: "Tasa Euro",
        data: euro,
        color: "rgba(46,120,210,0.25)",
        
        
      },
      /*     {
            fillColor: "rgba(46,120,210,0.0)",
            label: "Tasa Japon",
            data: require(`../../data/${kpi}/japon/d.json`),
            color: "rgba(46,120,210,0.25)",
            
            
          }, */
      {
        fillColor: "rgba(46,120,210,0.0)",
        label: "Tasa Inglaterra",
        data: inglaterra,
        color: "rgba(46,120,210,0.25)",
        
        
      },
      {
        fillColor: "rgba(46,120,210,0.0)",
        label: "Tasa Brasil",
        data: brasil,
        color: "rgba(46,120,210,0.25)",
        
        
      },
]
}
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));


})()