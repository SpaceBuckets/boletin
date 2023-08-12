module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "ipimundial"
  const url = 'https://datos.produccion.gob.ar/dataset/178d90a9-43df-408c-92f4-36ad14885f99/resource/88adb84d-622d-43d6-91fc-8f87f8bac91c/download/ipi-mundial.csv'
  const payload = await parsers.datosGobarCSV(0,1,url)
  const post = {
    kpi,
    t: "IPI Mundial",
    st: "CEP XXI",
    sd: "Este índice mide el precio relativo de los bienes y servicios de la economía argentina con respecto al de los de los principales 12 socios comerciales del país, en función del flujo de comercio de manufacturas.",
    c: "<p>El índice de Actividad Industrial Mundial del CEP XXI es un indicador económico que mide la evolución de la actividad industrial en el mundo. Este índice se basa en una metodología propia desarrollada por el Centro de Estudios para la Producción.</p><p>El índice se construye a partir de una combinación de datos de producción industrial y de comercio internacional. En primer lugar, se recopilan datos de producción industrial de varios países y regiones, incluyendo Estados Unidos, Europa, Asia y América Latina. Estos datos se ponderan en función del peso relativo de cada país o región en la producción industrial global.</p><p>En segundo lugar, se incorporan datos de comercio internacional para reflejar la demanda global de bienes industriales. Los datos de comercio se ponderan en función del valor de las exportaciones de bienes industriales de cada país.</p><p>El índice se presenta en términos de un índice base 100, que corresponde al promedio de la actividad industrial mundial en un período determinado. Los cambios en el índice reflejan el aumento o disminución de la actividad industrial global en relación con este promedio base.</p>",
    fd: "Scraped (XLS)",
    fdr: "https://www.bcra.gob.ar/Pdfs/PublicacionesEstadisticas/ITCRMSerie.xls",
    fu: "BCRA",
    fur: "https://www.bcra.gob.ar/Pdfs/PublicacionesEstadisticas/ITCRMSerie.xls",
    frec: parsers.detectDataType(payload), 
        fruc: parsers.detectAggregationFunction(payload),
    u: new Date().toLocaleDateString('en-CA').split('/').join('-'),  
    d: "Este índice mide el precio relativo de los bienes y servicios de la economía argentina con respecto al de los de los principales 12 socios comerciales del país, en función del flujo de comercio de manufacturas.",

    dimensions: [
      {
        
        label: "Estacionalizado",
        data: payload,
        color: "#2E78D250",
      },
      {
        
        label: "Desestacionalizado",
        data: await parsers.datosGobarCSV(0,2,url),
        
      },
]
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()

