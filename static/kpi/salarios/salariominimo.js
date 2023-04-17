module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "salariominimo"
const payload = await parsers.datosGobarAPI('57.1_SMVMM_0_M_34')
  const post = {
    kpi,
  t: "Salario Minimo, Vital y Movil",
  st: "Remuneración imponible promedio de los trabajadores estables",
  sd: "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
   c: "<p>El salario mínimo vital y móvil (SMVM) es el ingreso mínimo que deben percibir los trabajadores en relación de dependencia por su jornada laboral. Este salario es fijado por el gobierno en consulta con las organizaciones sindicales y empresarias y se actualiza periódicamente para mantener su poder adquisitivo.</p><p>En Argentina, el SMVM es establecido por el Consejo Nacional del Empleo, la Productividad y el Salario Mínimo, Vital y Móvil, que es un órgano tripartito integrado por representantes del gobierno, las organizaciones sindicales y empresarias. Este consejo se reúne periódicamente para discutir y acordar el monto del salario mínimo.</p><p>El salario mínimo es vital porque es la cantidad de ingresos mínima necesaria para cubrir las necesidades básicas de una persona y su familia, mientras que el móvil se refiere a que debe actualizarse regularmente para mantener su poder adquisitivo en el tiempo.</p>",
   fd: "datos.gob.ar",
   fdr: "https://datos.gob.ar/no/dataset/sspm-salario-minimo-vital-movil-pesos-corrientes/archivo/sspm_57.1",
   fu: "MECON",
   fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
     frec: parsers.detectDataType(payload), 
      fruc: parsers.detectAggregationFunction(payload),
    u: new Date().toLocaleDateString('en-CA').split('/').join('-'),  
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  dimensions: [
      {
        
        label: "RIPTE",
        data: payload,
        color: "rgba(46,120,210,1)",
      },
]
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()