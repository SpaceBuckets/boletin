module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "polingresos"
     
  const asignaciones = await parsers.datosGobarAPI('186.1_ASIGNACIONRES_0_0_23');
  const argentinatrabaja = await parsers.datosGobarAPI('186.1_ARGENTINA_AJA_0_0_17 ');
  const auh = await parsers.datosGobarAPI('186.1_ASIGNACIONIAL_0_0_43');
  const becas = await parsers.datosGobarAPI('186.1_BECASCAS_0_0_5');
  const jovenestrabajo = await parsers.datosGobarAPI('186.1_JOVENES_MAAJO_0_0_25');
  const jubilaciones = await parsers.datosGobarAPI('186.1_JUBILACIONINO_0_0_53');
  const jubilacionesotros = await parsers.datosGobarAPI('186.1_JUBILACIONLES_0_0_49');
  const otras = await parsers.datosGobarAPI('186.1_OTRAS_POLISOC_0_0_52');
  const pensiones = await parsers.datosGobarAPI('186.1_PENSIONES_VAS_0_0_26');
  const jefasyjefes = await parsers.datosGobarAPI('186.1_PROGRAMA_JDOS_0_0_38');
  const familias = await parsers.datosGobarAPI('186.1_PLAN_FAMILIAL_0_0_30');
  const progresar = await parsers.datosGobarAPI('186.1_PROGRAMA_RINA_0_0_39');
  const puam = await parsers.datosGobarAPI('186.1_PENSION_UNYOR_0_0_30');
  const segcapacitacion = await parsers.datosGobarAPI('186.1_SEGURO_CAPLEO_0_0_26');
  const segdesempleo = await parsers.datosGobarAPI('186.1_SEGURO_DESLEO_0_0_16');
  const segdesempleootros = await parsers.datosGobarAPI('186.1_SEGURO_DESTRE_0_0_24');
  const proyectoscomunitarios = await parsers.datosGobarAPI('186.1_PROYECTOS_IOS_0_0_34');
  const total = await parsers.datosGobarAPI('186.1_TOTAL_POLISOS_0_0_23');

  var post = {
    kpi,
  t: "Política de Ingresos",
  st: "En Millones de Pesos",
  sd: "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  c: "<p>Argentina cuenta con varios programas de transferencias sociales que buscan reducir la pobreza y la desigualdad en el país. A continuación, se describen algunos de los más importantes:</p><p>Asignación Universal por Hijo (AUH): es un programa de transferencias monetarias que se otorga a las familias con hijos menores de 18 años que se encuentran en situación de vulnerabilidad económica. El monto de la asignación es variable y depende de la cantidad de hijos que tenga la familia, pero en general busca garantizar un ingreso mínimo a las mismas.</p><p>Programa Hogar: es un programa que busca subsidiar la compra de garrafas de gas para aquellas personas que no están conectadas a la red de gas natural. El subsidio se otorga de manera directa al beneficiario del programa.</p><p>Progresar: es un programa destinado a jóvenes entre 18 y 24 años que no trabajan o tienen un trabajo informal y no estudian. El programa les brinda una ayuda económica para que puedan terminar sus estudios secundarios y también para que puedan iniciar estudios universitarios o terciarios.</p><p>Tarifa social de servicios públicos: es un programa que busca subsidiar las tarifas de luz, gas y agua para aquellos hogares que se encuentran en situación de vulnerabilidad económica. El subsidio se aplica sobre la tarifa correspondiente y varía según cada caso.</p><p>Programa de alimentación escolar: es un programa que busca garantizar la alimentación de los niños y jóvenes en edad escolar que asisten a establecimientos educativos de gestión pública. Se les brinda un desayuno, almuerzo o merienda según corresponda.</p>",
  fd: "datos.gob.ar",
  fdr: "https:/datos.gob.ar/sv.dataset/sspm-gasto-publico-gobierno-nacional-politica-ingresos/archivo/sspm_1186.1",
  fu: "MECON",
  fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
  frec: "Mensual", 
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  min: 0,
  chart: {
    dates:total,
    dimensions: [
      {
        label: "Total",
        data: total,
        color: "rgba(46,120,210,1)",

      },
      {
        label: "Argentina Trabaja",
        data: argentinatrabaja,
        color: "rgba(46,120,210,0.25)",

      },
      {
        label: "Asignaciones",
        data: asignaciones,
        color: "rgba(46,120,210,0.25)",

      },
      {
        label: "AUH",
        data: auh,
        color: "rgba(46,120,210,0.25)",

      },
      {
        label: "Becas",
        data: becas,
        color: "rgba(46,120,210,0.25)",

      },
      {
        label: "Familias",
        data: familias,
        color: "rgba(46,120,210,0.25)",

      },
      {
        label: "Jefas y Jefes de Hogar",
        data: jefasyjefes,
        color: "rgba(46,120,210,0.25)",

      },
      {
        label: "Jovenes Trabajo",
        data: jovenestrabajo,
        color: "rgba(46,120,210,0.25)",

      },
      {
        label: "Jubilaciones",
        data: jubilaciones,
        color: "rgba(46,120,210,0.25)",

      },
      {
        label: "Jubilaciones (no SIPA)",
        data: jubilacionesotros,
        color: "rgba(46,120,210,0.25)",

      },
      {
        label: "Otras",
        data: otras,
        color: "rgba(46,120,210,0.25)",

      },
      {
        label: "Pensiones",
        data: pensiones,
        color: "rgba(46,120,210,0.25)",

      },
      {
        label: "Progresar",
        data: progresar,
        color: "rgba(46,120,210,0.25)",

      },
      {
        label: "Proyectos Comunitarios",
        data: proyectoscomunitarios,
        color: "rgba(46,120,210,0.25)",

      },
      {
        label: "PUAM",
        data: puam,
        color: "rgba(46,120,210,0.25)",

      },
      {
        label: "Seguro Capacitacion",
        data: segcapacitacion,
        color: "rgba(46,120,210,0.25)",

      },
      {
        label: "Seguro Desempleo",
        data: segdesempleo,
        color: "rgba(46,120,210,0.25)",

      },
      {
        label: "Seguro Desempleo (otros)",
        data: segdesempleootros,
        color: "rgba(46,120,210,0.25)",

      },
]
}
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));

})()