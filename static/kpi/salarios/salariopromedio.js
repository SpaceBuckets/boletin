module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "salariopromedio"
  const url = 'https://cdn.produccion.gob.ar/cdn-cep/datos-por-actividad/salarios/w-mean/w_mean_privado_total.csv'

 const payload = await parsers.datosGobarCSV(0,1,url)
  const post = {
    kpi,
  t: "Salario Promedio",
  st: "Remuneración imponible promedio de los trabajadores estables",
  sd: "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
   c: "<p>El salario promedio en Argentina se refiere al valor medio de los ingresos laborales de los trabajadores registrados en el país. El mismo es calculado por el Instituto Nacional de Estadísticas y Censos (INDEC) a través de la Encuesta Permanente de Hogares (EPH) y se actualiza trimestralmente.</p><p>El salario promedio se utiliza como indicador del nivel de ingresos de la población y su evolución a lo largo del tiempo. Este indicador es de especial interés para los sindicatos, empresas, y el gobierno, ya que puede influir en la toma de decisiones sobre políticas económicas y laborales.</p><p>Cabe destacar que el salario promedio puede variar significativamente según la región geográfica, sector económico, nivel de educación y experiencia laboral. Además, es importante tener en cuenta que existen diferencias entre el salario bruto y el salario neto, debido a las deducciones fiscales y de seguridad social que se aplican a los trabajadores.</p>",
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
        
        label: "Salario Promedio",
        data: payload,
        color: "rgba(46,120,210,1)",
        
        
      },
]
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()