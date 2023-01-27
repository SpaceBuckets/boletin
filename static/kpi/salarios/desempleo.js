module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "desempleo"
 
   
  
 
  const general = await parsers.datosGobarAPI(kpi, 'general', '45.2_ECTDT_0_T_33')
  const cuyo = await parsers.datosGobarAPI(kpi, 'cuyo', '45.2_ECTDTCU_0_T_38')
  const patagonia = await parsers.datosGobarAPI(kpi, 'patagonia', '45.2_ECTDTP_0_T_43')
  const gba = await parsers.datosGobarAPI(kpi, 'gba', '45.2_ECTDTG_0_T_37')
  const caba = await parsers.datosGobarAPI(kpi, 'caba', '45.2_ECTDTC_0_T_38')
  const pampeana = await parsers.datosGobarAPI(kpi, 'pampeana', '45.2_ECTDTRP_0_T_49')
  const noroeste = await parsers.datosGobarAPI(kpi, 'noroeste', '45.2_ECTDTNO_0_T_42')
  const nordeste = await parsers.datosGobarAPI(kpi, 'nordeste', '45.2_ECTDTNE_0_T_42')
 


  var post = {
    kpi,
  t: "Desempleo",
  st: "Porcentaje Sobre el Total de la Población",
  sd: "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  c: "<p>Desempleo, desocupación, paro1 (laboral) o cesantía, en el mercado de trabajo, hace referencia a la situación del ciudadano que carece de empleo y, por lo tanto, de salario. Por extensión, es la parte de la población en edad, condiciones y disposición de trabajar —población activa— que carece de un puesto de trabajo. Para referirse al número de parados de la población se utiliza la tasa de desempleo por país u otro territorio. La situación contraria al desempleo es el pleno empleo. Además de la población activa, en la que se incluye tanto a los que están trabajando como al conjunto de los parados o desempleados de un país, las sociedades cuentan con una población inactiva compuesta por aquellos miembros de la población que no están en disposición de trabajar, sea por estudios, edad, enfermedad o cualquier otra causa legalmente establecida. Para que exista el desempleo, se necesita que la persona desempleada desee trabajar​ y que acepte los salarios actuales que se están pagando en un momento dado. Las causas de esta situación son múltiples, produciendo como consecuencia distintos tipos de desempleo (cíclico, estructural, friccional y monetario). Además, existe el desempleo tecnológico, que se origina cuando hay cambios en los procesos productivos que hacen que las habilidades de los trabajadores no sean útiles.</p>",
  fd: "datos.gob.ar",
  fdr: "https://datos.gob.ar/dataset/sspm_45/archivo/sspm_45.2",
  fu: "MECON",
  fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
  frec: "Mensual", 
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",

  chartdata: {
    labels: general.dates,
    datasets: [
      {
        backgroundColor: 'rgba(46,120,210,0.0)',
        label: "General",
        data: general.d,
        borderColor: "#2E78D2",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        fill: false,
        label: "CABA",
        data: caba.d,
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        fill: false,
        label: "Cuyo",
        data: cuyo.d,
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        fill: false,
        label: "GBA",
        data: gba.d,
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        fill: false,
        label: "Nordeste",
        data: nordeste.d,
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        fill: false,
        label: "Noroeste",
        data: noroeste.d,
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        fill: false,
        label: "Pampeana",
        data: pampeana.d,
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        fill: false,
        label: "Patagonia",
        data: patagonia.d,
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1.5,
      },
]
}
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));


})()

