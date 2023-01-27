module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "tasasinternacionales"
 
 
  
      const fed = await parsers.datosGobarAPI(kpi, 'fed', '131.1_FET_0_0_12&start_date=1999-01-01')
    const euro = await parsers.datosGobarAPI(kpi, 'euro', '131.1_MZT_0_0_18&start_date=1999-01-01')
    const brasil = await parsers.datosGobarAPI(kpi, 'brasil', '131.1_SBT_0_0_17&start_date=1999-01-01')
    const inglaterra = await parsers.datosGobarAPI(kpi, 'inglaterra', '131.1_RIT_0_0_20&start_date=1999-01-01')
    const japon = await parsers.datosGobarAPI(kpi, 'japon', '131.1_OIRJT_0_0_34&start_date=1999-01-01')
 
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

  chartdata: {
    labels: fed.dates,
    datasets: [
      {
        backgroundColor: "rgba(46,120,210,0.0)",
        label: "Tasa FED",
        data: fed.d,
        borderColor: "rgba(46,120,210,1)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        backgroundColor: "rgba(46,120,210,0.0)",
        label: "Tasa Euro",
        data: euro.d,
        borderColor: "rgba(46,120,210,0.25)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      /*     {
            backgroundColor: "rgba(46,120,210,0.0)",
            label: "Tasa Japon",
            data: require(`../../data/${kpi}/japon/d.json`),
            borderColor: "rgba(46,120,210,0.25)",
            pointRadius: 0,
            borderWidth: 1.5,
          }, */
      {
        backgroundColor: "rgba(46,120,210,0.0)",
        label: "Tasa Inglaterra",
        data: inglaterra.d,
        borderColor: "rgba(46,120,210,0.25)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        backgroundColor: "rgba(46,120,210,0.0)",
        label: "Tasa Brasil",
        data: brasil.d,
        borderColor: "rgba(46,120,210,0.25)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
]
}
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));


})()