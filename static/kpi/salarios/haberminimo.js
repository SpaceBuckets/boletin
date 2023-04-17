module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "haberminimo"
const payload = await parsers.datosGobarAPI('58.1_MP_0_M_24')
  const post = {
    kpi,
  t: "Haber Minimo Jubilatorio",
  st: "Remuneración imponible promedio de los trabajadores estables",
  sd: "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  c: "<p>El haber mínimo jubilatorio en Argentina es el monto mínimo que reciben los jubilados y pensionados como ingreso mensual por parte del sistema de seguridad social. Este monto es establecido por el Estado nacional a través del Ministerio de Trabajo, Empleo y Seguridad Social y actualmente es actualizado dos veces al año, en marzo y septiembre, en función de la evolución de la inflación y los ingresos fiscales del sistema previsional.</p><p>El monto puede variar en función de la antigüedad y el aporte previsional del trabajador, ya que el sistema previsional argentino se rige por un régimen de reparto, en el que las contribuciones de los trabajadores activos financian los beneficios de los jubilados y pensionados. Además del haber mínimo, existen otros montos de jubilaciones y pensiones, que se calculan en función de los aportes realizados por los trabajadores a lo largo de su vida laboral y los años de servicio.</p><p>El haber mínimo jubilatorio es un indicador importante de la situación económica de los jubilados y pensionados en Argentina, ya que muchas personas dependen exclusivamente de este ingreso para su subsistencia y enfrentan dificultades para cubrir sus necesidades básicas debido a la alta inflación y la depreciación de la moneda. La mejora del poder adquisitivo de los jubilados y pensionados es un objetivo importante de las políticas públicas en el país.</p>",
  fd: "datos.gob.ar",
  fdr: "https://datos.gob.ar/dataset/sspm-haber-minimo-jubilatorio-pesos-corrientes/archivo/sspm_58.1",
  fu: "MECON",
  fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
    frec: parsers.detectDataType(payload), 
      fruc: parsers.detectAggregationFunction(payload),
    u: new Date().toLocaleDateString('en-CA').split('/').join('-'),  
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  dimensions: [
      {
        
        label: "Haber Minimo Jubilatorio",
        data: payload,
        color: "rgba(46,120,210,1)",
      },
]
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()