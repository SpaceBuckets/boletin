module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "ivm"
  const kpidata = {
    url: 'https://estudioseconomicos.ec.gba.gov.ar/datos/nac/contnac-ventas-minoristas.xlsx',
    sheet: 0,
    date: 0,
    items: [{
      name: "ivm", id: 1
    }]      
  }
  
  const payload = await parsers.genericXLS(kpidata)

  const post = {
    kpi,
  t: "IVM",
  st: "Índice de Ventas Minoristas",
  sd: "El Índice de Ventas Minoristas (IVM) es un indicador de coyuntura que mide mensualmente la evolución de la facturación de los comercios minoristas PyMEs que desarrollan sus actividades dentro del país. Los establecimientos fueron seleccionados como representativos dadas nuestras estimaciones.",
  c: "<p>El IVM (Índice de Ventas Minoristas) de CAME (Confederación Argentina de la Mediana Empresa) es un indicador que mide la evolución de las ventas minoristas en la Argentina. Este índice se calcula a partir de la información proporcionada por una red de comercios minoristas de todo el país que representan una muestra representativa del sector.</p><p>El IVM se construye a partir de una canasta de bienes y servicios que incluye alimentos, bebidas, productos de limpieza, perfumería, bazar, electrónica, indumentaria, calzado, joyería, librería, entre otros. El índice se calcula en base al volumen de ventas en pesos constantes (ajustadas por inflación) de la canasta de productos relevados.</p><p>El IVM se actualiza mensualmente y se utiliza como una medida de la evolución del consumo minorista en la Argentina. Este indicador es relevante para el análisis de la situación económica del país y de las tendencias en el comportamiento del consumidor.</p>",
  fd: "Scraped (XLS)",
  fdr: "https://estudioseconomicos.ec.gba.gov.ar/datos/nac/contnac-ventas-minoristas.xlsx",
  fu: "CAME",
  fur: "https://www.redcame.org.ar/estadisticas-pyme/78/ndice-de-ventas-minoristas",
    frec: parsers.detectDataType(payload.ivm), 
  fruc: parsers.detectAggregationFunction(payload.ivm),  
  u: new Date().toLocaleDateString('en-CA').split('/').join('-'),
  d: "El Índice de Ventas Minoristas (IVM) es un indicador de coyuntura que mide mensualmente la evolución de la facturación de los comercios minoristas PyMEs que desarrollan sus actividades dentro del país. Los establecimientos fueron seleccionados como representativos dadas nuestras estimaciones.",
  max: 200,
  min: 0,
  dimensions: [
      {
        
        label: "IVM",
        data: payload.ivm,
        
        
        
      },
    ] 
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()
