module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "ipip"
  const kpidata = {
    url: 'https://estudioseconomicos.ec.gba.gov.ar/datos/nac/contnac-indice-de-produccion-industrial-pyme.xlsx',
    sheet: 0,
    date: 0,
    items: [{
      name: "ipip", id: 1
    }]
  }
  
  const payload = await parsers.genericXLS(kpidata)
  const post = {
    kpi,
  t: "IPIP",
  st: "Índice de Producción Industrial Pyme",
  sd: "El IPIP es un indicador de coyuntura que mide mensualmente la evolución de la facturación de la industria manufacturera PyME que desarrollan su actividad dentro del país y producen bienes seleccionados como representativos de la industria PyME.",
  c: "<p>El Índice de Producción Industrial Pyme (IPIP) es un indicador económico elaborado por la Confederación Argentina de la Mediana Empresa (CAME) que mide la evolución de la producción industrial en las pequeñas y medianas empresas (Pymes) de Argentina.</p><p>El IPIP se basa en una encuesta mensual realizada por CAME a un grupo de empresas Pymes que representan a diferentes sectores de la industria. En la encuesta se les consulta sobre su nivel de producción en el mes en curso y su nivel de producción en comparación con el mismo mes del año anterior.</p><p>A partir de las respuestas de las empresas encuestadas, se calcula un índice que refleja la evolución de la producción industrial de las Pymes. El índice se calcula utilizando una metodología de 'índice de difusión' que mide la proporción de empresas que han aumentado su producción en comparación con el mes anterior.</p><p>El índice se presenta en términos de un índice base 100, que corresponde al promedio de la producción industrial de las Pymes en un período determinado. Los cambios en el índice reflejan el aumento o disminución de la producción industrial de las Pymes en relación con este promedio base.</p>",
  fdr: "https://www.indec.gob.ar/ftp/cuadros/economia/metodologia_emae_ago_16.pdf",
  fd: "Scraped (XLS)",
  fdr: "https://estudioseconomicos.ec.gba.gov.ar/datos/nac/contnac-indice-de-actividad-economica-pyme.xlsx",
  fu: "CAME",
  fur: "https://www.redcame.org.ar/estadisticas-pyme/79/ndice-de-actividad-economica-pyme--ipip",
  frec: parsers.detectDataType(payload.ipip), 
  fruc: parsers.detectAggregationFunction(payload.ipip), 
  u: new Date().toLocaleDateString('en-CA').split('/').join('-'),
  d: "El IPIP es un indicador de coyuntura que mide mensualmente la evolución de la facturación de la industria manufacturera PyME que desarrollan su actividad dentro del país y producen bienes seleccionados como representativos de la industria PyME.",
  min: 0,
  max: 140,
  dimensions: [
      {
        
        label: "Desestacionalizado",
        data: payload.ipip,
        
        
        
      },
]
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()
