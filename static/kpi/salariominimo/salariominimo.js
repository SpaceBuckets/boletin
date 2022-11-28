module.exports = (async function() {

  const parsers = require("../../parsers");
const generatedTime = require(`../../generatedTime.json`)
  const kpi = "salariominimo"
 
  await parsers.datosGobarAPI(kpi, "salariominimo", '57.1_SMVMM_0_M_34')

  var post = {
    kpi,
  t: "Salario Minimo, Vital y Movil",
  st: "Remuneración imponible promedio de los trabajadores estables",
  sd: "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
   c: "<p>De acuerdo con la Ley de Contrato de Trabajo, el salario mínimo vital y móvil se define como 'la menor remuneración que debe percibir en efectivo el trabajador sin cargas de familia, en su jornada legal de trabajo, de modo que le asegure alimentación adecuada, vivienda digna, educación, vestuario, asistencia sanitaria, transporte y esparcimiento, vacaciones y previsión'.</p><p>En Argentina, el Salario Mínimo Vital y Móvil (SMVM) lo fija el Consejo Nacional de Empleo, la Productividad y el Salario, integrado por representantes del sector sindical, del empresariado y del Poder Ejecutivo, quienes periódicamente deben evaluar la situación social y reajustar el valor de este salario.</p>",
  f: "https://www.indec.gob.ar/ftp/cuadros/economia/metodologia_emae_ago_16.pdf",
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  cat: "Salarios",
  max: 80000,
  chartdata: {
    labels: require(`../../data/${generatedTime}/${kpi}/salariominimo/dates.json`),
    datasets: [
      {
        backgroundColor: "rgba(46,120,210,0.05)",
        label: "RIPTE",
        data: require(`../../data/${generatedTime}/${kpi}/salariominimo/d.json`),
        borderColor: "rgba(46,120,210,1)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
]
}
}

parsers.writeFileSyncRecursive(`./static/data/${generatedTime}/${kpi}/${kpi}.json`, JSON.stringify(post));

})()