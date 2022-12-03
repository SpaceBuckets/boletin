module.exports = (async function() {

  const parsers = require("../../parsers");
const generatedTime = require(`../../generatedTime.json`)
  const kpi = "tasasinternacionales"
 
  const kpidata = {
    fed: '131.1_FET_0_0_12&start_date=1999-01-01',
    euro: '131.1_MZT_0_0_18&start_date=1999-01-01',
    brasil: '131.1_SBT_0_0_17&start_date=1999-01-01',
    inglaterra: '131.1_RIT_0_0_20&start_date=1999-01-01',
    japon: '131.1_OIRJT_0_0_34&start_date=1999-01-01',
  }
  try {
  for (let [key, value] of Object.entries(kpidata)) {
    await parsers.datosGobarAPI(kpi, key, value)
  }
  var post = {
    kpi,
  t: "Tasas Internacionales",
  st: "Tasa de Política Monetaria",
  sd: "La tasa de referencia de la política monetaria es la de Letras de Liquidez (LELIQ). La tasa de política monetaria indica el sesgo de la política que adopta la autoridad monetaria para alcanzar sus metas de inflación.",
  c: "<p>La tasa de referencia de la política monetaria es la de Letras de Liquidez (LELIQ). La tasa de política monetaria indica el sesgo de la política que adopta la autoridad monetaria para alcanzar sus metas de inflación.</p><p>El BCRA calibrará las tasas de interés de manera de garantizar una mayor disponibilidad de instrumentos de ahorro que permitan a los argentinos obtener rendimientos acordes con la evolución de la inflación y del tipo de cambio, contribuyendo así a estabilizar las expectativas cambiarias, favoreciendo al proceso de desinflación. Dicho reacomodamiento de la estructura de tasas de interés se complementará con la continuidad de aquellas políticas de estímulo focalizado al crédito al sector privado.</p>",
  f: "https://www.indec.gob.ar/ftp/cuadros/economia/metodologia_emae_ago_16.pdf",
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  max: 30,
  cat: "Política Monetaria",
  chartdata: {
    labels: require(`../../data/${generatedTime}/${kpi}/fed/dates.json`),
    datasets: [
      {
        backgroundColor: "rgba(46,120,210,0.0)",
        label: "Tasa FED",
        data: require(`../../data/${generatedTime}/${kpi}/fed/d.json`),
        borderColor: "rgba(46,120,210,1)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        backgroundColor: "rgba(46,120,210,0.0)",
        label: "Tasa Euro",
        data: require(`../../data/${generatedTime}/${kpi}/euro/d.json`),
        borderColor: "rgba(46,120,210,0.25)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      /*     {
            backgroundColor: "rgba(46,120,210,0.0)",
            label: "Tasa Japon",
            data: require(`../../data/${generatedTime}/${kpi}/japon/d.json`),
            borderColor: "rgba(46,120,210,0.25)",
            pointRadius: 0,
            borderWidth: 1.5,
          }, */
      {
        backgroundColor: "rgba(46,120,210,0.0)",
        label: "Tasa Inglaterra",
        data: require(`../../data/${generatedTime}/${kpi}/inglaterra/d.json`),
        borderColor: "rgba(46,120,210,0.25)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        backgroundColor: "rgba(46,120,210,0.0)",
        label: "Tasa Brasil",
        data: require(`../../data/${generatedTime}/${kpi}/brasil/d.json`),
        borderColor: "rgba(46,120,210,0.25)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
]
}
}

parsers.writeFileSyncRecursive(`./static/data/${generatedTime}/${kpi}/${kpi}.json`, JSON.stringify(post));

} catch (error) {
  console.log('\x1b[41m', '\x1b[37m',`✕ [${kpi}] failed to fetch!` ,'\x1b[0m');
}
})()