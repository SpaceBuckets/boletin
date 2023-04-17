module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "ripte"
const payload = await parsers.datosGobarAPI('158.1_REPTE_0_0_5')
  const post = {
    kpi,
    t: "RIPTE",
    st: "Remuneración imponible promedio de los trabajadores estables",
    sd: "",
    c: "<p>El RIPTE (Remuneración Imponible Promedio de los Trabajadores Estables) es un indicador que mide la evolución de los salarios formales en Argentina. Este indicador se utiliza para ajustar los haberes de los jubilados y pensionados del Sistema Integrado Previsional Argentino (SIPA), así como también para calcular las indemnizaciones por despido y las prestaciones por accidentes laborales.</p><p>El RIPTE se calcula mensualmente por la Secretaría de Seguridad Social del Ministerio de Trabajo, Empleo y Seguridad Social, tomando en cuenta las remuneraciones imponibles (es decir, aquellas que están sujetas a aportes y contribuciones) de los trabajadores registrados del sector privado que hayan trabajado al menos seis meses en el año inmediato anterior. De esta manera, el RIPTE refleja el comportamiento de los salarios de los trabajadores formales que tienen cierta estabilidad laboral.</p><p>El uso del RIPTE para ajustar los haberes jubilatorios y pensionarios se implementó a partir de la Ley de Movilidad Jubilatoria de 2017, que estableció un mecanismo de ajuste semestral que combina en partes iguales el RIPTE y la variación de la inflación. Este mecanismo busca garantizar que los haberes de los jubilados y pensionados mantengan su poder adquisitivo en el tiempo, teniendo en cuenta la evolución de los salarios y los precios de la economía.</p>",
    fd: "datos.gob.ar",
    fdr: "https://datos.gob.ar/dataset/sspm-remuneracion-imponible-promedio-trabajadores-estables-ripte/archivo/sspm_158.1",
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