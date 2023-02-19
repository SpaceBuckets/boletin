module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "cuencasgas"
  const kpidata = {
    url: 'http://datos.energia.gob.ar/dataset/c846e79c-026c-4040-897f-1ad3543b407c/resource/a3244ddd-38bc-4800-a700-360b649d2f3a/download/serie-histrica-de-produccin-de-gas-natural-por-cuenca-y-sub-tipo-de-recurso-captulo-iv-.csv',
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
    c: "<p>El petróleo es una mezcla de compuestos orgánicos, principalmente hidrocarburos insolubles en agua. También es conocido como oro negro, petróleo crudo o simplemente crudo. Se produce en el interior de la Tierra, por transformación de la materia orgánica acumulada en sedimentos del pasado geológico​ y puede acumularse en trampas geológicas naturales, que se localizan a nivel mundial​ y de donde se extrae mediante la perforación de pozos.</p>",
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

