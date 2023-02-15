module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "poblacion"
   
  const payload = await parsers.parseWorldBank('https://api.worldbank.org/v2/country/arg/indicator/NY.GDP.PCAP.KD?format=json&per_page=5000')

  var post = {
    kpi,
  t: "Población",
  st: "Cantidad de Habitantes",
  sd: "Sirve de referencia para estimar la evolución del mercado de deuda emergente y permite estudiar el comportamiento de una canasta de bonos que conforman la deuda de los países emergentes.",
  c: "<p>En sociología, se refiere a un grupo de seres humanos o a toda la especie. La demografía es una ciencia social que implica el estudio estadístico de la población humana. Población, en un término más simple, es el número de personas en una ciudad o pueblo, región, país o mundo; la población generalmente está determinada por un proceso llamado censo, es decir, un proceso de recopilación, análisis, compilación y publicación de datos sobre la población y otras variables.</p>",
  fd: "Datos BM",
  fdr: "https://api.worldbank.org/v2/country/arg/indicator/NY.GDP.PCAP.KD?format=json&per_page=5000",
  fu: "Banco Mundial",
  fur: "https://datos.bancomundial.org/indicator/NY.GDP.PCAP.KD?locations=AR",
  frec: "Mensual", 
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",

  min: 0,
  //max: 6000000,
  chart: {
    dates:payload,
    dimensions: [
      {
        fillColor: "rgba(46,120,210,0.05)",
        label: "Poblacion Argentina",
        data: payload,
        color: "rgba(46,120,210,1)",
        
        
      },
]
}
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));


})()

