module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "tcrm"
  const kpidata = {
    url: 'https://www.bcra.gob.ar/Pdfs/PublicacionesEstadisticas/ITCRMSerie.xlsx',
    sheet: 0,
    date: 0,
    items: [
      {name:"itcrm", id:1},
      {name:"itcrb", id:2},
      {name:"itcrus",id:5},
      {name:"itcreur",id:13}
    ]
  }

  const payload = await parsers.genericXLS(kpidata)
   const post = {
    kpi,
  t: "TCRM",
  st: "Tipo de Cambio Real Multilateral",
  sd: "El índice TCRM (Tipo de Cambio Real Multilateral) es un indicador financiero que mide el valor del peso argentino en comparación con una canasta de monedas de otros países, ajustado por la inflación.",
  c: "<p>El índice TCRM (Tipo de Cambio Real Multilateral) es un indicador financiero que mide el valor del peso argentino en comparación con una canasta de monedas de otros países, ajustado por la inflación. El índice TCRM es elaborado y publicado mensualmente por el Banco Central de la República Argentina (BCRA).</p><p>El índice TCRM tiene como objetivo reflejar el valor real del peso argentino en el comercio internacional, teniendo en cuenta tanto el tipo de cambio nominal (es decir, el valor del peso en términos de otras monedas), como el nivel de precios y la inflación tanto en Argentina como en los países con los que se comercia. Para ello, el índice TCRM utiliza una canasta de monedas que representa los principales socios comerciales de Argentina.</p><p>El índice TCRM se calcula como una relación entre el tipo de cambio nominal del peso argentino y un índice de precios ponderados por el comercio exterior de Argentina con cada uno de los países de la canasta. En otras palabras, el índice TCRM ajusta el tipo de cambio nominal por la inflación de cada país, de manera que el valor resultante refleje el poder adquisitivo del peso argentino en el comercio internacional.</p>",
  fd: "Scraped (XLS)",
  fdr: "https://www.bcra.gob.ar/Pdfs/PublicacionesEstadisticas/ITCRMSerie.xls",
  fu: "BCRA",
  fur: "https://www.bcra.gob.ar/Pdfs/PublicacionesEstadisticas/ITCRMSerie.xls",
  frec: parsers.detectDataType(payload.itcrm), 
  fruc: parsers.detectAggregationFunction(payload.itcrm),
  u: new Date().toLocaleDateString('en-CA').split('/').join('-'),
  feat: true,

  d: "Este índice mide el precio relativo de los bienes y servicios de la economía argentina con respecto al de los de los principales 12 socios comerciales del país, en función del flujo de comercio de manufacturas.",
 

  dimensions: [
      {
        
        label: "TCRM",
        data: payload.itcrm,
        
        
        
      },
      {
        label: "TCRUS",
        data: payload.itcrus,
        color: "rgba(122, 73, 165,0.25)",
        
        
      },
      {
        
        label: "TRCB",
        data: payload.itcrb,
        color: "rgba(46,120,210,0.25)",
        
        
      },
      {
        
        label: "Zona Euro",
        data: payload.itcreur,
        color: "rgba(46,120,210,0.25)",
        
        
      },      
]
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()

