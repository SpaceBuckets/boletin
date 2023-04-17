
module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "ilcif"
 

  const kpidata = {
    url: 'https://www.utdt.edu/download.php?fname=_167726983915481000.xls',
    sheet: 0,
    date: 0,
    items: [
      {name: "ilcif", id: 1},
    ]
  }
  
  const payload = await parsers.genericXLS(kpidata)

  const post = {
    kpi,
    t: "ILCIF",
    st: "Índice Líder",
    sd: "El ILCIF está construido para resumir y revelar los puntos de giro en el nivel de actividad económica representada por el Estimador Mensual de Actividad Económica (EMAE) en una forma más clara y convincente que cada uno de sus componentes porque suaviza las volatilidades propias de cada uno de ellos.",
    c: "<p>El ILCIF está construido para resumir y revelar los puntos de giro en el nivel de actividad económica representada por el Estimador Mensual de Actividad Económica (EMAE) en una forma más clara y convincente que cada uno de sus componentes porque suaviza las volatilidades propias de cada uno de ellos. Los diez componentes del ILCIF son:  El Índice General de la Bolsa de Comercio (IGBC), deflactado por un índice de precios del consumidor.  El Merval Argentina (M.AR), deflactado por un índice de precios del consumidor.  El agregado monetario M1 (total), deflactado por un índice de precios del consumidor.  El precio FOB oficial de las habas de soja (USD/ton.).  Las ventas de autos a concesionarios.  La recaudación del Impuesto al Valor Agregado (IVA), deflactado por un índice de precios del consumidor.  El despacho de cemento al mercado interno.  Nuestro Índice de Confianza del Consumidor (ICC).  Índice de Producción Industrial (IPI-FIEL) para minerales no metálicos.  Índice de Producción Industrial (IPI-FIEL) para siderurgia. Para abordar el problema de los retrasos en los datos disponibles, los indicadores que componen el ILCIF que no están disponibles en el momento de la publicación se estiman utilizando imputación estadística. Se utiliza un modelo autorregresivo para estimar cada componente.</p>",
    fd: "Scraped (XLS)",
    fdr: "https://www.utdt.edu/download.php?fname=_167726983915481000.xls",
    fu: "UTDT",
    fur: "https://www.utdt.edu/ver_contenido.php?id_contenido=2593&id_item_menu=4988",
      frec: parsers.detectDataType(payload.ilcif), 
  fruc: parsers.detectAggregationFunction(payload.ilcif),    
  u: new Date().toLocaleDateString('en-CA').split('/').join('-'),

    d: "El IPC mide la variación de precios de los bienes y servicios representativos del gasto de consumo de los hogares residentes en la zona seleccionada en comparación con los precios vigentes en el año base.",
    dimensions: [
        {
          label: "ILCIF",
          data: payload.ilcif,
          
        },     
    ]
  }

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()

