module.exports = (async function() {

  const parsers = require("@parsers");
  const kpi = "ipi"
  const payload = await parsers.datosGobarAPI('453.1_SERIE_DESEADA_0_0_24_58')
  const post = {
    kpi,
    t: "IPI",
    st: "Índice de Producción Industrial Manufacturero",
    sd: "Este indicador incluye un exhaustivo relevamiento de todas las <em>actividades económicas que conforman la industria manufacturera</em>, con cobertura para el total del país.",
    c: "<p>El Índice de Producción Industrial Manufacturero (IPI) se calcula a partir de las variables de producción, ventas, utilización de insumos, consumo, cantidad de horas trabajadas del personal y ventas a precios corrientes.</p>",
    fd: "datos.gob.ar",
    fdr: "https://datos.gob.ar/dataset/sspm-indice-actividad-economica-manufacturero-ipi/archivo/sspm_453.1",
    fu: "INDEC",
    fur: "https://www.indec.gob.ar/indec/web/Nivel4-Tema-3-6-14",
    frec: parsers.detectDataType(payload), 
        fruc: parsers.detectAggregationFunction(payload),
    u: new Date().toLocaleDateString('en-CA').split('/').join('-'),
    d: "<p>El Índice de Producción Industrial Manufacturero (IPI) es un indicador económico que mide la evolución de la producción del sector manufacturero en Argentina. Es elaborado y publicado por el Instituto Nacional de Estadística y Censos (INDEC).</p><p>El IPI se construye mediante la ponderación de distintas ramas de la actividad manufacturera, de acuerdo a su importancia en el conjunto de la actividad industrial. En este sentido, el indicador se compone de una canasta de productos representativos de la actividad manufacturera, cuyo peso en la canasta está determinado por el valor agregado que aportan a la producción manufacturera total.</p><p>El IPI se expresa en términos de índice base 2004, y se calcula mensualmente, permitiendo realizar un seguimiento de la evolución de la producción manufacturera en el corto plazo. Además, el INDEC también publica una serie de datos desestacionalizados, que permite analizar la tendencia subyacente de la producción manufacturera.</p><p>El Índice de Producción Industrial Manufacturero (IPI) es un indicador clave para el análisis de la evolución del sector manufacturero en Argentina, y es utilizado por analistas económicos, empresas y autoridades gubernamentales para tomar decisiones de inversión, planificación y políticas públicas.</p>",
    min: 60,
    max: 160,
    cat: "Actividad Económica",
    catslug: "actividad-economica",  
    dimensions: [
        {
          label: "Desestacionalizado",
          data: payload,
           
        },
        {
          label: "Tendencia",
          data: await parsers.datosGobarAPI('453.1_SERIE_TENDCLO_0_0_21_61'),
          color: "#7a49a580", 
        },
        {
          label: "Base",
          data: await parsers.datosGobarAPI('453.1_SERIE_ORIGNAL_0_0_14_46'),
          color: "rgba(46,120,210,0.25)",
        },
      ]
  }

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);

})()
