module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "poblacion"
   const payload = await parsers.parseWorldBank('https://api.worldbank.org/v2/country/arg/indicator/NY.GDP.PCAP.KD?format=json&per_page=5000')
  const post = {
    kpi,
  t: "Población",
  st: "Cantidad de Habitantes",
  sd: "Sirve de referencia para estimar la evolución del mercado de deuda emergente y permite estudiar el comportamiento de una canasta de bonos que conforman la deuda de los países emergentes.",
  c: "<p>El índice de población, también conocido como la población total, es una medida estadística que se utiliza para representar el número total de personas que viven en un país o región en un momento determinado.</p><p>La población de Argentina ha ido en aumento desde principios del siglo XX, con un crecimiento acelerado en la primera mitad del siglo XX que se desaceleró en las últimas décadas. Según el Instituto Nacional de Estadística y Censos (INDEC), la población total de Argentina en 2020 era de aproximadamente 45,3 millones de habitantes.</p><p>Este indicador es importante para entender la composición y evolución de la sociedad argentina, así como para la planificación de políticas públicas y la toma de decisiones en áreas como la educación, la salud, la vivienda y el empleo, entre otras.</p>",
  fd: "Datos BM",
  fdr: "https://api.worldbank.org/v2/country/arg/indicator/NY.GDP.PCAP.KD?format=json&per_page=5000",
  fu: "Banco Mundial",
  fur: "https://datos.bancomundial.org/indicator/NY.GDP.PCAP.KD?locations=AR",
    frec: parsers.detectDataType(payload), 
  fruc: parsers.detectAggregationFunction(payload),  
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",

  min: 0,
  //max: 6000000,
  dimensions: [
      {
        fillColor: "rgba(46,120,210,0.05)",
        label: "Poblacion Argentina",
        data: payload,
        color: "rgba(46,120,210,1)",
        
        
      },
]
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));


})()

