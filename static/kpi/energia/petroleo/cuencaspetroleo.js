module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "cuencaspetroleo"
  const kpidata = {
    url: 'http://datos.energia.gob.ar/dataset/c846e79c-026c-4040-897f-1ad3543b407c/resource/af8c50bb-fde0-43b7-98eb-7cd14daf586c/download/serie-histrica-de-produccin-de-petrleo-por-cuenca-y-sub-tipo-de-recurso-captulo-iv-.csv',
     date: 0,
    items: {
      austral: 1,
      golfo: 2,
      neuquina: 3,
      noroeste: 4,
      cuyana: 5,
      total: 6
    }
  }
  
  const payload = await parsers.datosGobarCSV(kpidata)


  
  var post = {
    kpi,
  t: "Producción por Cuenca",
  st: "En millones de m3",
  sd: "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  c: "<p>El indicador de Producción de Petróleo por Cuenca en Argentina es una estadística que muestra la cantidad de petróleo extraído de cada cuenca petrolera del país. Las cuencas petroleras son áreas geográficas donde se concentran grandes reservas de petróleo y gas natural. En Argentina, existen varias cuencas petroleras, siendo las más importantes la cuenca Neuquina (que incluye la formación de Vaca Muerta), la cuenca del Golfo San Jorge y la cuenca Cuyana.</p><p>La producción de petróleo en cada cuenca depende de varios factores, como la calidad de los yacimientos, la inversión en exploración y producción, la tecnología utilizada y las políticas gubernamentales. El petróleo extraído en cada cuenca se utiliza para diversos fines, como la producción de combustibles, la generación de energía eléctrica y la fabricación de productos petroquímicos.</p><p>El seguimiento de la producción de petróleo por cuenca es importante para evaluar el desempeño del sector petrolero en el país, identificar las principales áreas de producción y establecer políticas y estrategias para el desarrollo del sector. Además, la producción de petróleo por cuenca es un indicador clave para la balanza comercial y la economía en general, ya que el petróleo es uno de los principales productos de exportación de Argentina.</p>",
  fd: "datos.gob.ar",
  fdr: "https://datos.gob.ar/it/dataset/sspm-produccion-ventas-petroleo-derivados/archivo/sspm_363.3",
  fu: "MECON",
  fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
  frec: "Mensual", 
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",

  chart: {
    dates:payload.neuquina,
    dimensions: [
      {
        fillColor: "rgba(46,120,210,0.0)",
        label: "Neuquina",
        data: payload.neuquina,
        color: "#2E78D2",
        
        
      },
      {
        fillColor: "rgba(46,120,210,0.0)",
        label: "Austral",
        data: payload.austral,
        color: "#2E78D250",
        
        
      },
      {
        fillColor: "rgba(46,120,210,0.0)",
        label: "Golfo",
        data: payload.golfo,
        color: "#2E78D250",
        
        
      },
      {
        fillColor: "rgba(46,120,210,0.0)",
        label: "Noroeste",
        data: payload.noroeste,
        color: "#2E78D250",
        
        
      },    
      {
        fillColor: "rgba(46,120,210,0.0)",
        label: "Cuyana",
        data: payload.cuyana,
        color: "#2E78D250",
        
        
      },                               
]
}
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));


})()

