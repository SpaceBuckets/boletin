module.exports = (async function() {
  
  const parsers = require("@parsers");
  const kpi = "asalariados"
const payload = await parsers.datosGobarAPI('151.1_AARIADOTAC_2012_M_26')
  const post = {
    kpi,
    t: "Asalariados",
    st: "Sector Público y Privado",
    sd: "Trabajadores registrados según modalidad ocupacional en valores mensuales.",
    c: "<p>En Argentina, el término 'asalariado' se refiere a una persona que recibe un salario fijo por su trabajo como empleado en relación de dependencia en una empresa, organización o institución. Los asalariados son una parte importante de la fuerza laboral en Argentina y están cubiertos por la legislación laboral del país, que establece regulaciones sobre sus derechos y obligaciones, así como los deberes y responsabilidades de los empleadores.</p><p>Los asalariados pueden estar empleados en diferentes sectores económicos, incluyendo la industria, el comercio, los servicios, la administración pública, entre otros. También pueden desempeñar diferentes roles en sus trabajos, como operarios, administrativos, profesionales, técnicos, gerentes, entre otros.</p><p>Es importante destacar que los asalariados tienen derecho a ciertos beneficios y protecciones laborales, como el pago de salarios, horas extras, vacaciones, aguinaldo, licencias, seguro de salud y pensiones, entre otros. Además, el gobierno de Argentina establece un salario mínimo para los trabajadores, que es revisado periódicamente para garantizar su actualización y ajuste a la inflación.</p>",
    fd: "datos.gob.ar",
    fdr: "https://datos.gob.ar/dataset/sspm-trabajadores-registrados-segun-modalidad-ocupacional-principal-base-2012/archivo/sspm_151.1",
    fu: "MECON",
    fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
      frec: parsers.detectDataType(payload), 
      fruc: parsers.detectAggregationFunction(payload),
    u: new Date().toLocaleDateString('en-CA').split('/').join('-'), 
    d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",

    dimensions: [
        {
    label: "Empleo Privado",
          data: payload,
          
        },
        {
    label: "Empleo Publico",
          data: await parsers.datosGobarAPI('151.1_AARIADODAD_2012_M_31'),
          color: "rgba(46,120,210,0.25)",
        },
      ],
  }

  parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);

})()
