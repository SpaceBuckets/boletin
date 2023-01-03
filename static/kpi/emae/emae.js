module.exports = (async function() {

  const parsers = require("../../parsers");
const generatedTime = require(`../../generatedTime.json`)
  const kpi = "emae"
  const emae = {
    estacional: '143.3_NO_PR_2004_A_31',
    tendencia: '143.3_NO_PR_2004_A_28',
    base: '143.3_NO_PR_2004_A_21',
    /*   a: '11.3_ISOM_2004_M_39',
      b: '11.3_VIPAA_2004_M_5',
      c: '11.3_ISD_2004_M_26',
      d: '11.3_VMASD_2004_M_23',
      e: '11.3_ITC_2004_M_21',
      f: '11.3_VMATC_2004_M_12',
      g: '11.3_AGCS_2004_M_41',
      h: '11.3_P_2004_M_20',
      i: '11.3_EMC_2004_M_25',
      j: '11.3_IM_2004_M_25',
      k: '11.3_SEGA_2004_M_48',
      l: '11.3_C_2004_M_60',
      m: '11.3_CMMR_2004_M_10',
      n: '11.3_HR_2004_M_24',
      o: '11.3_TAC_2004_M_60',   */
  }
  try {
  for (let [key, value] of Object.entries(emae)) {
    await parsers.datosGobarAPI(kpi, key, value)
  }

  var post = {
    kpi,
  "t": "EMAE",
  "st": "Estimador Mensual de Actividad Económica",
  "sd": "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  "min": 80,
  "max": 180,
  "c": "<p><strong>El Estimador Mensual de Actividad Económica (EMAE) es un indicador de la evolución del PIB</strong> a precios constantes de 2004 que se difunde mensualmente de acuerdo al <a href='/'>calendario de difusión del INDEC</a>. Incluye la serie original (número índice y la variación porcentual respecto al mismo mes del año anterior), la serie desestacionalizada y la tendencia–ciclo (número índice y variación respecto al mes inmediato anterior).</p>",
  fd: "API (datos.gob.ar)",
  fdr: "https://datos.gob.ar/it/dataset/sspm-estimador-mensual-actividad-economica-emae-base-2004/archivo/sspm_143.3",
  fu: "INDEC",
  fur: "https://www.indec.gob.ar/indec/web/Nivel4-Tema-3-9-48",
  frec: "Mensual", 
  "d": "El Estimador Mensual de Actividad Económica (EMAE) refleja la <strong>evolución mensual de la actividad económica</strong> del conjunto de los sectores productivos a nivel nacional.",
  "cat": "Actividad Económica",
  chartdata: {
    labels: require(`../../data/${generatedTime}/${kpi}/base/dates.json`),
    datasets: [
      {
        fill: false,
        label: "Desestacionalizado",
        data: require(`../../data/${generatedTime}/${kpi}/estacional/d.json`),
        borderColor: "#2E78D2",
        pointBackgroundColor: "#2E78D2",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        fill: false,
        label: "Tendencia",
        data: require(`../../data/${generatedTime}/${kpi}/tendencia/d.json`),
        borderColor: "#7a49a580",
        pointBackgroundColor: "#7a49a580",
        pointRadius: 0,
        borderWidth: 1,
      },
      {
        fill: false,
        label: "Base",
        data: require(`../../data/${generatedTime}/${kpi}/base/d.json`),
        borderColor: "rgba(46,120,210,0.25)",
        pointBackgroundColor: "rgba(46,120,210,0.25)",
        pointRadius: 0,
        borderWidth: 1,
      },
]
}
}

parsers.writeFileSyncRecursive(`./static/data/${generatedTime}/${kpi}/${kpi}.json`, JSON.stringify(post));

} catch (error) {
  console.log('\x1b[41m', '\x1b[37m',`✕ [${kpi}] failed to fetch!` ,'\x1b[0m');
}
})()

