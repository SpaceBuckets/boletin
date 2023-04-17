module.exports = (async function() {

  const parsers = require("@parsers");
  const kpi = "ipicammesa"
  const url = 'https://datos.produccion.gob.ar/dataset/2c91f1eb-1eff-47e2-9122-42275e15ad9d/resource/9f5150e2-7de5-4233-b906-a52d26c625c6/download/ipi-cammesa.csv'
  const payload = await parsers.datosGobarCSV(0,1,url)
  const post = {
    kpi,
    t: "IPI CAMMESA",
    st: "Índice Adelantado de Producción Industrial",
    sd: "Este indicador incluye un exhaustivo relevamiento de todas las <em>actividades económicas que conforman la industria manufacturera</em>, con cobertura para el total del país.",
    c: "<p>Este indice se basa en los datos diarios de consumo de energía eléctrica (en MWh) de los Grandes Usuarios Mayores, que se componen de 417 establecimientos productivos del país, de los cuales 289 pertenecen a la industria manufacturera.</p><p>El IPI CAMMESA se construye a partir de los datos de consumo de energía eléctrica de las distribuidoras de energía en el país, y se expresa en términos de índice base 2006. El índice es elaborado por la Compañía Administradora del Mercado Mayorista Eléctrico (CAMMESA) y se publica mensualmente.</p><p>El IPI CAMMESA es un indicador importante porque el consumo de energía eléctrica es un insumo clave para la producción y los servicios en muchos sectores de la economía, y se utiliza como una señal de la actividad económica. Además, el índice también puede ser utilizado para monitorear el suministro y la demanda de energía eléctrica en el país, lo que puede ser importante para la planificación del sector eléctrico.</p><p>Aunque la producción eléctrica es una variable clave para la actividad industrial en general, el IPI CAMMESA no mide directamente la evolución de la producción industrial en su conjunto. En cambio, puede utilizarse como un indicador adelantado o complementario del IPI del INDEC, ya que la producción eléctrica está relacionada con la actividad de muchos sectores industriales y puede reflejar la evolución de la economía en general.</p>",
    fd: "datos.gob.ar",
    fdr: "http://datos.produccion.gob.ar/dataset/2c91f1eb-1eff-47e2-9122-42275e15ad9d/resource/9f5150e2-7de5-4233-b906-a52d26c625c6/download/ipi-cammesa.csv",
    fu: "CEP XXI",
    fur: "https://www.argentina.gob.ar/produccion/cep/estudios-coyuntura",
    frec: parsers.detectDataType(payload), 
        fruc: parsers.detectAggregationFunction(payload),
    u: new Date().toLocaleDateString('en-CA').split('/').join('-'),  
    d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
    dimensions: [
        { 
          label: "IPI CAMMESA",
          data: payload,
          
        },
      ]
  }

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);

})()
