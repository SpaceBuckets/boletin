module.exports = (async function() {
  const parsers = require("@parsers");
  const kpi = "acero"
  const payload = await parsers.datosGobarAPI('359.3_HIERRO_PRITAL__21');
 
  const post = {
    kpi,
    t: "Producción de Acero",
    st: "En Toneladas",
    sd: "",
    c: "<p>El indicador de Producción de Acero de la Cámara Argentina del Acero (CAA) es un índice que mide la cantidad de acero producido por las empresas asociadas a la CAA. La CAA es una organización que representa a las empresas productoras de acero en Argentina y su índice de producción de acero es una medida importante de la actividad del sector siderúrgico en el país.</p><p>El indicador de producción de acero de la CAA se calcula a través de una encuesta mensual realizada a las empresas asociadas a la cámara. En esta encuesta, se recopila información sobre la cantidad de acero producido por cada empresa durante el mes anterior. La información recopilada se utiliza para calcular la producción total de acero de la CAA.</p><p>El indicador de producción de acero de la CAA es importante porque el acero es un insumo clave para muchos sectores de la economía, como la construcción, la fabricación de maquinaria y equipos, y la industria automotriz. Además, la producción de acero también puede ser un indicador temprano de la actividad económica en general, ya que la demanda de acero a menudo refleja la salud de otros sectores.</p>",
    fd: "datos.gob.ar",
    fdr: "https://infra.datos.gob.ar/catalog/sspm/dataset/359/distribution/359.3/download/datos-historicos-de-la-industria-siderurgica-datos-mensulaes.csv",
    fu: "CAA",
    fur: "https://www.acero.org.ar/estadisticas-locales/",
    frec: parsers.detectDataType(payload), 
        fruc: parsers.detectAggregationFunction(payload),
    u: new Date().toLocaleDateString('en-CA').split('/').join('-'),
    d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
    max: 500,
    dimensions: [
        {
          
          label: "Producción de Acero",
          data: payload,
          color: "rgba(46,120,210,1)",
        },
      ],
  }
  
  parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);
  
})()