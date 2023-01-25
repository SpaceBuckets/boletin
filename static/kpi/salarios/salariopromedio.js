module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "salariopromedio"
  const kpidata = {
    url: 'https://cdn.produccion.gob.ar/cdn-cep/datos-por-actividad/salarios/w-mean/w_mean_privado_total.csv',
     date: 0,
    items: {
      d: 1,
  
    }
  }
  
  const payload = await parsers.datosGobarCSV(kpidata,kpi)
 
  var post = {
    kpi,
  t: "Salario Promedio",
  st: "Remuneración imponible promedio de los trabajadores estables",
  sd: "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
   c: "<p>De acuerdo con la Ley de Contrato de Trabajo, el salario mínimo vital y móvil se define como 'la menor remuneración que debe percibir en efectivo el trabajador sin cargas de familia, en su jornada legal de trabajo, de modo que le asegure alimentación adecuada, vivienda digna, educación, vestuario, asistencia sanitaria, transporte y esparcimiento, vacaciones y previsión'.</p><p>En Argentina, el Salario Mínimo Vital y Móvil (SMVM) lo fija el Consejo Nacional de Empleo, la Productividad y el Salario, integrado por representantes del sector sindical, del empresariado y del Poder Ejecutivo, quienes periódicamente deben evaluar la situación social y reajustar el valor de este salario.</p>",
   fd: "datos.gob.ar",
   fdr: "https://datos.gob.ar/no/dataset/sspm-salario-minimo-vital-movil-pesos-corrientes/archivo/sspm_57.1",
   fu: "MECON",
   fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
   frec: "Mensual", 
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  cat: "Salarios",
  catslug: "salarios",
   chartdata: {
    labels: payload.dates,
    datasets: [
      {
        backgroundColor: "rgba(46,120,210,0.05)",
        label: "Salario Promedio",
        data: payload.d,
        borderColor: "rgba(46,120,210,1)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
]
}
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));


})()