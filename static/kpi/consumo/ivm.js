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

  var post = {
    kpi,
  t: "IVM",
  st: "Índice de Ventas Minoristas",
  sd: "El Índice de Ventas Minoristas (IVM) es un indicador de coyuntura que mide mensualmente la evolución de la facturación de los comercios minoristas PyMEs que desarrollan sus actividades dentro del país. Los establecimientos fueron seleccionados como representativos dadas nuestras estimaciones.",
  c: "<p>El Índice de Ventas Minoristas (IVM) es un indicador de coyuntura que mide mensualmente la evolución de la facturación de los comercios minoristas PyMEs que desarrollan sus actividades dentro del país. Los establecimientos fueron seleccionados como representativos dadas nuestras estimaciones.</p>",
  fd: "Scraped (XLS)",
  fdr: "https://estudioseconomicos.ec.gba.gov.ar/datos/nac/contnac-ventas-minoristas.xlsx",
  fu: "CAME",
  fur: "https://www.redcame.org.ar/estadisticas-pyme/78/ndice-de-ventas-minoristas",
  frec: "Mensual", 
  d: "El Índice de Ventas Minoristas (IVM) es un indicador de coyuntura que mide mensualmente la evolución de la facturación de los comercios minoristas PyMEs que desarrollan sus actividades dentro del país. Los establecimientos fueron seleccionados como representativos dadas nuestras estimaciones.",
  max: 200,
  min: 0,
  chart: {
    dates:payload.ivm,
    dimensions: [
      {
        
        label: "IVM",
        data: payload.ivm,
        color: "#2E78D2",
        
        
      },
]
}
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));


})()
