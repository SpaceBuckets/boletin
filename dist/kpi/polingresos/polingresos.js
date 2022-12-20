module.exports = (async function() {

  const parsers = require("../../parsers");
const generatedTime = require(`../../generatedTime.json`)
  const kpi = "polingresos"
 
  const kpidata = {
    asignaciones: '186.3_ASIGNACIONRES_0_0_23',
    argentinatrabaja: '186.3_ARGENTINA_AJA_0_0_17',
    auh: '186.3_ASIGNACIONIAL_0_0_43',
    becas: '186.3_BECASCAS_0_0_5',
    jovenestrabajo: '186.3_JOVENES_MAAJO_0_0_25',
    jubilaciones: '186.3_JUBILACIONINO_0_0_53',
    jubilacionesotros: '186.3_JUBILACIONLES_0_0_49',
    otras: '186.3_OTRAS_POLISOC_0_0_52',
    pensiones: '186.3_PENSIONES_VAS_0_0_26',
    jefasyjefes: '186.3_PROGRAMA_JDOS_0_0_38',
    familias: '186.3_PLAN_FAMILIAL_0_0_30',
    progresar: '186.3_PROGRAMA_RINA_0_0_39',
    puam: '186.3_PENSION_UNYOR_0_0_30',
    segcapacitacion: '186.3_SEGURO_CAPLEO_0_0_26',
    segdesempleo: '186.3_SEGURO_DESLEO_0_0_16',
    segdesempleootros: '186.3_SEGURO_DESTRE_0_0_24',
    proyectoscomunitarios: '186.3_PROYECTOS_IOS_0_0_34',
    total: '186.3_TOTAL_POLISOS_0_0_23'
  }
  try {
  for (let [key, value] of Object.entries(kpidata)) {
    await parsers.datosGobarAPI(kpi, key, value)
  }

  var post = {
    kpi,
  t: "Política de Ingresos",
  st: "En Millones de Pesos",
  sd: "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  c: "<p>La política de ingresos suele definirse como una intervención deliberada del gobierno en el proceso de formación de los precios del trabajo y de los productos con el fin de evitar que las rentas monetarias antes de impuestos aumenten más rápidamente que el crecimiento de la renta nacional en términos reales.</p>",
  fd: "datos.gob.ar",
  fdr: "https://datos.gob.ar/sv/dataset/sspm-gasto-publico-gobierno-nacional-politica-ingresos/archivo/sspm_186.3",
  fu: "MECON",
  fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
  frec: "Mensual", 
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  cat: "Cuentas Nacionales",
  min: 0,
  chartdata: {
    labels: require(`../../data/${generatedTime}/${kpi}/total/dates.json`),
    datasets: [
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "Total",
        data: require(`../../data/${generatedTime}/${kpi}/total/d.json`),
        borderColor: "rgba(46,120,210,1)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "Argentina Trabaja",
        data: require(`../../data/${generatedTime}/${kpi}/argentinatrabaja/d.json`),
        borderColor: "rgba(46,120,210,0.25)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "Asignaciones",
        data: require(`../../data/${generatedTime}/${kpi}/asignaciones/d.json`),
        borderColor: "rgba(46,120,210,0.25)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "AUH",
        data: require(`../../data/${generatedTime}/${kpi}/auh/d.json`),
        borderColor: "rgba(46,120,210,0.25)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "Becas",
        data: require(`../../data/${generatedTime}/${kpi}/becas/d.json`),
        borderColor: "rgba(46,120,210,0.25)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "Familias",
        data: require(`../../data/${generatedTime}/${kpi}/familias/d.json`),
        borderColor: "rgba(46,120,210,0.25)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "Jefas y Jefes de Hogar",
        data: require(`../../data/${generatedTime}/${kpi}/jefasyjefes/d.json`),
        borderColor: "rgba(46,120,210,0.25)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "Jovenes Trabajo",
        data: require(`../../data/${generatedTime}/${kpi}/jovenestrabajo/d.json`),
        borderColor: "rgba(46,120,210,0.25)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "Jubilaciones",
        data: require(`../../data/${generatedTime}/${kpi}/jubilaciones/d.json`),
        borderColor: "rgba(46,120,210,0.25)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "Jubilaciones (no SIPA)",
        data: require(`../../data/${generatedTime}/${kpi}/jubilacionesotros/d.json`),
        borderColor: "rgba(46,120,210,0.25)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "Otras",
        data: require(`../../data/${generatedTime}/${kpi}/otras/d.json`),
        borderColor: "rgba(46,120,210,0.25)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "Pensiones",
        data: require(`../../data/${generatedTime}/${kpi}/pensiones/d.json`),
        borderColor: "rgba(46,120,210,0.25)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "Progresar",
        data: require(`../../data/${generatedTime}/${kpi}/progresar/d.json`),
        borderColor: "rgba(46,120,210,0.25)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "Proyectos Comunitarios",
        data: require(`../../data/${generatedTime}/${kpi}/proyectoscomunitarios/d.json`),
        borderColor: "rgba(46,120,210,0.25)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "PUAM",
        data: require(`../../data/${generatedTime}/${kpi}/puam/d.json`),
        borderColor: "rgba(46,120,210,0.25)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "Seguro Capacitacion",
        data: require(`../../data/${generatedTime}/${kpi}/segcapacitacion/d.json`),
        borderColor: "rgba(46,120,210,0.25)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "Seguro Desempleo",
        data: require(`../../data/${generatedTime}/${kpi}/segdesempleo/d.json`),
        borderColor: "rgba(46,120,210,0.25)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "Seguro Desempleo (otros)",
        data: require(`../../data/${generatedTime}/${kpi}/segdesempleootros/d.json`),
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